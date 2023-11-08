import{_ as s,c as a,o as n,Q as l}from"./chunks/framework.1cc28bed.js";const F=JSON.parse('{"title":"引用","description":"","frontmatter":{},"headers":[],"relativePath":"code/cpp/concept/reference.md","filePath":"code/cpp/concept/reference.md","lastUpdated":1682241312000}'),p={name:"code/cpp/concept/reference.md"},o=l(`<h1 id="引用" tabindex="-1">引用 <a class="header-anchor" href="#引用" aria-label="Permalink to &quot;引用&quot;">​</a></h1><h2 id="左值引用" tabindex="-1">左值引用 <a class="header-anchor" href="#左值引用" aria-label="Permalink to &quot;左值引用&quot;">​</a></h2><p>常规引用，一般表示对象的身份。</p><h2 id="右值引用" tabindex="-1">右值引用 <a class="header-anchor" href="#右值引用" aria-label="Permalink to &quot;右值引用&quot;">​</a></h2><p>右值引用就是必须绑定到右值（一个临时对象、将要销毁的对象）的引用，一般表示对象的值。<br> 右值引用可实现转移语义（Move Semantics）和完美转发（Perfect Forwarding），它的主要目的有两个方面：</p><ul><li>消除两个对象交互时不必要的对象拷贝，节省运算存储资源，提高效率。</li><li>能够更简洁明确地定义泛型函数。</li></ul><h2 id="引用折叠" tabindex="-1">引用折叠 <a class="header-anchor" href="#引用折叠" aria-label="Permalink to &quot;引用折叠&quot;">​</a></h2><ul><li><code>X&amp; &amp;</code>、<code>X&amp; &amp;&amp;</code>、<code>X&amp;&amp; &amp;</code>可折叠成 <code>X&amp;</code></li><li><code>X&amp;&amp; &amp;&amp;</code> 可折叠成 <code>X&amp;&amp;</code></li></ul><h2 id="什么是-引用-申明和使用-引用-要注意哪些问题" tabindex="-1">什么是“引用”？申明和使用“引用”要注意哪些问题 <a class="header-anchor" href="#什么是-引用-申明和使用-引用-要注意哪些问题" aria-label="Permalink to &quot;什么是“引用”？申明和使用“引用”要注意哪些问题&quot;">​</a></h2><p>引用就是某个目标变量的“别名”(alias) ，对应用的操作与对变量直接操作效果完全相同。申明一个引用的时候，切记要对其进行初始化。引用声明完毕后，相当于目标变量名有两个名称，即该目标原名称和引用名，不能再把该引用名作为其他变量名的别名。声明一个引用，不是新定义了一个变量，它只表示该引用名是目标变量名的一个别名，它本身不是一种数据类型，因此引用本身不占存储单元，系统也不给引用分配存储单元。不能建立数组的引用。</p><h2 id="将-引用-作为函数参数有哪些特点" tabindex="-1">将“引用”作为函数参数有哪些特点 <a class="header-anchor" href="#将-引用-作为函数参数有哪些特点" aria-label="Permalink to &quot;将“引用”作为函数参数有哪些特点&quot;">​</a></h2><ul><li>传递引用给函数与传递指针的效果是一样的。这时，被调函数的形参就成为原来主调函数中的实参变量或对象的一个别名来使用，所以在被调函数中对形参变量的操作就是对其相应的目标对象（在主调函数中）的操作。</li><li>使用引用传递函数的参数，在内存中并没有产生实参的副本，它是直接对实参操作；而使用一般变量传递函数的参数，当发生函数调用时，需要给形参分配存储单元，形参变量是实参变量的副本；如果传递的是对象，还将调用拷贝构造函数。因此，当参数传递的数据较大时，用引用比用一般变量传递参数的效率和所占空间都好。</li><li>使用指针作为函数的参数虽然也能达到与使用引用的效果，但是，在被调函数中同样要给形参分配存储单元，且需要重复使用&quot;* 指针变量名&quot;的形式进行运算，这很容易产生错误且程序的阅读性较差；另一方面，在主调函数的调用点处，必须用变量的地址作为实参。而引用更容易使用，更清晰。</li></ul><h2 id="在什么时候需要使用-常引用" tabindex="-1">在什么时候需要使用“常引用” <a class="header-anchor" href="#在什么时候需要使用-常引用" aria-label="Permalink to &quot;在什么时候需要使用“常引用”&quot;">​</a></h2><p>如果既要利用引用提高程序的效率，又要保护传递给函数的数据不在函数中被改变，就应使用常引用。常引用声明方式：const 类型标识符 &amp;引用名=目标变量名；</p><ul><li>例1</li></ul><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> a ;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">ra</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">a;</span></span>
<span class="line"><span style="color:#E1E4E8;">ra</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;"> //错误</span></span>
<span class="line"><span style="color:#E1E4E8;">a</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;"> //正确</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> a ;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">ra</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">a;</span></span>
<span class="line"><span style="color:#24292E;">ra</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span><span style="color:#6A737D;"> //错误</span></span>
<span class="line"><span style="color:#24292E;">a</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span><span style="color:#6A737D;"> //正确</span></span></code></pre></div><ul><li>例2</li></ul><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">string</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">( );</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">bar</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">string</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">s</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">string</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">( );</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">bar</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">string</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;"> </span><span style="color:#E36209;">s</span><span style="color:#24292E;">);</span></span></code></pre></div><p>那么下面的表达式将是非法的：</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">bar</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">( ));</span></span>
<span class="line"><span style="color:#B392F0;">bar</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;hello world&quot;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">bar</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">( ));</span></span>
<span class="line"><span style="color:#6F42C1;">bar</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;hello world&quot;</span><span style="color:#24292E;">);</span></span></code></pre></div><p>原因在于foo( )和&quot;hello world&quot; 串都会产生一个临时对象，而在C++中，这些临时对象都是const类型的。因此上面的表达式就是试图将一个const类型的对象转换为非const类型，这是非法的。引用型参数应该在能被定义为const的情况下，尽量定义为const 。</p><h2 id="将-引用-作为函数返回值类型的格式、好处和需要遵守的规则" tabindex="-1">将“引用”作为函数返回值类型的格式、好处和需要遵守的规则? <a class="header-anchor" href="#将-引用-作为函数返回值类型的格式、好处和需要遵守的规则" aria-label="Permalink to &quot;将“引用”作为函数返回值类型的格式、好处和需要遵守的规则?&quot;">​</a></h2><p>格式：<code>类型标识符 &amp;函数名（形参列表及类型说明）{ //函数体 }</code><br> 好处：在内存中不产生被返回值的副本（注意：正是因为这点原因，所以返回一个局部变量的引用是不可取的。因为随着该局部变量生存期的结束，相应的引用也会失效，产生runtime error!<br> 注意事项：</p><ul><li>不能返回局部变量的引用。这条可以参照Effective C++[1]的Item 31。主要原因是局部变量会在函数返回后被销毁，因此被返回的引用就成为了&quot;无所指&quot;的引用，程序会进入未知状态。</li><li>不能返回函数内部new分配的内存的引用。这条可以参照Effective C++[1]的Item 31。虽然不存在局部变量的被动销毁问题，可对于这种情况（返回函数内部new分配内存的引用），又面临其它尴尬局面。例如，被函数返回的引用只是作为一个临时变量出现，而没有被赋予一个实际的变量，那么这个引用所指向的空间（由new分配）就无法释放，造成memory leak。</li><li>可以返回类成员的引用，但最好是const。这条原则可以参照Effective C++[1]的Item 30。主要原因是当对象的属性是与某种业务规则（business rule）相关联的时候，其赋值常常与某些其它属性或者对象的状态有关，因此有必要将赋值操作封装在一个业务规则当中。如果其它对象可以获得该属性的非常量引用（或指针），那么对该属性的单纯赋值就会破坏业务规则的完整性。</li><li>流操作符重载返回值申明为“引用”的作用： <ul><li>流操作符&lt;&lt;和&gt;&gt;，这两个操作符常常希望被连续使用，例如：cout &lt;&lt; &quot;hello&quot; &lt;&lt; endl; 因此这两个操作符的返回值应该是一个仍然支持这两个操作符的流引用。可选的其它方案包括：返回一个流对象和返回一个流对象指针。但是对于返回一个流对象，程序必须重新（拷贝）构造一个新的流对象，也就是说，连续的两个&lt;&lt; 操作符实际上是针对不同对象的！这无法让人接受。对于返回一个流指针则不能连续使用&lt;&lt; 操作符。因此，返回一个流对象引用是惟一选择。这个唯一选择很关键，它说明了引用的重要性以及无可替代性，也许这就是C++语言中引入引用这个概念的原因吧。</li><li>赋值操作符=。这个操作符象流操作符一样，是可以连续使用的，例如：x = j = 10;或者(x=10) =100;赋值操作符的返回值必须是一个左值，以便可以被继续赋值。因此引用成了这个操作符的惟一返回值选择。</li></ul></li><li>在另外的一些操作符中，却千万不能返回引用：+-*/ 四则运算符。它们不能返回引用，Effective C++[1] 的Item23详细的讨论了这个问题。主要原因是这四个操作符没有side effect，因此，它们必须构造一个对象作为返回值，可选的方案包括：返回一个对象、返回一个局部变量的引用，返回一个new分配的对象的引用、返回一个静态对象引用。根据前面提到的引用作为返回值的三个规则，第2、3两个方案都被否决了。静态对象的引用又因为(( a+b) == (c+d))会永远为true而导致错误。所以可选的只剩下返回一个对象了。</li></ul><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;</span><span style="color:#B392F0;">put</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">n</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> vals[</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> error </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">put</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;"> //以put(0)函数值作为左值，等价于vals[0]=10;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">put</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">9</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;"> //以put(9)函数值作为左值，等价于vals[9]=20;</span></span>
<span class="line"><span style="color:#E1E4E8;">  cout </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> vals[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">  cout </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> vals[</span><span style="color:#79B8FF;">9</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;</span><span style="color:#B392F0;">put</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">n</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (n </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">9</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> vals[n];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    cout </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;subscript error&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> error;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;</span><span style="color:#6F42C1;">put</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">n</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> vals[</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> error </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">put</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">;</span><span style="color:#6A737D;"> //以put(0)函数值作为左值，等价于vals[0]=10;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">put</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">9</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">;</span><span style="color:#6A737D;"> //以put(9)函数值作为左值，等价于vals[9]=20;</span></span>
<span class="line"><span style="color:#24292E;">  cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> vals[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">  cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> vals[</span><span style="color:#005CC5;">9</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;</span><span style="color:#6F42C1;">put</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">n</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (n </span><span style="color:#D73A49;">&gt;=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> n </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">9</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> vals[n];</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;subscript error&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> error;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,25),e=[o];function t(c,r,E,y,i,d){return n(),a("div",null,e)}const h=s(p,[["render",t]]);export{F as __pageData,h as default};