webpackJsonp([50],{"+o20":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o={props:{homeInfo:{type:Array,required:!0,default:function(){return[]}},needSearch:{type:Boolean,default:function(){return!0}}},data:function(){return{}},methods:{goSearch:function(){this.$router.push("/search")},goCollection:function(){this.isLogin()?this.$router.push({name:"HomeCollection"}):this.$router.push("/login")},goPersonalCenter:function(){this.isLogin()?this.$router.push({name:"PersonalCenter"}):this.$router.push("/login")},goBookDetail:function(t){var n=t.bid?t.bid:t.mUrl?t.mUrl.substring(33,t.mUrl.length):t;this.$router.push("/book/"+n)},handleChange:function(){}},components:{Loading:function(t){return e.e(33).then(function(){var n=[e("voil")];t.apply(null,n)}.bind(this)).catch(e.oe)},ElTransversal:function(t){return e.e(35).then(function(){var n=[e("SZ/X")];t.apply(null,n)}.bind(this)).catch(e.oe)},ElVertical:function(t){return e.e(38).then(function(){var n=[e("voC4")];t.apply(null,n)}.bind(this)).catch(e.oe)},ElSwiper:function(t){return e.e(42).then(function(){var n=[e("ItO3")];t.apply(null,n)}.bind(this)).catch(e.oe)},ElRankingList:function(t){return e.e(48).then(function(){var n=[e("oTnu")];t.apply(null,n)}.bind(this)).catch(e.oe)},ElZoneLayout:function(t){return e.e(47).then(function(){var n=[e("jNCW")];t.apply(null,n)}.bind(this)).catch(e.oe)},ElLimitedLayout:function(t){return e.e(45).then(function(){var n=[e("qiNI")];t.apply(null,n)}.bind(this)).catch(e.oe)},ElTabsLayout:function(t){return e.e(41).then(function(){var n=[e("pZcA")];t.apply(null,n)}.bind(this)).catch(e.oe)}}},i={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.homeInfo?e("div",[e("div",{staticClass:"p_distance_tab"},[t._l(t.homeInfo,function(n,o){return[1==n.template&&n.data.length>0?[t._t("ElSwipe",[e("ElSwiper",{key:o,attrs:{booklist:n.data},on:{clickbanner:function(n){return t.goBookDetail(n)}}})],{item:n})]:t._e(),t._v(" "),3==n.template&&n.data.length>0?[t._t("HotBooksList",[e("div",{key:o},[e("p",{staticClass:"c_42424D p_header f_16 t_b"},[t._v(t._s(n.data[0].title))]),t._v(" "),e("ElTransversal",{staticClass:"p_lr_17",attrs:{"book-list":n.data[0].list},on:{"book-store-click":function(n){return t.goBookDetail(n)}}})],1),t._v(" "),e("div",{key:o+"-HotBooksList",staticClass:"p_lr_17"},[e("div",{staticClass:"hr"})])],{scope:n})]:t._e(),t._v(" "),4==n.template&&n.data.length>0?[t._t("MoreBooksList",[e("div",{key:o},[e("p",{staticClass:"c_42424D p_header f_16 t_b"},[t._v(t._s(n.data[0].title))]),t._v(" "),e("ElVertical",{attrs:{"book-list":n.data[0].list},on:{"book-list-click":function(n){return t.goBookDetail(n)}}})],1),t._v(" "),n.data[0].title.length>0?e("div",{key:o+"-MoreBooksList",staticClass:"p_lr_17"},[e("div",{staticClass:"hr"})]):t._e()],{scope:n})]:t._e(),t._v(" "),[t._t("ElMoreList",null,{scope:n})]]})],2),t._v(" "),[t._t("ElMoreLayout",null,{scope:t.homeInfo})]],2):t._e()},staticRenderFns:[]};var a=e("VU/8")(o,i,!1,function(t){e("U68W")},"data-v-cc1b535c",null);n.default=a.exports},U68W:function(t,n){}});