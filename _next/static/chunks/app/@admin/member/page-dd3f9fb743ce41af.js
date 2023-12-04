(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[289],{8683:function(e,t){var r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var i=a.apply(null,r);i&&e.push(i)}}else if("object"===o){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0!==(r=(function(){return a}).apply(t,[]))&&(e.exports=r)}()},8560:function(e,t,r){Promise.resolve().then(r.bind(r,345))},345:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return T}});var n=r(9268),a=r(5474),o=r(666),i=r(6653);async function s(){return await (0,a.gw)(2e3),{code:o.mI,message:"Mock",data:[{id:1,userId:"userId1",lastLoginTime:"1687622400",nickName:"nickName",updateTime:"1687622400",createTime:"1687622400",operator:"operator"},{id:2,userId:"userId2",lastLoginTime:"1687622400",nickName:"nickName",updateTime:"1687622400",createTime:"1687622400",operator:"operator"}]}}async function c(){if(o.M7)return await s();let e=await fetch("".concat(o.FH,"/management/members"),{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat((0,i.L)())}});if(!e.ok)throw Error("HTTP error! status: ".concat(e.status));return await e.json()}async function u(){return await (0,a.gw)(2e3),{code:o.mI,message:"mock",data:{id:1,userId:"userId1",lastLoginTime:"1687622400",nickName:"nickName",updateTime:"1687622400",createTime:"1687622400",operator:"operator"}}}async function l(e){if(o.M7)return await u();let t=await fetch("".concat(o.FH,"/management/member/").concat(e),{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat((0,i.L)())}});if(!t.ok)throw Error("HTTP error! status: ".concat(t.status));return await t.json()}async function d(){return await (0,a.gw)(2e3),{code:o.mI,message:"mock"}}async function m(e){if(o.M7)return await d();let t=await fetch("".concat(o.FH,"/management/member/").concat(e),{method:"DELETE",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat((0,i.L)())}});if(!t.ok)throw Error("HTTP error! status: ".concat(t.status));return await t.json()}var f=r(6831),p=r(9748),h=r(1263),y=r(7007),g=r(4415),v=r(1904),w=r(9153),_=r(6006),k=r(7638),I=r.n(k),b=r(158);let x=(0,_.memo)(()=>{let[e,t]=(0,_.useState)(""),r=(0,_.useCallback)(async()=>{try{if(e){let t=await l(e);if((null==t?void 0:t.code)!==o.mI)return b.Z.error(null==t?void 0:t.message),[];return[t.data]}{let e=await c();if((null==e?void 0:e.code)!==o.mI)return b.Z.error(null==e?void 0:e.message),[];return e.data}}catch(e){return[]}},[e]),{loading:i,run:s,data:u}=(0,v.Q)(r,{manual:!1}),[d,k]=(0,_.useState)(!1),[x,T]=(0,_.useState)(),[j,E]=(0,_.useState)(!1),S=(0,_.useCallback)(async()=>{E(!0);try{if(x){let e=await m(x);if((null==e?void 0:e.code)!==o.mI)throw b.Z.error(null==e?void 0:e.message),Error("deleteManagementMember failed");b.Z.success("成功")}}catch(e){}E(!1),k(!1),await s()},[x,s]),C=(0,_.useCallback)(async()=>{T(void 0),k(!1)},[]),N=(0,_.useMemo)(()=>[{dataIndex:"id",title:"ID"},{dataIndex:"userId",title:"帳號"},{dataIndex:"nickName",title:"暱稱"},{dataIndex:"createTime",title:"註冊時間",render:e=>(0,a.rn)(e)},{dataIndex:"lastLoginTime",title:"最後登入時間",render:e=>(0,a.rn)(e)},{dataIndex:"operator",title:"操作者"},{dataIndex:"updateTime",title:"操作時間",render:e=>(0,a.rn)(e)},{title:"操作",render:(e,t)=>{let{id:r}=t;return(0,n.jsx)(f.Z,{onClick:()=>{k(!0),T(r)},looks:w.L.danger,children:"刪除"})}}],[]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p.Z,{onSubmit:s,children:(0,n.jsx)(h.Z,{placeholder:"輸入帳號或ID",value:e,onChange:t})}),(0,n.jsx)(g.Z,{className:I().table,columns:N,dataSource:u,loading:i}),(0,n.jsx)(y.Z,{open:d,maskClosable:!1,onClose:()=>{k(!1)},children:(0,n.jsxs)("div",{className:I().deleteModalContent,children:[(0,n.jsx)("p",{children:"是否確認刪除？"}),(0,n.jsxs)("div",{children:[(0,n.jsx)(f.Z,{looks:w.L.danger,loading:j,onClick:S,children:"確定"}),(0,n.jsx)(f.Z,{disabled:j,onClick:C,children:"取消"})]})]})})]})});x.displayName="MemberPage";var T=x},9748:function(e,t,r){"use strict";r.d(t,{S:function(){return n}});var n,a=r(9268),o=r(6006),i=r(9924),s=r.n(i),c=r(8683),u=r.n(c),l=r(5474),d=r(2624);(n||(n={})).horizontal="horizontal";let m=(0,o.memo)(e=>{let{layout:t,onSubmit:r,children:i}=e,[c,m]=(0,o.useState)(!1);return(0,a.jsx)("form",{className:u()({[s().horizontal]:t===n.horizontal}),onSubmit:async e=>{if(e.preventDefault(),!c&&r){m(!0);try{r instanceof l.sG?await r():r()}catch(e){e instanceof Error?(0,l.cM)(e.message,d.L.console):(0,l.cM)(e,d.L.console)}finally{m(!1)}}},children:i})});m.displayName="Form",t.Z=m},7638:function(e){e.exports={table:"page_table__17I_j",deleteModalContent:"page_deleteModalContent__Ei49A"}},9924:function(e){e.exports={horizontal:"Form_horizontal___Dh6K"}},3177:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(6006),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,o={},u=null,l=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,n)&&!c.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:a,type:e,key:u,ref:l,props:o,_owner:s.current}}t.Fragment=o,t.jsx=u,t.jsxs=u},9268:function(e,t,r){"use strict";e.exports=r(3177)},6462:function(e,t,r){"use strict";let n;r.d(t,{Z:function(){return u}});let a="undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var o={randomUUID:a};let i=new Uint8Array(16);function s(){if(!n&&!(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(i)}let c=[];for(let e=0;e<256;++e)c.push((e+256).toString(16).slice(1));var u=function(e,t,r){if(o.randomUUID&&!t&&!e)return o.randomUUID();e=e||{};let n=e.random||(e.rng||s)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(let e=0;e<16;++e)t[r+e]=n[e];return t}return function(e,t=0){return(c[e[t+0]]+c[e[t+1]]+c[e[t+2]]+c[e[t+3]]+"-"+c[e[t+4]]+c[e[t+5]]+"-"+c[e[t+6]]+c[e[t+7]]+"-"+c[e[t+8]]+c[e[t+9]]+"-"+c[e[t+10]]+c[e[t+11]]+c[e[t+12]]+c[e[t+13]]+c[e[t+14]]+c[e[t+15]]).toLowerCase()}(n)}}},function(e){e.O(0,[550,320,253,488,744],function(){return e(e.s=8560)}),_N_E=e.O()}]);