import{d as R,a0 as $,s as O,u as S,r as a,c as j,G as q,o as M,a1 as c,a as F,b as h,e as z,f as l,w as x,l as g,t as u,j as s,z as D,g as o,a2 as I,A as G,a3 as H,a4 as J,a5 as K,C as Q,a6 as W}from"./index.327307ba.js";/* empty css              *//* empty css               *//* empty css               *//* empty css              *//* empty css              *//* empty css               *//* empty css               *//* empty css               */import{_ as X}from"./_plugin-vue_export-helper.cdc0426e.js";const Y={key:0,class:"scrolling-notice"},Z={class:"commuse"},ee={class:"commuse-item"},te={class:"text-slate-900 dark:text-slate-100"},oe={class:"commuse-item"},se={class:"text-slate-900 dark:text-slate-100"},ae={class:"commuse-item"},le={class:"text-slate-900 dark:text-slate-100"},ne={class:"commuse-item"},ue={class:"text-slate-900 dark:text-slate-100"},de={class:"commuse-item"},re={class:"text-slate-900 dark:text-slate-100"},ie={class:"generate"},me=R({__name:"monster",setup(ce){const{text:_e,isSupported:w,copy:A}=$(),N=O(),{t:n,locale:_}=S();var d=a(1004010),r=a(1);const i=j(()=>`/spawn ${d.value} ${r.value} x${p.value} lv${v.value} r${V.value}`),b=a([]),k=a([]),p=a(1),v=a(1),V=a(1),T=W;function U(){A(i.value),w&&T.success(`\u5DF2\u590D\u5236${i.value}`)}const B=q("send"),C=a(!0);return M(()=>{_.value=navigator.language.includes("zh")?"zh":"en",c(()=>import("./monster.61de7c47.js"),[],import.meta.url).then(m=>{c(()=>import("./monster.aacad27c.js"),[],import.meta.url).then(e=>{b.value=_.value==="zh"?m.default:e.default})}),c(()=>import("./stage.9760bc16.js"),[],import.meta.url).then(m=>{c(()=>import("./stage.4ca3cd87.js"),[],import.meta.url).then(e=>{k.value=_.value==="zh"?m.default:e.default})}),setTimeout(()=>{C.value=!0},1e3)}),(m,e)=>{const L=F("marquee"),y=H,f=J,P=K,E=Q;return h(),z("div",null,[C.value?(h(),z("div",Y,[l(L,{behavior:"scroll",direction:"left"},{default:x(()=>[g(u(s(n)("main.notice")),1)]),_:1})])):D("",!0),o("div",Z,[o("div",ee,[o("div",te,u(s(n)("monster.monster1")),1),l(y,{"allow-search":"",modelValue:s(d),"onUpdate:modelValue":e[0]||(e[0]=t=>I(d)?d.value=t:d=t),options:b.value,placeholder:"",filterable:""},null,8,["modelValue","options"])]),o("div",oe,[o("div",se,u(s(n)("monster.monster2")),1),l(y,{"allow-search":"",modelValue:s(r),"onUpdate:modelValue":e[1]||(e[1]=t=>I(r)?r.value=t:r=t),options:k.value,placeholder:"",filterable:""},null,8,["modelValue","options"])]),o("div",ae,[o("div",le,u(s(n)("monster.number")),1),l(f,{modelValue:p.value,"onUpdate:modelValue":e[2]||(e[2]=t=>p.value=t),placeholder:"",mode:"button",size:"large",class:"input-demo"},null,8,["modelValue"])]),o("div",ne,[o("div",ue,u(s(n)("monster.level")),1),l(f,{modelValue:v.value,"onUpdate:modelValue":e[3]||(e[3]=t=>v.value=t),placeholder:"",mode:"button",size:"large",class:"input-demo"},null,8,["modelValue"])]),o("div",de,[o("div",re,u(s(n)("monster.radius")),1),l(f,{modelValue:V.value,"onUpdate:modelValue":e[4]||(e[4]=t=>V.value=t),placeholder:"",mode:"button",size:"large",class:"input-demo"},null,8,["modelValue"])]),o("div",ie,[l(P,{modelValue:i.value,"onUpdate:modelValue":e[5]||(e[5]=t=>i.value=t),placeholder:""},null,8,["modelValue"]),l(E,{type:"outline",onClick:U},{default:x(()=>[g("\u590D\u5236")]),_:1}),s(N).isLogin?(h(),G(E,{key:0,type:"outline",onClick:e[6]||(e[6]=t=>s(B)(i.value))},{default:x(()=>[g("\u6267\u884C")]),_:1})):D("",!0)])])])}}});const ye=X(me,[["__scopeId","data-v-c12d7292"]]);export{ye as default};
