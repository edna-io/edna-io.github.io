"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[62976],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),h=o,d=c["".concat(s,".").concat(h)]||c[h]||m[h]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},91439:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:7},i="Changelog",l={unversionedId:"changelog",id:"version-4.15.0/changelog",title:"Changelog",description:"In the current version, the SDK supports a minimum version of iOS 11. During the year, we plan to raise the minimum version to iOS 13, to support the last 4 active versions:",source:"@site/i18n/en/docusaurus-plugin-content-docs-ios/version-4.15.0/changelog.md",sourceDirName:".",slug:"/changelog",permalink:"/en/ios/4.15.0/changelog",draft:!1,tags:[],version:"4.15.0",lastUpdatedAt:1707140878,formattedLastUpdatedAt:"Feb 5, 2024",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"mainSidebar",previous:{title:"Demo App",permalink:"/en/ios/4.15.0/demo"}},s={},u=[{value:"Changes",id:"changes",level:2},{value:"Bugs fixes",id:"bugs-fixes",level:2},{value:"\u0421ompatibility",id:"\u0441ompatibility",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"changelog"},"Changelog"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"In the current version, the SDK supports a minimum version of iOS 11. During the year, we plan to raise the minimum version to iOS 13, to support the last 4 active versions:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"iOS 12 from June 2023"),(0,o.kt)("li",{parentName:"ul"},"iOS 13 from September 2023")),(0,o.kt)("p",{parentName:"admonition"},"If you need support for older versions after these dates, please contact ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@edna.ru"},"support@edna.ru"))),(0,o.kt)("h2",{id:"changes"},"Changes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In the current SDK version, we have raised the supported minimum iOS version to 11."),(0,o.kt)("li",{parentName:"ul"},"Added settings with which you can set the background color and text color for the buttons in the attachment attachment window. (photoPickerBackgroundColor/photoPickerSheetTextColor)")),(0,o.kt)("h2",{id:"bugs-fixes"},"Bugs fixes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fixed a behavior where the text of the message overlapped the time of the message."),(0,o.kt)("li",{parentName:"ul"},"Restored the correct display of the notification about the non-working time of the channel."),(0,o.kt)("li",{parentName:"ul"},"Fixed a behavior where it was possible to create a new case during non-working hours of the channel."),(0,o.kt)("li",{parentName:"ul"},"Changed how the toolbarInputMinimumHeight message input field height setting works. Now you can set the value to less than 30.")),(0,o.kt)("h2",{id:"\u0441ompatibility"},"\u0421ompatibility"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"XCode 13.2.1 (13C100)"),(0,o.kt)("li",{parentName:"ul"},"iOS 11.0"),(0,o.kt)("li",{parentName:"ul"},"Swift 5.5"),(0,o.kt)("li",{parentName:"ul"},"Backend ednaChatCenter version 4.16.12 or higher"),(0,o.kt)("li",{parentName:"ul"},"Datastore ednaChatCenter version 14 or higher (history v14)")))}m.isMDXComponent=!0}}]);