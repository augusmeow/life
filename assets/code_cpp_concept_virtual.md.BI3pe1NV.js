import{_ as i,c as a,a3 as n,o as p}from"./chunks/framework.DDs3IadZ.js";const l="/life/img/code/code/virtual_1.jpg",h="/life/img/code/code/virtual_2.jpg",c=JSON.parse('{"title":"虚函数","description":"","frontmatter":{},"headers":[],"relativePath":"code/cpp/concept/virtual.md","filePath":"code/cpp/concept/virtual.md","lastUpdated":1692117387000}'),t={name:"code/cpp/concept/virtual.md"};function e(k,s,r,d,o,g){return p(),a("div",null,s[0]||(s[0]=[n(`<h1 id="虚函数" tabindex="-1">虚函数 <a class="header-anchor" href="#虚函数" aria-label="Permalink to &quot;虚函数&quot;">​</a></h1><h2 id="虚函数的底层实现" tabindex="-1">虚函数的底层实现 <a class="header-anchor" href="#虚函数的底层实现" aria-label="Permalink to &quot;虚函数的底层实现&quot;">​</a></h2><p>虚函数的底层实现通常是通过虚函数表（vtable）来实现的。每个包含虚函数的类都会有一个虚函数表，其中存储了这个类所有虚函数的地址。当通过类的指针或引用调用虚函数时，编译器会根据对象的类型找到相应的虚函数表，并通过表中的函数地址来调用正确的函数。</p><h3 id="构造函数能否调用虚函数" tabindex="-1">构造函数能否调用虚函数 <a class="header-anchor" href="#构造函数能否调用虚函数" aria-label="Permalink to &quot;构造函数能否调用虚函数&quot;">​</a></h3><p>构造函数不能调用虚函数。在对象创建的过程中，构造函数会先初始化对象的成员变量和基类，然后才会调用构造函数的代码体。这时候对象还没有完全构造完成，虚函数表也还没有被初始化，因此不可能调用虚函数。另外，在基类的构造函数中调用虚函数，将会调用基类自身的虚函数而不是派生类的虚函数。这是因为在派生类对象构造之前，基类对象已经构造完成，此时派生类的虚函数表还没有被初始化，所以只能调用基类自身的虚函数。</p><h2 id="c-虚函数表-多态的实现原理" tabindex="-1">C++虚函数表（多态的实现原理） <a class="header-anchor" href="#c-虚函数表-多态的实现原理" aria-label="Permalink to &quot;C++虚函数表（多态的实现原理）&quot;">​</a></h2><blockquote><p>C++中的虚函数表（Virtual Function Table，VTable）是一种数据结构，是用来实现多态性的。它是一个数组，存储了一个类中的虚函数的地址，每个类都有自己的虚函数表。在对象创建时，虚函数表会被初始化，其中存储了虚函数的地址，然后被指向该对象的虚函数指针所指向。<br> 当一个类含有虚函数时，编译器会为该类生成一个虚函数表，其中每个虚函数都有相应的索引，该索引被称为虚函数表中的偏移量。当类对象被创建时，会在对象中自动添加一个指向虚函数表的指针（虚函数指针），这个指针被存储在对象的内存空间中。当一个虚函数被调用时，程序会根据虚函数指针找到对象所属的虚函数表，并根据偏移量找到对应的虚函数地址。<br> 具体来说，当一个带有虚函数的类被实例化时，其内部存储了一个指向虚函数表的指针，这个指针指向的是一个仅在编译器生成的仅包含函数指针的表，在运行时程序通过这个表调用虚函数。如果派生类重写了基类中的虚函数，就会在虚函数表中给派生类虚函数指针赋值，这样就可以在运行时使用派生类虚函数覆盖基类虚函数。<br> 需要注意的是，虚函数表的数据结构和使用方法是由具体的编译器和平台决定的。因此，不同的系统和编译器实现不同，可能有所差异。</p></blockquote><p>“多态”的关键在于通过基类指针或引用调用一个虚函数时，编译时不确定到底调用的是基类还是派生类的函数，运行时才确定。这是如何实现的呢？</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;iostream&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> A</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    virtual</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> func</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    virtual</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> func2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> B</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> A</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> j;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> func</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    cout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> sizeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(A) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;, &quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> sizeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(B);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //输出 8,12</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>在 32 位编译模式下，程序的运行结果是：8, 12<br> 如果将程序中的 virtual 关键字去掉，输出结果变为：4, 8</p><p>对比发现，有了虚函数以后，对象所占用的存储空间比没有虚函数时多了 4 个字节。实际上，任何有虚函数的类及其派生类的对象都包含这多出来的 4 个字节，这 4 个字节就是实现多态的关键——它位于对象存储空间的最前端，<strong>其中存放的是虚函数表的地址</strong>。</p><p><strong>每一个有虚函数的类（或有虚函数的类的派生类）都有一个虚函数表，该类的任何对象中都放着该虚函数表的指针（可以认为这是由编译器自动添加到构造函数中的指令完成的）。</strong></p><p>虚函数表是编译器生成的，程序运行时被载入内存。一个类的虚函数表中列出了该类的全部虚函数地址。例如，在上面的程序中，类 A 对象的存储空间以及虚函数表（假定类 A 还有其他虚函数）如图 1 所示。</p><p><img src="`+l+'" alt="1"><br><em>图1：类A对象的存储空间以及虚函数表</em></p><p>类 B 对象的存储空间以及虚函数表（假定类 B 还有其他虚函数）如图 2 所示。</p><p><img src="'+h+`" alt="1"><br><em>图2：类B对象的存储空间以及虚函数表</em></p><p>多态的函数调用语句被编译成根据基类指针所指向的（或基类引用所引用的）对象中存放的虚函数表的地址，在虚函数表中查找虚函数地址，并调用虚函数的一系列指令。</p><p>假设 pa 的类型是 A*，则 pa-&gt;func() 这条语句的执行过程如下：</p><ol><li>取出 pa 指针所指位置的前 4 个字节，即对象所属的类的虚函数表的地址（在 64 位编译模式下，由于指针占 8 个字节，所以要取出 8 个字节）。如果 pa 指向的是类 A 的对象，则这个地址就是类 A 的虚函数表的地址；如果 pa 指向的是类 B 的对象，则这个地址就是类 B 的虚函数表的地址。</li><li>根据虚函数表的地址找到虚函数表，在其中查找要调用的虚函数的地址。不妨认为虚函数表是以函数名作为索引来查找的，虽然还有更高效的查找方法。如果 pa 指向的是类 A 的对象，自然就会在类 A 的虚函数表中查出 A::func 的地址；如果 pa 指向的是类 B 的对象，就会在类 B 的虚函数表中查出 B::func 的地址。类 B 没有自己的 func2 函数，因此在类 B 的虚函数表中保存的是 A::func2 的地址，这样，即便 pa 指向类 B 的对象，pa-&gt;func2();这条语句在执行过程中也能在类 B 的虚函数表中找 A::func2 的地址。</li><li>根据找到的虚函数的地址调用虚函数。</li></ol><p>由以上过程可以看出，只要是通过基类指针或基类引用调用虚函数的语句，就一定是多态的，也一定会执行上面的查表过程，哪怕这个虚函数仅在基类中有，在派生类中没有。</p><p>多态机制能够提高程序的开发效率，但是也增加了程序运行时的开销。虚函数表、各个对象中包含的 4 个字节的虚函数表的地址都是空间上的额外开销；而查虚函数表的过程则是时间上的额外开销。</p><p>在计算机发展的早期，计算机非常昂贵稀有，运行速度慢，计算机的运算时间和内存是宝贵的，因此人们不惜多花人力编写运行速度更快、更节省内存的程序；如今，计算机的运算时间和内存往往没有人的时间宝贵，运算速度也很快，因此，在用户可以接受的前提下，降低程序运行的效率以提升人员的开发效率就是值得的了。“多态”的应用就是典型例子。</p><h2 id="c-中虚函数功能的实现机制" tabindex="-1">C++中虚函数功能的实现机制 <a class="header-anchor" href="#c-中虚函数功能的实现机制" aria-label="Permalink to &quot;C++中虚函数功能的实现机制&quot;">​</a></h2><p>要理解C++中虚函数是如何工作的，需要回答四个问题。</p><h3 id="什么是虚函数" tabindex="-1">什么是虚函数 <a class="header-anchor" href="#什么是虚函数" aria-label="Permalink to &quot;什么是虚函数&quot;">​</a></h3><p>虚函数由于必须是在类中声明的函数，因此又称为虚方法。<br> 所有以virtual修饰符开始的成员函数都成为虚方法。此时注意是virtual修饰的成员函数不是virtual修饰的成员函数名。</p><p>例如：基类中定义：</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">virtual</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> show</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //由于有virtual修饰因此是虚函数</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">voidshow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          //虽然和前面声明的show虚函数同名，但不是虚函数。</span></span></code></pre></div><p>所有的虚函数地址都会放在所属类的虚函数表vtbl中。<br> 另外在基类中声明为虚函数的成员方法，到达子类时仍然是虚函数，即使子类中重新定义基类虚函数时未使用virtual修饰，该函数地址仍会放在子类的虚函数表vtbl中。</p><h3 id="正确区分重载、重写和隐藏" tabindex="-1">正确区分重载、重写和隐藏 <a class="header-anchor" href="#正确区分重载、重写和隐藏" aria-label="Permalink to &quot;正确区分重载、重写和隐藏&quot;">​</a></h3><p>注意三个概念的适用范围：处在同一个类中的函数才会出现重载。处在父类和子类中的函数才会出现重写和隐藏。</p><ul><li><strong>重载</strong>：同一类中，函数名相同，但参数列表不同。</li><li><strong>重写</strong>：父子类中，函数名相同，参数列表相同，且有virtual修饰。</li><li><strong>隐藏</strong>：父子类中，函数名相同，参数列表相同，但没有virtual修饰；或：函数名相同，参数列表不同，无论有无virtual修饰都是隐藏。</li></ul><p>例如：</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//基类中</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">virtual</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> show</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//1 是虚函数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> show</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//2 不是虚函数</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//子类中</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> show</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//3 是虚函数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> show</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//4 不是虚函数</span></span></code></pre></div><p>1,2构成重载，3,4构成重载，1,3构成重写，2,4构成隐藏。<br> 另外2,3也会构成隐藏，子类对象无法访问基类的void show(int)成员方法，但是由于子类中4的存在导致了子类对象也可以直接调用void show(int)函数，不过此时调用的函数不在是基类中定义的void show(int)函数2，而是子类中的与3重载的4号函数。</p><h3 id="虚函数表是如何创建和继承的" tabindex="-1">虚函数表是如何创建和继承的 <a class="header-anchor" href="#虚函数表是如何创建和继承的" aria-label="Permalink to &quot;虚函数表是如何创建和继承的&quot;">​</a></h3><p>基类的虚函数表的创建：首先在基类声明中找到所有的虚函数，按照其声明顺序，编码0,1,2,3,4……，然后按照此声明顺序为基类创建一个虚函数表，其内容就是指向这些虚函数的函数指针，按照虚函数声明的顺序将这些虚函数的地址填入虚函数表中。例如若show放在虚函数声明的第二位，则在虚函数表中也放在第二位。</p><p>对于子类的虚函数表：首先将基类的虚函数表复制到该子类的虚函数表中。若子类重写了基类的虚函数show，则将子类的虚函数表中存放show的函数地址(未重写前存放的是子类的show虚函数的函数地址)更新为重写后函数的函数指针。若子类增加了一些虚函数的声明，则将这些虚函数的地址加到该类虚函数表的后面。</p><h3 id="虚函数表是如何访问的" tabindex="-1">虚函数表是如何访问的 <a class="header-anchor" href="#虚函数表是如何访问的" aria-label="Permalink to &quot;虚函数表是如何访问的&quot;">​</a></h3><p>当执行pBase-&gt;show()时，要观察show在Base基类中声明的是虚函数还是非虚函数。 若为虚函数将使用动态联编(使用虚函数表决定如何调用函数)，若为非虚函数则使用静态联编(根据调用指针pBase的类型来确定调用哪个类的成员函数)。 此处假设show为虚函数，首先：由于检查到pBase指针类型所指的类Base中show定义为虚函数，因此找到pBase所指的对象(有可能是Base类型也可能是Extend类型。)，访问对象得到该对象所属类的虚函数表地址。其次：查找show在Base类中声明的位置在Base类中所有虚函数声明中的位序。然后到pBase所指对象的所属类(有可能是Extend哦，多态)的虚函数表中访问该位序的函数指针，从而得到要执行的函数。</p><p>例如：</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Base</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">virtual</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> show</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//1</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Extend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">virtual</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> show</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//2</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Extern ext;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Base</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pBase </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ext;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pBase-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">show</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>当执行pBase-&gt;show();时首先到Base中查看show()，发现其为虚函数，然后访问pBase指向的ext对象，在对象中得到Extend类的虚函数表，在Base类声明中找到show()声明的位序0，访问Extend类的虚函数表的位置0，得到show的函数地址。注意若只有基类定义了virtual void show();而子类未重写virtual void show();即上面的函数（2），则Extend虚函数表中的位序0中存放的地址仍然是Base类中定义的virtual void show()函数，而若Extend类中重写了Base类中的virtual void show()方法，则Extend的虚函数表中位序0的函数地址将被更新为Extend中新重写的函数地址。从而调用pBase-&gt;show()时将产生多态的现象。</p><p>总结：当调用pBase-&gt;show();时，执行的步骤：</p><ol><li>判断Base类中show是否为虚函数。</li><li>若不是虚函数则找到pBase所指向的对象所属类Base。执行Base::show()。若是虚函数则执行步骤3.</li><li>访问pBase所指对象的虚函数表指针得到pBase所指对象所在类的虚函数表。</li><li>查找Base中show()在声明时的位序为x，到步骤3得到的虚函数表中找到位序x，从而得到要执行的show的函数地址。</li><li>根据函数地址和Base中声明的show的函数类型(形参和返回值)访问地址所指向的函数。</li></ol><p>以上为虚函数的工作机制。</p><p>注意<strong>只有用virtual修饰的成员方法才会放到虚函数表中去。</strong> 子类对父类函数的隐藏将导致无法通过子类对象访问基类的成员方法。</p><p>因此给出以下建议：</p><ol><li>若要在子类中重新定义父类的方法(有virtual为重写，无virtual为隐藏)，则应确保子类中的函数声明和父类函数声明中的形参完全一样。 但返回值类型是基类引用/指针的成员函数在重新定义时可以返回子类的引用/指针(返回值协变)，这是由于子类的对象可以赋给基类引用/指针。</li><li>若基类中声明了函数的重载版本，则在派生类中重新定义时应该重新定义所有基类的重载版本。这是因为，重新定义一个函数，其他的基类重载版本将被隐藏， 导致子类无法使用这些基类的成员方法。所以需要每个都重新定义。若一些父类的重载版本，子类确实不需要修改， 则由于重新定义了一个重载版本，即使有些重载版本不需要修改也要重新定义，在定义体中直接调用基类的成员方法(使用作用于限定符访问)。</li><li>从虚函数的实现机制可以看到要想在子类中实现多态需要满足三个重要的条件。 (1)在基类中函数声明为虚函数。(2)在子类中，对基类的虚函数进行了重写。(3)基类的指针指向了子类的对象。</li></ol><h3 id="为什么基类的析构要设置成虚析构" tabindex="-1">为什么基类的析构要设置成虚析构 <a class="header-anchor" href="#为什么基类的析构要设置成虚析构" aria-label="Permalink to &quot;为什么基类的析构要设置成虚析构&quot;">​</a></h3><p>基类的析构函数应当设置成虚析构函数，是为了确保在子类对象被销毁时，能够正确的调用子类对象的析构函数和基类对象的析构函数。如果基类的析构函数不是虚析构函数，则在删除子类对象时只会调用子类的析构函数，而不会调用基类的析构函数，这会导致内存泄漏和对象状态不一致的问题。</p><p>当一个类有虚函数时，编译器会在该类中自动生成一个虚函数表(vtable)，该虚函数表记录了虚函数的地址。在派生类中，如果重新定义了基类的虚函数，则该虚函数表中的对应项将被更新为派生类的虚函数地址。因此，当删除派生类对象时，会先调用派生类的析构函数，然后再调用基类的析构函数，确保所有的资源被正确释放。</p><p>在实际使用中，如果一个类被设计成可派生的，其析构函数应当总是设置为虚析构函数，以确保派生类对象的正确销毁。</p>`,53)]))}const y=i(t,[["render",e]]);export{c as __pageData,y as default};
