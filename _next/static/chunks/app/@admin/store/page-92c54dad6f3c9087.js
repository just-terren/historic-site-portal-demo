(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[573],{3688:function(e,a,t){Promise.resolve().then(t.bind(t,7102))},7102:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return B}});var n,r,o=t(9268),s=t(5474),i=t(666),c=t(6653);async function l(){return await (0,s.gw)(2e3),{code:i.mI,message:"Mock",data:[{id:1,merchantName:"朝日夫婦",imageList:["/images/mock/朝日夫婦.jpeg"],locationX:"25.173531900733398",locationY:"121.43533051968141",address:"251新北市淡水區中正路233-3號",link:"http://www.123.com",description:"好吃的日式冰店。",operator:"admin01",updateTime:"2023-06-19 23:30:45",createTime:"2023-06-19 23:30:45"}],currentPage:1,pageSize:20,totalPage:1}}async function d(e){if(i.M7)return await l();let a=new URLSearchParams(e).toString(),t=await fetch("".concat(i.FH,"/merchants?").concat(a),{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.L)())}});if(!t.ok)throw Error("HTTP error! status: ".concat(t.status));return await t.json()}async function u(){return await (0,s.gw)(2e3),{code:i.mI,message:"Mock",data:{id:1,merchantName:"朝日夫婦",imageList:["/images/mock/朝日夫婦.jpeg"],locationX:"25.173531900733398",locationY:"121.43533051968141",address:"251新北市淡水區中正路233-3號",link:"http://www.123.com",description:"好吃的日式冰店。",operator:"admin01",updateTime:"2023-06-19 23:30:45",createTime:"2023-06-19 23:30:45"}}}async function m(e){if(i.M7)return u();let a=await fetch("".concat(i.FH,"/merchants/").concat(e),{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.L)())}});if(!a.ok)throw Error("HTTP error! status: ".concat(a.status));return await a.json()}async function h(e){return await (0,s.gw)(2e3),{code:i.mI,message:"mock"}}async function g(e){if(i.M7)return h(e);let a=await fetch("".concat(i.FH,"/merchants/save"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.L)())},body:JSON.stringify(e)});if(!a.ok)throw Error("HTTP error! status: ".concat(a.status));return await a.json()}async function p(e,a){return await (0,s.gw)(2e3),{code:i.mI,message:"mock"}}async function f(e,a){if(i.M7)return p(e,a);let t=await fetch("".concat(i.FH,"/merchants/").concat(e),{method:"PUT",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.L)())},body:JSON.stringify(a)});if(!t.ok)throw Error("HTTP error! status: ".concat(t.status));return await t.json()}async function w(){return await (0,s.gw)(2e3),{code:i.mI,message:"mock"}}async function v(e){if(i.M7)return await w();let a=await fetch("".concat(i.FH,"/merchants/").concat(e),{method:"DELETE",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat((0,c.L)())}});if(!a.ok)throw Error("HTTP error! status: ".concat(a.status));return await a.json()}var x=t(7454),j=t(6831),k=t(1263),y=t(4415),N=t(1904),b=t(9153),T=t(6006),Z=t(2908),I=t(7007),E=t(3368),P=t(1897),L=t(7053),C=t(5503),S=t(2238),M=t(6497),A=t(158);async function z(e){try{let a=await m(e);if((null==a?void 0:a.code)!==i.mI){A.Z.error(null==a?void 0:a.message);return}return a.data}catch(e){}}async function H(e){let{values:a,id:t,type:n}=e,[o,s]=a.coordinate.split(",").map(e=>e.trim());switch(console.log(a),n){case r.add:return await g({merchantName:a.merchantName,locationX:o,locationY:s,address:a.address,description:a.description,imageList:a.imageList.filter(e=>void 0!==e),link:a.link});case r.edit:return await f(t,{merchantName:a.merchantName,locationX:o,locationY:s,address:a.address,description:a.description,imageList:a.imageList.filter(e=>void 0!==e),link:a.link});default:throw Error("Invalid type")}}(n=r||(r={}))[n.add=0]="add",n[n.edit=1]="edit";let O="store-form",F=(0,T.memo)(e=>{let{open:a,id:t,onClose:n,afterAdd:s,afterEdit:c}=e,l=void 0===t?r.add:r.edit,d=(0,T.useRef)(),{run:u,reset:m,loading:h}=(0,N.Q)(z);(0,T.useEffect)(()=>{let e=!1;return(async()=>{if(a){var n,r;if(null===(n=d.current)||void 0===n||n.initialize({imageList:[void 0]}),t){let a=await u(t);!e&&a&&(null===(r=d.current)||void 0===r||r.initialize({...a,coordinate:"".concat(a.locationX,", ").concat(a.locationY),imageList:a.imageList.length<10?a.imageList.concat(void 0):a.imageList}))}}})(),()=>{e=!0}},[a,t,u,m]);let{run:g}=(0,N.Q)(H);return(0,o.jsx)(I.Z,{open:a,title:"商店資訊",footer:(0,o.jsx)("div",{className:"flex justify-end",children:(0,o.jsx)(j.Z,{form:O,type:"submit",looks:b.L.dark,children:"保存"})}),width:554,isCloseButtonShow:!0,onClose:n,maskClosable:!1,children:(0,o.jsx)(E.Z,{expand:!0,spinning:h,children:(0,o.jsx)(Z.l0,{onSubmit:async e=>{let a=await g({values:e,id:t,type:l});(null==a?void 0:a.code)!==i.mI?A.Z.error(null==a?void 0:a.message):(A.Z.success("成功"),n(),l===r.add?s():c())},mutators:{...S.Z},render:e=>{let{form:a,handleSubmit:t}=e;return d.current=a,(0,o.jsxs)("form",{id:O,onSubmit:t,children:[(0,o.jsxs)("div",{className:"m-2",children:[(0,o.jsx)("label",{className:"mb-2 block",children:"商店名稱"}),(0,o.jsx)(Z.gN,{name:"merchantName",render:e=>{let{input:{value:a,onChange:t}}=e;return(0,o.jsx)(k.Z,{className:"block w-full text-sm",value:a,onChange:t})}})]}),(0,o.jsxs)("div",{className:"m-2",children:[(0,o.jsx)("label",{className:"mb-2 block",children:"座標位置"}),(0,o.jsx)(Z.gN,{name:"coordinate",render:e=>{let{input:{value:a,onChange:t}}=e;return(0,o.jsx)(k.Z,{className:"block w-full text-sm",value:a,onChange:t,placeholder:"請輸入古蹟座標位置(google map中按右鍵可複製座標)"})}})]}),(0,o.jsxs)("div",{className:"m-2",children:[(0,o.jsx)("label",{className:"mb-2 block",children:"商店地址"}),(0,o.jsx)(Z.gN,{name:"address",render:e=>{let{input:{value:a,onChange:t}}=e;return(0,o.jsx)(k.Z,{className:"block w-full text-sm",value:a,onChange:t})}})]}),(0,o.jsxs)("div",{className:"m-2",children:[(0,o.jsx)("label",{className:"mb-2 block",children:"商店描述"}),(0,o.jsx)(Z.gN,{name:"description",render:e=>{let{input:{value:a,onChange:t}}=e;return(0,o.jsx)(P.Z,{className:"block w-full text-sm",value:a,onChange:t})}})]}),(0,o.jsxs)("div",{className:"m-2",children:[(0,o.jsx)("label",{className:"mb-2 block",children:"新增圖片"}),(0,o.jsx)(M.F2,{name:"imageList",render:e=>{let{fields:a}=e;return(0,o.jsx)("div",{className:"flex w-full flex-wrap gap-1",children:a.map((e,t)=>(0,o.jsx)(Z.gN,{name:e,render:e=>{let{input:{value:n,onChange:r}}=e;return(0,o.jsx)(L.Z,{accept:"image/*",fileType:C.p.IMAGE,value:n,onChange:e=>{a.length<10&&a.push(void 0),r(e)},onRemove:()=>{a.remove(t),setTimeout(()=>{10===a.length&&a.value[9]&&a.push(void 0)})}})}},e))})}})]}),(0,o.jsxs)("div",{className:"m-2",children:[(0,o.jsx)("label",{className:"mb-2 block",children:"相關連結"}),(0,o.jsx)(Z.gN,{name:"link",render:e=>{let{input:{value:a,onChange:t}}=e;return(0,o.jsx)(k.Z,{className:"block w-full text-sm",value:a,onChange:t})}})]})]})}})})})});async function R(e,a){console.log(e,a);try{let t=await d((0,s.o2)({id:null==e?void 0:e.id,name:null==e?void 0:e.name,pageNum:null==a?void 0:a.page,pageSize:null==a?void 0:a.pageSize}));return(null==t?void 0:t.code)!==i.mI&&A.Z.error(null==t?void 0:t.message),t}catch(e){return}}F.displayName="FormModal";let D=(0,T.memo)(()=>{let e=(0,T.useRef)(),{run:a,refresh:t,data:n,loading:r}=(0,N.Q)(R),c=(0,T.useRef)(a),[l,d]=(0,T.useState)({page:1,pageSize:20,totalPage:1}),u=(0,T.useRef)(l);(0,T.useEffect)(()=>{(async()=>{let e=await c.current(void 0,u.current);(null==e?void 0:e.code)===i.mI&&d({page:e.currentPage,pageSize:e.pageSize,totalPage:e.totalPage})})()},[]);let{openModal:m,formModalProps:h}=function(){let[e,a]=(0,T.useState)({open:!1}),t=(0,T.useCallback)(e=>{a({id:e,open:!0})},[]),n=(0,T.useCallback)(()=>{a({open:!1})},[]);return(0,T.useMemo)(()=>({openModal:t,formModalProps:{...e,onClose:n}}),[t,e,n])}(),g=(0,T.useMemo)(()=>[{title:"ID",dataIndex:"id"},{title:"商店名稱",dataIndex:"merchantName"},{title:"座標位置",render:(e,a)=>"".concat(a.locationX,", ").concat(a.locationY)},{title:"商店地址",dataIndex:"address"},{title:"商店描述",dataIndex:"description"},{title:"封面照",dataIndex:"imageList",render:e=>(0,o.jsx)(x.Z,{className:"h-24 w-24 min-w-24 object-cover",src:null==e?void 0:e[0],width:100,height:100,alt:"封面照"})},{title:"相關連結",dataIndex:"link",render:e=>(0,o.jsx)("a",{className:"text-blue-500 hover:underline",href:e,target:"_blank",children:e})},{title:"操作者",dataIndex:"operator"},{title:"操作時間",dataIndex:"updateTime",render:e=>(0,s.rn)(e)},{title:"操作",render:(e,a)=>(0,o.jsxs)("div",{className:"flex gap-2",children:[(0,o.jsx)(j.Z,{looks:b.L.green,onClick:()=>{m(a.id)},children:"編輯"}),(0,o.jsx)(j.Z,{looks:b.L.danger,onClick:()=>{I.Z.confirm({content:(0,o.jsx)("p",{children:"是否確認刪除？"}),onOk:async()=>{let e=await v(a.id);if((null==e?void 0:e.code)!==i.mI)throw A.Z.error(null==e?void 0:e.message),Error("Delete failed");A.Z.success("成功"),t()},okButtonProps:{looks:b.L.danger}})},children:"刪除"})]})}],[t,m]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"flex items-center justify-between",children:[(0,o.jsx)(Z.l0,{onSubmit:async e=>{let t=await a(e,{page:1,pageSize:l.pageSize});(null==t?void 0:t.code)===i.mI?d({page:t.currentPage,pageSize:t.pageSize,totalPage:t.totalPage}):d(e=>({...e,page:1,totalPage:1}))},render:a=>{let{form:t,handleSubmit:n}=a;return e.current=t,(0,o.jsxs)("form",{className:"flex gap-2",onSubmit:n,children:[(0,o.jsx)(Z.gN,{name:"id",render:e=>{let{input:{value:a,onChange:t}}=e;return(0,o.jsx)(k.Z,{value:a,onChange:t,placeholder:"請輸入ID"})}}),(0,o.jsx)(Z.gN,{name:"name",render:e=>{let{input:{value:a,onChange:t}}=e;return(0,o.jsx)(k.Z,{value:a,onChange:t,placeholder:"請輸入古蹟名稱"})}}),(0,o.jsx)("button",{className:"hidden",type:"submit"})]})}}),(0,o.jsx)(j.Z,{looks:b.L.dark,onClick:()=>{m()},children:"新增商店"})]}),(0,o.jsx)(y.Z,{className:"mt-6",columns:g,dataSource:null==n?void 0:n.data,loading:r,pagination:{...l,onChange:(t,n)=>{var r;d(e=>({...e,page:t,pageSize:n})),a(null===(r=e.current)||void 0===r?void 0:r.getState().values,{page:t,pageSize:n})}}}),(0,o.jsx)(F,{...h,afterAdd:a,afterEdit:t})]})});D.displayName="StorePage";var B=D},7454:function(e,a,t){"use strict";var n=t(9268),r=t(6394),o=t.n(r),s=t(6006),i=t(7613),c=t.n(i);let l=(0,s.memo)((0,s.forwardRef)((e,a)=>{let{src:t,...r}=e;return(0,n.jsx)(o(),{...r,ref:a,unoptimized:!0,src:"string"==typeof t&&t.startsWith("/")&&c().basePath?"".concat(c().basePath).concat(t):t})}));l.displayName="CustomImage",a.Z=l},1897:function(e,a,t){"use strict";var n=t(9268),r=t(8683),o=t.n(r),s=t(6006);let i=(0,s.memo)((0,s.forwardRef)((e,a)=>{let{className:t,value:r,onChange:s}=e;return(0,n.jsx)("textarea",{className:o()("rounded border border-solid border-gray-300 p-1",t),value:r,onChange:e=>{null==s||s(e.target.value)},ref:a})}));a.Z=i},7053:function(e,a,t){"use strict";t.d(a,{Z:function(){return N}});var n=t(9268),r=t(6006),o=t(7454),s=t(1904),i=t(3368),c=t(5503),l=t(5474),d=t(666),u=t(6653);async function m(){return await (0,l.gw)(2e3),{code:d.mI,message:"Mock",data:"/images/mock/朝日夫婦.jpeg"}}async function h(e){if(d.M7)return await m();let a=new FormData;a.append("file",e);let t=await fetch("".concat(d.FH,"/file/upload/image"),{method:"POST",mode:"cors",headers:{Authorization:"Bearer ".concat((0,u.L)())},body:a});if(!t.ok)throw Error("HTTP error! status: ".concat(t.status));return await t.json()}async function g(){return await (0,l.gw)(2e3),{code:d.mI,message:"Mock",data:"/videos/mock/朝日夫婦.mp4"}}async function p(e){if(d.M7)return await g();let a=new FormData;a.append("file",e);let t=await fetch("".concat(d.FH,"/file/upload/video"),{method:"POST",mode:"cors",headers:{Authorization:"Bearer ".concat((0,u.L)())},body:a});if(!t.ok)throw Error("HTTP error! status: ".concat(t.status));return await t.json()}async function f(){return await (0,l.gw)(2e3),{code:d.mI,message:"Mock",data:"/panoramas/mock/朝日夫婦.jpeg"}}async function w(e){if(d.M7)return await f();let a=new FormData;a.append("file",e);let t=await fetch("".concat(d.FH,"/file/upload/panorama"),{method:"POST",mode:"cors",headers:{Authorization:"Bearer ".concat((0,u.L)())},body:a});if(!t.ok)throw Error("HTTP error! status: ".concat(t.status));return await t.json()}var v=t(158);let x=(0,r.memo)(e=>{let{className:a,url:t}=e,[s,c]=(0,r.useState)(""),l=(0,r.useRef)(null),d=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let e=l.current,a=d.current,t=async()=>{try{e.currentTime=0,await e.play(),e.removeEventListener("canplay",t),e.pause(),a.width=e.videoWidth,a.height=e.videoHeight,a.getContext("2d").drawImage(e,0,0,a.width,a.height),c(a.toDataURL())}catch(e){console.log(e)}};return e.addEventListener("canplay",t),()=>{e.removeEventListener("canplay",t)}},[]),(0,n.jsxs)("div",{children:[(0,n.jsx)("video",{className:"hidden",src:t,ref:l,crossOrigin:"anonymous"}),(0,n.jsx)("canvas",{className:"hidden",ref:d}),(0,n.jsx)(i.Z,{spinning:!!t&&!s,children:(0,n.jsx)(o.Z,{className:a,src:s||"/images/mock/add-image.png",width:100,height:100,alt:"Video Thumbnail"})})]})});x.displayName="VideoThumbnail";var j=t(8683),k=t.n(j);let y=(0,r.memo)(e=>{let{className:a,accept:t,fileType:l,value:u,onChange:m,onRemove:g}=e;console.log({value:u});let{loading:f,run:j}=(0,s.Q)(async e=>{try{switch(l){case c.p.IMAGE:{let a=await h(e);if(a.code===d.mI)return v.Z.success("成功"),null==m||m(a.data),a.data;v.Z.error(a.message);break}case c.p.VIDEO:{let a=await p(e);if(a.code===d.mI)return v.Z.success("成功"),null==m||m(a.data),a.data;v.Z.error(a.message);break}case c.p.PANORAMA:{let a=await w(e);if(a.code===d.mI)return v.Z.success("成功"),null==m||m(a.data),a.data;v.Z.error(a.message)}}}catch(e){v.Z.error(null==e?void 0:e.message)}}),y=(0,r.useRef)(null),[N,b]=(0,r.useState)(!1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("input",{className:"hidden",type:"file",accept:t,ref:y,onClick:()=>{y.current.value=""},onChange:async e=>{var a;let t=null===(a=e.target.files)||void 0===a?void 0:a[0];t&&await j(t)}}),(0,n.jsx)(i.Z,{spinning:f,children:(0,n.jsxs)("div",{className:"relative inline-block",onMouseEnter:()=>{b(!0)},onMouseLeave:()=>{b(!1)},onClick:()=>{u&&(null==g||g())},children:[l===c.p.VIDEO&&u?(0,n.jsx)(x,{className:k()("h-24 w-24 cursor-pointer object-cover",{"opacity-30":N}),url:u}):(0,n.jsx)(o.Z,{className:k()("h-24 w-24 cursor-pointer object-cover",{"opacity-30":u&&N}),src:u||"/images/mock/add-image.png",width:100,height:100,alt:"add",onClick:()=>{u||y.current.click()}}),u&&N&&(0,n.jsx)(o.Z,{className:"absolute inset-0 m-auto opacity-50",src:"/images/trash-solid.svg",width:14,height:16,alt:"delete"})]})})]})});y.displayName="Upload";var N=y},7613:function(e){"use strict";e.exports={output:"export",basePath:"/historic-site-portal-demo"}},5503:function(e,a,t){"use strict";var n,r;t.d(a,{p:function(){return n}}),(r=n||(n={}))[r.VIDEO=0]="VIDEO",r[r.PANORAMA=1]="PANORAMA",r[r.IMAGE=2]="IMAGE"}},function(e){e.O(0,[550,720,656,320,253,488,744],function(){return e(e.s=3688)}),_N_E=e.O()}]);