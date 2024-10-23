import{_ as i,c as a,a3 as n,o as t}from"./chunks/framework.DDs3IadZ.js";const h="/life/img/code/code/nuxt-err1.png",g=JSON.parse('{"title":"Sol","description":"","frontmatter":{},"headers":[],"relativePath":"code/front-end/sol.md","filePath":"code/front-end/sol.md","lastUpdated":1686726335000}'),e={name:"code/front-end/sol.md"};function l(p,s,k,r,E,d){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="sol" tabindex="-1">Sol <a class="header-anchor" href="#sol" aria-label="Permalink to &quot;Sol&quot;">​</a></h1><h2 id="vue" tabindex="-1">Vue <a class="header-anchor" href="#vue" aria-label="Permalink to &quot;Vue&quot;">​</a></h2><h3 id="vue-warn-data-property-option-is-already-defined-in-props" tabindex="-1"><code>[Vue warn]: Data property &quot;option&quot; is already defined in Props.</code> <a class="header-anchor" href="#vue-warn-data-property-option-is-already-defined-in-props" aria-label="Permalink to &quot;\`[Vue warn]: Data property &quot;option&quot; is already defined in Props.\`&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data () {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  return {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    // Rename the &quot;option&quot; property in the data option</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    // to avoid the conflict with the &quot;option&quot; prop</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    dataOption: undefined</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">props: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  option: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    type: Object,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    required: true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="xaxis-0-not-found" tabindex="-1"><code>xAxis &quot;0&quot; not found</code> <a class="header-anchor" href="#xaxis-0-not-found" aria-label="Permalink to &quot;\`xAxis &quot;0&quot; not found\`&quot;">​</a></h3><blockquote><p>refer: <a href="https://github.com/apache/echarts/issues/14071#issuecomment-762582442" target="_blank" rel="noreferrer">https://github.com/apache/echarts/issues/14071#issuecomment-762582442</a></p></blockquote><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">import &#39;echarts/lib/component/grid&#39;;</span></span></code></pre></div><h3 id="使用-asyncdata-方法在组件中获取-json-数据" tabindex="-1">使用 <code>asyncData</code> 方法在组件中获取 <code>JSON</code> 数据 <a class="header-anchor" href="#使用-asyncdata-方法在组件中获取-json-数据" aria-label="Permalink to &quot;使用 \`asyncData\` 方法在组件中获取 \`JSON\` 数据&quot;">​</a></h3><p>asyncData 方法会在服务端渲染和客户端挂载之前被调用，并且它可以访问上下文对象 (context)。</p><p>例如，假设你有一个组件，它需要在渲染之前获取 JSON 数据。你可以使用 asyncData 方法来获取数据，然后在服务端或客户端渲染之前将数据传递给组件。</p><p>下面是一个示例：</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;{{ title }}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ul</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;item in items&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;item.id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;{{ item.name }}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ul</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;MyComponent&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  async</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> asyncData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ({ </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">app</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> response</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> app.$axios.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/data.json&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        title: response.title,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        items: response.items</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (e) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ statusCode: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">404</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, message: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Data not found&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>在这个例子中，我们使用 asyncData 方法获取了来自 <code>/data.json</code> 的 JSON 数据。然后，我们使用返回值将数据传递给组件。</p><p>::alert 注意：asyncData 方法只能在服务端或客户端渲染期间被调用，所以你不能在挂载之后调用它。如果你需要在挂载之后获取数据，你可以使用 created 或 mounted 生命周期钩子来调用 asyncData 方法。 ::</p><h2 id="nuxt" tabindex="-1">nuxt <a class="header-anchor" href="#nuxt" aria-label="Permalink to &quot;nuxt&quot;">​</a></h2><h3 id="nuxt-use-json" tabindex="-1">nuxt use json <a class="header-anchor" href="#nuxt-use-json" aria-label="Permalink to &quot;nuxt use json&quot;">​</a></h3><blockquote><p><a href="https://stackoverflow.com/a/55124822/17744936" target="_blank" rel="noreferrer">refer</a></p></blockquote><p><code>import json from &quot;~/static/json/sample.json&quot;;</code> By prepending <code>~/static</code></p><h3 id="javascript-heap-out-of-memory" tabindex="-1">JavaScript heap out of memory <a class="header-anchor" href="#javascript-heap-out-of-memory" aria-label="Permalink to &quot;JavaScript heap out of memory&quot;">​</a></h3><div class="language-log vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">log</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;--- Last few GCs ---&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">18465</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x118040000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]    </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">98714</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ms: Mark-sweep </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2008</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2084</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1993</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2085</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) MB, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1529</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> / </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ms  (average mu = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">159</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, current mu = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">066</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) allocation failure; scavenge might not succeed</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">18465</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x118040000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]   </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100665</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ms: Mark-sweep </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2010</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2085</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1994</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2086</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) MB, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1893</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> / </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ms  (average mu = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">091</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, current mu = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">030</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) allocation failure; scavenge might not succeed</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;--- JS stacktrace ---&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">FATAL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ERROR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x100626c88</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> node::Abort() [/opt/homebrew/Cellar/node/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">19</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/bin/node]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x100627f54</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> node::ModifyCodeGenerationFromStrings(v8::Local&lt;v8::Context&gt;, v8::Local&lt;v8::Value&gt;, bool) [/opt/homebrew/Cellar/node/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">19</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/bin/node]</span></span></code></pre></div><p><a href="https://stackoverflow.com/questions/53230823/fatal-error-ineffective-mark-compacts-near-heap-limit-allocation-failed-javas" target="_blank" rel="noreferrer">refer</a></p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> NODE_OPTIONS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;--max-old-space-size=5120&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Increase to 5 GB</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> NODE_OPTIONS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;--max-old-space-size=6144&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Increase to 6 GB</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> NODE_OPTIONS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;--max-old-space-size=7168&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Increase to 7 GB</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> NODE_OPTIONS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;--max-old-space-size=8192&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Increase to 8 GB</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># and so on...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># formula:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> NODE_OPTIONS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;--max-old-space-size=(X * 1024)&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Increase to X GB</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Note: it doesn&#39;t have to be multiples of 1024.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># max-old-space-size can be any number of memory megabytes (MB) you have available.</span></span></code></pre></div><p>如果还是出现这个错误，可能就是代码写错了。之前是 <code>nuxt.config.ts</code> 这个脚本配置写错了。</p><h3 id="nuxt-page-500-this-page-is-temporarily-unavailable" tabindex="-1">nuxt page 500 <code>This page is temporarily unavailable.</code> <a class="header-anchor" href="#nuxt-page-500-this-page-is-temporarily-unavailable" aria-label="Permalink to &quot;nuxt page 500 \`This page is temporarily unavailable.\`&quot;">​</a></h3><p><img src="`+h+'" alt="e"></p><p><s>check commit info, found release 1.2.5 upgrade some deps, while this project&#39;s deps didn&#39;t upgrade. Essential reason is the deps version are inconsistent.</s></p><p>但好像不是这样的，并不能修复<br> 目前看到的是<a href="https://github.com/nuxt-themes/docus" target="_blank" rel="noreferrer">仓库</a> 在 v1.2.5 发布时，自动出包，抛出500错误。而之前的都是正常的</p><h2 id="js-ts" tabindex="-1">js ts <a class="header-anchor" href="#js-ts" aria-label="Permalink to &quot;js ts&quot;">​</a></h2><h3 id="typeerror-replace-is-not-a-function" tabindex="-1">TypeError: replace is not a function <a class="header-anchor" href="#typeerror-replace-is-not-a-function" aria-label="Permalink to &quot;TypeError: replace is not a function&quot;">​</a></h3><p><a href="https://github.com/DrAugus/draugus.github.io/commit/b206c6559b326add98f7773b637abddd18092577#diff-1d790b86c76035cd166c812c35ce19682c15e5ab353eeb8ab75b8bd91156f1c1" target="_blank" rel="noreferrer">refer</a></p><p>We used the <code>toString()</code> method to convert the number to a string before calling <code>replace()</code>.</p>',31)]))}const y=i(e,[["render",l]]);export{g as __pageData,y as default};
