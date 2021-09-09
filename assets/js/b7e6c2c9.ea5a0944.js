"use strict";(self.webpackChunkdevsite=self.webpackChunkdevsite||[]).push([[363],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6046:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"python",title:"Python",sidebar_label:"Python"},p={unversionedId:"didkit-interfaces/python",id:"didkit-interfaces/python",isDocsHomePage:!1,title:"Python",description:"At a Glance",source:"@site/docs/didkit-interfaces/python.md",sourceDirName:"didkit-interfaces",slug:"/didkit-interfaces/python",permalink:"/docs/didkit-interfaces/python",editUrl:"https://github.com/spruceid/docs/didkit-interfaces/python.md",version:"current",sidebar_label:"Python",frontMatter:{id:"python",title:"Python",sidebar_label:"Python"},sidebar:"docs",previous:{title:"Java",permalink:"/docs/didkit-interfaces/java"},next:{title:"Node.JS",permalink:"/docs/didkit-interfaces/node"}},s=[{value:"At a Glance",id:"at-a-glance",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Examples",id:"examples",children:[]}],d={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"at-a-glance"},"At a Glance"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"DIDKit's Python binaries can be installed directly from ",(0,i.kt)("inlineCode",{parentName:"li"},"pip"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"pypi")," (instructions below); for manual/custom builds, see the sub-repo ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/spruceid/didkit/lib/python/README.md#Building"},"README.md file"),".  "),(0,i.kt)("li",{parentName:"ul"},"For a few clear examples see the ",(0,i.kt)("a",{parentName:"li",href:"#Syntax"},"Syntax")," section below."),(0,i.kt)("li",{parentName:"ul"},"The syntax is quite similar to the Rust library, so for a more systematic reference, you can read the ",(0,i.kt)("a",{parentName:"li",href:"https://rust.didkit.dev/didkit/"},"Rust documentation"),".")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Make sure you have the latest versions of pip and PyPA\u2019s build installed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install -y python3-pip python3-virtualenv\npython3 -m pip install --upgrade pip build\n")),(0,i.kt)("p",null,"Build DIDKit (latest release):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cargo build --release\n")),(0,i.kt)("p",null,"Build the package"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m build\n")),(0,i.kt)("p",null,"Install the package using the provided ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spruceid/didkit/blob/main/lib/python/setup.cfg"},(0,i.kt)("strong",{parentName:"a"},"setup.cfg file")),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m pip install dist/didkit-`cat setup.cfg | grep version | cut -d' ' -f3`-*.whl\n")),(0,i.kt)("h2",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,"To use DIDKit in Python, import the didkit library and manipulate the ",(0,i.kt)("inlineCode",{parentName:"p"},"didkit"),"\nobject as you would any other.  It contains all the same methods and properties\nas the didkit object in Rust, so you can refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://rust.didkit.dev/didkit/"},"Rust\ndocs")," for an overview of the core structure of\nDIDKit as a library.  "),(0,i.kt)("p",null,"The method ",(0,i.kt)("inlineCode",{parentName:"p"},"issueCredential"),", for example, takes all the properties you would\nexpect, as strings (mind the escape quotes!) and returns a credential as a JSON\nobject that the user then ",(0,i.kt)("inlineCode",{parentName:"p"},".dumps")," or ",(0,i.kt)("inlineCode",{parentName:"p"},".loads"),". See this example from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spruceid/didkit/blob/main/examples/python-flask/issue_credential.py#L43-L47"},"Python-Flask example\nproject"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"    credential = didkit.issueCredential(\n        credential.__str__().replace(\"'\", '\"'),\n        didkit_options.__str__().replace(\"'\", '\"'),\n        key)\n    return json.loads(credential)\n")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Tool"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.djangoproject.com/"},"Django web framework")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/spruceid/didkit/tree/main/examples/python_django"},"example in GitHub"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://flask.palletsprojects.com/en/2.0.x/"},"Flask web microframework")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/spruceid/didkit/tree/main/examples/python-flask/"},"example in GitHub"))))))}c.isMDXComponent=!0}}]);