import{_ as s,c as a,a3 as t,o as h}from"./chunks/framework.DDs3IadZ.js";const n="/life/img/code/code/cpp_class.png",c=JSON.parse('{"title":"base","description":"","frontmatter":{},"headers":[],"relativePath":"code/cpp/tips/base.md","filePath":"code/cpp/tips/base.md","lastUpdated":1682241505000}'),p={name:"code/cpp/tips/base.md"};function e(k,i,l,d,r,E){return h(),a("div",null,i[0]||(i[0]=[t('<h1 id="base" tabindex="-1">base <a class="header-anchor" href="#base" aria-label="Permalink to &quot;base&quot;">​</a></h1><h2 id="读书笔记" tabindex="-1">读书笔记 <a class="header-anchor" href="#读书笔记" aria-label="Permalink to &quot;读书笔记&quot;">​</a></h2><ol><li><p>不要在头文件使用<code>using</code>，防止多个引用造成命名冲突</p></li><li><p><code>vector</code>能够高效增长，不要在初始化的时候指定<code>vector</code>大小，除非所有值都一样</p></li><li><p>class</p><p><img src="'+n+`" alt="1"></p></li></ol><h2 id="count" tabindex="-1">count <a class="header-anchor" href="#count" aria-label="Permalink to &quot;count&quot;">​</a></h2><blockquote><p>需要某元素总个数时，使用count</p></blockquote><p>对于只需要知道包含特定元素的数量的应用来说，这是最简单的方式。如果count返回0，则表示不存在该元素。</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">count</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(v.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">begin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), v.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), key))</span></span></code></pre></div><h2 id="find" tabindex="-1">find <a class="header-anchor" href="#find" aria-label="Permalink to &quot;find&quot;">​</a></h2><blockquote><p>仅判断是否存在某元素，使用find</p></blockquote><p>find会在查找到指定值后立即返回，所以它一般比count更快（因为count总是要遍历整个容器）。</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">find</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(v.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">begin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), v.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), key) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> v.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span></code></pre></div><h2 id="find-if-any-of" tabindex="-1">find_if any_of <a class="header-anchor" href="#find-if-any-of" aria-label="Permalink to &quot;find_if any_of&quot;">​</a></h2><blockquote><p>支持复杂条件的查找时，使用any_of(仅知道是否存在)/find_if(返回了第一个元素的迭代器)</p></blockquote><h3 id="std-find-if" tabindex="-1">std::find_if <a class="header-anchor" href="#std-find-if" aria-label="Permalink to &quot;std::find_if&quot;">​</a></h3><p>它也能完成任务，但有点大材小用了。</p><p>find_if需要一个判别式。如果查找的值需要满足特定的条件时，比如查找小于3且大于1的值时，适合该方式。</p><p>如果有多个值符合条件，则返回查找到符合条件的第一个值的迭代器。</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">find_if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(v.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">begin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), v.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), [] (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> i</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } ) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> v.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span></code></pre></div><h3 id="std-any-of" tabindex="-1">std::any_of <a class="header-anchor" href="#std-any-of" aria-label="Permalink to &quot;std::any_of&quot;">​</a></h3><p>与find_if类似，但它返回bool值。</p><p>如果判断式返回true，则它也返回true。否则返回false。</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">any_of</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(v.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">begin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), v.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), [] (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> i</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } ))</span></span></code></pre></div><p>扩展：std::none_of，是any_of的反面。也就是，当判断式是false时它返回true，否则返回flase。</p><h2 id="binary-search" tabindex="-1">binary_search <a class="header-anchor" href="#binary-search" aria-label="Permalink to &quot;binary_search&quot;">​</a></h2><blockquote><p>对于已经排序的vector，使用 binary_search</p></blockquote><p>作为磨刀不误砍柴工的一种方式，可以对vector先排序，再查找，就可以使用二分查找了。</p><p>二分查找的时间效率为O(logn)。</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sort</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(v.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">begin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), v.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">binary_search</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(v.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">begin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), v.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), key))</span></span></code></pre></div>`,28)]))}const g=s(p,[["render",e]]);export{c as __pageData,g as default};
