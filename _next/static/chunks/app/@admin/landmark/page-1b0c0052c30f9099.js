(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[103],{7270:function(e,a,t){Promise.resolve().then(t.bind(t,6161))},6161:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return B}});var n,r,o=t(9268),i=t(4415),s=t(1904),c=t(6006),l=t(2908),d=t(1263),u=t(6831),m=t(9153),g=t(5474),p=t(666),h=t(6653);async function f(){return await (0,g.gw)(2e3),{code:p.mI,message:"Mock",data:[{id:1,caseName:"林家花園",locationX:"24.06109876319344",locationY:"120.70354094928975",address:"413台中市霧峰區萊園路91號",description:"設伝夫求釜燃景軍業論情再馬実。軽武以",coverImgURL:"/images/mock/林家花園.jpeg",imageList:["/images/mock/林家花園.jpeg"],rotationList:["/images/mock/林家花園.jpeg"],videoList:["/images/mock/林家花園.jpeg"],operator:"admin01",operatorTime:"2023-06-19 23:30:45"}],currentPage:1,pageSize:20,totalPage:1}}async function v(e){if(p.M7)return await f();let a=new URLSearchParams(e).toString(),t=await fetch("".concat(p.FH,"/management/sites?").concat(a),{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat((0,h.L)())}});if(!t.ok)throw Error("HTTP error! status: ".concat(t.status));return await t.json()}async function j(){return await (0,g.gw)(2e3),{code:p.mI,message:"Mock",data:{id:1,caseName:"林家花園",locationX:"24.06109876319344",locationY:"120.70354094928975",address:"413台中市霧峰區萊園路91號",description:"設伝夫求釜燃景軍業論情再馬実。軽武以",coverImgURL:"/images/mock/林家花園.jpeg",imageList:["/images/mock/林家花園.jpeg"],rotationList:["/images/mock/林家花園.jpeg"],videoList:["/images/mock/林家花園.jpeg"],operator:"admin01",operatorTime:"2023-06-19 23:30:45"}}}async function w(e){if(p.M7)return await j();let a=await fetch("".concat(p.FH,"/management/sites/").concat(e),{method:"GET",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat((0,h.L)())}});if(!a.ok)throw Error("HTTP error! status: ".concat(a.status));return await a.json()}async function x(){return await (0,g.gw)(2e3),{code:p.mI,message:"mock"}}async function k(e){if(p.M7)return await x();let a=await fetch("".concat(p.FH,"/management/sites/save"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat((0,h.L)())},body:JSON.stringify(e)});if(!a.ok)throw Error("HTTP error! status: ".concat(a.status));return await a.json()}async function N(e,a){return await (0,g.gw)(2e3),{code:p.mI,message:"mock"}}async function y(e,a){if(p.M7)return await N(e,a);let t=await fetch("".concat(p.FH,"/management/sites/").concat(e),{method:"PUT",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat((0,h.L)())},body:JSON.stringify(a)});if(!t.ok)throw Error("HTTP error! status: ".concat(t.status));return await t.json()}async function b(){return await (0,g.gw)(2e3),{code:p.mI,message:"mock"}}async function L(e){if(p.M7)return await b();let a=await fetch("".concat(p.FH,"/management/sites/").concat(e),{method:"DELETE",mode:"cors",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat((0,h.L)())}});if(!a.ok)throw Error("HTTP error! status: ".concat(a.status));return await a.json()}var I=t(7007),T=t(3368),Z=t(1897),E=t(2238),P=t(6497),C=t(7053),S=t(5503),M=t(158);async function A(e){try{let a=await w(e);if((null==a?void 0:a.code)!==p.mI){M.Z.error(null==a?void 0:a.message);return}return a.data}catch(e){}}async function z(e){let{values:a,id:t,type:n}=e;console.log({values:a,type:n});let[o,i]=a.coordinate.split(",").map(e=>e.trim());switch(n){case r.add:return await k({caseName:a.caseName,locationX:o,locationY:i,address:a.address,description:a.description,imageList:a.imageList.filter(e=>void 0!==e),videoList:a.videoList.filter(e=>void 0!==e),rotationList:a.rotationList.filter(e=>void 0!==e)});case r.update:return await y(t,{caseName:a.caseName,locationX:o,locationY:i,address:a.address,description:a.description,imageList:a.imageList.filter(e=>void 0!==e),videoList:a.videoList.filter(e=>void 0!==e),rotationList:a.rotationList.filter(e=>void 0!==e)});default:throw Error("Invalid type")}}(n=r||(r={}))[n.add=0]="add",n[n.update=1]="update";let R="landmark-form",O=(0,c.memo)(e=>{let{open:a,id:t,onClose:n,afterAdd:i,afterEdit:g}=e,h=t?r.update:r.add,f=(0,c.useRef)(),{run:v,reset:j,loading:w}=(0,s.Q)(A);(0,c.useEffect)(()=>{let e=!1;return(async()=>{if(a){var n,r;if(null===(n=f.current)||void 0===n||n.initialize({imageList:[void 0],videoList:[void 0],rotationList:[void 0]}),t){let a=await v(t);!e&&a&&(null===(r=f.current)||void 0===r||r.initialize({...a,coordinate:"".concat(a.locationX,", ").concat(a.locationY),imageList:a.imageList.length<10?a.imageList.concat(void 0):a.imageList,videoList:a.videoList.length<2?a.videoList.concat(void 0):a.videoList}))}}})(),()=>{e=!0}},[t,a,j,v]);let{run:x,loading:k}=(0,s.Q)(z);return(0,o.jsx)(I.Z,{open:a,title:"古蹟資訊",footer:(0,o.jsx)("div",{className:"flex justify-end",children:(0,o.jsx)(u.Z,{form:R,type:"submit",looks:m.L.dark,loading:k,children:"保存"})}),width:554,isCloseButtonShow:!0,onClose:k?void 0:n,maskClosable:!1,children:(0,o.jsx)(T.Z,{expand:!0,spinning:w,children:(0,o.jsx)(l.l0,{onSubmit:async e=>{let a=await x({values:e,id:t,type:h});(null==a?void 0:a.code)!==p.mI?M.Z.error(null==a?void 0:a.message):(M.Z.success("成功"),n(),h===r.add?i():g())},mutators:{...E.Z},render:e=>{let{form:a,handleSubmit:t,values:n}=e;return f.current=a,console.log({values:n}),(0,o.jsxs)("form",{id:R,onSubmit:t,children:[(0,o.jsxs)("div",{className:"m-2",children:[(0,o.jsx)("label",{className:"mb-2 block",children:"古蹟名稱"}),(0,o.jsx)(l.gN,{name:"caseName",render:e=>{let{input:{value:a,onChange:t}}=e;return(0,o.jsx)(d.Z,{className:"block w-full text-sm",value:a,onChange:t})}})]}),(0,o.jsxs)("div",{className:"m-2",children:[(0,o.jsx)("label",{className:"mb-2 block",children:"座標位置"}),(0,o.jsx)(l.gN,{name:"coordinate",render:e=>{let{input:{value:a,onChange:t}}=e;return(0,o.jsx)(d.Z,{className:"block w-full text-sm",value:a,onChange:t,placeholder:"請輸入古蹟座標位置(google map中右鍵可複製)"})}})]}),(0,o.jsxs)("div",{className:"m-2",children:[(0,o.jsx)("label",{className:"mb-2 block",children:"古蹟地址"}),(0,o.jsx)(l.gN,{name:"address",render:e=>{let{input:{value:a,onChange:t}}=e;return(0,o.jsx)(d.Z,{className:"block w-full text-sm",value:a,onChange:t})}})]}),(0,o.jsxs)("div",{className:"m-2",children:[(0,o.jsx)("label",{className:"mb-2 block",children:"古蹟描述"}),(0,o.jsx)(l.gN,{name:"description",render:e=>{let{input:{value:a,onChange:t}}=e;return(0,o.jsx)(Z.Z,{className:"block w-full text-sm",value:a,onChange:t})}})]}),(0,o.jsxs)("div",{className:"m-2",children:[(0,o.jsx)("label",{className:"mb-2 block",children:"新增圖片"}),(0,o.jsx)(P.F2,{name:"imageList",render:e=>{let{fields:a}=e;return(0,o.jsx)("div",{className:"flex w-full flex-wrap gap-1",children:a.map((e,t)=>(0,o.jsx)(l.gN,{name:e,render:e=>{let{input:{value:n,onChange:r}}=e;return(0,o.jsx)(C.Z,{accept:"image/*",fileType:S.p.IMAGE,value:n,onChange:e=>{a.length<10&&a.push(void 0),r(e)},onRemove:()=>{a.remove(t),setTimeout(()=>{10===a.length&&a.value[9]&&a.push(void 0)})}})}},e))})}})]}),(0,o.jsxs)("div",{className:"m-2",children:[(0,o.jsx)("label",{className:"mb-2 block",children:"新增影片"}),(0,o.jsx)(P.F2,{name:"videoList",render:e=>{let{fields:a}=e;return(0,o.jsx)("div",{className:"flex w-full flex-wrap gap-1",children:a.map((e,t)=>(0,o.jsx)(l.gN,{name:e,render:e=>{let{input:{value:n,onChange:r}}=e;return(0,o.jsx)(C.Z,{accept:"video/*",fileType:S.p.VIDEO,value:n,onChange:e=>{a.length<2&&a.push(void 0),r(e)},onRemove:()=>{a.remove(t),setTimeout(()=>{2===a.length&&a.value[1]&&a.push(void 0)})}})}},e))})}})]}),(0,o.jsxs)("div",{className:"m-2",children:[(0,o.jsx)("label",{className:"mb-2 block",children:"環景照片"}),(0,o.jsx)(P.F2,{name:"rotationList",render:e=>{let{fields:a}=e;return a.map((e,t)=>(0,o.jsx)(l.gN,{name:e,render:e=>{let{input:{value:n,onChange:r}}=e;return(0,o.jsx)(C.Z,{accept:"image/*",fileType:S.p.PANORAMA,value:n,onChange:r,onRemove:()=>{a.remove(t),setTimeout(()=>{1===a.length&&a.push(void 0)})}})}},e))}})]})]})}})})})});O.displayName="FormModal";var F=t(7454);async function H(e,a){console.log(e,a);try{let t=await v((0,g.o2)({id:null==e?void 0:e.id,name:null==e?void 0:e.name,pageNum:null==a?void 0:a.page,pageSize:null==a?void 0:a.pageSize}));return(null==t?void 0:t.code)!==p.mI&&M.Z.error(null==t?void 0:t.message),t}catch(e){return}}let D=(0,c.memo)(()=>{let e=(0,c.useRef)(),{run:a,refresh:t,data:n,loading:r}=(0,s.Q)(H),h=(0,c.useRef)(a),[f,v]=(0,c.useState)({page:1,pageSize:20,totalPage:1}),j=(0,c.useRef)(f);(0,c.useEffect)(()=>{(async()=>{let e=await h.current(void 0,j.current);(null==e?void 0:e.code)===p.mI&&v({page:e.currentPage,pageSize:e.pageSize,totalPage:e.totalPage})})()},[]);let{openModal:w,formModalProps:x}=function(){let[e,a]=(0,c.useState)({open:!1}),t=(0,c.useCallback)(e=>{a({id:e,open:!0})},[]),n=(0,c.useCallback)(()=>{a({open:!1})},[]);return(0,c.useMemo)(()=>({openModal:t,formModalProps:{...e,onClose:n}}),[t,e,n])}(),k=(0,c.useMemo)(()=>[{title:"ID",dataIndex:"id"},{title:"古蹟名稱",dataIndex:"caseName"},{title:"座標位置",render:(e,a)=>"".concat(a.locationX,", ").concat(a.locationY)},{title:"古蹟地址",dataIndex:"address"},{title:"古蹟描述",dataIndex:"description"},{title:"封面照",dataIndex:"coverImgURL",render:e=>(0,o.jsx)(F.Z,{className:"h-24 w-24 min-w-24 object-cover",src:e,width:100,height:100,alt:"封面照"})},{title:"操作者",dataIndex:"operator"},{title:"操作時間",dataIndex:"operatorTime",render:e=>(0,g.rn)(e)},{title:"操作",render:(e,a)=>(0,o.jsxs)("div",{className:"flex gap-2",children:[(0,o.jsx)(u.Z,{looks:m.L.green,onClick:()=>{w(a.id)},children:"編輯"}),(0,o.jsx)(u.Z,{looks:m.L.danger,onClick:()=>{I.Z.confirm({content:(0,o.jsx)("p",{children:"是否確認刪除？"}),onOk:async()=>{let e=await L(a.id);if((null==e?void 0:e.code)!==p.mI)throw M.Z.error(null==e?void 0:e.message),Error("delete failed");M.Z.success("成功"),t()},okButtonProps:{looks:m.L.danger}})},children:"刪除"})]})}],[w,t]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"flex items-center justify-between",children:[(0,o.jsx)(l.l0,{onSubmit:async e=>{let t=await a(e,{page:1,pageSize:f.pageSize});(null==t?void 0:t.code)===p.mI?v({page:t.currentPage,pageSize:t.pageSize,totalPage:t.totalPage}):v(e=>({...e,page:1,totalPage:1}))},render:a=>{let{form:t,handleSubmit:n}=a;return e.current=t,(0,o.jsxs)("form",{className:"flex gap-2",onSubmit:n,children:[(0,o.jsx)(l.gN,{name:"id",render:e=>{let{input:{value:a,onChange:t}}=e;return(0,o.jsx)(d.Z,{value:a,onChange:t,placeholder:"請輸入ID"})}}),(0,o.jsx)(l.gN,{name:"name",render:e=>{let{input:{value:a,onChange:t}}=e;return(0,o.jsx)(d.Z,{value:a,onChange:t,placeholder:"請輸入古蹟名稱"})}}),(0,o.jsx)("button",{className:"hidden",type:"submit"})]})}}),(0,o.jsx)(u.Z,{looks:m.L.dark,onClick:()=>{w()},children:"新增古蹟"})]}),(0,o.jsx)(i.Z,{className:"mt-6",columns:k,dataSource:null==n?void 0:n.data,loading:r,pagination:{...f,onChange:(t,n)=>{var r;v(e=>({...e,page:t,pageSize:n})),a(null===(r=e.current)||void 0===r?void 0:r.getState(),{page:t,pageSize:n})}}}),(0,o.jsx)(O,{...x,afterAdd:a,afterEdit:t})]})});D.displayName="LandMarkPage";var B=D},7454:function(e,a,t){"use strict";var n=t(9268),r=t(6394),o=t.n(r),i=t(6006),s=t(7613),c=t.n(s);let l=(0,i.memo)((0,i.forwardRef)((e,a)=>{let{src:t,...r}=e;return(0,n.jsx)(o(),{...r,ref:a,unoptimized:!0,src:"string"==typeof t&&t.startsWith("/")&&c().basePath?"".concat(c().basePath).concat(t):t})}));l.displayName="CustomImage",a.Z=l},1897:function(e,a,t){"use strict";var n=t(9268),r=t(8683),o=t.n(r),i=t(6006);let s=(0,i.memo)((0,i.forwardRef)((e,a)=>{let{className:t,value:r,onChange:i}=e;return(0,n.jsx)("textarea",{className:o()("rounded border border-solid border-gray-300 p-1",t),value:r,onChange:e=>{null==i||i(e.target.value)},ref:a})}));a.Z=s},7053:function(e,a,t){"use strict";t.d(a,{Z:function(){return y}});var n=t(9268),r=t(6006),o=t(7454),i=t(1904),s=t(3368),c=t(5503),l=t(5474),d=t(666),u=t(6653);async function m(){return await (0,l.gw)(2e3),{code:d.mI,message:"Mock",data:"/images/mock/朝日夫婦.jpeg"}}async function g(e){if(d.M7)return await m();let a=new FormData;a.append("file",e);let t=await fetch("".concat(d.FH,"/file/upload/image"),{method:"POST",mode:"cors",headers:{Authorization:"Bearer ".concat((0,u.L)())},body:a});if(!t.ok)throw Error("HTTP error! status: ".concat(t.status));return await t.json()}async function p(){return await (0,l.gw)(2e3),{code:d.mI,message:"Mock",data:"/videos/mock/朝日夫婦.mp4"}}async function h(e){if(d.M7)return await p();let a=new FormData;a.append("file",e);let t=await fetch("".concat(d.FH,"/file/upload/video"),{method:"POST",mode:"cors",headers:{Authorization:"Bearer ".concat((0,u.L)())},body:a});if(!t.ok)throw Error("HTTP error! status: ".concat(t.status));return await t.json()}async function f(){return await (0,l.gw)(2e3),{code:d.mI,message:"Mock",data:"/panoramas/mock/朝日夫婦.jpeg"}}async function v(e){if(d.M7)return await f();let a=new FormData;a.append("file",e);let t=await fetch("".concat(d.FH,"/file/upload/panorama"),{method:"POST",mode:"cors",headers:{Authorization:"Bearer ".concat((0,u.L)())},body:a});if(!t.ok)throw Error("HTTP error! status: ".concat(t.status));return await t.json()}var j=t(158);let w=(0,r.memo)(e=>{let{className:a,url:t}=e,[i,c]=(0,r.useState)(""),l=(0,r.useRef)(null),d=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let e=l.current,a=d.current,t=async()=>{try{e.currentTime=0,await e.play(),e.removeEventListener("canplay",t),e.pause(),a.width=e.videoWidth,a.height=e.videoHeight,a.getContext("2d").drawImage(e,0,0,a.width,a.height),c(a.toDataURL())}catch(e){console.log(e)}};return e.addEventListener("canplay",t),()=>{e.removeEventListener("canplay",t)}},[]),(0,n.jsxs)("div",{children:[(0,n.jsx)("video",{className:"hidden",src:t,ref:l,crossOrigin:"anonymous"}),(0,n.jsx)("canvas",{className:"hidden",ref:d}),(0,n.jsx)(s.Z,{spinning:!!t&&!i,children:(0,n.jsx)(o.Z,{className:a,src:i||"/images/mock/add-image.png",width:100,height:100,alt:"Video Thumbnail"})})]})});w.displayName="VideoThumbnail";var x=t(8683),k=t.n(x);let N=(0,r.memo)(e=>{let{className:a,accept:t,fileType:l,value:u,onChange:m,onRemove:p}=e;console.log({value:u});let{loading:f,run:x}=(0,i.Q)(async e=>{try{switch(l){case c.p.IMAGE:{let a=await g(e);if(a.code===d.mI)return j.Z.success("成功"),null==m||m(a.data),a.data;j.Z.error(a.message);break}case c.p.VIDEO:{let a=await h(e);if(a.code===d.mI)return j.Z.success("成功"),null==m||m(a.data),a.data;j.Z.error(a.message);break}case c.p.PANORAMA:{let a=await v(e);if(a.code===d.mI)return j.Z.success("成功"),null==m||m(a.data),a.data;j.Z.error(a.message)}}}catch(e){j.Z.error(null==e?void 0:e.message)}}),N=(0,r.useRef)(null),[y,b]=(0,r.useState)(!1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("input",{className:"hidden",type:"file",accept:t,ref:N,onClick:()=>{N.current.value=""},onChange:async e=>{var a;let t=null===(a=e.target.files)||void 0===a?void 0:a[0];t&&await x(t)}}),(0,n.jsx)(s.Z,{spinning:f,children:(0,n.jsxs)("div",{className:"relative inline-block",onMouseEnter:()=>{b(!0)},onMouseLeave:()=>{b(!1)},onClick:()=>{u&&(null==p||p())},children:[l===c.p.VIDEO&&u?(0,n.jsx)(w,{className:k()("h-24 w-24 cursor-pointer object-cover",{"opacity-30":y}),url:u}):(0,n.jsx)(o.Z,{className:k()("h-24 w-24 cursor-pointer object-cover",{"opacity-30":u&&y}),src:u||"/images/mock/add-image.png",width:100,height:100,alt:"add",onClick:()=>{u||N.current.click()}}),u&&y&&(0,n.jsx)(o.Z,{className:"absolute inset-0 m-auto opacity-50",src:"/images/trash-solid.svg",width:14,height:16,alt:"delete"})]})})]})});N.displayName="Upload";var y=N},7613:function(e){"use strict";e.exports={output:"export",basePath:"/historic-site-portal-demo"}},5503:function(e,a,t){"use strict";var n,r;t.d(a,{p:function(){return n}}),(r=n||(n={}))[r.VIDEO=0]="VIDEO",r[r.PANORAMA=1]="PANORAMA",r[r.IMAGE=2]="IMAGE"}},function(e){e.O(0,[550,720,656,320,253,488,744],function(){return e(e.s=7270)}),_N_E=e.O()}]);