(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{105:function(e,n,i){"use strict";i.d(n,"a",(function(){return u})),i.d(n,"b",(function(){return h}));var t=i(0),r=i.n(t);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function c(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function o(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?c(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function s(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var d=r.a.createContext({}),l=function(e){var n=r.a.useContext(d),i=n;return e&&(i="function"==typeof e?e(n):o(o({},n),e)),i},u=function(e){var n=l(e.components);return r.a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},f=r.a.forwardRef((function(e,n){var i=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(i),f=t,h=u["".concat(c,".").concat(f)]||u[f]||p[f]||a;return i?r.a.createElement(h,o(o({ref:n},d),{},{components:i})):r.a.createElement(h,o({ref:n},d))}));function h(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=i.length,c=new Array(a);c[0]=f;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:t,c[1]=o;for(var d=2;d<a;d++)c[d]=i[d];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,i)}f.displayName="MDXCreateElement"},95:function(e,n,i){"use strict";i.r(n),i.d(n,"frontMatter",(function(){return o})),i.d(n,"metadata",(function(){return s})),i.d(n,"toc",(function(){return d})),i.d(n,"default",(function(){return u}));var t=i(3),r=i(7),a=(i(0),i(105)),c=["components"],o={id:"example--batch-generation",title:"Batch Generation & Verification"},s={unversionedId:"didkit/example--batch-generation",id:"didkit/example--batch-generation",isDocsHomePage:!1,title:"Batch Generation & Verification",description:"Introduction",source:"@site/docs/didkit/example--batch-generation.md",slug:"/didkit/example--batch-generation",permalink:"/docs/didkit/example--batch-generation",editUrl:"https://github.com/spruceid/spruceid.dev/edit/main/docs/didkit/example--batch-generation.md",version:"current",sidebar:"docs",previous:{title:"Core Functions (HTTP)",permalink:"/docs/didkit/example--core-functions-in-curl"},next:{title:"Spring Boot Java AuthN Service",permalink:"/docs/didkit/example--java-springboot"}},d=[{value:"Introduction",id:"introduction",children:[]},{value:"Batch Issuance Setup",id:"batch-issuance-setup",children:[{value:"Define generation function",id:"define-generation-function",children:[]},{value:"Run generation function on loop",id:"run-generation-function-on-loop",children:[]}]},{value:"Batch Verification Script Setup",id:"batch-verification-script-setup",children:[{value:"Define verification function",id:"define-verification-function",children:[]},{value:"Run verification function on loop",id:"run-verification-function-on-loop",children:[]}]},{value:"Appendix: whole script",id:"appendix-whole-script",children:[]}],l={toc:d};function u(e){var n=e.components,i=Object(r.a)(e,c);return Object(a.b)("wrapper",Object(t.a)({},l,i,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"introduction"},"Introduction"),Object(a.b)("p",null,"This shell script can be used to quickly generate a large volume of VCs for testing purposes.  The generated VCs use the bare-minimum schema and contain essentially nothing aside from a unique UUID each, in the ",Object(a.b)("inlineCode",{parentName:"p"},"id")," field.  "),Object(a.b)("p",null,"To generate these VC ids, they use the commonplace ",Object(a.b)("a",{parentName:"p",href:"https://stackoverflow.com/questions/56172946/how-to-generate-a-uuid-in-shell-script"},"uuidgen")," command.  For more realistic sample VCs, simply start with a credential definition from a real-world context, and populate values for all the fields, such as names and addresses, with command-line tools or spreadsheets of dummy data."),Object(a.b)("h2",{id:"batch-issuance-setup"},"Batch Issuance Setup"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"#!/bin/sh\n\n# Exit if any command in this script fails.\nset -e\n\nif [ -e issuer_key.jwk ]; then\n    echo 'Using existing keypair.'\nelse\n    didkit generate-ed25519-key > issuer_key.jwk\n    echo 'Generated keypair.'\nfi\nissuer=$(didkit key-to-did-key -k issuer_key.jwk)\nprintf 'Issuer DID: %s\\n' \"$issuer\"\nissuer_vm=$(didkit key-to-verification-method -k issuer_key.jwk)\nprintf 'Issuer verification method: %s\\n' \"$issuer_vm\"\n")),Object(a.b)("h3",{id:"define-generation-function"},"Define generation function"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'generate_credential() {\n    didkit vc-issue-credential \\\n        -k issuer_key.jwk \\\n        -v "$issuer_vm" \\\n        -p assertionMethod <<-EOF\n    {\n        "@context": "https://www.w3.org/2018/credentials/v1",\n        "id": "uuid:$(uuidgen)",\n        "type": ["VerifiableCredential"],\n        "issuer": "$issuer",\n        "issuanceDate": "$(date -u +\'%FT%TZ\')",\n        "credentialSubject": {\n            "id": "uuid:$(uuidgen)"\n        }\n    }\n    EOF\n}\n')),Object(a.b)("h3",{id:"run-generation-function-on-loop"},"Run generation function on loop"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"This will generate a file named ",Object(a.b)("inlineCode",{parentName:"li"},"creds")," with a stringified verifiable credential on each line, with as many lines as the value of ",Object(a.b)("inlineCode",{parentName:"li"},"count"),".")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'creds_file=creds\nprintf \'Writing to file "%s"\\n\' "$creds_file"\ntouch "$creds_file"\n\ni=1\ncount=100\nwhile [ $i -le $count ]; do\n    printf \'\\rGenerating credentials... %d/%d\' $i $count >&2\n    generate_credential\n    : $((i = i+1))\ndone > "$creds_file"\nprintf \'\\nDone\\n\'\n')),Object(a.b)("h2",{id:"batch-verification-script-setup"},"Batch Verification Script Setup"),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"In this script, a verification method is derived from a local key and manually passed with the -v parameter. This is not the default behavior of DIDKit's verification function, but it greatly accelerates the verification of a large batch of VCs being testing against the known key material and verification method of a known issuer."),Object(a.b)("p",{parentName:"div"},"Were one to remove the ",Object(a.b)("inlineCode",{parentName:"p"},"key.jwk")," check, the generation of a verification method, and the passing of that method to the verification function, a verification method would be extracted for each VC verified, from the DID Document of the issuer, which would be resolved each time as specified in the VC being verified. This is the default behavior of DIDKit."))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"#!/bin/sh\n\n# Exit if any command in this script fails.\nset -e\n\nif [ ! -e issuer_key.jwk ]; then\n    echo 'Missing keypair.' >&2\n    exit 1\nfi\n\nissuer_vm=$(didkit key-to-verification-method -k issuer_key.jwk)\nprintf 'Issuer verification method: %s\\n' \"$issuer_vm\"\n")),Object(a.b)("h3",{id:"define-verification-function"},"Define verification function"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'verify_credential() {\n    if ! out=$(didkit vc-verify-credential \\\n        -v "$issuer_vm" \\\n        -p assertionMethod)\n    then\n        printf "verify failed: %s" "$out" >&2\n        return 1\n    fi\n}\n')),Object(a.b)("h3",{id:"run-verification-function-on-loop"},"Run verification function on loop"),Object(a.b)("p",null,"Here we loop through the file created above, verifying the credential contained on each line."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'creds_file=creds\nprintf \'Reading from file "%s"\\n\' "$creds_file"\n\ni=1\njq -c . "$creds_file" | while read line; do\n    printf \'\\rVerifying credentials... %d\' $i\n    printf "%s" "$line" | verify_credential \n    : $((i = i+1))\ndone\nprintf \'\\nDone\\n\'\n\n\n')),Object(a.b)("h2",{id:"appendix-whole-script"},"Appendix: whole script"),Object(a.b)("p",null,"Also available on Github as"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/spruceid/didkit/cli/tests/example2-batch-generation.sh"},"/cli/tests/example2-batch-generation.sh")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/spruceid/didkit/cli/tests/example2-batch-verification.sh"},"/cli/tests/example2-batch-verification.sh"))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'#!/bin/sh\n\n# Exit if any command in this script fails.\nset -e\n\nif [ -e issuer_key.jwk ]; then\n    echo \'Using existing keypair.\'\nelse\n    didkit generate-ed25519-key > issuer_key.jwk\n    echo \'Generated keypair.\'\nfi\nissuer=$(didkit key-to-did-key -k issuer_key.jwk)\nprintf \'Issuer DID: %s\\n\' "$issuer"\nissuer_vm=$(didkit key-to-verification-method -k issuer_key.jwk)\nprintf \'Issuer verification method: %s\\n\' "$issuer_vm"\n\n# Generate a new dummy credential\ngenerate_credential() {\n    didkit vc-issue-credential \\\n        -k issuer_key.jwk \\\n        -v "$issuer_vm" \\\n        -p assertionMethod <<-EOF\n    {\n        "@context": "https://www.w3.org/2018/credentials/v1",\n        "id": "uuid:$(uuidgen)",\n        "type": ["VerifiableCredential"],\n        "issuer": "$issuer",\n        "issuanceDate": "$(date -u +\'%FT%TZ\')",\n        "credentialSubject": {\n            "id": "uuid:$(uuidgen)"\n        }\n    }\n    EOF\n}\n\n# Generate a bunch of verifiable credentials\ncreds_file=creds\nprintf \'Writing to file "%s"\\n\' "$creds_file"\ntouch "$creds_file"\n\ni=1\ncount=100\nwhile [ $i -le $count ]; do\n    printf \'\\rGenerating credentials... %d/%d\' $i $count >&2\n    generate_credential\n    : $((i = i+1))\ndone > "$creds_file"\nprintf \'\\nDone\\n\'\n')),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'#!/bin/sh\n\n# Exit if any command in this script fails.\nset -e\n\nif [ ! -e issuer_key.jwk ]; then\n    echo \'Missing keypair.\' >&2\n    exit 1\nfi\n\nissuer_vm=$(didkit key-to-verification-method -k issuer_key.jwk)\nprintf \'Issuer verification method: %s\\n\' "$issuer_vm"\n\nverify_credential() {\n    if ! out=$(didkit vc-verify-credential \\\n        -v "$issuer_vm" \\\n        -p assertionMethod)\n    then\n        printf "verify failed: %s" "$out" >&2\n        return 1\n    fi\n}\n\ncreds_file=creds\nprintf \'Reading from file "%s"\\n\' "$creds_file"\n\ni=1\njq -c . "$creds_file" | while read line; do\n    printf \'\\rVerifying credentials... %d\' $i\n    printf "%s" "$line" | verify_credential \n    : $((i = i+1))\ndone\nprintf \'\\nDone\\n\'\n\n\n')))}u.isMDXComponent=!0}}]);