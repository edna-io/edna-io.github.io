"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[9712],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),h=r,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5291:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:7},o="Changelog",l={unversionedId:"changelog",id:"version-4.5.0/changelog",title:"Changelog",description:"Changes:",source:"@site/i18n/en/docusaurus-plugin-content-docs-android/version-4.5.0/changelog.md",sourceDirName:".",slug:"/changelog",permalink:"/en/android/changelog",draft:!1,tags:[],version:"4.5.0",lastUpdatedAt:1662037981,formattedLastUpdatedAt:"Sep 1, 2022",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"mainSidebar",previous:{title:"Demo App",permalink:"/en/android/demo"}},s={},d=[{value:"Changes:",id:"changes",level:3},{value:"Bug fixes:",id:"bug-fixes",level:3},{value:"\u0421ompatibility:",id:"\u0441ompatibility",level:3}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"changelog"},"Changelog"),(0,r.kt)("h3",{id:"changes"},"Changes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We have added methods for defining the colors of incoming and outgoing message loaders: public ChatStyle setIncomingMessageLoaderColorResId(@ColorRes final int incomingMessageLoaderColor), public ChatStyle setOutgoingMessageLoaderColorResId(@ColorRes final int outgoingMessageLoaderColor)."),(0,r.kt)("li",{parentName:"ul"},"It is now possible to apply ChatStyle via the initial ConfigBuilder.")),(0,r.kt)("h3",{id:"bug-fixes"},"Bug fixes:"),(0,r.kt)("p",null,"We have:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Adjusted the behavior that caused the color of the file download icon to be displayed incorrectly in the Media and files section. Installation of setChatBodyIconsTint is required."),(0,r.kt)("li",{parentName:"ul"},"Corrected the behavior that caused OpenGraph to be displayed in messages that contained email addresses.  "),(0,r.kt)("li",{parentName:"ul"},"Fixed the behavior that lead to incorrect display of selected messages.   "),(0,r.kt)("li",{parentName:"ul"},"Fixed the issue with the file download animation not being displayed."),(0,r.kt)("li",{parentName:"ul"},"Adjusted the size of the margin between the time of sending and the status icon of the message with an attachment."),(0,r.kt)("li",{parentName:"ul"},"Adjusted the attachment icon, which is displayed after attaching the file and before sending. To change the icon, we have added the following method: public ChatStyle setQuoteAttachmentIconResId(@DrawableRes final int quoteAttachmentIconResId)."),(0,r.kt)("li",{parentName:"ul"},"Fixed the behavior that caused the names of sent files to be displayed in the wrong encoding. "),(0,r.kt)("li",{parentName:"ul"},"Fixed the behavior based on which the system did not display the text interpretation of voice messages the clients received, when integration with Speech Technology Center, a speech recognition service, was enabled."),(0,r.kt)("li",{parentName:"ul"},"Fixed some crashes.  ")),(0,r.kt)("h3",{id:"\u0441ompatibility"},"\u0421ompatibility:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Level API 21 (Lollipop) or higher")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Android 5.0 or higher")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Jetpack (AndroidX) that includes the following versions is used:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"com.android.tools.build:gradle v7.0.4 or newer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"compileSdkVersion 30 or newer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Backend ednaChatCenter version 4.0 or higher")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Datastore ednaChatCenter version 14 or higher (history v14)"))))}p.isMDXComponent=!0}}]);