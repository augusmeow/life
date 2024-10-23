import{_ as i,c as a,a3 as t,o as e}from"./chunks/framework.DDs3IadZ.js";const k=JSON.parse('{"title":"fish cmd","description":"","frontmatter":{},"headers":[],"relativePath":"tools/cmd-line-tools/fish.md","filePath":"tools/cmd-line-tools/fish.md","lastUpdated":1720495435000}'),l={name:"tools/cmd-line-tools/fish.md"};function h(o,s,n,d,r,p){return e(),a("div",null,s[0]||(s[0]=[t('<h1 id="fish-cmd" tabindex="-1">fish cmd <a class="header-anchor" href="#fish-cmd" aria-label="Permalink to &quot;fish cmd&quot;">​</a></h1><h2 id="switch-to-fish-as-your-default" tabindex="-1">switch to fish as your <a href="https://fishshell.com/docs/current/index.html?highlight=set+default#default-shell" target="_blank" rel="noreferrer">default</a> <a class="header-anchor" href="#switch-to-fish-as-your-default" aria-label="Permalink to &quot;switch to fish as your [default]&quot;">​</a></h2><p>To change your login shell to fish:</p><ol><li><p>Add the shell to <code>/etc/shells</code> with:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/fish</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tee</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/shells</span></span></code></pre></div></li><li><p>Change your default shell with:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chsh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/fish</span></span></code></pre></div></li></ol>',4)]))}const f=i(l,[["render",h]]);export{k as __pageData,f as default};
