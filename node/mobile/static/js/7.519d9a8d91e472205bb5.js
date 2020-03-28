webpackJsonp([7],{"1f+G":function(t,e,n){"use strict";(function(t){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}"undefined"!=typeof window?window:void 0!==t||"undefined"!=typeof self&&self;function o(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function i(t,e){return t(e={exports:{}},e.exports),e.exports}var a=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),i=document.createRange();i.selectNodeContents(t),o.removeAllRanges(),o.addRange(i),e=o.toString()}return e},r=i(function(t,e){(function(t,e){var n,o=(n=e)&&n.__esModule?n:{default:n};var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.resolveOptions(e),this.initSelection()}return a(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,o.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,o.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":i(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=r})(t,a)});function s(){}o(r),s.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var o=this;function i(){o.off(t,i),e.apply(n,arguments)}return i._=e,this.on(t,i,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,i=n.length;o<i;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],i=[];if(o&&e)for(var a=0,r=o.length;a<r;a++)o[a].fn!==e&&o[a].fn._!==e&&i.push(o[a]);return i.length?n[t]=i:delete n[t],this}};var c=s,u=i(function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}}),l=(u.node,u.nodeList,u.string,u.fn,9);if("undefined"!=typeof Element&&!Element.prototype.matches){var d=Element.prototype;d.matches=d.matchesSelector||d.mozMatchesSelector||d.msMatchesSelector||d.oMatchesSelector||d.webkitMatchesSelector}var f=function(t,e){for(;t&&t.nodeType!==l;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}};function v(t,e,n,o,i){var a=function(t,e,n,o){return function(n){n.delegateTarget=f(n.target,e),n.delegateTarget&&o.call(t,n)}}.apply(this,arguments);return t.addEventListener(n,a,i),{destroy:function(){t.removeEventListener(n,a,i)}}}var m=function(t,e,n,o,i){return"function"==typeof t.addEventListener?v.apply(null,arguments):"function"==typeof n?v.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return v(t,e,n,o,i)}))};var p=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!u.string(e))throw new TypeError("Second argument must be a String");if(!u.fn(n))throw new TypeError("Third argument must be a Function");if(u.node(t))return function(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}(t,e,n);if(u.nodeList(t))return function(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}(t,e,n);if(u.string(t))return function(t,e,n){return m(document.body,t,e,n)}(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")},h=o(i(function(t,e){(function(t,e,n,o){var i=s(e),a=s(n),r=s(o);function s(t){return t&&t.__esModule?t:{default:t}}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();var l=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var o=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return o.resolveOptions(n),o.listenClick(t),o}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,a.default),u(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===c(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,r.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new i.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return d("action",t)}},{key:"defaultTarget",value:function(t){var e=d("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return d("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}]),e}();function d(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}t.exports=l})(t,r,c,p)}));if(!h)throw new Error("[vue-clipboards] cannot locate Clipboard.");function b(t){return"object"===n(window.HTMLElement)?t instanceof window.HTMLElement:t&&"object"===n(t)&&1===t.nodeType&&"string"==typeof t.nodeName}e.a=function(t){t.directive("clipboard",{bind:function(t,e,o){return new Promise(function(i,a){var r,s,c,u,l,d,f,v;if(r=e.value,s={},c=null,r&&"function"==typeof r)return Promise.resolve(r()).then(function(t){try{return r=t,m.call(this)}catch(t){return a(t)}}.bind(this),a);function m(){return/(string|number)/.test(n(r))?(s.text=function(){return"".concat(r)},o.data.attrs&&o.data.attrs.model&&(c=b(o.data.attrs.model)?o.data.attrs.model:document.querySelector(o.data.attrs.model)),o.elm.offsetParent?s.container=o.elm.offsetParent:b(c)?s.container=c:s.container=t.parentElement||document.body,o.elm.$clipboards=new h(t,s),u=o.componentOptions,l=o.data,d=u?u.listeners:null,f=l?l.on:null,(v=d&&d||f&&f)&&"object"===n(v)&&Object.keys(v).length&&Object.keys(v).map(function(t){return o.elm.$clipboards.on(t,v[t].fn||v[t].fns)}),i(o.elm.$clipboards)):a(new Error("[vue-clipboards] Invalid value. Please use a valid value."))}return m.call(this)}.bind(this))},unbind:function(t){t.elm&&t.elm.$clipboards&&t.elm.$clipboards.destroy&&(t.elm.$clipboards.destroy(),delete t.elm.$clipboards)},update:function(t,e,n){e.def.unbind(n),e.def.bind(t,e,n)}})}}).call(e,n("DuR2"))},"6tl6":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABaCAMAAAAhM5CiAAAAilBMVEUAAACUve6SuvGUvPSRu/iQuPiRu/yRuvqRuvuQu/yQuvqQuvyTuvmRuvuRuvyQuvuRuvyRuvyQu/qQuvyRuvyQuvyRu/2Qu/yQuvyQuvqQuvuQu/2Ru/yQuvyQuvuRu/2Su/2Qu/qRu/2Qu/yQuvyQu/yRu/2Qu/yRu/yRu/yRu/yRu/2Ru/yQuvs44kepAAAALXRSTlMABQkMEg8YHiVXLVsVPUYbKSI1Y174T25rMzlyaEtChYMxfeBT2nfJnfG5sJB0DZGcAAADeklEQVRYw+3Y2XaiQBAG4ARRdkREDGuUEONofP/Xm+qmemPIELpv/c/czBnnO1W9QDcvzzzzzDPPmOX15VUv8D/NLaExUVgcszCrmT88HJUiWash65msMEIERdYoVXpesCCe5+UOA5XaCNZ+PDRytQGUPNTW7h8dDbzVihcoNPv7oZlkDR4rj2nhly7n2eCRqrA4qm0+dbkqhJnG8rjm6HMbG9vl3Ga70+Yu2xA8xlkWFLd1XH3O2YSMw+KcXaLNdTtSnmVxLtzuXP9Dm3MdOnqUg1ViA5ecTbhtKDjSq5sU+lxCuh0GD4fO9fW50xSX6u6Kw1uyczb/cNH1MP7hZB5qPoMicae4+Kg8U74u1RHyxkP+VlXVt/KrW1yqnMW5/KSszqpCjWfwbnJtTVuecexw3eFURHHT3+UJY1o9hHoj7k/GuDXj2Lor26bfH6Rmuwrqo6EQ9nqRh/iex1Hqj7g15dI2zr3bY1HqJo4KH4aObzJ5Lpr+fZH20WOvMBPSAwo47Pa4iPsSvTKOd0vn1lvE3ZsWe1U4MbdLObFM2JtMmdt6WbOkV9cRvY677ZZNRSz3+kIzcDi3t2V7ti4Lvv8FxzdGLi/j436fBYHHEwRZtt/X79KevbGhm+auD5FjPc3Vd6l+73/cRXl9/sTd5NErf+bq0QOqJmAGJE02YMfvg/KrknPqVPjXh04+Aj4VykLRPvLUuFAEZ3ioEMtYbDITjncrNoXJGUU58qzMzyjjI4/JGQW3mfpwNzzyqK8e0zOKOPIYn1GmuNSMsylnfOSBvE2eUa6a2qGd5GLdS1QxdSArouBTp7ar/EDmU0HeY3FQXbrudHoXOamR/6HruktVs/e2PVp3fhq1Td57Qbb/VbIs8PombkvyLhsfeUi3ZRSDRx/i8wkAy0GLUuhV7ApxTaEeAXsgZ9P3OdVIcXhNUS9R1GsBbJp8Pk0DGNRW+KQ46HV8xSNeCmAL5HyIFZXpmWjKFW+49wzeuUjTsox+k7JMC8Bc0OQLKJYHngMgiOeiAHQmRXE++34y1rA89AAEEcz5JBCXYqTTlTX+tEBBIu7AnM8O4gBGNV6c8KBAOww3QII5ny0ELMCYBpzwKEhFyGY+IcS2BQYa4wQIIpi/C36LsiSN14cgkEsifSSTMFogksvyikFGrlA/zBJB3/hLpQBNPps+Y56/MpDwOvmjAN0AAAAASUVORK5CYII="},HYAD:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAhFBMVEUAAAAnMDcnMDYmMDgmMTh7e3soMzgmMDYnMTcmMTYnMTcqMzwvOTkmMDYmMTYmMDYmMTcnMDYnMTcnMjcoMTkoNTs1QEVASUn///8nMDcnNzcsOz8nMDYnMTcnMDcoMTgmMDcmMTYmMTYnMDcnMTcrMTYmMzkpMz0sNz0nMDcnMTgmMDafZZ9eAAAAK3RSTlMA3vpkSQJA61b2fB4N8eLZ07phUDUlCQUBsCARqZ+XPsvBtXNsLygZF4po+uyAGQAAAS1JREFUWMPt18lug0AMBmCTBIY1kIUlJCVp9tbv/34VZgqIsRRN1FPl7+Tf+ufAyQKE+L9if173IfLndrwStHyJGPg6XGdoK4ugc25TUtB8n6G9HXQSSlua5/iGBDoZpQfNG3xDCjA8boCUGdpbg+YdzldXz/smc+ysfBBCiD9SbhdxH4qt1ztGYO4J23meEJWnw0bh2GrP7vnOoU2qpDkKJq0PYPZ8B9ToiqxxQgGz5zuQUqpp9nHCAWbPd+B7dOTi5aQUcnujo61P2Veh53wV4GAZuuwejQ7HHZh7EwghBDzyCn7Fx4Wde9U/3SGmNx38BG197qHTtCktaa4DtGNekdura/H6ijiUctt/EfOKhPShFc2Fg/Yu0HFDlRyeOtQ7NbOTXiroVSCE4PwAUuGXgCLAvigAAAAASUVORK5CYII="},IsqW:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqBAMAAAA37dRoAAAAKlBMVEUAAAAkLjUxPkcmMDdlZWUmMDYnMTYmMDYyOD0mMTckLzcoLzYrMzwsNTXKymqBAAAADnRSTlMATQU5AkIzPQovRiYeHXpYA70AAACdSURBVCjPtdIxCsJAFEXRQSQoYnEZVBQLQcRacQEBwT5WlgbcgKksFbE3mxCX6e/fF4ZAXnk5xcwwodV1yptTB8zuWjP4ah3i4hpOWvswSsaZ4YXmEo5aDzBR3DVcKd77ePMPRx/vFC8N5/rKVxc/YC6xV8Bb6gumiXQFYz2B0XM6vUhdG83de3k0Nqe2GrZBVhDd31AF3fNjtP39AHxQGcFSS77vAAAAAElFTkSuQmCC"},MpIv:function(t,e){},PxJY:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAkCAMAAACpD3pbAAABgFBMVEUAAAA8tqY9uag8uag8uKc8uadCu6s8uag8uag8uKc9uac9uag9uag8uKc8uac8uKc8t6c/vas8uac8uKc8uKg8uag9uag8uahM0LSE08hJva1Mvq48uKg8uag8uac8uKg8uKc8uac8uac8uac7uKg9uKY7uKg8uKc7uaZLvq48uKc8uadQwLFBu6pDu6s8uKg8uac8uag7uqc8uahiwro6uac8t6g9vahDvK5KxrVhxrhmyLuL1cuA0sdZw7Q/uak/uqny+vlRwbJDu6o8uajJ6+ZGvKw8uKg7uaY8tqY9uqk+vao9uqk8uKZDvK6W2dBEvKu15d9tyr6k39Zpybthxrhvy79syr1Du6r0+vlAuql70MNYw7RPv69dxbZKva7X8OzV7+y52uVUwbNNv7B1z8I9t6ei3dVKvq5nxbyE0Mc8t6VAvK7///88uKf0/PuY2tHm9/Tb8++45uD9//7T8Ox+0cX6/v3P7unC6eSy5N2o4Nig3dR3zsJVwrNyzMAMcSR0AAAAbXRSTlMATfz5ePX9me6ff+fXx11TUBzx682xq28F/vXp4d7a0sK+ua6UknRrY/39+/r49KWFgmdmXVhWIRcK/v38+/jj393Tz7SbmoyKYEE3MiwT+Pf29vXw7+rq4d/TzcLCwLOtq6ekmI6OeXFqaGZIwJzdHwAAAiBJREFUOMt1k2dX4kAUQDOTEDooRXpvsgICIsXe26rbe+/1Pbpd96/vJECCivfLO8k9Myd35oTrcShEgmb9fW40RU1IW0hENebxEbIateXJj9VXH3+Zbbc3IDqHhZDfm5urn0jMXrlhZ6ieyJQ+l4ghK265h22F15IBJSdtnKQNwzruV2zxZaYLcLEyrB2xgY3TozpAc+7h4ZAO9veeXRfbANAW10zRIW12ylbIzTUB6kfiFpnUuFQdNzE59oE2OgDddC7Fnnb4A0UfoED++DInAJ0LasQJwoia1Dhn6Ksof9N8zjCpuScwXTZqFT3uFc8A4ExcZ2f3He1l5l08UfyaB6C+SNFMGGGMSEOvqw70z3Srm1lOGjEh9dlxR/Kh8EC73yN1WkmSamakQrTtsrFrE5Tt/04Z2JtpDI6xEcMQYeT5fcULOguLN8lZYwGUr3AjUFN82MFe9LNSPO9iw+rXq3U66ei30T7Lhhb9Vqluak/xVl46zkivzoEbrG3Fa+IU9AG2otyrs9jQMJ194sFxRdcC7OoGdXnUSdfrLarL99W6VMyHWAd4Gle1Wifwzy4RWwCeCdWqdb5FgFYDABbe9o1at72M2IYel29UKde5CvTBFTb6+uobd42E/fUCHJ/Xe7ZFq9x1tPRxBwb8e8fdJGn0PTqWZXPeO+J/rRmMWc/56WmDoqbCjWLvy4ulpecUMcLdTQGRd9+t3RN+C/cfpP9xCjF4ozUAAAAASUVORK5CYII="},qNnI:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABaCAMAAAAhM5CiAAAAjVBMVEUAAADYlpbgkpLkj4/ijY3jjo7kjY3ljIzljY3mjIzkjY3ljY3mjY3mjY3mjY3mjIzmjIzmjIzmjY3njY3mjIzljIzljY3njIzmjY3mjY3njIznjY3mjY3mjIznjY3mjY3njY3njY3njIznjIznjIznjIznjIznjIznjIznjIznjY3ojIznjIzmjIzmjIxkf6OyAAAALnRSTlMAAwYKDhEVGSQdIStTT1wyQVco5WNKNek7L0U+OGhuYMWRvnXX25jO84p6fq2l7596twAABFtJREFUWMPt2Ht7mjAUBvA5ud8EtAiiIlpv2PL9P97eHLMEsYmV+d/67pl7ltP8eggUUn795Cc/+Uk/o05U46OnKRnF8ABMn+9pv2X4iBjujz/UfvejGUa+o+Wf09P+ozL7xDg+HE+nzc7ogDrtOqlur5k3xngsqPE4P/LCtKThR9x12gETPpqazT1mYxGrbqlw3rftKZbeAy3CpMhEEoCnncHjQ2m3GcatTzRuU99ajjQD02rrmjOEs0nJprBnfBzf52IIT6uVmObZPMmpbQ8MiOdtuy9tnlXbbgzhqTRghlm17bvt/k0Ir7btDNp74fLYCVbVVHqjjmblOMDQEwng7fw90zzEcdjnB9bAMs0vj3ckNSyzbbMTUOdOmqYOy7oFhbUvHQyxTGZb/HdiS68LXjGhuV4BD8JHfbk0u+Z8mLYsm8P5fK4Pn1vQWMbYc23LwgEL716zmIYm1gB1eb/4qQPP7ntSM5x6S9mwdL35Z93U+65GX7Kl1M6NJzR3quxliWxV1akrvI5mrNWHViLgFFmb0hOaeVZzMbJRls+WQZ7g6CxouDdEx9H1wjm4TLProVxtMw8McVxzNVyIaDiXvFvOU3P7IAwCDedJjq+c7To6LtByjmvz1fslmnMOQ7mDw9uTnOulei7RcKnndjk6Vn845+NorWc45AF3191y8RYmUbVarde7a9br9Wo1q6qIcRXGWaFpmgvSNKy+qqIkLH3Hu+cmeUzeDCBytWZVFCUBJWG1myKz3uJ8wjjrnltMkXk/GAvCMDgqajNwve4szrWKgAunitqKce4X3S2VXPiYu7vuioHcEpy87kbE2eCyQdxsWfDLWNwCOBcP4jJw9g1ngHP8wZzDOHGDEqd2ICeuE8GZei4INJy8TsCJUwuuVHKIluPd0XP2MZe8nEu0nPUVFys55DE3+i4XPc3Zg7nsjhs/6i5Kopdy0TOc8XpO9zNbPeLs/5171amg2/GLOS/V/lSouYmCK/Iht4Bo4nt9ziAuOz5/v5vnRSoeFYIz6dkTbk6KXYCKe68y4ow+R/uAeBEGtOtB5IYnpMhND9UqVPiGxxVPHgSceHBjE0UeZsFiWALsjQIRJVEjbVHioU1nQnIjzrH2ysUbzULIImyxWMT4CxEdyhpptH3qcPJJi/bgxQRSuBXHJRLHBIoaSnGZY+X+7ttHkuPtMS/HPBwaJGoLVJ4vkTwnUtZQWmaFbK7LoT3uZcsc0zAPH0Rl2YSSZUSKGioTpqE5eazg5O9R8HyAGXphWRJVFD6lKCaihBphKTTRXJcjj0CaSClIwgsGSpqSKWo+w7jW5aTHGvQwETPJIckTIVTUUJFvAyRH7QkPHbo0lTPsHQyPSxVZcxnW18AJDyBEimQsHllCeIUw0gQnPQKRDmBaZifWTQkBpnwvA5BEmDxGP/0aYVKTHoFcvKpjZWRN8cpyJEEy8Yc+8M9txqKmfaEKUJL96ApS64MDA0udf4P+AGfx7mv3Nz4UAAAAAElFTkSuQmCC"},rJgw:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAkCAYAAAD/yagrAAAAAXNSR0IArs4c6QAAAfRJREFUWAntl7FKA0EQhnMabAURG4kK2vkAik9jYSFK0mhpIYiVpFEIWFiKpLWx0cLCxxBiowgiQkIQLM5vJRMmyd7lchnMoRn4mdmZ3X/+zG1yJJf7jxaG4Sw4AWUwl9kZIO4aiN1kWeiLqMS/WQqdsCSDS/PpeOg2pmRDq4khGAuNGU6q0niiqcYWc2g80ZjhpCr9zYnytlkDt6AKCoOOhjPz4ArcgY1BzyfeD/kTEKsRLOnDrF+liH/vqhXIPar6s66bxTQIwIdq5MIOsay9Qsl3i3RnG2DSTKAmgnjLdeiytljyPULJ+UQ6ih3NbR7ToOi6dNmPWHIdQllHidwzF+YjRECU2Lr6AE1ifSel9DsiRXiEWBET5X9XZEqxNiIZQR4cggqYETH9PHtLoJ8lFgnRNDgFx2Cqpz/JTSBW6dkQk+CQ784KV2KRrgWH3J9DsV1pq1+hq5LE61il/WEQBGdUSp7qPrWyJx+X0r3bsRYaqNM6VunosCV2mx1fLRRTiHQNdO92nHcVK0PYOc/sEj7CoG7F63hMhTpCBDactzb96K25TfnGQk3HCVnUHV3gS3Fg3Swh37JvnxbaVBsWiY/UelThpzTWd/Rekhnyfk087gt5d2XAV/XA2r/8kkTgOvGKrEfka/R94Dc5HFH/9G2/ASksFFSNgU0mAAAAAElFTkSuQmCC"},uN3y:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("mvHQ"),i=n.n(o),a=n("Xxa5"),r=n.n(a),s=n("woOf"),c=n.n(s),u=n("exGp"),l=n.n(u),d=n("Dd8w"),f=n.n(d),v=n("W4IK"),m=n("NYxO"),p=n("NHnr"),h=n("7+uW"),b=n("1f+G");h.default.use(b.a);var A={metaInfo:function(){return{title:this.meta.title,meta:[{name:"keyWords",content:this.meta.kyeWords},{name:"description",content:this.meta.desr}]}},data:function(){var t=this;return{bid:this.$route.params.bid,bookDetail:"",offset:0,limit:20,showRewardDialog:!1,isFav:!1,CHANNL_ID:p.CHANNL_ID,copyContent:"",bookChapter:[],option:{goCommentsPage:function(){t.goCommentsPage(t.$route.params.bid)},deleteComment:function(e){t.deleteComment(e)},goCommentDetail:function(e){t.goCommentDetail(e)}},pickerOptions:{clickFav:function(){t.addCollection()},clickRead:function(){t.goReading(t.$route.params.bid,!1)}}}},components:{Loading:function(t){return n.e(33).then(function(){var e=[n("voil")];t.apply(null,e)}.bind(this)).catch(n.oe)},ElTransversal:function(t){return n.e(35).then(function(){var e=[n("SZ/X")];t.apply(null,e)}.bind(this)).catch(n.oe)},RewardDialog:function(t){return n.e(37).then(function(){var e=[n("5DqN")];t.apply(null,e)}.bind(this)).catch(n.oe)},ElCardHeader:function(t){return n.e(49).then(function(){var e=[n("mw4J")];t.apply(null,e)}.bind(this)).catch(n.oe)},ElRowLayout:function(t){return n.e(51).then(function(){var e=[n("lA5Q")];t.apply(null,e)}.bind(this)).catch(n.oe)},ElComments:function(t){return n.e(40).then(function(){var e=[n("6PtZ")];t.apply(null,e)}.bind(this)).catch(n.oe)}},mounted:function(){var t=this;this.isFavs(),this.fetchData(),setTimeout(function(){t.getChapter()},300)},watch:{$route:function(t,e){this.bookDetail="",this.bid=t.params.bid,this.fetchData()}},computed:f()({},Object(m.c)(["userInfo","meta"])),methods:{getChapter:function(){var t=this;return l()(r.a.mark(function e(){var n,o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$route.params.bid,e.next=3,v.a.getBookChapter(n);case 3:o=e.sent,t.bookChapter=c()([],t.bookChapter,o);case 5:case"end":return e.stop()}},e,t)}))()},dismissRewardDialog:function(){this.showRewardDialog=!1},showRewardorVoteDialog:function(t){this.showRewardDialog=!0,this.$refs.Reward._data.curTabIndex=t,this.$refs.Reward._data.curRewardVoteSelectIndex=0},fetchData:function(){var t=this;return l()(r.a.mark(function e(){var n,o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.getBookDetail(t.bid);case 2:(n=e.sent).book?(t.bookDetail=n,(o={}).title=n.book.title+"_"+n.book.title+"在线阅读-速更小说",o.kyeWords=n.book.title+","+n.book.title+"小说，"+n.book.title+"在线阅读",o.desr=n.book.description.substr(0,80),o.img=n.book.poster,t.$store.commit("SAVE_META_INFO",{metaObj:o}),setTimeout(function(){var e=JSON.parse(document.getElementById("bearPaw").innerHTML);e.title=((t.meta||{}).title||"").split("_")[0]||"速更小说",e.images=[t.meta.img];var n=Date.parse(t.bookDetail.book.latestChapter.updated);e.pubDate=new Date(n).Format("yyyy-MM-ddThh:mm:ss"),document.getElementById("bearPaw").innerHTML=i()(e)},300)):t.$toast("出错了");case 4:case"end":return e.stop()}},e,t)}))()},isFavs:function(){var t=this;setTimeout(function(){t.getStorage("favs",t.bid)&&(t.isFav=!0)},300)},addCollection:function(){var t=this;return l()(r.a.mark(function e(){var n,o,i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isLogin()){e.next=24;break}return e.next=3,v.a.addCollection(t.bid);case 3:if(n=e.sent,(o=/^2\d{2}$/.test(n))?t.$toast("收藏成功"):t.$toast("收藏失败"),t.isCollected=o,!o){e.next=22;break}if(e.prev=8,t.isFav){e.next=14;break}i={key:t.bid,value:Date.now()},t.saveStorage("favs",i),e.next=16;break;case 14:return t.$toast("不能重复收藏"),e.abrupt("return");case 16:t.isFav=!0,e.next=22;break;case 19:e.prev=19,e.t0=e.catch(8),console.log(e.t0);case 22:e.next=25;break;case 24:t.$router.push("/login");case 25:case"end":return e.stop()}},e,t,[[8,19]])}))()},goReading:function(t,e){this.$router.push({name:"reading",params:{showChapters:e}})},goCommentsPage:function(t,e){e?this.$router.push("/comments/"+t+"/"+e):this.$router.push("/comments/"+t)},deleteComment:function(t){var e=this;return l()(r.a.mark(function n(){var o,i;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.isLogin()){n.next=8;break}return o=t.bid,i=t.id,n.next=5,v.a.deleteComment(o,i);case 5:e.fetchData(),n.next=9;break;case 8:e.$router.push("/login");case 9:case"end":return n.stop()}},n,e)}))()},goBookDetail:function(t){var e=t.bid?t.bid:t;this.$router.push("/book/"+e)},goCommentDetail:function(t){var e=t.bid,n=t.id;this.$router.push("/commentdetail/"+e+"/"+n)},goToDownloadApp:function(){var t="https://www.foreader.com.cn/app/download?channel="+p.CHANNL_ID;0==p.CHANNL_ID.toString().indexOf("50")&&(t=this.Safari?"https://www.foreader.com.cn/app/download?channel="+p.CHANNL_ID:"https://file.foreader.com.cn/apk/app-1.2.2-5-"+p.CHANNL_ID+"-release.apk"),30102==p.CHANNL_ID&&(t="https://a.app.qq.com/o/simple.jsp?pkgname=com.foreader.headline&ckey=CK1417181389909"),window.location.href=t},copySuccess:function(){this.copyContent='{\n              "bid": "'+this.bid+'",\n              "cid": "'+this.bookChapter[0].cid+'",\n              "poster":"'+this.meta.img+'"\n      }',this.goToDownloadApp()}}},g={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"book_detail",class:{home:!t.bookDetail}},[t.bookDetail?o("div",[o("ElCardHeader",{attrs:{rowdata:t.bookDetail.book}}),t._v(" "),o("ElRowLayout",{staticClass:"d_f row_content p_15",attrs:{isFav:t.isFav,option:t.pickerOptions}},[30110==t.CHANNL_ID?[o("div",{staticClass:"row_btn row_addFav_btn f_14",on:{click:function(e){return t.goReading(t.bookDetail.book.bid,!1)}}},[t._v("立即阅读")]),t._v(" "),o("div",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.copyContent,expression:"copyContent"}],staticClass:"row_btn row_read_btn f_14",on:{click:function(e){return e.stopPropagation(),t.copySuccess(e)}}},[t._v("\n          永久免费\n          "),o("div",{staticClass:"icon_download line_0"},[o("img",{staticClass:"img_wh",attrs:{src:n("rJgw")}})])]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:!this.isFav,expression:"!this.isFav"}],staticClass:"add-fav-floating",on:{click:t.addCollection}},[t._v("加入收藏")]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:this.isFav,expression:"this.isFav"}],staticClass:"add-fav-floating"},[t._v("已收藏")])]:t._e()],2),t._v(" "),t.bookDetail.book.recDesc?o("div",{staticClass:"editor_desc"},[t._m(0),t._v(" "),o("p",{staticClass:"f_14"},[t._v(t._s(t.bookDetail.book.recDesc))])]):t._e(),t._v(" "),o("div",{staticClass:"section_divider"}),t._v(" "),o("div",{staticClass:"d_f"},[o("div",{staticClass:"tb_book_rate"},[o("p",{staticClass:"number"},[t._v(t._s(t.bookDetail.pvCount%1e4===t.bookDetail.pvCount?t.bookDetail.pvCount:(t.bookDetail.pvCount/1e4).toFixed(2))+"\n          "),o("span",{directives:[{name:"show",rawName:"v-show",value:t.bookDetail.pvCount%1e4!=t.bookDetail.pvCount,expression:"bookDetail.pvCount%10000 != bookDetail.pvCount"}]},[t._v("万")])]),t._v(" "),o("p",{staticClass:"extra"},[t._v("点击")])]),t._v(" "),o("div",{staticClass:"tb_book_rate"},[o("p",{staticClass:"number"},[t._v(t._s(t.bookDetail.favCount%1e4===t.bookDetail.favCount?t.bookDetail.favCount:(t.bookDetail.favCount/1e4).toFixed(2))+"\n          "),o("span",{directives:[{name:"show",rawName:"v-show",value:t.bookDetail.favCount%1e4!=t.bookDetail.favCount,expression:"bookDetail.favCount%10000 != bookDetail.favCount"}]},[t._v("万")])]),t._v(" "),o("p",{staticClass:"extra"},[t._v("收藏")])]),t._v(" "),o("div",{staticClass:"tb_book_rate"},[o("p",{staticClass:"number"},[t._v(t._s(t.bookDetail.wordCount%1e4===t.bookDetail.wordCount?t.bookDetail.wordCount:(t.bookDetail.wordCount/1e4).toFixed(2))+"\n          "),o("span",{directives:[{name:"show",rawName:"v-show",value:t.bookDetail.wordCount%1e4!=t.bookDetail.wordCount,expression:"bookDetail.wordCount%10000 != bookDetail.wordCount"}]},[t._v("万字")])]),t._v(" "),o("p",{staticClass:"extra"},[t._v(t._s(1==t.bookDetail.book.status?"完结":"连载中"))])])]),t._v(" "),o("div",{staticClass:"book_rate_divider"}),t._v(" "),o("div",{staticClass:"book_intro p_lr_17"},[o("h3",[t._v("书籍简介")]),t._v(" "),o("textarea",{attrs:{disabled:""}},[t._v(t._s(t.bookDetail.book.description))])]),t._v(" "),o("div",{staticClass:"book_rate_divider mb_0"}),t._v(" "),o("ElRowLayout",[[o("div",{staticClass:"catalog_container d_f",on:{click:function(e){return t.goReading(t.bookDetail.book.bid,!0)}}},[o("div",{staticClass:"d_f"},[o("div",{staticClass:"catalog_img line_0"},[o("img",{staticClass:"img_wh",attrs:{src:n("HYAD")}})]),t._v(" "),o("span",{staticClass:"chapter-name f_14"},[t._v(t._s(t.bookDetail.book.latestChapter.title))])]),t._v(" "),o("div",{staticClass:"d_f book_updated"},[o("span",{staticClass:"c_3CB8A7  f_14 t_o updated_text"},[t._v(t._s(t.bookDetail.book.updatedFormated))]),t._v(" "),o("div",{staticClass:"catalog_img line_0"},[o("img",{staticClass:"img_wh",attrs:{src:n("IsqW")}})])])])]],2),t._v(" "),o("div",{staticClass:"section_divider"}),t._v(" "),o("ElRowLayout",{staticClass:"reward_container d_f"},[[o("div",{staticClass:"reward_item  d_f",on:{click:function(e){return t.showRewardorVoteDialog(0)}}},[o("div",{staticClass:"reward_img line_0"},[o("img",{staticClass:"img_wh",attrs:{src:n("qNnI")}})]),t._v(" "),o("span",{staticClass:"f_14"},[t._v("当前礼物："+t._s(t.bookDetail.book.tipTotal))])]),t._v(" "),o("div",{staticClass:"verti_divider"}),t._v(" "),o("div",{staticClass:"reward_item d_f",on:{click:function(e){return t.showRewardorVoteDialog(1)}}},[o("div",{staticClass:"reward_img line_0"},[o("img",{staticClass:"img_wh",attrs:{src:n("6tl6")}})]),t._v(" "),o("span",{staticClass:"f_14"},[t._v("当前月票："+t._s(t.bookDetail.book.monthvoteCount))])])]],2),t._v(" "),o("div",{staticClass:"section_divider"}),t._v(" "),o("ElComments",{attrs:{comments:t.bookDetail.comments,userInfo:t.userInfo,total:t.bookDetail.comments_total,option:t.option}}),t._v(" "),o("div",{staticClass:"section_divider"}),t._v(" "),o("div",{staticClass:"p_lr_17"},[o("h3",[t._v("相关推荐")]),t._v(" "),o("ElTransversal",{attrs:{"book-list":t.bookDetail.recommends.slice(0,4),needUpdate:!1},on:{"book-store-click":function(e){return t.goBookDetail(e)}}})],1),t._v(" "),o("div",{staticClass:"section_divider"})],1):t._e(),t._v(" "),o("RewardDialog",{ref:"Reward",attrs:{bid:t.bid,showRewardDialog:t.showRewardDialog},on:{"dimiss-reward-dialog":t.dismissRewardDialog}}),t._v(" "),o("Loading",{attrs:{showLoading:!t.bookDetail}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"editor_decoration d_f"},[e("div",{staticClass:"editor_img"},[e("img",{staticClass:"img_wh",attrs:{src:n("PxJY")}})]),this._v(" "),e("span",[this._v("主编评语")])])}]};var y=n("VU/8")(A,g,!1,function(t){n("MpIv")},"data-v-12b83753",null);e.default=y.exports}});