import{_ as e,c as t,o,Q as a}from"./chunks/framework.1cc28bed.js";const m=JSON.parse('{"title":"一些有的没的","description":"","frontmatter":{},"headers":[],"relativePath":"code/program/others.md","filePath":"code/program/others.md","lastUpdated":1686728638000}'),r={name:"code/program/others.md"},c=a('<h1 id="一些有的没的" tabindex="-1">一些有的没的 <a class="header-anchor" href="#一些有的没的" aria-label="Permalink to &quot;一些有的没的&quot;">​</a></h1><h2 id="关于网狐棋牌框架" tabindex="-1">关于网狐棋牌框架 <a class="header-anchor" href="#关于网狐棋牌框架" aria-label="Permalink to &quot;关于网狐棋牌框架&quot;">​</a></h2><ul><li><code>CTCPSocketService</code>用来处理各个服务器之间的通信的 <code>TCPNetworkEngine</code>用来和客户端用户之间的通信</li><li>同时<code>TCPNetworkEngine</code>还承担<code>CTCPSocketService</code>处理过的消息的转发</li><li><code>CTCPSocketService</code>应用了windows下两种常见的socket通信模式 <ul><li><code>WSAAsyncSelect</code>异步I/O模型处理各个服务器之间的通信</li><li>完成端口模型，为windows下特有的通信模型，支持高并发的模型</li></ul></li></ul><h2 id="同时使用github和gitlab" tabindex="-1">同时使用GitHub和GitLab <a class="header-anchor" href="#同时使用github和gitlab" aria-label="Permalink to &quot;同时使用GitHub和GitLab&quot;">​</a></h2><p>想要在同一项目里使用不同的远端仓库，使用不同的用户名邮箱来推送。找到了一个方案，本地能够改好，但是似乎不能生效。<a href="https://www.cnblogs.com/popfisher/p/5731232.html" target="_blank" rel="noreferrer">☞</a></p>',5),i=[c];function l(d,s,n,h,_,p){return o(),t("div",null,i)}const b=e(r,[["render",l]]);export{m as __pageData,b as default};
