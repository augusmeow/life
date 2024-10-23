import{d as A,o as l,c as u,j as p,t as P,e as m,_ as E,B as L,a as b,F as g,C as h,G as O,b as C}from"./chunks/framework.DDs3IadZ.js";function x(){return x=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(a[n]=t[n])}return a},x.apply(this,arguments)}var D={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(a){},onComplete:function(a){},preStringTyped:function(a,e){},onStringTyped:function(a,e){},onLastStringBackspaced:function(a){},onTypingPaused:function(a,e){},onTypingResumed:function(a,e){},onReset:function(a){},onStop:function(a,e){},onStart:function(a,e){},onDestroy:function(a){}},N=new(function(){function a(){}var e=a.prototype;return e.load=function(t,n,s){if(t.el=typeof s=="string"?document.querySelector(s):s,t.options=x({},D,n),t.isInput=t.el.tagName.toLowerCase()==="input",t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(f){return f.trim()}),t.stringsElement=typeof t.options.stringsElement=="string"?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var o=Array.prototype.slice.apply(t.stringsElement.children),r=o.length;if(r)for(var i=0;i<r;i+=1)t.strings.push(o[i].innerHTML.trim())}for(var c in t.strPos=0,t.currentElContent=this.getCurrentElContent(t),t.currentElContent&&t.currentElContent.length>0&&(t.strPos=t.currentElContent.length-1,t.strings.unshift(t.currentElContent)),t.sequence=[],t.strings)t.sequence[c]=c;t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.autoInsertCss=t.options.autoInsertCss,t.autoInsertCss&&(this.appendCursorAnimationCss(t),this.appendFadeOutAnimationCss(t))},e.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:t.contentType==="html"?t.el.innerHTML:t.el.textContent},e.appendCursorAnimationCss=function(t){var n="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+n+"]")){var s=document.createElement("style");s.setAttribute(n,"true"),s.innerHTML=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `,document.body.appendChild(s)}},e.appendFadeOutAnimationCss=function(t){var n="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+n+"]")){var s=document.createElement("style");s.setAttribute(n,"true"),s.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(s)}},a}()),B=new(function(){function a(){}var e=a.prototype;return e.typeHtmlChars=function(t,n,s){if(s.contentType!=="html")return n;var o=t.substring(n).charAt(0);if(o==="<"||o==="&"){var r;for(r=o==="<"?">":";";t.substring(n+1).charAt(0)!==r&&!(1+ ++n>t.length););n++}return n},e.backSpaceHtmlChars=function(t,n,s){if(s.contentType!=="html")return n;var o=t.substring(n).charAt(0);if(o===">"||o===";"){var r;for(r=o===">"?"<":"&";t.substring(n-1).charAt(0)!==r&&!(--n<0););n--}return n},a}()),S=function(){function a(t,n){N.load(this,n,t),this.begin()}var e=a.prototype;return e.toggle=function(){this.pause.status?this.start():this.stop()},e.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},e.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},e.destroy=function(){this.reset(!1),this.options.onDestroy(this)},e.reset=function(t){t===void 0&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},e.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.strPos===0?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)},e.typewrite=function(t,n){var s=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var o=this.humanizer(this.typeSpeed),r=1;this.pause.status!==!0?this.timeout=setTimeout(function(){n=B.typeHtmlChars(t,n,s);var i=0,c=t.substring(n);if(c.charAt(0)==="^"&&/^\^\d+/.test(c)){var f=1;f+=(c=/\d+/.exec(c)[0]).length,i=parseInt(c),s.temporaryPause=!0,s.options.onTypingPaused(s.arrayPos,s),t=t.substring(0,n)+t.substring(n+f),s.toggleBlinking(!0)}if(c.charAt(0)==="`"){for(;t.substring(n+r).charAt(0)!=="`"&&(r++,!(n+r>t.length)););var d=t.substring(0,n),y=t.substring(d.length+1,n+r),I=t.substring(n+r+1);t=d+y+I,r--}s.timeout=setTimeout(function(){s.toggleBlinking(!1),n>=t.length?s.doneTyping(t,n):s.keepTyping(t,n,r),s.temporaryPause&&(s.temporaryPause=!1,s.options.onTypingResumed(s.arrayPos,s))},i)},o):this.setPauseStatus(t,n,!0)},e.keepTyping=function(t,n,s){n===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var o=t.substring(0,n+=s);this.replaceText(o),this.typewrite(t,n)},e.doneTyping=function(t,n){var s=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){s.backspace(t,n)},this.backDelay))},e.backspace=function(t,n){var s=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var o=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){n=B.backSpaceHtmlChars(t,n,s);var r=t.substring(0,n);if(s.replaceText(r),s.smartBackspace){var i=s.strings[s.arrayPos+1];s.stopNum=i&&r===i.substring(0,n)?n:0}n>s.stopNum?(n--,s.backspace(t,n)):n<=s.stopNum&&(s.arrayPos++,s.arrayPos===s.strings.length?(s.arrayPos=0,s.options.onLastStringBackspaced(),s.shuffleStringsIfNeeded(),s.begin()):s.typewrite(s.strings[s.sequence[s.arrayPos]],n))},o)}else this.setPauseStatus(t,n,!1)},e.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},e.setPauseStatus=function(t,n,s){this.pause.typewrite=s,this.pause.curString=t,this.pause.curStrPos=n},e.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},e.humanizer=function(t){return Math.round(Math.random()*t/2)+t},e.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},e.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)},e.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:this.contentType==="html"?this.el.innerHTML=t:this.el.textContent=t},e.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(n){t.stop()}),this.el.addEventListener("blur",function(n){t.el.value&&t.el.value.length!==0||t.start()}))},e.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},a}();const j={麦田工坊:{tag:"面包",tip:"",place:"宁波",map:"",good:"",normal:"",bad:""}},F={茶乙己:{map:"",good:"豆乳芝士奶豆腐",bad:""}},M={"小牛家村·贵州黄牛肉火锅":{tag:"火锅,牛肉火锅",tip:"",place:"杭州",map:"三墩店",good:"",normal:"",bad:""},东北一锅香:{tag:"东北菜",tip:"",place:"杭州",map:"丰潭路城西店",good:"",normal:"",bad:""},九品府餐厅:{tag:"",tip:"",place:"杭州",map:"",good:"",normal:"",bad:""},贵州树林牛肉馆:{tag:"火锅,牛肉火锅",tip:"",place:"杭州",map:"三墩店",good:"",normal:"",bad:""},哥老官重庆美蛙鱼头特色火锅:{tag:"火锅,蛙,鱼",tip:"",place:"",map:"",good:"",normal:"",bad:""},海底捞:{tag:"火锅",tip:"",place:"",map:"",good:"",normal:"",bad:""},炉鱼:{tag:"烤鱼",tip:"",place:"杭州",map:"",good:"湄公鱼",normal:"",bad:"西溪银泰店不要去(差评基本全被遇上了：服务员态度恶劣、鱼有腥臭味、吃完窜稀}"},肉本家:{tag:"烤肉,韩国料理",tip:"",place:"杭州",map:"",good:"安格斯牛肋条,肉本家冠军组合(如果有五花肉就不要点 几乎全是油),肉本家M8特工韩牛(厚切),校村原味炸鸡,仁川海鲜葱饼,春川炸酱面",normal:"",bad:"济州岛黑猪五花肉(超厚),白玉泡菜汤,超满足牛肉拌饭,烧酒全不推荐"},吴兴状元楼:{tag:"炒菜",tip:"",place:"湖州",map:"",good:"酒酿圆子,蟹粉豆腐,虾仁烩蹄筋,糯米仔排,状元神仙鸡"},胡集酒肆:{tag:"炒菜",tip:"",place:"杭州",map:"",good:"蕃王金锅炖牛腩,风味焗蛋黄菌菇,黄金脆皮豆腐,芥末秋葵,牛肉串,掌中宝"},遇龙闽粤菜:{tag:"炒菜",tip:"",place:"厦门",map:"",good:"葱油彩椒蚌片,小布丁,古法红烧肉配鹌鹑蛋,厦门海蛎煎,千层酥丝虾,厦门面线糊"},绿茶:{tag:"炒菜,杭帮菜",tip:"两个人三菜一汤就够了",place:"杭州",map:"",good:"石锅鸡汤豆腐,面包诱惑,堂烹芝士虾,西湖牛肉羹,葱椒爆牛肉",normal:"",bad:""},宴遇:{tag:"炒菜",tip:"",place:"厦门",map:"",good:"摇滚田鸡,白灼广东油菜心,火焰黑椒安格斯小牛肉,芹香百合爆虾球,三文鱼牛油果层层塔",bad:"金汤酸菜泡椒鱼"},巧巧婆脆皮烤猪肘:{tag:"肉,外卖",place:"杭州",tip:"(万达店)甘梅味很一般，吃完很腻",map:"",good:"",normal:"脆皮猪肘半斤+生菜小份+主食,34.3",bad:""},肥叔锅贴:{tag:"锅贴,外卖",place:"杭州",tip:"(严家桥店)吃完肚子不舒服？",map:"",good:"沙汤+锅贴1两+蛋黄饭团,20.8",normal:"",bad:""},砂锅土豆粉:{tag:"土豆粉,砂锅,外卖",place:"杭州",tip:"不顶饿，不太饿的时候可以吃",map:"",good:"麻辣豪华土豆粉(微辣)|手工油酥饼,20.1,麻辣肥牛开花肠土豆粉(微辣),15",normal:"",bad:""},刘皇叔南昌拌粉:{tag:"拌粉,汤粉,米粉,外卖",place:"杭州",tip:"中辣非常爽",map:"",good:"【大胃王】经典拌粉(多30%量)|红烧牛腩拌粉(微辣),39.6,百事可乐|张飞卤牛肉(汤粉)(中辣)|刘皇叔拌粉(中辣),35.6",normal:"农夫山泉|卤蛋一个|热卤香肠一根|红烧牛腩拌粉(微辣),22.76",bad:""},遵义羊肉粉:{tag:"汤粉,米粉,外卖",place:"杭州",tip:"麻辣有点遭不住，并且感觉很多糊椒",map:"",good:"羊肉粉(中辣),20.9",normal:"",bad:""},"槑鸭梨.北京烤鸭(万达店)":{tag:"烤鸭,外卖",place:"杭州",tip:"绝了，非常好吃",map:"",good:"招牌北京烤鸭半只双人套餐,39.8",normal:"",bad:""},汉库麻辣香锅:{tag:"外卖,麻辣香锅",place:"杭州",tip:"",map:"",good:"",normal:"",bad:""},华莱士:{tag:"外卖,西餐,快餐,汉堡",place:"杭州",tip:"",map:"",good:"",normal:"",bad:""},"胖次打面团.烤包.拌粉":{tag:"外卖,拌粉,烤包",place:"杭州",tip:"",map:"",good:"",normal:"",bad:""},小孔哥湖南津市牛肉粉:{tag:"外卖,粉",place:"杭州",tip:"",map:"",good:"",normal:"",bad:""},"黔缘花溪·苗家牛肉粉":{tag:"外卖,粉",place:"杭州",tip:"",map:"",good:"",normal:"",bad:""},"漠漠家.胡辣汤.焖面.肉夹馍":{tag:"外卖,胡辣汤,焖面,肉夹馍",place:"杭州",tip:"",map:"",good:"",normal:"",bad:""},芝根披萨PIZZA:{tag:"外卖,快餐,西餐,披萨",place:"杭州",tip:"",map:"",good:"",normal:"",bad:""},"杜小姐在西北·凉皮·肉夹馍·酸辣粉":{tag:"外卖,凉皮,肉夹馍,酸辣粉",place:"杭州",tip:"",map:"",good:"",normal:"",bad:""},徐记手撕鸭坊:{tag:"外卖,烤鸭",place:"杭州",tip:"",map:"",good:"",normal:"",bad:""},"川哥哥.香辣爆炒":{tag:"外卖,炒菜",place:"杭州",tip:"",map:"",good:"",normal:"",bad:""},椒花麻辣香锅:{tag:"外卖,麻辣香锅",place:"杭州",tip:"",map:"",good:"",normal:"",bad:""},牛约堡:{tag:"外卖,西餐,快餐,汉堡",place:"杭州",tip:"",map:"",good:"",normal:"",bad:""},达美乐比萨:{tag:"外卖,快餐,西餐,披萨",place:"杭州",tip:"",map:"",good:"",normal:"",bad:""},蜜哆哆韩式炸鸡:{tag:"外卖,炸鸡,韩国料理",place:"杭州",tip:"",map:"",good:"",normal:"",bad:""},"里里羊客·清真西北菜":{tag:"西北菜",place:"杭州",tip:"人均98",map:"",good:"",normal:"",bad:""},海燕小吃爱尚锅海鲜家常菜:{tag:"海鲜",place:"青岛",tip:"",map:"",good:"",normal:"",bad:""},夏星酒馆:{tag:"韩国料理",place:"杭州",tip:"",map:"剑桥公社店",good:"",normal:"",bad:""},金猪:{tag:"",place:"杭州",tip:"",map:"",good:"",normal:"",bad:""},thankumom谢谢妈妈炸鸡:{tag:"炸鸡,韩国料理",place:"杭州",tip:"",map:"",good:"",normal:"",bad:""},子固路老南昌拌粉:{tag:"外卖,拌粉",place:"杭州",tip:"",map:"",good:"牛肉拌粉14.8",normal:"",bad:""},妈妈菜东北老盒饭:{tag:"外卖,盒饭,菜",place:"杭州",tip:"",map:"",good:"两荤两素随心配(回锅肉/溜肉段/地三鲜/干锅花菜)19.8",normal:"",bad:""},"热干面先生·凉皮·肉夹馍(万达店)":{tag:"外卖,热干面,凉皮,肉夹馍",place:"杭州",tip:"",map:"",good:"先生热干面+腊汁肉夹馍14.9",normal:"",bad:""},"嵊州豆腐年糕(和睦新村店)":{tag:"外卖,年糕,小笼包",place:"杭州",tip:"",map:"",good:"招牌豆腐年糕11,薄皮豆腐小笼包6",normal:"",bad:""},好口味新疆大盘鸡:{tag:"外卖,大盘鸡",place:"杭州",tip:"",map:"",good:"",normal:"",bad:""}},q={snacks:j,drinks:F,main_meal:M},H={key:0,class:"bt-info"},R={class:"opt-bt"},V=["href"],z={class:"bt-head"},$={class:"bt-info"},U=A({__name:"OptButton",props:{text:{},link:{},head:{}},setup(a){return(e,t)=>e.text?(l(),u("div",H,[p("div",R,[e.link?(l(),u("a",{key:0,class:"opt-bt-link",href:e.link},[p("span",z,P(e.head),1),p("span",$,P(e.text),1)],8,V)):m("",!0)])])):m("",!0)}}),Z=E(U,[["__scopeId","data-v-3de5d4ff"]]),_=a=>[...new Set(a.filter(Boolean))],k=q.main_meal;let v=[];Object.values(k).forEach(a=>{let e=a.tag.split(",");v=[...v,...e]});v=_(v);let T=[];Object.values(k).forEach(a=>{let e=a.place.split(",");T=[...T,...e]});T=_(T);const w=(a,e)=>Object.fromEntries(Object.entries(a).filter(([t,n])=>e(n,t))),G={name:"Food-Eat",components:{Typed:S,OptButton:Z},data(){return{mainMeal:k,allTag:v,places:T}},methods:{get(){let a=[],e=[];const t=k;let n=[];return Object.values(t).forEach(s=>{let o=s.tag.split(",");n=[...n,...o]}),n=n.filter(Boolean),n=[...new Set(n)],a=n,e=Object.keys(t),{all:a,details:e}},filterTag(a){this.mainMeal=w(k,e=>e.tag.indexOf(a)!==-1)},filterPlace(a){this.mainMeal=w(k,e=>e.place.indexOf(a)!==-1)},displayInfo(a){return a.split(",")},modify(a){return a||""}},async mounted(){new S(this.$refs.choiceFromAll,{strings:this.get().all,startDelay:300,typeSpeed:200,loop:!0,backSpeed:50}),new S(this.$refs.choiceFromDetails,{strings:this.get().details,startDelay:300,typeSpeed:100,loop:!0,backSpeed:50})}},J=["onClick"],Y=["onClick"],K={ref:"choiceFromAll"},Q={ref:"choiceFromDetails"},W={key:0},X={key:0},tt={key:1},et={key:2};function nt(a,e,t,n,s,o){const r=L("Badge");return l(),u(g,null,[p("p",null,[e[0]||(e[0]=b("在哪里吃呢")),e[1]||(e[1]=p("br",null,null,-1)),(l(!0),u(g,null,h(s.places,(i,c)=>(l(),u("a",{onClick:f=>o.filterPlace(i)},[O(r,{text:i,type:"tip"},null,8,["text"])],8,J))),256))]),p("p",null,[e[2]||(e[2]=b(" 选什么呢")),e[3]||(e[3]=p("br",null,null,-1)),(l(!0),u(g,null,h(s.allTag,(i,c)=>(l(),u("a",{onClick:f=>o.filterTag(i)},[O(r,{text:i,type:"info"},null,8,["text"])],8,Y))),256))]),e[11]||(e[11]=p("h2",null,"推荐餐厅",-1)),p("ul",null,[p("li",null,[e[4]||(e[4]=b("吃什么选一个吧: ")),p("span",K,null,512)]),p("li",null,[e[5]||(e[5]=b("具体吃什么: ")),p("span",Q,null,512)])]),(l(!0),u(g,null,h(s.mainMeal,(i,c,f)=>(l(),u("div",null,[p("h3",null,[b(P(c)+" ",1),i.place?(l(!0),u(g,{key:0},h(o.displayInfo(i.place),(d,y)=>(l(),C(r,{text:d+o.modify(o.displayInfo(i.map)[y]),type:"tip"},null,8,["text"]))),256)):m("",!0),i.tag?(l(!0),u(g,{key:1},h(o.displayInfo(i.tag),(d,y)=>(l(),C(r,{text:d,type:"info"},null,8,["text"]))),256)):m("",!0)]),i.good?(l(),u("p",W,[i.good?(l(),u("span",X,[e[6]||(e[6]=p("span",{class:"strong"},"推荐：",-1)),(l(!0),u(g,null,h(o.displayInfo(i.good),(d,y)=>(l(),C(r,{text:d,type:"tip"},null,8,["text"]))),256)),e[7]||(e[7]=p("br",null,null,-1))])):m("",!0),i.bad?(l(),u("span",tt,[e[8]||(e[8]=p("span",{class:"strong"},"差评：",-1)),(l(!0),u(g,null,h(o.displayInfo(i.bad),(d,y)=>(l(),C(r,{text:d,type:"danger"},null,8,["text"]))),256)),e[9]||(e[9]=p("br",null,null,-1))])):m("",!0),i.tip?(l(),u("span",et,[e[10]||(e[10]=p("span",{class:"strong"},"提示：",-1)),(l(!0),u(g,null,h(o.displayInfo(i.tip),(d,y)=>(l(),C(r,{text:d,type:"warning"},null,8,["text"]))),256))])):m("",!0)])):m("",!0)]))),256))],64)}const st=E(G,[["render",nt],["__scopeId","data-v-33bc1449"]]),it=JSON.parse('{"title":"看看想吃什么","description":"","frontmatter":{"aside":false},"headers":[],"relativePath":"eat/index.md","filePath":"eat/index.md","lastUpdated":1682056359000}'),at={name:"eat/index.md"},rt=Object.assign(at,{setup(a){return(e,t)=>(l(),u("div",null,[t[0]||(t[0]=p("h1",{id:"看看想吃什么",tabindex:"-1"},[b("看看想吃什么 "),p("a",{class:"header-anchor",href:"#看看想吃什么","aria-label":'Permalink to "看看想吃什么"'},"​")],-1)),O(st)]))}});export{it as __pageData,rt as default};
