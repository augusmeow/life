import{_ as e,c as l,a3 as d,o as a}from"./chunks/framework.DDs3IadZ.js";const y=JSON.parse('{"title":"Excel","description":"","frontmatter":{"icon":"vscode-icons:file-type-excel2"},"headers":[],"relativePath":"tools/others/excel.md","filePath":"tools/others/excel.md","lastUpdated":1720495435000}'),n={name:"tools/others/excel.md"};function i(s,t,o,r,c,x){return a(),l("div",null,t[0]||(t[0]=[d('<h1 id="excel" tabindex="-1">Excel <a class="header-anchor" href="#excel" aria-label="Permalink to &quot;Excel&quot;">​</a></h1><h2 id="从身份证中提取年龄" tabindex="-1">从身份证中提取年龄 <a class="header-anchor" href="#从身份证中提取年龄" aria-label="Permalink to &quot;从身份证中提取年龄&quot;">​</a></h2><p><code>=YEAR(NOW())-MID(B2,7,4)</code></p><h2 id="获取当前日期" tabindex="-1">获取当前日期 <a class="header-anchor" href="#获取当前日期" aria-label="Permalink to &quot;获取当前日期&quot;">​</a></h2><p>在 Excel 中，可以使用函数 <code>TODAY()</code> 来获取当前日期。具体使用方法如下：</p><ol><li>在单元格中输入 <code>=TODAY()</code> 并按下回车键。</li><li>Excel 会自动计算并显示当前日期。</li></ol><p>例如：如果当前日期是 2020 年 7 月 31 日，那么 Excel 会显示 7/31/2020。</p><div class="info custom-block"><p class="custom-block-title">注意</p><p>虽然 <code>TODAY()</code> 函数返回的是当前日期，但它并不包含时间信息。如果需要获取当前时间，可以使用 <code>NOW()</code> 函数。</p></div><h2 id="筛选后求和" tabindex="-1">筛选后求和 <a class="header-anchor" href="#筛选后求和" aria-label="Permalink to &quot;筛选后求和&quot;">​</a></h2><p><code>SUBTOTAL(function_num,ref1,[ref2],...)</code></p><p>示例，对 C3:C70 筛选后求和，<code>SUBTOTAL(9,C3:C70)</code></p><p>Function_num<br> 必需。 数字 1-11 或 101-111，用于指定要为分类汇总使用的函数。 如果使用 1-11，将包括手动隐藏的行，如果使用 101-111，则排除手动隐藏的行；始终排除已筛选掉的单元格。</p><table tabindex="0"><thead><tr><th style="text-align:left;">Function_num (包括隐藏的行)</th><th style="text-align:left;">Function_num (忽略隐藏的行)</th><th style="text-align:left;">函数</th></tr></thead><tbody><tr><td style="text-align:left;">1</td><td style="text-align:left;">101</td><td style="text-align:left;">AVERAGE</td></tr><tr><td style="text-align:left;">2</td><td style="text-align:left;">102</td><td style="text-align:left;">COUNT</td></tr><tr><td style="text-align:left;">3</td><td style="text-align:left;">103</td><td style="text-align:left;">COUNTA</td></tr><tr><td style="text-align:left;">4</td><td style="text-align:left;">104</td><td style="text-align:left;">MAX</td></tr><tr><td style="text-align:left;">5</td><td style="text-align:left;">105</td><td style="text-align:left;">MIN</td></tr><tr><td style="text-align:left;">6</td><td style="text-align:left;">106</td><td style="text-align:left;">PRODUCT</td></tr><tr><td style="text-align:left;">7</td><td style="text-align:left;">107</td><td style="text-align:left;">STDEV</td></tr><tr><td style="text-align:left;">8</td><td style="text-align:left;">108</td><td style="text-align:left;">STDEVP</td></tr><tr><td style="text-align:left;">9</td><td style="text-align:left;">109</td><td style="text-align:left;">SUM</td></tr><tr><td style="text-align:left;">10</td><td style="text-align:left;">110</td><td style="text-align:left;">VAR</td></tr><tr><td style="text-align:left;">11</td><td style="text-align:left;">111</td><td style="text-align:left;">VARP</td></tr></tbody></table><p>Ref1<br> 必需。 要对其进行分类汇总计算的第一个命名区域或引用。</p><p>Ref2,...<br> 可选。 要对其进行分类汇总计算的第 2 个至第 254 个命名区域或引用。</p>',15)]))}const g=e(n,[["render",i]]);export{y as __pageData,g as default};