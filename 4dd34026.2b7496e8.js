(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{141:function(e,t,r){"use strict";r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return b}));var i=r(0),n=r.n(i);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),d=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},h=function(e){var t=d(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=d(r),p=i,b=h["".concat(o,".").concat(p)]||h[p]||u[p]||a;return r?n.a.createElement(b,c(c({ref:t},l),{},{components:r})):n.a.createElement(b,c({ref:t},l))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},151:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/did-core_vc-lifecycle-6f25b06563e7a70c62afe8d4bc920e6e.png"},88:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return d}));var i=r(3),n=r(7),a=(r(0),r(141)),o={id:"glossary",title:"Glossary & References"},c={unversionedId:"glossary",id:"glossary",isDocsHomePage:!1,title:"Glossary & References",description:"Terminology",source:"@site/docs\\glossary.md",slug:"/glossary",permalink:"/docs/glossary",editUrl:"https://github.com/spruceid/docs/glossary.md",version:"current",sidebar:"someSidebar",previous:{title:"Welcome to the Spruce Developer Portal",permalink:"/docs/"}},s=[{value:"Terminology",id:"terminology",children:[{value:"Verifiable Credentials (&quot;<em>VCs</em>&quot;)",id:"verifiable-credentials-vcs",children:[]},{value:"Wallet",id:"wallet",children:[]},{value:"VC Nomenclature &amp; Life-Cycle",id:"vc-nomenclature--life-cycle",children:[]},{value:"Decentralized Identifiers (&quot;<em>DIDs</em>&quot;)",id:"decentralized-identifiers-dids",children:[]},{value:"DID Document",id:"did-document",children:[]},{value:"DID Taxonomy &amp; Architecture",id:"did-taxonomy--architecture",children:[]},{value:"DID Method",id:"did-method",children:[]},{value:"DID:Key",id:"didkey",children:[]}]},{value:"Further Reading",id:"further-reading",children:[]}],l={toc:s};function d(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"terminology"},"Terminology"),Object(a.b)("h3",{id:"verifiable-credentials-vcs"},'Verifiable Credentials ("',Object(a.b)("em",{parentName:"h3"},"VCs"),'")'),Object(a.b)("p",null,"Verifiable Credentials combine properties and superpowers from many different mental models. They are like portable, free-floating data units, which are not exactly documents or data points or records. They are signed and thus tamper-evident, and thus share much of the verifiability of blockchain data or signed PDFs insofar as the signatures they contain can be properly verified by reference to the identities included inside the document. Particularly in the form of JSON-LD verifiable credentials, they are highly portable, in that the structure of their data can often be reconstructed years later and completely out of their original context. For more on JSON-LD and linked data, see the Semantics section of the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/didkit/concepts.md#Semantics"}),"DIDKit Core Concepts")," entry."),Object(a.b)("h3",{id:"wallet"},"Wallet"),Object(a.b)("p",null,'The mental model of a "wallet" for storing directly and manually controlled information and assets has become increasingly common in recent years thanks to the growing popularity of ledger-based cryptocurrencies, NFTs, and other virtual assets controlled by cryptography. Just as wallet software makes cryptographic key management intuitive and human-scaled when handling such cryptographically-controlled assets on common ledgers, so too can "wallet" interfaces make cryptographically-controlled documents like Verifiable Credentials manageable. '),Object(a.b)("p",null,'In the verifiable credential space, a "wallet" is traditionally assumed to manage one or more strong cryptographic identifiers, which must be authenticated to an issuer to receive identifier-specific or identifier-locked credentials. This is often assumed to be a direct and interactive process, as is the process of presenting these strong credentials to verifiers (usually double-authenticated, to both the verifier and to the credential, with two respective identifiers). Credible Wallet was designed to a secure, production-grade, yet lightweight and general-purpose wallet for such use cases, completely free of platform-, vendor-, or blockchain-lock-in and almost free of opinions (our preference for open standards is, after all, an opinion).'),Object(a.b)("p",null,'There are, however, fiduciary, automated, and/or "custodial" wallets (by analogy to cryptocurrency). Here, the dividing line between wallets and agents, services, and service providers gets a little blurry; particularly when the wallet holder is a legal entity or non-human actor, this is an important wrinkle on the concept of the "wallet." Here, DIDKit may be combined with enterprise identity and security platforms to provide a less human-scale "wallet" for handling strong credentials about human and non-human actors. '),Object(a.b)("h3",{id:"vc-nomenclature--life-cycle"},"VC Nomenclature & Life-Cycle"),Object(a.b)("p",null,Object(a.b)("img",{alt:"Architecture Diagram",src:r(151).default})),Object(a.b)("p",null,"Src: ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.w3.org/TR/vc-data-model/#lifecycle-details"}),"DID specification")),Object(a.b)("h3",{id:"decentralized-identifiers-dids"},'Decentralized Identifiers ("',Object(a.b)("em",{parentName:"h3"},"DIDs"),'")'),Object(a.b)("p",null,"Decentralized Identifiers are stable identifiers which are bound to a controlling keypair, which is usually rotatable without changing the identifier. This is achieved by a publication mechanism maintaining information about key material in verifiable data stores (usually distributed ledgers) over time. This information is referred to as a DID Document. The ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.w3.org/TR/did-core/"}),"specification")," governing these identifiers is maintained by a dedicated W3C ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.w3.org/2019/did-wg/"}),"working group"),", of which Spruce is a member. For more information on the W3C, see the ",Object(a.b)("strong",{parentName:"p"},"Further Reading")," section."),Object(a.b)("h3",{id:"did-document"},"DID Document"),Object(a.b)("p",null,'A record returned by a query for a DID, containing information on how to verify information linked in some way to that identifier. The name can be misleading, since in many cases this "document" is entirely ephemeral or contextual and not intended to be a static file or document stored or cached anywhere.  It is sometimes couched in a "Resolution object," which contains metadata about the query and resolution process, although most application developers have no need to worry about these DID mechanics. For a The ',Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://w3c-ccg.github.io/did-resolution/"}),"specification")," governing the DID--\x3eDocument resolution process is maintained by a dedicated W3C ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.w3.org/2019/did-wg/"}),"working group"),", of which Spruce is a member. For more information on the W3C, see the ",Object(a.b)("strong",{parentName:"p"},"Further Reading")," section."),Object(a.b)("h3",{id:"did-taxonomy--architecture"},"DID Taxonomy & Architecture"),Object(a.b)("p",null,"Src: ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.w3.org/TR/did-core/#architecture-overview"}),"DID specification")),Object(a.b)("h3",{id:"did-method"},"DID Method"),Object(a.b)("p",null,"A set of interdependent governance, publication, and discovery mechanisms for DIDs in a given DID namespace, specified by a shared specification. This specification explains how to validate a DID (namespace rules), where to query and what to expect back when resolving a DID, etc. The ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://w3c.github.io/did-spec-registries/#did-methods"}),"registry")," of compliant specifications for DID Methods is maintained by a dedicated W3C ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.w3.org/2019/did-wg/"}),"working group"),", of which Spruce is a member. For more information on the W3C, see the ",Object(a.b)("strong",{parentName:"p"},"Further Reading")," section."),Object(a.b)("h3",{id:"didkey"},"DID:Key"),Object(a.b)("p",null,"A special DID Method that generates conformant, offchain DID documents for local, private, and/or ephemeral resolution from a keypair. This can be helpful for integrating conventional PKI or signing infrastructure with DID issuance, or to allow caching or local resolution of DID documents where it is undesirable or impossible to resolve remote DIDs. The ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://w3c-ccg.github.io/did-method-key/"}),"specification")," for this method was originally created in, and maintained in, the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://w3c-ccg.github.io/"}),"W3C-Credentials Community Group"),"."),Object(a.b)("h2",{id:"further-reading"},"Further Reading"),Object(a.b)("p",null,"Further educational/contextual resources on decentralized identity topics can be found on the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://identity.foundation/education/"}),"Education page")," of the Decentralized Identity Foundation. "),Object(a.b)("p",null,"For insight into the core specifications authored and maintained by the W3C working group, the best overview is the github repositories section of their ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.w3.org/2019/did-wg/"}),"homepage")," on W3.org. The largely overlapping ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://w3c-ccg.github.io/"}),"Credentials Community Group"),", with weekly open, recorded, and scribed ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://w3c-ccg.github.io/meetings/"}),"calls")," open to W3C non-members, is also a good venue for getting to know the debates around the core specifications."))}d.isMDXComponent=!0}}]);