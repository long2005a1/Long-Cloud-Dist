!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,i=[],u=!0,c=!1;try{for(t=t.call(e);!(u=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);u=!0);}catch(a){c=!0,o=a}finally{try{u||null==t.return||t.return()}finally{if(c)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy.c1a873e5.js","./useTitle-legacy.0cd1678e.js","./index-legacy.46a9cd34.js","./LinkWithBase-legacy.09f84fc4.js","./index-legacy.d92719e5.js"],(function(n,t){"use strict";var r,o,i,u,c,a,l,s,d,g,f,m,p,h,b,v,y,E,L,O,$,A,G,N,S,j,Y,w,C,I,k,x,P,R,T,_,D,U,z,B,W,V,M,F,X,H,Q,Z,q,J,K,ee,ne,te,re,oe,ie,ue,ce,ae,le,se,de,ge,fe,me;return{setters:[function(e){r=e.c,o=e.K,i=e.a6,u=e.q,c=e.at,a=e.au,l=e.bM,s=e.a2,d=e.a1,g=e.e,f=e.d,m=e.R,p=e.U,h=e.Q,b=e.S,v=e.I,y=e.bN,E=e.r,L=e.bO,O=e.as,$=e.a9,A=e.ar,G=e.Y,N=e.Z,S=e.bP,j=e.bQ,Y=e.bR,w=e.bS,C=e.bT,I=e.bU,k=e.bV,x=e.bW,P=e.bX,R=e.bY,T=e.bZ,_=e.b_,D=e.b$,U=e.aJ,z=e.aW,B=e.b9,W=e.a,V=e.ah,M=e.c0,F=e.n,X=e.bk,H=e.be,Q=e.bf,Z=e.bg,q=e.bh,J=e.bi,K=e.c1,ee=e.ay,ne=e.c2,te=e.c3},function(e){re=e.c,oe=e.I,ie=e.d,ue=e.e,ce=e.f,ae=e.g,le=e.b},function(e){se=e.c,de=e.d,ge=e.e},function(e){fe=e.A},function(e){me=e.S}],execute:function(){var pe=n("G",function(e){return e[e.SINGLE=0]="SINGLE",e[e.SITE=1]="SITE",e[e.STYLE=2]="STYLE",e[e.PREVIEW=3]="PREVIEW",e[e.GLOBAL=4]="GLOBAL",e[e.ARIA2=5]="ARIA2",e[e.INDEX=6]="INDEX",e[e.SSO=7]="SSO",e[e.LDAP=8]="LDAP",e[e.S3=9]="S3",e[e.FTP=10]="FTP",e}(pe||{})),he=n("F",function(e){return e[e.PUBLIC=0]="PUBLIC",e[e.PRIVATE=1]="PRIVATE",e[e.READONLY=2]="READONLY",e[e.DEPRECATED=3]="DEPRECATED",e}(he||{})),be=function(e){var n=u((function(){if(!c.is_admin(a())){if(void 0===e.role)return!1;if(e.role===l.GENERAL&&!c.is_general(a()))return!1}return!0}));return r(d,{get fallback(){return r(ve,e)},get children(){return[r(s,{get when(){return!n()},children:null}),r(s,{get when(){return e.children},get children(){return r(ye,e)}})]}})},ve=function(e){var n=g().pathname,t=f(),o=function(){return n()===e.to};return r(fe,{get cancelBase(){return e.to.startsWith("http")},display:"flex",as:m,get href(){return e.to},onClick:function(n){if(Ne(),e.refresh){var t;null===(t=n.stopPropagation)||void 0===t||t.call(n);var r=e.to;r.startsWith("http")||(r=p(r)),window.open(r,"_self")}},w:"$full",alignItems:"center",get _hover(){return{bgColor:o()?"$info4":h(),textDecoration:"none"}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get bgColor(){return o()?"$info4":""},get color(){return o()?"$info11":""},get external(){return e.external},get children(){return[r(b,{get when(){return e.icon},get children(){return r(v,{mr:"$2",get as(){return e.icon}})}}),r(y,{get children(){return t(e.title)}})]}})},ye=function(n){var t=g().pathname,o=e(E(t().includes(n.to)),2),i=o[0],u=o[1],c=f();return r($,{w:"$full",get children(){return[r(L,{justifyContent:"space-between",onClick:function(){u(!i())},w:"$full",alignItems:"center",get _hover(){return{bgColor:h()}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get children(){return[r(O,{get children(){return[r(b,{get when(){return n.icon},get children(){return r(v,{mr:"$2",get as(){return n.icon}})}}),r(y,{get children(){return c(n.title)}})]}}),r(v,{as:se,get transform(){return i()?"rotate(90deg)":"none"},transition:"transform 0.2s"})]}}),r(b,{get when(){return i()},get children(){return r($,{pl:"$2",get children(){return r(Ee,{get items(){return n.children}})}})}})]}})},Ee=function(e){return r(i,{p:"$2",w:"$full",color:"$neutral11",spacing:"$1",get children(){return r(o,{get each(){return e.items},children:function(e){return r(be,e)}})}})};var Le=G((function(){return N((function(){return t.import("./Common-legacy.ee8b0516.js")}),void 0)})),Oe=[{title:"manage.sidemenu.profile",icon:S,to:"/LONGYun2025",role:l.GUEST,component:G((function(){return N((function(){return t.import("./Profile-legacy.14c57b4d.js")}),void 0)}))},{title:"manage.sidemenu.settings",icon:j,to:"/LONGYun2025/settings",children:[{title:"manage.sidemenu.site",icon:Y,to:"/LONGYun2025/settings/site",component:function(){return r(Le,{get group(){return pe.SITE}})}},{title:"manage.sidemenu.style",icon:w,to:"/LONGYun2025/settings/style",component:function(){return r(Le,{get group(){return pe.STYLE}})}},{title:"manage.sidemenu.preview",icon:C,to:"/LONGYun2025/settings/preview",component:function(){return r(Le,{get group(){return pe.PREVIEW}})}},{title:"manage.sidemenu.global",icon:I,to:"/LONGYun2025/settings/global",component:function(){return r(Le,{get group(){return pe.GLOBAL}})}},{title:"manage.sidemenu.sso",icon:re,to:"/LONGYun2025/settings/sso",component:function(){return r(Le,{get group(){return pe.SSO}})}},{title:"manage.sidemenu.ldap",icon:re,to:"/LONGYun2025/settings/ldap",component:function(){return r(Le,{get group(){return pe.LDAP}})}},{title:"manage.sidemenu.s3",icon:k,to:"/LONGYun2025/settings/s3",component:G((function(){return N((function(){return t.import("./S3-legacy.3e7a821c.js")}),void 0)}))},{title:"manage.sidemenu.ftp",icon:x,to:"/LONGYun2025/settings/ftp",component:function(){return r(Le,{get group(){return pe.FTP}})}},{title:"manage.sidemenu.other",icon:P,to:"/LONGYun2025/settings/other",component:G((function(){return N((function(){return t.import("./Other-legacy.8e6d28e7.js")}),void 0)}))}]},{title:"manage.sidemenu.tasks",icon:function(e){return A({a:{viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 015.25 7H4v4a1 1 0 001 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0114.25 16h-3.5A1.75 1.75 0 019 14.25v-.75H5A2.5 2.5 0 012.5 11V7h-.75A1.75 1.75 0 010 5.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm9 9a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"/>'},e)},to:"/LONGYun2025/tasks",role:l.GENERAL,children:[{title:"manage.sidemenu.offline_download",icon:oe,to:"/LONGYun2025/tasks/aria2",role:l.GENERAL,component:G((function(){return N((function(){return t.import("./offline_download-legacy.f0de52f5.js")}),void 0)}))},{title:"manage.sidemenu.upload",icon:R,to:"/LONGYun2025/tasks/upload",role:l.GENERAL,component:G((function(){return N((function(){return t.import("./Upload-legacy.08d00289.js")}),void 0)}))},{title:"manage.sidemenu.copy",icon:ie,to:"/LONGYun2025/tasks/copy",role:l.GENERAL,component:G((function(){return N((function(){return t.import("./Copy-legacy.e6ea81e5.js")}),void 0)}))}]},{title:"manage.sidemenu.users",icon:T,to:"/LONGYun2025/users",component:G((function(){return N((function(){return t.import("./Users-legacy.b52e80f7.js")}),void 0)}))},{title:"manage.sidemenu.storages",icon:_,to:"/LONGYun2025/storages",component:G((function(){return N((function(){return t.import("./Storages-legacy.95801957.js")}),void 0)}))},{title:"manage.sidemenu.metas",icon:me,to:"/LONGYun2025/metas",component:G((function(){return N((function(){return t.import("./Metas-legacy.0596dfee.js")}),void 0)}))},{title:"manage.sidemenu.indexes",icon:D,to:"/LONGYun2025/indexes",component:G((function(){return N((function(){return t.import("./indexes-legacy.1651bee7.js")}),void 0)}))},{title:"manage.sidemenu.backup-restore",to:"/LONGYun2025/backup-restore",icon:de,component:G((function(){return N((function(){return t.import("./backup-restore-legacy.bd0f683b.js")}),void 0)}))},{title:"manage.sidemenu.home",icon:ue,to:"/",role:l.GUEST,refresh:!0}],$e=U(),Ae=$e.isOpen,Ge=$e.onOpen,Ne=$e.onClose;z((function(){return B.get("/auth/logout")}));var Se=function(){var e=f(),n=g().to;return r($,{as:"header",position:"sticky",top:"0",left:"0",right:"0",zIndex:"$sticky",height:"64px",flexShrink:0,shadow:"$md",p:"$4",get bgColor(){return W("$background","$neutral2")()},get children(){return[r(L,{alignItems:"center",justifyContent:"space-between",h:"$full",get children(){return[r(O,{spacing:"$2",get children(){return[r(V,{"aria-label":"menu",get icon(){return r(ge,{})},display:{"@sm":"none"},onClick:Ge,size:"sm"}),r(y,{fontSize:"$xl",color:"$info9",cursor:"pointer",onClick:function(){n("/LONGYun2025")},get children(){return e("manage.title")}})]}}),r(O,{spacing:"$1",get children(){return r(V,{"aria-label":"logout",get icon(){return r(ce,{})},onClick:function(){M(),F.success(e("manage.logout_success")),n("/龙氏云盘?redirect=".concat(encodeURIComponent(location.pathname)))},size:"sm"})}})]}}),r(X,{get opened(){return Ae()},placement:"left",onClose:Ne,get children(){return[r(H,{}),r(Q,{get children(){return[r(Z,{}),r(q,{color:"$info9",get children(){return e("manage.title")}}),r(J,{get children(){return r(Ee,{items:Oe})}})]}})]}})]}})},je=[{to:"/storages/add",component:G((function(){return N((function(){return t.import("./AddOrEdit-legacy.5e3de879.js")}),void 0)}))},{to:"/storages/edit/:id",component:G((function(){return N((function(){return t.import("./AddOrEdit-legacy.5e3de879.js")}),void 0)}))},{to:"/users/add",component:G((function(){return N((function(){return t.import("./AddOrEdit-legacy.4225df5a.js")}),void 0)}))},{to:"/users/edit/:id",component:G((function(){return N((function(){return t.import("./AddOrEdit-legacy.4225df5a.js")}),void 0)}))},{to:"/metas/add",component:G((function(){return N((function(){return t.import("./AddOrEdit-legacy.30159c6e.js")}),void 0)}))},{to:"/metas/edit/:id",component:G((function(){return N((function(){return t.import("./AddOrEdit-legacy.30159c6e.js")}),void 0)}))},{to:"/2fa",component:G((function(){return N((function(){return t.import("./2fa-legacy.2348ccb7.js")}),void 0)}))},{to:"/messenger",component:G((function(){return N((function(){return t.import("./Messenger-legacy.d323819c.js")}),void 0)}))}],Ye=function(e){return ae(e.title),r(ee,{h:"$full",get children(){return r(y,{get children(){return e.title}})}})},we=function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return n.forEach((function(n){n.children?e(n.children,t):t.push({to:K(n.to,"/LONGYun2025"),component:n.component||function(){return r(Ye,{get title(){return n.title},get to(){return n.to||"empty"}})}})})),t}(Oe).concat(je),Ce=Object.freeze(Object.defineProperty({__proto__:null,default:function(){var e=f();return le((function(){return e("manage.title")})),r($,{css:{"--hope-colors-background":"var(--hope-colors-loContrast)"},bgColor:"$background",w:"$full",get children(){return[r(Se,{}),r(L,{w:"$full",h:"calc(100vh - 64px)",get children(){return[r($,{display:{"@initial":"none","@sm":"block"},w:"$56",h:"$full",shadow:"$md",get bgColor(){return W("$background","$neutral2")()},overflowY:"auto",get children(){return r(Ee,{items:Oe})}}),r($,{w:{"@initial":"$full","@sm":"calc(100% - 14rem)"},p:"$4",overflowY:"auto",get children(){return r(ne,{get children(){return r(o,{each:we,children:function(e){return r(te,{get path(){return e.to},get component(){return e.component}})}})}})}})]}})]}})}},Symbol.toStringTag,{value:"Module"}));n("i",Ce)}}}))}();