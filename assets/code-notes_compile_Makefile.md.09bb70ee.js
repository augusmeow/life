import{_ as s,c as a,o as n,Q as l}from"./chunks/framework.1cc28bed.js";const h=JSON.parse('{"title":"Makefile","description":"","frontmatter":{},"headers":[],"relativePath":"code-notes/compile/Makefile.md","filePath":"code-notes/compile/Makefile.md","lastUpdated":1686813266000}'),p={name:"code-notes/compile/Makefile.md"},o=l(`<h1 id="makefile" tabindex="-1">Makefile <a class="header-anchor" href="#makefile" aria-label="Permalink to &quot;Makefile&quot;">​</a></h1><h2 id="beginner" tabindex="-1">beginner <a class="header-anchor" href="#beginner" aria-label="Permalink to &quot;beginner&quot;">​</a></h2><h2 id="higher" tabindex="-1">higher <a class="header-anchor" href="#higher" aria-label="Permalink to &quot;higher&quot;">​</a></h2><h3 id="使用-makefile-in-和-configure" tabindex="-1">使用 Makefile.in 和 configure <a class="header-anchor" href="#使用-makefile-in-和-configure" aria-label="Permalink to &quot;使用 Makefile.in 和 configure&quot;">​</a></h3><p>Makefile.in 是一个模板文件，它指定了如何生成最终的 Makefile。它通常由项目的开发者提供，并且是一个文本文件。</p><p>Makefile.in 中可以包含各种指令，用来定义编译项目时所需的变量和规则。例如，下面是一个简单的 Makefile.in 示例：</p><div class="language-makefile vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">makefile</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># define some variables</span></span>
<span class="line"><span style="color:#E1E4E8;">CC = gcc</span></span>
<span class="line"><span style="color:#E1E4E8;">CFLAGS = -g -O2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># define a target to build the executable</span></span>
<span class="line"><span style="color:#B392F0;">myapp</span><span style="color:#E1E4E8;">: myapp.o</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">$(</span><span style="color:#E1E4E8;">CC</span><span style="color:#9ECBFF;">)</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">$(</span><span style="color:#E1E4E8;">CFLAGS</span><span style="color:#9ECBFF;">)</span><span style="color:#E1E4E8;"> -o myapp myapp.o</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># define a target to clean up the project</span></span>
<span class="line"><span style="color:#B392F0;">clean</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        rm -f myapp myapp.o</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># define some variables</span></span>
<span class="line"><span style="color:#24292E;">CC = gcc</span></span>
<span class="line"><span style="color:#24292E;">CFLAGS = -g -O2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># define a target to build the executable</span></span>
<span class="line"><span style="color:#6F42C1;">myapp</span><span style="color:#24292E;">: myapp.o</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">$(</span><span style="color:#24292E;">CC</span><span style="color:#032F62;">)</span><span style="color:#24292E;"> </span><span style="color:#032F62;">$(</span><span style="color:#24292E;">CFLAGS</span><span style="color:#032F62;">)</span><span style="color:#24292E;"> -o myapp myapp.o</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># define a target to clean up the project</span></span>
<span class="line"><span style="color:#6F42C1;">clean</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        rm -f myapp myapp.o</span></span></code></pre></div><p>要生成最终的 Makefile，需要使用 configure 工具。configure 工具是一个 <a href="/life/code/program/lang/shell">shell</a> 脚本，它的作用是根据系统环境和项目的特定要求来生成 Makefile。</p><p>要编写一个 configure 脚本，需要了解 <a href="/life/code/program/lang/shell">shell</a> 脚本语言，并且需要了解项目的特定环境和需求。一个简单的 configure 脚本示例如下所示：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># check for the required compiler</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">which</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gcc</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/dev/null</span><span style="color:#E1E4E8;">; </span><span style="color:#F97583;">then</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Error: GCC is not installed&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">exit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#F97583;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># check for the required libraries</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">pkg-config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--exists</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">libfoo</span><span style="color:#E1E4E8;">; </span><span style="color:#F97583;">then</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Error: libfoo is not installed&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">exit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#F97583;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># create the Makefile</span></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;CC = gcc&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Makefile</span></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;CFLAGS = -g -O2&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Makefile</span></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Makefile</span></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;myapp: myapp.o&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Makefile</span></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-e</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;\\t</span><span style="color:#79B8FF;">\\$</span><span style="color:#9ECBFF;">(CC) </span><span style="color:#79B8FF;">\\$</span><span style="color:#9ECBFF;">(CFLAGS) -o myapp myapp.o&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Makefile</span></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Makefile</span></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;clean:&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Makefile</span></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-e</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;\\trm -f myapp myapp.o&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Makefile</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># check for the required compiler</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">which</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gcc</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/dev/null</span><span style="color:#24292E;">; </span><span style="color:#D73A49;">then</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Error: GCC is not installed&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">exit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#D73A49;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># check for the required libraries</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">pkg-config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--exists</span><span style="color:#24292E;"> </span><span style="color:#032F62;">libfoo</span><span style="color:#24292E;">; </span><span style="color:#D73A49;">then</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Error: libfoo is not installed&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">exit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#D73A49;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># create the Makefile</span></span>
<span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;CC = gcc&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Makefile</span></span>
<span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;CFLAGS = -g -O2&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Makefile</span></span>
<span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Makefile</span></span>
<span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;myapp: myapp.o&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Makefile</span></span>
<span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-e</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;\\t</span><span style="color:#005CC5;">\\$</span><span style="color:#032F62;">(CC) </span><span style="color:#005CC5;">\\$</span><span style="color:#032F62;">(CFLAGS) -o myapp myapp.o&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Makefile</span></span>
<span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Makefile</span></span>
<span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;clean:&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Makefile</span></span>
<span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-e</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;\\trm -f myapp myapp.o&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Makefile</span></span></code></pre></div>`,10),e=[o];function t(c,r,y,E,i,F){return n(),a("div",null,e)}const f=s(p,[["render",t]]);export{h as __pageData,f as default};