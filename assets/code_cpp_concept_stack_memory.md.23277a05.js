import{_ as s,c as n,o as a,Q as l}from"./chunks/framework.1cc28bed.js";const F=JSON.parse('{"title":"堆栈 内存","description":"","frontmatter":{},"headers":[],"relativePath":"code/cpp/concept/stack_memory.md","filePath":"code/cpp/concept/stack_memory.md","lastUpdated":1682241312000}'),p={name:"code/cpp/concept/stack_memory.md"},o=l(`<h1 id="堆栈-内存" tabindex="-1">堆栈 内存 <a class="header-anchor" href="#堆栈-内存" aria-label="Permalink to &quot;堆栈 内存&quot;">​</a></h1><h2 id="简述-c-的内存分区" tabindex="-1">简述 C++ 的内存分区 <a class="header-anchor" href="#简述-c-的内存分区" aria-label="Permalink to &quot;简述 C++ 的内存分区&quot;">​</a></h2><blockquote><p>C/C++内存存储区有哪几种类型？</p></blockquote><p>在C++中，内存被分为若干个不同的区域，分别用于存放不同类型的数据。这些内存区域包括：</p><ul><li>栈区：用于存放函数的局部变量和临时变量。栈区的内存空间是自动分配和释放的，由编译器自动管理。函数结束时这些存储单元被自动的释放</li><li>堆区：用于存放动态分配的内存空间。堆区的内存空间是需要手动分配和释放的，由程序员自己管理。就是那些由 new 分配的内存块，一般一个 new 对应一个 delete</li><li>静态存储区：用于存放全局变量和静态变量。静态存储区的内存空间在程序初始化时分配，在程序结束时释放。</li><li>常量存储区：用于存放常量数据。常量存储区的内存空间在程序初始化时分配，在程序结束时释放。</li><li>程序代码区：用于存放程序的可执行代码。程序代码区的内存空间在程序初始化时分配，在程序结束时释放。</li></ul><p>栈区和堆区是C++程序中最常用的内存区域。栈区用于存放函数的局部变量和临时变量，其内存空间是自动分配和释放的，由编译器自动管理。堆区用于存放动态分配的内存空间，其内存空间是需要手动分配和释放的，由程序员自己管理。</p><p>例如，下面是一个使用栈区和堆区的示例程序：</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;iostream&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">func</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;"> // a 存放在栈区</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::cout </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::endl;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">int*</span><span style="color:#E1E4E8;"> p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">);</span><span style="color:#6A737D;"> // p 存放在栈区，它所指向的内存空间存放在堆区</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::cout </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">p </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::endl;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">delete</span><span style="color:#E1E4E8;"> p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">func</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;iostream&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">func</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">;</span><span style="color:#6A737D;"> // a 存放在栈区</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::endl;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">int*</span><span style="color:#24292E;"> p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">);</span><span style="color:#6A737D;"> // p 存放在栈区，它所指向的内存空间存放在堆区</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">p </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::endl;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">delete</span><span style="color:#24292E;"> p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">func</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>在这个程序中，我们定义了一个函数func和一个主函数main。在函数func中，我们定义了一个局部变量a，它存放在栈区中。在主函数main中，我们定义了一个指针p，并使用动态内存分配运算符new为它分配了一个新的内存空间，并将值5赋值给它。</p><p>根据这个程序的定义，我们可以得到以下的内存分配情况：</p><ul><li>变量a存放在栈区，它的生命周期与函数func相同。</li><li>指针p存放在栈区，它所指向的内存空间存放在堆区，它的生命周期与主函数main相同。 在这个程序中，变量a和指针p都是在函数调用时分配内存空间的，并在函数结束时释放内存空间。因此，它们的生命周期与函数的调用相关。</li></ul><p>总之，C++的内存分区是指将内存分为若干个不同的区域，分别用于存放不同类型的数据。这些内存区域包括栈区、堆区、静态存储区、常量存储区和程序代码区。C++程序中最常用的内存区域是栈区和堆区，它们分别用于存放函数的局部变量和动态分配的内存空间。</p><blockquote><p>不同的操作系统和编译器可能会有细微的区别，比如Windows操作系统中的数据段和代码段在内存中是分开存放的，但在Linux系统中它们可以存放在同一个地址空间中。</p></blockquote><h2 id="简述-c-中内存对齐的使用场景" tabindex="-1">简述 C++ 中内存对齐的使用场景 <a class="header-anchor" href="#简述-c-中内存对齐的使用场景" aria-label="Permalink to &quot;简述 C++ 中内存对齐的使用场景&quot;">​</a></h2><p>在C++中，内存对齐指的是将内存空间按照某种规则进行划分和排列，以提高内存访问的效率。内存对齐通常用于结构体和联合体，以减少内存碎片，提高内存利用率。</p><p>例如，下面是一个使用内存对齐的示例程序：</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;iostream&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">S</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">char</span><span style="color:#E1E4E8;"> c;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">double</span><span style="color:#E1E4E8;"> d;</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#79B8FF;">__attribute__((</span><span style="color:#B392F0;">aligned</span><span style="color:#79B8FF;">(8)))</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  S s;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::cout </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">sizeof</span><span style="color:#E1E4E8;">(s) </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::endl;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;iostream&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">S</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">char</span><span style="color:#24292E;"> c;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">double</span><span style="color:#24292E;"> d;</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#005CC5;">__attribute__((</span><span style="color:#6F42C1;">aligned</span><span style="color:#005CC5;">(8)))</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  S s;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">sizeof</span><span style="color:#24292E;">(s) </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::endl;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>在这个程序中，我们定义了一个结构体S，并在定义的后面加上了一个属性说明符，指定结构体的内存对齐方式为8字节对齐。这意味着编译器会将结构体的内存空间按照8字节为单位进行划分和排列。</p><p>由于结构体S中包含了3个成员，分别为一个字符、一个整型数和一个浮点数，它们的大小分别为1字节、4字节和8字节。根据内存对齐的规则，编译器会将这3个成员按照8字节为单位进行划分和排列，并将剩余的空间补齐为8字节的倍数。因此，结构体S的大小应该为24字节。</p><p>在这个程序的主函数中，我们定义了一个结构体变量s，并使用了sizeof运算符计算了它的大小。如果编译器支持内存对齐，那么程序的输出应该为24。</p><p>总之，内存对齐是指将内存空间按照某种规则进行划分和排列，以提高内存访问的效率。内存对齐通常用于结构体和联合体，以减少内存碎片，提高内存利用率。使用内存对齐可以提高程序的性能和效率。</p><h2 id="c-是如何进行内存管理的" tabindex="-1">C++ 是如何进行内存管理的？ <a class="header-anchor" href="#c-是如何进行内存管理的" aria-label="Permalink to &quot;C++ 是如何进行内存管理的？&quot;">​</a></h2><p>提供了一些与内存管理相关的关键字和操作符，用于帮助程序员在程序中合理地分配和释放内存。</p><ul><li>关键字new用于在堆上分配内存，并返回指向该内存区域的指针。</li><li>关键字delete用于释放由new关键字分配的内存。</li><li>运算符new[]用于在堆上分配数组，并返回指向该数组的指针。</li><li>运算符delete[]用于释放由new[]运算符分配的数组。</li></ul><p>例如，下面的代码演示了如何在堆上分配内存，并使用delete关键字释放该内存：</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">   // 分配一个int型变量的内存</span></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">p </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">           // 通过指针p访问该内存并赋值</span></span>
<span class="line"><span style="color:#F97583;">delete</span><span style="color:#E1E4E8;"> p;</span><span style="color:#6A737D;">           // 释放内存</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">   // 分配一个int型变量的内存</span></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;">p </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">           // 通过指针p访问该内存并赋值</span></span>
<span class="line"><span style="color:#D73A49;">delete</span><span style="color:#24292E;"> p;</span><span style="color:#6A737D;">           // 释放内存</span></span></code></pre></div><p>需要注意的是，如果程序员忘记使用delete关键字释放内存，可能会造成内存泄露，即内存无法被释放而被浪费。因此，程序员应该认真跟踪内存分配并在适当的时候使用delete关键字释放内存。</p><h2 id="内存中堆与栈的区别是什么" tabindex="-1">内存中堆与栈的区别是什么？ <a class="header-anchor" href="#内存中堆与栈的区别是什么" aria-label="Permalink to &quot;内存中堆与栈的区别是什么？&quot;">​</a></h2><p>堆和栈是内存中两种不同的存储区域，它们各有特点，并在程序执行中扮演不同的角色。</p><ul><li>栈是一种后进先出（LIFO）的内存结构，由编译器自动分配和释放。栈中的变量通常是局部变量，它们在函数调用结束时自动释放。</li><li>堆是一种动态分配内存的方式，由程序员控制内存的分配和释放。堆中的变量通常是全局变量或者是动态分配的内存，它们在程序结束前一直保存在内存中。</li></ul><p>因此，栈和堆最大的区别在于分配和释放方式不同。栈中的变量是由编译器自动分配释放的，而堆中的变量是由程序员手动分配释放的。另外，栈中的变量一般是局部变量，堆中的变量一般是全局变量或者是动态分配的内存。</p><h2 id="内存的分配方式有几种" tabindex="-1">内存的分配方式有几种 <a class="header-anchor" href="#内存的分配方式有几种" aria-label="Permalink to &quot;内存的分配方式有几种&quot;">​</a></h2><ol><li>从静态存储区域分配。内存在程序编译的时候就已经分配好，这块内存在程序的整个运行期间都存在。例如全局变量。</li><li>在栈上创建。在执行函数时，函数内局部变量的存储单元都可以在栈上创建，函数执行结束时这些存储单元自动被释放。栈内存分配运算内置于处理器的指令集中，效率很高，但是分配的内存容量有限。</li><li>从堆上分配，亦称动态内存分配。程序在运行的时候用malloc或new申请任意多少的内存，程序员自己负责在何时用free或delete释放内存。动态内存的生存期由我们决定，使用非常灵活，但问题也最多。</li></ol><h2 id="c-如何避免内存泄漏" tabindex="-1">C++如何避免内存泄漏 <a class="header-anchor" href="#c-如何避免内存泄漏" aria-label="Permalink to &quot;C++如何避免内存泄漏&quot;">​</a></h2><blockquote><p>这其实可以看做是一个编程风格的问题。</p></blockquote><ul><li>使用RAII(Resource Acquisition Is Initialization,资源获取即初始化)技法，以构造函数获取资源(内存),析构函数释放。</li><li>相比于使用原生指针，更建议使用智能指针，尤其是C++11标准化后的智能指针。</li><li>注意delete和delete[]的使用方法。</li><li>这是很复杂的一种情况，是关于类的copy constructor的。首先先介绍一些概念。</li></ul><p>同default constructor一样，标准保证，如果类作者没有为class声明一个copy constructor，那么编译器会在需要的时候产生出来(这也是一个常考点：问道”如果类作者未定义出default/copy constructor，编译器会自动产生一个吗？”答案是否定的) 不过请注意！！这里编译器即使产生出来，也是为满足它的需求，而非类作者的需求！！ 而什么时候是编译器”需要”的时候呢？是在当这个class 【不表现出】bitwise copy semantics(位逐次拷贝，即浅拷贝) 的时候。 在4中情况下class【不表现出】bitwise copy semantics</p><ul><li>当class内含一个member object且该member object声明了一个copy constructor(无论该copy ctor是类作者自己生明的还是编译器合成的)；</li><li>当class继承自一个base class且该base class有一个copy constructor(无论该copy ctor是类作者自己生明的还是编译器合成的)；</li><li>当class声明了virtual function；</li><li>当class派生自一个继承链，且该链中存在virtual base class时。</li></ul><p>言归正传，如果class中仅仅是一些普通资源，那么default memberwise copy是完全够用的；然而，挡在该class中存在了一块动态分配的内存，并且在之后执行了bitwise copy semantics后，将会有一个按位拷贝的对象和原来class中的某个成员指向同一块heap空间，当执行它们的析构函数后，该内存将被释放两次，这是未定义的行为。因此，在必要的时候需要使用user###defined explicit copy constructor，来避免内存泄露。</p>`,39),e=[o];function c(t,r,y,E,i,d){return a(),n("div",null,e)}const h=s(p,[["render",c]]);export{F as __pageData,h as default};
