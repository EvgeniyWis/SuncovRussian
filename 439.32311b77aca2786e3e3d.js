/*! For license information please see 439.32311b77aca2786e3e3d.js.LICENSE.txt */
"use strict";(self.webpackChunksuncov_russian=self.webpackChunksuncov_russian||[]).push([[439],{2439:function(e,t,n){n.r(t),n.d(t,{TrainerPage:function(){return Z}});var s={};n.r(s),n.d(s,{Hint:function(){return u},Hint__text:function(){return m},Hint__text__active:function(){return h},Hint__text__top:function(){return x}});var r={};n.r(r),n.d(r,{TrainerWord:function(){return b},TrainerWord__default:function(){return C},TrainerWord__invalid:function(){return M}});var i=n(8383),o="xikJpYWM",a=n(6540),c=n(1468),d=n(4848);const l=e=>{let{children:t,reducers:n,removeAfterUnmount:s=!0}=e;const r=(0,c.Pj)(),i=r.reducerManager.getMountedReducers();return(0,a.useEffect)((()=>(Object.entries(n).forEach((e=>{let[t,n]=e;i[t]||r.reducerManager.add(t,n)})),()=>{s&&Object.entries(n).forEach((e=>{let[t]=e;r.reducerManager.remove(t)}))})),[i,n,s,r.reducerManager]),(0,d.jsx)(d.Fragment,{children:t})};l.displayName="DynamicModuleLoader";var u="q8EozCQs",m="LpcIMF4O",h="GCrxjsBF",x="mE9OXUTJ";const p=(0,a.memo)((e=>{let{textClassName:t,text:n,textDirection:r="right"}=e;const[o,c]=(0,a.useState)(!1);return(0,d.jsxs)(i.s,{relative:!0,align:"start",gap:"10",children:[(0,d.jsx)(i.s,{onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),className:u,justify:"center",children:(0,d.jsx)("span",{children:"?"})}),(0,d.jsx)("p",{className:`${m}\n              ${o&&h}\n              ${s[`Hint__text__${r}`]}\n              ${t}`,children:n})]})}));p.displayName="Hint";var f=n(1488),j=n(5337),y=n(3800),T=n(6491),v="VR6nnRel",g="XVOH8ddq",w=n(8673),k=n(1118);const W=(0,a.memo)((e=>{let{updateRandomWord:t,words:n,theme:s}=e;const{isCheckMode:r,isOneLifeMode:o,allAttemptsCount:c,setAllAttemptsCount:l}=(0,a.useContext)(j.U),u=(0,y.n)(),{setWords:m}=(0,T.MR)(),{totalTime:h,setTotalTime:x,isErrorWork:p,setIsErrorWork:f}=(0,a.useContext)(j.U),W=(0,a.useMemo)((()=>Math.round(h/6e4)),[h]),I=(0,a.useMemo)((()=>Math.round(h/1e3%60)),[h]),b=(0,a.useMemo)((()=>u.filter((e=>e.uncorrectTimes>0)).sort(((e,t)=>t.uncorrectTimes-e.uncorrectTimes))),[u]),C=(0,a.useCallback)((()=>{f(!0);const e=b.map((e=>({...e,probability:1,uncorrectTimes:0,consecutivelyTimes:0,inProgress:!1})));m(e),x(0),l(0),t(e)}),[l,f,x,m,t,b]),{initializeWords:M}=(0,w.T)(n.items),N=(0,a.useCallback)((()=>{M(),x(0),f(!1),l(0)}),[M,l,f,x]);return(0,d.jsxs)(i.s,{className:"SZbvI01N",justify:"between",direction:"column",width:"100",maxHeight:!0,children:[(0,d.jsxs)("span",{className:g,children:["Общее время:"," ",`${W<10?"0":""}${W}`,":",`${I<10?"0":""}${I}`]}),o&&(0,d.jsxs)("span",{className:v,children:["Количество попыток: ",c]}),(0,d.jsxs)("span",{className:v,children:["Тема: ",s]}),(r||o)&&(0,d.jsxs)("span",{className:v,children:["Режим: «",r?"Проверка":"Одна жизнь","»"]}),b.length>0&&!o?(0,d.jsxs)(i.s,{className:"KQIgMBSl",gap:"20",maxHeight:!0,justify:"between",direction:"column",children:[(0,d.jsxs)(i.s,{direction:"column",children:[(0,d.jsx)("span",{className:g,children:"Ошибки:"}),(0,d.jsx)(i.s,{direction:"column",gap:"3",width:"100",children:b.map((e=>(0,d.jsxs)("span",{className:"JCvfyDc1",children:["primary"===n.type&&(0,d.jsxs)(d.Fragment,{children:[e.valid," -"," ",e.uncorrectTimes," ",[2,3,4].includes(e.uncorrectTimes)?"раза":"раз"]}),"unions"===n.type&&(0,d.jsxs)(d.Fragment,{children:[e.word," -"," ",e.uncorrectTimes," ",[2,3,4].includes(e.uncorrectTimes)?"раза":"раз"," ","(Правильно: ",e.unionType,")"]})]},e.id)))})]}),!p&&(0,d.jsx)(k.$,{onClick:C,type:"button",children:"Работа над ошибками"})]}):(0,d.jsx)(k.$,{onClick:N,type:"button",children:"Повторить"})]})}));W.displayName="TrainerTotalResult";var I=n(2411),b="rxqnQXoT",C="RcYBccp8",M="ywWLKwMM";const N=(0,a.memo)((e=>{let{className:t,style:n,dataTestId:s,onClick:o,children:a,type:c="default"}=e;return(0,d.jsx)(i.s,{justify:"center","data-testid":s,width:"100",onClick:()=>{const e=document.querySelectorAll('[data-name="TrainerWord"]');e.forEach((e=>{e.style.transitionDuration="0ms"}));const t=setTimeout((()=>{clearTimeout(t),e.forEach((e=>{e.style.transitionDuration="var(--transition-duration-default)"}))}),100);o&&o()},className:`${b} ${t} ${r[`TrainerWord__${c}`]}`,style:n,"data-name":"TrainerWord",children:a})}));N.displayName="TrainerWord";const _=["Сочинительный","Подчинительный"],O=(0,a.memo)((e=>{let{randomWord:t,wordOnSuccess:n,wordOnFail:s}=e;const r=(0,y.n)(),{isIncorrect:o,isErrorWork:c}=(0,a.useContext)(j.U);return(0,d.jsxs)(i.s,{width:"100",direction:"column",gap:"10",justify:"center",children:[(0,d.jsx)("span",{className:"hRRLbvjX","data-testid":"UnionsTrainerWords__word",children:t.word}),(0,d.jsx)(i.s,{justify:"center",direction:I.L.matches?"column":"row",width:"100",children:_.map(((e,i)=>(0,d.jsx)(N,{dataTestId:`UnionsTrainerWords__${e}`,onClick:e===t.unionType?()=>n(r,c,t.id):()=>s(r,c,t.id),type:o&&e!==t.unionType?"invalid":"default",style:0===i?{borderRightWidth:I.L.matches?3:0,borderBottomWidth:I.L.matches?0:3}:{},children:e},e)))})]})}));O.displayName="UnionsTrainerWords";var E=n(219),S=n(8953);const L=(0,a.memo)((e=>{let{randomWord:t,randomWordsIsReverse:n,wordOnFail:s,wordOnSuccess:r}=e;const o=(0,y.n)(),{isIncorrect:c,isErrorWork:l}=(0,a.useContext)(j.U),u=e=>(0,d.jsx)(d.Fragment,{children:t.differenceIndexes?(0,d.jsx)(i.s,{children:e.split("").map(((n,s)=>(0,d.jsx)(a.Fragment,{children:" "===n?(0,d.jsx)("span",{style:{width:7}}):(0,d.jsx)("span",{style:{fontWeight:t.differenceIndexes&&t.differenceIndexes.includes(s+1)?"bold":"normal"},children:n},e+n+s)},e+n+s)))}):e});return(0,d.jsx)(d.Fragment,{children:t.valid&&(0,d.jsxs)(i.s,{justify:"center",direction:I.L.matches?n?"columnReverse":"column":n?"rowReverse":"row",width:"100",children:[(0,d.jsx)(N,{dataTestId:"PrimaryTrainerWords__valid",onClick:()=>r(o,l,t.id),style:{borderRightWidth:I.L.matches||n||c?3:0,borderBottomWidth:I.L.matches?n||c?3:0:3,fontSize:t.valid.length>=10?20:36},children:u(t.valid)}),(0,d.jsx)(N,{dataTestId:"PrimaryTrainerWords__invalid",onClick:()=>s(o,l,t.id),type:c?"invalid":"default",style:{borderRightWidth:I.L.matches?3:n?0:3,borderBottomWidth:I.L.matches&&n?0:3,fontSize:t.valid.length>=10?20:36},children:u(t.invalid)})]})})}));L.displayName="PrimaryTrainerWords";var $,R=n(2980);function F(){return F=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)({}).hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},F.apply(null,arguments)}var P=e=>a.createElement("svg",F({xmlns:"http://www.w3.org/2000/svg",width:21,height:18,fill:"none"},e),$||($=a.createElement("path",{stroke:"var(--color-white)",strokeWidth:3,d:"M2 10.5 6.5 15l13-13"})));const A=(0,a.memo)((e=>{let{name:t,onClick:n,modeIsOn:s,setModeIsOn:r,hintText:o}=e;const c=(0,a.useCallback)((()=>{r(!s),n()}),[n,s,r]),[l,u]=(0,a.useState)(!1);return(0,d.jsxs)(i.s,{direction:"column",relative:!0,children:[(0,d.jsxs)(i.s,{className:`SsHLGFH8\n        ${s&&"asGKPX1D"}`,children:[(0,d.jsx)(i.s,{onClick:c,className:"m0UHa6ZK",justify:"center","data-testid":`ModeSwitcherItem__${t}`,"data-selected":s,children:(0,d.jsx)(P,{className:"d_cw2q17"})}),(0,d.jsx)("span",{onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),className:"d9iTjNx0",children:t})]}),o&&(0,d.jsx)(i.s,{justify:"center",className:`dPvMNF15 \n        ${l&&"VBHbPcMg"}`,children:o})]})}));A.displayName="ModeSwitcherItem";const U=(0,a.memo)((e=>{let{items:t}=e;return(0,d.jsx)(i.s,{justify:"end",width:"100",gap:"10",relative:!0,children:(0,d.jsx)(i.s,{direction:"column",gap:"10",children:t.map((e=>(0,d.jsx)(A,{...e},e.name)))})})}));U.displayName="ModeSwitcher";const H={isOpen:!1,orientation:void 0},B=(e,t)=>{globalThis.dispatchEvent(new globalThis.CustomEvent("devtoolschange",{detail:{isOpen:e,orientation:t}}))},D=({emitEvents:e=!0}={})=>{const t=globalThis.outerWidth-globalThis.innerWidth>170,n=globalThis.outerHeight-globalThis.innerHeight>170,s=t?"vertical":"horizontal";n&&t||!(globalThis.Firebug&&globalThis.Firebug.chrome&&globalThis.Firebug.chrome.isInitialized||t||n)?(H.isOpen&&e&&B(!1,void 0),H.isOpen=!1,H.orientation=void 0):(H.isOpen&&H.orientation===s||!e||B(!0,s),H.isOpen=!0,H.orientation=s)};D({emitEvents:!1}),setInterval(D,500);var z=H;const X=(0,a.memo)((()=>{const[e,t]=(0,a.useState)(!0),{focusModeItem:n}=((e,t)=>{const n=(0,y.n)(),{changeWordProbability:s,changeWordConsecutivelyTimes:r,changeWordInProgressStatus:i}=(0,T.MR)(),o=(0,a.useCallback)((()=>{for(const e of n)s({id:e.id,probability:1}),r({id:e.id,consecutivelyTimes:0}),i({id:e.id,inProgress:!1})}),[r,i,s,n]),c=(0,a.useCallback)((()=>{(document.hidden||z.isOpen)&&o()}),[o]),d=(0,a.useCallback)((()=>{document.onvisibilitychange=c,document.addEventListener("click",c)}),[c]),l=(0,a.useCallback)((()=>{e?(document.onvisibilitychange=null,document.removeEventListener("click",c)):(o(),d())}),[o,c,e,d]);return e&&d(),{focusModeItem:{name:"Фокусировка",onClick:l,modeIsOn:e,setModeIsOn:t,hintText:"Обнуляет прогресс каждый раз, когда вы покидаете сайт."}}})(e,t),{OneLifeModeItem:s}=(()=>{const{setIsOneLifeMode:e,isOneLifeMode:t,setIsCheckMode:n}=(0,a.useContext)(j.U);return{OneLifeModeItem:{name:"Одна жизнь",onClick:(0,a.useCallback)((()=>{t||n(!1),e(!t)}),[t,n,e]),modeIsOn:t,setModeIsOn:e,hintText:"Прогресс обнуляется при первой же ошибке"}}})(),{CheckModeItem:r}=(()=>{const{setIsCheckMode:e,isCheckMode:t,setIsOneLifeMode:n}=(0,a.useContext)(j.U);return{CheckModeItem:{name:"Проверка",onClick:(0,a.useCallback)((()=>{t||n(!1),e(!t)}),[t,e,n]),modeIsOn:t,setModeIsOn:e,hintText:"Слово не будут повторяться даже при допущении ошибки"}}})(),i=[n,s,r];return(0,d.jsx)(U,{items:i})}));X.displayName="TrainerModeSwitcher";const q=(0,a.memo)((e=>{let{words:t,theme:n}=e;const[s,r]=(0,a.useState)(null),[c,l]=(0,a.useState)(!1),{randomWord:u,updateRandomWord:m}=(0,E.Z)(s,l,r),{totalTime:h,setIsIncorrect:x,isIncorrect:T,setIsErrorWork:v,setTotalTime:g}=(0,a.useContext)(j.U);(0,a.useEffect)((()=>{u||r(0)}),[u,s]);const{wordOnFail:k,wordOnSuccess:b}=(0,S.$)(s,l,r,x),C=(0,y.n)();(0,a.useEffect)((()=>{C.length&&null===s&&m()}),[s,C,m]);const{checkArrowsPress:M}=((e,t,n,s,r)=>{const{totalTime:i,isIncorrect:o,isErrorWork:c}=(0,a.useContext)(j.U),{showNewWord:d,waitRepeatedClickInFail:l}=(0,S.$)(e,n,t,s);return{checkArrowsPress:(t,n)=>{if(i)return;l&&o&&d(n.items,c,e);const s=document.querySelectorAll('[data-name="TrainerWord"]'),a=e=>{if("unions"!==n.type)if(r){const t=s[0===e?1:0];t&&t.click()}else s[e].click();else s[e].click()};I.L.matches?"ArrowUp"===t.key?a(0):"ArrowDown"===t.key&&a(1):"ArrowLeft"===t.key?a(0):"ArrowRight"===t.key&&a(1)}}})(s,r,l,x,c);(0,a.useEffect)((()=>(document.onkeydown=e=>M(e,t),()=>{document.onkeydown=null})),[M,t]);const{initializeWords:N}=(0,w.T)(t.items);return(0,a.useEffect)((()=>{const e=setTimeout((()=>{x(!1),v(!1),g(0),N(),clearTimeout(e)}),0)}),[N,v,x,g]),(0,d.jsx)(f.YW,{className:"JNyDWZu7",children:C.length>0&&(0,d.jsx)(d.Fragment,{children:h?(0,d.jsx)(W,{words:t,updateRandomWord:m,theme:n}):(0,d.jsxs)(d.Fragment,{children:["primary"===t.type&&(0,d.jsx)(i.s,{width:"100",children:(0,d.jsx)(p,{text:"Выбирайте ответ, а система будет предлагать новые слова или\n                    те, в которых были допущены ошибки. Когда вы перестанете их\n                    допускать, шкала полностью заполнится. Заполните шкалу\n                    несколько раз, сделайте работу над ошибками - и вы готовы.",textClassName:o})}),"unions"===t.type&&(0,d.jsx)(i.s,{width:"100",children:(0,d.jsx)(p,{text:"В этом тренажере под подчинительным союзом понимается любое\n                    средство подчинительной связи, т.е. союз, союзное слово,\n                    частица",textClassName:o})}),T&&(0,d.jsx)(i.s,{className:"Ts9_k9h3","data-testid":"Trainer__uncorrect",justify:"center",children:"Неверно"}),u&&(0,d.jsxs)(d.Fragment,{children:["primary"===t.type&&(0,d.jsx)(L,{randomWord:u,randomWordsIsReverse:c,wordOnFail:k,wordOnSuccess:b}),"unions"===t.type&&(0,d.jsx)(O,{randomWord:u,wordOnSuccess:b,wordOnFail:k})]}),(0,d.jsx)(R.i,{randomWordId:s,setRandomWordsIsReverse:l,setRandomWordId:r}),(0,d.jsx)(X,{})]})})})}));q.displayName="TrainerInner";const Z=(0,a.memo)((e=>{let{words:t,theme:n}=e;const[s,r]=(0,a.useState)(0),[i,o]=(0,a.useState)(!1),[c,u]=(0,a.useState)(!1),[m,h]=(0,a.useState)(!1),[x,p]=(0,a.useState)(!1),[f,y]=(0,a.useState)(0);return(0,d.jsx)(j.U.Provider,{value:{totalTime:s,setTotalTime:r,isIncorrect:i,setIsIncorrect:o,isErrorWork:c,setIsErrorWork:u,isOneLifeMode:m,setIsOneLifeMode:h,isCheckMode:x,setIsCheckMode:p,allAttemptsCount:f,setAllAttemptsCount:y},children:(0,d.jsx)(l,{removeAfterUnmount:!1,reducers:{Trainer:T.a3},children:(0,d.jsx)(q,{words:t,theme:n})})})}));Z.displayName="TrainerPage"},1118:function(e,t,n){n.d(t,{$:function(){return d}});var s={};n.r(s),n.d(s,{Button:function(){return r},Button__big:function(){return i},Button__medium:function(){return o}});var r="Zcv0nPBe",i="tRD9g3We",o="XA0XHP5S",a=n(6540),c=n(4848);const d=(0,a.memo)((e=>{let{className:t,children:n,variant:i="medium",...o}=e;return(0,c.jsx)("button",{...o,className:`${r} ${s[`Button__${i}`]} ${t}`,children:n})}));d.displayName="Button"}}]);