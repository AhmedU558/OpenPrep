"""Validate all five local SBOMs using the pinned, vendored official schema; no network resolution."""
import argparse
import hashlib
import json
import pathlib
import jsonschema
from referencing import Registry, Resource
root=pathlib.Path(__file__).resolve().parents[1]
folder=root/'docs/audit/sbom-schema'
for evidence in json.loads((folder/'provenance.json').read_text()):
 assert hashlib.sha256((root/evidence['path']).read_bytes()).hexdigest()==evidence['sha256'], 'Schema hash mismatch'
registry=Registry()
for path in folder.glob('*.schema.json'):
 data=json.loads(path.read_text())
 resource=Resource.from_contents(data)
 registry=registry.with_resource(data['$id'],resource)
schema=json.loads((folder/'bom-1.6.schema.json').read_text())
validator=jsonschema.Draft7Validator(schema,registry=registry)
parser=argparse.ArgumentParser();parser.add_argument('--directory',default='docs');args=parser.parse_args()
for scope in ['SOURCE','BROWSER','HOSTED','NATIVE','CONTAINER']:
 file=root/args.directory/f'SBOM_{scope}.json'
 validator.validate(json.loads(file.read_text()))
 print(f'{file.name}: schema PASS')
