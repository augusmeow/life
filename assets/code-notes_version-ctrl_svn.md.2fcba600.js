import{_ as e,c as s,o,Q as t}from"./chunks/framework.1cc28bed.js";const u=JSON.parse('{"title":"svn","description":"","frontmatter":{"icon":"file-icons:tortoisesvn"},"headers":[],"relativePath":"code-notes/version-ctrl/svn.md","filePath":"code-notes/version-ctrl/svn.md","lastUpdated":1686797227000}'),a={name:"code-notes/version-ctrl/svn.md"},n=t('<h1 id="svn" tabindex="-1">svn <a class="header-anchor" href="#svn" aria-label="Permalink to &quot;svn&quot;">​</a></h1><h2 id="externals" tabindex="-1">externals <a class="header-anchor" href="#externals" aria-label="Permalink to &quot;externals&quot;">​</a></h2><blockquote><p>official <a href="https://tortoisesvn.net/docs/release/TortoiseSVN_zh_CN/tsvn-dug-externals.html" target="_blank" rel="noreferrer">zh</a> <a href="https://tortoisesvn.net/docs/release/TortoiseSVN_en/tsvn-dug-externals.html" target="_blank" rel="noreferrer">en</a></p></blockquote><p>Subversion (SVN) 的 <code>externals</code> 功能允许您将外部的 Subversion 仓库中的文件或目录链接到您当前的版本库中。这对于共享公共文件或库非常有用，而无需将这些文件或库完全复制到您自己的版本库中。</p><p>要使用 <code>externals</code>，首先需要在您的版本库中找到要将外部文件链接到的目录，并执行以下操作：</p><ol><li>使用 <code>svn propedit svn:externals</code> 来编辑该目录的 <code>svn:externals</code> 属性。</li><li>在编辑器中，输入要链接的外部文件或目录的信息，格式为： <code>&lt;外部目录名&gt; &lt;外部版本库 URL&gt;</code> 例如： <code>my_lib https://svn.example.com/repos/my_lib</code>s</li><li>保存并退出编辑器。</li><li>提交更改，使用 <code>svn commit</code> 命令。</li></ol><p>现在，当您检出版本库时，您会看到在该目录中链接的外部文件或目录。如果您对外部文件进行了更改并提交了更改，则需要更新您的版本库，以便在本地看到这些更改。要这样做，请使用 <code>svn update</code> 命令。</p><p>递归列出所有 externals</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">svn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">propget</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">svn:externals</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-R</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">svn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">propget</span><span style="color:#24292E;"> </span><span style="color:#032F62;">svn:externals</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-R</span></span></code></pre></div>',9),l=[n];function r(c,p,i,d,v,h){return o(),s("div",null,l)}const m=e(a,[["render",r]]);export{u as __pageData,m as default};
