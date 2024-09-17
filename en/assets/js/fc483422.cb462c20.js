"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[42354],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=i,u=d["".concat(l,".").concat(h)]||d[h]||c[h]||r;return n?a.createElement(u,o(o({ref:t},m),{},{components:n})):a.createElement(u,o({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},18345:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={sidebar_position:10},o="Examples of Chat Configuration",s={unversionedId:"Examples",id:"version-6.9.0/Examples",title:"Examples of Chat Configuration",description:'edna SDK contains examples that demonstrate how settings affect the chat design and the way it operates. A part of the settings is unique for each new connection. In these edna SDK examples, these parameters are set to "FIX_ME". You receive the values of these parameters from the implementation manager.',source:"@site/i18n/en/docusaurus-plugin-content-docs-web/version-6.9.0/Examples.md",sourceDirName:".",slug:"/Examples",permalink:"/en/web/6.9.0/Examples",draft:!1,tags:[],version:"6.9.0",lastUpdatedAt:1717146390,formattedLastUpdatedAt:"May 31, 2024",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"mainSidebar",previous:{title:"FAQ",permalink:"/en/web/6.9.0/FAQ"},next:{title:"Changelog",permalink:"/en/web/6.9.0/Changelog"}},l={},p=[{value:"Minimal",id:"minimal",level:3},{value:"Custom Start Button",id:"custom-start-button",level:3},{value:"Advanced Theming",id:"advanced-theming",level:3},{value:"Localization and Redefining Labels",id:"localization-and-redefining-labels",level:3},{value:"Chat Behavior Settings",id:"chat-behavior-settings",level:3},{value:"Initialization on Request",id:"initialization-on-request",level:3}],m={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"examples-of-chat-configuration"},"Examples of Chat Configuration"),(0,i.kt)("p",null,"edna SDK contains examples that demonstrate how settings affect the chat design and the way it operates. A part of the settings is unique for each new connection. In these edna SDK examples, these parameters are set to ",(0,i.kt)("inlineCode",{parentName:"p"},'"FIX_ME"'),". You receive the values of these parameters from the implementation manager."),(0,i.kt)("h3",{id:"minimal"},"Minimal"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThreadsMobileLib/edna-sdk-web/tree/master/examples/Standard"},"examples/Standard")),(0,i.kt)("p",null,"This is a basic example of using a widget with a minimal set of configured fields, such as simplified theming settings, settings for external APIs and forms."),(0,i.kt)("h3",{id:"custom-start-button"},"Custom Start Button"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThreadsMobileLib/edna-sdk-web/tree/master/examples/Custom%20button"},"examples/Custom button")),(0,i.kt)("p",null,"This example shows how to change the start button of the chat to your own one and how to manage the widget visibility settings using the methods of the internal API."),(0,i.kt)("h3",{id:"advanced-theming"},"Advanced Theming"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThreadsMobileLib/edna-sdk-web/tree/master/examples/Theming"},"examples/Theming")),(0,i.kt)("p",null,"This example shows a more fine-tuned version of the appearance configuration of some individual components such as the start button, the badge with the number of unread messages, chat invitations, and the quick replies panel."),(0,i.kt)("h3",{id:"localization-and-redefining-labels"},"Localization and Redefining Labels"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThreadsMobileLib/edna-sdk-web/tree/master/examples/Locale"},"examples/Locale")),(0,i.kt)("p",null,"This example contains a configuration with redefined standard labels and demonstrates the ability to switch the language using the internal API."),(0,i.kt)("h3",{id:"chat-behavior-settings"},"Chat Behavior Settings"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThreadsMobileLib/edna-sdk-web/tree/master/examples/Common"},"examples/Common")),(0,i.kt)("p",null,"This is an example of how to adjust the chat behavior by configuring the following parameters: ",(0,i.kt)("inlineCode",{parentName:"p"},"hideWelcome"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"maximizeOnInit"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"disableFormatSimpleMessages"),"."),(0,i.kt)("h3",{id:"initialization-on-request"},"Initialization on Request"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThreadsMobileLib/edna-sdk-web/tree/master/examples/On%20demand"},"examples/On demand")),(0,i.kt)("p",null,"This is an example of initializing the chat by clicking on a page element."))}c.isMDXComponent=!0}}]);