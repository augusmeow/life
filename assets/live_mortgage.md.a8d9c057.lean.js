import{_ as k,o as _,c as h,k as t,a2 as b,a3 as x,a8 as f,F,D as P,t as o,a0 as I,e as S,p as V,m as w,H as A,Q as q}from"./chunks/framework.1cc28bed.js";const M={data(){return{downPaymentRatio:30,loanAmount:200,loanRate:4.3,loanPeriod:30,repaymentType:"等额本息",repaymentResults:[],totalInterest:0,repaymentTotal:0,interestRatio:0,principalRatio:0}},methods:{calculate(){const s=this.downPaymentRatio/100,l=this.loanAmount*(1-s)*1e4,p=this.loanRate/100,u=this.loanPeriod*12,n=this.repaymentType,d=[];let e=l,i=0,g=s&&l&&p;if(console.log("wtf:",g,s,l,p,u,n),!g)return;if(n==="等额本息"){const c=p/12,v=l*c*Math.pow(1+c,u)/(Math.pow(1+c,u)-1);for(let m=1;m<=u;m++){const r=(e*c).toFixed(2),y=(v-r).toFixed(2),T=(parseFloat(r)+parseFloat(y)).toFixed(2);i+=parseFloat(r),e-=parseFloat(y),d.push({repayment:T,principal:y,interest:r,balance:e.toFixed(2)})}}else if(n==="等额本金"){const c=(l/u).toFixed(2);for(let v=1;v<=u;v++){const m=(e*p/12).toFixed(2),r=c,y=(parseFloat(m)+parseFloat(r)).toFixed(2);i+=parseFloat(m),e-=parseFloat(r),d.push({repayment:y,principal:r,interest:m,balance:e.toFixed(2)})}}this.totalInterest=i.toFixed(2);const R=i+l;this.repaymentTotal=R.toFixed(2),this.interestRatio=(i/R*100).toFixed(2),this.principalRatio=(l/R*100).toFixed(2),this.repaymentResults=d,console.log("hi:",this.totalInterest,this.repaymentTotal,this.interestRatio,this.principalRatio)}}},a=s=>(V("data-v-71109a08"),s=s(),w(),s),N=a(()=>t("label",null,"首付比例(%)",-1)),U=a(()=>t("label",null,"贷款总额(万)",-1)),D=a(()=>t("label",null,"贷款年利率",-1)),C=a(()=>t("label",null,"贷款年限",-1)),B=["value"],E=a(()=>t("label",null,"还款方式",-1)),O=a(()=>t("option",{value:"等额本息"},"等额本息",-1)),j=a(()=>t("option",{value:"等额本金"},"等额本金",-1)),H=[O,j],J={key:0},L=a(()=>t("h3",null,"还款总额构成",-1)),Q=a(()=>t("th",null,null,-1)),z=a(()=>t("th",null,null,-1)),G=a(()=>t("tr",null,[t("td",null,"总额"),t("td",null,"="),t("td",null,"贷款"),t("td",null,"+"),t("td",null,"利息"),t("td",null,"年限")],-1)),K=a(()=>t("tr",null,[t("th",null,"期数"),t("th",null,"还款金额"),t("th",null,"还款本金"),t("th",null,"还款利息"),t("th",null,"剩余本金")],-1));function W(s,l,p,u,n,d){return _(),h(F,null,[t("form",{onSubmit:l[6]||(l[6]=I(()=>{},["prevent"]))},[t("div",null,[N,b(t("input",{type:"number",min:"30",max:"100","onUpdate:modelValue":l[0]||(l[0]=e=>n.downPaymentRatio=e)},null,512),[[x,n.downPaymentRatio,void 0,{number:!0}]])]),t("div",null,[U,b(t("input",{type:"number","onUpdate:modelValue":l[1]||(l[1]=e=>n.loanAmount=e)},null,512),[[x,n.loanAmount,void 0,{number:!0}]])]),t("div",null,[D,b(t("input",{type:"number",step:"0.01","onUpdate:modelValue":l[2]||(l[2]=e=>n.loanRate=e)},null,512),[[x,n.loanRate,void 0,{number:!0}]])]),t("div",null,[C,b(t("select",{"onUpdate:modelValue":l[3]||(l[3]=e=>n.loanPeriod=e)},[(_(),h(F,null,P(30,e=>t("option",{value:e},o(e)+"年",9,B)),64))],512),[[f,n.loanPeriod]])]),t("div",null,[E,b(t("select",{"onUpdate:modelValue":l[4]||(l[4]=e=>n.repaymentType=e)},H,512),[[f,n.repaymentType]])]),t("div",null,[t("button",{onClick:l[5]||(l[5]=(...e)=>d.calculate&&d.calculate(...e))},"计算")])],32),n.repaymentResults.length?(_(),h("div",J,[L,t("table",null,[t("tbody",null,[t("tr",null,[t("th",null,o((n.repaymentTotal/1e4).toFixed(2))+"万",1),Q,t("th",null,o(n.loanAmount*(100-n.downPaymentRatio)/100)+"万",1),z,t("th",null,o((n.totalInterest/1e4).toFixed(2))+"万",1),t("th",null,o(n.loanPeriod),1)]),G])]),t("p",null,"贷款占比 "+o(n.principalRatio)+"% 利息占比 "+o(n.interestRatio)+"%",1),t("table",null,[t("tbody",null,[K,(_(!0),h(F,null,P(n.repaymentResults,(e,i)=>(_(),h("tr",{key:i},[t("td",null,o(i+1),1),t("td",null,o(e.repayment),1),t("td",null,o(e.principal),1),t("td",null,o(e.interest),1),t("td",null,o(e.balance),1)]))),128))])])])):S("",!0)],64)}const X=k(M,[["render",W],["__scopeId","data-v-71109a08"]]),Y=q("",6),tt=JSON.parse('{"title":"房贷","description":"","frontmatter":{},"headers":[],"relativePath":"live/mortgage.md","filePath":"live/mortgage.md","lastUpdated":1681804151000}'),Z={name:"live/mortgage.md"},et=Object.assign(Z,{setup(s){return(l,p)=>(_(),h("div",null,[Y,A(X)]))}});export{tt as __pageData,et as default};
