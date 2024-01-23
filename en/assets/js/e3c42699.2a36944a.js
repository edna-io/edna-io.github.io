"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[74825],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55617:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:7},o="Changelog",l={unversionedId:"changelog",id:"version-4.13.0/changelog",title:"Changelog",description:"Changes:",source:"@site/i18n/en/docusaurus-plugin-content-docs-android/version-4.13.0/changelog.md",sourceDirName:".",slug:"/changelog",permalink:"/en/android/4.13.0/changelog",draft:!1,tags:[],version:"4.13.0",lastUpdatedAt:1694783212,formattedLastUpdatedAt:"Sep 15, 2023",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"mainSidebar",previous:{title:"Demo App",permalink:"/en/android/4.13.0/demo"}},p={},s=[{value:"Changes:",id:"changes",level:3},{value:"Bug fixes:",id:"bug-fixes",level:3},{value:"\u0421ompatibility:",id:"\u0441ompatibility",level:3},{value:"Main dependencies:",id:"main-dependencies",level:3}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"changelog"},"Changelog"),(0,a.kt)("h3",{id:"changes"},"Changes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Renamed SDK resources, added "ecc_" prefix.')),(0,a.kt)("h3",{id:"bug-fixes"},"Bug fixes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed minor bugs related to the counter of unread messages."),(0,a.kt)("li",{parentName:"ul"},"Adjusted the location of message bubbles."),(0,a.kt)("li",{parentName:"ul"},"Fixed behavior where color was not applied to binary poll icons."),(0,a.kt)("li",{parentName:"ul"},"Fixed some crashes.")),(0,a.kt)("h3",{id:"\u0441ompatibility"},"\u0421ompatibility:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Level API 21 (Lollipop) or higher")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Android 5.0 or higher")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Jetpack (AndroidX) that includes the following versions is used:")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"com.android.tools.build:gradle v7.0.4 or newer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"compileSdkVersion 30 or newer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Backend ednaChatCenter version 4.0 or higher")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Datastore ednaChatCenter version 14 or higher (history v14)"))),(0,a.kt)("h3",{id:"main-dependencies"},"Main dependencies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Material Components 1.4.0"),(0,a.kt)("li",{parentName:"ul"},"Retrofit 2.9.0"),(0,a.kt)("li",{parentName:"ul"},"RxJava 2.2.21"),(0,a.kt)("li",{parentName:"ul"},"Picasso 2.8"),(0,a.kt)("li",{parentName:"ul"},"SqlCipher 4.5.2"),(0,a.kt)("li",{parentName:"ul"},"Sqlite 2.0.1")))}d.isMDXComponent=!0}}]);