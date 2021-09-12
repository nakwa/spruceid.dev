"use strict";(self.webpackChunkdevsite=self.webpackChunkdevsite||[]).push([[519],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},185:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"devhome",title:"Welcome to the Spruce ID Developer Portal",hide_title:!0,sidebar_label:"Home",slug:"/"},l={unversionedId:"devhome",id:"devhome",isDocsHomePage:!1,title:"Welcome to the Spruce ID Developer Portal",description:"SpruceID Overview",source:"@site/docs/homepage.md",sourceDirName:".",slug:"/",permalink:"/docs/",editUrl:"https://github.com/spruceid/spruceid.dev/edit/main/docs/homepage.md",version:"current",sidebar_label:"Home",frontMatter:{id:"devhome",title:"Welcome to the Spruce ID Developer Portal",hide_title:!0,sidebar_label:"Home",slug:"/"},sidebar:"docs",next:{title:"What is Decentralized Identity?",permalink:"/docs/primer"}},c=[{value:"SpruceID Overview",id:"spruceid-overview",children:[]},{value:"Spruce&#39;s Company Vision",id:"spruces-company-vision",children:[]},{value:"Contact",id:"contact",children:[]}],d={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"spruceid-overview"},"SpruceID Overview"),(0,o.kt)("p",null,"Welcome! This portal offers many ways of getting started with SpruceID libraries\nand projects.  At a high level, the core components in our modular framework\nare:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/didkit"},(0,o.kt)("strong",{parentName:"a"},"DIDKit")),' - our cross-platform toolkit for signing and\nverifying W3C Verifiable Credentials with or without W3C Decentralized\nIdentifiers ("DIDs"), configurable across many interfaces and installable from\nmost major package managers'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/credible"},(0,o.kt)("strong",{parentName:"a"},"Credible"))," - our lightweight credential wallet,\ndemonstrating how DIDKit can be built into a native mobile app or web wallet\nand ready to be whitelabeled for a use-case-specific client application"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Kepler")," - a key-governed solution for self-sovereign storage (the new S3!),\nproviding a granular and decentralized Authorization model, robust replication\nand localization controls, and other next-generation features that Web3\ndevelopers need stat. (",(0,o.kt)("em",{parentName:"li"},"Separate documentation site coming soon"),")")),(0,o.kt)("p",null,"Our goal is to make SpruceID useful, open, and versatile, which drives our\ndesign of each component to be modular and just complex enough to do the heavy\nlifting for a wide range of use cases.  For example:"),(0,o.kt)("h4",{id:"authenticity-for-nft-creators"},"Authenticity for NFT Creators"),(0,o.kt)("p",null,"Rebase contains a wide range of verification flows that authenticate users and\nguide them through a proof-of-control and produce a receipt in the form of a\nVerifiable Credential (DIDKit under the hood). These can be mixed and matched to\ncreate a self-service reputation-system portal like\n",(0,o.kt)("a",{parentName:"p",href:"https://tzprofiles.com"},"TzProfiles.com"),"."),(0,o.kt)("h4",{id:"decentralized-backup-and-recovery-of-a-decentralized-identity"},"Decentralized backup and recovery of a decentralized identity"),(0,o.kt)("p",null,"It takes less than a minute for any user to install a stock-model Credible\nmobile wallet from a Big Name App Store, generate a unique, private DID, receive\ntheir first VC, and backup the wallet's contents to a self-registered Kepler\naccount. In case of catastrophe, that same DID can be reconstituted in a new\nwallet from a seed recovery phase, and the wallet contents restored from\nKepler-- you can't ask for a more censorship-resistant or decentralized account\nsystem."),(0,o.kt)("h4",{id:"decentralized-on-boarding-for-private-defi-pools"},"Decentralized On-boarding for Private DeFi Pools"),(0,o.kt)("p",null,'These Rebase credentials can be mixed and matched with other Verifiable\nCredentials from other dApps (on-chain history checks, fresh proofs of staking,\nor even an "employment history" from a decentralized marketplace like\n',(0,o.kt)("a",{parentName:"p",href:"https://gitcoin.co"},"gitcoin"),") to gate access in a decentralized, secure, and\nimpartial way to DeFi applications that need to reduce spam, sybils, and/or\nlooky-loos."),(0,o.kt)("h4",{id:"decentralized-dapp-hosting"},"Decentralized dApp hosting"),(0,o.kt)("p",null,"Just as Rebase bootstraps reputation and history from centralized systems to\nidentify a blockchain address, so too can DIDKit bootstrap a github account to\nsign and verify trustworthy and tamperproof packages. This allows dApps to be\ndistributed as packages and hosted privately from a Kepler orbit or other\nprivacy-preserving decentralized storage system."),(0,o.kt)("h4",{id:"further-reading"},"Further reading"),(0,o.kt)("p",null,"Still can't quite grok what all these building blocks add up to? Start with our\nprimer, ",(0,o.kt)("a",{parentName:"p",href:"/docs/primer"},'"What is Decentralized Identity?"'),", or use the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/glossary"},"glossary")," to go deeper into the technological foundations and\npre-standards specifications that inspire this next-generation tooling."),(0,o.kt)("p",null,"Or, get started by ",(0,o.kt)("a",{parentName:"p",href:"/docs/didkit/#getting-started"},"building DIDKit locally"),"\nand learn as you buidl! "),(0,o.kt)("h2",{id:"spruces-company-vision"},"Spruce's Company Vision"),(0,o.kt)("p",null,"When was the last time you felt comfortable sending or receiving important\ndocuments digitally? Have you ever been shocked at how much an online platform\nknows about you and wish you had more control over your identity? As a business,\ndo your customers feel any of the above when they\u2019re doing business with you?"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Spruce is reimagining trusted interactions for enterprises and governments \u2014 the\nstewards of the most foundational and impactful layers of infrastructure shaping\nour lives."))),(0,o.kt)("p",null,"We believe that in any organization you can find people working to build\ninstitutions that honor individual\u2019s control over their own information and\nprivacy.  We are also pragmatists who understand that these principles are most\nlikely to be implemented at scale when they also make commercial and operational\nsense. We firmly believe that there are paths striking a balance that both\nrespects individual liberty and allows for enterprise success."),(0,o.kt)("p",null,"We are creating open-source software products that help our customers go from\nuntrusted data to verifiable information that can be shared privately and with\nconsent. Our products enable complete lifecycle management for licenses,\ncertificates, audit reports, registrations, and other mission-critical data that\nmust remain secure while passing many hands. Our main workflows allow end-users\nto manage their own data, and for everyone else to have confidence in the\nconsent and purpose of data shared by them. To achieve this, we will utilize a\ncadre of emerging data technologies, including the recent W3C Verifiable\nCredentials and W3C Decentralized Identifiers specifications, which have been\ndesigned to solve business problems while leaving ample room to champion the end\nuser\u2019s control within a data supply chain."),(0,o.kt)("h2",{id:"contact"},"Contact"),(0,o.kt)("p",null,"Have any questions about Spruce's development efforts? Reach us via email at\n",(0,o.kt)("a",{parentName:"p",href:"mailto:oss@spruceid.com"},"oss@spruceid.com"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},'Please note: this site documents multiple early-stage open-source products, and\nwe are still incorporating feedback from our first comprehensive third-party\ncode audit. These artefacts are presented as functional "betas" for\nexperimentation and to show the direction of the projects (inviting proposals\nfor changes of direction, even!). They are not, however, intended for\ntransacting real-world business yet.')))}p.isMDXComponent=!0}}]);