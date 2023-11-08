import{_ as s,c as a,o as n,Q as l}from"./chunks/framework.1cc28bed.js";const F=JSON.parse('{"title":"瞎玩","description":"","frontmatter":{"date":"2022-05-26T00:00:00.000Z"},"headers":[],"relativePath":"code/program/stroll.md","filePath":"code/program/stroll.md","lastUpdated":1686728638000}'),p={name:"code/program/stroll.md"},o=l(`<h1 id="瞎玩" tabindex="-1">瞎玩 <a class="header-anchor" href="#瞎玩" aria-label="Permalink to &quot;瞎玩&quot;">​</a></h1><blockquote><p>记录平时的瞎搞</p></blockquote><h2 id="play-bot" tabindex="-1">play bot <a class="header-anchor" href="#play-bot" aria-label="Permalink to &quot;play bot&quot;">​</a></h2><h3 id="zhenxun-bot" tabindex="-1"><a href="https://github.com/HibiKier/zhenxun_bot" target="_blank" rel="noreferrer">zhenxun bot</a> <a class="header-anchor" href="#zhenxun-bot" aria-label="Permalink to &quot;[zhenxun bot](https://github.com/HibiKier/zhenxun_bot)&quot;">​</a></h3><blockquote><p>intro: 基于 Nonebot2 和 go-cqhttp 开发，以 postgresql 作为数据库，非常可爱的绪山真寻bot</p></blockquote><p><a href="https://github.com/DrAugus/zhenxun_bot/tree/augus" target="_blank" rel="noreferrer">食用指南</a>，直接一键部署。如果不想一键部署，也可以参考<a href="https://hibikier.github.io/zhenxun_bot/docs/installation_doc/" target="_blank" rel="noreferrer">安装文档</a></p><p>更多使用方法，请参考<a href="https://hibikier.github.io/zhenxun_bot/docs/help_doc/" target="_blank" rel="noreferrer">使用文档</a></p><p>踩坑了吗？好像踩了，又好像没踩。不了解机制。注意查看日志即可！</p><p>pg的坑肯定是踩了的！</p><h4 id="pg-坑" tabindex="-1">pg 坑 <a class="header-anchor" href="#pg-坑" aria-label="Permalink to &quot;pg 坑&quot;">​</a></h4><ul><li><p>本想在win平台，安装pg，但安装最新的<a href="https://www.enterprisedb.com/downloads/postgres-postgresql-downloads" target="_blank" rel="noreferrer">v14</a>出错。遂放弃，改用wsl，安装过程直接蓝屏笑嘻嘻。</p></li><li><p>直接购买服务器！</p></li><li><p>在centos上安装pg。然后发现自己购买的centos8，而官网写着</p><blockquote><p>The PostgreSQL Yum Repository currently supports: <strong>CentOS (7 and 6 only)</strong></p></blockquote><p>无奈重装了centos7。</p></li><li><p>按照官网<a href="https://www.postgresql.org/download/linux/redhat/" target="_blank" rel="noreferrer">文档</a></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://download.postgresql.org/pub/repos/yum/reporpms/EL-7-x86_64/pgdg-redhat-repo-latest.noarch.rpm</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">postgresql14-server</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/pgsql-14/bin/postgresql-14-setup</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">initdb</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">enable</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">postgresql-14</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">postgresql-14</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yum</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://download.postgresql.org/pub/repos/yum/reporpms/EL-7-x86_64/pgdg-redhat-repo-latest.noarch.rpm</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yum</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span><span style="color:#24292E;"> </span><span style="color:#032F62;">postgresql14-server</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/pgsql-14/bin/postgresql-14-setup</span><span style="color:#24292E;"> </span><span style="color:#032F62;">initdb</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">enable</span><span style="color:#24292E;"> </span><span style="color:#032F62;">postgresql-14</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#032F62;">postgresql-14</span></span></code></pre></div></li></ul><h4 id="食用pg" tabindex="-1">食用pg <a class="header-anchor" href="#食用pg" aria-label="Permalink to &quot;食用pg&quot;">​</a></h4><p>安装完毕后，系统会创建一个数据库超级用户 postgres，密码为空。进入 postgres</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-i</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-u</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">postgres</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-i</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-u</span><span style="color:#24292E;"> </span><span style="color:#032F62;">postgres</span></span></code></pre></div><p>输入<code>psql</code>，显示如下，即安装成功</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">-bash-4.2$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">psql</span></span>
<span class="line"><span style="color:#B392F0;">psql</span><span style="color:#E1E4E8;"> (14.3)</span></span>
<span class="line"><span style="color:#B392F0;">Type</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;help&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">for</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">help.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">postgres</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">#</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">-bash-4.2$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">psql</span></span>
<span class="line"><span style="color:#6F42C1;">psql</span><span style="color:#24292E;"> (14.3)</span></span>
<span class="line"><span style="color:#6F42C1;">Type</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;help&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">for</span><span style="color:#24292E;"> </span><span style="color:#032F62;">help.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">postgres</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">#</span></span></code></pre></div><p>修改数据库密码</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">\\password</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">\\password</span></span></code></pre></div><p>查看pg版本</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">select</span><span style="color:#E1E4E8;"> version();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">select</span><span style="color:#24292E;"> version();</span></span></code></pre></div><p>查看系统表</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">select</span><span style="color:#E1E4E8;"> * from pg_tables;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">select</span><span style="color:#24292E;"> * from pg_tables;</span></span></code></pre></div><h3 id="yunzai-bot" tabindex="-1"><a href="https://github.com/Le-niao/Yunzai-Bot" target="_blank" rel="noreferrer">yunzai bot</a> <a class="header-anchor" href="#yunzai-bot" aria-label="Permalink to &quot;[yunzai bot](https://github.com/Le-niao/Yunzai-Bot)&quot;">​</a></h3><blockquote><p>原神QQ群机器人，通过米游社接口，查询原神游戏信息，快速生成图片返回</p></blockquote><p><a href="https://github.com/Le-niao/Yunzai-Bot/issues/3" target="_blank" rel="noreferrer">部署</a>过程在安装nodejs时摔了个跟头。</p><ol><li><p>如果nodejs版本不对，会在执行下列命令时卡死。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-g</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--registry=https://registry.npm.taobao.org</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cnpm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--registry=https://registry.npm.taobao.org</span></span></code></pre></div></li><li><p>我的服务器在执行下述命令时，操作失败。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dnf</span></span>
<span class="line"><span style="color:#B392F0;">dnf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">module</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nodejs:16</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">yum</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dnf</span></span>
<span class="line"><span style="color:#6F42C1;">dnf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">module</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nodejs:16</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span></span></code></pre></div></li><li><p>无奈使用官网的教程进行安装</p></li></ol><p>修改账号 使用 <code>pnpm login</code>，上面的都是基操了。主要是依赖，依赖 node 和 redis，然后下面的 miao-plugin 依赖更多，<code>puppeteer</code> 非常多依赖，，已经在项目里写入脚本</p><h4 id="安装-nodejs-流程" tabindex="-1">安装 nodejs 流程 <a class="header-anchor" href="#安装-nodejs-流程" aria-label="Permalink to &quot;安装 nodejs 流程&quot;">​</a></h4><ul><li><p><a href="https://nodejs.org/en/download/" target="_blank" rel="noreferrer">官网</a>复制 <a href="https://nodejs.org/dist/v16.15.0/node-v16.15.0-linux-x64.tar.xz" target="_blank" rel="noreferrer">linux 二进制文件</a> (以16.15.0为准 (includes npm 8.5.5))</p></li><li><p>执行命令安装</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/local/src/</span></span>
<span class="line"><span style="color:#B392F0;">wget</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://nodejs.org/dist/v16.15.0/node-v16.15.0-linux-x64.tar.xz</span></span>
<span class="line"><span style="color:#B392F0;">tar</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">xf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">node-v16.15.0-linux-x64.tar.xz</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">node-v16.15.0-linux-x64/</span></span>
<span class="line"><span style="color:#B392F0;">./bin/node</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-v</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 执行node命令 查看版本</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/local/src/</span></span>
<span class="line"><span style="color:#6F42C1;">wget</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://nodejs.org/dist/v16.15.0/node-v16.15.0-linux-x64.tar.xz</span></span>
<span class="line"><span style="color:#6F42C1;">tar</span><span style="color:#24292E;"> </span><span style="color:#032F62;">xf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">node-v16.15.0-linux-x64.tar.xz</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">node-v16.15.0-linux-x64/</span></span>
<span class="line"><span style="color:#6F42C1;">./bin/node</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-v</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 执行node命令 查看版本</span></span></code></pre></div></li><li><p>设置软连接</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">ln</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-s</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/local/src/node-v16.15.0-linux-x64/bin/node</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/bin/node</span></span>
<span class="line"><span style="color:#B392F0;">node</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-v</span></span>
<span class="line"><span style="color:#6A737D;"># v16.15.0</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#B392F0;">ln</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-s</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/local/src/node-v16.15.0-linux-x64/bin/npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/bin/npm</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-v</span></span>
<span class="line"><span style="color:#6A737D;"># 8.5.5</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">ln</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-s</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/local/src/node-v16.15.0-linux-x64/bin/node</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/bin/node</span></span>
<span class="line"><span style="color:#6F42C1;">node</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-v</span></span>
<span class="line"><span style="color:#6A737D;"># v16.15.0</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#6F42C1;">ln</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-s</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/local/src/node-v16.15.0-linux-x64/bin/npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/bin/npm</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-v</span></span>
<span class="line"><span style="color:#6A737D;"># 8.5.5</span></span></code></pre></div></li></ul><h4 id="插件" tabindex="-1">插件 <a class="header-anchor" href="#插件" aria-label="Permalink to &quot;插件&quot;">​</a></h4><ul><li><a href="https://github.com/yoimiya-kokomi/miao-plugin" target="_blank" rel="noreferrer">喵喵插件</a></li></ul>`,31),e=[o];function t(r,c,i,y,d,E){return n(),a("div",null,e)}const u=s(p,[["render",t]]);export{F as __pageData,u as default};
