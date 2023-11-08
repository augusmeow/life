import{_ as s,c as a,o as n,Q as l}from"./chunks/framework.1cc28bed.js";const h=JSON.parse('{"title":"Docus","description":"","frontmatter":{"icon":"twemoji:card-file-box"},"headers":[],"relativePath":"code/front-end/docus.md","filePath":"code/front-end/docus.md","lastUpdated":1686797227000}'),e={name:"code/front-end/docus.md"},o=l(`<h1 id="docus" tabindex="-1">Docus <a class="header-anchor" href="#docus" aria-label="Permalink to &quot;Docus&quot;">​</a></h1><blockquote><p>此网站的一些指南和疑问</p></blockquote><h2 id="指南" tabindex="-1">指南 <a class="header-anchor" href="#指南" aria-label="Permalink to &quot;指南&quot;">​</a></h2><h3 id="icon-的使用" tabindex="-1">icon 的使用 <a class="header-anchor" href="#icon-的使用" aria-label="Permalink to &quot;icon 的使用&quot;">​</a></h3><p>直接点击<a href="https://icones.js.org/" target="_blank" rel="noreferrer">此链接</a><a href="https://icones.js.org/collection/all" target="_blank" rel="noreferrer">搜索</a>复制</p><h3 id="built-in-component" tabindex="-1">built-in component <a class="header-anchor" href="#built-in-component" aria-label="Permalink to &quot;built-in component&quot;">​</a></h3><p type="success">variety of types ::list</p><ul><li>primary</li><li>success</li><li>info</li><li>warning</li><li>danger ::</li></ul><h4 id="alert" tabindex="-1"><code>&lt;Alert /&gt;</code> <a class="header-anchor" href="#alert" aria-label="Permalink to &quot;\`&lt;Alert /&gt;\`&quot;">​</a></h4><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">::alert{type=&quot;info&quot;}</span></span>
<span class="line"><span style="color:#E1E4E8;">msg</span></span>
<span class="line"><span style="color:#E1E4E8;">::</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">::alert{type=&quot;info&quot;}</span></span>
<span class="line"><span style="color:#24292E;">msg</span></span>
<span class="line"><span style="color:#24292E;">::</span></span></code></pre></div><h4 id="badge" tabindex="-1"><code>&lt;Badge /&gt;</code> <a class="header-anchor" href="#badge" aria-label="Permalink to &quot;\`&lt;Badge /&gt;\`&quot;">​</a></h4><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">:badge[</span><span style="color:#DBEDFF;text-decoration:underline;">v1.2</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">:badge[</span><span style="color:#DBEDFF;text-decoration:underline;">Deprecated</span><span style="color:#E1E4E8;">]{type=&quot;warning&quot;}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">::badge{type=&quot;danger&quot;}</span></span>
<span class="line"><span style="color:#E1E4E8;">Not found!</span></span>
<span class="line"><span style="color:#E1E4E8;">::</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">:badge[</span><span style="color:#032F62;text-decoration:underline;">v1.2</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">:badge[</span><span style="color:#032F62;text-decoration:underline;">Deprecated</span><span style="color:#24292E;">]{type=&quot;warning&quot;}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">::badge{type=&quot;danger&quot;}</span></span>
<span class="line"><span style="color:#24292E;">Not found!</span></span>
<span class="line"><span style="color:#24292E;">::</span></span></code></pre></div><h4 id="buttonlink" tabindex="-1"><code>&lt;ButtonLink /&gt;</code> <a class="header-anchor" href="#buttonlink" aria-label="Permalink to &quot;\`&lt;ButtonLink /&gt;\`&quot;">​</a></h4><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">:button-link[</span><span style="color:#DBEDFF;text-decoration:underline;">Play</span><span style="color:#E1E4E8;">]{icon=&quot;IconStackBlitz&quot; href=&quot;#&quot; blank}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">:button-link[</span><span style="color:#032F62;text-decoration:underline;">Play</span><span style="color:#24292E;">]{icon=&quot;IconStackBlitz&quot; href=&quot;#&quot; blank}</span></span></code></pre></div><h4 id="callout" tabindex="-1"><code>&lt;Callout /&gt;</code> <a class="header-anchor" href="#callout" aria-label="Permalink to &quot;\`&lt;Callout /&gt;\`&quot;">​</a></h4><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">::callout{type=&quot;warning&quot;}</span></span>
<span class="line"><span style="color:#E1E4E8;">#summary</span></span>
<span class="line"><span style="color:#E1E4E8;">This is a callout! Click me to open.</span></span>
<span class="line"><span style="color:#E1E4E8;">#content</span></span>
<span class="line"><span style="color:#E1E4E8;">This is the content of the callout.</span></span>
<span class="line"><span style="color:#E1E4E8;">::</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">::callout{type=&quot;warning&quot;}</span></span>
<span class="line"><span style="color:#24292E;">#summary</span></span>
<span class="line"><span style="color:#24292E;">This is a callout! Click me to open.</span></span>
<span class="line"><span style="color:#24292E;">#content</span></span>
<span class="line"><span style="color:#24292E;">This is the content of the callout.</span></span>
<span class="line"><span style="color:#24292E;">::</span></span></code></pre></div><h4 id="card" tabindex="-1"><code>&lt;Card /&gt;</code> <a class="header-anchor" href="#card" aria-label="Permalink to &quot;\`&lt;Card /&gt;\`&quot;">​</a></h4><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">::card{icon=&quot;logos:nuxt-icon&quot;}</span></span>
<span class="line"><span style="color:#E1E4E8;">#title</span></span>
<span class="line"><span style="color:#E1E4E8;">Nuxt Architecture.</span></span>
<span class="line"><span style="color:#E1E4E8;">#description</span></span>
<span class="line"><span style="color:#E1E4E8;">Based on </span><span style="color:#E1E4E8;font-weight:bold;">**Nuxt 3**</span><span style="color:#E1E4E8;"> and </span><span style="color:#E1E4E8;font-weight:bold;">**Nuxt Content**</span><span style="color:#E1E4E8;">. :br</span></span>
<span class="line"><span style="color:#E1E4E8;">Use Nuxt to build a static site, or a serverless app.</span></span>
<span class="line"><span style="color:#E1E4E8;">::</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">::card{icon=&quot;logos:nuxt-icon&quot;}</span></span>
<span class="line"><span style="color:#24292E;">#title</span></span>
<span class="line"><span style="color:#24292E;">Nuxt Architecture.</span></span>
<span class="line"><span style="color:#24292E;">#description</span></span>
<span class="line"><span style="color:#24292E;">Based on </span><span style="color:#24292E;font-weight:bold;">**Nuxt 3**</span><span style="color:#24292E;"> and </span><span style="color:#24292E;font-weight:bold;">**Nuxt Content**</span><span style="color:#24292E;">. :br</span></span>
<span class="line"><span style="color:#24292E;">Use Nuxt to build a static site, or a serverless app.</span></span>
<span class="line"><span style="color:#24292E;">::</span></span></code></pre></div><h4 id="cardgrid" tabindex="-1"><code>&lt;CardGrid /&gt;</code> <a class="header-anchor" href="#cardgrid" aria-label="Permalink to &quot;\`&lt;CardGrid /&gt;\`&quot;">​</a></h4><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">::card-grid</span></span>
<span class="line"><span style="color:#E1E4E8;">#title</span></span>
<span class="line"><span style="color:#E1E4E8;">What&#39;s included</span></span>
<span class="line"><span style="color:#E1E4E8;">#root</span></span>
<span class="line"><span style="color:#E1E4E8;">:ellipsis</span></span>
<span class="line"><span style="color:#E1E4E8;">#default</span></span>
<span class="line"><span style="color:#E1E4E8;">    ::card</span></span>
<span class="line"><span style="color:#E1E4E8;">    #title</span></span>
<span class="line"><span style="color:#E1E4E8;">    Nuxt Architecture.</span></span>
<span class="line"><span style="color:#E1E4E8;">    #description</span></span>
<span class="line"><span style="color:#E1E4E8;">    Harness the full power of Nuxt and the Nuxt ecosystem.</span></span>
<span class="line"><span style="color:#E1E4E8;">    ::</span></span>
<span class="line"><span style="color:#E1E4E8;">    ::card</span></span>
<span class="line"><span style="color:#E1E4E8;">    #title</span></span>
<span class="line"><span style="color:#E1E4E8;">    Vue Components.</span></span>
<span class="line"><span style="color:#E1E4E8;">    #description</span></span>
<span class="line"><span style="color:#E1E4E8;">    Use built-in components (or your own!) inside your content.</span></span>
<span class="line"><span style="color:#E1E4E8;">    ::</span></span>
<span class="line"><span style="color:#E1E4E8;">    ::card</span></span>
<span class="line"><span style="color:#E1E4E8;">    #title</span></span>
<span class="line"><span style="color:#E1E4E8;">    Write Markdown.</span></span>
<span class="line"><span style="color:#E1E4E8;">    #description</span></span>
<span class="line"><span style="color:#E1E4E8;">    Enjoy the ease and simplicity of Markdown and discover MDC syntax.</span></span>
<span class="line"><span style="color:#E1E4E8;">    ::</span></span>
<span class="line"><span style="color:#E1E4E8;">::</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">::card-grid</span></span>
<span class="line"><span style="color:#24292E;">#title</span></span>
<span class="line"><span style="color:#24292E;">What&#39;s included</span></span>
<span class="line"><span style="color:#24292E;">#root</span></span>
<span class="line"><span style="color:#24292E;">:ellipsis</span></span>
<span class="line"><span style="color:#24292E;">#default</span></span>
<span class="line"><span style="color:#24292E;">    ::card</span></span>
<span class="line"><span style="color:#24292E;">    #title</span></span>
<span class="line"><span style="color:#24292E;">    Nuxt Architecture.</span></span>
<span class="line"><span style="color:#24292E;">    #description</span></span>
<span class="line"><span style="color:#24292E;">    Harness the full power of Nuxt and the Nuxt ecosystem.</span></span>
<span class="line"><span style="color:#24292E;">    ::</span></span>
<span class="line"><span style="color:#24292E;">    ::card</span></span>
<span class="line"><span style="color:#24292E;">    #title</span></span>
<span class="line"><span style="color:#24292E;">    Vue Components.</span></span>
<span class="line"><span style="color:#24292E;">    #description</span></span>
<span class="line"><span style="color:#24292E;">    Use built-in components (or your own!) inside your content.</span></span>
<span class="line"><span style="color:#24292E;">    ::</span></span>
<span class="line"><span style="color:#24292E;">    ::card</span></span>
<span class="line"><span style="color:#24292E;">    #title</span></span>
<span class="line"><span style="color:#24292E;">    Write Markdown.</span></span>
<span class="line"><span style="color:#24292E;">    #description</span></span>
<span class="line"><span style="color:#24292E;">    Enjoy the ease and simplicity of Markdown and discover MDC syntax.</span></span>
<span class="line"><span style="color:#24292E;">    ::</span></span>
<span class="line"><span style="color:#24292E;">::</span></span></code></pre></div><h4 id="codegroup" tabindex="-1"><code>&lt;CodeGroup /&gt;</code> <a class="header-anchor" href="#codegroup" aria-label="Permalink to &quot;\`&lt;CodeGroup /&gt;\`&quot;">​</a></h4><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">::code-group</span></span>
<span class="line"><span style="color:#E1E4E8;">    \`\`\`bash [</span><span style="color:#DBEDFF;text-decoration:underline;">Yarn</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    yarn add docus</span></span>
<span class="line"><span style="color:#E1E4E8;">    \`\`\`</span></span>
<span class="line"><span style="color:#E1E4E8;">    \`\`\`bash [</span><span style="color:#DBEDFF;text-decoration:underline;">NPM</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    npm install docus</span></span>
<span class="line"><span style="color:#E1E4E8;">    \`\`\`</span></span>
<span class="line"><span style="color:#E1E4E8;">::</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">::code-group</span></span>
<span class="line"><span style="color:#24292E;">    \`\`\`bash [</span><span style="color:#032F62;text-decoration:underline;">Yarn</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    yarn add docus</span></span>
<span class="line"><span style="color:#24292E;">    \`\`\`</span></span>
<span class="line"><span style="color:#24292E;">    \`\`\`bash [</span><span style="color:#032F62;text-decoration:underline;">NPM</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    npm install docus</span></span>
<span class="line"><span style="color:#24292E;">    \`\`\`</span></span>
<span class="line"><span style="color:#24292E;">::</span></span></code></pre></div><h4 id="icon" tabindex="-1"><code>&lt;Icon /&gt;</code> <a class="header-anchor" href="#icon" aria-label="Permalink to &quot;\`&lt;Icon /&gt;\`&quot;">​</a></h4><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">:icon{name=&quot;logos:nuxt-icon&quot;}</span></span>
<span class="line"><span style="color:#E1E4E8;">:icon{name=&quot;logos:vue&quot;}</span></span>
<span class="line"><span style="color:#E1E4E8;">:icon{name=&quot;logos:nuxt-icon&quot;}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">:icon{name=&quot;logos:nuxt-icon&quot;}</span></span>
<span class="line"><span style="color:#24292E;">:icon{name=&quot;logos:vue&quot;}</span></span>
<span class="line"><span style="color:#24292E;">:icon{name=&quot;logos:nuxt-icon&quot;}</span></span></code></pre></div><h4 id="list" tabindex="-1"><code>&lt;List /&gt;</code> <a class="header-anchor" href="#list" aria-label="Permalink to &quot;\`&lt;List /&gt;\`&quot;">​</a></h4><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">::list{type=&quot;primary&quot;}</span></span>
<span class="line"><span style="color:#FFAB70;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#E1E4E8;font-weight:bold;">**Important**</span></span>
<span class="line"><span style="color:#FFAB70;">-</span><span style="color:#E1E4E8;"> Always</span></span>
<span class="line"><span style="color:#E1E4E8;">::</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">::list{type=&quot;primary&quot;}</span></span>
<span class="line"><span style="color:#E36209;">-</span><span style="color:#24292E;"> </span><span style="color:#24292E;font-weight:bold;">**Important**</span></span>
<span class="line"><span style="color:#E36209;">-</span><span style="color:#24292E;"> Always</span></span>
<span class="line"><span style="color:#24292E;">::</span></span></code></pre></div><h4 id="terminal" tabindex="-1"><code>&lt;Terminal /&gt;</code> <a class="header-anchor" href="#terminal" aria-label="Permalink to &quot;\`&lt;Terminal /&gt;\`&quot;">​</a></h4><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">:terminal{content=&quot;nuxi build&quot;}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">:terminal{content=&quot;nuxi build&quot;}</span></span></code></pre></div><h4 id="videoplayer" tabindex="-1"><code>&lt;VideoPlayer /&gt;</code> <a class="header-anchor" href="#videoplayer" aria-label="Permalink to &quot;\`&lt;VideoPlayer /&gt;\`&quot;">​</a></h4><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">::div</span></span>
<span class="line"><span style="color:#E1E4E8;">:video-player{src=&quot;https://www.youtube.com/watch?v=o9e12WbKrd8&quot;}</span></span>
<span class="line"><span style="color:#E1E4E8;">::</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">::div</span></span>
<span class="line"><span style="color:#24292E;">:video-player{src=&quot;https://www.youtube.com/watch?v=o9e12WbKrd8&quot;}</span></span>
<span class="line"><span style="color:#24292E;">::</span></span></code></pre></div><h3 id="component" tabindex="-1">component <a class="header-anchor" href="#component" aria-label="Permalink to &quot;component&quot;">​</a></h3><p>use <code>:component_name</code> in <code>content/</code> *.md, as</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">:component_name</span></span>
<span class="line"><span style="color:#E1E4E8;">or</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;component_name /&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">:component_name</span></span>
<span class="line"><span style="color:#24292E;">or</span></span>
<span class="line"><span style="color:#24292E;">&lt;component_name /&gt;</span></span></code></pre></div><p>about component name (<a href="https://nuxt.com/docs/guide/directory-structure/components#component-names" target="_blank" rel="noreferrer">refer</a>)</p><p>If you have a component in nested directories such as:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">components/</span></span>
<span class="line"><span style="color:#B392F0;">--</span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">base/</span></span>
<span class="line"><span style="color:#B392F0;">----</span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo/</span></span>
<span class="line"><span style="color:#B392F0;">------</span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Button.vue</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">components/</span></span>
<span class="line"><span style="color:#6F42C1;">--</span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">base/</span></span>
<span class="line"><span style="color:#6F42C1;">----</span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo/</span></span>
<span class="line"><span style="color:#6F42C1;">------</span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Button.vue</span></span></code></pre></div><p>... then the component&#39;s name will be based on its own path directory and filename, with duplicate segments being removed. Therefore, the component&#39;s name will be:</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">BaseFooButton</span><span style="color:#E1E4E8;"> /&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">BaseFooButton</span><span style="color:#24292E;"> /&gt;</span></span></code></pre></div><p>::alert For clarity, we recommend that the component&#39;s filename matches its name. (So, in the example above, you could rename <code>Button.vue</code> to be <code>BaseFooButton.vue</code>.) ::</p><h2 id="疑问" tabindex="-1">疑问 <a class="header-anchor" href="#疑问" aria-label="Permalink to &quot;疑问&quot;">​</a></h2><h3 id="this-web-question" tabindex="-1">this web question <a class="header-anchor" href="#this-web-question" aria-label="Permalink to &quot;this web question&quot;">​</a></h3><ul><li>插件有吗</li><li>搜索🔍是否需要重新申请</li></ul><h3 id="found-this-web-s-bug" tabindex="-1">found this web&#39;s bug <a class="header-anchor" href="#found-this-web-s-bug" aria-label="Permalink to &quot;found this web&#39;s bug&quot;">​</a></h3><p type="danger">::list</p><ul><li><p>网站似乎非常卡顿，。。</p></li><li><p>目录过长时，目录没有滚动条</p></li><li><p>不支持以中文名命名的 markdown</p></li><li><p>markdown 写在下方的链接不受支持</p><p>::alert nono 是下面这样的不支持 ::</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#FFAB70;">-</span><span style="color:#E1E4E8;"> [</span><span style="color:#DBEDFF;text-decoration:underline;">link</span><span style="color:#E1E4E8;">] not supported  </span></span>
<span class="line"><span style="color:#FFAB70;">-</span><span style="color:#E1E4E8;"> [</span><span style="color:#DBEDFF;text-decoration:underline;">link</span><span style="color:#E1E4E8;">][</span><span style="color:#DBEDFF;text-decoration:underline;">link</span><span style="color:#E1E4E8;">] supported</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#DBEDFF;text-decoration:underline;">link</span><span style="color:#E1E4E8;">]: </span><span style="color:#E1E4E8;text-decoration:underline;">draugus.github.io</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#E36209;">-</span><span style="color:#24292E;"> [</span><span style="color:#032F62;text-decoration:underline;">link</span><span style="color:#24292E;">] not supported  </span></span>
<span class="line"><span style="color:#E36209;">-</span><span style="color:#24292E;"> [</span><span style="color:#032F62;text-decoration:underline;">link</span><span style="color:#24292E;">][</span><span style="color:#032F62;text-decoration:underline;">link</span><span style="color:#24292E;">] supported</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#032F62;text-decoration:underline;">link</span><span style="color:#24292E;">]: </span><span style="color:#24292E;text-decoration:underline;">draugus.github.io</span></span></code></pre></div></li><li type="success"><p>是否可以隐藏文件不在列表里显示 (这个算是 feature 吧) :: ::list</p></li><li><p><s>markdown 多级列表不支持</s> 现在支持了 ::</p></li></ul><h2 id="test" tabindex="-1">test <a class="header-anchor" href="#test" aria-label="Permalink to &quot;test&quot;">​</a></h2>`,46),p=[o];function t(c,i,r,d,E,u){return n(),a("div",null,p)}const g=s(e,[["render",t]]);export{h as __pageData,g as default};
