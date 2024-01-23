"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[5711],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),g=i,m=p["".concat(c,".").concat(g)]||p[g]||d[g]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},43474:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const o={},a="Migration Instructions",s={unversionedId:"migration/migration_guides",id:"version-4.2.0/migration/migration_guides",title:"Migration Instructions",description:"This article covers the instructions for migration to newer library versions.",source:"@site/i18n/en/docusaurus-plugin-content-docs-android/version-4.2.0/migration/migration_guides.md",sourceDirName:"migration",slug:"/migration/migration_guides",permalink:"/en/android/4.2.0/migration/migration_guides",draft:!1,tags:[],version:"4.2.0",lastUpdatedAt:1694783212,formattedLastUpdatedAt:"Sep 15, 2023",frontMatter:{},sidebar:"mainSidebar",previous:{title:"\u041c\u0438\u0433\u0440\u0430\u0446\u0438\u044f",permalink:"/en/android/4.2.0/category/\u043c\u0438\u0433\u0440\u0430\u0446\u0438\u044f"},next:{title:"Demo App",permalink:"/en/android/4.2.0/demo"}},c={},l=[{value:"Migration to 4.0.0",id:"migration-to-400",level:2},{value:"Changes in Operation of edna Chat Center Push Library 4.0.0",id:"changes-in-operation-of-edna-chat-center-push-library-400",level:3}],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"migration-instructions"},"Migration Instructions"),(0,i.kt)("p",null,"This article covers the instructions for migration to newer library versions."),(0,i.kt)("h2",{id:"migration-to-400"},"Migration to 4.0.0"),(0,i.kt)("h3",{id:"changes-in-operation-of-edna-chat-center-push-library-400"},"Changes in Operation of edna Chat Center Push Library 4.0.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Dependency on the push-lite library has been removed."),(0,i.kt)("li",{parentName:"ul"},"The following classes used in the integration have been removed:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"im.threads.push.ThreadsPushBroadcastReceiver"),(0,i.kt)("li",{parentName:"ul"},"im.threads.push.ThreadsPushFcmIntentService")))),(0,i.kt)("p",null,"For push notifications to work correctly, the own child must be defined in the application\xa0",(0,i.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/reference/android/com/google/firebase/messaging/FirebaseMessagingService"},"https://firebase.google.com/docs/reference/android/com/google/firebase/messaging/FirebaseMessagingService"),".\xa0To pass the token in the corresponding child method, use ChatCenterPushMessageHelper.setFcmToken(...). To process incoming push notifications, use ChatCenterPushMessageHelper.process(...). This method will only process the push notifications that contain origin=threads, i.e. the edna Chat Center membership flag."),(0,i.kt)("p",null,"The integration code example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"    override fun onNewToken(token: String) {\n        super.onNewToken(token)\n        ChatCenterPushMessageHelper.setFcmToken(token)\n        //your custom handling here\n    }\n\n    override fun onMessageReceived(message: RemoteMessage) {\n        super.onMessageReceived(message)\n        ChatCenterPushMessageHelper.process(this, message.data)\n        //your custom handling here\n    }\n}\n")))}d.isMDXComponent=!0}}]);