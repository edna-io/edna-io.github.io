"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[22392],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67561:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:7},o="Changelog",l={unversionedId:"changelog",id:"version-4.25.0/changelog",title:"Changelog",description:"In the current version, the SDK supports a minimum version of iOS 11. During the year, we plan to raise the minimum version to iOS 13, to support the last 4 active versions:",source:"@site/i18n/en/docusaurus-plugin-content-docs-ios/version-4.25.0/changelog.md",sourceDirName:".",slug:"/changelog",permalink:"/en/ios/4.25.0/changelog",draft:!1,tags:[],version:"4.25.0",lastUpdatedAt:1707140878,formattedLastUpdatedAt:"Feb 5, 2024",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"mainSidebar",previous:{title:"Demo App",permalink:"/en/ios/4.25.0/demo"}},s={},u=[{value:"Changes",id:"changes",level:2},{value:"Bug fixes",id:"bug-fixes",level:3},{value:"\u0421ompatibility",id:"\u0441ompatibility",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"changelog"},"Changelog"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"In the current version, the SDK supports a minimum version of iOS 11. During the year, we plan to raise the minimum version to iOS 13, to support the last 4 active versions:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"iOS 12 from version 5.0 (November 2023)"),(0,a.kt)("li",{parentName:"ul"},"iOS 13 from begining 2024")),(0,a.kt)("p",{parentName:"admonition"},"If you need support for older versions after these dates, please contact ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@edna.ru"},"support@edna.ru"))),(0,a.kt)("h2",{id:"changes"},"Changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Changed the logic for loading images into the list of messages, now the previous version is loaded there, the request is cached."),(0,a.kt)("li",{parentName:"ul"},"Changed the operator avatar tool, now in a series of consecutive messages it is displayed only in the last message.")),(0,a.kt)("h3",{id:"bug-fixes"},"Bug fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fix the ability to send a message after hours for a number of cases."),(0,a.kt)("li",{parentName:"ul"},"Fixed a bug with overlapping keyboard input after sending an image."),(0,a.kt)("li",{parentName:"ul"},"Fix the issue with enabling the scroll button at the end of the list."),(0,a.kt)("li",{parentName:"ul"},"Fixed a bug with resetting the unread message counter"),(0,a.kt)("li",{parentName:"ul"},"Fixed the use of multiline text in loading_placeholder.")),(0,a.kt)("h2",{id:"\u0441ompatibility"},"\u0421ompatibility"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Xcode 14.2 (14C18)"),(0,a.kt)("li",{parentName:"ul"},"iOS 11.0"),(0,a.kt)("li",{parentName:"ul"},"Swift 5.5"),(0,a.kt)("li",{parentName:"ul"},"Backend ednaChatCenter version 4.16.12 or higher"),(0,a.kt)("li",{parentName:"ul"},"Datastore ednaChatCenter version 14 or higher (history v14)")))}m.isMDXComponent=!0}}]);