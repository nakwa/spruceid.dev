"use strict";(self.webpackChunkdevsite=self.webpackChunkdevsite||[]).push([[8533],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,k=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?i.createElement(k,r(r({ref:t},c),{},{components:n})):i.createElement(k,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:a,r[1]=d;for(var l=2;l<o;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7934:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),r=["components"],d={id:"did-web",title:"did-web in minutes",sidebar_label:"Did-web in minutes"},s={unversionedId:"didkit/did-web",id:"didkit/did-web",isDocsHomePage:!1,title:"did-web in minutes",description:"Introduction",source:"@site/docs/didkit/did-web.md",sourceDirName:"didkit",slug:"/didkit/did-web",permalink:"/docs/didkit/did-web",editUrl:"https://github.com/spruceid/spruceid.dev/edit/main/docs/didkit/did-web.md",version:"current",sidebar_label:"Did-web in minutes",frontMatter:{id:"did-web",title:"did-web in minutes",sidebar_label:"Did-web in minutes"},sidebar:"docs",previous:{title:"Core Functions (HTTP)",permalink:"/docs/didkit-examples/core-functions-in-curl"},next:{title:"Batch Generation & Verification",permalink:"/docs/didkit-examples/batch-generation"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Picking a DID",id:"picking-a-did",children:[]},{value:"Setup",id:"setup",children:[]},{value:"Testing",id:"testing",children:[]}],c={toc:l};function p(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Using DIDKit CLI to generate a did-web is actually a fairly simple process,\nalthough it might not be intuitive for some just from reading the ",(0,o.kt)("a",{parentName:"p",href:"/docs/didkit-packages/cli/"},"DIDKit-CLI\ndocumentation")," and the ",(0,o.kt)("a",{parentName:"p",href:"https://w3c-ccg.github.io/did-method-web/"},"did-web\nspecification"),". For that reason,\nwe've created this page to walk you through the steps."),(0,o.kt)("h2",{id:"picking-a-did"},"Picking a DID"),(0,o.kt)("p",null,"Did-web identifiers can denote a complete web domain or subdomain\n(",(0,o.kt)("inlineCode",{parentName:"p"},"spruceid.com")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"demo.spruceid.com"),"), OR a subdirectory of the web-space at a\ndomain (",(0,o.kt)("inlineCode",{parentName:"p"},"demo.spruceid.com/path/to"),"). In either case, the represented site is\nreferred to below as the ",(0,o.kt)("inlineCode",{parentName:"p"},"hosting site"),". "),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: as per the DID specification, pathnames must be entirely lowercase,\nregardless of the case-sensitivity of the web server in question. Similarly, in\nthe case of identifiers that include a path, ",(0,o.kt)("inlineCode",{parentName:"em"},":"),"s should be used instead of ",(0,o.kt)("inlineCode",{parentName:"em"},"/"),"s\nto conform to DID syntax, i.e. ",(0,o.kt)("inlineCode",{parentName:"em"},"https://demo.spruceid.com/path/to")," would host\nthe DID document for the DID ",(0,o.kt)("inlineCode",{parentName:"em"},"did:web:demo.spruceid.com:path:to"),".")),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/didkit/install/"},"Install DIDKit-CLI")," and any dependencies."),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"We recommend installing didkit-cli on the same server or virtual machine\nthat will run the issuance service and/or website that will issue\nverifiable credentials signed by your ",(0,o.kt)("inlineCode",{parentName:"li"},"did:web"),".  This allows you to\ngenerate a JWK in situ in step 2 that will later by accessed locally by\nthe instance of DIDKit that will sign VCs.  "))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Generate a fresh Ed25519 key and save it locally as a JWK with the command:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"didkit generate-ed25519-key > issuer_key.jwk\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: in this tutorial we assume a unique, fresh key but omit any backup or\nstorage considerations. While re-using existing keys entails risks, so does\nstoring a private key only on a mutable server; if a key is lost, no new\ncredentials can be signed (i.e. issued), and updating the public key published\non step5 will invalidate any credentials signed with the lost private key.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Generate a ",(0,o.kt)("inlineCode",{parentName:"li"},"did:key")," from that Ed25519 key, display it, and save its DID\ndocument locally:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"did=$(didkit key-to-did key -k issuer_key.jwk)\nprintf 'DID: %s\\n\\n' \"$did\"\ndidkit did-resolve `didkit key-to-did key -k issuer_key.jwk` > issuer_key_did_doc.json\n")),(0,o.kt)("p",null,"You should see a DID that looks like this\n",(0,o.kt)("inlineCode",{parentName:"p"},"did:key:z6MkwJBFYK8vTVGeiMsLzcqbSRXW4aTg4PozGbekWtQNUnnW")," and the contents of\nthe file ",(0,o.kt)("inlineCode",{parentName:"p"},"issuer_key_did_doc.json")," should look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": "https://www.w3.org/ns/did/v1",\n  "id": "did:key:z6MkwJBFYK8vTVGeiMsLzcqbSRXW4aTg4PozGbekWtQNUnnW",\n  "verificationMethod": [\n    {\n      "id": "did:key:z6MkwJBFYK8vTVGeiMsLzcqbSRXW4aTg4PozGbekWtQNUnnW#z6MkwJBFYK8vTVGeiMsLzcqbSRXW4aTg4PozGbekWtQNUnnW", \n      "type": "Ed25519VerificationKey2018",\n      "controller": "did:key:z6MkwJBFYK8vTVGeiMsLzcqbSRXW4aTg4PozGbekWtQNUnnW",\n      "publicKeyJwk": {\n        "kty": "OKP",\n        "crv": "Ed25519",\n        "x": "-kMHp5nohaFOK5E9Jch4ErdgwMFYFUc4Lt_wYlAGy8s"\n      }\n    }\n  ],\n  "authentication": [\n    "did:key:z6MkwJBFYK8vTVGeiMsLzcqbSRXW4aTg4PozGbekWtQNUnnW#z6MkwJBFYK8vTVGeiMsLzcqbSRXW4aTg4PozGbekWtQNUnnW"\n  ],\n  "assertionMethod": [\n    "did:key:z6MkwJBFYK8vTVGeiMsLzcqbSRXW4aTg4PozGbekWtQNUnnW#z6MkwJBFYK8vTVGeiMsLzcqbSRXW4aTg4PozGbekWtQNUnnW"\n  ]\n}\n')),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the text editor of your choice, open the DID document file above. Either manually in the editor or with CLI commands, you'll want to make the following changes to the file:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"You'll want to change every instance of ",(0,o.kt)("inlineCode",{parentName:"li"},"did:key:z6Mkw...")," to\n",(0,o.kt)("inlineCode",{parentName:"li"},"did:web:{hosting site}")," where ",(0,o.kt)("inlineCode",{parentName:"li"},"{hosting site}")," is the full domain (with\nor without path) you picked above, without the ",(0,o.kt)("inlineCode",{parentName:"li"},"https://")," prefix. I.e.,",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'sed -i -e "s/did:key:z6MkwJBFYK8vTVGeiMsLzcqbSRXW4aTg4PozGbekWtQNUnnW/did:web:{hosting site}/g" <my_file>.json\n'))),(0,o.kt)("li",{parentName:"ol"},"Note that in the property ",(0,o.kt)("inlineCode",{parentName:"li"},"verificationMethod.id"),", there is a query\nparameter ",(0,o.kt)("inlineCode",{parentName:"li"},"#z6Mkw..."),' defining the default (and only) "',(0,o.kt)("a",{parentName:"li",href:"/docs/didkit/concepts/"},"verification\nmethod"),"\" of the DID by that name. You'll want to\nreplace this with ",(0,o.kt)("inlineCode",{parentName:"li"},"#{mainKeyName}")," (the conventional default is ",(0,o.kt)("inlineCode",{parentName:"li"},"#key1"),"\nor ",(0,o.kt)("inlineCode",{parentName:"li"},"#owner"),"). "),(0,o.kt)("li",{parentName:"ol"},"By default, a did-web should have at least two ",(0,o.kt)("inlineCode",{parentName:"li"},"verificationMethod"),"s:\n",(0,o.kt)("inlineCode",{parentName:"li"},"authentication")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"assertionMethod"),".  If you'd like these both to be\naliases for the key generated above, simply change the two\nverificationMethod-qualified DIDs from the respective sections as the\nbottom to the one created in the previous step. The changes in 2 & 3 can\nbe executed with a single command: ",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'sed -i -e "s/#z6MkwJBFYK8vTVGeiMsLzcqbSRXW4aTg4PozGbekWtQNUnnW/#{mainKeyName}/g" <my_file>.json\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("em",{parentName:"li"},"Note: adding any other properties to the DID document is discouraged,\nbut adding unregistered properties and/or using keytypes other than\nEd25519 may require inserting entries to an inline @Context definition.\nSee ",(0,o.kt)("a",{parentName:"em",href:"https://w3c-ccg.github.io/did-method-web/#json-ld-context-definition"},"the did-web\nspecification"),"\nfor an example and the ",(0,o.kt)("a",{parentName:"em",href:"https://json-ld.org/spec/latest/json-ld/#example-6-in-line-context-definition"},"JSON-LD\nspec"),"\nfor more explanation.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Save this edited DID document and publish it as ",(0,o.kt)("inlineCode",{parentName:"p"},"/.well-known/did.json")," on\nthe hosting site's web server. You may need to configure the server to host\nthe file as ",(0,o.kt)("inlineCode",{parentName:"p"},"content-type/json"),"."))),(0,o.kt)("h2",{id:"testing"},"Testing"),(0,o.kt)("p",null,"From a CLI installed on any web-connected computer, you can call"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"didkit did-resolve did:web:{hosting site}\n")),(0,o.kt)("p",null,"and get back the same DID document you published in step 5."),(0,o.kt)("p",null,"For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"didkit did-resolve did:web:demo.spruceid.com")," returns:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": [\n    "https://www.w3.org/ns/did/v1",\n    {\n      "@id": "https://w3id.org/security#publicKeyJwk",\n      "@type": "@json"\n    }\n  ],\n  "id": "did:web:demo.spruceid.com",\n  "verificationMethod": [\n    {\n      "id": "did:web:demo.spruceid.com#_t-v-Ep7AtkELhhvAzCCDzy1O5Bn_z1CVFv9yiRXdHY",\n      "type": "Ed25519VerificationKey2018",\n      "controller": "did:web:demo.spruceid.com",\n      "publicKeyJwk": {\n        "kty": "OKP",\n        "crv": "Ed25519",\n        "x": "2yv3J-Sf263OmwDLS9uFPTRD0PzbvfBGKLiSnPHtXIU"\n      }\n    }\n  ],\n  "authentication": [\n    "did:web:demo.spruceid.com#_t-v-Ep7AtkELhhvAzCCDzy1O5Bn_z1CVFv9yiRXdHY"\n  ],\n  "assertionMethod": [\n    "did:web:demo.spruceid.com#_t-v-Ep7AtkELhhvAzCCDzy1O5Bn_z1CVFv9yiRXdHY"\n  ]\n}\n')),(0,o.kt)("p",null,"If instead of your DID document you get a 404 error, you may want to\ndouble-check your work in step 5 above by typing ",(0,o.kt)("inlineCode",{parentName:"p"},"https://{hosting\nsite}/.well-known/did.json")," into a web-browser\n(",(0,o.kt)("a",{parentName:"p",href:"https://demo.spruceid.com/.well-known/did.json"},"example"),")."))}p.isMDXComponent=!0}}]);