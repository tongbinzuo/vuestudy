webpackJsonp([48],{Mols:function(t,s){},cFI9:function(t,s){},oTnu:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("7+uW"),n=a("Au9i");e.default.component(n.Navbar.name,n.Navbar),e.default.component(n.TabItem.name,n.TabItem),e.default.component(n.TabContainer.name,n.TabContainer),e.default.component(n.TabContainerItem.name,n.TabContainerItem);var o={props:{booklist:{type:Array,required:!0,default:function(){return[]}}},data:function(){return{selected:0}},created:function(){},mounted:function(){},methods:{goBookDetail:function(t){this.$emit("el-ranking-list-click",{bid:t})}}},i={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("mt-navbar",{model:{value:t.selected,callback:function(s){t.selected=s},expression:"selected"}},t._l(t.booklist,function(s,e){return a("mt-tab-item",{key:e,attrs:{id:e}},[t._v(t._s(s.title)+"\n    ")])}),1),t._v(" "),a("mt-tab-container",{model:{value:t.selected,callback:function(s){t.selected=s},expression:"selected"}},t._l(t.booklist,function(s,e){return a("mt-tab-container-item",{key:e,attrs:{id:e}},t._l(s.list.slice(0,5),function(s,e){return a("div",{key:e,staticClass:"topchart-item"},[t._t("ElRankingItem",[0==e?a("div",{staticClass:"topFirst clearfix",on:{click:function(a){return t.goBookDetail(s.bid)}}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.poster,expression:"mItem.poster"}],staticClass:"left cover",attrs:{alt:""}}),t._v(" "),a("span",{staticClass:"top-flag top_one"},[t._v("1")]),t._v(" "),a("p",{staticClass:"font-medium color-title-black"},[t._v(t._s(s.title))]),t._v(" "),a("p",{staticClass:"font-small color-author-gray "},[a("span",{staticClass:"authors"},[t._v(t._s(s.authors[0]))]),a("span",[t._v(" | "+t._s(s.wordCount%1e4==s.wordCount?s.wordCount:(s.wordCount/1e4).toFixed(2)+"万")+"字")])]),t._v(" "),a("p",{staticClass:"font-small color-author-gray text-desc"},[t._v("\n              "+t._s(s.description.trim())+"\n            ")]),t._v(" "),a("p",{staticClass:"topFirst-footer font-least clearfix"},[a("span",[a("span",{class:{statusSerial:"0"==s.status,statusEnd:"0"!=s.status}},[t._v(t._s("0"!=s.status?"已完结":"连载中"))])]),t._v(" "),a("span",{staticClass:"right clear font-mini"},[a("span",{staticClass:"tag",class:{serial:"0"==s.status,end:"0"!=s.status}},[t._v(t._s("0"!=s.status?"完结":"连载"))]),t._v(" "),t._l(s.tags.slice(0,2),function(s,e){return a("span",{key:e,staticClass:"primary text-secondary tag"},[t._v("\n                "+t._s(s)+"\n              ")])})],2)])]):a("div",{staticClass:"topOther",on:{click:function(a){return t.goBookDetail(s.bid)}}},[a("span",{staticClass:"top-flag",class:{top_Four:e>2,top_three:2==e,top_two:1==e}},[t._v("\n            "+t._s(++e)+"\n          ")]),t._v(" "),a("span",{staticClass:"font-primary mg-left-1"},[t._v(t._s(s.title))]),t._v(" "),a("span",{staticClass:"right font-mini"},[a("span",{staticClass:"tag",class:{serial:"0"==s.status,end:"0"!=s.status}},[t._v(t._s("0"!=s.status?"完结":"连载"))]),t._v(" "),t._l(s.tags.slice(0,1),function(s,e){return a("span",{key:e,staticClass:"primary tag color-author-gray"},[t._v("\n              "+t._s(s)+"\n            ")])})],2)])],{mItem:s})],2)}),0)}),1)],1)},staticRenderFns:[]};var l=a("VU/8")(o,i,!1,function(t){a("cFI9"),a("Mols")},"data-v-327e0408",null);s.default=l.exports}});