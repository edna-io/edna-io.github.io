"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[42065],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55296:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:7},o="Changelog",l={unversionedId:"changelog",id:"version-4.20.0/changelog",title:"Changelog",description:"In the current version, the SDK supports a minimum version of iOS 11. During the year, we plan to raise the minimum version to iOS 13, to support the last 4 active versions:",source:"@site/i18n/en/docusaurus-plugin-content-docs-ios/version-4.20.0/changelog.md",sourceDirName:".",slug:"/changelog",permalink:"/en/ios/4.20.0/changelog",draft:!1,tags:[],version:"4.20.0",lastUpdatedAt:1713258316,formattedLastUpdatedAt:"Apr 16, 2024",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"mainSidebar",previous:{title:"Demo App",permalink:"/en/ios/4.20.0/demo"}},s={},u=[{value:"Changes",id:"changes",level:2},{value:"Bugs fixes",id:"bugs-fixes",level:2},{value:"\u0421ompatibility",id:"\u0441ompatibility",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"changelog"},"Changelog"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"In the current version, the SDK supports a minimum version of iOS 11. During the year, we plan to raise the minimum version to iOS 13, to support the last 4 active versions:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"iOS 12 from version 5.0 (July 2023)"),(0,a.kt)("li",{parentName:"ul"},"iOS 13 from September 2023")),(0,a.kt)("p",{parentName:"admonition"},"If you need support for older versions after these dates, please contact ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@edna.ru"},"support@edna.ru"))),(0,a.kt)("h2",{id:"changes"},"Changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Added a menu to display the source selection of the attached file in the standard iOS style. It is enabled by default, but can be disabled via useSystemFilePicker."),(0,a.kt)("li",{parentName:"ul"},"Changed the logic of counting unread notifications, now welcome messages from the chatbot are not taken into account in the new dialog.")),(0,a.kt)("h2",{id:"bugs-fixes"},"Bugs fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed a behavior where the layout of the first message in the history was displayed incorrectly."),(0,a.kt)("li",{parentName:"ul"},"Fixed the display of the image loading indicator."),(0,a.kt)("li",{parentName:"ul"},"Fixed minor bugs related to viewing images."),(0,a.kt)("li",{parentName:"ul"},"Removed unnecessary notification with confirmation, after the prohibition of access to the camera."),(0,a.kt)("li",{parentName:"ul"},"Fixed chat initialization error display."),(0,a.kt)("li",{parentName:"ul"},"Fixed a problem with sending the first message through the sendMessage method when the chat was closed."),(0,a.kt)("li",{parentName:"ul"},"Reduced the number of history requests at startup."),(0,a.kt)("li",{parentName:"ul"},"Fixed unloading of attachments."),(0,a.kt)("li",{parentName:"ul"},"Removed the use of the UINavigationControllerDelegate/UITabBarControllerDelegate delegates by the chat controller.")),(0,a.kt)("h2",{id:"\u0441ompatibility"},"\u0421ompatibility"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"XCode 13.2.1 (13C100)"),(0,a.kt)("li",{parentName:"ul"},"iOS 11.0"),(0,a.kt)("li",{parentName:"ul"},"Swift 5.5"),(0,a.kt)("li",{parentName:"ul"},"Backend ednaChatCenter version 4.16.12 or higher"),(0,a.kt)("li",{parentName:"ul"},"Datastore ednaChatCenter version 14 or higher (history v14)")))}m.isMDXComponent=!0}}]);