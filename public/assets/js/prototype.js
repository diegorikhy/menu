/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license

*/

(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);

// rodrigo denoww r_mend
// pros plugins antigos ñ darem error (jqgrid, fancybox...)
// plugins do jquery 1.7

// Limit scope pollution from any deprecated API
(function() {

    var matched, browser;

// Use of jQuery.browser is frowned upon.
// More details: http://api.jquery.com/jQuery.browser
// jQuery.uaMatch maintained for back-compat
    jQuery.uaMatch = function( ua ) {
        ua = ua.toLowerCase();

        var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
            /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
            /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
            /(msie) ([\w.]+)/.exec( ua ) ||
            ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
            [];

        return {
            browser: match[ 1 ] || "",
            version: match[ 2 ] || "0"
        };
    };

    matched = jQuery.uaMatch( navigator.userAgent );
    browser = {};

    if ( matched.browser ) {
        browser[ matched.browser ] = true;
        browser.version = matched.version;
    }

// Chrome is Webkit, but Webkit is also Safari.
    if ( browser.chrome ) {
        browser.webkit = true;
    } else if ( browser.webkit ) {
        browser.safari = true;
    }

    jQuery.browser = browser;

    jQuery.sub = function() {
        function jQuerySub( selector, context ) {
            return new jQuerySub.fn.init( selector, context );
        }
        jQuery.extend( true, jQuerySub, this );
        jQuerySub.superclass = this;
        jQuerySub.fn = jQuerySub.prototype = this();
        jQuerySub.fn.constructor = jQuerySub;
        jQuerySub.sub = this.sub;
        jQuerySub.fn.init = function init( selector, context ) {
            if ( context && context instanceof jQuery && !(context instanceof jQuerySub) ) {
                context = jQuerySub( context );
            }

            return jQuery.fn.init.call( this, selector, context, rootjQuerySub );
        };
        jQuerySub.fn.init.prototype = jQuerySub.fn;
        var rootjQuerySub = jQuerySub(document);
        return jQuerySub;
    };

})();
/* Copyright (c) 2010 Brandon Aaron (http://brandonaaron.net)
 * Dual licensed under the MIT (MIT_LICENSE.txt)
 * and GPL Version 2 (GPL_LICENSE.txt) licenses.
 *
 * Version: 1.1.1
 * Requires jQuery 1.3+
 * Docs: http://docs.jquery.com/Plugins/livequery
 */

(function(a){a.extend(a.fn,{livequery:function(e,d,c){var b=this,f;if(a.isFunction(e)){c=d,d=e,e=undefined}a.each(a.livequery.queries,function(g,h){if(b.selector==h.selector&&b.context==h.context&&e==h.type&&(!d||d.$lqguid==h.fn.$lqguid)&&(!c||c.$lqguid==h.fn2.$lqguid)){return(f=h)&&false}});f=f||new a.livequery(this.selector,this.context,e,d,c);f.stopped=false;f.run();return this},expire:function(e,d,c){var b=this;if(a.isFunction(e)){c=d,d=e,e=undefined}a.each(a.livequery.queries,function(f,g){if(b.selector==g.selector&&b.context==g.context&&(!e||e==g.type)&&(!d||d.$lqguid==g.fn.$lqguid)&&(!c||c.$lqguid==g.fn2.$lqguid)&&!this.stopped){a.livequery.stop(g.id)}});return this}});a.livequery=function(b,d,f,e,c){this.selector=b;this.context=d;this.type=f;this.fn=e;this.fn2=c;this.elements=[];this.stopped=false;this.id=a.livequery.queries.push(this)-1;e.$lqguid=e.$lqguid||a.livequery.guid++;if(c){c.$lqguid=c.$lqguid||a.livequery.guid++}return this};a.livequery.prototype={stop:function(){var b=this;if(this.type){this.elements.unbind(this.type,this.fn)}else{if(this.fn2){this.elements.each(function(c,d){b.fn2.apply(d)})}}this.elements=[];this.stopped=true},run:function(){if(this.stopped){return}var d=this;var e=this.elements,c=a(this.selector,this.context),b=c.not(e);this.elements=c;if(this.type){b.bind(this.type,this.fn);if(e.length>0){a.each(e,function(f,g){if(a.inArray(g,c)<0){a.event.remove(g,d.type,d.fn)}})}}else{b.each(function(){d.fn.apply(this)});if(this.fn2&&e.length>0){a.each(e,function(f,g){if(a.inArray(g,c)<0){d.fn2.apply(g)}})}}}};a.extend(a.livequery,{guid:0,queries:[],queue:[],running:false,timeout:null,checkQueue:function(){if(a.livequery.running&&a.livequery.queue.length){var b=a.livequery.queue.length;while(b--){a.livequery.queries[a.livequery.queue.shift()].run()}}},pause:function(){a.livequery.running=false},play:function(){a.livequery.running=true;a.livequery.run()},registerPlugin:function(){a.each(arguments,function(c,d){if(!a.fn[d]){return}var b=a.fn[d];a.fn[d]=function(){var e=b.apply(this,arguments);a.livequery.run();return e}})},run:function(b){if(b!=undefined){if(a.inArray(b,a.livequery.queue)<0){a.livequery.queue.push(b)}}else{a.each(a.livequery.queries,function(c){if(a.inArray(c,a.livequery.queue)<0){a.livequery.queue.push(c)}})}if(a.livequery.timeout){clearTimeout(a.livequery.timeout)}a.livequery.timeout=setTimeout(a.livequery.checkQueue,20)},stop:function(b){if(b!=undefined){a.livequery.queries[b].stop()}else{a.each(a.livequery.queries,function(c){a.livequery.queries[c].stop()})}}});a.livequery.registerPlugin("append","prepend","after","before","wrap","attr","removeAttr","addClass","removeClass","toggleClass","empty","remove","html");a(function(){a.livequery.play()})})(jQuery);
(function($) {

function getPasteEvent() {
    var el = document.createElement('input'),
        name = 'onpaste';
    el.setAttribute(name, '');
    return (typeof el[name] === 'function')?'paste':'input';
}

var pasteEventName = getPasteEvent() + ".mask",
  ua = navigator.userAgent,
  iPhone = /iphone/i.test(ua),
  chrome = /chrome/i.test(ua),
  android=/android/i.test(ua),
  caretTimeoutId;

$.mask = {
  //Predefined character definitions
  definitions: {
    '9': "[0-9]",
    'a': "[A-Za-z]",
    '*': "[A-Za-z0-9]"
  },
  autoclear: true,
  dataName: "rawMaskFn",
  placeholder: '_'
};

$.fn.extend({
  //Helper Function for Caret positioning
  caret: function(begin, end) {
    var range;

    if (this.length === 0 || this.is(":hidden")) {
      return;
    }

    if (typeof begin == 'number') {
      end = (typeof end === 'number') ? end : begin;
      return this.each(function() {
        if (this.setSelectionRange) {
          this.setSelectionRange(begin, end);
        } else if (this.createTextRange) {
          range = this.createTextRange();
          range.collapse(true);
          range.moveEnd('character', end);
          range.moveStart('character', begin);
          range.select();
        }
      });
    } else {
      if (this[0].setSelectionRange) {
        begin = this[0].selectionStart;
        end = this[0].selectionEnd;
      } else if (document.selection && document.selection.createRange) {
        range = document.selection.createRange();
        begin = 0 - range.duplicate().moveStart('character', -100000);
        end = begin + range.text.length;
      }
      return { begin: begin, end: end };
    }
  },
  unmask: function() {
    return this.trigger("unmask");
  },
  mask: function(mask, settings) {
    var input,
      defs,
      tests,
      partialPosition,
      firstNonMaskPos,
      len;

    if (!mask && this.length > 0) {
      input = $(this[0]);
      return input.data($.mask.dataName)();
    }
    settings = $.extend({
      autoclear: $.mask.autoclear,
      placeholder: $.mask.placeholder, // Load default placeholder
      completed: null
    }, settings);


    defs = $.mask.definitions;
    tests = [];
    partialPosition = len = mask.length;
    firstNonMaskPos = null;

    $.each(mask.split(""), function(i, c) {
      if (c == '?') {
        len--;
        partialPosition = i;
      } else if (defs[c]) {
        tests.push(new RegExp(defs[c]));
        if (firstNonMaskPos === null) {
          firstNonMaskPos = tests.length - 1;
        }
      } else {
        tests.push(null);
      }
    });

    return this.trigger("unmask").each(function() {
      var input = $(this),
        buffer = $.map(
        mask.split(""),
        function(c, i) {
          if (c != '?') {
            return defs[c] ? settings.placeholder : c;
          }
        }),
        defaultBuffer = buffer.join(''),
        focusText = input.val();

      function seekNext(pos) {
        while (++pos < len && !tests[pos]);
        return pos;
      }

      function seekPrev(pos) {
        while (--pos >= 0 && !tests[pos]);
        return pos;
      }

      function shiftL(begin,end) {
        var i,
          j;

        if (begin<0) {
          return;
        }

        for (i = begin, j = seekNext(end); i < len; i++) {
          if (tests[i]) {
            if (j < len && tests[i].test(buffer[j])) {
              buffer[i] = buffer[j];
              buffer[j] = settings.placeholder;
            } else {
              break;
            }

            j = seekNext(j);
          }
        }
        writeBuffer();
        input.caret(Math.max(firstNonMaskPos, begin));
      }

      function shiftR(pos) {
        var i,
          c,
          j,
          t;

        for (i = pos, c = settings.placeholder; i < len; i++) {
          if (tests[i]) {
            j = seekNext(i);
            t = buffer[i];
            buffer[i] = c;
            if (j < len && tests[j].test(t)) {
              c = t;
            } else {
              break;
            }
          }
        }
      }

      function blurEvent(e) {
          checkVal();

          if (input.val() != focusText)
            input.change();
      }

      function keydownEvent(e) {
        var k = e.which,
          pos,
          begin,
          end;

        //backspace, delete, and escape get special treatment
        if (k === 8 || k === 46 || (iPhone && k === 127)) {
          pos = input.caret();
          begin = pos.begin;
          end = pos.end;

          if (end - begin === 0) {
            begin=k!==46?seekPrev(begin):(end=seekNext(begin-1));
            end=k===46?seekNext(end):end;
          }
          clearBuffer(begin, end);
          shiftL(begin, end - 1);

          e.preventDefault();
        } else if( k === 13 ) { // enter
          blurEvent.call(this, e);
        } else if (k === 27) { // escape
          input.val(focusText);
          input.caret(0, checkVal());
          e.preventDefault();
        }
      }

      function keypressEvent(e) {
        var k = e.which,
          pos = input.caret(),
          p,
          c,
          next;

                    if (k == 0) {
                        // unable to detect key pressed. Grab it from pos and adjust
                        // this is a failsafe for mobile chrome
                        // which can't detect keypress events
                        // reliably
                        if (pos.begin >= len) {
                            input.val(input.val().substr(0, len));
                            e.preventDefault();
                            return false;
                        }
                        if (pos.begin == pos.end) {
                            k = input.val().charCodeAt(pos.begin - 1);
                            pos.begin--;
                            pos.end--;
                        }
                    }

        if (e.ctrlKey || e.altKey || e.metaKey || k < 32) {//Ignore
          return;
        } else if ( k && k !== 13 ) {
          if (pos.end - pos.begin !== 0){
            clearBuffer(pos.begin, pos.end);
            shiftL(pos.begin, pos.end-1);
          }

          p = seekNext(pos.begin - 1);
          if (p < len) {
            c = String.fromCharCode(k);
            if (tests[p].test(c)) {
              shiftR(p);

              buffer[p] = c;
              writeBuffer();
              next = seekNext(p);

              if(android){
                //Path for CSP Violation on FireFox OS 1.1
                var proxy = function() {
                  $.proxy($.fn.caret,input,next)();
                };

                setTimeout(proxy,0);
              }else{
                input.caret(next);
              }

              if (settings.completed && next >= len) {
                settings.completed.call(input);
              }
            }
          }
          e.preventDefault();
        }
      }

      function clearBuffer(start, end) {
        var i;
        for (i = start; i < end && i < len; i++) {
          if (tests[i]) {
            buffer[i] = settings.placeholder;
          }
        }
      }

      function writeBuffer() { input.val(buffer.join('')); }

      function checkVal(allow) {
        //try to place characters where they belong
        var test = input.val(),
          lastMatch = -1,
          i,
          c,
          pos;

        for (i = 0, pos = 0; i < len; i++) {
          if (tests[i]) {
            buffer[i] = settings.placeholder;
            while (pos++ < test.length) {
              c = test.charAt(pos - 1);
              if (tests[i].test(c)) {
                buffer[i] = c;
                lastMatch = i;
                break;
              }
            }
            if (pos > test.length) {
              break;
            }
          } else if (buffer[i] === test.charAt(pos) && i !== partialPosition) {
            pos++;
            lastMatch = i;
          }
        }
        if (allow) {
          writeBuffer();
        } else if (lastMatch + 1 < partialPosition) {
          if (settings.autoclear || buffer.join('') === defaultBuffer) {
            // Invalid value. Remove it and replace it with the
            // mask, which is the default behavior.
            if(input.val()) input.val("");
            clearBuffer(0, len);
          } else {
            // Invalid value, but we opt to show the value to the
            // user and allow them to correct their mistake.
            writeBuffer();
          }
        } else {
          writeBuffer();
          input.val(input.val().substring(0, lastMatch + 1));
        }
        return (partialPosition ? i : firstNonMaskPos);
      }

      input.data($.mask.dataName,function(){
        return $.map(buffer, function(c, i) {
          return tests[i]&&c!=settings.placeholder ? c : null;
        }).join('');
      });

      if (!input.attr("readonly"))
        input
        .one("unmask", function() {
          input
            .off(".mask")
            .removeData($.mask.dataName);
        })
        .on("focus.mask", function() {
          clearTimeout(caretTimeoutId);
          var pos;

          focusText = input.val();

          pos = checkVal();

          caretTimeoutId = setTimeout(function(){
            writeBuffer();
            if (pos == mask.replace("?","").length) {
              input.caret(0, pos);
            } else {
              input.caret(pos);
            }
          }, 10);
        })
        .on("blur.mask", blurEvent)
        .on("keydown.mask", keydownEvent)
        .on("keypress.mask", keypressEvent)
        .on(pasteEventName, function() {
          setTimeout(function() {
            var pos=checkVal(true);
            input.caret(pos);
            if (settings.completed && pos == input.val().length)
              settings.completed.call(input);
          }, 0);
        });
                if (chrome && android) {
                    input.on("keyup.mask", keypressEvent);
                }
        checkVal(); //Perform initial check for existing values
    });
  }
});
})(jQuery);
$(document).ready(function () {

  if (!Modernizr.inputtypes.date) {
    $('input[type="date"]').livequery(function() {
        $(this).addClass('data')
    });
  }

  if (!Modernizr.inputtypes.time) {
    $('input[type="time"]').livequery(function() {
        $(this).addClass('hora')
    });
  }

  $('input[type="text"].data, .data_passado_futuro, .data-nascimento, .data_nascimento, input.nascimento').livequery(function() {
      $(this).mask("99/99/9999");
  });
  $('.hora').livequery(function() {
    $(this).mask("99:99");
  });
  $('.data_hora').livequery(function() {
    $(this).mask("99/99/9999 99:99");
  });
  $('.mes_ano').livequery(function() {
    $(this).mask("99/9999");
  });

  $('.placa_veiculo').livequery(function() {
    $(this).mask("aaa-9999");
  });
  $('.cnpj').livequery(function() {
      $(this).mask("99.999.999/9999-99");
  });
  $('.cpf').livequery(function() {
      $(this).mask("999.999.999-99");
  });
  $('.cep_auto_complete, .cep').livequery(function() {
    var cepInput = $(this);
    cepInput.mask("99999-999",
      {
        completed:function(){
          if(preencherEndereco){
            preencherEndereco(cepInput,cepInput.val());
          }
        }
      }
    );
  });
});





























///////////////////////////////////////////////////////////////
// Injetando timezone na 'mão' (No erp o backend montaria)
///////////////////////////////////////////////////////////////

$("body").attr("data-utc-time-now", new Date().toISOString())
$("body").attr("data-offset-from-utc", "-10800") // -3 horas - America/Sao_Paulo
;
/*
* maskMoney plugin for jQuery
* http://plentz.github.com/jquery-maskmoney/
* version: 2.1.2
* Licensed under the MIT license
*/

(function(e){if(!e.browser){e.browser={};e.browser.mozilla=/mozilla/.test(navigator.userAgent.toLowerCase())&&!/webkit/.test(navigator.userAgent.toLowerCase());e.browser.webkit=/webkit/.test(navigator.userAgent.toLowerCase());e.browser.opera=/opera/.test(navigator.userAgent.toLowerCase());e.browser.msie=/msie/.test(navigator.userAgent.toLowerCase())}var t={destroy:function(){var t=e(this);t.unbind(".maskMoney");if(e.browser.msie){this.onpaste=null}return this},mask:function(){return this.trigger("mask")},init:function(t){t=e.extend({symbol:"",symbolStay:false,thousands:",",decimal:".",precision:2,defaultZero:true,allowZero:false,allowNegative:false},t);return this.each(function(){function i(){r=true}function s(){r=false}function o(t){t=t||window.event;var o=t.which||t.charCode||t.keyCode;if(o==undefined)return false;if(o<48||o>57){if(o==45){i();n.val(g(n));return false}else if(o==43){i();n.val(n.val().replace("-",""));return false}else if(o==13||o==9){if(r){s();e(this).change()}return true}else if(e.browser.mozilla&&(o==37||o==39)&&t.charCode==0){return true}else{c(t);return true}}else if(u(n)){return false}else{c(t);var a=String.fromCharCode(o);var f=n.get(0);var l=b(f);var p=l.start;var d=l.end;f.value=f.value.substring(0,p)+a+f.value.substring(d,f.value.length);h(f,p+1);i();return false}}function u(e){var t=e.val().length>=e.attr("maxlength")&&e.attr("maxlength")>=0;var n=b(e.get(0));var r=n.start;var i=n.end;var s=n.start!=n.end&&e.val().substring(r,i).match(/\d/)?true:false;return t&&!s}function a(t){t=t||window.event;var o=t.which||t.charCode||t.keyCode;if(o==undefined)return false;var u=n.get(0);var a=b(u);var f=a.start;var l=a.end;if(o==8){c(t);if(f==l){u.value=u.value.substring(0,f-1)+u.value.substring(l,u.value.length);f=f-1}else{u.value=u.value.substring(0,f)+u.value.substring(l,u.value.length)}h(u,f);i();return false}else if(o==9){if(r){e(this).change();s()}return true}else if(o==46||o==63272){c(t);if(u.selectionStart==u.selectionEnd){u.value=u.value.substring(0,f)+u.value.substring(l+1,u.value.length)}else{u.value=u.value.substring(0,f)+u.value.substring(l,u.value.length)}h(u,f);i();return false}else{return true}}function f(e){var r=v();if(n.val()==r){n.val("")}else if(n.val()==""&&t.defaultZero){n.val(m(r))}else{n.val(m(n.val()))}if(this.createTextRange){var i=this.createTextRange();i.collapse(false);i.select()}}function l(r){if(e.browser.msie){o(r)}if(n.val()==""||n.val()==m(v())||n.val()==t.symbol){if(!t.allowZero){n.val("")}else if(!t.symbolStay){n.val(v())}else{n.val(m(v()))}}else{if(!t.symbolStay){n.val(n.val().replace(t.symbol,""))}else if(t.symbolStay&&n.val()==t.symbol){n.val(m(v()))}}}function c(e){if(e.preventDefault){e.preventDefault()}else{e.returnValue=false}}function h(e,t){var r=n.val().length;n.val(d(e.value));var i=n.val().length;t=t-(r-i);y(n,t)}function p(){var e=n.val();n.val(d(e))}function d(e){e=e.replace(t.symbol,"");var n="0123456789";var r=e.length;var i="",s="",o="";if(r!=0&&e.charAt(0)=="-"){e=e.replace("-","");if(t.allowNegative){o="-"}}if(r==0){if(!t.defaultZero)return s;s="0.00"}for(var u=0;u<r;u++){if(e.charAt(u)!="0"&&e.charAt(u)!=t.decimal)break}for(;u<r;u++){if(n.indexOf(e.charAt(u))!=-1)i+=e.charAt(u)}var a=parseFloat(i);a=isNaN(a)?0:a/Math.pow(10,t.precision);s=a.toFixed(t.precision);u=t.precision==0?0:1;var f,l=(s=s.split("."))[u].substr(0,t.precision);for(f=(s=s[0]).length;(f-=3)>=1;){s=s.substr(0,f)+t.thousands+s.substr(f)}return t.precision>0?m(o+s+t.decimal+l+Array(t.precision+1-l.length).join(0)):m(o+s)}function v(){var e=parseFloat("0")/Math.pow(10,t.precision);return e.toFixed(t.precision).replace(new RegExp("\\.","g"),t.decimal)}function m(e){if(t.symbol!=""){var n="";if(e.length!=0&&e.charAt(0)=="-"){e=e.replace("-","");n="-"}if(e.substr(0,t.symbol.length)!=t.symbol){e=n+t.symbol+e}}return e}function g(e){var n=e.val();if(t.allowNegative){if(n!=""&&n.charAt(0)=="-"){return n.replace("-","")}else{return"-"+n}}else{return n}}function y(t,n){e(t).each(function(e,t){if(t.setSelectionRange){t.focus();t.setSelectionRange(n,n)}else if(t.createTextRange){var r=t.createTextRange();r.collapse(true);r.moveEnd("character",n);r.moveStart("character",n);r.select()}});return this}function b(e){var t=0,n=0,r,i,s,o,u;if(typeof e.selectionStart=="number"&&typeof e.selectionEnd=="number"){t=e.selectionStart;n=e.selectionEnd}else{i=document.selection.createRange();if(i&&i.parentElement()==e){o=e.value.length;r=e.value.replace(/\r\n/g,"\n");s=e.createTextRange();s.moveToBookmark(i.getBookmark());u=e.createTextRange();u.collapse(false);if(s.compareEndPoints("StartToEnd",u)>-1){t=n=o}else{t=-s.moveStart("character",-o);t+=r.slice(0,t).split("\n").length-1;if(s.compareEndPoints("EndToEnd",u)>-1){n=o}else{n=-s.moveEnd("character",-o);n+=r.slice(0,n).split("\n").length-1}}}}return{start:t,end:n}}var n=e(this);var r=false;if(!n.attr("readonly")){n.unbind(".maskMoney");n.bind("keypress.maskMoney",o);n.bind("keydown.maskMoney",a);n.bind("blur.maskMoney",l);n.bind("focus.maskMoney",f);n.bind("mask.maskMoney",p)}})}};e.fn.maskMoney=function(n){if(t[n]){return t[n].apply(this,Array.prototype.slice.call(arguments,1))}else if(typeof n==="object"||!n){return t.init.apply(this,arguments)}else{e.error("Method "+n+" does not exist on jQuery.maskMoney")}}})(window.jQuery||window.Zepto)


/*
Rodrigo Mendonça
*/
this.dinheiro_bd = function(dinheiro_string) {
  var ax, exp_reg;
  if (dinheiro_string) {
    ax = dinheiro_string;
    if (typeof dinheiro_string === "string" || typeof dinheiro_string === "object") {
      exp_reg = /,/;
      if (exp_reg.test(ax)) {
        ax = ax.replace(/\./g, "").replace(",", ".");
      }
      ax = parseFloat(ax.replace("R$", ""));
    }
    return ax;
  } else {
    return dinheiro_string;
  }
};
this.dinheiro = function(num, options) {
  var cents, i, opt, ret, x;
  num = dinheiro_bd(num);
  opt = {
    se_zero_retorna_vazio: false,
    unidade: "R$ ",
    prefixo: true
  };
  if (options) {
    $.extend(opt, options);
  }
  x = 0;
  if (num < 0) {
    num = Math.abs(num);
    x = 1;
  }
  if (isNaN(num)) {
    num = "0";
  }
  cents = Math.floor((num * 100 + 0.5) % 100);
  num = Math.floor((num * 100 + 0.5) / 100).toString();
  if (cents < 10) {
    cents = "0" + cents;
  }
  i = 0;
  while (i < Math.floor((num.length - (1 + i)) / 3)) {
    num = num.substring(0, num.length - (4 * i + 3)) + "." + num.substring(num.length - (4 * i + 3));
    i++;
  }
  ret = num + "," + cents;
  if (x === 1) {
    ret = " - " + ret;
  }
  if (opt.se_zero_retorna_vazio && ret === "0,00") {
    ret = "";
  } else {
    if (opt.prefixo) {
      ret = opt.unidade + "" + ret;
    }
  }
  return ret;
};
;(function($) {


  $.fn.toInputMoneyPtBr = function (options) {
    var opt = {
      symbol: 'R$ ',
      allowNegative: false,
      clearValueOnBlurIfZero: false,
      thousands: '.', // separador de mil, milhares, bilhares...
      decimal: ',' // separador de decimais
    };
    if (options) {
      $.extend(opt, options);
    }
    var input = $(this);
    input.maskMoney({
      thousands: opt.thousands,
      decimal: opt.decimal,
      symbol: opt.symbol,
      allowNegative: opt.allowNegative,
      allowZero: !opt.clearValueOnBlurIfZero,
      symbolStay: true
    });
    input.attr('maxLength','17');
    return input;
  }
})($)
;
(function() {
  var e, getMousePositionFromClickedContainer;

  this.trace = function(msg) {
    return window.console && console.log(msg);
  };

  this.compactFullArray = function(e) {
    var a, value;
    a = 0;
    while (a < e.length) {
      value = e[a];
      if (value === "" || value === null || value === undefined) {
        e.splice(a, 1);
        a--;
      }
      a++;
    }
    return e;
  };

  this.idUnico = function(options) {
    var codigo, opt;
    opt = {
      prefixo: "item_"
    };
    if (options) {
      $.extend(opt, options);
    }
    codigo = opt.prefixo + Math.random() * Math.pow(10, 17) + Math.random() * Math.pow(10, 17) + Math.random() * Math.pow(10, 17) + Math.random() * Math.pow(10, 17);
    return codigo.replace(/\./g, "");
  };

  this.guid = (function() {
    var s4;
    s4 = function() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    };
    return function() {
      return [s4() + s4(), s4(), s4(), s4(), s4() + s4() + s4()].join('-');
    };
  })();

  this.currentDominioEPortaServerSocket = function() {
    return $("body").data("dominio-e-porta-server-socket");
  };

  this.currentEnviroment = function() {
    return $("body").data("enviroment");
  };

  this.redirect = {
    login: function() {
      return redirect.url("/logar?save_current_url=" + document.URL);
    },
    accessDenied: function() {
      return redirect.url("/access_denied?save_current_url=" + document.URL);
    },
    url: function(url) {
      $(".carregando-universal").show();
      window.location = url;
      return null;
    }
  };

  this.redirectTo = function(url) {
    return redirect.url(url);
  };

  this.refresh = function() {
    return redirectTo(window.location.href);
  };

  this.bool = function(str) {
    if (str === "false" || str === 0 || str === false || (str == null)) {
      return false;
    } else {
      return true;
    }
  };

  this.bool_null = function(str) {
    if ((str == null) || str === "") {
      return null;
    }
    if (str === "false" || str === 0 || str === false) {
      return false;
    } else {
      if (str === "true" || str === 1 || str === true || str !== "") {
        return true;
      }
    }
  };

  this.ucfirst = function(str) {
    var f;
    str += "";
    f = str.charAt(0).toUpperCase();
    return f + str.substr(1);
  };

  this.ano_bissexto = function(ano) {
    if (ano % 4 === 0 && (ano % 400 === 0 || ano % 100 !== 0)) {
      return true;
    } else {
      return false;
    }
  };

  this.diferencaEntreDatas = function(data_menor, data_maior, interval) {
    var ax, date1, date2, day, hour, minute, month, second, timediff, week, year;
    second = 1000;
    minute = second * 60;
    hour = minute * 60;
    day = hour * 24;
    week = day * 7;
    month = day * 30;
    year = month * 12;
    date1 = scTimezone["new"](inverter_dia_mes_data(data_menor));
    date2 = scTimezone["new"](inverter_dia_mes_data(data_maior));
    timediff = date2 - date1;
    if (isNaN(timediff)) {
      return NaN;
    }
    ax = 0;
    switch (interval) {
      case "years":
        ax = date2.getFullYear() - date1.getFullYear();
        break;
      case "months":
        ax = (date2.getFullYear() * 12 + date2.getMonth()) - (date1.getFullYear() * 12 + date1.getMonth());
        break;
      case "years":
        ax = Math.floor(timediff / year);
        break;
      case "months":
        ax = Math.floor(timediff / month);
        break;
      case "weeks":
        ax = Math.floor(timediff / week);
        break;
      case "days":
        ax = Math.floor(timediff / day);
        break;
      case "hours":
        ax = Math.floor(timediff / hour);
        break;
      case "minutes":
        ax = Math.floor(timediff / minute);
        break;
      case "seconds":
        ax = Math.floor(timediff / second);
        break;
      default:
        ax = 'falta um desses argumentos dessa funcao diferencaEntreDatas(data_menor, data_maior, interval)';
    }
    return ax * -1;
  };

  this.multiplicar = function(x1, x2) {
    x1 = dinheiro_bd(x1);
    x2 = dinheiro_bd(x2);
    return parseFloat((x1 * x2).toFixed(2), 10);
  };

  this.dividir = function(x1, x2) {
    x1 = dinheiro_bd(x1);
    x2 = dinheiro_bd(x2);
    return parseFloat((x1 / x2).toFixed(2), 10);
  };

  this.somar = function(x1, x2) {
    x1 = dinheiro_bd(x1);
    x2 = dinheiro_bd(x2);
    return parseFloat((x1 + x2).toFixed(2), 10);
  };

  this.subtrair = function(x1, x2) {
    x1 = dinheiro_bd(x1);
    x2 = dinheiro_bd(x2);
    return parseFloat((x1 - x2).toFixed(2), 10);
  };

  this.in_array = function(needle, haystack, argStrict) {
    var key, strict;
    key = "";
    strict = !!argStrict;
    if (strict) {
      for (key in haystack) {
        if (haystack[key] === needle) {
          return true;
        }
      }
    } else {
      for (key in haystack) {
        if (haystack[key] === needle) {
          return true;
        }
      }
    }
    return false;
  };

  this.pad = function(n, totalDigits) {
    var i, pd;
    n = n.toString();
    pd = "";
    if (totalDigits > n.length) {
      i = 0;
      while (i < (totalDigits - n.length)) {
        pd += "0";
        i++;
      }
    }
    return pd + n.toString();
  };

  this.createAccentRegexp = function(characters) {
    var accentReplacer, cleanString, regexp, _deaccentedString;
    _deaccentedString = _deaccent(characters);
    cleanString = _deaccentedString.replace(/([|()[{.+*?^$\\])/g, "\\$1");
    accentReplacer = function(character) {
      return charToAccentedCharClassMap[character] || character;
    };
    regexp = cleanString.replace(/\S/g, accentReplacer);
    return new RegExp(regexp, "g");
  };

  this._deaccent = function(accentedString) {
    var key, result;
    result = accentedString;
    for (key in charToAccentedCharClassMap) {
      result = result.replace(new RegExp(charToAccentedCharClassMap[key], "g"), key);
    }
    return result;
  };

  this.MESES = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

  this.viewport = {
    _width: function() {
      return $(window).width();
    },
    _height: function() {
      return $(window).height();
    }
  };

  this.isTouchable = function() {
    if ("ontouchstart" in document.documentElement) {
      return true;
    } else {
      return false;
    }
  };

  this.myBrowser = {
    webkit: function() {
      return $.browser.webkit || false;
    },
    chrome: function() {
      return $.browser.chrome || false;
    },
    mozilla: function() {
      return $.browser.mozilla || false;
    },
    ie7: function() {
      if ($.browser.msie && (parseInt($.browser.version, 10) === 7)) {
        return true;
      } else {
        return false;
      }
    },
    ie8: function() {
      if ($.browser.msie && (parseInt($.browser.version, 10) === 8)) {
        return true;
      } else {
        return false;
      }
    },
    ie9: function() {
      if ($.browser.msie && (parseInt($.browser.version, 10) === 9)) {
        return true;
      } else {
        return false;
      }
    },
    ie10: function() {
      if ($.browser.msie && (parseInt($.browser.version, 10) === 10)) {
        return true;
      } else {
        return false;
      }
    },
    ie11: function() {
      var net, trident;
      trident = !!navigator.userAgent.match(/Trident\/7.0/);
      net = !!navigator.userAgent.match(/.NET4.0E/);
      return trident && net;
    },
    ie: function() {
      return myBrowser.ie7() || myBrowser.ie8() || myBrowser.ie9() || myBrowser.ie10() || myBrowser.ie11();
    },
    iPod: function() {
      if (navigator.userAgent.match(/iPod/i)) {
        return true;
      } else {
        return false;
      }
    }
  };

  this.isMobile = {
    Android: function() {
      if (navigator.userAgent.match(/Android/i)) {
        return true;
      } else {
        return false;
      }
    },
    BlackBerry: function() {
      if (navigator.userAgent.match(/BlackBerry/i)) {
        return true;
      } else {
        return false;
      }
    },
    iOS: function() {
      if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
        return true;
      } else {
        return false;
      }
    },
    iPad: function() {
      if (navigator.userAgent.match(/iPad/i)) {
        return true;
      } else {
        return false;
      }
    },
    iPhone: function() {
      if (navigator.userAgent.match(/iPhone/i)) {
        return true;
      } else {
        return false;
      }
    },
    iPod: function() {
      if (navigator.userAgent.match(/iPod/i)) {
        return true;
      } else {
        return false;
      }
    },
    Windows: function() {
      if (navigator.userAgent.match(/IEMobile/i)) {
        return true;
      } else {
        return false;
      }
    },
    any: function() {
      return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows();
    }
  };

  this.String.prototype.presence = function() {
    var str;
    str = this.trim();
    if (str === "") {
      return null;
    } else {
      return str;
    }
  };

  this.String.prototype.truncate = function(limit) {
    var str;
    str = this.replace("", "");
    if (str.length < limit) {
      return str;
    } else {
      return str.substring(0, limit - 3) + "...";
    }
  };

  this.String.prototype.dinheiroBd = function() {
    return dinheiro_bd(this);
  };

  this.String.prototype.capitalize = function(eachWord) {
    var mapFn;
    if (eachWord == null) {
      eachWord = false;
    }
    if (eachWord) {
      mapFn = function(e) {
        return e.capitalize();
      };
      return this.split(" ").map(mapFn).join(" ");
    } else {
      return this.charAt(0).toUpperCase() + this.slice(1);
    }
  };

  this.String.prototype.toCamel = function() {
    return this.replace(/(\-[a-z])/g, function($1) {
      return $1.toUpperCase().replace("-", "");
    });
  };

  this.String.prototype.toUnderscore = function() {
    return this.replace(/([A-Z])/g, function($1) {
      return "_" + $1.toLowerCase();
    }).replace(/^_/g, "");
  };

  this.String.prototype.toJson = function() {
    return JSON.parse(this);
  };

  this.String.prototype.isValidHourMinute = function() {
    var isValid, string;
    string = this.trim();
    isValid = /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])(:[0-5][0-9])?$/.test(string);
    return isValid;
  };

  this.String.prototype.isValidDate = function() {
    var bits, d, s;
    s = this.trim();
    bits = s.split("-");
    d = scTimezone["new"](bits[0], bits[1] - 1, bits[2]);
    return d && (d.getMonth() + 1) === Number(bits[1]) && d.getDate() === Number(bits[2]);
  };

  this.String.prototype.isValidDatePtBr = function() {
    var bits, d, s;
    s = this.trim();
    bits = s.split("/");
    d = scTimezone["new"](bits[2], bits[1] - 1, bits[0]);
    return d && (d.getMonth() + 1) === Number(bits[1]) && d.getDate() === Number(bits[0]);
  };

  this.String.prototype.isValidEmail = function() {
    var email, reg;
    reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z0-9]+)$/i;
    email = this.trim();
    if (reg.test(email) === false) {
      return false;
    } else {
      return true;
    }
  };

  this.String.prototype.toI = function() {
    return this.to_i();
  };

  this.String.prototype.to_i = function() {
    return parseInt(this.replace(",", "."), 10);
  };

  this.String.prototype.toNumber = function() {
    return parseFloat(this.replace(",", "."), 10);
  };

  this.String.prototype.to_boolean = function() {
    var text;
    text = this.trim();
    if (text === "true" || text === "1") {
      return true;
    } else {
      if (text === "false" || text === "0") {
        return false;
      }
    }
  };

  this.String.prototype.toBoolean = function() {
    return this.to_boolean();
  };

  this.String.prototype.empty = function() {
    var a;
    if (this.trim() === "") {
      a = true;
    } else {
      a = false;
    }
    return a;
  };

  this.String.prototype.trim = function() {
    return this.replace(/^\s*/, "").replace(/\s*$/, "");
  };

  this.String.prototype.onlyDate = function() {
    return this.split(" ")[0];
  };

  this.String.prototype.toDateBdString = function() {
    var ano, dia, mes, partes_data;
    partes_data = this.substring(0, 10).split("/");
    dia = partes_data[0];
    mes = partes_data[1];
    ano = partes_data[2];
    return "" + ano + "-" + mes + "-" + dia;
  };

  this.String.prototype.toDatePt = function() {
    var ano, dia, mes, myDate, partes_data;
    partes_data = this.substring(0, 10).split("-");
    dia = partes_data[2];
    mes = partes_data[1];
    ano = partes_data[0];
    if (typeof scTimezone !== "undefined" && scTimezone !== null) {
      myDate = scTimezone["new"](ano, mes - 1, dia);
    } else {
      myDate = new Date(ano, mes - 1, dia);
    }
    return dateToPt(myDate);
  };

  this.String.prototype.addQueryString = function(queryString) {
    var url;
    url = this;
    if (url.match(/\?/)) {
      url += "&" + queryString;
    } else {
      url += "?" + queryString;
    }
    return url;
  };

  this.String.prototype.getUrlParam = function(paramName) {
    var results;
    results = new RegExp('[\?&]' + paramName + '=([^&#]*)').exec(this);
    if (results === null) {
      return null;
    } else {
      return results[1] || 0;
    }
  };

  this.String.prototype.removeQueryString = function() {
    var url_atual;
    url_atual = this;
    if (url_atual.match(/\?/)) {
      url_atual = url_atual.split("?")[0];
      if (!url_atual.match(/\/$/)) {
        url_atual = url_atual + "/";
      }
    }
    return url_atual;
  };

  this.String.prototype.replaceQueryString = function(chave, value) {
    var re, url;
    url = this.trim();
    re = new RegExp("([?|&])" + chave + "=.*?(&|$)", "i");
    if (url.match(re)) {
      return url.replace(re, "$1" + chave + "=" + value + "$2");
    } else {
      return url;
    }
  };

  this.String.prototype.extractHourMinutesFromDateTime = function() {
    var input, matches, regex;
    regex = /[0-9]{2}(\:)[0-9]{2}/g;
    input = this;
    if (regex.test(input)) {
      matches = input.match(regex);
      return matches[0];
    }
  };

  this.hasText = function(fullText, searchString) {
    var content, found, pattern;
    pattern = "";
    found = void 0;
    content = $(this);
    pattern = createAccentRegexp(searchString);
    found = fullText.search(pattern) >= 0;
    if (found) {
      return true;
    } else {
      return false;
    }
  };

  this.String.prototype.hasText = function(searchString) {
    var fullText;
    fullText = this.trim();
    return hasText(fullText, searchString);
  };

  this.String.prototype.toDateTimePt = function() {
    var ano, dia, h, hora, horas_minutos, m, mes, minutos, myDate, partes_data, partes_horas, resultado, tem_hora;
    if (this !== "") {
      partes_data = this.split("-");
      dia = partes_data[2].substring(0, 2).to_i();
      mes = partes_data[1].to_i();
      ano = partes_data[0].to_i();
      horas_minutos = this.extractHourMinutesFromDateTime();
      partes_horas = horas_minutos.split(":");
      h = partes_horas[0].to_i();
      m = partes_horas[1].to_i();
      myDate = scTimezone["new"](ano, mes - 1, dia, h, m);
      tem_hora = false;
      if (this.match(":")) {
        tem_hora = true;
      }
      hora = myDate.getHours();
      minutos = myDate.getMinutes();
      resultado = this.toDatePt();
      if (tem_hora === true) {
        resultado += " às " + pad(hora, 2) + ":" + pad(minutos, 2);
      }
    } else {
      resultado = "";
    }
    return resultado;
  };

  this.Date.prototype.toDatePt = function() {
    return dateToPt(this);
  };

  this.Date.prototype.toDateTimePt = function() {
    var hora, minutos, resultado;
    hora = this.getHours();
    minutos = this.getMinutes();
    resultado = this.toDatePt();
    return resultado += " às " + pad(hora, 2) + ":" + pad(minutos, 2);
  };

  this.dateToPt = function(myDate) {
    var ano, dia, mes;
    dia = myDate.getDate();
    mes = myDate.getMonth() + 1;
    ano = myDate.getFullYear();
    return pad(dia, 2) + "/" + pad(mes, 2) + "/" + ano;
  };

  this.data_to_mes_ano = function(data) {
    var ano, exploded, mes, mes_extenso;
    exploded = data.split("/");
    mes = exploded[1];
    ano = exploded[2];
    mes_extenso = numero_to_mes_extenso(mes);
    return mes_extenso + "/" + ano;
  };

  this.mes_to_numero = function(mes_extenso) {
    var i;
    mes_extenso = mes_extenso.capitalize();
    i = 0;
    while (i < MESES.length) {
      if (MESES[i] === mes_extenso) {
        return pad(i + 1, 2);
      }
      i++;
    }
    return false;
  };

  this.numero_to_mes_extenso = function(numero) {
    if (typeof numero === "string") {
      numero = numero.to_i();
    }
    return MESES[numero - 1];
  };

  this.hoje = function() {
    return scTimezone.now.format('DD/MM/YYYY');
  };

  this.dias = function(dias) {
    if (dias > 1) {
      return dias + " dias";
    } else {
      return dias + " dia";
    }
  };

  this.meses = function(meses) {
    if (dias > 1) {
      return meses + " meses";
    } else {
      return meses + " mês";
    }
  };

  this.inverter_dia_mes_data = function(data) {
    var exploded;
    exploded = data.split("/");
    return exploded[1] + "/" + exploded[0] + "/" + exploded[2];
  };

  this.incrementar_mes = function(data) {
    var ano, d, dia, mes, nova_data;
    if (data !== "" && data !== undefined) {
      d = data.split("/");
      dia = d[0].to_i();
      mes = d[1].to_i();
      ano = d[2].to_i();
      mes = mes + 1;
      if (mes > 12) {
        mes = 1;
        ano = ano + 1;
      }
      nova_data = arrumar_data_estourada(pad(dia, 2) + "/" + pad(mes, 2) + "/" + pad(ano, 2));
      return nova_data;
    } else {
      return "";
    }
  };

  this.numberOfDaysInMonth = function(month, year) {
    return scTimezone["new"](year, month, 0).getDate();
  };

  this.dayInWeek = function(opt) {
    var ano, d, dia, mes;
    ano = opt.ano;
    mes = opt.mes;
    dia = opt.dia;
    d = scTimezone["new"](ano, mes - 1, dia);
    return d.getDay() + 1;
  };

  this.arrumar_data_estourada = function(data) {
    var ano, d, dia, mes, meses_30_dias, meses_31_dias;
    if (data !== "" && data !== undefined) {
      meses_30_dias = [4, 6, 9, 11];
      meses_31_dias = [1, 3, 5, 7, 8, 10, 12];
      d = data.split("/");
      dia = d[0].to_i();
      mes = d[1].to_i();
      ano = d[2].to_i();
      if (mes > 12) {
        mes = 12;
      }
      if (mes === 2) {
        if (ano_bissexto(ano)) {
          if (dia > 29) {
            dia = 29;
          }
        } else {
          if (dia > 28) {
            dia = 28;
          }
        }
      }
      if (in_array(mes, meses_30_dias)) {
        if (dia > 30) {
          dia = 30;
        }
      }
      if (in_array(mes, meses_31_dias)) {
        if (dia > 31) {
          dia = 31;
        }
      }
      return pad(dia, 2) + "/" + pad(mes, 2) + "/" + ano;
    } else {
      return "";
    }
  };

  this.Array.prototype.presence = function() {
    var array;
    array = this;
    if (array.length === 0) {
      return null;
    } else {
      return array;
    }
  };

  this.Array.prototype.unique = function() {
    var i, j, o, r, t, tt;
    r = [];
    o = {};
    i = 0;
    while (i < this.length) {
      t = this[i];
      tt = o[t] = o[t] || [];
      j = 0;
      while (j < tt.length) {
        if (tt[j] === this[i]) {
          break;
        }
        j++;
      }
      if (j === tt.length) {
        r.push(tt[j] = t);
      }
      i++;
    }
    return r;
  };

  this.Array.prototype.toSentence = function() {
    var e, n, primeiros, t;
    e = this;
    if (this.length === 0) {
      return "";
    } else if (this.length === 1) {
      return this[0];
    } else {
      t = this.length - 1;
      n = this[t];
      e.splice(t, 1);
      primeiros = e.join(", ");
      return [primeiros, n].join(" e ");
    }
  };

  this.Array.prototype.compactFull = function() {
    var e, t;
    e = void 0;
    t = this;
    return compactFullArray(t);
  };

  this.Array.prototype.removeElement = function(e) {
    var i, n, r, t;
    t = void 0;
    n = arguments;
    r = n.length;
    i = void 0;
    while (r && this.length) {
      t = n[--r];
      while ((i = this.indexOf(t)) !== -1) {
        this.splice(i, 1);
      }
    }
    return this;
  };

  this.Array.prototype.ocorrencias = function(e) {
    var n, r, result, t;
    t = {};
    n = 0;
    while (n < this.length) {
      r = this[n];
      t[r] = (t[r] ? t[r] + 1 : 1);
      n++;
    }
    result = t[e];
    if (result === undefined) {
      return 0;
    } else {
      return result;
    }
  };

  this.Array.prototype.flatten = e = function() {
    var i, n, r, t;
    t = [];
    n = 0;
    r = this.length;
    while (n < r) {
      i = Object.prototype.toString.call(this[n]).split(" ").pop().split("]").shift().toLowerCase();
      if (i) {
        t = t.concat((/^(array|collection|arguments|object)$/.test(i) ? e.call(this[n]) : this[n]));
      }
      n++;
    }
    return t;
  };

  if (!this.Array.prototype.forEach) {
    this.Array.prototype.forEach = function(e) {
      var n, r, t, _results;
      t = this.length;
      if (typeof e !== "function") {
        throw new TypeError;
      }
      n = arguments[1];
      r = 0;
      _results = [];
      while (r < t) {
        if (r in this) {
          e.call(n, this[r], r, this);
        }
        _results.push(r++);
      }
      return _results;
    };
  }

  this.isMiddleButton = function(event) {
    return event.button === 1;
  };

  this.isLeftButton = function(event) {
    return event.button === 0;
  };

  this.isLeftOrMiddleButton = function(event) {
    return isLeftButton(event) || isMiddleButton(event);
  };

  this.charToAccentedCharClassMap = {
    A: "[AaªÀ-Åà-åĀ-ąǍǎȀ-ȃȦȧᴬᵃḀḁẚẠ-ảₐ℀℁℻⒜Ⓐⓐ㍱-㍴㎀-㎄㎈㎉㎩-㎯㏂㏊㏟㏿Ａａ]",
    B: "[BbᴮᵇḂ-ḇℬ⒝Ⓑⓑ㍴㎅-㎇㏃㏈㏔㏝Ｂｂ]",
    C: "[CcÇçĆ-čᶜ℀ℂ℃℅℆ℭⅭⅽ⒞Ⓒⓒ㍶㎈㎉㎝㎠㎤㏄-㏇Ｃｃ]",
    D: "[DdĎďǄ-ǆǱ-ǳᴰᵈḊ-ḓⅅⅆⅮⅾ⒟Ⓓⓓ㋏㍲㍷-㍹㎗㎭-㎯㏅㏈Ｄｄ]",
    E: "[EeÈ-Ëè-ëĒ-ěȄ-ȇȨȩᴱᵉḘ-ḛẸ-ẽₑ℡ℯℰⅇ⒠Ⓔⓔ㉐㋍㋎Ｅｅ]",
    F: "[FfᶠḞḟ℉ℱ℻⒡Ⓕⓕ㎊-㎌㎙ﬀ-ﬄＦｆ]",
    G: "[GgĜ-ģǦǧǴǵᴳᵍḠḡℊ⒢Ⓖⓖ㋌㋍㎇㎍-㎏㎓㎬㏆㏉㏒㏿Ｇｇ]",
    H: "[HhĤĥȞȟʰᴴḢ-ḫẖℋ-ℎ⒣Ⓗⓗ㋌㍱㎐-㎔㏊㏋㏗Ｈｈ]",
    I: "[IiÌ-Ïì-ïĨ-İĲĳǏǐȈ-ȋᴵᵢḬḭỈ-ịⁱℐℑℹⅈⅠ-ⅣⅥ-ⅨⅪⅫⅰ-ⅳⅵ-ⅸⅺⅻ⒤Ⓘⓘ㍺㏌㏕ﬁﬃＩｉ]",
    J: "[JjĲ-ĵǇ-ǌǰʲᴶⅉ⒥ⒿⓙⱼＪｊ]",
    K: "[KkĶķǨǩᴷᵏḰ-ḵK⒦Ⓚⓚ㎄㎅㎉㎏㎑㎘㎞㎢㎦㎪㎸㎾㏀㏆㏍-㏏Ｋｋ]",
    L: "[LlĹ-ŀǇ-ǉˡᴸḶḷḺ-ḽℒℓ℡Ⅼⅼ⒧Ⓛⓛ㋏㎈㎉㏐-㏓㏕㏖㏿ﬂﬄＬｌ]",
    M: "[MmᴹᵐḾ-ṃ℠™ℳⅯⅿ⒨Ⓜⓜ㍷-㍹㎃㎆㎎㎒㎖㎙-㎨㎫㎳㎷㎹㎽㎿㏁㏂㏎㏐㏔-㏖㏘㏙㏞㏟Ｍｍ]",
    N: "[NnÑñŃ-ŉǊ-ǌǸǹᴺṄ-ṋⁿℕ№⒩Ⓝⓝ㎁㎋㎚㎱㎵㎻㏌㏑Ｎｎ]",
    O: "[OoºÒ-Öò-öŌ-őƠơǑǒǪǫȌ-ȏȮȯᴼᵒỌ-ỏₒ℅№ℴ⒪Ⓞⓞ㍵㏇㏒㏖Ｏｏ]",
    P: "[PpᴾᵖṔ-ṗℙ⒫Ⓟⓟ㉐㍱㍶㎀㎊㎩-㎬㎰㎴㎺㏋㏗-㏚Ｐｐ]",
    Q: "[Qqℚ⒬Ⓠⓠ㏃Ｑｑ]",
    R: "[RrŔ-řȐ-ȓʳᴿᵣṘ-ṛṞṟ₨ℛ-ℝ⒭Ⓡⓡ㋍㍴㎭-㎯㏚㏛Ｒｒ]",
    S: "[SsŚ-šſȘșˢṠ-ṣ₨℁℠⒮Ⓢⓢ㎧㎨㎮-㎳㏛㏜ﬆＳｓ]",
    T: "[TtŢ-ťȚțᵀᵗṪ-ṱẗ℡™⒯Ⓣⓣ㉐㋏㎔㏏ﬅﬆＴｔ]",
    U: "[UuÙ-Üù-üŨ-ųƯưǓǔȔ-ȗᵁᵘᵤṲ-ṷỤ-ủ℆⒰Ⓤⓤ㍳㍺Ｕｕ]",
    V: "[VvᵛᵥṼ-ṿⅣ-Ⅷⅳ-ⅷ⒱Ⓥⓥⱽ㋎㍵㎴-㎹㏜㏞Ｖｖ]",
    W: "[WwŴŵʷᵂẀ-ẉẘ⒲Ⓦⓦ㎺-㎿㏝Ｗｗ]",
    X: "[XxˣẊ-ẍₓ℻Ⅸ-Ⅻⅸ-ⅻ⒳Ⓧⓧ㏓Ｘｘ]",
    Y: "[YyÝýÿŶ-ŸȲȳʸẎẏẙỲ-ỹ⒴Ⓨⓨ㏉Ｙｙ]",
    Z: "[ZzŹ-žǱ-ǳᶻẐ-ẕℤℨ⒵Ⓩⓩ㎐-㎔Ｚｚ]"
  };

  this.desabilitar = function(item) {
    return item.animate({
      opacity: 0.5
    }, 700, function() {
      return $(this).addClass("desabilitado");
    });
  };

  this.parcelar = function(quantia, qtd_parcelas) {
    var i, p, parcelas, quantia_2, resto;
    parcelas = new Array();
    p = parseFloat((quantia / qtd_parcelas).toFixed(2), 10);
    quantia_2 = parseFloat((p * qtd_parcelas).toFixed(2), 10);
    resto = 0;
    if (quantia !== quantia_2) {
      resto = parseFloat((quantia - quantia_2).toFixed(2), 10);
    }
    i = 0;
    while (i < qtd_parcelas) {
      if (i === qtd_parcelas - 1) {
        parcelas[i] = dinheiro(p + resto, {
          prefixo: false
        });
      } else {
        parcelas[i] = dinheiro(p, {
          prefixo: false
        });
      }
      i++;
    }
    return parcelas;
  };

  this.porcentagem_desconto = function() {
    var opt;
    opt = {
      valor_total: null,
      desconto: null
    };
    if (options) {
      return $.extend(opt, options);
    }
  };

  this.descontar = function(options) {
    var desconto, opt, valor_total;
    opt = {
      valor_total: null,
      desconto: null
    };
    if (options) {
      $.extend(opt, options);
    }
    valor_total = opt.valor_total;
    desconto = opt.desconto / 100;
    return subtrair(valor_total, multiplicar(valor_total, desconto));
  };

  this.escurecerTela = function(opt) {
    var telaEscura;
    return telaEscura = $("<div></div>").addClass("tela-escura").appendTo(document.body);
  };

  this.clarearTela = function() {
    return $("body").find(".tela-escura").remove();
  };

  getMousePositionFromClickedContainer = function(event, container) {
    var pos_x, pos_y;
    pos_x = (event.offsetX ? event.offsetX : event.pageX - container[0].offsetLeft);
    pos_y = (event.offsetY ? event.offsetY : event.pageY - container[0].offsetTop);
    return [pos_x, pos_y];
  };

  this.compactFullObject = function(object) {
    var data_2, x, y;
    y = void 0;
    data_2 = object;
    for (x in data_2) {
      if (Object.prototype.hasOwnProperty.call(data_2, x)) {
        y = data_2[x];
        if (y === "null" || y === null || y === "" || typeof y === "undefined") {
          delete data_2[x];
        }
      }
    }
    return data_2;
  };

  this.incrementar_mes_ano = function(mes_ano) {
    var ano, d, mes, mes_numerico, novo_mes_numerico;
    d = mes_ano.split("/");
    mes = d[0].trim();
    ano = d[1].to_i();
    mes_numerico = mes_to_numero(mes).to_i();
    if (mes_numerico === 12) {
      ano++;
    }
    novo_mes_numerico = mes_numerico % 12 + 1;
    return numero_to_mes_extenso(novo_mes_numerico) + "/" + ano;
  };

  this.token = function() {
    var a;
    a = function() {
      return Math.random().toString(36).substr(2);
    };
    return a() + a();
  };

}).call(this);
//! moment.js
//! version : 2.6.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

(function (undefined) {

    /************************************
        Constants
    ************************************/

    var moment,
        VERSION = "2.6.0",
        // the global-scope this is NOT the global object in Node.js
        globalScope = typeof global !== 'undefined' ? global : this,
        oldGlobalMoment,
        round = Math.round,
        i,

        YEAR = 0,
        MONTH = 1,
        DATE = 2,
        HOUR = 3,
        MINUTE = 4,
        SECOND = 5,
        MILLISECOND = 6,

        // internal storage for language config files
        languages = {},

        // moment internal properties
        momentProperties = {
            _isAMomentObject: null,
            _i : null,
            _f : null,
            _l : null,
            _strict : null,
            _isUTC : null,
            _offset : null,  // optional. Combine with _isUTC
            _pf : null,
            _lang : null  // optional
        },

        // check for nodeJS
        hasModule = (typeof module !== 'undefined' && module.exports),

        // ASP.NET json date format regex
        aspNetJsonRegex = /^\/?Date\((\-?\d+)/i,
        aspNetTimeSpanJsonRegex = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,

        // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
        // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
        isoDurationRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,

        // format tokens
        formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,
        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,

        // parsing token regexes
        parseTokenOneOrTwoDigits = /\d\d?/, // 0 - 99
        parseTokenOneToThreeDigits = /\d{1,3}/, // 0 - 999
        parseTokenOneToFourDigits = /\d{1,4}/, // 0 - 9999
        parseTokenOneToSixDigits = /[+\-]?\d{1,6}/, // -999,999 - 999,999
        parseTokenDigits = /\d+/, // nonzero number of digits
        parseTokenWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, // any word (or two) characters or numbers including two/three word month in arabic.
        parseTokenTimezone = /Z|[\+\-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
        parseTokenT = /T/i, // T (ISO separator)
        parseTokenTimestampMs = /[\+\-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123
        parseTokenOrdinal = /\d{1,2}/,

        //strict parsing regexes
        parseTokenOneDigit = /\d/, // 0 - 9
        parseTokenTwoDigits = /\d\d/, // 00 - 99
        parseTokenThreeDigits = /\d{3}/, // 000 - 999
        parseTokenFourDigits = /\d{4}/, // 0000 - 9999
        parseTokenSixDigits = /[+-]?\d{6}/, // -999,999 - 999,999
        parseTokenSignedNumber = /[+-]?\d+/, // -inf - inf

        // iso 8601 regex
        // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
        isoRegex = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,

        isoFormat = 'YYYY-MM-DDTHH:mm:ssZ',

        isoDates = [
            ['YYYYYY-MM-DD', /[+-]\d{6}-\d{2}-\d{2}/],
            ['YYYY-MM-DD', /\d{4}-\d{2}-\d{2}/],
            ['GGGG-[W]WW-E', /\d{4}-W\d{2}-\d/],
            ['GGGG-[W]WW', /\d{4}-W\d{2}/],
            ['YYYY-DDD', /\d{4}-\d{3}/]
        ],

        // iso time formats and regexes
        isoTimes = [
            ['HH:mm:ss.SSSS', /(T| )\d\d:\d\d:\d\d\.\d+/],
            ['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/],
            ['HH:mm', /(T| )\d\d:\d\d/],
            ['HH', /(T| )\d\d/]
        ],

        // timezone chunker "+10:00" > ["10", "00"] or "-1530" > ["-15", "30"]
        parseTimezoneChunker = /([\+\-]|\d\d)/gi,

        // getter and setter names
        proxyGettersAndSetters = 'Date|Hours|Minutes|Seconds|Milliseconds'.split('|'),
        unitMillisecondFactors = {
            'Milliseconds' : 1,
            'Seconds' : 1e3,
            'Minutes' : 6e4,
            'Hours' : 36e5,
            'Days' : 864e5,
            'Months' : 2592e6,
            'Years' : 31536e6
        },

        unitAliases = {
            ms : 'millisecond',
            s : 'second',
            m : 'minute',
            h : 'hour',
            d : 'day',
            D : 'date',
            w : 'week',
            W : 'isoWeek',
            M : 'month',
            Q : 'quarter',
            y : 'year',
            DDD : 'dayOfYear',
            e : 'weekday',
            E : 'isoWeekday',
            gg: 'weekYear',
            GG: 'isoWeekYear'
        },

        camelFunctions = {
            dayofyear : 'dayOfYear',
            isoweekday : 'isoWeekday',
            isoweek : 'isoWeek',
            weekyear : 'weekYear',
            isoweekyear : 'isoWeekYear'
        },

        // format function strings
        formatFunctions = {},

        // tokens to ordinalize and pad
        ordinalizeTokens = 'DDD w W M D d'.split(' '),
        paddedTokens = 'M D H h m s w W'.split(' '),

        formatTokenFunctions = {
            M    : function () {
                return this.month() + 1;
            },
            MMM  : function (format) {
                return this.lang().monthsShort(this, format);
            },
            MMMM : function (format) {
                return this.lang().months(this, format);
            },
            D    : function () {
                return this.date();
            },
            DDD  : function () {
                return this.dayOfYear();
            },
            d    : function () {
                return this.day();
            },
            dd   : function (format) {
                return this.lang().weekdaysMin(this, format);
            },
            ddd  : function (format) {
                return this.lang().weekdaysShort(this, format);
            },
            dddd : function (format) {
                return this.lang().weekdays(this, format);
            },
            w    : function () {
                return this.week();
            },
            W    : function () {
                return this.isoWeek();
            },
            YY   : function () {
                return leftZeroFill(this.year() % 100, 2);
            },
            YYYY : function () {
                return leftZeroFill(this.year(), 4);
            },
            YYYYY : function () {
                return leftZeroFill(this.year(), 5);
            },
            YYYYYY : function () {
                var y = this.year(), sign = y >= 0 ? '+' : '-';
                return sign + leftZeroFill(Math.abs(y), 6);
            },
            gg   : function () {
                return leftZeroFill(this.weekYear() % 100, 2);
            },
            gggg : function () {
                return leftZeroFill(this.weekYear(), 4);
            },
            ggggg : function () {
                return leftZeroFill(this.weekYear(), 5);
            },
            GG   : function () {
                return leftZeroFill(this.isoWeekYear() % 100, 2);
            },
            GGGG : function () {
                return leftZeroFill(this.isoWeekYear(), 4);
            },
            GGGGG : function () {
                return leftZeroFill(this.isoWeekYear(), 5);
            },
            e : function () {
                return this.weekday();
            },
            E : function () {
                return this.isoWeekday();
            },
            a    : function () {
                return this.lang().meridiem(this.hours(), this.minutes(), true);
            },
            A    : function () {
                return this.lang().meridiem(this.hours(), this.minutes(), false);
            },
            H    : function () {
                return this.hours();
            },
            h    : function () {
                return this.hours() % 12 || 12;
            },
            m    : function () {
                return this.minutes();
            },
            s    : function () {
                return this.seconds();
            },
            S    : function () {
                return toInt(this.milliseconds() / 100);
            },
            SS   : function () {
                return leftZeroFill(toInt(this.milliseconds() / 10), 2);
            },
            SSS  : function () {
                return leftZeroFill(this.milliseconds(), 3);
            },
            SSSS : function () {
                return leftZeroFill(this.milliseconds(), 3);
            },
            Z    : function () {
                var a = -this.zone(),
                    b = "+";
                if (a < 0) {
                    a = -a;
                    b = "-";
                }
                return b + leftZeroFill(toInt(a / 60), 2) + ":" + leftZeroFill(toInt(a) % 60, 2);
            },
            ZZ   : function () {
                var a = -this.zone(),
                    b = "+";
                if (a < 0) {
                    a = -a;
                    b = "-";
                }
                return b + leftZeroFill(toInt(a / 60), 2) + leftZeroFill(toInt(a) % 60, 2);
            },
            z : function () {
                return this.zoneAbbr();
            },
            zz : function () {
                return this.zoneName();
            },
            X    : function () {
                return this.unix();
            },
            Q : function () {
                return this.quarter();
            }
        },

        lists = ['months', 'monthsShort', 'weekdays', 'weekdaysShort', 'weekdaysMin'];

    function defaultParsingFlags() {
        // We need to deep clone this object, and es5 standard is not very
        // helpful.
        return {
            empty : false,
            unusedTokens : [],
            unusedInput : [],
            overflow : -2,
            charsLeftOver : 0,
            nullInput : false,
            invalidMonth : null,
            invalidFormat : false,
            userInvalidated : false,
            iso: false
        };
    }

    function deprecate(msg, fn) {
        var firstTime = true;
        function printMsg() {
            if (moment.suppressDeprecationWarnings === false &&
                    typeof console !== 'undefined' && console.warn) {
                console.warn("Deprecation warning: " + msg);
            }
        }
        return extend(function () {
            if (firstTime) {
                printMsg();
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    function padToken(func, count) {
        return function (a) {
            return leftZeroFill(func.call(this, a), count);
        };
    }
    function ordinalizeToken(func, period) {
        return function (a) {
            return this.lang().ordinal(func.call(this, a), period);
        };
    }

    while (ordinalizeTokens.length) {
        i = ordinalizeTokens.pop();
        formatTokenFunctions[i + 'o'] = ordinalizeToken(formatTokenFunctions[i], i);
    }
    while (paddedTokens.length) {
        i = paddedTokens.pop();
        formatTokenFunctions[i + i] = padToken(formatTokenFunctions[i], 2);
    }
    formatTokenFunctions.DDDD = padToken(formatTokenFunctions.DDD, 3);


    /************************************
        Constructors
    ************************************/

    function Language() {

    }

    // Moment prototype object
    function Moment(config) {
        checkOverflow(config);
        extend(this, config);
    }

    // Duration Constructor
    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 36e5; // 1000 * 60 * 60
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._bubble();
    }

    /************************************
        Helpers
    ************************************/


    function extend(a, b) {
        for (var i in b) {
            if (b.hasOwnProperty(i)) {
                a[i] = b[i];
            }
        }

        if (b.hasOwnProperty("toString")) {
            a.toString = b.toString;
        }

        if (b.hasOwnProperty("valueOf")) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function cloneMoment(m) {
        var result = {}, i;
        for (i in m) {
            if (m.hasOwnProperty(i) && momentProperties.hasOwnProperty(i)) {
                result[i] = m[i];
            }
        }

        return result;
    }

    function absRound(number) {
        if (number < 0) {
            return Math.ceil(number);
        } else {
            return Math.floor(number);
        }
    }

    // left zero fill a number
    // see http://jsperf.com/left-zero-filling for performance comparison
    function leftZeroFill(number, targetLength, forceSign) {
        var output = '' + Math.abs(number),
            sign = number >= 0;

        while (output.length < targetLength) {
            output = '0' + output;
        }
        return (sign ? (forceSign ? '+' : '') : '-') + output;
    }

    // helper function for _.addTime and _.subtractTime
    function addOrSubtractDurationFromMoment(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = duration._days,
            months = duration._months;
        updateOffset = updateOffset == null ? true : updateOffset;

        if (milliseconds) {
            mom._d.setTime(+mom._d + milliseconds * isAdding);
        }
        if (days) {
            rawSetter(mom, 'Date', rawGetter(mom, 'Date') + days * isAdding);
        }
        if (months) {
            rawMonthSetter(mom, rawGetter(mom, 'Month') + months * isAdding);
        }
        if (updateOffset) {
            moment.updateOffset(mom, days || months);
        }
    }

    // check if is an array
    function isArray(input) {
        return Object.prototype.toString.call(input) === '[object Array]';
    }

    function isDate(input) {
        return  Object.prototype.toString.call(input) === '[object Date]' ||
                input instanceof Date;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function normalizeUnits(units) {
        if (units) {
            var lowered = units.toLowerCase().replace(/(.)s$/, '$1');
            units = unitAliases[units] || camelFunctions[lowered] || lowered;
        }
        return units;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (inputObject.hasOwnProperty(prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    function makeList(field) {
        var count, setter;

        if (field.indexOf('week') === 0) {
            count = 7;
            setter = 'day';
        }
        else if (field.indexOf('month') === 0) {
            count = 12;
            setter = 'month';
        }
        else {
            return;
        }

        moment[field] = function (format, index) {
            var i, getter,
                method = moment.fn._lang[field],
                results = [];

            if (typeof format === 'number') {
                index = format;
                format = undefined;
            }

            getter = function (i) {
                var m = moment().utc().set(setter, i);
                return method.call(moment.fn._lang, m, format || '');
            };

            if (index != null) {
                return getter(index);
            }
            else {
                for (i = 0; i < count; i++) {
                    results.push(getter(i));
                }
                return results;
            }
        };
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            if (coercedNumber >= 0) {
                value = Math.floor(coercedNumber);
            } else {
                value = Math.ceil(coercedNumber);
            }
        }

        return value;
    }

    function daysInMonth(year, month) {
        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    }

    function weeksInYear(year, dow, doy) {
        return weekOfYear(moment([year, 11, 31 + dow - doy]), dow, doy).week;
    }

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    function checkOverflow(m) {
        var overflow;
        if (m._a && m._pf.overflow === -2) {
            overflow =
                m._a[MONTH] < 0 || m._a[MONTH] > 11 ? MONTH :
                m._a[DATE] < 1 || m._a[DATE] > daysInMonth(m._a[YEAR], m._a[MONTH]) ? DATE :
                m._a[HOUR] < 0 || m._a[HOUR] > 23 ? HOUR :
                m._a[MINUTE] < 0 || m._a[MINUTE] > 59 ? MINUTE :
                m._a[SECOND] < 0 || m._a[SECOND] > 59 ? SECOND :
                m._a[MILLISECOND] < 0 || m._a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (m._pf._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }

            m._pf.overflow = overflow;
        }
    }

    function isValid(m) {
        if (m._isValid == null) {
            m._isValid = !isNaN(m._d.getTime()) &&
                m._pf.overflow < 0 &&
                !m._pf.empty &&
                !m._pf.invalidMonth &&
                !m._pf.nullInput &&
                !m._pf.invalidFormat &&
                !m._pf.userInvalidated;

            if (m._strict) {
                m._isValid = m._isValid &&
                    m._pf.charsLeftOver === 0 &&
                    m._pf.unusedTokens.length === 0;
            }
        }
        return m._isValid;
    }

    function normalizeLanguage(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function makeAs(input, model) {
        return model._isUTC ? moment(input).zone(model._offset || 0) :
            moment(input).local();
    }

    /************************************
        Languages
    ************************************/


    extend(Language.prototype, {

        set : function (config) {
            var prop, i;
            for (i in config) {
                prop = config[i];
                if (typeof prop === 'function') {
                    this[i] = prop;
                } else {
                    this['_' + i] = prop;
                }
            }
        },

        _months : "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        months : function (m) {
            return this._months[m.month()];
        },

        _monthsShort : "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        monthsShort : function (m) {
            return this._monthsShort[m.month()];
        },

        monthsParse : function (monthName) {
            var i, mom, regex;

            if (!this._monthsParse) {
                this._monthsParse = [];
            }

            for (i = 0; i < 12; i++) {
                // make the regex if we don't have it already
                if (!this._monthsParse[i]) {
                    mom = moment.utc([2000, i]);
                    regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                    this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
                }
                // test the regex
                if (this._monthsParse[i].test(monthName)) {
                    return i;
                }
            }
        },

        _weekdays : "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdays : function (m) {
            return this._weekdays[m.day()];
        },

        _weekdaysShort : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysShort : function (m) {
            return this._weekdaysShort[m.day()];
        },

        _weekdaysMin : "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        weekdaysMin : function (m) {
            return this._weekdaysMin[m.day()];
        },

        weekdaysParse : function (weekdayName) {
            var i, mom, regex;

            if (!this._weekdaysParse) {
                this._weekdaysParse = [];
            }

            for (i = 0; i < 7; i++) {
                // make the regex if we don't have it already
                if (!this._weekdaysParse[i]) {
                    mom = moment([2000, 1]).day(i);
                    regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                    this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
                }
                // test the regex
                if (this._weekdaysParse[i].test(weekdayName)) {
                    return i;
                }
            }
        },

        _longDateFormat : {
            LT : "h:mm A",
            L : "MM/DD/YYYY",
            LL : "MMMM D YYYY",
            LLL : "MMMM D YYYY LT",
            LLLL : "dddd, MMMM D YYYY LT"
        },
        longDateFormat : function (key) {
            var output = this._longDateFormat[key];
            if (!output && this._longDateFormat[key.toUpperCase()]) {
                output = this._longDateFormat[key.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (val) {
                    return val.slice(1);
                });
                this._longDateFormat[key] = output;
            }
            return output;
        },

        isPM : function (input) {
            // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
            // Using charAt should be more compatible.
            return ((input + '').toLowerCase().charAt(0) === 'p');
        },

        _meridiemParse : /[ap]\.?m?\.?/i,
        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'pm' : 'PM';
            } else {
                return isLower ? 'am' : 'AM';
            }
        },

        _calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        calendar : function (key, mom) {
            var output = this._calendar[key];
            return typeof output === 'function' ? output.apply(mom) : output;
        },

        _relativeTime : {
            future : "in %s",
            past : "%s ago",
            s : "a few seconds",
            m : "a minute",
            mm : "%d minutes",
            h : "an hour",
            hh : "%d hours",
            d : "a day",
            dd : "%d days",
            M : "a month",
            MM : "%d months",
            y : "a year",
            yy : "%d years"
        },
        relativeTime : function (number, withoutSuffix, string, isFuture) {
            var output = this._relativeTime[string];
            return (typeof output === 'function') ?
                output(number, withoutSuffix, string, isFuture) :
                output.replace(/%d/i, number);
        },
        pastFuture : function (diff, output) {
            var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
            return typeof format === 'function' ? format(output) : format.replace(/%s/i, output);
        },

        ordinal : function (number) {
            return this._ordinal.replace("%d", number);
        },
        _ordinal : "%d",

        preparse : function (string) {
            return string;
        },

        postformat : function (string) {
            return string;
        },

        week : function (mom) {
            return weekOfYear(mom, this._week.dow, this._week.doy).week;
        },

        _week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        },

        _invalidDate: 'Invalid date',
        invalidDate: function () {
            return this._invalidDate;
        }
    });

    // Loads a language definition into the `languages` cache.  The function
    // takes a key and optionally values.  If not in the browser and no values
    // are provided, it will load the language file module.  As a convenience,
    // this function also returns the language values.
    function loadLang(key, values) {
        values.abbr = key;
        if (!languages[key]) {
            languages[key] = new Language();
        }
        languages[key].set(values);
        return languages[key];
    }

    // Remove a language from the `languages` cache. Mostly useful in tests.
    function unloadLang(key) {
        delete languages[key];
    }

    // Determines which language definition to use and returns it.
    //
    // With no parameters, it will return the global language.  If you
    // pass in a language key, such as 'en', it will return the
    // definition for 'en', so long as 'en' has already been loaded using
    // moment.lang.
    function getLangDefinition(key) {
        var i = 0, j, lang, next, split,
            get = function (k) {
                if (!languages[k] && hasModule) {
                    try {
                        require('./lang/' + k);
                    } catch (e) { }
                }
                return languages[k];
            };

        if (!key) {
            return moment.fn._lang;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            lang = get(key);
            if (lang) {
                return lang;
            }
            key = [key];
        }

        //pick the language from the array
        //try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
        //substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
        while (i < key.length) {
            split = normalizeLanguage(key[i]).split('-');
            j = split.length;
            next = normalizeLanguage(key[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                lang = get(split.slice(0, j).join('-'));
                if (lang) {
                    return lang;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return moment.fn._lang;
    }

    /************************************
        Formatting
    ************************************/


    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, "");
        }
        return input.replace(/\\/g, "");
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = "";
            for (i = 0; i < length; i++) {
                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {

        if (!m.isValid()) {
            return m.lang().invalidDate();
        }

        format = expandFormat(format, m.lang());

        if (!formatFunctions[format]) {
            formatFunctions[format] = makeFormatFunction(format);
        }

        return formatFunctions[format](m);
    }

    function expandFormat(format, lang) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return lang.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }


    /************************************
        Parsing
    ************************************/


    // get the regex to find the next token
    function getParseRegexForToken(token, config) {
        var a, strict = config._strict;
        switch (token) {
        case 'Q':
            return parseTokenOneDigit;
        case 'DDDD':
            return parseTokenThreeDigits;
        case 'YYYY':
        case 'GGGG':
        case 'gggg':
            return strict ? parseTokenFourDigits : parseTokenOneToFourDigits;
        case 'Y':
        case 'G':
        case 'g':
            return parseTokenSignedNumber;
        case 'YYYYYY':
        case 'YYYYY':
        case 'GGGGG':
        case 'ggggg':
            return strict ? parseTokenSixDigits : parseTokenOneToSixDigits;
        case 'S':
            if (strict) { return parseTokenOneDigit; }
            /* falls through */
        case 'SS':
            if (strict) { return parseTokenTwoDigits; }
            /* falls through */
        case 'SSS':
            if (strict) { return parseTokenThreeDigits; }
            /* falls through */
        case 'DDD':
            return parseTokenOneToThreeDigits;
        case 'MMM':
        case 'MMMM':
        case 'dd':
        case 'ddd':
        case 'dddd':
            return parseTokenWord;
        case 'a':
        case 'A':
            return getLangDefinition(config._l)._meridiemParse;
        case 'X':
            return parseTokenTimestampMs;
        case 'Z':
        case 'ZZ':
            return parseTokenTimezone;
        case 'T':
            return parseTokenT;
        case 'SSSS':
            return parseTokenDigits;
        case 'MM':
        case 'DD':
        case 'YY':
        case 'GG':
        case 'gg':
        case 'HH':
        case 'hh':
        case 'mm':
        case 'ss':
        case 'ww':
        case 'WW':
            return strict ? parseTokenTwoDigits : parseTokenOneOrTwoDigits;
        case 'M':
        case 'D':
        case 'd':
        case 'H':
        case 'h':
        case 'm':
        case 's':
        case 'w':
        case 'W':
        case 'e':
        case 'E':
            return parseTokenOneOrTwoDigits;
        case 'Do':
            return parseTokenOrdinal;
        default :
            a = new RegExp(regexpEscape(unescapeFormat(token.replace('\\', '')), "i"));
            return a;
        }
    }

    function timezoneMinutesFromString(string) {
        string = string || "";
        var possibleTzMatches = (string.match(parseTokenTimezone) || []),
            tzChunk = possibleTzMatches[possibleTzMatches.length - 1] || [],
            parts = (tzChunk + '').match(parseTimezoneChunker) || ['-', 0, 0],
            minutes = +(parts[1] * 60) + toInt(parts[2]);

        return parts[0] === '+' ? -minutes : minutes;
    }

    // function to convert string input to date
    function addTimeToArrayFromToken(token, input, config) {
        var a, datePartArray = config._a;

        switch (token) {
        // QUARTER
        case 'Q':
            if (input != null) {
                datePartArray[MONTH] = (toInt(input) - 1) * 3;
            }
            break;
        // MONTH
        case 'M' : // fall through to MM
        case 'MM' :
            if (input != null) {
                datePartArray[MONTH] = toInt(input) - 1;
            }
            break;
        case 'MMM' : // fall through to MMMM
        case 'MMMM' :
            a = getLangDefinition(config._l).monthsParse(input);
            // if we didn't find a month name, mark the date as invalid.
            if (a != null) {
                datePartArray[MONTH] = a;
            } else {
                config._pf.invalidMonth = input;
            }
            break;
        // DAY OF MONTH
        case 'D' : // fall through to DD
        case 'DD' :
            if (input != null) {
                datePartArray[DATE] = toInt(input);
            }
            break;
        case 'Do' :
            if (input != null) {
                datePartArray[DATE] = toInt(parseInt(input, 10));
            }
            break;
        // DAY OF YEAR
        case 'DDD' : // fall through to DDDD
        case 'DDDD' :
            if (input != null) {
                config._dayOfYear = toInt(input);
            }

            break;
        // YEAR
        case 'YY' :
            datePartArray[YEAR] = moment.parseTwoDigitYear(input);
            break;
        case 'YYYY' :
        case 'YYYYY' :
        case 'YYYYYY' :
            datePartArray[YEAR] = toInt(input);
            break;
        // AM / PM
        case 'a' : // fall through to A
        case 'A' :
            config._isPm = getLangDefinition(config._l).isPM(input);
            break;
        // 24 HOUR
        case 'H' : // fall through to hh
        case 'HH' : // fall through to hh
        case 'h' : // fall through to hh
        case 'hh' :
            datePartArray[HOUR] = toInt(input);
            break;
        // MINUTE
        case 'm' : // fall through to mm
        case 'mm' :
            datePartArray[MINUTE] = toInt(input);
            break;
        // SECOND
        case 's' : // fall through to ss
        case 'ss' :
            datePartArray[SECOND] = toInt(input);
            break;
        // MILLISECOND
        case 'S' :
        case 'SS' :
        case 'SSS' :
        case 'SSSS' :
            datePartArray[MILLISECOND] = toInt(('0.' + input) * 1000);
            break;
        // UNIX TIMESTAMP WITH MS
        case 'X':
            config._d = new Date(parseFloat(input) * 1000);
            break;
        // TIMEZONE
        case 'Z' : // fall through to ZZ
        case 'ZZ' :
            config._useUTC = true;
            config._tzm = timezoneMinutesFromString(input);
            break;
        case 'w':
        case 'ww':
        case 'W':
        case 'WW':
        case 'd':
        case 'dd':
        case 'ddd':
        case 'dddd':
        case 'e':
        case 'E':
            token = token.substr(0, 1);
            /* falls through */
        case 'gg':
        case 'gggg':
        case 'GG':
        case 'GGGG':
        case 'GGGGG':
            token = token.substr(0, 2);
            if (input) {
                config._w = config._w || {};
                config._w[token] = input;
            }
            break;
        }
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function dateFromConfig(config) {
        var i, date, input = [], currentDate,
            yearToUse, fixYear, w, temp, lang, weekday, week;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            fixYear = function (val) {
                var intVal = parseInt(val, 10);
                return val ?
                  (val.length < 3 ? (intVal > 68 ? 1900 + intVal : 2000 + intVal) : intVal) :
                  (config._a[YEAR] == null ? moment().weekYear() : config._a[YEAR]);
            };

            w = config._w;
            if (w.GG != null || w.W != null || w.E != null) {
                temp = dayOfYearFromWeeks(fixYear(w.GG), w.W || 1, w.E, 4, 1);
            }
            else {
                lang = getLangDefinition(config._l);
                weekday = w.d != null ?  parseWeekday(w.d, lang) :
                  (w.e != null ?  parseInt(w.e, 10) + lang._week.dow : 0);

                week = parseInt(w.w, 10) || 1;

                //if we're parsing 'd', then the low day numbers may be next week
                if (w.d != null && weekday < lang._week.dow) {
                    week++;
                }

                temp = dayOfYearFromWeeks(fixYear(w.gg), week, weekday, lang._week.doy, lang._week.dow);
            }

            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear) {
            yearToUse = config._a[YEAR] == null ? currentDate[YEAR] : config._a[YEAR];

            if (config._dayOfYear > daysInYear(yearToUse)) {
                config._pf._overflowDayOfYear = true;
            }

            date = makeUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // add the offsets to the time to be parsed so that we can have a clean array for checking isValid
        input[HOUR] += toInt((config._tzm || 0) / 60);
        input[MINUTE] += toInt((config._tzm || 0) % 60);

        config._d = (config._useUTC ? makeUTCDate : makeDate).apply(null, input);
    }

    function dateFromObject(config) {
        var normalizedInput;

        if (config._d) {
            return;
        }

        normalizedInput = normalizeObjectUnits(config._i);
        config._a = [
            normalizedInput.year,
            normalizedInput.month,
            normalizedInput.day,
            normalizedInput.hour,
            normalizedInput.minute,
            normalizedInput.second,
            normalizedInput.millisecond
        ];

        dateFromConfig(config);
    }

    function currentDateArray(config) {
        var now = new Date();
        if (config._useUTC) {
            return [
                now.getUTCFullYear(),
                now.getUTCMonth(),
                now.getUTCDate()
            ];
        } else {
            return [now.getFullYear(), now.getMonth(), now.getDate()];
        }
    }

    // date from string and format string
    function makeDateFromStringAndFormat(config) {

        config._a = [];
        config._pf.empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var lang = getLangDefinition(config._l),
            string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, lang).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    config._pf.unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    config._pf.empty = false;
                }
                else {
                    config._pf.unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                config._pf.unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        config._pf.charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            config._pf.unusedInput.push(string);
        }

        // handle am pm
        if (config._isPm && config._a[HOUR] < 12) {
            config._a[HOUR] += 12;
        }
        // if is 12 am, change hours to 0
        if (config._isPm === false && config._a[HOUR] === 12) {
            config._a[HOUR] = 0;
        }

        dateFromConfig(config);
        checkOverflow(config);
    }

    function unescapeFormat(s) {
        return s.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        });
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function regexpEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    // date from string and array of format strings
    function makeDateFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            config._pf.invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = extend({}, config);
            tempConfig._pf = defaultParsingFlags();
            tempConfig._f = config._f[i];
            makeDateFromStringAndFormat(tempConfig);

            if (!isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += tempConfig._pf.charsLeftOver;

            //or tokens
            currentScore += tempConfig._pf.unusedTokens.length * 10;

            tempConfig._pf.score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    // date from iso format
    function makeDateFromString(config) {
        var i, l,
            string = config._i,
            match = isoRegex.exec(string);

        if (match) {
            config._pf.iso = true;
            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(string)) {
                    // match[5] should be "T" or undefined
                    config._f = isoDates[i][0] + (match[6] || " ");
                    break;
                }
            }
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(string)) {
                    config._f += isoTimes[i][0];
                    break;
                }
            }
            if (string.match(parseTokenTimezone)) {
                config._f += "Z";
            }
            makeDateFromStringAndFormat(config);
        }
        else {
            moment.createFromInputFallback(config);
        }
    }

    function makeDateFromInput(config) {
        var input = config._i,
            matched = aspNetJsonRegex.exec(input);

        if (input === undefined) {
            config._d = new Date();
        } else if (matched) {
            config._d = new Date(+matched[1]);
        } else if (typeof input === 'string') {
            makeDateFromString(config);
        } else if (isArray(input)) {
            config._a = input.slice(0);
            dateFromConfig(config);
        } else if (isDate(input)) {
            config._d = new Date(+input);
        } else if (typeof(input) === 'object') {
            dateFromObject(config);
        } else if (typeof(input) === 'number') {
            // from milliseconds
            config._d = new Date(input);
        } else {
            moment.createFromInputFallback(config);
        }
    }

    function makeDate(y, m, d, h, M, s, ms) {
        //can't just apply() to create a date:
        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
        var date = new Date(y, m, d, h, M, s, ms);

        //the date constructor doesn't accept years < 1970
        if (y < 1970) {
            date.setFullYear(y);
        }
        return date;
    }

    function makeUTCDate(y) {
        var date = new Date(Date.UTC.apply(null, arguments));
        if (y < 1970) {
            date.setUTCFullYear(y);
        }
        return date;
    }

    function parseWeekday(input, language) {
        if (typeof input === 'string') {
            if (!isNaN(input)) {
                input = parseInt(input, 10);
            }
            else {
                input = language.weekdaysParse(input);
                if (typeof input !== 'number') {
                    return null;
                }
            }
        }
        return input;
    }

    /************************************
        Relative Time
    ************************************/


    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, lang) {
        return lang.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime(milliseconds, withoutSuffix, lang) {
        var seconds = round(Math.abs(milliseconds) / 1000),
            minutes = round(seconds / 60),
            hours = round(minutes / 60),
            days = round(hours / 24),
            years = round(days / 365),
            args = seconds < 45 && ['s', seconds] ||
                minutes === 1 && ['m'] ||
                minutes < 45 && ['mm', minutes] ||
                hours === 1 && ['h'] ||
                hours < 22 && ['hh', hours] ||
                days === 1 && ['d'] ||
                days <= 25 && ['dd', days] ||
                days <= 45 && ['M'] ||
                days < 345 && ['MM', round(days / 30)] ||
                years === 1 && ['y'] || ['yy', years];
        args[2] = withoutSuffix;
        args[3] = milliseconds > 0;
        args[4] = lang;
        return substituteTimeAgo.apply({}, args);
    }


    /************************************
        Week of Year
    ************************************/


    // firstDayOfWeek       0 = sun, 6 = sat
    //                      the day of the week that starts the week
    //                      (usually sunday or monday)
    // firstDayOfWeekOfYear 0 = sun, 6 = sat
    //                      the first week is the week that contains the first
    //                      of this day of the week
    //                      (eg. ISO weeks use thursday (4))
    function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
        var end = firstDayOfWeekOfYear - firstDayOfWeek,
            daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(),
            adjustedMoment;


        if (daysToDayOfWeek > end) {
            daysToDayOfWeek -= 7;
        }

        if (daysToDayOfWeek < end - 7) {
            daysToDayOfWeek += 7;
        }

        adjustedMoment = moment(mom).add('d', daysToDayOfWeek);
        return {
            week: Math.ceil(adjustedMoment.dayOfYear() / 7),
            year: adjustedMoment.year()
        };
    }

    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, firstDayOfWeekOfYear, firstDayOfWeek) {
        var d = makeUTCDate(year, 0, 1).getUTCDay(), daysToAdd, dayOfYear;

        weekday = weekday != null ? weekday : firstDayOfWeek;
        daysToAdd = firstDayOfWeek - d + (d > firstDayOfWeekOfYear ? 7 : 0) - (d < firstDayOfWeek ? 7 : 0);
        dayOfYear = 7 * (week - 1) + (weekday - firstDayOfWeek) + daysToAdd + 1;

        return {
            year: dayOfYear > 0 ? year : year - 1,
            dayOfYear: dayOfYear > 0 ?  dayOfYear : daysInYear(year - 1) + dayOfYear
        };
    }

    /************************************
        Top Level Functions
    ************************************/

    function makeMoment(config) {
        var input = config._i,
            format = config._f;

        if (input === null || (format === undefined && input === '')) {
            return moment.invalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = getLangDefinition().preparse(input);
        }

        if (moment.isMoment(input)) {
            config = cloneMoment(input);

            config._d = new Date(+input._d);
        } else if (format) {
            if (isArray(format)) {
                makeDateFromStringAndArray(config);
            } else {
                makeDateFromStringAndFormat(config);
            }
        } else {
            makeDateFromInput(config);
        }

        return new Moment(config);
    }

    moment = function (input, format, lang, strict) {
        var c;

        if (typeof(lang) === "boolean") {
            strict = lang;
            lang = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c = {};
        c._isAMomentObject = true;
        c._i = input;
        c._f = format;
        c._l = lang;
        c._strict = strict;
        c._isUTC = false;
        c._pf = defaultParsingFlags();

        return makeMoment(c);
    };

    moment.suppressDeprecationWarnings = false;

    moment.createFromInputFallback = deprecate(
            "moment construction falls back to js Date. This is " +
            "discouraged and will be removed in upcoming major " +
            "release. Please refer to " +
            "https://github.com/moment/moment/issues/1407 for more info.",
            function (config) {
        config._d = new Date(config._i);
    });

    // creating with utc
    moment.utc = function (input, format, lang, strict) {
        var c;

        if (typeof(lang) === "boolean") {
            strict = lang;
            lang = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c = {};
        c._isAMomentObject = true;
        c._useUTC = true;
        c._isUTC = true;
        c._l = lang;
        c._i = input;
        c._f = format;
        c._strict = strict;
        c._pf = defaultParsingFlags();

        return makeMoment(c).utc();
    };

    // creating with unix timestamp (in seconds)
    moment.unix = function (input) {
        return moment(input * 1000);
    };

    // duration
    moment.duration = function (input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            parseIso;

        if (moment.isDuration(input)) {
            duration = {
                ms: input._milliseconds,
                d: input._days,
                M: input._months
            };
        } else if (typeof input === 'number') {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetTimeSpanJsonRegex.exec(input))) {
            sign = (match[1] === "-") ? -1 : 1;
            duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(match[MILLISECOND]) * sign
            };
        } else if (!!(match = isoDurationRegex.exec(input))) {
            sign = (match[1] === "-") ? -1 : 1;
            parseIso = function (inp) {
                // We'd normally use ~~inp for this, but unfortunately it also
                // converts floats to ints.
                // inp may be undefined, so careful calling replace on it.
                var res = inp && parseFloat(inp.replace(',', '.'));
                // apply sign while we're at it
                return (isNaN(res) ? 0 : res) * sign;
            };
            duration = {
                y: parseIso(match[2]),
                M: parseIso(match[3]),
                d: parseIso(match[4]),
                h: parseIso(match[5]),
                m: parseIso(match[6]),
                s: parseIso(match[7]),
                w: parseIso(match[8])
            };
        }

        ret = new Duration(duration);

        if (moment.isDuration(input) && input.hasOwnProperty('_lang')) {
            ret._lang = input._lang;
        }

        return ret;
    };

    // version number
    moment.version = VERSION;

    // default format
    moment.defaultFormat = isoFormat;

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    moment.momentProperties = momentProperties;

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    moment.updateOffset = function () {};

    // This function will load languages and then set the global language.  If
    // no arguments are passed in, it will simply return the current global
    // language key.
    moment.lang = function (key, values) {
        var r;
        if (!key) {
            return moment.fn._lang._abbr;
        }
        if (values) {
            loadLang(normalizeLanguage(key), values);
        } else if (values === null) {
            unloadLang(key);
            key = 'en';
        } else if (!languages[key]) {
            getLangDefinition(key);
        }
        r = moment.duration.fn._lang = moment.fn._lang = getLangDefinition(key);
        return r._abbr;
    };

    // returns language data
    moment.langData = function (key) {
        if (key && key._lang && key._lang._abbr) {
            key = key._lang._abbr;
        }
        return getLangDefinition(key);
    };

    // compare moment object
    moment.isMoment = function (obj) {
        return obj instanceof Moment ||
            (obj != null &&  obj.hasOwnProperty('_isAMomentObject'));
    };

    // for typechecking Duration objects
    moment.isDuration = function (obj) {
        return obj instanceof Duration;
    };

    for (i = lists.length - 1; i >= 0; --i) {
        makeList(lists[i]);
    }

    moment.normalizeUnits = function (units) {
        return normalizeUnits(units);
    };

    moment.invalid = function (flags) {
        var m = moment.utc(NaN);
        if (flags != null) {
            extend(m._pf, flags);
        }
        else {
            m._pf.userInvalidated = true;
        }

        return m;
    };

    moment.parseZone = function () {
        return moment.apply(null, arguments).parseZone();
    };

    moment.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    /************************************
        Moment Prototype
    ************************************/


    extend(moment.fn = Moment.prototype, {

        clone : function () {
            return moment(this);
        },

        valueOf : function () {
            return +this._d + ((this._offset || 0) * 60000);
        },

        unix : function () {
            return Math.floor(+this / 1000);
        },

        toString : function () {
            return this.clone().lang('en').format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
        },

        toDate : function () {
            return this._offset ? new Date(+this) : this._d;
        },

        toISOString : function () {
            var m = moment(this).utc();
            if (0 < m.year() && m.year() <= 9999) {
                return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
            } else {
                return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
            }
        },

        toArray : function () {
            var m = this;
            return [
                m.year(),
                m.month(),
                m.date(),
                m.hours(),
                m.minutes(),
                m.seconds(),
                m.milliseconds()
            ];
        },

        isValid : function () {
            return isValid(this);
        },

        isDSTShifted : function () {

            if (this._a) {
                return this.isValid() && compareArrays(this._a, (this._isUTC ? moment.utc(this._a) : moment(this._a)).toArray()) > 0;
            }

            return false;
        },

        parsingFlags : function () {
            return extend({}, this._pf);
        },

        invalidAt: function () {
            return this._pf.overflow;
        },

        utc : function () {
            return this.zone(0);
        },

        local : function () {
            this.zone(0);
            this._isUTC = false;
            return this;
        },

        format : function (inputString) {
            var output = formatMoment(this, inputString || moment.defaultFormat);
            return this.lang().postformat(output);
        },

        add : function (input, val) {
            var dur;
            // switch args to support add('s', 1) and add(1, 's')
            if (typeof input === 'string') {
                dur = moment.duration(+val, input);
            } else {
                dur = moment.duration(input, val);
            }
            addOrSubtractDurationFromMoment(this, dur, 1);
            return this;
        },

        subtract : function (input, val) {
            var dur;
            // switch args to support subtract('s', 1) and subtract(1, 's')
            if (typeof input === 'string') {
                dur = moment.duration(+val, input);
            } else {
                dur = moment.duration(input, val);
            }
            addOrSubtractDurationFromMoment(this, dur, -1);
            return this;
        },

        diff : function (input, units, asFloat) {
            var that = makeAs(input, this),
                zoneDiff = (this.zone() - that.zone()) * 6e4,
                diff, output;

            units = normalizeUnits(units);

            if (units === 'year' || units === 'month') {
                // average number of days in the months in the given dates
                diff = (this.daysInMonth() + that.daysInMonth()) * 432e5; // 24 * 60 * 60 * 1000 / 2
                // difference in months
                output = ((this.year() - that.year()) * 12) + (this.month() - that.month());
                // adjust by taking difference in days, average number of days
                // and dst in the given months.
                output += ((this - moment(this).startOf('month')) -
                        (that - moment(that).startOf('month'))) / diff;
                // same as above but with zones, to negate all dst
                output -= ((this.zone() - moment(this).startOf('month').zone()) -
                        (that.zone() - moment(that).startOf('month').zone())) * 6e4 / diff;
                if (units === 'year') {
                    output = output / 12;
                }
            } else {
                diff = (this - that);
                output = units === 'second' ? diff / 1e3 : // 1000
                    units === 'minute' ? diff / 6e4 : // 1000 * 60
                    units === 'hour' ? diff / 36e5 : // 1000 * 60 * 60
                    units === 'day' ? (diff - zoneDiff) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
                    units === 'week' ? (diff - zoneDiff) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
                    diff;
            }
            return asFloat ? output : absRound(output);
        },

        from : function (time, withoutSuffix) {
            return moment.duration(this.diff(time)).lang(this.lang()._abbr).humanize(!withoutSuffix);
        },

        fromNow : function (withoutSuffix) {
            return this.from(moment(), withoutSuffix);
        },

        calendar : function () {
            // We want to compare the start of today, vs this.
            // Getting start-of-today depends on whether we're zone'd or not.
            var sod = makeAs(moment(), this).startOf('day'),
                diff = this.diff(sod, 'days', true),
                format = diff < -6 ? 'sameElse' :
                    diff < -1 ? 'lastWeek' :
                    diff < 0 ? 'lastDay' :
                    diff < 1 ? 'sameDay' :
                    diff < 2 ? 'nextDay' :
                    diff < 7 ? 'nextWeek' : 'sameElse';
            return this.format(this.lang().calendar(format, this));
        },

        isLeapYear : function () {
            return isLeapYear(this.year());
        },

        isDST : function () {
            return (this.zone() < this.clone().month(0).zone() ||
                this.zone() < this.clone().month(5).zone());
        },

        day : function (input) {
            var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            if (input != null) {
                input = parseWeekday(input, this.lang());
                return this.add({ d : input - day });
            } else {
                return day;
            }
        },

        month : makeAccessor('Month', true),

        startOf: function (units) {
            units = normalizeUnits(units);
            // the following switch intentionally omits break keywords
            // to utilize falling through the cases.
            switch (units) {
            case 'year':
                this.month(0);
                /* falls through */
            case 'quarter':
            case 'month':
                this.date(1);
                /* falls through */
            case 'week':
            case 'isoWeek':
            case 'day':
                this.hours(0);
                /* falls through */
            case 'hour':
                this.minutes(0);
                /* falls through */
            case 'minute':
                this.seconds(0);
                /* falls through */
            case 'second':
                this.milliseconds(0);
                /* falls through */
            }

            // weeks are a special case
            if (units === 'week') {
                this.weekday(0);
            } else if (units === 'isoWeek') {
                this.isoWeekday(1);
            }

            // quarters are also special
            if (units === 'quarter') {
                this.month(Math.floor(this.month() / 3) * 3);
            }

            return this;
        },

        endOf: function (units) {
            units = normalizeUnits(units);
            return this.startOf(units).add((units === 'isoWeek' ? 'week' : units), 1).subtract('ms', 1);
        },

        isAfter: function (input, units) {
            units = typeof units !== 'undefined' ? units : 'millisecond';
            return +this.clone().startOf(units) > +moment(input).startOf(units);
        },

        isBefore: function (input, units) {
            units = typeof units !== 'undefined' ? units : 'millisecond';
            return +this.clone().startOf(units) < +moment(input).startOf(units);
        },

        isSame: function (input, units) {
            units = units || 'ms';
            return +this.clone().startOf(units) === +makeAs(input, this).startOf(units);
        },

        min: function (other) {
            other = moment.apply(null, arguments);
            return other < this ? this : other;
        },

        max: function (other) {
            other = moment.apply(null, arguments);
            return other > this ? this : other;
        },

        // keepTime = true means only change the timezone, without affecting
        // the local hour. So 5:31:26 +0300 --[zone(2, true)]--> 5:31:26 +0200
        // It is possible that 5:31:26 doesn't exist int zone +0200, so we
        // adjust the time as needed, to be valid.
        //
        // Keeping the time actually adds/subtracts (one hour)
        // from the actual represented time. That is why we call updateOffset
        // a second time. In case it wants us to change the offset again
        // _changeInProgress == true case, then we have to adjust, because
        // there is no such time in the given timezone.
        zone : function (input, keepTime) {
            var offset = this._offset || 0;
            if (input != null) {
                if (typeof input === "string") {
                    input = timezoneMinutesFromString(input);
                }
                if (Math.abs(input) < 16) {
                    input = input * 60;
                }
                this._offset = input;
                this._isUTC = true;
                if (offset !== input) {
                    if (!keepTime || this._changeInProgress) {
                        addOrSubtractDurationFromMoment(this,
                                moment.duration(offset - input, 'm'), 1, false);
                    } else if (!this._changeInProgress) {
                        this._changeInProgress = true;
                        moment.updateOffset(this, true);
                        this._changeInProgress = null;
                    }
                }
            } else {
                return this._isUTC ? offset : this._d.getTimezoneOffset();
            }
            return this;
        },

        zoneAbbr : function () {
            return this._isUTC ? "UTC" : "";
        },

        zoneName : function () {
            return this._isUTC ? "Coordinated Universal Time" : "";
        },

        parseZone : function () {
            if (this._tzm) {
                this.zone(this._tzm);
            } else if (typeof this._i === 'string') {
                this.zone(this._i);
            }
            return this;
        },

        hasAlignedHourOffset : function (input) {
            if (!input) {
                input = 0;
            }
            else {
                input = moment(input).zone();
            }

            return (this.zone() - input) % 60 === 0;
        },

        daysInMonth : function () {
            return daysInMonth(this.year(), this.month());
        },

        dayOfYear : function (input) {
            var dayOfYear = round((moment(this).startOf('day') - moment(this).startOf('year')) / 864e5) + 1;
            return input == null ? dayOfYear : this.add("d", (input - dayOfYear));
        },

        quarter : function (input) {
            return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
        },

        weekYear : function (input) {
            var year = weekOfYear(this, this.lang()._week.dow, this.lang()._week.doy).year;
            return input == null ? year : this.add("y", (input - year));
        },

        isoWeekYear : function (input) {
            var year = weekOfYear(this, 1, 4).year;
            return input == null ? year : this.add("y", (input - year));
        },

        week : function (input) {
            var week = this.lang().week(this);
            return input == null ? week : this.add("d", (input - week) * 7);
        },

        isoWeek : function (input) {
            var week = weekOfYear(this, 1, 4).week;
            return input == null ? week : this.add("d", (input - week) * 7);
        },

        weekday : function (input) {
            var weekday = (this.day() + 7 - this.lang()._week.dow) % 7;
            return input == null ? weekday : this.add("d", input - weekday);
        },

        isoWeekday : function (input) {
            // behaves the same as moment#day except
            // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
            // as a setter, sunday should belong to the previous week.
            return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
        },

        isoWeeksInYear : function () {
            return weeksInYear(this.year(), 1, 4);
        },

        weeksInYear : function () {
            var weekInfo = this._lang._week;
            return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
        },

        get : function (units) {
            units = normalizeUnits(units);
            return this[units]();
        },

        set : function (units, value) {
            units = normalizeUnits(units);
            if (typeof this[units] === 'function') {
                this[units](value);
            }
            return this;
        },

        // If passed a language key, it will set the language for this
        // instance.  Otherwise, it will return the language configuration
        // variables for this instance.
        lang : function (key) {
            if (key === undefined) {
                return this._lang;
            } else {
                this._lang = getLangDefinition(key);
                return this;
            }
        }
    });

    function rawMonthSetter(mom, value) {
        var dayOfMonth;

        // TODO: Move this out of here!
        if (typeof value === 'string') {
            value = mom.lang().monthsParse(value);
            // TODO: Another silent failure?
            if (typeof value !== 'number') {
                return mom;
            }
        }

        dayOfMonth = Math.min(mom.date(),
                daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function rawGetter(mom, unit) {
        return mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]();
    }

    function rawSetter(mom, unit, value) {
        if (unit === 'Month') {
            return rawMonthSetter(mom, value);
        } else {
            return mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
    }

    function makeAccessor(unit, keepTime) {
        return function (value) {
            if (value != null) {
                rawSetter(this, unit, value);
                moment.updateOffset(this, keepTime);
                return this;
            } else {
                return rawGetter(this, unit);
            }
        };
    }

    moment.fn.millisecond = moment.fn.milliseconds = makeAccessor('Milliseconds', false);
    moment.fn.second = moment.fn.seconds = makeAccessor('Seconds', false);
    moment.fn.minute = moment.fn.minutes = makeAccessor('Minutes', false);
    // Setting the hour should keep the time, because the user explicitly
    // specified which hour he wants. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    moment.fn.hour = moment.fn.hours = makeAccessor('Hours', true);
    // moment.fn.month is defined separately
    moment.fn.date = makeAccessor('Date', true);
    moment.fn.dates = deprecate("dates accessor is deprecated. Use date instead.", makeAccessor('Date', true));
    moment.fn.year = makeAccessor('FullYear', true);
    moment.fn.years = deprecate("years accessor is deprecated. Use year instead.", makeAccessor('FullYear', true));

    // add plural methods
    moment.fn.days = moment.fn.day;
    moment.fn.months = moment.fn.month;
    moment.fn.weeks = moment.fn.week;
    moment.fn.isoWeeks = moment.fn.isoWeek;
    moment.fn.quarters = moment.fn.quarter;

    // add aliased format methods
    moment.fn.toJSON = moment.fn.toISOString;

    /************************************
        Duration Prototype
    ************************************/


    extend(moment.duration.fn = Duration.prototype, {

        _bubble : function () {
            var milliseconds = this._milliseconds,
                days = this._days,
                months = this._months,
                data = this._data,
                seconds, minutes, hours, years;

            // The following code bubbles up values, see the tests for
            // examples of what that means.
            data.milliseconds = milliseconds % 1000;

            seconds = absRound(milliseconds / 1000);
            data.seconds = seconds % 60;

            minutes = absRound(seconds / 60);
            data.minutes = minutes % 60;

            hours = absRound(minutes / 60);
            data.hours = hours % 24;

            days += absRound(hours / 24);
            data.days = days % 30;

            months += absRound(days / 30);
            data.months = months % 12;

            years = absRound(months / 12);
            data.years = years;
        },

        weeks : function () {
            return absRound(this.days() / 7);
        },

        valueOf : function () {
            return this._milliseconds +
              this._days * 864e5 +
              (this._months % 12) * 2592e6 +
              toInt(this._months / 12) * 31536e6;
        },

        humanize : function (withSuffix) {
            var difference = +this,
                output = relativeTime(difference, !withSuffix, this.lang());

            if (withSuffix) {
                output = this.lang().pastFuture(difference, output);
            }

            return this.lang().postformat(output);
        },

        add : function (input, val) {
            // supports only 2.0-style add(1, 's') or add(moment)
            var dur = moment.duration(input, val);

            this._milliseconds += dur._milliseconds;
            this._days += dur._days;
            this._months += dur._months;

            this._bubble();

            return this;
        },

        subtract : function (input, val) {
            var dur = moment.duration(input, val);

            this._milliseconds -= dur._milliseconds;
            this._days -= dur._days;
            this._months -= dur._months;

            this._bubble();

            return this;
        },

        get : function (units) {
            units = normalizeUnits(units);
            return this[units.toLowerCase() + 's']();
        },

        as : function (units) {
            units = normalizeUnits(units);
            return this['as' + units.charAt(0).toUpperCase() + units.slice(1) + 's']();
        },

        lang : moment.fn.lang,

        toIsoString : function () {
            // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
            var years = Math.abs(this.years()),
                months = Math.abs(this.months()),
                days = Math.abs(this.days()),
                hours = Math.abs(this.hours()),
                minutes = Math.abs(this.minutes()),
                seconds = Math.abs(this.seconds() + this.milliseconds() / 1000);

            if (!this.asSeconds()) {
                // this is the same as C#'s (Noda) and python (isodate)...
                // but not other JS (goog.date)
                return 'P0D';
            }

            return (this.asSeconds() < 0 ? '-' : '') +
                'P' +
                (years ? years + 'Y' : '') +
                (months ? months + 'M' : '') +
                (days ? days + 'D' : '') +
                ((hours || minutes || seconds) ? 'T' : '') +
                (hours ? hours + 'H' : '') +
                (minutes ? minutes + 'M' : '') +
                (seconds ? seconds + 'S' : '');
        }
    });

    function makeDurationGetter(name) {
        moment.duration.fn[name] = function () {
            return this._data[name];
        };
    }

    function makeDurationAsGetter(name, factor) {
        moment.duration.fn['as' + name] = function () {
            return +this / factor;
        };
    }

    for (i in unitMillisecondFactors) {
        if (unitMillisecondFactors.hasOwnProperty(i)) {
            makeDurationAsGetter(i, unitMillisecondFactors[i]);
            makeDurationGetter(i.toLowerCase());
        }
    }

    makeDurationAsGetter('Weeks', 6048e5);
    moment.duration.fn.asMonths = function () {
        return (+this - this.years() * 31536e6) / 2592e6 + this.years() * 12;
    };


    /************************************
        Default Lang
    ************************************/


    // Set default language, other languages will inherit from English.
    moment.lang('en', {
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });




// moment.js language configuration
// language : brazilian portuguese (pt-br)
// author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira

(function (factory) {
    factory(moment);
}(function (moment) {
    return moment.lang('pt-br', {
        months : "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
        monthsShort : "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
        weekdays : "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),
        weekdaysShort : "dom_seg_ter_qua_qui_sex_sáb".split("_"),
        weekdaysMin : "dom_2ª_3ª_4ª_5ª_6ª_sáb".split("_"),
        longDateFormat : {
            LT : "HH:mm",
            L : "DD/MM/YYYY",
            LL : "D [de] MMMM [de] YYYY",
            LLL : "D [de] MMMM [de] YYYY [às] LT",
            LLLL : "dddd, D [de] MMMM [de] YYYY [às] LT"
        },
        calendar : {
            sameDay: '[hoje às] LT',
            nextDay: '[amanhã às] LT',
            nextWeek: 'dddd [às] LT',
            lastDay: '[ontem às] LT',
            lastWeek: function () {
                return (this.day() === 0 || this.day() === 6) ?
                    '[último] dddd [às] LT' : // Saturday + Sunday
                    '[última] dddd [às] LT'; // Monday - Friday
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : "em %s",
            past : "%s atrás",
            s : "segundos",
            m : "um minuto",
            mm : "%d minutos",
            h : "uma hora",
            hh : "%d horas",
            d : "um dia",
            dd : "%d dias",
            M : "um mês",
            MM : "%d meses",
            y : "um ano",
            yy : "%d anos"
        },
        ordinal : '%dº'
    });
}));



    moment.lang('en');


    /************************************
        Exposing Moment
    ************************************/

    function makeGlobal(shouldDeprecate) {
        /*global ender:false */
        if (typeof ender !== 'undefined') {
            return;
        }
        oldGlobalMoment = globalScope.moment;
        if (shouldDeprecate) {
            globalScope.moment = deprecate(
                    "Accessing Moment through the global scope is " +
                    "deprecated, and will be removed in an upcoming " +
                    "release.",
                    moment);
        } else {
            globalScope.moment = moment;
        }
    }

    // CommonJS module is defined
    if (hasModule) {
        module.exports = moment;
    } else if (typeof define === "function" && define.amd) {
        define("moment", function (require, exports, module) {
            if (module.config && module.config() && module.config().noGlobal === true) {
                // release the global variable
                globalScope.moment = oldGlobalMoment;
            }

            return moment;
        });
        makeGlobal(true);
    } else {
        makeGlobal();
    }
}).call(this);
(function() {
  this.scPageSystem = {
    init: function() {
      this.timeOfUpdatedCurrentDateTime = scPageSystem.timezone["new"]();
      return this.timezone.helpers.serverOffset.recalc();
    },
    updatePageSettingsFromServer: function(url, onComplete) {
      var paramsUrl;
      paramsUrl = baseUrlSystem.getParamsFromUrlBaseUrlSystem(url);
      url = "/get_body_settings";
      if (scPageSystem.reqGetBodySettings) {
        scPageSystem.reqGetBodySettings.abort();
      }
      return scPageSystem.reqGetBodySettings = $.ajax({
        type: "GET",
        dataType: "json",
        data: paramsUrl,
        url: url,
        success: function(data) {
          scPageSystem.timezone.updateBodySettings(data.timezone_settings);
          scPageSystem.cliente.updateBodySettings(data.cliente_settings);
          if (onComplete) {
            return onComplete();
          }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
          if (textStatus !== "abort") {
            return alert("Erro ao carregar fuso horário");
          }
        }
      });
    },
    cliente: {
      updateBodySettings: function(settings) {
        if (settings) {
          return $("body").attr("data-current_cliente", JSON.stringify(settings));
        } else {
          return $("body").removeAttr("data-current_cliente");
        }
      }
    },
    timezone: {
      "new": function() {
        var regexYYYY_MM_DD, sumOneHour, __newDateArgs;
        __newDateArgs = function(a1, a2, a3, a4, a5, a6, a7) {
          switch (arguments.length) {
            case 2:
              return new Date(a1, a2);
            case 3:
              return new Date(a1, a2, a3);
            case 4:
              return new Date(a1, a2, a3, a4);
            case 5:
              return new Date(a1, a2, a3, a4, a5);
            case 6:
              return new Date(a1, a2, a3, a4, a5, a6);
            case 7:
              return new Date(a1, a2, a3, a4, a5, a6, a7);
          }
        };
        if (arguments.length === 0) {
          return new Date();
        } else {
          if (arguments.length === 1) {
            regexYYYY_MM_DD = /^[0-9]{4}-([1-9]|0[1-9]|1[0-2])-([0-9]|0[1-9]|[1-2][0-9]|3[0-1])$/;
            if (arguments[0].match(regexYYYY_MM_DD)) {
              sumOneHour = arguments[0] + " 1";
              return new Date(sumOneHour);
            } else {
              return new Date(arguments[0]);
            }
          }
          if (arguments.length === 3) {
            [].push.call(arguments, 1);
            return __newDateArgs.apply(null, arguments);
          } else {
            return __newDateArgs.apply(null, arguments);
          }
        }
      },
      now: {
        format: function(myFormat) {
          var now;
          if (!myFormat) {
            alert("Give me a format like 'DD/MM/YYYY HH:mm:ss' or 'YYYY-MM-DD HH:mm:ss' or 'iso'");
            return null;
          }
          if (myFormat === "iso" || myFormat === "iso8601") {
            return this.iso8601();
          } else {
            now = scTimezone.helpers.calcNowIgnoringOffsetBrowser();
            return moment(now).format(myFormat);
          }
        },
        iso8601: function() {
          return this.format(scTimezone.serverISOFormat());
        },
        iso: function() {
          return this.iso8601();
        },
        toISODate: function() {
          return scPageSystem.timezone["new"](this.iso());
        }
      },
      serverISOFormat: function() {
        this.helpers.serverOffset.recalc();
        return "YYYY-MM-DDTHH:mm:ss" + this.helpers.serverOffset.string;
      },
      local: function(isoDate, _format) {
        var data;
        if (isoDate instanceof Date) {
          isoDate = moment(isoDate).format(this.serverISOFormat());
        }
        data = moment(isoDate, 'YYYY-MM-DDTHH:mm:ss');
        if (!data.isValid()) {
          return null;
        }
        if (_format != null) {
          return data.format(_format);
        } else {
          return data.toDate();
        }
      },
      server: function(isoDate, _format) {
        var data;
        if (isoDate instanceof Date) {
          isoDate = moment(isoDate).format(this.serverISOFormat());
        }
        data = moment(this.local(isoDate, this.serverISOFormat()));
        if (_format != null) {
          return data.format(_format);
        } else {
          return data.toDate();
        }
      },
      fromString: function(isoDate, ignoreTimezone) {
        if (ignoreTimezone == null) {
          ignoreTimezone = true;
        }
        return moment(isoDate, "YYYY-MM-DDTHH:mm:ss").toDate();
      },
      updateBodySettings: function(settings) {
        $("body").attr("data-utc-time-now", settings.utc_time_now);
        $("body").attr("data-offset-from-utc", settings.offset_from_utc);
        scPageSystem.timeOfUpdatedCurrentDateTime = scPageSystem.timezone["new"]();
        return this.helpers.serverOffset.recalc(settings.offset_from_utc);
      },
      helpers: {
        serverOffset: {
          amount: 0,
          hours: 0,
          minutes: 0,
          string: null,
          recalc: function(offset_from_utc) {
            var duration, hours, sign, _ref;
            this.amount = +(offset_from_utc != null ? offset_from_utc : $("body").attr("data-offset-from-utc"));
            duration = moment.duration(this.amount, 'seconds');
            this.hours = duration.hours();
            this.minutes = duration.minutes();
            if (this.minutes < 0) {
              this.minutes = -this.minutes;
            }
            _ref = this.hours > 0 ? ["+", this.hours] : ["-", -this.hours], sign = _ref[0], hours = _ref[1];
            this.string = "" + sign + (pad(hours, 2)) + ":00";
          }
        },
        offsetFromServer: function() {
          return this.serverOffset.amount;
        },
        calcNowIgnoringOffsetBrowser: function() {
          var nowBrowser, offsetBrowser, offsetFromUtc, timeDiffCountedBrowser, utcTimeServer;
          nowBrowser = scPageSystem.timezone["new"]();
          offsetBrowser = nowBrowser.getTimezoneOffset();
          timeDiffCountedBrowser = nowBrowser - scPageSystem.timeOfUpdatedCurrentDateTime;
          utcTimeServer = $("body").attr("data-utc-time-now");
          offsetFromUtc = $("body").attr("data-offset-from-utc");
          return scPageSystem.timezone["new"](utcTimeServer).addSeconds(offsetFromUtc).addMilliseconds(timeDiffCountedBrowser).addMinutes(offsetBrowser);
        }
      }
    }
  };

  this.scTimezone = scPageSystem.timezone;

  scPageSystem.init();

}).call(this);
(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  this.Array.prototype.first = function() {
    return this[0];
  };

  this.Array.prototype.last = function() {
    return this.slice(-1)[0];
  };

  this.Array.prototype.inArray = function(e) {
    return __indexOf.call(this, e) >= 0;
  };

  this.Array.prototype.any = function(id) {
    return this.length > 0;
  };

  this.Array.prototype.many = function(id) {
    return this.length > 1;
  };

  this.Array.prototype.empty = function(id) {
    return !this.any();
  };

  Array.prototype.find = function(value, field) {
    return this[this.index(value, field)];
  };

  Array.prototype.index = function(value, field) {
    return this.transform(field).indexOf(value);
  };

  Array.prototype.transform = function(field, clone) {
    if (clone == null) {
      clone = false;
    }
    if (field != null) {
      return this.map(function(e) {
        return e[field];
      });
    } else if (clone) {
      return this.clone();
    } else {
      return this;
    }
  };

  this.Array.prototype.indexOfById = function(id) {
    var el, idx, _i, _len;
    for (idx = _i = 0, _len = this.length; _i < _len; idx = ++_i) {
      el = this[idx];
      if (el.id === id) {
        return idx;
      }
    }
    return -1;
  };

  this.Array.prototype.getById = function(id) {
    if (id instanceof Array) {
      return id.map((function(_this) {
        return function(_id) {
          return _this.getById(_id);
        };
      })(this));
    } else {
      return this[this.indexOfById(id)];
    }
  };

  this.Array.prototype.remove = function(el) {
    var idx;
    idx = this.indexOf(el);
    if (idx > -1) {
      return this.splice(idx, 1);
    }
  };

  this.Array.prototype.removeAll = function(el) {
    var _results;
    _results = [];
    while (__indexOf.call(this, el) >= 0) {
      _results.push(this.remove(el));
    }
    return _results;
  };

  this.Array.prototype.removeById = function(id) {
    return this.removeByField('id', id);
  };

  this.Array.prototype.getIndexByField = function(field, value) {
    var el, i, idx, _i, _len;
    if (field === void 0) {
      field = 'id';
    }
    idx = null;
    for (i = _i = 0, _len = this.length; _i < _len; i = ++_i) {
      el = this[i];
      if (el[field] === value) {
        idx = i;
      }
    }
    return idx;
  };

  this.Array.prototype.removeByField = function(field, value) {
    var el, i, idx, _i, _len, _results;
    if (field === void 0) {
      field = 'id';
    }
    idx = [];
    for (i = _i = 0, _len = this.length; _i < _len; i = ++_i) {
      el = this[i];
      if (el[field] === value) {
        idx.push(i);
      }
    }
    _results = [];
    while (idx.length > 0) {
      _results.push((this.splice(idx.pop(), 1))[0]);
    }
    return _results;
  };

  this.Array.prototype.extractFrom = function(deepObject) {
    var _attr, _carry, _i, _len;
    _carry = deepObject;
    for (_i = 0, _len = this.length; _i < _len; _i++) {
      _attr = this[_i];
      _carry = _carry != null ? _carry[_attr] : void 0;
    }
    return _carry;
  };

  this.Array.prototype.addOrExtend = function(obj) {
    var idx;
    idx = obj.id != null ? this.indexOfById(obj.id) : this.indexOf(obj);
    if (idx === -1) {
      return this.push(obj);
    } else {
      return angular.extend(this[idx], obj);
    }
  };

  this.Array.prototype.somar = function(field) {
    var _arr;
    _arr = field ? this.map(function(e) {
      return e[field];
    }) : this;
    return _arr.reduce(function(mem, el) {
      return +mem + +el;
    });
  };

  this.Array.prototype.chunk = function(size) {
    var aux, chunks, idx, item, _i, _len;
    chunks = [];
    aux = [];
    for (idx = _i = 0, _len = this.length; _i < _len; idx = ++_i) {
      item = this[idx];
      aux.push(item);
      if ((idx + 1) % size === 0) {
        chunks.push(aux);
        aux = [];
      }
    }
    if (aux.length) {
      chunks.push(aux);
    }
    return chunks;
  };

  this.Array.prototype.diffById = function(arr) {
    var result;
    result = this.map(function(item) {
      if (arr.indexOfById(item.id) < 0) {
        return item;
      }
    });
    result.removeAll(void 0);
    return result;
  };

}).call(this);
(function() {
  this.Date.prototype.addMilliseconds = function(value) {
    this.setMilliseconds(this.getMilliseconds() + value);
    return this;
  };

  this.Date.prototype.addSeconds = function(value) {
    return this.addMilliseconds(value * 1000);
  };

  this.Date.prototype.addMinutes = function(value) {
    return this.addMilliseconds(value * 60000);
  };

  this.Date.prototype.addHours = function(value) {
    return this.addMilliseconds(value * 3600000);
  };

  this.Date.prototype.addDays = function(value) {
    return this.addMilliseconds(value * 86400000);
  };

  this.Date.prototype.addWeeks = function(value) {
    return this.addMilliseconds(value * 604800000);
  };

  this.Date.prototype.addMonths = function(value) {
    var n;
    n = this.getDate();
    this.setDate(1);
    this.setMonth(this.getMonth() + value);
    this.setDate(Math.min(n, this.getDaysInMonth()));
    return this;
  };

  this.Date.prototype.addYears = function(value) {
    return this.addMonths(value * 12);
  };

}).call(this);
(function() {
  if (!Object.keys) {
    console.warn("Esse navegador não implementou a função Object.keys(myObj). Podem ocasionar Bugs. Discuta com a equipe qual ação deve ser tomada.");
    Object.keys = function(obj) {
      var prop, _results;
      _results = [];
      for (prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          _results.push(prop);
        }
      }
      return _results;
    };
  }

  if (!Object.values) {
    Object.values = function(obj) {
      return Object.keys(obj).map(function(key) {
        return obj[key];
      });
    };
  } else {
    console.warn("Esse navegador implementou a função Object.values(myObj), e está sobrescrevendo a que foi implementada manualmente nesse sistema. Podem ocasionar Bugs. Discuta com a equipe qual ação deve ser tomada.");
  }

}).call(this);
(function() {
  var __slice = [].slice,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  this.ScParser = function(obj) {
    this.obj = obj;
  };

  this.ScParser.prototype.except = function() {
    var atributo, attributes, temp, valor, _ref;
    attributes = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    attributes = attributes.flatten();
    temp = {};
    _ref = this.obj;
    for (atributo in _ref) {
      valor = _ref[atributo];
      if (__indexOf.call(attributes, atributo) < 0) {
        temp[atributo] = valor;
      }
    }
    return temp;
  };

  this.ScParser.prototype.only = function() {
    var attr, attributes, temp, _i, _len;
    attributes = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    attributes = attributes.flatten();
    temp = {};
    for (_i = 0, _len = attributes.length; _i < _len; _i++) {
      attr = attributes[_i];
      if (this.obj.hasOwnProperty(attr)) {
        temp[attr] = this.obj[attr];
      }
    }
    return temp;
  };

}).call(this);
(function() {
  this.String.prototype.camelCaseToHyphen = function() {
    return this.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  };

  this.String.prototype.toPascalCase = function() {
    var arr, i, l;
    arr = this.split(/\s|_/);
    i = 0;
    l = arr.length;
    while (i < l) {
      arr[i] = arr[i].substr(0, 1).toUpperCase() + (arr[i].length > 1 ? arr[i].substr(1).toLowerCase() : "");
      i++;
    }
    return arr.join("");
  };

  this.String.prototype.extractFrom = function(deepObject) {
    return this.split('.').extractFrom(deepObject);
  };

  this.String.prototype.onlyNumbers = function() {
    return this.replace(/[^0-9]/g, "");
  };

  this.String.prototype.contentTypeIsImage = function() {
    return !!this.match(/image\//);
  };

  this.String.prototype.toSlug = function() {
    return _deaccent(this).replace(/\s+/g, '-').replace(/[^a-zA-Z0-9\-]/g, '').toLowerCase().replace(/\-{2,}/g, '-');
  };

}).call(this);
/*
 AngularJS v1.3.0-rc.1
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/

(function(t,Y,s){'use strict';function K(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.3.0-rc.1/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Na(b){if(null==b||Oa(b))return!1;var a=b.length;return 1===b.nodeType&&
a?!0:C(b)||L(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function r(b,a,c){var d,e;if(b)if(D(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(L(b)||Na(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==r)b.forEach(a,c,b);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d,b);return b}function Zb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}
function od(b,a,c){for(var d=Zb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function $b(b){return function(a,c){b(c,a)}}function pd(){return++bb}function ac(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function E(b){for(var a=b.$$hashKey,c=1,d=arguments.length;c<d;c++){var e=arguments[c];if(e)for(var f=Object.keys(e),g=0,h=f.length;g<h;g++){var m=f[g];b[m]=e[m]}}ac(b,a);return b}function U(b){return parseInt(b,10)}function bc(b,a){return E(new (E(function(){},{prototype:b})),a)}function w(){}
function Pa(b){return b}function da(b){return function(){return b}}function F(b){return"undefined"===typeof b}function B(b){return"undefined"!==typeof b}function S(b){return null!==b&&"object"===typeof b}function C(b){return"string"===typeof b}function ea(b){return"number"===typeof b}function fa(b){return"[object Date]"===Ga.call(b)}function D(b){return"function"===typeof b}function cb(b){return"[object RegExp]"===Ga.call(b)}function Oa(b){return b&&b.window===b}function Qa(b){return b&&b.$evalAsync&&
b.$watch}function qd(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function rd(b){var a={};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function pa(b){return P(b.nodeName||b[0].nodeName)}function sd(b,a,c){var d=[];r(b,function(b,f,g){d.push(a.call(c,b,f,g))});return d}function Ra(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return a}function Ha(b,a,c,d){if(Oa(b)||Qa(b))throw Sa("cpws");if(a){if(b===a)throw Sa("cpi");c=c||[];d=d||[];if(S(b)){var e=c.indexOf(b);if(-1!==e)return d[e];
c.push(b);d.push(a)}if(L(b))for(var f=a.length=0;f<b.length;f++)e=Ha(b[f],null,c,d),S(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);else{var g=a.$$hashKey;L(a)?a.length=0:r(a,function(c,b){delete a[b]});for(f in b)b.hasOwnProperty(f)&&(e=Ha(b[f],null,c,d),S(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e);ac(a,g)}}else if(a=b)L(b)?a=Ha(b,[],c,d):fa(b)?a=new Date(b.getTime()):cb(b)?(a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):S(b)&&(e=Object.create(Object.getPrototypeOf(b)),
a=Ha(b,e,c,d));return a}function qa(b,a){if(L(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(S(b))for(c in a=a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=b[c];return a||b}function ra(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(L(b)){if(!L(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ra(b[d],a[d]))return!1;return!0}}else{if(fa(b))return fa(a)?ra(b.getTime(),a.getTime()):!1;if(cb(b)&&
cb(a))return b.toString()==a.toString();if(Qa(b)||Qa(a)||Oa(b)||Oa(a)||L(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!D(b[d])){if(!ra(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==s&&!D(a[d]))return!1;return!0}return!1}function db(b,a,c){return b.concat(Ta.call(a,c))}function cc(b,a){var c=2<arguments.length?Ta.call(arguments,2):[];return!D(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(Ta.call(arguments,0))):
a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function td(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?c=s:Oa(a)?c="$WINDOW":a&&Y===a?c="$DOCUMENT":Qa(a)&&(c="$SCOPE");return c}function sa(b,a){return"undefined"===typeof b?s:JSON.stringify(b,td,a?"  ":null)}function dc(b){return C(b)?JSON.parse(b):b}function ta(b){b=G(b).clone();try{b.empty()}catch(a){}var c=G("<div>").append(b).html();try{return 3===b[0].nodeType?P(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,
function(a,c){return"<"+P(c)})}catch(d){return P(c)}}function ec(b){try{return decodeURIComponent(b)}catch(a){}}function fc(b){var a={},c,d;r((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=ec(c[0]),B(d)&&(b=B(c[1])?ec(c[1]):!0,Ab.call(a,d)?L(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Bb(b){var a=[];r(b,function(b,d){L(b)?r(b,function(b){a.push(Da(d,!0)+(!0===b?"":"="+Da(b,!0)))}):a.push(Da(d,!0)+(!0===b?"":"="+Da(b,!0)))});return a.length?a.join("&"):""}
function eb(b){return Da(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Da(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function ud(b,a){var c,d,e=fb.length;b=G(b);for(d=0;d<e;++d)if(c=fb[d]+a,C(c=b.attr(c)))return c;return null}function vd(b,a){var c,d,e={};r(fb,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});
r(fb,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==ud(c,"strict-di"),a(c,d?[d]:[],e))}function gc(b,a,c){S(c)||(c={});c=E({strictDi:!1},c);var d=function(){b=G(b);if(b.injector()){var d=b[0]===Y?"document":ta(b);throw Sa("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);
a.unshift("ng");d=Cb(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return d},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;t&&e.test(t.name)&&(c.debugInfoEnabled=!0,t.name=t.name.replace(e,""));if(t&&!f.test(t.name))return d();t.name=t.name.replace(f,"");Ea.resumeBootstrap=function(b){r(b,function(b){a.push(b)});d()}}function wd(){t.name="NG_ENABLE_DEBUG_INFO!"+t.name;t.location.reload()}function xd(b){return Ea.element(b).injector().get("$$testability")}
function Db(b,a){a=a||"_";return b.replace(yd,function(b,d){return(d?a:"")+b.toLowerCase()})}function zd(){var b;hc||((la=t.jQuery)&&la.fn.on?(G=la,E(la.fn,{scope:Ia.scope,isolateScope:Ia.isolateScope,controller:Ia.controller,injector:Ia.injector,inheritedData:Ia.inheritedData}),b=la.cleanData,la.cleanData=function(a){var c;if(Eb)Eb=!1;else for(var d=0,e;null!=(e=a[d]);d++)(c=la._data(e,"events"))&&c.$destroy&&la(e).triggerHandler("$destroy");b(a)}):G=V,Ea.element=G,hc=!0)}function Fb(b,a,c){if(!b)throw Sa("areq",
a||"?",c||"required");return b}function gb(b,a,c){c&&L(b)&&(b=b[b.length-1]);Fb(D(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Ja(b,a){if("hasOwnProperty"===b)throw Sa("badname",a);}function ic(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&D(b)?cc(e,b):b}function hb(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return G(c)}function Ad(b){function a(a,
b,c){return a[b]||(a[b]=c())}var c=K("$injector"),d=K("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||K;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(c,d,e,f){f||(f=b);return function(){f[e||"push"]([c,d,arguments]);return q}}if(!g)throw c("nomod",f);var b=[],d=[],e=[],l=a("$injector","invoke","push",d),q={_invokeQueue:b,_configBlocks:d,_runBlocks:e,requires:g,
name:f,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:l,run:function(a){e.push(a);return this}};h&&l(h);return q})}})}function Bd(b){E(b,{bootstrap:gc,copy:Ha,extend:E,equals:ra,element:G,forEach:r,
injector:Cb,noop:w,bind:cc,toJson:sa,fromJson:dc,identity:Pa,isUndefined:F,isDefined:B,isString:C,isFunction:D,isObject:S,isNumber:ea,isElement:qd,isArray:L,version:Cd,isDate:fa,lowercase:P,uppercase:ib,callbacks:{counter:0},getTestability:xd,$$minErr:K,$$csp:Ua,reloadWithDebugInfo:wd,$$hasClass:jb});Va=Ad(t);try{Va("ngLocale")}catch(a){Va("ngLocale",[]).provider("$locale",Dd)}Va("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Ed});a.provider("$compile",jc).directive({a:Fd,input:kc,
textarea:kc,form:Gd,script:Hd,select:Id,style:Jd,option:Kd,ngBind:Ld,ngBindHtml:Md,ngBindTemplate:Nd,ngClass:Od,ngClassEven:Pd,ngClassOdd:Qd,ngCloak:Rd,ngController:Sd,ngForm:Td,ngHide:Ud,ngIf:Vd,ngInclude:Wd,ngInit:Xd,ngNonBindable:Yd,ngPluralize:Zd,ngRepeat:$d,ngShow:ae,ngStyle:be,ngSwitch:ce,ngSwitchWhen:de,ngSwitchDefault:ee,ngOptions:fe,ngTransclude:ge,ngModel:he,ngList:ie,ngChange:je,pattern:lc,ngPattern:lc,required:mc,ngRequired:mc,minlength:nc,ngMinlength:nc,maxlength:oc,ngMaxlength:oc,ngValue:ke,
ngModelOptions:le}).directive({ngInclude:me}).directive(kb).directive(pc);a.provider({$anchorScroll:ne,$animate:oe,$browser:pe,$cacheFactory:qe,$controller:re,$document:se,$exceptionHandler:te,$filter:qc,$interpolate:ue,$interval:ve,$http:we,$httpBackend:xe,$location:ye,$log:ze,$parse:Ae,$rootScope:Be,$q:Ce,$$q:De,$sce:Ee,$sceDelegate:Fe,$sniffer:Ge,$templateCache:He,$templateRequest:Ie,$$testability:Je,$timeout:Ke,$window:Le,$$rAF:Me,$$asyncCallback:Ne})}])}function Wa(b){return b.replace(Oe,function(a,
b,d,e){return e?d.toUpperCase():d}).replace(Pe,"Moz$1")}function rc(b){b=b.nodeType;return 1===b||!b||9===b}function sc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Gb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(Qe.exec(b)||["",""])[1].toLowerCase();d=ia[d]||ia._default;c.innerHTML=d[1]+b.replace(Re,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=db(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";r(f,function(a){e.appendChild(a)});
return e}function V(b){if(b instanceof V)return b;var a;C(b)&&(b=ba(b),a=!0);if(!(this instanceof V)){if(a&&"<"!=b.charAt(0))throw Hb("nosel");return new V(b)}if(a){a=Y;var c;b=(c=Se.exec(b))?[a.createElement(c[1])]:(c=sc(b,a))?c.childNodes:[]}tc(this,b)}function Ib(b){return b.cloneNode(!0)}function lb(b,a){a||mb(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)mb(c[d])}function uc(b,a,c,d){if(B(d))throw Hb("offargs");var e=(d=nb(b))&&d.events;if(d&&d.handle)if(a)r(a.split(" "),
function(a){F(c)?(b.removeEventListener(a,e[a],!1),delete e[a]):Ra(e[a]||[],c)});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,e[a],!1),delete e[a]}function mb(b,a){var c=b.ng339,d=c&&ob[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),uc(b)),delete ob[c],b.ng339=s))}function nb(b,a){var c=b.ng339,c=c&&ob[c];a&&!c&&(b.ng339=c=++Te,c=ob[c]={events:{},data:{},handle:s});return c}function Jb(b,a,c){if(rc(b)){var d=B(c),e=!d&&a&&!S(a),f=!a;b=(b=nb(b,!e))&&b.data;
if(d)b[a]=c;else{if(f)return b;if(e)return b&&b[a];E(b,a)}}}function jb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function Kb(b,a){a&&b.setAttribute&&r(a.split(" "),function(a){b.setAttribute("class",ba((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+ba(a)+" "," ")))})}function Lb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");r(a.split(" "),function(a){a=
ba(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",ba(c))}}function tc(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function vc(b,a){return pb(b,"$"+(a||"ngController")+"Controller")}function pb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=L(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=G.data(b,a[d]))!==s)return c;b=b.parentNode||11===b.nodeType&&b.host}}
function wc(b){for(lb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}function xc(b,a){a||lb(b);var c=b.parentNode;c&&c.removeChild(b)}function yc(b,a){var c=qb[a.toLowerCase()];return c&&zc[pa(b)]&&c}function Ue(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Ac[a]}function Ve(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=a[e||c.type],g=f?f.length:0;if(g){1<g&&(f=qa(f));for(var h=0;h<g;h++)f[h].call(b,c)}};c.elem=b;return c}function Ka(b,a){var c=
b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||pd)():c+":"+b}function Xa(b,a){if(a){var c=0;this.nextUid=function(){return++c}}r(b,this.put,this)}function We(b){return(b=b.toString().replace(Bc,"").match(Cc))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function Mb(b,a,c){var d;if("function"===typeof b){if(!(d=b.$inject)){d=[];if(b.length){if(a)throw C(c)&&c||(c=b.name||We(b)),La("strictdi",
c);a=b.toString().replace(Bc,"");a=a.match(Cc);r(a[1].split(Xe),function(a){a.replace(Ye,function(a,b,c){d.push(c)})})}b.$inject=d}}else L(b)?(a=b.length-1,gb(b[a],"fn"),d=b.slice(0,a)):gb(b,"fn",!0);return d}function Cb(b,a){function c(a){return function(b,c){if(S(b))r(b,$b(a));else return a(b,c)}}function d(a,b){Ja(a,"service");if(D(b)||L(b))b=p.instantiate(b);if(!b.$get)throw La("pget",a);return n[a+"Provider"]=b}function e(a,b){return d(a,{$get:b})}function f(a){var b=[],c;r(a,function(a){function d(a){var b,
c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=p.get(e[0]);f[e[1]].apply(f,e[2])}}if(!k.get(a)){k.put(a,!0);try{C(a)?(c=Va(a),b=b.concat(f(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):D(a)?b.push(p.invoke(a)):L(a)?b.push(p.invoke(a)):gb(a,"module")}catch(e){throw L(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),La("modulerr",a,e.stack||e.message||e);}}});return b}function g(b,c){function d(a){if(b.hasOwnProperty(a)){if(b[a]===
h)throw La("cdep",a+" <- "+m.join(" <- "));return b[a]}try{return m.unshift(a),b[a]=h,b[a]=c(a)}catch(e){throw b[a]===h&&delete b[a],e;}finally{m.shift()}}function e(b,c,f,h){"string"===typeof f&&(h=f,f=null);var g=[];h=Mb(b,a,h);var k,m,l;m=0;for(k=h.length;m<k;m++){l=h[m];if("string"!==typeof l)throw La("itkn",l);g.push(f&&f.hasOwnProperty(l)?f[l]:d(l))}L(b)&&(b=b[k]);return b.apply(c,g)}return{invoke:e,instantiate:function(a,b,c){var d=function(){};d.prototype=(L(a)?a[a.length-1]:a).prototype;
d=new d;a=e(a,d,b,c);return S(a)||D(a)?a:d},get:d,annotate:Mb,has:function(a){return n.hasOwnProperty(a+"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var h={},m=[],k=new Xa([],!0),n={$provide:{provider:c(d),factory:c(e),service:c(function(a,b){return e(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return e(a,da(b))}),constant:c(function(a,b){Ja(a,"constant");n[a]=b;l[a]=b}),decorator:function(a,b){var c=p.get(a+"Provider"),d=c.$get;c.$get=function(){var a=q.invoke(d,
c);return q.invoke(b,null,{$delegate:a})}}}},p=n.$injector=g(n,function(){throw La("unpr",m.join(" <- "));}),l={},q=l.$injector=g(l,function(a){var b=p.get(a+"Provider");return q.invoke(b.$get,b,s,a)});r(f(b),function(a){q.invoke(a||w)});return q}function ne(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;r(a,function(a){b||"a"!==pa(a)||(b=a)});return b}function f(){var b=c.hash(),d;b?(d=g.getElementById(b))?
d.scrollIntoView():(d=e(g.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var g=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(f)});return f}]}function Ne(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function Ze(b,a,c,d){function e(a){try{a.apply(null,Ta.call(arguments,1))}finally{if(A--,0===A)for(;u.length;)try{u.pop()()}catch(b){c.error(b)}}}function f(a,
b){(function R(){r(x,function(a){a()});z=b(R,a)})()}function g(){y=null;T!=h.url()&&(T=h.url(),r(Q,function(a){a(h.url())}))}var h=this,m=a[0],k=b.location,n=b.history,p=b.setTimeout,l=b.clearTimeout,q={};h.isMock=!1;var A=0,u=[];h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){A++};h.notifyWhenNoOutstandingRequests=function(a){r(x,function(a){a()});0===A?a():u.push(a)};var x=[],z;h.addPollFn=function(a){F(z)&&f(100,p);x.push(a);return a};var T=k.href,v=a.find("base"),y=
null;h.url=function(a,c){k!==b.location&&(k=b.location);n!==b.history&&(n=b.history);if(a){if(T!=a)return T=a,d.history?c?n.replaceState(null,"",a):(n.pushState(null,"",a),v.attr("href",v.attr("href"))):(y=a,c?k.replace(a):k.href=a),h}else return y||k.href.replace(/%27/g,"'")};var Q=[],ca=!1;h.onUrlChange=function(a){if(!ca){if(d.history)G(b).on("popstate",g);if(d.hashchange)G(b).on("hashchange",g);else h.addPollFn(g);ca=!0}Q.push(a);return a};h.$$checkUrlChange=g;h.baseHref=function(){var a=v.attr("href");
return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var J={},N="",M=h.baseHref();h.cookies=function(a,b){var d,e,f,h;if(a)b===s?m.cookie=encodeURIComponent(a)+"=;path="+M+";expires=Thu, 01 Jan 1970 00:00:00 GMT":C(b)&&(d=(m.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+";path="+M).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(m.cookie!==N)for(N=m.cookie,d=N.split("; "),J={},f=0;f<d.length;f++)e=d[f],h=e.indexOf("="),
0<h&&(a=decodeURIComponent(e.substring(0,h)),J[a]===s&&(J[a]=decodeURIComponent(e.substring(h+1))));return J}};h.defer=function(a,b){var c;A++;c=p(function(){delete q[c];e(a)},b||0);q[c]=!0;return c};h.defer.cancel=function(a){return q[a]?(delete q[a],l(a),e(w),!0):!1}}function pe(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new Ze(b,d,a,c)}]}function qe(){this.$get=function(){function b(b,d){function e(a){a!=p&&(l?l==a&&(l=a.n):l=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}
function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw K("$cacheFactory")("iid",b);var g=0,h=E({},d,{id:b}),m={},k=d&&d.capacity||Number.MAX_VALUE,n={},p=null,l=null;return a[b]={put:function(a,b){if(k<Number.MAX_VALUE){var c=n[a]||(n[a]={key:a});e(c)}if(!F(b))return a in m||g++,m[a]=b,g>k&&this.remove(l.key),b},get:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;e(b)}return m[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;b==p&&(p=b.p);b==l&&(l=b.n);f(b.n,
b.p);delete n[a]}delete m[a];g--},removeAll:function(){m={};g=0;n={};p=l=null},destroy:function(){n=h=m=null;delete a[b]},info:function(){return E({},h,{size:g})}}}var a={};b.info=function(){var b={};r(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function He(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function jc(b,a){var c={},d=/^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,e=/(([\d\w_\-]+)(?:\:([^;]+))?;?)/,f=rd("ngSrc,ngSrcset,src,srcset"),g=
/^(on[a-z]+|formaction)$/;this.directive=function k(a,d){Ja(a,"directive");C(a)?(Fb(d,"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,d){var e=[];r(c[a],function(c,f){try{var h=b.invoke(c);D(h)?h={compile:da(h)}:!h.compile&&h.link&&(h.compile=da(h.link));h.priority=h.priority||0;h.index=f;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";e.push(h)}catch(g){d(g)}});return e}])),c[a].push(d)):
r(a,$b(k));return this};this.aHrefSanitizationWhitelist=function(b){return B(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return B(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};var h=!0;this.debugInfoEnabled=function(a){return B(a)?(h=a,this):h};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",
function(a,b,p,l,q,A,u,x,z,T,v){function y(a,b){try{a.addClass(b)}catch(c){}}function Q(a,b,c,d,e){a instanceof G||(a=G(a));r(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=G(b).wrap("<span></span>").parent()[0])});var f=ca(a,b,a,c,d,e);Q.$$addScopeClass(a);var h=null,g=a,k;return function(b,c,d,e,l){Fb(b,"scope");h||(h=(l=l&&l[0])?"foreignobject"!==pa(l)&&l.toString().match(/SVG/)?"svg":"html":"html");"html"!==h&&a[0]!==k&&(g=G(Nb(h,G("<div>").append(a).html())));k=a[0];l=c?Ia.clone.call(g):
g;if(d)for(var n in d)l.data("$"+n+"Controller",d[n].instance);Q.$$addScopeInfo(l,b);c&&c(l,b);f&&f(b,l,l,e);return l}}function ca(a,b,c,d,e,f){function h(a,c,d,e){var f,k,l,n,u,q,ua;if(p)for(ua=Array(c.length),n=0;n<g.length;n+=3)f=g[n],ua[f]=c[f];else ua=c;n=0;for(u=g.length;n<u;)k=ua[g[n++]],c=g[n++],f=g[n++],c?(c.scope?(l=a.$new(),Q.$$addScopeInfo(G(k),l)):l=a,q=c.transcludeOnThisElement?J(a,c.transclude,e,c.elementTranscludeOnThisElement):!c.templateOnThisElement&&e?e:!e&&b?J(a,b):null,c(f,l,
k,d,q)):f&&f(a,k.childNodes,s,e)}for(var g=[],k,l,n,u,p,q=0;q<a.length;q++){k=new Ob;l=N(a[q],[],k,0===q?d:s,e);(f=l.length?H(l,a[q],k,b,c,null,[],[],f):null)&&f.scope&&Q.$$addScopeClass(k.$$element);k=f&&f.terminal||!(n=a[q].childNodes)||!n.length?null:ca(n,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)g.push(q,f,k),u=!0,p=p||f;f=null}return u?h:null}function J(a,b,c,d){return function(e,f,h,g){var k=!1;e||(e=a.$new(),k=e.$$transcluded=!0);f=b(e,f,h,c,g);if(k&&
!d)f.on("$destroy",function(){e.$destroy()});return f}}function N(b,f,h,g,l){var n=h.$attr,u;switch(b.nodeType){case 1:R(f,va(pa(b)),"E",g,l);for(var p,q,T,A=b.attributes,z=0,v=A&&A.length;z<v;z++){var x=!1,J=!1;p=A[z];if(!X||8<=X||p.specified){u=p.name;p=ba(p.value);q=va(u);if(T=U.test(q))u=Db(q.substr(6),"-");var W=q.replace(/(Start|End)$/,""),r;a:{var H=W;if(c.hasOwnProperty(H)){r=void 0;for(var H=a.get(H+"Directive"),O=0,Q=H.length;O<Q;O++)if(r=H[O],r.multiElement){r=!0;break a}}r=!1}r&&q===W+
"Start"&&(x=u,J=u.substr(0,u.length-5)+"end",u=u.substr(0,u.length-6));q=va(u.toLowerCase());n[q]=u;if(T||!h.hasOwnProperty(q))h[q]=p,yc(b,q)&&(h[q]=!0);ya(b,f,p,q,T);R(f,q,"A",g,l,x,J)}}b=b.className;if(C(b)&&""!==b)for(;u=e.exec(b);)q=va(u[2]),R(f,q,"C",g,l)&&(h[q]=ba(u[3])),b=b.substr(u.index+u[0].length);break;case 3:t(f,b.nodeValue);break;case 8:try{if(u=d.exec(b.nodeValue))q=va(u[1]),R(f,q,"M",g,l)&&(h[q]=ba(u[2]))}catch(M){}}f.sort(F);return f}function M(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&
a.hasAttribute(b)){do{if(!a)throw ja("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return G(d)}function O(a,b,c){return function(d,e,f,h,g){e=M(e[0],b,c);return a(d,e,f,h,g)}}function H(a,c,d,e,f,h,g,k,l){function u(a,b,c,d){if(a){c&&(a=O(a,c,d));a.require=I.require;a.directiveName=ha;if(y===I||I.$$isolateScope)a=ga(a,{isolateScope:!0});g.push(a)}if(b){c&&(b=O(b,c,d));b.require=I.require;b.directiveName=ha;if(y===
I||I.$$isolateScope)b=ga(b,{isolateScope:!0});k.push(b)}}function T(a,b,c,d){var e,f="data",h=!1;if(C(b)){for(;"^"==(e=b.charAt(0))||"?"==e;)b=b.substr(1),"^"==e&&(f="inheritedData"),h=h||"?"==e;e=null;d&&"data"===f&&(e=d[b])&&(e=e.instance);e=e||c[f]("$"+b+"Controller");if(!e&&!h)throw ja("ctreq",b,a);}else L(b)&&(e=[],r(b,function(b){e.push(T(a,b,c,d))}));return e}function z(a,e,f,h,l){function u(a,b,c){var d;Qa(a)||(c=b,b=a,a=s);E&&(d=W);c||(c=E?M.parent():M);return l(a,b,d,c)}var p,v,ua,x,W,O,
M,R;c===f?(R=d,M=d.$$element):(M=G(f),R=new Ob(M,d));y&&(x=e.$new(!0));O=l&&u;J&&(H={},W={},r(J,function(a){var b={$scope:a===y||a.$$isolateScope?x:e,$element:M,$attrs:R,$transclude:O};ua=a.controller;"@"==ua&&(ua=R[a.name]);b=A(ua,b,!0,a.controllerAs);W[a.name]=b;E||M.data("$"+a.name+"Controller",b.instance);H[a.name]=b}));if(y){var N=/^\s*([@=&])(\??)\s*(\w*)\s*$/;Q.$$addScopeInfo(M,x,!0,!(ca&&(ca===y||ca===y.$$originalDirective)));Q.$$addScopeClass(M,!0);h=H&&H[y.name];var xa=x;h&&h.identifier&&
!0===y.bindToController&&(xa=h.instance);r(y.scope,function(a,c){var d=a.match(N)||[],f=d[3]||c,h="?"==d[2],d=d[1],g,k,l,u;x.$$isolateBindings[c]=d+f;switch(d){case "@":R.$observe(f,function(a){x[c]=a});R.$$observers[f].$$scope=e;R[f]&&(xa[c]=b(R[f])(e));break;case "=":if(h&&!R[f])break;k=q(R[f]);u=k.literal?ra:function(a,b){return a===b||a!==a&&b!==b};l=k.assign||function(){g=xa[c]=k(e);throw ja("nonassign",R[f],y.name);};g=xa[c]=k(e);h=e.$watch(q(R[f],function(a){u(a,xa[c])||(u(a,g)?l(e,a=xa[c]):
xa[c]=a);return g=a}),null,k.literal);x.$on("$destroy",h);break;case "&":k=q(R[f]);xa[c]=function(a){return k(e,a)};break;default:throw ja("iscp",y.name,c,a);}})}H&&(r(H,function(a){a()}),H=null);h=0;for(p=g.length;h<p;h++)v=g[h],Dc(v,v.isolateScope?x:e,M,R,v.require&&T(v.directiveName,v.require,M,W),O);h=e;y&&(y.template||null===y.templateUrl)&&(h=x);a&&a(h,f.childNodes,s,l);for(h=k.length-1;0<=h;h--)v=k[h],Dc(v,v.isolateScope?x:e,M,R,v.require&&T(v.directiveName,v.require,M,W),O)}l=l||{};for(var v=
-Number.MAX_VALUE,x,J=l.controllerDirectives,H,y=l.newIsolateScopeDirective,ca=l.templateDirective,R=l.nonTlbTranscludeDirective,w=!1,F=!1,E=l.hasElementTranscludeDirective,aa=d.$$element=G(c),I,ha,t,P=e,za,ma=0,ya=a.length;ma<ya;ma++){I=a[ma];var U=I.$$start,X=I.$$end;U&&(aa=M(c,U,X));t=s;if(v>I.priority)break;if(t=I.scope)I.templateUrl||(S(t)?(K("new/isolated scope",y||x,I,aa),y=I):K("new/isolated scope",y,I,aa)),x=x||I;ha=I.name;!I.templateUrl&&I.controller&&(t=I.controller,J=J||{},K("'"+ha+"' controller",
J[ha],I,aa),J[ha]=I);if(t=I.transclude)w=!0,I.$$tlb||(K("transclusion",R,I,aa),R=I),"element"==t?(E=!0,v=I.priority,t=aa,aa=d.$$element=G(Y.createComment(" "+ha+": "+d[ha]+" ")),c=aa[0],rb(f,Ta.call(t,0),c),P=Q(t,e,v,h&&h.name,{nonTlbTranscludeDirective:R})):(t=G(Ib(c)).contents(),aa.empty(),P=Q(t,e));if(I.template)if(F=!0,K("template",ca,I,aa),ca=I,t=D(I.template)?I.template(aa,d):I.template,t=V(t),I.replace){h=I;t=Gb.test(t)?G(Nb(I.templateNamespace,ba(t))):[];c=t[0];if(1!=t.length||1!==c.nodeType)throw ja("tplrt",
ha,"");rb(f,aa,c);ya={$attr:{}};t=N(c,[],ya);var Z=a.splice(ma+1,a.length-(ma+1));y&&W(t);a=a.concat(t).concat(Z);B(d,ya);ya=a.length}else aa.html(t);if(I.templateUrl)F=!0,K("template",ca,I,aa),ca=I,I.replace&&(h=I),z=$e(a.splice(ma,a.length-ma),aa,d,f,w&&P,g,k,{controllerDirectives:J,newIsolateScopeDirective:y,templateDirective:ca,nonTlbTranscludeDirective:R}),ya=a.length;else if(I.compile)try{za=I.compile(aa,d,P),D(za)?u(null,za,U,X):za&&u(za.pre,za.post,U,X)}catch($){p($,ta(aa))}I.terminal&&(z.terminal=
!0,v=Math.max(v,I.priority))}z.scope=x&&!0===x.scope;z.transcludeOnThisElement=w;z.elementTranscludeOnThisElement=E;z.templateOnThisElement=F;z.transclude=P;l.hasElementTranscludeDirective=E;return z}function W(a){for(var b=0,c=a.length;b<c;b++)a[b]=bc(a[b],{$$isolateScope:!0})}function R(b,d,e,f,h,g,l){if(d===h)return null;h=null;if(c.hasOwnProperty(d)){var n;d=a.get(d+"Directive");for(var u=0,q=d.length;u<q;u++)try{n=d[u],(f===s||f>n.priority)&&-1!=n.restrict.indexOf(e)&&(g&&(n=bc(n,{$$start:g,
$$end:l})),b.push(n),h=n)}catch(T){p(T)}}return h}function B(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;r(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,f){"class"==f?(y(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function $e(a,b,c,d,e,f,h,g){var k=[],n,u,p=b[0],q=a.shift(),
T=E({},q,{templateUrl:null,transclude:null,replace:null,$$originalDirective:q}),v=D(q.templateUrl)?q.templateUrl(b,c):q.templateUrl,A=q.templateNamespace;b.empty();l(z.getTrustedResourceUrl(v)).then(function(l){var z,x;l=V(l);if(q.replace){l=Gb.test(l)?G(Nb(A,ba(l))):[];z=l[0];if(1!=l.length||1!==z.nodeType)throw ja("tplrt",q.name,v);l={$attr:{}};rb(d,b,z);var O=N(z,[],l);S(q.scope)&&W(O);a=O.concat(a);B(c,l)}else z=p,b.html(l);a.unshift(T);n=H(a,z,c,e,b,q,f,h,g);r(d,function(a,c){a==z&&(d[c]=b[0])});
for(u=ca(b[0].childNodes,e);k.length;){l=k.shift();x=k.shift();var M=k.shift(),Q=k.shift(),O=b[0];if(x!==p){var R=x.className;g.hasElementTranscludeDirective&&q.replace||(O=Ib(z));rb(M,G(x),O);y(G(O),R)}x=n.transcludeOnThisElement?J(l,n.transclude,Q):Q;n(u,l,O,d,x)}k=null});return function(a,b,c,d,e){a=e;k?(k.push(b),k.push(c),k.push(d),k.push(a)):(n.transcludeOnThisElement&&(a=J(b,n.transclude,e)),n(u,b,c,d,a))}}function F(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?
-1:1:a.index-b.index}function K(a,b,c,d){if(b)throw ja("multidir",b.name,c.name,a,ta(d));}function t(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&Q.$$addBindingClass(a);return function(a,c){var e=c.parent();b||Q.$$addBindingClass(e);Q.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Nb(a,b){a=P(a||"html");switch(a){case "svg":case "math":var c=Y.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;
default:return b}}function za(a,b){if("srcdoc"==b)return z.HTML;var c=pa(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return z.RESOURCE_URL}function ya(a,c,d,e,h){var k=b(d,!0);if(k){if("multiple"===e&&"select"===pa(a))throw ja("selmulti",ta(a));c.push({priority:100,compile:function(){return{pre:function(c,d,l){d=l.$$observers||(l.$$observers={});if(g.test(e))throw ja("nodomevents");if(k=b(l[e],!0,za(a,e),f[e]||h))l[e]=k(c),(d[e]||(d[e]=[])).$$inter=!0,(l.$$observers&&
l.$$observers[e].$$scope||c).$watch(k,function(a,b){"class"===e&&a!=b?l.$updateClass(a,b):l.$set(e,a)})}}}})}}function rb(a,b,c){var d=b[0],e=b.length,f=d.parentNode,h,g;if(a)for(h=0,g=a.length;h<g;h++)if(a[h]==d){a[h++]=c;g=h+e-1;for(var k=a.length;h<k;h++,g++)g<k?a[h]=a[g]:delete a[h];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=Y.createDocumentFragment();a.appendChild(d);G(c).data(G(d).data());la?(Eb=!0,la.cleanData([d])):delete G.cache[d[G.expando]];d=1;for(e=b.length;d<
e;d++)f=b[d],G(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function ga(a,b){return E(function(){return a.apply(null,arguments)},a,b)}function Dc(a,b,c,d,e,f){try{a(b,c,d,e,f)}catch(h){p(h,ta(c))}}var Ob=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};Ob.prototype={$normalize:va,$addClass:function(a){a&&0<a.length&&T.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&T.removeClass(this.$$element,
a)},$updateClass:function(a,b){var c=Ec(a,b);c&&c.length&&T.addClass(this.$$element,c);(c=Ec(b,a))&&c.length&&T.removeClass(this.$$element,c)},$set:function(a,b,c,d){var e=this.$$element[0],f=yc(e,a),h=Ue(e,a),e=a;f?(this.$$element.prop(a,b),d=f):h&&(this[h]=b,e=h);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=Db(a,"-"));f=pa(this.$$element);if("a"===f&&"href"===a||"img"===f&&"src"===a)this[a]=b=v(b,"src"===a);!1!==c&&(null===b||b===s?this.$$element.removeAttr(d):this.$$element.attr(d,
b));(a=this.$$observers)&&r(a[e],function(a){try{a(b)}catch(c){p(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);u.$evalAsync(function(){e.$$inter||b(c[a])});return function(){Ra(e,b)}}};var ma=b.startSymbol(),ha=b.endSymbol(),V="{{"==ma||"}}"==ha?Pa:function(a){return a.replace(/\{\{/g,ma).replace(/}}/g,ha)},U=/^ngAttr[A-Z]/;Q.$$addBindingInfo=h?function(a,b){var c=a.data("$binding")||[];L(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:w;
Q.$$addBindingClass=h?function(a){y(a,"ng-binding")}:w;Q.$$addScopeInfo=h?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:w;Q.$$addScopeClass=h?function(a,b){y(a,b?"ng-isolate-scope":"ng-scope")}:w;return Q}]}function va(b){return Wa(b.replace(af,""))}function Ec(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function re(){var b={},a=!1,c=/^(\S+)(\s+as\s+(\w+))?$/;
this.register=function(a,c){Ja(a,"controller");S(a)?E(b,a):b[a]=c};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(d,e){function f(a,b,c,d){if(!a||!S(a.$scope))throw K("$controller")("noscp",d,b);a.$scope[b]=c}return function(g,h,m,k){var n,p,l;m=!0===m;k&&C(k)&&(l=k);C(g)&&(k=g.match(c),p=k[1],l=l||k[3],g=b.hasOwnProperty(p)?b[p]:ic(h.$scope,p,!0)||(a?ic(e,p,!0):s),gb(g,p,!0));if(m)return m=function(){},m.prototype=(L(g)?g[g.length-1]:g).prototype,n=new m,l&&f(h,l,n,
p||g.name),E(function(){d.invoke(g,n,h,p);return n},{instance:n,identifier:l});n=d.instantiate(g,h,p);l&&f(h,l,n,p||g.name);return n}}]}function se(){this.$get=["$window",function(b){return G(b.document)}]}function te(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Fc(b){var a={},c,d,e;if(!b)return a;r(b.split("\n"),function(b){e=b.indexOf(":");c=P(ba(b.substr(0,e)));d=ba(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function Gc(b){var a=S(b)?b:
s;return function(c){a||(a=Fc(b));return c?a[P(c)]||null:a}}function Hc(b,a,c){if(D(c))return c(b,a);r(c,function(c){b=c(b,a)});return b}function we(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){C(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=dc(d)));return d}],transformRequest:[function(a){return S(a)&&"[object File]"!==Ga.call(a)&&"[object Blob]"!==Ga.call(a)?sa(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},
post:qa(d),put:qa(d),patch:qa(d)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},f=!1;this.useApplyAsync=function(a){return B(a)?(f=!!a,this):f};var g=this.interceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,p,l){function q(a){function b(a){var d=E({},a,{data:Hc(a.data,a.headers,c.transformResponse)});a=a.status;return 200<=a&&300>a?d:p.reject(d)}var c={method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},
d=function(a){var b=e.headers,c=E({},a.headers),d,f,b=E({},b.common,b[P(a.method)]);a:for(d in b){a=P(d);for(f in c)if(P(f)===a)continue a;c[d]=b[d]}(function(a){var b;r(a,function(c,d){D(c)&&(b=c(),null!=b?a[d]=b:delete a[d])})})(c);return c}(a);E(c,a);c.headers=d;c.method=ib(c.method);var f=[function(a){d=a.headers;var c=Hc(a.data,Gc(d),a.transformRequest);F(c)&&r(d,function(a,b){"content-type"===P(b)&&delete d[b]});F(a.withCredentials)&&!F(e.withCredentials)&&(a.withCredentials=e.withCredentials);
return A(a,c,d).then(b,b)},s],h=p.when(c);for(r(z,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var g=f.shift(),h=h.then(a,g)}h.success=function(a){h.then(function(b){a(b.data,b.status,b.headers,c)});return h};h.error=function(a){h.then(null,function(b){a(b.data,b.status,b.headers,c)});return h};return h}function A(c,g,k){function l(a,b,c,e){function h(){z(b,a,c,e)}O&&(200<=a&&
300>a?O.put(W,[a,b,Fc(c),e]):O.remove(W));f?d.$applyAsync(h):(h(),d.$$phase||d.$apply())}function z(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?r.resolve:r.reject)({data:a,status:b,headers:Gc(d),config:c,statusText:e})}function A(){var a=q.pendingRequests.indexOf(c);-1!==a&&q.pendingRequests.splice(a,1)}var r=p.defer(),M=r.promise,O,H,W=u(c.url,c.params);q.pendingRequests.push(c);M.then(A,A);!c.cache&&!e.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(O=S(c.cache)?c.cache:S(e.cache)?e.cache:
x);if(O)if(H=O.get(W),B(H)){if(H&&D(H.then))return H.then(A,A),H;L(H)?z(H[1],H[0],qa(H[2]),H[3]):z(H,200,{},"OK")}else O.put(W,M);F(H)&&((H=Ic(c.url)?b.cookies()[c.xsrfCookieName||e.xsrfCookieName]:s)&&(k[c.xsrfHeaderName||e.xsrfHeaderName]=H),a(c.method,W,g,l,k,c.timeout,c.withCredentials,c.responseType));return M}function u(a,b){if(!b)return a;var c=[];od(b,function(a,b){null===a||F(a)||(L(a)||(a=[a]),r(a,function(a){S(a)&&(a=fa(a)?a.toISOString():sa(a));c.push(Da(b)+"="+Da(a))}))});0<c.length&&
(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var x=c("$http"),z=[];r(g,function(a){z.unshift(C(a)?l.get(a):l.invoke(a))});q.pendingRequests=[];(function(a){r(arguments,function(a){q[a]=function(b,c){return q(E(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){q[a]=function(b,c,d){return q(E(d||{},{method:a,url:b,data:c}))}})})("post","put","patch");q.defaults=e;return q}]}function bf(b){if(8>=X&&(!b.match(/^(get|post|head|put|delete|options)$/i)||
!t.XMLHttpRequest))return new t.ActiveXObject("Microsoft.XMLHTTP");if(t.XMLHttpRequest)return new t.XMLHttpRequest;throw K("$httpBackend")("noxhr");}function xe(){this.$get=["$browser","$window","$document",function(b,a,c){return cf(b,bf,b.defer,a.angular.callbacks,c[0])}]}function cf(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),n=null;f.type="text/javascript";f.src=a;f.async=!0;n=function(a){f.removeEventListener("load",n,!1);f.removeEventListener("error",n,!1);e.body.removeChild(f);
f=null;var g=-1,q="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),q=a.type,g="error"===a.type?404:200);c&&c(g,q)};f.addEventListener("load",n,!1);f.addEventListener("error",n,!1);e.body.appendChild(f);return n}return function(e,h,m,k,n,p,l,q){function A(){x=-1;T&&T();v&&v.abort()}function u(a,d,e,f,g){Q&&c.cancel(Q);T=v=null;0===d&&(d=e?200:"file"==Aa(h).protocol?404:0);a(1223===d?204:d,e,f,g||"");b.$$completeOutstandingRequest(w)}var x;b.$$incOutstandingRequestCount();h=h||b.url();
if("jsonp"==P(e)){var z="_"+(d.counter++).toString(36);d[z]=function(a){d[z].data=a;d[z].called=!0};var T=f(h.replace("JSON_CALLBACK","angular.callbacks."+z),z,function(a,b){u(k,a,d[z].data,"",b);d[z]=w})}else{var v=a(e);v.open(e,h,!0);r(n,function(a,b){B(a)&&v.setRequestHeader(b,a)});v.onreadystatechange=function(){if(v&&4==v.readyState){var a=null,b=null,c="";-1!==x&&(a=v.getAllResponseHeaders(),b="response"in v?v.response:v.responseText);-1===x&&10>X||(c=v.statusText);u(k,x||v.status,b,a,c)}};
l&&(v.withCredentials=!0);if(q)try{v.responseType=q}catch(y){if("json"!==q)throw y;}v.send(m||null)}if(0<p)var Q=c(A,p);else p&&D(p.then)&&p.then(A)}}function ue(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(f,g,q,A){function u(c){return c.replace(k,b).replace(n,a)}function x(a){try{var b;var c=q?e.getTrusted(q,a):e.valueOf(a);
if(null==c)b="";else{switch(typeof c){case "string":break;case "number":c=""+c;break;default:c=sa(c)}b=c}return b}catch(h){a=Pb("interr",f,h.toString()),d(a)}}A=!!A;for(var z,T,v=0,r=[],Q=[],s=f.length,J=[],N=[];v<s;)if(-1!=(z=f.indexOf(b,v))&&-1!=(T=f.indexOf(a,z+h)))v!==z&&J.push(u(f.substring(v,z))),v=f.substring(z+h,T),r.push(v),Q.push(c(v,x)),v=T+m,N.push(J.length),J.push("");else{v!==s&&J.push(u(f.substring(v)));break}if(q&&1<J.length)throw Pb("noconcat",f);if(!g||r.length){var M=function(a){for(var b=
0,c=r.length;b<c;b++){if(A&&F(a[b]))return;J[N[b]]=a[b]}return J.join("")};return E(function(a){var b=0,c=r.length,e=Array(c);try{for(;b<c;b++)e[b]=Q[b](a);return M(e)}catch(h){a=Pb("interr",f,h.toString()),d(a)}},{exp:f,expressions:r,$$watchDelegate:function(a,b,c){var d;return a.$watchGroup(Q,function(c,e){var f=M(c);D(b)&&b.call(this,f,c!==e?d:f,a);d=f},c)}})}}var h=b.length,m=a.length,k=new RegExp(b.replace(/./g,f),"g"),n=new RegExp(a.replace(/./g,f),"g");g.startSymbol=function(){return b};g.endSymbol=
function(){return a};return g}]}function ve(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,h,m,k){var n=a.setInterval,p=a.clearInterval,l=0,q=B(k)&&!k,A=(q?d:c).defer(),u=A.promise;m=B(m)?m:0;u.then(null,null,e);u.$$intervalId=n(function(){A.notify(l++);0<m&&l>=m&&(A.resolve(l),p(u.$$intervalId),delete f[u.$$intervalId]);q||b.$apply()},h);f[u.$$intervalId]=A;return u}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),
delete f[b.$$intervalId],!0):!1};return e}]}function Dd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a",short:"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function Qb(b){b=b.split("/");for(var a=b.length;a--;)b[a]=eb(b[a]);return b.join("/")}function Jc(b,a,c){b=Aa(b,c);a.$$protocol=
b.protocol;a.$$host=b.hostname;a.$$port=U(b.port)||df[b.protocol]||null}function Kc(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=Aa(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=fc(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function wa(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ya(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Rb(b){return b.substr(0,
Ya(b).lastIndexOf("/")+1)}function Lc(b,a){this.$$html5=!0;a=a||"";var c=Rb(b);Jc(b,this,b);this.$$parse=function(a){var e=wa(c,a);if(!C(e))throw sb("ipthprfx",a,c);Kc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Bb(this.$$search),b=this.$$hash?"#"+eb(this.$$hash):"";this.$$url=Qb(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;(f=wa(b,d))!==s?
(g=f,g=(f=wa(a,f))!==s?c+(wa("/",f)||f):b+g):(f=wa(c,d))!==s?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function Sb(b,a){var c=Rb(b);Jc(b,this,b);this.$$parse=function(d){var e=wa(b,d)||wa(c,d),e="#"==e.charAt(0)?wa(a,e):this.$$html5?e:"";if(!C(e))throw sb("ihshprfx",d,a);Kc(e,this,b);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Bb(this.$$search),e=this.$$hash?
"#"+eb(this.$$hash):"";this.$$url=Qb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Ya(b)==Ya(a)?(this.$$parse(a),!0):!1}}function Mc(b,a){this.$$html5=!0;Sb.apply(this,arguments);var c=Rb(b);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==Ya(d)?f=d:(g=wa(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=function(){var c=Bb(this.$$search),e=this.$$hash?"#"+eb(this.$$hash):
"";this.$$url=Qb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function tb(b){return function(){return this[b]}}function Nc(b,a){return function(c){if(F(c))return this[b];this[b]=a(c);this.$$compose();return this}}function ye(){var b="",a=!1;this.hashPrefix=function(a){return B(a)?(b=a,this):b};this.html5Mode=function(b){return B(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function g(a){c.$broadcast("$locationChangeSuccess",h.absUrl(),
a)}var h,m=d.baseHref(),k=d.url();if(a){if(!m)throw sb("nobase");m=k.substring(0,k.indexOf("/",k.indexOf("//")+2))+(m||"/");e=e.history?Lc:Mc}else m=Ya(k),e=Sb;h=new e(m,"#"+b);h.$$parseLinkUrl(k,k);var n=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var b=G(a.target);"a"!==pa(b[0]);)if(b[0]===f[0]||!(b=b.parent())[0])return;var e=b.prop("href"),g=b.attr("href")||b.attr("xlink:href");S(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=Aa(e.animVal).href);
n.test(e)||!e||b.attr("target")||a.isDefaultPrevented()||!h.$$parseLinkUrl(e,g)||(a.preventDefault(),h.absUrl()!=d.url()&&(c.$apply(),t.angular["ff-684208-preventDefault"]=!0))}});h.absUrl()!=k&&d.url(h.absUrl(),!0);d.onUrlChange(function(a){h.absUrl()!=a&&(c.$evalAsync(function(){var b=h.absUrl();h.$$parse(a);c.$broadcast("$locationChangeStart",a,b).defaultPrevented?(h.$$parse(b),d.url(b)):g(b)}),c.$$phase||c.$digest())});var p=0;c.$watch(function(){var a=d.url(),b=h.$$replace;p&&a==h.absUrl()||
(p++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",h.absUrl(),a).defaultPrevented?h.$$parse(a):(d.url(h.absUrl(),b),g(a))}));h.$$replace=!1;return p});return h}]}function ze(){var b=!0,a=this;this.debugEnabled=function(a){return B(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=
c.console||{},e=b[a]||b.log||w;a=!1;try{a=!!e.apply}catch(m){}return a?function(){var a=[];r(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function na(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw oa("isecfld",a);return b}function Ba(b,
a){if(b){if(b.constructor===b)throw oa("isecfn",a);if(b.window===b)throw oa("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw oa("isecdom",a);if(b===Object)throw oa("isecobj",a);}return b}function ub(b,a,c,d){Ba(b,d);a=a.split(".");for(var e,f=0;1<a.length;f++){e=na(a.shift(),d);var g=Ba(b[e],d);g||(g={},b[e]=g);b=g}e=na(a.shift(),d);Ba(b[e],d);return b[e]=c}function Oc(b,a,c,d,e,f){na(b,f);na(a,f);na(c,f);na(d,f);na(e,f);return function(f,h){var m=h&&h.hasOwnProperty(b)?h:
f;if(null==m)return m;m=m[b];if(!a)return m;if(null==m)return s;m=m[a];if(!c)return m;if(null==m)return s;m=m[c];if(!d)return m;if(null==m)return s;m=m[d];return e?null==m?s:m=m[e]:m}}function Pc(b,a,c){var d=Qc[b];if(d)return d;var e=b.split("."),f=e.length;if(a.csp)d=6>f?Oc(e[0],e[1],e[2],e[3],e[4],c):function(a,b){var d=0,g;do g=Oc(e[d++],e[d++],e[d++],e[d++],e[d++],c)(a,b),b=s,a=g;while(d<f);return g};else{var g="";r(e,function(a,b){na(a,c);g+="if(s == null) return undefined;\ns="+(b?"s":'((l&&l.hasOwnProperty("'+
a+'"))?l:s)')+"."+a+";\n"});g+="return s;";a=new Function("s","l",g);a.toString=da(g);a.assign=function(a,c){return ub(a,b,c,b)};d=a}d.sharedGetter=!0;return Qc[b]=d}function Ae(){var b=Object.create(null),a={csp:!1};this.$get=["$filter","$sniffer",function(c,d){function e(a){var b=a;a.sharedGetter&&(b=function(b,c){return a(b,c)},b.literal=a.literal,b.constant=a.constant,b.assign=a.assign);return b}function f(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;D(b)&&b.apply(this,
arguments);B(a)&&d.$$postDigest(function(){B(f)&&e()})},c)}function g(a,b,c,d){function e(a){var b=!0;r(a,function(a){B(a)||(b=!1)});return b}var f;return f=a.$watch(function(a){return d(a)},function(a,c,d){D(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(a)&&f()})},c)}function h(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){D(b)&&b.apply(this,arguments);e()},c)}function m(a,b){if(!b)return a;var c=function(c,d){var e=a(c,d),f=b(e,c,d);return B(e)?f:e};c.$$watchDelegate=
a.$$watchDelegate;return c}a.csp=d.csp;return function(d,n){var p,l,q;switch(typeof d){case "string":return q=d=d.trim(),p=b[q],p||(":"===d.charAt(0)&&":"===d.charAt(1)&&(l=!0,d=d.substring(2)),p=new Tb(a),p=(new Za(p,c,a)).parse(d),p.constant?p.$$watchDelegate=h:l&&(p=e(p),p.$$watchDelegate=p.literal?g:f),b[q]=p),m(p,n);case "function":return m(d,n);default:return m(w,n)}}}]}function Ce(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return Rc(function(a){b.$evalAsync(a)},a)}]}function De(){this.$get=
["$browser","$exceptionHandler",function(b,a){return Rc(function(a){b.defer(a)},a)}]}function Rc(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;c.processScheduled=!1;c.pending=s;for(var f=0,h=e.length;f<h;++f){d=e[f][0];b=e[f][c.status];try{D(b)?d.resolve(b(c.value)):
1===c.status?d.resolve(c.value):d.reject(c.value)}catch(g){d.reject(g),a(g)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=K("$q",TypeError);d.prototype={then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,
!0,a)},function(b){return k(b,!1,a)},b)}};g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,this.$$reject);try{if(S(b)||D(b))d=b&&b.then;D(d)?(this.promise.$$state.status=-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(h){e[1](h),a(h)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},
$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,e,f=0,h=d.length;f<h;f++){e=d[f][0];b=d[f][3];try{e.notify(D(b)?b(c):c)}catch(g){a(g)}}})}};var m=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{D(c)&&(d=c())}catch(e){return m(e,!1)}return d&&D(d.then)?d.then(function(){return m(a,
b)},function(a){return m(a,!1)}):m(a,b)},n=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},p=function q(a){if(!D(a))throw h("norslvr",a);if(!(this instanceof q))return new q(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};p.defer=function(){return new g};p.reject=function(a){var b=new g;b.reject(a);return b.promise};p.when=n;p.all=function(a){var b=new g,c=0,d=L(a)?[]:{};r(a,function(a,e){c++;n(a).then(function(a){d.hasOwnProperty(e)||
(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return p}function Me(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};
f.supported=e;return f}]}function Be(){var b=10,a=K("$rootScope"),c=null,d=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(e,f,g,h){function m(){this.$id=++bb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=[];this.$$listeners={};this.$$listenerCount=
{};this.$$isolateBindings={};this.$$applyAsyncQueue=[]}function k(b){if(A.$$phase)throw a("inprog",A.$$phase);A.$$phase=b}function n(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function p(){}function l(){for(var a=A.$$applyAsyncQueue;a.length;)try{a.shift()()}catch(b){f(b)}d=null}function q(){null===d&&(d=h.defer(function(){A.$apply(l)}))}m.prototype={constructor:m,$new:function(a){a?(a=new m,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,
a.$$postDigestQueue=this.$$postDigestQueue):(this.$$ChildScope||(this.$$ChildScope=function(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=++bb;this.$$ChildScope=null},this.$$ChildScope.prototype=this),a=new this.$$ChildScope);a["this"]=a;a.$parent=this;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,
d){var e=g(a);if(e.$$watchDelegate)return e.$$watchDelegate(this,b,d,e);var f=this.$$watchers,h={fn:b,last:p,get:e,exp:a,eq:!!d};c=null;D(b)||(h.fn=w);f||(f=this.$$watchers=[]);f.unshift(h);return function(){Ra(f,h);c=null}},$watchGroup:function(a,b){function c(){g=!1;k?(k=!1,b(e,e,h)):b(e,d,h)}var d=Array(a.length),e=Array(a.length),f=[],h=this,g=!1,k=!0;if(!a.length){var m=!0;h.$evalAsync(function(){m&&b(e,e,h)});return function(){m=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=
a;d[0]=c;b(e,a===c?e:d,f)});r(a,function(a,b){var k=h.$watch(a,function(a,f){e[b]=a;d[b]=f;g||(g=!0,h.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){var c=this,d,e,f,h=1<b.length,k=0,m=g(a,function(a){d=a;var b,c,f,h;if(S(d))if(Na(d))for(e!==l&&(e=l,q=e.length=0,k++),a=d.length,q!==a&&(k++,e.length=q=a),b=0;b<a;b++)h=e[b],f=d[b],c=h!==h&&f!==f,c||h===f||(k++,e[b]=f);else{e!==n&&(e=n={},q=0,k++);a=0;for(b in d)d.hasOwnProperty(b)&&(a++,f=
d[b],h=e[b],b in e?(c=h!==h&&f!==f,c||h===f||(k++,e[b]=f)):(q++,e[b]=f,k++));if(q>a)for(b in k++,e)d.hasOwnProperty(b)||(q--,delete e[b])}else e!==d&&(e=d,k++);return k}),l=[],n={},p=!0,q=0;return this.$watch(m,function(){p?(p=!1,b(d,d,c)):b(d,f,c);if(h)if(S(d))if(Na(d)){f=Array(d.length);for(var a=0;a<d.length;a++)f[a]=d[a]}else for(a in f={},d)Ab.call(d,a)&&(f[a]=d[a]);else f=d})},$digest:function(){var e,g,m,n,q=this.$$asyncQueue,r=this.$$postDigestQueue,s,B,J=b,N,M=[],O,H,W;k("$digest");h.$$checkUrlChange();
this===A&&null!==d&&(h.defer.cancel(d),l());c=null;do{B=!1;for(N=this;q.length;){try{W=q.shift(),W.scope.$eval(W.expression)}catch(R){f(R)}c=null}a:do{if(n=N.$$watchers)for(s=n.length;s--;)try{if(e=n[s])if((g=e.get(N))!==(m=e.last)&&!(e.eq?ra(g,m):"number"===typeof g&&"number"===typeof m&&isNaN(g)&&isNaN(m)))B=!0,c=e,e.last=e.eq?Ha(g,null):g,e.fn(g,m===p?g:m,N),5>J&&(O=4-J,M[O]||(M[O]=[]),H=D(e.exp)?"fn: "+(e.exp.name||e.exp.toString()):e.exp,H+="; newVal: "+sa(g)+"; oldVal: "+sa(m),M[O].push(H));
else if(e===c){B=!1;break a}}catch(t){f(t)}if(!(n=N.$$childHead||N!==this&&N.$$nextSibling))for(;N!==this&&!(n=N.$$nextSibling);)N=N.$parent}while(N=n);if((B||q.length)&&!J--)throw A.$$phase=null,a("infdig",b,sa(M));}while(B||q.length);for(A.$$phase=null;r.length;)try{r.shift()()}catch(G){f(G)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;if(this!==A){for(var b in this.$$listenerCount)n(this,this.$$listenerCount[b],b);a.$$childHead==
this&&(a.$$childHead=this.$$nextSibling);a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=null;this.$$listeners={};this.$$watchers=this.$$asyncQueue=this.$$postDigestQueue=[];this.$destroy=this.$digest=this.$apply=w;this.$on=this.$watch=this.$watchGroup=
function(){return w}}}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a){A.$$phase||A.$$asyncQueue.length||h.defer(function(){A.$$asyncQueue.length&&A.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return k("$apply"),this.$eval(a)}catch(b){f(b)}finally{A.$$phase=null;try{A.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&A.$$applyAsyncQueue.push(b);
q()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){c[c.indexOf(b)]=null;n(e,1,a)}},$emit:function(a,b){var c=[],d,e=this,h=!1,g={name:a,targetScope:e,stopPropagation:function(){h=!0},preventDefault:function(){g.defaultPrevented=!0},defaultPrevented:!1},k=db([g],arguments,1),m,l;do{d=e.$$listeners[a]||c;g.currentScope=e;m=0;for(l=
d.length;m<l;m++)if(d[m])try{d[m].apply(null,k)}catch(n){f(n)}else d.splice(m,1),m--,l--;if(h)return g.currentScope=null,g;e=e.$parent}while(e);g.currentScope=null;return g},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var h=db([e],arguments,1),g,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];g=0;for(k=d.length;g<k;g++)if(d[g])try{d[g].apply(null,h)}catch(m){f(m)}else d.splice(g,
1),g--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var A=new m;return A}]}function Ed(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return B(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return B(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;if(!X||8<=X)if(f=
Aa(c).href,""!==f&&!f.match(e))return"unsafe:"+f;return c}}}function ef(b){if("self"===b)return b;if(C(b)){if(-1<b.indexOf("***"))throw Ca("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(cb(b))return new RegExp("^"+b.source+"$");throw Ca("imatcher");}function Sc(b){var a=[];B(b)&&r(b,function(b){a.push(ef(b))});return a}function Fe(){this.SCE_CONTEXTS=ka;var b=["self"],a=[];
this.resourceUrlWhitelist=function(a){arguments.length&&(b=Sc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=Sc(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?Ic(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}
var f=function(a){throw Ca("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var g=e(),h={};h[ka.HTML]=e(g);h[ka.CSS]=e(g);h[ka.URL]=e(g);h[ka.JS]=e(g);h[ka.RESOURCE_URL]=e(h[ka.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ca("icontext",a,b);if(null===b||b===s||""===b)return b;if("string"!==typeof b)throw Ca("itype",a);return new c(b)},getTrusted:function(c,e){if(null===e||e===s||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();
if(c===ka.RESOURCE_URL){var g=Aa(e.toString()),p,l,q=!1;p=0;for(l=b.length;p<l;p++)if(d(b[p],g)){q=!0;break}if(q)for(p=0,l=a.length;p<l;p++)if(d(a[p],g)){q=!1;break}if(q)return e;throw Ca("insecurl",e.toString());}if(c===ka.HTML)return f(e);throw Ca("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Ee(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw Ca("iequirks");
var e=qa(ka);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=Pa);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:a(c,function(a){return e.getTrusted(b,a)})};var f=e.parseAs,g=e.getTrusted,h=e.trustAs;r(ka,function(a,b){var c=P(b);e[Wa("parse_as_"+c)]=function(b){return f(a,b)};e[Wa("get_trusted_"+c)]=function(b){return g(a,b)};e[Wa("trust_as_"+c)]=function(b){return h(a,
b)}});return e}]}function Ge(){this.$get=["$window","$document",function(b,a){var c={},d=U((/android (\d+)/.exec(P((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g=f.documentMode,h,m=/^(Moz|webkit|O|ms)(?=[A-Z])/,k=f.body&&f.body.style,n=!1,p=!1;if(k){for(var l in k)if(n=m.exec(l)){h=n[0];h=h.substr(0,1).toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in k&&"webkit");n=!!("transition"in k||h+"Transition"in k);p=!!("animation"in k||h+"Animation"in
k);!d||n&&p||(n=C(f.body.style.webkitTransition),p=C(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!g||7<g),hasEvent:function(a){if("input"==a&&9==X)return!1;if(F(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:Ua(),vendorPrefix:h,transitions:n,animations:p,android:d,msie:X,msieDocumentMode:g}}]}function Ie(){this.$get=["$templateCache","$http","$q",function(b,a,c){function d(e,f){function g(){h.totalPendingRequests--;
if(!f)throw ja("tpload",e);return c.reject()}var h=d;h.totalPendingRequests++;return a.get(e,{cache:b}).then(function(a){a=a.data;if(!a||0===a.length)return g();h.totalPendingRequests--;b.put(e,a);return a},g)}d.totalPendingRequests=0;return d}]}function Je(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];r(a,function(a){var d=Ea.element(a).data("$binding");d&&r(d,function(d){c?(new RegExp("(^|\\s)"+
b+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,c){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var m=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');if(m.length)return m}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function Ke(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,
a,c,d,e){function f(f,m,k){var n=B(k)&&!k,p=(n?d:c).defer(),l=p.promise;m=a.defer(function(){try{p.resolve(f())}catch(a){p.reject(a),e(a)}finally{delete g[l.$$timeoutId]}n||b.$apply()},m);l.$$timeoutId=m;g[m]=p;return l}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function Aa(b,a){var c=b;X&&(Z.setAttribute("href",c),c=Z.href);Z.setAttribute("href",c);return{href:Z.href,protocol:Z.protocol?
Z.protocol.replace(/:$/,""):"",host:Z.host,search:Z.search?Z.search.replace(/^\?/,""):"",hash:Z.hash?Z.hash.replace(/^#/,""):"",hostname:Z.hostname,port:Z.port,pathname:"/"===Z.pathname.charAt(0)?Z.pathname:"/"+Z.pathname}}function Ic(b){b=C(b)?Aa(b):b;return b.protocol===Tc.protocol&&b.host===Tc.host}function Le(){this.$get=da(t)}function qc(b){function a(c,d){if(S(c)){var e={};r(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+
"Filter")}}];a("currency",Uc);a("date",Vc);a("filter",ff);a("json",gf);a("limitTo",hf);a("lowercase",jf);a("number",Wc);a("orderBy",Xc);a("uppercase",kf)}function ff(){return function(b,a,c){if(!L(b))return b;var d=typeof c,e=[];e.check=function(a,b){for(var c=0;c<e.length;c++)if(!e[c](a,b))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return Ea.equals(a,b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&Ab.call(a,d)&&c(a[d],
b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var f=function(a,b){if("string"==typeof b&&"!"===b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&f(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(f(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a=
{$:a};case "object":for(var g in a)(function(b){"undefined"!==typeof a[b]&&e.push(function(c){return f("$"==b?c:c&&c[b],a[b])})})(g);break;case "function":e.push(a);break;default:return b}d=[];for(g=0;g<b.length;g++){var h=b[g];e.check(h,g)&&d.push(h)}return d}}function Uc(b){var a=b.NUMBER_FORMATS;return function(b,d){F(d)&&(d=a.CURRENCY_SYM);return null==b?b:Yc(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Wc(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==
b?b:Yc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Yc(b,a,c,d,e){if(!isFinite(b)||S(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",h="",m=[],k=!1;if(-1!==g.indexOf("e")){var n=g.match(/([\d\.]+)e(-?)(\d+)/);n&&"-"==n[2]&&n[3]>e+1?(g="0",b=0):(h=g,k=!0)}if(k)0<e&&-1<b&&1>b&&(h=b.toFixed(e));else{g=(g.split(Zc)[1]||"").length;F(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);0===b&&(f=!1);b=(""+b).split(Zc);g=b[0];b=b[1]||"";var n=
0,p=a.lgSize,l=a.gSize;if(g.length>=p+l)for(n=g.length-p,k=0;k<n;k++)0===(n-k)%l&&0!==k&&(h+=c),h+=g.charAt(k);for(k=n;k<g.length;k++)0===(g.length-k)%p&&0!==k&&(h+=c),h+=g.charAt(k);for(;b.length<e;)b+="0";e&&"0"!==e&&(h+=d+b.substr(0,e))}m.push(f?a.negPre:a.posPre);m.push(h);m.push(f?a.negSuf:a.posSuf);return m.join("")}function vb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function $(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();
if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return vb(e,a,d)}}function wb(b,a){return function(c,d){var e=c["get"+b](),f=ib(a?"SHORT"+b:b);return d[f][e]}}function $c(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function ad(b){return function(a){var c=$c(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return vb(a,b)}}function Vc(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:
a.setFullYear,m=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=U(b[9]+b[10]),g=U(b[9]+b[11]));h.call(a,U(b[1]),U(b[2])-1,U(b[3]));f=U(b[4]||0)-f;g=U(b[5]||0)-g;h=U(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));m.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e,f){var g="",h=[],m,k;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;C(c)&&(c=lf.test(c)?U(c):a(c));ea(c)&&(c=new Date(c));if(!fa(c))return c;
for(;e;)(k=mf.exec(e))?(h=db(h,k,1),e=h.pop()):(h.push(e),e=null);f&&"UTC"===f&&(c=new Date(c.getTime()),c.setMinutes(c.getMinutes()+c.getTimezoneOffset()));r(h,function(a){m=nf[a];g+=m?m(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function gf(){return function(b){return sa(b,!0)}}function hf(){return function(b,a){if(!L(b)&&!C(b))return b;a=Infinity===Math.abs(Number(a))?Number(a):U(a);if(C(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?
a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Xc(b){return function(a,c,d){function e(a,b){return b?function(b,c){return a(c,b)}:a}function f(a,b){var c=typeof a,d=typeof b;return c==d?(fa(a)&&fa(b)&&(a=a.valueOf(),b=b.valueOf()),"string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Na(a)||!c)return a;c=L(c)?c:[c];c=sd(c,function(a){var c=!1,d=a||Pa;if(C(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c=
"-"==a.charAt(0),a=a.substring(1);d=b(a);if(d.constant){var h=d();return e(function(a,b){return f(a[h],b[h])},c)}}return e(function(a,b){return f(d(a),d(b))},c)});for(var g=[],h=0;h<a.length;h++)g.push(a[h]);return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function Fa(b){D(b)&&(b={link:b});b.restrict=b.restrict||"AC";return da(b)}function bd(b,a,c,d){var e=this,f=b.parent().controller("form")||xb,g=[];e.$error={};e.$$success={};e.$pending=
s;e.$name=a.name||a.ngForm;e.$dirty=!1;e.$pristine=!0;e.$valid=!0;e.$invalid=!1;e.$submitted=!1;f.$addControl(e);b.addClass(Ma);e.$rollbackViewValue=function(){r(g,function(a){a.$rollbackViewValue()})};e.$commitViewValue=function(){r(g,function(a){a.$commitViewValue()})};e.$addControl=function(a){Ja(a.$name,"input");g.push(a);a.$name&&(e[a.$name]=a)};e.$removeControl=function(a){a.$name&&e[a.$name]===a&&delete e[a.$name];r(e.$pending,function(b,c){e.$setValidity(c,null,a)});r(e.$error,function(b,
c){e.$setValidity(c,null,a)});Ra(g,a)};cd({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(Ra(d,c),0===d.length&&delete a[b])},parentForm:f,$animate:d});e.$setDirty=function(){d.removeClass(b,Ma);d.addClass(b,yb);e.$dirty=!0;e.$pristine=!1;f.$setDirty()};e.$setPristine=function(){d.setClass(b,Ma,yb+" ng-submitted");e.$dirty=!1;e.$pristine=!0;e.$submitted=!1;r(g,function(a){a.$setPristine()})};e.$setSubmitted=function(){d.addClass(b,
"ng-submitted");e.$submitted=!0;f.$setSubmitted()}}function Ub(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function $a(b,a,c,d,e,f){a.prop("validity");var g=a[0].placeholder,h={},m=P(a[0].type);if(!e.android){var k=!1;a.on("compositionstart",function(a){k=!0});a.on("compositionend",function(){k=!1;n()})}var n=function(b){if(!k){var e=a.val(),f=b&&b.type;X&&"input"===(b||h).type&&a[0].placeholder!==g?g=a[0].placeholder:("password"===m||c.ngTrim&&"false"===c.ngTrim||(e=ba(e)),
(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,f))}};if(e.hasEvent("input"))a.on("input",n);else{var p,l=function(a){p||(p=f.defer(function(){n(a);p=null}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||l(a)});if(e.hasEvent("paste"))a.on("paste cut",l)}a.on("change",n);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)}}function zb(b,a){return function(c){var d;if(fa(c))return c;if(C(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-
1)&&(c=c.substring(1,c.length-1));if(of.test(c))return new Date(c);b.lastIndex=0;if(c=b.exec(c))return c.shift(),d={yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0},r(c,function(b,c){c<a.length&&(d[a[c]]=+b)}),new Date(d.yyyy,d.MM-1,d.dd,d.HH,d.mm,d.ss||0)}return NaN}}function ab(b,a,c,d){return function(e,f,g,h,m,k,n){function p(a){return B(a)?fa(a)?a:c(a):s}dd(e,f,g,h);$a(e,f,g,h,m,k);var l=h&&h.$options&&h.$options.timezone;h.$$parserName=b;h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b=
c(b),"UTC"===l&&b.setMinutes(b.getMinutes()-b.getTimezoneOffset()),b):s});h.$formatters.push(function(a){return fa(a)?n("date")(a,d,l):""});if(B(g.min)||g.ngMin){var q;h.$validators.min=function(a){return h.$isEmpty(a)||F(q)||c(a)>=q};g.$observe("min",function(a){q=p(a);h.$validate()})}if(B(g.max)||g.ngMax){var r;h.$validators.max=function(a){return h.$isEmpty(a)||F(r)||c(a)<=r};g.$observe("max",function(a){r=p(a);h.$validate()})}}}function dd(b,a,c,d){(d.$$hasNativeValidators=S(a[0].validity))&&
d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput&&!c.typeMismatch?s:b})}function ed(b,a,c,d,e){if(B(d)){b=b(d);if(!b.constant)throw K("ngModel")("constexpr",c,d);return b(a)}return e}function cd(b){function a(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function c(b,c){b=b?"-"+Db(b,"-"):"";a(pf+b,!0===c);a(qf+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,h=b.unset,m=b.parentForm,k=b.$animate;d.$setValidity=function(b,e,f){e===s?(d.$pending||
(d.$pending={}),g(d.$pending,b,f)):(d.$pending&&h(d.$pending,b,f),fd(d.$pending)&&(d.$pending=s));"boolean"!==typeof e?(h(d.$error,b,f),h(d.$$success,b,f)):e?(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),h(d.$$success,b,f));d.$pending?(a(gd,!0),d.$valid=d.$invalid=s,c("",null)):(a(gd,!1),d.$valid=fd(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?s:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);m.$setValidity(b,e,d)};c("",!0)}function fd(b){if(b)for(var a in b)return!1;
return!0}function Vb(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],n=0;n<b.length;n++)if(e==b[n])continue a;c.push(e)}return c}function e(a){if(!L(a)){if(C(a))return a.split(" ");if(S(a)){var b=[];r(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,h){function m(a,b){var c=g.data("$classCounts")||{},d=[];r(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});
g.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===a||f.$index%2===a){var k=e(b||[]);if(!n){var q=m(k,1);h.$addClass(q)}else if(!ra(b,n)){var r=e(n),q=d(k,r),k=d(r,k),q=m(q,1),k=m(k,-1);q&&q.length&&c.addClass(g,q);k&&k.length&&c.removeClass(g,k)}}n=qa(b)}var n;f.$watch(h[b],k,!0);h.$observe("class",function(a){k(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var k=e(f.$eval(h[b]));g===a?(g=m(k,1),h.$addClass(g)):(g=m(k,-1),h.$removeClass(g))}})}}}]}
var rf=/^\/(.+)\/([a-z]*)$/,P=function(b){return C(b)?b.toLowerCase():b},Ab=Object.prototype.hasOwnProperty,ib=function(b){return C(b)?b.toUpperCase():b},X,G,la,Ta=[].slice,sf=[].push,Ga=Object.prototype.toString,Sa=K("ng"),Ea=t.angular||(t.angular={}),Va,bb=0;X=U((/msie (\d+)/.exec(P(navigator.userAgent))||[])[1]);isNaN(X)&&(X=U((/trident\/.*; rv:(\d+)/.exec(P(navigator.userAgent))||[])[1]));w.$inject=[];Pa.$inject=[];var L=Array.isArray,ba=function(b){return C(b)?b.trim():b},Ua=function(){if(B(Ua.isActive_))return Ua.isActive_;
var b=!(!Y.querySelector("[ng-csp]")&&!Y.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return Ua.isActive_=b},fb=["ng-","data-ng-","ng:","x-ng-"],yd=/[A-Z]/g,hc=!1,Eb,Cd={full:"1.3.0-rc.1",major:1,minor:3,dot:0,codeName:"backyard-atomicity"};V.expando="ng339";var ob=V.cache={},Te=1;V._data=function(b){return this.cache[b[this.expando]]||{}};var Oe=/([\:\-\_]+(.))/g,Pe=/^moz([A-Z])/,tf={mouseleave:"mouseout",mouseenter:"mouseover"},Hb=K("jqLite"),Se=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,
Gb=/<|&#?\w+;/,Qe=/<([\w:]+)/,Re=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ia={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option;ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead;ia.th=ia.td;var Ia=V.prototype={ready:function(b){function a(){c||(c=
!0,b())}var c=!1;"complete"===Y.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),V(t).on("load",a),this.on("DOMContentLoaded",a))},toString:function(){var b=[];r(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?G(this[b]):G(this[this.length+b])},length:0,push:sf,sort:[].sort,splice:[].splice},qb={};r("multiple selected checked disabled readOnly required open".split(" "),function(b){qb[P(b)]=b});var zc={};r("input select option textarea button form details".split(" "),
function(b){zc[b]=!0});var Ac={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};r({data:Jb,removeData:mb},function(b,a){V[a]=b});r({data:Jb,inheritedData:pb,scope:function(b){return G.data(b,"$scope")||pb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return G.data(b,"$isolateScope")||G.data(b,"$isolateScopeNoTemplate")},controller:vc,injector:function(b){return pb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:jb,
css:function(b,a,c){a=Wa(a);if(B(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=P(a);if(qb[d])if(B(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||w).specified?d:s;else if(B(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?s:b},prop:function(b,a,c){if(B(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(F(b)){var d=a.nodeType;return 1===d||3===d?a.textContent:""}a.textContent=
b}b.$dv="";return b}(),val:function(b,a){if(F(a)){if(b.multiple&&"select"===pa(b)){var c=[];r(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(F(a))return b.innerHTML;lb(b,!0);b.innerHTML=a},empty:wc},function(b,a){V.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==wc&&(2==b.length&&b!==jb&&b!==vc?a:d)===s){if(S(a)){for(e=0;e<g;e++)if(b===Jb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;
g=e===s?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});r({removeData:mb,on:function a(c,d,e,f){if(B(f))throw Hb("onargs");if(rc(c)){var g=nb(c,!0);f=g.events;var h=g.handle;h||(h=g.handle=Ve(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],m=g.length;m--;){d=g[m];var k=f[d];k||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,tf[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||h(a,d)}):"$destroy"!==d&&c.addEventListener(d,
h,!1),k=f[d]);k.push(e)}}},off:uc,one:function(a,c,d){a=G(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;lb(a);r(new V(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];r(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(1===d||11===d){c=new V(c);for(var d=0,e=c.length;d<
e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;r(new V(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=G(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:xc,detach:function(a){xc(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new V(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,d.nextSibling);d=h}},addClass:Lb,removeClass:Kb,toggleClass:function(a,c,d){c&&r(c.split(" "),function(c){var f=
d;F(f)&&(f=!jb(a,c));(f?Lb:Kb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Ib,triggerHandler:function(a,c,d){var e,f;e=c.type||c;var g=nb(a);if(g=(g=g&&g.events)&&g[e])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopPropagation:w,type:e,target:a},c.type&&(e=E(e,c)),
c=qa(g),f=d?[e].concat(d):[e],r(c,function(c){c.apply(a,f)})}},function(a,c){V.prototype[c]=function(c,e,f){for(var g,h=0,m=this.length;h<m;h++)F(g)?(g=a(this[h],c,e,f),B(g)&&(g=G(g))):tc(g,a(this[h],c,e,f));return B(g)?g:this};V.prototype.bind=V.prototype.on;V.prototype.unbind=V.prototype.off});Xa.prototype={put:function(a,c){this[Ka(a,this.nextUid)]=c},get:function(a){return this[Ka(a,this.nextUid)]},remove:function(a){var c=this[a=Ka(a,this.nextUid)];delete this[a];return c}};var Cc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,
Xe=/,/,Ye=/^\s*(_?)(\S+?)\1\s*$/,Bc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,La=K("$injector");Cb.$$annotate=Mb;var uf=K("$animate"),oe=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw uf("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$$q","$$asyncCallback",function(a,d){function e(){f||
(f=a.defer(),d(function(){f.resolve();f=null}));return f.promise}var f;return{enter:function(a,c,d){d?d.after(a):c.prepend(a);return e()},leave:function(a){a.remove();return e()},move:function(a,c,d){return this.enter(a,c,d)},addClass:function(a,c){c=C(c)?c:L(c)?c.join(" "):"";r(a,function(a){Lb(a,c)});return e()},removeClass:function(a,c){c=C(c)?c:L(c)?c.join(" "):"";r(a,function(a){Kb(a,c)});return e()},setClass:function(a,c,d){this.addClass(a,c);this.removeClass(a,d);return e()},enabled:w,cancel:w}}]}],
ja=K("$compile");jc.$inject=["$provide","$$sanitizeUriProvider"];var af=/^(x[\:\-_]|data[\:\-_])/i,Pb=K("$interpolate"),vf=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,df={http:80,https:443,ftp:21},sb=K("$location");Mc.prototype=Sb.prototype=Lc.prototype={$$html5:!1,$$replace:!1,absUrl:tb("$$absUrl"),url:function(a){if(F(a))return this.$$url;a=vf.exec(a);a[1]&&this.path(decodeURIComponent(a[1]));(a[2]||a[1])&&this.search(a[3]||"");this.hash(a[5]||"");return this},protocol:tb("$$protocol"),host:tb("$$host"),
port:tb("$$port"),path:Nc("$$path",function(a){a=a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(C(a)||ea(a))a=a.toString(),this.$$search=fc(a);else if(S(a))r(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw sb("isrcharg");break;default:F(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:Nc("$$hash",function(a){return a?a.toString():""}),replace:function(){this.$$replace=
!0;return this}};var oa=K("$parse"),wf=Function.prototype.call,xf=Function.prototype.apply,yf=Function.prototype.bind,hd=Object.create(null);r({"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:function(){}},function(a,c){a.constant=a.literal=a.sharedGetter=!0;hd[c]=a});var Wb=E(Object.create(null),{"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return B(d)?B(e)?d+e:d:B(e)?e:s},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(B(d)?d:0)-(B(e)?e:0)},"*":function(a,
c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":w,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,
c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}}),zf={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Tb=function(a){this.options=a};Tb.prototype={constructor:Tb,lex:function(a){this.text=a;this.index=0;this.ch=s;for(this.tokens=[];this.index<this.text.length;)if(this.ch=this.text.charAt(this.index),
this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent();else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch}),this.index++;else if(this.isWhitespace(this.ch))this.index++;else{a=this.ch+this.peek();var c=a+this.peek(2),d=Wb[this.ch],e=Wb[a],f=Wb[c];f?(this.tokens.push({index:this.index,text:c,fn:f}),this.index+=3):e?(this.tokens.push({index:this.index,
text:a,fn:e}),this.index+=2):d?(this.tokens.push({index:this.index,text:this.ch,fn:d}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=
a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=B(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw oa("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=P(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&
e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,constant:!0,fn:function(){return a}})},readIdent:function(){for(var a=this.text,c="",d=this.index,e,f,g,h;this.index<this.text.length;){h=this.text.charAt(this.index);if("."===h||this.isIdent(h)||this.isNumber(h))"."===h&&(e=this.index),c+=h;else break;this.index++}e&&"."===
c[c.length-1]&&(this.index--,c=c.slice(0,-1),e=c.lastIndexOf("."),-1===e&&(e=s));if(e)for(f=this.index;f<this.text.length;){h=this.text.charAt(f);if("("===h){g=c.substr(e-d+1);c=c.substr(0,e-d);this.index=f;break}if(this.isWhitespace(h))f++;else break}this.tokens.push({index:d,text:c,fn:hd[c]||Pc(c,this.options,a)});g&&(this.tokens.push({index:e,text:"."}),this.tokens.push({index:e+1,text:g}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=
this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=zf[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,string:d,constant:!0,fn:function(){return d}});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var Za=function(a,c,d){this.lexer=a;this.$filter=c;this.options=
d};Za.ZERO=E(function(){return 0},{sharedGetter:!0,constant:!0});Za.prototype={constructor:Za,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();
(a=c.fn)||this.throwError("not a primary expression",c);c.constant&&(a.constant=!0,a.literal=!0)}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw oa("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw oa("ueoe",this.text);return this.tokens[0]},
peek:function(a,c,d,e){if(0<this.tokens.length){var f=this.tokens[0],g=f.text;if(g===a||g===c||g===d||g===e||!(a||c||d||e))return f}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return E(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return E(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&
c.constant&&d.constant})},binaryFn:function(a,c,d){return E(function(e,f){return c(e,f,a,d)},{constant:a.constant&&d.constant})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0,g=a.length;f<g;f++)e=a[f](c,d);return e}},filterChain:function(){for(var a=this.expression(),c;c=this.expect("|");)a=this.binaryFn(a,c.fn,this.filter());return a},filter:function(){var a=
this.expect(),c=this.$filter(a.text),d,e;if(this.peek(":"))for(d=[],e=[];this.expect(":");)d.push(this.expression());return da(function(a,g,h){if(e){e[0]=h;for(h=d.length;h--;)e[h+1]=d[h](a,g);return c.apply(s,e)}return c(h)})},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,f){return a.assign(d,
c(d,f),f)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.assignment();if(d=this.expect(":"))return this.ternaryFn(a,c,this.assignment());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;c=this.expect("||");)a=this.binaryFn(a,c.fn,this.logicalAND());return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),
c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;
return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(Za.ZERO,a.fn,this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this.text,d=this.expect().text,e=Pc(d,this.options,c);return E(function(c,d,h){return e(h||a(c,d))},{assign:function(e,g,h){(h=a(e,h))||a.assign(e,h={});return ub(h,d,g,c)}})},objectIndex:function(a){var c=this.text,d=this.expression();this.consume("]");return E(function(e,f){var g=a(e,f),h=d(e,f);na(h,
c);return g?Ba(g[h],c):s},{assign:function(e,f,g){var h=na(d(e,g),c);(g=Ba(a(e,g),c))||a.assign(e,g={});return g[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this.text,f=d.length?[]:null;return function(g,h){var m=c?c(g,h):g,k=a(g,h,m)||w;if(f)for(var n=d.length;n--;)f[n]=Ba(d[n](g,h),e);Ba(m,e);if(k){if(k.constructor===k)throw oa("isecfn",e);if(k===wf||k===xf||k===yf)throw oa("isecff",e);
}m=k.apply?k.apply(m,f):k(f[0],f[1],f[2],f[3],f[4]);return Ba(m,e)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{if(this.peek("]"))break;var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return E(function(c,d){for(var g=[],h=0,m=a.length;h<m;h++)g.push(a[h](c,d));return g},{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.expect(),d=d.string||
d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return E(function(c,d){for(var e={},m=0,k=a.length;m<k;m++){var n=a[m];e[n.key]=n.value(c,d)}return e},{literal:!0,constant:c})}};var Qc=Object.create(null),Ca=K("$sce"),ka={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ja=K("$compile"),Z=Y.createElement("a"),Tc=Aa(t.location.href,!0);qc.$inject=["$provide"];Uc.$inject=["$locale"];Wc.$inject=["$locale"];
var Zc=".",nf={yyyy:$("FullYear",4),yy:$("FullYear",2,0,!0),y:$("FullYear",1),MMMM:wb("Month"),MMM:wb("Month",!0),MM:$("Month",2,1),M:$("Month",1,1),dd:$("Date",2),d:$("Date",1),HH:$("Hours",2),H:$("Hours",1),hh:$("Hours",2,-12),h:$("Hours",1,-12),mm:$("Minutes",2),m:$("Minutes",1),ss:$("Seconds",2),s:$("Seconds",1),sss:$("Milliseconds",3),EEEE:wb("Day"),EEE:wb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(vb(Math[0<
a?"floor":"ceil"](a/60),2)+vb(Math.abs(a%60),2))},ww:ad(2),w:ad(1)},mf=/((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,lf=/^\-?\d+$/;Vc.$inject=["$locale"];var jf=da(P),kf=da(ib);Xc.$inject=["$parse"];var Fd=da({restrict:"E",compile:function(a,c){8>=X&&(c.href||c.name||c.$set("href",""),a.append(Y.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var f="[object SVGAnimatedString]"===Ga.call(c.prop("href"))?"xlink:href":"href";c.on("click",
function(a){c.attr(f)||a.preventDefault()})}}}),kb={};r(qb,function(a,c){if("multiple"!=a){var d=va("ng-"+c);kb[d]=function(){return{restrict:"A",priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});r(Ac,function(a,c){kb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(rf))){f.$set("ngPattern",new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});r(["src","srcset","href"],function(a){var c=
va("ng-"+a);kb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===Ga.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(c){c?(f.$set(h,c),X&&g&&e.prop(g,f[h])):"href"===a&&f.$set(h,null)})}}}});var xb={$addControl:w,$removeControl:w,$setValidity:w,$$setPending:w,$setDirty:w,$setPristine:w,$setSubmitted:w,$$clearControlValidity:w};bd.$inject=["$element","$attrs","$scope","$animate"];var id=function(a){return["$timeout",
function(c){return{name:"form",restrict:a?"EAC":"E",controller:bd,compile:function(){return{pre:function(a,e,f,g){if(!f.action){var h=function(c){a.$apply(function(){g.$commitViewValue();g.$setSubmitted()});c.preventDefault?c.preventDefault():c.returnValue=!1};e[0].addEventListener("submit",h,!1);e.on("$destroy",function(){c(function(){e[0].removeEventListener("submit",h,!1)},0,!1)})}var m=e.parent().controller("form"),k=f.name||f.ngForm;k&&ub(a,k,g,k);if(m)e.on("$destroy",function(){m.$removeControl(g);
k&&ub(a,k,s,k);E(g,xb)})}}}}}]},Gd=id(),Td=id(!0),of=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,Af=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,Bf=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Cf=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,jd=/^(\d{4})-(\d{2})-(\d{2})$/,kd=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d))?$/,Xb=/^(\d{4})-W(\d\d)$/,ld=/^(\d{4})-(\d\d)$/,md=/^(\d\d):(\d\d)(?::(\d\d))?$/,
Df=/(\s+|^)default(\s+|$)/,Yb=new K("ngModel"),nd={text:function(a,c,d,e,f,g){$a(a,c,d,e,f,g);Ub(e)},date:ab("date",jd,zb(jd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":ab("datetimelocal",kd,zb(kd,"yyyy MM dd HH mm ss".split(" ")),"yyyy-MM-ddTHH:mm:ss"),time:ab("time",md,zb(md,["HH","mm","ss"]),"HH:mm:ss"),week:ab("week",Xb,function(a){if(fa(a))return a;if(C(a)){Xb.lastIndex=0;var c=Xb.exec(a);if(c){a=+c[1];var d=+c[2],c=$c(a),d=7*(d-1);return new Date(a,0,c.getDate()+d)}}return NaN},"yyyy-Www"),
month:ab("month",ld,zb(ld,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){dd(a,c,d,e);$a(a,c,d,e,f,g);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:Cf.test(a)?parseFloat(a):s});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!ea(a))throw Yb("numfmt",a);a=a.toString()}return a});if(d.min||d.ngMin){var h;e.$validators.min=function(a){return e.$isEmpty(a)||F(h)||a>=h};d.$observe("min",function(a){B(a)&&!ea(a)&&(a=parseFloat(a,10));h=ea(a)&&!isNaN(a)?a:s;e.$validate()})}if(d.max||
d.ngMax){var m;e.$validators.max=function(a){return e.$isEmpty(a)||F(m)||a<=m};d.$observe("max",function(a){B(a)&&!ea(a)&&(a=parseFloat(a,10));m=ea(a)&&!isNaN(a)?a:s;e.$validate()})}},url:function(a,c,d,e,f,g){$a(a,c,d,e,f,g);Ub(e);e.$$parserName="url";e.$validators.url=function(a,c){var d=a||c;return e.$isEmpty(d)||Af.test(d)}},email:function(a,c,d,e,f,g){$a(a,c,d,e,f,g);Ub(e);e.$$parserName="email";e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||Bf.test(d)}},radio:function(a,
c,d,e){F(d.name)&&c.attr("name",++bb);c.on("click",function(a){c[0].checked&&e.$setViewValue(d.value,a&&a.type)});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,h,m){var k=ed(m,a,"ngTrueValue",d.ngTrueValue,!0),n=ed(m,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==k};e.$formatters.push(function(a){return ra(a,
k)});e.$parsers.push(function(a){return a?k:n})},hidden:w,button:w,submit:w,reset:w,file:w},kc=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:function(f,g,h,m){m[0]&&(nd[P(h.type)]||nd.text)(f,g,h,m[0],c,a,d,e)}}}],pf="ng-valid",qf="ng-invalid",Ma="ng-pristine",yb="ng-dirty",gd="ng-pending",Ef=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q",function(a,c,d,e,f,g,h,m,k){this.$modelValue=this.$viewValue=
Number.NaN;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=s;this.$name=d.name;var n=f(d.ngModel),p=null,l=this,q=function(){var c=n(a);l.$options&&l.$options.getterSetter&&D(c)&&(c=c());return c},A=function(c){var d;l.$options&&l.$options.getterSetter&&D(d=n(a))?d(l.$modelValue):n.assign(a,
l.$modelValue)};this.$$setOptions=function(a){l.$options=a;if(!(n.assign||a&&a.getterSetter))throw Yb("nonassign",d.ngModel,ta(e));};this.$render=w;this.$isEmpty=function(a){return F(a)||""===a||null===a||a!==a};var u=e.inheritedData("$formController")||xb,x=0;e.addClass(Ma).addClass("ng-untouched");cd({ctrl:this,$element:e,set:function(a,c){a[c]=!0},unset:function(a,c){delete a[c]},parentForm:u,$animate:g});this.$setPristine=function(){l.$dirty=!1;l.$pristine=!0;g.removeClass(e,yb);g.addClass(e,
Ma)};this.$setUntouched=function(){l.$touched=!1;l.$untouched=!0;g.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=function(){l.$touched=!0;l.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){h.cancel(p);l.$viewValue=l.$$lastCommittedViewValue;l.$render()};this.$validate=function(){ea(l.$modelValue)&&isNaN(l.$modelValue)||this.$$parseAndValidate()};this.$$runValidators=function(a,c,d,e){function f(){var a=!0;r(l.$validators,function(e,f){var h=e(c,
d);a=a&&h;g(f,h)});return a?!0:(r(l.$asyncValidators,function(a,c){g(c,null)}),m(),!1)}function h(){var a=[];r(l.$asyncValidators,function(e,f){var h=e(c,d);if(!h||!D(h.then))throw Yb("$asyncValidators",h);g(f,s);a.push(h.then(function(){g(f,!0)},function(a){g(f,!1)}))});a.length?k.all(a).then(m):m()}function g(a,c){n===x&&l.$setValidity(a,c)}function m(){n===x&&e()}x++;var n=x;(function(a){var c=l.$$parserName||"parse";if(a===s)g(c,null);else if(g(c,a),!a)return r(l.$validators,function(a,c){g(c,
null)}),r(l.$asyncValidators,function(a,c){g(c,null)}),m(),!1;return!0})(a)&&f()&&h()};this.$commitViewValue=function(){var a=l.$viewValue;h.cancel(p);if(l.$$lastCommittedViewValue!==a||""===a&&l.$$hasNativeValidators)l.$$lastCommittedViewValue=a,l.$pristine&&(l.$dirty=!0,l.$pristine=!1,g.removeClass(e,Ma),g.addClass(e,yb),u.$setDirty()),this.$$parseAndValidate()};this.$$parseAndValidate=function(){for(var a=!0,c=l.$$lastCommittedViewValue,d=c,e=0;e<l.$parsers.length;e++)if(d=l.$parsers[e](d),F(d)){a=
!1;break}ea(l.$modelValue)&&isNaN(l.$modelValue)&&(l.$modelValue=q());var f=l.$modelValue,h=l.$options&&l.$options.allowInvalid;h&&(l.$modelValue=d,l.$modelValue!==f&&l.$$writeModelToScope());l.$$runValidators(a,d,c,function(){h||(l.$modelValue=l.$valid?d:s,l.$modelValue!==f&&l.$$writeModelToScope())})};this.$$writeModelToScope=function(){A(l.$modelValue);r(l.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};this.$setViewValue=function(a,c){l.$viewValue=a;l.$options&&!l.$options.updateOnDefault||
l.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=function(c){var d=0,e=l.$options;e&&B(e.debounce)&&(e=e.debounce,ea(e)?d=e:ea(e[c])?d=e[c]:ea(e["default"])&&(d=e["default"]));h.cancel(p);d?p=h(function(){l.$commitViewValue()},d):m.$$phase?l.$commitViewValue():a.$apply(function(){l.$commitViewValue()})};a.$watch(function(){var a=q();if(a!==l.$modelValue){l.$modelValue=a;for(var c=l.$formatters,d=c.length,e=a;d--;)e=c[d](e);l.$viewValue!==e&&(l.$viewValue=l.$$lastCommittedViewValue=e,
l.$render(),l.$$runValidators(s,a,e,w))}return a})}],he=function(){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Ef,link:{pre:function(a,c,d,e){var f=e[0],g=e[1]||xb;f.$$setOptions(e[2]&&e[2].$options);g.$addControl(f);a.$on("$destroy",function(){g.$removeControl(f)})},post:function(a,c,d,e){var f=e[0];if(f.$options&&f.$options.updateOn)c.on(f.$options.updateOn,function(a){f.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(c){f.$touched||a.$apply(function(){f.$setTouched()})})}}}},
je=da({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),mc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},lc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){C(a)&&0<a.length&&
(a=new RegExp(a));if(a&&!a.test)throw K("ngPattern")("noregexp",g,a,ta(c));f=a||s;e.$validate()});e.$validators.pattern=function(a){return e.$isEmpty(a)||F(f)||f.test(a)}}}}},oc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("maxlength",function(a){f=U(a)||0;e.$validate()});e.$validators.maxlength=function(a,c){return e.$isEmpty(c)||c.length<=f}}}}},nc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",
function(a){f=U(a)||0;e.$validate()});e.$validators.minlength=function(a,c){return e.$isEmpty(c)||c.length>=f}}}}},ie=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?ba(f):f;e.$parsers.push(function(a){if(!F(a)){var c=[];a&&r(a.split(h),function(a){a&&c.push(g?ba(a):a)});return c}});e.$formatters.push(function(a){return L(a)?a.join(f):s});e.$isEmpty=function(a){return!a||!a.length}}}},Ff=/^(true|false|\d+)$/,
ke=function(){return{restrict:"A",priority:100,compile:function(a,c){return Ff.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},le=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=a.$eval(c.ngModelOptions);this.$options.updateOn!==s?(this.$options.updateOnDefault=!1,this.$options.updateOn=ba(this.$options.updateOn.replace(Df,function(){d.$options.updateOnDefault=
!0;return" "}))):this.$options.updateOnDefault=!0}]}},Ld=["$compile",function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);c.$watch(f.ngBind,function(a){e.text(a==s?"":a)})}}}}],Nd=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));c.$$addBindingInfo(f,d.expressions);g.$observe("ngBindTemplate",function(a){f.text(a)})}}}}],Md=
["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",compile:function(e,f){var g=c(f.ngBindHtml),h=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],Od=Vb("",!0),Qd=Vb("Odd",0),Pd=Vb("Even",1),Rd=Fa({compile:function(a,c){c.$set("ngCloak",s);a.removeClass("ng-cloak")}}),Sd=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],
pc={},Gf={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=va("ng-"+a);pc[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var h=d(g[c]);return function(c,d){var f=P(a);d.on(f,function(a){var d=function(){h(c,{$event:a})};Gf[f]&&e.$$phase?c.$evalAsync(d):c.$apply(d)})}}}}]});var Vd=["$animate",function(a){return{multiElement:!0,
transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,m,k;c.$watch(e.ngIf,function(c){c?m||g(function(c,f){m=f;c[c.length++]=Y.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(k&&(k.remove(),k=null),m&&(m.$destroy(),m=null),h&&(k=hb(h.clone),a.leave(k).then(function(){k=null}),h=null))})}}}],Wd=["$templateRequest","$anchorScroll","$animate","$sce",function(a,c,d,e){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",
controller:Ea.noop,compile:function(f,g){var h=g.ngInclude||g.src,m=g.onload||"",k=g.autoscroll;return function(f,g,l,q,r){var u=0,s,z,t,v=function(){z&&(z.remove(),z=null);s&&(s.$destroy(),s=null);t&&(d.leave(t).then(function(){z=null}),z=t,t=null)};f.$watch(e.parseAsResourceUrl(h),function(e){var h=function(){!B(k)||k&&!f.$eval(k)||c()},l=++u;e?(a(e,!0).then(function(a){if(l===u){var c=f.$new();q.template=a;a=r(c,function(a){v();d.enter(a,null,g).then(h)});s=c;t=a;s.$emit("$includeContentLoaded");
f.$eval(m)}},function(){l===u&&(v(),f.$emit("$includeContentError"))}),f.$emit("$includeContentRequested")):(v(),q.template=null)})}}}}],me=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(sc(f.template,Y).childNodes)(c,function(a){d.append(a)},s,s,d)):(d.html(f.template),a(d.contents())(c))}}}],Xd=Fa({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),Yd=Fa({terminal:!0,priority:1E3}),
Zd=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,f,g){var h=g.count,m=g.$attr.when&&f.attr(g.$attr.when),k=g.offset||0,n=e.$eval(m)||{},p={},l=c.startSymbol(),q=c.endSymbol(),s=/^when(Minus)?(.+)$/;r(g,function(a,c){s.test(c)&&(n[P(c.replace("when","").replace("Minus","-"))]=f.attr(g.$attr[c]))});r(n,function(a,e){p[e]=c(a.replace(d,l+h+"-"+k+q))});e.$watch(function(){var c=parseFloat(e.$eval(h));if(isNaN(c))return"";c in n||(c=a.pluralCat(c-k));return p[c](e)},
function(a){f.text(a)})}}}],$d=["$parse","$animate",function(a,c){var d=K("ngRepeat"),e=function(a,c,d,e,k,n,p){a[d]=e;k&&(a[k]=n);a.$index=c;a.$first=0===c;a.$last=c===p-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,m=Y.createComment(" end ngRepeat: "+h+" "),k=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
if(!k)throw d("iexp",h);var n=k[1],p=k[2],l=k[3],q=k[4],k=n.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!k)throw d("iidexp",n);var A=k[3]||k[1],u=k[2];if(l&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(l)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent)$/.test(l)))throw d("badident",l);var t,z,B,v,w={$id:Ka};q?t=a(q):(B=function(a,c){return Ka(c)},v=function(a){return a});return function(a,f,g,k,n){t&&(z=function(c,d,e){u&&(w[u]=c);w[A]=d;w.$index=e;return t(a,w)});
var q=Object.create(null);a.$watchCollection(p,function(g){var k,p,t=f[0],J,x=Object.create(null),w,N,E,F,y,C,ga;l&&(a[l]=g);if(Na(g))y=g,p=z||B;else{p=z||v;y=[];for(ga in g)g.hasOwnProperty(ga)&&"$"!=ga.charAt(0)&&y.push(ga);y.sort()}w=y.length;ga=Array(w);for(k=0;k<w;k++)if(N=g===y?k:y[k],E=g[N],F=p(N,E,k),q[F])C=q[F],delete q[F],x[F]=C,ga[k]=C;else{if(x[F])throw r(ga,function(a){a&&a.scope&&(q[a.id]=a)}),d("dupes",h,F,sa(E));ga[k]={id:F,scope:s,clone:s};x[F]=!0}for(J in q){C=q[J];F=hb(C.clone);
c.leave(F);if(F[0].parentNode)for(k=0,p=F.length;k<p;k++)F[k].$$NG_REMOVED=!0;C.scope.$destroy()}for(k=0;k<w;k++)if(N=g===y?k:y[k],E=g[N],C=ga[k],C.scope){J=t;do J=J.nextSibling;while(J&&J.$$NG_REMOVED);C.clone[0]!=J&&c.move(hb(C.clone),null,G(t));t=C.clone[C.clone.length-1];e(C.scope,k,A,E,u,N,w)}else n(function(a,d){C.scope=d;var f=m.cloneNode(!1);a[a.length++]=f;c.enter(a,null,G(t));t=f;C.clone=a;x[C.id]=C;e(C.scope,k,A,E,u,N,w)});q=x})}}}}],ae=["$animate",function(a){return{restrict:"A",multiElement:!0,
link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide")})}}}],Ud=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide")})}}}],be=Fa(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&r(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),ce=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,
d,e,f){var g=[],h=[],m=[],k=[],n=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=m.length;d<e;++d)a.cancel(m[d]);d=m.length=0;for(e=k.length;d<e;++d){var s=hb(h[d].clone);k[d].$destroy();(m[d]=a.leave(s)).then(n(m,d))}h.length=0;k.length=0;(g=f.cases["!"+c]||f.cases["?"])&&r(g,function(c){c.transclude(function(d,e){k.push(e);var f=c.element;d[d.length++]=Y.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],
de=Fa({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),ee=Fa({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),ge=Fa({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw K("ngTransclude")("orphan",ta(c));f(function(a){c.empty();
c.append(a)})}}),Hd=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],Hf=K("ngOptions"),fe=da({restrict:"A",terminal:!0}),Id=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:w};return{restrict:"E",require:["select",
"?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var m=this,k={},n=e,p;m.databound=d.ngModel;m.init=function(a,c,d){n=a;p=d};m.addOption=function(c,d){Ja(c,'"option value"');k[c]=!0;n.$viewValue==c&&(a.val(c),p.parent()&&p.remove());d[0].hasAttribute("selected")&&(d[0].selected=!0)};m.removeOption=function(a){this.hasOption(a)&&(delete k[a],n.$viewValue==a&&this.renderUnknownOption(a))};m.renderUnknownOption=function(c){c="? "+Ka(c)+" ?";p.val(c);a.prepend(p);a.val(c);p.prop("selected",
!0)};m.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){m.renderUnknownOption=w})}],link:function(e,g,h,m){function k(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(y.parent()&&y.remove(),c.val(a),""===a&&w.prop("selected",!0)):F(a)&&w?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){y.parent()&&y.remove();d.$setViewValue(c.val())})})}function n(a,c,d){var e;d.$render=function(){var a=new Xa(d.$viewValue);r(c.find("option"),
function(c){c.selected=B(a.get(c.value))})};a.$watch(function(){ra(e,d.$viewValue)||(e=qa(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];r(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function p(e,f,h){function g(){z||(e.$$postDigest(k),z=!0)}function k(){z=!1;var a={"":[]},c=[""],d,g,l,s,t;l=h.$modelValue;s=F(e)||[];var A=p?Zb(s):s,G,y,D;y={};D=!1;if(q)if(g=h.$modelValue,x&&L(g))for(D=new Xa([]),d={},t=0;t<g.length;t++)d[n]=
g[t],D.put(x(e,d),g[t]);else D=new Xa(g);t=D;var H,K;for(D=0;G=A.length,D<G;D++){g=D;if(p){g=A[D];if("$"===g.charAt(0))continue;y[p]=g}y[n]=s[g];d=r(e,y)||"";(g=a[d])||(g=a[d]=[],c.push(d));q?d=B(t.remove(x?x(e,y):w(e,y))):(x?(d={},d[n]=l,d=x(e,d)===x(e,y)):d=l===w(e,y),t=t||d);H=m(e,y);H=B(H)?H:"";g.push({id:x?x(e,y):p?A[D]:D,label:H,selected:d})}q||(u||null===l?a[""].unshift({id:"",label:"",selected:!t}):t||a[""].unshift({id:"?",label:"",selected:!0}));y=0;for(A=c.length;y<A;y++){d=c[y];g=a[d];
E.length<=y?(l={element:v.clone().attr("label",d),label:g.label},s=[l],E.push(s),f.append(l.element)):(s=E[y],l=s[0],l.label!=d&&l.element.attr("label",l.label=d));H=null;D=0;for(G=g.length;D<G;D++)d=g[D],(t=s[D+1])?(H=t.element,t.label!==d.label&&H.text(t.label=d.label),t.id!==d.id&&H.val(t.id=d.id),H[0].selected!==d.selected&&(H.prop("selected",t.selected=d.selected),X&&H.prop("selected",t.selected))):(""===d.id&&u?K=u:(K=C.clone()).val(d.id).prop("selected",d.selected).attr("selected",d.selected).text(d.label),
s.push({element:K,label:d.label,id:d.id,selected:d.selected}),H?H.after(K):l.element.append(K),H=K);for(D++;s.length>D;)s.pop().element.remove()}for(;E.length>y;)E.pop()[0].element.remove()}var l;if(!(l=t.match(d)))throw Hf("iexp",t,ta(f));var m=c(l[2]||l[1]),n=l[4]||l[6],p=l[5],r=c(l[3]||""),w=c(l[2]?l[1]:n),F=c(l[7]),x=l[8]?c(l[8]):null,E=[[{element:f,label:""}]];u&&(a(u)(e),u.removeClass("ng-scope"),u.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,c=F(e)||[],d={},g,l,m,
r,t,u,v;if(q)for(l=[],r=0,u=E.length;r<u;r++)for(a=E[r],m=1,t=a.length;m<t;m++){if((g=a[m].element)[0].selected){g=g.val();p&&(d[p]=g);if(x)for(v=0;v<c.length&&(d[n]=c[v],x(e,d)!=g);v++);else d[n]=c[g];l.push(w(e,d))}}else if(g=f.val(),"?"==g)l=s;else if(""===g)l=null;else if(x)for(v=0;v<c.length;v++){if(d[n]=c[v],x(e,d)==g){l=w(e,d);break}}else d[n]=c[g],p&&(d[p]=g),l=w(e,d);h.$setViewValue(l);k()})});h.$render=k;e.$watchCollection(F,g);q&&e.$watchCollection(function(){return h.$modelValue},g)}if(m[1]){var l=
m[0];m=m[1];var q=h.multiple,t=h.ngOptions,u=!1,w,z=!1,C=G(Y.createElement("option")),v=G(Y.createElement("optgroup")),y=C.clone();h=0;for(var E=g.children(),D=E.length;h<D;h++)if(""===E[h].value){w=u=E.eq(h);break}l.init(m,u,y);q&&(m.$isEmpty=function(a){return!a||0===a.length});t?p(e,g,m):q?n(e,g,m):k(e,g,m,l)}}}}],Kd=["$interpolate",function(a){var c={addOption:w,removeOption:w};return{restrict:"E",priority:100,compile:function(d,e){if(F(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,
d,e){var k=d.parent(),n=k.data("$selectController")||k.parent().data("$selectController");n&&n.databound?d.prop("selected",!1):n=c;f?a.$watch(f,function(a,c){e.$set("value",a);c!==a&&n.removeOption(c);n.addOption(a,d)}):n.addOption(e.value,d);d.on("$destroy",function(){n.removeOption(e.value)})}}}}],Jd=da({restrict:"E",terminal:!1});t.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(zd(),Bd(Ea),G(Y).ready(function(){vd(Y,gc)}))})(window,document);
!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-animate){display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map
;
/*
 AngularJS v1.3.0-rc.1
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/

(function(D,f,E){'use strict';f.module("ngAnimate",["ng"]).directive("ngAnimateChildren",function(){return function(P,w,g){g=g.ngAnimateChildren;f.isString(g)&&0===g.length?w.data("$$ngAnimateChildren",!0):P.$watch(g,function(f){w.data("$$ngAnimateChildren",!!f)})}}).factory("$$animateReflow",["$$rAF","$document",function(f,w){return function(g){return f(function(){g()})}}]).config(["$provide","$animateProvider",function(P,w){function g(f){for(var g=0;g<f.length;g++){var h=f[g];if(1==h.nodeType)return h}}
function Z(f,h){return g(f)==g(h)}var q=f.noop,h=f.forEach,$=w.$$selectors,W=f.isArray,u={running:!0};P.decorator("$animate",["$delegate","$$q","$injector","$sniffer","$rootElement","$$asyncCallback","$rootScope","$document","$templateRequest",function(Q,D,I,E,v,X,x,Y,J){function K(a,c){var d=a.data("$$ngAnimateState")||{};c&&(d.running=!0,d.structural=!0,a.data("$$ngAnimateState",d));return d.disabled||d.running&&d.structural}function L(a){var c,d=D.defer();d.promise.$$cancelFn=function(){c&&c()};
x.$$postDigest(function(){c=a(function(){d.resolve()})});return d.promise}function M(a,c,d){d=d||{};var e={};h(c.add,function(b){b&&b.length&&(e[b]=e[b]||0,e[b]++)});h(c.remove,function(b){b&&b.length&&(e[b]=e[b]||0,e[b]--)});var R=[];h(d,function(b,a){h(a.split(" "),function(a){R[a]=b})});var g=[],l=[];h(e,function(b,c){var d=f.$$hasClass(a[0],c),e=R[c]||{};0>b?(d||"addClass"==e.event)&&l.push(c):0<b&&(d&&"removeClass"!=e.event||g.push(c))});return 0<g.length+l.length&&[g.join(" "),l.join(" ")]}
function N(a){if(a){var c=[],d={};a=a.substr(1).split(".");(E.transitions||E.animations)&&c.push(I.get($[""]));for(var e=0;e<a.length;e++){var f=a[e],g=$[f];g&&!d[f]&&(c.push(I.get(g)),d[f]=!0)}return c}}function T(a,c,d){function e(b,a){var c=b[a],d=b["before"+a.charAt(0).toUpperCase()+a.substr(1)];if(c||d)return"leave"==a&&(d=c,c=null),U.push({event:a,fn:c}),m.push({event:a,fn:d}),!0}function f(c,r,e){var A=[];h(c,function(b){b.fn&&A.push(b)});var k=0;h(A,function(c,f){var g=function(){a:{if(r){(r[f]||
q)();if(++k<A.length)break a;r=null}e()}};switch(c.event){case "setClass":r.push(c.fn(a,l,b,g));break;case "addClass":r.push(c.fn(a,l||d,g));break;case "removeClass":r.push(c.fn(a,b||d,g));break;default:r.push(c.fn(a,g))}});r&&0===r.length&&e()}var g=a[0];if(g){var l,b;W(d)&&(l=d[0],b=d[1],l?b?d=l+" "+b:(d=l,c="addClass"):(d=b,c="removeClass"));var r="setClass"==c,A=r||"addClass"==c||"removeClass"==c,y=a.attr("class")+" "+d;if(B(y)){var C=q,k=[],m=[],n=q,s=[],U=[],y=(" "+y).replace(/\s+/g,".");h(N(y),
function(b){!e(b,c)&&r&&(e(b,"addClass"),e(b,"removeClass"))});return{node:g,event:c,className:d,isClassBased:A,isSetClassOperation:r,before:function(b){C=b;f(m,k,function(){C=q;b()})},after:function(b){n=b;f(U,s,function(){n=q;b()})},cancel:function(){k&&(h(k,function(b){(b||q)(!0)}),C(!0));s&&(h(s,function(b){(b||q)(!0)}),n(!0))}}}}}function F(a,c,d,e,g,S,l){function b(b){var l="$animate:"+b;m&&m[l]&&0<m[l].length&&X(function(){d.triggerHandler(l,{event:a,className:c})})}function r(){b("before")}
function A(){b("after")}function y(){y.hasBeenRun||(y.hasBeenRun=!0,S())}function C(){if(!C.hasBeenRun){C.hasBeenRun=!0;var r=d.data("$$ngAnimateState");r&&(k&&k.isClassBased?z(d,c):(X(function(){var b=d.data("$$ngAnimateState")||{};p==b.index&&z(d,c,a)}),d.data("$$ngAnimateState",r)));b("close");l()}}var k=T(d,a,c);if(!k)return y(),r(),A(),C(),q;a=k.event;c=k.className;var m=f.element._data(k.node),m=m&&m.events;e||(e=g?g.parent():d.parent());if(H(d,e))return y(),r(),A(),C(),q;e=d.data("$$ngAnimateState")||
{};var n=e.active||{},s=e.totalActive||0,U=e.last;g=!1;if(0<s){s=[];if(k.isClassBased)"setClass"==U.event?(s.push(U),z(d,c)):n[c]&&(t=n[c],t.event==a?g=!0:(s.push(t),z(d,c)));else if("leave"==a&&n["ng-leave"])g=!0;else{for(var t in n)s.push(n[t]);e={};z(d,!0)}0<s.length&&h(s,function(b){b.cancel()})}!k.isClassBased||k.isSetClassOperation||g||(g="addClass"==a==d.hasClass(c));if(g)return y(),r(),A(),b("close"),l(),q;n=e.active||{};s=e.totalActive||0;if("leave"==a)d.one("$destroy",function(b){b=f.element(this);
var a=b.data("$$ngAnimateState");a&&(a=a.active["ng-leave"])&&(a.cancel(),z(b,"ng-leave"))});d.addClass("ng-animate");var p=G++;s++;n[c]=k;d.data("$$ngAnimateState",{last:k,active:n,index:p,totalActive:s});r();k.before(function(b){var l=d.data("$$ngAnimateState");b=b||!l||!l.active[c]||k.isClassBased&&l.active[c].event!=a;y();!0===b?C():(A(),k.after(C))});return k.cancel}function p(a){if(a=g(a))a=f.isFunction(a.getElementsByClassName)?a.getElementsByClassName("ng-animate"):a.querySelectorAll(".ng-animate"),
h(a,function(a){a=f.element(a);(a=a.data("$$ngAnimateState"))&&a.active&&h(a.active,function(a){a.cancel()})})}function z(a,c){if(Z(a,v))u.disabled||(u.running=!1,u.structural=!1);else if(c){var d=a.data("$$ngAnimateState")||{},e=!0===c;!e&&d.active&&d.active[c]&&(d.totalActive--,delete d.active[c]);if(e||!d.totalActive)a.removeClass("ng-animate"),a.removeData("$$ngAnimateState")}}function H(a,c){if(u.disabled)return!0;if(Z(a,v))return u.running;var d,e,g;do{if(0===c.length)break;var h=Z(c,v),l=h?
u:c.data("$$ngAnimateState")||{};if(l.disabled)return!0;h&&(g=!0);!1!==d&&(h=c.data("$$ngAnimateChildren"),f.isDefined(h)&&(d=h));e=e||l.running||l.last&&!l.last.isClassBased}while(c=c.parent());return!g||!d&&e}v.data("$$ngAnimateState",u);var V=x.$watch(function(){return J.totalPendingRequests},function(a,c){0===a&&(V(),x.$$postDigest(function(){x.$$postDigest(function(){u.running=!1})}))}),G=0,O=w.classNameFilter(),B=O?function(a){return O.test(a)}:function(){return!0};return{enter:function(a,c,
d){a=f.element(a);c=c&&f.element(c);d=d&&f.element(d);K(a,!0);Q.enter(a,c,d);return L(function(e){return F("enter","ng-enter",f.element(g(a)),c,d,q,e)})},leave:function(a){a=f.element(a);p(a);K(a,!0);this.enabled(!1,a);return L(function(c){return F("leave","ng-leave",f.element(g(a)),null,null,function(){Q.leave(a)},c)})},move:function(a,c,d){a=f.element(a);c=c&&f.element(c);d=d&&f.element(d);p(a);K(a,!0);Q.move(a,c,d);return L(function(e){return F("move","ng-move",f.element(g(a)),c,d,q,e)})},addClass:function(a,
c){return this.setClass(a,c,[])},removeClass:function(a,c){return this.setClass(a,[],c)},setClass:function(a,c,d){a=f.element(a);a=f.element(g(a));if(K(a))return Q.setClass(a,c,d);c=W(c)?c:c.split(" ");d=W(d)?d:d.split(" ");var e=a.data("$$animateClasses");if(e)return e.add=e.add.concat(c),e.remove=e.remove.concat(d),e.promise;a.data("$$animateClasses",e={add:c,remove:d});return e.promise=L(function(c){var d=a.data("$$animateClasses");a.removeData("$$animateClasses");var l=a.data("$$ngAnimateState")||
{},b=M(a,d,l.active);return b?F("setClass",b,a,null,null,function(){Q.setClass(a,b[0],b[1])},c):c()})},cancel:function(a){a.$$cancelFn()},enabled:function(a,c){switch(arguments.length){case 2:if(a)z(c);else{var d=c.data("$$ngAnimateState")||{};d.disabled=!0;c.data("$$ngAnimateState",d)}break;case 1:u.disabled=!a;break;default:a=!u.disabled}return!!a}}}]);w.register("",["$window","$sniffer","$timeout","$$animateReflow",function(u,w,I,P){function v(a,b){d&&d();c.push(b);d=P(function(){h(c,function(b){b()});
c=[];d=null;B={}})}function X(a,b){var c=g(a);a=f.element(c);S.push(a);c=Date.now()+b;c<=R||(I.cancel(e),R=c,e=I(function(){x(S);S=[]},b,!1))}function x(a){h(a,function(b){(b=b.data("$$ngAnimateCSS3Data"))&&h(b.closeAnimationFns,function(b){b()})})}function Y(a,b){var c=b?B[b]:null;if(!c){var d=0,e=0,g=0,f=0;h(a,function(b){if(1==b.nodeType){b=u.getComputedStyle(b)||{};d=Math.max(J(b[H+"Duration"]),d);e=Math.max(J(b[H+"Delay"]),e);f=Math.max(J(b[G+"Delay"]),f);var a=J(b[G+"Duration"]);0<a&&(a*=parseInt(b[G+
"IterationCount"],10)||1);g=Math.max(a,g)}});c={total:0,transitionDelay:e,transitionDuration:d,animationDelay:f,animationDuration:g};b&&(B[b]=c)}return c}function J(a){var b=0;a=f.isString(a)?a.split(/\s*,\s*/):[];h(a,function(a){b=Math.max(parseFloat(a)||0,b)});return b}function K(c,b,d){c=0<=["ng-enter","ng-leave","ng-move"].indexOf(d);var e,f=b.parent(),h=f.data("$$ngAnimateKey");h||(f.data("$$ngAnimateKey",++a),h=a);e=h+"-"+g(b).getAttribute("class");var f=e+" "+d,h=B[f]?++B[f].total:0,k={};if(0<
h){var m=d+"-stagger",k=e+" "+m;(e=!B[k])&&b.addClass(m);k=Y(b,k);e&&b.removeClass(m)}b.addClass(d);var m=b.data("$$ngAnimateCSS3Data")||{},n=Y(b,f);e=n.transitionDuration;n=n.animationDuration;if(c&&0===e&&0===n)return b.removeClass(d),!1;d=c&&0<e;c=0<n&&0<k.animationDelay&&0===k.animationDuration;b.data("$$ngAnimateCSS3Data",{stagger:k,cacheKey:f,running:m.running||0,itemIndex:h,blockTransition:d,closeAnimationFns:m.closeAnimationFns||[]});b=g(b);d&&(b.style[H+"Property"]="none");c&&(b.style[G+
"PlayState"]="paused");return!0}function L(a,b,c,d){function e(a){b.off(D,f);b.removeClass(m);b.removeClass(n);x&&I.cancel(x);F(b,c);a=g(b);for(var d in s)a.style.removeProperty(s[d])}function f(b){b.stopPropagation();var a=b.originalEvent||b;b=a.$manualTimeStamp||a.timeStamp||Date.now();a=parseFloat(a.elapsedTime.toFixed(3));Math.max(b-E,0)>=B&&a>=w&&d()}var k=g(b);a=b.data("$$ngAnimateCSS3Data");if(-1!=k.getAttribute("class").indexOf(c)&&a){a.blockTransition&&(k.style[H+"Property"]="");var m="",
n="";h(c.split(" "),function(b,a){var c=(0<a?" ":"")+b;m+=c+"-active";n+=c+"-pending"});var s=[],p=a.itemIndex,t=a.stagger,q=0;if(0<p){q=0;0<t.transitionDelay&&0===t.transitionDuration&&(q=t.transitionDelay*p);var u=0;0<t.animationDelay&&0===t.animationDuration&&(u=t.animationDelay*p,s.push(z+"animation-play-state"));q=Math.round(100*Math.max(q,u))/100}q||b.addClass(m);var v=Y(b,a.cacheKey+" "+m),w=Math.max(v.transitionDuration,v.animationDuration);if(0===w)b.removeClass(m),F(b,c),d();else{var p=
Math.max(v.transitionDelay,v.animationDelay),B=1E3*p;0<s.length&&(t=k.getAttribute("style")||"",";"!==t.charAt(t.length-1)&&(t+=";"),k.setAttribute("style",t+" "));var E=Date.now(),D=O+" "+V,p=1E3*(q+1.5*(p+w)),x;0<q&&(b.addClass(n),x=I(function(){x=null;b.addClass(m);b.removeClass(n);0<v.animationDuration&&(k.style[G+"PlayState"]="")},1E3*q,!1));b.on(D,f);a.closeAnimationFns.push(function(){e();d()});a.running++;X(b,p);return e}}else d()}function M(a,b,c,d){if(K(a,b,c,d))return function(a){a&&F(b,
c)}}function N(a,b,c,d){if(b.data("$$ngAnimateCSS3Data"))return L(a,b,c,d);F(b,c);d()}function T(a,b,c,d){var e=M(a,b,c);if(e){var f=e;v(b,function(){f=N(a,b,c,d)});return function(b){(f||q)(b)}}d()}function F(a,b){a.removeClass(b);var c=a.data("$$ngAnimateCSS3Data");c&&(c.running&&c.running--,c.running&&0!==c.running||a.removeData("$$ngAnimateCSS3Data"))}function p(a,b){var c="";a=W(a)?a:a.split(/\s+/);h(a,function(a,d){a&&0<a.length&&(c+=(0<d?" ":"")+a+b)});return c}var z="",H,V,G,O;D.ontransitionend===
E&&D.onwebkittransitionend!==E?(z="-webkit-",H="WebkitTransition",V="webkitTransitionEnd transitionend"):(H="transition",V="transitionend");D.onanimationend===E&&D.onwebkitanimationend!==E?(z="-webkit-",G="WebkitAnimation",O="webkitAnimationEnd animationend"):(G="animation",O="animationend");var B={},a=0,c=[],d,e=null,R=0,S=[];return{enter:function(a,b){return T("enter",a,"ng-enter",b)},leave:function(a,b){return T("leave",a,"ng-leave",b)},move:function(a,b){return T("move",a,"ng-move",b)},beforeSetClass:function(a,
b,c,d){b=p(c,"-remove")+" "+p(b,"-add");if(b=M("setClass",a,b))return v(a,d),b;d()},beforeAddClass:function(a,b,c){if(b=M("addClass",a,p(b,"-add")))return v(a,c),b;c()},beforeRemoveClass:function(a,b,c){if(b=M("removeClass",a,p(b,"-remove")))return v(a,c),b;c()},setClass:function(a,b,c,d){c=p(c,"-remove");b=p(b,"-add");return N("setClass",a,c+" "+b,d)},addClass:function(a,b,c){return N("addClass",a,p(b,"-add"),c)},removeClass:function(a,b,c){return N("removeClass",a,p(b,"-remove"),c)}}}])}])})(window,
window.angular);
//# sourceMappingURL=angular-animate.min.js.map
;
/*
 AngularJS v1.3.0-rc.1
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/

(function(q,g,r){'use strict';function F(a){var d=[];t(d,g.noop).chars(a);return d.join("")}function m(a){var d={};a=a.split(",");var c;for(c=0;c<a.length;c++)d[a[c]]=!0;return d}function G(a,d){function c(a,b,c,h){b=g.lowercase(b);if(u[b])for(;f.last()&&v[f.last()];)e("",f.last());w[b]&&f.last()==b&&e("",b);(h=x[b]||!!h)||f.push(b);var n={};c.replace(H,function(a,b,d,c,e){n[b]=s(d||c||e||"")});d.start&&d.start(b,n,h)}function e(a,b){var c=0,e;if(b=g.lowercase(b))for(c=f.length-1;0<=c&&f[c]!=b;c--);
if(0<=c){for(e=f.length-1;e>=c;e--)d.end&&d.end(f[e]);f.length=c}}"string"!==typeof a&&(a=null===a||"undefined"===typeof a?"":""+a);var b,l,f=[],n=a,h;for(f.last=function(){return f[f.length-1]};a;){h="";l=!0;if(f.last()&&y[f.last()])a=a.replace(new RegExp("(.*)<\\s*\\/\\s*"+f.last()+"[^>]*>","i"),function(a,b){b=b.replace(I,"$1").replace(J,"$1");d.chars&&d.chars(s(b));return""}),e("",f.last());else{if(0===a.indexOf("\x3c!--"))b=a.indexOf("--",4),0<=b&&a.lastIndexOf("--\x3e",b)===b&&(d.comment&&d.comment(a.substring(4,
b)),a=a.substring(b+3),l=!1);else if(z.test(a)){if(b=a.match(z))a=a.replace(b[0],""),l=!1}else if(K.test(a)){if(b=a.match(A))a=a.substring(b[0].length),b[0].replace(A,e),l=!1}else L.test(a)&&((b=a.match(B))?(b[4]&&(a=a.substring(b[0].length),b[0].replace(B,c)),l=!1):(h+="<",a=a.substring(1)));l&&(b=a.indexOf("<"),h+=0>b?a:a.substring(0,b),a=0>b?"":a.substring(b),d.chars&&d.chars(s(h)))}if(a==n)throw M("badparse",a);n=a}e()}function s(a){if(!a)return"";var d=N.exec(a);a=d[1];var c=d[3];if(d=d[2])p.innerHTML=
d.replace(/</g,"&lt;"),d="textContent"in p?p.textContent:p.innerText;return a+d+c}function C(a){return a.replace(/&/g,"&amp;").replace(O,function(a){var c=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(c-55296)+(a-56320)+65536)+";"}).replace(P,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function t(a,d){var c=!1,e=g.bind(a,a.push);return{start:function(a,l,f){a=g.lowercase(a);!c&&y[a]&&(c=a);c||!0!==D[a]||(e("<"),e(a),g.forEach(l,function(c,f){var k=
g.lowercase(f),l="img"===a&&"src"===k||"background"===k;!0!==Q[k]||!0===E[k]&&!d(c,l)||(e(" "),e(f),e('="'),e(C(c)),e('"'))}),e(f?"/>":">"))},end:function(a){a=g.lowercase(a);c||!0!==D[a]||(e("</"),e(a),e(">"));a==c&&(c=!1)},chars:function(a){c||e(C(a))}}}var M=g.$$minErr("$sanitize"),B=/^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,A=/^<\/\s*([\w:-]+)[^>]*>/,H=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,L=/^</,
K=/^<\//,I=/\x3c!--(.*?)--\x3e/g,z=/<!DOCTYPE([^>]*?)>/i,J=/<!\[CDATA\[(.*?)]]\x3e/g,O=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,P=/([^\#-~| |!])/g,x=m("area,br,col,hr,img,wbr");q=m("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");r=m("rp,rt");var w=g.extend({},r,q),u=g.extend({},q,m("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),v=g.extend({},r,m("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
y=m("script,style"),D=g.extend({},x,u,v,w),E=m("background,cite,href,longdesc,src,usemap"),Q=g.extend({},E,m("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width")),p=document.createElement("pre"),N=/^(\s*)([\s\S]*?)(\s*)$/;g.module("ngSanitize",[]).provider("$sanitize",
function(){this.$get=["$$sanitizeUri",function(a){return function(d){var c=[];G(d,t(c,function(c,b){return!/^unsafe/.test(a(c,b))}));return c.join("")}}]});g.module("ngSanitize").filter("linky",["$sanitize",function(a){var d=/((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"]/,c=/^mailto:/;return function(e,b){function l(a){a&&k.push(F(a))}function f(a,c){k.push("<a ");g.isDefined(b)&&(k.push('target="'),k.push(b),k.push('" '));k.push('href="');k.push(a);k.push('">');l(c);k.push("</a>")}
if(!e)return e;for(var n,h=e,k=[],m,p;n=h.match(d);)m=n[0],n[2]==n[3]&&(m="mailto:"+m),p=n.index,l(h.substr(0,p)),f(m,n[0].replace(c,"")),h=h.substring(p+n[0].length);l(h);return a(k.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map
;
/*
 AngularJS v1.3.0-beta.7
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/

(function(y,w,z){'use strict';function u(f,a,c){r.directive(f,["$parse","$swipe",function(m,p){var q=75,g=0.3,e=30;return function(h,n,l){function k(d){if(!b)return!1;var s=Math.abs(d.y-b.y);d=(d.x-b.x)*a;return v&&s<q&&0<d&&d>e&&s/d<g}var s=m(l[f]),b,v;p.bind(n,{start:function(d,s){b=d;v=!0},cancel:function(b){v=!1},end:function(b,a){k(b)&&h.$apply(function(){n.triggerHandler(c);s(h,{$event:a})})}})}}])}var r=w.module("ngTouch",[]);r.factory("$swipe",[function(){function f(a){var c=a.touches&&a.touches.length?
a.touches:[a];a=a.changedTouches&&a.changedTouches[0]||a.originalEvent&&a.originalEvent.changedTouches&&a.originalEvent.changedTouches[0]||c[0].originalEvent||c[0];return{x:a.clientX,y:a.clientY}}return{bind:function(a,c){var m,p,q,g,e=!1;a.on("touchstart mousedown",function(a){q=f(a);e=!0;p=m=0;g=q;c.start&&c.start(q,a)});a.on("touchcancel",function(a){e=!1;c.cancel&&c.cancel(a)});a.on("touchmove mousemove",function(a){if(e&&q){var n=f(a);m+=Math.abs(n.x-g.x);p+=Math.abs(n.y-g.y);g=n;10>m&&10>p||
(p>m?(e=!1,c.cancel&&c.cancel(a)):(a.preventDefault(),c.move&&c.move(n,a)))}});a.on("touchend mouseup",function(a){e&&(e=!1,c.end&&c.end(f(a),a))})}}}]);r.config(["$provide",function(f){f.decorator("ngClickDirective",["$delegate",function(a){a.shift();return a}])}]);r.directive("ngClick",["$parse","$timeout","$rootElement",function(f,a,c){function m(a,b,c){for(var d=0;d<a.length;d+=2)if(Math.abs(a[d]-b)<e&&Math.abs(a[d+1]-c)<e)return a.splice(d,d+2),!0;return!1}function p(a){if(!(Date.now()-n>g)){var b=
a.touches&&a.touches.length?a.touches:[a],c=b[0].clientX,b=b[0].clientY;1>c&&1>b||k&&k[0]===c&&k[1]===b||(k&&(k=null),"label"===a.target.tagName.toLowerCase()&&(k=[c,b]),m(l,c,b)||(a.stopPropagation(),a.preventDefault(),a.target&&a.target.blur()))}}function q(c){c=c.touches&&c.touches.length?c.touches:[c];var b=c[0].clientX,e=c[0].clientY;l.push(b,e);a(function(){for(var a=0;a<l.length;a+=2)if(l[a]==b&&l[a+1]==e){l.splice(a,a+2);break}},g,!1)}var g=2500,e=25,h="ng-click-active",n,l,k;return function(a,
b,e){function d(){k=!1;b.removeClass(h)}var g=f(e.ngClick),k=!1,t,r,u,x;b.on("touchstart",function(a){k=!0;t=a.target?a.target:a.srcElement;3==t.nodeType&&(t=t.parentNode);b.addClass(h);r=Date.now();a=a.touches&&a.touches.length?a.touches:[a];a=a[0].originalEvent||a[0];u=a.clientX;x=a.clientY});b.on("touchmove",function(a){d()});b.on("touchcancel",function(a){d()});b.on("touchend",function(a){var g=Date.now()-r,f=a.changedTouches&&a.changedTouches.length?a.changedTouches:a.touches&&a.touches.length?
a.touches:[a],h=f[0].originalEvent||f[0],f=h.clientX,h=h.clientY,s=Math.sqrt(Math.pow(f-u,2)+Math.pow(h-x,2));k&&(750>g&&12>s)&&(l||(c[0].addEventListener("click",p,!0),c[0].addEventListener("touchstart",q,!0),l=[]),n=Date.now(),m(l,f,h),t&&t.blur(),w.isDefined(e.disabled)&&!1!==e.disabled||b.triggerHandler("click",[a]));d()});b.onclick=function(a){};b.on("click",function(b,c){a.$apply(function(){g(a,{$event:c||b})})});b.on("mousedown",function(a){b.addClass(h)});b.on("mousemove mouseup",function(a){b.removeClass(h)})}}]);
u("ngSwipeLeft",-1,"swipeleft");u("ngSwipeRight",1,"swiperight")})(window,window.angular);
//# sourceMappingURL=angular-touch.min.js.map
;
'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
function getDecimals(n) {
  n = n + '';
  var i = n.indexOf('.');
  return (i == -1) ? 0 : n.length - i - 1;
}

function getVF(n, opt_precision) {
  var v = opt_precision;

  if (undefined === v) {
    v = Math.min(getDecimals(n), 3);
  }

  var base = Math.pow(10, v);
  var f = ((n * base) | 0) % base;
  return {v: v, f: f};
}

function getWT(v, f) {
  if (f === 0) {
    return {w: 0, t: 0};
  }

  while ((f % 10) === 0) {
    f /= 10;
    v--;
  }

  return {w: v, t: f};
}

$provide.value("$locale", {
  "TELAS": {
    'eventos': {
      'confirm': {
        'conflito_data': {
          'autorizar': 'Autorizar mesmo assim. Cuidado! Haverá mais de uma reserva no mesmo local, data e horário',
          'lista_espera': 'Colocar Reserva na Lista de Espera',
          'clone': 'Reservar áreas disponívels, e inserir na lista de espera as indisponíveis (em outra reserva)',
          'cancelar': 'Cancelar o evento e liberar todas as áreas',
          'cancelar_parcial': 'Cancelar o evento parcialmente, mantendo apenas as areas que não podem mais serem canceladas'
        }
      }
    },
    "votacoes": {
      "form":{
        "placeholders":{
          'pergunta_titulo': 'Ex.: Cor do Blindex',
          'pergunta_descricao': 'Ex.: Definir a cor do Blindex para...',
          'opcoes':[
            'Ex.: Branco',
            'Ex.: Azul',
            'Ex.: Verde',
            'Ex.: Preto',
            'Ex.: Dourado',
            'Ex.: Marrom',
            'Ex.: Roxo'
          ]
        }
      }
    },
    "ocorrencia": {
      "timeline":{
        "entry_remove_messages":{
          "destroying": "removendo",
          "destroyed": "removido"
        }
      }
    }
  },
  "MODELS": {
    "evento": {
      "solicitacao": {
        "humanized_tipo": {
          "autorizacao": "autorização",
          "alteracao": "alteração",
          "cancelamento": "cancelamento"
        }
      }
    },
    "ocorrencia": {
      "notificacao": {
        "estado": {
          'waiting_to_send': 'Aguardando envio',
          'sended': 'Enviado',
          'readed': 'Lido'
        }
      },
      "registro": {
        "estado": {
          'pending': 'pendente',
          'closed': 'resolvida'
        },
        "tipo": {
          'complain': 'reclamação',
          'suggestion': 'sugestão',
          'compliment': 'elogio',
          'request': 'requisição',
          'safety': 'segurança',
          'other': 'outros'
        }
      }
    }

  },
  "DATETIME_FORMATS": {
    "AMPMS": [
      "AM",
      "PM"
    ],
    "DAY": [
      "domingo",
      "segunda-feira",
      "ter\u00e7a-feira",
      "quarta-feira",
      "quinta-feira",
      "sexta-feira",
      "s\u00e1bado"
    ],
    "MONTH": [
      "janeiro",
      "fevereiro",
      "mar\u00e7o",
      "abril",
      "maio",
      "junho",
      "julho",
      "agosto",
      "setembro",
      "outubro",
      "novembro",
      "dezembro"
    ],
    "SHORTDAY": [
      "dom",
      "seg",
      "ter",
      "qua",
      "qui",
      "sex",
      "s\u00e1b"
    ],
    "SHORTMONTH": [
      "jan",
      "fev",
      "mar",
      "abr",
      "mai",
      "jun",
      "jul",
      "ago",
      "set",
      "out",
      "nov",
      "dez"
    ],
    "fullDate": "EEEE, d 'de' MMMM 'de' y",
    "longDate": "d 'de' MMMM 'de' y",
    "medium": "dd/MM/y HH:mm:ss",
    "mediumDate": "dd/MM/y",
    "mediumTime": "HH:mm:ss",
    "short": "dd/MM/yy HH:mm",
    "shortDate": "dd/MM/yy",
    "shortTime": "HH:mm",
    "day_month": 'dd/MM'
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "R$",
    "DECIMAL_SEP": ",",
    "GROUP_SEP": ".",
    "PATTERNS": [
      {
        "gSize": 3,
        "lgSize": 3,
        "macFrac": 0,
        "maxFrac": 3,
        "minFrac": 0,
        "minInt": 1,
        "negPre": "-",
        "negSuf": "",
        "posPre": "",
        "posSuf": ""
      },
      {
        "gSize": 3,
        "lgSize": 3,
        "macFrac": 0,
        "maxFrac": 2,
        "minFrac": 2,
        "minInt": 1,
        "negPre": "\u00a4-",
        "negSuf": "",
        "posPre": "\u00a4",
        "posSuf": ""
      }
    ]
  },
  "id": "pt-br",
  "pluralCat": function (n, opt_precision) {  var i = n | 0;  var vf = getVF(n, opt_precision);  var wt = getWT(vf.v, vf.f);  if (i == 1 && vf.v == 0 || i == 0 && wt.t == 1) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);
!function(){"use strict";function a(a,b){return a.module("angularMoment",[]).constant("angularMomentConfig",{preprocess:null,timezone:"",format:null}).constant("moment",b).constant("amTimeAgoConfig",{withoutSuffix:!1,serverTime:null,titleFormat:null}).directive("amTimeAgo",["$window","moment","amMoment","amTimeAgoConfig","angularMomentConfig",function(b,c,d,e,f){return function(g,h,i){function j(){var a;if(e.serverTime){var b=(new Date).getTime(),d=b-u+e.serverTime;a=c(d)}else a=c();return a}function k(){q&&(b.clearTimeout(q),q=null)}function l(a){if(h.text(a.from(j(),s)),t&&!h.attr("title")&&h.attr("title",a.local().format(t)),!x){var c=Math.abs(j().diff(a,"minute")),d=3600;1>c?d=1:60>c?d=30:180>c&&(d=300),q=b.setTimeout(function(){l(a)},1e3*d)}}function m(a){y&&h.attr("datetime",a)}function n(){if(k(),o){var a=d.preprocessDate(o,v,r);l(a),m(a.toISOString())}}var o,p,q=null,r=f.format,s=e.withoutSuffix,t=e.titleFormat,u=(new Date).getTime(),v=f.preprocess,w=i.amTimeAgo.replace(/^::/,""),x=0===i.amTimeAgo.indexOf("::"),y="TIME"===h[0].nodeName.toUpperCase();p=g.$watch(w,function(a){return"undefined"==typeof a||null===a||""===a?(k(),void(o&&(h.text(""),m(""),o=null))):(o=a,n(),void(void 0!==a&&x&&p()))}),a.isDefined(i.amWithoutSuffix)&&g.$watch(i.amWithoutSuffix,function(a){"boolean"==typeof a?(s=a,n()):s=e.withoutSuffix}),i.$observe("amFormat",function(a){"undefined"!=typeof a&&(r=a,n())}),i.$observe("amPreprocess",function(a){v=a,n()}),g.$on("$destroy",function(){k()}),g.$on("amMoment:localeChanged",function(){n()})}}]).service("amMoment",["moment","$rootScope","$log","angularMomentConfig",function(b,c,d,e){var f=this;this.preprocessors={utc:b.utc,unix:b.unix},this.changeLocale=function(d){var e=(b.locale||b.lang)(d);return a.isDefined(d)&&(c.$broadcast("amMoment:localeChanged"),c.$broadcast("amMoment:languageChange")),e},this.changeLanguage=function(a){return d.warn("angular-moment: Usage of amMoment.changeLanguage() is deprecated. Please use changeLocale()"),f.changeLocale(a)},this.preprocessDate=function(c,f,g){return a.isUndefined(f)&&(f=e.preprocess),this.preprocessors[f]?this.preprocessors[f](c,g):(f&&d.warn("angular-moment: Ignoring unsupported value for preprocess: "+f),!isNaN(parseFloat(c))&&isFinite(c)?b(parseInt(c,10)):b(c,g))},this.applyTimezone=function(a){var b=e.timezone;return a&&b&&(a.tz?a=a.tz(b):d.warn("angular-moment: timezone specified but moment.tz() is undefined. Did you forget to include moment-timezone.js?")),a}}]).filter("amCalendar",["moment","amMoment",function(a,b){return function(c,d){if("undefined"==typeof c||null===c)return"";c=b.preprocessDate(c,d);var e=a(c);return e.isValid()?b.applyTimezone(e).calendar():""}}]).filter("amDateFormat",["moment","amMoment",function(a,b){return function(c,d,e){if("undefined"==typeof c||null===c)return"";c=b.preprocessDate(c,e);var f=a(c);return f.isValid()?b.applyTimezone(f).format(d):""}}]).filter("amDurationFormat",["moment",function(a){return function(b,c,d){return"undefined"==typeof b||null===b?"":a.duration(b,c).humanize(d)}}])}"function"==typeof define&&define.amd?define("angular-moment",["angular","moment"],a):a(angular,window.moment)}();
//# sourceMappingURL=angular-moment.min.js.map
;
/**
 * Angular Carousel - Mobile friendly touch carousel for AngularJS
 * @version v0.3.7 - 2014-11-11
 * @link http://revolunet.github.com/angular-carousel
 * @author Julien Bouquillon <julien@revolunet.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

angular.module("angular-carousel",["ngTouch","angular-carousel.shifty"]),angular.module("angular-carousel").directive("rnCarouselAutoSlide",["$timeout",function(a){return{restrict:"A",link:function(b,c,d){var e=Math.round(1e3*parseFloat(d.rnCarouselAutoSlide)),f=increment=!1,g=c.children().length;b.carouselExposedIndex||(b.carouselExposedIndex=0),stopAutoplay=function(){angular.isDefined(f)&&a.cancel(f),f=void 0},increment=function(){b.carouselExposedIndex=b.carouselExposedIndex<g-1?b.carouselExposedIndex+1:0},restartTimer=function(){stopAutoplay(),f=a(increment,e)},b.$watch("carouselIndex",function(){restartTimer()}),restartTimer(),d.rnCarouselPauseOnHover&&"false"!=d.rnCarouselPauseOnHover&&(c.on("mouseenter",stopAutoplay),c.on("mouseleave",restartTimer)),b.$on("$destroy",function(){stopAutoplay(),c.off("mouseenter",stopAutoplay),c.off("mouseleave",restartTimer)})}}}]),angular.module("angular-carousel").directive("rnCarouselIndicators",["$parse",function(a){return{restrict:"A",scope:{slides:"=",index:"=rnCarouselIndex"},templateUrl:"carousel-indicators.html",link:function(b,c,d){var e=a(d.rnCarouselIndex);b.goToSlide=function(a){e.assign(b.$parent.$parent,a)}}}}]),angular.module("angular-carousel").run(["$templateCache",function(a){a.put("carousel-indicators.html",'<div class="rn-carousel-indicator">\n<span ng-repeat="slide in slides" ng-class="{active: $index==index}" ng-click="goToSlide($index)">●</span></div>')}]),function(){"use strict";angular.module("angular-carousel").service("DeviceCapabilities",function(){function a(){var a="transform",b="webkitTransform";return"undefined"!=typeof document.body.style[a]?["webkit","moz","o","ms"].every(function(b){var c="-"+b+"-transform";return"undefined"!=typeof document.body.style[c]?(a=c,!1):!0}):a="undefined"!=typeof document.body.style[b]?"-webkit-transform":void 0,a}function b(){var a,b=document.createElement("p"),c={webkitTransform:"-webkit-transform",msTransform:"-ms-transform",transform:"transform"};document.body.insertBefore(b,null);for(var d in c)void 0!==b.style[d]&&(b.style[d]="translate3d(1px,1px,1px)",a=window.getComputedStyle(b).getPropertyValue(c[d]));return document.body.removeChild(b),void 0!==a&&a.length>0&&"none"!==a}return{has3d:b(),transformProperty:a()}}).service("computeCarouselSlideStyle",["DeviceCapabilities",function(a){return function(b,c,d){var e,f={display:"inline-block"},g=100*b+c,h=a.has3d?"translate3d("+g+"%, 0, 0)":"translate3d("+g+"%, 0)",i=(100-Math.abs(g))/100;if(a.transformProperty)if("fadeAndSlide"==d)f[a.transformProperty]=h,e=0,Math.abs(g)<100&&(e=.3+.7*i),f.opacity=e;else if("hexagon"==d){var j=100,k=0,l=60*(i-1);j=-100*b>c?100:0,k=-100*b>c?l:-l,f[a.transformProperty]=h+" rotateY("+k+"deg)",f[a.transformProperty+"-origin"]=j+"% 50%"}else if("zoom"==d){f[a.transformProperty]=h;var m=1;Math.abs(g)<100&&(m=1+2*(1-i)),f[a.transformProperty]+=" scale("+m+")",f[a.transformProperty+"-origin"]="50% 50%",e=0,Math.abs(g)<100&&(e=.3+.7*i),f.opacity=e}else f[a.transformProperty]=h;else f["margin-left"]=g+"%";return f}}]).service("createStyleString",function(){return function(a){var b=[];return angular.forEach(a,function(a,c){b.push(c+":"+a)}),b.join(";")}}).directive("rnCarousel",["$swipe","$window","$document","$parse","$compile","$timeout","$interval","computeCarouselSlideStyle","createStyleString","Tweenable",function(a,b,c,d,e,f,g,h,i,j){function k(a,b,c){var d=c;return a.every(function(a,c){return angular.equals(a,b)?(d=c,!1):!0}),d}{var l=0;b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame}return{restrict:"A",scope:!0,compile:function(m,n){var o,p,q=m[0].querySelector("li"),r=q?q.attributes:[],s=!1,t=!1;return["ng-repeat","data-ng-repeat","ng:repeat","x-ng-repeat"].every(function(a){var b=r[a];if(angular.isDefined(b)){var c=b.value.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),d=c[3];if(o=c[1],p=c[2],o)return angular.isDefined(n.rnCarouselBuffered)&&(t=!0,b.value=o+" in "+p+"|carouselSlice:carouselBufferIndex:carouselBufferSize",d&&(b.value+=" track by "+d)),s=!0,!1}return!0}),function(m,n,o){function q(){return n[0].querySelectorAll("ul[rn-carousel] > li")}function r(a){L=!0,A({x:a.clientX,y:a.clientY},a)}function u(a){var b=100*m.carouselBufferIndex+a;angular.forEach(q(),function(a,c){a.style.cssText=i(h(c,b,I.transitionType))})}function v(a,b){if(void 0===a&&(a=m.carouselIndex),b=b||{},b.animate===!1||"none"===I.transitionType)return O=!1,K=-100*a,m.carouselIndex=a,B(),void 0;O=!0;var c=new j;c.tween({from:{x:K},to:{x:-100*a},duration:I.transitionDuration,easing:I.transitionEasing,step:function(a){u(a.x)},finish:function(){O=!1,m.$apply(function(){m.carouselIndex=a,K=-100*a,B()})}})}function w(){var a=n[0].getBoundingClientRect();return a.width?a.width:a.right-a.left}function x(){M=w()}function y(a){return c.bind("mouseup",r),x(),N=n[0].querySelector("li").getBoundingClientRect().left,D=!0,E=a.x,!1}function z(a){if(!O){var b,c;if(D&&(b=a.x,c=E-b,c>2||-2>c)){L=!0;var d=K+100*-c/M;u(d)}return!1}}function A(a,b){if((!b||L)&&(c.unbind("mouseup",r),D=!1,L=!1,F=E-a.x,0!==F&&!O))if(K+=100*-F/M,I.isSequential){var d=I.moveTreshold*M,e=-F,f=-Math[e>=0?"ceil":"floor"](e/M),g=Math.abs(e)>d;G&&f+m.carouselIndex>=G.length&&(f=G.length-1-m.carouselIndex),f+m.carouselIndex<0&&(f=-m.carouselIndex);var h=g?f:0;F=m.carouselIndex+h,v(F)}else m.$apply(function(){m.carouselIndex=parseInt(-K/100,10),B()})}function B(){var a=0,b=(m.carouselBufferSize-1)/2;t?(a=m.carouselIndex<=b?0:G&&G.length<m.carouselBufferSize?0:G&&m.carouselIndex>G.length-m.carouselBufferSize?G.length-m.carouselBufferSize:m.carouselIndex-b,m.carouselBufferIndex=a,f(function(){u(K)},0,!1)):f(function(){u(K)},0,!1)}function C(){x(),v()}l++;var D,E,F,G,H={transitionType:o.rnCarouselTransition||"slide",transitionEasing:"easeTo",transitionDuration:300,isSequential:!0,autoSlideDuration:3,bufferSize:5,moveTreshold:.1},I=angular.extend({},H),J=!1,K=0,L=!1,M=null,N=null,O=!1;if(void 0!==o.rnCarouselControls){var P='<div class="rn-carousel-controls">\n  <span class="rn-carousel-control rn-carousel-control-prev" ng-click="prevSlide()" ng-if="carouselIndex > 0"></span>\n  <span class="rn-carousel-control rn-carousel-control-next" ng-click="nextSlide()" ng-if="carouselIndex < '+p+'.length - 1"></span>\n</div>';n.append(e(angular.element(P))(m))}a.bind(n,{start:y,move:z,end:A,cancel:function(a){A({},a)}}),m.nextSlide=function(a){var b=m.carouselIndex+1;b>G.length-1&&(b=0),O||v(b,a)},m.prevSlide=function(a){var b=m.carouselIndex-1;0>b&&(b=G.length-1),v(b,a)};var Q=!0;m.carouselIndex=0,s||(G=[],angular.forEach(q(),function(a,b){G.push({id:b})}));var R;if(void 0!==o.rnCarouselAutoSlide){var S=parseInt(o.rnCarouselAutoSlide,10)||I.autoSlideDuration;R=g(function(){O||D||m.nextSlide()},1e3*S)}if(o.rnCarouselIndex){var T=function(a){U.assign(m.$parent,a)},U=d(o.rnCarouselIndex);angular.isFunction(U.assign)?(m.$watch("carouselIndex",function(a){O||T(a)}),m.$parent.$watch(U,function(a){void 0!==a&&null!==a&&(G&&a>=G.length?(a=G.length-1,T(a)):G&&0>a&&(a=0,T(a)),O||v(a,{animate:!Q}),Q=!1)}),J=!0):isNaN(o.rnCarouselIndex)||v(parseInt(o.rnCarouselIndex,10),{animate:!1})}else v(0,{animate:!Q}),Q=!1;if(o.rnCarouselLocked&&m.$watch(o.rnCarouselLocked,function(a){O=a===!0?!0:!1}),s){var V=void 0!==o.rnCarouselDeepWatch;m[V?"$watch":"$watchCollection"](p,function(a,b){(G||a).slice();if(G=a,V&&angular.isArray(a)){var c=b[m.carouselIndex],d=k(a,c,m.carouselIndex);v(d,{animate:!1})}else v(m.carouselIndex,{animate:!1})},!0)}m.$on("$destroy",function(){c.unbind("mouseup",r)}),m.carouselBufferIndex=0,m.carouselBufferSize=I.bufferSize;var W=angular.element(b);W.bind("orientationchange",C),W.bind("resize",C),m.$on("$destroy",function(){c.unbind("mouseup",r),W.unbind("orientationchange",C),W.unbind("resize",C)})}}}}])}(),angular.module("angular-carousel.shifty",[]).factory("Tweenable",function(){return function(a){var b=function(){"use strict";function b(){}function c(a,b){var c;for(c in a)Object.hasOwnProperty.call(a,c)&&b(c)}function d(a,b){return c(b,function(c){a[c]=b[c]}),a}function e(a,b){c(b,function(c){"undefined"==typeof a[c]&&(a[c]=b[c])})}function f(a,b,c,d,e,f,h){var i,j=(a-f)/e;for(i in b)b.hasOwnProperty(i)&&(b[i]=g(c[i],d[i],l[h[i]],j));return b}function g(a,b,c,d){return a+(b-a)*c(d)}function h(a,b){var d=k.prototype.filter,e=a._filterArgs;c(d,function(c){"undefined"!=typeof d[c][b]&&d[c][b].apply(a,e)})}function i(a,b,c,d,e,g,i,j,k){s=b+c,t=Math.min(r(),s),u=t>=s,v=c-(s-t),a.isPlaying()&&!u?(a._scheduleId=k(a._timeoutHandler,p),h(a,"beforeTween"),f(t,d,e,g,c,b,i),h(a,"afterTween"),j(d,a._attachment,v)):u&&(j(g,a._attachment,v),a.stop(!0))}function j(a,b){var d={};return"string"==typeof b?c(a,function(a){d[a]=b}):c(a,function(a){d[a]||(d[a]=b[a]||n)}),d}function k(a,b){this._currentState=a||{},this._configured=!1,this._scheduleFunction=m,"undefined"!=typeof b&&this.setConfig(b)}var l,m,n="linear",o=500,p=1e3/60,q=Date.now?Date.now:function(){return+new Date},r="undefined"!=typeof SHIFTY_DEBUG_NOW?SHIFTY_DEBUG_NOW:q;m="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||window.mozCancelRequestAnimationFrame&&window.mozRequestAnimationFrame||setTimeout:setTimeout;var s,t,u,v;return k.prototype.tween=function(a){return this._isTweening?this:(void 0===a&&this._configured||this.setConfig(a),this._timestamp=r(),this._start(this.get(),this._attachment),this.resume())},k.prototype.setConfig=function(a){a=a||{},this._configured=!0,this._attachment=a.attachment,this._pausedAtTime=null,this._scheduleId=null,this._start=a.start||b,this._step=a.step||b,this._finish=a.finish||b,this._duration=a.duration||o,this._currentState=a.from||this.get(),this._originalState=this.get(),this._targetState=a.to||this.get();var c=this._currentState,d=this._targetState;return e(d,c),this._easing=j(c,a.easing||n),this._filterArgs=[c,this._originalState,d,this._easing],h(this,"tweenCreated"),this},k.prototype.get=function(){return d({},this._currentState)},k.prototype.set=function(a){this._currentState=a},k.prototype.pause=function(){return this._pausedAtTime=r(),this._isPaused=!0,this},k.prototype.resume=function(){this._isPaused&&(this._timestamp+=r()-this._pausedAtTime),this._isPaused=!1,this._isTweening=!0;var a=this;return this._timeoutHandler=function(){i(a,a._timestamp,a._duration,a._currentState,a._originalState,a._targetState,a._easing,a._step,a._scheduleFunction)},this._timeoutHandler(),this},k.prototype.seek=function(a){return this._timestamp=r()-a,this.isPlaying()||(this._isTweening=!0,this._isPaused=!1,i(this,this._timestamp,this._duration,this._currentState,this._originalState,this._targetState,this._easing,this._step,this._scheduleFunction),this._timeoutHandler(),this.pause()),this},k.prototype.stop=function(c){return this._isTweening=!1,this._isPaused=!1,this._timeoutHandler=b,(a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.oCancelAnimationFrame||a.msCancelAnimationFrame||a.mozCancelRequestAnimationFrame||a.clearTimeout)(this._scheduleId),c&&(d(this._currentState,this._targetState),h(this,"afterTweenEnd"),this._finish.call(this,this._currentState,this._attachment)),this},k.prototype.isPlaying=function(){return this._isTweening&&!this._isPaused},k.prototype.setScheduleFunction=function(a){this._scheduleFunction=a},k.prototype.dispose=function(){var a;for(a in this)this.hasOwnProperty(a)&&delete this[a]},k.prototype.filter={},k.prototype.formula={linear:function(a){return a}},l=k.prototype.formula,d(k,{now:r,each:c,tweenProps:f,tweenProp:g,applyFilter:h,shallowCopy:d,defaults:e,composeEasingObject:j}),"function"==typeof SHIFTY_DEBUG_NOW&&(a.timeoutHandler=i),"object"==typeof exports?module.exports=k:"function"==typeof define&&define.amd?define(function(){return k}):"undefined"==typeof a.Tweenable&&(a.Tweenable=k),k}();!function(){b.shallowCopy(b.prototype.formula,{easeInQuad:function(a){return Math.pow(a,2)},easeOutQuad:function(a){return-(Math.pow(a-1,2)-1)},easeInOutQuad:function(a){return(a/=.5)<1?.5*Math.pow(a,2):-.5*((a-=2)*a-2)},easeInCubic:function(a){return Math.pow(a,3)},easeOutCubic:function(a){return Math.pow(a-1,3)+1},easeInOutCubic:function(a){return(a/=.5)<1?.5*Math.pow(a,3):.5*(Math.pow(a-2,3)+2)},easeInQuart:function(a){return Math.pow(a,4)},easeOutQuart:function(a){return-(Math.pow(a-1,4)-1)},easeInOutQuart:function(a){return(a/=.5)<1?.5*Math.pow(a,4):-.5*((a-=2)*Math.pow(a,3)-2)},easeInQuint:function(a){return Math.pow(a,5)},easeOutQuint:function(a){return Math.pow(a-1,5)+1},easeInOutQuint:function(a){return(a/=.5)<1?.5*Math.pow(a,5):.5*(Math.pow(a-2,5)+2)},easeInSine:function(a){return-Math.cos(a*(Math.PI/2))+1},easeOutSine:function(a){return Math.sin(a*(Math.PI/2))},easeInOutSine:function(a){return-.5*(Math.cos(Math.PI*a)-1)},easeInExpo:function(a){return 0===a?0:Math.pow(2,10*(a-1))},easeOutExpo:function(a){return 1===a?1:-Math.pow(2,-10*a)+1},easeInOutExpo:function(a){return 0===a?0:1===a?1:(a/=.5)<1?.5*Math.pow(2,10*(a-1)):.5*(-Math.pow(2,-10*--a)+2)},easeInCirc:function(a){return-(Math.sqrt(1-a*a)-1)},easeOutCirc:function(a){return Math.sqrt(1-Math.pow(a-1,2))},easeInOutCirc:function(a){return(a/=.5)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)},easeOutBounce:function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},easeInBack:function(a){var b=1.70158;return a*a*((b+1)*a-b)},easeOutBack:function(a){var b=1.70158;return(a-=1)*a*((b+1)*a+b)+1},easeInOutBack:function(a){var b=1.70158;return(a/=.5)<1?.5*a*a*(((b*=1.525)+1)*a-b):.5*((a-=2)*a*(((b*=1.525)+1)*a+b)+2)},elastic:function(a){return-1*Math.pow(4,-8*a)*Math.sin(2*(6*a-1)*Math.PI/2)+1},swingFromTo:function(a){var b=1.70158;return(a/=.5)<1?.5*a*a*(((b*=1.525)+1)*a-b):.5*((a-=2)*a*(((b*=1.525)+1)*a+b)+2)},swingFrom:function(a){var b=1.70158;return a*a*((b+1)*a-b)},swingTo:function(a){var b=1.70158;return(a-=1)*a*((b+1)*a+b)+1},bounce:function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},bouncePast:function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?2-(7.5625*(a-=1.5/2.75)*a+.75):2.5/2.75>a?2-(7.5625*(a-=2.25/2.75)*a+.9375):2-(7.5625*(a-=2.625/2.75)*a+.984375)},easeFromTo:function(a){return(a/=.5)<1?.5*Math.pow(a,4):-.5*((a-=2)*Math.pow(a,3)-2)},easeFrom:function(a){return Math.pow(a,4)},easeTo:function(a){return Math.pow(a,.25)}})}(),function(){function a(a,b,c,d,e,f){function g(a){return((n*a+o)*a+p)*a}function h(a){return((q*a+r)*a+s)*a}function i(a){return(3*n*a+2*o)*a+p}function j(a){return 1/(200*a)}function k(a,b){return h(m(a,b))}function l(a){return a>=0?a:0-a}function m(a,b){var c,d,e,f,h,j;for(e=a,j=0;8>j;j++){if(f=g(e)-a,l(f)<b)return e;if(h=i(e),l(h)<1e-6)break;e-=f/h}if(c=0,d=1,e=a,c>e)return c;if(e>d)return d;for(;d>c;){if(f=g(e),l(f-a)<b)return e;a>f?c=e:d=e,e=.5*(d-c)+c}return e}var n=0,o=0,p=0,q=0,r=0,s=0;return p=3*b,o=3*(d-b)-p,n=1-p-o,s=3*c,r=3*(e-c)-s,q=1-s-r,k(a,j(f))}function c(b,c,d,e){return function(f){return a(f,b,c,d,e,1)}}b.setBezierFunction=function(a,d,e,f,g){var h=c(d,e,f,g);return h.x1=d,h.y1=e,h.x2=f,h.y2=g,b.prototype.formula[a]=h},b.unsetBezierFunction=function(a){delete b.prototype.formula[a]}}(),function(){function a(a,c,d,e,f){return b.tweenProps(e,c,a,d,1,0,f)}var c=new b;c._filterArgs=[],b.interpolate=function(d,e,f,g){var h=b.shallowCopy({},d),i=b.composeEasingObject(d,g||"linear");c.set({});var j=c._filterArgs;j.length=0,j[0]=h,j[1]=d,j[2]=e,j[3]=i,b.applyFilter(c,"tweenCreated"),b.applyFilter(c,"beforeTween");var k=a(d,h,e,f,i);return b.applyFilter(c,"afterTween"),k}}(),function(a){function b(a,b){B.length=0;var c,d=a.length;for(c=0;d>c;c++)B.push("_"+b+"_"+c);return B}function c(a){var b=a.match(v);return b?(1===b.length||a[0].match(u))&&b.unshift(""):b=["",""],b.join(A)}function d(b){a.each(b,function(a){var c=b[a];"string"==typeof c&&c.match(z)&&(b[a]=e(c))})}function e(a){return i(z,a,f)}function f(a){var b=g(a);return"rgb("+b[0]+","+b[1]+","+b[2]+")"}function g(a){return a=a.replace(/#/,""),3===a.length&&(a=a.split(""),a=a[0]+a[0]+a[1]+a[1]+a[2]+a[2]),C[0]=h(a.substr(0,2)),C[1]=h(a.substr(2,2)),C[2]=h(a.substr(4,2)),C}function h(a){return parseInt(a,16)}function i(a,b,c){var d=b.match(a),e=b.replace(a,A);if(d)for(var f,g=d.length,h=0;g>h;h++)f=d.shift(),e=e.replace(A,c(f));return e}function j(a){return i(x,a,k)}function k(a){for(var b=a.match(w),c=b.length,d=a.match(y)[0],e=0;c>e;e++)d+=parseInt(b[e],10)+",";return d=d.slice(0,-1)+")"}function l(d){var e={};return a.each(d,function(a){var f=d[a];if("string"==typeof f){var g=r(f);e[a]={formatString:c(f),chunkNames:b(g,a)}}}),e}function m(b,c){a.each(c,function(a){for(var d=b[a],e=r(d),f=e.length,g=0;f>g;g++)b[c[a].chunkNames[g]]=+e[g];delete b[a]})}function n(b,c){a.each(c,function(a){var d=b[a],e=o(b,c[a].chunkNames),f=p(e,c[a].chunkNames);d=q(c[a].formatString,f),b[a]=j(d)})}function o(a,b){for(var c,d={},e=b.length,f=0;e>f;f++)c=b[f],d[c]=a[c],delete a[c];return d}function p(a,b){D.length=0;for(var c=b.length,d=0;c>d;d++)D.push(a[b[d]]);return D}function q(a,b){for(var c=a,d=b.length,e=0;d>e;e++)c=c.replace(A,+b[e].toFixed(4));return c}function r(a){return a.match(w)}function s(b,c){a.each(c,function(a){for(var d=c[a],e=d.chunkNames,f=e.length,g=b[a].split(" "),h=g[g.length-1],i=0;f>i;i++)b[e[i]]=g[i]||h;delete b[a]})}function t(b,c){a.each(c,function(a){for(var d=c[a],e=d.chunkNames,f=e.length,g="",h=0;f>h;h++)g+=" "+b[e[h]],delete b[e[h]];b[a]=g.substr(1)})}var u=/(\d|\-|\.)/,v=/([^\-0-9\.]+)/g,w=/[0-9.\-]+/g,x=new RegExp("rgb\\("+w.source+/,\s*/.source+w.source+/,\s*/.source+w.source+"\\)","g"),y=/^.*\(/,z=/#([0-9]|[a-f]){3,6}/gi,A="VAL",B=[],C=[],D=[];a.prototype.filter.token={tweenCreated:function(a,b,c){d(a),d(b),d(c),this._tokenData=l(a)},beforeTween:function(a,b,c,d){s(d,this._tokenData),m(a,this._tokenData),m(b,this._tokenData),m(c,this._tokenData)},afterTween:function(a,b,c,d){n(a,this._tokenData),n(b,this._tokenData),n(c,this._tokenData),t(d,this._tokenData)}}}(b)}(window),window.Tweenable}),function(){"use strict";angular.module("angular-carousel").filter("carouselSlice",function(){return function(a,b,c){return angular.isArray(a)?a.slice(b,b+c):angular.isObject(a)?a:void 0}})}();
/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2014 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/v4.0.3/LICENSE
 */

(function(t,e){if(typeof define==="function"&&define.amd){define(e)}else if(typeof exports==="object"){module.exports=e()}else{t.returnExports=e()}})(this,function(){var t=Array.prototype;var e=Object.prototype;var r=Function.prototype;var n=String.prototype;var i=Number.prototype;var a=t.slice;var o=t.splice;var l=t.push;var u=t.unshift;var s=r.call;var f=e.toString;var c=function(t){return e.toString.call(t)==="[object Function]"};var h=function(t){return e.toString.call(t)==="[object RegExp]"};var p=function ve(t){return f.call(t)==="[object Array]"};var v=function ge(t){return f.call(t)==="[object String]"};var g=function ye(t){var e=f.call(t);var r=e==="[object Arguments]";if(!r){r=!p(t)&&t!==null&&typeof t==="object"&&typeof t.length==="number"&&t.length>=0&&c(t.callee)}return r};var y=Object.defineProperty&&function(){try{Object.defineProperty({},"x",{});return true}catch(t){return false}}();var d;if(y){d=function(t,e,r,n){if(!n&&e in t){return}Object.defineProperty(t,e,{configurable:true,enumerable:false,writable:true,value:r})}}else{d=function(t,e,r,n){if(!n&&e in t){return}t[e]=r}}var m=function(t,r,n){for(var i in r){if(e.hasOwnProperty.call(r,i)){d(t,i,r[i],n)}}};function w(t){t=+t;if(t!==t){t=0}else if(t!==0&&t!==1/0&&t!==-(1/0)){t=(t>0||-1)*Math.floor(Math.abs(t))}return t}function b(t){var e=typeof t;return t===null||e==="undefined"||e==="boolean"||e==="number"||e==="string"}function x(t){var e,r,n;if(b(t)){return t}r=t.valueOf;if(c(r)){e=r.call(t);if(b(e)){return e}}n=t.toString;if(c(n)){e=n.call(t);if(b(e)){return e}}throw new TypeError}var S=function(t){if(t==null){throw new TypeError("can't convert "+t+" to object")}return Object(t)};var O=function de(t){return t>>>0};function T(){}m(r,{bind:function me(t){var e=this;if(!c(e)){throw new TypeError("Function.prototype.bind called on incompatible "+e)}var r=a.call(arguments,1);var n=function(){if(this instanceof u){var n=e.apply(this,r.concat(a.call(arguments)));if(Object(n)===n){return n}return this}else{return e.apply(t,r.concat(a.call(arguments)))}};var i=Math.max(0,e.length-r.length);var o=[];for(var l=0;l<i;l++){o.push("$"+l)}var u=Function("binder","return function ("+o.join(",")+"){return binder.apply(this,arguments)}")(n);if(e.prototype){T.prototype=e.prototype;u.prototype=new T;T.prototype=null}return u}});var j=s.bind(e.hasOwnProperty);var E;var N;var I;var D;var _;if(_=j(e,"__defineGetter__")){E=s.bind(e.__defineGetter__);N=s.bind(e.__defineSetter__);I=s.bind(e.__lookupGetter__);D=s.bind(e.__lookupSetter__)}var M=function(){var t=[1,2];var e=t.splice();return t.length===2&&p(e)&&e.length===0}();m(t,{splice:function we(t,e){if(arguments.length===0){return[]}else{return o.apply(this,arguments)}}},M);var F=function(){var e={};t.splice.call(e,0,0,1);return e.length===1}();m(t,{splice:function be(t,e){if(arguments.length===0){return[]}var r=arguments;this.length=Math.max(w(this.length),0);if(arguments.length>0&&typeof e!=="number"){r=a.call(arguments);if(r.length<2){r.push(this.length-t)}else{r[1]=w(e)}}return o.apply(this,r)}},!F);var R=[].unshift(0)!==1;m(t,{unshift:function(){u.apply(this,arguments);return this.length}},R);m(Array,{isArray:p});var k=Object("a");var C=k[0]!=="a"||!(0 in k);var U=function xe(t){var e=true;var r=true;if(t){t.call("foo",function(t,r,n){if(typeof n!=="object"){e=false}});t.call([1],function(){"use strict";r=typeof this==="string"},"x")}return!!t&&e&&r};m(t,{forEach:function Se(t){var e=S(this),r=C&&v(this)?this.split(""):e,n=arguments[1],i=-1,a=r.length>>>0;if(!c(t)){throw new TypeError}while(++i<a){if(i in r){t.call(n,r[i],i,e)}}}},!U(t.forEach));m(t,{map:function Oe(t){var e=S(this),r=C&&v(this)?this.split(""):e,n=r.length>>>0,i=Array(n),a=arguments[1];if(!c(t)){throw new TypeError(t+" is not a function")}for(var o=0;o<n;o++){if(o in r){i[o]=t.call(a,r[o],o,e)}}return i}},!U(t.map));m(t,{filter:function Te(t){var e=S(this),r=C&&v(this)?this.split(""):e,n=r.length>>>0,i=[],a,o=arguments[1];if(!c(t)){throw new TypeError(t+" is not a function")}for(var l=0;l<n;l++){if(l in r){a=r[l];if(t.call(o,a,l,e)){i.push(a)}}}return i}},!U(t.filter));m(t,{every:function je(t){var e=S(this),r=C&&v(this)?this.split(""):e,n=r.length>>>0,i=arguments[1];if(!c(t)){throw new TypeError(t+" is not a function")}for(var a=0;a<n;a++){if(a in r&&!t.call(i,r[a],a,e)){return false}}return true}},!U(t.every));m(t,{some:function Ee(t){var e=S(this),r=C&&v(this)?this.split(""):e,n=r.length>>>0,i=arguments[1];if(!c(t)){throw new TypeError(t+" is not a function")}for(var a=0;a<n;a++){if(a in r&&t.call(i,r[a],a,e)){return true}}return false}},!U(t.some));var A=false;if(t.reduce){A=typeof t.reduce.call("es5",function(t,e,r,n){return n})==="object"}m(t,{reduce:function Ne(t){var e=S(this),r=C&&v(this)?this.split(""):e,n=r.length>>>0;if(!c(t)){throw new TypeError(t+" is not a function")}if(!n&&arguments.length===1){throw new TypeError("reduce of empty array with no initial value")}var i=0;var a;if(arguments.length>=2){a=arguments[1]}else{do{if(i in r){a=r[i++];break}if(++i>=n){throw new TypeError("reduce of empty array with no initial value")}}while(true)}for(;i<n;i++){if(i in r){a=t.call(void 0,a,r[i],i,e)}}return a}},!A);var P=false;if(t.reduceRight){P=typeof t.reduceRight.call("es5",function(t,e,r,n){return n})==="object"}m(t,{reduceRight:function Ie(t){var e=S(this),r=C&&v(this)?this.split(""):e,n=r.length>>>0;if(!c(t)){throw new TypeError(t+" is not a function")}if(!n&&arguments.length===1){throw new TypeError("reduceRight of empty array with no initial value")}var i,a=n-1;if(arguments.length>=2){i=arguments[1]}else{do{if(a in r){i=r[a--];break}if(--a<0){throw new TypeError("reduceRight of empty array with no initial value")}}while(true)}if(a<0){return i}do{if(a in r){i=t.call(void 0,i,r[a],a,e)}}while(a--);return i}},!P);var Z=Array.prototype.indexOf&&[0,1].indexOf(1,2)!==-1;m(t,{indexOf:function De(t){var e=C&&v(this)?this.split(""):S(this),r=e.length>>>0;if(!r){return-1}var n=0;if(arguments.length>1){n=w(arguments[1])}n=n>=0?n:Math.max(0,r+n);for(;n<r;n++){if(n in e&&e[n]===t){return n}}return-1}},Z);var J=Array.prototype.lastIndexOf&&[0,1].lastIndexOf(0,-3)!==-1;m(t,{lastIndexOf:function _e(t){var e=C&&v(this)?this.split(""):S(this),r=e.length>>>0;if(!r){return-1}var n=r-1;if(arguments.length>1){n=Math.min(n,w(arguments[1]))}n=n>=0?n:r-Math.abs(n);for(;n>=0;n--){if(n in e&&t===e[n]){return n}}return-1}},J);var z=!{toString:null}.propertyIsEnumerable("toString"),$=function(){}.propertyIsEnumerable("prototype"),G=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],B=G.length;m(Object,{keys:function Me(t){var e=c(t),r=g(t),n=t!==null&&typeof t==="object",i=n&&v(t);if(!n&&!e&&!r){throw new TypeError("Object.keys called on a non-object")}var a=[];var o=$&&e;if(i||r){for(var l=0;l<t.length;++l){a.push(String(l))}}else{for(var u in t){if(!(o&&u==="prototype")&&j(t,u)){a.push(String(u))}}}if(z){var s=t.constructor,f=s&&s.prototype===t;for(var h=0;h<B;h++){var p=G[h];if(!(f&&p==="constructor")&&j(t,p)){a.push(p)}}}return a}});var H=Object.keys&&function(){return Object.keys(arguments).length===2}(1,2);var L=Object.keys;m(Object,{keys:function Fe(e){if(g(e)){return L(t.slice.call(e))}else{return L(e)}}},!H);var X=-621987552e5;var Y="-000001";var q=Date.prototype.toISOString&&new Date(X).toISOString().indexOf(Y)===-1;m(Date.prototype,{toISOString:function Re(){var t,e,r,n,i;if(!isFinite(this)){throw new RangeError("Date.prototype.toISOString called on non-finite value.")}n=this.getUTCFullYear();i=this.getUTCMonth();n+=Math.floor(i/12);i=(i%12+12)%12;t=[i+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()];n=(n<0?"-":n>9999?"+":"")+("00000"+Math.abs(n)).slice(0<=n&&n<=9999?-4:-6);e=t.length;while(e--){r=t[e];if(r<10){t[e]="0"+r}}return n+"-"+t.slice(0,2).join("-")+"T"+t.slice(2).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"}},q);var K=false;try{K=Date.prototype.toJSON&&new Date(NaN).toJSON()===null&&new Date(X).toJSON().indexOf(Y)!==-1&&Date.prototype.toJSON.call({toISOString:function(){return true}})}catch(Q){}if(!K){Date.prototype.toJSON=function ke(t){var e=Object(this),r=x(e),n;if(typeof r==="number"&&!isFinite(r)){return null}n=e.toISOString;if(typeof n!=="function"){throw new TypeError("toISOString property is not callable")}return n.call(e)}}var V=Date.parse("+033658-09-27T01:46:40.000Z")===1e15;var W=!isNaN(Date.parse("2012-04-04T24:00:00.500Z"))||!isNaN(Date.parse("2012-11-31T23:59:59.000Z"));var te=isNaN(Date.parse("2000-01-01T00:00:00.000Z"));if(!Date.parse||te||W||!V){Date=function(t){function e(r,n,i,a,o,l,u){var s=arguments.length;if(this instanceof t){var f=s===1&&String(r)===r?new t(e.parse(r)):s>=7?new t(r,n,i,a,o,l,u):s>=6?new t(r,n,i,a,o,l):s>=5?new t(r,n,i,a,o):s>=4?new t(r,n,i,a):s>=3?new t(r,n,i):s>=2?new t(r,n):s>=1?new t(r):new t;f.constructor=e;return f}return t.apply(this,arguments)}var r=new RegExp("^"+"(\\d{4}|[+-]\\d{6})"+"(?:-(\\d{2})"+"(?:-(\\d{2})"+"(?:"+"T(\\d{2})"+":(\\d{2})"+"(?:"+":(\\d{2})"+"(?:(\\.\\d{1,}))?"+")?"+"("+"Z|"+"(?:"+"([-+])"+"(\\d{2})"+":(\\d{2})"+")"+")?)?)?)?"+"$");var n=[0,31,59,90,120,151,181,212,243,273,304,334,365];function i(t,e){var r=e>1?1:0;return n[e]+Math.floor((t-1969+r)/4)-Math.floor((t-1901+r)/100)+Math.floor((t-1601+r)/400)+365*(t-1970)}function a(e){return Number(new t(1970,0,1,0,0,0,e))}for(var o in t){e[o]=t[o]}e.now=t.now;e.UTC=t.UTC;e.prototype=t.prototype;e.prototype.constructor=e;e.parse=function l(e){var n=r.exec(e);if(n){var o=Number(n[1]),l=Number(n[2]||1)-1,u=Number(n[3]||1)-1,s=Number(n[4]||0),f=Number(n[5]||0),c=Number(n[6]||0),h=Math.floor(Number(n[7]||0)*1e3),p=Boolean(n[4]&&!n[8]),v=n[9]==="-"?1:-1,g=Number(n[10]||0),y=Number(n[11]||0),d;if(s<(f>0||c>0||h>0?24:25)&&f<60&&c<60&&h<1e3&&l>-1&&l<12&&g<24&&y<60&&u>-1&&u<i(o,l+1)-i(o,l)){d=((i(o,l)+u)*24+s+g*v)*60;d=((d+f+y*v)*60+c)*1e3+h;if(p){d=a(d)}if(-864e13<=d&&d<=864e13){return d}}return NaN}return t.parse.apply(this,arguments)};return e}(Date)}if(!Date.now){Date.now=function Ce(){return(new Date).getTime()}}var ee=i.toFixed&&(8e-5.toFixed(3)!=="0.000"||.9.toFixed(0)!=="1"||1.255.toFixed(2)!=="1.25"||0xde0b6b3a7640080.toFixed(0)!=="1000000000000000128");var re={base:1e7,size:6,data:[0,0,0,0,0,0],multiply:function Ue(t,e){var r=-1;while(++r<re.size){e+=t*re.data[r];re.data[r]=e%re.base;e=Math.floor(e/re.base)}},divide:function Ae(t){var e=re.size,r=0;while(--e>=0){r+=re.data[e];re.data[e]=Math.floor(r/t);r=r%t*re.base}},numToString:function Pe(){var t=re.size;var e="";while(--t>=0){if(e!==""||t===0||re.data[t]!==0){var r=String(re.data[t]);if(e===""){e=r}else{e+="0000000".slice(0,7-r.length)+r}}}return e},pow:function Ze(t,e,r){return e===0?r:e%2===1?Ze(t,e-1,r*t):Ze(t*t,e/2,r)},log:function Je(t){var e=0;while(t>=4096){e+=12;t/=4096}while(t>=2){e+=1;t/=2}return e}};m(i,{toFixed:function ze(t){var e,r,n,i,a,o,l,u;e=Number(t);e=e!==e?0:Math.floor(e);if(e<0||e>20){throw new RangeError("Number.toFixed called with invalid number of decimals")}r=Number(this);if(r!==r){return"NaN"}if(r<=-1e21||r>=1e21){return String(r)}n="";if(r<0){n="-";r=-r}i="0";if(r>1e-21){a=re.log(r*re.pow(2,69,1))-69;o=a<0?r*re.pow(2,-a,1):r/re.pow(2,a,1);o*=4503599627370496;a=52-a;if(a>0){re.multiply(0,o);l=e;while(l>=7){re.multiply(1e7,0);l-=7}re.multiply(re.pow(10,l,1),0);l=a-1;while(l>=23){re.divide(1<<23);l-=23}re.divide(1<<l);re.multiply(1,1);re.divide(2);i=re.numToString()}else{re.multiply(0,o);re.multiply(1<<-a,0);i=re.numToString()+"0.00000000000000000000".slice(2,2+e)}}if(e>0){u=i.length;if(u<=e){i=n+"0.0000000000000000000".slice(0,e-u+2)+i}else{i=n+i.slice(0,u-e)+"."+i.slice(u-e)}}else{i=n+i}return i}},ee);var ne=n.split;if("ab".split(/(?:ab)*/).length!==2||".".split(/(.?)(.?)/).length!==4||"tesst".split(/(s)*/)[1]==="t"||"test".split(/(?:)/,-1).length!==4||"".split(/.?/).length||".".split(/()()/).length>1){(function(){var e=/()??/.exec("")[1]===void 0;n.split=function(r,n){var i=this;if(r===void 0&&n===0){return[]}if(f.call(r)!=="[object RegExp]"){return ne.call(this,r,n)}var a=[],o=(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.extended?"x":"")+(r.sticky?"y":""),l=0,u,s,c,h;r=new RegExp(r.source,o+"g");i+="";if(!e){u=new RegExp("^"+r.source+"$(?!\\s)",o)}n=n===void 0?-1>>>0:O(n);while(s=r.exec(i)){c=s.index+s[0].length;if(c>l){a.push(i.slice(l,s.index));if(!e&&s.length>1){s[0].replace(u,function(){for(var t=1;t<arguments.length-2;t++){if(arguments[t]===void 0){s[t]=void 0}}})}if(s.length>1&&s.index<i.length){t.push.apply(a,s.slice(1))}h=s[0].length;l=c;if(a.length>=n){break}}if(r.lastIndex===s.index){r.lastIndex++}}if(l===i.length){if(h||!r.test("")){a.push("")}}else{a.push(i.slice(l))}return a.length>n?a.slice(0,n):a}})()}else if("0".split(void 0,0).length){n.split=function $e(t,e){if(t===void 0&&e===0){return[]}return ne.call(this,t,e)}}var ie=n.replace;var ae=function(){var t=[];"x".replace(/x(.)?/g,function(e,r){t.push(r)});return t.length===1&&typeof t[0]==="undefined"}();if(!ae){n.replace=function Ge(t,e){var r=c(e);var n=h(t)&&/\)[*?]/.test(t.source);if(!r||!n){return ie.call(this,t,e)}else{var i=function(r){var n=arguments.length;var i=t.lastIndex;t.lastIndex=0;var a=t.exec(r);t.lastIndex=i;a.push(arguments[n-2],arguments[n-1]);return e.apply(this,a)};return ie.call(this,t,i)}}}var oe=n.substr;var le="".substr&&"0b".substr(-1)!=="b";m(n,{substr:function Be(t,e){return oe.call(this,t<0?(t=this.length+t)<0?0:t:t,e)}},le);var ue="	\n\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003"+"\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028"+"\u2029\ufeff";var se="\u200b";var fe="["+ue+"]";var ce=new RegExp("^"+fe+fe+"*");var he=new RegExp(fe+fe+"*$");var pe=n.trim&&(ue.trim()||!se.trim());m(n,{trim:function He(){if(this===void 0||this===null){throw new TypeError("can't convert "+this+" to object")}return String(this).replace(ce,"").replace(he,"")}},pe);if(parseInt(ue+"08")!==8||parseInt(ue+"0x16")!==22){parseInt=function(t){var e=/^0[xX]/;return function r(n,i){n=String(n).trim();if(!Number(i)){i=e.test(n)?16:10}return t(n,i)}}(parseInt)}});
//# sourceMappingURL=es5-shim.map
;
/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2014 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/v4.0.3/LICENSE
 */

(function(e,t){if(typeof define==="function"&&define.amd){define(t)}else if(typeof exports==="object"){module.exports=t()}else{e.returnExports=t()}})(this,function(){var e=Function.prototype.call;var t=Object.prototype;var r=e.bind(t.hasOwnProperty);var n;var o;var i;var c;var f=r(t,"__defineGetter__");if(f){n=e.bind(t.__defineGetter__);o=e.bind(t.__defineSetter__);i=e.bind(t.__lookupGetter__);c=e.bind(t.__lookupSetter__)}if(!Object.getPrototypeOf){Object.getPrototypeOf=function g(e){var r=e.__proto__;if(r||r===null){return r}else if(e.constructor){return e.constructor.prototype}else{return t}}}function u(e){try{e.sentinel=0;return Object.getOwnPropertyDescriptor(e,"sentinel").value===0}catch(t){}}if(Object.defineProperty){var p=u({});var a=typeof document==="undefined"||u(document.createElement("div"));if(!a||!p){var l=Object.getOwnPropertyDescriptor}}if(!Object.getOwnPropertyDescriptor||l){var b="Object.getOwnPropertyDescriptor called on a non-object: ";Object.getOwnPropertyDescriptor=function E(e,n){if(typeof e!=="object"&&typeof e!=="function"||e===null){throw new TypeError(b+e)}if(l){try{return l.call(Object,e,n)}catch(o){}}if(!r(e,n)){return}var u={enumerable:true,configurable:true};if(f){var p=e.__proto__;var a=e!==t;if(a){e.__proto__=t}var _=i(e,n);var s=c(e,n);if(a){e.__proto__=p}if(_||s){if(_){u.get=_}if(s){u.set=s}return u}}u.value=e[n];u.writable=true;return u}}if(!Object.getOwnPropertyNames){Object.getOwnPropertyNames=function x(e){return Object.keys(e)}}if(!Object.create){var _;var s=!({__proto__:null}instanceof Object);if(s||typeof document==="undefined"){_=function(){return{__proto__:null}}}else{_=function(){var e=document.createElement("iframe");var t=document.body||document.documentElement;e.style.display="none";t.appendChild(e);e.src="javascript:";var r=e.contentWindow.Object.prototype;t.removeChild(e);e=null;delete r.constructor;delete r.hasOwnProperty;delete r.propertyIsEnumerable;delete r.isPrototypeOf;delete r.toLocaleString;delete r.toString;delete r.valueOf;r.__proto__=null;function n(){}n.prototype=r;_=function(){return new n};return new n}}Object.create=function z(e,t){var r;function n(){}if(e===null){r=_()}else{if(typeof e!=="object"&&typeof e!=="function"){throw new TypeError("Object prototype may only be an Object or null")}n.prototype=e;r=new n;r.__proto__=e}if(t!==void 0){Object.defineProperties(r,t)}return r}}function d(e){try{Object.defineProperty(e,"sentinel",{});return"sentinel"in e}catch(t){}}if(Object.defineProperty){var y=d({});var O=typeof document==="undefined"||d(document.createElement("div"));if(!y||!O){var j=Object.defineProperty,v=Object.defineProperties}}if(!Object.defineProperty||j){var w="Property description must be an object: ";var P="Object.defineProperty called on non-object: ";var m="getters & setters can not be defined "+"on this javascript engine";Object.defineProperty=function S(e,u,p){if(typeof e!=="object"&&typeof e!=="function"||e===null){throw new TypeError(P+e)}if(typeof p!=="object"&&typeof p!=="function"||p===null){throw new TypeError(w+p)}if(j){try{return j.call(Object,e,u,p)}catch(a){}}if(r(p,"value")){if(f&&(i(e,u)||c(e,u))){var l=e.__proto__;e.__proto__=t;delete e[u];e[u]=p.value;e.__proto__=l}else{e[u]=p.value}}else{if(!f){throw new TypeError(m)}if(r(p,"get")){n(e,u,p.get)}if(r(p,"set")){o(e,u,p.set)}}return e}}if(!Object.defineProperties||v){Object.defineProperties=function T(e,t){if(v){try{return v.call(Object,e,t)}catch(n){}}for(var o in t){if(r(t,o)&&o!=="__proto__"){Object.defineProperty(e,o,t[o])}}return e}}if(!Object.seal){Object.seal=function D(e){return e}}if(!Object.freeze){Object.freeze=function k(e){return e}}try{Object.freeze(function(){})}catch(h){Object.freeze=function F(e){return function t(r){if(typeof r==="function"){return r}else{return e(r)}}}(Object.freeze)}if(!Object.preventExtensions){Object.preventExtensions=function G(e){return e}}if(!Object.isSealed){Object.isSealed=function C(e){return false}}if(!Object.isFrozen){Object.isFrozen=function N(e){return false}}if(!Object.isExtensible){Object.isExtensible=function I(e){if(Object(e)!==e){throw new TypeError}var t="";while(r(e,t)){t+="?"}e[t]=true;var n=r(e,t);delete e[t];return n}}});
//# sourceMappingURL=es5-sham.map
;
/*
 angular-file-upload v1.1.5
 https://github.com/nervgh/angular-file-upload
*/

!function(a,b){return"function"==typeof define&&define.amd?(define("angular-file-upload",["angular"],function(a){return b(a)}),void 0):b(a)}("undefined"==typeof angular?null:angular,function(a){var b=a.module("angularFileUpload",[]);return b.value("fileUploaderOptions",{url:"/",alias:"file",headers:{},queue:[],progress:0,autoUpload:!1,removeAfterUpload:!1,method:"POST",filters:[],formData:[],queueLimit:Number.MAX_VALUE,withCredentials:!1}).factory("FileUploader",["fileUploaderOptions","$rootScope","$http","$window","$compile",function(b,c,d,e,f){function g(c){var d=a.copy(b);a.extend(this,d,c,{isUploading:!1,_nextIndex:0,_failFilterIndex:-1,_directives:{select:[],drop:[],over:[]}}),this.filters.unshift({name:"queueLimit",fn:this._queueLimitFilter}),this.filters.unshift({name:"folder",fn:this._folderFilter})}function h(b){var c=a.isElement(b),d=c?b.value:b,e=a.isString(d)?"FakePath":"Object",f="_createFrom"+e;this[f](d)}function i(b,c,d){var e=a.isElement(c),f=e?a.element(c):null,h=e?null:c;a.extend(this,{url:b.url,alias:b.alias,headers:a.copy(b.headers),formData:a.copy(b.formData),removeAfterUpload:b.removeAfterUpload,withCredentials:b.withCredentials,method:b.method},d,{uploader:b,file:new g.FileLikeObject(c),isReady:!1,isUploading:!1,isUploaded:!1,isSuccess:!1,isCancel:!1,isError:!1,progress:0,index:null,_file:h,_input:f}),f&&this._replaceNode(f)}function j(b){a.extend(this,b),this.uploader._directives[this.prop].push(this),this._saveLinks(),this.bind()}function k(){k.super_.apply(this,arguments),this.uploader.isHTML5||this.element.removeAttr("multiple"),this.element.prop("value",null)}function l(){l.super_.apply(this,arguments)}function m(){m.super_.apply(this,arguments)}return g.prototype.isHTML5=!(!e.File||!e.FormData),g.prototype.addToQueue=function(b,c,d){var e=this.isArrayLikeObject(b)?b:[b],f=this._getFilters(d),h=this.queue.length,i=[];a.forEach(e,function(a){var b=new g.FileLikeObject(a);if(this._isValidFile(b,f,c)){var d=new g.FileItem(this,a,c);i.push(d),this.queue.push(d),this._onAfterAddingFile(d)}else{var e=this.filters[this._failFilterIndex];this._onWhenAddingFileFailed(b,e,c)}},this),this.queue.length!==h&&(this._onAfterAddingAll(i),this.progress=this._getTotalProgress()),this._render(),this.autoUpload&&this.uploadAll()},g.prototype.removeFromQueue=function(a){var b=this.getIndexOfItem(a),c=this.queue[b];c.isUploading&&c.cancel(),this.queue.splice(b,1),c._destroy(),this.progress=this._getTotalProgress()},g.prototype.clearQueue=function(){for(;this.queue.length;)this.queue[0].remove();this.progress=0},g.prototype.uploadItem=function(a){var b=this.getIndexOfItem(a),c=this.queue[b],d=this.isHTML5?"_xhrTransport":"_iframeTransport";c._prepareToUploading(),this.isUploading||(this.isUploading=!0,this[d](c))},g.prototype.cancelItem=function(a){var b=this.getIndexOfItem(a),c=this.queue[b],d=this.isHTML5?"_xhr":"_form";c&&c.isUploading&&c[d].abort()},g.prototype.uploadAll=function(){var b=this.getNotUploadedItems().filter(function(a){return!a.isUploading});b.length&&(a.forEach(b,function(a){a._prepareToUploading()}),b[0].upload())},g.prototype.cancelAll=function(){var b=this.getNotUploadedItems();a.forEach(b,function(a){a.cancel()})},g.prototype.isFile=function(a){var b=e.File;return b&&a instanceof b},g.prototype.isFileLikeObject=function(a){return a instanceof g.FileLikeObject},g.prototype.isArrayLikeObject=function(b){return a.isObject(b)&&"length"in b},g.prototype.getIndexOfItem=function(b){return a.isNumber(b)?b:this.queue.indexOf(b)},g.prototype.getNotUploadedItems=function(){return this.queue.filter(function(a){return!a.isUploaded})},g.prototype.getReadyItems=function(){return this.queue.filter(function(a){return a.isReady&&!a.isUploading}).sort(function(a,b){return a.index-b.index})},g.prototype.destroy=function(){a.forEach(this._directives,function(b){a.forEach(this._directives[b],function(a){a.destroy()},this)},this)},g.prototype.onAfterAddingAll=function(){},g.prototype.onAfterAddingFile=function(){},g.prototype.onWhenAddingFileFailed=function(){},g.prototype.onBeforeUploadItem=function(){},g.prototype.onProgressItem=function(){},g.prototype.onProgressAll=function(){},g.prototype.onSuccessItem=function(){},g.prototype.onErrorItem=function(){},g.prototype.onCancelItem=function(){},g.prototype.onCompleteItem=function(){},g.prototype.onCompleteAll=function(){},g.prototype._getTotalProgress=function(a){if(this.removeAfterUpload)return a||0;var b=this.getNotUploadedItems().length,c=b?this.queue.length-b:this.queue.length,d=100/this.queue.length,e=(a||0)*d/100;return Math.round(c*d+e)},g.prototype._getFilters=function(b){if(a.isUndefined(b))return this.filters;if(a.isArray(b))return b;var c=b.match(/[^\s,]+/g);return this.filters.filter(function(a){return-1!==c.indexOf(a.name)},this)},g.prototype._render=function(){c.$$phase||c.$apply()},g.prototype._folderFilter=function(a){return!(!a.size&&!a.type)},g.prototype._queueLimitFilter=function(){return this.queue.length<this.queueLimit},g.prototype._isValidFile=function(a,b,c){return this._failFilterIndex=-1,b.length?b.every(function(b){return this._failFilterIndex++,b.fn.call(this,a,c)},this):!0},g.prototype._isSuccessCode=function(a){return a>=200&&300>a||304===a},g.prototype._transformResponse=function(b,c){var e=this._headersGetter(c);return a.forEach(d.defaults.transformResponse,function(a){b=a(b,e)}),b},g.prototype._parseHeaders=function(b){var c,d,e,f={};return b?(a.forEach(b.split("\n"),function(a){e=a.indexOf(":"),c=a.slice(0,e).trim().toLowerCase(),d=a.slice(e+1).trim(),c&&(f[c]=f[c]?f[c]+", "+d:d)}),f):f},g.prototype._headersGetter=function(a){return function(b){return b?a[b.toLowerCase()]||null:a}},g.prototype._xhrTransport=function(b){var c=b._xhr=new XMLHttpRequest,d=new FormData,e=this;e._onBeforeUploadItem(b),a.forEach(b.formData,function(b){a.forEach(b,function(a,b){d.append(b,a)})}),d.append(b.alias,b._file,b.file.name),c.upload.onprogress=function(a){var c=Math.round(a.lengthComputable?100*a.loaded/a.total:0);e._onProgressItem(b,c)},c.onload=function(){var a=e._parseHeaders(c.getAllResponseHeaders()),d=e._transformResponse(c.response,a),f=e._isSuccessCode(c.status)?"Success":"Error",g="_on"+f+"Item";e[g](b,d,c.status,a),e._onCompleteItem(b,d,c.status,a)},c.onerror=function(){var a=e._parseHeaders(c.getAllResponseHeaders()),d=e._transformResponse(c.response,a);e._onErrorItem(b,d,c.status,a),e._onCompleteItem(b,d,c.status,a)},c.onabort=function(){var a=e._parseHeaders(c.getAllResponseHeaders()),d=e._transformResponse(c.response,a);e._onCancelItem(b,d,c.status,a),e._onCompleteItem(b,d,c.status,a)},c.open(b.method,b.url,!0),c.withCredentials=b.withCredentials,a.forEach(b.headers,function(a,b){c.setRequestHeader(b,a)}),c.send(d),this._render()},g.prototype._iframeTransport=function(b){var c=a.element('<form style="display: none;" />'),d=a.element('<iframe name="iframeTransport'+Date.now()+'">'),e=b._input,f=this;b._form&&b._form.replaceWith(e),b._form=c,f._onBeforeUploadItem(b),e.prop("name",b.alias),a.forEach(b.formData,function(b){a.forEach(b,function(b,d){var e=a.element('<input type="hidden" name="'+d+'" />');e.val(b),c.append(e)})}),c.prop({action:b.url,method:"POST",target:d.prop("name"),enctype:"multipart/form-data",encoding:"multipart/form-data"}),d.bind("load",function(){try{var a=d[0].contentDocument.body.innerHTML}catch(c){}var e={response:a,status:200,dummy:!0},g={},h=f._transformResponse(e.response,g);f._onSuccessItem(b,h,e.status,g),f._onCompleteItem(b,h,e.status,g)}),c.abort=function(){var a,g={status:0,dummy:!0},h={};d.unbind("load").prop("src","javascript:false;"),c.replaceWith(e),f._onCancelItem(b,a,g.status,h),f._onCompleteItem(b,a,g.status,h)},e.after(c),c.append(e).append(d),c[0].submit(),this._render()},g.prototype._onWhenAddingFileFailed=function(a,b,c){this.onWhenAddingFileFailed(a,b,c)},g.prototype._onAfterAddingFile=function(a){this.onAfterAddingFile(a)},g.prototype._onAfterAddingAll=function(a){this.onAfterAddingAll(a)},g.prototype._onBeforeUploadItem=function(a){a._onBeforeUpload(),this.onBeforeUploadItem(a)},g.prototype._onProgressItem=function(a,b){var c=this._getTotalProgress(b);this.progress=c,a._onProgress(b),this.onProgressItem(a,b),this.onProgressAll(c),this._render()},g.prototype._onSuccessItem=function(a,b,c,d){a._onSuccess(b,c,d),this.onSuccessItem(a,b,c,d)},g.prototype._onErrorItem=function(a,b,c,d){a._onError(b,c,d),this.onErrorItem(a,b,c,d)},g.prototype._onCancelItem=function(a,b,c,d){a._onCancel(b,c,d),this.onCancelItem(a,b,c,d)},g.prototype._onCompleteItem=function(b,c,d,e){b._onComplete(c,d,e),this.onCompleteItem(b,c,d,e);var f=this.getReadyItems()[0];return this.isUploading=!1,a.isDefined(f)?(f.upload(),void 0):(this.onCompleteAll(),this.progress=this._getTotalProgress(),this._render(),void 0)},g.isFile=g.prototype.isFile,g.isFileLikeObject=g.prototype.isFileLikeObject,g.isArrayLikeObject=g.prototype.isArrayLikeObject,g.isHTML5=g.prototype.isHTML5,g.inherit=function(a,b){a.prototype=Object.create(b.prototype),a.prototype.constructor=a,a.super_=b},g.FileLikeObject=h,g.FileItem=i,g.FileDirective=j,g.FileSelect=k,g.FileDrop=l,g.FileOver=m,h.prototype._createFromFakePath=function(a){this.lastModifiedDate=null,this.size=null,this.type="like/"+a.slice(a.lastIndexOf(".")+1).toLowerCase(),this.name=a.slice(a.lastIndexOf("/")+a.lastIndexOf("\\")+2)},h.prototype._createFromObject=function(b){this.lastModifiedDate=a.copy(b.lastModifiedDate),this.size=b.size,this.type=b.type,this.name=b.name},i.prototype.upload=function(){this.uploader.uploadItem(this)},i.prototype.cancel=function(){this.uploader.cancelItem(this)},i.prototype.remove=function(){this.uploader.removeFromQueue(this)},i.prototype.onBeforeUpload=function(){},i.prototype.onProgress=function(){},i.prototype.onSuccess=function(){},i.prototype.onError=function(){},i.prototype.onCancel=function(){},i.prototype.onComplete=function(){},i.prototype._onBeforeUpload=function(){this.isReady=!0,this.isUploading=!0,this.isUploaded=!1,this.isSuccess=!1,this.isCancel=!1,this.isError=!1,this.progress=0,this.onBeforeUpload()},i.prototype._onProgress=function(a){this.progress=a,this.onProgress(a)},i.prototype._onSuccess=function(a,b,c){this.isReady=!1,this.isUploading=!1,this.isUploaded=!0,this.isSuccess=!0,this.isCancel=!1,this.isError=!1,this.progress=100,this.index=null,this.onSuccess(a,b,c)},i.prototype._onError=function(a,b,c){this.isReady=!1,this.isUploading=!1,this.isUploaded=!0,this.isSuccess=!1,this.isCancel=!1,this.isError=!0,this.progress=0,this.index=null,this.onError(a,b,c)},i.prototype._onCancel=function(a,b,c){this.isReady=!1,this.isUploading=!1,this.isUploaded=!1,this.isSuccess=!1,this.isCancel=!0,this.isError=!1,this.progress=0,this.index=null,this.onCancel(a,b,c)},i.prototype._onComplete=function(a,b,c){this.onComplete(a,b,c),this.removeAfterUpload&&this.remove()},i.prototype._destroy=function(){this._input&&this._input.remove(),this._form&&this._form.remove(),delete this._form,delete this._input},i.prototype._prepareToUploading=function(){this.index=this.index||++this.uploader._nextIndex,this.isReady=!0},i.prototype._replaceNode=function(a){var b=f(a.clone())(a.scope());b.prop("value",null),a.css("display","none"),a.after(b)},j.prototype.events={},j.prototype.bind=function(){for(var a in this.events){var b=this.events[a];this.element.bind(a,this[b])}},j.prototype.unbind=function(){for(var a in this.events)this.element.unbind(a,this.events[a])},j.prototype.destroy=function(){var a=this.uploader._directives[this.prop].indexOf(this);this.uploader._directives[this.prop].splice(a,1),this.unbind()},j.prototype._saveLinks=function(){for(var a in this.events){var b=this.events[a];this[b]=this[b].bind(this)}},g.inherit(k,j),k.prototype.events={$destroy:"destroy",change:"onChange"},k.prototype.prop="select",k.prototype.getOptions=function(){},k.prototype.getFilters=function(){},k.prototype.isEmptyAfterSelection=function(){return!!this.element.attr("multiple")},k.prototype.onChange=function(){var a=this.uploader.isHTML5?this.element[0].files:this.element[0],b=this.getOptions(),c=this.getFilters();this.uploader.isHTML5||this.destroy(),this.uploader.addToQueue(a,b,c),this.isEmptyAfterSelection()&&this.element.prop("value",null)},g.inherit(l,j),l.prototype.events={$destroy:"destroy",drop:"onDrop",dragover:"onDragOver",dragleave:"onDragLeave"},l.prototype.prop="drop",l.prototype.getOptions=function(){},l.prototype.getFilters=function(){},l.prototype.onDrop=function(b){var c=this._getTransfer(b);if(c){var d=this.getOptions(),e=this.getFilters();this._preventAndStop(b),a.forEach(this.uploader._directives.over,this._removeOverClass,this),this.uploader.addToQueue(c.files,d,e)}},l.prototype.onDragOver=function(b){var c=this._getTransfer(b);this._haveFiles(c.types)&&(c.dropEffect="copy",this._preventAndStop(b),a.forEach(this.uploader._directives.over,this._addOverClass,this))},l.prototype.onDragLeave=function(b){b.currentTarget===this.element[0]&&(this._preventAndStop(b),a.forEach(this.uploader._directives.over,this._removeOverClass,this))},l.prototype._getTransfer=function(a){return a.dataTransfer?a.dataTransfer:a.originalEvent.dataTransfer},l.prototype._preventAndStop=function(a){a.preventDefault(),a.stopPropagation()},l.prototype._haveFiles=function(a){return a?a.indexOf?-1!==a.indexOf("Files"):a.contains?a.contains("Files"):!1:!1},l.prototype._addOverClass=function(a){a.addOverClass()},l.prototype._removeOverClass=function(a){a.removeOverClass()},g.inherit(m,j),m.prototype.events={$destroy:"destroy"},m.prototype.prop="over",m.prototype.overClass="nv-file-over",m.prototype.addOverClass=function(){this.element.addClass(this.getOverClass())},m.prototype.removeOverClass=function(){this.element.removeClass(this.getOverClass())},m.prototype.getOverClass=function(){return this.overClass},g}]).directive("nvFileSelect",["$parse","FileUploader",function(a,b){return{link:function(c,d,e){var f=c.$eval(e.uploader);if(!(f instanceof b))throw new TypeError('"Uploader" must be an instance of FileUploader');var g=new b.FileSelect({uploader:f,element:d});g.getOptions=a(e.options).bind(g,c),g.getFilters=function(){return e.filters}}}}]).directive("nvFileDrop",["$parse","FileUploader",function(a,b){return{link:function(c,d,e){var f=c.$eval(e.uploader);if(!(f instanceof b))throw new TypeError('"Uploader" must be an instance of FileUploader');if(f.isHTML5){var g=new b.FileDrop({uploader:f,element:d});g.getOptions=a(e.options).bind(g,c),g.getFilters=function(){return e.filters}}}}}]).directive("nvFileOver",["FileUploader",function(a){return{link:function(b,c,d){var e=b.$eval(d.uploader);if(!(e instanceof a))throw new TypeError('"Uploader" must be an instance of FileUploader');var f=new a.FileOver({uploader:e,element:c});f.getOverClass=function(){return d.overClass||this.overClass}}}}]),b});
//# sourceMappingURL=angular-file-upload.min.map
;
//
// Copyright (c) 2007 John Fraser.
//
// Original Markdown Copyright (c) 2004-2005 John Gruber
//   <http://daringfireball.net/projects/markdown/>
//
var Showdown={extensions:{}},forEach=Showdown.forEach=function(a,b){if(typeof a.forEach=="function")a.forEach(b);else{var c,d=a.length;for(c=0;c<d;c++)b(a[c],c,a)}},stdExtName=function(a){return a.replace(/[_-]||\s/g,"").toLowerCase()};Showdown.converter=function(a){var b,c,d,e=0,f=[],g=[];if(typeof module!="undefind"&&typeof exports!="undefined"&&typeof require!="undefind"){var h=require("fs");if(h){var i=h.readdirSync((__dirname||".")+"/extensions").filter(function(a){return~a.indexOf(".js")}).map(function(a){return a.replace(/\.js$/,"")});Showdown.forEach(i,function(a){var b=stdExtName(a);Showdown.extensions[b]=require("./extensions/"+a)})}}this.makeHtml=function(a){return b={},c={},d=[],a=a.replace(/~/g,"~T"),a=a.replace(/\$/g,"~D"),a=a.replace(/\r\n/g,"\n"),a=a.replace(/\r/g,"\n"),a="\n\n"+a+"\n\n",a=M(a),a=a.replace(/^[ \t]+$/mg,""),Showdown.forEach(f,function(b){a=k(b,a)}),a=z(a),a=m(a),a=l(a),a=o(a),a=K(a),a=a.replace(/~D/g,"$$"),a=a.replace(/~T/g,"~"),Showdown.forEach(g,function(b){a=k(b,a)}),a};if(a&&a.extensions){var j=this;Showdown.forEach(a.extensions,function(a){typeof a=="string"&&(a=Showdown.extensions[stdExtName(a)]);if(typeof a!="function")throw"Extension '"+a+"' could not be loaded.  It was either not found or is not a valid extension.";Showdown.forEach(a(j),function(a){a.type?a.type==="language"||a.type==="lang"?f.push(a):(a.type==="output"||a.type==="html")&&g.push(a):g.push(a)})})}var k=function(a,b){if(a.regex){var c=new RegExp(a.regex,"g");return b.replace(c,a.replace)}if(a.filter)return a.filter(b)},l=function(a){return a+="~0",a=a.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?[ \t]*\n?[ \t]*(?:(\n*)["(](.+?)[")][ \t]*)?(?:\n+|(?=~0))/gm,function(a,d,e,f,g){return d=d.toLowerCase(),b[d]=G(e),f?f+g:(g&&(c[d]=g.replace(/"/g,"&quot;")),"")}),a=a.replace(/~0/,""),a},m=function(a){a=a.replace(/\n/g,"\n\n");var b="p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del|style|section|header|footer|nav|article|aside",c="p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside";return a=a.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm,n),a=a.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside)\b[^\r]*?<\/\2>[ \t]*(?=\n+)\n)/gm,n),a=a.replace(/(\n[ ]{0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,n),a=a.replace(/(\n\n[ ]{0,3}<!(--[^\r]*?--\s*)+>[ \t]*(?=\n{2,}))/g,n),a=a.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,n),a=a.replace(/\n\n/g,"\n"),a},n=function(a,b){var c=b;return c=c.replace(/\n\n/g,"\n"),c=c.replace(/^\n/,""),c=c.replace(/\n+$/g,""),c="\n\n~K"+(d.push(c)-1)+"K\n\n",c},o=function(a){a=v(a);var b=A("<hr />");return a=a.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm,b),a=a.replace(/^[ ]{0,2}([ ]?\-[ ]?){3,}[ \t]*$/gm,b),a=a.replace(/^[ ]{0,2}([ ]?\_[ ]?){3,}[ \t]*$/gm,b),a=x(a),a=y(a),a=E(a),a=m(a),a=F(a),a},p=function(a){return a=B(a),a=q(a),a=H(a),a=t(a),a=r(a),a=I(a),a=G(a),a=D(a),a=a.replace(/  +\n/g," <br />\n"),a},q=function(a){var b=/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi;return a=a.replace(b,function(a){var b=a.replace(/(.)<\/?code>(?=.)/g,"$1`");return b=N(b,"\\`*_"),b}),a},r=function(a){return a=a.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,s),a=a.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?(.*?(?:\(.*?\).*?)?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,s),a=a.replace(/(\[([^\[\]]+)\])()()()()()/g,s),a},s=function(a,d,e,f,g,h,i,j){j==undefined&&(j="");var k=d,l=e,m=f.toLowerCase(),n=g,o=j;if(n==""){m==""&&(m=l.toLowerCase().replace(/ ?\n/g," ")),n="#"+m;if(b[m]!=undefined)n=b[m],c[m]!=undefined&&(o=c[m]);else{if(!(k.search(/\(\s*\)$/m)>-1))return k;n=""}}n=N(n,"*_");var p='<a href="'+n+'"';return o!=""&&(o=o.replace(/"/g,"&quot;"),o=N(o,"*_"),p+=' title="'+o+'"'),p+=">"+l+"</a>",p},t=function(a){return a=a.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,u),a=a.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,u),a},u=function(a,d,e,f,g,h,i,j){var k=d,l=e,m=f.toLowerCase(),n=g,o=j;o||(o="");if(n==""){m==""&&(m=l.toLowerCase().replace(/ ?\n/g," ")),n="#"+m;if(b[m]==undefined)return k;n=b[m],c[m]!=undefined&&(o=c[m])}l=l.replace(/"/g,"&quot;"),n=N(n,"*_");var p='<img src="'+n+'" alt="'+l+'"';return o=o.replace(/"/g,"&quot;"),o=N(o,"*_"),p+=' title="'+o+'"',p+=" />",p},v=function(a){function b(a){return a.replace(/[^\w]/g,"").toLowerCase()}return a=a.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm,function(a,c){return A('<h1 id="'+b(c)+'">'+p(c)+"</h1>")}),a=a.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm,function(a,c){return A('<h2 id="'+b(c)+'">'+p(c)+"</h2>")}),a=a.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm,function(a,c,d){var e=c.length;return A("<h"+e+' id="'+b(d)+'">'+p(d)+"</h"+e+">")}),a},w,x=function(a){a+="~0";var b=/^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;return e?a=a.replace(b,function(a,b,c){var d=b,e=c.search(/[*+-]/g)>-1?"ul":"ol";d=d.replace(/\n{2,}/g,"\n\n\n");var f=w(d);return f=f.replace(/\s+$/,""),f="<"+e+">"+f+"</"+e+">\n",f}):(b=/(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g,a=a.replace(b,function(a,b,c,d){var e=b,f=c,g=d.search(/[*+-]/g)>-1?"ul":"ol",f=f.replace(/\n{2,}/g,"\n\n\n"),h=w(f);return h=e+"<"+g+">\n"+h+"</"+g+">\n",h})),a=a.replace(/~0/,""),a};w=function(a){return e++,a=a.replace(/\n{2,}$/,"\n"),a+="~0",a=a.replace(/(\n)?(^[ \t]*)([*+-]|\d+[.])[ \t]+([^\r]+?(\n{1,2}))(?=\n*(~0|\2([*+-]|\d+[.])[ \t]+))/gm,function(a,b,c,d,e){var f=e,g=b,h=c;return g||f.search(/\n{2,}/)>-1?f=o(L(f)):(f=x(L(f)),f=f.replace(/\n$/,""),f=p(f)),"<li>"+f+"</li>\n"}),a=a.replace(/~0/g,""),e--,a};var y=function(a){return a+="~0",a=a.replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g,function(a,b,c){var d=b,e=c;return d=C(L(d)),d=M(d),d=d.replace(/^\n+/g,""),d=d.replace(/\n+$/g,""),d="<pre><code>"+d+"\n</code></pre>",A(d)+e}),a=a.replace(/~0/,""),a},z=function(a){return a+="~0",a=a.replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g,function(a,b,c){var d=b,e=c;return e=C(e),e=M(e),e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,""),e="<pre><code"+(d?' class="'+d+'"':"")+">"+e+"\n</code></pre>",A(e)}),a=a.replace(/~0/,""),a},A=function(a){return a=a.replace(/(^\n+|\n+$)/g,""),"\n\n~K"+(d.push(a)-1)+"K\n\n"},B=function(a){return a=a.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(a,b,c,d,e){var f=d;return f=f.replace(/^([ \t]*)/g,""),f=f.replace(/[ \t]*$/g,""),f=C(f),b+"<code>"+f+"</code>"}),a},C=function(a){return a=a.replace(/&/g,"&amp;"),a=a.replace(/</g,"&lt;"),a=a.replace(/>/g,"&gt;"),a=N(a,"*_{}[]\\",!1),a},D=function(a){return a=a.replace(/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g,"<strong>$2</strong>"),a=a.replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g,"<em>$2</em>"),a},E=function(a){return a=a.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm,function(a,b){var c=b;return c=c.replace(/^[ \t]*>[ \t]?/gm,"~0"),c=c.replace(/~0/g,""),c=c.replace(/^[ \t]+$/gm,""),c=o(c),c=c.replace(/(^|\n)/g,"$1  "),c=c.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(a,b){var c=b;return c=c.replace(/^  /mg,"~0"),c=c.replace(/~0/g,""),c}),A("<blockquote>\n"+c+"\n</blockquote>")}),a},F=function(a){a=a.replace(/^\n+/g,""),a=a.replace(/\n+$/g,"");var b=a.split(/\n{2,}/g),c=[],e=b.length;for(var f=0;f<e;f++){var g=b[f];g.search(/~K(\d+)K/g)>=0?c.push(g):g.search(/\S/)>=0&&(g=p(g),g=g.replace(/^([ \t]*)/g,"<p>"),g+="</p>",c.push(g))}e=c.length;for(var f=0;f<e;f++)while(c[f].search(/~K(\d+)K/)>=0){var h=d[RegExp.$1];h=h.replace(/\$/g,"$$$$"),c[f]=c[f].replace(/~K\d+K/,h)}return c.join("\n\n")},G=function(a){return a=a.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),a=a.replace(/<(?![a-z\/?\$!])/gi,"&lt;"),a},H=function(a){return a=a.replace(/\\(\\)/g,O),a=a.replace(/\\([`*_{}\[\]()>#+-.!])/g,O),a},I=function(a){return a=a.replace(/<((https?|ftp|dict):[^'">\s]+)>/gi,'<a href="$1">$1</a>'),a=a.replace(/<(?:mailto:)?([-.\w]+\@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,function(a,b){return J(K(b))}),a},J=function(a){var b=[function(a){return"&#"+a.charCodeAt(0)+";"},function(a){return"&#x"+a.charCodeAt(0).toString(16)+";"},function(a){return a}];return a="mailto:"+a,a=a.replace(/./g,function(a){if(a=="@")a=b[Math.floor(Math.random()*2)](a);else if(a!=":"){var c=Math.random();a=c>.9?b[2](a):c>.45?b[1](a):b[0](a)}return a}),a='<a href="'+a+'">'+a+"</a>",a=a.replace(/">.+:/g,'">'),a},K=function(a){return a=a.replace(/~E(\d+)E/g,function(a,b){var c=parseInt(b);return String.fromCharCode(c)}),a},L=function(a){return a=a.replace(/^(\t|[ ]{1,4})/gm,"~0"),a=a.replace(/~0/g,""),a},M=function(a){return a=a.replace(/\t(?=\t)/g,"    "),a=a.replace(/\t/g,"~A~B"),a=a.replace(/~B(.+?)~A/g,function(a,b,c){var d=b,e=4-d.length%4;for(var f=0;f<e;f++)d+=" ";return d}),a=a.replace(/~A/g,"    "),a=a.replace(/~B/g,""),a},N=function(a,b,c){var d="(["+b.replace(/([\[\]\\])/g,"\\$1")+"])";c&&(d="\\\\"+d);var e=new RegExp(d,"g");return a=a.replace(e,O),a},O=function(a,b){var c=b.charCodeAt(0);return"~E"+c+"E"}},typeof module!="undefined"&&(module.exports=Showdown),typeof define=="function"&&define.amd&&define("showdown",function(){return Showdown});
(function() {
  angular.module('sc.noticias', []);

}).call(this);
(function() {
  angular.module("sc.commons.app-notifications", ['sc.commons.factories.resourceList', 'sc.websocket']).service("$scAppNotifications", [
    '$rootScope', 'ResourceList', 'Sistema::NotificacaoResource', '$scWebSocket', function($rootScope, ResourceList, Notificacao, ws) {
      var fnAddNotificacao, obj;
      obj = {
        pendentes: [],
        nao_lidas: [],
        resource: new ResourceList(Notificacao, '$scAppNotifications.notificacao'),
        checkData: function(data) {
          if (data.lido) {
            this.nao_lidas.removeById(data.id);
          } else {
            if (!this.pendentes.getById(data.id)) {
              this.nao_lidas.push(data);
            }
          }
          data.created_at = new Date(data.created_at);
          if (!this.checked_at || (data.created_at > this.checked_at)) {
            if (!this.pendentes.getById(data.id)) {
              return this.pendentes.push(data);
            }
          } else {
            return this.pendentes.removeById(data.id);
          }
        },
        ler: function() {
          this.reler = true;
          if (this.lendo) {
            return;
          }
          if (!this.nao_lidas.length) {
            return;
          }
          this.reler = false;
          this.lendo = true;
          return Notificacao.lerTodas({
            ids: this.nao_lidas.map(function(i) {
              return i.id;
            })
          }, (function(_this) {
            return function() {
              var notificacao, _i, _len, _ref;
              _this.lendo = false;
              _ref = _this.nao_lidas;
              for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                notificacao = _ref[_i];
                notificacao.lido = true;
              }
              _this.nao_lidas = [];
              if (_this.reler) {
                return _this.ler();
              }
            };
          })(this), (function(_this) {
            return function() {
              return _this.lendo = false;
            };
          })(this));
        },
        buscar: function() {
          return this.resource.load((function(_this) {
            return function(o, data) {
              var item, _i, _len, _ref, _results;
              _this.pendentes = [];
              _this.nao_lidas = [];
              _this.checked_at = new Date(data.checked_at);
              _this.user_id = data.user_id;
              _ref = o.list;
              _results = [];
              for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                item = _ref[_i];
                _results.push(_this.checkData(item));
              }
              return _results;
            };
          })(this));
        },
        touch: function() {
          var fn;
          this.retouch = true;
          if (this.touching) {
            return;
          }
          this.retouch = false;
          this.touching = true;
          this.checked_at = new Date();
          this.pendentes = [];
          fn = (function(_this) {
            return function() {
              _this.touching = false;
              if (_this.retouch) {
                return _this.touch();
              }
            };
          })(this);
          return Notificacao.touch({}, fn, fn);
        }
      };
      $rootScope.$on('$scAppNotifications.notificacao.setted', function(evt, data) {
        return obj.checkData(data);
      });
      fnAddNotificacao = function(data) {
        if (data.destinatario_id.toString() === obj.user_id.toString()) {
          return obj.resource.set(data, true);
        }
      };
      ws.scope($rootScope).subscribe("sistema-notificacao").on('atualizada', fnAddNotificacao).on('nova', fnAddNotificacao);
      obj.buscar();
      return obj;
    }
  ]).factory("Sistema::NotificacaoResource", [
    "$resource", function($resource) {
      return $resource("sistema/notificacoes/:id", {
        id: '@id'
      }, {
        list: {
          method: "GET"
        },
        update: {
          method: "PUT"
        },
        touch: {
          url: 'sistema/notificacoes/touch',
          method: "PUT"
        },
        lerTodas: {
          url: 'sistema/notificacoes/ler_todas',
          method: "PUT"
        }
      });
    }
  ]).controller("SC::Menu::Notificacoes", [
    '$scope', '$routeParams', "scToggle", '$scAppNotifications', '$location', 'Sistema::NotificacaoResource', function($scope, $routeParams, Toggler, $scAppNotifications, $location, Notificacao) {
      $scope.init = function() {
        $scope.notificacoes = $scAppNotifications;
        return $scope.boxMessages = new Toggler({
          onOpen: function() {
            return $scAppNotifications.touch();
          }
        });
      };
      $scope.boxColorDefault = 'sc-bg-gray-lighter';
      $scope.params = $routeParams;
      $scope.$watch("params._notificacao_id", function(newValue, oldVal, scope) {
        if (newValue) {
          return Notificacao.update({
            id: newValue
          }, function() {
            return $location.search("_notificacao_id", null);
          }, angular.noop);
        }
      });
      return $scope.template = {
        hrItem: function(notification) {
          if (notification.lido) {
            return "sc-hr-gray-light";
          } else {
            return "sc-hr-blue-light";
          }
        },
        button: function() {
          if ($scope.adding) {
            return 'sc-bg-white sc-text-blue-dark sc-text-shadow-none';
          }
          if ($scope.boxMessages.opened) {
            return "" + $scope.boxColorDefault + " sc-text-blue sc-text-shadow-none";
          }
          return 'sc-text-blue-lighter';
        }
      };
    }
  ]);

}).call(this);
(function() {
  angular.module('sc.commons.components.currencyInput', []).directive("scCurrencyInput", function() {
    return {
      require: "ngModel",
      scope: {
        myModel: "=ngModel"
      },
      link: function($scope, $element, $attrs, ngModelCtrl) {
        var listener;
        $element.toInputMoneyPtBr();
        listener = function() {
          $scope.myModel = dinheiro_bd($element.val());
        };
        $element.bind("keyup change", function() {
          return $scope.$apply(listener);
        });
        return $scope.$watch("myModel", function(newVal, oldVal, scope) {
          if (typeof newVal === "string") {
            return $scope.myModel = dinheiro_bd(newVal);
          } else {
            return $element.val(dinheiro(newVal || 0));
          }
        });
      }
    };
  });

}).call(this);
(function() {
  angular.module('sc.login', []).factory('fbScript', function() {
    var fbAsyncInit, scriptInjection;
    scriptInjection = function(d, s, id) {
      var fjs, js;
      fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      return fjs.parentNode.insertBefore(js, fjs);
    };
    fbAsyncInit = function() {
      return window.fbAsyncInit = function() {
        return FB.init({
          appId: angular.element("body").attr("data-facebook-app"),
          status: true,
          cookie: true,
          xfbml: true,
          version: 'v2.3'
        });
      };
    };
    return {
      injected: false,
      inject: function() {
        if (this.injected) {
          return;
        }
        this.injected = true;
        fbAsyncInit();
        return scriptInjection(document, 'script', 'facebook-jssdk');
      }
    };
  }).directive('fbLogin', [
    'LoginService', 'fbScript', function(LoginService, fbScript) {
      return {
        scope: {
          callback: '=fbLogin'
        },
        link: function(scope, el, attrs) {
          var onClick;
          fbScript.inject();
          onClick = function($event) {
            $event.preventDefault();
            return FB.login(function(response) {
              if (!response.authResponse) {
                return;
              }
              return scope.callback(response.authResponse.accessToken);
            }, {
              scope: 'email'
            });
          };
          el.bind('click', onClick);
          return scope.$on('$destroy', function() {
            return el.unbind('click', onClick);
          });
        }
      };
    }
  ]).service('LoginService', [
    '$resource', '$http', function($resource, $http) {
      var encapsulateData, servico;
      encapsulateData = function(data) {
        return JSON.stringify({
          'session': data
        });
      };
      servico = {
        me: void 0,
        removeProvider: function(provider) {
          var _ref;
          return ((_ref = this.me) != null ? _ref.providers || (_ref.providers = []) : void 0).remove(provider);
        },
        addProvider: function(provider) {
          var _ref;
          return ((_ref = this.me) != null ? _ref.providers || (_ref.providers = []) : void 0).push(provider);
        },
        hasProvider: function(provider) {
          var _ref, _ref1;
          return (_ref = this.me) != null ? (_ref1 = _ref.providers) != null ? _ref1.inArray(provider) : void 0 : void 0;
        },
        errors: {},
        working: false,
        disconnecting: {},
        connecting: {},
        redirect: void 0,
        resource: $resource('session', {}, {
          create: {
            method: "POST",
            transformRequest: encapsulateData
          },
          destroy: {
            method: "GET",
            url: "/sair"
          },
          show: {
            method: "GET"
          }
        }),
        disconnectFrom: function(provider, successCallback, failCallback) {
          if (this.working) {
            return;
          }
          this.working = this.disconnecting[provider] = true;
          this.errors = [];
          return $http["delete"]("/auth/" + provider).success((function(_this) {
            return function(data) {
              _this.working = _this.disconnecting[provider] = false;
              return _this.removeProvider(provider);
            };
          })(this)).error((function(_this) {
            return function(data) {
              _this.working = _this.disconnecting[provider] = false;
              return _this.errors = data.errors;
            };
          })(this));
        },
        connectToFacebook: function(token, successCallback, failCallback) {
          var url;
          if (token == null) {
            return;
          }
          if (this.working) {
            return;
          }
          this.working = this.connecting.facebook = true;
          successCallback || (successCallback = angular.noop);
          failCallback || (failCallback = angular.noop);
          url = "/auth/facebook_access_token/callback?access_token=" + token;
          return $http.post(url).success((function(_this) {
            return function(data) {
              _this.working = _this.connecting.facebook = false;
              _this.errors = {};
              if (data) {
                _this.redirect = data.redirect_url;
                _this.me = data;
              } else {
                _this.addProvider('facebook');
              }
              return successCallback(data);
            };
          })(this)).error((function(_this) {
            return function(data) {
              _this.working = _this.connecting.facebook = false;
              _this.errors = data.errors;
              return failCallback(data);
            };
          })(this));
        },
        create: function(login, success, failure) {
          var failureCallback, successCallback;
          failure || (failure = angular.noop);
          success || (success = angular.noop);
          successCallback = (function(_this) {
            return function(data) {
              _this.redirect = data.redirect_url;
              _this.errors = {};
              _this.me = data;
              return success(data);
            };
          })(this);
          failureCallback = (function(_this) {
            return function(response) {
              var _ref;
              _this.redirect = '';
              _this.errors = ((_ref = response.data) != null ? _ref.errors : void 0) || {};
              _this.me = void 0;
              return failure(response);
            };
          })(this);
          return this.resource.create(login, successCallback, failureCallback);
        },
        destroy: function(success, failure) {
          var failureCallback, succcessCallback;
          failure || (failure = angular.noop);
          success || (success = angular.noop);
          succcessCallback = (function(_this) {
            return function(data) {
              _this.redirect = '';
              _this.errors = {};
              _this.me = void 0;
              return success(data);
            };
          })(this);
          failureCallback = (function(_this) {
            return function(response) {
              return failure(response);
            };
          })(this);
          return this.resource.destroy({}, succcessCallback, failureCallback);
        },
        show: function(success, failure) {
          var failureCallback, successCallback;
          if (this.working) {
            return;
          }
          this.working = true;
          failure || (failure = angular.noop);
          success || (success = angular.noop);
          successCallback = (function(_this) {
            return function(data) {
              _this.redirect = data.redirect_url;
              _this.working = false;
              _this.errors = {};
              _this.me = data;
              return success(data);
            };
          })(this);
          failureCallback = (function(_this) {
            return function(response) {
              var _ref;
              _this.redirect = '';
              _this.working = false;
              _this.errors = ((_ref = response.data) != null ? _ref.errors : void 0) || {};
              _this.me = void 0;
              return failure(response);
            };
          })(this);
          return this.resource.show({}, successCallback, failureCallback);
        }
      };
      servico.show();
      return servico;
    }
  ]);

}).call(this);
(function() {
  angular.module('sc.commons.components.monthPicker', []).directive('scMonthPicker', [
    '$compile', '$scTimezone', '$document', '$locale', function($compile, $scTimezone, $document, $locale) {
      return {
        restrict: 'A',
        require: 'ngModel',
        replace: true,
        scope: {
          myModel: "=ngModel",
          ngDisable: "=ngDisable"
        },
        link: function(scope, element, attrs, controllers) {
          var closeDropdown, monthsFullName, today, yearMonth;
          if (!attrs.tabindex) {
            element.prop('tabindex', '0');
          }
          yearMonth = scope.myModel;
          today = function() {
            return "" + ($scTimezone.now.format("YYYY-MM"));
          };
          if (!yearMonth) {
            yearMonth = today();
          }
          scope.handleKeyDown = function(e) {
            if (scope.ngDisable) {
              return;
            }
            if (e.keyCode === keyMap.ARROW.RIGHT) {
              scope.incMonth();
            }
            if (e.keyCode === keyMap.ARROW.LEFT) {
              scope.decMonth();
            }
            if (e.keyCode === keyMap.ARROW.DOWN) {
              scope.openedDropDown = true;
            }
            if (e.keyCode === keyMap.ARROW.UP) {
              return scope.openedDropDown = false;
            }
          };
          scope.pressedEnterOnDate = function(e, monthNumber, year) {
            if (e.keyCode === keyMap.ENTER) {
              scope.setMonth(monthNumber, year);
              return element[0].focus();
            }
          };
          scope.getYear = function() {
            return scope.year;
          };
          scope.setMonthYear = function(monthYear) {
            var monthFullNameString;
            if (scope.ngDisable) {
              return;
            }
            if (monthYear === true || !monthYear) {
              monthYear = today();
            }
            scope.month = monthYear.split("-")[1].toI();
            scope.year = monthYear.split("-")[0].toI();
            monthFullNameString = monthsFullName[scope.month - 1].capitalize();
            scope.monthYearString = "" + monthFullNameString + " / " + scope.year;
            return scope.myModel = moment($scTimezone["new"](scope.year, scope.month - 1, 1)).format("YYYY-MM-DD");
          };
          scope.openDropdown = function() {
            if (scope.ngDisable) {
              return;
            }
            return scope.openedDropDown = !scope.openedDropDown;
          };
          scope.setMonth = function(monthNumber, year) {
            scope.setMonthYear("" + year + "-" + monthNumber);
            return scope.openedDropDown = false;
          };
          scope.decYear = function() {
            return scope.year--;
          };
          scope.incYear = function() {
            return scope.year++;
          };
          scope.decMonth = function() {
            if (scope.ngDisable) {
              return;
            }
            scope.month--;
            if (scope.month === 0) {
              scope.year--;
              scope.month = 12;
            }
            return scope.setMonth(scope.month, scope.year);
          };
          scope.incMonth = function() {
            if (scope.ngDisable) {
              return;
            }
            scope.month = (scope.month + 1) % 13;
            if (!scope.month) {
              scope.year++;
              scope.month = 1;
            }
            return scope.setMonth(scope.month, scope.year);
          };
          monthsFullName = $locale.DATETIME_FORMATS.MONTH;
          scope.monthsShortName = $locale.DATETIME_FORMATS.SHORTMONTH;
          scope.setMonthYear(yearMonth);
          scope.$watch("ngDisable", function(newVal, oldVal, scope) {
            if (newVal !== void 0) {
              element.attr('disabled', newVal);
              if (newVal) {
                scope.tabindex = element.attr('tabindex');
                return element.removeAttr('tabindex');
              } else {
                return element.attr('tabindex', scope.tabindex);
              }
            }
          });
          scope.$watch("myModel", function(newVal, oldVal, scope) {
            if (scope.setMonthYear) {
              return scope.setMonthYear(newVal);
            }
          });
          closeDropdown = function(evt) {
            return scope.$apply(function() {
              var $target, scMiniCalendar, target;
              target = evt.target;
              $target = $(target);
              scMiniCalendar = $target.closest(".sc-month-picker");
              if (scMiniCalendar.length === 0) {
                scope.openedDropDown = false;
              }
            });
          };
          $document.bind('click', closeDropdown);
          scope.$on("$destroy", function() {
            return $document.unbind('click', closeDropdown);
          });
        },
        template: '<div class="sc-month-picker" ng-keydown="handleKeyDown($event)"> <div class="box-label"> <div class="sc-arrow-dec-month" ng-click="decMonth()"></div> <div class="sc-arrow-inc-month" ng-click="incMonth()"></div> <div class="sc-current-month" ng-click="openDropdown()"> <span>{{monthYearString}}</span> </div> </div> <div style="position: relative"> <div class="sc-month-picker-dropdown ng-animation-slider" ng-if="openedDropDown" > <div class="sc-year-box"> <a class="sc-arrow-year left" ng-click="decYear()"></a> <!-- <input type="text" ng-model="getYear()" class="sc-input-year numerico" maxlength="4" /> --> <span class="sc-input-year">{{year}}</span> <a class="sc-arrow-year right" ng-click="incYear()"></a> </div> <div class="sc-months-mini-calendar"> <a ng-keydown="pressedEnterOnDate($event, $index+1, year)" tabindex="0" ng-click="setMonth($index+1, year)" ng-repeat="monthShortName in monthsShortName" ng-class="{\'active\': ($index + 1) === month}">{{monthShortName}}</a> </div> </div> </div> </div>'
      };
    }
  ]);

}).call(this);
(function() {
  angular.module('sc.commons.components.typeahead', ['sc.commons.factories.position']).factory('typeaheadParser', [
    '$parse', function($parse) {
      var TYPEAHEAD_REGEXP;
      TYPEAHEAD_REGEXP = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
      return {
        parse: function(input) {
          var match;
          match = input.match(TYPEAHEAD_REGEXP);
          if (!match) {
            throw new Error("Expected typeahead specification in form of \"_modelValue_ (as _label_)? for _item_ in _collection_\" but got \"" + input + "\".");
          }
          return {
            itemName: match[4],
            source: $parse(match[5]),
            groupMapper: match[3] && $parse(match[3]),
            viewMapper: $parse(match[2] || match[1]),
            modelMapper: $parse(match[1])
          };
        }
      };
    }
  ]).directive('typeahead', [
    '$compile', '$parse', '$q', '$timeout', '$document', '$position', 'typeaheadParser', function($compile, $parse, $q, $timeout, $document, $position, typeaheadParser) {
      var HOT_KEYS;
      HOT_KEYS = [8, 9, 13, 27, 38, 40];
      return {
        require: 'ngModel',
        priority: 99,
        link: function(originalScope, element, attrs, modelCtrl) {
          var $popup, $setModelValue, appendToBody, cancelPreviousTimeout, dismissClickHandler, ensureVisibility, getMatchId, getMatchesAsync, hasFocus, inputFormatter, isCombo, isEditable, isGrouped, isLoadingSetter, minSearch, multipleValues, noRecordText, noRecordsFound, onBackspaceCallback, onSelectCallback, openCombo, parserResult, popUpEl, popupId, releaseKeyboardNavPromisse, relocate, removeMatches, resetMatches, scheduleSearchWithTimeout, scope, timeoutPromise, waitTime, windowResizeHandler;
          multipleValues = originalScope.$eval(attrs.typeaheadMultiple) || false;
          minSearch = originalScope.$eval(attrs.typeaheadMinLength) || 1;
          waitTime = originalScope.$eval(attrs.typeaheadWaitMs) || 0;
          isEditable = attrs.typeaheadEditable === void 0 ? false : originalScope.$eval(attrs.typeaheadEditable) !== false;
          isCombo = !!originalScope.$eval(attrs.typeaheadCombo);
          isLoadingSetter = $parse(attrs.typeaheadLoading).assign || angular.noop;
          onSelectCallback = $parse(attrs.typeaheadOnSelect);
          onBackspaceCallback = $parse(attrs.typeaheadOnBackspace) || angular.noop;
          inputFormatter = void 0;
          appendToBody = true;
          noRecordText = attrs.typeaheadNoRecordText ? attrs.typeaheadNoRecordText : "Nenhum resultado encontrado";
          $setModelValue = $parse(attrs.ngModel).assign;
          parserResult = typeaheadParser.parse(attrs.typeahead);
          isGrouped = !!parserResult.groupMapper;
          hasFocus = void 0;
          scope = originalScope.$new();
          originalScope.$on('$destroy', function() {
            $popup.remove();
            return scope.$destroy();
          });
          element.addClass(isCombo ? 'typeahead-combo' : 'typeahead-search');
          popupId = "typeahead-" + scope.$id + "-" + (Math.floor(Math.random() * 10000));
          element.attr({
            "aria-autocomplete": 'list',
            "aria-expanded": false,
            "aria-owns": popupId
          });
          popUpEl = angular.element('<div typeahead-popup></div>');
          popUpEl.attr({
            id: popupId,
            matches: 'matches',
            groups: 'groups',
            active: 'activeIdx',
            select: 'select(activeIdx)',
            query: 'query',
            position: 'position'
          });
          if (angular.isDefined(attrs.typeaheadTemplateUrl)) {
            popUpEl.attr('template-url', attrs.typeaheadTemplateUrl);
          }
          removeMatches = function() {
            scope.matches = [];
            scope.activeIdx = -1;
            return element.attr('aria-expanded', false);
          };
          resetMatches = function(noReset) {
            if (noReset == null) {
              noReset = false;
            }
            if (!noReset) {
              removeMatches();
              if (!$parse(attrs.ngModel)(scope)) {
                element.val('');
                return modelCtrl.$setViewValue(void 0);
              }
            }
          };
          noRecordsFound = function() {
            removeMatches();
            if (!isEditable) {
              scope.matches.push({
                model: void 0,
                label: noRecordText,
                type: 'no-records'
              });
              if (isGrouped) {
                scope.groups = {
                  '': [0]
                };
              }
              scope.activeIdx = 0;
              return element.attr('aria-expanded', true);
            }
          };
          getMatchId = function(index) {
            return "" + popupId + "-option-" + index;
          };
          openCombo = function() {
            hasFocus = true;
            modelCtrl.$openCombo = true;
            return modelCtrl.$setViewValue(void 0);
          };
          relocate = function() {
            scope.position = appendToBody ? $position.offset(element) : $position.position(element);
            scope.position.top = scope.position.top + element.prop('offsetHeight');
            scope.position.width = element.prop('offsetWidth');
          };
          scope.$watch('activeIdx', function(index) {
            if (index < 0) {
              return element.removeAttr('aria-activedescendant');
            } else {
              return element.attr('aria-activedescendant', getMatchId(index));
            }
          });
          getMatchesAsync = function(inputValue) {
            var locals;
            locals = {
              $viewValue: inputValue
            };
            isLoadingSetter(originalScope, true);
            return $q.when(parserResult.source(originalScope, locals)).then(function(matches) {
              var addSuggestion, idx, item, items, onCurrentRequest, _base, _i, _len, _name;
              onCurrentRequest = inputValue === modelCtrl.$viewValue;
              if (onCurrentRequest && hasFocus) {
                addSuggestion = isEditable && inputValue;
                items = matches.map(function(match) {
                  var group, label, ret;
                  locals[parserResult.itemName] = match;
                  label = parserResult.viewMapper(scope, locals);
                  if (isGrouped) {
                    group = parserResult.groupMapper(scope, locals);
                  }
                  if (addSuggestion && ("" + label).toUpperCase() === ("" + inputValue).toUpperCase()) {
                    addSuggestion = false;
                  }
                  ret = {
                    label: label,
                    model: match
                  };
                  if (isGrouped) {
                    ret.group = group;
                    ret.group_label = group || '';
                  }
                  return ret;
                });
                if (addSuggestion) {
                  items.unshift({
                    label: inputValue,
                    model: inputValue,
                    group_label: '',
                    type: 'new-record'
                  });
                }
                if (isGrouped) {
                  scope.groups = {};
                  items = items.sort(function(a, b) {
                    if (a.group_label > b.group_label) {
                      return 1;
                    } else {
                      return -1;
                    }
                  });
                }
                if (items.length > 0) {
                  scope.activeIdx = 0;
                  scope.matches.length = 0;
                  for (idx = _i = 0, _len = items.length; _i < _len; idx = ++_i) {
                    item = items[idx];
                    item.id = getMatchId(idx);
                    scope.matches.push(item);
                    if (isGrouped) {
                      (_base = scope.groups)[_name = item.group_label] || (_base[_name] = []);
                      scope.groups[item.group_label].push(idx);
                    }
                  }
                  scope.query = inputValue;
                  ensureVisibility(scope.activeIdx);
                  element.attr('aria-expanded', true);
                } else {
                  noRecordsFound();
                }
                $timeout(relocate, 0);
              }
              if (onCurrentRequest) {
                isLoadingSetter(originalScope, false);
              }
            }, function() {
              resetMatches();
              isLoadingSetter(originalScope, false);
            });
          };
          resetMatches();
          scope.query = void 0;
          timeoutPromise = void 0;
          scheduleSearchWithTimeout = function(inputValue) {
            timeoutPromise = $timeout(function() {
              return getMatchesAsync(inputValue);
            }, waitTime);
          };
          cancelPreviousTimeout = function() {
            if (timeoutPromise) {
              $timeout.cancel(timeoutPromise);
            }
          };
          modelCtrl.$parsers.unshift(function(inputValue) {
            hasFocus = true;
            if (modelCtrl.$openCombo) {
              modelCtrl.$openCombo = false;
              cancelPreviousTimeout();
              getMatchesAsync(modelCtrl.$viewValue);
              return scope.$eval(attrs.ngModel) || inputValue;
            } else if (inputValue && inputValue.length >= minSearch) {
              if (waitTime > 0) {
                cancelPreviousTimeout();
                scheduleSearchWithTimeout(inputValue);
              } else {
                getMatchesAsync(inputValue);
              }
            } else if (isCombo && scope.matches.length > 0) {
              scheduleSearchWithTimeout(inputValue);
            } else {
              isLoadingSetter(originalScope, false);
              cancelPreviousTimeout();
              resetMatches();
            }
            if (isEditable) {
              return inputValue;
            } else {
              modelCtrl.$setValidity('editable', !inputValue);
              return null;
            }
          });
          modelCtrl.$formatters.push(function(modelValue) {
            var candidateViewValue, emptyViewValue, locals;
            candidateViewValue = emptyViewValue = void 0;
            locals = {};
            if (inputFormatter) {
              locals['$model'] = modelValue;
              return inputFormatter(originalScope, locals);
            } else {
              locals[parserResult.itemName] = modelValue;
              candidateViewValue = parserResult.viewMapper(originalScope, locals);
              locals[parserResult.itemName] = void 0;
              emptyViewValue = parserResult.viewMapper(originalScope, locals);
              if (candidateViewValue !== emptyViewValue) {
                return candidateViewValue;
              } else {
                return modelValue;
              }
            }
          });
          scope.select = function(activeIdx) {
            var item, label, locals, model;
            model = item = void 0;
            locals = {};
            item = scope.matches[activeIdx];
            locals[parserResult.itemName] = scope.matches[activeIdx].model;
            model = parserResult.modelMapper(originalScope, locals);
            if (isEditable && !model) {
              label = model = item.label;
            } else {
              label = parserResult.viewMapper(originalScope, locals);
            }
            $setModelValue(originalScope, model);
            modelCtrl.$setValidity('editable', true);
            onSelectCallback(originalScope, {
              $item: item,
              $model: model,
              $label: label
            });
            resetMatches(multipleValues);
            $timeout(function() {
              return element[0].focus();
            }, 0, false);
          };
          scope.triggerBackspace = function() {
            return scope.$apply(function() {
              onBackspaceCallback(originalScope, {
                $viewValue: modelCtrl.$viewValue != null ? modelCtrl.$viewValue : void 0
              });
              return $timeout(relocate, 0);
            });
          };
          scope.keyboardNav = false;
          releaseKeyboardNavPromisse = void 0;
          ensureVisibility = function(activeIdx) {
            var callbackFn, top;
            if (releaseKeyboardNavPromisse) {
              $timeout.cancel(releaseKeyboardNavPromisse);
            }
            callbackFn = function() {
              releaseKeyboardNavPromisse = $timeout(function() {
                scope.keyboardNav = false;
              }, 100);
            };
            top = angular.element("#" + scope.matches[activeIdx].id).prop('offsetTop') - 5;
            return popUpEl.scrollTo(top, callbackFn);
          };
          element.bind('keydown', function(evt) {
            var hasMatches;
            if (HOT_KEYS.indexOf(evt.which) === -1) {
              return;
            }
            hasMatches = scope.matches.length > 0;
            if (evt.which === 8) {
              scope.triggerBackspace();
            } else if (hasMatches) {
              evt.preventDefault();
              if (evt.which === 40) {
                scope.keyboardNav = true;
                scope.activeIdx = (scope.activeIdx + 1) % scope.matches.length;
                ensureVisibility(scope.activeIdx);
                scope.$digest();
              } else if (evt.which === 38) {
                scope.keyboardNav = true;
                scope.activeIdx = (scope.activeIdx ? scope.activeIdx : scope.matches.length) - 1;
                ensureVisibility(scope.activeIdx);
                scope.$digest();
              } else if (evt.which === 13) {
                evt.stopPropagation();
                scope.$apply(function() {
                  scope.select(scope.activeIdx);
                });
              } else if (evt.which === 27 || evt.which === 9) {
                evt.stopPropagation();
                resetMatches();
                scope.$digest();
              }
            } else if (isCombo && (evt.which === 40 || evt.which === 38)) {
              openCombo();
              getMatchesAsync(modelCtrl.$viewValue);
            }
          });
          element.bind('blur', function(evt) {
            if ((modelCtrl.$modelValue == null) && scope.matches.length === 0) {
              modelCtrl.$setViewValue(void 0);
              resetMatches();
            }
            hasFocus = false;
          });
          element.bind('click', function(evt) {
            if (isCombo) {
              hasFocus = void 0;
              if (scope.matches.length > 0) {
                hasFocus = false;
                resetMatches();
              } else {
                openCombo();
                getMatchesAsync(modelCtrl.$viewValue);
              }
              evt.stopPropagation();
              return scope.$digest();
            }
          });
          dismissClickHandler = function(evt) {
            if (!element.isParentOf(evt.target)) {
              element[0].blur();
              hasFocus = false;
              if (scope.matches.length > 0) {
                resetMatches();
                return scope.$digest();
              }
            }
          };
          windowResizeHandler = function() {
            relocate();
            return scope.$digest();
          };
          $(window).resize(windowResizeHandler);
          $document.bind('click', dismissClickHandler);
          originalScope.$on('$destroy', function() {
            $(window).unbind('resize', windowResizeHandler);
            return $document.unbind('click', dismissClickHandler);
          });
          $popup = $compile(popUpEl)(scope);
          if (appendToBody) {
            $document.find('body').append($popup);
          } else {
            element.after($popup);
          }
        }
      };
    }
  ]).directive('typeaheadPreventScroll', [
    '$position', function($position) {
      return {
        restrict: 'EA',
        link: function(scope, element, attrs, $document) {
          return element.bind('DOMMouseScroll mousewheel', function(e) {
            var delta, e0, multiplier, newValue;
            e0 = e.originalEvent;
            delta = e0.wheelDelta || -e0.detail;
            multiplier = delta < 0 ? 1 : -1;
            newValue = element.scrollTop() + multiplier * 40;
            element.scrollTop(newValue);
            return e.preventDefault();
          });
        }
      };
    }
  ]).directive('typeaheadPopup', function() {
    return {
      restrict: 'EA',
      scope: {
        matches: '=',
        groups: '=',
        query: '=',
        active: '=',
        position: '=',
        select: '&'
      },
      replace: true,
      templateUrl: "/assets/typeahead/list.html",
      link: function(scope, element, attrs) {
        scope.templateUrl = attrs.templateUrl;
        scope.isOpen = function() {
          return scope.matches.length > 0;
        };
        scope.isActive = function(matchIdx) {
          return scope.active === matchIdx;
        };
        scope.selectActive = function(matchIdx) {
          if (!scope.$parent.keyboardNav) {
            scope.active = matchIdx;
          }
        };
        scope.selectMatch = function(activeIdx) {
          scope.select({
            activeIdx: activeIdx
          });
        };
      }
    };
  }).directive('typeaheadMatch', [
    '$http', '$templateCache', '$compile', '$parse', function($http, $templateCache, $compile, $parse) {
      return {
        restrict: 'EA',
        scope: {
          index: '=',
          match: '=',
          query: '='
        },
        link: function(scope, element, attrs) {
          var placeTemplate, tplContentUrl, tplUrl;
          tplContentUrl = "/assets/typeahead/list-content.html";
          placeTemplate = function(tamplate) {
            element.replaceWith($compile(tamplate.trim())(scope));
          };
          if (tplUrl = $parse(attrs.templateUrl)(scope.$parent) || tplContentUrl) {
            $http.get(tplUrl, {
              cache: $templateCache
            }).success(function(tplContent) {
              return placeTemplate(tplContent);
            });
          }
        }
      };
    }
  ]);

}).call(this);
(function() {
  angular.module("sc.commons.directives.breadcrumbs", ['sc.commons.services.breadcrumbs']).directive("breadcrumbs", [
    '$scBreadcrumbs', function($scBreadcrumbs) {
      return {
        restrict: "A",
        replace: true,
        templateUrl: "/assets/components/breadcrumbs.html",
        compile: function(tElement, tAttrs) {
          return function($scope, $elem, $attr) {
            var bc_id, resetCrumbs;
            bc_id = $attr["id"];
            resetCrumbs = function() {
              $scope.breadcrumbs = [];
              angular.forEach($scBreadcrumbs.get(bc_id), function(v) {
                $scope.breadcrumbs.push(v);
              });
            };
            resetCrumbs();
            $scope.unregisterBreadCrumb = function(index) {
              $scBreadcrumbs.setLastIndex(bc_id, index);
              resetCrumbs();
            };
            $scope.$on("breadcrumbsRefresh", function() {
              resetCrumbs();
            });
          };
        }
      };
    }
  ]);

}).call(this);
(function() {
  angular.module("sc.commons.directives.dateInput", []).directive('scDateInput', [
    'dateFilter', function(dateFilter) {
      return {
        restrict: 'A',
        require: 'ngModel',
        template: '<input></input>',
        replace: true,
        link: function(scope, element, attrs, ngModelCtrl) {
          if (Modernizr.inputtypes.date) {
            element.prop('type', 'date');
          } else {
            element.bind("keyup change", function() {
              var value;
              value = element.val();
              if (value && value.match(/^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/)) {
                return ngModelCtrl.$setViewValue(value.toDateBdString());
              }
            });
            element.prop('type', 'text');
            $(element).mask("99/99/9999");
            element.addClass('sc-input-date');
            element.addClass('data');
            scope.$watch(attrs.ngModel, function(newValue, oldVal, scope) {
              var value;
              value = newValue;
              if (value && value.match(/^(19|20)\d{2}\-(0[1-9]|1[0-2])\-(0[1-9]|1\d|2\d|3[01])$/)) {
                return element.val(value.toDatePt());
              }
            });
          }
        }
      };
    }
  ]).directive('dateInput', [
    'dateFilter', '$html5support', function(dateFilter, $html5support) {
      return {
        restrict: "A",
        require: 'ngModel',
        template: '<input></input>',
        priority: 1,
        replace: true,
        link: function(scope, element, attrs, ngModelCtrl) {
          if ($html5support.input.date) {
            element.prop('type', 'date');
          } else {
            element.prop('type', 'text');
            $(element).mask("99/99/9999");
            element.addClass('sc-input-date');
            element.addClass('data');
          }
          element.on('blur keyup change', function() {
            return ngModelCtrl.$setViewValue(element.val(), ngModelCtrl.$validate);
          });
          ngModelCtrl.$validators.datePattern = function(modelValue, viewValue) {
            var value;
            value = modelValue || viewValue;
            if (value instanceof Date) {
              return true;
            }
            return value === void 0 || value === null || value === "" || moment(value, "DD/MM/YYYY", true).isValid() || moment(value, "YYYY-MM-DD", true).isValid();
          };
          ngModelCtrl.$formatters.push(function(modelValue) {
            if ($html5support.input.date) {
              return dateFilter(modelValue, 'yyyy-MM-dd');
            } else {
              return dateFilter(modelValue, 'dd/MM/yyyy');
            }
          });
          ngModelCtrl.$parsers.push(function(viewValue) {
            var format, momentObject;
            if (!viewValue) {
              return null;
            }
            if (!!viewValue.match(/^(\d{4})-(\d{2})-(\d{2})$/)) {
              format = 'IsoFormat';
            }
            if (!!viewValue.match(/^(\d{2})\/(\d{2})\/(\d{4})$/)) {
              format = 'BrFormat';
            }
            momentObject = (function() {
              switch (format) {
                case "IsoFormat":
                  return moment(viewValue, moment.ISO_8601);
                case "BrFormat":
                  return moment(viewValue, "DD/MM/YYYY");
              }
            })();
            if (momentObject && momentObject.isValid()) {
              return momentObject.toDate();
            }
            return null;
          });
        }
      };
    }
  ]);

}).call(this);
(function() {
  angular.module("sc.commons.directives.durationInput", []).directive('durationInput', [
    '$parse', function($parse) {
      return {
        restrict: "A",
        require: 'ngModel',
        template: '<input></input>',
        priority: 101,
        replace: true,
        link: function(scope, element, attrs, ngModelCtrl) {
          var $setModelValue, formatNumber, formatTo, modelIn, nav, sumMinutes, _ref;
          formatTo = 'HH:MM';
          modelIn = (_ref = attrs["in"]) != null ? _ref : 'hours';
          $setModelValue = $parse(attrs.ngModel).assign;
          sumMinutes = function(amount) {
            var model;
            if (amount == null) {
              amount = 0;
            }
            model = +ngModelCtrl.$modelValue;
            model = (function() {
              switch (modelIn) {
                case "hours":
                  return amount + model * 60.0;
                case "minutes":
                  return amount + model;
                default:
                  return amount + model / 60.0;
              }
            })();
            if (model < 0) {
              return 0;
            }
            switch (modelIn) {
              case "hours":
                return model / 60.0;
              case "minutes":
                return model;
              default:
                return model * 60.0;
            }
          };
          formatNumber = function(number) {
            var hours, hoursPad, hoursPadSize, minutes, seconds, _ref1, _ref2;
            number = parseFloat(number) || 0;
            seconds = (function() {
              switch (modelIn) {
                case "hours":
                  return number * 3600;
                case "minutes":
                  return number * 60;
                default:
                  return number;
              }
            })();
            _ref1 = [Math.floor(seconds / 3600), Math.floor((seconds % 3600) / 60)], hours = _ref1[0], minutes = _ref1[1];
            hoursPadSize = hours.toString().length;
            if (hoursPadSize < 2) {
              hoursPadSize = 2;
            }
            hoursPad = "";
            while (hoursPad.length < hoursPadSize) {
              hoursPad += "0";
            }
            _ref2 = [("" + hoursPad + hours).slice(-hoursPadSize), ("00" + minutes).slice(-2)], hours = _ref2[0], minutes = _ref2[1];
            return "" + hours + ":" + minutes;
          };
          ngModelCtrl.$formatters.push(formatNumber);
          ngModelCtrl.$parsers.push(function(viewValue) {
            var hora, minutes, seconds, _ref1, _ret;
            if (!viewValue.match(/\:/)) {
              viewValue = "" + viewValue + ":";
            }
            _ref1 = viewValue.split(':').map(function(e) {
              return parseFloat(e) || 0;
            }), hora = _ref1[0], minutes = _ref1[1];
            seconds = hora * 3600 + minutes * 60;
            _ret = (function() {
              switch (modelIn) {
                case "hours":
                  return seconds / 3600;
                case "minutes":
                  return seconds / 60;
                default:
                  return seconds;
              }
            })();
            if (minutes >= 60) {
              ngModelCtrl.$setViewValue(formatNumber(_ret));
              ngModelCtrl.$render();
            }
            return _ret;
          });
          nav = function(event) {
            return scope.$apply(function() {
              var keyCode;
              keyCode = event.which || event.keyCode;
              switch (keyCode) {
                case keyMap.ARROW.UP:
                  $setModelValue(scope, sumMinutes(1));
                  return event.preventDefault();
                case keyMap.ARROW.DOWN:
                  $setModelValue(scope, sumMinutes(-1));
                  return event.preventDefault();
              }
            });
          };
          element.bind('keydown', nav);
          scope.$on("$destroy", function() {
            return element.unbind('keydown', nav);
          });
        }
      };
    }
  ]);

}).call(this);
(function() {
  angular.module("sc.commons.directives.integerInput", []).directive('scIntegerInput', function() {
    return {
      require: 'ngModel',
      link: function(scope, element, attr, ctrl) {
        return ctrl.$parsers.unshift(function(viewValue) {
          var _viewValue;
          if (viewValue.length < 15) {
            _viewValue = parseInt(viewValue, 10);
            if (isNaN(_viewValue)) {
              _viewValue = 0;
            }
          } else {
            _viewValue = ctrl.$modelValue;
          }
          element.val(_viewValue);
          return _viewValue;
        });
      }
    };
  });

}).call(this);
// Como usar
// Hora
// <input sc-mask="99:99" ng-model="xxx" />

// Cep
// <input sc-mask="99999-999" ng-model="xxx" />

// Data
// <input sc-mask="99/99/99999" ng-model="xxx" />

// Letra e número
// <input sc-mask="AA-99" ng-model="xxx" />

// Asterisco aceita letra e número
// <input sc-mask="****-AA-99" ng-model="xxx" />


'use strict';

/*
 Attaches input mask onto input element
 */
angular.module('sc.commons.directives.mask', [])
  .value('uiMaskConfig', {
    'maskDefinitions': {
      '9': /\d/,
      'A': /[a-zA-Z]/,
      '*': /[a-zA-Z0-9]/
    }
  })
  .directive('scMask', ['uiMaskConfig', '$parse', function (maskConfig, $parse) {
    return {
      priority: 100,
      require: 'ngModel',
      restrict: 'A',
      compile: function uiMaskCompilingFunction(){
        var options = maskConfig;

        return function uiMaskLinkingFunction(scope, iElement, iAttrs, controller){
          var maskProcessed = false, eventsBound = false,
            maskCaretMap, maskPatterns, maskPlaceholder, maskComponents,
          // Minimum required length of the value to be considered valid
            minRequiredLength,
            value, valueMasked, isValid,
          // Vars for initializing/uninitializing
            originalPlaceholder = iAttrs.placeholder,
            originalMaxlength = iAttrs.maxlength,
          // Vars used exclusively in eventHandler()
            oldValue, oldValueUnmasked, oldCaretPosition, oldSelectionLength;

          function initialize(maskAttr){
            if (!angular.isDefined(maskAttr)) {
              return uninitialize();
            }
            processRawMask(maskAttr);
            if (!maskProcessed) {
              return uninitialize();
            }
            initializeElement();
            bindEventListeners();
            return true;
          }

          // function initPlaceholder(placeholderAttr) {
          //   if(! angular.isDefined(placeholderAttr)) {
          //     return;
          //   }

          //   maskPlaceholder = placeholderAttr;

          //   // If the mask is processed, then we need to update the value
          //   if (maskProcessed) {
          //     eventHandler();
          //   }
          // }

          function formatter(fromModelValue){
            var value = maskValue(unmaskValue(fromModelValue));
            if (!maskProcessed) {
              return value;
            }
            var isValid = validateValue(value);
            controller.$setValidity('mask', isValid);
            return isValid && value.length ? value : undefined;
          }

          function parser(fromViewValue){
            var fixedValue = maskValue(unmaskValue(fromViewValue));
            var isValid = validateValue(fixedValue);
            if(isValid){
              controller.$viewValue = fixedValue.length ? fixedValue : '';
              controller.$setValidity('mask', true);

              if(fixedValue != oldValue && iAttrs.scMaskOnComplete){
                $timeout(function(){scope.$apply(iAttrs.scMaskOnComplete);});
              }
            }
            value = unmaskValue(fixedValue)
            return value.length == 0 ? value : fixedValue;
          }

          var linkOptions = {};

          if (iAttrs.uiOptions) {
            linkOptions = scope.$eval('[' + iAttrs.uiOptions + ']');
            if (angular.isObject(linkOptions[0])) {
              // we can't use angular.copy nor angular.extend, they lack the power to do a deep merge
              linkOptions = (function(original, current){
                for(var i in original) {
                  if (Object.prototype.hasOwnProperty.call(original, i)) {
                    if (!current[i]) {
                      current[i] = angular.copy(original[i]);
                    } else {
                      angular.extend(current[i], original[i]);
                    }
                  }
                }
                return current;
              })(options, linkOptions[0]);
            }
          } else {
            linkOptions = options;
          }

          iAttrs.$observe('scMask', initialize);
          // iAttrs.$observe('placeholder', initPlaceholder);
          var modelViewValue = false;
          iAttrs.$observe('modelViewValue', function(val) {
            if(val === 'true') {
              modelViewValue = true;
            }
          });
          scope.$watch(iAttrs.ngModel, function(val) {
            if(modelViewValue && val) {
              var model = $parse(iAttrs.ngModel);
              model.assign(scope, controller.$viewValue);
            }
          });
          controller.$formatters.push(formatter);
          controller.$parsers.push(parser);

          function uninitialize(){
            maskProcessed = false;
            unbindEventListeners();

            if (angular.isDefined(originalPlaceholder)) {
              iElement.attr('placeholder', originalPlaceholder);
            } else {
              iElement.removeAttr('placeholder');
            }

            if (angular.isDefined(originalMaxlength)) {
              iElement.attr('maxlength', originalMaxlength);
            } else {
              iElement.removeAttr('maxlength');
            }

            iElement.val(controller.$modelValue);
            controller.$viewValue = controller.$modelValue;
            return false;
          }

          function initializeElement(){
            value = oldValueUnmasked = unmaskValue(controller.$modelValue || '');
            valueMasked = oldValue = maskValue(value);
            isValid = validateValue(valueMasked);
            var viewValue = isValid && value.length ? valueMasked : '';
            if (iAttrs.maxlength) { // Double maxlength to allow pasting new val at end of mask
              iElement.attr('maxlength', maskCaretMap[maskCaretMap.length - 1] * 2);
            }
            // iElement.attr('placeholder', maskPlaceholder);
            iElement.val(viewValue);
            controller.$viewValue = viewValue;
            // Not using $setViewValue so we don't clobber the model value and dirty the form
            // without any kind of user interaction.
          }

          function bindEventListeners(){
            if (eventsBound) {
              return;
            }
            iElement.bind('blur', blurHandler);
            iElement.bind('mousedown mouseup', mouseDownUpHandler);
            iElement.bind('input keyup click focus', eventHandler);
            eventsBound = true;
          }

          function unbindEventListeners(){
            if (!eventsBound) {
              return;
            }
            iElement.unbind('blur', blurHandler);
            iElement.unbind('mousedown', mouseDownUpHandler);
            iElement.unbind('mouseup', mouseDownUpHandler);
            iElement.unbind('input', eventHandler);
            iElement.unbind('keyup', eventHandler);
            iElement.unbind('click', eventHandler);
            iElement.unbind('focus', eventHandler);
            eventsBound = false;
          }

          function validateValue(value){
            var fixedValue = maskValue(unmaskValue(value));
            // Zero-length value validity is ngRequired's determination
            if(fixedValue && fixedValue.replace(/_/g, "").length === fixedValue.length){
              return true;
            }else{
              return false;
            }
            // return value.length ? value.length >= minRequiredLength : true;
          }

          function unmaskValue(value){
            var valueUnmasked = '',
              maskPatternsCopy = maskPatterns.slice();
            // Preprocess by stripping mask components from value
            value = value || "";
            value = value.toString();
            angular.forEach(maskComponents, function (component){
              value = value.replace(component, '');
            });
            angular.forEach(value.split(''), function (chr){
              if (maskPatternsCopy.length && maskPatternsCopy[0].test(chr)) {
                valueUnmasked += chr;
                maskPatternsCopy.shift();
              }
            });
            return valueUnmasked;
          }

          function maskValue(unmaskedValue){
            var valueMasked = '',
                maskCaretMapCopy = maskCaretMap.slice();

            angular.forEach(maskPlaceholder.split(''), function (chr, i){
              if (unmaskedValue.length && i === maskCaretMapCopy[0]) {
                valueMasked  += unmaskedValue.charAt(0) || '_';
                unmaskedValue = unmaskedValue.substr(1);
                maskCaretMapCopy.shift();
              }
              else {
                valueMasked += chr;
              }
            });
            return valueMasked;
          }

          function getPlaceholderChar(i) {
            return "_";
            // var placeholder = iAttrs.placeholder;

            // if (typeof placeholder !== 'undefined' && placeholder[i]) {
            //   return placeholder[i];
            // } else {
            //   return '_';
            // }
          }

          // Generate array of mask components that will be stripped from a masked value
          // before processing to prevent mask components from being added to the unmasked value.
          // E.g., a mask pattern of '+7 9999' won't have the 7 bleed into the unmasked value.
          // If a maskable char is followed by a mask char and has a mask
          // char behind it, we'll split it into it's own component so if
          // a user is aggressively deleting in the input and a char ahead
          // of the maskable char gets deleted, we'll still be able to strip
          // it in the unmaskValue() preprocessing.
          function getMaskComponents() {
            return maskPlaceholder.replace(/[_]+/g, '_').replace(/([^_]+)([a-zA-Z0-9])([^_])/g, '$1$2_$3').split('_');
          }

          function processRawMask(mask){
            var characterCount = 0;

            maskCaretMap    = [];
            maskPatterns    = [];
            maskPlaceholder = '';

            if (typeof mask === 'string') {
              minRequiredLength = 0;

              var isOptional = false,
                  splitMask  = mask.split('');

              angular.forEach(splitMask, function (chr, i){
                if (linkOptions.maskDefinitions[chr]) {

                  maskCaretMap.push(characterCount);

                  maskPlaceholder += getPlaceholderChar(i);
                  maskPatterns.push(linkOptions.maskDefinitions[chr]);

                  characterCount++;
                  if (!isOptional) {
                    minRequiredLength++;
                  }
                }
                else if (chr === '?') {
                  isOptional = true;
                }
                else {
                  maskPlaceholder += chr;
                  characterCount++;
                }
              });
            }
            // Caret position immediately following last position is valid.
            maskCaretMap.push(maskCaretMap.slice().pop() + 1);

            maskComponents = getMaskComponents();
            maskProcessed  = maskCaretMap.length > 1 ? true : false;
          }

          function blurHandler(){
            // oldCaretPosition = 0;
            // oldSelectionLength = 0;
            // var value = controller.$viewValue;
            // var isValid = validateValue(value);
            // if (!isValid || value.length === 0) {
            //   valueMasked = '';
            //   iElement.val('');
            //   scope.$apply(function (){
            //     controller.$setViewValue('');
            //   });
            // }
          }

          function mouseDownUpHandler(e){
            if (e.type === 'mousedown') {
              iElement.bind('mouseout', mouseoutHandler);
            } else {
              iElement.unbind('mouseout', mouseoutHandler);
            }
          }

          iElement.bind('mousedown mouseup', mouseDownUpHandler);

          function mouseoutHandler(){
            /*jshint validthis: true */
            oldSelectionLength = getSelectionLength(this);
            iElement.unbind('mouseout', mouseoutHandler);
          }

          function eventHandler(e){
            /*jshint validthis: true */
            e = e || {};
            // Allows more efficient minification
            var eventWhich = e.which,
              eventType = e.type;

            // Prevent shift and ctrl from mucking with old values
            if (eventWhich === 16 || eventWhich === 91) { return;}

            var val = iElement.val(),
              valOld = oldValue,
              valMasked,
              valUnmasked = unmaskValue(val),
              valUnmaskedOld = oldValueUnmasked,
              valAltered = false,

              caretPos = getCaretPosition(this) || 0,
              caretPosOld = oldCaretPosition || 0,
              caretPosDelta = caretPos - caretPosOld,
              caretPosMin = maskCaretMap[0],
              caretPosMax = maskCaretMap[valUnmasked.length] || maskCaretMap.slice().shift(),

              selectionLenOld = oldSelectionLength || 0,
              isSelected = getSelectionLength(this) > 0,
              wasSelected = selectionLenOld > 0,

            // Case: Typing a character to overwrite a selection
              isAddition = (val.length > valOld.length) || (selectionLenOld && val.length > valOld.length - selectionLenOld),
            // Case: Delete and backspace behave identically on a selection
              isDeletion = (val.length < valOld.length) || (selectionLenOld && val.length === valOld.length - selectionLenOld),
              isSelection = (eventWhich >= 37 && eventWhich <= 40) && e.shiftKey, // Arrow key codes

              isKeyLeftArrow = eventWhich === 37,
            // Necessary due to "input" event not providing a key code
              isKeyBackspace = eventWhich === 8 || (eventType !== 'keyup' && isDeletion && (caretPosDelta === -1)),
              isKeyDelete = eventWhich === 46 || (eventType !== 'keyup' && isDeletion && (caretPosDelta === 0 ) && !wasSelected),

            // Handles cases where caret is moved and placed in front of invalid maskCaretMap position. Logic below
            // ensures that, on click or leftward caret placement, caret is moved leftward until directly right of
            // non-mask character. Also applied to click since users are (arguably) more likely to backspace
            // a character when clicking within a filled input.
              caretBumpBack = (isKeyLeftArrow || isKeyBackspace || eventType === 'click') && caretPos > caretPosMin;

            oldSelectionLength = getSelectionLength(this);

            // These events don't require any action
            if (isSelection || (isSelected && (eventType === 'click' || eventType === 'keyup'))) {
              return;
            }

            // Value Handling
            // ==============

            // User attempted to delete but raw value was unaffected--correct this grievous offense
            if ((eventType === 'input') && isDeletion && !wasSelected && valUnmasked === valUnmaskedOld) {
              while (isKeyBackspace && caretPos > caretPosMin && !isValidCaretPosition(caretPos)) {
                caretPos--;
              }
              while (isKeyDelete && caretPos < caretPosMax && maskCaretMap.indexOf(caretPos) === -1) {
                caretPos++;
              }
              var charIndex = maskCaretMap.indexOf(caretPos);
              // Strip out non-mask character that user would have deleted if mask hadn't been in the way.
              valUnmasked = valUnmasked.substring(0, charIndex) + valUnmasked.substring(charIndex + 1);
              valAltered = true;
            }

            // Update values
            valMasked = maskValue(valUnmasked);

            oldValue = valMasked;
            oldValueUnmasked = valUnmasked;
            iElement.val(valMasked);
            if (valAltered) {
              // We've altered the raw value after it's been $digest'ed, we need to $apply the new value.
              scope.$apply(function (){
                controller.$setViewValue(valUnmasked);
              });
            }

            // Caret Repositioning
            // ===================

            // Ensure that typing always places caret ahead of typed character in cases where the first char of
            // the input is a mask char and the caret is placed at the 0 position.
            if (isAddition && (caretPos <= caretPosMin)) {
              caretPos = caretPosMin + 1;
            }

            if (caretBumpBack) {
              caretPos--;
            }

            // Make sure caret is within min and max position limits
            caretPos = caretPos > caretPosMax ? caretPosMax : caretPos < caretPosMin ? caretPosMin : caretPos;

            // Scoot the caret back or forth until it's in a non-mask position and within min/max position limits
            while (!isValidCaretPosition(caretPos) && caretPos > caretPosMin && caretPos < caretPosMax) {
              caretPos += caretBumpBack ? -1 : 1;
            }

            if ((caretBumpBack && caretPos < caretPosMax) || (isAddition && !isValidCaretPosition(caretPosOld))) {
              caretPos++;
            }
            oldCaretPosition = caretPos;
            setCaretPosition(this, caretPos);
          }

          function isValidCaretPosition(pos){ return maskCaretMap.indexOf(pos) > -1; }

          function getCaretPosition(input){
            if (!input) return 0;
            if (input.selectionStart !== undefined) {
              return input.selectionStart;
            } else if (document.selection) {
              // Curse you IE
              input.focus();
              var selection = document.selection.createRange();
              selection.moveStart('character', input.value ? -input.value.length : 0);
              return selection.text.length;
            }
            return 0;
          }

          function setCaretPosition(input, pos){
            if (!input) return 0;
            if (input.offsetWidth === 0 || input.offsetHeight === 0) {
              return; // Input's hidden
            }
            if (input.setSelectionRange) {
              input.focus();
              input.setSelectionRange(pos, pos);
            }
            else if (input.createTextRange) {
              // Curse you IE
              var range = input.createTextRange();
              range.collapse(true);
              range.moveEnd('character', pos);
              range.moveStart('character', pos);
              range.select();
            }
          }

          function getSelectionLength(input){
            if (!input) return 0;
            if (input.selectionStart !== undefined) {
              return (input.selectionEnd - input.selectionStart);
            }
            if (document.selection) {
              return (document.selection.createRange().text.length);
            }
            return 0;
          }

          // https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/indexOf
          if (!Array.prototype.indexOf) {
            Array.prototype.indexOf = function (searchElement /*, fromIndex */){
              if (this === null) {
                throw new TypeError();
              }
              var t = Object(this);
              var len = t.length >>> 0;
              if (len === 0) {
                return -1;
              }
              var n = 0;
              if (arguments.length > 1) {
                n = Number(arguments[1]);
                if (n !== n) { // shortcut for verifying if it's NaN
                  n = 0;
                } else if (n !== 0 && n !== Infinity && n !== -Infinity) {
                  n = (n > 0 || -1) * Math.floor(Math.abs(n));
                }
              }
              if (n >= len) {
                return -1;
              }
              var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
              for (; k < len; k++) {
                if (k in t && t[k] === searchElement) {
                  return k;
                }
              }
              return -1;
            };
          }

        };
      }
    };
  }
]);
(function() {
  angular.module("sc.commons.directives.notifications", ['sc.commons.services.notifications']).directive("notifications", [
    '$scNotifications', function($scNotifications) {
      return {
        restrict: "A",
        replace: true,
        templateUrl: "/assets/components/notifications.html",
        link: function(scope, element, attrs) {
          return scope.scNotifications = $scNotifications;
        }
      };
    }
  ]);

}).call(this);
angular.module('ngPagination', [])

.controller('PaginationController', ['$scope', '$attrs', '$parse', function ($scope, $attrs, $parse) {
  var self = this,
      ngModelCtrl = { $setViewValue: angular.noop }, // nullModelCtrl
      setNumPages = $attrs.numPages ? $parse($attrs.numPages).assign : angular.noop;

  this.init = function(ngModelCtrl_, config) {
    ngModelCtrl = ngModelCtrl_;
    this.config = config;

    ngModelCtrl.$render = function() {
      self.render();
    };

    if ($attrs.itemsPerPage) {
      $scope.$parent.$watch($parse($attrs.itemsPerPage), function(value) {
        self.itemsPerPage = parseInt(value, 10);
        $scope.totalPages = self.calculateTotalPages();
      });
    } else {
      this.itemsPerPage = config.itemsPerPage;
    }

    $scope.$watch('totalItems', function() {
      $scope.totalPages = self.calculateTotalPages();
    });

    $scope.$watch('totalPages', function(value) {
      setNumPages($scope.$parent, value); // Readonly variable

      if ( $scope.page > value ) {
        $scope.selectPage(value);
      } else {
        ngModelCtrl.$render();
      }
    });
  };

  this.calculateTotalPages = function() {
    var totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil($scope.totalItems / this.itemsPerPage);
    return Math.max(totalPages || 0, 1);
  };

  this.render = function() {
    $scope.page = parseInt(ngModelCtrl.$viewValue, 10) || 1;
  };

  $scope.selectPage = function(page, evt) {
    if ( $scope.page !== page && page > 0 && page <= $scope.totalPages) {
      if (evt && evt.target) {
        evt.target.blur();
      }
      ngModelCtrl.$setViewValue(page);
      ngModelCtrl.$render();
    }
  };

  $scope.getText = function( key ) {
    return $scope[key + 'Text'] || self.config[key + 'Text'];
  };
  $scope.noPrevious = function() {
    return $scope.page === 1;
  };
  $scope.noNext = function() {
    return $scope.page === $scope.totalPages;
  };
}])

.constant('paginationConfig', {
  itemsPerPage: 10,
  boundaryLinks: false,
  directionLinks: true,
  firstText: 'Primeira',
  previousText: 'Anterior',
  nextText: 'Próxima',
  lastText: 'Última',
  rotate: true
})

.directive('pagination', ['$parse', 'paginationConfig', function($parse, paginationConfig) {
  return {
    restrict: 'A',
    scope: {
      totalItems: '=',
      firstText: '@',
      previousText: '@',
      nextText: '@',
      lastText: '@'
    },
    require: ['pagination', '?ngModel'],
    controller: 'PaginationController',
    template: "<ul class=\"pagination\"><li ng-if=\"boundaryLinks\" ng-class=\"{disabled: noPrevious()}\"><a href ng-click=\"selectPage(1, $event)\">{{getText('first')}}</a></li><li ng-if=\"directionLinks\" ng-class=\"{disabled: noPrevious()}\"><a href ng-click=\"selectPage(page - 1, $event)\">{{getText('previous')}}</a></li><li ng-repeat=\"page in pages track by $index\" ng-class=\"{active: page.active}\"><a href ng-click=\"selectPage(page.number, $event)\">{{page.text}}</a></li><li ng-if=\"directionLinks\" ng-class=\"{disabled: noNext()}\"><a href ng-click=\"selectPage(page + 1, $event)\">{{getText('next')}}</a></li><li ng-if=\"boundaryLinks\" ng-class=\"{disabled: noNext()}\"><a href ng-click=\"selectPage(totalPages, $event)\">{{getText('last')}}</a></li></ul>",
    replace: true,
    link: function(scope, element, attrs, ctrls) {
      var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];

      if (!ngModelCtrl) {
         return; // do nothing if no ng-model
      }

      // Setup configuration parameters
      var maxSize = angular.isDefined(attrs.maxSize) ? scope.$parent.$eval(attrs.maxSize) : paginationConfig.maxSize,
          rotate = angular.isDefined(attrs.rotate) ? scope.$parent.$eval(attrs.rotate) : paginationConfig.rotate;
      scope.boundaryLinks = angular.isDefined(attrs.boundaryLinks) ? scope.$parent.$eval(attrs.boundaryLinks) : paginationConfig.boundaryLinks;
      scope.directionLinks = angular.isDefined(attrs.directionLinks) ? scope.$parent.$eval(attrs.directionLinks) : paginationConfig.directionLinks;

      paginationCtrl.init(ngModelCtrl, paginationConfig);

      if (attrs.maxSize) {
        scope.$parent.$watch($parse(attrs.maxSize), function(value) {
          maxSize = parseInt(value, 10);
          paginationCtrl.render();
        });
      }

      // Create page object used in template
      function makePage(number, text, isActive) {
        return {
          number: number,
          text: text,
          active: isActive
        };
      }

      function getPages(currentPage, totalPages) {
        var pages = [];

        // Default page limits
        var startPage = 1, endPage = totalPages;
        var isMaxSized = ( angular.isDefined(maxSize) && maxSize < totalPages );

        // recompute if maxSize
        if ( isMaxSized ) {
          if ( rotate ) {
            // Current page is displayed in the middle of the visible ones
            startPage = Math.max(currentPage - Math.floor(maxSize/2), 1);
            endPage   = startPage + maxSize - 1;

            // Adjust if limit is exceeded
            if (endPage > totalPages) {
              endPage   = totalPages;
              startPage = endPage - maxSize + 1;
            }
          } else {
            // Visible pages are paginated with maxSize
            startPage = ((Math.ceil(currentPage / maxSize) - 1) * maxSize) + 1;

            // Adjust last page if limit is exceeded
            endPage = Math.min(startPage + maxSize - 1, totalPages);
          }
        }

        // Add page number links
        for (var number = startPage; number <= endPage; number++) {
          var page = makePage(number, number, number === currentPage);
          pages.push(page);
        }

        // Add links to move between page sets
        if ( isMaxSized && ! rotate ) {
          if ( startPage > 1 ) {
            var previousPageSet = makePage(startPage - 1, '...', false);
            pages.unshift(previousPageSet);
          }

          if ( endPage < totalPages ) {
            var nextPageSet = makePage(endPage + 1, '...', false);
            pages.push(nextPageSet);
          }
        }

        return pages;
      }

      var originalRender = paginationCtrl.render;
      paginationCtrl.render = function() {
        originalRender();
        if (scope.page > 0 && scope.page <= scope.totalPages) {
          scope.pages = getPages(scope.page, scope.totalPages);
        }
      };
    }
  };
}])

.constant('pagerConfig', {
  itemsPerPage: 10,
  previousText: '« Previous',
  nextText: 'Next »',
  align: true
})

.directive('pager', ['pagerConfig', function(pagerConfig) {
  return {
    restrict: 'EA',
    scope: {
      totalItems: '=',
      previousText: '@',
      nextText: '@'
    },
    require: ['pager', '?ngModel'],
    controller: 'PaginationController',
    template: "<ul class=\"pager\"><li ng-class=\"{disabled: noPrevious(), previous: align}\"><a href ng-click=\"selectPage(page - 1, $event)\">{{getText('previous')}}</a></li><li ng-class=\"{disabled: noNext(), next: align}\"><a href ng-click=\"selectPage(page + 1, $event)\">{{getText('next')}}</a></li></ul>",
    replace: true,
    link: function(scope, element, attrs, ctrls) {
      var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];

      if (!ngModelCtrl) {
         return; // do nothing if no ng-model
      }

      scope.align = angular.isDefined(attrs.align) ? scope.$parent.$eval(attrs.align) : pagerConfig.align;
      paginationCtrl.init(ngModelCtrl, pagerConfig);
    }
  };
}]);
(function() {
  "use strict";

  /*
  usage: <textarea redactor ng-model="content" ></textarea>
  
  additional options:
      redactorButtons
          ['formatting', '|', 'bold', 'italic', 'deleted', '|',
              'unorderedlist', 'orderedlist', 'outdent', 'indent', '|',
              'image', 'video', 'file', 'table', 'link', '|',
              'fontcolor', 'backcolor', '|',
              'alignleft', 'aligncenter', 'alignright', 'justify', '|',
              'horizontalrule', '|', 'html']
  
  
      redactorImageUploadUrl
      redactorFileUploadUrl
          "myservice/upload"
   */
  angular.module("sc.commons.directives.redactor", []).directive("redactor", [
    '$timeout', function($timeout) {
      return {
        restrict: "A",
        require: "?ngModel",
        link: function($scope, element, attrs, controller) {
          element = $(element);
          return controller.$render = function() {
            element.redactor({
              keyupCallback: function() {
                return $scope.$apply(controller.$setViewValue(element.getCode()));
              },
              execCommandCallback: function() {
                return $scope.$apply(controller.$setViewValue(element.getCode()));
              },
              buttons: $scope.$eval(attrs.redactorButtons),
              imageUpload: attrs.redactorImageUploadUrl,
              fileUpload: attrs.redactorFileUploadUrl,
              fixed: attrs.redactorFixToolbar,
              wym: false
            });
            return $timeout(function() {
              return element.setCode(controller.$viewValue);
            }, 200);
          };
        }
      };
    }
  ]);

}).call(this);
(function() {
  angular.module('sc.commons.directives.input.dismiss.click', []).directive('scDismissClick', [
    '$document', function($document) {
      return {
        link: function(scope, elem, attr) {
          var dismiss;
          if (!attr.scDismissClick) {
            throw "scDismissClick args is missing";
          }
          dismiss = function(evt) {
            if (!elem.isParentOf(evt.target)) {
              scope.$apply(attr.scDismissClick);
            }
          };
          $document.bind('click', dismiss);
          scope.$on('$destroy', function() {
            return $document.unbind('click', dismiss);
          });
        }
      };
    }
  ]);

}).call(this);
(function() {
  angular.module('sc.commons.directives.dropdown', ['sc.commons.factories.position', 'sc.commons.directives.target', 'sc.commons.factories.toggle']).directive('scDropdownMenu', [
    '$rootScope', 'scToggle', "$document", function($rootScope, toggler, $document) {
      return {
        scope: true,
        link: function(scope, element, attrs) {
          var nav, navClick;
          scope.needDropback = isMobile.iOS();
          scope.dropback = angular.element('<div class="sc-dropback" />');
          scope.dropback.bind('click', function() {
            return scope.$apply(function() {
              return scope.menu.close();
            });
          });
          scope.menu = new toggler({
            beforeOpen: function() {
              $rootScope.$broadcast('sc.commons.directives.dropdown.menu.close.others', this);
              if (scope.needDropback) {
                return element.before(scope.dropback);
              }
            },
            beforeClose: function() {
              return scope.dropback.detach();
            }
          });
          scope.$on("sc.commons.directives.dropdown.menu.close.others", function(event, menu) {
            if (scope.menu !== menu) {
              return scope.menu.close();
            }
          });
          navClick = function(event) {
            if (scope.menu.closed || element.isParentOf(event.target)) {
              return;
            }
            return scope.$apply(function() {
              return scope.menu.close();
            });
          };
          nav = function(event) {
            var keyCode;
            keyCode = event.which || event.keyCode;
            if (!(scope.menu.enabled && keyCode === keyMap.ESC)) {
              return;
            }
            event.preventDefault();
            event.stopPropagation();
            return scope.$apply(function() {
              return scope.menu.close();
            });
          };
          $document.bind('keydown', nav);
          $document.bind('click', navClick);
          return scope.$on("$destroy", function() {
            $document.unbind('keydown', nav);
            return $document.unbind('click', navClick);
          });
        }
      };
    }
  ]).directive('scDropdown', [
    '$compile', '$parse', '$q', '$timeout', '$document', '$position', '$scTarget', function($compile, $parse, $q, $timeout, $document, $position, $scTarget) {
      var HOT_KEYS;
      HOT_KEYS = [8, 9, 13, 27, 38, 40];
      return {
        scope: {
          isFixed: "&",
          targetObject: "&"
        },
        link: function(originalScope, element, attrs) {
          var dismissClickHandler, hasFocus, scope, targetElement, targetFocusName, targetFocusObject, targetName, targetObjName, targetObject, targetTriggerName, targetTriggerObjName, windowResizeHandler;
          targetName = attrs.scDropdown;
          targetElement = void 0;
          targetTriggerName = attrs.scDropdownTrigger || targetName;
          targetObjName = attrs.scDropdown.split('.').shift();
          targetTriggerObjName = targetTriggerName.split('.').shift();
          if (targetObjName !== targetTriggerObjName) {
            throw "Invalid trigger name";
          }
          targetObject = originalScope.targetObject();
          hasFocus = !!attrs.scDropdownFocus;
          if (hasFocus) {
            targetFocusName = attrs.scDropdownFocus;
            targetFocusObject = originalScope.$eval(targetFocusName.split('.').shift());
          }
          scope = originalScope.$new();
          scope.$on('sc-dropdown.relocate', function(e, obj, name) {
            if (obj === targetObject && name === targetName) {
              if (scope.relocatePromisse) {
                $timeout.cancel(scope.relocatePromisse);
              }
              return scope.relocatePromisse = $timeout((function() {
                return scope.relocate();
              }), 300);
            }
          });
          scope.elementFocus = function() {
            return $timeout((function() {
              return element[0].focus();
            }), 0, false);
          };
          $scTarget.elementReady(targetObject, targetName).then(function() {
            targetElement = $scTarget.getElements(targetObject, targetName)[0];
            targetElement.addClass('typeahead-dropdown-menu');
            scope.relocate();
            return scope.closeDropbox();
          });
          scope.relocate = function() {
            var boundingClientRect;
            scope.position = $position.offset(element);
            scope.position.top = scope.position.top + element.prop('offsetHeight');
            scope.position.width = element.prop('offsetWidth');
            if (targetElement) {
              targetElement[0].style.position = "absolute";
              if (scope.isFixed()) {
                boundingClientRect = element[0].getBoundingClientRect();
                scope.position.top = boundingClientRect.top + boundingClientRect.height;
                targetElement[0].style.position = "fixed";
              }
              targetElement[0].style.top = "" + scope.position.top + "px";
              targetElement[0].style.width = "" + scope.position.width + "px";
              targetElement[0].style.left = "" + scope.position.left + "px";
            }
          };
          scope.openDropbox = function() {
            if (targetElement) {
              targetElement.show();
              if (hasFocus) {
                $scTarget.focus(targetFocusObject, targetFocusName, false, 0);
              }
              return scope.relocate();
            }
          };
          scope.closeDropbox = function() {
            if (targetElement) {
              return targetElement.hide();
            }
          };
          scope.keydownHandler = function(evt) {
            var alt, ctrl, keyCode, shift;
            keyCode = evt.which || evt.keyCode;
            if (keyCode === keyMap.KEYDOWN) {
              return true;
            }
            alt = !!evt.altKey;
            ctrl = !!evt.ctrlKey;
            shift = !!evt.shiftKey;
            switch (keyCode) {
              case keyMap.ESC:
                scope.closeDropbox();
                return evt.stopPropagation();
              case keyMap.ARROW.UP:
              case keyMap.ARROW.DOWN:
              case keyMap.ARROW.LEFT:
              case keyMap.ARROW.RIGHT:
                return scope.openDropbox();
              case keyMap.TAB:
                if (scope.blurPromisse) {
                  $timeout.cancel(scope.blurPromisse);
                }
                return scope.blurPromisse = $timeout(function() {
                  return scope.closeDropbox();
                }, 200);
            }
          };
          scope.clickHandler = function(evt) {
            evt.stopPropagation();
            scope.openDropbox();
            return scope.$digest();
          };
          scope.focusHandler = function(evt) {
            evt.stopPropagation();
            scope.openDropbox();
            return scope.$digest();
          };
          if (attrs.scDropdownTrigger) {
            $scTarget.addEvent('keydown', targetObject, targetTriggerName, scope.keydownHandler);
            $scTarget.addEvent('click', targetObject, targetTriggerName, scope.clickHandler);
            $scTarget.addEvent('focus', targetObject, targetTriggerName, scope.focusHandler);
          } else {
            element.bind('keydown', scope.keydownHandler);
            element.bind('click', scope.clickHandler);
            element.bind('focus', scope.focusHandler);
          }
          $scTarget.addEvent('keydown', targetObject, targetName, function(e) {
            var keyCode;
            keyCode = e.which || e.keyCode;
            if (keyCode === keyMap.KEYDOWN) {
              return true;
            }
            switch (keyCode) {
              case keyMap.ESC:
                scope.closeDropbox();
                return e.stopPropagation();
            }
          });
          $scTarget.addEvent('click', targetObject, targetName, function(e) {
            if (scope.blurPromisse) {
              $timeout.cancel(scope.blurPromisse);
            }
            e.stopPropagation();
            scope.elementFocus();
            return scope.$digest();
          });
          dismissClickHandler = function(evt) {
            var evtTarget;
            evtTarget = evt.target;
            if (scope.blurPromisse) {
              $timeout.cancel(scope.blurPromisse);
            }
            return scope.closeDropbox();
          };
          windowResizeHandler = function() {
            scope.relocate();
            return scope.$digest();
          };
          $(window).resize(windowResizeHandler);
          $document.bind('click', dismissClickHandler);
          if (attrs.scDropdownDismiss) {
            $scTarget.addEvent('click', targetObject, attrs.scDropdownDismiss, dismissClickHandler);
          }
          originalScope.$on('$destroy', function() {
            scope.$destroy();
            $(window).unbind('resize', windowResizeHandler);
            return $document.unbind('click', dismissClickHandler);
          });
        }
      };
    }
  ]).directive('scDropdownClose', function() {
    return function(scope, elem, attr) {
      return elem.bind('click', function() {
        return $(this).closest('.typeahead-dropdown-menu').hide();
      });
    };
  });

}).call(this);
(function() {
  angular.module('sc.commons.directives.modal', []).directive("scModal", [
    '$scModalService', function($scModalService) {
      return {
        restrict: "A",
        replace: true,
        transclude: true,
        scope: {
          modal: "=scModal"
        },
        link: function(scope) {
          return scope.$on("$destroy", function() {
            if ($scModalService.modalAtiva === scope.modal) {
              return $scModalService.close();
            }
          });
        },
        template: "<div class=\"sc-modal\" ng-class=\"{'active': modal.active}\" ng-show=\"modal.active\" ng-transclude></div>"
      };
    }
  ]).service("$scModalService", [
    '$timeout', function($timeout) {
      var body;
      body = angular.element(document.querySelector('body'));
      return {
        modalAtiva: void 0,
        escurecerTela: function() {
          return $("<div></div>").addClass("tela-escura").appendTo(body);
        },
        clarearTela: function() {
          return body.find(".tela-escura").remove();
        },
        open: function(modal) {
          if (modal === this.modalAtiva) {
            return;
          }
          if (this.modalAtiva) {
            this.modalAtiva.close(false);
            $timeout((function() {
              return modal.active = true;
            }), 200);
          } else {
            modal.active = true;
            $timeout(((function(_this) {
              return function() {
                _this.escurecerTela();
                return body.css("overflow", "hidden");
              };
            })(this)), 0);
          }
          return this.modalAtiva = modal;
        },
        close: function(clarear) {
          if (clarear == null) {
            clarear = true;
          }
          if (this.modalAtiva) {
            this.modalAtiva.active = false;
            this.modalAtiva = void 0;
          }
          if (clarear) {
            return $timeout(((function(_this) {
              return function() {
                _this.clarearTela();
                return body.css("overflow", "auto");
              };
            })(this)), 0);
          }
        }
      };
    }
  ]).factory("$scModal", [
    "$scModalService", function($scModalService) {
      return (function() {
        function _Class(opts) {
          if (opts == null) {
            opts = {};
          }
          this.active = false;
          if (opts.onOpen != null) {
            this.onOpen(opts.onOpen);
          }
          if (opts.onClose != null) {
            this.onClose(opts.onClose);
          }
        }

        _Class.prototype.callbackStack = {
          onOpen: [],
          onClose: []
        };

        _Class.prototype.open = function() {
          var cb, _i, _len, _ref, _results;
          $scModalService.open(this);
          _ref = this.callbackStack.onOpen;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            cb = _ref[_i];
            _results.push(cb());
          }
          return _results;
        };

        _Class.prototype.close = function(clarear) {
          var cb, _i, _len, _ref, _results;
          if (clarear == null) {
            clarear = true;
          }
          $scModalService.close(clarear);
          _ref = this.callbackStack.onClose;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            cb = _ref[_i];
            _results.push(cb());
          }
          return _results;
        };

        _Class.prototype.toggle = function() {
          if (this.active) {
            return this.close();
          } else {
            return this.open();
          }
        };

        _Class.prototype.onOpen = function(callback) {
          return this.callbackStack.onOpen.push(callback);
        };

        _Class.prototype.onClose = function(callback) {
          return this.callbackStack.onClose.push(callback);
        };

        return _Class;

      })();
    }
  ]);

}).call(this);
(function() {
  angular.module('sc.commons.directives.redirectFocusTo', ['sc.commons.directives.target']).directive('scRedirectFocus', [
    '$scTarget', function($scTarget) {
      return {
        restrict: "AE",
        link: function(scope, elem, attrs) {
          var obj, target;
          obj = scope[attrs.to.split('.').shift()];
          target = attrs.to;
          elem.attr('tabindex', '0');
          return elem.bind('focus', function(evt) {
            return $scTarget.focus(obj, target, false, 0);
          });
        }
      };
    }
  ]);

}).call(this);
(function() {
  angular.module('sc.commons.directives.scroller', []).directive('scScroll', function() {
    return {
      link: function(scope, element, attrs) {
        var fn, scrollBeforePixels;
        scrollBeforePixels = 50;
        fn = {
          bind: function() {
            return angular.element(fn.box).bind('scroll', fn.trigger);
          },
          unbind: function() {
            return angular.element(fn.box).unbind('scroll', fn.trigger);
          },
          trigger: (function(_this) {
            return function() {
              if (fn.bottomReached()) {
                scope.$apply(attrs.scScroll);
              }
            };
          })(this)
        };
        if (attrs.scScrollOnElement) {
          fn.box = element;
          fn.bottomReached = function() {
            return fn.box.prop("scrollHeight") - fn.box.scrollTop() <= fn.box.height() + scrollBeforePixels;
          };
        } else {
          fn.box = window;
          fn.bottomReached = function() {
            var elementBottom, screenBottom;
            screenBottom = fn.box.scrollY + fn.box.innerHeight;
            elementBottom = element[0].offsetTop + element[0].offsetHeight;
            return (screenBottom + scrollBeforePixels) > elementBottom;
          };
        }
        if (attrs.scScrollEnabled) {
          scope.$watch(attrs.scScrollEnabled, function(newValue) {
            if (newValue) {
              return fn.bind();
            } else {
              return fn.unbind();
            }
          });
        } else {
          fn.bind();
        }
        scope.$on('$destroy', function() {
          return fn.unbind();
        });
      }
    };
  });

}).call(this);
(function() {
  angular.module('sc.commons.directives.sticker', []).directive('scSticker', function() {
    return {
      scope: {
        topOffset: '&',
        bottomOffset: '&',
        minContentHeight: '&',
        enabled: '=scStickerEnabled'
      },
      controller: [
        '$scope', '$window', '$timeout', function($scope, $window, $timeout) {
          var avoidUndefinedReturn, bottomOffset, footer, ghostFooter, ghostHeader, header, lastStickerHeight, minContentHeight, stickerContainer, topOffset;
          $window = angular.element($window);
          header = void 0;
          ghostHeader = void 0;
          footer = void 0;
          ghostFooter = void 0;
          stickerContainer = $scope.stickerContainer;
          lastStickerHeight = 0;
          if ($scope.enabled === void 0) {
            $scope.enabled = true;
          }
          $scope.$watch(function() {
            if (!stickerContainer) {
              return;
            }
            if (lastStickerHeight !== stickerContainer.height()) {
              lastStickerHeight = stickerContainer.height();
              $scope.resizeGhosts();
              $scope.handleScroll();
            }
            return lastStickerHeight = stickerContainer.height();
          });
          $scope.$watch('enabled', function() {
            return $timeout(function() {
              $scope.resizeGhosts();
              return $scope.handleScroll();
            }, 10);
          });
          avoidUndefinedReturn = function(fn, defaultValue) {
            return function() {
              var result;
              result = fn();
              if (result) {
                return result;
              }
              return defaultValue;
            };
          };
          topOffset = avoidUndefinedReturn($scope.topOffset, 0);
          bottomOffset = avoidUndefinedReturn($scope.bottomOffset, 0);
          minContentHeight = avoidUndefinedReturn($scope.minContentHeight, 0);
          this.setHeader = function(element) {
            return header = element;
          };
          this.setGhostHeader = function(element) {
            return ghostHeader = element;
          };
          this.setFooter = function(element) {
            return footer = element;
          };
          this.setGhostFooter = function(element) {
            return ghostFooter = element;
          };
          $scope.setContainer = function(element) {
            return stickerContainer = element;
          };
          $scope.stick = function() {
            $scope.resizeGhosts();
            stickerContainer.css("position", "relative");
            $window.on("scroll", function() {
              $scope.handleScroll();
            });
            $window.on("touchmove", function() {
              $scope.handleScroll();
            });
            $scope.handleScroll();
          };
          $scope.handleScroll = function() {
            if (header) {
              if ($scope.enabled && $scope.isContainerVisible() && $scope.isHeaderHidden() && !$scope.hasOverlap()) {
                header.css("position", "fixed");
                header.css("zIndex", 99);
                header.css("top", topOffset() + "px");
              } else {
                header.css("position", "absolute");
                header.css("zIndex", 0);
                header.css("top", 0);
                header.css("left", 0);
              }
            }
            if (footer) {
              if ($scope.enabled && $scope.isContainerVisible() && $scope.isFooterHidden() && !$scope.hasOverlap()) {
                footer.css("position", "fixed");
                footer.css("zIndex", 99);
                footer.css("bottom", bottomOffset() + "px");
              } else {
                footer.css("position", "absolute");
                footer.css("zIndex", 0);
                footer.css("bottom", 0);
                footer.css("left", 0);
              }
            }
          };
          $scope.isHeaderHidden = function() {
            return window.scrollY + topOffset() > stickerContainer[0].offsetTop;
          };
          $scope.isFooterHidden = function() {
            var lastVisibleHeight;
            lastVisibleHeight = window.scrollY + window.innerHeight;
            return lastVisibleHeight < (ghostFooter[0].offsetTop + ghostFooter.outerHeight() + stickerContainer[0].offsetTop);
          };
          $scope.hasOverlap = function() {
            var footerOverlapsHeader, footerTop, footerTopBoundary, headerBottom, headerBottomBoundary, headerOverlapsFooter;
            if (header && footer) {
              headerBottom = window.scrollY + topOffset() + ghostHeader[0].offsetHeight;
              footerTopBoundary = stickerContainer[0].offsetTop + ghostFooter[0].offsetTop;
              headerOverlapsFooter = headerBottom > footerTopBoundary - minContentHeight();
              footerTop = (window.scrollY + window.innerHeight) - bottomOffset() - ghostFooter[0].offsetHeight;
              headerBottomBoundary = stickerContainer[0].offsetTop + ghostHeader[0].offsetHeight;
              footerOverlapsHeader = footerTop < headerBottomBoundary + minContentHeight();
              return footerOverlapsHeader || headerOverlapsFooter;
            }
            return false;
          };
          $scope.isContainerVisible = function() {
            var bottomBoundary, crossedBottom, crossedTop, firstVisibleHeight, lastVisibleHeight, topBoundary;
            topBoundary = stickerContainer[0].offsetTop;
            bottomBoundary = stickerContainer[0].offsetTop + stickerContainer[0].offsetHeight;
            firstVisibleHeight = window.scrollY + topOffset();
            lastVisibleHeight = window.scrollY - bottomOffset() + window.innerHeight;
            crossedTop = firstVisibleHeight > bottomBoundary;
            crossedBottom = lastVisibleHeight > topBoundary;
            return (crossedTop && !crossedBottom) || (crossedBottom && !crossedTop);
          };
          $scope.resizeGhosts = function() {
            var el, targetElement;
            targetElement = angular.element('<div class="sc-system"></div>');
            targetElement.css('position', 'absolute');
            targetElement.css('top', '-10000px');
            angular.element('body').prepend(targetElement);
            if (ghostHeader) {
              el = header.clone();
              targetElement.append(el);
              ghostHeader.css("height", angular.element(el)[0].clientHeight + "px");
            }
            if (ghostFooter) {
              el = footer.clone();
              targetElement.append(el);
              ghostFooter.css("height", angular.element(el)[0].clientHeight + "px");
            }
            targetElement.remove();
          };
        }
      ],
      link: function(scope, element, attrs) {
        scope.setContainer(element);
        return scope.stick();
      }
    };
  }).directive('scStickyHeader', function() {
    return {
      require: '^scSticker',
      transclude: true,
      template: '<div sc-sticky-header-ghost></div>' + '<div ng-transclude />',
      link: function(scope, element, attrs, scStickerCtrl) {
        var transculdedElement;
        transculdedElement = angular.element(element[0].lastChild);
        transculdedElement.attr("class", element.attr("class"));
        transculdedElement.attr("style", element.attr("style"));
        element.removeAttr("class");
        scStickerCtrl.setHeader(transculdedElement);
      }
    };
  }).directive('scStickyFooter', function() {
    return {
      require: "^scSticker",
      transclude: true,
      template: "<div sc-sticky-footer-ghost></div>" + "<div ng-transclude />",
      link: function(scope, element, attrs, scStickerCtrl) {
        var transculdedElement;
        transculdedElement = angular.element(element[0].lastChild);
        transculdedElement.attr("class", element.attr("class"));
        transculdedElement.attr("style", element.attr("style"));
        element.removeAttr("class");
        scStickerCtrl.setFooter(transculdedElement);
      }
    };
  }).directive('scStickyHeaderGhost', function() {
    return {
      require: '^scSticker',
      link: function(scope, element, attrs, scStickerCtrl) {
        return scStickerCtrl.setGhostHeader(element);
      }
    };
  }).directive('scStickyFooterGhost', function() {
    return {
      require: '^scSticker',
      link: function(scope, element, attrs, scStickerCtrl) {
        return scStickerCtrl.setGhostFooter(element);
      }
    };
  });

}).call(this);
(function() {
  angular.module('sc.commons.directives.scStopClick', []).directive('scStopClick', function() {
    return {
      link: function(scope, elem, attr) {
        var stop;
        stop = function(evt) {
          return evt.stopPropagation();
        };
        elem.bind('click', stop);
        return scope.$on('$destroy', function() {
          return elem.unbind('click', stop);
        });
      }
    };
  });

}).call(this);
(function() {
  angular.module('sc.commons.directives.target', []).service('$scTarget', [
    '$rootScope', '$timeout', '$q', function($rootScope, $timeout, $q) {
      var bindlist, elements;
      elements = {};
      bindlist = {};
      return {
        focus: function(obj, name, scroll, time) {
          if (scroll == null) {
            scroll = true;
          }
          if (time == null) {
            time = 400;
          }
          return $timeout(function() {
            $rootScope.$broadcast('scFocusOn', obj, name);
            if (scroll) {
              return $rootScope.$broadcast('scScrollOn', obj, name, time);
            }
          }, time);
        },
        scroll: function(obj, name, time) {
          if (time == null) {
            time = 400;
          }
          return $timeout(function() {
            return $rootScope.$broadcast('scScrollOn', obj, name);
          }, time);
        },
        ping: function(obj, name) {
          return $timeout(function() {
            return $rootScope.$broadcast('scTargetPing', obj, name);
          }, 0);
        },
        elementReady: function(obj, name) {
          var deferred;
          obj.$id || (obj.$id = guid());
          deferred = $q.defer();
          if (elements[obj.$id] && elements[obj.$id][name]) {
            deferred.resolve();
          } else {
            $rootScope.$on('scTargetReady', function(e, _obj, _name) {
              if (obj === _obj && name === _name) {
                return deferred.resolve();
              }
            });
          }
          return deferred.promise;
        },
        destroyObject: function(obj) {
          obj.$id || (obj.$id = guid());
          return elements[obj.$id] = {};
        },
        addElement: function(obj, name, elem) {
          var _base, _name;
          obj.$id || (obj.$id = guid());
          elements[_name = obj.$id] || (elements[_name] = {});
          (_base = elements[obj.$id])[name] || (_base[name] = []);
          elements[obj.$id][name].push(elem);
          return this.bindActions(obj, name, elem);
        },
        getElements: function(obj, name) {
          var _base, _name;
          obj.$id || (obj.$id = guid());
          elements[_name = obj.$id] || (elements[_name] = {});
          (_base = elements[obj.$id])[name] || (_base[name] = []);
          return elements[obj.$id][name];
        },
        addEvent: function(e, obj, name, callback) {
          var el, _base, _i, _len, _name, _ref, _results;
          obj.$id || (obj.$id = guid());
          bindlist[_name = obj.$id] || (bindlist[_name] = {});
          (_base = bindlist[obj.$id])[name] || (_base[name] = []);
          bindlist[obj.$id][name].push({
            event: e,
            callback: callback
          });
          _ref = this.getElements(obj, name);
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            el = _ref[_i];
            _results.push(this.bindActions(obj, name, el));
          }
          return _results;
        },
        bindActions: function(obj, name, el) {
          var action, list, _i, _len, _results;
          obj.$id || (obj.$id = guid());
          list = bindlist[obj.$id] || {};
          list = list[name] || [];
          _results = [];
          for (_i = 0, _len = list.length; _i < _len; _i++) {
            action = list[_i];
            _results.push(el.bind(action.event, action.callback));
          }
          return _results;
        }
      };
    }
  ]).directive('scTarget', [
    "$rootScope", "$scTarget", function($rootScope, $scTarget) {
      return {
        link: function(scope, elem, attr) {
          var objName, object, target;
          target = attr.scTarget || attr.ngModel;
          objName = target.split('.').shift();
          object = scope[objName];
          $scTarget.addElement(object, target, elem);
          elem.attr('tabindex', '0');
          scope.$on('$destroy', function() {
            return $scTarget.destroyObject(object);
          });
          scope.$on('scDropdown', function(e, obj, name, directiveObject) {
            if (obj === object && name === target && $(elem).offset()) {
              return directiveObject.setElement(elem);
            }
          });
          scope.$on('scTargetPing', function(e, obj, name) {
            if (obj === object && name === target && $(elem).offset()) {
              return console.log('pong', elem[0]);
            }
          });
          scope.$on('scFocusOn', function(e, obj, name) {
            if (obj === object && name === target) {
              return elem[0].focus();
            }
          });
          scope.$on('scScrollOn', function(e, obj, name) {
            var alturaFixa, element, paddingAMais, position, _i, _len, _ref;
            if (obj === object && name === target && $(elem).offset()) {
              alturaFixa = 0;
              _ref = $(".topo-fixo-sistema, .sc-fixed-element");
              for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                element = _ref[_i];
                alturaFixa += $(element).outerHeight();
              }
              alturaFixa += 60;
              if (attr.scTargetOffset) {
                paddingAMais = parseInt(attr.scTargetOffset);
              } else {
                paddingAMais = 0;
              }
              position = $(elem).offset().top - alturaFixa - paddingAMais;
              return $("html, body").stop().animate({
                scrollTop: position
              });
            }
          });
          $rootScope.$broadcast('scTargetReady', object, target);
        }
      };
    }
  ]);

  this.guid = (function() {
    var s4;
    s4 = function() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    };
    return function() {
      return [s4() + s4(), s4(), s4(), s4(), s4() + s4() + s4()].join('-');
    };
  })();

}).call(this);
(function() {
  angular.module('sc.commons.directives.thumb', []).directive('scThumb', [
    '$window', function($window) {
      var helper;
      helper = {
        support: !!($window.FileReader && $window.CanvasRenderingContext2D),
        isFile: function(item) {
          return angular.isObject(item) && item instanceof $window.File;
        },
        isImage: function(file) {
          var type;
          type = '|' + file.type.slice(file.type.lastIndexOf('/') + 1) + '|';
          return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
        }
      };
      return {
        restrict: 'A',
        template: '<canvas/>',
        link: function(scope, element, attributes) {
          var canvas, onLoadFile, onLoadImage, params, reader;
          if (!helper.support) {
            return;
          }
          onLoadFile = function(event) {
            var img;
            img = new Image();
            img.onload = onLoadImage;
            return img.src = event.target.result;
          };
          onLoadImage = function() {
            var context, height, img_height, img_width, offset_x, offset_y, width, _h, _w;
            width = params.width || this.width / this.height * params.height;
            height = params.height || this.height / this.width * params.width;
            canvas.attr({
              width: width,
              height: height
            });
            context = canvas[0].getContext('2d');
            if (params.width !== void 0 && params.height !== void 0) {
              _w = width / height * this.height;
              _h = height / width * this.width;
              if (_w > this.width) {
                img_width = this.width;
                img_height = _h;
              } else {
                img_width = _w;
                img_height = this.height;
              }
              offset_x = (this.width - img_width) / 2;
              offset_y = (this.height - img_height) / 2;
              return context.drawImage(this, offset_x, offset_y, img_width, img_height, 0, 0, width, height);
            } else {
              return context.drawImage(this, 0, 0, width, height);
            }
          };
          params = scope.$eval(attributes.scThumb);
          if (!helper.isFile(params.file)) {
            return;
          }
          if (!helper.isImage(params.file)) {
            return;
          }
          canvas = element.find('canvas');
          reader = new FileReader();
          reader.onload = onLoadFile;
          return reader.readAsDataURL(params.file);
        }
      };
    }
  ]);

}).call(this);
(function() {
  angular.module('sc.commons.directives.scrollTo', []).directive("scrollTo", function() {
    return {
      restrict: "A",
      link: function(scope, $elm, attrs) {
        var idToScroll, marginTop;
        idToScroll = attrs.href;
        marginTop = 30;
        $elm.on("click", function() {
          var $target;
          $target = void 0;
          if (idToScroll) {
            $target = $(idToScroll);
          } else {
            $target = $elm;
          }
          $("body").animate({
            scrollTop: $target.offset().top - marginTop
          }, "slow");
        });
      }
    };
  });

}).call(this);
(function() {
  angular.module("sc.commons.directives.slidedown", []).directive("slidedown", function() {
    return {
      restrict: "C",
      link: function(scope, element) {
        var boxContent, boxHeight;
        boxContent = element.find("section");
        boxHeight = boxContent[0].offsetHeight;
        boxContent.css("height", "0");
        element.on("mouseenter", function() {
          return boxContent.css("height", boxHeight + "px");
        });
        element.on("mouseleave", function() {
          return boxContent.css("height", "0");
        });
      }
    };
  });

}).call(this);
(function() {
  angular.module("sc.commons.directives.timeInput", []).directive('timeInput', [
    'dateFilter', '$parse', '$filter', '$html5support', function(dateFilter, $parse, $filter, $html5support) {
      return {
        restrict: "A",
        require: 'ngModel',
        template: '<input></input>',
        priority: 1,
        replace: true,
        link: function(scope, element, attrs, ngModelCtrl) {
          var $setModelValue;
          $setModelValue = $parse(attrs.ngModel).assign;
          if ($html5support.input.time) {
            element.prop('type', 'time');
          } else {
            element.prop('type', 'text');
            $(element).mask("99:99");
            element.addClass('sc-input-time');
          }
          element.on('blur keyup change', function() {
            return ngModelCtrl.$setViewValue(element.val(), ngModelCtrl.$validate);
          });
          ngModelCtrl.$validators.timePattern = function(modelValue, viewValue) {
            var value;
            value = modelValue || viewValue;
            return value === void 0 || value === null || value === "" || value === "__:__" || moment(value, "HH:mm", true).isValid() || moment(value).isValid();
          };
          ngModelCtrl.$formatters.push(function(modelValue) {
            var momentDate;
            momentDate = moment(modelValue);
            if (!moment(modelValue).isValid()) {
              $setModelValue(scope, void 0);
            }
            return dateFilter(modelValue, "HH:mm");
          });
          ngModelCtrl.$parsers.push(function(viewValue) {
            var momentDate;
            momentDate = moment(viewValue, "HH:mm", true);
            if (momentDate.isValid()) {
              return momentDate.toDate();
            }
            return null;
          });
        }
      };
    }
  ]);

}).call(this);
(function() {
  angular.element.prototype.isParentOf = function(other) {
    while (other != null) {
      if (other === this[0]) {
        return true;
      }
      other = other.parentNode;
    }
    return false;
  };

  angular.element.prototype.scrollTo = function(top, callback) {
    if (callback == null) {
      callback = angular.noop;
    }
    return $(this).stop().animate({
      scrollTop: top
    }, callback);
  };

}).call(this);
(function() {
  angular.module('sc.commons.factories.icons', []).factory('FaIcons', [
    function() {
      return ["fa-adjust", "fa-adn", "fa-align-center", "fa-align-justify", "fa-align-left", "fa-align-right", "fa-ambulance", "fa-anchor", "fa-android", "fa-angle-double-down", "fa-angle-double-left", "fa-angle-double-right", "fa-angle-double-up", "fa-angle-down", "fa-angle-left", "fa-angle-right", "fa-angle-up", "fa-apple", "fa-archive", "fa-arrow-circle-down", "fa-arrow-circle-left", "fa-arrow-circle-o-down", "fa-arrow-circle-o-left", "fa-arrow-circle-o-right", "fa-arrow-circle-o-up", "fa-arrow-circle-right", "fa-arrow-circle-up", "fa-arrow-down", "fa-arrow-left", "fa-arrow-right", "fa-arrow-up", "fa-arrows", "fa-arrows-alt", "fa-arrows-h", "fa-arrows-v", "fa-asterisk", "fa-automobile", "fa-backward", "fa-ban", "fa-bank", "fa-bar-chart-o", "fa-barcode", "fa-bars", "fa-beer", "fa-behance", "fa-behance-square", "fa-bell", "fa-bell-o", "fa-bitbucket", "fa-bitbucket-square", "fa-bitcoin", "fa-bold", "fa-bolt", "fa-bomb", "fa-book", "fa-bookmark", "fa-bookmark-o", "fa-briefcase", "fa-btc", "fa-bug", "fa-building", "fa-building-o", "fa-bullhorn", "fa-bullseye", "fa-cab", "fa-calendar", "fa-calendar-o", "fa-camera", "fa-camera-retro", "fa-car", "fa-caret-down", "fa-caret-left", "fa-caret-right", "fa-caret-square-o-down", "fa-caret-square-o-left", "fa-caret-square-o-right", "fa-caret-square-o-up", "fa-caret-up", "fa-certificate", "fa-chain", "fa-chain-broken", "fa-check", "fa-check-circle", "fa-check-circle-o", "fa-check-square", "fa-check-square-o", "fa-chevron-circle-down", "fa-chevron-circle-left", "fa-chevron-circle-right", "fa-chevron-circle-up", "fa-chevron-down", "fa-chevron-left", "fa-chevron-right", "fa-chevron-up", "fa-child", "fa-circle", "fa-circle-o", "fa-circle-o-notch", "fa-circle-thin", "fa-clipboard", "fa-clock-o", "fa-cloud", "fa-cloud-download", "fa-cloud-upload", "fa-cny", "fa-code", "fa-code-fork", "fa-codepen", "fa-coffee", "fa-cog", "fa-cogs", "fa-columns", "fa-comment", "fa-comment-o", "fa-comments", "fa-comments-o", "fa-compass", "fa-compress", "fa-copy", "fa-credit-card", "fa-crop", "fa-crosshairs", "fa-css3", "fa-cube", "fa-cubes", "fa-cut", "fa-cutlery", "fa-dashboard", "fa-database", "fa-dedent", "fa-delicious", "fa-desktop", "fa-deviantart", "fa-digg", "fa-dollar", "fa-dot-circle-o", "fa-download", "fa-dribbble", "fa-dropbox", "fa-drupal", "fa-edit", "fa-eject", "fa-ellipsis-h", "fa-ellipsis-v", "fa-empire", "fa-envelope", "fa-envelope-o", "fa-envelope-square", "fa-eraser", "fa-eur", "fa-euro", "fa-exchange", "fa-exclamation", "fa-exclamation-circle", "fa-exclamation-triangle", "fa-expand", "fa-external-link", "fa-external-link-square", "fa-eye", "fa-eye-slash", "fa-facebook", "fa-facebook-square", "fa-fast-backward", "fa-fast-forward", "fa-fax", "fa-female", "fa-fighter-jet", "fa-file", "fa-file-archive-o", "fa-file-audio-o", "fa-file-code-o", "fa-file-excel-o", "fa-file-image-o", "fa-file-movie-o", "fa-file-o", "fa-file-pdf-o", "fa-file-photo-o", "fa-file-picture-o", "fa-file-powerpoint-o", "fa-file-sound-o", "fa-file-text", "fa-file-text-o", "fa-file-video-o", "fa-file-word-o", "fa-file-zip-o", "fa-files-o", "fa-film", "fa-filter", "fa-fire", "fa-fire-extinguisher", "fa-flag", "fa-flag-checkered", "fa-flag-o", "fa-flash", "fa-flask", "fa-flickr", "fa-floppy-o", "fa-folder", "fa-folder-o", "fa-folder-open", "fa-folder-open-o", "fa-font", "fa-forward", "fa-foursquare", "fa-frown-o", "fa-gamepad", "fa-gavel", "fa-gbp", "fa-ge", "fa-gear", "fa-gears", "fa-gift", "fa-git", "fa-git-square", "fa-github", "fa-github-alt", "fa-github-square", "fa-gittip", "fa-glass", "fa-globe", "fa-google", "fa-google-plus", "fa-google-plus-square", "fa-graduation-cap", "fa-group", "fa-h-square", "fa-hacker-news", "fa-hand-o-down", "fa-hand-o-left", "fa-hand-o-right", "fa-hand-o-up", "fa-hdd-o", "fa-header", "fa-headphones", "fa-heart", "fa-heart-o", "fa-history", "fa-home", "fa-hospital-o", "fa-html5", "fa-image", "fa-inbox", "fa-indent", "fa-info", "fa-info-circle", "fa-inr", "fa-instagram", "fa-institution", "fa-italic", "fa-joomla", "fa-jpy", "fa-jsfiddle", "fa-key", "fa-keyboard-o", "fa-krw", "fa-language", "fa-laptop", "fa-leaf", "fa-legal", "fa-lemon-o", "fa-level-down", "fa-level-up", "fa-life-bouy", "fa-life-ring", "fa-life-saver", "fa-lightbulb-o", "fa-link", "fa-linkedin", "fa-linkedin-square", "fa-linux", "fa-list", "fa-list-alt", "fa-list-ol", "fa-list-ul", "fa-location-arrow", "fa-lock", "fa-long-arrow-down", "fa-long-arrow-left", "fa-long-arrow-right", "fa-long-arrow-up", "fa-magic", "fa-magnet", "fa-mail-forward", "fa-mail-reply", "fa-mail-reply-all", "fa-male", "fa-map-marker", "fa-maxcdn", "fa-medkit", "fa-meh-o", "fa-microphone", "fa-microphone-slash", "fa-minus", "fa-minus-circle", "fa-minus-square", "fa-minus-square-o", "fa-mobile", "fa-mobile-phone", "fa-money", "fa-moon-o", "fa-mortar-board", "fa-music", "fa-navicon", "fa-openid", "fa-outdent", "fa-pagelines", "fa-paper-plane", "fa-paper-plane-o", "fa-paperclip", "fa-paragraph", "fa-paste", "fa-pause", "fa-paw", "fa-pencil", "fa-pencil-square", "fa-pencil-square-o", "fa-phone", "fa-phone-square", "fa-photo", "fa-picture-o", "fa-pied-piper", "fa-pied-piper-alt", "fa-pied-piper-square", "fa-pinterest", "fa-pinterest-square", "fa-plane", "fa-play", "fa-play-circle", "fa-play-circle-o", "fa-plus", "fa-plus-circle", "fa-plus-square", "fa-plus-square-o", "fa-power-off", "fa-print", "fa-puzzle-piece", "fa-qq", "fa-qrcode", "fa-question", "fa-question-circle", "fa-quote-left", "fa-quote-right", "fa-ra", "fa-random", "fa-rebel", "fa-recycle", "fa-reddit", "fa-reddit-square", "fa-refresh", "fa-renren", "fa-reorder", "fa-repeat", "fa-reply", "fa-reply-all", "fa-retweet", "fa-rmb", "fa-road", "fa-rocket", "fa-rotate-left", "fa-rotate-right", "fa-rouble", "fa-rss", "fa-rss-square", "fa-rub", "fa-ruble", "fa-rupee", "fa-save", "fa-scissors", "fa-search", "fa-search-minus", "fa-search-plus", "fa-send", "fa-send-o", "fa-share", "fa-share-alt", "fa-share-alt-square", "fa-share-square", "fa-share-square-o", "fa-shield", "fa-shopping-cart", "fa-sign-in", "fa-sign-out", "fa-signal", "fa-sitemap", "fa-skype", "fa-slack", "fa-sliders", "fa-smile-o", "fa-sort", "fa-sort-alpha-asc", "fa-sort-alpha-desc", "fa-sort-amount-asc", "fa-sort-amount-desc", "fa-sort-asc", "fa-sort-desc", "fa-sort-down", "fa-sort-numeric-asc", "fa-sort-numeric-desc", "fa-sort-up", "fa-soundcloud", "fa-space-shuttle", "fa-spinner", "fa-spoon", "fa-spotify", "fa-square", "fa-square-o", "fa-stack-exchange", "fa-stack-overflow", "fa-star", "fa-star-half", "fa-star-half-empty", "fa-star-half-full", "fa-star-half-o", "fa-star-o", "fa-steam", "fa-steam-square", "fa-step-backward", "fa-step-forward", "fa-stethoscope", "fa-stop", "fa-strikethrough", "fa-stumbleupon", "fa-stumbleupon-circle", "fa-subscript", "fa-suitcase", "fa-sun-o", "fa-superscript", "fa-support", "fa-table", "fa-tablet", "fa-tachometer", "fa-tag", "fa-tags", "fa-tasks", "fa-taxi", "fa-tencent-weibo", "fa-terminal", "fa-text-height", "fa-text-width", "fa-th", "fa-th-large", "fa-th-list", "fa-thumb-tack", "fa-thumbs-down", "fa-thumbs-o-down", "fa-thumbs-o-up", "fa-thumbs-up", "fa-ticket", "fa-times", "fa-times-circle", "fa-times-circle-o", "fa-tint", "fa-toggle-down", "fa-toggle-left", "fa-toggle-right", "fa-toggle-up", "fa-trash-o", "fa-tree", "fa-trello", "fa-trophy", "fa-truck", "fa-try", "fa-tumblr", "fa-tumblr-square", "fa-turkish-lira", "fa-twitter", "fa-twitter-square", "fa-umbrella", "fa-underline", "fa-undo", "fa-university", "fa-unlink", "fa-unlock", "fa-unlock-alt", "fa-unsorted", "fa-upload", "fa-usd", "fa-user", "fa-user-md", "fa-users", "fa-video-camera", "fa-vimeo-square", "fa-vine", "fa-vk", "fa-volume-down", "fa-volume-off", "fa-volume-up", "fa-warning", "fa-wechat", "fa-weibo", "fa-weixin", "fa-wheelchair", "fa-windows", "fa-won", "fa-wordpress", "fa-wrench", "fa-xing", "fa-xing-square", "fa-yahoo", "fa-yen", "fa-youtube", "fa-youtube-play", "fa-youtube-square"];
    }
  ]);

}).call(this);
(function() {
  angular.module('sc.commons.factories.resourceList', []).factory('ResourceList', [
    '$rootScope', function($rootScope) {
      return (function() {
        function _Class(resource, cast, opts) {
          this.resource = resource;
          this.cast = cast;
          if (opts == null) {
            opts = {};
          }
          this.transformResponse = opts.transformResponse;
          return;
        }

        _Class.prototype.init = function(collection, callback) {
          if (callback == null) {
            callback = angular.noop;
          }
          this.collection(collection, callback);
          return this;
        };

        _Class.prototype.initialized = false;

        _Class.prototype.loading = false;

        _Class.prototype.list = [];

        _Class.prototype.collection = function(collection, callback) {
          if (callback == null) {
            callback = angular.noop;
          }
          if (collection != null) {
            this.list = collection;
            this.initialized = true;
            callback(this);
          } else if (this.initialized) {
            callback(this);
          } else {
            this.load(callback);
          }
          return this.list;
        };

        _Class.prototype.findIdx = function(id) {
          return this.list.indexOfById(id);
        };

        _Class.prototype.find = function(id, defaultValue) {
          var _ref;
          return (_ref = this.list.getById(id)) != null ? _ref : defaultValue;
        };

        _Class.prototype.remove = function(id) {
          this.list.removeById(id);
          if (this.cast) {
            return $rootScope.$broadcast("" + this.cast + ".removed", id);
          }
        };

        _Class.prototype.set = function(el, _extend, _push) {
          var extended, idx, obj;
          if (_extend == null) {
            _extend = false;
          }
          if (_push == null) {
            _push = true;
          }
          if ((el.id != null) && (idx = this.findIdx(el.id)) >= 0) {
            extended = _extend ? this.list[idx] : {};
            obj = this.list[idx] = angular.extend(extended, el);
            if (this.cast) {
              $rootScope.$broadcast("" + this.cast + ".updated", obj);
            }
          } else {
            if (_push) {
              this.list.push(el);
            } else {
              this.list.unshift(el);
            }
            obj = el;
            if (this.cast) {
              $rootScope.$broadcast("" + this.cast + ".added", obj);
            }
          }
          if (this.cast) {
            $rootScope.$broadcast("" + this.cast + ".setted", obj);
          }
          return obj;
        };

        _Class.prototype.load = function(callback) {
          if (callback == null) {
            callback = angular.noop;
          }
          if (this.loading) {
            return;
          }
          this.loading = true;
          this.index((function(_this) {
            return function(data) {
              _this.initialized = true;
              _this.loading = false;
              _this.list = _this.transformResponse != null ? _this.transformResponse(data) : data.lista;
              callback(_this, data);
              if (_this.cast) {
                return $rootScope.$broadcast("" + _this.cast + ".loaded");
              }
            };
          })(this), (function(_this) {
            return function(response) {
              _this.initialized = false;
              _this.loading = false;
              return _this.list = [];
            };
          })(this));
        };

        _Class.prototype.save = function(params, scallback, ecallback) {
          if (params.id != null) {
            return this.resource.update(params, scallback, ecallback);
          } else {
            return this.resource.create(params, scallback, ecallback);
          }
        };

        _Class.prototype.index = function() {
          var _ref;
          return (_ref = this.resource).list.apply(_ref, arguments);
        };

        _Class.prototype.create = function() {
          var _ref;
          return (_ref = this.resource).create.apply(_ref, arguments);
        };

        _Class.prototype.update = function() {
          var _ref;
          return (_ref = this.resource).update.apply(_ref, arguments);
        };

        _Class.prototype.destroy = function() {
          var _ref;
          return (_ref = this.resource).destroy.apply(_ref, arguments);
        };

        return _Class;

      })();
    }
  ]);

}).call(this);


angular.module('sc.commons.factories.position', [])

  /**
   * A set of utility methods that can be use to retrieve position of DOM elements.
   * It is meant to be used where we need to absolute-position DOM elements in
   * relation to other, existing elements (this is the case for tooltips, popovers,
   * typeahead suggestions etc.).
   */
  .factory('$position', ['$document', '$window', function ($document, $window) {

    function getStyle(el, cssprop) {
      if (el.currentStyle) { //IE
        return el.currentStyle[cssprop];
      } else if ($window.getComputedStyle) {
        return $window.getComputedStyle(el)[cssprop];
      }
      // finally try and get inline style
      return el.style[cssprop];
    }

    /**
     * Checks if a given element is statically positioned
     * @param element - raw DOM element
     */
    function isStaticPositioned(element) {
      return (getStyle(element, 'position') || 'static' ) === 'static';
    }

    /**
     * returns the closest, non-statically positioned parentOffset of a given element
     * @param element
     */
    var parentOffsetEl = function (element) {
      var docDomEl = $document[0];
      var offsetParent = element.offsetParent || docDomEl;
      while (offsetParent && offsetParent !== docDomEl && isStaticPositioned(offsetParent) ) {
        offsetParent = offsetParent.offsetParent;
      }
      return offsetParent || docDomEl;
    };

    return {
      /**
       * Provides read-only equivalent of jQuery's position function:
       * http://api.jquery.com/position/
       */
      position: function (element) {
        var elBCR = this.offset(element);
        var offsetParentBCR = { top: 0, left: 0 };
        var offsetParentEl = parentOffsetEl(element[0]);
        if (offsetParentEl != $document[0]) {
          offsetParentBCR = this.offset(angular.element(offsetParentEl));
          offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
          offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
        }

        var boundingClientRect = element[0].getBoundingClientRect();
        return {
          width: boundingClientRect.width || element.prop('offsetWidth'),
          height: boundingClientRect.height || element.prop('offsetHeight'),
          top: elBCR.top - offsetParentBCR.top,
          left: elBCR.left - offsetParentBCR.left
        };
      },

      /**
       * Provides read-only equivalent of jQuery's offset function:
       * http://api.jquery.com/offset/
       */
      offset: function (element) {
        var boundingClientRect = element[0].getBoundingClientRect();
        return {
          width: boundingClientRect.width || element.prop('offsetWidth'),
          height: boundingClientRect.height || element.prop('offsetHeight'),
          top: boundingClientRect.top + ($window.pageYOffset || $document[0].documentElement.scrollTop),
          left: boundingClientRect.left + ($window.pageXOffset || $document[0].documentElement.scrollLeft)
        };
      },

      /**
       * Provides coordinates for the targetEl in relation to hostEl
       */
      positionElements: function (hostEl, targetEl, positionStr, appendToBody) {

        var positionStrParts = positionStr.split('-');
        var pos0 = positionStrParts[0], pos1 = positionStrParts[1] || 'center';

        var hostElPos,
          targetElWidth,
          targetElHeight,
          targetElPos;

        hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);

        targetElWidth = targetEl.prop('offsetWidth');
        targetElHeight = targetEl.prop('offsetHeight');

        var shiftWidth = {
          center: function () {
            return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
          },
          left: function () {
            return hostElPos.left;
          },
          right: function () {
            return hostElPos.left + hostElPos.width;
          }
        };

        var shiftHeight = {
          center: function () {
            return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
          },
          top: function () {
            return hostElPos.top;
          },
          bottom: function () {
            return hostElPos.top + hostElPos.height;
          }
        };

        switch (pos0) {
          case 'right':
            targetElPos = {
              top: shiftHeight[pos1](),
              left: shiftWidth[pos0]()
            };
            break;
          case 'left':
            targetElPos = {
              top: shiftHeight[pos1](),
              left: hostElPos.left - targetElWidth
            };
            break;
          case 'bottom':
            targetElPos = {
              top: shiftHeight[pos0](),
              left: shiftWidth[pos1]()
            };
            break;
          default:
            targetElPos = {
              top: hostElPos.top - targetElHeight,
              left: shiftWidth[pos1]()
            };
            break;
        }

        return targetElPos;
      }
    };
  }]);

(function() {
  var __slice = [].slice,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  angular.module("sc.commons.factories.states", []).factory('scStates', [
    '$timeout', function($timeout) {
      return (function() {
        function _Class(opts) {
          if (opts == null) {
            opts = {};
          }
          this.states = opts.states, this.select = opts.select, this.delay = opts.delay;
          this.callbacks = {
            before: {},
            after: {}
          };
          this.states || (this.states = []);
          if (this.states.length < 2) {
            throw "Inform at least two states to constructor. ex.: new scStates states: ['idle', 'loading', 'destroying']";
          }
          this.select || (this.select = this.states[0]);
          if (this.delay == null) {
            this.delay = 2200;
          }
          this.is = {};
          this.active = void 0;
          this.set(this.select);
        }

        _Class.prototype.temp = function(state, stateBackTo, delay) {
          this.set(state);
          stateBackTo || (stateBackTo = this.states[0]);
          if (delay == null) {
            delay = this.delay;
          }
          return this.promisse = $timeout((function(_this) {
            return function() {
              _this.set(stateBackTo);
              return _this.promisse = void 0;
            };
          })(this), delay);
        };

        _Class.prototype.set = function(state) {
          var callback, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2, _ref3, _ref4, _state;
          if (this.promisse != null) {
            $timeout.cancel(this.promisse);
          }
          _ref1 = ((_ref = this.callbacks['before']) != null ? _ref[state] : void 0) || [];
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            callback = _ref1[_i];
            if (!callback.apply(null, arguments)) {
              return false;
            }
          }
          _ref2 = this.states;
          for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
            _state = _ref2[_j];
            this.is[_state] = false;
          }
          this.is[state] = true;
          this.active = state;
          _ref4 = ((_ref3 = this.callbacks['after']) != null ? _ref3[state] : void 0) || [];
          for (_k = 0, _len2 = _ref4.length; _k < _len2; _k++) {
            callback = _ref4[_k];
            callback.apply(null, arguments);
          }
          return this;
        };

        _Class.prototype.toggle = function() {
          var idx, list;
          list = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          if (!list.length) {
            list = this.states;
          }
          idx = list.indexOf(this.active);
          idx = idx === -1 ? 0 : (idx + 1) % list.length;
          return this.set(list[idx]);
        };

        _Class.prototype.bind = function(state, callback, _on) {
          var _base;
          if (_on == null) {
            _on = 'after';
          }
          if (__indexOf.call(this.states, state) < 0) {
            throw "State " + state + " not defined!";
          }
          if (_on !== 'after' && _on !== 'before') {
            throw "On action must be before or after you passed " + _on;
          }
          (_base = this.callbacks[_on])[state] || (_base[state] = []);
          this.callbacks[_on][state].push(callback);
          return this;
        };

        _Class.prototype.before = function() {
          return this.bind.apply(this, __slice.call(arguments).concat(['before']));
        };

        _Class.prototype.after = function() {
          return this.bind.apply(this, __slice.call(arguments).concat(['after']));
        };

        _Class.prototype.unbind = function(state, callback, _on) {
          var list, _ref;
          if (_on == null) {
            _on = 'after';
          }
          list = (((_ref = this.callbacks[_on]) != null ? _ref[state] : void 0) != null) || [];
          list.remove(callback);
          return this;
        };

        return _Class;

      })();
    }
  ]);

}).call(this);
(function() {
  angular.module("sc.commons.factories.toggle", []).factory('scToggle', [
    function() {
      return (function() {
        function _Class(options) {
          if (options == null) {
            options = {};
          }
          this.opened = options.opened, this.beforeClose = options.beforeClose, this.beforeOpen = options.beforeOpen, this.onClose = options.onClose, this.onOpen = options.onOpen;
          this.opened = !!this.opened;
          this.closed = !this.opened;
          this.normalize();
          this.beforeClose || (this.beforeClose = angular.noop);
          this.beforeOpen || (this.beforeOpen = angular.noop);
          this.onClose || (this.onClose = angular.noop);
          this.onOpen || (this.onOpen = angular.noop);
        }

        _Class.prototype.normalize = function() {
          this.isOn = this.active = this.enabled = this.opened;
          return this.isOff = this.inative = this.disabled = this.closed;
        };

        _Class.prototype.open = function() {
          var _ref;
          this.beforeOpen.apply(this, arguments);
          if (this.opened) {
            return;
          }
          _ref = [false, true], this.closed = _ref[0], this.opened = _ref[1];
          this.normalize();
          return this.onOpen.apply(this, arguments);
        };

        _Class.prototype.close = function() {
          var _ref;
          this.beforeClose.apply(this, arguments);
          if (this.closed) {
            return;
          }
          _ref = [true, false], this.closed = _ref[0], this.opened = _ref[1];
          this.normalize();
          return this.onClose.apply(this, arguments);
        };

        _Class.prototype.toggle = function() {
          if (this.closed) {
            return this.open.apply(this, arguments);
          } else {
            return this.close.apply(this, arguments);
          }
        };

        return _Class;

      })();
    }
  ]);

}).call(this);
(function() {
  angular.module("sc.commons.filters.array", []).filter('toSentence', function() {
    return function(list, field) {
      list || (list = []);
      return (field && list.map(function(el) {
        return el[field];
      }) || list).toSentence();
    };
  });

}).call(this);
(function() {
  angular.module('sc.commons.filters.i18n', []).filter('i18n', [
    '$locale', function($locale) {
      return function(field, scope) {
        if (typeof scope === 'string') {
          scope = scope.split(".");
        }
        if (!(scope instanceof Array)) {
          throw "invalid scope type";
        }
        if (field != null) {
          scope.push(field);
        }
        if ($locale[scope[0]] == null) {
          scope.unshift("MODELS");
        }
        return scope.extractFrom($locale);
      };
    }
  ]);

}).call(this);
(function() {
  angular.module("sc.commons.filters.sc.dinheiro", []).filter('dinheiro', function() {
    return function(val) {
      if (val != null) {
        val = dinheiro(val);
      }
      return val;
    };
  });

}).call(this);
(function() {
  angular.module('sc.commons.filters.highlight', []).filter('scHighlight', [
    '$sce', function($sce) {
      return function(matchItem, query) {
        var output;
        if (query) {
          output = ('' + matchItem).replace(createAccentRegexp(query), '<b class="highlight">$&</b>');
        } else {
          output = matchItem;
        }
        return $sce.trustAsHtml(output);
      };
    }
  ]);

}).call(this);
(function() {
  angular.module('sc.commons.filters.nl2br', []).filter('nl2br', [
    '$sce', function($sce) {
      return function(input) {
        var output;
        output = input.replace(/\n/g, '<br/>');
        return $sce.trustAsHtml(output);
      };
    }
  ]);

}).call(this);
(function() {
  angular.module('sc.commons.filters.sc.queryString', []).filter('scQueryString', function() {
    return function(params) {
      var buffer, encode, filtro, valor;
      buffer = [];
      encode = encodeURIComponent;
      for (filtro in params) {
        valor = params[filtro];
        if (params.hasOwnProperty(filtro) && valor) {
          buffer.push("" + (encode(filtro)) + "=" + (encode(valor || "")));
        }
      }
      return buffer.join("&").replace(/%20/g, "+");
    };
  });

}).call(this);
(function() {
  angular.module("sc.commons.filters.showdown", ['ngSanitize']).filter('showdown', [
    '$sce', function($sce) {
      var converter;
      converter = new Showdown.converter();
      return function(txt) {
        return $sce.trustAsHtml(converter.makeHtml(txt));
      };
    }
  ]);

}).call(this);
(function() {
  angular.module('sc.commons.filters.sc.time', []).filter('scHora', function() {
    return function(time, scale) {
      var h, m, minutes, _ref;
      if (scale == null) {
        scale = 'hours';
      }
      minutes = (function() {
        switch (scale) {
          case 'hours':
            return time * 60;
          case 'minutes':
            return time;
          case 'seconds':
            return time / 60;
        }
      })();
      _ref = [Math.floor(minutes / 60), minutes % 60], h = _ref[0], m = _ref[1];
      m = ("00" + m).slice(-2);
      return "" + h + "h" + m + "min";
    };
  });

}).call(this);
(function() {
  angular.module("sc.commons.filters.string", []).filter('capitalize', function() {
    return function(input) {
      if (input !== null) {
        input = input.toLowerCase();
        input = input.substring(0, 1).toUpperCase() + input.substring(1);
      }
      return input;
    };
  }).filter('upcase', function() {
    return function(input) {
      if (input != null) {
        input = input.toUpperCase();
      }
      return input;
    };
  }).filter('ano_mes_para_pt', function() {
    return function(input) {
      return input.split("-").reverse().join("/");
    };
  }).filter('notimezone', function() {
    return function(input) {
      if (input != null) {
        input = scTimezone.fromString(input);
      }
      return input;
    };
  });

}).call(this);
(function() {


}).call(this);
(function() {
  angular.module('sc.commons.helpers.crud.methods', ['ngRoute', 'sc.commons.services.notifications']).factory('$scCrudListMethods', [
    "$location", '$routeParams', "$scNotifications", function($location, $routeParams, $scNotifications) {
      return function($scope, pathPrefix, resourcesName, resource, options) {
        var defaultAcceptions, defaultMessages, mixin;
        mixin = {};
        defaultMessages = {
          resourceTitle: {
            singular: "Registro",
            plural: "Registros"
          },
          deletionConfirmationMessage: "Tem certeza que deseja remover o registro?",
          deletionMessage: "Registro removido com sucesso",
          noEntries: "Nenhum registro encontrado"
        };
        defaultAcceptions = {
          "new": true,
          show: true,
          edit: true,
          "delete": true
        };
        mixin["new"] = function() {
          if (!$scope.accepts["new"]) {
            throw "Method new is not allowed";
          }
          this.clearQuerySearch();
          return $location.path(pathPrefix + '/new');
        };
        mixin.show = function(itemId) {
          if (!$scope.accepts.show) {
            throw "Method show is not allowed";
          }
          this.clearQuerySearch();
          return $location.path(pathPrefix + '/' + itemId);
        };
        mixin.edit = function(itemId) {
          if (!$scope.accepts.edit) {
            throw "Method edit is not allowed";
          }
          this.clearQuerySearch();
          return $location.path(pathPrefix + '/' + itemId + "/edit");
        };
        mixin.clearQuerySearch = function() {
          return $location.url($location.path());
        };
        mixin["delete"] = function(idx) {
          var entry;
          if (!$scope.accepts["delete"]) {
            throw "Method delete is not allowed";
          }
          entry = $scope.entries[idx];
          if (confirm($scope.messages.deletionConfirmationMessage)) {
            return $scope.resource["delete"]({
              id: entry.id
            }, function() {
              $scNotifications.removeAll();
              $scNotifications.pushForCurrentRoute({
                'type': 'success',
                'message': $scope.messages.deletionMessage
              });
              return $scope.listEntries();
            });
          }
        };
        mixin.listEntries = function(successCb, errorCb) {
          if ($scope.carregando) {
            return;
          }
          return $scope.ensureValidPage(function() {
            $scope.carregando = true;
            return $scope.resource.list($scope.getSearchParams(), function(response) {
              $scope.carregando = false;
              $scope.totalPages = response.total_pages;
              $scope.entries = response[resourcesName];
              if (successCb) {
                return successCb(response);
              }
            }, function(error) {
              $scope.carregando = false;
              if (errorCb) {
                return errorCb(error);
              }
            });
          });
        };
        mixin.searchEntries = function(successCb, errorCb) {
          $scope.currentPage = 1;
          return $scope.listEntries(function() {
            $location.search($scope.getSearchParams());
            if (successCb) {
              return successCb();
            }
          }, errorCb);
        };
        mixin.ensureValidPage = function(validCallback, invalidCallback) {
          var mustRedirect;
          mustRedirect = false;
          if ($scope.currentPage < 1) {
            $scope.currentPage = 1;
            mustRedirect = true;
          }
          if ($scope.currentPage > $scope.totalPages) {
            $scope.currentPage = $scope.totalPages;
            mustRedirect = true;
          }
          if (mustRedirect) {
            angular.forEach($scNotifications.getCurrent(), function(value) {
              return $scNotifications.pushForNextRoute(value);
            });
            $location.search($scope.getSearchParams());
            if (invalidCallback) {
              return invalidCallback();
            }
          } else {
            if (validCallback) {
              return validCallback();
            }
          }
        };
        mixin.getSearchParams = function() {
          var searchParams;
          searchParams = {};
          if ($scope.query) {
            searchParams.query = $scope.query;
          }
          searchParams.page = $scope.currentPage;
          return searchParams;
        };
        mixin.nextPage = function() {
          if (!($scope.currentPage >= $scope.totalPages)) {
            $scope.currentPage += 1;
            return $location.search($scope.getSearchParams());
          }
        };
        mixin.previousPage = function() {
          if (!($scope.currentPage <= 1)) {
            $scope.currentPage -= 1;
            return $location.search($scope.getSearchParams());
          }
        };
        mixin.setup = function() {
          $scope.entries = [];
          $scope.accepts = defaultAcceptions;
          if (options) {
            angular.extend($scope.accepts, options.accepts);
          }
          $scope.messages = defaultMessages;
          if (options) {
            angular.extend($scope.messages, options.messages);
          }
          $scope.resource = resource;
          $scope.currentPage = parseInt($routeParams.page) || 0;
          return $scope.query = $routeParams.query || null;
        };
        mixin.setup();
        return mixin;
      };
    }
  ]).factory('$scCrudEditMethods', [
    '$location', '$routeParams', '$scNotifications', function($location, $routeParams, $scNotifications) {
      return function($scope, pathPrefix, resourceName, resource, options) {
        var defaultMessages, mixin;
        defaultMessages = {
          resourceTitle: {
            singular: "Registro",
            plural: "Registros"
          },
          editResource: "Editar Registro",
          newResource: "Novo Registro",
          savingError: 'Erro ao salvar registro',
          savingSuccess: 'Registro salvo com sucesso'
        };
        mixin = {};
        mixin.getEntry = function(successCb, errorCb) {
          if ($routeParams && $routeParams.id) {
            return $scope.resource.get({
              id: $routeParams.id
            }, function(response) {
              $scope.entry = response[resourceName];
              if (successCb) {
                successCb(response);
              }
            }, function(response) {
              if (errorCb) {
                return errorCb(response);
              }
            });
          } else {
            return null;
          }
        };
        mixin.isEdit = function() {
          return $location.path().search("\\A*\\\/edit$") > 0;
        };
        mixin.edit = function() {
          if ($routeParams && $routeParams.id) {
            return $location.path(pathPrefix + '/' + $routeParams.id + '/edit');
          }
        };
        mixin.save = function(successCb, errorCb) {
          var errorCallback, successCallback, that;
          if ($scope.entry.saving) {
            return;
          }
          that = this;
          $scope.entry.errors = {};
          $scope.entry.saving = true;
          successCallback = function(response) {
            $scope.entry.saving = false;
            if ($scope.onSaveRedirectTo) {
              $scNotifications.pushForNextRoute({
                'type': 'success',
                'message': $scope.messages.savingSuccess
              });
              $scope.redirectTo($scope.onSaveRedirectTo);
            } else {
              $scNotifications.pushForCurrentRoute({
                'type': 'success',
                'message': $scope.messages.savingSuccess
              });
            }
            if (successCb) {
              return successCb();
            }
          };
          errorCallback = function(response) {
            $scope.entry.saving = false;
            $scope.entry.errors = response.data.errors;
            $scNotifications.removeAll();
            $scNotifications.pushForCurrentRoute({
              'type': 'error',
              'message': $scope.messages.savingError
            });
            if (errorCb) {
              return errorCb();
            }
          };
          if ($scope.entry.id) {
            return $scope.resource.update($scope.entry, successCallback, errorCallback);
          } else {
            return $scope.resource.create($scope.entry, successCallback, errorCallback);
          }
        };
        mixin.setup = function() {
          $scope.entry = {};
          $scope.messages = defaultMessages;
          if (options && options.messages) {
            $scope.messages = angular.extend(defaultMessages, options.messages);
          }
          $scope.resource = resource;
          if (options) {
            return $scope.onSaveRedirectTo = options.onSaveRedirectTo;
          }
        };
        mixin.redirectTo = function(action) {
          var backUrl;
          backUrl = (function() {
            switch (action) {
              case "index":
                return pathPrefix;
              case "new":
                return "" + pathPrefix + "/new";
              case "edit":
                return "" + pathPrefix + "/" + response.id + "/edit";
              case "show":
                return "" + pathPrefix + "/" + response.id;
              default:
                return action;
            }
          })();
          return $location.path(backUrl);
        };
        mixin.setup();
        return mixin;
      };
    }
  ]);

}).call(this);
(function() {
  angular.module("sc.commons.helpers.crud.routes", ['ngRoute']).provider("$scCrudRoute", [
    '$routeProvider', function($routeProvider) {
      var scCrudRouteProvider;
      scCrudRouteProvider = {};
      scCrudRouteProvider.$get = angular.noop;
      scCrudRouteProvider.addCrudRoutesFor = function(name, prefix, opts) {
        var baseRoute, exceptAction, templateUrl, _i, _len, _ref;
        opts || (opts = {});
        opts.only || (opts.only = ['index', 'edit', 'new', 'show']);
        opts.except || (opts.except = []);
        _ref = opts.except;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          exceptAction = _ref[_i];
          opts.only.remove(exceptAction);
        }
        baseRoute = "/";
        if (prefix) {
          baseRoute += prefix + "/";
        }
        baseRoute += name;
        templateUrl = function(action) {
          var url;
          url = '/assets/';
          if (prefix) {
            url += prefix + '/';
          }
          url += name + '/' + name;
          if (action) {
            url += '.' + action;
          }
          return url += '.html';
        };
        if (opts.only.indexOf('index') > -1) {
          $routeProvider.when(baseRoute, {
            templateUrl: templateUrl(),
            controller: name.toPascalCase() + 'Ctrl'
          });
        }
        if (opts.only.indexOf('new') > -1) {
          $routeProvider.when(baseRoute + '/new', {
            templateUrl: templateUrl('edit'),
            controller: name.toPascalCase() + 'EditCtrl'
          });
        }
        if (opts.only.indexOf('show') > -1) {
          $routeProvider.when(baseRoute + '/:id', {
            templateUrl: templateUrl('show'),
            controller: name.toPascalCase() + 'EditCtrl'
          });
        }
        if (opts.only.indexOf('edit') > -1) {
          $routeProvider.when(baseRoute + '/:id/edit', {
            templateUrl: templateUrl('edit'),
            controller: name.toPascalCase() + 'EditCtrl'
          });
        }
      };
      return scCrudRouteProvider;
    }
  ]);

}).call(this);
(function() {
  this.keyMap = {
    KEYDOWN: 229,
    ARROW: {
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40
    },
    SPACE: 32,
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    PAUSE_BREAK: 19,
    PAUSE: 19,
    BREAK: 19,
    CAPSLOCK: 20,
    CAPS_LOCK: 20,
    CAPS: 20,
    ESCAPE: 27,
    ESC: 27,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    INSERT: 45,
    DELETE: 46,
    DEL: 46,
    SCROLLLOCK: 145,
    SCROLL_LOCK: 145,
    SCROLL: 145,
    NUMLOCK: 144,
    NUM_LOCK: 144,
    NUM: 144,
    PRINT_SCREEN: 42,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    NUMBERS: {
      '0': 48,
      '1': 49,
      '2': 50,
      '3': 51,
      '4': 52,
      '5': 53,
      '6': 54,
      '7': 55,
      '8': 56,
      '9': 57
    },
    LETTERS: {
      A: 65,
      B: 66,
      C: 67,
      D: 68,
      E: 69,
      F: 70,
      G: 71,
      H: 72,
      I: 73,
      J: 74,
      K: 75,
      L: 76,
      M: 77,
      N: 78,
      O: 79,
      P: 80,
      Q: 81,
      R: 82,
      S: 83,
      T: 84,
      U: 85,
      V: 86,
      W: 87,
      X: 88,
      Y: 89,
      Z: 90
    }
  };

}).call(this);
(function() {
  angular.module('sc.noticias').factory('NoticiaResource', [
    '$resource', function($resource) {
      return $resource('/noticias/:slug.json', {
        slug: '@slug',
        pagina_atual: '@pagina_atual'
      }, {
        list: {
          method: 'GET',
          isArray: false
        },
        show: {
          method: 'GET'
        }
      });
    }
  ]);

}).call(this);
(function() {
  angular.module('sc.animations', ['ngAnimate']).animation(".ng-animation-slider-fader", function() {
    return {
      enter: function(element, done) {
        jQuery(element).stop().hide().css('opacity', 0).slideDown('fast', done).animate({
          opacity: 1
        }, {
          queue: false,
          duration: 'fast'
        }, done);
        return function(isCancelled) {
          if (isCancelled) {
            return jQuery(element).stop();
          }
        };
      },
      leave: function(element, done) {
        jQuery(element).stop().show().css('opacity', 1).slideUp('fast', done).animate({
          opacity: 0
        }, {
          queue: false,
          duration: 'fast'
        });
        return function(isCancelled) {
          if (isCancelled) {
            return jQuery(element).stop();
          }
        };
      },
      beforeAddClass: function(element, className, done) {
        if (className === 'ng-hide') {
          jQuery(element).stop().show().css('opacity', 1).slideUp('fast', done).animate({
            opacity: 0
          }, {
            queue: false,
            duration: 'fast'
          });
        } else {
          done();
        }
        return function(isCancelled) {
          if (isCancelled) {
            return jQuery(element).stop();
          }
        };
      },
      removeClass: function(element, className, done) {
        if (className === 'ng-hide') {
          jQuery(element).stop().hide().css('opacity', 0).slideDown('fast', done).animate({
            opacity: 1
          }, {
            queue: false,
            duration: 'fast'
          });
        } else {
          done();
        }
        return function(isCancelled) {
          if (isCancelled) {
            return jQuery(element).stop();
          }
        };
      }
    };
  }).animation(".ng-animation-slider", function() {
    return {
      enter: function(element, done) {
        jQuery(element).hide().slideDown('fast', done);
        return function(isCancelled) {
          if (isCancelled) {
            return jQuery(element).stop();
          }
        };
      },
      leave: function(element, done) {
        jQuery(element).slideUp('fast', done);
        return function(isCancelled) {
          if (isCancelled) {
            return jQuery(element).stop();
          }
        };
      },
      beforeAddClass: function(element, className, done) {
        if (className === 'ng-hide') {
          jQuery(element).slideUp('fast', done);
        } else {
          done();
        }
        return function(isCancelled) {
          if (isCancelled) {
            return jQuery(element).stop();
          }
        };
      },
      removeClass: function(element, className, done) {
        if (className === 'ng-hide') {
          jQuery(element).hide().slideDown('fast', done);
        } else {
          done();
        }
        return function(isCancelled) {
          if (isCancelled) {
            return jQuery(element).stop();
          }
        };
      }
    };
  }).animation(".ng-animation-show", function() {
    return {
      enter: function(element, done) {
        jQuery(element).hide().show('fast', done);
        return function(isCancelled) {
          if (isCancelled) {
            return jQuery(element).stop();
          }
        };
      },
      leave: function(element, done) {
        jQuery(element).hide('fast', done);
        return function(isCancelled) {
          if (isCancelled) {
            return jQuery(element).stop();
          }
        };
      },
      beforeAddClass: function(element, className, done) {
        if (className === 'ng-hide') {
          jQuery(element).hide('fast', done);
        } else {
          done();
        }
        return function(isCancelled) {
          if (isCancelled) {
            return jQuery(element).stop();
          }
        };
      },
      removeClass: function(element, className, done) {
        if (className === 'ng-hide') {
          jQuery(element).hide().show('fast', done);
        } else {
          done();
        }
        return function(isCancelled) {
          if (isCancelled) {
            return jQuery(element).stop();
          }
        };
      }
    };
  }).animation(".ng-animation-fader", function() {
    return {
      enter: function(element, done) {
        jQuery(element).hide().fadeIn('fast', done);
        return function(isCancelled) {
          if (isCancelled) {
            return jQuery(element).stop();
          }
        };
      },
      leave: function(element, done) {
        jQuery(element).fadeOut('fast', done);
        return function(isCancelled) {
          if (isCancelled) {
            return jQuery(element).stop();
          }
        };
      },
      beforeAddClass: function(element, className, done) {
        if (className === 'ng-hide') {
          jQuery(element).fadeOut('fast', done);
        } else {
          done();
        }
        return function(isCancelled) {
          if (isCancelled) {
            return jQuery(element).stop();
          }
        };
      },
      removeClass: function(element, className, done) {
        if (className === 'ng-hide') {
          jQuery(element).hide().fadeIn('fast', done);
        } else {
          done();
        }
        return function(isCancelled) {
          if (isCancelled) {
            return jQuery(element).stop();
          }
        };
      }
    };
  });

}).call(this);
(function() {
  angular.module('sc.app.config', []).constant('ENV', {
    production: {
      requests: {
        alert: {
          on500: false
        }
      },
      cdn: {
        whitelist: ["self", "http://*.seucondominio.com.br/**", "https://*.seucondominio.com.br/**"]
      }
    },
    local_staging: {
      requests: {
        alert: {
          on500: true
        }
      },
      cdn: {
        whitelist: ["self"]
      }
    },
    staging: {
      requests: {
        alert: {
          on500: true
        }
      },
      cdn: {
        whitelist: ["self", "http://*.seucondominio.com.br/**", "https://*.seucondominio.com.br/**", "http://*.stagingsc.com.br/**", "https://*.stagingsc.com.br/**"]
      }
    },
    development: {
      requests: {
        alert: {
          on500: true
        }
      },
      cdn: {
        whitelist: ["self"]
      }
    },
    local_staging: {
      requests: {
        alert: {
          on500: true
        }
      },
      cdn: {
        whitelist: ["self"]
      }
    }
  });

}).call(this);
(function() {
  angular.module('sc.app.helpers', ['sc.commons.app-notifications', 'sc.commons.components.typeahead', 'sc.commons.components.monthPicker', 'sc.commons.directives.dropdown', 'sc.commons.directives.redirectFocusTo', 'sc.commons.components.currencyInput', 'sc.commons.directives.dateInput', 'sc.commons.directives.integerInput', 'sc.commons.directives.timeInput', 'sc.commons.directives.durationInput', 'sc.commons.directives.target', 'sc.commons.directives.sticker', 'sc.commons.directives.scroller', 'sc.commons.directives.scrollTo', 'sc.commons.directives.scStopClick', 'sc.commons.directives.modal', 'sc.commons.directives.thumb', 'sc.commons.directives.redactor', 'sc.commons.directives.input.dismiss.click', 'sc.commons.filters.highlight', 'sc.commons.filters.nl2br', 'sc.commons.filters.sc.time', 'sc.commons.filters.sc.dinheiro', 'sc.commons.filters.sc.queryString', 'sc.commons.filters.showdown', 'sc.commons.filters.i18n', 'sc.commons.filters.string', 'sc.commons.filters.array', 'sc.commons.services.html5support', 'sc.commons.factories.resourceList', 'sc.commons.factories.toggle', 'sc.commons.factories.states', 'sc.commons.factories.icons', 'sc.commons.carousel', 'sc.commons.scTopMessages', 'sc.animations', 'sc.page.settings', 'sc.timezone', 'sc.commons.directives.mask']);

}).call(this);
(function() {
  $(document).ready(function() {
    "use strict";
    var ripplesClass, tap;
    ripplesClass = ".sc-btn, .sc-ripples-dark, .sc-ripples-light";
    tap = isTouchable() ? "touchstart" : "click";
    return $("body").on(tap, ripplesClass, function(e) {
      var $circle, $offset, pageX, pageY, scRipplesBox, target, x, y;
      target = $(this);
      if (target.is(":visible")) {
        scRipplesBox = $("<div class=\"sc-ripples-box\"> <span class=\"sc-ripples-circle\"></span> </div>").appendTo(target);
        $offset = scRipplesBox.parent().offset();
        $circle = scRipplesBox.find(".sc-ripples-circle");
        if (isTouchable()) {
          pageX = e.originalEvent.touches[0].pageX;
          pageY = e.originalEvent.touches[0].pageY;
        } else {
          pageX = e.pageX;
          pageY = e.pageY;
        }
        x = pageX - $offset.left;
        y = pageY - $offset.top;
        $circle.css({
          top: y + "px",
          left: x + "px"
        });
        scRipplesBox.addClass("is-active");
        return scRipplesBox.on("animationend webkitAnimationEnd oanimationend MSAnimationEnd", function(e) {
          target.find(".sc-ripples-box").remove();
          return $(this).removeClass("is-active");
        });
      }
    });
  });

}).call(this);
(function() {
  angular.module("sc.commons.services.breadcrumbs", []).service("$scBreadcrumbs", [
    '$rootScope', function($rootScope) {
      var data, ensureIdIsRegistered;
      data = {};
      ensureIdIsRegistered = function(id) {
        if (angular.isUndefined(data[id])) {
          data[id] = [];
        }
      };
      return {
        reset: function(id) {
          ensureIdIsRegistered(id);
          data[id] = [];
          $rootScope.$broadcast("breadcrumbsRefresh");
        },
        set: function(id, list) {
          ensureIdIsRegistered(id);
          data[id] = list;
          $rootScope.$broadcast("breadcrumbsRefresh");
        },
        push: function(id, item) {
          ensureIdIsRegistered(id);
          data[id].push(item);
          $rootScope.$broadcast("breadcrumbsRefresh");
        },
        get: function(id) {
          ensureIdIsRegistered(id);
          return angular.copy(data[id]);
        },
        setLastIndex: function(id, idx) {
          ensureIdIsRegistered(id);
          if (data[id].length > 1 + idx) {
            data[id].splice(1 + idx, data[id].length - idx);
          }
        }
      };
    }
  ]);

}).call(this);
(function() {
  angular.module('sc.ganalytics', []).service("SCGoogleAnalyticsService", function() {
    return {
      registerPageChange: function() {
        if (typeof _gaq !== "undefined" && _gaq !== null) {
          if (arguments[0]) {
            return _gaq.push(['_trackPageview', arguments[0]]);
          } else {
            return _gaq.push(['_trackPageview']);
          }
        }
      }
    };
  });

}).call(this);
(function() {
  angular.module("sc.commons.services.html5support", []).service("$html5support", [
    function() {
      var i, inputType, _i, _len, _ref;
      this.input = {};
      i = document.createElement('input');
      _ref = ["search", "number", "range", "color", "tel", "url", "email", "date", "month", "week", "time", "datetime", "datetime-local"];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        inputType = _ref[_i];
        i.setAttribute('type', inputType);
        this.input[inputType] = i.type === inputType;
      }
      return this;
    }
  ]);

}).call(this);
(function() {
  angular.module('sc.noticias').factory('NoticiaService', [
    'NoticiaResource', function(Noticia) {
      var noticias;
      noticias = {
        perPage: 5,
        pagina: 1,
        totalItens: null,
        loading: false,
        loaded: false,
        lista: [],
        carregarPagina: function(pagina) {
          this.pagina = pagina;
          return this.list();
        },
        list: function() {
          if (this.loading) {
            return;
          }
          this.loading = true;
          return Noticia.list({
            pagina: this.pagina
          }, (function(_this) {
            return function(data) {
              _this.loaded = true;
              _this.loading = false;
              _this.totalItens = data.total_itens;
              _this.pagina = data.pagina;
              _this.perPage = data.per_page;
              return _this.lista = data.noticias;
            };
          })(this), (function(_this) {
            return function(response) {
              return _this.loading = false;
            };
          })(this));
        },
        show: function(slug, success, failure) {
          var failureCallback, successCallback;
          failure || (failure = angular.noop);
          success || (success = angular.noop);
          if (this.loading) {
            return;
          }
          successCallback = (function(_this) {
            return function(data) {
              _this.loading = false;
              return success(data);
            };
          })(this);
          failureCallback = (function(_this) {
            return function(response) {
              _this.loading = false;
              return failure(response);
            };
          })(this);
          this.loading = true;
          return Noticia.show(slug, successCallback, failureCallback);
        }
      };
      noticias.list();
      return noticias;
    }
  ]);

}).call(this);
(function() {
  angular.module("sc.commons.services.notifications", []).factory("$scNotifications", [
    "$rootScope", function($rootScope) {
      var addNotification, notifications, notificationsService;
      notifications = {
        STICKY: [],
        ROUTE_CURRENT: [],
        ROUTE_NEXT: []
      };
      notificationsService = {};
      addNotification = function(notificationsArray, notificationObj) {
        if (!angular.isObject(notificationObj)) {
          throw new Error("Only object can be added to the notification service");
        }
        notificationsArray.push(notificationObj);
        return notificationObj;
      };
      $rootScope.$on("$routeChangeStart", function(event, current, last) {
        notifications.ROUTE_CURRENT.length = 0;
        notifications.ROUTE_CURRENT = angular.copy(notifications.ROUTE_NEXT);
        notifications.ROUTE_NEXT.length = 0;
      });
      notificationsService.getCurrent = function() {
        return [].concat(notifications.STICKY, notifications.ROUTE_CURRENT);
      };
      notificationsService.pushSticky = function(notification) {
        return addNotification(notifications.STICKY, notification);
      };
      notificationsService.pushForCurrentRoute = function(notification) {
        return addNotification(notifications.ROUTE_CURRENT, notification);
      };
      notificationsService.pushForNextRoute = function(notification) {
        return addNotification(notifications.ROUTE_NEXT, notification);
      };
      notificationsService.remove = function(notification) {
        angular.forEach(notifications, function(notificationsByType) {
          var idx;
          idx = notificationsByType.indexOf(notification);
          if (idx > -1) {
            notificationsByType.splice(idx, 1);
          }
        });
      };
      notificationsService.removeAll = function() {
        angular.forEach(notifications, function(notificationsByType) {
          notificationsByType.length = 0;
        });
      };
      return notificationsService;
    }
  ]);

}).call(this);
(function() {
  var __slice = [].slice;

  angular.module("sc.commons.carousel", ['sc.commons.factories.toggle']).service("$scCarousel", [
    'scToggle', '$filter', '$scTarget', function($toggler, $filter, $scTarget) {
      var data;
      data = {};
      data.orderBy = $filter('orderBy');
      data.list = [];
      data.activeIdx = null;
      data.toggler = new $toggler({
        onOpen: function() {
          var _ref;
          escurecerTela();
          if (typeof removerBarraDeRolagemDoBody === "function") {
            removerBarraDeRolagemDoBody();
          }
          _ref = [this.closed, this.opened].concat(__slice.call(arguments)), data.closed = _ref[0], data.opened = _ref[1], data.list = _ref[2], data.activeIdx = _ref[3];
          $scTarget.focus(data, 'carousel.navBoard', false, 0);
        },
        onClose: function() {
          var _ref;
          clarearTela();
          devolverBarraDeRolagemDoBody();
          _ref = [this.closed, this.opened, [], null], data.closed = _ref[0], data.opened = _ref[1], data.list = _ref[2], data.activeIdx = _ref[3];
        }
      });
      data.open = function(list, activeIdx) {
        var _ref;
        return (_ref = data.toggler).open.apply(_ref, arguments);
      };
      data.close = function() {
        return data.toggler.close();
      };
      data.getActive = function() {
        return data.list[data.activeIdx];
      };
      data.getWidth = function(anexo) {
        if (anexo.image == null) {
          data.loadImage(anexo);
        }
        if (anexo.image.width) {
          return anexo.image.width + 'px';
        } else {
          return 'auto';
        }
      };
      data.loadImage = function(anexo) {
        if (anexo.image != null) {
          return;
        }
        anexo.image = new Image();
        return anexo.image.src = anexo.url;
      };
      return data;
    }
  ]).directive("scCarousel", [
    "$scCarousel", function($carousel) {
      return {
        link: function(scope, elem, attr) {
          scope.carousel = $carousel;
          scope.navigate = function(event) {
            var idx, keyCode, len;
            keyCode = event.which || event.keyCode;
            idx = scope.carousel.activeIdx;
            len = scope.carousel.list.length;
            switch (keyCode) {
              case keyMap.ARROW.LEFT:
                return scope.carousel.activeIdx = (idx ? idx : len) - 1;
              case keyMap.ARROW.RIGHT:
                return scope.carousel.activeIdx = (idx + 1) % len;
              case keyMap.ESC:
                scope.carousel.close();
                return event.stopPropagation();
            }
          };
          elem.show();
        }
      };
    }
  ]);

}).call(this);
(function() {
  angular.module("sc.page.settings", []).provider('$scPageSettings', [
    function() {
      var $scPageSettingsProvider;
      $scPageSettingsProvider = {
        $get: [
          function() {
            return {
              updateFromUrlParams: function(url, onComplete) {
                return scPageSystem.updatePageSettingsFromServer(url, onComplete);
              }
            };
          }
        ]
      };
      return $scPageSettingsProvider;
    }
  ]);

}).call(this);
(function() {
  angular.module("sc.timezone", []).provider('$scTimezone', [
    function() {
      var $scTimezoneProvider;
      $scTimezoneProvider = {
        $get: [
          function() {
            return scTimezone;
          }
        ]
      };
      return $scTimezoneProvider;
    }
  ]);

}).call(this);
(function() {
  angular.module("sc.commons.scTopMessages", ['sc.commons.factories.toggle']).service("scTopMessages", [
    'scToggle', function($toggler) {
      var data;
      data = {};
      data.toggler = new $toggler;
      data.messages = [];
      data.close = function() {
        data.messages = [];
        return data.toggler.close();
      };
      data.open = function(messages) {
        if (typeof messages === "string") {
          messages = [messages];
        }
        data.messages = messages;
        return data.toggler.open();
      };
      return data;
    }
  ]);

}).call(this);
(function() {
  angular.module("sc.websocket", []).provider('$scWebSocket', function() {
    this.$get = function() {
      var scopes, _chain, _name;
      scopes = {};
      _chain = function(parent, scope, channel) {
        return {
          scope: function(scope) {
            return parent.scope(scope);
          },
          subscribe: function(channel) {
            if (scope && channel) {
              return parent.subscribe(scope, channel);
            } else {
              throw new Error('Wrong number of arguments');
            }
          },
          on: function() {
            if (scope && channel && (arguments.length === 2 || arguments.length === 3)) {
              return parent.on(scope, channel, arguments[0], arguments[1], arguments[2]);
            } else {
              throw new Error('Wrong number of arguments');
            }
          },
          talk: function() {
            if (scope && channel && (arguments.length === 2 || arguments.length === 3)) {
              return parent.talk(scope, channel, arguments[0], arguments[1], arguments[2]);
            } else {
              throw new Error('Wrong number of arguments');
            }
          }
        };
      };
      _name = function(channel, action) {
        return "" + channel + "-" + action;
      };
      return {
        scope: function(scope) {
          if (!scopes[scope.$id]) {
            scopes[scope.$id] = {
              obj: scope,
              channels: []
            };
            scope.$on('$destroy', function() {
              var name, _i, _len, _ref;
              _ref = scopes[scope.$id].channels;
              for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                name = _ref[_i];
                channelStopListen(name);
              }
              return delete scopes[scope.$id];
            });
          }
          return _chain(this, scope);
        },
        subscribe: function(scope, channel) {
          this.scope(scope);
          return _chain(this, scope, channel);
        },
        on: function(scope, channel, action, callback, reconnectCallback) {
          var callbackFn, name, reconnectCallbackFn;
          this.subscribe(scope, channel);
          name = _name(channel, action);
          if (scopes[scope.$id].channels.indexOf(name) === -1) {
            scopes[scope.$id].channels.push(name);
            callbackFn = function(data) {
              var e, jsonData;
              try {
                jsonData = JSON.parse(data);
              } catch (_error) {
                e = _error;
                jsonData = data;
              }
              return scope.$apply(function() {
                return callback(jsonData);
              });
            };
            if (reconnectCallback) {
              reconnectCallbackFn = function(data) {
                var e, jsonData;
                try {
                  jsonData = JSON.parse(data);
                } catch (_error) {
                  e = _error;
                  jsonData = data;
                }
                return scope.$apply(function() {
                  return reconnectCallback(jsonData);
                });
              };
            }
            channelListen(name, {
              onData: callbackFn,
              onReconnect: reconnectCallbackFn
            });
          }
          return _chain(this, scope, channel);
        },
        talk: function(scope, channel, action, msg, includeMe) {
          var fn;
          fn = includeMe ? channelTalkInclusiveMe : channelTalk;
          fn(_name(channel, action), msg);
          return _chain(this, scope, channel);
        }
      };
    };
    return this;
  });

}).call(this);
(function() {
  angular.module('sc.seo', []).provider("$seo", function() {
    return {
      $get: function() {
        return this;
      },
      data: {},
      update: function(obj) {
        if (obj == null) {
          obj = {};
        }
        this.data = {};
        if (obj.title) {
          this.data.title = obj.title;
        }
        if (obj.description) {
          this.data.description = obj.description;
        }
        if (obj.image) {
          this.data.image = obj.image;
        }
        if (obj.url) {
          return this.data.url = obj.url;
        }
      }
    };
  });

}).call(this);
