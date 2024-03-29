"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[32671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31383:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:7},o="Changelog",s={unversionedId:"changelog",id:"version-4.14.0/changelog",title:"Changelog",description:"In the current version, the SDK supports a minimum version of iOS 10. During the year, we plan to raise the minimum version to iOS 13, to support the last 4 active versions:",source:"@site/i18n/en/docusaurus-plugin-content-docs-ios/version-4.14.0/changelog.md",sourceDirName:".",slug:"/changelog",permalink:"/en/ios/4.14.0/changelog",draft:!1,tags:[],version:"4.14.0",lastUpdatedAt:1702459198,formattedLastUpdatedAt:"Dec 13, 2023",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"mainSidebar",previous:{title:"Demo App",permalink:"/en/ios/4.14.0/demo"}},l={},u=[{value:"Changes",id:"changes",level:2},{value:"Bugs fixes",id:"bugs-fixes",level:2},{value:"\u0421ompatibility",id:"\u0441ompatibility",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"changelog"},"Changelog"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"In the current version, the SDK supports a minimum version of iOS 10. During the year, we plan to raise the minimum version to iOS 13, to support the last 4 active versions:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"iOS 11 from next release 4.15"),(0,a.kt)("li",{parentName:"ul"},"iOS 12 from June 2023"),(0,a.kt)("li",{parentName:"ul"},"iOS 13 from September 2023")),(0,a.kt)("p",{parentName:"admonition"},"If you need support for older versions after these dates, please contact ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@edna.ru"},"support@edna.ru"))),(0,a.kt)("h2",{id:"changes"},"Changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reworked the logic of interaction with the backend edna Chat Center and chat display."),(0,a.kt)("li",{parentName:"ul"},"Added a request for permission to access the microphone when you first click on the record voice message button."),(0,a.kt)("li",{parentName:"ul"},"Added an alert for when access to the microphone has been denied and the client is trying to record a voice message."),(0,a.kt)("li",{parentName:"ul"},"Changed the behavior when clicking on a message to quote/copy. Now only the current bubble is highlighted."),(0,a.kt)("li",{parentName:"ul"},"Added the messageAvatarToBubbleOffset setting, with which you can set the distance between the avatar and the message bubble."),(0,a.kt)("li",{parentName:"ul"},"Added settings for choosing the authorization method.")),(0,a.kt)("h2",{id:"bugs-fixes"},"Bugs fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed minor bugs related to searching for messages by text."),(0,a.kt)("li",{parentName:"ul"},"Fixed a behavior where if multiple questions were configured in a rating request, only the first question was displayed to the client."),(0,a.kt)("li",{parentName:"ul"},"Restored the correct display of the bulleted list."),(0,a.kt)("li",{parentName:"ul"},"Fixed a behavior where the order of unsent messages was displayed incorrectly when reopening the chat."),(0,a.kt)("li",{parentName:"ul"},"Fixed some crashes.")),(0,a.kt)("h2",{id:"\u0441ompatibility"},"\u0421ompatibility"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"XCode 13.2.1 (13C100)"),(0,a.kt)("li",{parentName:"ul"},"iOS 10.0"),(0,a.kt)("li",{parentName:"ul"},"Swift 5.5"),(0,a.kt)("li",{parentName:"ul"},"Backend ednaChatCenter version 4.0 or higher"),(0,a.kt)("li",{parentName:"ul"},"Datastore ednaChatCenter version 14 or higher (history v14)")))}d.isMDXComponent=!0}}]);