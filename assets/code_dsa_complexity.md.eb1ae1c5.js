import{_ as t,c as d,o as n,Q as o}from"./chunks/framework.1cc28bed.js";const g=JSON.parse('{"title":"复杂度","description":"","frontmatter":{},"headers":[],"relativePath":"code/dsa/complexity.md","filePath":"code/dsa/complexity.md","lastUpdated":1682242135000}'),r={name:"code/dsa/complexity.md"},e=o('<h1 id="复杂度" tabindex="-1">复杂度 <a class="header-anchor" href="#复杂度" aria-label="Permalink to &quot;复杂度&quot;">​</a></h1><table><thead><tr><th></th><th>查找</th><th>插入</th><th>删除</th></tr></thead><tbody><tr><td>数组</td><td>o(n)</td><td>o(1)</td><td>o(n)</td></tr><tr><td>有序数组</td><td>o(logn)</td><td>o(n)</td><td>o(n)</td></tr><tr><td>链表</td><td>o(n)</td><td>o(1)</td><td>o(n)</td></tr><tr><td>有序链表</td><td>o(n)</td><td>o(n)</td><td>o(n)</td></tr><tr><td>二叉树最坏</td><td>o(n)</td><td>o(n)</td><td>o(n)</td></tr><tr><td>二叉树一般</td><td>o(logn)</td><td>o(logn)</td><td>o(logn)</td></tr><tr><td>平衡树</td><td>o(logn)</td><td>o(logn)</td><td>o(logn)</td></tr><tr><td>哈希表</td><td>o(1)</td><td>o(1)</td><td>o(1)</td></tr></tbody></table><table style="text-align:center;"><tr><td rowspan="2">类别</td><td rowspan="2">排序方法</td><td colspan="3">时间复杂度</td><td>空间复杂度</td><td rowspan="2">稳定性</td></tr><tr><td>平均情况</td><td>最好情况</td><td>最坏情况</td><td>辅助存储</td></tr><tr><td rowspan="2">插入排序</td><td>直接插入</td><td>O(n^2)</td><td>O(n)</td><td>O(n^2)</td><td>O(1)</td><td>稳定</td></tr><tr><td>Shell排序</td><td>O(n^1.3)</td><td>O(n)</td><td>O(n^2)</td><td>O(1)</td><td>不稳定</td></tr><tr><td rowspan="2">选择排序</td><td>直接选择</td><td>O(n^2)</td><td>O(n^2)</td><td>O(n^2)</td><td>O(1)</td><td>不稳定</td></tr><tr><td>堆排序</td><td>O(nlog2n)</td><td>O(nlog2n)</td><td>O(nlog2n)</td><td>O(1)</td><td>不稳定</td></tr><tr><td rowspan="2">交换排序</td><td>冒泡排序</td><td>O(n^2)</td><td>O(n)</td><td>O(n^2)</td><td>O(1)</td><td>稳定</td></tr><tr><td>快速排序</td><td>O(nlog2n)</td><td>O(nlog2n)</td><td>O(n^2)</td><td>O(nlog2n)</td><td>不稳定</td></tr><tr><td colspan="2">归并排序</td><td>O(nlog2n)</td><td>O(nlog2n)</td><td>O(nlog2n)</td><td>O(n)</td><td>稳定</td></tr><tr><td colspan="2">基数排序</td><td>O(d(r+n))</td><td>O(d(n+rd))</td><td>O(d(r+n))</td><td>O(rd+n)</td><td>稳定</td></tr></table><p>::alert 基数排序的复杂度中，r代表关键字的基数，d代表长度，n代表关键字的个数 ::</p>',4),a=[e];function l(s,O,c,p,_,h){return n(),d("div",null,a)}const m=t(r,[["render",l]]);export{g as __pageData,m as default};