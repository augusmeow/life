import{_ as o,c as l,a3 as c,o as a}from"./chunks/framework.DDs3IadZ.js";const h=JSON.parse('{"title":"vim","description":"","frontmatter":{"icon":"logos:vimeo-icon"},"headers":[],"relativePath":"tools/text-edit/vim.md","filePath":"tools/text-edit/vim.md","lastUpdated":1720495435000}'),d={name:"tools/text-edit/vim.md"};function i(t,e,n,s,r,p){return a(),l("div",null,e[0]||(e[0]=[c(`<h1 id="vim" tabindex="-1">vim <a class="header-anchor" href="#vim" aria-label="Permalink to &quot;vim&quot;">​</a></h1><h2 id="模式" tabindex="-1">模式 <a class="header-anchor" href="#模式" aria-label="Permalink to &quot;模式&quot;">​</a></h2><p>4种模式</p><h3 id="普通模式" tabindex="-1">普通模式 <a class="header-anchor" href="#普通模式" aria-label="Permalink to &quot;普通模式&quot;">​</a></h3><ul><li><code>h</code> left <code>j</code> down <code>k</code> up <code>l</code> right <ul><li><code>4j</code> 向下跳4行</li></ul></li><li><code>w</code> 跳转下一个单词</li><li><code>b</code> 跳转到前一个单词开头</li><li><code>gg</code> 回到文档最上方 即 home 键</li><li><code>G</code> 回到文档最下方 即 end 键</li><li><code>Ctrl U</code> 即 PgUp</li><li><code>Ctrl D</code> 即 PgDn</li><li><code>f</code><ul><li><code>fr</code>移动到离你最近的r</li></ul></li><li><code>y</code> <code>yaw</code> yank all words <ul><li><code>y4j</code> 复制包含当前行的下四行</li><li><code>yfr</code> 复制到r为止的内容</li></ul></li><li><code>p</code> 粘贴</li><li><code>d</code> 删除 <ul><li><code>dj</code> 删除当前行和下一行</li><li><code>dfr</code> 删除到r为止的内容</li></ul></li><li><code>caw</code> change all words 改变当前这个单词 进入输入模式</li><li><code>cc</code> 删除当前行进入输入模式 <ul><li><code>c4j</code> 删除下四行进入输入模式</li></ul></li><li><code>i</code> 是在当前光标的前一个字母进行输入</li><li><code>a</code> 是在当前光标之后进行输入</li><li><code>I</code> 从这一行开头开始输入</li><li><code>A</code> 从这一行末尾开始输入</li><li><code>o</code> 在当前行之后插入一行</li><li><code>O</code> 在当前行之前插入一行</li><li>撤销 <code>u</code> 撤销整行<code>U</code> 取消撤销 <code>ctrl + r</code></li></ul><h3 id="命令模式" tabindex="-1">命令模式 <a class="header-anchor" href="#命令模式" aria-label="Permalink to &quot;命令模式&quot;">​</a></h3><blockquote><p>在普通模式下键入:进入命令模式</p></blockquote><p>退出</p><ul><li><code>:q</code>退出编辑</li><li><code>:q!</code>强制退出</li><li><code>:wq</code>保存并退出</li><li><code>:w</code>保存文件但不退出</li><li><code>:w file</code>将修改另存为file文件里不退出vim</li><li><code>:w!</code>强制保存文件但不退出</li><li><code>:wq!</code>强制保存文件并退出</li><li><code>:e!</code>放弃所有更改</li></ul><blockquote><p>以:和/开头的命令都有历史纪录，可以首先键入:或/然后按上下箭头来选择某个历史命令。</p></blockquote><ul><li>搜索 <code>/</code>正向往下搜索 <code>?</code>反向往上搜索 <code>n</code>正向向下寻找下一个 <code>N</code>反向向上寻找上一个</li><li>全局替换 <code>%s/源字符串/目的字符串/g</code></li></ul><h3 id="输入模式" tabindex="-1">输入模式 <a class="header-anchor" href="#输入模式" aria-label="Permalink to &quot;输入模式&quot;">​</a></h3><blockquote><p>在普通模式下键入 <code>i</code> 进入输入模式 其他进入方式，如 <code>a</code> <code>I</code> <code>A</code> <code>caw</code> <code>cc</code></p></blockquote><ul><li>此时可以对文件内容进行编辑，左下角会显示<code>&quot;-- INSERT --&quot;</code></li><li>按&quot;ESC&quot;进入底行模式</li></ul><h3 id="可视模式" tabindex="-1">可视模式 <a class="header-anchor" href="#可视模式" aria-label="Permalink to &quot;可视模式&quot;">​</a></h3><blockquote><p>在普通模式下键入v进入可视模式</p></blockquote><p>移动光标就会选中内容</p><p>y就可以直接复制选中的内容</p><p><a href="https://blog.csdn.net/feosun/article/details/73196299" target="_blank" rel="noreferrer">本文已足够，如果还想看点冗余的</a></p><h2 id="补充" tabindex="-1">补充 <a class="header-anchor" href="#补充" aria-label="Permalink to &quot;补充&quot;">​</a></h2><p>vim +10 filename.txt //打开文件并跳到第10行</p><p>vim -R /etc/passwd //以只读模式打开文件</p><h2 id="vimrc" tabindex="-1">vimrc <a class="header-anchor" href="#vimrc" aria-label="Permalink to &quot;vimrc&quot;">​</a></h2><p><code>vim ~/.vimsc</code></p><h3 id="tab" tabindex="-1">tab <a class="header-anchor" href="#tab" aria-label="Permalink to &quot;tab&quot;">​</a></h3><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>set shiftwidth=4 #&quot;这个量是每行的缩进深度，一般设置成和tabstop一样的宽度&quot;</span></span>
<span class="line"><span>set tabstop=4 #&quot;设置Tab显示的宽度，Python建议设置成4&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>set expandtab</span></span>
<span class="line"><span>#&quot;如果只想在Python文件中将Tab展开成空格，就改换成下面这句&quot;</span></span>
<span class="line"><span>autocmd FileType python set expandtab</span></span>
<span class="line"><span></span></span>
<span class="line"><span>set smartindent #&quot;智能缩进&quot;</span></span>
<span class="line"><span>set cindent #&quot;C语言风格缩进&quot;</span></span>
<span class="line"><span>set autoindent #&quot;自动缩进&quot;</span></span></code></pre></div><h3 id="显示行号" tabindex="-1">显示行号 <a class="header-anchor" href="#显示行号" aria-label="Permalink to &quot;显示行号&quot;">​</a></h3><p>临时显示行号 <code>set nu</code><br> 永久显示行号 <code>vim ~/.vimsc</code> 末尾加上 <code>set number</code></p><h2 id="替换字符串" tabindex="-1">替换字符串 <a class="header-anchor" href="#替换字符串" aria-label="Permalink to &quot;替换字符串&quot;">​</a></h2><ul><li><code>:s/source str/replace str/</code> replace current line first str</li><li><code>:s/source str/replace str/g</code> replace current line all str</li><li><code>:n,$s/source str/replace str/</code> replace from n to the last line all first str</li><li><code>:%s/source str/replace str/</code> replace all str</li></ul><h2 id="光标移动" tabindex="-1">光标移动 <a class="header-anchor" href="#光标移动" aria-label="Permalink to &quot;光标移动&quot;">​</a></h2><ul><li><code>0</code> 移动光标到当前行行首</li><li><code>$</code> 移动光标到当前行行尾</li><li><code>^</code> 移动光标到当前行的第一个非空字符</li><li><code>nG</code> 移动光标到当前文件的第n行</li><li><code>:n</code> 移动光标到当前文件的第n行 (同上)</li><li><code>gg</code> 或 <code>:0</code> 移动光标到当前文件的第一行</li><li><code>GG</code> 或 <code>:$</code> 移动光标到当前未经的最后一行</li><li><code>w</code> 或 <code>W</code> 移动到下一单词的开头</li><li><code>b</code> 或 <code>B</code> 移动到上一单词的开头</li><li><code>e</code> 或 <code>E</code> 移动到光标所在单词的末尾</li><li><code>Ctrl</code> + <code>f</code> 向前滚动一页</li><li><code>Ctrl</code> + <code>b</code> 向后滚动一页</li><li><code>Ctrl</code> + <code>u</code> 向前滚动半页</li><li><code>Ctrl</code> + <code>d</code> 向后滚动半页</li></ul><h2 id="撤销" tabindex="-1">撤销 <a class="header-anchor" href="#撤销" aria-label="Permalink to &quot;撤销&quot;">​</a></h2><ul><li><code>u</code> 撤销</li><li><code>ctrl+r</code> 恢复刚刚的撤销</li></ul><h2 id="查找" tabindex="-1">查找 <a class="header-anchor" href="#查找" aria-label="Permalink to &quot;查找&quot;">​</a></h2><p>命令模式下，按<code>/</code>或<code>?</code>，然后输入要查找的字符，Enter。</p><ul><li><code>/</code> 向前（下）找</li><li><code>?</code> 向后（上）找</li></ul><h3 id="全词匹配" tabindex="-1">全词匹配 <a class="header-anchor" href="#全词匹配" aria-label="Permalink to &quot;全词匹配&quot;">​</a></h3><p>如果你输入 <code>/int</code>，你也可能找到 “print”。<br> 要找到以 “int” 结尾的单词，可以用 <code>/int\\&gt;</code></p><p><code>\\&gt;</code> 是一个特殊的记号，表示只匹配单词末尾。类似地，<code>\\&lt;</code> 只匹配单词的开头。<br> 要匹配一个完整的单词 “int”，只需：<code>/\\&lt;int\\&gt;</code></p>`,40)]))}const b=o(d,[["render",i]]);export{h as __pageData,b as default};