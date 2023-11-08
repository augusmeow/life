import{_ as e,c as o,o as t,Q as a}from"./chunks/framework.1cc28bed.js";const f=JSON.parse('{"title":"xcode","description":"","frontmatter":{"icon":"simple-icons:xcode"},"headers":[],"relativePath":"code-notes/dev-env/xcode.md","filePath":"code-notes/dev-env/xcode.md","lastUpdated":1686797227000}'),r={name:"code-notes/dev-env/xcode.md"},n=a(`<h1 id="xcode" tabindex="-1">xcode <a class="header-anchor" href="#xcode" aria-label="Permalink to &quot;xcode&quot;">​</a></h1><h2 id="download-version" tabindex="-1">download version <a class="header-anchor" href="#download-version" aria-label="Permalink to &quot;download version&quot;">​</a></h2><p><a href="https://developer.apple.com/download/all/?q=Xcode" target="_blank" rel="noreferrer">link</a></p><h2 id="support" tabindex="-1">support <a class="header-anchor" href="#support" aria-label="Permalink to &quot;support&quot;">​</a></h2><p>Minimum requirements and supported SDKs</p><p><a href="https://developer.apple.com/support/xcode/" target="_blank" rel="noreferrer">link</a></p><h2 id="sol" tabindex="-1">sol <a class="header-anchor" href="#sol" aria-label="Permalink to &quot;sol&quot;">​</a></h2><h3 id="error-unable-to-find-utility-simctl" tabindex="-1">error: unable to find utility &quot;simctl&quot; <a class="header-anchor" href="#error-unable-to-find-utility-simctl" aria-label="Permalink to &quot;error: unable to find utility &quot;simctl&quot;&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">xcrun: error: unable to find utility &quot;simctl&quot;, not a developer tool or in PATH</span></span>
<span class="line"><span style="color:#e1e4e8;">error Could not get the simulator list from Xcode. Please open Xcode and try running project directly from there to resolve the remaining issues.</span></span>
<span class="line"><span style="color:#e1e4e8;">Error: Command failed: xcrun simctl list --json devices</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">xcrun: error: unable to find utility &quot;simctl&quot;, not a developer tool or in PATH</span></span>
<span class="line"><span style="color:#24292e;">error Could not get the simulator list from Xcode. Please open Xcode and try running project directly from there to resolve the remaining issues.</span></span>
<span class="line"><span style="color:#24292e;">Error: Command failed: xcrun simctl list --json devices</span></span></code></pre></div><p><a href="https://stackoverflow.com/a/53046024/17744936" target="_blank" rel="noreferrer">refer</a></p><p>While running Xcode, open the <strong>Xcode</strong> menu, go to <strong>Preferences</strong>, then select <strong>Locations</strong><br> In Locations, &quot;Command Line Tools&quot;, choose your version of Xcode.<br> It should be fine.</p>`,11),s=[n];function l(i,c,d,p,u,h){return t(),o("div",null,s)}const _=e(r,[["render",l]]);export{f as __pageData,_ as default};
