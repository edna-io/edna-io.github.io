"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[60015],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,g=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},76704:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:7},o="Changelog",l={unversionedId:"changelog",id:"version-4.8.0/changelog",title:"Changelog",description:"Changes",source:"@site/i18n/en/docusaurus-plugin-content-docs-ios/version-4.8.0/changelog.md",sourceDirName:".",slug:"/changelog",permalink:"/en/ios/4.8.0/changelog",draft:!1,tags:[],version:"4.8.0",lastUpdatedAt:1702582294,formattedLastUpdatedAt:"Dec 14, 2023",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"mainSidebar",previous:{title:"Demo App",permalink:"/en/ios/4.8.0/demo"}},s={},c=[{value:"Changes",id:"changes",level:3},{value:"Bug fixes",id:"bug-fixes",level:3},{value:"\u0421ompatibility:",id:"\u0441ompatibility",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"changelog"},"Changelog"),(0,r.kt)("h3",{id:"changes"},"Changes"),(0,r.kt)("p",null,"We have:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"implemented the following functionality: when tapping a message, the Respond and Copy buttons are diaplyed as a menu. We have also added a notification that the copying was successfull. You can configure this notifications: its text, color, size, background (attributes.copyNotificationText, attributes.copyNotificationTextColor, attributes.copyNotificationBackgroundColor, attributes.copyNotificationSize)"),(0,r.kt)("li",{parentName:"ul"},"added a setting that allows to disable the message search functionality (searchEnabled)."),(0,r.kt)("li",{parentName:"ul"},"improved the logging system.")),(0,r.kt)("h3",{id:"bug-fixes"},"Bug fixes"),(0,r.kt)("p",null,"We have:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed the issue that caused messages that contained both text and attachment to be not sent."),(0,r.kt)("li",{parentName:"ul"},"Corrected the layout of messages containing images."),(0,r.kt)("li",{parentName:"ul"},"Corrected the layout of messages containing a link in Open Graph."),(0,r.kt)("li",{parentName:"ul"},"Fixed the behavior based on which a message containing an audio file with a .wav extension was duplicated in the history."),(0,r.kt)("li",{parentName:"ul"},"Fixed the behavior that caused the keyboard to be displayed incorrectly in the message search mode."),(0,r.kt)("li",{parentName:"ul"},"Fixed some crashes when registering a client in the chat.")),(0,r.kt)("h3",{id:"\u0441ompatibility"},"\u0421ompatibility:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"XCode 13.2.1 (13C100)"),(0,r.kt)("li",{parentName:"ul"},"iOS 10.0"),(0,r.kt)("li",{parentName:"ul"},"Swift 5.5"),(0,r.kt)("li",{parentName:"ul"},"Backend ednaChatCenter version 4.0 or higher"),(0,r.kt)("li",{parentName:"ul"},"Datastore ednaChatCenter version 14 or higher (history v14)")))}d.isMDXComponent=!0}}]);