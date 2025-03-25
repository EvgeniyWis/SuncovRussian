"use strict";(self.webpackChunksuncov_russian=self.webpackChunksuncov_russian||[]).push([[738],{42:function(e,t,s){s.d(t,{$:function(){return n.$}});var n=s(5478)},2025:function(e,t,s){s.d(t,{A:function(){return r}});var n=s(1599);const r=e=>{(0,n.a)()||new Audio(`/SuncovRussian/sounds/${e}.mp3`).play()}},3738:function(e,t,s){s.r(t),s.d(t,{DictantsPage:function(){return m}});var n=s(7294),r=s(6540),a=s(9598),c=s(9412),i=s(6676),o=s(7092),l=s(4848);const u=(0,r.memo)((e=>{let{text:t,theme:s}=e;const{testHasMissedAnswers:n,maxCorrectAnswersCount:u,correctAnswersCount:d,testIsFailed:m,setCorrectAnswersCount:h,setMaxCorrectAnswersCount:f,setTestIsFailed:x,setTestHasMissedAnswers:p}=(0,r.useContext)(a.R),{setMissedInputsIDs:w,setCorrectInputsIDs:_,setIncorrectInputsIDs:v}=(0,r.useContext)(o.R3),{checkCorrectness:C}=(0,c.$f)(t,c.wj,h,f,x,p,w,_,v);return(0,l.jsx)(i.j,{testElement:(0,l.jsx)(c.gW,{isMissed:n,maxCorrectLetters:u,text:t}),checkButtonOnClick:C,correctAnswersCount:d,maxCorrectAnswersCount:u,testIsFailed:m,testHasMissedAnswers:n,theme:s,dataTestIdForButton:"Dictant__check",dataTestIdForLike:"Dictant__like",dataTestIdForDislike:"Dictant__dislike"})}));u.displayName="DictantTemplateInner";const d=(0,r.memo)((e=>(0,l.jsx)(o.Z4,{children:(0,l.jsx)(u,{...e})})));d.displayName="DictantTemplate";const m=(0,r.memo)((e=>{let{dictant:t}=e;return(0,l.jsx)(n.YW,{withMarginTop:!0,children:(0,l.jsx)(a.u,{theme:t.subtheme,children:(0,l.jsx)(d,{text:t.text,theme:t.subtheme})})})}));m.displayName="DictantsPage"},5478:function(e,t,s){s.d(t,{$:function(){return a}});var n=s(7227),r=s(4848);const a=e=>{let{className:t,children:s,size:a="medium",variant:c="primary",...i}=e;return(0,r.jsx)("button",{...i,className:`${n.Button} ${n[`Button__${a}`]} ${n[`Button__${c}`]} ${t}`,children:s})};a.displayName="Button"},6658:function(e,t,s){s.d(t,{z:function(){return c}});var n=s(6540),r=s(8383),a=s(4848);const c=(0,n.memo)((e=>{let{className:t,percent:s,progressDataTestID:n,fullScreenWidth:c}=e;const i=Math.round(100*s);return(0,a.jsxs)(r.s,{className:t,width:c?"165":"50",justify:"center",gap:"10",children:[(0,a.jsxs)("span",{className:"VDr7y2tt",children:[i,"%"]}),(0,a.jsx)("progress",{className:"AAVJpv4y\n          "+(i>=100?"uZ0AM9sd":""),"data-testid":n,value:s})]})}));c.displayName="ProgressBar"},6676:function(e,t,s){s.d(t,{j:function(){return C}});var n,r,a,c=s(8383),i=s(6540),o=s(42);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)({}).hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},l.apply(null,arguments)}var u,d,m,h=e=>i.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",width:192,height:192,fill:"none"},e),n||(n=i.createElement("g",{fill:"#000",clipPath:"url(#DislikeSVG_svg__a)"},i.createElement("path",{d:"M133.694 122.605h13.731a3.44 3.44 0 0 0 3.432-3.433V57.385a3.434 3.434 0 0 0-3.432-3.433h-13.731a3.435 3.435 0 0 0-3.433 3.433v61.787a3.44 3.44 0 0 0 3.433 3.433M54.288 122.604c.553.094 26.437 0 26.437 0l-3.615 9.864c-2.495 6.813-.88 17.214 6.042 20.912 2.254 1.205 5.403 1.809 7.942 1.17a5.73 5.73 0 0 0 3.498-2.621c.877-1.486.786-3.22 1.099-4.867.792-4.177 2.766-8.149 5.822-11.13 5.33-5.198 21.885-20.193 21.885-20.193V60.817h-57.21c-7.72-.005-12.78 8.616-8.972 15.35-4.538 2.907-6.09 9.03-3.432 13.73-4.54 2.907-6.091 9.03-3.433 13.731-7.831 5.015-5.213 17.429 3.937 18.976"}))),r||(r=i.createElement("circle",{cx:96,cy:96,r:92.191,stroke:"#000",strokeWidth:7.619})),a||(a=i.createElement("defs",null,i.createElement("clipPath",{id:"DislikeSVG_svg__a"},i.createElement("path",{fill:"#fff",d:"M150.857 156.952H45.715V51.81h105.142z"})))));function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)({}).hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},f.apply(null,arguments)}var x=e=>i.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",width:192,height:192,fill:"none",style:{rotate:"180deg"}},e),u||(u=i.createElement("g",{fill:"#000",clipPath:"url(#LikeSVG_svg__a)"},i.createElement("path",{d:"M133.694 122.605h13.731a3.44 3.44 0 0 0 3.432-3.433V57.385a3.434 3.434 0 0 0-3.432-3.433h-13.731a3.435 3.435 0 0 0-3.433 3.433v61.787a3.44 3.44 0 0 0 3.433 3.433M54.288 122.604c.553.094 26.437 0 26.437 0l-3.615 9.864c-2.495 6.813-.88 17.214 6.042 20.912 2.254 1.205 5.403 1.809 7.942 1.17a5.73 5.73 0 0 0 3.498-2.621c.877-1.486.786-3.22 1.099-4.867.792-4.177 2.766-8.149 5.822-11.13 5.33-5.198 21.885-20.193 21.885-20.193V60.817h-57.21c-7.72-.005-12.78 8.616-8.972 15.35-4.538 2.907-6.09 9.03-3.432 13.73-4.54 2.907-6.091 9.03-3.433 13.731-7.831 5.015-5.213 17.429 3.937 18.976"}))),d||(d=i.createElement("circle",{cx:96,cy:96,r:92.191,stroke:"#000",strokeWidth:7.619})),m||(m=i.createElement("defs",null,i.createElement("clipPath",{id:"LikeSVG_svg__a"},i.createElement("path",{fill:"#fff",d:"M150.857 156.952H45.715V51.81h105.142z"}))))),p=s(4848);const w=(0,i.memo)((e=>{let{markElement:t,dataTestIDForMark:s}=e;return(0,p.jsx)(p.Fragment,{children:t})}));w.displayName="TemplateForTestsMark";var _=s(2025),v=s(6658);const C=(0,i.memo)((e=>{let{className:t,theme:s,testElement:n,checkButtonOnClick:r,correctAnswersCount:a,maxCorrectAnswersCount:l,testIsFailed:u,testHasMissedAnswers:d,continueButtonOnClick:m,withDislike:f=!0,withLike:C=!0,withResults:g=!0,dataTestIdForButton:k,dataTestIdForLike:j,dataTestIdForDislike:I,progressBarPercent:A}=e;const M=(0,i.useMemo)((()=>(!u||d)&&(a!==l||!l)),[a,l,d,u]);return(0,p.jsxs)(c.s,{direction:"column",gap:"50",maxHeight:!0,width:"100",className:t,children:[s&&(0,p.jsxs)("h1",{className:"Ax5CzVkR",children:["тема: ",s]}),(0,p.jsxs)(c.s,{width:"60",gap:"30",justify:"center",direction:"column",children:[n,void 0!==A&&(0,p.jsx)(v.z,{fullScreenWidth:!0,percent:A}),(0,p.jsxs)(c.s,{width:"100",justify:l>0&&!d&&!m?"end":"center",relative:!0,children:[(M||m)&&(0,p.jsx)(o.$,{"data-testid":k,onClick:!M&&m?m:()=>{const{testIsFailed:e,testHasMissedAnswers:t}=r();e&&!t&&(0,_.A)("FailSound")},size:"medium",type:"button",className:"PqweGHy7",children:M?"Проверить":"Продолжить"}),(0,p.jsxs)(c.s,{className:m?"EkVE_N5q":"",align:"center",direction:"column",gap:"10",children:[g&&l>0&&!d&&(0,p.jsxs)("span",{className:"t_QOI1DX",children:["Итог: ",a,"/",l]}),l>0&&!d&&(0,p.jsx)(p.Fragment,{children:a!==l||u?(0,p.jsx)(p.Fragment,{children:f&&(0,p.jsx)(w,{markElement:(0,p.jsx)(h,{}),dataTestIDForMark:I})}):(0,p.jsx)(p.Fragment,{children:C&&(0,p.jsx)(w,{markElement:(0,p.jsx)(x,{}),dataTestIDForMark:j})})})]})]})]})]})}));C.displayName="TemplateForTests"},7227:function(e,t,s){s.r(t),s.d(t,{Button:function(){return n},Button__big:function(){return r},Button__inverse:function(){return a},Button__inverse__clicked:function(){return c},Button__medium:function(){return i},Button__primary:function(){return o},Button__primary__clicked:function(){return l},Button__small:function(){return u}});var n="Zcv0nPBe",r="tRD9g3We",a="NNnQl_5e",c="j3dH8OG0",i="XA0XHP5S",o="NJhBXRek",l="ihQ3Lxib",u="rF343bXv"},9598:function(e,t,s){s.d(t,{u:function(){return c},R:function(){return r}});var n=s(6540);const r=(0,n.createContext)({maxCorrectAnswersCount:0,setMaxCorrectAnswersCount:()=>{},correctAnswersCount:0,setCorrectAnswersCount:()=>{},testIsFailed:!1,setTestIsFailed:()=>{},testHasMissedAnswers:!1,setTestHasMissedAnswers:()=>{},currentItemIndex:0,setCurrentItemIndex:()=>{},theme:"",items:[]});var a=s(4848);const c=e=>{let{children:t,theme:s,items:c}=e;const[i,o]=(0,n.useState)(0),[l,u]=(0,n.useState)(0),[d,m]=(0,n.useState)(!1),[h,f]=(0,n.useState)(!1),[x,p]=(0,n.useState)(0);return(0,n.useEffect)((()=>{o(0),u(0),m(!1),f(!1),p(0)}),[s]),(0,a.jsx)(r.Provider,{value:{maxCorrectAnswersCount:i,setMaxCorrectAnswersCount:o,correctAnswersCount:l,setCorrectAnswersCount:u,testIsFailed:d,setTestIsFailed:m,testHasMissedAnswers:h,setTestHasMissedAnswers:f,theme:s,items:c||[],currentItemIndex:x,setCurrentItemIndex:p},children:t})};c.displayName="ProviderForTests"}}]);