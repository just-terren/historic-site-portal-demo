(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[573],{3688:function(e,t,a){Promise.resolve().then(a.bind(a,7102))},7102:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return B}});var n,r,o=a(9268),i=a(5474),s=a(666),c=a(6653);async function l(){return await (0,i.gw)(2e3),{code:s.mI,message:"Mock",data:[{id:1,merchantName:"朝日夫婦",imageList:["/images/mock/朝日夫婦.jpeg"],locationX:"25.173531900733398",locationY:"121.43533051968141",address:"251新北市淡水區中正路233-3號",link:"http://www.123.com",description:"好吃的日式冰店。",operator:"admin01",updateTime:"2023-06-19 23:30:45",createTime:"2023-06-19 23:30:45"}],currentPage:1,pageSize:20,totalPage:1}}async function d(e){if(s.M7)return await l();let t=new URLSearchParams(e).toString(),a=await fetch("".concat(s.FH,"/merchants?").concat(t),{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.L)())}});if(!a.ok)throw Error("HTTP error! status: ".concat(a.status));return await a.json()}async function u(){return await (0,i.gw)(2e3),{code:s.mI,message:"Mock",data:{id:1,merchantName:"朝日夫婦",imageList:["/images/mock/朝日夫婦.jpeg"],locationX:"25.173531900733398",locationY:"121.43533051968141",address:"251新北市淡水區中正路233-3號",link:"http://www.123.com",description:"好吃的日式冰店。",operator:"admin01",updateTime:"2023-06-19 23:30:45",createTime:"2023-06-19 23:30:45"}}}async function m(e){if(s.M7)return u();let t=await fetch("".concat(s.FH,"/merchants/").concat(e),{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.L)())}});if(!t.ok)throw Error("HTTP error! status: ".concat(t.status));return await t.json()}async function h(e){return await (0,i.gw)(2e3),{code:s.mI,message:"mock"}}async function g(e){if(s.M7)return h(e);let t=await fetch("".concat(s.FH,"/merchants/save"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.L)())},body:JSON.stringify(e)});if(!t.ok)throw Error("HTTP error! status: ".concat(t.status));return await t.json()}async function p(e,t){return await (0,i.gw)(2e3),{code:s.mI,message:"mock"}}async function f(e,t){if(s.M7)return p(e,t);let a=await fetch("".concat(s.FH,"/merchants/").concat(e),{method:"PUT",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.L)())},body:JSON.stringify(t)});if(!a.ok)throw Error("HTTP error! status: ".concat(a.status));return await a.json()}async function w(){return await (0,i.gw)(2e3),{code:s.mI,message:"mock"}}async function v(e){if(s.M7)return await w();let t=await fetch("".concat(s.FH,"/merchants/").concat(e),{method:"DELETE",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.L)())}});if(!t.ok)throw Error("HTTP error! status: ".concat(t.status));return await t.json()}var x=a(7454),j=a(6831),k=a(1263),y=a(4415),N=a(1904),b=a(9153),T=a(6006),I=a(2908),Z=a(7007),E=a(3368),P=a(1897),L=a(7053),C=a(5503),S=a(2238),M=a(6497),A=a(158);async function z(e){try{let t=await m(e);if((null==t?void 0:t.code)!==s.mI){A.Z.error(null==t?void 0:t.message);return}return t.data}catch(e){}}async function H(e){let{values:t,id:a,type:n}=e,[o,i]=t.coordinate.split(",").map(e=>e.trim());switch(console.log(t),n){case r.add:return await g({merchantName:t.merchantName,locationX:o,locationY:i,address:t.address,description:t.description,imageList:t.imageList.filter(e=>void 0!==e),link:t.link});case r.edit:return await f(a,{merchantName:t.merchantName,locationX:o,locationY:i,address:t.address,description:t.description,imageList:t.imageList.filter(e=>void 0!==e),link:t.link});default:throw Error("Invalid type")}}(n=r||(r={}))[n.add=0]="add",n[n.edit=1]="edit";let O="store-form",R=(0,T.memo)(e=>{let{open:t,id:a,onClose:n,afterAdd:i,afterEdit:c}=e,l=void 0===a?r.add:r.edit,d=(0,T.useRef)(),{run:u,reset:m,loading:h}=(0,N.Q)(z);(0,T.useEffect)(()=>{let e=!1;return(async()=>{if(t){var n,r;if(null===(n=d.current)||void 0===n||n.initialize({imageList:[void 0]}),a){let t=await u(a);!e&&t&&(null===(r=d.current)||void 0===r||r.initialize({...t,coordinate:"".concat(t.locationX,", ").concat(t.locationY),imageList:t.imageList.length<10?t.imageList.concat(void 0):t.imageList}))}}})(),()=>{e=!0}},[t,a,u,m]);let{run:g}=(0,N.Q)(H);return(0,o.jsx)(Z.Z,{open:t,title:"商店資訊",footer:(0,o.jsx)("div",{className:"flex justify-end",children:(0,o.jsx)(j.Z,{form:O,type:"submit",looks:b.L.dark,children:"保存"})}),width:554,isCloseButtonShow:!0,onClose:n,maskClosable:!1,children:(0,o.jsx)(E.Z,{expand:!0,spinning:h,children:(0,o.jsx)(I.l0,{onSubmit:async e=>{let t=await g({values:e,id:a,type:l});(null==t?void 0:t.code)!==s.mI?A.Z.error(null==t?void 0:t.message):(A.Z.success("成功"),n(),l===r.add?i():c())},mutators:{...S.Z},render:e=>{let{form:t,handleSubmit:a}=e;return d.current=t,(0,o.jsxs)("form",{id:O,onSubmit:a,children:[(0,o.jsxs)("div",{className:"m-2",children:[(0,o.jsx)("label",{className:"mb-2 block",children:"商店名稱"}),(0,o.jsx)(I.gN,{name:"merchantName",render:e=>{let{input:{value:t,onChange:a}}=e;return(0,o.jsx)(k.Z,{className:"block w-full text-sm",value:t,onChange:a})}})]}),(0,o.jsxs)("div",{className:"m-2",children:[(0,o.jsx)("label",{className:"mb-2 block",children:"座標位置"}),(0,o.jsx)(I.gN,{name:"coordinate",render:e=>{let{input:{value:t,onChange:a}}=e;return(0,o.jsx)(k.Z,{className:"block w-full text-sm",value:t,onChange:a,placeholder:"請輸入古蹟座標位置(google map中按右鍵可複製座標)"})}})]}),(0,o.jsxs)("div",{className:"m-2",children:[(0,o.jsx)("label",{className:"mb-2 block",children:"商店地址"}),(0,o.jsx)(I.gN,{name:"address",render:e=>{let{input:{value:t,onChange:a}}=e;return(0,o.jsx)(k.Z,{className:"block w-full text-sm",value:t,onChange:a})}})]}),(0,o.jsxs)("div",{className:"m-2",children:[(0,o.jsx)("label",{className:"mb-2 block",children:"商店描述"}),(0,o.jsx)(I.gN,{name:"description",render:e=>{let{input:{value:t,onChange:a}}=e;return(0,o.jsx)(P.Z,{className:"block w-full text-sm",value:t,onChange:a})}})]}),(0,o.jsxs)("div",{className:"m-2",children:[(0,o.jsx)("label",{className:"mb-2 block",children:"新增圖片"}),(0,o.jsx)(M.F2,{name:"imageList",render:e=>{let{fields:t}=e;return(0,o.jsx)("div",{className:"flex w-full flex-wrap gap-1",children:t.map((e,a)=>(0,o.jsx)(I.gN,{name:e,render:e=>{let{input:{value:n,onChange:r}}=e;return(0,o.jsx)(L.Z,{accept:"image/*",fileType:C.p.IMAGE,value:n,onChange:e=>{t.length<10&&t.push(void 0),r(e)},onRemove:()=>{t.remove(a),setTimeout(()=>{10===t.length&&t.value[9]&&t.push(void 0)})}})}},e))})}})]}),(0,o.jsxs)("div",{className:"m-2",children:[(0,o.jsx)("label",{className:"mb-2 block",children:"相關連結"}),(0,o.jsx)(I.gN,{name:"link",render:e=>{let{input:{value:t,onChange:a}}=e;return(0,o.jsx)(k.Z,{className:"block w-full text-sm",value:t,onChange:a})}})]})]})}})})})});async function F(e,t){console.log(e,t);try{let a=await d((0,i.o2)({id:null==e?void 0:e.id,name:null==e?void 0:e.name,pageNum:null==t?void 0:t.page,pageSize:null==t?void 0:t.pageSize}));return(null==a?void 0:a.code)!==s.mI&&A.Z.error(null==a?void 0:a.message),a}catch(e){return}}R.displayName="FormModal";let D=(0,T.memo)(()=>{let e=(0,T.useRef)(),{run:t,refresh:a,data:n,loading:r}=(0,N.Q)(F),c=(0,T.useRef)(t),[l,d]=(0,T.useState)({page:1,pageSize:20,totalPage:1}),u=(0,T.useRef)(l);(0,T.useEffect)(()=>{(async()=>{let e=await c.current(void 0,u.current);(null==e?void 0:e.code)===s.mI&&d({page:e.currentPage,pageSize:e.pageSize,totalPage:e.totalPage})})()},[]);let{openModal:m,formModalProps:h}=function(){let[e,t]=(0,T.useState)({open:!1}),a=(0,T.useCallback)(e=>{t({id:e,open:!0})},[]),n=(0,T.useCallback)(()=>{t({open:!1})},[]);return(0,T.useMemo)(()=>({openModal:a,formModalProps:{...e,onClose:n}}),[a,e,n])}(),g=(0,T.useMemo)(()=>[{title:"ID",dataIndex:"id"},{title:"商店名稱",dataIndex:"merchantName"},{title:"座標位置",render:(e,t)=>"".concat(t.locationX,", ").concat(t.locationY)},{title:"商店地址",dataIndex:"address"},{title:"商店描述",dataIndex:"description"},{title:"封面照",dataIndex:"imageList",render:e=>(0,o.jsx)(x.Z,{className:"h-24 w-24 min-w-24 object-cover",src:null==e?void 0:e[0],width:100,height:100,alt:"封面照"})},{title:"相關連結",dataIndex:"link",render:e=>(0,o.jsx)("a",{className:"text-blue-500 hover:underline",href:e,target:"_blank",children:e})},{title:"操作者",dataIndex:"operator"},{title:"操作時間",dataIndex:"updateTime",render:e=>(0,i.rn)(e)},{title:"操作",render:(e,t)=>(0,o.jsxs)("div",{className:"flex gap-2",children:[(0,o.jsx)(j.Z,{looks:b.L.green,onClick:()=>{m(t.id)},children:"編輯"}),(0,o.jsx)(j.Z,{looks:b.L.danger,onClick:()=>{Z.Z.confirm({content:(0,o.jsx)("p",{children:"是否確認刪除？"}),onOk:async()=>{let e=await v(t.id);if((null==e?void 0:e.code)!==s.mI)throw A.Z.error(null==e?void 0:e.message),Error("Delete failed");A.Z.success("成功"),a()},okButtonProps:{looks:b.L.danger}})},children:"刪除"})]})}],[a,m]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"flex items-center justify-between",children:[(0,o.jsx)(I.l0,{onSubmit:async e=>{let a=await t(e,{page:1,pageSize:l.pageSize});(null==a?void 0:a.code)===s.mI?d({page:a.currentPage,pageSize:a.pageSize,totalPage:a.totalPage}):d(e=>({...e,page:1,totalPage:1}))},render:t=>{let{form:a,handleSubmit:n}=t;return e.current=a,(0,o.jsxs)("form",{className:"flex gap-2",onSubmit:n,children:[(0,o.jsx)(I.gN,{name:"id",render:e=>{let{input:{value:t,onChange:a}}=e;return(0,o.jsx)(k.Z,{value:t,onChange:a,placeholder:"請輸入ID"})}}),(0,o.jsx)(I.gN,{name:"name",render:e=>{let{input:{value:t,onChange:a}}=e;return(0,o.jsx)(k.Z,{value:t,onChange:a,placeholder:"請輸入古蹟名稱"})}}),(0,o.jsx)("button",{className:"hidden",type:"submit"})]})}}),(0,o.jsx)(j.Z,{looks:b.L.dark,onClick:()=>{m()},children:"新增商店"})]}),(0,o.jsx)(y.Z,{className:"mt-6",columns:g,dataSource:null==n?void 0:n.data,loading:r,pagination:{...l,onChange:(a,n)=>{var r;d(e=>({...e,page:a,pageSize:n})),t(null===(r=e.current)||void 0===r?void 0:r.getState().values,{page:a,pageSize:n})}}}),(0,o.jsx)(R,{...h,afterAdd:t,afterEdit:a})]})});D.displayName="StorePage";var B=D},7454:function(e,t,a){"use strict";var n=a(9268),r=a(6394),o=a.n(r),i=a(6006),s=a(8582);let c=(0,i.memo)((0,i.forwardRef)((e,t)=>{let{src:a,...r}=e;return(0,n.jsx)(o(),{...r,ref:t,unoptimized:!0,src:"string"==typeof a?(0,s.A0)(a):a})}));c.displayName="CustomImage",t.Z=c},1897:function(e,t,a){"use strict";var n=a(9268),r=a(8683),o=a.n(r),i=a(6006);let s=(0,i.memo)((0,i.forwardRef)((e,t)=>{let{className:a,value:r,onChange:i}=e;return(0,n.jsx)("textarea",{className:o()("rounded border border-solid border-gray-300 p-1",a),value:r,onChange:e=>{null==i||i(e.target.value)},ref:t})}));t.Z=s},7053:function(e,t,a){"use strict";a.d(t,{Z:function(){return N}});var n=a(9268),r=a(6006),o=a(7454),i=a(1904),s=a(3368),c=a(5503),l=a(5474),d=a(666),u=a(6653);async function m(){return await (0,l.gw)(2e3),{code:d.mI,message:"Mock",data:"/images/mock/朝日夫婦.jpeg"}}async function h(e){if(d.M7)return await m();let t=new FormData;t.append("file",e);let a=await fetch("".concat(d.FH,"/file/upload/image"),{method:"POST",mode:"cors",headers:{Authorization:"Bearer ".concat((0,u.L)())},body:t});if(!a.ok)throw Error("HTTP error! status: ".concat(a.status));return await a.json()}async function g(){return await (0,l.gw)(2e3),{code:d.mI,message:"Mock",data:"/videos/mock/朝日夫婦.mp4"}}async function p(e){if(d.M7)return await g();let t=new FormData;t.append("file",e);let a=await fetch("".concat(d.FH,"/file/upload/video"),{method:"POST",mode:"cors",headers:{Authorization:"Bearer ".concat((0,u.L)())},body:t});if(!a.ok)throw Error("HTTP error! status: ".concat(a.status));return await a.json()}async function f(){return await (0,l.gw)(2e3),{code:d.mI,message:"Mock",data:"/panoramas/mock/朝日夫婦.jpeg"}}async function w(e){if(d.M7)return await f();let t=new FormData;t.append("file",e);let a=await fetch("".concat(d.FH,"/file/upload/panorama"),{method:"POST",mode:"cors",headers:{Authorization:"Bearer ".concat((0,u.L)())},body:t});if(!a.ok)throw Error("HTTP error! status: ".concat(a.status));return await a.json()}var v=a(158);let x=(0,r.memo)(e=>{let{className:t,url:a}=e,[i,c]=(0,r.useState)(""),l=(0,r.useRef)(null),d=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let e=l.current,t=d.current,a=async()=>{try{e.currentTime=0,await e.play(),e.removeEventListener("canplay",a),e.pause(),t.width=e.videoWidth,t.height=e.videoHeight,t.getContext("2d").drawImage(e,0,0,t.width,t.height),c(t.toDataURL())}catch(e){console.log(e)}};return e.addEventListener("canplay",a),()=>{e.removeEventListener("canplay",a)}},[]),(0,n.jsxs)("div",{children:[(0,n.jsx)("video",{className:"hidden",src:a,ref:l,crossOrigin:"anonymous"}),(0,n.jsx)("canvas",{className:"hidden",ref:d}),(0,n.jsx)(s.Z,{spinning:!!a&&!i,children:(0,n.jsx)(o.Z,{className:t,src:i||"/images/mock/add-image.png",width:100,height:100,alt:"Video Thumbnail"})})]})});x.displayName="VideoThumbnail";var j=a(8683),k=a.n(j);let y=(0,r.memo)(e=>{let{className:t,accept:a,fileType:l,value:u,onChange:m,onRemove:g}=e;console.log({value:u});let{loading:f,run:j}=(0,i.Q)(async e=>{try{switch(l){case c.p.IMAGE:{let t=await h(e);if(t.code===d.mI)return v.Z.success("成功"),null==m||m(t.data),t.data;v.Z.error(t.message);break}case c.p.VIDEO:{let t=await p(e);if(t.code===d.mI)return v.Z.success("成功"),null==m||m(t.data),t.data;v.Z.error(t.message);break}case c.p.PANORAMA:{let t=await w(e);if(t.code===d.mI)return v.Z.success("成功"),null==m||m(t.data),t.data;v.Z.error(t.message)}}}catch(e){v.Z.error(null==e?void 0:e.message)}}),y=(0,r.useRef)(null),[N,b]=(0,r.useState)(!1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("input",{className:"hidden",type:"file",accept:a,ref:y,onClick:()=>{y.current.value=""},onChange:async e=>{var t;let a=null===(t=e.target.files)||void 0===t?void 0:t[0];a&&await j(a)}}),(0,n.jsx)(s.Z,{spinning:f,children:(0,n.jsxs)("div",{className:"relative inline-block",onMouseEnter:()=>{b(!0)},onMouseLeave:()=>{b(!1)},onClick:()=>{u&&(null==g||g())},children:[l===c.p.VIDEO&&u?(0,n.jsx)(x,{className:k()("h-24 w-24 cursor-pointer object-cover",{"opacity-30":N}),url:u}):(0,n.jsx)(o.Z,{className:k()("h-24 w-24 cursor-pointer object-cover",{"opacity-30":u&&N}),src:u||"/images/mock/add-image.png",width:100,height:100,alt:"add",onClick:()=>{u||y.current.click()}}),u&&N&&(0,n.jsx)(o.Z,{className:"absolute inset-0 m-auto opacity-50",src:"/images/trash-solid.svg",width:14,height:16,alt:"delete"})]})})]})});y.displayName="Upload";var N=y},7613:function(e){"use strict";e.exports={output:"export",basePath:"/historic-site-portal-demo"}},5503:function(e,t,a){"use strict";var n,r;a.d(t,{p:function(){return n}}),(r=n||(n={}))[r.VIDEO=0]="VIDEO",r[r.PANORAMA=1]="PANORAMA",r[r.IMAGE=2]="IMAGE"},8582:function(e,t,a){"use strict";a.d(t,{$x:function(){return c},A0:function(){return d},Qv:function(){return l},_b:function(){return u},qz:function(){return s}});var n=a(7613),r=a.n(n),o=a(3034),i=a(6008);let s="redirect",c="/member",l="/login";function d(e){return e.startsWith("/")&&r().basePath?"".concat(r().basePath).concat(e):e}function u(e,t){(0,i.redirect)("".concat(l).concat(e===d("/")?"":"?".concat(s,"=").concat(encodeURIComponent("".concat(e,"?").concat(t.toString())))),o.RedirectType.replace)}}},function(e){e.O(0,[550,263,656,320,253,488,744],function(){return e(e.s=3688)}),_N_E=e.O()}]);