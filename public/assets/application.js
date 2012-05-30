/*! jQuery v1.7.1 jquery.com | jquery.org/license */

(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)ca(a+"["+e+"]",b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bx:by,g=0,h=e.length;if(d>0){if(c!=="border")for(;g<h;g++)c||(d-=parseFloat(f.css(a,"padding"+e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,"border"+e[g]+"Width"))||0;return d+"px"}d=bz(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g<h;g++)d+=parseFloat(f.css(a,"padding"+e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+e[g]))||0);return d+"px"}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;q.setAttribute("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&&q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML="",a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n="on"+o,p=n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName("body")[0];!r||(j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m="visibility:hidden;border:0;",n="style='"+k+"border:5px solid #000;padding:0;'",o="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline",q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display="",q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+d[1]:"";if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h<g;h++)e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};
f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click")){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j<e;j++)r=d[j],s=r.selector,o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r);q.length&&i.push({elem:l,matches:q})}}d.length>e&&i.push({elem:this,matches:d.slice(e)});for(j=0;j<i.length&&!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k<p.matches.length&&!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function()
{for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bv.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bq,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,b){var c,d,e;b=b.replace(bs,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b)));return c}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f===null&&g&&(e=g[b])&&(f=e),!bt.test(f)&&bu.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&])_=[^&]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=["*/"]+["*"];try{bV=e.href}catch(bY){bV=c.createElement("a"),bV.href="",bV=bV.href}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bS)return bS.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bN,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,"\r\n")}}):{name:b.name,value:c.replace(bF,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);return a},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cc(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bG,"").replace(bL,bW[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bP),d.crossDomain==null&&(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&&r[2]==bW[2]&&(r[3]||(r[1]==="http:"?80:443))==(bW[3]||(bW[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bM.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,"$1_="+x);d.url=y+(y===d.url?(bM.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bX+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,a[g],c,e);return d.join("&").replace(bD,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cd++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ce.test(b.url)||e&&ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ce,l),b.url===j&&(e&&(k=k.replace(ce,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ci()||cj()}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cf&&delete ch[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&&(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cp&&(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);
(function($, undefined) {

/**
 * Unobtrusive scripting adapter for jQuery
 *
 * Requires jQuery 1.6.0 or later.
 * https://github.com/rails/jquery-ujs

 * Uploading file using rails.js
 * =============================
 *
 * By default, browsers do not allow files to be uploaded via AJAX. As a result, if there are any non-blank file fields
 * in the remote form, this adapter aborts the AJAX submission and allows the form to submit through standard means.
 *
 * The `ajax:aborted:file` event allows you to bind your own handler to process the form submission however you wish.
 *
 * Ex:
 *     $('form').live('ajax:aborted:file', function(event, elements){
 *       // Implement own remote file-transfer handler here for non-blank file inputs passed in `elements`.
 *       // Returning false in this handler tells rails.js to disallow standard form submission
 *       return false;
 *     });
 *
 * The `ajax:aborted:file` event is fired when a file-type input is detected with a non-blank value.
 *
 * Third-party tools can use this hook to detect when an AJAX file upload is attempted, and then use
 * techniques like the iframe method to upload the file instead.
 *
 * Required fields in rails.js
 * ===========================
 *
 * If any blank required inputs (required="required") are detected in the remote form, the whole form submission
 * is canceled. Note that this is unlike file inputs, which still allow standard (non-AJAX) form submission.
 *
 * The `ajax:aborted:required` event allows you to bind your own handler to inform the user of blank required inputs.
 *
 * !! Note that Opera does not fire the form's submit event if there are blank required inputs, so this event may never
 *    get fired in Opera. This event is what causes other browsers to exhibit the same submit-aborting behavior.
 *
 * Ex:
 *     $('form').live('ajax:aborted:required', function(event, elements){
 *       // Returning false in this handler tells rails.js to submit the form anyway.
 *       // The blank required inputs are passed to this function in `elements`.
 *       return ! confirm("Would you like to submit the form with missing info?");
 *     });
 */

  // Shorthand to make it a little easier to call public rails functions from within rails.js
  var rails;

  $.rails = rails = {
    // Link elements bound by jquery-ujs
    linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]',

    // Select elements bound by jquery-ujs
    inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',

    // Form elements bound by jquery-ujs
    formSubmitSelector: 'form',

    // Form input elements bound by jquery-ujs
    formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not(button[type])',

    // Form input elements disabled during form submission
    disableSelector: 'input[data-disable-with], button[data-disable-with], textarea[data-disable-with]',

    // Form input elements re-enabled after form submission
    enableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled',

    // Form required input elements
    requiredInputSelector: 'input[name][required]:not([disabled]),textarea[name][required]:not([disabled])',

    // Form file input elements
    fileInputSelector: 'input:file',

    // Link onClick disable selector with possible reenable after remote submission
    linkDisableSelector: 'a[data-disable-with]',

    // Make sure that every Ajax request sends the CSRF token
    CSRFProtection: function(xhr) {
      var token = $('meta[name="csrf-token"]').attr('content');
      if (token) xhr.setRequestHeader('X-CSRF-Token', token);
    },

    // Triggers an event on an element and returns false if the event result is false
    fire: function(obj, name, data) {
      var event = $.Event(name);
      obj.trigger(event, data);
      return event.result !== false;
    },

    // Default confirm dialog, may be overridden with custom confirm dialog in $.rails.confirm
    confirm: function(message) {
      return confirm(message);
    },

    // Default ajax function, may be overridden with custom function in $.rails.ajax
    ajax: function(options) {
      return $.ajax(options);
    },

    // Default way to get an element's href. May be overridden at $.rails.href.
    href: function(element) {
      return element.attr('href');
    },

    // Submits "remote" forms and links with ajax
    handleRemote: function(element) {
      var method, url, data, crossDomain, dataType, options;

      if (rails.fire(element, 'ajax:before')) {
        crossDomain = element.data('cross-domain') || null;
        dataType = element.data('type') || ($.ajaxSettings && $.ajaxSettings.dataType);

        if (element.is('form')) {
          method = element.attr('method');
          url = element.attr('action');
          data = element.serializeArray();
          // memoized value from clicked submit button
          var button = element.data('ujs:submit-button');
          if (button) {
            data.push(button);
            element.data('ujs:submit-button', null);
          }
        } else if (element.is(rails.inputChangeSelector)) {
          method = element.data('method');
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + "&" + element.data('params');
        } else {
          method = element.data('method');
          url = rails.href(element);
          data = element.data('params') || null;
        }

        options = {
          type: method || 'GET', data: data, dataType: dataType, crossDomain: crossDomain,
          // stopping the "ajax:beforeSend" event will cancel the ajax request
          beforeSend: function(xhr, settings) {
            if (settings.dataType === undefined) {
              xhr.setRequestHeader('accept', '*/*;q=0.5, ' + settings.accepts.script);
            }
            return rails.fire(element, 'ajax:beforeSend', [xhr, settings]);
          },
          success: function(data, status, xhr) {
            element.trigger('ajax:success', [data, status, xhr]);
          },
          complete: function(xhr, status) {
            element.trigger('ajax:complete', [xhr, status]);
          },
          error: function(xhr, status, error) {
            element.trigger('ajax:error', [xhr, status, error]);
          }
        };
        // Only pass url to `ajax` options if not blank
        if (url) { options.url = url; }

        return rails.ajax(options);
      } else {
        return false;
      }
    },

    // Handles "data-method" on links such as:
    // <a href="/users/5" data-method="delete" rel="nofollow" data-confirm="Are you sure?">Delete</a>
    handleMethod: function(link) {
      var href = rails.href(link),
        method = link.data('method'),
        target = link.attr('target'),
        csrf_token = $('meta[name=csrf-token]').attr('content'),
        csrf_param = $('meta[name=csrf-param]').attr('content'),
        form = $('<form method="post" action="' + href + '"></form>'),
        metadata_input = '<input name="_method" value="' + method + '" type="hidden" />';

      if (csrf_param !== undefined && csrf_token !== undefined) {
        metadata_input += '<input name="' + csrf_param + '" value="' + csrf_token + '" type="hidden" />';
      }

      if (target) { form.attr('target', target); }

      form.hide().append(metadata_input).appendTo('body');
      form.submit();
    },

    /* Disables form elements:
      - Caches element value in 'ujs:enable-with' data store
      - Replaces element text with value of 'data-disable-with' attribute
      - Sets disabled property to true
    */
    disableFormElements: function(form) {
      form.find(rails.disableSelector).each(function() {
        var element = $(this), method = element.is('button') ? 'html' : 'val';
        element.data('ujs:enable-with', element[method]());
        element[method](element.data('disable-with'));
        element.prop('disabled', true);
      });
    },

    /* Re-enables disabled form elements:
      - Replaces element text with cached value from 'ujs:enable-with' data store (created in `disableFormElements`)
      - Sets disabled property to false
    */
    enableFormElements: function(form) {
      form.find(rails.enableSelector).each(function() {
        var element = $(this), method = element.is('button') ? 'html' : 'val';
        if (element.data('ujs:enable-with')) element[method](element.data('ujs:enable-with'));
        element.prop('disabled', false);
      });
    },

   /* For 'data-confirm' attribute:
      - Fires `confirm` event
      - Shows the confirmation dialog
      - Fires the `confirm:complete` event

      Returns `true` if no function stops the chain and user chose yes; `false` otherwise.
      Attaching a handler to the element's `confirm` event that returns a `falsy` value cancels the confirmation dialog.
      Attaching a handler to the element's `confirm:complete` event that returns a `falsy` value makes this function
      return false. The `confirm:complete` event is fired whether or not the user answered true or false to the dialog.
   */
    allowAction: function(element) {
      var message = element.data('confirm'),
          answer = false, callback;
      if (!message) { return true; }

      if (rails.fire(element, 'confirm')) {
        answer = rails.confirm(message);
        callback = rails.fire(element, 'confirm:complete', [answer]);
      }
      return answer && callback;
    },

    // Helper function which checks for blank inputs in a form that match the specified CSS selector
    blankInputs: function(form, specifiedSelector, nonBlank) {
      var inputs = $(), input,
        selector = specifiedSelector || 'input,textarea';
      form.find(selector).each(function() {
        input = $(this);
        // Collect non-blank inputs if nonBlank option is true, otherwise, collect blank inputs
        if (nonBlank ? input.val() : !input.val()) {
          inputs = inputs.add(input);
        }
      });
      return inputs.length ? inputs : false;
    },

    // Helper function which checks for non-blank inputs in a form that match the specified CSS selector
    nonBlankInputs: function(form, specifiedSelector) {
      return rails.blankInputs(form, specifiedSelector, true); // true specifies nonBlank
    },

    // Helper function, needed to provide consistent behavior in IE
    stopEverything: function(e) {
      $(e.target).trigger('ujs:everythingStopped');
      e.stopImmediatePropagation();
      return false;
    },

    // find all the submit events directly bound to the form and
    // manually invoke them. If anyone returns false then stop the loop
    callFormSubmitBindings: function(form, event) {
      var events = form.data('events'), continuePropagation = true;
      if (events !== undefined && events['submit'] !== undefined) {
        $.each(events['submit'], function(i, obj){
          if (typeof obj.handler === 'function') return continuePropagation = obj.handler(event);
        });
      }
      return continuePropagation;
    },

    //  replace element's html with the 'data-disable-with' after storing original html
    //  and prevent clicking on it
    disableElement: function(element) {
      element.data('ujs:enable-with', element.html()); // store enabled state
      element.html(element.data('disable-with')); // set to disabled state
      element.bind('click.railsDisable', function(e) { // prevent further clicking
        return rails.stopEverything(e)
      });
    },

    // restore element to its original state which was disabled by 'disableElement' above
    enableElement: function(element) {
      if (element.data('ujs:enable-with') !== undefined) {
        element.html(element.data('ujs:enable-with')); // set to old enabled state
        // this should be element.removeData('ujs:enable-with')
        // but, there is currently a bug in jquery which makes hyphenated data attributes not get removed
        element.data('ujs:enable-with', false); // clean up cache
      }
      element.unbind('click.railsDisable'); // enable element
    }

  };

  $.ajaxPrefilter(function(options, originalOptions, xhr){ if ( !options.crossDomain ) { rails.CSRFProtection(xhr); }});

  $(document).delegate(rails.linkDisableSelector, 'ajax:complete', function() {
      rails.enableElement($(this));
  });

  $(document).delegate(rails.linkClickSelector, 'click.rails', function(e) {
    var link = $(this), method = link.data('method'), data = link.data('params');
    if (!rails.allowAction(link)) return rails.stopEverything(e);

    if (link.is(rails.linkDisableSelector)) rails.disableElement(link);

    if (link.data('remote') !== undefined) {
      if ( (e.metaKey || e.ctrlKey) && (!method || method === 'GET') && !data ) { return true; }

      if (rails.handleRemote(link) === false) { rails.enableElement(link); }
      return false;

    } else if (link.data('method')) {
      rails.handleMethod(link);
      return false;
    }
  });

  $(document).delegate(rails.inputChangeSelector, 'change.rails', function(e) {
    var link = $(this);
    if (!rails.allowAction(link)) return rails.stopEverything(e);

    rails.handleRemote(link);
    return false;
  });

  $(document).delegate(rails.formSubmitSelector, 'submit.rails', function(e) {
    var form = $(this),
      remote = form.data('remote') !== undefined,
      blankRequiredInputs = rails.blankInputs(form, rails.requiredInputSelector),
      nonBlankFileInputs = rails.nonBlankInputs(form, rails.fileInputSelector);

    if (!rails.allowAction(form)) return rails.stopEverything(e);

    // skip other logic when required values are missing or file upload is present
    if (blankRequiredInputs && form.attr("novalidate") == undefined && rails.fire(form, 'ajax:aborted:required', [blankRequiredInputs])) {
      return rails.stopEverything(e);
    }

    if (remote) {
      if (nonBlankFileInputs) {
        return rails.fire(form, 'ajax:aborted:file', [nonBlankFileInputs]);
      }

      // If browser does not support submit bubbling, then this live-binding will be called before direct
      // bindings. Therefore, we should directly call any direct bindings before remotely submitting form.
      if (!$.support.submitBubbles && $().jquery < '1.7' && rails.callFormSubmitBindings(form, e) === false) return rails.stopEverything(e);

      rails.handleRemote(form);
      return false;

    } else {
      // slight timeout so that the submit button gets properly serialized
      setTimeout(function(){ rails.disableFormElements(form); }, 13);
    }
  });

  $(document).delegate(rails.formInputClickSelector, 'click.rails', function(event) {
    var button = $(this);

    if (!rails.allowAction(button)) return rails.stopEverything(event);

    // register the pressed submit button
    var name = button.attr('name'),
      data = name ? {name:name, value:button.val()} : null;

    button.closest('form').data('ujs:submit-button', data);
  });

  $(document).delegate(rails.formSubmitSelector, 'ajax:beforeSend.rails', function(event) {
    if (this == event.target) rails.disableFormElements($(this));
  });

  $(document).delegate(rails.formSubmitSelector, 'ajax:complete.rails', function(event) {
    if (this == event.target) rails.enableFormElements($(this));
  });

})( jQuery );
/* =========================================================
 * bootstrap-datepicker.js 
 * http://www.eyecon.ro/bootstrap-datepicker
 * =========================================================
 * Copyright 2012 Stefan Petre
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */

 
!function( $ ) {
	
	// Picker object
	
	var Datepicker = function(element, options){
		this.element = $(element);
		this.format = DPGlobal.parseFormat(options.format||this.element.data('date-format')||'mm/dd/yyyy');
		this.picker = $(DPGlobal.template)
							.appendTo('body')
							.on({
								click: $.proxy(this.click, this),
								mousedown: $.proxy(this.mousedown, this)
							});
		this.isInput = this.element.is('input');
		this.component = this.element.is('.date') ? this.element.find('.add-on') : false;
		
		if (this.isInput) {
			this.element.on({
				focus: $.proxy(this.show, this),
				blur: $.proxy(this.hide, this),
				keyup: $.proxy(this.update, this)
			});
		} else {
			if (this.component){
				this.component.on('click', $.proxy(this.show, this));
			} else {
				this.element.on('click', $.proxy(this.show, this));
			}
		}
		
		this.viewMode = 0;
		this.weekStart = options.weekStart||this.element.data('date-weekstart')||0;
		this.weekEnd = this.weekStart == 0 ? 6 : this.weekStart - 1;
		this.fillDow();
		this.fillMonths();
		this.update();
		this.showMode();
	};
	
	Datepicker.prototype = {
		constructor: Datepicker,
		
		show: function(e) {
			this.picker.show();
			this.height = this.component ? this.component.outerHeight() : this.element.outerHeight();
			this.place();
			$(window).on('resize', $.proxy(this.place, this));
			if (e ) {
				e.stopPropagation();
				e.preventDefault();
			}
			if (!this.isInput) {
				$(document).on('mousedown', $.proxy(this.hide, this));
			}
			this.element.trigger({
				type: 'show',
				date: this.date
			});
		},
		
		hide: function(){
			this.picker.hide();
			$(window).off('resize', this.place);
			this.viewMode = 0;
			this.showMode();
			if (!this.isInput) {
				$(document).off('mousedown', this.hide);
			}
			this.setValue();
			this.element.trigger({
				type: 'hide',
				date: this.date
			});
		},
		
		setValue: function() {
			var formated = DPGlobal.formatDate(this.date, this.format);
			if (!this.isInput) {
				if (this.component){
					this.element.find('input').prop('value', formated);
				}
				this.element.data('date', formated);
			} else {
				this.element.prop('value', formated);
			}
		},
		
		place: function(){
			var offset = this.component ? this.component.offset() : this.element.offset();
			this.picker.css({
				top: offset.top + this.height,
				left: offset.left
			});
		},
		
		update: function(){
			this.date = DPGlobal.parseDate(
				this.isInput ? this.element.prop('value') : this.element.data('date'),
				this.format
			);
			this.viewDate = new Date(this.date);
			this.fill();
		},
		
		fillDow: function(){
			var dowCnt = this.weekStart;
			var html = '<tr>';
			while (dowCnt < this.weekStart + 7) {
				html += '<th class="dow">'+DPGlobal.dates.daysMin[(dowCnt++)%7]+'</th>';
			}
			html += '</tr>';
			this.picker.find('.datepicker-days thead').append(html);
		},
		
		fillMonths: function(){
			var html = '';
			var i = 0
			while (i < 12) {
				html += '<span class="month">'+DPGlobal.dates.monthsShort[i++]+'</span>';
			}
			this.picker.find('.datepicker-months td').append(html);
		},
		
		fill: function() {
			var d = new Date(this.viewDate),
				year = d.getFullYear(),
				month = d.getMonth(),
				currentDate = this.date.valueOf();
			this.picker.find('.datepicker-days th:eq(1)')
						.text(DPGlobal.dates.months[month]+' '+year);
			var prevMonth = new Date(year, month-1, 28,0,0,0,0),
				day = DPGlobal.getDaysInMonth(prevMonth.getFullYear(), prevMonth.getMonth());
			prevMonth.setDate(day);
			prevMonth.setDate(day - (prevMonth.getDay() - this.weekStart + 7)%7);
			var nextMonth = new Date(prevMonth);
			nextMonth.setDate(nextMonth.getDate() + 42);
			nextMonth = nextMonth.valueOf();
			html = [];
			var clsName;
			while(prevMonth.valueOf() < nextMonth) {
				if (prevMonth.getDay() == this.weekStart) {
					html.push('<tr>');
				}
				clsName = '';
				if (prevMonth.getMonth() < month) {
					clsName += ' old';
				} else if (prevMonth.getMonth() > month) {
					clsName += ' new';
				}
				if (prevMonth.valueOf() == currentDate) {
					clsName += ' active';
				}
				html.push('<td class="day'+clsName+'">'+prevMonth.getDate() + '</td>');
				if (prevMonth.getDay() == this.weekEnd) {
					html.push('</tr>');
				}
				prevMonth.setDate(prevMonth.getDate()+1);
			}
			this.picker.find('.datepicker-days tbody').empty().append(html.join(''));
			var currentYear = this.date.getFullYear();
			
			var months = this.picker.find('.datepicker-months')
						.find('th:eq(1)')
							.text(year)
							.end()
						.find('span').removeClass('active');
			if (currentYear == year) {
				months.eq(this.date.getMonth()).addClass('active');
			}
			
			html = '';
			year = parseInt(year/10, 10) * 10;
			var yearCont = this.picker.find('.datepicker-years')
								.find('th:eq(1)')
									.text(year + '-' + (year + 9))
									.end()
								.find('td');
			year -= 1;
			for (var i = -1; i < 11; i++) {
				html += '<span class="year'+(i == -1 || i == 10 ? ' old' : '')+(currentYear == year ? ' active' : '')+'">'+year+'</span>';
				year += 1;
			}
			yearCont.html(html);
		},
		
		click: function(e) {
			e.stopPropagation();
			e.preventDefault();
			var target = $(e.target).closest('span, td, th');
			if (target.length == 1) {
				switch(target[0].nodeName.toLowerCase()) {
					case 'th':
						switch(target[0].className) {
							case 'switch':
								this.showMode(1);
								break;
							case 'prev':
							case 'next':
								this.viewDate['set'+DPGlobal.modes[this.viewMode].navFnc].call(
									this.viewDate,
									this.viewDate['get'+DPGlobal.modes[this.viewMode].navFnc].call(this.viewDate) + 
									DPGlobal.modes[this.viewMode].navStep * (target[0].className == 'prev' ? -1 : 1)
								);
								this.fill();
								break;
						}
						break;
					case 'span':
						if (target.is('.month')) {
							var month = target.parent().find('span').index(target);
							this.viewDate.setMonth(month);
						} else {
							var year = parseInt(target.text(), 10)||0;
							this.viewDate.setFullYear(year);
						}
						this.showMode(-1);
						this.fill();
						break;
					case 'td':
						if (target.is('.day')){
							var day = parseInt(target.text(), 10)||1;
							var month = this.viewDate.getMonth();
							if (target.is('.old')) {
								month -= 1;
							} else if (target.is('.new')) {
								month += 1;
							}
							var year = this.viewDate.getFullYear();
							this.date = new Date(year, month, day,0,0,0,0);
							this.viewDate = new Date(year, month, day,0,0,0,0);
							this.fill();
							this.setValue();
							this.element.trigger({
								type: 'changeDate',
								date: this.date
							});
						}
						break;
				}
			}
		},
		
		mousedown: function(e){
			e.stopPropagation();
			e.preventDefault();
		},
		
		showMode: function(dir) {
			if (dir) {
				this.viewMode = Math.max(0, Math.min(2, this.viewMode + dir));
			}
			this.picker.find('>div').hide().filter('.datepicker-'+DPGlobal.modes[this.viewMode].clsName).show();
		}
	};
	
	$.fn.datepicker = function ( option ) {
		return this.each(function () {
			var $this = $(this),
				data = $this.data('datepicker'),
				options = typeof option == 'object' && option;
			if (!data) {
				$this.data('datepicker', (data = new Datepicker(this, $.extend({}, $.fn.datepicker.defaults,options))));
			}
			if (typeof option == 'string') data[option]();
		});
	};

	$.fn.datepicker.defaults = {
	};
	$.fn.datepicker.Constructor = Datepicker;
	
	var DPGlobal = {
		modes: [
			{
				clsName: 'days',
				navFnc: 'Month',
				navStep: 1
			},
			{
				clsName: 'months',
				navFnc: 'FullYear',
				navStep: 1
			},
			{
				clsName: 'years',
				navFnc: 'FullYear',
				navStep: 10
		}],
		dates:{
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
			daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
			daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		},
		isLeapYear: function (year) {
			return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
		},
		getDaysInMonth: function (year, month) {
			return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
		},
		parseFormat: function(format){
			var separator = format.match(/[.\/-].*?/),
				parts = format.split(/\W+/);
			if (!separator || !parts || parts.length == 0){
				throw new Error("Invalid date format.");
			}
			return {separator: separator, parts: parts};
		},
		parseDate: function(date, format) {
			var parts = date.split(format.separator),
				date = new Date(1970, 1, 1, 0, 0, 0),
				val;
			if (parts.length == format.parts.length) {
				for (var i=0, cnt = format.parts.length; i < cnt; i++) {
					val = parseInt(parts[i], 10)||1;
					switch(format.parts[i]) {
						case 'dd':
						case 'd':
							date.setDate(val);
							break;
						case 'mm':
						case 'm':
							date.setMonth(val - 1);
							break;
						case 'yy':
							date.setFullYear(2000 + val);
							break;
						case 'yyyy':
							date.setFullYear(val);
							break;
					}
				}
			}
			return date;
		},
		formatDate: function(date, format){
			var val = {
				d: date.getDate(),
				m: date.getMonth() + 1,
				yy: date.getFullYear().toString().substring(2),
				yyyy: date.getFullYear()
			};
			val.dd = (val.d < 10 ? '0' : '') + val.d;
			val.mm = (val.m < 10 ? '0' : '') + val.m;
			var date = [];
			for (var i=0, cnt = format.parts.length; i < cnt; i++) {
				date.push(val[format.parts[i]]);
			}
			return date.join(format.separator);
		},
		headTemplate: '<thead>'+
							'<tr>'+
								'<th class="prev"><i class="icon-arrow-left"/></th>'+
								'<th colspan="5" class="switch"></th>'+
								'<th class="next"><i class="icon-arrow-right"/></th>'+
							'</tr>'+
						'</thead>',
		contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>'
	};
	DPGlobal.template = '<div class="datepicker dropdown-menu">'+
							'<div class="datepicker-days">'+
								'<table class=" table-condensed">'+
									DPGlobal.headTemplate+
									'<tbody></tbody>'+
								'</table>'+
							'</div>'+
							'<div class="datepicker-months">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-years">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
								'</table>'+
							'</div>'+
						'</div>';

}( window.jQuery )
;
/* ============================================================
 * bootstrap-dropdown.js v2.0.2
 * http://twitter.github.com/bootstrap/javascript.html#dropdowns
 * ============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */



!function( $ ){

  "use strict"

 /* DROPDOWN CLASS DEFINITION
  * ========================= */

  var toggle = '[data-toggle="dropdown"]'
    , Dropdown = function ( element ) {
        var $el = $(element).on('click.dropdown.data-api', this.toggle)
        $('html').on('click.dropdown.data-api', function () {
          $el.parent().removeClass('open')
        })
      }

  Dropdown.prototype = {

    constructor: Dropdown

  , toggle: function ( e ) {
      var $this = $(this)
        , selector = $this.attr('data-target')
        , $parent
        , isActive

      if (!selector) {
        selector = $this.attr('href')
        selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
      }

      $parent = $(selector)
      $parent.length || ($parent = $this.parent())

      isActive = $parent.hasClass('open')

      clearMenus()
      !isActive && $parent.toggleClass('open')

      return false
    }

  }

  function clearMenus() {
    $(toggle).parent().removeClass('open')
  }


  /* DROPDOWN PLUGIN DEFINITION
   * ========================== */

  $.fn.dropdown = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('dropdown')
      if (!data) $this.data('dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.dropdown.Constructor = Dropdown


  /* APPLY TO STANDARD DROPDOWN ELEMENTS
   * =================================== */

  $(function () {
    $('html').on('click.dropdown.data-api', clearMenus)
    $('body').on('click.dropdown.data-api', toggle, Dropdown.prototype.toggle)
  })

}( window.jQuery );
var jwplayer=function(a){return jwplayer.constructor(a)};jwplayer.constructor=function(a){};var $jw=jwplayer;jwplayer.version="5.4.1530";(function(b){b.utils=function(){};b.utils.typeOf=function(d){var c=typeof d;if(c==="object"){if(d){if(d instanceof Array){c="array"}}else{c="null"}}return c};b.utils.extend=function(){var c=b.utils.extend["arguments"];if(c.length>1){for(var e=1;e<c.length;e++){for(var d in c[e]){c[0][d]=c[e][d]}}return c[0]}return null};b.utils.clone=function(f){var c;var d=b.utils.clone["arguments"];if(d.length==1){switch(b.utils.typeOf(d[0])){case"object":c={};for(var e in d[0]){c[e]=b.utils.clone(d[0][e])}break;case"array":c=[];for(var e in d[0]){c[e]=b.utils.clone(d[0][e])}break;default:return d[0];break}}return c};b.utils.extension=function(c){c=c.substring(c.lastIndexOf("/")+1,c.length);c=c.split("?")[0];if(c.lastIndexOf(".")>-1){return c.substr(c.lastIndexOf(".")+1,c.length).toLowerCase()}return""};b.utils.html=function(c,d){c.innerHTML=d};b.utils.append=function(c,d){c.appendChild(d)};b.utils.wrap=function(c,d){c.parentNode.replaceChild(d,c);d.appendChild(c)};b.utils.ajax=function(f,e,c){var d;if(window.XMLHttpRequest){d=new XMLHttpRequest()}else{d=new ActiveXObject("Microsoft.XMLHTTP")}d.onreadystatechange=function(){if(d.readyState===4){if(d.status===200){if(e){e(d)}}else{if(c){c(f)}}}};d.open("GET",f,true);d.send(null);return d};b.utils.load=function(d,e,c){d.onreadystatechange=function(){if(d.readyState===4){if(d.status===200){if(e){e()}}else{if(c){c()}}}}};b.utils.find=function(d,c){return d.getElementsByTagName(c)};b.utils.append=function(c,d){c.appendChild(d)};b.utils.isIE=function(){return(!+"\v1")};b.utils.isLegacyAndroid=function(){var c=navigator.userAgent.toLowerCase();return(c.match(/android 2.[012]/i)!==null)};b.utils.isIOS=function(){var c=navigator.userAgent.toLowerCase();return(c.match(/iP(hone|ad)/i)!==null)};b.utils.getFirstPlaylistItemFromConfig=function(c){var d={};var e;if(c.playlist&&c.playlist.length){e=c.playlist[0]}else{e=c}d.file=e.file;d.levels=e.levels;d.streamer=e.streamer;d.playlistfile=e.playlistfile;if(d.file&&d.file.toLowerCase().indexOf("youtube.com")>-1){d.provider="youtube"}if(d.streamer&&d.streamer.toLowerCase().indexOf("rtmp://")==0){d.provider="rtmp"}if(e.type){d.provider=e.type.toLowerCase()}else{if(e.provider){d.provider=e.provider.toLowerCase()}}return d};b.utils.flashSupportsConfig=function(c){if(b.utils.hasFlash()){if(c){var e=b.utils.getFirstPlaylistItemFromConfig(c);if(typeof e.file=="undefined"&&typeof e.levels=="undefined"){return true}else{if(e.file){return b.utils.flashCanPlay(e.file,e.provider)}else{if(e.levels&&e.levels.length){for(var d=0;d<e.levels.length;d++){if(e.levels[d].file&&b.utils.flashCanPlay(e.levels[d].file,e.provider)){return true}}}}}}else{return true}}return false};b.utils.flashCanPlay=function(c,e){var d=["video","http","sound","image"];if(e&&(d.toString().indexOf(e<0))){return true}var f=b.utils.extension(c);if(!f){return true}if(b.utils.extensionmap[f]!==undefined&&b.utils.extensionmap[f].flash===undefined){return false}return true};b.utils.html5SupportsConfig=function(d){var c=document.createElement("video");if(!!c.canPlayType){if(d){var f=b.utils.getFirstPlaylistItemFromConfig(d);if(typeof f.file=="undefined"&&typeof f.levels=="undefined"){return true}else{if(f.file){return b.utils.html5CanPlay(c,f.file,f.provider,f.playlistfile)}else{if(f.levels&&f.levels.length){for(var e=0;e<f.levels.length;e++){if(f.levels[e].file&&b.utils.html5CanPlay(c,f.levels[e].file,f.provider,f.playlistfile)){return true}}}}}}else{return true}}return false};b.utils.html5CanPlay=function(e,d,f,c){if(c){return false}if(f&&f=="youtube"){return true}if(f&&f!="video"&&f!="http"){return false}var g=b.utils.extension(d);if(b.utils.isLegacyAndroid()&&g.match(/m4v|mp4/)){return true}return b.utils.browserCanPlay(e,g)};b.utils.browserCanPlay=function(d,e){var c;if(!e){return true}else{if(b.utils.extensionmap[e]!==undefined&&b.utils.extensionmap[e].html5===undefined){return false}else{if(b.utils.extensionmap[e]!==undefined&&b.utils.extensionmap[e].html5!==undefined){c=b.utils.extensionmap[e].html5}else{c="video/"+e+";"}}}return d.canPlayType(c)};b.utils.downloadSupportsConfig=function(c){if(c){var e=b.utils.getFirstPlaylistItemFromConfig(c);if(typeof e.file=="undefined"&&typeof e.levels=="undefined"){return true}else{if(e.file){return b.utils.canDownload(e.file,e.provider,e.playlistfile)}else{if(e.levels&&e.levels.length){for(var d=0;d<e.levels.length;d++){if(e.levels[d].file&&b.utils.canDownload(e.levels[d].file,e.provider,e.playlistfile)){return true}}}}}}else{return true}};b.utils.canDownload=function(d,f,c){if(c){return false}var e=["image","sound","youtube","http"];if(f&&(e.toString().indexOf(f)>-1)){return true}if(!f||(f&&f=="video")){var g=b.utils.extension(d);if(g&&b.utils.extensionmap[g]){return true}}return false};b.utils.getOuterHTML=function(d){if(d.outerHTML){return d.outerHTML}else{var e=d.parentNode;var c=document.createElement(e.tagName);c.appendChild(d);var f=c.innerHTML;e.appendChild(d);return f}};b.utils.setOuterHTML=function(f,e){if(f.outerHTML){f.outerHTML=e}else{var g=document.createElement("div");g.innerHTML=e;var c=document.createRange();c.selectNodeContents(g);var d=c.extractContents();f.parentNode.insertBefore(d,f);f.parentNode.removeChild(f)}};b.utils.hasFlash=function(){return(typeof navigator.plugins!="undefined"&&typeof navigator.plugins["Shockwave Flash"]!="undefined")||(typeof window.ActiveXObject!="undefined")};b.utils.getPluginName=function(c){if(c.lastIndexOf("/")>=0){c=c.substring(c.lastIndexOf("/")+1,c.length)}if(c.lastIndexOf("-")>=0){c=c.substring(0,c.lastIndexOf("-"))}if(c.lastIndexOf(".swf")>=0){c=c.substring(0,c.lastIndexOf(".swf"))}return c};b.utils.getAbsolutePath=function(j,h){if(h===undefined){h=document.location.href}if(j===undefined){return undefined}if(a(j)){return j}var k=h.substring(0,h.indexOf("://")+3);var g=h.substring(k.length,h.indexOf("/",k.length+1));var d;if(j.indexOf("/")===0){d=j.split("/")}else{var e=h.split("?")[0];e=e.substring(k.length+g.length+1,e.lastIndexOf("/"));d=e.split("/").concat(j.split("/"))}var c=[];for(var f=0;f<d.length;f++){if(!d[f]||d[f]===undefined||d[f]=="."){continue}else{if(d[f]==".."){c.pop()}else{c.push(d[f])}}}return k+g+"/"+c.join("/")};function a(d){if(d===null){return}var e=d.indexOf("://");var c=d.indexOf("?");return(e>0&&(c<0||(c>e)))}b.utils.mapEmpty=function(c){for(var d in c){return false}return true};b.utils.mapLength=function(d){var c=0;for(var e in d){c++}return c};b.utils.log=function(d,c){if(typeof console!="undefined"&&typeof console.log!="undefined"){if(c){console.log(d,c)}else{console.log(d)}}};b.utils.css=function(d,g,c){if(d!==undefined){for(var e in g){try{if(typeof g[e]==="undefined"){continue}else{if(typeof g[e]=="number"&&!(e=="zIndex"||e=="opacity")){if(isNaN(g[e])){continue}if(e.match(/color/i)){g[e]="#"+b.utils.strings.pad(g[e].toString(16),6)}else{g[e]=Math.ceil(g[e])+"px"}}}d.style[e]=g[e]}catch(f){}}}};b.utils.isYouTube=function(c){return c.indexOf("youtube.com")>-1};b.utils.getYouTubeId=function(c){c.indexOf("youtube.com">0)};b.utils.transform=function(c,d){c.style.webkitTransform=d;c.style.MozTransform=d;c.style.OTransform=d};b.utils.stretch=function(h,m,l,f,k,g){if(typeof l=="undefined"||typeof f=="undefined"||typeof k=="undefined"||typeof g=="undefined"){return}var d=l/k;var e=f/g;var j=0;var i=0;m.style.overflow="hidden";b.utils.transform(m,"");var c={};switch(h.toLowerCase()){case b.utils.stretching.NONE:c.width=k;c.height=g;break;case b.utils.stretching.UNIFORM:if(d>e){c.width=k*e;c.height=g*e}else{c.width=k*d;c.height=g*d}break;case b.utils.stretching.FILL:if(d>e){c.width=k*d;c.height=g*d}else{c.width=k*e;c.height=g*e}break;case b.utils.stretching.EXACTFIT:b.utils.transform(m,["scale(",d,",",e,")"," translate(0px,0px)"].join(""));c.width=k;c.height=g;break;default:break}c.top=(f-c.height)/2;c.left=(l-c.width)/2;b.utils.css(m,c)};b.utils.stretching={NONE:"none",FILL:"fill",UNIFORM:"uniform",EXACTFIT:"exactfit"}})(jwplayer);(function(e){e.utils.mediaparser=function(){};var g={element:{width:"width",height:"height",id:"id","class":"className",name:"name"},media:{src:"file",preload:"preload",autoplay:"autostart",loop:"repeat",controls:"controls"},source:{src:"file",type:"type",media:"media","data-jw-width":"width","data-jw-bitrate":"bitrate"},video:{poster:"image"}};var f={};e.utils.mediaparser.parseMedia=function(i){return d(i)};function c(j,i){if(i===undefined){i=g[j]}else{e.utils.extend(i,g[j])}return i}function d(m,i){if(f[m.tagName.toLowerCase()]&&(i===undefined)){return f[m.tagName.toLowerCase()](m)}else{i=c("element",i);var n={};for(var j in i){if(j!="length"){var l=m.getAttribute(j);if(!(l===""||l===undefined||l===null)){n[i[j]]=m.getAttribute(j)}}}var k=m.style["#background-color"];if(k&&!(k=="transparent"||k=="rgba(0, 0, 0, 0)")){n.screencolor=k}return n}}function h(o,k){k=c("media",k);var m=[];if(e.utils.isIE()){var l=o.nextSibling;if(l!==undefined){while(l.tagName.toLowerCase()=="source"){m.push(a(l));l=l.nextSibling}}}else{var j=e.utils.selectors("source",o);for(var n in j){if(!isNaN(n)){m.push(a(j[n]))}}}var p=d(o,k);if(p.file!==undefined){m[0]={file:p.file}}p.levels=m;return p}function a(k,j){j=c("source",j);var i=d(k,j);i.width=i.width?i.width:0;i.bitrate=i.bitrate?i.bitrate:0;return i}function b(k,j){j=c("video",j);var i=h(k,j);return i}e.utils.mediaparser.replaceMediaElement=function(i,k){if(e.utils.isIE()){var l=false;var n=[];var m=i.nextSibling;while(m&&!l){n.push(m);if(m.nodeType==1&&m.tagName.toLowerCase()==("/")+i.tagName.toLowerCase()){l=true}m=m.nextSibling}if(l){while(n.length>0){var j=n.pop();j.parentNode.removeChild(j)}}i.outerHTML=k}};f.media=h;f.audio=h;f.source=a;f.video=b})(jwplayer);(function(a){a.utils.selectors=function(b,d){if(d===undefined){d=document}b=a.utils.strings.trim(b);var c=b.charAt(0);if(c=="#"){return d.getElementById(b.substr(1))}else{if(c=="."){if(d.getElementsByClassName){return d.getElementsByClassName(b.substr(1))}else{return a.utils.selectors.getElementsByTagAndClass("*",b.substr(1))}}else{if(b.indexOf(".")>0){selectors=b.split(".");return a.utils.selectors.getElementsByTagAndClass(selectors[0],selectors[1])}else{return d.getElementsByTagName(b)}}}return null};a.utils.selectors.getElementsByTagAndClass=function(e,h,g){elements=[];if(g===undefined){g=document}var f=g.getElementsByTagName(e);for(var d=0;d<f.length;d++){if(f[d].className!==undefined){var c=f[d].className.split(" ");for(var b=0;b<c.length;b++){if(c[b]==h){elements.push(f[d])}}}}return elements}})(jwplayer);(function(a){a.utils.strings=function(){};a.utils.strings.trim=function(b){return b.replace(/^\s*/,"").replace(/\s*$/,"")};a.utils.strings.pad=function(c,d,b){if(!b){b="0"}while(c.length<d){c=b+c}return c}})(jwplayer);(function(c){var d=new RegExp(/^(#|0x)[0-9a-fA-F]{3,6}/);c.utils.typechecker=function(g,f){f=f===null?b(g):f;return e(g,f)};function b(f){var g=["true","false","t","f"];if(g.toString().indexOf(f.toLowerCase().replace(" ",""))>=0){return"boolean"}else{if(d.test(f)){return"color"}else{if(!isNaN(parseInt(f,10))&&parseInt(f,10).toString().length==f.length){return"integer"}else{if(!isNaN(parseFloat(f))&&parseFloat(f).toString().length==f.length){return"float"}}}}return"string"}function e(g,f){if(f===null){return g}switch(f){case"color":if(g.length>0){return a(g)}return null;case"integer":return parseInt(g,10);case"float":return parseFloat(g);case"boolean":if(g.toLowerCase()=="true"){return true}else{if(g=="1"){return true}}return false}return g}function a(f){switch(f.toLowerCase()){case"blue":return parseInt("0000FF",16);case"green":return parseInt("00FF00",16);case"red":return parseInt("FF0000",16);case"cyan":return parseInt("00FFFF",16);case"magenta":return parseInt("FF00FF",16);case"yellow":return parseInt("FFFF00",16);case"black":return parseInt("000000",16);case"white":return parseInt("FFFFFF",16);default:f=f.replace(/(#|0x)?([0-9A-F]{3,6})$/gi,"$2");if(f.length==3){f=f.charAt(0)+f.charAt(0)+f.charAt(1)+f.charAt(1)+f.charAt(2)+f.charAt(2)}return parseInt(f,16)}return parseInt("000000",16)}})(jwplayer);(function(a){var b={};a.utils.animations=function(){};a.utils.animations.transform=function(c,d){c.style.webkitTransform=d;c.style.MozTransform=d;c.style.OTransform=d};a.utils.animations.transformOrigin=function(c,d){c.style.webkitTransformOrigin=d;c.style.MozTransformOrigin=d;c.style.OTransformOrigin=d};a.utils.animations.rotate=function(c,d){a.utils.animations.transform(c,["rotate(",d,"deg)"].join(""))};a.utils.cancelAnimation=function(c){delete b[c.id]};a.utils.fadeTo=function(l,f,e,i,h,d){if(b[l.id]!=d&&d!==undefined){return}var c=new Date().getTime();if(d>c){setTimeout(function(){a.utils.fadeTo(l,f,e,i,0,d)},d-c)}l.style.display="block";if(i===undefined){i=l.style.opacity===""?1:l.style.opacity}if(l.style.opacity==f&&l.style.opacity!==""&&d!==undefined){if(f===0){l.style.display="none"}return}if(d===undefined){d=c;b[l.id]=d}if(h===undefined){h=0}var j=(c-d)/(e*1000);j=j>1?1:j;var k=f-i;var g=i+(j*k);if(g>1){g=1}else{if(g<0){g=0}}l.style.opacity=g;if(h>0){b[l.id]=d+h*1000;a.utils.fadeTo(l,f,e,i,0,b[l.id]);return}setTimeout(function(){a.utils.fadeTo(l,f,e,i,0,d)},10)}})(jwplayer);(function(a){a.utils.extensionmap={"3gp":{html5:"video/3gpp",flash:"video"},"3gpp":{html5:"video/3gpp"},"3g2":{html5:"video/3gpp2",flash:"video"},"3gpp2":{html5:"video/3gpp2"},flv:{flash:"video"},f4a:{html5:"audio/mp4"},f4b:{html5:"audio/mp4",flash:"video"},f4p:{html5:"video/mp4",flash:"video"},f4v:{html5:"video/mp4",flash:"video"},mov:{html5:"video/quicktime",flash:"video"},m4a:{html5:"audio/mp4",flash:"video"},m4b:{html5:"audio/mp4"},m4p:{html5:"audio/mp4"},m4v:{html5:"video/mp4",flash:"video"},mkv:{html5:"video/x-matroska"},mp4:{html5:"video/mp4",flash:"video"},rbs:{flash:"sound"},sdp:{html5:"application/sdp",flash:"video"},vp6:{html5:"video/x-vp6"},aac:{html5:"audio/aac",flash:"video"},mp3:{flash:"sound"},ogg:{html5:"audio/ogg"},ogv:{html5:"video/ogg"},webm:{html5:"video/webm"},m3u8:{html5:"audio/x-mpegurl"},gif:{flash:"image"},jpeg:{flash:"image"},jpg:{flash:"image"},swf:{flash:"image"},png:{flash:"image"}}})(jwplayer);(function(b){var a=[];b.constructor=function(c){return b.api.selectPlayer(c)};b.api=function(){};b.api.events={API_READY:"jwplayerAPIReady",JWPLAYER_READY:"jwplayerReady",JWPLAYER_FULLSCREEN:"jwplayerFullscreen",JWPLAYER_RESIZE:"jwplayerResize",JWPLAYER_ERROR:"jwplayerError",JWPLAYER_MEDIA_BUFFER:"jwplayerMediaBuffer",JWPLAYER_MEDIA_BUFFER_FULL:"jwplayerMediaBufferFull",JWPLAYER_MEDIA_ERROR:"jwplayerMediaError",JWPLAYER_MEDIA_LOADED:"jwplayerMediaLoaded",JWPLAYER_MEDIA_COMPLETE:"jwplayerMediaComplete",JWPLAYER_MEDIA_TIME:"jwplayerMediaTime",JWPLAYER_MEDIA_VOLUME:"jwplayerMediaVolume",JWPLAYER_MEDIA_META:"jwplayerMediaMeta",JWPLAYER_MEDIA_MUTE:"jwplayerMediaMute",JWPLAYER_PLAYER_STATE:"jwplayerPlayerState",JWPLAYER_PLAYLIST_LOADED:"jwplayerPlaylistLoaded",JWPLAYER_PLAYLIST_ITEM:"jwplayerPlaylistItem"};b.api.events.state={BUFFERING:"BUFFERING",IDLE:"IDLE",PAUSED:"PAUSED",PLAYING:"PLAYING"};b.api.PlayerAPI=function(d){this.container=d;this.id=d.id;var j={};var o={};var c=[];var g=undefined;var i=false;var h=[];var m=b.utils.getOuterHTML(d);var n={};var k=0;this.setPlayer=function(p){g=p};this.stateListener=function(p,q){if(!o[p]){o[p]=[];this.eventListener(b.api.events.JWPLAYER_PLAYER_STATE,f(p))}o[p].push(q);return this};function f(p){return function(r){var q=r.newstate,t=r.oldstate;if(q==p){var s=o[q];if(s){for(var u=0;u<s.length;u++){if(typeof s[u]=="function"){s[u].call(this,{oldstate:t,newstate:q})}}}}}}this.addInternalListener=function(p,q){p.jwAddEventListener(q,'function(dat) { jwplayer("'+this.id+'").dispatchEvent("'+q+'", dat); }')};this.eventListener=function(p,q){if(!j[p]){j[p]=[];if(g&&i){this.addInternalListener(g,p)}}j[p].push(q);return this};this.dispatchEvent=function(r){if(j[r]){var q=e(r,arguments[1]);for(var p=0;p<j[r].length;p++){if(typeof j[r][p]=="function"){j[r][p].call(this,q)}}}};function e(r,p){var t=b.utils.extend({},p);if(r==b.api.events.JWPLAYER_FULLSCREEN&&!t.fullscreen){t.fullscreen=t.message=="true"?true:false;delete t.message}else{if(typeof t.data=="object"){t=b.utils.extend(t,t.data);delete t.data}}var q=["position","duration","offset"];for(var s in q){if(t[q[s]]){t[q[s]]=Math.round(t[q[s]]*1000)/1000}}return t}this.callInternal=function(q,p){if(i){if(typeof g!="undefined"&&typeof g[q]=="function"){if(p!==undefined){return(g[q])(p)}else{return(g[q])()}}return null}else{h.push({method:q,parameters:p})}};this.playerReady=function(r){i=true;if(!g){this.setPlayer(document.getElementById(r.id))}this.container=document.getElementById(this.id);for(var p in j){this.addInternalListener(g,p)}this.eventListener(b.api.events.JWPLAYER_PLAYLIST_ITEM,function(s){if(s.index!==undefined){k=s.index}n={}});this.eventListener(b.api.events.JWPLAYER_MEDIA_META,function(s){b.utils.extend(n,s.metadata)});this.dispatchEvent(b.api.events.API_READY);while(h.length>0){var q=h.shift();this.callInternal(q.method,q.parameters)}};this.getItemMeta=function(){return n};this.getCurrentItem=function(){return k};this.destroy=function(){j={};h=[];if(b.utils.getOuterHTML(this.container)!=m){b.api.destroyPlayer(this.id,m)}};function l(r,t,s){var p=[];if(!t){t=0}if(!s){s=r.length-1}for(var q=t;q<=s;q++){p.push(r[q])}return p}};b.api.PlayerAPI.prototype={container:undefined,options:undefined,id:undefined,getBuffer:function(){return this.callInternal("jwGetBuffer")},getDuration:function(){return this.callInternal("jwGetDuration")},getFullscreen:function(){return this.callInternal("jwGetFullscreen")},getHeight:function(){return this.callInternal("jwGetHeight")},getLockState:function(){return this.callInternal("jwGetLockState")},getMeta:function(){return this.getItemMeta()},getMute:function(){return this.callInternal("jwGetMute")},getPlaylist:function(){var d=this.callInternal("jwGetPlaylist");for(var c=0;c<d.length;c++){if(d[c].index===undefined){d[c].index=c}}return d},getPlaylistItem:function(c){if(c===undefined){c=this.getCurrentItem()}return this.getPlaylist()[c]},getPosition:function(){return this.callInternal("jwGetPosition")},getState:function(){return this.callInternal("jwGetState")},getVolume:function(){return this.callInternal("jwGetVolume")},getWidth:function(){return this.callInternal("jwGetWidth")},setFullscreen:function(c){if(c===undefined){this.callInternal("jwSetFullscreen",!this.callInternal("jwGetFullscreen"))}else{this.callInternal("jwSetFullscreen",c)}return this},setMute:function(c){if(c===undefined){this.callInternal("jwSetMute",!this.callInternal("jwGetMute"))}else{this.callInternal("jwSetMute",c)}return this},lock:function(){return this},unlock:function(){return this},load:function(c){this.callInternal("jwLoad",c);return this},playlistItem:function(c){this.callInternal("jwPlaylistItem",c);return this},playlistPrev:function(){this.callInternal("jwPlaylistPrev");return this},playlistNext:function(){this.callInternal("jwPlaylistNext");return this},resize:function(d,c){this.container.width=d;this.container.height=c;return this},play:function(c){if(typeof c=="undefined"){c=this.getState();if(c==b.api.events.state.PLAYING||c==b.api.events.state.BUFFERING){this.callInternal("jwPause")}else{this.callInternal("jwPlay")}}else{this.callInternal("jwPlay",c)}return this},pause:function(c){if(typeof c=="undefined"){c=this.getState();if(c==b.api.events.state.PLAYING||c==b.api.events.state.BUFFERING){this.callInternal("jwPause")}else{this.callInternal("jwPlay")}}else{this.callInternal("jwPause",c)}return this},stop:function(){this.callInternal("jwStop");return this},seek:function(c){this.callInternal("jwSeek",c);return this},setVolume:function(c){this.callInternal("jwSetVolume",c);return this},onBufferChange:function(c){return this.eventListener(b.api.events.JWPLAYER_MEDIA_BUFFER,c)},onBufferFull:function(c){return this.eventListener(b.api.events.JWPLAYER_MEDIA_BUFFER_FULL,c)},onError:function(c){return this.eventListener(b.api.events.JWPLAYER_ERROR,c)},onFullscreen:function(c){return this.eventListener(b.api.events.JWPLAYER_FULLSCREEN,c)},onMeta:function(c){return this.eventListener(b.api.events.JWPLAYER_MEDIA_META,c)},onMute:function(c){return this.eventListener(b.api.events.JWPLAYER_MEDIA_MUTE,c)},onPlaylist:function(c){return this.eventListener(b.api.events.JWPLAYER_PLAYLIST_LOADED,c)},onPlaylistItem:function(c){return this.eventListener(b.api.events.JWPLAYER_PLAYLIST_ITEM,c)},onReady:function(c){return this.eventListener(b.api.events.API_READY,c)},onResize:function(c){return this.eventListener(b.api.events.JWPLAYER_RESIZE,c)},onComplete:function(c){return this.eventListener(b.api.events.JWPLAYER_MEDIA_COMPLETE,c)},onTime:function(c){return this.eventListener(b.api.events.JWPLAYER_MEDIA_TIME,c)},onVolume:function(c){return this.eventListener(b.api.events.JWPLAYER_MEDIA_VOLUME,c)},onBuffer:function(c){return this.stateListener(b.api.events.state.BUFFERING,c)},onPause:function(c){return this.stateListener(b.api.events.state.PAUSED,c)},onPlay:function(c){return this.stateListener(b.api.events.state.PLAYING,c)},onIdle:function(c){return this.stateListener(b.api.events.state.IDLE,c)},setup:function(c){return this},remove:function(){this.destroy()},initializePlugin:function(c,d){return this}};b.api.selectPlayer=function(d){var c;if(d===undefined){d=0}if(d.nodeType){c=d}else{if(typeof d=="string"){c=document.getElementById(d)}}if(c){var e=b.api.playerById(c.id);if(e){return e}else{return b.api.addPlayer(new b.api.PlayerAPI(c))}}else{if(typeof d=="number"){return b.getPlayers()[d]}}return null};b.api.playerById=function(d){for(var c=0;c<a.length;c++){if(a[c].id==d){return a[c]}}return null};b.api.addPlayer=function(c){for(var d=0;d<a.length;d++){if(a[d]==c){return c}}a.push(c);return c};b.api.destroyPlayer=function(f,d){var e=-1;for(var h=0;h<a.length;h++){if(a[h].id==f){e=h;continue}}if(e>=0){var c=document.getElementById(a[e].id);if(c){if(d){b.utils.setOuterHTML(c,d)}else{var g=document.createElement("div");g.setAttribute("id",c.id);c.parentNode.replaceChild(g,c)}}a.splice(e,1)}return null};b.getPlayers=function(){return a.slice(0)}})(jwplayer);var _userPlayerReady=(typeof playerReady=="function")?playerReady:undefined;playerReady=function(b){var a=jwplayer.api.playerById(b.id);if(a){a.playerReady(b)}if(_userPlayerReady){_userPlayerReady.call(this,b)}};(function(a){a.embed=function(){};a.embed.Embedder=function(d){this.constructor(d)};function c(){return[{type:"flash",src:"player.swf"},{type:"html5"},{type:"download"}]}a.embed.defaults={width:400,height:300,players:c(),components:{controlbar:{position:"over"}}};a.embed.Embedder.prototype={config:undefined,api:undefined,events:{},players:undefined,constructor:function(e){this.api=e;var d=a.utils.mediaparser.parseMedia(this.api.container);this.config=this.parseConfig(a.utils.extend({},a.embed.defaults,d,this.api.config))},embedPlayer:function(){var e=this.players[0];if(e&&e.type){switch(e.type){case"flash":if(a.utils.flashSupportsConfig(this.config)){if(this.config.file&&!this.config.provider){switch(a.utils.extension(this.config.file).toLowerCase()){case"webm":case"ogv":case"ogg":this.config.provider="video";break}}if(this.config.levels||this.config.playlist){this.api.onReady(this.loadAfterReady(this.config))}this.config.id=this.api.id;var j=a.embed.embedFlash(document.getElementById(this.api.id),e,this.config);this.api.container=j;this.api.setPlayer(j)}else{this.players.splice(0,1);return this.embedPlayer()}break;case"html5":if(a.utils.html5SupportsConfig(this.config)){var g=a.embed.embedHTML5(document.getElementById(this.api.id),e,this.config);this.api.container=document.getElementById(this.api.id);this.api.setPlayer(g)}else{this.players.splice(0,1);return this.embedPlayer()}break;case"download":if(a.utils.downloadSupportsConfig(this.config)){var f=a.utils.getFirstPlaylistItemFromConfig(this.config);var d=a.embed.embedDownloadLink(document.getElementById(this.api.id),e,this.config);this.api.container=document.getElementById(this.api.id);this.api.setPlayer(d)}else{this.players.splice(0,1);return this.embedPlayer()}break}}else{var i=document.createElement("div");this.api.container.appendChild(i);i.style.position="relative";var h=document.createElement("p");i.appendChild(h);h.innerHTML="No suitable players found";a.embed.embedLogo(a.utils.extend({position:"bottom-right",margin:0},this.config.components.logo),"none",i,this.api.id)}this.setupEvents();return this.api},setupEvents:function(){for(var d in this.events){if(typeof this.api[d]=="function"){(this.api[d]).call(this.api,this.events[d])}}},loadAfterReady:function(d){return function(f){if(d.playlist){this.load(d.playlist)}else{if(d.levels){var e=this.getPlaylistItem(0);if(!e){e=d}if(!e.image){e.image=d.image}if(!e.levels){e.levels=d.levels}this.load(e)}}}},parseConfig:function(d){var h=a.utils.extend({},d);for(var e in h){if(e.indexOf(".")>-1){var g=e.split(".");for(var f in g){if(f==g.length-1){d[g[f]]=h[e]}else{if(d[g[f]]===undefined){d[g[f]]={}}d=d[g[f]]}}}}if(typeof h.playlist=="string"){if(!h.components.playlist){h.components.playlist={}}h.components.playlist.position=h.playlist;delete h.playlist}if(typeof h.controlbar=="string"){if(!h.components.controlbar){h.components.controlbar={}}h.components.controlbar.position=h.controlbar;delete h.controlbar}if(h.events){this.events=h.events;delete h.events}if(h.players){this.players=h.players;delete h.players}if(h.plugins){if(typeof h.plugins=="object"){h=a.utils.extend(h,a.embed.parsePlugins(h.plugins))}}if(h.components){if(typeof h.plugins=="object"){h=a.utils.extend(h,a.embed.parseComponents(h.components))}}return h}};a.embed.embedFlash=function(f,h,k){var g=a.utils.extend({},k);var d=g.width;delete g.width;var l=g.height;delete g.height;delete g.levels;delete g.playlist;var e="opaque";if(g.wmode){e=g.wmode}a.embed.parseConfigBlock(g,"components");a.embed.parseConfigBlock(g,"providers");if(a.utils.isIE()){var j='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+d+'" height="'+l+'" id="'+f.id+'" name="'+f.id+'">';j+='<param name="movie" value="'+h.src+'">';j+='<param name="allowfullscreen" value="true">';j+='<param name="allowscriptaccess" value="always">';j+='<param name="wmode" value="'+e+'">';j+='<param name="flashvars" value="'+a.embed.jsonToFlashvars(g)+'">';j+="</object>";if(f.tagName.toLowerCase()=="video"){a.utils.mediaparser.replaceMediaElement(f,j)}else{f.outerHTML=j}return document.getElementById(f.id)}else{var i=document.createElement("object");i.setAttribute("type","application/x-shockwave-flash");i.setAttribute("data",h.src);i.setAttribute("width",d);i.setAttribute("height",l);i.setAttribute("id",f.id);i.setAttribute("name",f.id);a.embed.appendAttribute(i,"allowfullscreen","true");a.embed.appendAttribute(i,"allowscriptaccess","always");a.embed.appendAttribute(i,"wmode",e);a.embed.appendAttribute(i,"flashvars",a.embed.jsonToFlashvars(g));f.parentNode.replaceChild(i,f);return i}};a.embed.embedHTML5=function(e,g,f){if(a.html5){e.innerHTML="";var d=a.utils.extend({screencolor:"0x000000"},f);a.embed.parseConfigBlock(d,"components");if(d.levels&&!d.sources){d.sources=f.levels}if(d.skin&&d.skin.toLowerCase().indexOf(".zip")>0){d.skin=d.skin.replace(/\.zip/i,".xml")}return new (a.html5(e)).setup(d)}else{return null}};a.embed.embedLogo=function(o,n,e,g){var l={prefix:"http://l.longtailvideo.com/"+n+"/",file:"logo.png",link:"http://www.longtailvideo.com/players/jw-flv-player/",margin:8,out:0.5,over:1,timeout:3,hide:false,position:"bottom-left"};_css=a.utils.css;var d;var k;m();function m(){q();f();i()}function q(){if(l.prefix){var s=a.version.split(/\W/).splice(0,2).join("/");if(l.prefix.indexOf(s)<0){l.prefix+=s+"/"}}k=a.utils.extend({},l)}function r(){var u={border:"none",textDecoration:"none",position:"absolute",cursor:"pointer",zIndex:10};u.display=k.hide?"none":"block";var t=k.position.toLowerCase().split("-");for(var s in t){u[t[s]]=k.margin}return u}function f(){d=document.createElement("img");d.id=g+"_jwplayer_logo";d.style.display="none";d.onload=function(s){_css(d,r());h()};if(!k.file){return}if(k.file.indexOf("http://")===0){d.src=k.file}else{d.src=k.prefix+k.file}}if(!k.file){return}function i(){if(k.link){d.onmouseover=j;d.onmouseout=h;d.onclick=p}else{this.mouseEnabled=false}}function p(s){if(typeof s!="undefined"){s.preventDefault();s.stopPropagation()}if(k.link){window.open(k.link,"_blank")}return}function h(s){if(k.link){d.style.opacity=k.out}return}function j(s){if(k.hide){d.style.opacity=k.over}return}e.appendChild(d)};a.embed.embedDownloadLink=function(e,h,o){var g=a.utils.extend({},o);var n={};var f=o.width?o.width:480;if(typeof f!="number"){f=parseInt(f,10)}var k=o.height?o.height:320;if(typeof k!="number"){k=parseInt(k,10)}var q,l,j;var p={};if(o.playlist&&o.playlist.length){p.file=o.playlist[0].file;l=o.playlist[0].image;p.levels=o.playlist[0].levels}else{p.file=o.file;l=o.image;p.levels=o.levels}if(p.file){q=p.file}else{if(p.levels&&p.levels.length){q=p.levels[0].file}}j=q?"pointer":"auto";var i={display:{style:{cursor:j,width:f,height:k,backgroundColor:"#000",position:"relative",textDecoration:"none",border:"none",display:"block"}},display_icon:{style:{cursor:j,position:"absolute",display:q?"block":"none",top:0,left:0,border:0,margin:0,padding:0,zIndex:3,width:50,height:50,backgroundImage:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALdJREFUeNrs18ENgjAYhmFouDOCcQJGcARHgE10BDcgTOIosAGwQOuPwaQeuFRi2p/3Sb6EC5L3QCxZBgAAAOCorLW1zMn65TrlkH4NcV7QNcUQt7Gn7KIhxA+qNIR81spOGkL8oFJDyLJRdosqKDDkK+iX5+d7huzwM40xptMQMkjIOeRGo+VkEVvIPfTGIpKASfYIfT9iCHkHrBEzf4gcUQ56aEzuGK/mw0rHpy4AAACAf3kJMACBxjAQNRckhwAAAABJRU5ErkJggg==)"}},display_iconBackground:{style:{cursor:j,position:"absolute",display:q?"block":"none",top:((k-50)/2),left:((f-50)/2),border:0,width:50,height:50,margin:0,padding:0,zIndex:2,backgroundImage:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEpJREFUeNrszwENADAIA7DhX8ENoBMZ5KR10EryckCJiIiIiIiIiIiIiIiIiIiIiIh8GmkRERERERERERERERERERERERGRHSPAAPlXH1phYpYaAAAAAElFTkSuQmCC)"}},display_image:{style:{width:f,height:k,display:l?"block":"none",position:"absolute",cursor:j,left:0,top:0,margin:0,padding:0,textDecoration:"none",zIndex:1,border:"none"}}};var d=function(r,t,u){var s=document.createElement(r);if(u){s.id=u}else{s.id=e.id+"_jwplayer_"+t}a.utils.css(s,i[t].style);return s};n.display=d("a","display",e.id);if(q){n.display.setAttribute("href",a.utils.getAbsolutePath(q))}n.display_image=d("img","display_image");n.display_image.setAttribute("alt","Click to download...");if(l){n.display_image.setAttribute("src",a.utils.getAbsolutePath(l))}if(true){n.display_icon=d("div","display_icon");n.display_iconBackground=d("div","display_iconBackground");n.display.appendChild(n.display_image);n.display_iconBackground.appendChild(n.display_icon);n.display.appendChild(n.display_iconBackground)}e.parentNode.replaceChild(n.display,e);var m=(o.plugins&&o.plugins.logo)?o.plugins.logo:{};a.embed.embedLogo(o.components.logo,"download",n.display,e.id);return n.display};a.embed.appendAttribute=function(e,d,f){var g=document.createElement("param");g.setAttribute("name",d);g.setAttribute("value",f);e.appendChild(g)};a.embed.jsonToFlashvars=function(f){var d=f.netstreambasepath?"":"netstreambasepath="+escape(window.location.href)+"&";for(var e in f){d+=e+"="+escape(f[e])+"&"}return d.substring(0,d.length-1)};a.embed.parsePlugins=function(g){if(!g){return{}}var j={},i=[];for(var d in g){var f=a.utils.getPluginName(d);var e=g[d];i.push(d);for(var h in e){j[f+"."+h]=e[h]}}j.plugins=i.join(",");return j};a.embed.parseComponents=function(f){if(!f){return{}}var h={};for(var e in f){var d=f[e];for(var g in d){h[e+"."+g]=d[g]}}return h};a.embed.parseConfigBlock=function(g,f){if(g[f]){var i=g[f];for(var e in i){var d=i[e];if(typeof d=="string"){if(!g[e]){g[e]=d}}else{for(var h in d){if(!g[e+"."+h]){g[e+"."+h]=d[h]}}}}delete g[f]}};a.api.PlayerAPI.prototype.setup=function(e,f){if(e&&e.flashplayer&&!e.players){e.players=c();e.players[0].src=e.flashplayer;delete e.flashplayer}if(f&&!e.players){if(typeof f=="string"){e.players=c();e.players[0].src=f}else{if(f instanceof Array){e.players=f}else{if(typeof f=="object"&&f.type){e.players=[f]}}}}var d=this.id;this.remove();var g=a(d);g.config=e;return(new a.embed.Embedder(g)).embedPlayer()};function b(){if(!document.body){return setTimeout(b,15)}var d=a.utils.selectors.getElementsByTagAndClass("video","jwplayer");for(var e=0;e<d.length;e++){var f=d[e];a(f.id).setup({players:[{type:"flash",src:"/jwplayer/player.swf"},{type:"html5"}]})}}b()})(jwplayer);(function(a){a.html5=function(b){var c=b;this.setup=function(d){a.utils.extend(this,new a.html5.api(c,d));return this};return this}})(jwplayer);(function(b){var c=b.utils.css;b.html5.view=function(q,o,e){var t=q;var l=o;var w=e;var v;var f;var A;var r;var B;var n;function y(){v=document.createElement("div");v.id=l.id;v.className=l.className;l.id=v.id+"_video";c(v,{position:"relative",height:w.height,width:w.width,padding:0,backgroundColor:C(),zIndex:0});function C(){if(t.skin.getComponentSettings("display")&&t.skin.getComponentSettings("display").backgroundcolor){return t.skin.getComponentSettings("display").backgroundcolor}return parseInt("000000",16)}c(l,{position:"absolute",width:w.width,height:w.height,top:0,left:0,zIndex:1,margin:"auto",display:"block"});b.utils.wrap(l,v);r=document.createElement("div");r.id=v.id+"_displayarea";v.appendChild(r)}function j(){for(var C=0;C<w.plugins.order.length;C++){var D=w.plugins.order[C];if(w.plugins.object[D].getDisplayElement!==undefined){w.plugins.object[D].height=h(w.plugins.object[D].getDisplayElement().style.height);w.plugins.object[D].width=h(w.plugins.object[D].getDisplayElement().style.width);w.plugins.config[D].currentPosition=w.plugins.config[D].position}}u()}function u(D){if(w.getMedia()!==undefined){for(var C=0;C<w.plugins.order.length;C++){var E=w.plugins.order[C];if(w.plugins.object[E].getDisplayElement!==undefined){if(w.getMedia().hasChrome()){w.plugins.config[E].currentPosition=b.html5.view.positions.NONE}else{w.plugins.config[E].currentPosition=w.plugins.config[E].position}}}}i(w.width,w.height)}function h(C){if(typeof C=="string"){if(C===""){return 0}else{if(C.lastIndexOf("%")>-1){return C}else{return parseInt(C.replace("px",""),10)}}}return C}function p(){n=setInterval(function(){if((typeof w.width=="string"&&w.width.lastIndexOf("%")>-1)||(typeof w.height=="string"&&w.height.lastIndexOf("%")>-1)){return}if(v.width&&v.height&&(w.width!==h(v.width)||w.height!==h(v.height))){i(h(v.width),h(v.height))}else{var C=v.getBoundingClientRect();if(w.width!==C.width||w.height!==C.height){i(C.width,C.height)}delete C}},100)}this.setup=function(C){l=C;y();j();t.jwAddEventListener(b.api.events.JWPLAYER_MEDIA_LOADED,u);t.jwAddEventListener(b.api.events.JWPLAYER_MEDIA_META,function(){x()});p();var D;if(window.onresize!==null){D=window.onresize}window.onresize=function(E){if(D!==undefined){try{D(E)}catch(G){}}if(t.jwGetFullscreen()){var F=document.body.getBoundingClientRect();w.width=Math.abs(F.left)+Math.abs(F.right);w.height=window.innerHeight}i(w.width,w.height)}};function g(C){switch(C.keyCode){case 27:if(t.jwGetFullscreen()){t.jwSetFullscreen(false)}break;case 32:if(t.jwGetState()!=b.api.events.state.IDLE&&t.jwGetState()!=b.api.events.state.PAUSED){t.jwPause()}else{t.jwPlay()}break}}function i(F,C){if(v.style.display=="none"){return}var E=[].concat(w.plugins.order);E.reverse();B=E.length+2;if(!w.fullscreen){w.width=F;w.height=C;f=F;A=C;c(r,{top:0,bottom:0,left:0,right:0,width:F,height:C});c(v,{height:A,width:f});var D=m(s,E);if(D.length>0){B+=D.length;m(k,D,true)}}else{m(z,E,true)}x()}function m(H,E,F){var D=[];for(var C=0;C<E.length;C++){var I=E[C];if(w.plugins.object[I].getDisplayElement!==undefined){if(w.plugins.config[I].currentPosition.toUpperCase()!==b.html5.view.positions.NONE){var G=H(I,B--);if(!G){D.push(I)}else{w.plugins.object[I].resize(G.width,G.height);if(F){delete G.width;delete G.height}c(w.plugins.object[I].getDisplayElement(),G)}}else{c(w.plugins.object[I].getDisplayElement(),{display:"none"})}}}return D}function s(D,E){if(w.plugins.object[D].getDisplayElement!==undefined){if(a(w.plugins.config[D].position)){if(w.plugins.object[D].getDisplayElement().parentNode===null){v.appendChild(w.plugins.object[D].getDisplayElement())}var C=d(D);C.zIndex=E;return C}}return false}function k(E,F){if(w.plugins.object[E].getDisplayElement().parentNode===null){r.appendChild(w.plugins.object[E].getDisplayElement())}var C=w.width,D=w.height;if(typeof w.width=="string"&&w.width.lastIndexOf("%")>-1){percentage=parseFloat(w.width.substring(0,w.width.lastIndexOf("%")))/100;C=Math.round(window.innerWidth*percentage)}if(typeof w.height=="string"&&w.height.lastIndexOf("%")>-1){percentage=parseFloat(w.height.substring(0,w.height.lastIndexOf("%")))/100;D=Math.round(window.innerHeight*percentage)}return{position:"absolute",width:(C-h(r.style.left)-h(r.style.right)),height:(D-h(r.style.top)-h(r.style.bottom)),zIndex:F}}function z(C,D){return{position:"fixed",width:w.width,height:w.height,zIndex:D}}function x(){r.style.position="absolute";w.getMedia().getDisplayElement().style.position="absolute";if(w.getMedia().getDisplayElement().videoWidth==0||w.getMedia().getDisplayElement().videoHeight==0){return}var C,E;if(r.style.width.toString().lastIndexOf("%")>-1||r.style.width.toString().lastIndexOf("%")>-1){var D=r.getBoundingClientRect();C=Math.abs(D.left)+Math.abs(D.right);E=Math.abs(D.top)+Math.abs(D.bottom)}else{C=h(r.style.width);E=h(r.style.height)}b.utils.stretch(t.jwGetStretching(),w.getMedia().getDisplayElement(),C,E,w.getMedia().getDisplayElement().videoWidth,w.getMedia().getDisplayElement().videoHeight)}function d(D){var E={position:"absolute",margin:0,padding:0,top:null};var C=w.plugins.config[D].currentPosition.toLowerCase();switch(C.toUpperCase()){case b.html5.view.positions.TOP:E.top=h(r.style.top);E.left=h(r.style.left);E.width=f-h(r.style.left)-h(r.style.right);E.height=w.plugins.object[D].height;r.style[C]=h(r.style[C])+w.plugins.object[D].height+"px";r.style.height=h(r.style.height)-E.height+"px";break;case b.html5.view.positions.RIGHT:E.top=h(r.style.top);E.right=h(r.style.right);E.width=E.width=w.plugins.object[D].width;E.height=A-h(r.style.top)-h(r.style.bottom);r.style[C]=h(r.style[C])+w.plugins.object[D].width+"px";r.style.width=h(r.style.width)-E.width+"px";break;case b.html5.view.positions.BOTTOM:E.bottom=h(r.style.bottom);E.left=h(r.style.left);E.width=f-h(r.style.left)-h(r.style.right);E.height=w.plugins.object[D].height;r.style[C]=h(r.style[C])+w.plugins.object[D].height+"px";r.style.height=h(r.style.height)-E.height+"px";break;case b.html5.view.positions.LEFT:E.top=h(r.style.top);E.left=h(r.style.left);E.width=w.plugins.object[D].width;E.height=A-h(r.style.top)-h(r.style.bottom);r.style[C]=h(r.style[C])+w.plugins.object[D].width+"px";r.style.width=h(r.style.width)-E.width+"px";break;default:break}return E}this.resize=i;this.fullscreen=function(E){if(navigator.vendor.indexOf("Apple")===0){if(w.getMedia().getDisplayElement().webkitSupportsFullscreen){if(E){w.fullscreen=false;w.getMedia().getDisplayElement().webkitEnterFullscreen()}else{w.getMedia().getDisplayElement().webkitExitFullscreen()}}else{w.fullscreen=false}}else{if(E){document.onkeydown=g;clearInterval(n);var D=document.body.getBoundingClientRect();w.width=Math.abs(D.left)+Math.abs(D.right);w.height=window.innerHeight;var C={position:"fixed",width:"100%",height:"100%",top:0,left:0,zIndex:2147483000};c(v,C);C.zIndex=1;c(w.getMedia().getDisplayElement(),C);C.zIndex=2;c(r,C)}else{document.onkeydown="";p();w.width=f;w.height=A;c(v,{position:"relative",height:w.height,width:w.width,zIndex:0})}i(w.width,w.height)}}};function a(d){return([b.html5.view.positions.TOP,b.html5.view.positions.RIGHT,b.html5.view.positions.BOTTOM,b.html5.view.positions.LEFT].toString().indexOf(d.toUpperCase())>-1)}b.html5.view.positions={TOP:"TOP",RIGHT:"RIGHT",BOTTOM:"BOTTOM",LEFT:"LEFT",OVER:"OVER",NONE:"NONE"}})(jwplayer);(function(a){var b={backgroundcolor:"",margin:10,font:"Arial,sans-serif",fontsize:10,fontcolor:parseInt("000000",16),fontstyle:"normal",fontweight:"bold",buttoncolor:parseInt("ffffff",16),position:a.html5.view.positions.BOTTOM,idlehide:false,layout:{left:{position:"left",elements:[{name:"play",type:"button"},{name:"divider",type:"divider"},{name:"prev",type:"button"},{name:"divider",type:"divider"},{name:"next",type:"button"},{name:"divider",type:"divider"},{name:"elapsed",type:"text"}]},center:{position:"center",elements:[{name:"time",type:"slider"}]},right:{position:"right",elements:[{name:"duration",type:"text"},{name:"blank",type:"button"},{name:"divider",type:"divider"},{name:"mute",type:"button"},{name:"volume",type:"slider"},{name:"divider",type:"divider"},{name:"fullscreen",type:"button"}]}}};_css=a.utils.css;_hide=function(c){_css(c,{display:"none"})};_show=function(c){_css(c,{display:"block"})};a.html5.controlbar=function(j,L){var i=j;var A=a.utils.extend({},b,i.skin.getComponentSettings("controlbar"),L);if(a.utils.mapLength(i.skin.getComponentLayout("controlbar"))>0){A.layout=i.skin.getComponentLayout("controlbar")}var P;var I;var O;var B;var t="none";var f;var h;var Q;var e;var d;var w;var s;var J={};var n=false;var c={};function H(){O=0;B=0;I=0;if(!n){var V={height:i.skin.getSkinElement("controlbar","background").height,backgroundColor:A.backgroundcolor};P=document.createElement("div");P.id=i.id+"_jwplayer_controlbar";_css(P,V)}v("capLeft","left",false,P);var W={position:"absolute",height:i.skin.getSkinElement("controlbar","background").height,background:" url("+i.skin.getSkinElement("controlbar","background").src+") repeat-x center left",left:i.skin.getSkinElement("controlbar","capLeft").width};N("elements",P,W);v("capRight","right",false,P)}this.getDisplayElement=function(){return P};this.resize=function(X,V){a.utils.cancelAnimation(P);document.getElementById(i.id).onmousemove=x;d=X;w=V;x();var W=u();D({id:i.id,duration:Q,position:h});r({id:i.id,bufferPercent:e});return W};function o(){var W=["timeSlider","volumeSlider","timeSliderRail","volumeSliderRail"];for(var X in W){var V=W[X];if(typeof J[V]!="undefined"){c[V]=J[V].getBoundingClientRect()}}}function x(){a.utils.cancelAnimation(P);if(g()){a.utils.fadeTo(P,1,0,1,0)}else{a.utils.fadeTo(P,0,0.1,1,2)}}function g(){if(i.jwGetState()==a.api.events.state.IDLE||i.jwGetState()==a.api.events.state.PAUSED){if(A.idlehide){return false}return true}if(i.jwGetFullscreen()){return false}if(A.position.toUpperCase()==a.html5.view.positions.OVER){return false}return true}function N(Y,X,W){var V;if(!n){V=document.createElement("div");J[Y]=V;V.id=P.id+"_"+Y;X.appendChild(V)}else{V=document.getElementById(P.id+"_"+Y)}if(W!==undefined){_css(V,W)}return V}function G(){U(A.layout.left);U(A.layout.right,-1);U(A.layout.center)}function U(Y,V){var Z=Y.position=="right"?"right":"left";var X=a.utils.extend([],Y.elements);if(V!==undefined){X.reverse()}for(var W=0;W<X.length;W++){z(X[W],Z)}}function E(){return I++}function z(Z,ab){var Y,W,X,V,ad;switch(Z.name){case"play":v("playButton",ab,false);v("pauseButton",ab,true);K("playButton","jwPlay");K("pauseButton","jwPause");break;case"divider":v("divider"+E(),ab,true);break;case"prev":v("prevButton",ab,true);K("prevButton","jwPlaylistPrev");break;case"next":v("nextButton",ab,true);K("nextButton","jwPlaylistNext");break;case"elapsed":v("elapsedText",ab,true);break;case"time":W=i.skin.getSkinElement("controlbar","timeSliderCapLeft")===undefined?0:i.skin.getSkinElement("controlbar","timeSliderCapLeft").width;X=i.skin.getSkinElement("controlbar","timeSliderCapRight")===undefined?0:i.skin.getSkinElement("controlbar","timeSliderCapRight").width;Y=ab=="left"?W:X;V=i.skin.getSkinElement("controlbar","timeSliderRail").width+W+X;ad={height:i.skin.getSkinElement("controlbar","background").height,position:"absolute",top:0,width:V};ad[ab]=ab=="left"?O:B;var aa=N("timeSlider",J.elements,ad);v("timeSliderCapLeft",ab,true,aa,ab=="left"?0:Y);v("timeSliderRail",ab,false,aa,Y);v("timeSliderBuffer",ab,false,aa,Y);v("timeSliderProgress",ab,false,aa,Y);v("timeSliderThumb",ab,false,aa,Y);v("timeSliderCapRight",ab,true,aa,ab=="right"?0:Y);M("time");break;case"fullscreen":v("fullscreenButton",ab,false);v("normalscreenButton",ab,true);K("fullscreenButton","jwSetFullscreen",true);K("normalscreenButton","jwSetFullscreen",false);break;case"volume":W=i.skin.getSkinElement("controlbar","volumeSliderCapLeft")===undefined?0:i.skin.getSkinElement("controlbar","volumeSliderCapLeft").width;X=i.skin.getSkinElement("controlbar","volumeSliderCapRight")===undefined?0:i.skin.getSkinElement("controlbar","volumeSliderCapRight").width;Y=ab=="left"?W:X;V=i.skin.getSkinElement("controlbar","volumeSliderRail").width+W+X;ad={height:i.skin.getSkinElement("controlbar","background").height,position:"absolute",top:0,width:V};ad[ab]=ab=="left"?O:B;var ac=N("volumeSlider",J.elements,ad);v("volumeSliderCapLeft",ab,true,ac,ab=="left"?0:Y);v("volumeSliderRail",ab,true,ac,Y);v("volumeSliderProgress",ab,false,ac,Y);v("volumeSliderCapRight",ab,true,ac,ab=="right"?0:Y);M("volume");break;case"mute":v("muteButton",ab,false);v("unmuteButton",ab,true);K("muteButton","jwSetMute",true);K("unmuteButton","jwSetMute",false);break;case"duration":v("durationText",ab,true);break}}function v(Y,ac,ab,Z,V){if((i.skin.getSkinElement("controlbar",Y)!==undefined||Y.indexOf("Text")>0||Y.indexOf("divider")===0)&&!(Y.indexOf("divider")===0&&s.indexOf("divider")===0)){s=Y;var X={height:i.skin.getSkinElement("controlbar","background").height,position:"absolute",display:"block",top:0};if((Y.indexOf("next")===0||Y.indexOf("prev")===0)&&i.jwGetPlaylist().length<2){ab=false;X.display="none"}var aa;if(Y.indexOf("Text")>0){Y.innerhtml="00:00";X.font=A.fontsize+"px/"+(i.skin.getSkinElement("controlbar","background").height+1)+"px "+A.font;X.color=A.fontcolor;X.textAlign="center";X.fontWeight=A.fontweight;X.fontStyle=A.fontstyle;X.cursor="default";aa=14+3*A.fontsize}else{if(Y.indexOf("divider")===0){X.background="url("+i.skin.getSkinElement("controlbar","divider").src+") repeat-x center left";aa=i.skin.getSkinElement("controlbar","divider").width}else{X.background="url("+i.skin.getSkinElement("controlbar",Y).src+") repeat-x center left";aa=i.skin.getSkinElement("controlbar",Y).width}}if(ac=="left"){X.left=V===undefined?O:V;if(ab){O+=aa}}else{if(ac=="right"){X.right=V===undefined?B:V;if(ab){B+=aa}}}if(Z===undefined){Z=J.elements}X.width=aa;if(n){_css(J[Y],X)}else{var W=N(Y,Z,X);if(i.skin.getSkinElement("controlbar",Y+"Over")!==undefined){W.onmouseover=function(ad){W.style.backgroundImage=["url(",i.skin.getSkinElement("controlbar",Y+"Over").src,")"].join("")};W.onmouseout=function(ad){W.style.backgroundImage=["url(",i.skin.getSkinElement("controlbar",Y).src,")"].join("")}}}}}function C(){i.jwAddEventListener(a.api.events.JWPLAYER_PLAYLIST_LOADED,y);i.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_BUFFER,r);i.jwAddEventListener(a.api.events.JWPLAYER_PLAYER_STATE,p);i.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_TIME,D);i.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_MUTE,T);i.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_VOLUME,k);i.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_COMPLETE,F)}function y(){H();G();u();R()}function R(){D({id:i.id,duration:i.jwGetDuration(),position:0});r({id:i.id,bufferProgress:0});T({id:i.id,mute:i.jwGetMute()});p({id:i.id,newstate:a.api.events.state.IDLE});k({id:i.id,volume:i.jwGetVolume()})}function K(X,Y,W){if(n){return}if(i.skin.getSkinElement("controlbar",X)!==undefined){var V=J[X];if(V!==null){_css(V,{cursor:"pointer"});if(Y=="fullscreen"){V.onmouseup=function(Z){Z.stopPropagation();i.jwSetFullscreen(!i.jwGetFullscreen())}}else{V.onmouseup=function(Z){Z.stopPropagation();if(W!==null){i[Y](W)}else{i[Y]()}}}}}}function M(V){if(n){return}var W=J[V+"Slider"];_css(J.elements,{cursor:"pointer"});_css(W,{cursor:"pointer"});W.onmousedown=function(X){t=V};W.onmouseup=function(X){X.stopPropagation();S(X.pageX)};W.onmousemove=function(X){if(t=="time"){f=true;var Y=X.pageX-c[V+"Slider"].left-window.pageXOffset;_css(J.timeSliderThumb,{left:Y})}}}function S(W){f=false;var V;if(t=="time"){V=W-c.timeSliderRail.left+window.pageXOffset;var Y=V/c.timeSliderRail.width*Q;if(Y<0){Y=0}else{if(Y>Q){Y=Q-3}}i.jwSeek(Y);if(i.jwGetState()!=a.api.events.state.PLAYING){i.jwPlay()}}else{if(t=="volume"){V=W-c.volumeSliderRail.left-window.pageXOffset;var X=Math.round(V/c.volumeSliderRail.width*100);if(X<0){X=0}else{if(X>100){X=100}}if(i.jwGetMute()){i.jwSetMute(false)}i.jwSetVolume(X)}}t="none"}function r(W){if(W.bufferPercent!==null){e=W.bufferPercent}var X=c.timeSliderRail.width;var V=isNaN(Math.round(X*e/100))?0:Math.round(X*e/100);_css(J.timeSliderBuffer,{width:V})}function T(V){if(V.mute){_hide(J.muteButton);_show(J.unmuteButton);_hide(J.volumeSliderProgress)}else{_show(J.muteButton);_hide(J.unmuteButton);_show(J.volumeSliderProgress)}}function p(V){if(V.newstate==a.api.events.state.BUFFERING||V.newstate==a.api.events.state.PLAYING){_show(J.pauseButton);_hide(J.playButton)}else{_hide(J.pauseButton);_show(J.playButton)}x();if(V.newstate==a.api.events.state.IDLE){_hide(J.timeSliderBuffer);_hide(J.timeSliderProgress);_hide(J.timeSliderThumb);D({id:i.id,duration:i.jwGetDuration(),position:0})}else{_show(J.timeSliderBuffer);if(V.newstate!=a.api.events.state.BUFFERING){_show(J.timeSliderProgress);_show(J.timeSliderThumb)}}}function F(V){r({bufferPercent:0});D(a.utils.extend(V,{position:0,duration:Q}))}function D(Y){if(Y.position!==null){h=Y.position}if(Y.duration!==null){Q=Y.duration}var W=(h===Q===0)?0:h/Q;var V=isNaN(Math.round(c.timeSliderRail.width*W))?0:Math.round(c.timeSliderRail.width*W);var X=V;J.timeSliderProgress.style.width=V+"px";if(!f){if(J.timeSliderThumb){J.timeSliderThumb.style.left=X+"px"}}if(J.durationText){J.durationText.innerHTML=m(Q)}if(J.elapsedText){J.elapsedText.innerHTML=m(h)}}function m(V){str="00:00";if(V>0){str=Math.floor(V/60)<10?"0"+Math.floor(V/60)+":":Math.floor(V/60)+":";str+=Math.floor(V%60)<10?"0"+Math.floor(V%60):Math.floor(V%60)}return str}function l(){var Y,W;var X=document.getElementById(P.id+"_elements").childNodes;for(var V in document.getElementById(P.id+"_elements").childNodes){if(isNaN(parseInt(V,10))){continue}if(X[V].id.indexOf(P.id+"_divider")===0&&W.id.indexOf(P.id+"_divider")===0){X[V].style.display="none"}else{if(X[V].id.indexOf(P.id+"_divider")===0&&Y.style.display!="none"){X[V].style.display="block"}}if(X[V].style.display!="none"){W=X[V]}Y=X[V]}}function u(){l();if(i.jwGetFullscreen()){_show(J.normalscreenButton);_hide(J.fullscreenButton)}else{_hide(J.normalscreenButton);_show(J.fullscreenButton)}var W={width:d};var V={};if(A.position.toUpperCase()==a.html5.view.positions.OVER||i.jwGetFullscreen()){W.left=A.margin;W.width-=2*A.margin;W.top=w-i.skin.getSkinElement("controlbar","background").height-A.margin;W.height=i.skin.getSkinElement("controlbar","background").height}else{W.left=0}V.left=i.skin.getSkinElement("controlbar","capLeft").width;V.width=W.width-i.skin.getSkinElement("controlbar","capLeft").width-i.skin.getSkinElement("controlbar","capRight").width;var X=i.skin.getSkinElement("controlbar","timeSliderCapLeft")===undefined?0:i.skin.getSkinElement("controlbar","timeSliderCapLeft").width;_css(J.timeSliderRail,{width:(V.width-O-B),left:X});if(J.timeSliderCapRight!==undefined){_css(J.timeSliderCapRight,{left:X+(V.width-O-B)})}_css(P,W);_css(J.elements,V);o();return W}function k(Z){if(J.volumeSliderRail!==undefined){var X=isNaN(Z.volume/100)?1:Z.volume/100;var Y=parseInt(J.volumeSliderRail.style.width.replace("px",""),10);var V=isNaN(Math.round(Y*X))?0:Math.round(Y*X);var aa=parseInt(J.volumeSliderRail.style.right.replace("px",""),10);var W=i.skin.getSkinElement("controlbar","volumeSliderCapLeft")===undefined?0:i.skin.getSkinElement("controlbar","volumeSliderCapLeft").width;_css(J.volumeSliderProgress,{width:V,left:W});if(J.volumeSliderCapLeft!==undefined){_css(J.volumeSliderCapLeft,{left:0})}}}function q(){H();G();o();n=true;C();R();P.style.opacity=A.idlehide?0:1}q();return this}})(jwplayer);(function(b){var a=["width","height","state","playlist","item","position","buffer","duration","volume","mute","fullscreen"];b.html5.controller=function(t,r,e,q){var w=t;var y=e;var d=q;var k=r;var A=true;var c=-1;var u=(y.config.debug!==undefined)&&(y.config.debug.toString().toLowerCase()=="console");var i=new b.html5.eventdispatcher(k.id,u);b.utils.extend(this,i);function m(D){i.sendEvent(D.type,D)}y.addGlobalListener(m);function p(){try{if(y.playlist[y.item].levels[0].file.length>0){if(A||y.state==b.api.events.state.IDLE){y.addEventListener(b.api.events.JWPLAYER_MEDIA_BUFFER_FULL,function(){y.getMedia().play()});y.addEventListener(b.api.events.JWPLAYER_MEDIA_TIME,function(E){if(E.position>=y.playlist[y.item].start&&c>=0){y.playlist[y.item].start=c;c=-1}});if(y.config.repeat){y.addEventListener(b.api.events.JWPLAYER_MEDIA_COMPLETE,function(E){setTimeout(n,25)})}y.getMedia().load(y.playlist[y.item]);A=false}else{if(y.state==b.api.events.state.PAUSED){y.getMedia().play()}}}return true}catch(D){i.sendEvent(b.api.events.JWPLAYER_ERROR,D)}return false}function B(){try{if(y.playlist[y.item].levels[0].file.length>0){switch(y.state){case b.api.events.state.PLAYING:case b.api.events.state.BUFFERING:y.getMedia().pause();break}}return true}catch(D){i.sendEvent(b.api.events.JWPLAYER_ERROR,D)}return false}function x(D){try{if(y.playlist[y.item].levels[0].file.length>0){if(typeof D!="number"){D=parseFloat(D)}switch(y.state){case b.api.events.state.IDLE:if(c<0){c=y.playlist[y.item].start;y.playlist[y.item].start=D}p();break;case b.api.events.state.PLAYING:case b.api.events.state.PAUSED:case b.api.events.state.BUFFERING:y.getMedia().seek(D);break}}return true}catch(E){i.sendEvent(b.api.events.JWPLAYER_ERROR,E)}return false}function j(){try{if(y.playlist[y.item].levels[0].file.length>0&&y.state!=b.api.events.state.IDLE){y.getMedia().stop()}return true}catch(D){i.sendEvent(b.api.events.JWPLAYER_ERROR,D)}return false}function g(){try{if(y.playlist[y.item].levels[0].file.length>0){if(y.config.shuffle){o(s())}else{if(y.item+1==y.playlist.length){o(0)}else{o(y.item+1)}}}if(y.state!=b.api.events.state.PLAYING&&y.state!=b.api.events.state.BUFFERING){p()}return true}catch(D){i.sendEvent(b.api.events.JWPLAYER_ERROR,D)}return false}function f(){try{if(y.playlist[y.item].levels[0].file.length>0){if(y.config.shuffle){o(s())}else{if(y.item===0){o(y.playlist.length-1)}else{o(y.item-1)}}}if(y.state!=b.api.events.state.PLAYING&&y.state!=b.api.events.state.BUFFERING){p()}return true}catch(D){i.sendEvent(b.api.events.JWPLAYER_ERROR,D)}return false}function s(){var D=null;if(y.playlist.length>1){while(D===null){D=Math.floor(Math.random()*y.playlist.length);if(D==y.item){D=null}}}else{D=0}return D}function o(E){y.resetEventListeners();y.addGlobalListener(m);try{if(y.playlist[E].levels[0].file.length>0){var F=y.state;if(F!==b.api.events.state.IDLE){j()}y.item=E;A=true;y.setActiveMediaProvider(y.playlist[y.item]);i.sendEvent(b.api.events.JWPLAYER_PLAYLIST_ITEM,{index:E});if(F==b.api.events.state.PLAYING||F==b.api.events.state.BUFFERING||y.config.chromeless){p()}}return true}catch(D){i.sendEvent(b.api.events.JWPLAYER_ERROR,D)}return false}function z(E){try{switch(typeof(E)){case"number":y.getMedia().volume(E);break;case"string":y.getMedia().volume(parseInt(E,10));break}return true}catch(D){i.sendEvent(b.api.events.JWPLAYER_ERROR,D)}return false}function l(E){try{if(typeof E=="undefined"){y.getMedia().mute(!y.mute)}else{if(E.toString().toLowerCase()=="true"){y.getMedia().mute(true)}else{y.getMedia().mute(false)}}return true}catch(D){i.sendEvent(b.api.events.JWPLAYER_ERROR,D)}return false}function h(E,D){try{y.width=E;y.height=D;d.resize(E,D);i.sendEvent(b.api.events.JWPLAYER_RESIZE,{width:y.width,height:y.height});return true}catch(F){i.sendEvent(b.api.events.JWPLAYER_ERROR,F)}return false}function v(E){try{if(typeof E=="undefined"){y.fullscreen=!y.fullscreen;d.fullscreen(!y.fullscreen)}else{if(E.toString().toLowerCase()=="true"){y.fullscreen=true;d.fullscreen(true)}else{y.fullscreen=false;d.fullscreen(false)}}i.sendEvent(b.api.events.JWPLAYER_RESIZE,{width:y.width,height:y.height});i.sendEvent(b.api.events.JWPLAYER_FULLSCREEN,{fullscreen:E});return true}catch(D){i.sendEvent(b.api.events.JWPLAYER_ERROR,D)}return false}function C(D){try{j();y.loadPlaylist(D);o(y.item);return true}catch(E){i.sendEvent(b.api.events.JWPLAYER_ERROR,E)}return false}b.html5.controller.repeatoptions={LIST:"LIST",ALWAYS:"ALWAYS",SINGLE:"SINGLE",NONE:"NONE"};function n(){y.resetEventListeners();y.addGlobalListener(m);switch(y.config.repeat.toUpperCase()){case b.html5.controller.repeatoptions.SINGLE:p();break;case b.html5.controller.repeatoptions.ALWAYS:if(y.item==y.playlist.length-1&&!y.config.shuffle){o(0);p()}else{g()}break;case b.html5.controller.repeatoptions.LIST:if(y.item==y.playlist.length-1&&!y.config.shuffle){o(0)}else{g()}break}}this.play=p;this.pause=B;this.seek=x;this.stop=j;this.next=g;this.prev=f;this.item=o;this.setVolume=z;this.setMute=l;this.resize=h;this.setFullscreen=v;this.load=C}})(jwplayer);(function(a){a.html5.defaultSkin=function(){this.text='<?xml version="1.0" ?><skin author="LongTail Video" name="Five" version="1.0"><settings><setting name="backcolor" value="0xFFFFFF"/><setting name="frontcolor" value="0x000000"/><setting name="lightcolor" value="0x000000"/><setting name="screencolor" value="0x000000"/></settings><components><component name="controlbar"><settings><setting name="margin" value="20"/><setting name="fontsize" value="11"/></settings><elements><element name="background" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAIAAABvFaqvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAFJJREFUeNrslLENwAAIwxLU/09j5AiOgD5hVQzNAVY8JK4qEfHMIKBnd2+BQlBINaiRtL/aV2rdzYBsM6CIONbI1NZENTr3RwdB2PlnJgJ6BRgA4hwu5Qg5iswAAAAASUVORK5CYII="/><element name="capLeft" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAYCAIAAAC0rgCNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAD5JREFUeNosi8ENACAMAgnuv14H0Z8asI19XEjhOiKCMmibVgJTUt7V6fe9KXOtSQCfctJHu2q3/ot79hNgANc2OTz9uTCCAAAAAElFTkSuQmCC"/><element name="capRight" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAYCAIAAAC0rgCNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAD5JREFUeNosi8ENACAMAgnuv14H0Z8asI19XEjhOiKCMmibVgJTUt7V6fe9KXOtSQCfctJHu2q3/ot79hNgANc2OTz9uTCCAAAAAElFTkSuQmCC"/><element name="divider" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAYCAIAAAC0rgCNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAD5JREFUeNosi8ENACAMAgnuv14H0Z8asI19XEjhOiKCMmibVgJTUt7V6fe9KXOtSQCfctJHu2q3/ot79hNgANc2OTz9uTCCAAAAAElFTkSuQmCC"/><element name="playButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEhJREFUeNpiYqABYBo1dNRQ+hr6H4jvA3E8NS39j4SpZvh/LJig4YxEGEqy3kET+w+AOGFQRhTJhrEQkGcczfujhg4CQwECDADpTRWU/B3wHQAAAABJRU5ErkJggg=="/><element name="pauseButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAChJREFUeNpiYBgFo2DwA0YC8v/R1P4nRu+ooaOGUtnQUTAKhgIACDAAFCwQCfAJ4gwAAAAASUVORK5CYII="/><element name="prevButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEtJREFUeNpiYBgFo2Dog/9QDAPyQHweTYwiQ/2B+D0Wi8g2tB+JTdBQRiIMJVkvEy0iglhDF9Aq9uOpHVEwoE+NJDUKRsFgAAABBgDe2hqZcNNL0AAAAABJRU5ErkJggg=="/><element name="nextButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAElJREFUeNpiYBgFo2Dog/9AfB6I5dHE/lNqKAi/B2J/ahsKw/3EGMpIhKEk66WJoaR6fz61IyqemhEFSlL61ExSo2AUDAYAEGAAiG4hj+5t7M8AAAAASUVORK5CYII="/><element name="timeSliderRail" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADxJREFUeNpiYBgFo2AU0Bwwzluw+D8tLWARFhKiqQ9YuLg4aWsBGxs7bS1gZ6e5BWyjSX0UjIKhDgACDABlYQOGh5pYywAAAABJRU5ErkJggg=="/><element name="timeSliderBuffer" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAD1JREFUeNpiYBgFo2AU0Bww1jc0/aelBSz8/Pw09QELOzs7bS1gY2OjrQWsrKy09gHraFIfBaNgqAOAAAMAvy0DChXHsZMAAAAASUVORK5CYII="/><element name="timeSliderProgress" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAClJREFUeNpiYBgFo2AU0BwwAvF/WlrARGsfjFow8BaMglEwCugAAAIMAOHfAQunR+XzAAAAAElFTkSuQmCC"/><element name="timeSliderThumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAICAYAAAA870V8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABZJREFUeNpiZICA/yCCiQEJUJcDEGAAY0gBD1/m7Q0AAAAASUVORK5CYII="/><element name="muteButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAYCAYAAADKx8xXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADFJREFUeNpiYBgFIw3MB+L/5Gj8j6yRiRTFyICJXHfTXyMLAXlGati4YDRFDj8AEGAABk8GSqqS4CoAAAAASUVORK5CYII="/><element name="unmuteButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAYCAYAAADKx8xXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAD1JREFUeNpiYBgFgxz8p7bm+cQa+h8LHy7GhEcjIz4bmAjYykiun/8j0fakGPIfTfPgiSr6aB4FVAcAAQYAWdwR1G1Wd2gAAAAASUVORK5CYII="/><element name="volumeSliderRail" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAYCAYAAADkgu3FAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAGpJREFUeNpi/P//PwM9ABMDncCoRYPfIqqDZcuW1UPp/6AUDcNM1DQYKtRAlaAj1mCSLSLXYIIWUctgDItoZfDA5aOoqKhGEANIM9LVR7SymGDQUctikuOIXkFNdhHEOFrDjlpEd4sAAgwAriRMub95fu8AAAAASUVORK5CYII="/><element name="volumeSliderProgress" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAYCAYAAADkgu3FAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAFtJREFUeNpi/P//PwM9ABMDncCoRYPfIlqAeij9H5SiYZiqBqPTlFqE02BKLSLaYFItIttgQhZRzWB8FjENiuRJ7aAbsMQwYMl7wDIsWUUQ42gNO2oR3S0CCDAAKhKq6MLLn8oAAAAASUVORK5CYII="/><element name="fullscreenButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAE5JREFUeNpiYBgFo2DQA0YC8v/xqP1PjDlMRDrEgUgxkgHIlfZoriVGjmzLsLFHAW2D6D8eA/9Tw7L/BAwgJE90PvhPpNgoGAVDEQAEGAAMdhTyXcPKcAAAAABJRU5ErkJggg=="/><element name="normalscreenButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEZJREFUeNpiYBgFo2DIg/9UUkOUAf8JiFFsyX88fJyAkcQgYMQjNkzBoAgiezyRbE+tFGSPxQJ7auYBmma0UTAKBhgABBgAJAEY6zON61sAAAAASUVORK5CYII="/></elements></component><component name="display"><elements><element name="background" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEpJREFUeNrszwENADAIA7DhX8ENoBMZ5KR10EryckCJiIiIiIiIiIiIiIiIiIiIiIh8GmkRERERERERERERERERERERERGRHSPAAPlXH1phYpYaAAAAAElFTkSuQmCC"/><element name="playIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALdJREFUeNrs18ENgjAYhmFouDOCcQJGcARHgE10BDcgTOIosAGwQOuPwaQeuFRi2p/3Sb6EC5L3QCxZBgAAAOCorLW1zMn65TrlkH4NcV7QNcUQt7Gn7KIhxA+qNIR81spOGkL8oFJDyLJRdosqKDDkK+iX5+d7huzwM40xptMQMkjIOeRGo+VkEVvIPfTGIpKASfYIfT9iCHkHrBEzf4gcUQ56aEzuGK/mw0rHpy4AAACAf3kJMACBxjAQNRckhwAAAABJRU5ErkJggg=="/><element name="muteIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHJJREFUeNrs1jEOgCAMBVAg7t5/8qaoIy4uoobyXsLCxA+0NCUAAADGUWvdQoQ41x4ixNBB2hBvBskdD3w5ZCkl3+33VqI0kjBBlh9rp+uTcyOP33TnolfsU85XX3yIRpQph8ZQY3wTZtU5AACASA4BBgDHoVuY1/fvOQAAAABJRU5ErkJggg=="/><element name="errorIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAWlJREFUeNrsl+1twjAQhsHq/7BBYQLYIBmBDcoGMAIjtBPQTcII2SDtBDBBwrU6pGsUO7YbO470PtKJkz9iH++d4ywWAAAAAABgljRNsyWr2bZzDuJG1rLdZhcMbTjrBCGDyUKsqQLFciJb9bSvuG/WagRVRUVUI6gqy5HVeKWfSgRyJruKIU//TrZTSn2nmlaXThrloi/v9F2STC1W4+Aw5cBzkquRc09bofFNc6YLxEON0VUZS5FPTftO49vMjRsIF3RhOGr7/D/pJw+FKU+q0vDyq8W42jCunDqI3LC5XxNj2wHLU1XjaRnb0Lhykhqhhd8MtSF5J9tbjCv4mXGvKJz/65FF/qJryyaaIvzP2QRxZTX2nTuXjvV/VPFSwyLnW7mpH99yTh1FEVro6JBSd40/pMrRdV8vPtcKl28T2pT8TnFZ4yNosct3Q0io6JfBiz1FlGdqVQH3VHnepAEAAAAAADDzEGAAcTwB10jWgxcAAAAASUVORK5CYII="/><element name="bufferIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAuhJREFUeNrsWr9rU1EUznuNGqvFQh1ULOhiBx0KDtIuioO4pJuik3FxFfUPaAV1FTdx0Q5d2g4FFxehTnEpZHFoBy20tCIWtGq0TZP4HfkeHB5N8m6Sl/sa74XDybvv3vvOd8/Pe4lXrVZT3dD8VJc0B8QBcUAcEAfESktHGeR5XtMfqFQq/f92zPe/NbtGlKTdCY30kuxrpMGO94BlQCXs+rbh3ONgA6BlzP1p20d80gEI5hmA2A92Qua1Q2PtAFISM+bvjMG8U+Q7oA3rQGASwrYCU6WpNdLGYbA+Pq5jjXIiwi8EEa2UDbQSaKOIuV+SlkcCrfjY8XTI9EpKGwP0C2kru2hLtHqa4zoXtZRWyvi4CLwv9Opr6Hkn6A9HKgEANsQ1iqC3Ub/vRUk2JgmRkatK36kVrnt0qObunwUdUUMXMWYpakJsO5Am8tAw2GBIgwWA+G2S2dMpiw0gDioQRQJoKhRb1QiDwlHZUABYbaXWsm5ae6loTE4ZDxN4CZar8foVzOJ2iyZ2kWF3t7YIevffaMT5yJ70kQb2fQ1sE5SHr2wazs2wgMxgbsEKEAgxAvZUJbQLBGTSBMgNrncJbA6AljtS/eKDJ0Ez+DmrQEzXS2h1Ck25kAg0IZcUOaydCy4sYnN2fOA+2AP16gNoHALlQ+fwH7XO4CxLenUpgj4xr6ugY2roPMbMx+Xs18m/E8CVEIhxsNeg83XWOAN6grG3lGbk8uE5fr4B/WH3cJw+co/l9nTYsSGYCJ/lY5/qv0thn6nrIWmjeJcPSnWOeY++AkF8tpJHIMAUs/MaBBpj3znZfQo5psY+ZrG4gv5HickjEOymKjEeRpgyST6IuZcTcWbnjcgdPi5ghxciRKsl1lDSsgwA1i8fssonJgzmTSqfGUkCENndNdAL7PS6QQ7ZYISTo+1qq0LEWjTWcvY4isa4z+yfQB+7ooyHVg5RI7/i1Ijn/vnggDggDogD4oC00P4KMACd/juEHOrS4AAAAABJRU5ErkJggg=="/></elements></component><component name="dock"><elements><element name="button" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAFBJREFUeNrs0cEJACAQA8Eofu0fu/W6EM5ZSAFDRpKTBs00CQQEBAQEBAQEBAQEBAQEBATkK8iqbY+AgICAgICAgICAgICAgICAgIC86QowAG5PAQzEJ0lKAAAAAElFTkSuQmCC"/></elements></component><component name="playlist"><elements><element name="item" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAIAAAC1nk4lAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNrs2NEJwCAMBcBYuv/CFuIE9VN47WWCR7iocXR3pdWdGPqqwIoMjYfQeAiNh9B4JHc6MHQVHnjggQceeOCBBx77TifyeOY0iHi8DqIdEY8dD5cL094eePzINB5CO/LwcOTptNB4CP25L4TIbZzpU7UEGAA5wz1uF5rF9AAAAABJRU5ErkJggg=="/><element name="sliderRail" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA8CAIAAADpFA0BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADhJREFUeNrsy6ENACAMAMHClp2wYxZLAg5Fcu9e3OjuOKqqfTMzbs14CIZhGIZhGIZhGP4VLwEGAK/BBnVFpB0oAAAAAElFTkSuQmCC"/><element name="sliderThumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA8CAIAAADpFA0BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADRJREFUeNrsy7ENACAMBLE8++8caFFKKiRffU53112SGs3ttOohGIZhGIZhGIZh+Fe8BRgAiaUGde6NOSEAAAAASUVORK5CYII="/></elements></component></components></skin>';this.xml=null;if(window.DOMParser){parser=new DOMParser();this.xml=parser.parseFromString(this.text,"text/xml")}else{this.xml=new ActiveXObject("Microsoft.XMLDOM");this.xml.async="false";this.xml.loadXML(this.text)}return this}})(jwplayer);(function(a){_css=a.utils.css;_hide=function(b){_css(b,{display:"none"})};_show=function(b){_css(b,{display:"block"})};a.html5.display=function(o,y){var v=o;var e={};var g;var z;var k;var w;var x;var p;var j;var n=v.skin.getComponentSettings("display").bufferrotation===undefined?15:parseInt(v.skin.getComponentSettings("display").bufferrotation,10);var f=v.skin.getComponentSettings("display").bufferinterval===undefined?100:parseInt(v.skin.getComponentSettings("display").bufferinterval,10);var d={display:{style:{cursor:"pointer",top:0,left:0,overflow:"hidden"},click:t},display_icon:{style:{cursor:"pointer",position:"absolute",top:((v.skin.getSkinElement("display","background").height-v.skin.getSkinElement("display","playIcon").height)/2),left:((v.skin.getSkinElement("display","background").width-v.skin.getSkinElement("display","playIcon").width)/2),border:0,margin:0,padding:0,zIndex:3}},display_iconBackground:{style:{cursor:"pointer",position:"absolute",top:((z-v.skin.getSkinElement("display","background").height)/2),left:((g-v.skin.getSkinElement("display","background").width)/2),border:0,backgroundImage:(["url(",v.skin.getSkinElement("display","background").src,")"]).join(""),width:v.skin.getSkinElement("display","background").width,height:v.skin.getSkinElement("display","background").height,margin:0,padding:0,zIndex:2}},display_image:{style:{display:"none",width:g,height:z,position:"absolute",cursor:"pointer",left:0,top:0,margin:0,padding:0,textDecoration:"none",zIndex:1}},display_text:{style:{zIndex:4,position:"relative",opacity:0.8,backgroundColor:parseInt("000000",16),color:parseInt("ffffff",16),textAlign:"center",fontFamily:"Arial,sans-serif",padding:"0 5px",fontSize:14}}};v.jwAddEventListener(a.api.events.JWPLAYER_PLAYER_STATE,l);v.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_MUTE,l);v.jwAddEventListener(a.api.events.JWPLAYER_PLAYLIST_ITEM,l);v.jwAddEventListener(a.api.events.JWPLAYER_ERROR,s);A();function A(){e.display=r("div","display");e.display_text=r("div","display_text");e.display.appendChild(e.display_text);e.display_image=r("img","display_image");e.display_image.onerror=function(B){_hide(e.display_image)};e.display_image.onload=m;e.display_icon=r("div","display_icon");e.display_iconBackground=r("div","display_iconBackground");e.display.appendChild(e.display_image);e.display_iconBackground.appendChild(e.display_icon);e.display.appendChild(e.display_iconBackground);b()}this.getDisplayElement=function(){return e.display};this.resize=function(C,B){g=C;z=B;_css(e.display,{width:C,height:B});_css(e.display_text,{width:(C-10),top:((z-e.display_text.getBoundingClientRect().height)/2)});_css(e.display_iconBackground,{top:((z-v.skin.getSkinElement("display","background").height)/2),left:((g-v.skin.getSkinElement("display","background").width)/2)});i();l({})};function m(B){k=e.display_image.naturalWidth;w=e.display_image.naturalHeight;i()}function i(){a.utils.stretch(v.jwGetStretching(),e.display_image,g,z,k,w)}function r(B,D){var C=document.createElement(B);C.id=v.id+"_jwplayer_"+D;_css(C,d[D].style);return C}function b(){for(var B in e){if(d[B].click!==undefined){e[B].onclick=d[B].click}}}function t(B){if(typeof B.preventDefault!="undefined"){B.preventDefault()}else{B.returnValue=false}if(v.jwGetState()!=a.api.events.state.PLAYING){v.jwPlay()}else{v.jwPause()}}function h(B){if(j){return}_show(e.display_iconBackground);e.display_icon.style.backgroundImage=(["url(",v.skin.getSkinElement("display",B).src,")"]).join("");_css(e.display_icon,{display:"block",width:v.skin.getSkinElement("display",B).width,height:v.skin.getSkinElement("display",B).height,top:(v.skin.getSkinElement("display","background").height-v.skin.getSkinElement("display",B).height)/2,left:(v.skin.getSkinElement("display","background").width-v.skin.getSkinElement("display",B).width)/2});if(v.skin.getSkinElement("display",B+"Over")!==undefined){e.display_icon.onmouseover=function(C){e.display_icon.style.backgroundImage=["url(",v.skin.getSkinElement("display",B+"Over").src,")"].join("")};e.display_icon.onmouseout=function(C){e.display_icon.style.backgroundImage=["url(",v.skin.getSkinElement("display",B).src,")"].join("")}}else{e.display_icon.onmouseover=null;e.display_icon.onmouseout=null}}function q(){_hide(e.display_icon);_hide(e.display_iconBackground)}function s(B){j=true;q();e.display_text.innerHTML=B.error;_show(e.display_text);e.display_text.style.top=((z-e.display_text.getBoundingClientRect().height)/2)+"px"}function c(){_css(e.display_image,{display:"none"});delete e.display_image.src}function u(){var B=e.display_image;e.display_image=r("img","display_image");e.display_image.onerror=function(C){_hide(e.display_image)};e.display_image.onload=m;e.display.replaceChild(e.display_image,B)}function l(B){if((B.type==a.api.events.JWPLAYER_PLAYER_STATE||B.type==a.api.events.JWPLAYER_PLAYLIST_ITEM)&&j){j=false;_hide(e.display_text)}if(p!==undefined){clearInterval(p);p=null;a.utils.animations.rotate(e.display_icon,0)}switch(v.jwGetState()){case a.api.events.state.BUFFERING:h("bufferIcon");x=0;p=setInterval(function(){x+=n;a.utils.animations.rotate(e.display_icon,x%360)},f);h("bufferIcon");break;case a.api.events.state.PAUSED:_css(e.display_image,{background:"transparent no-repeat center center"});h("playIcon");break;case a.api.events.state.IDLE:if(v.jwGetPlaylist()[v.jwGetItem()].image){_css(e.display_image,{display:"block"});e.display_image.src=a.utils.getAbsolutePath(v.jwGetPlaylist()[v.jwGetItem()].image)}else{u()}h("playIcon");break;default:if(v.jwGetMute()){u();h("muteIcon")}else{u();_hide(e.display_iconBackground);_hide(e.display_icon)}break}}return this}})(jwplayer);(function(jwplayer){jwplayer.html5.eventdispatcher=function(id,debug){var _id=id;var _debug=debug;var _listeners;var _globallisteners;this.resetEventListeners=function(){_listeners={};_globallisteners=[]};this.resetEventListeners();this.addEventListener=function(type,listener,count){try{if(_listeners[type]===undefined){_listeners[type]=[]}if(typeof(listener)=="string"){eval("listener = "+listener)}_listeners[type].push({listener:listener,count:count})}catch(err){jwplayer.utils.log("error",err)}return false};this.removeEventListener=function(type,listener){try{for(var listenerIndex=0;listenerIndex<_listeners[type].length;listenerIndex++){if(_listeners[type][lisenterIndex].toString()==listener.toString()){_listeners[type].slice(lisenterIndex,lisenterIndex+1);break}}}catch(err){jwplayer.utils.log("error",err)}return false};this.addGlobalListener=function(listener,count){try{if(typeof(listener)=="string"){eval("listener = "+listener)}_globallisteners.push({listener:listener,count:count})}catch(err){jwplayer.utils.log("error",err)}return false};this.removeGlobalListener=function(listener){try{for(var globalListenerIndex=0;globalListenerIndex<_globallisteners.length;globalListenerIndex++){if(_globallisteners[globalListenerIndex].toString()==listener.toString()){_globallisteners.slice(globalListenerIndex,globalListenerIndex+1);break}}}catch(err){jwplayer.utils.log("error",err)}return false};this.sendEvent=function(type,data){if(data===undefined){data={}}jwplayer.utils.extend(data,{id:_id,version:jwplayer.version,type:type});if(_debug){jwplayer.utils.log(type,data)}if(typeof _listeners[type]!="undefined"){for(var listenerIndex=0;listenerIndex<_listeners[type].length;listenerIndex++){try{_listeners[type][listenerIndex].listener(data)}catch(err){jwplayer.utils.log("There was an error while handling a listener",_listeners[type][listenerIndex].listener,err)}if(_listeners[type][listenerIndex].count===1){delete _listeners[type][listenerIndex]}else{if(_listeners[type][listenerIndex].count>0){_listeners[type][listenerIndex].count=_listeners[type][listenerIndex].count-1}}}}for(var globalListenerIndex=0;globalListenerIndex<_globallisteners.length;globalListenerIndex++){try{_globallisteners[globalListenerIndex].listener(data)}catch(err){jwplayer.utils.log("There was an error while handling a listener",_globallisteners[globalListenerIndex].listener,err)}if(_globallisteners[globalListenerIndex].count===1){delete _globallisteners[globalListenerIndex]}else{if(_globallisteners[globalListenerIndex].count>0){_globallisteners[globalListenerIndex].count=_globallisteners[globalListenerIndex].count-1}}}}}})(jwplayer);(function(a){var b={prefix:"http://l.longtailvideo.com/html5/",file:"logo.png",link:"http://www.longtailvideo.com/players/jw-flv-player/",margin:8,out:0.5,over:1,timeout:3,hide:true,position:"bottom-left"};_css=a.utils.css;a.html5.logo=function(l,m){var r=l;var n;var i;var c;j();function j(){p();d();f()}function p(){if(b.prefix){var t=l.version.split(/\W/).splice(0,2).join("/");if(b.prefix.indexOf(t)<0){b.prefix+=t+"/"}}if(m.position==a.html5.view.positions.OVER){m.position=b.position}i=a.utils.extend({},b)}function d(){c=document.createElement("img");c.id=r.id+"_jwplayer_logo";c.style.display="none";c.onload=function(t){_css(c,q());r.jwAddEventListener(a.api.events.JWPLAYER_PLAYER_STATE,s);e()};if(!i.file){return}if(i.file.indexOf("http://")===0){c.src=i.file}else{c.src=i.prefix+i.file}}if(!i.file){return}this.resize=function(u,t){};this.getDisplayElement=function(){return c};function f(){if(i.link){c.onmouseover=h;c.onmouseout=e;c.onclick=o}else{this.mouseEnabled=false}}function o(t){if(typeof t!="undefined"){t.stopPropagation()}r.jwPause();r.jwSetFullscreen(false);if(i.link){window.open(i.link,"_blank")}return}function e(t){if(i.link){c.style.opacity=i.out}return}function h(t){if(i.hide){c.style.opacity=i.over}return}function q(){var v={textDecoration:"none",position:"absolute",cursor:"pointer"};v.display=i.hide?"none":"block";var u=i.position.toLowerCase().split("-");for(var t in u){v[u[t]]=i.margin}return v}function k(){if(i.hide){c.style.display="block";c.style.opacity=0;a.utils.fadeTo(c,i.out,0.1,parseFloat(c.style.opacity));n=setTimeout(function(){g()},i.timeout*1000)}}function g(){if(i.hide){a.utils.fadeTo(c,0,0.1,parseFloat(c.style.opacity))}}function s(t){if(t.newstate==a.api.events.state.BUFFERING){clearTimeout(n);k()}}return this}})(jwplayer);(function(a){var c={ended:a.api.events.state.IDLE,playing:a.api.events.state.PLAYING,pause:a.api.events.state.PAUSED,buffering:a.api.events.state.BUFFERING};var b=a.utils.css;a.html5.mediavideo=function(f,D){var H={abort:t,canplay:m,canplaythrough:m,durationchange:q,emptied:t,ended:m,error:l,loadeddata:q,loadedmetadata:q,loadstart:m,pause:m,play:K,playing:m,progress:A,ratechange:t,seeked:m,seeking:m,stalled:m,suspend:m,timeupdate:K,volumechange:t,waiting:m,canshowcurrentframe:t,dataunavailable:t,empty:t,load:e,loadedfirstframe:t};var I=new a.html5.eventdispatcher();a.utils.extend(this,I);var h=f;var x=D;var E;var G;var d=a.api.events.state.IDLE;var B=null;var n;var g=0;var z=false;var r=false;var M;var L;var i=[];var N;var C=false;function v(){return d}function e(O){}function t(O){}function m(O){if(c[O.type]){s(c[O.type])}}function s(O){if(C){return}if(n){O=a.api.events.state.IDLE}if(O==a.api.events.state.PAUSED&&d==a.api.events.state.IDLE){return}if(O==a.api.events.state.PLAYING&&d==a.api.events.state.IDLE){s(a.api.events.state.BUFFERING);I.sendEvent(a.api.events.JWPLAYER_MEDIA_BUFFER,{bufferPercent:h.buffer});y();return}if(d!=O){var P=d;h.state=O;d=O;var Q=false;if(O==a.api.events.state.IDLE){p();if(h.position>=h.duration&&(h.position||h.duration)){Q=true}if(x.style.display!="none"&&!h.config.chromeless){x.style.display="none"}}I.sendEvent(a.api.events.JWPLAYER_PLAYER_STATE,{oldstate:P,newstate:O});if(Q){I.sendEvent(a.api.events.JWPLAYER_MEDIA_COMPLETE)}}n=false}function q(O){var P={height:O.target.videoHeight,width:O.target.videoWidth,duration:Math.round(O.target.duration*10)/10};if(h.duration===0||isNaN(h.duration)){h.duration=Math.round(O.target.duration*10)/10}h.playlist[h.item]=a.utils.extend(h.playlist[h.item],P);I.sendEvent(a.api.events.JWPLAYER_MEDIA_META,{metadata:P})}function K(P){if(n){return}if(P!==undefined&&P.target!==undefined){if(h.duration===0||isNaN(h.duration)){h.duration=Math.round(P.target.duration*10)/10}if(!z&&x.readyState>0){s(a.api.events.state.PLAYING)}if(d==a.api.events.state.PLAYING){if(!z&&x.readyState>0){z=true;try{x.currentTime=h.playlist[h.item].start}catch(O){}x.volume=h.volume/100;x.muted=h.mute}h.position=Math.round(P.target.currentTime*10)/10;I.sendEvent(a.api.events.JWPLAYER_MEDIA_TIME,{position:P.target.currentTime,duration:P.target.duration})}}A(P)}function y(){if(E===false&&d==a.api.events.state.BUFFERING){I.sendEvent(a.api.events.JWPLAYER_MEDIA_BUFFER_FULL);E=true}}function F(){var O=(i[i.length-1]-i[0])/i.length;N=setTimeout(function(){if(!G){A({lengthComputable:true,loaded:1,total:1})}},O*10)}function A(Q){var P,O;if(Q!==undefined&&Q.lengthComputable&&Q.total){o();P=Q.loaded/Q.total*100;O=P/100*(h.duration-x.currentTime);if(50<P&&!G){clearTimeout(N);F()}}else{if((x.buffered!==undefined)&&(x.buffered.length>0)){maxBufferIndex=0;if(maxBufferIndex>=0){P=x.buffered.end(maxBufferIndex)/x.duration*100;O=x.buffered.end(maxBufferIndex)-x.currentTime}}}y();if(!G){if(P==100&&G===false){G=true}if(P!==null&&(P>h.buffer)){h.buffer=Math.round(P);I.sendEvent(a.api.events.JWPLAYER_MEDIA_BUFFER,{bufferPercent:Math.round(P)})}}}function w(){if(B===null){B=setInterval(function(){K()},100)}}function p(){clearInterval(B);B=null}function l(Q){var P="There was an error: ";if((Q.target.error&&Q.target.tagName.toLowerCase()=="video")||Q.target.parentNode.error&&Q.target.parentNode.tagName.toLowerCase()=="video"){var O=Q.target.error===undefined?Q.target.parentNode.error:Q.target.error;switch(O.code){case O.MEDIA_ERR_ABORTED:P="You aborted the video playback: ";break;case O.MEDIA_ERR_NETWORK:P="A network error caused the video download to fail part-way: ";break;case O.MEDIA_ERR_DECODE:P="The video playback was aborted due to a corruption problem or because the video used features your browser did not support: ";break;case O.MEDIA_ERR_SRC_NOT_SUPPORTED:P="The video could not be loaded, either because the server or network failed or because the format is not supported: ";break;default:P="An unknown error occurred: ";break}}else{if(Q.target.tagName.toLowerCase()=="source"){L--;if(L>0){return}P="The video could not be loaded, either because the server or network failed or because the format is not supported: "}else{a.utils.log("Erroneous error received. Continuing...");return}}u();P+=j();C=true;I.sendEvent(a.api.events.JWPLAYER_ERROR,{error:P});return}function j(){var Q="";for(var P in M.levels){var O=M.levels[P];var R=x.ownerDocument.createElement("source");Q+=a.utils.getAbsolutePath(O.file);if(P<(M.levels.length-1)){Q+=", "}}return Q}this.getDisplayElement=function(){return x};this.play=function(){if(d!=a.api.events.state.PLAYING){if(x.style.display!="block"){x.style.display="block"}x.play();w();if(E){s(a.api.events.state.PLAYING)}}};this.pause=function(){x.pause();s(a.api.events.state.PAUSED)};this.seek=function(O){if(!(h.duration===0||isNaN(h.duration))&&!(h.position===0||isNaN(h.position))){x.currentTime=O;x.play()}};function u(){x.pause();p();h.position=0;n=true;s(a.api.events.state.IDLE)}this.stop=u;this.volume=function(O){x.volume=O/100;h.volume=O;I.sendEvent(a.api.events.JWPLAYER_MEDIA_VOLUME,{volume:Math.round(O)})};this.mute=function(O){x.muted=O;h.mute=O;I.sendEvent(a.api.events.JWPLAYER_MEDIA_MUTE,{mute:O})};this.resize=function(P,O){if(false){b(x,{width:P,height:O})}I.sendEvent(a.api.events.JWPLAYER_MEDIA_RESIZE,{fullscreen:h.fullscreen,width:P,hieght:O})};this.fullscreen=function(O){if(O===true){this.resize("100%","100%")}else{this.resize(h.config.width,h.config.height)}};this.load=function(O){J(O);I.sendEvent(a.api.events.JWPLAYER_MEDIA_LOADED);E=false;G=false;z=false;if(!h.config.chromeless){i=[];o();s(a.api.events.state.BUFFERING);setTimeout(function(){K()},25)}};function o(){var O=new Date().getTime();i.push(O)}this.hasChrome=function(){return r};function J(V){h.duration=V.duration;r=false;M=V;var Q=document.createElement("video");Q.preload="none";C=false;L=0;for(var P=0;P<V.levels.length;P++){var O=V.levels[P];if(a.utils.isYouTube(O.file)){delete Q;k(O.file);return}var R;if(O.type===undefined){var U=a.utils.extension(O.file);if(a.utils.extensionmap[U]!==undefined&&a.utils.extensionmap[U].html5!==undefined){R=a.utils.extensionmap[U].html5}else{R="video/"+U+";"}}else{R=O.type}if(a.utils.html5CanPlay(Q,O.file)){var T=x.ownerDocument.createElement("source");T.src=a.utils.getAbsolutePath(O.file);if(!a.utils.isLegacyAndroid()){T.type=R}L++;Q.appendChild(T)}}if(L===0){C=true;I.sendEvent(a.api.events.JWPLAYER_ERROR,{error:"The video could not be loaded because the format is not supported by your browser: "+j()})}if(h.config.chromeless){Q.poster=a.utils.getAbsolutePath(V.image);Q.controls="controls"}Q.style.position=x.style.position;Q.style.top=x.style.top;Q.style.left=x.style.left;Q.style.width=x.style.width;Q.style.height=x.style.height;Q.style.zIndex=x.style.zIndex;Q.onload=e;Q.volume=0;x.parentNode.replaceChild(Q,x);Q.id=x.id;x=Q;for(var S in H){x.addEventListener(S,function(W){if(W.target.parentNode!==null){H[W.type](W)}},true)}}function k(S){var P=document.createElement("object");S=["http://www.youtube.com/v/",S.replace(/^[^v]+v.(.{11}).*/,"$1"),"&amp;hl=en_US&amp;fs=1&autoplay=1"].join("");var V={movie:S,allowFullScreen:"true",allowscriptaccess:"always"};for(var O in V){var T=document.createElement("param");T.name=O;T.value=V[O];P.appendChild(T)}var U=document.createElement("embed");var Q={src:S,type:"application/x-shockwave-flash",allowscriptaccess:"always",allowfullscreen:"true",width:document.getElementById(f.id).style.width,height:document.getElementById(f.id).style.height};for(var R in Q){U[R]=Q[R]}P.appendChild(U);P.style.position=x.style.position;P.style.top=x.style.top;P.style.left=x.style.left;P.style.width=document.getElementById(f.id).style.width;P.style.height=document.getElementById(f.id).style.height;P.style.zIndex=2147483000;x.parentNode.replaceChild(P,x);P.id=x.id;x=P;r=true}this.embed=J;return this}})(jwplayer);(function(jwplayer){var _configurableStateVariables=["width","height","start","duration","volume","mute","fullscreen","item","plugins","stretching"];jwplayer.html5.model=function(api,container,options){var _api=api;var _container=container;var _model={id:_container.id,playlist:[],state:jwplayer.api.events.state.IDLE,position:0,buffer:0,config:{width:480,height:320,item:-1,skin:undefined,file:undefined,image:undefined,start:0,duration:0,bufferlength:5,volume:90,mute:false,fullscreen:false,repeat:"none",stretching:jwplayer.utils.stretching.UNIFORM,autostart:false,debug:undefined,screencolor:undefined}};var _media;var _eventDispatcher=new jwplayer.html5.eventdispatcher();var _components=["display","logo","controlbar"];jwplayer.utils.extend(_model,_eventDispatcher);for(var option in options){if(typeof options[option]=="string"){var type=/color$/.test(option)?"color":null;options[option]=jwplayer.utils.typechecker(options[option],type)}var config=_model.config;var path=option.split(".");for(var edge in path){if(edge==path.length-1){config[path[edge]]=options[option]}else{if(config[path[edge]]===undefined){config[path[edge]]={}}config=config[path[edge]]}}}for(var index in _configurableStateVariables){var configurableStateVariable=_configurableStateVariables[index];_model[configurableStateVariable]=_model.config[configurableStateVariable]}var pluginorder=_components.concat([]);if(_model.plugins!==undefined){if(typeof _model.plugins=="string"){var userplugins=_model.plugins.split(",");for(var userplugin in userplugins){if(typeof userplugins[userplugin]=="string"){pluginorder.push(userplugins[userplugin].replace(/^\s+|\s+$/g,""))}}}}if(jwplayer.utils.isIOS()){_model.config.chromeless=true}if(_model.config.chromeless){pluginorder=["logo"]}_model.plugins={order:pluginorder,config:{controlbar:{position:jwplayer.html5.view.positions.BOTTOM}},object:{}};if(typeof _model.config.components!="undefined"){for(var component in _model.config.components){_model.plugins.config[component]=_model.config.components[component]}}for(var pluginIndex in _model.plugins.order){var pluginName=_model.plugins.order[pluginIndex];var pluginConfig=_model.config[pluginName]===undefined?{}:_model.config[pluginName];_model.plugins.config[pluginName]=_model.plugins.config[pluginName]===undefined?pluginConfig:jwplayer.utils.extend(_model.plugins.config[pluginName],pluginConfig);if(_model.plugins.config[pluginName].position===undefined){_model.plugins.config[pluginName].position=jwplayer.html5.view.positions.OVER}}_model.loadPlaylist=function(arg,ready){var input;if(typeof arg=="string"){try{input=eval(arg)}catch(err){input=arg}}else{input=arg}var config;switch(jwplayer.utils.typeOf(input)){case"object":config=input;break;case"array":config={playlist:input};break;default:config={file:input};break}_model.playlist=new jwplayer.html5.playlist(config);if(_model.config.shuffle){_model.item=_getShuffleItem()}else{if(_model.config.item>=_model.playlist.length){_model.config.item=_model.playlist.length-1}else{if(_model.config.item<0){_model.config.item=0}}_model.item=_model.config.item}if(!ready){_eventDispatcher.sendEvent(jwplayer.api.events.JWPLAYER_PLAYLIST_LOADED,{playlist:_model.playlist})}_model.setActiveMediaProvider(_model.playlist[_model.item])};function _getShuffleItem(){var result=null;if(_model.playlist.length>1){while(result===null){result=Math.floor(Math.random()*_model.playlist.length);if(result==_model.item){result=null}}}else{result=0}return result}function forward(evt){if(evt.type==jwplayer.api.events.JWPLAYER_MEDIA_LOADED){_container=_media.getDisplayElement()}_eventDispatcher.sendEvent(evt.type,evt)}_model.setActiveMediaProvider=function(playlistItem){if(_media!==undefined){_media.resetEventListeners()}_media=new jwplayer.html5.mediavideo(_model,_container);_media.addGlobalListener(forward);if(_model.config.chromeless){_media.load(playlistItem)}return true};_model.getMedia=function(){return _media};_model.setupPlugins=function(){for(var plugin in _model.plugins.order){try{if(jwplayer.html5[_model.plugins.order[plugin]]!==undefined){_model.plugins.object[_model.plugins.order[plugin]]=new jwplayer.html5[_model.plugins.order[plugin]](_api,_model.plugins.config[_model.plugins.order[plugin]])}else{if(window[_model.plugins.order[plugin]]!==undefined){_model.plugins.object[_model.plugins.order[plugin]]=new window[_model.plugins.order[plugin]](_api,_model.plugins.config[_model.plugins.order[plugin]])}else{_model.plugins.order.splice(plugin,plugin+1)}}}catch(err){jwplayer.utils.log("Could not setup "+_model.plugins.order[plugin])}}};return _model}})(jwplayer);(function(a){a.html5.playlist=function(b){var d=[];if(b.playlist&&b.playlist instanceof Array&&b.playlist.length>0){for(var c in b.playlist){if(!isNaN(parseInt(c))){d.push(new a.html5.playlistitem(b.playlist[c]))}}}else{d.push(new a.html5.playlistitem(b))}return d}})(jwplayer);(function(a){a.html5.playlistitem=function(c){var b={author:"",date:"",description:"",image:"",link:"",mediaid:"",tags:"",title:"",provider:"",file:"",streamer:"",duration:-1,start:0,currentLevel:-1,levels:[]};for(var d in b){if(c[d]!==undefined){b[d]=c[d]}}if(b.levels.length===0){b.levels[0]=new a.html5.playlistitemlevel(b)}return b}})(jwplayer);(function(a){a.html5.playlistitemlevel=function(b){var d={file:"",streamer:"",bitrate:0,width:0};for(var c in d){if(b[c]!==undefined){d[c]=b[c]}}return d}})(jwplayer);(function(a){a.html5.skin=function(){var b={};var c=false;this.load=function(d,e){new a.html5.skinloader(d,function(f){c=true;b=f;e()},function(){new a.html5.skinloader("",function(f){c=true;b=f;e()})})};this.getSkinElement=function(d,e){if(c){try{return b[d].elements[e]}catch(f){a.utils.log("No such skin component / element: ",[d,e])}}return null};this.getComponentSettings=function(d){if(c){return b[d].settings}return null};this.getComponentLayout=function(d){if(c){return b[d].layout}return null}}})(jwplayer);(function(a){a.html5.skinloader=function(f,n,i){var m={};var c=n;var j=i;var e=true;var h;var l=f;var q=false;function k(){if(l===undefined||l===""){d(a.html5.defaultSkin().xml)}else{a.utils.ajax(a.utils.getAbsolutePath(l),function(r){try{if(r.responseXML!==null){d(r.responseXML);return}}catch(s){}d(a.html5.defaultSkin().xml)},function(r){d(a.html5.defaultSkin().xml)})}}function d(w){var C=w.getElementsByTagName("component");if(C.length===0){return}for(var F=0;F<C.length;F++){var A=C[F].getAttribute("name");var z={settings:{},elements:{},layout:{}};m[A]=z;var E=C[F].getElementsByTagName("elements")[0].getElementsByTagName("element");for(var D=0;D<E.length;D++){b(E[D],A)}var x=C[F].getElementsByTagName("settings")[0];if(x!==undefined&&x.childNodes.length>0){var I=x.getElementsByTagName("setting");for(var N=0;N<I.length;N++){var O=I[N].getAttribute("name");var G=I[N].getAttribute("value");var v=/color$/.test(O)?"color":null;m[A].settings[O]=a.utils.typechecker(G,v)}}var J=C[F].getElementsByTagName("layout")[0];if(J!==undefined&&J.childNodes.length>0){var K=J.getElementsByTagName("group");for(var u=0;u<K.length;u++){var y=K[u];m[A].layout[y.getAttribute("position")]={elements:[]};for(var M=0;M<y.attributes.length;M++){var B=y.attributes[M];m[A].layout[y.getAttribute("position")][B.name]=B.value}var L=y.getElementsByTagName("*");for(var t=0;t<L.length;t++){var r=L[t];m[A].layout[y.getAttribute("position")].elements.push({type:r.tagName});for(var s=0;s<r.attributes.length;s++){var H=r.attributes[s];m[A].layout[y.getAttribute("position")].elements[t][H.name]=H.value}if(m[A].layout[y.getAttribute("position")].elements[t].name===undefined){m[A].layout[y.getAttribute("position")].elements[t].name=r.tagName}}}}e=false;p()}}function p(){clearInterval(h);if(!q){h=setInterval(function(){o()},100)}}function b(w,v){var u=new Image();var r=w.getAttribute("name");var t=w.getAttribute("src");var y;if(t.indexOf("data:image/png;base64,")===0){y=t}else{var s=a.utils.getAbsolutePath(l);var x=s.substr(0,s.lastIndexOf("/"));y=[x,v,t].join("/")}m[v].elements[r]={height:0,width:0,src:"",ready:false};u.onload=function(z){g(u,r,v)};u.onerror=function(z){q=true;p();j()};u.src=y}function o(){for(var r in m){if(r!="properties"){for(var s in m[r].elements){if(!m[r].elements[s].ready){return}}}}if(e===false){clearInterval(h);c(m)}}function g(r,t,s){m[s].elements[t].height=r.height;m[s].elements[t].width=r.width;m[s].elements[t].src=r.src;m[s].elements[t].ready=true;p()}k()}})(jwplayer);(function(a){a.html5.api=function(b,k){var j={};if(!a.utils.html5SupportsConfig()){return j}var e=document.createElement("div");b.parentNode.replaceChild(e,b);e.id=b.id;j.version=a.version;j.id=e.id;var i=new a.html5.model(j,e,k);var g=new a.html5.view(j,e,i);var h=new a.html5.controller(j,e,i,g);j.skin=new a.html5.skin();j.jwPlay=function(l){if(typeof l=="undefined"){d()}else{if(l.toString().toLowerCase()=="true"){h.play()}else{h.pause()}}};j.jwPause=function(l){if(typeof l=="undefined"){d()}else{if(l.toString().toLowerCase()=="true"){h.pause()}else{h.play()}}};function d(){if(i.state==a.api.events.state.PLAYING||i.state==a.api.events.state.BUFFERING){h.pause()}else{h.play()}}j.jwStop=h.stop;j.jwSeek=h.seek;j.jwPlaylistItem=h.item;j.jwPlaylistNext=h.next;j.jwPlaylistPrev=h.prev;j.jwResize=h.resize;j.jwLoad=h.load;function f(l){return function(){return i[l]}}j.jwGetItem=f("item");j.jwGetPosition=f("position");j.jwGetDuration=f("duration");j.jwGetBuffer=f("buffer");j.jwGetWidth=f("width");j.jwGetHeight=f("height");j.jwGetFullscreen=f("fullscreen");j.jwSetFullscreen=h.setFullscreen;j.jwGetVolume=f("volume");j.jwSetVolume=h.setVolume;j.jwGetMute=f("mute");j.jwSetMute=h.setMute;j.jwGetStretching=f("stretching");j.jwGetState=f("state");j.jwGetVersion=function(){return j.version};j.jwGetPlaylist=function(){return i.playlist};j.jwAddEventListener=h.addEventListener;j.jwRemoveEventListener=h.removeEventListener;j.jwSendEvent=h.sendEvent;j.jwGetLevel=function(){};j.jwGetBandwidth=function(){};j.jwGetLockState=function(){};j.jwLock=function(){};j.jwUnlock=function(){};function c(n,m,l){return function(){n.loadPlaylist(n.config,true);n.setupPlugins();m.setup(n.getMedia().getDisplayElement());var o={id:j.id,version:j.version};l.sendEvent(a.api.events.JWPLAYER_READY,o);if(playerReady!==undefined){playerReady(o)}if(window[n.config.playerReady]!==undefined){window[n.config.playerReady](o)}n.sendEvent(a.api.events.JWPLAYER_PLAYLIST_LOADED,{playlist:n.playlist});l.item(n.item);if(n.config.autostart===true&&!n.config.chromeless){l.play()}}}if(i.config.chromeless){setTimeout(c(i,g,h),25)}else{j.skin.load(i.config.skin,c(i,g,h))}return j}})(jwplayer);
(function() {



}).call(this);
(function() {



}).call(this);
(function() {



}).call(this);
(function() {



}).call(this);
(function() {



}).call(this);
(function() {



}).call(this);
(function() {



}).call(this);
(function() {



}).call(this);
(function() {



}).call(this);
// LiveValidation 1.3 (standalone version)
// Copyright (c) 2007-2008 Alec Hill (www.livevalidation.com)
// LiveValidation is licensed under the terms of the MIT License

/*********************************************** LiveValidation class ***********************************/

/**
 *	validates a form field in real-time based on validations you assign to it
 *	
 *	@var element {mixed} - either a dom element reference or the string id of the element to validate
 *	@var optionsObj {Object} - general options, see below for details
 *
 *	optionsObj properties:
 *							validMessage {String} 	- the message to show when the field passes validation
 *													  (DEFAULT: "Thankyou!")
 *							onValid {Function} 		- function to execute when field passes validation
 *													  (DEFAULT: function(){ this.insertMessage(this.createMessageSpan()); this.addFieldClass(); } )	
 *							onInvalid {Function} 	- function to execute when field fails validation
 *													  (DEFAULT: function(){ this.insertMessage(this.createMessageSpan()); this.addFieldClass(); })
 *							insertAfterWhatNode {Int} 	- position to insert default message
 *													  (DEFAULT: the field that is being validated)	
 *              onlyOnBlur {Boolean} - whether you want it to validate as you type or only on blur
 *                            (DEFAULT: false)
 *              wait {Integer} - the time you want it to pause from the last keystroke before it validates (ms)
 *                            (DEFAULT: 0)
 *              onlyOnSubmit {Boolean} - whether should be validated only when the form it belongs to is submitted
 *                            (DEFAULT: false)						
 */

var LiveValidation = function(element, optionsObj){
  	this.initialize(element, optionsObj);
}

LiveValidation.VERSION = '1.3 standalone';

/** element types constants ****/

LiveValidation.TEXTAREA 		= 1;
LiveValidation.TEXT 			    = 2;
LiveValidation.PASSWORD 		= 3;
LiveValidation.CHECKBOX 		= 4;
LiveValidation.SELECT = 5;
LiveValidation.FILE = 6;

/****** Static methods *******/

/**
 *	pass an array of LiveValidation objects and it will validate all of them
 *	
 *	@var validations {Array} - an array of LiveValidation objects
 *	@return {Bool} - true if all passed validation, false if any fail						
 */
LiveValidation.massValidate = function(validations){
  var returnValue = true;
	for(var i = 0, len = validations.length; i < len; ++i ){
		var valid = validations[i].validate();
		if(returnValue) returnValue = valid;
	}
	return returnValue;
}

/****** prototype ******/

LiveValidation.prototype = {

    validClass: 'LV_valid',
    invalidClass: 'LV_invalid',
    messageClass: 'LV_validation_message',
    validFieldClass: 'LV_valid_field',
    invalidFieldClass: 'LV_invalid_field',

    /**
     *	initialises all of the properties and events
     *
     * @var - Same as constructor above
     */
    initialize: function(element, optionsObj){
      var self = this;
      if(!element) throw new Error("LiveValidation::initialize - No element reference or element id has been provided!");
    	this.element = element.nodeName ? element : document.getElementById(element);
    	if(!this.element) throw new Error("LiveValidation::initialize - No element with reference or id of '" + element + "' exists!");
      // default properties that could not be initialised above
    	this.validations = [];
      this.elementType = this.getElementType();
      this.form = this.element.form;
      // options
    	var options = optionsObj || {};
    	this.validMessage = options.validMessage || 'Thankyou!';
    	var node = options.insertAfterWhatNode || this.element;
		this.insertAfterWhatNode = node.nodeType ? node : document.getElementById(node);
      this.onValid = options.onValid || function() { this.insertMessage(this.createMessageSpan());  this.addFieldClass(); };
      this.onInvalid = options.onInvalid || function(){ this.insertMessage(this.createMessageSpan()); $("#errorMsgs").append("<li>"+this.message+"</li>"); this.addFieldClass(); };
    	this.onlyOnBlur =  options.onlyOnBlur || false;
    	this.wait = options.wait || 0;
      this.onlyOnSubmit = options.onlyOnSubmit || false;
      // add to form if it has been provided
      if(this.form){
        this.formObj = LiveValidationForm.getInstance(this.form);
        this.formObj.addField(this);
      }
      // events
      // collect old events
      this.oldOnFocus = this.element.onfocus || function(){};
      this.oldOnBlur = this.element.onblur || function(){};
      this.oldOnClick = this.element.onclick || function(){};
      this.oldOnChange = this.element.onchange || function(){};
      this.oldOnKeyup = this.element.onkeyup || function(){};
      this.element.onfocus = function(e){ self.doOnFocus(e); return self.oldOnFocus.call(this, e); }
      if(!this.onlyOnSubmit){
        switch(this.elementType){
          case LiveValidation.CHECKBOX:
            this.element.onclick = function(e){ self.validate(); return self.oldOnClick.call(this, e); }
          // let it run into the next to add a change event too
          case LiveValidation.SELECT:
          case LiveValidation.FILE:
            this.element.onchange = function(e){ self.validate(); return self.oldOnChange.call(this, e); }
            break;
          default:
            if(!this.onlyOnBlur) this.element.onkeyup = function(e){ self.deferValidation(); return self.oldOnKeyup.call(this, e); }
      	    this.element.onblur = function(e){ self.doOnBlur(e); return self.oldOnBlur.call(this, e); }
        }
      }
    },
	
	/**
     *	destroys the instance's events (restoring previous ones) and removes it from any LiveValidationForms
     */
    destroy: function(){
  	  if(this.formObj){
		// remove the field from the LiveValidationForm
		this.formObj.removeField(this);
		// destroy the LiveValidationForm if no LiveValidation fields left in it
		this.formObj.destroy();
	  }
      // remove events - set them back to the previous events
	  this.element.onfocus = this.oldOnFocus;
      if(!this.onlyOnSubmit){
        switch(this.elementType){
          case LiveValidation.CHECKBOX:
            this.element.onclick = this.oldOnClick;
          // let it run into the next to add a change event too
          case LiveValidation.SELECT:
          case LiveValidation.FILE:
            this.element.onchange = this.oldOnChange;
            break;
          default:
            if(!this.onlyOnBlur) this.element.onkeyup = this.oldOnKeyup;
      	    this.element.onblur = this.oldOnBlur;
        }
      }
      this.validations = [];
	  this.removeMessageAndFieldClass();
    },
    
    /**
     *	adds a validation to perform to a LiveValidation object
     *
     *	@var validationFunction {Function} - validation function to be used (ie Validate.Presence )
     *	@var validationParamsObj {Object} - parameters for doing the validation, if wanted or necessary
     * @return {Object} - the LiveValidation object itself so that calls can be chained
     */
    add: function(validationFunction, validationParamsObj){
      this.validations.push( {type: validationFunction, params: validationParamsObj || {} } );
      return this;
    },
    
	/**
     *	removes a validation from a LiveValidation object - must have exactly the same arguments as used to add it 
     *
     *	@var validationFunction {Function} - validation function to be used (ie Validate.Presence )
     *	@var validationParamsObj {Object} - parameters for doing the validation, if wanted or necessary
     * @return {Object} - the LiveValidation object itself so that calls can be chained
     */
    remove: function(validationFunction, validationParamsObj){
	  var found = false;
	  for( var i = 0, len = this.validations.length; i < len; i++ ){
	  		if( this.validations[i].type == validationFunction ){
				if (this.validations[i].params == validationParamsObj) {
					found = true;
					break;
				}
			}
	  }
      if(found) this.validations.splice(i,1);
      return this;
    },
    
	
    /**
     * makes the validation wait the alotted time from the last keystroke 
     */
    deferValidation: function(e){
      if(this.wait >= 300) this.removeMessageAndFieldClass();
    	var self = this;
      if(this.timeout) clearTimeout(self.timeout);
      this.timeout = setTimeout( function(){ self.validate() }, self.wait); 
    },
        
    /**
     * sets the focused flag to false when field loses focus 
     */
    doOnBlur: function(e){
      this.focused = false;
      this.validate(e);
    },
        
    /**
     * sets the focused flag to true when field gains focus 
     */
    doOnFocus: function(e){
      this.focused = true;
      this.removeMessageAndFieldClass();
    },
    
    /**
     *	gets the type of element, to check whether it is compatible
     *
     *	@var validationFunction {Function} - validation function to be used (ie Validate.Presence )
     *	@var validationParamsObj {Object} - parameters for doing the validation, if wanted or necessary
     */
    getElementType: function(){
      switch(true){
        case (this.element.nodeName.toUpperCase() == 'TEXTAREA'):
        return LiveValidation.TEXTAREA;
      case (this.element.nodeName.toUpperCase() == 'INPUT' && this.element.type.toUpperCase() == 'TEXT'):
        return LiveValidation.TEXT;
      case (this.element.nodeName.toUpperCase() == 'INPUT' && this.element.type.toUpperCase() == 'PASSWORD'):
        return LiveValidation.PASSWORD;
      case (this.element.nodeName.toUpperCase() == 'INPUT' && this.element.type.toUpperCase() == 'CHECKBOX'):
        return LiveValidation.CHECKBOX;
      case (this.element.nodeName.toUpperCase() == 'INPUT' && this.element.type.toUpperCase() == 'FILE'):
        return LiveValidation.FILE;
      case (this.element.nodeName.toUpperCase() == 'SELECT'):
        return LiveValidation.SELECT;
        case (this.element.nodeName.toUpperCase() == 'INPUT'):
        	throw new Error('LiveValidation::getElementType - Cannot use LiveValidation on an ' + this.element.type + ' input!');
        default:
        	throw new Error('LiveValidation::getElementType - Element must be an input, select, or textarea!');
      }
    },
    
    /**
     *	loops through all the validations added to the LiveValidation object and checks them one by one
     *
     *	@var validationFunction {Function} - validation function to be used (ie Validate.Presence )
     *	@var validationParamsObj {Object} - parameters for doing the validation, if wanted or necessary
     * @return {Boolean} - whether the all the validations passed or if one failed
     */
    doValidations: function(){
      	this.validationFailed = false;
      	for(var i = 0, len = this.validations.length; i < len; ++i){
    	 	var validation = this.validations[i];
    		switch(validation.type){
    		   	case Validate.Presence:
                case Validate.Confirmation:
                case Validate.Acceptance:
    		   		this.displayMessageWhenEmpty = true;
    		   		this.validationFailed = !this.validateElement(validation.type, validation.params); 
    				break;
    		   	default:
    		   		this.validationFailed = !this.validateElement(validation.type, validation.params);
    		   		break;
    		}
    		if(this.validationFailed) return false;	
    	}
    	this.message = this.validMessage;
    	return true;
    },
    
    /**
     *	performs validation on the element and handles any error (validation or otherwise) it throws up
     *
     *	@var validationFunction {Function} - validation function to be used (ie Validate.Presence )
     *	@var validationParamsObj {Object} - parameters for doing the validation, if wanted or necessary
     * @return {Boolean} - whether the validation has passed or failed
     */
    validateElement: function(validationFunction, validationParamsObj){
      	var value = (this.elementType == LiveValidation.SELECT) ? this.element.options[this.element.selectedIndex].value : this.element.value;     
        if(validationFunction == Validate.Acceptance){
    	    if(this.elementType != LiveValidation.CHECKBOX) throw new Error('LiveValidation::validateElement - Element to validate acceptance must be a checkbox!');
    		value = this.element.checked;
    	}
        var isValid = true;
      	try{    
    		validationFunction(value, validationParamsObj);
    	} catch(error) {
    	  	if(error instanceof Validate.Error){
    			if( value !== '' || (value === '' && this.displayMessageWhenEmpty) ){
    				this.validationFailed = true;
    				this.message = error.message;
    				isValid = false;
    			}
    		}else{
    		  	throw error;
    		}
    	}finally{
    	    return isValid;
        }
    },
    
    /**
     *	makes it do the all the validations and fires off the onValid or onInvalid callbacks
     *
     * @return {Boolean} - whether the all the validations passed or if one failed
     */
    validate: function(){
      if(!this.element.disabled){
		var isValid = this.doValidations();
		if(isValid){
			this.onValid();
			return true;
		}else {
			this.onInvalid();
            //alert("helo");            
			return false;
		}
	  }else{
      return true;
    }
    },
	
 /**
   *  enables the field
   *
   *  @return {LiveValidation} - the LiveValidation object for chaining
   */
  enable: function(){
  	this.element.disabled = false;
	return this;
  },
  
  /**
   *  disables the field and removes any message and styles associated with the field
   *
   *  @return {LiveValidation} - the LiveValidation object for chaining
   */
  disable: function(){
  	this.element.disabled = true;
	this.removeMessageAndFieldClass();
	return this;
  },
    
    /** Message insertion methods ****************************
     * 
     * These are only used in the onValid and onInvalid callback functions and so if you overide the default callbacks,
     * you must either impliment your own functions to do whatever you want, or call some of these from them if you 
     * want to keep some of the functionality
     */
    
    /**
     *	makes a span containg the passed or failed message
     *
     * @return {HTMLSpanObject} - a span element with the message in it
     */
    createMessageSpan: function(){
        var span = document.createElement('span');
    	var textNode = document.createTextNode(this.message);
      	span.appendChild(textNode);
        return span;
    },
    
    /**
     *	inserts the element containing the message in place of the element that already exists (if it does)
     *
     * @var elementToIsert {HTMLElementObject} - an element node to insert
     */
    insertMessage: function(elementToInsert){
      	this.removeMessage();
      	if( (this.displayMessageWhenEmpty && (this.elementType == LiveValidation.CHECKBOX || this.element.value == ''))
    	  || this.element.value != '' ){
            var className = this.validationFailed ? this.invalidClass : this.validClass;
    	  	elementToInsert.className += ' ' + this.messageClass + ' ' + className;
            if(this.insertAfterWhatNode.nextSibling){
    		  		this.insertAfterWhatNode.parentNode.insertBefore(elementToInsert, this.insertAfterWhatNode.nextSibling);
    		}else{
    			    this.insertAfterWhatNode.parentNode.appendChild(elementToInsert);
    	    }
    	}
    },
    
    
    /**
     *	changes the class of the field based on whether it is valid or not
     */
    addFieldClass: function(){
        this.removeFieldClass();
        if(!this.validationFailed){
            if(this.displayMessageWhenEmpty || this.element.value != ''){
                if(this.element.className.indexOf(this.validFieldClass) == -1) this.element.className += ' ' + this.validFieldClass;
            }
        }else{
            if(this.element.className.indexOf(this.invalidFieldClass) == -1) this.element.className += ' ' + this.invalidFieldClass;
        }
    },
    
    /**
     *	removes the message element if it exists, so that the new message will replace it
     */
    removeMessage: function(){
    	var nextEl;
    	var el = this.insertAfterWhatNode;
    	while(el.nextSibling){
    	    if(el.nextSibling.nodeType === 1){
    		  	nextEl = el.nextSibling;
    		  	break;
    		}
    		el = el.nextSibling;
    	}
      	if(nextEl && nextEl.className.indexOf(this.messageClass) != -1) this.insertAfterWhatNode.parentNode.removeChild(nextEl);
    },
    
    /**
     *	removes the class that has been applied to the field to indicte if valid or not
     */
    removeFieldClass: function(){
      if(this.element.className.indexOf(this.invalidFieldClass) != -1) this.element.className = this.element.className.split(this.invalidFieldClass).join('');
      if(this.element.className.indexOf(this.validFieldClass) != -1) this.element.className = this.element.className.split(this.validFieldClass).join(' ');
    },
        
    /**
     *	removes the message and the field class
     */
    removeMessageAndFieldClass: function(){
      this.removeMessage();
      this.removeFieldClass();
    }

} // end of LiveValidation class

/*************************************** LiveValidationForm class ****************************************/
/**
 * This class is used internally by LiveValidation class to associate a LiveValidation field with a form it is icontained in one
 * 
 * It will therefore not really ever be needed to be used directly by the developer, unless they want to associate a LiveValidation 
 * field with a form that it is not a child of
 */

/**
   *	handles validation of LiveValidation fields belonging to this form on its submittal
   *	
   *	@var element {HTMLFormElement} - a dom element reference to the form to turn into a LiveValidationForm
   */
var LiveValidationForm = function(element){
  this.initialize(element);
}

/**
 * namespace to hold instances
 */
LiveValidationForm.instances = {};

/**
   *	gets the instance of the LiveValidationForm if it has already been made or creates it if it doesnt exist
   *	
   *	@var element {HTMLFormElement} - a dom element reference to a form
   */
LiveValidationForm.getInstance = function(element){
  var rand = Math.random() * Math.random();
  if(!element.id) element.id = 'formId_' + rand.toString().replace(/\./, '') + new Date().valueOf();
  if(!LiveValidationForm.instances[element.id]) LiveValidationForm.instances[element.id] = new LiveValidationForm(element);
  return LiveValidationForm.instances[element.id];
}

LiveValidationForm.prototype = {
  
  /**
   *	constructor for LiveValidationForm - handles validation of LiveValidation fields belonging to this form on its submittal
   *	
   *	@var element {HTMLFormElement} - a dom element reference to the form to turn into a LiveValidationForm
   */
  initialize: function(element){
  	this.name = element.id;
    this.element = element;
    this.fields = [];
    // preserve the old onsubmit event
	this.oldOnSubmit = this.element.onsubmit || function(){};
    var self = this;
    this.element.onsubmit = function(e){
      return (LiveValidation.massValidate(self.fields)) ? self.oldOnSubmit.call(this, e || window.event) !== false : false;
    }
  },
  
  /**
   *	adds a LiveValidation field to the forms fields array
   *	
   *	@var element {LiveValidation} - a LiveValidation object
   */
  addField: function(newField){
    this.fields.push(newField);
  },
  
  /**
   *	removes a LiveValidation field from the forms fields array
   *	
   *	@var victim {LiveValidation} - a LiveValidation object
   */
  removeField: function(victim){
  	var victimless = [];
  	for( var i = 0, len = this.fields.length; i < len; i++){
		if(this.fields[i] !== victim) victimless.push(this.fields[i]);
	}
    this.fields = victimless;
  },
  
  /**
   *	destroy this instance and its events
   *
   * @var force {Boolean} - whether to force the detruction even if there are fields still associated
   */
  destroy: function(force){
  	// only destroy if has no fields and not being forced
  	if (this.fields.length != 0 && !force) return false;
	// remove events - set back to previous events
	this.element.onsubmit = this.oldOnSubmit;
	// remove from the instances namespace
	LiveValidationForm.instances[this.name] = null;
	return true;
  }
   
}// end of LiveValidationForm prototype

/*************************************** Validate class ****************************************/
/**
 * This class contains all the methods needed for doing the actual validation itself
 *
 * All methods are static so that they can be used outside the context of a form field
 * as they could be useful for validating stuff anywhere you want really
 *
 * All of them will return true if the validation is successful, but will raise a ValidationError if
 * they fail, so that this can be caught and the message explaining the error can be accessed ( as just 
 * returning false would leave you a bit in the dark as to why it failed )
 *
 * Can use validation methods alone and wrap in a try..catch statement yourself if you want to access the failure
 * message and handle the error, or use the Validate::now method if you just want true or false
 */

var Validate = {

    /**
     *	validates that the field has been filled in
     *
     *	@var value {mixed} - value to be checked
     *	@var paramsObj {Object} - parameters for this particular validation, see below for details
     *
     *	paramsObj properties:
     *							failureMessage {String} - the message to show when the field fails validation 
     *													  (DEFAULT: "Can't be empty!")
     */
    Presence: function(value, paramsObj){
      	var paramsObj = paramsObj || {};
    	var message = paramsObj.failureMessage || "Can't be empty!";
    	if(value === '' || value === null || value === undefined){ 
    	  	Validate.fail(message);
    	}
    	return true;
    },
    
    /**
     *	validates that the value is numeric, does not fall within a given range of numbers
     *	
     *	@var value {mixed} - value to be checked
     *	@var paramsObj {Object} - parameters for this particular validation, see below for details
     *
     *	paramsObj properties:
     *							notANumberMessage {String} - the message to show when the validation fails when value is not a number
     *													  	  (DEFAULT: "Must be a number!")
     *							notAnIntegerMessage {String} - the message to show when the validation fails when value is not an integer
     *													  	  (DEFAULT: "Must be a number!")
     *							wrongNumberMessage {String} - the message to show when the validation fails when is param is used
     *													  	  (DEFAULT: "Must be {is}!")
     *							tooLowMessage {String} 		- the message to show when the validation fails when minimum param is used
     *													  	  (DEFAULT: "Must not be less than {minimum}!")
     *							tooHighMessage {String} 	- the message to show when the validation fails when maximum param is used
     *													  	  (DEFAULT: "Must not be more than {maximum}!")
     *							is {Int} 					- the length must be this long 
     *							minimum {Int} 				- the minimum length allowed
     *							maximum {Int} 				- the maximum length allowed
     *                         onlyInteger {Boolean} - if true will only allow integers to be valid
     *                                                             (DEFAULT: false)
     *
     *  NB. can be checked if it is within a range by specifying both a minimum and a maximum
     *  NB. will evaluate numbers represented in scientific form (ie 2e10) correctly as numbers				
     */
    Numericality: function(value, paramsObj){
        var suppliedValue = value;
        var value = Number(value);
    	var paramsObj = paramsObj || {};
        var minimum = ((paramsObj.minimum) || (paramsObj.minimum == 0)) ? paramsObj.minimum : null;;
        var maximum = ((paramsObj.maximum) || (paramsObj.maximum == 0)) ? paramsObj.maximum : null;
    	var is = ((paramsObj.is) || (paramsObj.is == 0)) ? paramsObj.is : null;
        var notANumberMessage = paramsObj.notANumberMessage || "Must be a number!";
        var notAnIntegerMessage = paramsObj.notAnIntegerMessage || "Must be an integer!";
    	var wrongNumberMessage = paramsObj.wrongNumberMessage || "Must be " + is + "!";
    	var tooLowMessage = paramsObj.tooLowMessage || "Must not be less than " + minimum + "!";
    	var tooHighMessage = paramsObj.tooHighMessage || "Must not be more than " + maximum + "!";
        if (!isFinite(value)) Validate.fail(notANumberMessage);
        if (paramsObj.onlyInteger && (/\.0+$|\.$/.test(String(suppliedValue))  || value != parseInt(value)) ) Validate.fail(notAnIntegerMessage);
    	switch(true){
    	  	case (is !== null):
    	  		if( value != Number(is) ) Validate.fail(wrongNumberMessage);
    			break;
    	  	case (minimum !== null && maximum !== null):
    	  		Validate.Numericality(value, {tooLowMessage: tooLowMessage, minimum: minimum});
    	  		Validate.Numericality(value, {tooHighMessage: tooHighMessage, maximum: maximum});
    	  		break;
    	  	case (minimum !== null):
    	  		if( value < Number(minimum) ) Validate.fail(tooLowMessage);
    			break;
    	  	case (maximum !== null):
    	  		if( value > Number(maximum) ) Validate.fail(tooHighMessage);
    			break;
    	}
    	return true;
    },
    
    /**
     *	validates against a RegExp pattern
     *	
     *	@var value {mixed} - value to be checked
     *	@var paramsObj {Object} - parameters for this particular validation, see below for details
     *
     *	paramsObj properties:
     *							failureMessage {String} - the message to show when the field fails validation
     *													  (DEFAULT: "Not valid!")
     *							pattern {RegExp} 		- the regular expression pattern
     *													  (DEFAULT: /./)
     *             negate {Boolean} - if set to true, will validate true if the pattern is not matched
   *                           (DEFAULT: false)
     *
     *  NB. will return true for an empty string, to allow for non-required, empty fields to validate.
     *		If you do not want this to be the case then you must either add a LiveValidation.PRESENCE validation
     *		or build it into the regular expression pattern
     */
    Format: function(value, paramsObj){
      var value = String(value);
    	var paramsObj = paramsObj || {};
    	var message = paramsObj.failureMessage || "Not valid!";
      var pattern = paramsObj.pattern || /./;
      var negate = paramsObj.negate || false;
      if(!negate && !pattern.test(value)) Validate.fail(message); // normal
      if(negate && pattern.test(value)) Validate.fail(message); // negated
    	return true;
    },
    
    /**
     *	validates that the field contains a valid email address
     *	
     *	@var value {mixed} - value to be checked
     *	@var paramsObj {Object} - parameters for this particular validation, see below for details
     *
     *	paramsObj properties:
     *							failureMessage {String} - the message to show when the field fails validation
     *													  (DEFAULT: "Must be a number!" or "Must be an integer!")
     */
    Email: function(value, paramsObj){
    	var paramsObj = paramsObj || {};
    	var message = paramsObj.failureMessage || "Must be a valid email address!";
    	Validate.Format(value, { failureMessage: message, pattern: /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i } );
    	return true;
    },
    
    /**
     *	validates the length of the value
     *	
     *	@var value {mixed} - value to be checked
     *	@var paramsObj {Object} - parameters for this particular validation, see below for details
     *
     *	paramsObj properties:
     *							wrongLengthMessage {String} - the message to show when the fails when is param is used
     *													  	  (DEFAULT: "Must be {is} characters long!")
     *							tooShortMessage {String} 	- the message to show when the fails when minimum param is used
     *													  	  (DEFAULT: "Must not be less than {minimum} characters long!")
     *							tooLongMessage {String} 	- the message to show when the fails when maximum param is used
     *													  	  (DEFAULT: "Must not be more than {maximum} characters long!")
     *							is {Int} 					- the length must be this long 
     *							minimum {Int} 				- the minimum length allowed
     *							maximum {Int} 				- the maximum length allowed
     *
     *  NB. can be checked if it is within a range by specifying both a minimum and a maximum				
     */
    Length: function(value, paramsObj){
    	var value = String(value);
    	var paramsObj = paramsObj || {};
        var minimum = ((paramsObj.minimum) || (paramsObj.minimum == 0)) ? paramsObj.minimum : null;
    	var maximum = ((paramsObj.maximum) || (paramsObj.maximum == 0)) ? paramsObj.maximum : null;
    	var is = ((paramsObj.is) || (paramsObj.is == 0)) ? paramsObj.is : null;
        var wrongLengthMessage = paramsObj.wrongLengthMessage || "Must be " + is + " characters long!";
    	var tooShortMessage = paramsObj.tooShortMessage || "Must not be less than " + minimum + " characters long!";
    	var tooLongMessage = paramsObj.tooLongMessage || "Must not be more than " + maximum + " characters long!";
    	switch(true){
    	  	case (is !== null):
    	  		if( value.length != Number(is) ) Validate.fail(wrongLengthMessage);
    			break;
    	  	case (minimum !== null && maximum !== null):
    	  		Validate.Length(value, {tooShortMessage: tooShortMessage, minimum: minimum});
    	  		Validate.Length(value, {tooLongMessage: tooLongMessage, maximum: maximum});
    	  		break;
    	  	case (minimum !== null):
    	  		if( value.length < Number(minimum) ) Validate.fail(tooShortMessage);
    			break;
    	  	case (maximum !== null):
    	  		if( value.length > Number(maximum) ) Validate.fail(tooLongMessage);
    			break;
    		default:
    			throw new Error("Validate::Length - Length(s) to validate against must be provided!");
    	}
    	return true;
    },
    
    /**
     *	validates that the value falls within a given set of values
     *	
     *	@var value {mixed} - value to be checked
     *	@var paramsObj {Object} - parameters for this particular validation, see below for details
     *
     *	paramsObj properties:
     *							failureMessage {String} - the message to show when the field fails validation
     *													  (DEFAULT: "Must be included in the list!")
     *							within {Array} 			- an array of values that the value should fall in 
     *													  (DEFAULT: [])	
     *							allowNull {Bool} 		- if true, and a null value is passed in, validates as true
     *													  (DEFAULT: false)
     *             partialMatch {Bool} 	- if true, will not only validate against the whole value to check but also if it is a substring of the value 
     *													  (DEFAULT: false)
     *             caseSensitive {Bool} - if false will compare strings case insensitively
     *                          (DEFAULT: true)
     *             negate {Bool} 		- if true, will validate that the value is not within the given set of values
     *													  (DEFAULT: false)			
     */
    Inclusion: function(value, paramsObj){
    	var paramsObj = paramsObj || {};
    	var message = paramsObj.failureMessage || "Must be included in the list!";
      var caseSensitive = (paramsObj.caseSensitive === false) ? false : true;
    	if(paramsObj.allowNull && value == null) return true;
      if(!paramsObj.allowNull && value == null) Validate.fail(message);
    	var within = paramsObj.within || [];
      //if case insensitive, make all strings in the array lowercase, and the value too
      if(!caseSensitive){ 
        var lowerWithin = [];
        for(var j = 0, length = within.length; j < length; ++j){
        	var item = within[j];
          if(typeof item == 'string') item = item.toLowerCase();
          lowerWithin.push(item);
        }
        within = lowerWithin;
        if(typeof value == 'string') value = value.toLowerCase();
      }
    	var found = false;
    	for(var i = 0, length = within.length; i < length; ++i){
    	  if(within[i] == value) found = true;
        if(paramsObj.partialMatch){ 
          if(value.indexOf(within[i]) != -1) found = true;
        }
    	}
    	if( (!paramsObj.negate && !found) || (paramsObj.negate && found) ) Validate.fail(message);
    	return true;
    },
    
    /**
     *	validates that the value does not fall within a given set of values
     *	
     *	@var value {mixed} - value to be checked
     *	@var paramsObj {Object} - parameters for this particular validation, see below for details
     *
     *	paramsObj properties:
     *							failureMessage {String} - the message to show when the field fails validation
     *													  (DEFAULT: "Must not be included in the list!")
     *							within {Array} 			- an array of values that the value should not fall in 
     *													  (DEFAULT: [])
     *							allowNull {Bool} 		- if true, and a null value is passed in, validates as true
     *													  (DEFAULT: false)
     *             partialMatch {Bool} 	- if true, will not only validate against the whole value to check but also if it is a substring of the value 
     *													  (DEFAULT: false)
     *             caseSensitive {Bool} - if false will compare strings case insensitively
     *                          (DEFAULT: true)			
     */
    Exclusion: function(value, paramsObj){
      var paramsObj = paramsObj || {};
    	paramsObj.failureMessage = paramsObj.failureMessage || "Must not be included in the list!";
      paramsObj.negate = true;
    	Validate.Inclusion(value, paramsObj);
      return true;
    },
    
    /**
     *	validates that the value matches that in another field
     *	
     *	@var value {mixed} - value to be checked
     *	@var paramsObj {Object} - parameters for this particular validation, see below for details
     *
     *	paramsObj properties:
     *							failureMessage {String} - the message to show when the field fails validation
     *													  (DEFAULT: "Does not match!")
     *							match {String} 			- id of the field that this one should match						
     */
    Confirmation: function(value, paramsObj){
      	if(!paramsObj.match) throw new Error("Validate::Confirmation - Error validating confirmation: Id of element to match must be provided!");
    	var paramsObj = paramsObj || {};
    	var message = paramsObj.failureMessage || "Does not match!";
    	var match = paramsObj.match.nodeName ? paramsObj.match : document.getElementById(paramsObj.match);
    	if(!match) throw new Error("Validate::Confirmation - There is no reference with name of, or element with id of '" + paramsObj.match + "'!");
    	if(value != match.value){ 
    	  	Validate.fail(message);
    	}
    	return true;
    },
    
    /**
     *	validates that the value is true (for use primarily in detemining if a checkbox has been checked)
     *	
     *	@var value {mixed} - value to be checked if true or not (usually a boolean from the checked value of a checkbox)
     *	@var paramsObj {Object} - parameters for this particular validation, see below for details
     *
     *	paramsObj properties:
     *							failureMessage {String} - the message to show when the field fails validation 
     *													  (DEFAULT: "Must be accepted!")
     */
    Acceptance: function(value, paramsObj){
      	var paramsObj = paramsObj || {};
    	var message = paramsObj.failureMessage || "Must be accepted!";
    	if(!value){ 
    	  	Validate.fail(message);
    	}
    	return true;
    },
    
	 /**
     *	validates against a custom function that returns true or false (or throws a Validate.Error) when passed the value
     *	
     *	@var value {mixed} - value to be checked
     *	@var paramsObj {Object} - parameters for this particular validation, see below for details
     *
     *	paramsObj properties:
     *							failureMessage {String} - the message to show when the field fails validation
     *													  (DEFAULT: "Not valid!")
     *							against {Function} 			- a function that will take the value and object of arguments and return true or false 
     *													  (DEFAULT: function(){ return true; })
     *							args {Object} 		- an object of named arguments that will be passed to the custom function so are accessible through this object within it 
     *													  (DEFAULT: {})
     */
	Custom: function(value, paramsObj){
		var paramsObj = paramsObj || {};
		var against = paramsObj.against || function(){ return true; };
		var args = paramsObj.args || {};
		var message = paramsObj.failureMessage || "Not valid!";
	    if(!against(value, args)) Validate.fail(message);
	    return true;
	  },
	
    /**
     *	validates whatever it is you pass in, and handles the validation error for you so it gives a nice true or false reply
     *
     *	@var validationFunction {Function} - validation function to be used (ie Validation.validatePresence )
     *	@var value {mixed} - value to be checked if true or not (usually a boolean from the checked value of a checkbox)
     *	@var validationParamsObj {Object} - parameters for doing the validation, if wanted or necessary
     */
    now: function(validationFunction, value, validationParamsObj){
      	if(!validationFunction) throw new Error("Validate::now - Validation function must be provided!");
    	var isValid = true;
        try{    
    		validationFunction(value, validationParamsObj || {});
    	} catch(error) {
    		if(error instanceof Validate.Error){
    			isValid =  false;
    		}else{
    		 	throw error;
    		}
    	}finally{ 
            return isValid 
        }
    },
    
    /**
     * shortcut for failing throwing a validation error
     *
     *	@var errorMessage {String} - message to display
     */
    fail: function(errorMessage){
            throw new Validate.Error(errorMessage);
    },
    
    Error: function(errorMessage){
    	this.message = errorMessage;
    	this.name = 'ValidationError';
    }

}
;
(function() {



}).call(this);
(function() {



}).call(this);
(function() {



}).call(this);
(function() {



}).call(this);
(function() {



}).call(this);
(function() {



}).call(this);
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//











jQuery(function(){

//    alert("hello")
//    $("#lists").click(function(){
////        alert("hello")
//        $('#wait').html("plz wait")
//        var value=$("#lists").val()
//        alert(value)
//        $.get("/homes/get_campaigns",{"list":value
//
//        },function(){ $('#wait').html("")})
//    });
//    $(".close").on('click' , function(){
//        $(this).fadeOut;
////        alert(value)
//    });
    $(".close").on('click', function(){ $(this).parent().hide()});


});


      
