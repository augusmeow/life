import{_ as s,c as a,o as n,Q as l}from"./chunks/framework.1cc28bed.js";const d=JSON.parse('{"title":"GitHub","description":"","frontmatter":{"icon":"logos:github-octocat"},"headers":[],"relativePath":"code-notes/version-ctrl/github.md","filePath":"code-notes/version-ctrl/github.md","lastUpdated":1686797227000}'),p={name:"code-notes/version-ctrl/github.md"},o=l(`<h1 id="github" tabindex="-1">GitHub <a class="header-anchor" href="#github" aria-label="Permalink to &quot;GitHub&quot;">​</a></h1><h2 id="hub" tabindex="-1"><a href="https://hub.github.com/" target="_blank" rel="noreferrer">hub</a> <a class="header-anchor" href="#hub" aria-label="Permalink to &quot;[hub](https://hub.github.com/)&quot;">​</a></h2><p>自动建仓</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">hub</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> [-poc] [-d </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">DESCRIPTION</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">] [-h </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">HOMEPAGE</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">] [</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">ORGANIZATION</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">/</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">NAME</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">hub</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> [-poc] [-d </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">DESCRIPTION</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">] [-h </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">HOMEPAGE</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">] [</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">ORGANIZATION</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">/</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">NAME</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">]</span></span></code></pre></div><h2 id="clone-private-repo" tabindex="-1">clone private repo <a class="header-anchor" href="#clone-private-repo" aria-label="Permalink to &quot;clone private repo&quot;">​</a></h2><p>github clone private repo, clone submodule private repo</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/checkout@v3</span></span>
<span class="line"><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">submodules</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">recursive</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">token</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;\${{ secrets.KEY }}&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/checkout@v3</span></span>
<span class="line"><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">submodules</span><span style="color:#24292E;">: </span><span style="color:#032F62;">recursive</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">token</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;\${{ secrets.KEY }}&#39;</span></span></code></pre></div><h2 id="generate-ssh" tabindex="-1"><a href="https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent" target="_blank" rel="noreferrer">generate ssh</a> <a class="header-anchor" href="#generate-ssh" aria-label="Permalink to &quot;[generate ssh]&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">ssh-keygen</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-t</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ed25519</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-C</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;your_email@example.com&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">ssh-keygen</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-t</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ed25519</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-C</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;your_email@example.com&quot;</span></span></code></pre></div><h2 id="github-action" tabindex="-1">GitHub Action <a class="header-anchor" href="#github-action" aria-label="Permalink to &quot;GitHub Action&quot;">​</a></h2><h3 id="create-pull-request" tabindex="-1"><a href="https://github.com/marketplace/actions/create-pull-request" target="_blank" rel="noreferrer">Create Pull Request</a> <a class="header-anchor" href="#create-pull-request" aria-label="Permalink to &quot;[Create Pull Request](https://github.com/marketplace/actions/create-pull-request)&quot;">​</a></h3><blockquote><p>GitHub Action</p></blockquote><p>try it by <a href="https://github.com/peter-evans/create-pull-request/blob/main/docs/examples.md#keep-a-branch-up-to-date-with-another" target="_blank" rel="noreferrer">documents</a></p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Create production promotion pull request</span></span>
<span class="line"><span style="color:#79B8FF;">on</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">push</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">branches</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">main</span></span>
<span class="line"><span style="color:#85E89D;">jobs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">productionPromotion</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">runs-on</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">steps</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/checkout@v3</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">ref</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">production</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Reset promotion branch</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#9ECBFF;">          git fetch origin main:main</span></span>
<span class="line"><span style="color:#9ECBFF;">          git reset --hard main</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Create Pull Request</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">peter-evans/create-pull-request@v4</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">branch</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">production-promotion</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Create production promotion pull request</span></span>
<span class="line"><span style="color:#005CC5;">on</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">push</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">branches</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">main</span></span>
<span class="line"><span style="color:#22863A;">jobs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">productionPromotion</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">runs-on</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ubuntu-latest</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">steps</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/checkout@v3</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">ref</span><span style="color:#24292E;">: </span><span style="color:#032F62;">production</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Reset promotion branch</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#032F62;">          git fetch origin main:main</span></span>
<span class="line"><span style="color:#032F62;">          git reset --hard main</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Create Pull Request</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">peter-evans/create-pull-request@v4</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">branch</span><span style="color:#24292E;">: </span><span style="color:#032F62;">production-promotion</span></span></code></pre></div><p>但是并没有生效，就更换了其他的 ci。</p><h3 id="github-pull-request-action" tabindex="-1"><a href="https://github.com/marketplace/actions/github-pull-request-action" target="_blank" rel="noreferrer">GitHub Pull Request Action</a> <a class="header-anchor" href="#github-pull-request-action" aria-label="Permalink to &quot;[GitHub Pull Request Action](https://github.com/marketplace/actions/github-pull-request-action)&quot;">​</a></h3><p><a href="https://fluxcd.io/docs/use-cases/gh-actions-auto-pr/" target="_blank" rel="noreferrer">docs</a></p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># ./.github/workflows/staging-auto-pr.yaml</span></span>
<span class="line"><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Staging Auto-PR</span></span>
<span class="line"><span style="color:#79B8FF;">on</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">push</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">branches</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">staging</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">jobs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">pull-request</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Open PR to main</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">runs-on</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">steps</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/checkout@v2</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">checkout</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">repo-sync/pull-request@v2</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">pull-request</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">destination_branch</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">main</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">pr_title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;Pulling \${{ github.ref }} into main&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">pr_body</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;👑 *An automated PR*&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">pr_reviewer</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">kingdonb</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">pr_draft</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">github_token</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ secrets.GITHUB_TOKEN }}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># ./.github/workflows/staging-auto-pr.yaml</span></span>
<span class="line"><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Staging Auto-PR</span></span>
<span class="line"><span style="color:#005CC5;">on</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">push</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">branches</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">staging</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">jobs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">pull-request</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Open PR to main</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">runs-on</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ubuntu-latest</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">steps</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/checkout@v2</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">checkout</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">repo-sync/pull-request@v2</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">pull-request</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">destination_branch</span><span style="color:#24292E;">: </span><span style="color:#032F62;">main</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">pr_title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;Pulling \${{ github.ref }} into main&#39;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">pr_body</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;👑 *An automated PR*&#39;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">pr_reviewer</span><span style="color:#24292E;">: </span><span style="color:#032F62;">kingdonb</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">pr_draft</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">github_token</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ secrets.GITHUB_TOKEN }}</span></span></code></pre></div><p>也即本网站的<a href="https://github.com/DrAugus/draugus.github.io/blob/master/.github/workflows/autopr.yml" target="_blank" rel="noreferrer">最终方案</a></p>`,19),e=[o];function t(c,r,E,y,i,u){return n(),a("div",null,e)}const b=s(p,[["render",t]]);export{d as __pageData,b as default};
