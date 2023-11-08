import{_ as s,c as o,o as e,Q as a}from"./chunks/framework.1cc28bed.js";const u=JSON.parse('{"title":"chocolatey","description":"","frontmatter":{"title":"chocolatey","icon":"simple-icons:chocolatey","date":"2022-07-20T17:52:11.000Z","category":["编程"],"tag":["chocolatey","工具","包"]},"headers":[],"relativePath":"computer/os/windows/chocolatey.md","filePath":"computer/os/windows/chocolatey.md","lastUpdated":1686727503000}'),l={name:"computer/os/windows/chocolatey.md"},t=a('<h2 id="install" tabindex="-1"><a href="https://chocolatey.org/install" target="_blank" rel="noreferrer">Install</a> <a class="header-anchor" href="#install" aria-label="Permalink to &quot;[Install]&quot;">​</a></h2><p>Install Chocolatey for Individual Use</p><p>use an administrative shell</p><p>run</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">Set-ExecutionPolicy</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Bypass</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-Scope</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Process</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-Force</span><span style="color:#E1E4E8;">; [System.Net.ServicePointManager]</span><span style="color:#79B8FF;">:</span><span style="color:#E1E4E8;">:SecurityProtocol </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; </span><span style="color:#B392F0;">iex</span><span style="color:#E1E4E8;"> ((New-Object </span><span style="color:#9ECBFF;">System.Net.WebClient</span><span style="color:#E1E4E8;">).DownloadString(</span><span style="color:#B392F0;">&#39;https://community.chocolatey.org/install.ps1&#39;</span><span style="color:#E1E4E8;">))</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">Set-ExecutionPolicy</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Bypass</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-Scope</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Process</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-Force</span><span style="color:#24292E;">; [System.Net.ServicePointManager]</span><span style="color:#005CC5;">:</span><span style="color:#24292E;">:SecurityProtocol </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; </span><span style="color:#6F42C1;">iex</span><span style="color:#24292E;"> ((New-Object </span><span style="color:#032F62;">System.Net.WebClient</span><span style="color:#24292E;">).DownloadString(</span><span style="color:#6F42C1;">&#39;https://community.chocolatey.org/install.ps1&#39;</span><span style="color:#24292E;">))</span></span></code></pre></div><h2 id="upgrade" tabindex="-1"><a href="https://docs.chocolatey.org/en-us/getting-started#upgrade" target="_blank" rel="noreferrer">Upgrade</a> <a class="header-anchor" href="#upgrade" aria-label="Permalink to &quot;[Upgrade]&quot;">​</a></h2><p>See more info on the official website</p><h2 id="安装其他包" tabindex="-1">安装其他包 <a class="header-anchor" href="#安装其他包" aria-label="Permalink to &quot;安装其他包&quot;">​</a></h2><p>例如: <code>docfx</code></p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">choco</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docfx</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">choco</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docfx</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span></span></code></pre></div><blockquote><p>TIPS: Environment Vars (like PATH) have changed. Close/reopen your shell to see the changes (or in powershell/cmd.exe just type <code>refreshenv</code>).</p></blockquote>',11),n=[t];function p(c,r,i,y,d,h){return e(),o("div",null,n)}const g=s(l,[["render",p]]);export{u as __pageData,g as default};