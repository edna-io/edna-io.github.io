"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[40827],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,g=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},19472:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:7},i="Changelog",l={unversionedId:"changelog",id:"version-4.3.0/changelog",title:"Changelog",description:"Changes:",source:"@site/i18n/en/docusaurus-plugin-content-docs-ios/version-4.3.0/changelog.md",sourceDirName:".",slug:"/changelog",permalink:"/en/ios/4.3.0/changelog",draft:!1,tags:[],version:"4.3.0",lastUpdatedAt:1688103326,formattedLastUpdatedAt:"Jun 30, 2023",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"mainSidebar",previous:{title:"Demo App",permalink:"/en/ios/4.3.0/demo"}},s={},u=[{value:"Changes:",id:"changes",level:3},{value:"Bug fixes:",id:"bug-fixes",level:3},{value:"\u0421ompatibility:",id:"\u0441ompatibility",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"changelog"},"Changelog"),(0,a.kt)("h3",{id:"changes"},"Changes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We have implemented error display if the file that the client sends fails to load. The following keys have been added to the Russian language file: attachment_error_timeout, attachment_error_unexpected, attachment_error_disallowed.")),(0,a.kt)("h3",{id:"bug-fixes"},"Bug fixes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We have fixed minor errors with the display of quick response buttons."),(0,a.kt)("li",{parentName:"ul"},"We have fixed minor errors when working with files."),(0,a.kt)("li",{parentName:"ul"},"We have fixed a crash that clients had when an agent sent a quoted message."),(0,a.kt)("li",{parentName:"ul"},"We have restored the settings that change the colors of incoming and outgoing messages (outgoingBubbleTextColor, incomingBubbleTextColor)."),(0,a.kt)("li",{parentName:"ul"},"We have fixed the behavior that causes issues with configuring the search button and the button that hides/opens the keyboard."),(0,a.kt)("li",{parentName:"ul"},"We have corrected the layout in the message bubbles.")),(0,a.kt)("h3",{id:"\u0441ompatibility"},"\u0421ompatibility:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"XCode 13.2.1 (13C100)"),(0,a.kt)("li",{parentName:"ul"},"iOS 10.0"),(0,a.kt)("li",{parentName:"ul"},"Swift 5.5"),(0,a.kt)("li",{parentName:"ul"},"Backend ednaChatCenter version 4.0 or higher"),(0,a.kt)("li",{parentName:"ul"},"Datastore ednaChatCenter version 14 or higher (history v14)")))}d.isMDXComponent=!0}}]);