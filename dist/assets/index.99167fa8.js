import{c as t,K as P,a6 as N,q as k,at as A,au as v,bM as l,a2 as T,a1 as Y,e as L,d as g,R as V,U as B,Q as D,S as h,I as E,bN as _,r as y,bO as f,as as p,a9 as c,ar as x,Y as n,Z as r,bP as M,bQ as G,bR as W,bS as U,bT as z,bU as H,bV as F,bW as j,bX as X,bY as J,bZ as Q,b_ as Z,b$ as q,aJ as K,aW as ee,b9 as te,a as S,ah as R,c0 as ne,n as re,bk as oe,be as ie,bf as ae,bg as se,bh as le,bi as ce,c1 as ue,ay as de,c2 as me,c3 as ge}from"./index.6c3e726d.js";import{c as $,I as _e,d as he,e as Ee,f as pe,g as Le,b as fe}from"./useTitle.fcfb6e9c.js";import{c as Oe,d as Ie,e as be}from"./index.8bc71455.js";import{A as Ae}from"./LinkWithBase.b1b9a052.js";import{S as ve}from"./index.a31d5be2.js";var a=(e=>(e[e.SINGLE=0]="SINGLE",e[e.SITE=1]="SITE",e[e.STYLE=2]="STYLE",e[e.PREVIEW=3]="PREVIEW",e[e.GLOBAL=4]="GLOBAL",e[e.ARIA2=5]="ARIA2",e[e.INDEX=6]="INDEX",e[e.SSO=7]="SSO",e[e.LDAP=8]="LDAP",e[e.S3=9]="S3",e[e.FTP=10]="FTP",e))(a||{}),Te=(e=>(e[e.PUBLIC=0]="PUBLIC",e[e.PRIVATE=1]="PRIVATE",e[e.READONLY=2]="READONLY",e[e.DEPRECATED=3]="DEPRECATED",e))(Te||{});const Re=e=>{const o=k(()=>{if(!A.is_admin(v())){if(e.role===void 0)return!1;if(e.role===l.GENERAL&&!A.is_general(v()))return!1}return!0});return t(Y,{get fallback(){return t($e,e)},get children(){return[t(T,{get when(){return!o()},children:null}),t(T,{get when(){return e.children},get children(){return t(Pe,e)}})]}})},$e=e=>{const{pathname:o}=L(),i=g(),u=()=>o()===e.to;return t(Ae,{get cancelBase(){return e.to.startsWith("http")},display:"flex",as:V,get href(){return e.to},onClick:d=>{var b;if(w(),e.refresh){(b=d.stopPropagation)==null||b.call(d);let m=e.to;m.startsWith("http")||(m=B(m)),window.open(m,"_self")}},w:"$full",alignItems:"center",get _hover(){return{bgColor:u()?"$info4":D(),textDecoration:"none"}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get bgColor(){return u()?"$info4":""},get color(){return u()?"$info11":""},get external(){return e.external},get children(){return[t(h,{get when(){return e.icon},get children(){return t(E,{mr:"$2",get as(){return e.icon}})}}),t(_,{get children(){return i(e.title)}})]}})},Pe=e=>{const{pathname:o}=L(),[i,u]=y(o().includes(e.to)),d=g();return t(c,{w:"$full",get children(){return[t(f,{justifyContent:"space-between",onClick:()=>{u(!i())},w:"$full",alignItems:"center",get _hover(){return{bgColor:D()}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get children(){return[t(p,{get children(){return[t(h,{get when(){return e.icon},get children(){return t(E,{mr:"$2",get as(){return e.icon}})}}),t(_,{get children(){return d(e.title)}})]}}),t(E,{as:Oe,get transform(){return i()?"rotate(90deg)":"none"},transition:"transform 0.2s"})]}}),t(h,{get when(){return i()},get children(){return t(c,{pl:"$2",get children(){return t(O,{get items(){return e.children}})}})}})]}})},O=e=>t(N,{p:"$2",w:"$full",color:"$neutral11",spacing:"$1",get children(){return t(P,{get each(){return e.items},children:o=>t(Re,o)})}});function De(e){return x({a:{viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 015.25 7H4v4a1 1 0 001 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0114.25 16h-3.5A1.75 1.75 0 019 14.25v-.75H5A2.5 2.5 0 012.5 11V7h-.75A1.75 1.75 0 010 5.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm9 9a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"/>'},e)}const s=n(()=>r(()=>import("./Common.490dc854.js"),["assets/Common.490dc854.js","assets/index.6c3e726d.js","assets/index.22648e1d.css","assets/useTitle.fcfb6e9c.js","assets/SettingItem.84a76877.js","assets/item_type.be442da4.js","assets/index.8bc71455.js","assets/ResponsiveGrid.eed66dbc.js","assets/LinkWithBase.b1b9a052.js","assets/index.a31d5be2.js"])),I=[{title:"manage.sidemenu.profile",icon:M,to:"/LONGYun2025",role:l.GUEST,component:n(()=>r(()=>import("./Profile.29488a59.js"),["assets/Profile.29488a59.js","assets/index.6c3e726d.js","assets/index.22648e1d.css","assets/useTitle.fcfb6e9c.js","assets/webauthn-json.browser-ponyfill.1c672167.js"]))},{title:"manage.sidemenu.settings",icon:G,to:"/LONGYun2025/settings",children:[{title:"manage.sidemenu.site",icon:W,to:"/LONGYun2025/settings/site",component:()=>t(s,{get group(){return a.SITE}})},{title:"manage.sidemenu.style",icon:U,to:"/LONGYun2025/settings/style",component:()=>t(s,{get group(){return a.STYLE}})},{title:"manage.sidemenu.preview",icon:z,to:"/LONGYun2025/settings/preview",component:()=>t(s,{get group(){return a.PREVIEW}})},{title:"manage.sidemenu.global",icon:H,to:"/LONGYun2025/settings/global",component:()=>t(s,{get group(){return a.GLOBAL}})},{title:"manage.sidemenu.sso",icon:$,to:"/LONGYun2025/settings/sso",component:()=>t(s,{get group(){return a.SSO}})},{title:"manage.sidemenu.ldap",icon:$,to:"/LONGYun2025/settings/ldap",component:()=>t(s,{get group(){return a.LDAP}})},{title:"manage.sidemenu.s3",icon:F,to:"/LONGYun2025/settings/s3",component:n(()=>r(()=>import("./S3.50e2eed7.js"),["assets/S3.50e2eed7.js","assets/index.6c3e726d.js","assets/index.22648e1d.css","assets/useTitle.fcfb6e9c.js","assets/SettingItem.84a76877.js","assets/item_type.be442da4.js","assets/index.8bc71455.js","assets/ResponsiveGrid.eed66dbc.js","assets/FolderTree.88a7f2fd.js","assets/index.00390a45.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/LinkWithBase.b1b9a052.js","assets/index.a31d5be2.js"]))},{title:"manage.sidemenu.ftp",icon:j,to:"/@manage/settings/ftp",component:()=>t(s,{get group(){return a.FTP}})},{title:"manage.sidemenu.other",icon:X,to:"/LONGYun2025/settings/other",component:n(()=>r(()=>import("./Other.645a15a1.js"),["assets/Other.645a15a1.js","assets/index.6c3e726d.js","assets/index.22648e1d.css","assets/useTitle.fcfb6e9c.js","assets/SettingItem.84a76877.js","assets/item_type.be442da4.js","assets/index.8bc71455.js","assets/LinkWithBase.b1b9a052.js","assets/index.a31d5be2.js"]))}]},{title:"manage.sidemenu.tasks",icon:De,to:"/LONGYun2025/tasks",role:l.GENERAL,children:[{title:"manage.sidemenu.offline_download",icon:_e,to:"/LONGYun2025/tasks/aria2",role:l.GENERAL,component:n(()=>r(()=>import("./offline_download.82e97f61.js"),["assets/offline_download.82e97f61.js","assets/index.6c3e726d.js","assets/index.22648e1d.css","assets/useTitle.fcfb6e9c.js","assets/helper.c76c92a8.js","assets/Paginator.465e1f93.js","assets/index.8bc71455.js"]))},{title:"manage.sidemenu.upload",icon:J,to:"/LONGYun2025/tasks/upload",role:l.GENERAL,component:n(()=>r(()=>import("./Upload.c570c4a2.js"),["assets/Upload.c570c4a2.js","assets/index.6c3e726d.js","assets/index.22648e1d.css","assets/useTitle.fcfb6e9c.js","assets/helper.c76c92a8.js","assets/Paginator.465e1f93.js","assets/index.8bc71455.js"]))},{title:"manage.sidemenu.copy",icon:he,to:"/LONGYun2025/tasks/copy",role:l.GENERAL,component:n(()=>r(()=>import("./Copy.bffc5226.js"),["assets/Copy.bffc5226.js","assets/index.6c3e726d.js","assets/index.22648e1d.css","assets/useTitle.fcfb6e9c.js","assets/helper.c76c92a8.js","assets/Paginator.465e1f93.js","assets/index.8bc71455.js"]))}]},{title:"manage.sidemenu.users",icon:Q,to:"/LONGYun2025/users",component:n(()=>r(()=>import("./Users.06007a71.js"),["assets/Users.06007a71.js","assets/index.6c3e726d.js","assets/index.22648e1d.css","assets/useTitle.fcfb6e9c.js","assets/DeletePopover.6f3e8191.js","assets/Wether.d7f01ccf.js"]))},{title:"manage.sidemenu.storages",icon:Z,to:"/LONGYun2025/storages",component:n(()=>r(()=>import("./Storages.0fb7f0ed.js"),["assets/Storages.0fb7f0ed.js","assets/index.6c3e726d.js","assets/index.22648e1d.css","assets/useTitle.fcfb6e9c.js","assets/DeletePopover.6f3e8191.js"]))},{title:"manage.sidemenu.metas",icon:ve,to:"/LONGYun2025/metas",component:n(()=>r(()=>import("./Metas.ecc858dc.js"),["assets/Metas.ecc858dc.js","assets/index.6c3e726d.js","assets/index.22648e1d.css","assets/useTitle.fcfb6e9c.js","assets/DeletePopover.6f3e8191.js","assets/Wether.d7f01ccf.js"]))},{title:"manage.sidemenu.indexes",icon:q,to:"/LONGYun2025/indexes",component:n(()=>r(()=>import("./indexes.cf7b168c.js"),["assets/indexes.cf7b168c.js","assets/index.6c3e726d.js","assets/index.22648e1d.css","assets/Common.490dc854.js","assets/useTitle.fcfb6e9c.js","assets/SettingItem.84a76877.js","assets/item_type.be442da4.js","assets/index.8bc71455.js","assets/ResponsiveGrid.eed66dbc.js","assets/LinkWithBase.b1b9a052.js","assets/index.a31d5be2.js"]))},{title:"manage.sidemenu.backup-restore",to:"/LONGYun2025/backup-restore",icon:Ie,component:n(()=>r(()=>import("./backup-restore.7ab185af.js"),["assets/backup-restore.7ab185af.js","assets/index.6c3e726d.js","assets/index.22648e1d.css","assets/useTitle.fcfb6e9c.js","assets/index.00390a45.js","assets/_commonjs-dynamic-modules.30ae7933.js"]))},{title:"manage.sidemenu.home",icon:Ee,to:"/",role:l.GUEST,refresh:!0}],{isOpen:Se,onOpen:we,onClose:w}=K();ee(()=>te.get("/auth/logout"));const Ce=()=>{const e=g(),{to:o}=L();return t(c,{as:"header",position:"sticky",top:"0",left:"0",right:"0",zIndex:"$sticky",height:"64px",flexShrink:0,shadow:"$md",p:"$4",get bgColor(){return S("$background","$neutral2")()},get children(){return[t(f,{alignItems:"center",justifyContent:"space-between",h:"$full",get children(){return[t(p,{spacing:"$2",get children(){return[t(R,{"aria-label":"menu",get icon(){return t(be,{})},display:{"@sm":"none"},onClick:we,size:"sm"}),t(_,{fontSize:"$xl",color:"$info9",cursor:"pointer",onClick:()=>{o("/LONGYun2025")},get children(){return e("manage.title")}})]}}),t(p,{spacing:"$1",get children(){return t(R,{"aria-label":"logout",get icon(){return t(pe,{})},onClick:()=>{ne(),re.success(e("manage.logout_success")),o(`/\u9F99\u6C0F\u4E91\u76D8?redirect=${encodeURIComponent(location.pathname)}`)},size:"sm"})}})]}}),t(oe,{get opened(){return Se()},placement:"left",onClose:w,get children(){return[t(ie,{}),t(ae,{get children(){return[t(se,{}),t(le,{color:"$info9",get children(){return e("manage.title")}}),t(ce,{get children(){return t(O,{items:I})}})]}})]}})]}})},Ne=[{to:"/storages/add",component:n(()=>r(()=>import("./AddOrEdit.981a7a83.js"),["assets/AddOrEdit.981a7a83.js","assets/index.6c3e726d.js","assets/index.22648e1d.css","assets/item_type.be442da4.js","assets/ResponsiveGrid.eed66dbc.js"]))},{to:"/storages/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.981a7a83.js"),["assets/AddOrEdit.981a7a83.js","assets/index.6c3e726d.js","assets/index.22648e1d.css","assets/item_type.be442da4.js","assets/ResponsiveGrid.eed66dbc.js"]))},{to:"/users/add",component:n(()=>r(()=>import("./AddOrEdit.5b61f120.js"),["assets/AddOrEdit.5b61f120.js","assets/index.6c3e726d.js","assets/index.22648e1d.css","assets/FolderTree.88a7f2fd.js","assets/index.8bc71455.js"]))},{to:"/users/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.5b61f120.js"),["assets/AddOrEdit.5b61f120.js","assets/index.6c3e726d.js","assets/index.22648e1d.css","assets/FolderTree.88a7f2fd.js","assets/index.8bc71455.js"]))},{to:"/metas/add",component:n(()=>r(()=>import("./AddOrEdit.d7915f68.js"),["assets/AddOrEdit.d7915f68.js","assets/index.6c3e726d.js","assets/index.22648e1d.css","assets/FolderTree.88a7f2fd.js","assets/index.8bc71455.js"]))},{to:"/metas/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.d7915f68.js"),["assets/AddOrEdit.d7915f68.js","assets/index.6c3e726d.js","assets/index.22648e1d.css","assets/FolderTree.88a7f2fd.js","assets/index.8bc71455.js"]))},{to:"/2fa",component:n(()=>r(()=>import("./2fa.a0263b17.js"),["assets/2fa.a0263b17.js","assets/index.6c3e726d.js","assets/index.22648e1d.css"]))},{to:"/messenger",component:n(()=>r(()=>import("./Messenger.8982bcab.js"),["assets/Messenger.8982bcab.js","assets/index.6c3e726d.js","assets/index.22648e1d.css"]))}],ke=e=>(Le(e.title),t(de,{h:"$full",get children(){return t(_,{get children(){return e.title}})}})),C=(e,o=[])=>(e.forEach(i=>{i.children?C(i.children,o):o.push({to:ue(i.to,"/LONGYun2025"),component:i.component||(()=>t(ke,{get title(){return i.title},get to(){return i.to||"empty"}}))})}),o),Ye=C(I).concat(Ne),Ve=()=>{const e=g();return fe(()=>e("manage.title")),t(c,{css:{"--hope-colors-background":"var(--hope-colors-loContrast)"},bgColor:"$background",w:"$full",get children(){return[t(Ce,{}),t(f,{w:"$full",h:"calc(100vh - 64px)",get children(){return[t(c,{display:{"@initial":"none","@sm":"block"},w:"$56",h:"$full",shadow:"$md",get bgColor(){return S("$background","$neutral2")()},overflowY:"auto",get children(){return t(O,{items:I})}}),t(c,{w:{"@initial":"$full","@sm":"calc(100% - 14rem)"},p:"$4",overflowY:"auto",get children(){return t(me,{get children(){return t(P,{each:Ye,children:o=>t(ge,{get path(){return o.to},get component(){return o.component}})})}})}})]}})]}})},We=Object.freeze(Object.defineProperty({__proto__:null,default:Ve},Symbol.toStringTag,{value:"Module"}));export{Te as F,a as G,We as i};