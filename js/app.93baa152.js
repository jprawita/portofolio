(function(t){function e(e){for(var a,i,r=e[0],l=e[1],c=e[2],u=0,d=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],a=!0,i=1;i<o.length;i++){var l=o[i];0!==n[l]&&(a=!1)}a&&(s.splice(e--,1),t=r(r.s=o[0]))}return t}var a={},n={app:0},s=[];function i(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"d9c1dbcb"}[t]+".js"}function r(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.e=function(t){var e=[],o=n[t];if(0!==o)if(o)e.push(o[2]);else{var a=new Promise((function(e,a){o=n[t]=[e,a]}));e.push(o[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=i(t);var c=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(u);var o=n[t];if(0!==o){if(o){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",c.name="ChunkLoadError",c.type=a,c.request=s,o[1](c)}n[t]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},r.m=t,r.c=a,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(o,a,function(e){return t[e]}.bind(null,a));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/portofolio/",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var f=c;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0472":function(t,e,o){},"0db0":function(t,e,o){},"22d3":function(t,e,o){"use strict";var a=o("a495"),n=o.n(a);n.a},"4b14":function(t,e,o){},"55fa":function(t,e,o){"use strict";var a=o("0472"),n=o.n(a);n.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("2b0e"),n=(o("d3b7"),o("bc3a")),s=o.n(n),i={},r=s.a.create(i);r.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),r.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t){t.axios=r,window.axios=r,Object.defineProperties(t.prototype,{axios:{get:function(){return r}},$axios:{get:function(){return r}}})},a["a"].use(Plugin);Plugin;var l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}]},[o("v-navigation-drawer",{staticClass:"hidden-md-and-up",attrs:{app:"",clipped:"","disable-resize-watcher":"","elevate-on-scroll":"",color:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[o("v-list",{attrs:{dense:""}},t._l(t.items,(function(e){return o("v-list-item",{key:e.title,attrs:{link:""},on:{click:function(o){return t.$vuetify.goTo(e.link,t.options)}}},[o("v-list-item-action",[o("v-icon",[t._v(t._s(e.icon))])],1),o("v-list-item-content",[o("v-list-item-title",{staticStyle:{"text-transform":"uppercase"}},[t._v(t._s(e.title))])],1)],1)})),1)],1),o("v-app-bar",{attrs:{fixed:"",color:t.appColor,elevation:"0",dark:"","scroll-threshold":"100"}},[o("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),o("v-toolbar-title",{staticClass:"pl-6 ml-4",staticStyle:{"font-size":"2em","font-weight":"bold","letter-spacing":"8px"},style:{color:t.appFontColor}},[t._v(" LOGO ")]),o("v-spacer"),o("v-toolbar-items",{staticClass:"hidden-sm-and-down"},t._l(t.items,(function(e){return o("v-btn",{key:e.title,attrs:{color:"transparent",depressed:""},on:{click:function(o){return t.$vuetify.goTo(e.link,t.options)}}},[o("b",{style:{color:t.appFontColor}},[t._v(t._s(e.title))])])})),1)],1),o("v-main",[o("HeroSection"),o("ServiceSection"),o("PortofolioSection"),o("AboutSection"),o("ContactSection")],1),o("FooterSection")],1)},c=[],u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"",id:"section-home"}},[a("v-row",{staticClass:"d-flex justify-center align-center",staticStyle:{"min-height":"100vh"}},[a("v-col",{staticClass:"d-flex flex-column justify-center align-center",attrs:{cols:"12",md:"6"}},[a("p",{staticClass:"hero-sub-title"},[t._v("Hi . ., I'am Jun")]),a("div",{staticClass:"hero-title"},[a("p",{staticClass:"d-none d-md-flex",staticStyle:{"font-size":"5em","line-height":"1em"}},[t._v("web programmer")]),a("p",{staticClass:"d-flex d-md-none",staticStyle:{"font-size":"3em","line-height":"1em"}},[t._v("web programmer")])]),a("div",{staticClass:"flex-row d-md-flex",attrs:{align:"center"}},[a("v-btn",{staticClass:"ma-2",attrs:{"x-large":"",outlined:"",color:"black"},on:{click:function(e){return e.preventDefault(),t.authApp(e)}}},[a("b",[t._v("login portofolio")])]),a("v-btn",{staticClass:"ma-2",attrs:{"x-large":"",outlined:"",color:"black"},on:{click:function(e){return e.preventDefault(),t.authLogout(e)}}},[a("b",[t._v("logout portofolio")])])],1),a("div",{staticClass:"flex-row d-md-flex",attrs:{align:"center"}},[a("v-btn",{staticClass:"ma-2",attrs:{"x-large":"",color:"",dark:""},on:{click:function(e){return e.preventDefault(),t.getTeam(e)}}},[a("b",[t._v("get team contact")])]),a("v-btn",{staticClass:"ma-2",attrs:{"x-large":"",color:"",dark:""},on:{click:function(e){return e.preventDefault(),t.getUser(e)}}},[a("b",[t._v("get user contact")])])],1)]),a("v-col",{staticClass:"d-none d-sm-flex flex-column justify-center align-center",attrs:{cols:"12",md:"6"}},[a("v-img",{staticClass:"my-3",attrs:{src:o("8ab5"),contain:"",height:""}})],1)],1)],1)},f=[],d=(o("96cf"),o("1da1"));s.a.defaults.withCredentials=!0,s.a.defaults.baseURL="http://localhost:8000";var m={name:"HeroSection",components:{},data:function(){return{email:"admin@argon.com",password:"secret"}},methods:{authApp:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/sanctum/csrf-cookie").then((function(e){console.log(e),s.a.post("/api/loginv2",{email:t.email,password:t.password}).then((function(t){console.log(t),s.a.get("/api/user").then((function(t){console.log(t)}))}))}));case 2:case"end":return e.stop()}}),e)})))()},getTeam:function(){s.a.get("/api/football-team").then((function(t){console.log(t)}))},getUser:function(){s.a.get("/api/user").then((function(t){console.log(t)}))},authLogout:function(){s.a.post("/api/logoutv2").then((function(t){console.log(t)}))}}},v=m,p=(o("55fa"),o("2877")),g=o("6544"),h=o.n(g),b=o("8336"),x=o("62ad"),C=o("a523"),y=o("adda"),w=o("0fd9"),_=Object(p["a"])(v,u,f,!1,null,null,null),k=_.exports;h()(_,{VBtn:b["a"],VCol:x["a"],VContainer:C["a"],VImg:y["a"],VRow:w["a"]});var j=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{attrs:{fluid:"",id:"section-service"}},[o("v-row",{staticClass:"pb-4 pt-4 d-flex flex-column",staticStyle:{"min-height":"70vh","background-color":"#DCE7F9"}},[o("v-col",{staticClass:"d-flex flex-column",attrs:{col:"12"}},[o("v-row",{staticClass:"d-flex justify-center"},[o("v-col",{attrs:{cols:"12",md:"9"}},[o("P",{staticClass:"font-weight-black text-h4"},[t._v("I Do Bunch of Design")]),o("p",{staticStyle:{"word-spacing":".4em"}},[t._v("Starting with "),o("span",{staticClass:"font-weight-black"},[t._v("Company Profile")]),t._v(" and "),o("span",{staticClass:"font-weight-black"},[t._v("Web Application")]),t._v(".")]),o("v-divider",{})],1)],1)],1),o("v-col",{staticClass:"mb-6",attrs:{cols:"12"}},[o("v-row",{staticClass:"d-flex justify-center"},[o("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"3"}},[o("div",{staticClass:"pa-10 service-card d-flex flex-column align-center justify-center rounded-lg"},[o("v-icon",{staticClass:"mb-4",staticStyle:{"font-size":"6em"}},[t._v("mdi-simple-icons")]),o("p",{staticClass:"text-uppercase font-weight-black text-h5"},[t._v("simple")]),o("p",{staticClass:"font-weight-regular text-body-1 text-center"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa exercitationem at facere nostrum libero text-h5nam quidem blanditiis quis nulla rem?")])],1)]),o("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"3"}},[o("div",{staticClass:"pa-10 service-card d-flex flex-column align-center justify-center rounded-lg"},[o("v-icon",{staticClass:"mb-4",staticStyle:{"font-size":"6em"}},[t._v("mdi-cellphone-android")]),o("p",{staticClass:"text-uppercase font-weight-black text-h5"},[t._v("responsive")]),o("p",{staticClass:"font-weight-regular text-body-1 text-center"},[t._v("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni laudantium enim non optio velit dolore at ut.")])],1)]),o("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"3"}},[o("div",{staticClass:"pa-10 service-card d-flex flex-column align-center justify-center rounded-lg"},[o("v-icon",{staticClass:"mb-4",staticStyle:{"font-size":"6em"}},[t._v("mdi-rocket-launch")]),o("p",{staticClass:"text-uppercase font-weight-black text-h5"},[t._v("lightnest")]),o("p",{staticClass:"font-weight-regular text-body-1 text-center"},[t._v("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam corporis, numquam sed ut?")])],1)])],1)],1)],1)],1)},S=[],V={name:"ServiceSection",components:{},data:function(){return{}}},O=V,T=(o("22d3"),o("ce7e")),P=o("132d"),E=Object(p["a"])(O,j,S,!1,null,null,null),I=E.exports;h()(E,{VCol:x["a"],VContainer:C["a"],VDivider:T["a"],VIcon:P["a"],VRow:w["a"]});var A=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{attrs:{fluid:"",id:"section-portofolio"}},[o("v-row",{staticClass:"mb-10 d-flex flex-column",staticStyle:{"min-height":"70vh","background-color":"white"}},[o("v-col",{staticClass:"d-flex flex-column",attrs:{cols:"12"}},[o("v-row",{staticClass:"d-flex justify-center"},[o("v-col",{attrs:{cols:"12",md:"9"}},[o("P",{staticClass:"text-uppercase font-weight-black text-h4"},[t._v("my portofolio")]),o("v-divider",{})],1)],1)],1),o("v-col",{staticClass:"d-flex flex-column",attrs:{cols:"12"}},[o("v-row",{staticClass:"d-flex justify-center"},[o("v-col",{attrs:{cols:"12",md:"9"}},[o("v-tabs",{attrs:{color:"black"}},[o("v-tab",[t._v("Item One")]),o("v-tab",[t._v("Item Two")]),o("v-tab",[t._v("Item Three")])],1)],1)],1)],1),o("v-col",{attrs:{cols:"12"}},[o("v-row",{staticClass:"d-flex justify-center"},[o("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"3"}},[o("div",{staticClass:"portofolio-card d-flex flex-column justify-center align-center rounded-lg"},[t._v(" simple ")])]),o("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"3"}},[o("div",{staticClass:"portofolio-card d-flex flex-column justify-center align-center rounded-lg"},[t._v(" responsive ")])]),o("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"3"}},[o("div",{staticClass:"portofolio-card d-flex flex-column justify-center align-center rounded-lg"},[t._v(" lightnest ")])])],1)],1)],1)],1)},D=[],L={name:"PortofolioSection",components:{},data:function(){return{}}},F=L,$=(o("8403"),o("71a3")),q=o("fe57"),z=Object(p["a"])(F,A,D,!1,null,null,null),B=z.exports;h()(z,{VCol:x["a"],VContainer:C["a"],VDivider:T["a"],VRow:w["a"],VTab:$["a"],VTabs:q["a"]});var H=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticStyle:{"min-height":"35vh","background-color":"#DCE7F9"},attrs:{fluid:"",id:"section-about"}},[o("v-row",{staticClass:"d-flex justify-center align-center"},[o("v-col",{staticClass:"d-flex",attrs:{cols:"12",md:"8"}},[o("v-row",{staticClass:"d-flex justify-center align-center"},[o("v-col",{staticStyle:{"background-color":""},attrs:{cols:"12",md:"9"}},[o("P",{staticClass:"text-uppercase font-weight-black text-h4"},[t._v("about")]),o("v-divider",{}),o("p",{staticClass:"mt-4"},[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum numquam maxime deleniti porro delectus distinctio impedit? Mollitia, sapiente amet in. Temporibus vel esse cum quas. Ipsum iusto, hic fugiat vero. ")])],1)],1)],1),o("v-col",{attrs:{cols:"12",md:"3"}},[o("v-row",{staticClass:"d-flex justify-start"},[o("v-col",{staticStyle:{"background-color":""},attrs:{cols:"12",md:"9"}},[o("div",{staticClass:"flex-row d-md-flex",attrs:{align:"center"}},[o("v-btn",{staticClass:"ma-2",attrs:{"x-large":"",outlined:"",color:"black"}},[o("b",[t._v("contact me !")])])],1)])],1)],1)],1)],1)},R=[],M={name:"AbouttSection",components:{},data:function(){return{form:{email:""}}}},N=M,W=Object(p["a"])(N,H,R,!1,null,null,null),J=W.exports;h()(W,{VBtn:b["a"],VCol:x["a"],VContainer:C["a"],VDivider:T["a"],VRow:w["a"]});var U=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticStyle:{"min-height":"80vh","background-color":"white"},attrs:{fluid:"",id:"section-contact"}},[o("v-row",{staticClass:"d-flex"},[o("v-col",{staticClass:"d-flex flex-column",attrs:{cols:"12",md:"6"}},[o("v-row",{staticClass:"d-flex justify-end"},[o("v-col",{staticStyle:{"background-color":""},attrs:{cols:"12",md:"9"}},[o("P",{staticClass:"text-uppercase font-weight-black text-h4"},[t._v("contact")]),o("v-divider",{}),o("v-row",{staticClass:"mt-4"},[o("v-col",{staticClass:"d-flex align-center my-4",staticStyle:{"background-color":"#ECECEC","border-radius":"6px"},attrs:{cols:"12"}},[o("v-col",{attrs:{cols:"2"}},[o("v-icon",{staticClass:"mb-5",staticStyle:{"font-size":"3em"}},[t._v("mdi-map-marker")])],1),o("v-col",{attrs:{cols:"10"}},[o("span",{staticStyle:{"font-size":"1.3em","font-weight":"bold",color:"#757575"}},[t._v("Renon, Denpasar - Bali - Indonesia")])])],1),o("v-col",{staticClass:"d-flex align-center my-4",staticStyle:{"background-color":"#ECECEC","border-radius":"6px"},attrs:{cols:"12"}},[o("v-col",{attrs:{cols:"2"}},[o("v-icon",{staticClass:"mb-5",staticStyle:{"font-size":"3em"}},[t._v("mdi-email")])],1),o("v-col",{attrs:{cols:"10"}},[o("span",{staticStyle:{"font-size":"1.3em","font-weight":"bold",color:"#757575"}},[t._v("jprawita@gmail.com")])])],1)],1)],1)],1)],1),o("v-col",{attrs:{cols:"12",md:"6"}},[o("v-row",{staticClass:"d-flex justify-start"},[o("v-col",{staticStyle:{"background-color":""},attrs:{cols:"12",md:"9"}},[o("v-form",[o("v-text-field",{attrs:{label:"Name",outlined:"",light:"",clearable:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),o("v-text-field",{attrs:{label:"Email",outlined:"",light:"",clearable:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),o("v-text-field",{attrs:{label:"Subject",outlined:"",light:"",clearable:""},model:{value:t.form.subject,callback:function(e){t.$set(t.form,"subject",e)},expression:"form.subject"}}),o("v-textarea",{attrs:{outlined:"",light:"",clearable:"",name:"input-7-4",label:"Message",value:""},model:{value:t.form.message,callback:function(e){t.$set(t.form,"message",e)},expression:"form.message"}})],1)],1)],1)],1)],1)],1)},Y=[],G={name:"ContactSection",components:{},data:function(){return{form:{name:"",email:"",subject:"",message:""}}}},Q=G,K=o("4bd4"),X=o("8654"),Z=o("a844"),tt=Object(p["a"])(Q,U,Y,!1,null,null,null),et=tt.exports;h()(tt,{VCol:x["a"],VContainer:C["a"],VDivider:T["a"],VForm:K["a"],VIcon:P["a"],VRow:w["a"],VTextField:X["a"],VTextarea:Z["a"]});var ot=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-footer",{staticClass:"d-flex flex-column justify-center footer-section",attrs:{color:"",dark:""}},[o("p",{staticStyle:{"word-spacing":"0.4em",color:"grey"}},[t._v(" Copyright © "+t._s((new Date).getFullYear())+" Brawstarts - Design: JProject ")]),o("div",{},t._l(t.icons,(function(e){return o("v-btn",{key:e,staticClass:"mx-4 white--text",attrs:{icon:""}},[o("v-icon",{attrs:{size:"24px"}},[t._v(t._s(e))])],1)})),1)])},at=[],nt={name:"FooterSection",components:{},data:function(){return{icons:["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"]}}},st=nt,it=(o("6948"),o("553a")),rt=Object(p["a"])(st,ot,at,!1,null,null,null),lt=rt.exports;h()(rt,{VBtn:b["a"],VFooter:it["a"],VIcon:P["a"]});var ct={name:"App",components:{HeroSection:k,ServiceSection:I,PortofolioSection:B,AboutSection:J,ContactSection:et,FooterSection:lt},created:function(){},computed:{options:function(){return{duration:this.duration,offset:this.offset,easing:this.easing}}},destroyed:function(){},watch:{offsetTop:function(t){this.appColor=t?"#272727":"transparent",this.appFontColor=t?"white":"#222222"}},data:function(){return{offsetTop:0,appColor:"transparent",appFontColor:"#222222",drawer:!1,items:[{title:"Home",icon:"mdi-home",link:"#section-home",color:"#febd01"},{title:"Service",icon:"mdi-play",link:"#section-service",color:"#febd01"},{title:"Portofolio",icon:"mdi-gamepad-square",link:"#section-portofolio",color:"#febd01"},{title:"Contact",icon:"mdi-rocket-launch",link:"#section-contact",color:"#febd01"}],duration:1e3,offset:50,easing:"easeInOutCubic"}},methods:{onScroll:function(t){if("undefined"!==typeof window){var e=window.pageYOffset||t.target.scrollTop||0;this.offsetTop=e>100}}}},ut=ct,ft=o("7496"),dt=o("40dc"),mt=o("5bc1"),vt=o("8860"),pt=o("da13"),gt=o("1800"),ht=o("5d23"),bt=o("f6c4"),xt=o("f774"),Ct=o("2fa4"),yt=o("2a7f"),wt=o("269a"),_t=o.n(wt),kt=o("f977"),jt=Object(p["a"])(ut,l,c,!1,null,null,null),St=jt.exports;h()(jt,{VApp:ft["a"],VAppBar:dt["a"],VAppBarNavIcon:mt["a"],VBtn:b["a"],VIcon:P["a"],VList:vt["a"],VListItem:pt["a"],VListItemAction:gt["a"],VListItemContent:ht["a"],VListItemTitle:ht["b"],VMain:bt["a"],VNavigationDrawer:xt["a"],VSpacer:Ct["a"],VToolbarItems:yt["a"],VToolbarTitle:yt["b"]}),_t()(jt,{Scroll:kt["b"]});var Vt=o("9483");Object(Vt["a"])("".concat("/portofolio/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var Ot=o("8c4f"),Tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("img",{attrs:{alt:"Vue logo",src:o("cf05")}}),a("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},Pt=[],Et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"text-center"},[a("v-col",{attrs:{cols:"12"}},[a("v-img",{staticClass:"my-3",attrs:{src:o("9b19"),contain:"",height:"200"}})],1),a("v-col",{staticClass:"mb-4"},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),a("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),a("br"),t._v("please join our online "),a("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,o){return a("a",{key:o,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,o){return a("a",{key:o,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,o){return a("a",{key:o,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},It=[],At={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},Dt=At,Lt=Object(p["a"])(Dt,Et,It,!1,null,null,null),Ft=Lt.exports;h()(Lt,{VCol:x["a"],VContainer:C["a"],VImg:y["a"],VRow:w["a"]});var $t={name:"Home",components:{HelloWorld:Ft}},qt=$t,zt=Object(p["a"])(qt,Tt,Pt,!1,null,null,null),Bt=zt.exports;a["a"].use(Ot["a"]);var Ht=[{path:"/",name:"Home",component:Bt},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],Rt=new Ot["a"]({mode:"history",base:"/portofolio/",routes:Ht}),Mt=Rt,Nt=o("2f62"),Wt={todos:[{id:1,title:"Todo One"},{id:2,title:"Todo Two"}]},Jt={allTodos:function(t){return t.todos}},Ut={},Yt={},Gt={state:Wt,getters:Jt,actions:Ut,mutations:Yt};a["a"].use(Nt["a"]);var Qt=new Nt["a"].Store({state:{},mutations:{},actions:{},modules:{todos:Gt}}),Kt=o("f309");a["a"].use(Kt["a"]);var Xt=new Kt["a"]({});a["a"].config.productionTip=!1,new a["a"]({router:Mt,store:Qt,vuetify:Xt,render:function(t){return t(St)}}).$mount("#app")},6948:function(t,e,o){"use strict";var a=o("4b14"),n=o.n(a);n.a},8403:function(t,e,o){"use strict";var a=o("0db0"),n=o.n(a);n.a},"8ab5":function(t,e,o){t.exports=o.p+"img/undraw_Portfolio_update_re_jqnp.1904b5f7.png"},"9b19":function(t,e,o){t.exports=o.p+"img/logo.63a7d78d.svg"},a495:function(t,e,o){},cf05:function(t,e,o){t.exports=o.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.93baa152.js.map