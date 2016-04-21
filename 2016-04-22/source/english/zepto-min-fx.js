var Zepto=function(){function t(t){return null==t?String(t):B[U.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function $(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function r(e){return"object"==t(e)}function i(t){return r(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function o(t){return"number"==typeof t.length}function a(t){return P.call(t,function(t){return null!=t})}function s(t){return t.length>0?E.fn.concat.apply([],t):t}function u(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function c(t){return t in L?L[t]:L[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function l(t,e){return"number"!=typeof e||Z[u(t)]?e:e+"px"}function f(t){var e,n;return A[t]||(e=O.createElement(t),O.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),A[t]=n),A[t]}function h(t){return"children"in t?N.call(t.children):E.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function p(t,e,n){for(w in e)n&&(i(e[w])||G(e[w]))?(i(e[w])&&!i(t[w])&&(t[w]={}),G(e[w])&&!G(t[w])&&(t[w]=[]),p(t[w],e[w],n)):e[w]!==b&&(t[w]=e[w])}function d(t,e){return null==e?E(t):E(t).filter(e)}function m(t,n,r,i){return e(n)?n.call(t,r,i):n}function g(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function v(t,e){var n=t.className||"",r=n&&n.baseVal!==b;return e===b?r?n.baseVal:n:void(r?n.baseVal=e:t.className=e)}function y(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?E.parseJSON(t):t):t}catch(e){return t}}function x(t,e){e(t);for(var n=0,r=t.childNodes.length;r>n;n++)x(t.childNodes[n],e)}var b,w,E,j,T,C,S=[],N=S.slice,P=S.filter,O=window.document,A={},L={},Z={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},_=/^\s*<(\w+|!)[^>]*>/,D=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,z=/^(?:body|html)$/i,F=/([A-Z])/g,M=["val","css","html","text","data","width","height","offset"],R=["after","prepend","before","append"],q=O.createElement("table"),H=O.createElement("tr"),I={tr:O.createElement("tbody"),tbody:q,thead:q,tfoot:q,td:H,th:H,"*":O.createElement("div")},V=/complete|loaded|interactive/,X=/^[\w-]*$/,B={},U=B.toString,J={},W=O.createElement("div"),Y={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},G=Array.isArray||function(t){return t instanceof Array};return J.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=W).appendChild(t),r=~J.qsa(i,e).indexOf(t),o&&W.removeChild(t),r},T=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},C=function(t){return P.call(t,function(e,n){return t.indexOf(e)==n})},J.fragment=function(t,e,n){var r,o,a;return D.test(t)&&(r=E(O.createElement(RegExp.$1))),r||(t.replace&&(t=t.replace(k,"<$1></$2>")),e===b&&(e=_.test(t)&&RegExp.$1),e in I||(e="*"),a=I[e],a.innerHTML=""+t,r=E.each(N.call(a.childNodes),function(){a.removeChild(this)})),i(n)&&(o=E(r),E.each(n,function(t,e){M.indexOf(t)>-1?o[t](e):o.attr(t,e)})),r},J.Z=function(t,e){return t=t||[],t.__proto__=E.fn,t.selector=e||"",t},J.isZ=function(t){return t instanceof J.Z},J.init=function(t,n){var i;if(!t)return J.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&_.test(t))i=J.fragment(t,RegExp.$1,n),t=null;else{if(n!==b)return E(n).find(t);i=J.qsa(O,t)}else{if(e(t))return E(O).ready(t);if(J.isZ(t))return t;if(G(t))i=a(t);else if(r(t))i=[t],t=null;else if(_.test(t))i=J.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==b)return E(n).find(t);i=J.qsa(O,t)}}return J.Z(i,t)},E=function(t,e){return J.init(t,e)},E.extend=function(t){var e,n=N.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){p(t,n,e)}),t},J.qsa=function(t,e){var n,r="#"==e[0],i=!r&&"."==e[0],o=r||i?e.slice(1):e,a=X.test(o);return $(t)&&a&&r?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:N.call(a&&!r?i?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},E.contains=O.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},E.type=t,E.isFunction=e,E.isWindow=n,E.isArray=G,E.isPlainObject=i,E.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},E.inArray=function(t,e,n){return S.indexOf.call(e,t,n)},E.camelCase=T,E.trim=function(t){return null==t?"":String.prototype.trim.call(t)},E.uuid=0,E.support={},E.expr={},E.map=function(t,e){var n,r,i,a=[];if(o(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&a.push(n);else for(i in t)n=e(t[i],i),null!=n&&a.push(n);return s(a)},E.each=function(t,e){var n,r;if(o(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(r in t)if(e.call(t[r],r,t[r])===!1)return t;return t},E.grep=function(t,e){return P.call(t,e)},window.JSON&&(E.parseJSON=JSON.parse),E.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){B["[object "+e+"]"]=e.toLowerCase()}),E.fn={forEach:S.forEach,reduce:S.reduce,push:S.push,sort:S.sort,indexOf:S.indexOf,concat:S.concat,map:function(t){return E(E.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return E(N.apply(this,arguments))},ready:function(t){return V.test(O.readyState)&&O.body?t(E):O.addEventListener("DOMContentLoaded",function(){t(E)},!1),this},get:function(t){return t===b?N.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return S.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):E(P.call(this,function(e){return J.matches(e,t)}))},add:function(t,e){return E(C(this.concat(E(t,e))))},is:function(t){return this.length>0&&J.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==b)this.each(function(e){t.call(this,e)||n.push(this)});else{var r="string"==typeof t?this.filter(t):o(t)&&e(t.item)?N.call(t):E(t);this.forEach(function(t){r.indexOf(t)<0&&n.push(t)})}return E(n)},has:function(t){return this.filter(function(){return r(t)?E.contains(this,t):E(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!r(t)?t:E(t)},last:function(){var t=this[this.length-1];return t&&!r(t)?t:E(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?E(t).filter(function(){var t=this;return S.some.call(n,function(e){return E.contains(e,t)})}):1==this.length?E(J.qsa(this[0],t)):this.map(function(){return J.qsa(this,t)}):E()},closest:function(t,e){var n=this[0],r=!1;for("object"==typeof t&&(r=E(t));n&&!(r?r.indexOf(n)>=0:J.matches(n,t));)n=n!==e&&!$(n)&&n.parentNode;return E(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=E.map(n,function(t){return(t=t.parentNode)&&!$(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return d(e,t)},parent:function(t){return d(C(this.pluck("parentNode")),t)},children:function(t){return d(this.map(function(){return h(this)}),t)},contents:function(){return this.map(function(){return N.call(this.childNodes)})},siblings:function(t){return d(this.map(function(t,e){return P.call(h(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return E.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=f(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var r=E(t).get(0),i=r.parentNode||this.length>1;return this.each(function(e){E(this).wrapAll(n?t.call(this,e):i?r.cloneNode(!0):r)})},wrapAll:function(t){if(this[0]){E(this[0]).before(t=E(t));for(var e;(e=t.children()).length;)t=e.first();E(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var r=E(this),i=r.contents(),o=n?t.call(this,e):t;i.length?i.wrapAll(o):r.append(o)})},unwrap:function(){return this.parent().each(function(){E(this).replaceWith(E(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=E(this);(t===b?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return E(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return E(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;E(this).empty().append(m(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=m(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(t,e){var n;return"string"!=typeof t||1 in arguments?this.each(function(n){if(1===this.nodeType)if(r(t))for(w in t)g(this,w,t[w]);else g(this,t,m(this,e,n,this.getAttribute(t)))}):this.length&&1===this[0].nodeType?!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:b},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){g(this,t)},this)})},prop:function(t,e){return t=Y[t]||t,1 in arguments?this.each(function(n){this[t]=m(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(t,e){var n="data-"+t.replace(F,"-$1").toLowerCase(),r=1 in arguments?this.attr(n,e):this.attr(n);return null!==r?y(r):b},val:function(t){return 0 in arguments?this.each(function(e){this.value=m(this,t,e,this.value)}):this[0]&&(this[0].multiple?E(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var n=E(this),r=m(this,t,e,n.offset()),i=n.offsetParent().offset(),o={top:r.top-i.top,left:r.left-i.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2){var r,i=this[0];if(!i)return;if(r=getComputedStyle(i,""),"string"==typeof e)return i.style[T(e)]||r.getPropertyValue(e);if(G(e)){var o={};return E.each(e,function(t,e){o[e]=i.style[T(e)]||r.getPropertyValue(e)}),o}}var a="";if("string"==t(e))n||0===n?a=u(e)+":"+l(e,n):this.each(function(){this.style.removeProperty(u(e))});else for(w in e)e[w]||0===e[w]?a+=u(w)+":"+l(w,e[w])+";":this.each(function(){this.style.removeProperty(u(w))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(E(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?S.some.call(this,function(t){return this.test(v(t))},c(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){j=[];var n=v(this),r=m(this,t,e,n);r.split(/\s+/g).forEach(function(t){E(this).hasClass(t)||j.push(t)},this),j.length&&v(this,n+(n?" ":"")+j.join(" "))}}):this},removeClass:function(t){return this.each(function(e){if("className"in this){if(t===b)return v(this,"");j=v(this),m(this,t,e,j).split(/\s+/g).forEach(function(t){j=j.replace(c(t)," ")}),v(this,j.trim())}})},toggleClass:function(t,e){return t?this.each(function(n){var r=E(this),i=m(this,t,n,v(this));i.split(/\s+/g).forEach(function(t){(e===b?!r.hasClass(t):e)?r.addClass(t):r.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===b?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===b?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),r=z.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(E(t).css("margin-top"))||0,n.left-=parseFloat(E(t).css("margin-left"))||0,r.top+=parseFloat(E(e[0]).css("border-top-width"))||0,r.left+=parseFloat(E(e[0]).css("border-left-width"))||0,{top:n.top-r.top,left:n.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||O.body;t&&!z.test(t.nodeName)&&"static"==E(t).css("position");)t=t.offsetParent;return t})}},E.fn.detach=E.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});E.fn[t]=function(r){var i,o=this[0];return r===b?n(o)?o["inner"+e]:$(o)?o.documentElement["scroll"+e]:(i=this.offset())&&i[t]:this.each(function(e){o=E(this),o.css(t,m(this,r,e,o[t]()))})}}),R.forEach(function(e,n){var r=n%2;E.fn[e]=function(){var e,i,o=E.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:J.fragment(n)}),a=this.length>1;return o.length<1?this:this.each(function(t,e){i=r?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null;var s=E.contains(O.documentElement,i);o.forEach(function(t){if(a)t=t.cloneNode(!0);else if(!i)return E(t).remove();i.insertBefore(t,e),s&&x(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},E.fn[r?e+"To":"insert"+(n?"Before":"After")]=function(t){return E(t)[e](this),this}}),J.Z.prototype=E.fn,J.uniq=C,J.deserializeValue=y,E.zepto=J,E}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function e(t){return t._zid||(t._zid=h++)}function n(t,n,o,a){if(n=r(n),n.ns)var s=i(n.ns);return(g[e(t)]||[]).filter(function(t){return!(!t||n.e&&t.e!=n.e||n.ns&&!s.test(t.ns)||o&&e(t.fn)!==e(o)||a&&t.sel!=a)})}function r(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function i(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(t,e){return t.del&&!y&&t.e in x||!!e}function a(t){return b[t]||y&&x[t]||t}function s(n,i,s,u,l,h,p){var d=e(n),m=g[d]||(g[d]=[]);i.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(s);var i=r(e);i.fn=s,i.sel=l,i.e in b&&(s=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?i.fn.apply(this,arguments):void 0}),i.del=h;var d=h||s;i.proxy=function(t){if(t=c(t),!t.isImmediatePropagationStopped()){t.data=u;var e=d.apply(n,t._args==f?[t]:[t].concat(t._args));return e===!1&&(t.preventDefault(),t.stopPropagation()),e}},i.i=m.length,m.push(i),"addEventListener"in n&&n.addEventListener(a(i.e),i.proxy,o(i,p))})}function u(t,r,i,s,u){var c=e(t);(r||"").split(/\s/).forEach(function(e){n(t,e,i,s).forEach(function(e){delete g[c][e.i],"removeEventListener"in t&&t.removeEventListener(a(e.e),e.proxy,o(e,u))})})}function c(e,n){return(n||!e.isDefaultPrevented)&&(n||(n=e),t.each(T,function(t,r){var i=n[t];e[t]=function(){return this[r]=w,i&&i.apply(n,arguments)},e[r]=E}),(n.defaultPrevented!==f?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=w)),e}function l(t){var e,n={originalEvent:t};for(e in t)j.test(e)||t[e]===f||(n[e]=t[e]);return c(n,t)}var f,h=1,p=Array.prototype.slice,d=t.isFunction,m=function(t){return"string"==typeof t},g={},v={},y="onfocusin"in window,x={focus:"focusin",blur:"focusout"},b={mouseenter:"mouseover",mouseleave:"mouseout"};v.click=v.mousedown=v.mouseup=v.mousemove="MouseEvents",t.event={add:s,remove:u},t.proxy=function(n,r){var i=2 in arguments&&p.call(arguments,2);if(d(n)){var o=function(){return n.apply(r,i?i.concat(p.call(arguments)):arguments)};return o._zid=e(n),o}if(m(r))return i?(i.unshift(n[r],n),t.proxy.apply(null,i)):t.proxy(n[r],n);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var w=function(){return!0},E=function(){return!1},j=/^([A-Z]|returnValue$|layer[XY]$)/,T={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,r,i,o){var a,c,h=this;return e&&!m(e)?(t.each(e,function(t,e){h.on(t,n,r,e,o)}),h):(m(n)||d(i)||i===!1||(i=r,r=n,n=f),(d(r)||r===!1)&&(i=r,r=f),i===!1&&(i=E),h.each(function(f,h){o&&(a=function(t){return u(h,t.type,i),i.apply(this,arguments)}),n&&(c=function(e){var r,o=t(e.target).closest(n,h).get(0);return o&&o!==h?(r=t.extend(l(e),{currentTarget:o,liveFired:h}),(a||i).apply(o,[r].concat(p.call(arguments,1)))):void 0}),s(h,e,i,r,n,c||a)}))},t.fn.off=function(e,n,r){var i=this;return e&&!m(e)?(t.each(e,function(t,e){i.off(t,n,e)}),i):(m(n)||d(r)||r===!1||(r=n,n=f),r===!1&&(r=E),i.each(function(){u(this,e,r,n)}))},t.fn.trigger=function(e,n){return e=m(e)||t.isPlainObject(e)?t.Event(e):c(e),e._args=n,this.each(function(){e.type in x&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,r){var i,o;return this.each(function(a,s){i=l(m(e)?t.Event(e):e),i._args=r,i.target=s,t.each(n(s,e.type||e),function(t,e){return o=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){m(t)||(e=t,t=e.type);var n=document.createEvent(v[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),c(n)}}(Zepto),function(t){function e(e,n,r){var i=t.Event(n);return t(e).trigger(i,r),!i.isDefaultPrevented()}function n(t,n,r,i){return t.global?e(n||y,r,i):void 0}function r(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function i(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var r=e.context;return e.beforeSend.call(r,t,e)===!1||n(e,r,"ajaxBeforeSend",[t,e])===!1?!1:void n(e,r,"ajaxSend",[t,e])}function a(t,e,r,i){var o=r.context,a="success";r.success.call(o,t,a,e),i&&i.resolveWith(o,[t,a,e]),n(r,o,"ajaxSuccess",[e,r,t]),u(a,e,r)}function s(t,e,r,i,o){var a=i.context;i.error.call(a,r,e,t),o&&o.rejectWith(a,[r,e,t]),n(i,a,"ajaxError",[r,i,t||e]),u(e,r,i)}function u(t,e,r){var o=r.context;r.complete.call(o,e,t),n(r,o,"ajaxComplete",[e,r]),i(r)}function c(){}function l(t){return t&&(t=t.split(";",2)[0]),t&&(t==j?"html":t==E?"json":b.test(t)?"script":w.test(t)&&"xml")||"text"}function f(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function h(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=f(e.url,e.data),e.data=void 0)}function p(e,n,r,i){return t.isFunction(n)&&(i=r,r=n,n=void 0),t.isFunction(r)||(i=r,r=void 0),{url:e,data:n,success:r,dataType:i}}function d(e,n,r,i){var o,a=t.isArray(n),s=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),i&&(n=r?i:i+"["+(s||"object"==o||"array"==o?n:"")+"]"),!i&&a?e.add(u.name,u.value):"array"==o||!r&&"object"==o?d(e,u,r,n):e.add(n,u)})}var m,g,v=0,y=window.document,x=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,b=/^(?:text|application)\/javascript/i,w=/^(?:text|application)\/xml/i,E="application/json",j="text/html",T=/^\s*$/,C=y.createElement("a");C.href=window.location.href,t.active=0,t.ajaxJSONP=function(e,n){if(!("type"in e))return t.ajax(e);var r,i,u=e.jsonpCallback,c=(t.isFunction(u)?u():u)||"jsonp"+ ++v,l=y.createElement("script"),f=window[c],h=function(e){t(l).triggerHandler("error",e||"abort")},p={abort:h};return n&&n.promise(p),t(l).on("load error",function(o,u){clearTimeout(i),t(l).off().remove(),"error"!=o.type&&r?a(r[0],p,e,n):s(null,u||"error",p,e,n),window[c]=f,r&&t.isFunction(f)&&f(r[0]),f=r=void 0}),o(p,e)===!1?(h("abort"),p):(window[c]=function(){r=arguments},l.src=e.url.replace(/\?(.+)=\?/,"?$1="+c),y.head.appendChild(l),e.timeout>0&&(i=setTimeout(function(){h("timeout")},e.timeout)),p)},t.ajaxSettings={type:"GET",beforeSend:c,success:c,error:c,complete:c,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:E,xml:"application/xml, text/xml",html:j,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n,i=t.extend({},e||{}),u=t.Deferred&&t.Deferred();for(m in t.ajaxSettings)void 0===i[m]&&(i[m]=t.ajaxSettings[m]);r(i),i.crossDomain||(n=y.createElement("a"),n.href=i.url,n.href=n.href,i.crossDomain=C.protocol+"//"+C.host!=n.protocol+"//"+n.host),i.url||(i.url=window.location.toString()),h(i);var p=i.dataType,d=/\?.+=\?/.test(i.url);if(d&&(p="jsonp"),i.cache!==!1&&(e&&e.cache===!0||"script"!=p&&"jsonp"!=p)||(i.url=f(i.url,"_="+Date.now())),"jsonp"==p)return d||(i.url=f(i.url,i.jsonp?i.jsonp+"=?":i.jsonp===!1?"":"callback=?")),t.ajaxJSONP(i,u);var v,x=i.accepts[p],b={},w=function(t,e){b[t.toLowerCase()]=[t,e]},E=/^([\w-]+:)\/\//.test(i.url)?RegExp.$1:window.location.protocol,j=i.xhr(),S=j.setRequestHeader;if(u&&u.promise(j),i.crossDomain||w("X-Requested-With","XMLHttpRequest"),w("Accept",x||"*/*"),(x=i.mimeType||x)&&(x.indexOf(",")>-1&&(x=x.split(",",2)[0]),j.overrideMimeType&&j.overrideMimeType(x)),(i.contentType||i.contentType!==!1&&i.data&&"GET"!=i.type.toUpperCase())&&w("Content-Type",i.contentType||"application/x-www-form-urlencoded"),i.headers)for(g in i.headers)w(g,i.headers[g]);if(j.setRequestHeader=w,j.onreadystatechange=function(){if(4==j.readyState){j.onreadystatechange=c,clearTimeout(v);var e,n=!1;if(j.status>=200&&j.status<300||304==j.status||0==j.status&&"file:"==E){p=p||l(i.mimeType||j.getResponseHeader("content-type")),e=j.responseText;try{"script"==p?(1,eval)(e):"xml"==p?e=j.responseXML:"json"==p&&(e=T.test(e)?null:t.parseJSON(e))}catch(r){n=r}n?s(n,"parsererror",j,i,u):a(e,j,i,u)}else s(j.statusText||null,j.status?"error":"abort",j,i,u)}},o(j,i)===!1)return j.abort(),s(null,"abort",j,i,u),j;if(i.xhrFields)for(g in i.xhrFields)j[g]=i.xhrFields[g];var N="async"in i?i.async:!0;j.open(i.type,i.url,N,i.username,i.password);for(g in b)S.apply(j,b[g]);return i.timeout>0&&(v=setTimeout(function(){j.onreadystatechange=c,j.abort(),s(null,"timeout",j,i,u)},i.timeout)),j.send(i.data?i.data:null),j},t.get=function(){return t.ajax(p.apply(null,arguments))},t.post=function(){var e=p.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=p.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,r){if(!this.length)return this;var i,o=this,a=e.split(/\s/),s=p(e,n,r),u=s.success;return a.length>1&&(s.url=a[0],i=a[1]),s.success=function(e){o.html(i?t("<div>").html(e.replace(x,"")).find(i):e),u&&u.apply(o,arguments)},t.ajax(s),this};var S=encodeURIComponent;t.param=function(e,n){var r=[];return r.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(S(e)+"="+S(n))},d(r,e,n),r.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,r=[],i=function(t){return t.forEach?t.forEach(i):void r.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(r,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&i(t(o).val())}),r},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto),function($,t){function e(t){return t.replace(/([a-z])([A-Z])/,"$1-$2").toLowerCase()}function n(t){return i?i+t:t.toLowerCase()}var r="",i,o={Webkit:"webkit",Moz:"",O:"o"},a=document.createElement("div"),s=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,u,c,l,f,h,p,d,m,g,v={};$.each(o,function(e,n){return a.style[e+"TransitionProperty"]!==t?(r="-"+e.toLowerCase()+"-",i=n,!1):void 0}),u=r+"transform",v[c=r+"transition-property"]=v[l=r+"transition-duration"]=v[h=r+"transition-delay"]=v[f=r+"transition-timing-function"]=v[p=r+"animation-name"]=v[d=r+"animation-duration"]=v[g=r+"animation-delay"]=v[m=r+"animation-timing-function"]="",$.fx={off:i===t&&a.style.transitionProperty===t,speeds:{_default:400,fast:200,slow:600},cssPrefix:r,transitionEnd:n("TransitionEnd"),animationEnd:n("AnimationEnd")},$.fn.animate=function(e,n,r,i,o){return $.isFunction(n)&&(i=n,r=t,n=t),$.isFunction(r)&&(i=r,r=t),$.isPlainObject(n)&&(r=n.easing,i=n.complete,o=n.delay,n=n.duration),n&&(n=("number"==typeof n?n:$.fx.speeds[n]||$.fx.speeds._default)/1e3),o&&(o=parseFloat(o)/1e3),this.anim(e,n,r,i,o)},$.fn.anim=function(n,r,i,o,a){var y,x={},b,w="",E=this,j,T=$.fx.transitionEnd,C=!1;if(r===t&&(r=$.fx.speeds._default/1e3),a===t&&(a=0),$.fx.off&&(r=0),"string"==typeof n)x[p]=n,x[d]=r+"s",x[g]=a+"s",x[m]=i||"linear",T=$.fx.animationEnd;else{b=[];for(y in n)s.test(y)?w+=y+"("+n[y]+") ":(x[y]=n[y],b.push(e(y)));w&&(x[u]=w,b.push(u)),r>0&&"object"==typeof n&&(x[c]=b.join(", "),x[l]=r+"s",x[h]=a+"s",x[f]=i||"linear")}return j=function(t){if("undefined"!=typeof t){if(t.target!==t.currentTarget)return;$(t.target).unbind(T,j)}else $(this).unbind(T,j);C=!0,$(this).css(v),o&&o.call(this)},r>0&&(this.bind(T,j),setTimeout(function(){C||j.call(E)},1e3*(r+a)+25)),this.size()&&this.get(0).clientLeft,this.css(x),0>=r&&setTimeout(function(){E.each(function(){j.call(this)})},0),this},a=null}(Zepto);