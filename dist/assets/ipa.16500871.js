import{d as m,r as n,a7 as p,c as e,as as u,G as r,dt as g,du as d,a3 as a,ds as f}from"./index.05dbae85.js";import{F as h}from"./File.2e7595a0.js";import"./icon.12d21c69.js";import"./index.2cf2aea0.js";import"./useTitle.ed619740.js";import"./Layout.83a40c48.js";import"./index.fc33777e.js";import"./FolderTree.ac29c6fe.js";import"./index.ae03a0e2.js";const R=()=>{const t=m(),[i,s]=n(!1),[o,l]=n(!1),{currentObjLink:c}=p();return e(h,{get children(){return e(u,{spacing:"$2",get children(){return[e(r,{as:"a",get href(){return`itms-services://?action=download-manifest&url=${g}/i/${d(encodeURIComponent(a.raw_url)+"/"+f(encodeURIComponent(a.obj.name)))}.plist`},onClick:()=>{s(!0)},get children(){return t(`home.preview.${i()?"installing":"install"}`)}}),e(r,{as:"a",colorScheme:"primary",get href(){return"apple-magnifier://install?url="+encodeURIComponent(c(!0))},onClick:()=>{l(!0)},get children(){return t(`home.preview.${o()?"tr-installing":"tr-install"}`)}})]}})}})};export{R as default};