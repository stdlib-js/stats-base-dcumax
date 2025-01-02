"use strict";var c=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var m=c(function(D,p){
var x=require('@stdlib/math-base-assert-is-nan/dist'),E=require('@stdlib/math-base-assert-is-positive-zero/dist');function O(e,a,s,f,i,n,q){var r,o,u,v,t;if(e<=0)return i;if(o=f,u=q,r=a[o],i[u]=r,u+=n,t=1,x(r)===!1)for(t;t<e;t++){if(o+=s,v=a[o],x(v)){r=v;break}(v>r||v===r&&E(v))&&(r=v),i[u]=r,u+=n}if(x(r))for(t;t<e;t++)i[u]=r,u+=n;return i}p.exports=O
});var y=c(function(F,l){
var j=require('@stdlib/strided-base-stride2offset/dist'),P=m();function Z(e,a,s,f,i){var n=j(e,s),q=j(e,i);return P(e,a,s,n,f,i,q)}l.exports=Z
});var b=c(function(G,_){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=y(),h=m();g(R,"ndarray",h);_.exports=R
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=b(),d,k=z(w(__dirname,"./native.js"));A(k)?d=B:d=k;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
