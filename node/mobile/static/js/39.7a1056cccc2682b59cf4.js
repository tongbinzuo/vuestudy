webpackJsonp([39],{EGrX:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=!1,r="ontouchstart"in window,u={name:"vue-range",props:{min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},disabled:{type:Boolean,default:!1},value:{type:Number},barHeight:{type:Number,default:3},endFunc:{type:Function,default:function(){}}},computed:{progress:function(){var e=this.value;return void 0===e||null==e?0:e<=this.min?0:Math.floor((e-this.min)/(this.max-this.min)*100)}},mounted:function(){var e,t,n,u,i=this,s=this,d=this.$refs,o=d.content,c=d.handle,l={};t={start:function(){if(!i.disabled){var e,t,n=(e=o.getBoundingClientRect(),{left:(t=c.getBoundingClientRect()).left-e.left,top:t.top-e.top});l={handleStartLeft:n.left,handleStartTop:n.top}}},drag:function(e){if(!i.disabled){var t=o.getBoundingClientRect(),n=e.pageX-t.left-l.handleStartLeft,a=Math.ceil((i.max-i.min)/i.step),r=(l.handleStartLeft+n-(l.handleStartLeft+n)%(t.width/a))/t.width;r<0?r=0:r>1&&(r=1),i.$emit("input",Math.round(i.min+r*(i.max-i.min)))}},end:function(){i.disabled||(l={},"function"==typeof s.endFunc&&s.endFunc())}},n=function(e){t.drag&&t.drag(r?e.changedTouches[0]||e.touches[0]:e)},u=function e(u){r||(document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",e)),document.onselectstart=null,document.ondragstart=null,a=!1,t.end&&t.end(r?u.changedTouches[0]||u.touches[0]:u)},(e=c).addEventListener(r?"touchstart":"mousedown",function(e){a||(e.preventDefault(),document.onselectstart=function(){return!1},document.ondragstart=function(){return!1},r||(document.addEventListener("mousemove",n),document.addEventListener("mouseup",u)),a=!0,t.start&&t.start(r?e.changedTouches[0]||e.touches[0]:e))}),r&&(e.addEventListener("touchmove",n),e.addEventListener("touchend",u),e.addEventListener("touchcancel",u))}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vue-range"},[e._t("start"),e._v(" "),n("div",{ref:"content",staticClass:"vue-range-content"},[n("div",{staticClass:"vue-range-railway",style:{"border-top-width":e.barHeight+"px"}}),e._v(" "),n("div",{staticClass:"vue-range-bar-bg",style:{height:e.barHeight+"px"}}),e._v(" "),n("div",{staticClass:"vue-range-bar",style:{width:e.progress+"%",height:e.barHeight+"px"}}),e._v(" "),n("div",{ref:"handle",staticClass:"vue-range-handle",style:{left:e.progress+"%"}})]),e._v(" "),e._t("end")],2)},staticRenderFns:[]};var s=n("VU/8")(u,i,!1,function(e){n("PD8N")},null,null);t.default=s.exports},PD8N:function(e,t){}});