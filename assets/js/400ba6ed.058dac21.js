"use strict";(self.webpackChunkdevsite=self.webpackChunkdevsite||[]).push([[635],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7572:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"node",title:"Javascript"},s={unversionedId:"didkit-interfaces/node",id:"didkit-interfaces/node",isDocsHomePage:!1,title:"Javascript",description:"At a Glance",source:"@site/docs/didkit-interfaces/Node.md",sourceDirName:"didkit-interfaces",slug:"/didkit-interfaces/node",permalink:"/docs/didkit-interfaces/node",editUrl:"https://github.com/spruceid/spruceid.dev/edit/main/docs/didkit-interfaces/Node.md",version:"current",frontMatter:{id:"node",title:"Javascript"},sidebar:"docs",previous:{title:"Python",permalink:"/docs/didkit-interfaces/python"},next:{title:"Overview of Examples",permalink:"/docs/didkit-examples/overview"}},d=[{value:"At a Glance",id:"at-a-glance",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Code",id:"code",children:[]}],p={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"at-a-glance"},"At a Glance"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Three slightly different versions of the DIDKit binary can be installed via ",(0,i.kt)("inlineCode",{parentName:"li"},"npm"),', all under the organization "@spruceid":',(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://www.npmjs.com/package/@spruceid/didkit"},"didkit-neon"))," is optimized for Node.JS environments, with bindings generated with ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/neon-bindings/neon"},"neon"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://www.npmjs.com/package/@spruceid/didkit-wasm"},"didkit-wasm"))," is packed to operate in the browser and blockchain contexts via ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/rustwasm/wasm-pack/"},"wasm-pack"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://www.npmjs.com/package/@spruceid/didkit-wasm"},"didkit-wasm-node"))," is packed to operate in Node.JS and blockchain contexts via ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/rustwasm/wasm-pack/"},"wasm-pack"))))),(0,i.kt)("li",{parentName:"ul"},"For a quick function & type reference, you can check out the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/spruceid/didkit/lib/node/README.md#Issuing-a-Credential"},"Issuing a Credential")," and ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/spruceid/didkit/lib/node/README.md#Options"},"Options")," sections of the ",(0,i.kt)("inlineCode",{parentName:"li"},"/lib/node/README.md")," file in the DIDKit repo. Better yet, install it and run the commands yourself!"),(0,i.kt)("li",{parentName:"ul"},"To test your installation or just to see examples of calls and returns with valid DID-key test vectors, see the provided ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/spruceid/didkit/lib/node/test/index.spec.js"},"test script")," ")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Installation over node package managers is quite simple. Run this command to confirm version number and proper operation of basic functions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Import the module\nconst DIDKit = require('@spruceid/didkit');\n\nconsole.log(DIDKit.getVersion());\n\n// To issue credentials and presentations, you need a key.\n// The library provides a function to generate one.\nconst key = DIDKit.generateEd25519Key();\n\n// There are two helpful functions to obtain a DID and the `did:key`\n// `verificationMethod` from the key.\nconst did = DIDKit.keyToDID('key', key);\nconst verificationMethod = DIDKit.keyToVerificationMethod('key', key);\n")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Components"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Wasm, Blockchain Indexer"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/spruceid/tzprofiles/blob/main/api/service/index.js"},"JS Code"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Web Application, dApp"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/spruceid/tzprofiles/tree/main/dapp"},"JS Code"))))),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/spruceid/didkit/tree/main/lib/web"},"WASM")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/spruceid/didkit/tree/main/lib/node"},"Neon"))))}c.isMDXComponent=!0}}]);