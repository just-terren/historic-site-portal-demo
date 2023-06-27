(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[289],{8683:function(e,t){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var i=a.apply(null,n);i&&e.push(i)}}else if("object"===o){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0!==(n=(function(){return a}).apply(t,[]))&&(e.exports=n)}()},8560:function(e,t,n){Promise.resolve().then(n.bind(n,5590))},3377:function(e,t,n){"use strict";n.d(t,{L:function(){return o},c:function(){return s}});var r=n(956),a=n(2105);function o(){return localStorage.getItem(a.px)}async function i(){return await (0,r.gw)(2e3),{code:"code",message:"Mock",result:{nickName:"Mock",token:"Mock"}}}async function s(e,t){if(a.M7)return await i();let n=await fetch("".concat(a.FH,"/member/login"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:e,password:t})});if(!n.ok)throw Error("HTTP error! status: ".concat(n.status));return await n.json()}},5590:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(9268),a=n(956),o=n(2105),i=n(3377);async function s(){return await (0,a.gw)(2e3),{code:"Mock",message:"Mock",result:[{id:"1",userId:"userId1",lastLoginTime:"1687622400",nickName:"nickName",updateTime:"1687622400",createTime:"1687622400",operator:"operator"},{id:"2",userId:"userId2",lastLoginTime:"1687622400",nickName:"nickName",updateTime:"1687622400",createTime:"1687622400",operator:"operator"}]}}async function c(){if(o.M7)return await s();let e=await fetch("".concat(o.FH,"/management/members"),{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat((0,i.L)())}});if(!e.ok)throw Error("HTTP error! status: ".concat(e.status));return await e.json()}async function u(){return await (0,a.gw)(2e3),{code:"mock",message:"mock",result:{id:"1",userId:"userId1",lastLoginTime:"1687622400",nickName:"nickName",updateTime:"1687622400",createTime:"1687622400",operator:"operator"}}}async function l(e){if(o.M7)return await u();let t=await fetch("".concat(o.FH,"/management/member/").concat(e),{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat((0,i.L)())}});if(!t.ok)throw Error("HTTP error! status: ".concat(t.status));return await t.json()}async function d(){return await (0,a.gw)(2e3),{code:"mock",message:"mock"}}async function m(e){if(o.M7)return await d();let t=await fetch("".concat(o.FH,"/management/member/").concat(e),{method:"DELETE",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat((0,i.L)())}});if(!t.ok)throw Error("HTTP error! status: ".concat(t.status));return await t.json()}var p=n(5493),f=n(2392),y=n(6917),_=n(9333),h=n(6519),g=n(1904),k=n(4507),b=n(6006),x=n(7638),v=n.n(x);let w=(0,b.memo)(()=>{let[e,t]=(0,b.useState)(""),n=(0,b.useMemo)(()=>[{dataIndex:"id",title:"ID"},{dataIndex:"userId",title:"帳號"},{dataIndex:"nickName",title:"暱稱"},{dataIndex:"createTime",title:"註冊時間",render:e=>(0,a.rn)(e)},{dataIndex:"lastLoginTime",title:"最後登入時間",render:e=>(0,a.rn)(e)},{dataIndex:"operator",title:"操作者"},{dataIndex:"updateTime",title:"操作時間",render:e=>(0,a.rn)(e)},{title:"操作",render:(e,t)=>{let{id:n}=t;return(0,r.jsx)(p.Z,{onClick:()=>{x(!0),j(n)},looks:k.L.danger,children:"刪除"})}}],[]),o=(0,b.useCallback)(async()=>{try{if(e){let t=await l(e);return[t.result]}{let e=await c();return e.result}}catch(e){return[]}},[e]),{loading:i,run:s,data:u}=(0,g.Q)(o,{manual:!1}),[d,x]=(0,b.useState)(!1),[w,j]=(0,b.useState)(""),[S,C]=(0,b.useState)(!1),N=(0,b.useCallback)(async()=>{C(!0);try{await m(w)}catch(e){}C(!1),x(!1),await s()},[w,s]),T=(0,b.useCallback)(async()=>{j(""),x(!1)},[]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f.Z,{onSubmit:s,children:(0,r.jsx)(y.Z,{placeholder:"輸入帳號或ID",value:e,onChange:t})}),(0,r.jsx)(h.Z,{className:v().table,columns:n,dataSource:u,loading:i}),(0,r.jsx)(_.Z,{open:d,maskClosable:!1,onClose:()=>{x(!1)},children:(0,r.jsxs)("div",{className:v().deleteModalContent,children:[(0,r.jsx)("p",{children:"是否確認刪除？"}),(0,r.jsxs)("div",{children:[(0,r.jsx)(p.Z,{looks:k.L.danger,loading:S,onClick:N,children:"確定"}),(0,r.jsx)(p.Z,{disabled:S,onClick:T,children:"取消"})]})]})})]})});w.displayName="MemberPage";var j=w},5493:function(e,t,n){"use strict";var r=n(9268),a=n(6006),o=n(4308),i=n(6361),s=n.n(i),c=n(8683),u=n.n(c),l=n(4507);let d=(0,a.memo)(e=>{let{children:t,loading:n,disabled:a,htmlType:i,onClick:c,looks:d}=e;return(0,r.jsxs)("button",{className:u()(s().button,{[s().primary]:d===l.L.primary,[s().danger]:d===l.L.danger,[s().dark]:d===l.L.dark}),disabled:n||a,onClick:c,type:i,children:[n&&(0,r.jsx)(o.Z,{size:o.v.small})," ",t]})});d.displayName="Button",t.Z=d},2392:function(e,t,n){"use strict";n.d(t,{S:function(){return r}});var r,a=n(9268),o=n(6006),i=n(192),s=n.n(i),c=n(8683),u=n.n(c),l=n(956),d=n(5528);(r||(r={})).horizontal="horizontal";let m=(0,o.memo)(e=>{let{layout:t,onSubmit:n,children:i}=e,[c,m]=(0,o.useState)(!1);return(0,a.jsx)("form",{className:u()({[s().horizontal]:t===r.horizontal}),onSubmit:async e=>{if(e.preventDefault(),!c&&n){m(!0);try{n instanceof l.sG?await n():n()}catch(e){e instanceof Error?(0,l.cM)(e.message,d.L.console):(0,l.cM)(e,d.L.console)}finally{m(!1)}}},children:i})});m.displayName="Form",t.Z=m},6917:function(e,t,n){"use strict";var r=n(9268),a=n(6006),o=n(7394),i=n.n(o);let s=(0,a.memo)((0,a.forwardRef)((e,t)=>{let{type:n,value:o,onChange:s,onKeyDown:c,disabled:u,placeholder:l}=e,[d,m]=(0,a.useState)(o||"");return(0,r.jsx)("input",{className:i().input,type:n,value:d,onChange:e=>{let t=e.target.value;m(t),null==s||s(t)},onKeyDown:c,disabled:u,placeholder:l,ref:t})}));s.displayName="Input",t.Z=s},9333:function(e,t,n){"use strict";var r=n(9268),a=n(6006),o=n(8431),i=n(4674),s=n.n(i),c=n(5493);let u=(0,a.memo)(e=>{let{children:t,open:n=!1,maskClosable:a=!0,onClose:i}=e;return n&&(0,o.createPortal)((0,r.jsx)("div",{className:s().backgroundMask,onClick:a?i:void 0,children:(0,r.jsx)("div",{className:s().modal,onClick:e=>{e.stopPropagation()},children:(0,r.jsx)("div",{children:t})})}),document.body)});u.displayName="Modal";let l=(0,a.memo)(e=>{let{content:t,onOk:n,onCancel:o}=e,[i,s]=(0,a.useState)(!1),[l,d]=(0,a.useState)(!1),m=(0,a.useCallback)(async()=>{s(!0),await (null==n?void 0:n()),s(!1)},[n]),p=(0,a.useCallback)(async()=>{d(!0),await (null==o?void 0:o()),d(!1)},[o]);return(0,r.jsxs)(u,{children:[t,(0,r.jsx)(c.Z,{loading:i,disabled:l,onClick:m,children:"確定"}),(0,r.jsx)(c.Z,{loading:l,disabled:i,onClick:p,children:"取消"})]})});l.displayName="ConfirmModal",u.confirm=e=>{let{content:t,onOk:n,onCancel:r}=e;document.body},t.Z=u},4308:function(e,t,n){"use strict";n.d(t,{v:function(){return a}});var r,a,o=n(9268),i=n(6006),s=n(6753),c=n.n(s),u=n(8683),l=n.n(u);(r=a||(a={})).small="small",r.medium="medium";let d=(0,i.memo)(e=>{let{spinning:t=!0,size:n=a.medium,expand:r=!1,children:i}=e;return t?(0,o.jsxs)("div",{className:l()(c().wrapper,{[c().expand]:r},{[c().small]:n===a.small,[c().medium]:n===a.medium}),children:[i,(0,o.jsx)("div",{className:l()(c().overlay,{[c().block]:!i}),children:(0,o.jsx)("div",{className:c().spinner})})]}):i});d.displayName="Spin",t.Z=d},6519:function(e,t,n){"use strict";var r=n(9268),a=n(6006),o=n(6462),i=n(4308),s=n(7944),c=n.n(s),u=n(8683),l=n.n(u);let d=(0,a.memo)(e=>{let{className:t,rowKeyName:n="id",columns:s=[],dataSource:u=[],loading:d=!1}=e,m=(0,a.useMemo)(()=>s.map(e=>[e.dataIndex||(0,o.Z)(),e]),[s]),p=(0,a.useMemo)(()=>(0,r.jsx)("tr",{children:m.map(e=>{let[t,{title:n}]=e;return(0,r.jsx)("th",{children:n},t)})}),[m]),f=(0,a.useMemo)(()=>u.map(e=>(0,r.jsx)("tr",{children:m.map(t=>{let[n,{dataIndex:a,render:o}]=t;return(0,r.jsx)("td",{children:o?o(a&&e[a],e):a&&e[a]},n)})},e[n])),[m,u,n]);return(0,r.jsx)(i.Z,{spinning:d,expand:!0,children:(0,r.jsx)("table",{className:l()(c().table,t),children:(0,r.jsxs)("tbody",{children:[p,f]})})})});d.displayName="Table",t.Z=d},1904:function(e,t,n){"use strict";n.d(t,{Q:function(){return a}});var r=n(6006);function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{manual:!0},n=(0,r.useRef)(t.manual),[a,o]=(0,r.useState)({loading:!1,data:void 0}),i=(0,r.useCallback)(async function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];o(e=>{let{data:t}=e;return{loading:!0,data:t}});let a=await e(...n);return o({loading:!1,data:a}),a},[e]),s=(0,r.useRef)(i);return(0,r.useEffect)(()=>{n.current||s.current(...[])},[]),(0,r.useMemo)(()=>({run:i,...a}),[i,a])}},5528:function(e,t,n){"use strict";var r,a;n.d(t,{L:function(){return r}}),(a=r||(r={})).none="none",a.console="console",a.message="message"},4507:function(e,t,n){"use strict";var r,a;n.d(t,{L:function(){return r}}),(a=r||(r={})).primary="primary",a.dark="dark",a.danger="danger"},2105:function(e,t,n){"use strict";n.d(t,{FH:function(){return r},M7:function(){return o},px:function(){return a}});let r="https://oldcity-backend.azurewebsites.net",a="token",o=!0},956:function(e,t,n){"use strict";n.d(t,{cM:function(){return s},gw:function(){return i},rn:function(){return c},sG:function(){return u}});var r=n(5528),a=n(5326),o=n.n(a);let i=async e=>{await new Promise(t=>setTimeout(t,e))},s=(e,t)=>{switch(t){case r.L.none:break;case r.L.console:case r.L.message:console.log(e)}};function c(e){return e?o()(e).format("YYYY-MM-DD HH:mm:ss"):"--"}let u=(async()=>{}).constructor},7638:function(e){e.exports={table:"page_table__17I_j",deleteModalContent:"page_deleteModalContent__Ei49A"}},6361:function(e){e.exports={button:"Button_button__9tXVr",primary:"Button_primary___gC18",danger:"Button_danger__KNCuo",dark:"Button_dark__TmCnt"}},192:function(e){e.exports={horizontal:"Form_horizontal__tFVob"}},7394:function(e){e.exports={input:"Input_input__X23Vo"}},4674:function(e){e.exports={backgroundMask:"Modal_backgroundMask__2hKBY",modal:"Modal_modal___lQCY"}},6753:function(e){e.exports={wrapper:"Spin_wrapper__jzwXV",expand:"Spin_expand__ESZgo",overlay:"Spin_overlay__7NIg6",block:"Spin_block__72E_5",spinner:"Spin_spinner__kje4B",spin:"Spin_spin__rqgOI",small:"Spin_small__nDrTw",medium:"Spin_medium__hCyU7"}},7944:function(e){e.exports={table:"Table_table__PQEQF"}},3177:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(6006),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,o={},u=null,l=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,r)&&!c.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:u,ref:l,props:o,_owner:s.current}}t.Fragment=o,t.jsx=u,t.jsxs=u},9268:function(e,t,n){"use strict";e.exports=n(3177)},6462:function(e,t,n){"use strict";let r;n.d(t,{Z:function(){return u}});let a="undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var o={randomUUID:a};let i=new Uint8Array(16);function s(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(i)}let c=[];for(let e=0;e<256;++e)c.push((e+256).toString(16).slice(1));var u=function(e,t,n){if(o.randomUUID&&!t&&!e)return o.randomUUID();e=e||{};let r=e.random||(e.rng||s)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=r[e];return t}return function(e,t=0){return(c[e[t+0]]+c[e[t+1]]+c[e[t+2]]+c[e[t+3]]+"-"+c[e[t+4]]+c[e[t+5]]+"-"+c[e[t+6]]+c[e[t+7]]+"-"+c[e[t+8]]+c[e[t+9]]+"-"+c[e[t+10]]+c[e[t+11]]+c[e[t+12]]+c[e[t+13]]+c[e[t+14]]+c[e[t+15]]).toLowerCase()}(r)}}},function(e){e.O(0,[550,253,488,744],function(){return e(e.s=8560)}),_N_E=e.O()}]);