import{d as m,r as n,a7 as p,c as e,as as u,G as r,dt as g,du as d,a3 as a,ds as f}from"./index.fd284143.js";import{F as h}from"./File.f7e41e0a.js";import"./icon.b350bf9d.js";import"./index.b3e6b0f4.js";import"./useTitle.161eedad.js";import"./Layout.5b2072ce.js";import"./index.5375e8c4.js";import"./FolderTree.2bcd26bd.js";import"./index.0ee63995.js";const R=()=>{const t=m(),[i,s]=n(!1),[o,l]=n(!1),{currentObjLink:c}=p();return e(h,{get children(){return e(u,{spacing:"$2",get children(){return[e(r,{as:"a",get href(){return`itms-services://?action=download-manifest&url=${g}/i/${d(encodeURIComponent(a.raw_url)+"/"+f(encodeURIComponent(a.obj.name)))}.plist`},onClick:()=>{s(!0)},get children(){return t(`home.preview.${i()?"installing":"install"}`)}}),e(r,{as:"a",colorScheme:"primary",get href(){return"apple-magnifier://install?url="+encodeURIComponent(c(!0))},onClick:()=>{l(!0)},get children(){return t(`home.preview.${o()?"tr-installing":"tr-install"}`)}})]}})}})};export{R as default};