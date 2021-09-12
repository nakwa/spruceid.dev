"use strict";(self.webpackChunkdevsite=self.webpackChunkdevsite||[]).push([[594],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?i.createElement(f,a(a({ref:t},c),{},{components:n})):i.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,a[1]=d;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1430:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],d={id:"vc-display",title:"VC Display"},l={unversionedId:"credible-examples/vc-display",id:"credible-examples/vc-display",isDocsHomePage:!1,title:"VC Display",description:"Introduction",source:"@site/docs/credible-examples/vc-display.md",sourceDirName:"credible-examples",slug:"/credible-examples/vc-display",permalink:"/docs/credible-examples/vc-display",editUrl:"https://github.com/spruceid/spruceid.dev/edit/main/docs/credible-examples/vc-display.md",version:"current",frontMatter:{id:"vc-display",title:"VC Display"},sidebar:"docs",previous:{title:"QR Code Issuance",permalink:"/docs/credible-examples/qr-issuance"},next:{title:"Deploying a DID:tz to Tezos Mainnet",permalink:"/docs/credible-examples/did-tz-deploy"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Extend the &quot;Model&quot; to allow additional fields",id:"extend-the-model-to-allow-additional-fields",children:[{value:"Rendering the newly-added fields in the final end-user interface",id:"rendering-the-newly-added-fields-in-the-final-end-user-interface",children:[]}]}],c={toc:s};function p(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Credible is an SDK that we have optimized for white-labelling, i.e., bundling\ninto apps that have their own design goals and non-Verifiable Credential\ncapabilities. One example of how we have optimized the design of Credible for\nmodularity and adaptation to various contexts is that the display of VCs is\nhighly adaptable-- and the first thing you would need to adapt in most\nuse-cases, before getting into finer points of user experience."),(0,o.kt)("p",null,"The component that renders the credential is implemented by the ",(0,o.kt)("inlineCode",{parentName:"p"},"DocumentWidget"),"\nclass located at\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/spruceid/credible/blob/main/lib/app/pages/credentials/widget/document.dart#L9"},(0,o.kt)("inlineCode",{parentName:"a"},"lib/app/pages/credentials/widget/document.dart")),"\nand the model rendered by the component is implemented by the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/spruceid/credible/blob/main/lib/app/pages/credentials/widget/document.dart#L13"},(0,o.kt)("inlineCode",{parentName:"a"},"DocumentWidgetModel")),"\nclass located in the same file. Changing and adding traits to these two classes\nwill change how Credible renders VCs to its user after ",(0,o.kt)("a",{parentName:"p",href:"https://spruceid.dev/docs/credible/install#building-didkit-for-different-targets"},"building credible from\nsource"),"."),(0,o.kt)("h2",{id:"extend-the-model-to-allow-additional-fields"},'Extend the "Model" to allow additional fields'),(0,o.kt)("p",null,"By default, the ",(0,o.kt)("inlineCode",{parentName:"p"},"DocumentWidgetModel")," provided by Credible displays only the ","[unresolved, un-aliased]"," contents of the top-level ",(0,o.kt)("inlineCode",{parentName:"p"},"issuer"),' property of each VC and its "status" (currently defined by whether the expiration date is in the future or the past; more involved status mechanisms are forthcoming). '),(0,o.kt)("p",null,"To add display of other kinds of information stored in the VC, just add it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"DocumentWidgetModel")," class and set the values from the ",(0,o.kt)("inlineCode",{parentName:"p"},"CredentialModel")," inside the factory method ",(0,o.kt)("inlineCode",{parentName:"p"},"factory DocumentWidgetModel.fromCredentialModel(CredentialModel model)"),".  "),(0,o.kt)("p",null,"Here is an example, written in Dart:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},'class DocumentWidgetModel {\n  // Current class fields.  \n  \n  // Add your custom fields that will be extracted from the credential model \n  // if present (null otherwise)\n  final String? myCustomField;\n\n  // Add your new fields to the constructor.\n  const DocumentWidgetModel(..., this.myCustomField);\n\n  factory DocumentWidgetModel.fromCredentialModel(CredentialModel model) {\n    // Extraction logic for other fields.\n  \n    // Extract your field contents from withing the `CredentialModel` type\n    // The `data` field contains the raw data of the Verifiable Credential\n    // so any value can be extracted.\n    final myCustomField = model.data["myCustomField"];\n\n    return DocumentWidgetModel(..., myCustomField);\n  }\n}\n')),(0,o.kt)("h3",{id:"rendering-the-newly-added-fields-in-the-final-end-user-interface"},"Rendering the newly-added fields in the final end-user interface"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"DocumentWidget")," component receives an instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"DocumentWidgetModel")," and renders its content as a tree of widgets. Any fields you've pulled out of the data object into a named property are available in each individual document object."),(0,o.kt)("p",null,"To render these new properties, simply update the widget's ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," method by adding your own custom components. Note that when a property is not found in the ",(0,o.kt)("inlineCode",{parentName:"p"},".data")," object, the value for the property will be set to NULL; for this reason, it is best to check for a non-null value at display runtime and build in some logic accordingly."),(0,o.kt)("p",null,"Here is an example in Dart:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"@override\nWidget build(BuildContext context) => Container(\n    // ...\n    child: Padding(\n      // ...\n      child: Column(\n        // ...\n        children: [\n          // Other fields widget\n          // ...\n          if (model.myCustomField != null) {\n            const SizedBox(height: 24.0), // Add a spacing between fields.\n            DocumentItemWidget(\n              label: 'My Custom Field:',\n              value: model.myCustomField,\n            )\n            ;\n          }\n          else {\n            const SizedBox(height: 48.0); // Add a spacing between fields.\n          }\n        ],\n      ),\n    ),\n  );\n")))}p.isMDXComponent=!0}}]);