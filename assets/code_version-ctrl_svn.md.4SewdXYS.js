import{_ as a,c as i,a3 as e,o as t}from"./chunks/framework.DDs3IadZ.js";const c=JSON.parse('{"title":"svn","description":"","frontmatter":{},"headers":[],"relativePath":"code/version-ctrl/svn.md","filePath":"code/version-ctrl/svn.md","lastUpdated":1716791141000}'),n={name:"code/version-ctrl/svn.md"};function l(h,s,o,p,d,r){return t(),i("div",null,s[0]||(s[0]=[e(`<h1 id="svn" tabindex="-1">svn <a class="header-anchor" href="#svn" aria-label="Permalink to &quot;svn&quot;">​</a></h1><h2 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-label="Permalink to &quot;常用命令&quot;">​</a></h2><h3 id="checkout" tabindex="-1">checkout <a class="header-anchor" href="#checkout" aria-label="Permalink to &quot;checkout&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">svn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PATH</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [DES </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">PATH]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 简写</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">svn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> co</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ...</span></span></code></pre></div><h3 id="update" tabindex="-1">update <a class="header-anchor" href="#update" aria-label="Permalink to &quot;update&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">svn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [-r] [version] [path]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 简写</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">svn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> up</span></span></code></pre></div><h3 id="add" tabindex="-1">add <a class="header-anchor" href="#add" aria-label="Permalink to &quot;add&quot;">​</a></h3><p>同 git add：<code>svn add .</code></p><h3 id="lock" tabindex="-1">lock <a class="header-anchor" href="#lock" aria-label="Permalink to &quot;lock&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">svn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lock</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;lock message&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [--force] path</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">svn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unlock</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> path</span></span></code></pre></div><h3 id="commit" tabindex="-1">commit <a class="header-anchor" href="#commit" aria-label="Permalink to &quot;commit&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">svn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;commit message&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [-N] [--no-unlock] path</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">svn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;add test file for my test&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  test.js</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 简写</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">svn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  ci</span></span></code></pre></div><h3 id="status" tabindex="-1">status <a class="header-anchor" href="#status" aria-label="Permalink to &quot;status&quot;">​</a></h3><h3 id="log" tabindex="-1">log <a class="header-anchor" href="#log" aria-label="Permalink to &quot;log&quot;">​</a></h3><h3 id="info" tabindex="-1">info <a class="header-anchor" href="#info" aria-label="Permalink to &quot;info&quot;">​</a></h3><h3 id="diff" tabindex="-1">diff <a class="header-anchor" href="#diff" aria-label="Permalink to &quot;diff&quot;">​</a></h3><h3 id="help" tabindex="-1">help <a class="header-anchor" href="#help" aria-label="Permalink to &quot;help&quot;">​</a></h3><h2 id="externals" tabindex="-1">externals <a class="header-anchor" href="#externals" aria-label="Permalink to &quot;externals&quot;">​</a></h2><blockquote><p>official <a href="https://tortoisesvn.net/docs/release/TortoiseSVN_zh_CN/tsvn-dug-externals.html" target="_blank" rel="noreferrer">zh</a> <a href="https://tortoisesvn.net/docs/release/TortoiseSVN_en/tsvn-dug-externals.html" target="_blank" rel="noreferrer">en</a></p></blockquote><p>Subversion (SVN) 的 <code>externals</code> 功能允许您将外部的 Subversion 仓库中的文件或目录链接到您当前的版本库中。这对于共享公共文件或库非常有用，而无需将这些文件或库完全复制到您自己的版本库中。</p><p>要使用 <code>externals</code>，首先需要在您的版本库中找到要将外部文件链接到的目录，并执行以下操作：</p><ol><li>使用 <code>svn propedit svn:externals</code> 来编辑该目录的 <code>svn:externals</code> 属性。</li><li>在编辑器中，输入要链接的外部文件或目录的信息，格式为： <code>&lt;外部目录名&gt; &lt;外部版本库 URL&gt;</code> 例如： <code>my_lib https://svn.example.com/repos/my_lib</code>s</li><li>保存并退出编辑器。</li><li>提交更改，使用 <code>svn commit</code> 命令。</li></ol><p>现在，当您检出版本库时，您会看到在该目录中链接的外部文件或目录。如果您对外部文件进行了更改并提交了更改，则需要更新您的版本库，以便在本地看到这些更改。要这样做，请使用 <code>svn update</code> 命令。</p><p>递归列出所有 externals</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">svn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> propget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> svn:externals</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -R</span></span></code></pre></div>`,25)]))}const u=a(n,[["render",l]]);export{c as __pageData,u as default};
