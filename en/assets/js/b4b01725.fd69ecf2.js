"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[57173],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),h=r,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},78641:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_position:7},o="Changelog",l={unversionedId:"changelog",id:"version-4.10.0/changelog",title:"Changelog",description:"Changes:",source:"@site/i18n/en/docusaurus-plugin-content-docs-android/version-4.10.0/changelog.md",sourceDirName:".",slug:"/changelog",permalink:"/en/android/4.10.0/changelog",draft:!1,tags:[],version:"4.10.0",lastUpdatedAt:1713258316,formattedLastUpdatedAt:"Apr 16, 2024",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"mainSidebar",previous:{title:"Demo App",permalink:"/en/android/4.10.0/demo"}},s={},p=[{value:"Changes:",id:"changes",level:3},{value:"Bug fixes:",id:"bug-fixes",level:3},{value:"\u0421ompatibility:",id:"\u0441ompatibility",level:3},{value:"Main dependencies:",id:"main-dependencies",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"changelog"},"Changelog"),(0,r.kt)("h3",{id:"changes"},"Changes:"),(0,r.kt)("p",null,"We have changed the way message bubbles with images display as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Implemented the display of a background for a thumbnail image in messages with adjustable margins from the edges"),(0,r.kt)("li",{parentName:"ul"},"The shape of the images, as well as their backgrounds, can be adjusted using 9.png masks\nWe have added some new settings for the chat header:"),(0,r.kt)("li",{parentName:"ul"},"Use centerToolbarText to center the chat header"),(0,r.kt)("li",{parentName:"ul"},"Use chatToolbarTextColorResId to change the chat header color"),(0,r.kt)("li",{parentName:"ul"},"We have also added a setting that you can use to change the color of the Back button"),(0,r.kt)("li",{parentName:"ul"},"We have added customization capabilities for pop-up messages: you can now customize color, size, and background of the message.")),(0,r.kt)("h3",{id:"bug-fixes"},"Bug fixes:"),(0,r.kt)("p",null,"We have:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Corrected the following issue: when a client logged out of the app and logged in under another account, the chat history didn't load correctly."),(0,r.kt)("li",{parentName:"ul"},"Fixed the app crash that happened after attaching a photo from the camera app."),(0,r.kt)("li",{parentName:"ul"},"We have fixed minor bugs related to loading messages in the chat history."),(0,r.kt)("li",{parentName:"ul"},"Restored the functionality of push notifications for Huawei devices."),(0,r.kt)("li",{parentName:"ul"},"Fixed the behavior based on which logs were not written for some clients.")),(0,r.kt)("h3",{id:"\u0441ompatibility"},"\u0421ompatibility:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Level API 21 (Lollipop) or higher")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Android 5.0 or higher")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Jetpack (AndroidX) that includes the following versions is used:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"com.android.tools.build:gradle v7.0.4 or newer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"compileSdkVersion 30 or newer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Backend ednaChatCenter version 4.0 or higher")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Datastore ednaChatCenter version 14 or higher (history v14)"))),(0,r.kt)("h3",{id:"main-dependencies"},"Main dependencies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Material Components 1.4.0"),(0,r.kt)("li",{parentName:"ul"},"Retrofit 2.9.0"),(0,r.kt)("li",{parentName:"ul"},"RxJava 2.2.21"),(0,r.kt)("li",{parentName:"ul"},"Picasso 2.8"),(0,r.kt)("li",{parentName:"ul"},"SqlCipher 4.5.2"),(0,r.kt)("li",{parentName:"ul"},"Sqlite 2.0.1")))}d.isMDXComponent=!0}}]);