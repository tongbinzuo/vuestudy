webpackJsonp([43],{"++Eb":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Xxa5"),i=n.n(a),s=n("exGp"),r=n.n(s),o={props:{userInfo:{type:Object,default:function(){return{}}},isOrnotShow:{type:Boolean,default:function(){return!1}},parentid:{type:String,default:function(){return"0"}}},data:function(){return{comment:"",inputFlag:this.isOrnotShow}},mounted:function(){this.isOrnotShow&&this.replyComment()},watch:{isOrnotShow:function(t){this.inputFlag=!0}},beforeDestroy:function(){this.Slide()},methods:{replyComment:function(){this.isLogin()?(this.disSlide(),this.inputFlag=!0,this.$nextTick(function(){$("#real_textarea").focus()})):this.$router.push("/login")},inputReset:function(){this.Slide(),this.comment="",this.inputFlag=!1,this.$emit("update:isOrnotShow",!1)},saveComment:function(){var t=this;return r()(i.a.mark(function e(){var n,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.bid,0!=(n=null==t.comment?"":t.comment.replace(/\s*/g,"")).length){e.next=5;break}return t.$toast("请填写内容在发布"),e.abrupt("return");case 5:a=t.parentid,t.$emit("addComment",{content:n,parentid:a}),t.inputReset();case 8:case"end":return e.stop()}},e,t)}))()},goPersonalCenter:function(){this.isLogin()?this.$router.push({name:"PersonalCenter"}):this.$router.push("/login")}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.inputFlag?t._e():n("div",{staticClass:"input_content"},[n("label",{attrs:{for:"content"}},[n("div",{staticClass:"left_img"},[t.userInfo.avatar?n("img",{staticClass:"img_wh",attrs:{src:t.userInfo.avatar},on:{click:t.goPersonalCenter}}):n("img",{staticClass:"img_wh",attrs:{src:"https://avatar.foreader.com.cn/avatar.png"},on:{click:t.goPersonalCenter}})]),t._v(" "),n("p",{staticClass:"text-third",attrs:{id:"content"},on:{click:t.replyComment}},[t._v("\n        我来说两句…(｡◕∀◕｡)\n      ")])])]),t._v(" "),t.inputFlag?n("div",{staticClass:"layer",on:{click:function(e){return e.stopPropagation(),t.inputReset(e)}}},[n("div",{staticClass:"real_comment"},[n("div",{staticClass:"real_input"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],staticClass:"real_text",attrs:{id:"real_textarea",maxLength:"100",placeholder:"我来说两句…(。◕∀◕。)"},domProps:{value:t.comment},on:{click:function(t){t.stopPropagation()},input:function(e){e.target.composing||(t.comment=e.target.value)}}}),t._v(" "),n("p",{staticClass:"f_14 c_263036_5 comment_mount"},[t._v(t._s(t.comment.length)+"/100 字")])]),t._v(" "),n("div",{staticClass:"real_btn"},[n("a",{attrs:{href:"javascript:;"},on:{click:function(e){return e.stopPropagation(),t.saveComment(e)}}},[t._v("发布")])])])]):t._e()])},staticRenderFns:[]};var u=n("VU/8")(o,c,!1,function(t){n("/sG1")},"data-v-b82a62ce",null);e.default=u.exports},"/sG1":function(t,e){}});