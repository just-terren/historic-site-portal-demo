(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[334],{5808:function(e,t,n){Promise.resolve().then(n.bind(n,1174))},3377:function(e,t,n){"use strict";n.d(t,{L:function(){return a},c:function(){return s}});var r=n(956),o=n(2105);function a(){return localStorage.getItem(o.px)}async function i(){return await (0,r.gw)(2e3),{code:"code",message:"Mock",result:{nickName:"Mock",token:"Mock"}}}async function s(e,t){if(o.M7)return await i();let n=await fetch("".concat(o.FH,"/member/login"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:e,password:t})});if(!n.ok)throw Error("HTTP error! status: ".concat(n.status));return await n.json()}},1174:function(e,t,n){"use strict";n.r(t);var r=n(9268),o=n(6771),a=n(880),i=n.n(a),s=n(7454),u=n(6006),l=n(5493),c=n(6624),m=n(5528),d=n(1904),f=n(6917),g=n(2392),p=n(4507);let h=Number(i().logoDiameter),v=(0,u.memo)(()=>{let{login:e}=(0,u.useContext)(c.V),[t,n]=(0,u.useState)(""),[a,v]=(0,u.useState)(""),_=(0,u.useCallback)(async()=>{await e(t,a,{logType:m.L.message})},[e,t,a]),{loading:S,run:y}=(0,d.Q)(_),k=(0,u.useRef)();return(0,r.jsx)(o.Z,{children:(0,r.jsxs)("div",{className:i().wrapper,children:[(0,r.jsx)(s.Z,{src:"/logo.jpg",width:h,height:h,alt:"潮古蹟標誌"}),(0,r.jsx)("h3",{children:"潮古蹟管理後台"}),(0,r.jsx)(g.Z,{layout:g.S.horizontal,onSubmit:y,children:(0,r.jsxs)("div",{className:i().formContent,children:[(0,r.jsx)(f.Z,{placeholder:"輸入帳號",onChange:n,onKeyDown:e=>{if("Enter"===e.key){var t;e.preventDefault(),null===(t=k.current)||void 0===t||t.focus()}}}),(0,r.jsx)(f.Z,{type:"password",placeholder:"輸入密碼",onChange:v,ref:k}),(0,r.jsx)(l.Z,{loading:S,htmlType:"submit",looks:p.L.dark,children:"登入"})]})})]})})});v.displayName="LoginPage",t.default=v},5493:function(e,t,n){"use strict";var r=n(9268),o=n(6006),a=n(4308),i=n(6361),s=n.n(i),u=n(8683),l=n.n(u),c=n(4507);let m=(0,o.memo)(e=>{let{children:t,loading:n,disabled:o,htmlType:i,onClick:u,looks:m}=e;return(0,r.jsxs)("button",{className:l()(s().button,{[s().dark]:m===c.L.dark}),disabled:n||o,onClick:u,type:i,children:[n&&(0,r.jsx)(a.Z,{size:a.v.small})," ",t]})});m.displayName="Button",t.Z=m},6771:function(e,t,n){"use strict";var r=n(9268),o=n(6006),a=n(780),i=n.n(a);let s=(0,o.memo)(e=>{let{children:t}=e;return(0,r.jsx)("div",{className:i().center,children:(0,r.jsx)("div",{children:t})})});s.displayName="Center",t.Z=s},7454:function(e,t,n){"use strict";var r=n(9268),o=n(6394),a=n.n(o),i=n(6006);let s=(0,i.memo)((0,i.forwardRef)((e,t)=>(0,r.jsx)(a(),{...e,ref:t,unoptimized:!0})));s.displayName="CustomImage",t.Z=s},2392:function(e,t,n){"use strict";n.d(t,{S:function(){return r}});var r,o=n(9268),a=n(6006),i=n(192),s=n.n(i),u=n(8683),l=n.n(u),c=n(956),m=n(5528);(r||(r={})).horizontal="horizontal";let d=(0,a.memo)(e=>{let{layout:t,onSubmit:n,children:i}=e,[u,d]=(0,a.useState)(!1);return(0,o.jsx)("form",{className:l()({[s().horizontal]:t===r.horizontal}),onSubmit:async e=>{if(e.preventDefault(),!u&&n){d(!0);try{n instanceof c.sG?await n():n()}catch(e){e instanceof Error?(0,c.cM)(e.message,m.L.console):(0,c.cM)(e,m.L.console)}finally{d(!1)}}},children:i})});d.displayName="Form",t.Z=d},6917:function(e,t,n){"use strict";var r=n(9268),o=n(6006),a=n(7394),i=n.n(a);let s=(0,o.memo)((0,o.forwardRef)((e,t)=>{let{type:n,value:a,onChange:s,onKeyDown:u,disabled:l,placeholder:c}=e,[m,d]=(0,o.useState)(a||"");return(0,r.jsx)("input",{className:i().input,type:n,value:m,onChange:e=>{let t=e.target.value;d(t),null==s||s(t)},onKeyDown:u,disabled:l,placeholder:c,ref:t})}));s.displayName="Input",t.Z=s},4308:function(e,t,n){"use strict";n.d(t,{v:function(){return o}});var r,o,a=n(9268),i=n(6006),s=n(6753),u=n.n(s),l=n(8683),c=n.n(l);(r=o||(o={})).small="small",r.medium="medium";let m=(0,i.memo)(e=>{let{spinning:t=!0,size:n=o.medium,expand:r=!1,children:i}=e;return t?(0,a.jsxs)("div",{className:c()(u().wrapper,{[u().expand]:r},{[u().small]:n===o.small,[u().medium]:n===o.medium}),children:[i,(0,a.jsx)("div",{className:c()(u().overlay,{[u().block]:!i}),children:(0,a.jsx)("div",{className:u().spinner})})]}):i});m.displayName="Spin",t.Z=m},6624:function(e,t,n){"use strict";n.d(t,{H:function(){return h},V:function(){return p}});var r=n(9268),o=n(3377),a=n(7396),i=n(5528),s=n(956),u=n(2105),l=n(1857),c=n(6008),m=n(6006);let d="loginState",f="username",g=()=>{let e=localStorage.getItem(d)||"",t=localStorage.getItem(f)||"",n=localStorage.getItem(u.px)||"";return e in a.M?{loginState:e,username:t,token:n}:{loginState:a.M.none,username:"",token:""}},p=(0,m.createContext)({authConfig:{loginState:a.M.none,username:"",token:""},login:async()=>{throw Error("AuthProvider not found")},logout:async()=>{throw Error("AuthProvider not found")}}),h=(0,m.memo)(e=>{let{children:t}=e,[n,h]=(0,m.useState)({loginState:a.M.none,username:"",token:""}),v=(0,m.useRef)(n);v.current=n;let _=(0,m.useCallback)(e=>{let{loginState:t,username:n,token:r}=e;h({loginState:t,username:n,token:r}),localStorage.setItem(d,t),localStorage.setItem(f,n),localStorage.setItem(u.px,r)},[]),S=(0,m.useCallback)(async function(e,t){let{logType:n=i.L.none}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(v.current.loginState===a.M.none)throw Error("Project starting");if(v.current.loginState===a.M.true||v.current.loginState===a.M.validating||v.current.loginState===a.M.validateError)throw Error("Already login");try{let r=await (0,o.c)(e,t);return _({loginState:a.M.true,username:r.result.nickName,token:r.result.token}),(0,s.cM)("log in success",n),!0}catch(e){return e instanceof Error?(0,s.cM)(e.message,n):(0,s.cM)(e,n),!1}},[_]),y=(0,c.useRouter)(),k=(0,m.useCallback)(async()=>(_({loginState:a.M.loggingOut,username:v.current.username,token:v.current.token}),await (0,s.gw)(2e3),y.push(l.Qv),_({loginState:a.M.false,username:"",token:""}),!0),[_,y]),w=(0,m.useMemo)(()=>({authConfig:n,login:S,logout:k}),[n,S,k]);return(0,m.useEffect)(()=>{let e=async()=>{let{loginState:e,username:t,token:n}=g();if(e===a.M.true||e===a.M.validateError){_({loginState:a.M.validating,username:t,token:n});try{_({loginState:a.M.true,username:t,token:n})}catch(e){e instanceof Error?(0,s.cM)(e.message,i.L.message):(0,s.cM)(e,i.L.message),_({loginState:a.M.validateError,username:t,token:n})}}else _({loginState:a.M.false,username:"",token:""})};e()},[_]),(0,r.jsx)(p.Provider,{value:w,children:t})});h.displayName="AuthProvider"},1904:function(e,t,n){"use strict";n.d(t,{Q:function(){return o}});var r=n(6006);function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{manual:!0},n=(0,r.useRef)(t.manual),[o,a]=(0,r.useState)({loading:!1,data:void 0}),i=(0,r.useCallback)(async function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];a(e=>{let{data:t}=e;return{loading:!0,data:t}});let o=await e(...n);return a({loading:!1,data:o}),o},[e]),s=(0,r.useRef)(i);return(0,r.useEffect)(()=>{n.current||s.current(...[])},[]),(0,r.useMemo)(()=>({run:i,...o}),[i,o])}},7396:function(e,t,n){"use strict";var r,o;n.d(t,{M:function(){return r}}),(o=r||(r={})).none="none",o.validating="validating",o.validateError="validateError",o.true="true",o.false="false",o.loggingOut="loggingOut"},5528:function(e,t,n){"use strict";var r,o;n.d(t,{L:function(){return r}}),(o=r||(r={})).none="none",o.console="console",o.message="message"},4507:function(e,t,n){"use strict";var r;n.d(t,{L:function(){return r}}),(r||(r={})).dark="dark"},2105:function(e,t,n){"use strict";n.d(t,{FH:function(){return r},M7:function(){return a},px:function(){return o}});let r="https://oldcity-backend.azurewebsites.net",o="token",a=!1},956:function(e,t,n){"use strict";n.d(t,{cM:function(){return a},gw:function(){return o},sG:function(){return i}});var r=n(5528);let o=async e=>{await new Promise(t=>setTimeout(t,e))},a=(e,t)=>{switch(t){case r.L.none:break;case r.L.console:case r.L.message:console.log(e)}},i=(async()=>{}).constructor},1857:function(e,t,n){"use strict";n.d(t,{$x:function(){return a},Qv:function(){return i},qz:function(){return r},sM:function(){return o}});let r="redirect",o="/",a="/member",i="/login"},880:function(e){e.exports={logoDiameter:"144",wrapper:"page_wrapper__d8hW_",formContent:"page_formContent__jEOPo"}},6361:function(e){e.exports={button:"Button_button__9tXVr",dark:"Button_dark__TmCnt"}},780:function(e){e.exports={center:"Center_center__OsABS"}},192:function(e){e.exports={horizontal:"Form_horizontal__tFVob"}},7394:function(e){e.exports={input:"Input_input__X23Vo"}},6753:function(e){e.exports={wrapper:"Spin_wrapper__jzwXV",expand:"Spin_expand__ESZgo",overlay:"Spin_overlay__7NIg6",block:"Spin_block__72E_5",spinner:"Spin_spinner__kje4B",spin:"Spin_spin__rqgOI",small:"Spin_small__nDrTw",medium:"Spin_medium__hCyU7"}},6008:function(e,t,n){e.exports=n(3027)}},function(e){e.O(0,[720,253,488,744],function(){return e(e.s=5808)}),_N_E=e.O()}]);