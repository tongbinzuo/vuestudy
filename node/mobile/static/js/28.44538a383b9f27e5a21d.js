webpackJsonp([28],{FV84:function(t,e){},IsJl:function(t,e,c){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={render:function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[c("div",{staticClass:"router-view-container"},[c("router-view")],1),t._v(" "),c("div",{attrs:{id:"switch-view"}},[c("div",{staticClass:"switch-view-btn f_10",class:[t.collectionTab]},[c("div",{on:{click:t.goToCollection}},[c("p",{staticClass:"book-store-icon"}),t._v(" "),c("p",[t._v("\n          书架\n        ")])])]),t._v(" "),c("div",{staticClass:"switch-view-btn f_10",class:[t.popularTab]},[c("div",{on:{click:t.goToPopular}},[c("p",{staticClass:"book-collection-icon"}),t._v(" "),c("p",[t._v("\n          书城\n        ")])])])])])},staticRenderFns:[]};var i=c("VU/8")({data:function(){return{selectTab:1}},watch:{$route:function(t){"/campus/collection"===t.path?this.selectTab=0:this.selectTab=1}},mounted:function(){"/campus/collection"===this.$route.path?this.selectTab=0:this.selectTab=1},methods:{goToCollection:function(){this.$router.replace("/campus/collection")},goToPopular:function(){this.$router.replace("/campus/popular")}},computed:{collectionTab:function(){return 0==this.selectTab?"switch-view-btn-selected":""},popularTab:function(){return 0==this.selectTab?"":"switch-view-btn-selected"}}},o,!1,function(t){c("FV84")},"data-v-3133b084",null);e.default=i.exports}});