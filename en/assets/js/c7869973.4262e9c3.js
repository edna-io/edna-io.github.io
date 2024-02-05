"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[42377],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},33217:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:7},o="Changelog",l={unversionedId:"changelog",id:"version-4.6.0/changelog",title:"Changelog",description:"Changes:",source:"@site/i18n/en/docusaurus-plugin-content-docs-ios/version-4.6.0/changelog.md",sourceDirName:".",slug:"/changelog",permalink:"/en/ios/4.6.0/changelog",draft:!1,tags:[],version:"4.6.0",lastUpdatedAt:1697698294,formattedLastUpdatedAt:"Oct 19, 2023",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"mainSidebar",previous:{title:"Demo App",permalink:"/en/ios/4.6.0/demo"}},s={},c=[{value:"Changes:",id:"changes",level:3},{value:"Bug fixes:",id:"bug-fixes",level:3},{value:"\u0421ompatibility:",id:"\u0441ompatibility",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"changelog"},"Changelog"),(0,a.kt)("h3",{id:"changes"},"Changes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We have added two new settings:\nnavigationBarShadow - Enables/disables the shadow display in the header of the chat screen."),(0,a.kt)("li",{parentName:"ul"},"quickReplyAlignment - Defines alignment of quick responses set by the chatbot: left, right, center."),(0,a.kt)("li",{parentName:"ul"},"We have also actualized the documentation on configuration of push messages.  ")),(0,a.kt)("h3",{id:"bug-fixes"},"Bug fixes:"),(0,a.kt)("p",null,"We have:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed the issue with files from client not being sent."),(0,a.kt)("li",{parentName:"ul"},"Adjusted the layout of the message time with the time display setting is enabled in the 12-hour format."),(0,a.kt)("li",{parentName:"ul"},"Corrected the issue that caused a name of the voice message to be displayed when sending it. ")),(0,a.kt)("h3",{id:"\u0441ompatibility"},"\u0421ompatibility:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"XCode 13.2.1 (13C100)"),(0,a.kt)("li",{parentName:"ul"},"iOS 10.0"),(0,a.kt)("li",{parentName:"ul"},"Swift 5.5"),(0,a.kt)("li",{parentName:"ul"},"Backend ednaChatCenter version 4.0 or higher"),(0,a.kt)("li",{parentName:"ul"},"Datastore ednaChatCenter version 14 or higher (history v14)")))}d.isMDXComponent=!0}}]);