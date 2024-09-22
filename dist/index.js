"use strict";var c=function(v,f){return function(){return f||v((f={exports:{}}).exports,f),f.exports}};var j=c(function(F,p){
var x=require('@stdlib/math-base-assert-is-nan/dist'),E=require('@stdlib/math-base-assert-is-positive-zero/dist');function O(v,f,q,n,u){var a,s,r,i,e;if(v<=0)return n;if(q<0?s=(1-v)*q:s=0,u<0?r=(1-v)*u:r=0,a=f[s],n[r]=a,r+=u,e=1,x(a)===!1)for(e;e<v;e++){if(s+=q,i=f[s],x(i)){a=i;break}(i>a||i===a&&E(i))&&(a=i),n[r]=a,r+=u}if(x(a))for(e;e<v;e++)n[r]=a,r+=u;return n}p.exports=O
});var k=c(function(G,b){
var m=require('@stdlib/math-base-assert-is-nan/dist'),d=require('@stdlib/math-base-assert-is-positive-zero/dist');function g(v,f,q,n,u,a,s){var r,i,e,o,t;if(v<=0)return u;if(i=n,e=s,r=f[i],u[e]=r,e+=a,t=1,m(r)===!1)for(t;t<v;t++){if(i+=q,o=f[i],m(o)){r=o;break}(o>r||o===r&&d(o))&&(r=o),u[e]=r,e+=a}if(m(r))for(t;t<v;t++)u[e]=r,e+=a;return u}b.exports=g
});var Z=c(function(H,R){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),P=j(),w=k();h(P,"ndarray",w);R.exports=P
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=Z(),l,_=A(z(__dirname,"./native.js"));B(_)?l=C:l=_;module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
