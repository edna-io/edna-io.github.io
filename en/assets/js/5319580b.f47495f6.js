"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[99711],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74549:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:7},i="Changelog",l={unversionedId:"changelog",id:"version-4.18.0/changelog",title:"Changelog",description:"In the current version, the SDK supports a minimum version of iOS 11. During the year, we plan to raise the minimum version to iOS 13, to support the last 4 active versions:",source:"@site/i18n/en/docusaurus-plugin-content-docs-ios/version-4.18.0/changelog.md",sourceDirName:".",slug:"/changelog",permalink:"/en/ios/4.18.0/changelog",draft:!1,tags:[],version:"4.18.0",lastUpdatedAt:1689069914,formattedLastUpdatedAt:"Jul 11, 2023",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"mainSidebar",previous:{title:"Demo App",permalink:"/en/ios/4.18.0/demo"}},s={},p=[{value:"Changes",id:"changes",level:2},{value:"Bugs fixed",id:"bugs-fixed",level:2},{value:"\u0421ompatibility",id:"\u0441ompatibility",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"changelog"},"Changelog"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"In the current version, the SDK supports a minimum version of iOS 11. During the year, we plan to raise the minimum version to iOS 13, to support the last 4 active versions:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"iOS 12 from June 2023"),(0,a.kt)("li",{parentName:"ul"},"iOS 13 from September 2023")),(0,a.kt)("p",{parentName:"admonition"},"If you need support for older versions after these dates, please contact ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@edna.ru"},"support@edna.ru"))),(0,a.kt)("h2",{id:"changes"},"Changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Changed the logic of scrolling to new messages. Now the chat will not scroll to new messages after switching to another application and returning. For example, the link in the message."),(0,a.kt)("li",{parentName:"ul"},"Added sendIntervalSec parameter to SocketSettings (default value: 40 seconds). It allows you to set the interval after which a message is considered unsent and an error is displayed.")),(0,a.kt)("h2",{id:"bugs-fixed"},"Bugs fixed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Fixed the display of the notification "Text copied to the clipboard" in the case when the keyboard was expanded at the time of copying.')),(0,a.kt)("h2",{id:"\u0441ompatibility"},"\u0421ompatibility"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"XCode 13.2.1 (13C100)"),(0,a.kt)("li",{parentName:"ul"},"iOS 11.0"),(0,a.kt)("li",{parentName:"ul"},"Swift 5.5"),(0,a.kt)("li",{parentName:"ul"},"Backend ednaChatCenter version 4.16.12 or higher"),(0,a.kt)("li",{parentName:"ul"},"Datastore ednaChatCenter version 14 or higher (history v14)")))}d.isMDXComponent=!0}}]);