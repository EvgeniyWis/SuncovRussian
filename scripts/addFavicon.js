const timeout=setTimeout((()=>{const e=JSON.parse(document.body.getAttribute("data-isdev"))?"/favicon.ico":"/SuncovRussian/favicon.ico",t=document.createElement("link");t.rel="icon",t.type="image/x-icon",t.href=e,document.head.appendChild(t),clearTimeout(timeout)}),1e3);