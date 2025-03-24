"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[50653],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(r),m=o,g=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},15059:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:7},i="Changelog",l={unversionedId:"changelog",id:"version-5.4.0/changelog",title:"Changelog",description:"Changes",source:"@site/i18n/en/docusaurus-plugin-content-docs-android/version-5.4.0/changelog.md",sourceDirName:".",slug:"/changelog",permalink:"/en/android/changelog",draft:!1,tags:[],version:"5.4.0",lastUpdatedAt:1742804209,formattedLastUpdatedAt:"Mar 24, 2025",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"mainSidebar",previous:{title:"\u041c\u0438\u0433\u0440\u0430\u0446\u0438\u044f",permalink:"/en/android/migration"}},c={},d=[{value:"Changes",id:"changes",level:2},{value:"Bugs fixed",id:"bugs-fixed",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"Recommended server version",id:"recommended-server-version",level:2}],s={toc:d},u="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"changelog"},"Changelog"),(0,o.kt)("h2",{id:"changes"},"Changes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added fullScreenMode setting to support edge-to-edge in Android 15")),(0,o.kt)("h2",{id:"bugs-fixed"},"Bugs fixed"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fixed the problem with adding a photo from the camera when returning to the chat"),(0,o.kt)("li",{parentName:"ul"},"Fixed the display of the unread counter on the scroll button to them")),(0,o.kt)("h2",{id:"compatibility"},"Compatibility"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"API level 21 (Lollipop) or higher."),(0,o.kt)("li",{parentName:"ul"},"Android 5.0 or higher."),(0,o.kt)("li",{parentName:"ul"},"Uses Jetpack (AndroidX), which includes the following versions:"),(0,o.kt)("li",{parentName:"ul"},"com.android.tools.build:gradle v7.0.4 or later;"),(0,o.kt)("li",{parentName:"ul"},"compileSdkVersion 30 or later."),(0,o.kt)("li",{parentName:"ul"},"Kotlin 1.8.0 or later")),(0,o.kt)("h2",{id:"recommended-server-version"},"Recommended server version"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Backend ednaChatCenter 6.17.0"),(0,o.kt)("li",{parentName:"ul"},"Datastore ednaChatCenter version 16 (history version v16)")))}p.isMDXComponent=!0}}]);