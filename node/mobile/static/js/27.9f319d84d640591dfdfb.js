webpackJsonp([27],{"ho/5":function(t,n){},pKia:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("Xxa5"),o=e.n(i),s=e("exGp"),a=e.n(s),r=e("Dd8w"),c=e.n(r),m=e("Au9i"),l=e("W4IK"),d=e("NYxO");e("7+uW").default.use(m.InfiniteScroll);var u={data:function(){return{offset:0,limit:10,parentId:this.$route.params.parentId,parentid:this.$route.params.parentId,bid:this.$route.params.bid,isLoad:!1,commentsFather:null,loading:!1,commentsnList:[],commentsId:"",no_data:!0,showpage:!1,showInput:!1,option:{deleteComment:function(t){},goCommentDetail:function(t){}}}},mounted:function(){this.loadMore()},components:{Loading:function(t){return e.e(33).then(function(){var n=[e("voil")];t.apply(null,n)}.bind(this)).catch(e.oe)},EmptyInterface:function(t){return e.e(34).then(function(){var n=[e("4/yX")];t.apply(null,n)}.bind(this)).catch(e.oe)},ElComments:function(t){return e.e(40).then(function(){var n=[e("6PtZ")];t.apply(null,n)}.bind(this)).catch(e.oe)},ElCommentInput:function(t){return e.e(43).then(function(){var n=[e("++Eb")];t.apply(null,n)}.bind(this)).catch(e.oe)},HeaderFix:function(t){return e.e(0).then(function(){var n=[e("plB5")];t.apply(null,n)}.bind(this)).catch(e.oe)}},computed:c()({},Object(d.c)(["userInfo"])),methods:{handleInput:function(t){this.showInput=!0,this.parentid=t.id.toString()},loadMore:function(){var t=this;this.loading=!0,this.isLoad=!0,setTimeout(function(){t.getComments(t.commentsnList.length)},200)},getComments:function(t){var n=this;return a()(o.a.mark(function e(){var i,s;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.getCommentDetail(n.bid,n.parentId,t,n.limit);case 2:i=e.sent,n.commentsFather=i,n.isLoad=!1,n.showpage=!0,n.no_data=!0;try{if(i&&i.children&&i.children!=[]&&i.children.length>0){for(s=0;s<i.children.length;s++)n.commentsnList.push(i.children[s]);n.loading=!1}else n.commentsnList.length==i.replies&&n.commentsnList.length>n.limit?n.$toast("暂无更多数据"):0==n.commentsnList.length&&(n.no_data=!1)}catch(t){n.$toast("出错了")}case 8:case"end":return e.stop()}},e,n)}))()},addComment:function(t){var n=this;return a()(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.showpage=!1,e.next=3,l.a.addComment(n.bid,t.content,t.parentid);case 3:n.commentsnList.length=0,setTimeout(function(){n.getComments(0)},200);case 5:case"end":return e.stop()}},e,n)}))()}}},h={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"CommentDetail"}},[t.showpage?e("div",[e("div",{staticClass:"comments_list"},[t.commentsFather?e("ElComments",{attrs:{comments:[t.commentsFather],isDetail:!0,option:t.option}}):e("div",{staticClass:"comment-delete"},[e("p",[t._v("此条评论被删除")])])],1),t._v(" "),e("div",{staticClass:"comments_son"},[e("div",{staticClass:"son_main"},[t.no_data?e("div",[t._m(0),t._v(" "),e("div",{staticClass:"comments_list "},[e("ElComments",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],attrs:{comments:t.commentsnList,needHeader:!1,"infinite-scroll-disabled":"loading","infinite-scroll-distance":"10"},scopedSlots:t._u([{key:"comments",fn:function(n){return[e("span",{staticClass:"comments_length f_12",on:{click:function(e){return t.handleInput(n.item)}}},[e("i"),t._v(" 回复")])]}}],null,!1,2271795642)})],1)]):e("div",{staticClass:"no_data"},[e("EmptyInterface")],1)])])]):t._e(),t._v(" "),e("Loading",{attrs:{showLoading:!t.showpage}}),t._v(" "),e("ElCommentInput",{attrs:{userInfo:t.userInfo,isOrnotShow:t.showInput,parentid:t.parentid},on:{addComment:t.addComment,"update:isOrnotShow":function(n){t.showInput=n},"update:is-ornot-show":function(n){t.showInput=n}}})],1)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"main_header p_lr_17"},[n("p",[this._v("全部回复")])])}]};var p=e("VU/8")(u,h,!1,function(t){e("ho/5")},"data-v-3670ca73",null);n.default=p.exports}});