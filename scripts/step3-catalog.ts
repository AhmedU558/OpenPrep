import { readdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import type { Step3Spec } from '../content/step3/types';

export async function loadStep3Batches(){
  const names=(await readdir('content/step3')).filter(name=>/^batch-\d{2}\.ts$/.test(name)).sort();
  const batches:{id:string;specs:Step3Spec[]}[]=[];
  for(const name of names){const {specs}=await import(pathToFileURL(resolve('content/step3',name)).href) as {specs:Step3Spec[]};batches.push({id:name.slice(0,-3),specs});}
  return batches;
}
