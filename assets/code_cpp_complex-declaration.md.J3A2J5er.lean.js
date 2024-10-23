import{_ as i,c as a,a3 as e,o as t}from"./chunks/framework.DDs3IadZ.js";const r=JSON.parse('{"title":"复杂声明","description":"","frontmatter":{},"headers":[],"relativePath":"code/cpp/complex-declaration.md","filePath":"code/cpp/complex-declaration.md","lastUpdated":1682241312000}'),p={name:"code/cpp/complex-declaration.md"};function h(n,s,l,k,d,c){return t(),a("div",null,s[0]||(s[0]=[e('<h1 id="复杂声明" tabindex="-1">复杂声明 <a class="header-anchor" href="#复杂声明" aria-label="Permalink to &quot;复杂声明&quot;">​</a></h1><h2 id="case-1" tabindex="-1">case 1 <a class="header-anchor" href="#case-1" aria-label="Permalink to &quot;case 1&quot;">​</a></h2><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ( </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fp1)(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span></code></pre></div><p><code>fp1</code>是一个指针，指向一个函数，这个函数的参数为<code>int</code>型，函数的返回值是一个指针，这个指针指向一个数组，这个数组有10个元素，每个元素是一个<code>void*</code>型指针。</p><h2 id="case-2" tabindex="-1">case 2 <a class="header-anchor" href="#case-2" aria-label="Permalink to &quot;case 2&quot;">​</a></h2><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fp2)(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p><code>fp2</code>是一个指针，指向一个函数，这个函数的参数为3个<code>int</code>型，函数的返回值是一个指针，这个指针指向一个函数，这个函数的参数为<code>int</code>型，函数的返回值是<code>float</code>型。</p><h2 id="case-3" tabindex="-1">case 3 <a class="header-anchor" href="#case-3" aria-label="Permalink to &quot;case 3&quot;">​</a></h2><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ( </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fp3)())[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]();</span></span></code></pre></div><p><code>fp3</code>是一个指针，指向一个函数，这个函数的参数为空，函数的返回值是一个指针，这个指针指向一个数组，这个数组有10个元素，每个元素是一个指针，指向一个函数，这个函数的参数为空，函数的返回值是<code>int</code>型。</p><blockquote><p>have error: &#39;fp3&#39; declared as array of functions of type &#39;int ()&#39;</p></blockquote><h2 id="case-4" tabindex="-1">case 4 <a class="header-anchor" href="#case-4" aria-label="Permalink to &quot;case 4&quot;">​</a></h2><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (*s[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>函数指针数组，每个指针指向一个<code>int func(int param)</code>的函数</p><h2 id="case-5" tabindex="-1">case 5 <a class="header-anchor" href="#case-5" aria-label="Permalink to &quot;case 5&quot;">​</a></h2><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> id[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">sizeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">unsigned</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> long</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)];</span></span></code></pre></div><p>这个对吗？为什么？</p><p>正确 这个 sizeof是编译时运算符，编译时就确定了，可以看成和机器有关的常量。</p>',18)]))}const E=i(p,[["render",h]]);export{r as __pageData,E as default};
