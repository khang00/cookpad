(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{376:function(e,t,o){var content=o(388);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(11).default)("52ae349a",content,!0,{sourceMap:!1})},378:function(e,t,o){var content=o(390);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(11).default)("41cff9c4",content,!0,{sourceMap:!1})},387:function(e,t,o){"use strict";var n=o(376);o.n(n).a},388:function(e,t,o){(t=o(10)(!1)).push([e.i,".user-editor[data-v-034b2c9b]{display:flex;width:100%;height:80vh}.user-editor .avt-editor[data-v-034b2c9b]{width:66.6666666667%}.user-editor .avt-editor .image-viewer[data-v-034b2c9b]{display:grid;height:70%;grid-template-columns:1fr;justify-items:center}.user-editor .info-editor[data-v-034b2c9b]{width:33.3333333333%}.user-editor .info-editor .form[data-v-034b2c9b]{width:100%}",""]),e.exports=t},389:function(e,t,o){"use strict";var n=o(378);o.n(n).a},390:function(e,t,o){(t=o(10)(!1)).push([e.i,".intro-view[data-v-d77e9460]{padding:3vh 0;display:flex;border-style:solid none!important;border-bottom:2px #e1e1e1}.intro-view .avatar[data-v-d77e9460]{margin:0 4.5vw}.intro-view .public-info[data-v-d77e9460]{display:grid;grid-template-columns:1fr 1fr 1fr}.intro-view .public-info .displayName[data-v-d77e9460]{order:1;grid-column:1/span 3;align-self:start;font-family:Roboto;font-size:28px;font-weight:300}.intro-view .public-info .posts[data-v-d77e9460]{align-self:start;order:2}.intro-view .public-info .followers[data-v-d77e9460]{align-self:start;order:3}.intro-view .public-info .followings[data-v-d77e9460]{align-self:start;order:4}.intro-view .public-info .bio[data-v-d77e9460]{word-wrap:break-word;overflow:hidden;align-self:start;order:5;grid-column:1/span 3}.intro-view .public-info .edit[data-v-d77e9460]{align-self:start;grid-column:1/span 3;order:6}.intro-view .filter[data-v-d77e9460]{display:none}",""]),e.exports=t},393:function(e,t,o){"use strict";o(14),o(12),o(8),o(5),o(13);var n=o(3),r=(o(202),{name:"UserInfoEditor",data:function(){return{newInfo:{displayName:"",bio:"",phone:""},errorMessages:"",newAvatar:null,loadingAvt:!1,loadingInfo:!1,infoUpdate:!1,avtUpdate:!1}},computed:{userInfo:function(){return this.$store.getters["userInfo/getInfo"]},displayImage:function(){return URL.createObjectURL(this.newAvatar[0])}},methods:{updateInfo:function(){var e=this,t={};this.loadingInfo=!0,this.userInfo.displayName!==this.newInfo.displayName&&""!==this.newInfo.displayName&&(t.displayName=this.newInfo.displayName),this.userInfo.phone!==this.newInfo.phone&&""!==this.newInfo.phone&&(t.phone=this.newInfo.phone),this.userInfo.bio!==this.newInfo.bio&&""!==this.newInfo.bio&&(t.bio=this.newInfo.bio),this.$store.dispatch("userInfo/updateInfo",{info:t}).then((function(){e.loadingInfo=!1,e.infoUpdate=!0}))},updateAvatar:function(){var e=this;this.loadingAvt=!0,this.$store.dispatch("userInfo/uploadAvt",this.newAvatar[0]).then((function(){e.loadingAvt=!1,e.avtUpdate=!0}))},phoneValidator:function(){return-1===this.newInfo.phone.search(/[^0-9]+/gi)||"This field must not contain characters"},bioValidator:function(){return this.newInfo.bio.length<100||"bio must be less than 100 words"}}}),l=(o(387),o(48)),d=o(92),c=o.n(d),f=o(360),v=o(375),h=o(439),w=o(368),m=o(440),I=o(418),y=o(121),_=o(379),x=o(419),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"user-editor"},[o("div",{staticClass:"avt-editor mr-3"},[o("v-card-title",[e._v("Change Your Avatar")]),e._v(" "),o("v-card-actions",[o("v-file-input",{attrs:{color:"yellow darken-3",counter:"",label:"Image input",accept:"image/*",multiple:"",placeholder:"Select your new avatar","prepend-icon":"fas fa-camera",outlined:"",success:e.avtUpdate,clearable:!1,"show-size":1e3},scopedSlots:e._u([{key:"selection",fn:function(t){var n=t.index,text=t.text;return[n<2?o("v-chip",{attrs:{color:"yellow darken-3",dark:"",label:"",small:""}},[e._v("\n            "+e._s(text)+"\n          ")]):2===n?o("span",{staticClass:"overline grey--text text--darken-3 mx-2"},[e._v("\n            +"+e._s(e.newAvatar.length-2)+" File(s)\n          ")]):e._e()]}}]),model:{value:e.newAvatar,callback:function(t){e.newAvatar=t},expression:"newAvatar"}})],1),e._v(" "),e.newAvatar?o("v-card-actions",{staticClass:"image-viewer"},[o("v-img",{attrs:{width:"40%","aspect-ratio":1,src:e.displayImage,contain:""}}),e._v(" "),o("v-btn",{staticClass:"mt-6 ml-6 white--text",attrs:{color:"yellow darken-3",width:"90%",loading:e.loadingAvt},on:{click:function(t){return e.updateAvatar()}}},[e._v("\n        Upload Image\n      ")])],1):e._e()],1),e._v(" "),o("v-divider",{attrs:{vertical:"",inset:""}}),e._v(" "),o("div",{staticClass:"info-editor mr-3 ml-3"},[o("v-card-title",[e._v("Change Your Information")]),e._v(" "),e.userInfo?o("v-card-actions",[o("v-form",{staticClass:"form"},[o("v-text-field",{attrs:{color:"yellow darken-3",label:"Your Name",placeholder:e.userInfo.displayName,outlined:""},model:{value:e.newInfo.displayName,callback:function(t){e.$set(e.newInfo,"displayName",t)},expression:"newInfo.displayName"}}),e._v(" "),o("v-text-field",{attrs:{rules:[e.phoneValidator],"error-messages":e.errorMessages,color:"yellow darken-3",label:"Your Phone",placeholder:e.userInfo.phone,outlined:""},model:{value:e.newInfo.phone,callback:function(t){e.$set(e.newInfo,"phone",t)},expression:"newInfo.phone"}}),e._v(" "),o("v-textarea",{attrs:{color:"yellow darken-3",label:"Your Bio","error-messages":e.errorMessages,rules:[e.bioValidator],placeholder:e.userInfo.bio,"auto-grow":!1,counter:"100",outlined:""},model:{value:e.newInfo.bio,callback:function(t){e.$set(e.newInfo,"bio",t)},expression:"newInfo.bio"}}),e._v(" "),o("v-btn",{staticClass:"white--text",attrs:{loading:e.loadingInfo,color:"yellow darken-3",block:""},on:{click:e.updateInfo}},[e._v("Save")])],1)],1):e._e()],1)],1)}),[],!1,null,"034b2c9b",null),k=component.exports;function O(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function C(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}c()(component,{VBtn:f.a,VCardActions:v.a,VCardTitle:v.c,VChip:h.a,VDivider:w.a,VFileInput:m.a,VForm:I.a,VImg:y.a,VTextField:_.a,VTextarea:x.a});var V={name:"UserInfo",components:{"info-editor":k},props:{userInfo:{type:Object,default:function(){return{}}}},data:function(){return{edit:!1,infoEdited:C({},this.userInfo)}},computed:{user:function(){return this.$store.getters["user/getUser"]},userPublicInfo:function(){var e=C({},this.userInfo);return delete e.email,delete e.phone,delete e.photoUrl,delete e.uid,e},photoUrl:function(){return this.userInfo.photoUrl}},methods:{follow:function(){}}},j=(o(389),o(137)),U=o(398),A=o(446),P=o(138),N=o(33),$=o(148),E=Object(l.a)(V,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"profile-intro"},[e.user?o("v-dialog",{attrs:{"max-width":"75vw",transition:"dialog-bottom-transition",scrollable:!0},model:{value:e.edit,callback:function(t){e.edit=t},expression:"edit"}},[o("v-card",{attrs:{width:"100%"}},[o("v-toolbar",{attrs:{dark:"",color:"yellow darken-3",flat:""}},[o("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){e.edit=!1}}},[o("v-icon",[e._v("mdi-close")])],1),e._v(" "),o("v-toolbar-title",[e._v("Edit Personal Information")])],1),e._v(" "),o("info-editor")],1)],1):e._e(),e._v(" "),o("v-card",{staticClass:"intro-view",attrs:{flat:!0,tile:!0}},[o("div",{staticClass:"filter"}),e._v(" "),o("v-avatar",{staticClass:"avatar",attrs:{size:"11vw"}},[o("v-img",{attrs:{src:e.photoUrl}})],1),e._v(" "),o("div",{staticClass:"public-info"},[e._l(e.userPublicInfo,(function(t,n){return o("div",{key:n,class:n},[o("p","followers"===n||"followings"===n||"posts"===n?[e._v("\n          "+e._s(n)+" "),o("b",[e._v(e._s(t.length))])]:[e._v(e._s(t))])])})),e._v(" "),e.user&&e.user.userId?o("v-btn",{staticClass:"edit white--text",attrs:{color:"yellow darken-3",depressed:""},on:{click:function(t){e.edit=!e.edit}}},[e._v("Edit Profile")]):o("v-btn",{staticClass:"edit white--text",attrs:{color:"yellow darken-3",depressed:""},on:{click:e.follow}},[e._v("follow")])],2)],1)],1)}),[],!1,null,"d77e9460",null);t.a=E.exports;c()(E,{VAvatar:j.a,VBtn:f.a,VCard:U.a,VDialog:A.a,VIcon:P.a,VImg:y.a,VToolbar:N.a,VToolbarTitle:$.a})},394:function(e,t,o){"use strict";var n={name:"UserPost"},r=o(48),component=Object(r.a)(n,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"post"})}),[],!1,null,"725b247d",null);t.a=component.exports},447:function(e,t,o){"use strict";o.r(t);var n=o(393),r=o(394),l={name:"Profile",components:{"user-info":n.a,"user-post":r.a},computed:{UserInfo:function(){return this.$store.getters["userInfo/getInfo"]}}},d=o(48),component=Object(d.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return this.UserInfo?t("div",{staticClass:"profile"},[t("user-info",{attrs:{"user-info":this.UserInfo}}),this._v(" "),t("user-post")],1):this._e()}),[],!1,null,"8115bc06",null);t.default=component.exports}}]);