"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[82505],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},84018:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_position:7},o="Changelog",l={unversionedId:"changelog",id:"version-4.6.0/changelog",title:"Changelog",description:"Changes:",source:"@site/i18n/en/docusaurus-plugin-content-docs-android/version-4.6.0/changelog.md",sourceDirName:".",slug:"/changelog",permalink:"/en/android/4.6.0/changelog",draft:!1,tags:[],version:"4.6.0",lastUpdatedAt:1702582294,formattedLastUpdatedAt:"Dec 14, 2023",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"mainSidebar",previous:{title:"Demo App",permalink:"/en/android/4.6.0/demo"}},s={},p=[{value:"Changes:",id:"changes",level:3},{value:"Bug fixes:",id:"bug-fixes",level:3},{value:"\u0421ompatibility:",id:"\u0441ompatibility",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"changelog"},"Changelog"),(0,r.kt)("h3",{id:"changes"},"Changes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When viewing the agent card, we have removed the Message search and Media and files menus. ")),(0,r.kt)("h3",{id:"bug-fixes"},"Bug fixes:"),(0,r.kt)("p",null,"We have:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed some crashes that happened when opening the Media and files menu and tapping the search button there."),(0,r.kt)("li",{parentName:"ul"},"Fixed some other crashes that happened if agents started a message with a blank space."),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that caused the last image in the chat history to be displayed incorrectly when using quick scroll."),(0,r.kt)("li",{parentName:"ul"},"Fixed the behavior based on which a quality survey did not close after a new message was created. "),(0,r.kt)("li",{parentName:"ul"},"Fixed the behavior that caused OpenGraph to display for messages that contained email addresses."),(0,r.kt)("li",{parentName:"ul"},"Fixed the issue that caused the name of a PDF file sent by the client to display incorrectly in the chat history."),(0,r.kt)("li",{parentName:"ul"},"Adjusted the layout in messages that contain files with long names."),(0,r.kt)("li",{parentName:"ul"},"Corrected a bug that caused the size of the same sent file to be displayed differently in the WP and in the mobile app."),(0,r.kt)("li",{parentName:"ul"},"Restored the correct formation of webview links."),(0,r.kt)("li",{parentName:"ul"},"Adjusted the position of the voice message playback button."),(0,r.kt)("li",{parentName:"ul"},"Corrected the position of the message time in case of a voice message processing error."),(0,r.kt)("li",{parentName:"ul"},"Fixed the behavior that caused its name to be displayed while sending a voice message."),(0,r.kt)("li",{parentName:"ul"},"Fixed the behavior based on which the chat did not always open if the client tapped a pop-up message in the notification curtain when the application was minimized."),(0,r.kt)("li",{parentName:"ul"},"Restored the supervisor status display in the user card."),(0,r.kt)("li",{parentName:"ul"},"Fixed the occurrence of memory leaks during the chat operation.")),(0,r.kt)("h3",{id:"\u0441ompatibility"},"\u0421ompatibility:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Level API 21 (Lollipop) or higher")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Android 5.0 or higher")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Jetpack (AndroidX) that includes the following versions is used:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"com.android.tools.build:gradle v7.0.4 or newer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"compileSdkVersion 30 or newer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Backend ednaChatCenter version 4.0 or higher")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Datastore ednaChatCenter version 14 or higher (history v14)"))))}u.isMDXComponent=!0}}]);