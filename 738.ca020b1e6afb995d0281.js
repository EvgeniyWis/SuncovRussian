"use strict";(self.webpackChunksuncov_russian=self.webpackChunksuncov_russian||[]).push([[738],{9598:function(e,t,s){s.d(t,{u:function(){return c},R:function(){return r}});var n=s(6540);const r=(0,n.createContext)({maxCorrectAnswersCount:0,setMaxCorrectAnswersCount:()=>{},correctAnswersCount:0,setCorrectAnswersCount:()=>{},testIsFailed:!1,setTestIsFailed:()=>{},testHasMissedAnswers:!1,setTestHasMissedAnswers:()=>{},currentItemIndex:0,setCurrentItemIndex:()=>{},theme:"",items:[]});var a=s(4848);const c=(0,n.memo)((e=>{let{children:t,theme:s,items:c}=e;const[i,l]=(0,n.useState)(0),[o,u]=(0,n.useState)(0),[d,m]=(0,n.useState)(!1),[h,w]=(0,n.useState)(!1),[x,f]=(0,n.useState)(0);return(0,n.useEffect)((()=>{l(0),u(0),m(!1),w(!1),f(0)}),[s]),(0,a.jsx)(r.Provider,{value:{maxCorrectAnswersCount:i,setMaxCorrectAnswersCount:l,correctAnswersCount:o,setCorrectAnswersCount:u,testIsFailed:d,setTestIsFailed:m,testHasMissedAnswers:h,setTestHasMissedAnswers:w,theme:s,items:c||[],currentItemIndex:x,setCurrentItemIndex:f},children:t})}));c.displayName="ProviderForTests"},307:function(e,t,s){s.d(t,{j:function(){return k}});var n,r,a,c=s(8383),i=s(6540),l=s(1118);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)({}).hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},o.apply(null,arguments)}var u,d,m,h=e=>i.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",width:192,height:192,fill:"none"},e),n||(n=i.createElement("g",{fill:"#000",clipPath:"url(#DislikeSVG_svg__a)"},i.createElement("path",{d:"M133.694 122.605h13.731a3.44 3.44 0 0 0 3.432-3.433V57.385a3.434 3.434 0 0 0-3.432-3.433h-13.731a3.435 3.435 0 0 0-3.433 3.433v61.787a3.44 3.44 0 0 0 3.433 3.433M54.288 122.604c.553.094 26.437 0 26.437 0l-3.615 9.864c-2.495 6.813-.88 17.214 6.042 20.912 2.254 1.205 5.403 1.809 7.942 1.17a5.73 5.73 0 0 0 3.498-2.621c.877-1.486.786-3.22 1.099-4.867.792-4.177 2.766-8.149 5.822-11.13 5.33-5.198 21.885-20.193 21.885-20.193V60.817h-57.21c-7.72-.005-12.78 8.616-8.972 15.35-4.538 2.907-6.09 9.03-3.432 13.73-4.54 2.907-6.091 9.03-3.433 13.731-7.831 5.015-5.213 17.429 3.937 18.976"}))),r||(r=i.createElement("circle",{cx:96,cy:96,r:92.191,stroke:"#000",strokeWidth:7.619})),a||(a=i.createElement("defs",null,i.createElement("clipPath",{id:"DislikeSVG_svg__a"},i.createElement("path",{fill:"#fff",d:"M150.857 156.952H45.715V51.81h105.142z"})))));function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)({}).hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},w.apply(null,arguments)}var x=e=>i.createElement("svg",w({xmlns:"http://www.w3.org/2000/svg",width:192,height:192,fill:"none",style:{rotate:"180deg"}},e),u||(u=i.createElement("g",{fill:"#000",clipPath:"url(#LikeSVG_svg__a)"},i.createElement("path",{d:"M133.694 122.605h13.731a3.44 3.44 0 0 0 3.432-3.433V57.385a3.434 3.434 0 0 0-3.432-3.433h-13.731a3.435 3.435 0 0 0-3.433 3.433v61.787a3.44 3.44 0 0 0 3.433 3.433M54.288 122.604c.553.094 26.437 0 26.437 0l-3.615 9.864c-2.495 6.813-.88 17.214 6.042 20.912 2.254 1.205 5.403 1.809 7.942 1.17a5.73 5.73 0 0 0 3.498-2.621c.877-1.486.786-3.22 1.099-4.867.792-4.177 2.766-8.149 5.822-11.13 5.33-5.198 21.885-20.193 21.885-20.193V60.817h-57.21c-7.72-.005-12.78 8.616-8.972 15.35-4.538 2.907-6.09 9.03-3.432 13.73-4.54 2.907-6.091 9.03-3.433 13.731-7.831 5.015-5.213 17.429 3.937 18.976"}))),d||(d=i.createElement("circle",{cx:96,cy:96,r:92.191,stroke:"#000",strokeWidth:7.619})),m||(m=i.createElement("defs",null,i.createElement("clipPath",{id:"LikeSVG_svg__a"},i.createElement("path",{fill:"#fff",d:"M150.857 156.952H45.715V51.81h105.142z"}))))),f=s(4848);const C=(0,i.memo)((e=>{let{markElement:t,dataTestIDForMark:s}=e;return(0,f.jsx)(f.Fragment,{children:t})}));C.displayName="TemplateForTestsMark";var g=s(2025);const k=(0,i.memo)((e=>{let{className:t,theme:s,testElement:n,checkButtonOnClick:r,correctAnswersCount:a,maxCorrectAnswersCount:o,testIsFailed:u,testHasMissedAnswers:d,continueButtonOnClick:m,withDislike:w=!0,withLike:k=!0,withResults:p=!0,dataTestIdForButton:v,dataTestIdForLike:j,dataTestIdForDislike:A}=e;const _=(0,i.useMemo)((()=>(!u||d)&&(a!==o||!o)),[a,o,d,u]);return(0,f.jsxs)(c.s,{direction:"column",gap:"50",maxHeight:!0,width:"100",className:t,children:[s&&(0,f.jsxs)("h1",{className:"Ax5CzVkR",children:["тема: ",s]}),(0,f.jsxs)(c.s,{width:"60",gap:"30",justify:"center",direction:"column",children:[n,(0,f.jsxs)(c.s,{width:"100",justify:o>0&&!d&&!m?"end":"center",relative:!0,children:[(_||m)&&(0,f.jsx)(l.$,{"data-testid":v,onClick:!_&&m?m:()=>{const{testIsFailed:e,testHasMissedAnswers:t}=r();e&&!t&&(0,g.A)("FailSound")},variant:"medium",type:"button",className:"PqweGHy7",children:_?"Проверить":"Продолжить"}),(0,f.jsxs)(c.s,{className:m?"EkVE_N5q":"",align:"center",direction:"column",gap:"10",children:[p&&o>0&&!d&&(0,f.jsxs)("span",{className:"t_QOI1DX",children:["Итог: ",a,"/",o]}),o>0&&!d&&(0,f.jsx)(f.Fragment,{children:a!==o||u?(0,f.jsx)(f.Fragment,{children:w&&(0,f.jsx)(C,{markElement:(0,f.jsx)(h,{}),dataTestIDForMark:A})}):(0,f.jsx)(f.Fragment,{children:k&&(0,f.jsx)(C,{markElement:(0,f.jsx)(x,{}),dataTestIDForMark:j})})})]})]})]})]})}));k.displayName="TemplateForTests"},2025:function(e,t,s){s.d(t,{A:function(){return r}});var n=s(1599);const r=e=>{(0,n.a)()||new Audio(`/SuncovRussian/sounds/${e}.mp3`).play()}},3738:function(e,t,s){s.r(t),s.d(t,{DictantsPage:function(){return u}});var n=s(7294),r=s(6540),a=s(9598),c=s(7513),i=s(307),l=s(4848);const o=(0,r.memo)((e=>{let{text:t,theme:s}=e;const{testHasMissedAnswers:n,maxCorrectAnswersCount:o,correctAnswersCount:u,testIsFailed:d,setCorrectAnswersCount:m,setMaxCorrectAnswersCount:h,setTestIsFailed:w,setTestHasMissedAnswers:x}=(0,r.useContext)(a.R),{checkDictantCorrectness:f}=(0,c.gE)(t,c.wj,m,h,w,x);return(0,l.jsx)(i.j,{testElement:(0,l.jsx)(c.gW,{isMissed:n,maxCorrectLetters:o,text:t}),checkButtonOnClick:f,correctAnswersCount:u,maxCorrectAnswersCount:o,testIsFailed:d,testHasMissedAnswers:n,theme:s,dataTestIdForButton:"Dictant__check",dataTestIdForLike:"Dictant__like",dataTestIdForDislike:"Dictant__dislike"})}));o.displayName="DictantTemplate";const u=(0,r.memo)((e=>{let{dictant:t}=e;return(0,l.jsx)(n.YW,{withMarginTop:!0,children:(0,l.jsx)(a.u,{theme:t.subtheme,children:(0,l.jsx)(o,{text:t.text,theme:t.subtheme})})})}));u.displayName="DictantsPage"},1118:function(e,t,s){s.d(t,{$:function(){return o}});var n={};s.r(n),s.d(n,{Button:function(){return r},Button__big:function(){return a},Button__medium:function(){return c}});var r="Zcv0nPBe",a="tRD9g3We",c="XA0XHP5S",i=s(6540),l=s(4848);const o=(0,i.memo)((e=>{let{className:t,children:s,variant:a="medium",...c}=e;return(0,l.jsx)("button",{...c,className:`${r} ${n[`Button__${a}`]} ${t}`,children:s})}));o.displayName="Button"}}]);