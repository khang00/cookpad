(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{192:function(t,e,o){var content=o(195);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(64).default)("e46b6ba2",content,!0,{sourceMap:!1})},193:function(t,e,o){var content=o(197);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(64).default)("6759f5ab",content,!0,{sourceMap:!1})},194:function(t,e,o){"use strict";var n=o(192);o.n(n).a},195:function(t,e,o){(e=o(63)(!1)).push([t.i,".NuxtLogo{-webkit-animation:appear 1s;animation:appear 1s;margin:auto}@-webkit-keyframes appear{0%{opacity:0}to{opacity:1}}@keyframes appear{0%{opacity:0}to{opacity:1}}",""]),t.exports=e},196:function(t,e,o){"use strict";var n=o(193);o.n(n).a},197:function(t,e,o){(e=o(63)(!1)).push([t.i,".container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}",""]),t.exports=e},198:function(t,e,o){"use strict";o.r(e);o(194);var n=o(25),r={name:"Logout",data:function(){return{error:""}},computed:{isLogin:function(){return null!=this.$store.getters["user/getUser"]}},methods:{logout:function(){var t=this;this.$store.dispatch("user/logout").then((function(){t.$router.push("/")})).catch((function(e){t.error=e}))}}},l={components:{Logo:Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"NuxtLogo",attrs:{width:"245",height:"180",viewBox:"0 0 452 342",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("path",{attrs:{d:"M139 330l-1-2c-2-4-2-8-1-13H29L189 31l67 121 22-16-67-121c-1-2-9-14-22-14-6 0-15 2-22 15L5 303c-1 3-8 16-2 27 4 6 10 12 24 12h136c-14 0-21-6-24-12z",fill:"#00C58E"}}),this._v(" "),e("path",{attrs:{d:"M447 304L317 70c-2-2-9-15-22-15-6 0-15 3-22 15l-17 28v54l39-67 129 230h-49a23 23 0 0 1-2 14l-1 1c-6 11-21 12-23 12h76c3 0 17-1 24-12 3-5 5-14-2-26z",fill:"#108775"}}),this._v(" "),e("path",{attrs:{d:"M376 330v-1l1-2c1-4 2-8 1-12l-4-12-102-178-15-27h-1l-15 27-102 178-4 12a24 24 0 0 0 2 15c4 6 10 12 24 12h190c3 0 18-1 25-12zM256 152l93 163H163l93-163z",fill:"#2F495E","fill-rule":"nonzero"}})])])}),[],!1,null,null,null).exports,Logout:Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return this.isLogin?e("div",[this._v("\n  "+this._s(this.isLogin)+"\n  "),e("button",{on:{click:this.logout}},[this._v("Logout")])]):this._e()}),[],!1,null,"924ed722",null).exports},computed:{user:function(){return this.$store.getters["user/getUser"]}}},c=(o(196),Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[t.user&&!t.user.emailVerified?o("p",[t._v("Please verify your email")]):t._e(),t._v(" "),o("div",[o("logout"),t._v(" "),o("logo"),t._v(" "),o("h1",{staticClass:"title"},[t._v("\n      Cookpad\n    ")]),t._v(" "),o("h2",{staticClass:"subtitle"},[t._v("\n      A social network for food\n    ")]),t._v(" "),o("div",{staticClass:"links"},[o("a",{staticClass:"button--green",attrs:{href:"https://github.com/khang00/cookpad",target:"_blank"}},[t._v("\n        Github\n      ")]),t._v(" "),o("nuxt-link",{staticClass:"button--grey",attrs:{to:"/login"}},[t._v("\n        Login\n      ")])],1)],1)])}),[],!1,null,null,null));e.default=c.exports}}]);