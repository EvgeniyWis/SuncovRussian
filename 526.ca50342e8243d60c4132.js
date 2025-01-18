"use strict";(self.webpackChunksuncov_russian=self.webpackChunksuncov_russian||[]).push([[526],{526:function(e,r,t){t.r(r),t.d(r,{TrainerPage:function(){return _}});var n={};t.r(n),t.d(n,{TrainerWord:function(){return k},TrainerWord__default:function(){return v},TrainerWord__invalid:function(){return C}});var i=t(990),s="xikJpYWM",o=t(411),a=t(540),d=t(468),c=t(848);const l=e=>{let{children:r,reducers:t,removeAfterUnmount:n=!0}=e;const i=(0,d.Pj)(),s=i.reducerManager.getMountedReducers();return(0,a.useEffect)((()=>(Object.entries(t).forEach((e=>{let[r,t]=e;s[r]||i.reducerManager.add(r,t)})),()=>{n&&Object.entries(t).forEach((e=>{let[r]=e;i.reducerManager.remove(r)}))})),[s,t,n,i.reducerManager]),(0,c.jsx)(c.Fragment,{children:r})};l.displayName="DynamicModuleLoader";var u=t(670),m=t(519),h=t(337),y=t(491);const T=e=>{const{setWords:r}=(0,y.MR)();return{initializeWords:(0,a.useCallback)((()=>{const t=JSON.parse(JSON.stringify(e));for(const e of t)e.probability=1,e.uncorrectTimes=0,e.consecutivelyTimes=0,e.inProgress=!1;r(t)}),[r,e])}};var p=t(800);const W=(e,r,t)=>{const n=(0,p.n)(),i=(0,a.useMemo)((()=>n.find((r=>r.id===e))),[e,n]);return{updateRandomWord:(0,a.useCallback)((i=>{let s;s=i?i.filter((r=>r.id!==e)):n.filter((r=>r.id!==e));const o=[!0,!1][Math.floor(2*Math.random())];if(r(o),0===s.length)return;const a=s.reduce(((e,r)=>e+(r.probability||1)),0)*Math.random();for(let e=0,r=0;;e++)if(r+=s[e].probability||1,r>a)return void t(s[e].id)}),[e,t,r,n]),randomWord:i}};var f=t(856),w=t(672),b="eYvjcb7B",x="YciTqmuT";const j=["ударения","cловарные слова","наречия","н/нн","морфологические нормы"],g=(0,a.memo)((e=>{let{updateRandomWord:r,words:t}=e;const n=(0,p.n)(),{setWords:s}=(0,y.MR)(),{totalTime:o,setTotalTime:d,isErrorWork:l,setIsErrorWork:u}=(0,a.useContext)(h.U),m=(0,a.useMemo)((()=>Math.round(o/6e4)),[o]),W=(0,a.useMemo)((()=>Math.round(o/1e3%60)),[o]),f=(0,a.useMemo)((()=>n.filter((e=>e.uncorrectTimes>0)).sort(((e,r)=>r.uncorrectTimes-e.uncorrectTimes))),[n]),w=(0,a.useCallback)((()=>{u(!0);const e=f.map((e=>({...e,probability:1,uncorrectTimes:0,consecutivelyTimes:0,inProgress:!1})));s(e),d(0),r(e)}),[u,d,s,r,f]),{initializeWords:g}=T(t),k=(0,a.useCallback)((()=>{g(),d(0),u(!1)}),[g,u,d]);return(0,c.jsxs)(i.so,{justify:"between",direction:"column",width:"100",maxHeight:!0,children:[(0,c.jsxs)("span",{className:x,children:["Общее время:"," ",`${m<10?"0":""}${m}`,":",`${W<10?"0":""}${W}`]}),f.length>0?(0,c.jsxs)(i.so,{maxHeight:!0,justify:"between",direction:"column",children:[(0,c.jsxs)(i.so,{direction:"column",children:[(0,c.jsx)("span",{className:x,children:"Ошибки:"}),(0,c.jsx)(i.so,{direction:"column",gap:"3",width:"100",children:f.map((e=>(0,c.jsxs)("span",{style:{fontSize:24-(f.length/2>=21?21:f.length/2)},className:"ZOFlga02",children:[j.includes(e.trainerType)&&(0,c.jsxs)(c.Fragment,{children:[e.valid," -"," ",e.uncorrectTimes," ",[2,3,4].includes(e.uncorrectTimes)?"раза":"раз"]}),"виды союзов"===e.trainerType&&(0,c.jsxs)(c.Fragment,{children:[e.word," -"," ",e.uncorrectTimes," ",[2,3,4].includes(e.uncorrectTimes)?"раза":"раз"," ","(Правильно: ",e.unionType,")"]})]},e.id)))})]}),!l&&(0,c.jsx)("button",{className:b,onClick:w,type:"button",children:"Работа над ошибками"})]}):(0,c.jsx)("button",{className:b,onClick:k,type:"button",children:"Повторить"})]})}));g.displayName="TrainerTotalResult";var k="rxqnQXoT",v="RcYBccp8",C="ywWLKwMM";const N=(0,a.memo)((e=>{let{className:r,style:t,dataTestId:s,onClick:o,children:a,type:d="default"}=e;return(0,c.jsx)(i.so,{justify:"center","data-testid":s,width:"100",onClick:o,className:`TrainerWord ${k} ${r} ${n[`TrainerWord__${d}`]}`,style:t,children:a})}));N.displayName="TrainerWord";const S=(0,a.memo)((e=>{let{randomWord:r,randomWordsIsReverse:t,wordOnFail:n,wordOnSuccess:s}=e;const d=(0,p.n)(),{isIncorrect:l,isErrorWork:u}=(0,a.useContext)(h.U);return(0,c.jsxs)(i.so,{justify:"center",direction:o.L.matches?t?"columnReverse":"column":t?"rowReverse":"row",width:"100",children:[(0,c.jsx)(N,{dataTestId:"PrimaryTrainerWords__valid",onClick:()=>s(d,u,r.id),style:{borderRightWidth:o.L.matches||t||l?3:0,borderBottomWidth:o.L.matches?t||l?3:0:3,fontSize:r.valid.length>=10?26:36},children:r.valid}),(0,c.jsx)(N,{dataTestId:"PrimaryTrainerWords__invalid",onClick:()=>n(d,u,r.id),type:l?"invalid":"default",style:{borderRightWidth:o.L.matches?3:t?0:3,borderBottomWidth:o.L.matches&&t?0:3,fontSize:r.valid.length>=10?26:36},children:r.invalid})]})}));S.displayName="PrimaryTrainerWords";var I=t(364);const R=(0,a.memo)((e=>{let{randomWord:r,wordOnSuccess:t,wordOnFail:n}=e;const s=(0,p.n)(),{isIncorrect:d,isErrorWork:l}=(0,a.useContext)(h.U);return(0,c.jsxs)(i.so,{width:"100",direction:"column",gap:"10",justify:"center",children:[(0,c.jsx)("span",{className:"c109SKmd","data-testid":"UnionsTrainerWords__word",children:r.word}),(0,c.jsx)(i.so,{justify:"center",direction:o.L.matches?"column":"row",width:"100",children:I.F.map(((e,i)=>(0,c.jsx)(N,{dataTestId:`UnionsTrainerWords__${e}`,onClick:e===r.unionType?()=>t(s,l,r.id):()=>n(s,l,r.id),type:d&&e!==r.unionType?"invalid":"default",style:0===i?{borderRightWidth:o.L.matches?3:0,borderBottomWidth:o.L.matches?0:3}:{},children:e},e)))})]})}));R.displayName="UnionsTrainerWords";const M=(0,a.memo)((e=>{let{words:r}=e;const[t,n]=(0,a.useState)(null),[d,l]=(0,a.useState)(!1),{randomWord:b,updateRandomWord:x}=W(t,l,n),{totalTime:k,setIsIncorrect:v,isIncorrect:C,isErrorWork:N,setIsErrorWork:I,setTotalTime:M}=(0,a.useContext)(h.U);(0,a.useEffect)((()=>{b||n(0)}),[b,t]);const{wordOnFail:_,wordOnSuccess:E,showNewWord:F,waitRepeatedClickInFail:O}=((e,r,t,n)=>{const{changeWordProbability:i,changeWordUncorrectTimes:s,changeWordConsecutivelyTimes:o,changeWordInProgressStatus:d}=(0,y.MR)(),[c,l]=(0,a.useState)(!1),{updateRandomWord:u}=W(e,r,t),m=(0,a.useCallback)(((e,r,t)=>{l(!1),n(!1);const a=e.find((e=>e.id===t));a&&(r||(i({probability:.2,id:a.id}),s({id:a.id,uncorrectTimes:a.uncorrectTimes+1})),o({id:a.id,consecutivelyTimes:0}),d({id:a.id,inProgress:!1}),u(),document.querySelector("main").style.pointerEvents="all",document.onclick=null)}),[o,d,i,s,n,l,u]),h=(0,a.useCallback)(((e,r,t)=>{if(c)return;new Audio(`/${"MISSING_ENV_VAR".PUBLIC_URL}/sounds/FailSound.mp3`).play(),n(!0),l(!0);const i=document.querySelector("main"),s=setTimeout((()=>{i.style.pointerEvents="none",document.onclick=()=>m(e,r,t),clearTimeout(s)}),0)}),[n,l,m,c]),T=(0,a.useCallback)(((e,r,t)=>{if(c)return;const n=e.find((e=>e.id===t));if(n){if(r){const e=n.consecutivelyTimes+1;o({id:n.id,consecutivelyTimes:e}),3===e&&(d({id:n.id,inProgress:!0}),i({probability:.05,id:n.id}))}else.2===n.probability?i({id:n.id,probability:.1}):.1===n.probability?i({id:n.id,probability:.05}):(i({id:n.id,probability:.01}),d({id:n.id,inProgress:!0}));u()}}),[o,d,i,u,c]);return{showNewWord:m,wordOnSuccess:T,wordOnFail:h,waitRepeatedClickInFail:c}})(t,l,n,v),P=(0,p.n)();(0,a.useEffect)((()=>{P.length&&null===t&&x()}),[t,P,x]),(0,a.useEffect)((()=>(document.onkeydown=e=>((e,r)=>{if(k)return;O&&C&&F(r,N,t);const n=document.querySelectorAll(".TrainerWord"),i=e=>{"виды союзов"!==r[0].trainerType&&d?n[0===e?1:0].click():n[e].click()};o.L.matches?"ArrowUp"===e.key?i(0):"ArrowDown"===e.key&&i(1):"ArrowLeft"===e.key?i(0):"ArrowRight"===e.key&&i(1)})(e,P),()=>{document.onkeydown=null})),[N,C,t,d,F,P,k,O,_,E]);const{initializeWords:L}=T(r);return(0,a.useEffect)((()=>{const e=setTimeout((()=>{v(!1),I(!1),M(0),L(),clearTimeout(e)}),0)}),[L,I,v,M]),(0,c.jsx)(m.YW,{className:"JNyDWZu7",children:P.length>0&&(0,c.jsx)(c.Fragment,{children:k?(0,c.jsx)(g,{words:r,updateRandomWord:x}):(0,c.jsxs)(c.Fragment,{children:[j.includes(P[0].trainerType)&&(0,c.jsx)(u.C,{text:"Выбирайте ответ, а система будет предлагать новые слова или\n                    те, в которых были допущены ошибки. Когда вы перестанете их\n                    допускать, шкала полностью заполнится. Заполните шкалу\n                    несколько раз, сделайте работу над ошибками - и вы готовы.",textClassName:s}),"виды союзов"===P[0].trainerType&&(0,c.jsx)(u.C,{text:"В этом тренажере под подчинительным союзом понимается любое\n                    средство подчинительной связи, т.е. союз, союзное слово,\n                    частица",textClassName:s}),C&&(0,c.jsx)(i.so,{className:"Ts9_k9h3","data-testid":"Trainer__uncorrect",justify:"center",children:"Неверно"}),b&&(0,c.jsxs)(c.Fragment,{children:[j.includes(P[0].trainerType)&&(0,c.jsx)(S,{randomWord:b,randomWordsIsReverse:d,wordOnFail:_,wordOnSuccess:E}),"виды союзов"===r[0].trainerType&&(0,c.jsx)(R,{randomWord:b,wordOnSuccess:E,wordOnFail:_})]}),(0,c.jsx)(w.i,{}),(0,c.jsx)(f.W,{})]})})})}));M.displayName="TrainerInner";const _=(0,a.memo)((e=>{let{words:r}=e;const[t,n]=(0,a.useState)(0),[i,s]=(0,a.useState)(!1),[o,d]=(0,a.useState)(!1);return(0,c.jsx)(h.U.Provider,{value:{totalTime:t,setTotalTime:n,isIncorrect:i,setIsIncorrect:s,isErrorWork:o,setIsErrorWork:d},children:(0,c.jsx)(l,{removeAfterUnmount:!1,reducers:{Trainer:y.a3},children:(0,c.jsx)(M,{words:r})})})}));_.displayName="TrainerPage"}}]);