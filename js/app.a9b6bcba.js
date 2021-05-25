(function(t){function e(e){for(var a,i,o=e[0],c=e[1],l=e[2],p=0,f=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},s=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/q-robometer/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},1:function(t,e){},10:function(t,e){},11:function(t,e){},12:function(t,e){},13:function(t,e){},14:function(t,e){},15:function(t,e){},2:function(t,e){},3:function(t,e){},"38c1":function(t,e,n){"use strict";var a=n("7c0e"),r=n.n(a);r.a},4:function(t,e){},5:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("e623"),n("e379"),n("5dc8"),n("37e1");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"main"},[n("h1",[t._v("Quangdao's Robometer")]),n("scale"),n("log")],1),n("control-panel")],1)},s=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.ready?n("div",{staticClass:"scale"},[n("div",{staticClass:"scale-label scale-label-human"},[n("p",{staticClass:"scale-label-percent"},[t._v(t._s(t.percentHuman))]),n("p",[t._v("Human")])]),n("div",{staticClass:"scale-meter"},[n("div",{staticClass:"scale-meter-container",class:{danger:t.percent<=0}},[n("div",{staticClass:"scale-meter-progress",style:{width:"calc("+t.percentHuman+" + 50px)",background:t.getColor}})])]),n("div",{staticClass:"scale-label scale-label-robot"},[n("p",{staticClass:"scale-label-percent"},[t._v(t._s(t.percentRobot))]),n("p",[t._v("Robot")])])]):t._e()},o=[],c=(n("a15b"),n("b680"),n("5530")),l=n("2f62"),u=[{pct:0,color:{r:255,g:0,b:0}},{pct:.5,color:{r:255,g:255,b:0}},{pct:1,color:{r:0,g:255,b:0}}],p=function(t){var e;for(e=1;e<u.length-1;e++)if(t<u[e].pct)break;var n=u[e-1],a=u[e],r=a.pct-n.pct,s=(t-n.pct)/r,i=1-s,o=s,c={r:Math.floor(n.color.r*i+a.color.r*o),g:Math.floor(n.color.g*i+a.color.g*o),b:Math.floor(n.color.b*i+a.color.b*o)};return"rgb("+[c.r,c.g,c.b].join(",")+")"},f={name:"Scale",data:function(){return{}},methods:{getPercentDisplay:function(t){return 1*(100*t).toFixed(2)+"%"}},computed:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(l["c"])(["ready"])),Object(l["b"])(["percent"])),{},{percentRobot:function(){return this.getPercentDisplay(1-this.percent)},percentHuman:function(){return this.getPercentDisplay(this.percent)},getColor:function(){return p(this.percent)}})},d=f,h=(n("7e7c"),n("2877")),m=Object(h["a"])(d,i,o,!1,null,"76f8264f",null),v=m.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"log"},t._l(t.history,(function(e,a){return n("div",{key:a,staticClass:"log-item"},[n("p",{staticClass:"log-message",style:t.getStyles(e)},[t._v(" "+t._s(t.getMessage(e))+" ")])])})),0)},b=[],y=(n("99af"),{name:"Log",computed:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(l["c"])({fullHistory:"history",showFullHistory:"showFullHistory"})),Object(l["b"])({sessionHistory:"sessionHistory"})),{},{history:function(){return this.showFullHistory?this.fullHistory:this.sessionHistory}}),methods:{getMessage:function(t){var e=t.change,n=t.message,a=0===e?"±":"+",r="".concat(1*(100*Math.abs(e)).toFixed(2),"%"),s=e>0?"Human":e<0?"Robot":"";return"".concat(a).concat(r," ").concat(s," - ").concat(n)},getStyles:function(t){var e=t.change,n={};return e>0&&(n.color="#080"),e<0&&(n.color="#d00"),n}}}),w=y,_=(n("38c1"),Object(h["a"])(w,g,b,!1,null,"74644542",null)),H=_.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel"},[n("div",{staticClass:"panel-section"},[t._m(0),n("div",{staticClass:"panel-row"},[t._m(1),n("div",{staticClass:"panel-right"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.showFullHistory,expression:"showFullHistory"}],attrs:{type:"checkbox",id:"panel-history-full"},domProps:{checked:Array.isArray(t.showFullHistory)?t._i(t.showFullHistory,null)>-1:t.showFullHistory},on:{change:function(e){var n=t.showFullHistory,a=e.target,r=!!a.checked;if(Array.isArray(n)){var s=null,i=t._i(n,s);a.checked?i<0&&(t.showFullHistory=n.concat([s])):i>-1&&(t.showFullHistory=n.slice(0,i).concat(n.slice(i+1)))}else t.showFullHistory=r}}})])])]),t.auth.validated?n("div",{staticClass:"panel-section"},[t._m(2),n("form",{staticClass:"panel-form",on:{submit:function(e){return e.preventDefault(),t.submit(e)},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.resetSubmit(e)}}},[n("div",{staticClass:"panel-row"},[t._m(3),n("div",{staticClass:"panel-right"},[n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.changePercent,expression:"changePercent",modifiers:{number:!0}}],attrs:{type:"number",id:"panel-change",min:"0.5",max:"8",step:"0.5"},domProps:{value:t.changePercent},on:{input:function(e){e.target.composing||(t.changePercent=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])]),n("div",{staticClass:"panel-row"},[t._m(4),n("div",{staticClass:"panel-right"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.multiplier,expression:"multiplier"}],attrs:{id:"panel-direction"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.multiplier=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"1"}},[t._v("Human")]),n("option",{attrs:{value:"-1"}},[t._v("Robot")])])])]),n("div",{staticClass:"panel-row"},[t._m(5),n("div",{staticClass:"panel-right"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{type:"text",id:"panel-message",required:""},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}})])]),n("div",{staticClass:"panel-row"},[n("div",{staticClass:"panel-buttons"},[t.showFullHistory?t._e():n("button",{attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.clearLog(e)}}},[t._v("Clear Log")]),n("button",{attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.resetSubmit(e)}}},[t._v("Reset")]),n("button",{attrs:{type:"submit",disabled:!t.canSubmit}},[t._v("Submit")])])])])]):n("div",{staticClass:"panel-section"},[t._m(6),n("form",{staticClass:"panel-form",on:{submit:function(e){return e.preventDefault(),t.authenticate(e)},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.resetAuth(e)}}},[n("div",{staticClass:"panel-row"},[t._m(7),n("div",{staticClass:"panel-right"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",id:"panel-pass"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),t._m(8)])])])},O=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel-section-title"},[n("h3",[t._v("Settings")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel-left"},[n("label",{attrs:{for:"panel-history-full"}},[t._v("Show full history")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel-section-title"},[n("h3",[t._v("Submit")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel-left"},[n("label",{attrs:{for:"panel-change"}},[t._v("Change %")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel-left"},[n("label",{attrs:{for:"panel-direction"}},[t._v("Direction")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel-left"},[n("label",{attrs:{for:"panel-message"}},[t._v("Message")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel-section-title"},[n("h3",[t._v("Authenticate")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel-left"},[n("label",{attrs:{for:"panel-pass"}},[t._v("What's the password???")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel-row"},[n("div",{staticClass:"panel-buttons"},[n("button",{attrs:{type:"submit"}},[t._v("Submit")])])])}],S=(n("96cf"),n("1da1")),k=n("8aa5"),j={firebase:{apiKey:"AIzaSyCBeAd5ibFPwNvgm5uU3d46Yvqo_vNAPhw",authDomain:"robometer-b3a8d.firebaseapp.com",databaseURL:"https://robometer-b3a8d.firebaseio.com"},env:{production:{firebase:{apiKey:"AIzaSyDoaUvXzv7g2luuKIOccoYHZ7TsQlvna1w",authDomain:"robometer-f5080.firebaseapp.com",databaseURL:"https://robometer-f5080.firebaseio.com"}}}},x="production",F=j.env[x]||{};delete j.env;var P=Object.assign({},j,F),$=k["initializeApp"](P.firebase).database(),R=$.ref("pings"),A={name:"ControlPanel",data:function(){return{changePercent:.5,message:"",password:"",canSubmit:!0,multiplier:1}},methods:{submit:function(){var t=this;return Object(S["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.canSubmit=!1,n={change:t.changed,message:t.message,submitted:Date.now(),key:t.$store.state.auth.key},e.prev=2,e.next=5,R.push(n);case 5:t.$store.dispatch("logData",{gtm:!0,type:"update",category:"Ping",action:n.change>0?"+ Human":n.change<0?"+ Robot":"Neutral",label:n.message,value:Math.abs(n.change)}),t.resetSubmit(),e.next=14;break;case 9:e.prev=9,e.t0=e["catch"](2),alert("something went wrong"),t.$store.dispatch("logData",{gtm:!0,event:"auth",category:"AuthenticationDeactivated",action:e.t0.message,label:n.key}),t.$store.dispatch("unauth");case 14:t.canSubmit=!0;case 15:case"end":return e.stop()}}),e,null,[[2,9]])})))()},resetSubmit:function(){this.changePercent=.5,this.message=""},resetAuth:function(){this.password=""},clearLog:function(){this.$store.dispatch("clearSessionHistory")},authenticate:function(){this.$store.dispatch("authenticate",this.password),this.resetAuth()}},computed:Object(c["a"])(Object(c["a"])({},Object(l["c"])(["auth"])),{},{showFullHistory:{get:function(){return this.$store.state.showFullHistory},set:function(t){this.$store.dispatch("toggleHistoryMode",t)}},changed:function(){return this.changePercent/100*this.multiplier}})},D=A,E=(n("ead1"),Object(h["a"])(D,C,O,!1,null,"3303e4dd",null)),M=E.exports,N=$.ref("pings"),L={name:"app",data:function(){return{}},components:{scale:v,log:H,"control-panel":M},mounted:function(){this.$store.dispatch("setHistoryRef",N),this.$store.dispatch("initFingerprint"),this.$gtm.trackView("Home","/")}},T=L,I=(n("034f"),Object(h["a"])(T,r,s,!1,null,null,null)),U=I.exports,q=(n("4de4"),n("d81d"),n("13d5"),n("e813")),z=n.n(q),J=n("3317"),K=n("1c46"),Q="__q-app-state",V=JSON.parse(localStorage.getItem(Q))||{};a["a"].use(l["a"]);var Y=new l["a"].Store({state:{fingerprint:null,ready:!1,history:[],showFullHistory:"undefined"===typeof V.showFullHistory||V.showFullHistory,sessionStart:Date.now(),auth:{validated:!1,key:""}},getters:{percent:function(t){return t.history.reduce((function(t,e){return t+e.change}),.5)},sessionHistory:function(t){return t.history.filter((function(e){return e.submitted>t.sessionStart}))}},mutations:Object(c["a"])(Object(c["a"])({},J["b"]),{},{clearSessionHistory:function(t){a["a"].set(t,"sessionStart",Date.now())},toggleHistoryMode:function(t,e){t.showFullHistory="undefined"!==typeof e?e:!t.showFullHistory},stateReady:function(t){t.ready=!0},setAuth:function(t,e){t.auth.validated=e.validated,t.auth.key=e.key},setFingerprint:function(t,e){t.fingerprint=e}}),actions:{setHistoryRef:Object(J["a"])((function(t,e){var n=t.bindFirebaseRef,a=t.commit,r=e.ref;n("history",r).then((function(){a("stateReady")}))})),clearSessionHistory:function(t){t.commit("clearSessionHistory")},saveSettings:function(t){var e=t.state.showFullHistory,n={showFullHistory:e};localStorage.setItem(Q,JSON.stringify(n))},toggleHistoryMode:function(t,e){t.commit("toggleHistoryMode",e),t.dispatch("saveSettings")},unauth:function(t){t.commit("setAuth",{validated:!1,key:""})},initFingerprint:function(t){return Object(S["a"])(regeneratorRuntime.mark((function e(){var n,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,z.a.getPromise();case 2:n=e.sent,a=n.map((function(t){return t.value})),r=z.a.x64hash128(a.join(""),31),t.commit("setFingerprint",r);case 6:case"end":return e.stop()}}),e)})))()},authenticate:function(t,e){return Object(S["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=K.createHmac("sha256",e).digest("hex"),n.next=3,t.dispatch("validateHash",a);case 3:r={type:"auth",category:"AuthenticationAttempt",action:"Success",label:"***********",gtm:!0},t.state.auth.validated||(alert("nope!"),r.action="Failure",r.label=e),t.dispatch("logData",r);case 6:case"end":return n.stop()}}),n)})))()},validateHash:function(t,e){return Object(S["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,$.ref("auth/password/"+e).once("value");case 2:a=n.sent,a.val()&&(r=K.createHmac("sha256",a.val()).digest("hex"),t.commit("setAuth",{validated:!0,key:r}));case 4:case"end":return n.stop()}}),n)})))()},logData:function(t,e){var n=e.gtm;if(delete e.gtm,t.state.fingerprint&&(e.fingerprint=t.state.fingerprint),e.timestamp=Date.now(),$.ref("logs").push(e),n){var r={event:e.type,category:e.category,action:e.action,label:e.label,value:e.value};a["a"].gtm.trackEvent(r)}}}}),B=n("0ff2"),G=n("1ad2"),W=n.n(G);window.ENV="production",a["a"].config.productionTip=!1,a["a"].use(B["a"]),a["a"].use(W.a,{id:"GTM-TKN6L75",enabled:!0}),new a["a"]({store:Y,render:function(t){return t(U)}}).$mount("#app")},6:function(t,e){},7:function(t,e){},"7c0e":function(t,e,n){},"7e7c":function(t,e,n){"use strict";var a=n("9b3a"),r=n.n(a);r.a},8:function(t,e){},"85ec":function(t,e,n){},9:function(t,e){},"9b3a":function(t,e,n){},b032:function(t,e,n){},ead1:function(t,e,n){"use strict";var a=n("b032"),r=n.n(a);r.a}});
//# sourceMappingURL=app.a9b6bcba.js.map