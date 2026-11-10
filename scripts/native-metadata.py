"""Static Mach-O/Wasm metadata inspection; never load or execute an artifact."""
import struct

def cstring(body,start,end):
 if not 0<=start<end<=len(body):raise ValueError('String outside binary')
 stop=body.find(b'\0',start,end)
 if stop<0:raise ValueError('Unterminated binary string')
 return body[start:stop].decode('utf-8')

def macho(body):
 if body[:4]==b'\xca\xfe\xba\xbe':
  count=struct.unpack_from('>I',body,4)[0]
  if count>64:raise ValueError('Too many fat architectures')
  slices=[]
  for i in range(count):
   _,_,offset,size,_=struct.unpack_from('>IIIII',body,8+i*20)
   if offset+size>len(body):raise ValueError('Fat slice out of bounds')
   slices.append(macho(body[offset:offset+size]))
  return {'format':'fat Mach-O','slices':slices}
 magic=body[:4]
 if magic not in [b'\xcf\xfa\xed\xfe',b'\xfe\xed\xfa\xcf',b'\xce\xfa\xed\xfe',b'\xfe\xed\xfa\xce']:raise ValueError('Unsupported Mach-O magic')
 endian='<' if magic in [b'\xcf\xfa\xed\xfe',b'\xce\xfa\xed\xfe'] else '>'
 count,size=struct.unpack_from(endian+'II',body,16);offset=32 if magic in [b'\xcf\xfa\xed\xfe',b'\xfe\xed\xfa\xcf'] else 28
 end=offset+size
 if end>len(body) or count>100000:raise ValueError('Load commands exceed binary')
 libs=[];paths=[]
 for _ in range(count):
  command,length=struct.unpack_from(endian+'II',body,offset)
  if length<8 or offset+length>end:raise ValueError('Invalid load command size')
  kind=command&0x7fffffff
  if kind in [0xc,0x18,0x1f,0x20,0x23,0x1c]:
   nameoffset=struct.unpack_from(endian+'I',body,offset+8)[0]
   name=cstring(body,offset+nameoffset,offset+length)
   (paths if kind==0x1c else libs).append(name)
  offset+=length
 if offset!=end:raise ValueError('Load command size mismatch')
 return {'format':'Mach-O','dynamicDependencies':libs,'rpaths':paths,'staticComposition':'NOT_IDENTIFIED_BY_LOAD_COMMANDS'}

class Reader:
 def __init__(self,body):self.body=body;self.pos=0
 def take(self,n):
  if n<0 or self.pos+n>len(self.body):raise ValueError('Truncated Wasm')
  x=self.body[self.pos:self.pos+n];self.pos+=n;return x
 def byte(self):return self.take(1)[0]
 def uint(self,bits=32):
  value=0
  for i in range((bits+6)//7):
   b=self.byte();value|=(b&127)<<(i*7)
   if value>=1<<bits:raise ValueError('Wasm integer overflow')
   if not b&128:return value
  raise ValueError('Oversized Wasm integer')
 def string(self):return self.take(self.uint()).decode('utf-8')
 def limits(self):
  flags=self.uint()
  if flags&~7:raise ValueError('Unsupported limits flags')
  self.uint(64 if flags&4 else 32)
  if flags&1:self.uint(64 if flags&4 else 32)

def wasm(body):
 r=Reader(body)
 if r.take(8)!=b'\0asm\x01\0\0\0':raise ValueError('Unsupported Wasm module')
 imports=[];needed=[];custom=[]
 while r.pos<len(body):
  section=r.byte();part=Reader(r.take(r.uint()))
  if section==2:
   count=part.uint()
   if count>100000:raise ValueError('Too many Wasm imports')
   for _ in range(count):
    module,name,kind=part.string(),part.string(),part.byte();imports.append({'module':module,'name':name,'kind':kind})
    if kind==0:part.uint()
    elif kind==1:
     if part.byte() not in [0x70,0x6f]:raise ValueError('Unsupported table reference type')
     part.limits()
    elif kind==2:part.limits()
    elif kind==3:part.take(2)
    elif kind==4:part.byte();part.uint()
    else:raise ValueError('Unknown Wasm import kind')
   if part.pos!=len(part.body):raise ValueError('Import section trailing bytes')
  elif section==0:
   name=part.string();custom.append(name)
   if name=='dylink.0':
    while part.pos<len(part.body):
     kind=part.byte();sub=Reader(part.take(part.uint()))
     if kind==2:
      count=sub.uint()
      if count>100000:raise ValueError('Too many Wasm needed libraries')
      needed.extend(sub.string() for _ in range(count))
      if sub.pos!=len(sub.body):raise ValueError('Invalid dylink needed section')
 return {'format':'WebAssembly','imports':imports,'neededLibraries':needed,'customSections':custom,'staticComposition':'NOT_IDENTIFIED_BY_IMPORTS'}

def elf32(body):
 if body[:4]!=b'\x7fELF' or body[4]!=1 or body[5] not in [1,2]:raise ValueError('Unsupported ELF32')
 endian='<' if body[5]==1 else '>'
 phoff=struct.unpack_from(endian+'I',body,28)[0];size,count=struct.unpack_from(endian+'HH',body,42)
 if size<32 or count>65535 or phoff+size*count>len(body):raise ValueError('Invalid ELF32 program headers')
 segments=[struct.unpack_from(endian+'8I',body,phoff+i*size) for i in range(count)]
 dynamic=next((p for p in segments if p[0]==2),None)
 if dynamic is None:return {'format':'ELF32','dynamicDependencies':[],'staticComposition':'NOT_IDENTIFIED'}
 if dynamic[1]+dynamic[4]>len(body):raise ValueError('ELF32 dynamic segment outside file')
 entries=[]
 for offset in range(dynamic[1],dynamic[1]+dynamic[4],8):
  tag,value=struct.unpack_from(endian+'iI',body,offset)
  if tag==0:break
  entries.append((tag,value))
 needed=[v for t,v in entries if t==1]
 if not needed:return {'format':'ELF32','dynamicDependencies':[],'staticComposition':'NOT_IDENTIFIED'}
 address=next((v for t,v in entries if t==5),None);stringsize=next((v for t,v in entries if t==10),None)
 if address is None or stringsize is None:raise ValueError('ELF32 string table unavailable')
 segment=next((p for p in segments if p[0]==1 and p[2]<=address<p[2]+p[4]),None)
 if segment is None:raise ValueError('ELF32 string table not mapped')
 base=segment[1]+address-segment[2]
 return {'format':'ELF32','dynamicDependencies':[cstring(body,base+i,base+stringsize) for i in needed],'staticComposition':'NOT_IDENTIFIED'}
