(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{437:function(e,t,n){Promise.resolve().then(n.bind(n,7219)),Promise.resolve().then(n.bind(n,438)),Promise.resolve().then(n.t.bind(n,1377,23)),Promise.resolve().then(n.t.bind(n,6408,23))},3377:function(e,t,n){"use strict";n.d(t,{L:function(){return o},c:function(){return s}});var r=n(956),a=n(2105);function o(){return localStorage.getItem(a.px)}async function i(){return await (0,r.gw)(2e3),{code:"code",message:"Mock",result:{nickName:"Mock",token:"Mock"}}}async function s(e,t){if(a.M7)return await i();let n=await fetch("".concat(a.FH,"/member/login"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:e,password:t})});if(!n.ok)throw Error("HTTP error! status: ".concat(n.status));return await n.json()}},438:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var r=n(9268),a=n(6006),o=n(9906),i=n.n(o),s=n(5846),u=n.n(s),l=n(6008),c=n(5499),m=n.n(c),d=n(8683),g=n.n(d);let f=[{href:"/member",title:"會員管理"},{href:"/restoration",title:"古蹟修復管理"}],p=(0,a.memo)(e=>{let{href:t,children:n}=e,a=(0,l.usePathname)();return(0,r.jsx)(u(),{className:g()({[m().activate]:a===t}),href:t,children:n})});p.displayName="NavItem";let v=(0,a.memo)(()=>(0,r.jsx)("div",{className:m().wrapper,children:f.map(e=>{let{href:t,title:n}=e;return(0,r.jsx)(p,{href:t,children:n},t)})}));v.displayName="Nav";var h=n(6624),_=n(5493),x=n(7396),k=n(7454),M=n(4507);let w=(0,a.memo)(()=>{let{authConfig:{loginState:e,username:t},logout:n}=(0,a.useContext)(h.V);return(0,r.jsxs)("div",{className:i().wrapper,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(k.Z,{src:"/logo.jpg",width:50,height:50,alt:"潮古蹟標誌"}),(0,r.jsx)("h3",{children:"潮古蹟"}),(0,r.jsx)(v,{})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:t}),(0,r.jsx)(_.Z,{loading:e===x.M.loggingOut,onClick:n,looks:M.L.dark,children:"登出"})]})]})});w.displayName="Navbar";var S=n(2082),y=n.n(S);let j=(0,a.memo)(e=>{let{children:t}=e,{authConfig:{loginState:n}}=(0,a.useContext)(h.V);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(w,{}),(0,r.jsx)("div",{className:y().wrapper,children:(n===x.M.true||n===x.M.loggingOut)&&t})]})});j.displayName="AdminLayout";var N=j},7219:function(e,t,n){"use strict";n.r(t);var r=n(9268),a=n(6771),o=n(4308),i=n(6624),s=n(7396),u=n(6006);let l=(0,u.memo)(e=>{let{loginPage:t,adminPage:n}=e,{authConfig:{loginState:l}}=(0,u.useContext)(i.V);switch(l){case s.M.none:return(0,r.jsx)(a.Z,{children:(0,r.jsx)(o.Z,{})});case s.M.validating:return(0,r.jsx)(o.Z,{expand:!0,children:n});case s.M.true:case s.M.validateError:case s.M.loggingOut:return n;case s.M.false:return t}});l.displayName="AuthRoute";let c=(0,u.memo)(e=>{let{loginPage:t,adminPage:n}=e;return(0,r.jsx)(i.H,{children:(0,r.jsx)(l,{loginPage:t,adminPage:n})})});c.displayName="AuthRouteWrapper",t.default=c},5493:function(e,t,n){"use strict";var r=n(9268),a=n(6006),o=n(4308),i=n(6361),s=n.n(i),u=n(8683),l=n.n(u),c=n(4507);let m=(0,a.memo)(e=>{let{children:t,loading:n,disabled:a,htmlType:i,onClick:u,looks:m}=e;return(0,r.jsxs)("button",{className:l()(s().button,{[s().dark]:m===c.L.dark}),disabled:n||a,onClick:u,type:i,children:[n&&(0,r.jsx)(o.Z,{size:o.v.small})," ",t]})});m.displayName="Button",t.Z=m},6771:function(e,t,n){"use strict";var r=n(9268),a=n(6006),o=n(780),i=n.n(o);let s=(0,a.memo)(e=>{let{children:t}=e;return(0,r.jsx)("div",{className:i().center,children:(0,r.jsx)("div",{children:t})})});s.displayName="Center",t.Z=s},7454:function(e,t,n){"use strict";var r=n(9268),a=n(6394),o=n.n(a),i=n(6006);let s=(0,i.memo)((0,i.forwardRef)((e,t)=>(0,r.jsx)(o(),{...e,ref:t,unoptimized:!0})));s.displayName="CustomImage",t.Z=s},4308:function(e,t,n){"use strict";n.d(t,{v:function(){return a}});var r,a,o=n(9268),i=n(6006),s=n(6753),u=n.n(s),l=n(8683),c=n.n(l);(r=a||(a={})).small="small",r.medium="medium";let m=(0,i.memo)(e=>{let{spinning:t=!0,size:n=a.medium,expand:r=!1,children:i}=e;return t?(0,o.jsxs)("div",{className:c()(u().wrapper,{[u().expand]:r},{[u().small]:n===a.small,[u().medium]:n===a.medium}),children:[i,(0,o.jsx)("div",{className:c()(u().overlay,{[u().block]:!i}),children:(0,o.jsx)("div",{className:u().spinner})})]}):i});m.displayName="Spin",t.Z=m},6624:function(e,t,n){"use strict";n.d(t,{H:function(){return v},V:function(){return p}});var r=n(9268),a=n(3377),o=n(7396),i=n(5528),s=n(956),u=n(2105),l=n(1857),c=n(6008),m=n(6006);let d="loginState",g="username",f=()=>{let e=localStorage.getItem(d)||"",t=localStorage.getItem(g)||"",n=localStorage.getItem(u.px)||"";return e in o.M?{loginState:e,username:t,token:n}:{loginState:o.M.none,username:"",token:""}},p=(0,m.createContext)({authConfig:{loginState:o.M.none,username:"",token:""},login:async()=>{throw Error("AuthProvider not found")},logout:async()=>{throw Error("AuthProvider not found")}}),v=(0,m.memo)(e=>{let{children:t}=e,[n,v]=(0,m.useState)({loginState:o.M.none,username:"",token:""}),h=(0,m.useRef)(n);h.current=n;let _=(0,m.useCallback)(e=>{let{loginState:t,username:n,token:r}=e;v({loginState:t,username:n,token:r}),localStorage.setItem(d,t),localStorage.setItem(g,n),localStorage.setItem(u.px,r)},[]),x=(0,m.useCallback)(async function(e,t){let{logType:n=i.L.none}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(h.current.loginState===o.M.none)throw Error("Project starting");if(h.current.loginState===o.M.true||h.current.loginState===o.M.validating||h.current.loginState===o.M.validateError)throw Error("Already login");try{let r=await (0,a.c)(e,t);return _({loginState:o.M.true,username:r.result.nickName,token:r.result.token}),(0,s.cM)("log in success",n),!0}catch(e){return e instanceof Error?(0,s.cM)(e.message,n):(0,s.cM)(e,n),!1}},[_]),k=(0,c.useRouter)(),M=(0,m.useCallback)(async()=>(_({loginState:o.M.loggingOut,username:h.current.username,token:h.current.token}),await (0,s.gw)(2e3),k.push(l.Qv),_({loginState:o.M.false,username:"",token:""}),!0),[_,k]),w=(0,m.useMemo)(()=>({authConfig:n,login:x,logout:M}),[n,x,M]);return(0,m.useEffect)(()=>{let e=async()=>{let{loginState:e,username:t,token:n}=f();if(e===o.M.true||e===o.M.validateError){_({loginState:o.M.validating,username:t,token:n});try{_({loginState:o.M.true,username:t,token:n})}catch(e){e instanceof Error?(0,s.cM)(e.message,i.L.message):(0,s.cM)(e,i.L.message),_({loginState:o.M.validateError,username:t,token:n})}}else _({loginState:o.M.false,username:"",token:""})};e()},[_]),(0,r.jsx)(p.Provider,{value:w,children:t})});v.displayName="AuthProvider"},7396:function(e,t,n){"use strict";var r,a;n.d(t,{M:function(){return r}}),(a=r||(r={})).none="none",a.validating="validating",a.validateError="validateError",a.true="true",a.false="false",a.loggingOut="loggingOut"},5528:function(e,t,n){"use strict";var r,a;n.d(t,{L:function(){return r}}),(a=r||(r={})).none="none",a.console="console",a.message="message"},4507:function(e,t,n){"use strict";var r;n.d(t,{L:function(){return r}}),(r||(r={})).dark="dark"},2105:function(e,t,n){"use strict";n.d(t,{FH:function(){return r},M7:function(){return o},px:function(){return a}});let r="https://oldcity-backend.azurewebsites.net",a="token",o=!1},956:function(e,t,n){"use strict";n.d(t,{cM:function(){return o},gw:function(){return a},sG:function(){return i}});var r=n(5528);let a=async e=>{await new Promise(t=>setTimeout(t,e))},o=(e,t)=>{switch(t){case r.L.none:break;case r.L.console:case r.L.message:console.log(e)}},i=(async()=>{}).constructor},1857:function(e,t,n){"use strict";n.d(t,{$x:function(){return o},Qv:function(){return i},qz:function(){return r},sM:function(){return a}});let r="redirect",a="/",o="/member",i="/login"},6408:function(){},2082:function(e){e.exports={wrapper:"AdminLayout_wrapper__1qyET"}},5499:function(e){e.exports={wrapper:"Nav_wrapper__Gi484",activate:"Nav_activate__dyq9V"}},9906:function(e){e.exports={wrapper:"Navbar_wrapper__IjV9s"}},6361:function(e){e.exports={button:"Button_button__9tXVr",dark:"Button_dark__TmCnt"}},780:function(e){e.exports={center:"Center_center__OsABS"}},6753:function(e){e.exports={wrapper:"Spin_wrapper__jzwXV",expand:"Spin_expand__ESZgo",overlay:"Spin_overlay__7NIg6",block:"Spin_block__72E_5",spinner:"Spin_spinner__kje4B",spin:"Spin_spin__rqgOI",small:"Spin_small__nDrTw",medium:"Spin_medium__hCyU7"}}},function(e){e.O(0,[720,98,253,488,744],function(){return e(e.s=437)}),_N_E=e.O()}]);