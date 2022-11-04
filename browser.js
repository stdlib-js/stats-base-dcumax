// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e,r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var l,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||f.call(e,r)?(l=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,r,t.get),p&&a&&a.call(e,r,t.set),e};var l=e;function c(e){return e!=e}var _=Number.POSITIVE_INFINITY;function p(e){return 0===e&&1/e===_}function d(e,r,t,n,o){var i,a,u,f,l;if(e<=0)return n;if(u=o<0?(1-e)*o:0,i=r[a=t<0?(1-e)*t:0],n[u]=i,u+=o,l=1,!1===c(i))for(;l<e;l++){if(c(f=r[a+=t])){i=f;break}(f>i||f===i&&p(f))&&(i=f),n[u]=i,u+=o}if(c(i))for(;l<e;l++)n[u]=i,u+=o;return n}return l(d,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,r,t,n,o,i,a){var u,f,l,_,d;if(e<=0)return o;if(l=a,u=r[f=n],o[l]=u,l+=i,d=1,!1===c(u))for(;d<e;d++){if(c(_=r[f+=t])){u=_;break}(_>u||_===u&&p(_))&&(u=_),o[l]=u,l+=i}if(c(u))for(;d<e;d++)o[l]=u,l+=i;return o}}),d},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).dcumax=r();
//# sourceMappingURL=browser.js.map
