import{_ as s,c as n,o as a,Q as e}from"./chunks/framework.1cc28bed.js";const h=JSON.parse('{"title":"Jenkins","description":"","frontmatter":{"icon":"vscode-icons:file-type-jenkins"},"headers":[],"relativePath":"code-notes/build/Jenkins.md","filePath":"code-notes/build/Jenkins.md","lastUpdated":1686813536000}'),l={name:"code-notes/build/Jenkins.md"},p=e(`<h1 id="jenkins" tabindex="-1">Jenkins <a class="header-anchor" href="#jenkins" aria-label="Permalink to &quot;Jenkins&quot;">​</a></h1><h2 id="pipeline" tabindex="-1">pipeline <a class="header-anchor" href="#pipeline" aria-label="Permalink to &quot;pipeline&quot;">​</a></h2><h2 id="matrix" tabindex="-1"><a href="https://www.jenkins.io/doc/book/pipeline/syntax/#declarative-matrix" target="_blank" rel="noreferrer">matrix</a> <a class="header-anchor" href="#matrix" aria-label="Permalink to &quot;[matrix](https://www.jenkins.io/doc/book/pipeline/syntax/#declarative-matrix)&quot;">​</a></h2><div class="language-jenkinsfile vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jenkinsfile</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">stage(&quot;compile-all&quot;) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    when {</span></span>
<span class="line"><span style="color:#e1e4e8;">        anyOf {</span></span>
<span class="line"><span style="color:#e1e4e8;">            branch &#39;dev&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">            branch &#39;release&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">            branch &#39;master&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    failFast false</span></span>
<span class="line"><span style="color:#e1e4e8;">    </span></span>
<span class="line"><span style="color:#e1e4e8;">    matrix {</span></span>
<span class="line"><span style="color:#e1e4e8;">        axes {</span></span>
<span class="line"><span style="color:#e1e4e8;">            axis {</span></span>
<span class="line"><span style="color:#e1e4e8;">                name &quot;MODULE_NAME&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">                values &quot;module1&quot;, &quot;module2&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">            }                 </span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        stages {</span></span>
<span class="line"><span style="color:#e1e4e8;">            stage(&quot;compile&quot;) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                steps {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    container(&#39;docker&#39;) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                        echo &quot;build-\${MODULE_NAME}&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">                        script {}</span></span>
<span class="line"><span style="color:#e1e4e8;">                    }</span></span>
<span class="line"><span style="color:#e1e4e8;">                }</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">stage(&quot;compile-all&quot;) {</span></span>
<span class="line"><span style="color:#24292e;">    when {</span></span>
<span class="line"><span style="color:#24292e;">        anyOf {</span></span>
<span class="line"><span style="color:#24292e;">            branch &#39;dev&#39;</span></span>
<span class="line"><span style="color:#24292e;">            branch &#39;release&#39;</span></span>
<span class="line"><span style="color:#24292e;">            branch &#39;master&#39;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    failFast false</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">    matrix {</span></span>
<span class="line"><span style="color:#24292e;">        axes {</span></span>
<span class="line"><span style="color:#24292e;">            axis {</span></span>
<span class="line"><span style="color:#24292e;">                name &quot;MODULE_NAME&quot;</span></span>
<span class="line"><span style="color:#24292e;">                values &quot;module1&quot;, &quot;module2&quot;</span></span>
<span class="line"><span style="color:#24292e;">            }                 </span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        stages {</span></span>
<span class="line"><span style="color:#24292e;">            stage(&quot;compile&quot;) {</span></span>
<span class="line"><span style="color:#24292e;">                steps {</span></span>
<span class="line"><span style="color:#24292e;">                    container(&#39;docker&#39;) {</span></span>
<span class="line"><span style="color:#24292e;">                        echo &quot;build-\${MODULE_NAME}&quot;</span></span>
<span class="line"><span style="color:#24292e;">                        script {}</span></span>
<span class="line"><span style="color:#24292e;">                    }</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="use-method" tabindex="-1">use method <a class="header-anchor" href="#use-method" aria-label="Permalink to &quot;use method&quot;">​</a></h3><p>在 Jenkins pipeline 中，可以使用 Groovy 语言定义函数，然后在 pipeline 中调用该函数。定义函数的方式如下：</p><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">myFunc</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">println</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Hello \${name}, welcome to Jenkins Pipeline!&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">myFunc</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">println</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Hello \${name}, welcome to Jenkins Pipeline!&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>然后可以在 pipeline 中调用该函数：</p><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">myFunc(</span><span style="color:#9ECBFF;">&#39;John&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">myFunc(</span><span style="color:#032F62;">&#39;John&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><p>也可以通过 <code>@Library</code> 注解，将函数放入类中，然后在 pipeline 中调用：</p><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">@Library</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;my-lib@master&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MyLib</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">myFunc</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">println</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Hello \${name}, welcome to Jenkins Pipeline!&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// call the function</span></span>
<span class="line"><span style="color:#F97583;">MyLib.</span><span style="color:#E1E4E8;">myFunc(</span><span style="color:#9ECBFF;">&#39;John&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">@Library</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;my-lib@master&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MyLib</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">myFunc</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">println</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Hello \${name}, welcome to Jenkins Pipeline!&quot;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// call the function</span></span>
<span class="line"><span style="color:#D73A49;">MyLib.</span><span style="color:#24292E;">myFunc(</span><span style="color:#032F62;">&#39;John&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><h3 id="curl" tabindex="-1">curl <a class="header-anchor" href="#curl" aria-label="Permalink to &quot;curl&quot;">​</a></h3><h4 id="async-curl" tabindex="-1">async curl <a class="header-anchor" href="#async-curl" aria-label="Permalink to &quot;async curl&quot;">​</a></h4><p>在 Jenkins Pipeline 中使用 curl 异步发送 HTTP 请求非常容易。首先，您需要安装 curl 插件，然后使用sh &#39;curl&#39;命令来发送请求。例如：</p><div class="language-jenkinsfile vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jenkinsfile</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pipeline {</span></span>
<span class="line"><span style="color:#e1e4e8;">    agent any</span></span>
<span class="line"><span style="color:#e1e4e8;">    stages {</span></span>
<span class="line"><span style="color:#e1e4e8;">        stage(&#39;Request&#39;) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            steps {</span></span>
<span class="line"><span style="color:#e1e4e8;">                sh &#39;curl http://example.com&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pipeline {</span></span>
<span class="line"><span style="color:#24292e;">    agent any</span></span>
<span class="line"><span style="color:#24292e;">    stages {</span></span>
<span class="line"><span style="color:#24292e;">        stage(&#39;Request&#39;) {</span></span>
<span class="line"><span style="color:#24292e;">            steps {</span></span>
<span class="line"><span style="color:#24292e;">                sh &#39;curl http://example.com&#39;</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>另外，如果您需要在 Pipeline 中等待远程请求的响应，则可以利用 Jenkins 内置的 waitUntil 方法，如下所示：</p><div class="language-jenkinsfile vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jenkinsfile</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pipeline {</span></span>
<span class="line"><span style="color:#e1e4e8;">    agent any</span></span>
<span class="line"><span style="color:#e1e4e8;">    stages {</span></span>
<span class="line"><span style="color:#e1e4e8;">        stage(&#39;Request&#39;) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            steps {</span></span>
<span class="line"><span style="color:#e1e4e8;">                script {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    def response = sh(returnStdout: true, script: &#39;curl http://example.com&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">                    waitUntil { response == &#39;expected response&#39; }</span></span>
<span class="line"><span style="color:#e1e4e8;">                }</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pipeline {</span></span>
<span class="line"><span style="color:#24292e;">    agent any</span></span>
<span class="line"><span style="color:#24292e;">    stages {</span></span>
<span class="line"><span style="color:#24292e;">        stage(&#39;Request&#39;) {</span></span>
<span class="line"><span style="color:#24292e;">            steps {</span></span>
<span class="line"><span style="color:#24292e;">                script {</span></span>
<span class="line"><span style="color:#24292e;">                    def response = sh(returnStdout: true, script: &#39;curl http://example.com&#39;)</span></span>
<span class="line"><span style="color:#24292e;">                    waitUntil { response == &#39;expected response&#39; }</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>此外，您还可以使用 Jenkins 的 HTTP Request 插件，它提供了一种更加可靠和易于使用的方式来发送和管理 HTTP 请求，如下所示：</p><div class="language-jenkinsfile vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jenkinsfile</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pipeline {</span></span>
<span class="line"><span style="color:#e1e4e8;">    agent any</span></span>
<span class="line"><span style="color:#e1e4e8;">    stages {</span></span>
<span class="line"><span style="color:#e1e4e8;">        stage(&#39;Request&#39;) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            steps {</span></span>
<span class="line"><span style="color:#e1e4e8;">                httpRequest url: &#39;http://example.com&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pipeline {</span></span>
<span class="line"><span style="color:#24292e;">    agent any</span></span>
<span class="line"><span style="color:#24292e;">    stages {</span></span>
<span class="line"><span style="color:#24292e;">        stage(&#39;Request&#39;) {</span></span>
<span class="line"><span style="color:#24292e;">            steps {</span></span>
<span class="line"><span style="color:#24292e;">                httpRequest url: &#39;http://example.com&#39;</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><hr><p>refer:</p><ul><li><a href="https://www.jenkins.io/doc/book/pipeline/docker/" target="_blank" rel="noreferrer">Using Docker with Pipeline</a></li><li><a href="https://www.jenkins.io/doc/book/pipeline/jenkinsfile/" target="_blank" rel="noreferrer">Using a Jenkinsfile</a></li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">curl</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;{&quot;msgtype&quot;: &quot;text&quot;,&quot;text&quot;: {&quot;content&quot;:&quot;&#39;&quot;</span><span style="color:#E1E4E8;">$JOB_NAME</span><span style="color:#9ECBFF;">&quot;&#39;: 镜像构建成功&#39;&quot;\${</span><span style="color:#E1E4E8;">BASIN_IMAGE</span><span style="color:#9ECBFF;">}, \${</span><span style="color:#E1E4E8;">DEPS_IMAGE</span><span style="color:#9ECBFF;">}&quot;&#39;，已推送至镜像仓库&quot;}, &quot;at&quot;: { &quot;atMobiles&quot;: [&quot;&#39;&quot;</span><span style="color:#E1E4E8;">$OWNER_PHONE</span><span style="color:#9ECBFF;">&quot;&#39;&quot;] }}&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\ </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">-H</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Content-Type: application/json&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">$DINGTALK_URL</span><span style="color:#9ECBFF;">&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">curl</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;{&quot;msgtype&quot;: &quot;text&quot;,&quot;text&quot;: {&quot;content&quot;:&quot;&#39;&quot;</span><span style="color:#24292E;">$JOB_NAME</span><span style="color:#032F62;">&quot;&#39;: 镜像构建成功&#39;&quot;\${</span><span style="color:#24292E;">BASIN_IMAGE</span><span style="color:#032F62;">}, \${</span><span style="color:#24292E;">DEPS_IMAGE</span><span style="color:#032F62;">}&quot;&#39;，已推送至镜像仓库&quot;}, &quot;at&quot;: { &quot;atMobiles&quot;: [&quot;&#39;&quot;</span><span style="color:#24292E;">$OWNER_PHONE</span><span style="color:#032F62;">&quot;&#39;&quot;] }}&#39;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\ </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">-H</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Content-Type: application/json&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">$DINGTALK_URL</span><span style="color:#032F62;">&quot;</span></span></code></pre></div>`,23),o=[p];function t(c,r,i,y,u,d){return a(),n("div",null,o)}const q=s(l,[["render",t]]);export{h as __pageData,q as default};
