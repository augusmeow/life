import{_ as e,c as i,a3 as t,o as l}from"./chunks/framework.DDs3IadZ.js";const p=JSON.parse('{"title":"算法与数据结构","description":"","frontmatter":{},"headers":[],"relativePath":"code/interview/dsa.md","filePath":"code/interview/dsa.md","lastUpdated":1692117387000}'),o={name:"code/interview/dsa.md"};function r(d,a,n,s,h,c){return l(),i("div",null,a[0]||(a[0]=[t('<h1 id="算法与数据结构" tabindex="-1">算法与数据结构 <a class="header-anchor" href="#算法与数据结构" aria-label="Permalink to &quot;算法与数据结构&quot;">​</a></h1><h2 id="平衡树" tabindex="-1">平衡树 <a class="header-anchor" href="#平衡树" aria-label="Permalink to &quot;平衡树&quot;">​</a></h2><h2 id="单调队列" tabindex="-1">单调队列 <a class="header-anchor" href="#单调队列" aria-label="Permalink to &quot;单调队列&quot;">​</a></h2><h2 id="折半查找" tabindex="-1">折半查找 <a class="header-anchor" href="#折半查找" aria-label="Permalink to &quot;折半查找&quot;">​</a></h2><p>折半查找是一种在有序数组中查找指定元素的算法。其基本原理是将数组一分为二，然后判断要查找的元素位于哪一半，并继续在该半中进行查找，直到找到该元素或确定不存在。</p><p>在折半查找中，有几个细节需要注意：</p><ol><li>数组必须是有序的：在执行折半查找之前，需要确保数组已按照升序或降序排列，否则无法保证查找的正确性。</li><li>中间索引的选择：确定中间索引的方法是将数组下界和上界相加后除以2，例如mid = (low + high) / 2。如果数组的长度为偶数，通常可以向下取整；如果需要向上取整，则可以使用mid = (low + high + 1) / 2。</li><li>判断条件的设置：在每次迭代中，需要根据当前中间元素与目标元素的大小关系来更新搜索范围。如果中间元素小于目标元素，则更新下界为mid+1；如果中间元素大于目标元素，则更新上界为mid-1；如果中间元素等于目标元素，则找到目标元素，返回其索引。</li></ol><p>在某些特定应用中，可以通过修改判断细节来实现不同的折半查找方式：</p><ol><li>查找第一个出现的目标元素：在执行更新搜索范围的操作时，如果中间元素等于目标元素，则将上界更新为mid-1，以继续在前半部分查找第一个出现的目标元素。</li><li>查找最后一个出现的目标元素：同样，在更新搜索范围时，如果中间元素等于目标元素，则将下界更新为mid+1，以继续在后半部分查找最后一个出现的目标元素。</li><li>查找第一个大于目标元素的元素：在更新搜索范围时，如果中间元素小于或等于目标元素，则将下界更新为mid+1，以继续在后半部分查找第一个大于目标元素的元素。</li><li>查找最后一个小于目标元素的元素：同样，在更新搜索范围时，如果中间元素大于或等于目标元素，则将上界更新为mid-1，以继续在前半部分查找最后一个小于目标元素的元素。</li></ol><p>通过修改这些判断细节，可以使折半查找适应不同的特定应用，实现更加灵活和高效的查找功能。</p>',10)]))}const u=e(o,[["render",r]]);export{p as __pageData,u as default};
