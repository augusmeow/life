import{_ as e,c as r,o as l,Q as i}from"./chunks/framework.1cc28bed.js";const _=JSON.parse('{"title":"疑难排查","description":"","frontmatter":{},"headers":[],"relativePath":"code/program/problems.md","filePath":"code/program/problems.md","lastUpdated":1686728638000}'),o={name:"code/program/problems.md"},t=i('<h1 id="疑难排查" tabindex="-1">疑难排查 <a class="header-anchor" href="#疑难排查" aria-label="Permalink to &quot;疑难排查&quot;">​</a></h1><ul><li><p>Q: div标签设置背景时发现实际显示效果图片高度为0<br> A: 增加 padding-bottom 即可显示</p></li><li><p>Q: div background-image url路径错误 或者 该路径下无此文件<br> A: 增加多个url</p></li><li><p>Q: img src路径错误 或者 该路径下无此文件<br> A: onerror=&quot;this.src=&#39;&#39;&quot;</p></li><li><p>Q: 反思<br> A: 知识的匮乏让你想思考都没东西去思考</p></li><li><p>Q: css层级问题 div span 与 div &gt; span<br> A: div span 设置是的div下的所有span div &gt; span 设置的是紧挨着的二级span</p></li><li><p>Q: css文字竖向排列 A: 标签writing-mode vertical-lr; 从左向右 从右向左是 vertical-rl;IE浏览器的从左向右 从右向左是tb-rl</p></li><li><p>Q: querySelector .开头和#开头<br> A: .开头是class #开头是id</p></li><li><p>Q: Linux删除某个字母开头的所有文件<br> A: 比如删除temp目录下以a开头的所有文件：<br>首先要进到temp目录下<br>在删除前先使用ls a<em>查看要删除哪些文件，防止误删除<br>确认无误后，使用 rm -rf a</em> 命令，删除a开头的所有文件</p></li><li><p>Q: slice不会改变原始数组<br> A:</p></li><li><p>Q: jQuery $ .# 区别<br> A: html自带标签 直接写标签 类用. id用#</p></li><li><p>Q: clion如何编译so库<br> A:</p></li><li><p>Q: clion如何链接使用dll库<br> A:</p></li><li><p>Q: run libuv, got &quot;Process finished with exit code -1073741515 (0xC0000135)&quot;<br> A: if you are using visual studio toolchains in CLion, You need to paste in folder cmake-build-debug or cmake-build-release the files .dll, but no only SDL2_image.dll, all files from folder lib/x86. refer <a href="https://stackoverflow.com/a/65268629/17744936" target="_blank" rel="noreferrer">https://stackoverflow.com/a/65268629/17744936</a></p></li><li><p>Q:<br> A:</p></li></ul>',2),a=[t];function s(p,d,n,c,m,b){return l(),r("div",null,a)}const f=e(o,[["render",s]]);export{_ as __pageData,f as default};
