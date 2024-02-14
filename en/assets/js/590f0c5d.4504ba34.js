"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[74499],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38967:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:7},o="Changelog",l={unversionedId:"changelog",id:"version-4.20.0/changelog",title:"Changelog",description:"Changes",source:"@site/i18n/en/docusaurus-plugin-content-docs-android/version-4.20.0/changelog.md",sourceDirName:".",slug:"/changelog",permalink:"/en/android/4.20.0/changelog",draft:!1,tags:[],version:"4.20.0",lastUpdatedAt:1698419024,formattedLastUpdatedAt:"Oct 27, 2023",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"mainSidebar",previous:{title:"Demo App",permalink:"/en/android/4.20.0/demo"}},s={},p=[{value:"Changes",id:"changes",level:2},{value:"Bugs fixes",id:"bugs-fixes",level:2},{value:"\u0421ompatibility",id:"\u0441ompatibility",level:2},{value:"Main dependencies",id:"main-dependencies",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"changelog"},"Changelog"),(0,r.kt)("h2",{id:"changes"},"Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Changed the logic of counting unread notifications, now welcome messages from the chatbot are not taken into account in the new dialog.")),(0,r.kt)("h2",{id:"bugs-fixes"},"Bugs fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed issue with SSL Pinning setup."),(0,r.kt)("li",{parentName:"ul"},"Updated libsqlcipher (connection issues on some devices)."),(0,r.kt)("li",{parentName:"ul"},"Fixed a behavior where a notification of a new message was not received if the client minimized the application."),(0,r.kt)("li",{parentName:"ul"},'Fixed "blinking" when displaying the button to quickly jump to the end of the conversation.'),(0,r.kt)("li",{parentName:"ul"},"Returned the chatSystemMessageTextColor parameter in the ChatStyle class."),(0,r.kt)("li",{parentName:"ul"},"Fixed a behavior where chatbot quick response buttons were not always displayed."),(0,r.kt)("li",{parentName:"ul"},'Fixed a crash that occurred if the incoming message contained the ">" symbol.'),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that occurred if the chatbot sent a message with quick reply buttons but no message text."),(0,r.kt)("li",{parentName:"ul"},"Fixed several other crashes.")),(0,r.kt)("h2",{id:"\u0441ompatibility"},"\u0421ompatibility"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Level API 21 (Lollipop) or higher")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Android 5.0 or higher")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Jetpack (AndroidX) that includes the following versions is used:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"com.android.tools.build:gradle v7.0.4 or newer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"compileSdkVersion 30 or newer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Backend ednaChatCenter version 4.0 or higher")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Datastore ednaChatCenter version 14 or higher (history v14)"))),(0,r.kt)("h2",{id:"main-dependencies"},"Main dependencies"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Material Components 1.4.0"),(0,r.kt)("li",{parentName:"ul"},"Retrofit 2.9.0"),(0,r.kt)("li",{parentName:"ul"},"RxJava 2.2.21"),(0,r.kt)("li",{parentName:"ul"},"Picasso 2.8"),(0,r.kt)("li",{parentName:"ul"},"SqlCipher 4.5.2"),(0,r.kt)("li",{parentName:"ul"},"Sqlite 2.0.1")))}d.isMDXComponent=!0}}]);