"use strict";(self.webpackChunksuncov_russian=self.webpackChunksuncov_russian||[]).push([[616],{2411:function(e,r,n){n.d(r,{L:function(){return t},v:function(){return i}}),window.matchMedia=window.matchMedia||function(){return{matches:!1,addListener:function(){},removeListener:function(){}}};const t=window.matchMedia("(max-width: 1000px)"),i=window.matchMedia("(max-width: 600px)")},7660:function(e,r,n){n.d(r,{T:function(){return t}});const t=e=>{new Audio(`/SuncovRussian/sounds/${e}.mp3`).play()}},3616:function(e,r,n){n.r(r),n.d(r,{TrainerPage:function(){return E}});var t={};n.r(t),n.d(t,{TrainerWord:function(){return j},TrainerWord__default:function(){return b},TrainerWord__invalid:function(){return v}});var i=n(2990),o="xikJpYWM",s=n(2411),d=n(6540),c=n(1468),a=n(4848);const l=e=>{let{children:r,reducers:n,removeAfterUnmount:t=!0}=e;const i=(0,c.Pj)(),o=i.reducerManager.getMountedReducers();return(0,d.useEffect)((()=>(Object.entries(n).forEach((e=>{let[r,n]=e;o[r]||i.reducerManager.add(r,n)})),()=>{t&&Object.entries(n).forEach((e=>{let[r]=e;i.reducerManager.remove(r)}))})),[o,n,t,i.reducerManager]),(0,a.jsx)(a.Fragment,{children:r})};l.displayName="DynamicModuleLoader";var u=n(289),m=n(3519),h=n(5337),y=n(3800),f=n(6491),T="XVOH8ddq";const p=["ударения","cловарные слова","наречия","н/нн","морфологические нормы","пре-при"],w=e=>{const{setWords:r}=(0,f.MR)();return{initializeWords:(0,d.useCallback)((()=>{const n=JSON.parse(JSON.stringify(e));for(const e of n)e.probability=1,e.uncorrectTimes=0,e.consecutivelyTimes=0,e.inProgress=!1;r(n)}),[r,e])}};var x=n(1118);const W=(0,d.memo)((e=>{let{updateRandomWord:r,words:n}=e;const t=(0,y.n)(),{setWords:o}=(0,f.MR)(),{totalTime:s,setTotalTime:c,isErrorWork:l,setIsErrorWork:u}=(0,d.useContext)(h.U),m=(0,d.useMemo)((()=>Math.round(s/6e4)),[s]),W=(0,d.useMemo)((()=>Math.round(s/1e3%60)),[s]),j=(0,d.useMemo)((()=>t.filter((e=>e.uncorrectTimes>0)).sort(((e,r)=>r.uncorrectTimes-e.uncorrectTimes))),[t]),b=(0,d.useCallback)((()=>{u(!0);const e=j.map((e=>({...e,probability:1,uncorrectTimes:0,consecutivelyTimes:0,inProgress:!1})));o(e),c(0),r(e)}),[u,c,o,r,j]),{initializeWords:v}=w(n),g=(0,d.useCallback)((()=>{v(),c(0),u(!1)}),[v,u,c]);return(0,a.jsxs)(i.so,{justify:"between",direction:"column",width:"100",maxHeight:!0,children:[(0,a.jsxs)("span",{className:T,children:["Общее время:"," ",`${m<10?"0":""}${m}`,":",`${W<10?"0":""}${W}`]}),j.length>0?(0,a.jsxs)(i.so,{maxHeight:!0,justify:"between",direction:"column",children:[(0,a.jsxs)(i.so,{direction:"column",children:[(0,a.jsx)("span",{className:T,children:"Ошибки:"}),(0,a.jsx)(i.so,{direction:"column",gap:"3",width:"100",children:j.map((e=>(0,a.jsxs)("span",{style:{fontSize:24-(j.length/2>=21?21:j.length/2)},className:"JCvfyDc1",children:[p.includes(e.trainerType)&&(0,a.jsxs)(a.Fragment,{children:[e.valid," -"," ",e.uncorrectTimes," ",[2,3,4].includes(e.uncorrectTimes)?"раза":"раз"]}),"виды союзов"===e.trainerType&&(0,a.jsxs)(a.Fragment,{children:[e.word," -"," ",e.uncorrectTimes," ",[2,3,4].includes(e.uncorrectTimes)?"раза":"раз"," ","(Правильно: ",e.unionType,")"]})]},e.id)))})]}),!l&&(0,a.jsx)(x.$,{onClick:b,type:"button",children:"Работа над ошибками"})]}):(0,a.jsx)(x.$,{onClick:g,type:"button",children:"Повторить"})]})}));W.displayName="TrainerTotalResult";var j="rxqnQXoT",b="RcYBccp8",v="ywWLKwMM";const g=(0,d.memo)((e=>{let{className:r,style:n,dataTestId:o,onClick:s,children:d,type:c="default"}=e;return(0,a.jsx)(i.so,{justify:"center","data-testid":o,width:"100",onClick:()=>{const e=document.querySelectorAll(".TrainerWord");e.forEach((e=>{e.style.transitionDuration="0ms"}));const r=setTimeout((()=>{clearTimeout(r),e.forEach((e=>{e.style.transitionDuration="var(--transition-duration-default)"}))}),100);s&&s()},className:`TrainerWord ${j} ${r} ${t[`TrainerWord__${c}`]}`,style:n,children:d})}));g.displayName="TrainerWord";var k=n(1364);const C=(0,d.memo)((e=>{let{randomWord:r,wordOnSuccess:n,wordOnFail:t}=e;const o=(0,y.n)(),{isIncorrect:c,isErrorWork:l}=(0,d.useContext)(h.U);return(0,a.jsxs)(i.so,{width:"100",direction:"column",gap:"10",justify:"center",children:[(0,a.jsx)("span",{className:"hRRLbvjX","data-testid":"UnionsTrainerWords__word",children:r.word}),(0,a.jsx)(i.so,{justify:"center",direction:s.L.matches?"column":"row",width:"100",children:k.F.map(((e,i)=>(0,a.jsx)(g,{dataTestId:`UnionsTrainerWords__${e}`,onClick:e===r.unionType?()=>n(o,l,r.id):()=>t(o,l,r.id),type:c&&e!==r.unionType?"invalid":"default",style:0===i?{borderRightWidth:s.L.matches?3:0,borderBottomWidth:s.L.matches?0:3}:{},children:e},e)))})]})}));C.displayName="UnionsTrainerWords";const M=(e,r,n)=>{const t=(0,y.n)(),i=(0,d.useMemo)((()=>t.find((r=>r.id===e))),[e,t]);return{updateRandomWord:(0,d.useCallback)((i=>{let o;o=i?i.filter((r=>r.id!==e)):t.filter((r=>r.id!==e));const s=[!0,!1][Math.floor(2*Math.random())];if(r(s),0===o.length)return;const d=o.reduce(((e,r)=>e+(r.probability||1)),0)*Math.random();for(let e=0,r=0;;e++)if(r+=o[e].probability||1,r>d)return void n(o[e].id)}),[e,n,r,t]),randomWord:i}};var N=n(7660);const R=(0,d.memo)((e=>{let{randomWord:r,randomWordsIsReverse:n,wordOnFail:t,wordOnSuccess:o}=e;const c=(0,y.n)(),{isIncorrect:l,isErrorWork:u}=(0,d.useContext)(h.U),m=e=>(0,a.jsx)(a.Fragment,{children:["cловарные слова","пре-при"].includes(r.trainerType)?(0,a.jsx)(i.so,{children:e.split("").map(((e,n)=>(0,a.jsx)(a.Fragment,{children:" "===e?(0,a.jsx)("span",{style:{width:7}}):(0,a.jsx)("span",{style:{fontWeight:r.differenceIndexes&&r.differenceIndexes.includes(n+1)?"bold":"normal"},children:e},n+e)})))}):e});return(0,a.jsxs)(i.so,{justify:"center",direction:s.L.matches?n?"columnReverse":"column":n?"rowReverse":"row",width:"100",children:[(0,a.jsx)(g,{dataTestId:"PrimaryTrainerWords__valid",onClick:()=>o(c,u,r.id),style:{borderRightWidth:s.L.matches||n||l?3:0,borderBottomWidth:s.L.matches?n||l?3:0:3,fontSize:r.valid.length>=10?20:36},children:m(r.valid)}),(0,a.jsx)(g,{dataTestId:"PrimaryTrainerWords__invalid",onClick:()=>t(c,u,r.id),type:l?"invalid":"default",style:{borderRightWidth:s.L.matches?3:n?0:3,borderBottomWidth:s.L.matches&&n?0:3,fontSize:r.valid.length>=10?20:36},children:m(r.invalid)})]})}));R.displayName="PrimaryTrainerWords";var S=n(2980),_=n(9857);const I=(0,d.memo)((e=>{let{words:r}=e;const[n,t]=(0,d.useState)(null),[c,l]=(0,d.useState)(!1),{randomWord:T,updateRandomWord:x}=M(n,l,t),{totalTime:j,setIsIncorrect:b,isIncorrect:v,isErrorWork:g,setIsErrorWork:k,setTotalTime:I}=(0,d.useContext)(h.U);(0,d.useEffect)((()=>{T||t(0)}),[T,n]);const{wordOnFail:E,wordOnSuccess:F,showNewWord:O,waitRepeatedClickInFail:$}=((e,r,n,t)=>{const{changeWordProbability:i,changeWordUncorrectTimes:o,changeWordConsecutivelyTimes:s,changeWordInProgressStatus:c}=(0,f.MR)(),[a,l]=(0,d.useState)(!1),{updateRandomWord:u}=M(e,r,n),m=(0,d.useCallback)(((e,r,n)=>{l(!1),t(!1);const d=e.find((e=>e.id===n));d&&(r||(i({probability:.2,id:d.id}),o({id:d.id,uncorrectTimes:d.uncorrectTimes+1})),s({id:d.id,consecutivelyTimes:0}),c({id:d.id,inProgress:!1}),u(),document.querySelector("main").style.pointerEvents="all",document.onclick=null)}),[s,c,i,o,t,l,u]),h=(0,d.useCallback)(((e,r,n)=>{if(a)return;(0,N.T)("FailSound"),t(!0),l(!0);const i=document.querySelector("main"),o=setTimeout((()=>{i.style.pointerEvents="none",document.onclick=()=>m(e,r,n),clearTimeout(o)}),0)}),[t,l,m,a]),y=(0,d.useCallback)(((e,r,n)=>{if(a)return;const t=e.find((e=>e.id===n));if(t){if(r){const e=t.consecutivelyTimes+1;s({id:t.id,consecutivelyTimes:e}),3===e&&(c({id:t.id,inProgress:!0}),i({probability:.05,id:t.id}))}else.2===t.probability?i({id:t.id,probability:.1}):.1===t.probability?i({id:t.id,probability:.05}):(i({id:t.id,probability:.01}),c({id:t.id,inProgress:!0}));u()}}),[s,c,i,u,a]);return{showNewWord:m,wordOnSuccess:y,wordOnFail:h,waitRepeatedClickInFail:a}})(n,l,t,b),L=(0,y.n)();(0,d.useEffect)((()=>{L.length&&null===n&&x()}),[n,L,x]),(0,d.useEffect)((()=>(document.onkeydown=e=>((e,r)=>{if(j)return;$&&v&&O(r,g,n);const t=document.querySelectorAll(".TrainerWord"),i=e=>{"виды союзов"!==r[0].trainerType&&c?t[0===e?1:0].click():t[e].click()};s.L.matches?"ArrowUp"===e.key?i(0):"ArrowDown"===e.key&&i(1):"ArrowLeft"===e.key?i(0):"ArrowRight"===e.key&&i(1)})(e,L),()=>{document.onkeydown=null})),[g,v,n,c,O,L,j,$,E,F]);const{initializeWords:P}=w(r);return(0,d.useEffect)((()=>{const e=setTimeout((()=>{b(!1),k(!1),I(0),P(),clearTimeout(e)}),0)}),[P,k,b,I]),(0,a.jsx)(m.YW,{className:"JNyDWZu7",children:L.length>0&&(0,a.jsx)(a.Fragment,{children:j?(0,a.jsx)(W,{words:r,updateRandomWord:x}):(0,a.jsxs)(a.Fragment,{children:[p.includes(L[0].trainerType)&&(0,a.jsx)(i.so,{width:"100",children:(0,a.jsx)(u.C,{text:"Выбирайте ответ, а система будет предлагать новые слова или\n                    те, в которых были допущены ошибки. Когда вы перестанете их\n                    допускать, шкала полностью заполнится. Заполните шкалу\n                    несколько раз, сделайте работу над ошибками - и вы готовы.",textClassName:o})}),"виды союзов"===L[0].trainerType&&(0,a.jsx)(i.so,{width:"100",children:(0,a.jsx)(u.C,{text:"В этом тренажере под подчинительным союзом понимается любое\n                    средство подчинительной связи, т.е. союз, союзное слово,\n                    частица",textClassName:o})}),v&&(0,a.jsx)(i.so,{className:"Ts9_k9h3","data-testid":"Trainer__uncorrect",justify:"center",children:"Неверно"}),T&&(0,a.jsxs)(a.Fragment,{children:[p.includes(L[0].trainerType)&&(0,a.jsx)(R,{randomWord:T,randomWordsIsReverse:c,wordOnFail:E,wordOnSuccess:F}),"виды союзов"===r[0].trainerType&&(0,a.jsx)(C,{randomWord:T,wordOnSuccess:F,wordOnFail:E})]}),(0,a.jsx)(S.i,{}),(0,a.jsx)(_.W,{})]})})})}));I.displayName="TrainerInner";const E=(0,d.memo)((e=>{let{words:r}=e;const[n,t]=(0,d.useState)(0),[i,o]=(0,d.useState)(!1),[s,c]=(0,d.useState)(!1);return(0,a.jsx)(h.U.Provider,{value:{totalTime:n,setTotalTime:t,isIncorrect:i,setIsIncorrect:o,isErrorWork:s,setIsErrorWork:c},children:(0,a.jsx)(l,{removeAfterUnmount:!1,reducers:{Trainer:f.a3},children:(0,a.jsx)(I,{words:r})})})}));E.displayName="TrainerPage"},1118:function(e,r,n){n.d(r,{$:function(){return a}});var t={};n.r(t),n.d(t,{Button:function(){return i},Button__big:function(){return o},Button__medium:function(){return s}});var i="Zcv0nPBe",o="tRD9g3We",s="XA0XHP5S",d=n(6540),c=n(4848);const a=(0,d.memo)((e=>{let{className:r,children:n,variant:o="medium",...s}=e;return(0,c.jsx)("button",{...s,className:`${i} ${t[`Button__${o}`]} ${r}`,children:n})}));a.displayName="Button"}}]);