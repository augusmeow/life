import{_ as s,c as n,o as a,Q as l}from"./chunks/framework.1cc28bed.js";const d=JSON.parse('{"title":"Mergify","description":"","frontmatter":{"icon":"pajamas:git-merge"},"headers":[],"relativePath":"code-notes/build/mergify.md","filePath":"code-notes/build/mergify.md","lastUpdated":1686797227000}'),p={name:"code-notes/build/mergify.md"},o=l(`<h1 id="mergify" tabindex="-1">Mergify <a class="header-anchor" href="#mergify" aria-label="Permalink to &quot;Mergify&quot;">​</a></h1><p>github 官方支持 <a href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request" target="_blank" rel="noreferrer">auto merge</a> <s>这个 <a href="https://docs.mergify.com/examples/#bots" target="_blank" rel="noreferrer">bot</a> 可以下架了</s></p><p>nonono, official doc, I haven&#39;t figured it yet... now still use mergify</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">pull_request_rules</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">automatic merge for ImgBot pull requests</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">conditions</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">author=imgbot[bot]</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">actions</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">merge</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">method</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">merge</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">automatic merge for dependabot pull requests</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">conditions</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">author=dependabot[bot]</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">check-success=deploy</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">actions</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">merge</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">method</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">merge</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">automatic merge for Renovate pull requests</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">conditions</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">author=renovate[bot]</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">check-success=deploy</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">actions</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">merge</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">method</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">merge</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">automatic merge for Requires.io pull requests</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">conditions</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">title~=^\\[requires.io\\]</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">head~=^requires-io</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">check-success=deploy</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">actions</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">merge</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">method</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">merge</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">automatic merge for auto pull requests</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">conditions</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">title=pulling refs/heads/dev into master</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">check-success=deploy</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">actions</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">merge</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">method</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">merge</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">pull_request_rules</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">automatic merge for ImgBot pull requests</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">conditions</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">author=imgbot[bot]</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">actions</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">merge</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">method</span><span style="color:#24292E;">: </span><span style="color:#032F62;">merge</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">automatic merge for dependabot pull requests</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">conditions</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">author=dependabot[bot]</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">check-success=deploy</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">actions</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">merge</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">method</span><span style="color:#24292E;">: </span><span style="color:#032F62;">merge</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">automatic merge for Renovate pull requests</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">conditions</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">author=renovate[bot]</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">check-success=deploy</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">actions</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">merge</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">method</span><span style="color:#24292E;">: </span><span style="color:#032F62;">merge</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">automatic merge for Requires.io pull requests</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">conditions</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">title~=^\\[requires.io\\]</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">head~=^requires-io</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">check-success=deploy</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">actions</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">merge</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">method</span><span style="color:#24292E;">: </span><span style="color:#032F62;">merge</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">automatic merge for auto pull requests</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">conditions</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">title=pulling refs/heads/dev into master</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">check-success=deploy</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">actions</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">merge</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">method</span><span style="color:#24292E;">: </span><span style="color:#032F62;">merge</span></span></code></pre></div>`,4),e=[o];function c(t,r,E,y,i,m){return a(),n("div",null,e)}const g=s(p,[["render",c]]);export{d as __pageData,g as default};
