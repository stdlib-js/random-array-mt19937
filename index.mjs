// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/array-typed-real-ctors@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-filled-by@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-nullary@v0.1.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/array-typed-real-float-dtypes@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/array-typed-real-dtypes@v0.1.0-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.0-esm/index.mjs";var a="float64",j="float64",h=l(),g=m();function c(e,t,r){if(!y(t))return new TypeError(p("1eJ2V,FD",t));if(0===r){if(f(t,"idtype")&&(e.idtype=t.idtype,h.indexOf(e.idtype)<0))return new TypeError(p("1eJ2X,3g,4S,GD,Gg,Jm","idtype",h.join('", "'),e.idtype));if(f(t,"ndtype")&&(e.ndtype=t.ndtype,g.indexOf(e.ndtype)<0))return new TypeError(p("1eJ2X,3g,4S,GD,Gg,Jm","ndtype",g.join('", "'),e.ndtype))}else if(1===r&&f(t,"dtype")){if(e.dtype=t.dtype,h.indexOf(e.dtype)<0)return new TypeError(p("1eJ2X,3g,4S,GD,Gg,Jm","dtype",h.join('", "'),e.dtype))}else if(f(t,"dtype")&&(e.dtype=t.dtype,g.indexOf(e.dtype)<0))return new TypeError(p("1eJ2X,3g,4S,GD,Gg,Jm","dtype",g.join('", "'),e.dtype));return null}function u(){var m,l,y,f,h,g;if(y={idtype:a,ndtype:j},f=u,0===(l=arguments.length))h=s;else if(1===l&&(m=arguments[0],h=s.factory(m),g=c(y,m,0)))throw g;return r(f,"seed",b),r(f,"seedLength",x),n(f,"state",J,E),r(f,"stateLength",G),r(f,"byteLength",w),e(f,"PRNG",h),e(f,"normalized",v),f;function u(e,r){var n,s,m,l;if(!t(e))throw new TypeError(p("1eJ2d,MG",e));if(l={},arguments.length>1&&(s=c(l,r,1)))throw s;return"generic"===(m=l.dtype||y.idtype)?i(e,h):(n=new(d(m))(e),o([n],[e],[1],h),n)}function v(e,r){var n,s,m,l;if(!t(e))throw new TypeError(p("1eJ2d,MG",e));if(l={},arguments.length>1&&(s=c(l,r,2)))throw s;return"generic"===(m=l.dtype||y.ndtype)?i(e,h.normalized):(n=new(d(m))(e),o([n],[e],[1],h.normalized),n)}function b(){return f.PRNG.seed}function x(){return f.PRNG.seedLength}function G(){return f.PRNG.stateLength}function w(){return f.PRNG.byteLength}function J(){return f.PRNG.state}function E(e){f.PRNG.state=e}}h.push("generic"),g.push("generic");var v=u();e(v,"factory",u);export{v as default,u as factory};
//# sourceMappingURL=index.mjs.map
