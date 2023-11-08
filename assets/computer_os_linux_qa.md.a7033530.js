import{_ as s,c as a,o as n,Q as l}from"./chunks/framework.1cc28bed.js";const F=JSON.parse('{"title":"Linux 问题收集","description":"","frontmatter":{},"headers":[],"relativePath":"computer/os/linux/qa.md","filePath":"computer/os/linux/qa.md","lastUpdated":1686727503000}'),o={name:"computer/os/linux/qa.md"},p=l(`<h1 id="linux-问题收集" tabindex="-1">Linux 问题收集 <a class="header-anchor" href="#linux-问题收集" aria-label="Permalink to &quot;Linux 问题收集&quot;">​</a></h1><h2 id="命令行使用代理" tabindex="-1">命令行使用代理 <a class="header-anchor" href="#命令行使用代理" aria-label="Permalink to &quot;命令行使用代理&quot;">​</a></h2><p><code>export HTTPS_PROXY=your_proxy_addr</code></p><h2 id="zsh-权限不够解决方法" tabindex="-1">zsh: 权限不够解决方法 <a class="header-anchor" href="#zsh-权限不够解决方法" aria-label="Permalink to &quot;zsh: 权限不够解决方法&quot;">​</a></h2><p><code>chmod u+x *.sh</code></p><h2 id="杀掉进程" tabindex="-1">杀掉进程 <a class="header-anchor" href="#杀掉进程" aria-label="Permalink to &quot;杀掉进程&quot;">​</a></h2><p><a href="https://www.cnblogs.com/wintest/p/12749090.html" target="_blank" rel="noreferrer">Linux下如何通过一行命令查找并杀掉进程</a></p><ol><li>查找指定进程：agent <code>ps -ef | grep agent</code></li><li>根据找到的进程号pid，强制杀掉进程（假设进程号为 15750） <code>kill -9 15750</code></li><li>如果我们要杀掉的进程个数不多的话，用上面的命令不需要耗费多少时间，但如果进程个数比较多的时候, 使用 kill -9 进程号 一个个的杀掉进程，可能会比较麻烦，且耗时长。于是，我们需要一个能够快速杀掉进程的命令，如下（以杀掉所有 flask 进程为例）：</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">ps</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-ef</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">grep</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">flask</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">grep</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-v</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">grep</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">awk</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;{print $2}&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">xargs</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">kill</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-9</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">ps</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-ef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">grep</span><span style="color:#24292E;"> </span><span style="color:#032F62;">flask</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">grep</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-v</span><span style="color:#24292E;"> </span><span style="color:#032F62;">grep</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">awk</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;{print $2}&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">xargs</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kill</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-9</span></span></code></pre></div><p>命令分析</p><table><thead><tr><th style="text-align:center;">命令</th><th style="text-align:center;">作用</th></tr></thead><tbody><tr><td style="text-align:center;">\`ps -ef</td><td style="text-align:center;">grep flask\`</td></tr><tr><td style="text-align:center;"><code>grep -v grep</code></td><td style="text-align:center;">过滤包含 grep 的进程行</td></tr><tr><td style="text-align:center;"><code>awk &#39;{print $2}&#39;</code></td><td style="text-align:center;">提取找到的进程行记录中第二列的参数，也就是flask的进程号</td></tr><tr><td style="text-align:center;"><code>xargs kill -9</code></td><td style="text-align:center;">把前面的参数都传递给后面的命令 kill -9</td></tr></tbody></table><h2 id="解决linux的-bash-xx-permission-denied" tabindex="-1">解决linux的-bash: ./xx: Permission denied <a class="header-anchor" href="#解决linux的-bash-xx-permission-denied" aria-label="Permalink to &quot;解决linux的-bash: ./xx: Permission denied&quot;">​</a></h2><p>在linux下执行sh文件时提示下面信息：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">./xx.sh:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Permission</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">denied</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">./xx.sh:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Permission</span><span style="color:#24292E;"> </span><span style="color:#032F62;">denied</span></span></code></pre></div><p>解决：<code>chmod 777 xx.sh</code></p><h2 id="g-command-not-found" tabindex="-1">g++: command not found <a class="header-anchor" href="#g-command-not-found" aria-label="Permalink to &quot;g++: command not found&quot;">​</a></h2><p>G++没有装或却没有更新</p><p>查看：<code>g++ --version</code></p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># centos：</span></span>
<span class="line"><span style="color:#B392F0;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">update</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gcc</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">#(更新)</span></span>
<span class="line"><span style="color:#B392F0;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gcc+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gcc-c++</span></span>
<span class="line"><span style="color:#6A737D;"># ubuntu：</span></span>
<span class="line"><span style="color:#B392F0;">apt-get</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">update</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gcc</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">#(更新)</span></span>
<span class="line"><span style="color:#B392F0;">apt-get</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">g++</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># centos：</span></span>
<span class="line"><span style="color:#6F42C1;">yum</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span><span style="color:#24292E;"> </span><span style="color:#032F62;">update</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gcc</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#(更新)</span></span>
<span class="line"><span style="color:#6F42C1;">yum</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gcc+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gcc-c++</span></span>
<span class="line"><span style="color:#6A737D;"># ubuntu：</span></span>
<span class="line"><span style="color:#6F42C1;">apt-get</span><span style="color:#24292E;"> </span><span style="color:#032F62;">update</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gcc</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">#(更新)</span></span>
<span class="line"><span style="color:#6F42C1;">apt-get</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">g++</span></span></code></pre></div>`,19),e=[p];function t(c,r,y,i,E,d){return n(),a("div",null,e)}const g=s(o,[["render",t]]);export{F as __pageData,g as default};
