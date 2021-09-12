"use strict";(self.webpackChunkdevsite=self.webpackChunkdevsite||[]).push([[21],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,f=u["".concat(p,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2918:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),s=["components"],o={id:"specs_and_deps",title:"Specifications and Dependencies",hide_title:!0,sidebar_label:"Specifications & Dependencies"},p={unversionedId:"didkit/specs_and_deps",id:"didkit/specs_and_deps",isDocsHomePage:!1,title:"Specifications and Dependencies",description:"At Spruce, we consider it essential to be very explicit and up-front about",source:"@site/docs/didkit/specifications_and_dependencies.md",sourceDirName:"didkit",slug:"/didkit/specs_and_deps",permalink:"/docs/didkit/specs_and_deps",editUrl:"https://github.com/spruceid/spruceid.dev/edit/main/docs/didkit/specifications_and_dependencies.md",version:"current",sidebar_label:"Specifications & Dependencies",frontMatter:{id:"specs_and_deps",title:"Specifications and Dependencies",hide_title:!0,sidebar_label:"Specifications & Dependencies"},sidebar:"docs",previous:{title:"DIDKit Changelog",permalink:"/docs/didkit/changelog"},next:{title:"Core DIDKit Glossary",permalink:"/docs/didkit/glossary"}},l=[{value:"Specifications and Test Suites",id:"specifications-and-test-suites",children:[]},{value:"Cryptography Backends",id:"cryptography-backends",children:[]}],c={toc:l};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"At Spruce, we consider it essential to be very explicit and up-front about\nour definition of standards compliance, our evidence to back that up, and\nthe open-source dependencies and libraries which power our security and\ntrust guarantees.  To this end, we maintain both lists here, and think that\nboth are as important as our changelogs."),(0,i.kt)("h2",{id:"specifications-and-test-suites"},"Specifications and Test Suites"),(0,i.kt)("p",null,"To demonstrate our commitment to standards and interoperability, we have\nensured that our implementation conforms to the following specifications and\naspire to pass their test suites where applicable:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model/"},"W3C Verifiable Credentials"),(0,i.kt)("a",{parentName:"li",href:"https://github.com/w3c/vc-test-suite"},"Test Suite")," (passing,\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/spruceid/ssi/tree/main/vc-test"},"instructions"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/did-core/"},"W3C Decentralized Identifiers"),"\n(test suite pending CR, ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/spruceid/ssi/blob/main/src/did.pest"},"syntax support"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/w3c-ccg/vc-http-api/tree/master/packages/plugfest-2020"},"VC HTTP API Test Suite v0.0.1"),"\n(passing, ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/spruceid/vc-http-api/tree/spruce/packages/plugfest-2020/vendors/spruce"},"instructions"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://json-ld.github.io/normalization/tests/"},"RDF Dataset Normalization Test Cases")," (passing, ",(0,i.kt)("a",{parentName:"li",href:"#"},"instructions"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://w3c.github.io/json-ld-api/tests/toRdf-manifest.html"},"JSON-LD to RDF Transformation Test Cases"),"\n(440/450 passing, ",(0,i.kt)("a",{parentName:"li",href:"#"},"instructions"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://w3c-ccg.github.io/ld-proofs/"},"Linked Data Proofs 1.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://w3c-ccg.github.io/did-resolution/"},"DID Resolution")),(0,i.kt)("li",{parentName:"ul"},"IETF: ",(0,i.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc7519"},"JWT"),",\n",(0,i.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc7515"},"JWS"),",\n",(0,i.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc7517"},"JWK"),",\n",(0,i.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc7518"},"JWA"),",\n",(0,i.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc8037"},"CFRG ECDH and Signatures in JOSE")," ")),(0,i.kt)("h2",{id:"cryptography-backends"},"Cryptography Backends"),(0,i.kt)("p",null,"We strongly prefer tried and tested implementations of cryptographic functions\nand believe that it's most responsible to list them out in a forthcoming manner\nto any potential users. DIDKit is engineered so that the target platform and\ncompile-time flags may be used to specify different cryptographic backends,\nsuch as to leverage native hardware capabilities, cross-compile to e.g. WASM,\nor to give advanced users the option to only use libraries that they trust."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.rs/ring/0.16.19/ring/"},(0,i.kt)("inlineCode",{parentName:"a"},"ring"),", v0.16"),": default for hashes, ed25519\nfunctions, RSA, and randomness. The ed25519 functions here cannot currently\ncompile to WASM."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.rs/rsa/0.3.0/rsa/"},(0,i.kt)("inlineCode",{parentName:"a"},"rsa"),", v0.3"),": optionally for RSA."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.rs/ed25519-dalek/1.0.1/ed25519_dalek"},(0,i.kt)("inlineCode",{parentName:"a"},"ed25519-dalek"),", v1"),":\noptionally for ed25519. Compiles to WASM."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.rs/rand/0.7.3/rand/"},(0,i.kt)("inlineCode",{parentName:"a"},"rand"),", v0.7"),": optionally for randomness."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.rs/sha2/0.9.2/sha2/"},(0,i.kt)("inlineCode",{parentName:"a"},"sha2"),", v0.9"),": optionally for sha256\nhashes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.rs/native-tls/0.2.7/native_tls/"},(0,i.kt)("inlineCode",{parentName:"a"},"native-tls"))," (",(0,i.kt)("a",{parentName:"li",href:"https://docs.rs/openssl/0.10.32/openssl/"},(0,i.kt)("inlineCode",{parentName:"a"},"openssl")),", ",(0,i.kt)("a",{parentName:"li",href:"https://docs.rs/security-framework/2.0.0/security_framework/"},(0,i.kt)("inlineCode",{parentName:"a"},"security_framework")),", or ",(0,i.kt)("a",{parentName:"li",href:"https://docs.rs/schannel/0.1.19/schannel/"},(0,i.kt)("inlineCode",{parentName:"a"},"schannel")),"; via ",(0,i.kt)("a",{parentName:"li",href:"https://docs.rs/hyper-tls/0.5.0/hyper_tls/"},(0,i.kt)("inlineCode",{parentName:"a"},"hyper-tls")),"): optionally for HTTPS.")),(0,i.kt)("p",null,"If you have constructive opinions about the set of cryptographic libraries that\nshould be supported, please ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spruceid/ssi"},"open an issue"),"."))}d.isMDXComponent=!0}}]);