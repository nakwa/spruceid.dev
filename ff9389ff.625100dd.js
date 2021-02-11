(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{100:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return d}));var n=r(3),i=r(7),a=(r(0),r(103)),o={id:"intro",title:"Introducing the Credible Wallet",hide_title:!0,sidebar_label:"Introduction",slug:"/credible/"},l={unversionedId:"credible/intro",id:"credible/intro",isDocsHomePage:!1,title:"Introducing the Credible Wallet",description:"Credible header",source:"@site/docs/credible/intro.md",slug:"/credible/",permalink:"/docs/credible/",editUrl:"https://github.com/spruceid/docs/credible/intro.md",version:"current",sidebar_label:"Introduction",sidebar:"docs",previous:{title:"Bash Script - Batch Generation & Verification",permalink:"/docs/didkit/example--batch-generation"},next:{title:"Terminology",permalink:"/docs/credible/terminology"}},c=[{value:"Features",id:"features",children:[]},{value:"Coming soon",id:"coming-soon",children:[]}],s={toc:c};function d(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",{alt:"Credible header",src:r(154).default})),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://flutter.dev/docs/get-started/install"},Object(a.b)("img",{parentName:"a",src:"https://img.shields.io/badge/Flutter-1.22.6-blue",alt:null})),"\n",Object(a.b)("a",{parentName:"p",href:"https://www.github.com/spruceid/ssi"},Object(a.b)("img",{parentName:"a",src:"https://img.shields.io/badge/ssi-v0.1-green",alt:null})),"\n",Object(a.b)("a",{parentName:"p",href:"https://www.github.com/spruceid/didkit"},Object(a.b)("img",{parentName:"a",src:"https://img.shields.io/badge/DIDKit-v0.1-green",alt:null})),"\n",Object(a.b)("a",{parentName:"p",href:"https://github.com/spruceid/credible/blob/main/LICENSE"},Object(a.b)("img",{parentName:"a",src:"https://img.shields.io/badge/License-Apache--2.0-green",alt:null})),"\n",Object(a.b)("a",{parentName:"p",href:"https://twitter.com/sprucesystems"},Object(a.b)("img",{parentName:"a",src:"https://img.shields.io/twitter/follow/sprucesystems?label=Follow&style=social",alt:null}))),Object(a.b)("p",null,"Credible is a lightweight wallet for individuals to manage DIDs and VCs from\ntheir mobile phones. It is white-label friendly, open-source, and build on our\ncore SSI libraries.  As soon as it is feature-complete and ready for external\nreview, it will even be downloadable from the appstore in its basic, unextended\nform. Over time, we expect to integrate many DID methods and presentation\nprotocols to make this the wallet fully-featured without being ledger-bound or\nvendor-favoring."),Object(a.b)("p",null,Object(a.b)("img",{alt:"credible architecture",src:r(155).default})),Object(a.b)("h2",{id:"features"},"Features"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"QR support to initiate and execute issuance and presentation of verifiable\ncredentials"),Object(a.b)("li",{parentName:"ul"},"Handy interface for generating multiple DIDs (and coming soon, multiple DIDs\nacross multiple ledgers)"),Object(a.b)("li",{parentName:"ul"},"Official decentralized-identity wallet of DID Method Tezos (DID:tz)"),Object(a.b)("li",{parentName:"ul"},"Built in Flutter, for leaner, faster builds and less dependencies")),Object(a.b)("h2",{id:"coming-soon"},"Coming soon"),Object(a.b)("p",null,"The following features have been tentatively roadmapped for the next major release:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Better support (and code snippets) for passing OIDC tokens back to service\nauthenticated with Credible")))}d.isMDXComponent=!0},103:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),d=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=d(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(r),p=n,m=u["".concat(o,".").concat(p)]||u[p]||b[p]||a;return r?i.a.createElement(m,l(l({ref:t},s),{},{components:r})):i.a.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},154:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/crediblehead-9f539ffe32f0082fb362572e7d308c6e.png"},155:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/credible-architecture-e169185ba97d198894c3ed67328e353d.png"}}]);