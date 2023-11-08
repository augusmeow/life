import{_ as s,c as e,o as a,Q as o}from"./chunks/framework.1cc28bed.js";const f=JSON.parse('{"title":"check OS with a preprocessor directive","description":"","frontmatter":{},"headers":[],"relativePath":"code/cpp/tips/check-os.md","filePath":"code/cpp/tips/check-os.md","lastUpdated":1682241312000}'),n={name:"code/cpp/tips/check-os.md"},p=o(`<h1 id="check-os-with-a-preprocessor-directive" tabindex="-1">check OS with a preprocessor directive <a class="header-anchor" href="#check-os-with-a-preprocessor-directive" aria-label="Permalink to &quot;check OS with a preprocessor directive&quot;">​</a></h1><p>To check the operating system using a preprocessor directive, you can use the <code>#ifdef</code> and <code>#ifndef</code> directives, along with the appropriate macro for the operating system you want to check for. For example, to check if the operating system is Linux, you can use the following code:</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">#ifdef</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">__linux__</span></span>
<span class="line"><span style="color:#6A737D;">// code for Linux operating system</span></span>
<span class="line"><span style="color:#F97583;">#endif</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">#ifdef</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">__linux__</span></span>
<span class="line"><span style="color:#6A737D;">// code for Linux operating system</span></span>
<span class="line"><span style="color:#D73A49;">#endif</span></span></code></pre></div><p>Similarly, to check if the operating system is Windows, you can use the following code:</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">#ifdef</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">_WIN32</span></span>
<span class="line"><span style="color:#6A737D;">// code for Windows operating system</span></span>
<span class="line"><span style="color:#F97583;">#endif</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">#ifdef</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">_WIN32</span></span>
<span class="line"><span style="color:#6A737D;">// code for Windows operating system</span></span>
<span class="line"><span style="color:#D73A49;">#endif</span></span></code></pre></div><p>These preprocessor directives check if the specified macro is defined, and if it is, the code inside the <code>#ifdef</code> block will be compiled. Otherwise, it will be ignored. You can use this technique to check for any operating system and include the appropriate code for that operating system in your program.</p><p>To check if the operating system is macOS, you can use the following code:</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">#ifdef</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">__APPLE__</span></span>
<span class="line"><span style="color:#6A737D;">// code for macOS operating system</span></span>
<span class="line"><span style="color:#F97583;">#endif</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">#ifdef</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">__APPLE__</span></span>
<span class="line"><span style="color:#6A737D;">// code for macOS operating system</span></span>
<span class="line"><span style="color:#D73A49;">#endif</span></span></code></pre></div><p>This code uses the <code>__APPLE__</code> macro, which is defined by the compiler when compiling for macOS. You can use this code to include the appropriate code for macOS in your program.</p><p>Note that the <code>__APPLE__</code> macro will also be defined when compiling for iOS, so if you want to check specifically for macOS and not iOS, you can use the following code instead:</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">#if</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">defined</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">__APPLE__</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">defined</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">__MACH__</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// code for macOS operating system</span></span>
<span class="line"><span style="color:#F97583;">#endif</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">#if</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">defined</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">__APPLE__</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">defined</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">__MACH__</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// code for macOS operating system</span></span>
<span class="line"><span style="color:#D73A49;">#endif</span></span></code></pre></div><p>This code checks if both the <code>__APPLE__</code> and <code>__MACH__</code> macros are defined, which indicates that the program is being compiled for macOS.</p>`,12),c=[p];function l(t,i,r,d,h,y){return a(),e("div",null,c)}const g=s(n,[["render",l]]);export{f as __pageData,g as default};
