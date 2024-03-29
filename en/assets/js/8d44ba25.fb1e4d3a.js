"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[54162],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},79052:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:7},i="Changelog",l={unversionedId:"changelog",id:"version-4.16.0/changelog",title:"Changelog",description:"In the current version, the SDK supports a minimum version of iOS 11. During the year, we plan to raise the minimum version to iOS 13, to support the last 4 active versions:",source:"@site/i18n/en/docusaurus-plugin-content-docs-ios/version-4.16.0/changelog.md",sourceDirName:".",slug:"/changelog",permalink:"/en/ios/4.16.0/changelog",draft:!1,tags:[],version:"4.16.0",lastUpdatedAt:1702459198,formattedLastUpdatedAt:"Dec 13, 2023",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"mainSidebar",previous:{title:"Demo App",permalink:"/en/ios/4.16.0/demo"}},s={},p=[{value:"Bugs fixes",id:"bugs-fixes",level:2},{value:"\u0421ompatibility",id:"\u0441ompatibility",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"changelog"},"Changelog"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"In the current version, the SDK supports a minimum version of iOS 11. During the year, we plan to raise the minimum version to iOS 13, to support the last 4 active versions:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"iOS 12 from June 2023"),(0,a.kt)("li",{parentName:"ul"},"iOS 13 from September 2023")),(0,a.kt)("p",{parentName:"admonition"},"If you need support for older versions after these dates, please contact ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@edna.ru"},"support@edna.ru"))),(0,a.kt)("h2",{id:"bugs-fixes"},"Bugs fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed a bug on first login"),(0,a.kt)("li",{parentName:"ul"},"Fixed loading message history"),(0,a.kt)("li",{parentName:"ul"},"Fixed a behavior where messages from a user or chatbot were not immediately displayed in the chat history."),(0,a.kt)("li",{parentName:"ul"},"In the search results window, the layout of messages has been adjusted."),(0,a.kt)("li",{parentName:"ul"},"Fixed minor bugs related to attaching attachments."),(0,a.kt)("li",{parentName:"ul"},"Restored the functionality of the request for early termination of the chat.")),(0,a.kt)("h2",{id:"\u0441ompatibility"},"\u0421ompatibility"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"XCode 13.2.1 (13C100)"),(0,a.kt)("li",{parentName:"ul"},"iOS 11.0"),(0,a.kt)("li",{parentName:"ul"},"Swift 5.5"),(0,a.kt)("li",{parentName:"ul"},"Backend ednaChatCenter version 4.16.12 or higher"),(0,a.kt)("li",{parentName:"ul"},"Datastore ednaChatCenter version 14 or higher (history v14)")))}m.isMDXComponent=!0}}]);