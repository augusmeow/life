import{d as u,B as _,o as t,c as o,C as d,j as a,a as i,t as b,F as h,b as g,G as p,e as r,k as y}from"./chunks/framework.DDs3IadZ.js";const w=[{id:"fish",name:"fish",intro:"fish is a smart and user-friendly command line shell for Linux, macOS, and the rest of the family.",repo:"https://github.com/fish-shell/fish-shell",homepage:"https://fishshell.com/",platform:["Windows","Linux","Mac"]},{id:"iterm2",name:"iTerm2",intro:"iTerm2 is a terminal emulator for Mac OS X that does amazing things.",repo:"https://github.com/gnachman/iTerm2",homepage:"https://iterm2.com/",platform:"Mac"},{id:"mobaxterm",name:"MobaXterm",intro:"Enhanced terminal for Windows with X11 server, tabbed SSH client, network tools and much more",homepage:"https://mobaxterm.mobatek.net/",platform:"Windows"},{id:"tabby",name:"Tabby",intro:"A terminal for the modern age</br>Tabby is an infinitely customizable cross-platform terminal app for local shells, serial, SSH and Telnet connections.",repo:"https://github.com/eugeny/tabby",homepage:"https://tabby.sh/",platform:["Windows","Linux","Mac"]},{id:"warp",name:"Warp",intro:"Great software starts on the command line</br>Warp is the terminal reimagined with AI and collaborative tools for better productivity.",repo:"https://github.com/warpdotdev/Warp",homepage:"https://www.warp.dev/",platform:["Linux","Mac"]},{id:"xshell",name:"Xshell",intro:"The Industry’s Most Powerful SSH Client",homepage:"https://www.xshell.com/",platform:"Windows"}],x={class:"info custom-block"},k={class:"custom-block-title"},T={key:0},M={key:0},S={key:1},W=["innerHTML"],B={key:1},C=["href"],L={key:2},N=["href"],H=["href"],O="/code-notes/cmd-line-tools/",A=u({__name:"CommandTool",setup(f){const s=n=>{switch(n){case"Windows":return"info";case"Linux":return"tip";case"Mac":return"warning"}return""};return(n,l)=>{const m=_("Badge");return t(!0),o(h,null,d(y(w),(e,V)=>(t(),o("div",x,[a("p",k,[i(b(e.name)+" ",1),e.platform?(t(),o("span",T,[Array.isArray(e.platform)?(t(),o("span",M,[(t(!0),o(h,null,d(e.platform,(c,X)=>(t(),g(m,{text:c,type:s(c)},null,8,["text","type"]))),256))])):(t(),o("span",S,[p(m,{text:e.platform,type:s(e.platform)},null,8,["text","type"])]))])):r("",!0)]),a("ul",null,[e.intro?(t(),o("li",{key:0,innerHTML:e.intro},null,8,W)):r("",!0),e.homepage?(t(),o("li",B,[a("a",{href:e.homepage},"主页",8,C)])):r("",!0),e.repo?(t(),o("li",L,[a("a",{href:e.repo},"仓库",8,N)])):r("",!0),a("li",null,[l[0]||(l[0]=i(" 使用记录：")),a("a",{href:O+e.id},"跳转",8,H)])])]))),256)}}}),F=JSON.parse('{"title":"工具介绍","description":"","frontmatter":{},"headers":[],"relativePath":"tools/cmd-line-tools/index.md","filePath":"tools/cmd-line-tools/index.md","lastUpdated":1720495435000}'),P={name:"tools/cmd-line-tools/index.md"},I=Object.assign(P,{setup(f){return(s,n)=>(t(),o("div",null,[n[0]||(n[0]=a("h1",{id:"工具介绍",tabindex:"-1"},[i("工具介绍 "),a("a",{class:"header-anchor",href:"#工具介绍","aria-label":'Permalink to "工具介绍"'},"​")],-1)),p(A)]))}});export{F as __pageData,I as default};