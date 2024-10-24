import{E as v}from"./chunks/EChartsModel.CYrG79Ir.js";import{a as D}from"./chunks/utils.BmIFf7VX.js";import{d as B,o as i,c as d,G as w,k as r,j as t,F as h,C as A,n as g,t as s,_ as M,a3 as q}from"./chunks/framework.DDs3IadZ.js";import"./chunks/grid.I-Ngp7og.js";const P="/life/img/trip/cn-jp.png",L="/life/img/trip/cn-kr.png",E="/life/img/trip/bill.png",N="/life/img/trip/no-tickets.png",l=[{date:new Date("2022/02/05"),dateModify:"前",costBelow800km:0,costAbove800km:0,taxAirport:50,details:"2022年2月5日前，无燃油附加费"},{date:new Date("2022/02/05"),dateModify:"起",costBelow800km:10,costAbove800km:20,taxAirport:50,details:"2022年2月5日航空公司再次恢复征收国内航线燃油附加费，800公里（含）以下航线每位旅客收取10元燃油附加费，800公里以上航线每位旅客收取20元燃油附加费。"},{date:new Date("2022/03/05"),dateModify:"起",costBelow800km:20,costAbove800km:40,taxAirport:50,details:"2022年3月5日开始调整征收标准，800公里（含）以下航线每位旅客收取20元燃油附加费，800公里以上航线每位旅客收取40元燃油附加费"},{date:new Date("2022/04/05"),dateModify:"起",costBelow800km:50,costAbove800km:100,taxAirport:50,details:"2022年4月5日，燃油附加费调整至超百元时代：800公里（含）以下航线每位旅客收取50元燃油附加费，800公里以上航线每位旅客收取100元。"},{date:new Date("2022/05/05"),dateModify:"起",costBelow800km:60,costAbove800km:120,taxAirport:50,details:"2022年5月5日调整后的标准为：800公里（含）以下航线每位旅客收取60元燃油附加费，800公里以上航线每位旅客收取120元。"},{date:new Date("2022/06/05"),dateModify:"起",costBelow800km:80,costAbove800km:140,taxAirport:50,details:"2022年6月5日，国内航线旅客运输燃油附加费征收标准再度调整，成人旅客800公里（含）以下航线每位旅客收取80元燃油附加费，800公里以上航线每位旅客收取140元。"},{date:new Date("2022/07/05"),dateModify:"起",costBelow800km:100,costAbove800km:200,taxAirport:50,details:"2022年7月5日（出票日期）起，燃油附加费收取标准上调。国内航线燃油附加费收取标准为： 800公里（含）以下航段，每位旅客收取人民币100元；800公里以上航段，每位旅客收取人民币200元。"},{date:new Date("2022/08/05"),dateModify:"起",costBelow800km:80,costAbove800km:140,taxAirport:50,details:"2022年8月5日起下调国内航线燃油附加费收取标准：航线距离800公里(含)以下航线燃油附加每航段收费标准为人民币80元；航线距离800公里以上航线燃油附加每航段收费标准为人民币140元。"},{date:new Date("2022/09/05"),dateModify:"起",costBelow800km:60,costAbove800km:120,taxAirport:50,details:"2022年9月5日起，国内800公里以下航段每位旅客收取燃油附加费60元，800公里以上航段每位旅客收取燃油附加费120元。"},{date:new Date("2022/11/05"),dateModify:"起",costBelow800km:60,costAbove800km:110,taxAirport:50,details:"2022年11月5日（出票日期）起，800公里以上航段降低10元。调整后的国内航线燃油附加费收取标准为：成人旅客，800公里（含）以下航段，每名旅客收取60元；800公里以上航段，每名旅客收取110元。"},{date:new Date("2023/01/05"),dateModify:"起",costBelow800km:40,costAbove800km:80,taxAirport:50,details:"2023年1月5日(出票日期)起，调整国内航班燃油附加费征收标准，800公里及以下航段成人旅客的燃油附加费降至40元，800公里以上航段降至80元。"},{date:new Date("2023/04/05"),dateModify:"起",costBelow800km:30,costAbove800km:60,taxAirport:50,details:"2023年4月5日（含）起销售的客票，航线距离800公里（含）以下航线燃油附加每航段收费标准为人民币30元；航线距离800公里以上航线燃油附加每航段收费标准为人民币60元。"},{date:new Date("2023/06/05"),dateModify:"起",costBelow800km:20,costAbove800km:30,taxAirport:50,details:"2023年6月5日（出票日期）起，成人旅客800公里以下（含）航线每位旅客收取20元燃油附加费，800公里以上航线每位旅客收取30元燃油附加费。"},{date:new Date("2023/08/05"),dateModify:"起",costBelow800km:30,costAbove800km:60,taxAirport:50,details:"2023年8月5日（出票日期）起，成人旅客：800公里以上航线，每位旅客收取60元燃油附加费；800公里（含）以下航线，每位旅客收取30元燃油附加费。这是2023年以来燃油附加费首次上涨，相较调整前分别上涨10元和30元。"},{date:new Date("2023/09/05"),dateModify:"起",costBelow800km:60,costAbove800km:110,taxAirport:50,details:"2023年9月5日（出票日期）起，上调国内航线旅客运输燃油附加费征收标准。成人旅客：800公里（含）以下航线每位旅客收取60元燃油附加费，800公里以上航线每位旅客收取110元。意味着比目前的燃油附加费征收标准分别涨30元和50元，已经接近年初的60/120元。"},{date:new Date("2023/10/05"),dateModify:"起",costBelow800km:70,costAbove800km:130,taxAirport:50,details:"2023年10月5日（出票日期）起，成人旅客：800公里（含）以下航线每位旅客收取70元燃油附加费，800公里以上航线每位旅客收取130元燃油附加费。"},{date:new Date("2023/11/05"),dateModify:"起",costBelow800km:60,costAbove800km:110,taxAirport:50,details:"2023年11月5日（出票日期）起，成人旅客：800公里(含)以下航线每位旅客收取60元燃油附加费，800公里以上航线每位旅客收取110元燃油附加费。机票燃油附加费相较于调整前分别降低了10元和20元。"},{date:new Date("2023/12/05"),dateModify:"起",costBelow800km:50,costAbove800km:90,taxAirport:50,details:"2023年12月5日（出票日期）起，成人旅客：800公里(含)以下航线每位旅客收取50元燃油附加费，800公里以上航线每位旅客收取90元燃油附加费。机票燃油附加费相较于调整前分别降低了10元和20元。"},{date:new Date("2024/01/05"),dateModify:"起",costBelow800km:40,costAbove800km:70,taxAirport:50,details:"2024年1月5日（出票日期）起，成人旅客：800公里(含)以下航线每位旅客收取40元燃油附加费，800公里以上航线每位旅客收取70元燃油附加费，相较于调整前分别降低了10元和20元，机票燃油附加费连续三个月下降。"},{date:new Date("2024/06/05"),dateModify:"起",costBelow800km:30,costAbove800km:50,taxAirport:50,details:"2024年6月5日（出票日期）起，成人旅客：800公里以上航线每位旅客收取50元燃油附加费，800公里（含）以下航线每位旅客收取30元燃油附加费。相较于调整前分别降低了20元和10元。"},{date:new Date("2024/10/05"),dateModify:"起",costBelow800km:10,costAbove800km:20,taxAirport:50,details:"2024年10月5日（出票日期）起，成人旅客：800公里（含）以下航段向每位成人旅客收取燃油费从30元下降至10元，800公里以上航段向每位成人旅客收取燃油费从50元下降至20元。"}],j={class:"details custom-block"},C={class:"details custom-block"},F={style:{"text-align":"center"}},I={style:{"text-align":"center"}},S={style:{"text-align":"center"}},T={style:{"text-align":"center"}},U={style:{"text-align":"center"}},V=B({__name:"Airfare",setup(x){let c=l.map(e=>D(e.date));const k=l.map(e=>e.dateModify);c.forEach((e,a)=>{c[a]=e+k[a]});let u=c,n=l.map(e=>e.costBelow800km),m=l.map(e=>e.costAbove800km),p=l.map(e=>e.taxAirport),b=l.map(e=>e.details),f=p.map((e,a)=>e+n[a]+"/"+(e+m[a]));const _={title:{text:"机票价格波动"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{},toolbox:{feature:{magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value"},yAxis:{type:"category",data:u,boundaryGap:[0,.01]},series:[{name:"> 800km 燃油",type:"bar",label:{show:!0},data:m,markLine:{data:[{type:"average"}]},markPoint:{data:[{type:"max"}]}},{name:"<= 800km 燃油",type:"bar",label:{show:!0},data:n,markLine:{data:[{type:"average"}]},markPoint:{data:[{type:"max"}]}},{name:"基建",type:"bar",label:{show:!0},data:p,markLine:{data:[{type:"average"}]},markPoint:{data:[{type:"max"}]}}]};return u=[...u].reverse(),n=[...n].reverse(),m=[...m].reverse(),p=[...p].reverse(),b=[...b].reverse(),f=[...f].reverse(),(e,a)=>(i(),d(h,null,[w(v,{option:r(_)},null,8,["option"]),t("details",j,[a[0]||(a[0]=t("summary",null,"详细文字",-1)),(i(!0),d(h,null,A(r(b),(y,o)=>(i(),d("p",{class:g(o==0?"cur-color":"")},s(y),3))),256))]),t("details",C,[a[2]||(a[2]=t("summary",null,"表格显示",-1)),t("table",null,[a[1]||(a[1]=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"日期"),t("th",{style:{"text-align":"center"}},"<= 800km 燃油 ￥"),t("th",{style:{"text-align":"center"}},"> 800km 燃油 ￥"),t("th",{style:{"text-align":"center"}},"基建 ￥"),t("th",{style:{"text-align":"center"}},"总税费 ¥")])],-1)),t("tbody",null,[(i(!0),d(h,null,A(r(u),(y,o)=>(i(),d("tr",{class:g(o==0?"cur-bg-color":"")},[t("td",F,s(y),1),t("td",I,s(r(n)[o]),1),t("td",S,s(r(m)[o]),1),t("td",T,s(r(p)[o]),1),t("td",U,s(r(f)[o]),1)],2))),256))])])])],64))}}),G=M(V,[["__scopeId","data-v-f973e41b"]]),$=JSON.parse('{"title":"飞机","description":"","frontmatter":{},"headers":[],"relativePath":"trip/airplane.md","filePath":"trip/airplane.md","lastUpdated":1722937919000}'),O={name:"trip/airplane.md"},K=Object.assign(O,{setup(x){return(c,k)=>(i(),d("div",null,[k[0]||(k[0]=q('<h1 id="飞机" tabindex="-1">飞机 <a class="header-anchor" href="#飞机" aria-label="Permalink to &quot;飞机&quot;">​</a></h1><h2 id="航线" tabindex="-1">航线 <a class="header-anchor" href="#航线" aria-label="Permalink to &quot;航线&quot;">​</a></h2><p>全球航线图<a href="https://map.variflight.com/" target="_blank" rel="noreferrer">参考</a></p><h2 id="航司" tabindex="-1">航司 <a class="header-anchor" href="#航司" aria-label="Permalink to &quot;航司&quot;">​</a></h2><h3 id="南方航空" tabindex="-1">南方航空 <a class="header-anchor" href="#南方航空" aria-label="Permalink to &quot;南方航空&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">里程兑换</p><p>里程:人民币 = 24:1</p></div><h4 id="活动" tabindex="-1">活动 <a class="header-anchor" href="#活动" aria-label="Permalink to &quot;活动&quot;">​</a></h4><ul><li><a href="./suixinfei">随心飞</a></li><li>南航国际游·日韩游次卡</li></ul><details class="details custom-block"><summary>南航国际游·日韩游次卡</summary><p><a href="https://mp.weixin.qq.com/s/aNB62aLUF0DDrjH7fopBYg" target="_blank" rel="noreferrer">微信公众号链接</a><br> 因为离上海最近，就考虑上海的飞行<br> 而上海飞只有去东京的，见下图 <img src="'+P+'" alt="1"><img src="'+L+'" alt="1"></p><p>虽然规则限制挺多，但价格倒也还行，¥2020+¥900（税费）比单买 3000-5000 要便宜一点？可以接受的。</p><p>限制如下</p><ul><li><p>*产品价格不含税费，预约时需按出票当天税费补差成功方可出票。</p></li><li><p>*该产品为机会型产品，存在舱位售罄等情况，可兑换航班及可兑换座位数以实际查询为准，数量有限，兑完即止。</p></li><li><p><strong>购买日期</strong> 即日起—6月30日15:00</p></li><li><p><strong>可预约日期</strong> 即日起—10月18日17:00 限工作日10:00-17:00，周末及节假日不可预约 *需提前7天进行预约出票，且需全程定妥座位。</p></li><li><p><strong>航班日期</strong> 即日起—10月28日 *所有行程在10月28日（含）前完成</p></li><li><p><strong>除外日期</strong></p><ul><li>去程 9月26日-10月2日</li><li>回程 10月4日-10月8日</li></ul></li></ul><p>但是觉得这些都无可厚非的时候，购买下单，注意看清时间（工作日10:00-17:00）预约，否则没票…… <img src="'+E+'" alt="1"><img src="'+N+'" alt="1"></p></details><h2 id="机票价格" tabindex="-1">机票价格 <a class="header-anchor" href="#机票价格" aria-label="Permalink to &quot;机票价格&quot;">​</a></h2><p>收集因疫情导致的机票价格波动</p>',11)),w(G)]))}});export{$ as __pageData,K as default};
