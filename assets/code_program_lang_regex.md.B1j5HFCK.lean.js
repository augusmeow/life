import{_ as i,c as a,a3 as h,o as n}from"./chunks/framework.DDs3IadZ.js";const o=JSON.parse('{"title":"正则表达式","description":"","frontmatter":{},"headers":[],"relativePath":"code/program/lang/regex.md","filePath":"code/program/lang/regex.md","lastUpdated":1722829218000}'),t={name:"code/program/lang/regex.md"};function l(e,s,k,p,d,r){return n(),a("div",null,s[0]||(s[0]=[h(`<h1 id="正则表达式" tabindex="-1">正则表达式 <a class="header-anchor" href="#正则表达式" aria-label="Permalink to &quot;正则表达式&quot;">​</a></h1><h2 id="遇到的问题" tabindex="-1">遇到的问题 <a class="header-anchor" href="#遇到的问题" aria-label="Permalink to &quot;遇到的问题&quot;">​</a></h2><h3 id="匹配可选内容时" tabindex="-1">匹配可选内容时 <a class="header-anchor" href="#匹配可选内容时" aria-label="Permalink to &quot;匹配可选内容时&quot;">​</a></h3><p>如匹配时分秒，可能会没有秒时，正常的正则书写为 <code>\\d{1,2}:\\d{1,2}(:\\d{1,2})?</code> 使用 <code>search</code> 而后 <code>group</code> 可以找到，但使用 <code>findall</code> 则无法找到，需要改为 <code>\\d{1,2}:\\d{1,2}(?::\\d{1,2})?</code> 增加 <code>?:</code> 前缀。具体说明解释参看<a href="https://docs.python.org/3/howto/regex.html#non-capturing-and-named-groups" target="_blank" rel="noreferrer">官方文档「非捕获和命名组」</a>。（下方<a href="#提取日期">实例</a>也可参考）</p><h2 id="实践" tabindex="-1">实践 <a class="header-anchor" href="#实践" aria-label="Permalink to &quot;实践&quot;">​</a></h2><h3 id="简单匹配" tabindex="-1">简单匹配 <a class="header-anchor" href="#简单匹配" aria-label="Permalink to &quot;简单匹配&quot;">​</a></h3><p>匹配中文 <code>[\\u4e00-\\u9fa5]</code><br> 匹配英文 <code>[a-zA-Z]</code><br> 匹配数字 <code>[0-9]</code></p><p>匹配 字母+空格+汉字，形如”a 好“，<code>[a-zA-Z] [\\u4e00-\\u9fa5]</code><br> 那么如果只匹配符合这个格式的空格呢？</p><h3 id="正则表达式匹配空行、空白行" tabindex="-1">正则表达式匹配空行、空白行 <a class="header-anchor" href="#正则表达式匹配空行、空白行" aria-label="Permalink to &quot;正则表达式匹配空行、空白行&quot;">​</a></h3><p>两种方法</p><ul><li><code>^(\\t)*$\\n</code></li><li><code>/^\\s*$/</code></li></ul><h3 id="python-提取字符串中的指定字符" tabindex="-1">python 提取字符串中的指定字符 <a class="header-anchor" href="#python-提取字符串中的指定字符" aria-label="Permalink to &quot;python 提取字符串中的指定字符&quot;">​</a></h3><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> match_strings</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(text, begin, end):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    pattern </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> re.compile(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">begin</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(.*?)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">end</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    matches </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pattern.findall(text)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> matches</span></span></code></pre></div><p>如果 字符串里有 <code>\\n</code> 记得替换掉 否则不生效</p><h3 id="提取日期" tabindex="-1">提取日期 <a class="header-anchor" href="#提取日期" aria-label="Permalink to &quot;提取日期&quot;">​</a></h3><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-xPUrD" id="tab-kcdQxzx" checked><label data-title="single match" for="tab-kcdQxzx">single match</label><input type="radio" name="group-xPUrD" id="tab-wVd8rPI"><label data-title="multi match" for="tab-wVd8rPI">multi match</label></div><div class="blocks"><div class="language-py vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> re</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># single match</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">find_des </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;2024/6/25 18:00—2024/7/16 14:59</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">time_match </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> re.search(</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">(\\d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">{4}</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">{1,2}</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">{1,2}</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\s</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">{1,2}</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">{1,2}</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">{1,2}</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, find_des</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> time_match:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    time </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> time_match.group(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    time </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> None</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(time)</span></span></code></pre></div><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> find_date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(text):</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 正则表达式匹配两种格式的时间字符串</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 2024/1/2 or 2024/01/02 or 2024-01-02</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 秒可选，可能会没有秒</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # (?::\\d{1,2})?</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 参考 群友 及 https://docs.python.org/3/howto/regex.html#non-capturing-and-named-groups</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    pattern </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">{4}</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">[/-]\\d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">{1,2}</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">[/-]\\d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">{1,2}</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\s</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">{1,2}</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">{1,2}</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">(?:</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">{1,2}</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    matches </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> re.findall(pattern, text)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    unique_matches </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">dict</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.fromkeys(matches))</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> unique_matches</span></span></code></pre></div></div></div>`,16)]))}const F=i(t,[["render",l]]);export{o as __pageData,F as default};
