(function(t){function e(e){for(var n,i,r=e[0],c=e[1],l=e[2],u=0,d=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],n=!0,i=1;i<o.length;i++){var c=o[i];0!==a[c]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=o[0]))}return t}var n={},a={app:0},s=[];function i(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"d9c1dbcb"}[t]+".js"}function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.e=function(t){var e=[],o=a[t];if(0!==o)if(o)e.push(o[2]);else{var n=new Promise((function(e,n){o=a[t]=[e,n]}));e.push(o[2]=n);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=i(t);var l=new Error;s=function(e){c.onerror=c.onload=null,clearTimeout(u);var o=a[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",l.name="ChunkLoadError",l.type=n,l.request=s,o[1](l)}a[t]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(e)},r.m=t,r.c=n,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/portofolio/",r.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var f=l;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0138":function(t,e,o){"use strict";var n=o("ec38"),a=o.n(n);a.a},"01c6":function(t,e,o){t.exports=o.p+"img/elemen-io.19277574.png"},"117b":function(t,e,o){t.exports=o.p+"img/undraw_Mailbox_re_dvds.16bef22e.svg"},"2efe":function(t,e,o){"use strict";var n=o("b7e0"),a=o.n(n);a.a},"45e3":function(t,e,o){},4852:function(t,e,o){t.exports=o.p+"img/laravel-transparent.169ea280.png"},"4f04":function(t,e,o){"use strict";var n=o("eeb8"),a=o.n(n);a.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),a=(o("d3b7"),o("bc3a")),s=o.n(a),i={},r=s.a.create(i);r.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),r.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t){t.axios=r,window.axios=r,Object.defineProperties(t.prototype,{axios:{get:function(){return r}},$axios:{get:function(){return r}}})},n["a"].use(Plugin);Plugin;var c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}]},[o("v-navigation-drawer",{staticClass:"hidden-md-and-up",attrs:{app:"",clipped:"","disable-resize-watcher":"","elevate-on-scroll":"",color:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[o("v-list",{attrs:{dense:""}},t._l(t.items,(function(e){return o("v-list-item",{key:e.title,attrs:{link:""},on:{click:function(o){return t.$vuetify.goTo(e.link,t.options)}}},[o("v-list-item-action",[o("v-icon",[t._v(t._s(e.icon))])],1),o("v-list-item-content",[o("v-list-item-title",{staticStyle:{"text-transform":"uppercase"}},[t._v(t._s(e.title))])],1)],1)})),1)],1),o("v-app-bar",{attrs:{fixed:"",color:t.appColor,elevation:"0",dark:"","scroll-threshold":"100"}},[o("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up",attrs:{color:t.appFontColor},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),o("v-toolbar-title",{staticStyle:{"font-weight":"bold","letter-spacing":"1px","font-family":"'Russo One', sans-serif",transition:".5s"},style:{color:t.appFontColor,"font-size":t.appFontSize}},[t._v(" JPROJECT ")]),o("v-spacer"),o("v-toolbar-items",{staticClass:"hidden-sm-and-down"},t._l(t.items,(function(e){return o("v-btn",{key:e.title,attrs:{color:"transparent",depressed:""},on:{click:function(o){return t.$vuetify.goTo(e.link,t.options)}}},[o("b",{style:{color:t.appFontColor}},[t._v(t._s(e.title))])])})),1)],1),o("v-main",[o("HeroSection"),o("ServiceSection"),o("PortofolioSection"),o("AboutSection"),o("ContactSection")],1),o("FooterSection")],1)},l=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg"},[n("v-container",{attrs:{fluid:"",id:"section-home"}},[n("v-row",{staticClass:"d-flex justify-center align-center",staticStyle:{"min-height":"100vh"}},[n("v-col",{staticClass:"d-flex flex-column justify-center align-center",attrs:{cols:"12",md:"6"}},[n("p",{staticClass:"hero-sub-title"},[t._v("Hi . ., I'am Jun")]),n("div",{staticClass:"hero-title"},[n("p",{staticClass:"d-none d-md-flex",staticStyle:{"font-size":"5em","line-height":"1em"}},[t._v("web programmer")]),n("p",{staticClass:"d-flex d-md-none",staticStyle:{"font-size":"3em","line-height":"1em"}},[t._v("web programmer")])]),n("div",{staticClass:"flex-row d-md-flex",attrs:{align:"center"}},[n("v-btn",{staticClass:"ma-2",attrs:{"x-large":"",outlined:"",color:"black"},on:{click:function(e){return t.$vuetify.goTo(t.linkPortofolio,t.options)}}},[n("b",[t._v("portofolio")])]),n("v-btn",{staticClass:"ma-2",attrs:{"x-large":"",color:"",dark:""},on:{click:function(e){return t.$vuetify.goTo(t.linkContact,t.options)}}},[n("b",[t._v("contact")])])],1)]),n("v-col",{staticClass:"d-none d-sm-flex flex-column justify-center align-center",attrs:{cols:"12",md:"6"}},[n("v-img",{staticClass:"my-3",attrs:{src:o("6436"),contain:"",height:""}})],1)],1)],1)],1)},f=[],d={name:"HeroSection",components:{},computed:{options:function(){return{duration:this.duration,offset:this.offset,easing:this.easing}}},data:function(){return{linkPortofolio:"#section-portofolio",linkContact:"#section-contact",duration:1e3,offset:50,easing:"easeInOutCubic"}},methods:{}},p=d,m=(o("2efe"),o("2877")),v=o("6544"),g=o.n(v),h=o("8336"),b=o("62ad"),x=o("a523"),y=o("adda"),C=o("0fd9"),w=Object(m["a"])(p,u,f,!1,null,"2d2a5eee",null),_=w.exports;g()(w,{VBtn:h["a"],VCol:b["a"],VContainer:x["a"],VImg:y["a"],VRow:C["a"]});var k=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{attrs:{fluid:"",id:"section-service"}},[o("v-row",{staticClass:"pb-4 pt-4 d-flex flex-column bg",staticStyle:{"min-height":"70vh","background-color":"#333333"}},[o("v-col",{staticClass:"d-flex flex-column",attrs:{col:"12"}},[o("v-row",{staticClass:"d-flex justify-center"},[o("v-col",{attrs:{cols:"12",md:"9"}},[o("P",{staticClass:"portofolio-service-title font-weight-black text-h4"},[t._v("I Do Bunch of Design")]),o("p",{staticClass:"portofolio-service-title",staticStyle:{"word-spacing":".4em"}},[t._v("Starting with "),o("span",{staticClass:"font-weight-black"},[t._v("Company Profile")]),t._v(" and "),o("span",{staticClass:"font-weight-black"},[t._v("Web Application")]),t._v(".")]),o("v-divider",{attrs:{dark:""}})],1)],1)],1),o("v-col",{staticClass:"mb-6",attrs:{cols:"12"}},[o("v-row",{staticClass:"d-flex justify-center"},[o("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"3"}},[o("div",{staticClass:"pa-10 service-card d-flex flex-column align-center justify-center rounded-lg"},[o("v-icon",{staticClass:"mb-4",staticStyle:{"font-size":"6em"},attrs:{color:"#333333"}},[t._v("mdi-simple-icons")]),o("p",{staticClass:"text-uppercase font-weight-black text-h5"},[t._v("simple")]),o("p",{staticClass:"font-weight-regular text-body-1 text-center"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa exercitationem at facere nostrum libero text-h5nam quidem blanditiis quis nulla rem?")])],1)]),o("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"3"}},[o("div",{staticClass:"pa-10 service-card d-flex flex-column align-center justify-center rounded-lg"},[o("v-icon",{staticClass:"mb-4",staticStyle:{"font-size":"6em"},attrs:{color:"#333333"}},[t._v("mdi-cellphone-android")]),o("p",{staticClass:"text-uppercase font-weight-black text-h5"},[t._v("responsive")]),o("p",{staticClass:"font-weight-regular text-body-1 text-center"},[t._v("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni laudantium enim non optio velit dolore at ut.")])],1)]),o("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"3"}},[o("div",{staticClass:"pa-10 service-card d-flex flex-column align-center justify-center rounded-lg"},[o("v-icon",{staticClass:"mb-4",staticStyle:{"font-size":"6em"},attrs:{color:"#333333"}},[t._v("mdi-rocket-launch")]),o("p",{staticClass:"text-uppercase font-weight-black text-h5"},[t._v("lightnest")]),o("p",{staticClass:"font-weight-regular text-body-1 text-center"},[t._v("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam corporis, numquam sed ut?")])],1)])],1)],1)],1)],1)},j=[],S={name:"ServiceSection",components:{},data:function(){return{}}},V=S,O=(o("d3b4"),o("ce7e")),P=o("132d"),I=Object(m["a"])(V,k,j,!1,null,"300b8245",null),T=I.exports;g()(I,{VCol:b["a"],VContainer:x["a"],VDivider:O["a"],VIcon:P["a"],VRow:C["a"]});var A=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{attrs:{fluid:"",id:"section-portofolio"}},[o("v-row",{staticClass:"mb-10 d-flex flex-column",staticStyle:{"min-height":"70vh","background-color":"white"}},[o("v-col",{staticClass:"d-flex flex-column",attrs:{cols:"12"}},[o("v-row",{staticClass:"d-flex justify-center"},[o("v-col",{attrs:{cols:"12",md:"9"}},[o("P",{staticClass:"text-uppercase font-weight-black text-h4"},[t._v("my portofolio")]),o("v-divider",{})],1)],1)],1),o("v-col",{staticClass:"d-flex flex-column",attrs:{cols:"12"}},[o("v-row",{staticClass:"d-flex justify-center"},[o("v-col",{attrs:{cols:"12",md:"9"}},[o("v-tabs",{attrs:{color:"black"}},[o("v-tab",[t._v("design")]),o("v-tab",[t._v("application")])],1)],1)],1)],1),o("v-col",{attrs:{cols:"12"}},[o("v-row",{staticClass:"d-flex justify-center"},[o("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"3"}},[o("div",{staticClass:"portofolio-card d-flex flex-column justify-center align-center rounded-lg"},[t._v(" simple ")])]),o("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"3"}},[o("div",{staticClass:"portofolio-card d-flex flex-column justify-center align-center rounded-lg"},[t._v(" responsive ")])]),o("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"3"}},[o("div",{staticClass:"portofolio-card d-flex flex-column justify-center align-center rounded-lg"},[t._v(" lightnest ")])])],1)],1)],1)],1)},E=[],F={name:"PortofolioSection",components:{},data:function(){return{}}},L=F,$=(o("4f04"),o("71a3")),z=o("fe57"),D=Object(m["a"])(L,A,E,!1,null,"b83bbc64",null),H=D.exports;g()(D,{VCol:b["a"],VContainer:x["a"],VDivider:O["a"],VRow:C["a"],VTab:$["a"],VTabs:z["a"]});var q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"bg portofolio-section-about",attrs:{fluid:"",id:"section-about"}},[n("v-row",{staticClass:"d-flex justify-center align-center"},[n("v-col",{staticClass:"d-flex",attrs:{cols:"12",md:"8"}},[n("v-row",{staticClass:"d-flex justify-center align-center"},[n("v-col",{attrs:{cols:"12",md:"9"}},[n("P",{staticClass:"portofolio-about-title text-uppercase font-weight-black text-h4"},[t._v("about")]),n("v-divider",{attrs:{dark:""}}),n("p",{staticClass:"portofolio-about-descript mt-4"},[t._v(" Hi my name is "),n("b",{staticClass:"text-uppercase"},[t._v("Jun")]),t._v(", I'm a Junior Web Programmer who just entered the world of work, so I still don't have much experience. I usually create a website using the "),n("b",{staticClass:"text-uppercase"},[t._v("Laravel")]),t._v(" framework and "),n("b",{staticClass:"text-uppercase"},[t._v("vue js")]),t._v(". Currently I want to try to become a "),n("b",{staticClass:"text-uppercase"},[t._v("freelancer")]),t._v(" Web Programmer, but if someone asks me to join a team or company I will definitely be very happy hehe. . . . "),n("v-icon",{attrs:{color:"white"}},[t._v("mdi-emoticon-wink-outline")]),n("br"),t._v("If anyone is interested please "),n("b",{staticClass:"text-uppercase"},[t._v("contact")]),t._v(" me. ")],1)],1)],1)],1),n("v-col",{attrs:{cols:"12",md:"3"}},[n("v-row",{staticClass:"d-flex justify-start"},[n("v-col",{attrs:{cols:"12",md:"9"}},[n("div",{staticClass:"flex-row d-md-flex",attrs:{align:"center"}},[n("v-btn",{staticClass:"ma-2",attrs:{"x-large":"",outlined:"",color:"white"},on:{click:function(e){return t.$vuetify.goTo(t.linkContact,t.options)}}},[n("b",[t._v("contact me !")])])],1)])],1)],1)],1),n("v-row",{staticClass:"d-flex justify-center"},t._l(t.dataImg,(function(t,e){return n("v-col",{key:e,attrs:{cols:"12",md:"2"}},[n("v-img",{staticClass:"my-3",attrs:{src:o("e854")("./"+t.src),contain:"",height:"100"}})],1)})),1)],1)},N=[],B={name:"AbouttSection",components:{},computed:{options:function(){return{duration:this.duration,offset:this.offset,easing:this.easing}}},data:function(){return{duration:1e3,offset:50,easing:"easeInOutCubic",linkContact:"#section-contact",dataImg:[{title:"",src:"laravel-transparent.png"},{title:"",src:"logo-vuejs-min.png"},{title:"",src:"bootstrap.png"},{title:"",src:"elemen-io.png"},{title:"",src:"vuetify.png"}]}}},M=B,R=(o("0138"),Object(m["a"])(M,q,N,!1,null,"63a62004",null)),W=R.exports;g()(R,{VBtn:h["a"],VCol:b["a"],VContainer:x["a"],VDivider:O["a"],VIcon:P["a"],VImg:y["a"],VRow:C["a"]});var J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{"min-height":"80vh","background-color":"white"},attrs:{fluid:"",id:"section-contact"}},[n("v-row",{staticClass:"d-flex"},[n("v-col",{staticClass:"d-flex flex-column",attrs:{cols:"12",md:"6"}},[n("v-row",{staticClass:"d-flex justify-end"},[n("v-col",{staticStyle:{"background-color":""},attrs:{cols:"12",md:"9"}},[n("P",{staticClass:"text-uppercase font-weight-black text-h4"},[t._v("contact")]),n("v-divider",{}),n("v-row",{staticClass:"mt-4"},[n("v-col",{staticClass:"d-flex align-center my-4",staticStyle:{"background-color":"#f2f2f2","border-radius":"6px"},attrs:{cols:"12"}},[n("v-col",{attrs:{cols:"2"}},[n("v-icon",{staticClass:"mb-5",staticStyle:{"font-size":"3em"}},[t._v("mdi-map-marker")])],1),n("v-col",{attrs:{cols:"10"}},[n("span",{staticStyle:{"font-size":"1.3em","font-weight":"bold",color:"#757575"}},[t._v("Renon, Denpasar - Bali - Indonesia")])])],1),n("v-col",{staticClass:"d-flex align-center my-4",staticStyle:{"background-color":"#f2f2f2","border-radius":"6px"},attrs:{cols:"12"}},[n("v-col",{attrs:{cols:"2"}},[n("v-icon",{staticClass:"mb-5",staticStyle:{"font-size":"3em"}},[t._v("mdi-email")])],1),n("v-col",{attrs:{cols:"10"}},[n("span",{staticStyle:{"font-size":"1.3em","font-weight":"bold",color:"#757575"}},[t._v("jprawita@gmail.com")])])],1)],1)],1)],1)],1),n("v-col",{staticClass:"d-flex flex-column",attrs:{cols:"12",md:"1"}}),n("v-col",{attrs:{cols:"12",md:"5"}},[n("v-row",{staticClass:"d-flex justify-start"},[n("v-col",{attrs:{cols:"12",md:"9"}},[n("v-img",{staticClass:"my-3",attrs:{src:o("117b"),contain:"",height:""}})],1)],1)],1)],1)],1)},Y=[],U={name:"ContactSection",components:{},data:function(){return{form:{name:"",email:"",subject:"",message:""}}}},Q=U,G=Object(m["a"])(Q,J,Y,!1,null,"1e0b6baf",null),K=G.exports;g()(G,{VCol:b["a"],VContainer:x["a"],VDivider:O["a"],VIcon:P["a"],VImg:y["a"],VRow:C["a"]});var X=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-footer",{staticClass:"d-flex flex-column justify-center footer-section",attrs:{color:"#333333"}},[o("p",{staticStyle:{"word-spacing":"0.4em",color:"white","text-align":"center"}},[t._v(" Copyright © "+t._s((new Date).getFullYear())+" Portofolio - JProject ")]),o("div",{},t._l(t.icons,(function(e){return o("v-btn",{key:e,staticClass:"mx-4 white--text",attrs:{icon:""}},[o("v-icon",{attrs:{size:"24px"}},[t._v(t._s(e))])],1)})),1)])},Z=[],tt={name:"FooterSection",components:{},data:function(){return{icons:["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"]}}},et=tt,ot=(o("73de"),o("553a")),nt=Object(m["a"])(et,X,Z,!1,null,"301ef5a0",null),at=nt.exports;g()(nt,{VBtn:h["a"],VFooter:ot["a"],VIcon:P["a"]});var st={name:"App",components:{HeroSection:_,ServiceSection:T,PortofolioSection:H,AboutSection:W,ContactSection:K,FooterSection:at},created:function(){},computed:{options:function(){return{duration:this.duration,offset:this.offset,easing:this.easing}}},destroyed:function(){},watch:{offsetTop:function(t){this.appColor=t?"#272727":"transparent",this.appFontColor=t?"white":"#222222",this.appFontSize=t?"2em":"3em"}},data:function(){return{offsetTop:0,appColor:"transparent",appFontColor:"#222222",appFontSize:"3em",drawer:!1,items:[{title:"Home",icon:"mdi-home",link:"#section-home",color:"#febd01"},{title:"Service",icon:"mdi-play",link:"#section-service",color:"#febd01"},{title:"Portofolio",icon:"mdi-gamepad-square",link:"#section-portofolio",color:"#febd01"},{title:"About",icon:"mdi-alarm-bell",link:"#section-about",color:"#febd01"},{title:"Contact",icon:"mdi-rocket-launch",link:"#section-contact",color:"#febd01"}],duration:1e3,offset:50,easing:"easeInOutCubic"}},methods:{onScroll:function(t){if("undefined"!==typeof window){var e=window.pageYOffset||t.target.scrollTop||0;this.offsetTop=e>100}}}},it=st,rt=o("7496"),ct=o("40dc"),lt=o("5bc1"),ut=o("8860"),ft=o("da13"),dt=o("1800"),pt=o("5d23"),mt=o("f6c4"),vt=o("f774"),gt=o("2fa4"),ht=o("2a7f"),bt=o("269a"),xt=o.n(bt),yt=o("f977"),Ct=Object(m["a"])(it,c,l,!1,null,null,null),wt=Ct.exports;g()(Ct,{VApp:rt["a"],VAppBar:ct["a"],VAppBarNavIcon:lt["a"],VBtn:h["a"],VIcon:P["a"],VList:ut["a"],VListItem:ft["a"],VListItemAction:dt["a"],VListItemContent:pt["a"],VListItemTitle:pt["b"],VMain:mt["a"],VNavigationDrawer:vt["a"],VSpacer:gt["a"],VToolbarItems:ht["a"],VToolbarTitle:ht["b"]}),xt()(Ct,{Scroll:yt["b"]});var _t=o("9483");Object(_t["a"])("".concat("/portofolio/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var kt=o("8c4f"),jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:o("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},St=[],Vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{staticClass:"text-center"},[n("v-col",{attrs:{cols:"12"}},[n("v-img",{staticClass:"my-3",attrs:{src:o("9b19"),contain:"",height:"200"}})],1),n("v-col",{staticClass:"mb-4"},[n("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),n("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),n("br"),t._v("please join our online "),n("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),n("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,o){return n("a",{key:o,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),n("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,o){return n("a",{key:o,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),n("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,o){return n("a",{key:o,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},Ot=[],Pt={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},It=Pt,Tt=Object(m["a"])(It,Vt,Ot,!1,null,null,null),At=Tt.exports;g()(Tt,{VCol:b["a"],VContainer:x["a"],VImg:y["a"],VRow:C["a"]});var Et={name:"Home",components:{HelloWorld:At}},Ft=Et,Lt=Object(m["a"])(Ft,jt,St,!1,null,null,null),$t=Lt.exports;n["a"].use(kt["a"]);var zt=[{path:"/",name:"Home",component:$t},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],Dt=new kt["a"]({mode:"history",base:"/portofolio/",routes:zt}),Ht=Dt,qt=o("2f62"),Nt={todos:[{id:1,title:"Todo One"},{id:2,title:"Todo Two"}]},Bt={allTodos:function(t){return t.todos}},Mt={},Rt={},Wt={state:Nt,getters:Bt,actions:Mt,mutations:Rt};n["a"].use(qt["a"]);var Jt=new qt["a"].Store({state:{},mutations:{},actions:{},modules:{todos:Wt}}),Yt=o("f309");n["a"].use(Yt["a"]);var Ut=new Yt["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:Ht,store:Jt,vuetify:Ut,render:function(t){return t(wt)}}).$mount("#app")},6436:function(t,e,o){t.exports=o.p+"img/undraw_programming_2svr.d5002b8e.svg"},"681a":function(t,e,o){t.exports=o.p+"img/logo-vuejs-min.08f0c81f.png"},"69fc":function(t,e,o){t.exports=o.p+"img/vuetify.70e79872.png"},"73de":function(t,e,o){"use strict";var n=o("45e3"),a=o.n(n);a.a},9067:function(t,e,o){t.exports=o.p+"img/bootstrap.7321a5c4.png"},"9b19":function(t,e,o){t.exports=o.p+"img/logo.63a7d78d.svg"},b7e0:function(t,e,o){},c8f2:function(t,e,o){},cf05:function(t,e,o){t.exports=o.p+"img/logo.82b9c7a5.png"},d3b4:function(t,e,o){"use strict";var n=o("c8f2"),a=o.n(n);a.a},e854:function(t,e,o){var n={"./bootstrap.png":"9067","./elemen-io.png":"01c6","./laravel-transparent.png":"4852","./logo-vuejs-min.png":"681a","./vuetify.png":"69fc"};function a(t){var e=s(t);return o(e)}function s(t){if(!o.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=s,t.exports=a,a.id="e854"},ec38:function(t,e,o){},eeb8:function(t,e,o){}});
//# sourceMappingURL=app.4e9848ea.js.map