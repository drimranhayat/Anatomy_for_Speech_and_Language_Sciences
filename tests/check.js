const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const path=require('node:path'),root=path.join(__dirname,'..'),read=f=>JSON.parse(fs.readFileSync(path.join(root,f),'utf8'));
const d=read('data.json'),essays=read('essays.json'),E=require('../engine');
assert.equal(d.title,'Anatomy for Speech and Language Sciences');assert.equal(d.lectures.length,6);assert.equal(d.questions.length,936);assert.equal(d.concepts.length,272);assert.equal(essays.length,6);
const ids=new Set(d.questions.map(q=>q.id)),concepts=new Set(d.concepts.map(c=>c.id));assert.equal(ids.size,936);
for(const q of d.questions){assert.equal(q.options.length,4);assert.equal(new Set(q.options).size,4);assert(q.answer>=0&&q.answer<4);assert(q.explanation.length>100);assert(q.sourceIds.length);if(q.conceptId)assert(concepts.has(q.conceptId));}
for(const l of d.lectures){const qs=d.questions.filter(q=>q.lecture===l.id);assert.equal(qs.length,l.count);for(const level of ['Easy','Moderate','Challenging'])assert(qs.some(q=>q.difficulty===level));assert.equal(d.concepts.filter(c=>c.lecture===l.id).length,l.concepts);}
for(const e of essays){assert(e.sections.length>=4);assert(e.sections.flatMap(s=>s.paragraphs).join(' ').split(/\s+/).length>=600);}
for(const size of [10,20,50,100])for(let n=0;n<=1200;n++){const p=E.pages(n,size);assert.equal(p.reduce((a,x)=>a+x.end-x.start,0),n);p.forEach((x,i)=>{assert(x.end-x.start<=size);assert.equal(x.start,i*size);});}
let r=E.record(null,d.questions[0],(d.questions[0].answer+1)%4);assert(r.needsReview);r=E.record(r,d.questions[0],d.questions[0].answer);assert(!r.needsReview&&r.everWrong&&r.attempts===2);
const ctx={window:{}};vm.createContext(ctx);vm.runInContext(fs.readFileSync(path.join(root,'data.js'),'utf8'),ctx);assert.deepEqual(JSON.parse(JSON.stringify(ctx.window.COURSE)),d);
const positions=[0,0,0,0];d.questions.forEach(q=>positions[q.answer]++);assert(positions.every(n=>n>150));
assert.throws(()=>E.validateBackup({version:1,answers:{'LM1-001':{selected:0,attempts:1}}},d.questions),/different course/);
const sources=new Set(d.sources.map(s=>s.id));for(const q of d.questions)for(const id of q.sourceIds)assert(sources.has(id));
const ranks={Easy:0,Moderate:1,Challenging:2};for(const l of d.lectures){const qs=d.questions.filter(q=>q.lecture===l.id);assert(qs.every((q,i)=>!i||ranks[qs[i-1].difficulty]<=ranks[q.difficulty]));}
vm.runInContext(fs.readFileSync(path.join(root,'essays.js'),'utf8'),ctx);assert.deepEqual(JSON.parse(JSON.stringify(ctx.window.LECTURE_ESSAYS)),essays);
vm.runInContext(fs.readFileSync(path.join(root,'visuals.js'),'utf8'),ctx);for(const c of d.concepts){const icon=ctx.window.StudyVisuals.icon(c.term,c.lecture);assert(icon.includes('<svg'));assert(!icon.includes('undefined'));}
console.log('PASS: 936 unique MCQs, four unique options, correct-index integrity, 272 linked concepts, six module counts, difficulty coverage, six substantial essays, data parity, progress logic, pagination and shuffled answer distribution:',positions);

const audit=read('audit.json');assert.equal(audit.length,167);for(const [i,n] of [39,36,29,22,20,21].entries()){const rows=audit.filter(r=>r.lecture===i+1);assert.equal(rows.length,n);assert.equal(new Set(rows.map(r=>r.slide)).size,n);}for(const row of audit){for(const id of row.conceptIds)assert(concepts.has(id));for(const id of row.questionIds)assert(ids.has(id));}
for(const c of d.concepts){assert(c.example.length>30);assert(c.exampleReason.length>30);assert(c.pages.length);assert(concepts.has(c.compareWith));assert(ids.has(c.firstQuestionId));assert(c.modelAnswer.length>100);}
assert.equal(d.questions.filter(q=>q.examEligible).length,120);assert(!d.questions.some(q=>q.type==='Statement evaluation'));for(const q of d.questions){assert.equal(q.optionExplanations.length,4);assert(q.optionExplanations.every(x=>x.length>30));if(q.examEligible){assert(q.relatedConceptIds.length);q.relatedConceptIds.forEach(id=>assert(concepts.has(id)));}}
for(const size of [30,60,120]){const chosen=E.makeExam(d.questions,size);assert.equal(chosen.length,size);assert.equal(new Set(chosen).size,size);for(let i=1;i<=6;i++)assert.equal(chosen.filter(id=>d.questions.find(q=>q.id===id).lecture===i).length,size/6);const draft={version:1,ids:chosen,orders:Object.fromEntries(chosen.map(id=>[id,[2,0,3,1]])),selections:{},submitted:false};assert.equal(E.validateExam(draft,d.questions).ids.length,size);assert.throws(()=>E.validateExam({...draft,ids:Array(size).fill(chosen[0])},d.questions));}
const tables=read('tables.json');assert.equal(tables.length,14);for(const t of tables)for(const row of t.rows)assert.equal(row.length,t.columns.length);for(const r of audit){assert(fs.existsSync(path.join(root,r.image)));if(r.status==='Taught and linked')assert(r.conceptIds.length);}
console.log('PASS: all 167 slide routes, 272 comparative teaching entries, option rationales, 120 exam cases, balanced mock selection, draft validation and removed-template check.');
