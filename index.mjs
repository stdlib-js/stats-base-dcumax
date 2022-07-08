// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-positive-zero@esm/index.mjs";function t(r,t,i,n,a){var f,o,d,m,l;if(r<=0)return n;if(d=a<0?(1-r)*a:0,f=t[o=i<0?(1-r)*i:0],n[d]=f,d+=a,l=1,!1===e(f))for(;l<r;l++){if(m=t[o+=i],e(m)){f=m;break}(m>f||m===f&&s(m))&&(f=m),n[d]=f,d+=a}if(e(f))for(;l<r;l++)n[d]=f,d+=a;return n}function i(r,t,i,n,a,f,o){var d,m,l,p,j;if(r<=0)return a;if(l=o,d=t[m=n],a[l]=d,l+=f,j=1,!1===e(d))for(;j<r;j++){if(p=t[m+=i],e(p)){d=p;break}(p>d||p===d&&s(p))&&(d=p),a[l]=d,l+=f}if(e(d))for(;j<r;j++)a[l]=d,l+=f;return a}r(t,"ndarray",i);export{t as default,i as ndarray};
//# sourceMappingURL=index.mjs.map
