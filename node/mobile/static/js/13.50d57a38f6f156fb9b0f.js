webpackJsonp([13,33],{"5qZd":function(e,t){},"7uLE":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("Xxa5"),a=n.n(r),o=n("exGp"),i=n.n(o),s=n("7+uW"),c=n("voil"),l=n("W4IK"),u=n("Au9i");s.default.use(u.InfiniteScroll);var d={data:function(){return{showLoading:!1,searchWord:this.$route.params.searchWord,searchResult:[],offset:0,limit:20,noMore:!1,loading:!1}},mounted:function(){},components:{Loading:c.default,ElVertical:function(e){return n.e(38).then(function(){var t=[n("voC4")];e.apply(null,t)}.bind(this)).catch(n.oe)}},methods:{goBookDetail:function(e){var t=e.bid?e.bid:e;this.$router.push("/book/"+t)},loadMore:function(){var e=this;return i()(a.a.mark(function t(){var n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,l.a.getSearchList(e.searchWord,e.offset,e.limit);case 3:if(n=t.sent,!e.isObjEmpty(n)){t.next=12;break}if(0!=e.searchResult.length){t.next=8;break}return e.$router.replace({path:"/search/searchEmpty/"+e.searchWord}),t.abrupt("return");case 8:return e.noMore=!0,e.loading=!0,e.showLoading=!0,t.abrupt("return");case 12:e.offset+=n.length,e.showLoading=!0,e.searchResult=e.searchResult.concat(n),e.loading=!1;case 16:case"end":return t.stop()}},t,e)}))()}}},f={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"margin-top":"0.55556rem"}},[n("div",[n("ElVertical",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.loadMore,expression:"loadMore"}],attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-distance":"10","book-list":e.searchResult},on:{"book-list-click":function(t){return e.goBookDetail(t)}}})],1),e._v(" "),n("Loading",{attrs:{showLoading:!e.showLoading}})],1)},staticRenderFns:[]},h=n("VU/8")(d,f,!1,null,null,null);t.default=h.exports},TvxE:function(e,t,n){e.exports=n.p+"static/img/fy_loading.f9e4c49.gif"},voil:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={props:{showLoading:{type:Boolean,default:!0}},data:function(){return{}}},a={render:function(){var e=this.$createElement,t=this._self._c||e;return this.showLoading?t("div",{staticClass:"loading-container"},[t("img",{attrs:{src:n("TvxE"),alt:""}})]):this._e()},staticRenderFns:[]};var o=n("VU/8")(r,a,!1,function(e){n("5qZd")},"data-v-ac3ec986",null);t.default=o.exports}});