/*
 SeaJS v2.0.0-beta | seajs.org/LICENSE.md
*/
'use strict';(function(t,p){function B(b){return"function"===typeof b}function J(b){for(var c={},a=[],d=0,e=b.length;d<e;d++){var g=b[d];1!==c[g]&&(c[g]=1,a.push(g))}return a}function C(b,c,a){x(b,c);return c[a]}function Q(b){b=b.match(ea);return(b?b[0]:".")+"/"}function K(b,c){if(!b)return"";var a=b,d=l.alias,e;if(e=d)if(e=D.call(d,a)){e=a;var g=e.charAt(0);e=-1===e.indexOf("://")&&"."!==g&&"/"!==g}e&&(a=d[a]);var f=l.vars;f&&-1<a.indexOf("{")&&(a=a.replace(fa,function(a,b){return D.call(f,b)?f[b]:
"{"+b+"}"}));d=c||E;0<a.indexOf("://")||0===a.indexOf("//")||(0===a.indexOf("./")||0===a.indexOf("../")?(0===a.indexOf("./")&&(a=a.substring(2)),a=Q(d)+a):a="/"===a.charAt(0)&&"/"!==a.charAt(1)?d.match(ga)[1]+a:l.base+a);7<a.lastIndexOf("//")&&(a=a.replace(ha,"$1/"));if(-1!==a.indexOf(".")){d=a.split("/");e=[];for(var m=0,h=d.length;m<h;m++)if(g=d[m],".."===g){if(0===e.length)throw Error("Invalid path: "+a);e.pop()}else"."!==g&&e.push(g);a=e.join("/")}"#"===a.charAt(a.length-1)?a=a.slice(0,-1):ia.test(a)||
(a+=".js");a=a.replace(":80/","/");d=l.map||[];m=a;if(e=d.length)for(g=0;g<e&&!(m=d[g],m=B(m)?m(a)||a:a.replace(m[0],m[1]),m!==a);g++);return m}function R(b,c){var a=b.sheet,d;if(S)a&&(d=!0);else if(a)try{a.cssRules&&(d=!0)}catch(e){"NS_ERROR_DOM_SECURITY_ERR"===e.name&&(d=!0)}setTimeout(function(){d?c():R(b,c)},20)}function ja(){if(F)return F;if(G&&"interactive"===G.readyState)return G;for(var b=y.getElementsByTagName("script"),c=b.length-1;0<=c;c--){var a=b[c];if("interactive"===a.readyState)return G=
a}}function z(b,c){this.uri=b;this.status=c||k.INITIALIZED;this.dependencies=[];this.waitings=[]}function A(b,c){if(u(b)){for(var a=[],d=0,e=b.length;d<e;d++)a[d]=A(b[d],c);return a}a={id:b,refUri:c,id2Uri:K};d=C("resolve",a,"id");return a.uri||K(d,c)}function T(b,c,a){function d(a){a&&a.status<k.LOADED&&(a.status=k.LOADED);0===--e&&c()}a=a||{};b=a.filtered?b:U(b);if(0===b.length)c();else{x("load",b);for(var e=a=b.length,g=0;g<a;g++)(function(a){function b(){if(c.status<k.SAVED)d();else if(V(c)){var a=
v;a.push(a[0]);W("Circular dependencies: "+a.join(" --\x3e "));v.length=0;d()}else a=c.waitings=U(c.dependencies),0===a.length?d(c):T(a.slice(),function(){d(c)},{filtered:!0})}var c=q[a];if(c.status<k.SAVED){var e=function(){delete L[g];M[g]=!0;H&&(X(a,H),H=null);var b,c=I[g];for(delete I[g];b=c.shift();)b()};q[a].status=k.FETCHING;var g=C("fetch",{uri:a,fetchedList:M},"requestUri")||a;if(M[g])b();else if(L[g])I[g].push(b);else{L[g]=!0;I[g]=[b];var f=l.charset,h={uri:a,requestUri:g,callback:e,charset:f};
if(!C("request",h,"requested")){var h=h.requestUri,j=ka.test(h),r=s.createElement(j?"link":"script");if(f&&(f=B(f)?f(h):f))r.charset=f;var n=r;j&&(S||!("onload"in n))?setTimeout(function(){R(n,e)},1):n.onload=n.onerror=n.onreadystatechange=function(){la.test(n.readyState)&&(n.onload=n.onerror=n.onreadystatechange=null,!j&&!l.debug&&y.removeChild(n),n=p,e())};j?(r.rel="stylesheet",r.href=h):(r.async=!0,r.src=h);F=r;Y?y.insertBefore(r,Y):y.appendChild(r);F=null}}}else b()})(b[g])}}function ma(b,c,a){var d=
arguments.length;1===d?(a=b,b=p):2===d&&(a=c,c=p,u(b)&&(c=b,b=p));if(!u(c)&&B(a)){var d=a.toString(),e=[],g;Z.lastIndex=0;for(d=d.replace(na,"");g=Z.exec(d);)g[2]&&e.push(g[2]);c=J(e)}var d={id:b,dependencies:c,factory:a},f;!b&&s.attachEvent&&((e=ja())&&e.src?(f=e.hasAttribute?e.src:e.getAttribute("src",4),f=C("derived",{uri:f},"uri")):W("Failed to derive: "+a));(f=b?A(b):f)?X(f,d):H=d}function X(b,c){var a=q[b]||(q[b]=new z(b,void 0));a.status<k.SAVED&&(a.id=c.id||b,a.dependencies=A(c.dependencies||
[],b),a.factory=c.factory,a.status=k.SAVED,x("saved",a))}function $(b){function c(a){a=q[c.resolve(a)];if(a===p)return null;a.parent=b;return $(a)}if(!b)return null;if(b.status>=k.COMPILING)return b.exports;x("compile",b);if(b.status<k.LOADED&&b.exports===p)return null;b.status=k.COMPILING;c.async=function(a,d){b.load(a,d);return c};c.resolve=function(a){return A(a,b.uri)};var a=b.factory,d=a===p?b.exports:a;B(a)&&(d=a(c,b.exports={},b));b.exports=d===p?b.exports:d;b.status=k.COMPILED;x("compiled",
b);return b.exports}function U(b){for(var c=[],a=0,d=b.length;a<d;a++){var e=b[a];e&&(q[e]||(q[e]=new z(e,void 0))).status<k.LOADED&&c.push(e)}return c}function V(b){var c=b.waitings;if(0===c.length)return!1;v.push(b.uri);b=c.concat(v);if(J(b).length<b.length){b=v[0];for(var a=c.length-1;0<=a;a--)if(c[a]===b){c.splice(a,1);break}return!0}for(b=0;b<c.length;b++)if(V(q[c[b]]))return!0;v.pop();return!1}function aa(b){var c=l.preload,a=c.length;a?ba.load(c.splice(0,a),function(){aa(b)}):b()}function N(b){for(var c in b){var a=
b[c];if(D.call(b,c)&&a!==p){if("plugins"===c){c="preload";var d=[],e=void 0;for(u(a)||(a=[a]);e=a.shift();)d.push(ca+"plugin-"+e);a=d}if((d=l[c])&&/^(?:alias|vars)$/.test(c))for(var f in a)D.call(a,f)&&(d[f]=a[f]);else u(d)&&/^(?:map|preload)$/.test(c)&&(a=d.concat(a)),l[c]=a,"base"===c&&(a=l.base,0<a.indexOf("://")||0===a.indexOf("//")||(l.base=K(("/"===a.charAt(0)&&"/"!==a.charAt(1)?"":"./")+a+("/"===a.charAt(a.length-1)?"":"/"))))}}return h}if(!t.seajs){var h=t.seajs={version:"2.0.0-beta"},D={}.hasOwnProperty,
u=Array.isArray||function(b){return b instanceof Array},W=h.log=function(b,c){var a=t.console;if(a&&(c||l.debug))(a[c]||a.log).call(a,b)},w={};h.on=function(b,c){if(!c)return h;(w[b]||(w[b]=[])).push(c);return h};h.off=function(b,c){if(!b&&!c)return w={},h;var a=w[b];if(a)if(c)for(var d=a.length-1;0<=d;d--)a[d]===c&&a.splice(d,1);else delete w[b];return h};var x=h.emit=function(b,c){var a=w[b],d;if(a)for(a=a.slice();d=a.shift();)d(c);return h},ea=/[^?]*(?=\/.*$)/,ha=/([^:\/])\/\/+/g,ia=/\?|\.(?:css|js)$|\/$/,
ga=/^(.*?:\/\/.*?)(?:\/|$)/,fa=/{([^{}]+)}/g,s=document,j=t.location,E,f=j.pathname;"/"!==f.charAt(0)&&(f="/"+f);f=j.protocol+"//"+j.host+f;-1<f.indexOf("\\")&&(f=f.replace(/\\/g,"/"));E=f;if(!(f=s.getElementById("seajs-node")))f=s.getElementsByTagName("script"),f=f[f.length-1]||s.createElement("script");var ca=Q((f.hasAttribute?f.src:f.getAttribute("src",4))||E),y=s.getElementsByTagName("head")[0]||s.documentElement,Y=y.getElementsByTagName("base")[0],ka=/\.css(?:\?|$)/i,la=/^(?:loaded|complete|undefined)$/,
F,G,S=536>Number(navigator.userAgent.replace(/.*AppleWebKit\/(\d+)\..*/,"$1")),Z=/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*(["'])(.+?)\1\s*\)/g,na=/\\\\/g,q=h.cache={},k=z.STATUS={INITIALIZED:1,FETCHING:2,SAVED:3,LOADED:4,COMPILING:5,COMPILED:6};z.prototype.load=function(b,c){var a=A(u(b)?b:[b],this.uri);T(a,function(){for(var b=[],e=0,f=a.length;e<f;e++)b[e]=$(q[a[e]]);c&&c.apply(t,b)});return this};var L={},M=
{},I={},H=null,v=[],ba=new z(E,k.COMPILED);h.use=function(b,c){aa(function(){ba.load(b,c)});return h};t.define=ma;var O=ca,da=O.match(/^(.+?\/)(?:seajs\/)+\d[^/]+\/$/);da&&(O=da[1]);var l=N.data={base:O,charset:"utf-8",preload:[]};h.config=N;var P=[],j=j.search.replace(/(seajs-\w+)(&|$)/g,"$1=1$2"),j=j+(" "+s.cookie);j.replace(/seajs-(\w+)=1/g,function(b,c){P.push(c)});j=P.length?J(P):p;N({plugins:j});j=f.getAttribute("data-config");f=f.getAttribute("data-main");j&&l.preload.push(j);f&&h.use(f)}})(this);
//@ sourceMappingURL=sea.js.map