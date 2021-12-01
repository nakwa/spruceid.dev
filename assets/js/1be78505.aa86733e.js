"use strict";(self.webpackChunkdevsite=self.webpackChunkdevsite||[]).push([[9514,4608],{3616:function(e,t,n){n.r(t),n.d(t,{default:function(){return ie}});var a=n(7294),i=n(3905),l=n(2263),o=n(6291),r=n(9118),c=n(7462),s=n(3366),u=n(6010),d=n(9732),m=n(944),b=n(1839),p=n(3783),h=n(7898),f=n(6742),v=n(3919),E=n(5537),k=function(e){return a.createElement("svg",(0,c.Z)({width:"20",height:"20",role:"img"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},g=n(4478),_=n(4973),C="sidebar_a3j0",Z="sidebarWithHideableNavbar_VlPv",N="sidebarHidden_OqfG",I="sidebarLogo_hmkv",S="menu_cyFh",y="menuLinkText_lRH+",T="menuWithAnnouncementBar_+O1J",R="collapseSidebarButton_eoK2",w="collapseSidebarButtonIcon_e+kA",x="sidebarMenuIcon_iZzd",A="sidebarMenuCloseIcon_6kU2",L="menuLinkExternal_anpt",B=["items"],M=["item","onItemClick","collapsible","activePath"],P=["item","onItemClick","activePath","collapsible"];var H=function e(t,n){return"link"===t.type?(0,d.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},O=(0,a.memo)((function(e){var t=e.items,n=(0,s.Z)(e,B);return t.map((function(e,t){return a.createElement(D,(0,c.Z)({key:t,item:e},n))}))}));function D(e){return"category"===e.item.type?a.createElement(F,e):a.createElement(W,e)}function F(e){var t,n,i,l=e.item,o=e.onItemClick,r=e.collapsible,d=e.activePath,m=(0,s.Z)(e,M),b=l.items,p=l.label,h=H(l,d),f=(n=h,i=(0,a.useRef)(n),(0,a.useEffect)((function(){i.current=n}),[n]),i.current),v=(0,a.useState)((function(){return!!r&&(!h&&l.collapsed)})),E=v[0],k=v[1],g=(0,a.useRef)(null),_=(0,a.useState)(void 0),C=_[0],Z=_[1],N=function(e){var t;void 0===e&&(e=!0),Z(e?(null==(t=g.current)?void 0:t.scrollHeight)+"px":void 0)};(0,a.useEffect)((function(){h&&!f&&E&&k(!1)}),[h,f,E]);var I=(0,a.useCallback)((function(e){e.preventDefault(),C||N(),setTimeout((function(){return k((function(e){return!e}))}),100)}),[C]);return 0===b.length?null:a.createElement("li",{className:(0,u.Z)("menu__list-item",{"menu__list-item--collapsed":E})},a.createElement("a",(0,c.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--sublist":r,"menu__link--active":r&&h},t[y]=!r,t)),onClick:r?I:void 0,href:r?"#!":void 0},m),p),a.createElement("ul",{className:"menu__list",ref:g,style:{height:C},onTransitionEnd:function(){E||N(!1)}},a.createElement(O,{items:b,tabIndex:E?"-1":"0",onItemClick:o,collapsible:r,activePath:d})))}function W(e){var t,n=e.item,i=e.onItemClick,l=e.activePath,o=(e.collapsible,(0,s.Z)(e,P)),r=n.href,d=n.label,m=H(n,l);return a.createElement("li",{className:"menu__list-item",key:d},a.createElement(f.Z,(0,c.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--active":m},t[L]=!(0,v.Z)(r),t)),to:r},(0,v.Z)(r)&&{isNavLink:!0,exact:!0,onClick:i},o),d))}function z(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,_.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,_.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,u.Z)("button button--secondary button--outline",R),onClick:t},a.createElement(k,{className:w}))}function U(e){var t=e.responsiveSidebarOpened,n=e.onClick;return a.createElement("button",{"aria-label":t?(0,_.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,_.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:n},t?a.createElement("span",{className:(0,u.Z)(x,A)},"\xd7"):a.createElement(g.Z,{className:x,height:24,width:24}))}var q=function(e){var t,n,i=e.path,l=e.sidebar,o=e.sidebarCollapsible,r=void 0===o||o,c=e.onCollapse,s=e.isHidden,f=function(){var e=(0,m.Z)().isAnnouncementBarClosed,t=(0,a.useState)(!e),n=t[0],i=t[1];return(0,h.Z)((function(t){var n=t.scrollY;e||i(0===n)})),n}(),v=(0,d.LU)(),k=v.navbar.hideOnScroll,g=v.hideableSidebar,_=(0,m.Z)().isAnnouncementBarClosed,y=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1];(0,b.Z)(t);var i=(0,p.Z)();return(0,a.useEffect)((function(){i===p.D.desktop&&n(!1)}),[i]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,a.useCallback)((function(e){e.target.blur(),n(!1)}),[n]),toggleResponsiveSidebar:(0,a.useCallback)((function(){n((function(e){return!e}))}),[n])}}(),R=y.showResponsiveSidebar,w=y.closeResponsiveSidebar,x=y.toggleResponsiveSidebar;return a.createElement("div",{className:(0,u.Z)(C,(t={},t[Z]=k,t[N]=s,t))},k&&a.createElement(E.Z,{tabIndex:-1,className:I}),a.createElement("div",{className:(0,u.Z)("menu","menu--responsive","thin-scrollbar",S,(n={"menu--show":R},n[T]=!_&&f,n))},a.createElement(U,{responsiveSidebarOpened:R,onClick:x}),a.createElement("ul",{className:"menu__list"},a.createElement(O,{items:l,onItemClick:w,collapsible:r,activePath:i}))),g&&a.createElement(z,{onClick:c}))},J=n(7189),K=n(4608),Y=n(5977),j="docPage_lDyR",G="docMainContainer_r8cw",Q="docMainContainerEnhanced_SOUu",V="docSidebarContainer_0YBq",X="docSidebarContainerHidden_Qlt2",$="collapsedDocSidebar_zZpm",ee="expandSidebarButtonIcon_cxi8",te="docItemWrapperEnhanced_aT5H",ne="docItemWrapper_NJLN";function ae(e){var t,n,o,c,s,m=e.currentDocRoute,b=e.versionMetadata,p=e.children,h=(0,l.Z)(),f=h.siteConfig,v=h.isClient,E=b.pluginId,g=b.permalinkToSidebar,C=b.docsSidebars,Z=b.version,N=g[m.path],I=C[N],S=(0,a.useState)(!1),y=S[0],T=S[1],R=(0,a.useState)(!1),w=R[0],x=R[1],A=(0,a.useCallback)((function(){w&&x(!1),T(!y)}),[w]);return a.createElement(r.Z,{key:v,wrapperClassName:d.kM.wrapper.docPages,pageClassName:d.kM.page.docPage,searchMetadatas:{version:Z,tag:(0,d.os)(E,Z)}},a.createElement("div",{className:j},I&&a.createElement("div",{className:(0,u.Z)(V,(t={},t[X]=y,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(V)&&y&&x(!0)},role:"complementary"},a.createElement(q,{key:N,sidebar:I,path:m.path,sidebarCollapsible:null==(n=null==(o=f.themeConfig)?void 0:o.sidebarCollapsible)||n,onCollapse:A,isHidden:w}),w&&a.createElement("div",{className:$,title:(0,_.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,_.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:A,onClick:A},a.createElement(k,{className:ee}))),a.createElement("main",{className:(0,u.Z)(G,(c={},c[Q]=y||!I,c))},a.createElement("div",{className:(0,u.Z)("container padding-vert--lg",ne,(s={},s[te]=y,s))},a.createElement(i.Zo,{components:J.Z},p)))))}var ie=function(e){var t=e.route.routes,n=e.versionMetadata,i=e.location,l=t.find((function(e){return(0,Y.LX)(i.pathname,e)}));return l?a.createElement(ae,{currentDocRoute:l,versionMetadata:n},(0,o.Z)(t)):a.createElement(K.default,e)}},4608:function(e,t,n){n.r(t);var a=n(7294),i=n(9118),l=n(4973);t.default=function(){return a.createElement(i.Z,{title:"Page Not Found"},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);