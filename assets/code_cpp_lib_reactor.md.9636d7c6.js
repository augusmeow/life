import{_ as s,c as n,o as a,Q as l}from"./chunks/framework.1cc28bed.js";const A=JSON.parse('{"title":"Reactor","description":"","frontmatter":{},"headers":[],"relativePath":"code/cpp/lib/reactor.md","filePath":"code/cpp/lib/reactor.md","lastUpdated":1682241312000}'),p={name:"code/cpp/lib/reactor.md"},o=l(`<h1 id="reactor" tabindex="-1">Reactor <a class="header-anchor" href="#reactor" aria-label="Permalink to &quot;Reactor&quot;">​</a></h1><h2 id="sample" tabindex="-1">sample <a class="header-anchor" href="#sample" aria-label="Permalink to &quot;sample&quot;">​</a></h2><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;vector&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;unordered_map&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;functional&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Reactor</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#F97583;">public:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">Reactor</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">~Reactor</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 注册事件处理函数</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">register_handler</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">function</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">)&gt; </span><span style="color:#FFAB70;">handler</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        m_handlers[event] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> handler;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 分发事件</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">dispatch</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">fd</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">auto</span><span style="color:#E1E4E8;"> it </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> m_handlers.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">(event);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (it </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> m_handlers.</span><span style="color:#B392F0;">end</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">            it-&gt;</span><span style="color:#B392F0;">second</span><span style="color:#E1E4E8;">(fd);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">private:</span></span>
<span class="line"><span style="color:#6A737D;">    // 事件处理函数列表</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::unordered_map</span><span style="color:#F97583;">&lt;int</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::function</span><span style="color:#F97583;">&lt;void</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#E1E4E8;"> m_handlers;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#6A737D;">    // 创建Reactor对象</span></span>
<span class="line"><span style="color:#E1E4E8;">    Reactor reactor;</span></span>
<span class="line"><span style="color:#6A737D;">    // 注册事件处理函数</span></span>
<span class="line"><span style="color:#E1E4E8;">    reactor.</span><span style="color:#B392F0;">register_handler</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, [](</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">fd</span><span style="color:#E1E4E8;">) { </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::cout </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Event 1 triggered on fd &quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> fd </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::endl; </span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    reactor.</span><span style="color:#B392F0;">register_handler</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, [](</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">fd</span><span style="color:#E1E4E8;">) { </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::cout </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Event 2 triggered on fd &quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> fd </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::endl; </span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 分发事件</span></span>
<span class="line"><span style="color:#E1E4E8;">    reactor.</span><span style="color:#B392F0;">dispatch</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    reactor.</span><span style="color:#B392F0;">dispatch</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    reactor.</span><span style="color:#B392F0;">dispatch</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">9</span><span style="color:#E1E4E8;">);</span><span style="color:#6A737D;"> // 无法处理的事件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 输出结果:</span></span>
<span class="line"><span style="color:#6A737D;">Event 1 triggered on fd 5</span></span>
<span class="line"><span style="color:#6A737D;">Event 2 triggered on fd 8</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;vector&gt;</span></span>
<span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;unordered_map&gt;</span></span>
<span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;functional&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Reactor</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#D73A49;">public:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">Reactor</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">~Reactor</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 注册事件处理函数</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">register_handler</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">event</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::</span><span style="color:#6F42C1;">function</span><span style="color:#24292E;">&lt;</span><span style="color:#D73A49;">void</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;">)&gt; </span><span style="color:#E36209;">handler</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        m_handlers[event] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> handler;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 分发事件</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">dispatch</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">event</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">fd</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">auto</span><span style="color:#24292E;"> it </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> m_handlers.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">(event);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (it </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> m_handlers.</span><span style="color:#6F42C1;">end</span><span style="color:#24292E;">())</span></span>
<span class="line"><span style="color:#24292E;">            it-&gt;</span><span style="color:#6F42C1;">second</span><span style="color:#24292E;">(fd);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">private:</span></span>
<span class="line"><span style="color:#6A737D;">    // 事件处理函数列表</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::unordered_map</span><span style="color:#D73A49;">&lt;int</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::function</span><span style="color:#D73A49;">&lt;void</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">&gt;&gt;</span><span style="color:#24292E;"> m_handlers;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#6A737D;">    // 创建Reactor对象</span></span>
<span class="line"><span style="color:#24292E;">    Reactor reactor;</span></span>
<span class="line"><span style="color:#6A737D;">    // 注册事件处理函数</span></span>
<span class="line"><span style="color:#24292E;">    reactor.</span><span style="color:#6F42C1;">register_handler</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, [](</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">fd</span><span style="color:#24292E;">) { </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Event 1 triggered on fd &quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> fd </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::endl; </span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">    reactor.</span><span style="color:#6F42C1;">register_handler</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, [](</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">fd</span><span style="color:#24292E;">) { </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Event 2 triggered on fd &quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> fd </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::endl; </span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 分发事件</span></span>
<span class="line"><span style="color:#24292E;">    reactor.</span><span style="color:#6F42C1;">dispatch</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    reactor.</span><span style="color:#6F42C1;">dispatch</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">8</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    reactor.</span><span style="color:#6F42C1;">dispatch</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">9</span><span style="color:#24292E;">);</span><span style="color:#6A737D;"> // 无法处理的事件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 输出结果:</span></span>
<span class="line"><span style="color:#6A737D;">Event 1 triggered on fd 5</span></span>
<span class="line"><span style="color:#6A737D;">Event 2 triggered on fd 8</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre></div><h2 id="_2" tabindex="-1">2 <a class="header-anchor" href="#_2" aria-label="Permalink to &quot;2&quot;">​</a></h2><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;vector&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;map&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;sys/epoll.h&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;unistd.h&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;fcntl.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> MAX_EVENT_NUMBER </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1024</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">EventHandler</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Reactor</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#F97583;">public:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">Reactor</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        epollfd </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">epoll_create1</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">registerHandler</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">fd</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">EventHandler</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">eh</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">epoll_event</span><span style="color:#E1E4E8;"> event;</span></span>
<span class="line"><span style="color:#E1E4E8;">        event.data.ptr </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> eh;</span></span>
<span class="line"><span style="color:#E1E4E8;">        event.events </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> eh-&gt;</span><span style="color:#B392F0;">getEvents</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">epoll_ctl</span><span style="color:#E1E4E8;">(epollfd, EPOLL_CTL_ADD, fd, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">event);</span></span>
<span class="line"><span style="color:#E1E4E8;">        fd2eh[fd] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> eh;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">removeHandler</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">fd</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">epoll_ctl</span><span style="color:#E1E4E8;">(epollfd, EPOLL_CTL_DEL, fd, </span><span style="color:#79B8FF;">nullptr</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        fd2eh.</span><span style="color:#B392F0;">erase</span><span style="color:#E1E4E8;">(fd);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleEvents</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">epoll_wait</span><span style="color:#E1E4E8;">(epollfd, events, MAX_EVENT_NUMBER, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> n; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            EventHandler </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">eh </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">static_cast&lt;</span><span style="color:#E1E4E8;">EventHandler </span><span style="color:#F97583;">*&gt;</span><span style="color:#E1E4E8;">(events[i].data.ptr);</span></span>
<span class="line"><span style="color:#E1E4E8;">            eh-&gt;</span><span style="color:#B392F0;">handleEvents</span><span style="color:#E1E4E8;">(events[i].events);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">private:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> epollfd;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::map</span><span style="color:#F97583;">&lt;int</span><span style="color:#E1E4E8;">, EventHandler </span><span style="color:#F97583;">*&gt;</span><span style="color:#E1E4E8;"> fd2eh;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">epoll_event</span><span style="color:#E1E4E8;"> events[MAX_EVENT_NUMBER];</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">EventHandler</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#F97583;">public:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">virtual</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getFd</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">virtual</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getEvents</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">virtual</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleEvents</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">events</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">IOEventHandler</span><span style="color:#E1E4E8;"> : </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">EventHandler</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#F97583;">public:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">IOEventHandler</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">fd</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">-&gt;fd </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> fd;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getFd</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> fd;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getEvents</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> events;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleEvents</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">events</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (events </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> EPOLLIN)</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">handleRead</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (events </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> EPOLLOUT)</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">handleWrite</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (events </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> EPOLLERR)</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">handleError</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">private:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> fd;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> events;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleRead</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::cout </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;handleRead&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::endl;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleWrite</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::cout </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;handleWrite&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::endl;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handleError</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::cout </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;handleError&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::endl;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    Reactor reactor;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> fd </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">open</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;test.txt&quot;</span><span style="color:#E1E4E8;">, O_RDWR </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> O_NONBLOCK);</span></span>
<span class="line"><span style="color:#E1E4E8;">    IOEventHandler </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">ioeh </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">IOEventHandler</span><span style="color:#E1E4E8;">(fd);</span></span>
<span class="line"><span style="color:#E1E4E8;">    reactor.</span><span style="color:#B392F0;">registerHandler</span><span style="color:#E1E4E8;">(fd, ioeh);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        reactor.</span><span style="color:#B392F0;">handleEvents</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;vector&gt;</span></span>
<span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;map&gt;</span></span>
<span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;sys/epoll.h&gt;</span></span>
<span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;unistd.h&gt;</span></span>
<span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;fcntl.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> MAX_EVENT_NUMBER </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1024</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">EventHandler</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Reactor</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#D73A49;">public:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">Reactor</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        epollfd </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">epoll_create1</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">registerHandler</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">fd</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">EventHandler</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">eh</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">epoll_event</span><span style="color:#24292E;"> event;</span></span>
<span class="line"><span style="color:#24292E;">        event.data.ptr </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> eh;</span></span>
<span class="line"><span style="color:#24292E;">        event.events </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> eh-&gt;</span><span style="color:#6F42C1;">getEvents</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">epoll_ctl</span><span style="color:#24292E;">(epollfd, EPOLL_CTL_ADD, fd, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">event);</span></span>
<span class="line"><span style="color:#24292E;">        fd2eh[fd] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> eh;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">removeHandler</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">fd</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">epoll_ctl</span><span style="color:#24292E;">(epollfd, EPOLL_CTL_DEL, fd, </span><span style="color:#005CC5;">nullptr</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        fd2eh.</span><span style="color:#6F42C1;">erase</span><span style="color:#24292E;">(fd);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleEvents</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> n </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">epoll_wait</span><span style="color:#24292E;">(epollfd, events, MAX_EVENT_NUMBER, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> n; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            EventHandler </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">eh </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static_cast&lt;</span><span style="color:#24292E;">EventHandler </span><span style="color:#D73A49;">*&gt;</span><span style="color:#24292E;">(events[i].data.ptr);</span></span>
<span class="line"><span style="color:#24292E;">            eh-&gt;</span><span style="color:#6F42C1;">handleEvents</span><span style="color:#24292E;">(events[i].events);</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">private:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> epollfd;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::map</span><span style="color:#D73A49;">&lt;int</span><span style="color:#24292E;">, EventHandler </span><span style="color:#D73A49;">*&gt;</span><span style="color:#24292E;"> fd2eh;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">epoll_event</span><span style="color:#24292E;"> events[MAX_EVENT_NUMBER];</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">EventHandler</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#D73A49;">public:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">virtual</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getFd</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">virtual</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getEvents</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">virtual</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleEvents</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">events</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">IOEventHandler</span><span style="color:#24292E;"> : </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">EventHandler</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#D73A49;">public:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">IOEventHandler</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">fd</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">-&gt;fd </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> fd;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getFd</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> fd;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getEvents</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> events;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleEvents</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">events</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (events </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;"> EPOLLIN)</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">handleRead</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (events </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;"> EPOLLOUT)</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">handleWrite</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (events </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;"> EPOLLERR)</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">handleError</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">private:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> fd;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> events;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleRead</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;handleRead&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::endl;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleWrite</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;handleWrite&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::endl;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handleError</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;handleError&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::endl;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    Reactor reactor;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> fd </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">open</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;test.txt&quot;</span><span style="color:#24292E;">, O_RDWR </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> O_NONBLOCK);</span></span>
<span class="line"><span style="color:#24292E;">    IOEventHandler </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">ioeh </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">IOEventHandler</span><span style="color:#24292E;">(fd);</span></span>
<span class="line"><span style="color:#24292E;">    reactor.</span><span style="color:#6F42C1;">registerHandler</span><span style="color:#24292E;">(fd, ioeh);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        reactor.</span><span style="color:#6F42C1;">handleEvents</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>这里没有考虑多线程情况，如果在多线程环境下使用该实现，需要对Reactor类进行线程同步处理。</p><p>另外，这里的代码只是简单实现了Reactor模式的基本功能，实际项目中还可能需要支持的功能包括：</p><ul><li>超时处理：epoll_wait函数可以指定超时时间，如果超时时间到了但没有事件发生，则返回0，可以通过这种方式实现超时处理。</li><li>定时器处理：可以通过封装一个Timer类来实现定时器功能，定时器到期后可以触发相应的回调函数。</li><li>关闭处理：可以通过在Reactor中添加一个标志位来判断是否需要关闭，并在handleEvents函数中进行判断。</li></ul>`,8),e=[o];function t(c,r,E,y,i,F){return a(),n("div",null,e)}const D=s(p,[["render",t]]);export{A as __pageData,D as default};
