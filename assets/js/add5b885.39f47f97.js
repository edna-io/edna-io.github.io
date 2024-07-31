"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[71447],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,b=m["".concat(p,".").concat(u)]||m[u]||c[u]||l;return n?r.createElement(b,o(o({ref:t},d),{},{components:n})):r.createElement(b,o({ref:t},d))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},33174:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={sidebar_position:10},o="\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0439 \u0427\u0430\u0442\u0430",i={unversionedId:"Examples",id:"version-6.9.0/Examples",title:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0439 \u0427\u0430\u0442\u0430",description:'edna SDK \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043f\u0440\u0438\u043c\u0435\u0440\u044b, \u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0438\u0440\u0443\u044e\u0449\u0438\u0435 \u0432\u043b\u0438\u044f\u043d\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a \u043d\u0430 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435 \u0438 \u0440\u0430\u0431\u043e\u0442\u0443 \u0427\u0430\u0442\u0430. \u0427\u0430\u0441\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u0430 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043d\u043e\u0432\u043e\u0433\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f. \u0412 \u043f\u0440\u0438\u043c\u0435\u0440\u0430\u0445 edna SDK \u043e\u043d\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u044b \u0432 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 "FIX_ME". \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u044d\u0442\u0438\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0432\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u043e\u0442 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430, \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u0437\u0430 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435.',source:"@site/web_versioned_docs/version-6.9.0/Examples.md",sourceDirName:".",slug:"/Examples",permalink:"/web/6.9.0/Examples",draft:!1,tags:[],version:"6.9.0",lastUpdatedAt:1713258316,formattedLastUpdatedAt:"16 \u0430\u043f\u0440. 2024 \u0433.",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"mainSidebar",previous:{title:"\u0427\u0430\u0441\u0442\u044b\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b",permalink:"/web/6.9.0/FAQ"},next:{title:"Changelog",permalink:"/web/6.9.0/Changelog"}},p={},s=[{value:"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f",id:"\u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f",level:3},{value:"\u0421\u0432\u043e\u044f \u0441\u0442\u0430\u0440\u0442\u043e\u0432\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430",id:"\u0441\u0432\u043e\u044f-\u0441\u0442\u0430\u0440\u0442\u043e\u0432\u0430\u044f-\u043a\u043d\u043e\u043f\u043a\u0430",level:3},{value:"\u041f\u0440\u043e\u0434\u0432\u0438\u043d\u0443\u0442\u0430\u044f \u0442\u0435\u043c\u0438\u0437\u0430\u0446\u0438\u044f",id:"\u043f\u0440\u043e\u0434\u0432\u0438\u043d\u0443\u0442\u0430\u044f-\u0442\u0435\u043c\u0438\u0437\u0430\u0446\u0438\u044f",level:3},{value:"\u041b\u043e\u043a\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0438 \u0437\u0430\u043c\u0435\u043d\u0430 \u043d\u0430\u0434\u043f\u0438\u0441\u0435\u0439",id:"\u043b\u043e\u043a\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f-\u0438-\u0437\u0430\u043c\u0435\u043d\u0430-\u043d\u0430\u0434\u043f\u0438\u0441\u0435\u0439",level:3},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u0427\u0430\u0442\u0430",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438-\u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f-\u0447\u0430\u0442\u0430",level:3},{value:"\u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443",id:"\u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f-\u043f\u043e-\u0437\u0430\u043f\u0440\u043e\u0441\u0443",level:3}],d={toc:s},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0439-\u0447\u0430\u0442\u0430"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0439 \u0427\u0430\u0442\u0430"),(0,a.kt)("p",null,"edna SDK \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043f\u0440\u0438\u043c\u0435\u0440\u044b, \u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0438\u0440\u0443\u044e\u0449\u0438\u0435 \u0432\u043b\u0438\u044f\u043d\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a \u043d\u0430 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435 \u0438 \u0440\u0430\u0431\u043e\u0442\u0443 \u0427\u0430\u0442\u0430. \u0427\u0430\u0441\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u0430 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043d\u043e\u0432\u043e\u0433\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f. \u0412 \u043f\u0440\u0438\u043c\u0435\u0440\u0430\u0445 edna SDK \u043e\u043d\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u044b \u0432 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},'"FIX_ME"'),". \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u044d\u0442\u0438\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0432\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u043e\u0442 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430, \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u0437\u0430 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435."),(0,a.kt)("h3",{id:"\u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f"},"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThreadsMobileLib/edna-sdk-web/tree/master/examples/Standard"},"examples/Standard")),(0,a.kt)("p",null,"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u043f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0432\u0438\u0434\u0436\u0435\u0442\u0430 \u0441 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u043c \u043d\u0430\u0431\u043e\u0440\u043e\u043c \u0441\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u0435\u0439, \u0442\u0430\u043a\u0438\u0445 \u043a\u0430\u043a \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0443\u043f\u0440\u043e\u0449\u0435\u043d\u043d\u043e\u0439 \u0442\u0435\u043c\u0438\u0437\u0430\u0446\u0438\u0438, \u0432\u043d\u0435\u0448\u043d\u0438\u0445 API \u0438 \u0444\u043e\u0440\u043c."),(0,a.kt)("h3",{id:"\u0441\u0432\u043e\u044f-\u0441\u0442\u0430\u0440\u0442\u043e\u0432\u0430\u044f-\u043a\u043d\u043e\u043f\u043a\u0430"},"\u0421\u0432\u043e\u044f \u0441\u0442\u0430\u0440\u0442\u043e\u0432\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThreadsMobileLib/edna-sdk-web/tree/master/examples/Custom%20button"},"examples/Custom button")),(0,a.kt)("p",null,"\u042d\u0442\u043e\u0442 \u043f\u0440\u0438\u043c\u0435\u0440 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u043a\u0430\u043a \u0437\u0430\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u0442\u0430\u0440\u0442\u043e\u0432\u0443\u044e \u043a\u043d\u043e\u043f\u043a\u0443 \u0427\u0430\u0442\u0430 \u043d\u0430 \u0441\u0432\u043e\u044e \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u0443\u044e \u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0432\u0438\u0434\u0438\u043c\u043e\u0441\u0442\u044c\u044e \u0432\u0438\u0434\u0436\u0435\u0442\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043c\u0435\u0442\u043e\u0434\u043e\u0432 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0433\u043e API."),(0,a.kt)("h3",{id:"\u043f\u0440\u043e\u0434\u0432\u0438\u043d\u0443\u0442\u0430\u044f-\u0442\u0435\u043c\u0438\u0437\u0430\u0446\u0438\u044f"},"\u041f\u0440\u043e\u0434\u0432\u0438\u043d\u0443\u0442\u0430\u044f \u0442\u0435\u043c\u0438\u0437\u0430\u0446\u0438\u044f"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThreadsMobileLib/edna-sdk-web/tree/master/examples/Theming"},"examples/Theming")),(0,a.kt)("p",null,"\u0412 \u044d\u0442\u043e\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0431\u043e\u043b\u0435\u0435 \u0442\u043e\u043d\u043a\u0430\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0432\u043d\u0435\u0448\u043d\u0435\u0433\u043e \u0432\u0438\u0434\u0430 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u0427\u0430\u0442\u0430: c\u0442\u0430\u0440\u0442\u043e\u0432\u043e\u0439 \u043a\u043d\u043e\u043f\u043a\u0438, \u0431\u0435\u0439\u0434\u0436\u0430 \u0441 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e\u043c \u043d\u0435\u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043d\u044b\u0445 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439, \u043f\u0440\u0438\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u044f \u0432 \u0427\u0430\u0442 \u0438 \u043f\u0430\u043d\u0435\u043b\u0438 \u0431\u044b\u0441\u0442\u0440\u044b\u0445 \u043e\u0442\u0432\u0435\u0442\u043e\u0432."),(0,a.kt)("h3",{id:"\u043b\u043e\u043a\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f-\u0438-\u0437\u0430\u043c\u0435\u043d\u0430-\u043d\u0430\u0434\u043f\u0438\u0441\u0435\u0439"},"\u041b\u043e\u043a\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0438 \u0437\u0430\u043c\u0435\u043d\u0430 \u043d\u0430\u0434\u043f\u0438\u0441\u0435\u0439"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThreadsMobileLib/edna-sdk-web/tree/master/examples/Locale"},"examples/Locale")),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e \u0441 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043d\u044b\u043c\u0438 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u043c\u0438 \u043d\u0430\u0434\u043f\u0438\u0441\u044f\u043c\u0438 \u0438 \u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u044f\u0437\u044b\u043a\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0433\u043e API."),(0,a.kt)("h3",{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438-\u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f-\u0447\u0430\u0442\u0430"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u0427\u0430\u0442\u0430"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThreadsMobileLib/edna-sdk-web/tree/master/examples/Common"},"examples/Common")),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u043a\u0438 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u0427\u0430\u0442\u0430 \u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043e\u043c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 ",(0,a.kt)("inlineCode",{parentName:"p"},"hideWelcome"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"maximizeOnInit"),", \u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"disableFormatSimpleMessages"),"."),(0,a.kt)("h3",{id:"\u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f-\u043f\u043e-\u0437\u0430\u043f\u0440\u043e\u0441\u0443"},"\u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThreadsMobileLib/edna-sdk-web/tree/master/examples/On%20demand"},"examples/On demand")),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0427\u0430\u0442\u0430 \u043f\u043e \u043a\u043b\u0438\u043a\u0443 \u043d\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b."))}c.isMDXComponent=!0}}]);