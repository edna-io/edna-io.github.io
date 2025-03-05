"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[35216],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},70158:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:11},i="Yandex Metrica Settings",c={unversionedId:"Yandex_Metrika_Settings",id:"version-6.17.0/Yandex_Metrika_Settings",title:"Yandex Metrica Settings",description:"You can use Yandex Metrica to track \u0421hat events. The Chat widget automatically sends a number of events to Yandex Metrica based on customer requests to the Chat.",source:"@site/i18n/en/docusaurus-plugin-content-docs-web/version-6.17.0/Yandex_Metrika_Settings.md",sourceDirName:".",slug:"/Yandex_Metrika_Settings",permalink:"/en/web/6.17.0/Yandex_Metrika_Settings",draft:!1,tags:[],version:"6.17.0",lastUpdatedAt:1731393995,formattedLastUpdatedAt:"Nov 12, 2024",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"mainSidebar",previous:{title:"Examples of Chat Configuration",permalink:"/en/web/6.17.0/Examples"},next:{title:"Changelog",permalink:"/en/web/6.17.0/Changelog"}},s={},l=[{value:"Counter Connection",id:"counter-connection",level:3},{value:"Chat Events",id:"chat-events",level:3}],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"yandex-metrica-settings"},"Yandex Metrica Settings"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("a",{parentName:"p",href:"https://metrica.yandex.com/promo/product"},"Yandex Metrica")," to track \u0421hat events. The Chat widget automatically sends a number of events to Yandex Metrica based on customer requests to the Chat."),(0,r.kt)("h3",{id:"counter-connection"},"Counter Connection"),(0,r.kt)("p",null,"Create a counter in Yandex Metrica. Enter the name of the counter and the address of the website where you want to place the counter. Yandex Metrica will then generate a counter code. From the code received, you need a counter initialization block (the ",(0,r.kt)("inlineCode",{parentName:"p"},"ym")," method), which takes three arguments: the counter number, the function name and the parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'ym(9760117, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true });\n')),(0,r.kt)("p",null,"In the Chat settings, add the settings block to the ",(0,r.kt)("inlineCode",{parentName:"p"},"webchat")," section:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"yaMetrika": {\n    "account": <account>,\n    "options": <options>\n}\n')),(0,r.kt)("p",null,"Replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"account")," field value with the counter number, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," field value with the parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"yaMetrika": {\n    "account": 9760117,\n    "options": { clickmap:true, trackLinks:true, accurateTrackBounce:true }\n}\n')),(0,r.kt)("h3",{id:"chat-events"},"Chat Events"),(0,r.kt)("p",null,'You can manually set a number of goals to be displayed in Yandex Metrica. To do this, create a "JavaScript event" goal, select "Matches" in the goal ID and specify the event you want to track. List of events:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ednaCC_Chat_established"),": the conversation between the customer and the operator has been established."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ednaCC_Offline_message_sent"),":  the customer has sent an offline message."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ednaCC_User_gave_contacts_during_chat"),": the customer has completed the welcome form."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ednaCC_Offline_form_shown"),": the feedback form is displayed to the customer in the unavailable Chat mode."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ednaCC_Invitation_shown"),": an invitation to the Chat is displayed to the customer."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ednaCC_Invitation_rejected"),": the customer has closed the Chat invitation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ednaCC_Invitation_accepted"),": the customer has opened the Chat with a visible invitation to the Chat."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ednaCC_Chat_requested"),": the customer has opened the Chat without an invitation to the Chat."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ednaCC_Quick_reply_clicked"),": the customer has pressed one of the bot's quick response buttons.")))}d.isMDXComponent=!0}}]);