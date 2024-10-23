import{_ as e,c as i,a3 as l,o as t}from"./chunks/framework.DDs3IadZ.js";const m=JSON.parse('{"title":"编译","description":"","frontmatter":{},"headers":[],"relativePath":"code/interview/compile.md","filePath":"code/interview/compile.md","lastUpdated":1692117387000}'),o={name:"code/interview/compile.md"};function r(c,a,n,s,d,h){return t(),i("div",null,a[0]||(a[0]=[l('<h1 id="编译" tabindex="-1">编译 <a class="header-anchor" href="#编译" aria-label="Permalink to &quot;编译&quot;">​</a></h1><h2 id="c-c-编译时和运行时的内存区域分配" tabindex="-1">C/C++ 编译时和运行时的内存区域分配 <a class="header-anchor" href="#c-c-编译时和运行时的内存区域分配" aria-label="Permalink to &quot;C/C++ 编译时和运行时的内存区域分配&quot;">​</a></h2><p>先来说下 C 程序编译内存分配：</p><ol><li>栈区(stack)：存放局部变量和参数，申请和释放都由编译器自动完成。</li><li>堆区(heap)：动态内存分配，申请和释放都是由程序员控制。</li><li>静态区/全局区(static)：存放全局变量和静态变量。下面存放了未初始化的静态/全局变量。</li><li>文字常量区：存放字符串常量的。比如，char *p = “my name is”。“my....is!”字符串常量就存放那个区域。</li><li>代码区(code)：用来存放代码的。</li></ol><p>第二种是程序在运行时内存分配，程序在进程中的内存分配区域。 从高地址到地址：</p><ol><li>环境变量(Unix/Linux中全局环境变量)</li><li>stack区，存放内容和上文同。</li><li>heap区，存放内容和上文同。值得说明的是：stack区起始地址是在高地址，即是从高地址向低地址延伸。而heap区起始地址是在低地址，即是从低地址向高地址延伸。总结：stack起始地址固定在高地址，heap起始地址固定在低地址，然后两个区都向中间延伸。直到stack区和heap区的结束地址重合则表示没有stack和heap内存空间了。</li><li>data区，分为bss未初始化的数据区和初始化的数据区。</li><li>文本(text)区，存放代码的区域。</li></ol><h3 id="编译时与运行时的内存情况" tabindex="-1">编译时与运行时的内存情况 <a class="header-anchor" href="#编译时与运行时的内存情况" aria-label="Permalink to &quot;编译时与运行时的内存情况&quot;">​</a></h3><ol><li>编译时不分配内存<br> 编译时是不分配内存的。此时只是根据声明时的类型进行占位，到以后程序执行时分配内存才会正确。所以声明是给编译器看的，聪明的编译器能根据声明帮你识别错误。</li><li>运行时必分配内存<br> 运行时程序是必须调到“内存”的。因为CPU（其中有多个寄存器）只与内存打交道的。程序在进入实际内存之前要首先分配物理内存。</li><li>编译过程<br> 只能简单说一下，因为如果要详细的话，就是一本书了《编译原理》。编译器能够识别语法，数据类型等等。然后逐行逐句检查编译成二进制数据的obj文件，然后再由链接程序将其链接成一个EXE文件。此时的程序是以EXE文件的形式存放在磁盘上。</li><li>运行过程<br> 当执行这个EXE文件以后，此程序就被加载到内存中，成为进程。此时一开始程序会初始化一些全局对象，然后找到入口函数（main()或者WinMain()），就开始按程序的执行语句开始执行。此时需要的内存只能在程序的堆上进行动态增加/释放了。</li></ol><h2 id="c-编译流程" tabindex="-1">C++ 编译流程 <a class="header-anchor" href="#c-编译流程" aria-label="Permalink to &quot;C++ 编译流程&quot;">​</a></h2>',9)]))}const b=e(o,[["render",r]]);export{m as __pageData,b as default};
