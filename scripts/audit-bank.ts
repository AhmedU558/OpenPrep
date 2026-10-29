import 'dotenv/config';
import { mkdir, writeFile } from 'node:fs/promises';
import { db } from '../src/lib/db';

const phase = process.argv.includes('--after') ? 'after' : 'before';
try {
  const rows = await db.question.findMany({orderBy:{code:'asc'}, include:{exam:true,subject:true,system:true,topic:true,options:{orderBy:{position:'asc'}}}});
  const counts = (values: string[]) => Object.fromEntries([...new Set(values)].sort().map(v => [v,values.filter(x => x === v).length]));
  const report = {at:new Date().toISOString(),total:rows.length,available:rows.filter(q=>q.status==='PUBLISHED').length,
    byExam:counts(rows.map(q=>q.exam.name)),bySubject:counts(rows.map(q=>q.subject.name)),bySystem:counts(rows.map(q=>q.system.name)),
    byTopic:counts(rows.map(q=>`${q.subject.name} / ${q.topic?.name ?? '(none)'}`)),byDifficulty:counts(rows.map(q=>String(q.difficulty))),
    byObjective:counts(rows.map(q=>q.objective ?? '(missing)')),
    gaps:{missingTopic:rows.filter(q=>!q.topicId).map(q=>q.code),missingObjective:rows.filter(q=>!q.objective).map(q=>q.code),missingReferences:rows.filter(q=>!Array.isArray(q.references)||q.references.length===0).map(q=>q.code)},
    corpus:rows.map(q=>({code:q.code,exam:q.exam.name,subject:q.subject.name,topic:q.topic?.name,objective:q.objective,stem:q.stemMd,answer:q.options.filter(o=>o.isCorrect).map(o=>o.text).join('; ')}))};
  await mkdir('content/bank/expansion/reports',{recursive:true});
  await writeFile(`content/bank/expansion/reports/audit-${phase}.json`,JSON.stringify(report,null,2),{flag:phase==='before'?'wx':'w'});
  console.log(JSON.stringify({total:report.total,available:report.available,byExam:report.byExam,bySubject:report.bySubject,byDifficulty:report.byDifficulty,gaps:Object.fromEntries(Object.entries(report.gaps).map(([k,v])=>[k,v.length]))}));
} finally {await db.$disconnect();}
