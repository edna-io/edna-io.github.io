"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[85009],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,g=c["".concat(s,".").concat(m)]||c[m]||h[m]||r;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54096:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const r={sidebar_position:2},o="Getting Started",l={unversionedId:"Getting_started",id:"version-6.17.0/Getting_started",title:"Getting Started",description:"The chat widget helps your clients interact with your company, as it provides sending and receiving messages. Messages are sent using the WebSocket protocol.",source:"@site/i18n/en/docusaurus-plugin-content-docs-web/version-6.17.0/Getting_started.md",sourceDirName:".",slug:"/Getting_started",permalink:"/en/web/6.17.0/Getting_started",draft:!1,tags:[],version:"6.17.0",lastUpdatedAt:1731425742,formattedLastUpdatedAt:"Nov 12, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"mainSidebar",previous:{title:"Introduction",permalink:"/en/web/6.17.0/intro"},next:{title:"Widget installation",permalink:"/en/web/6.17.0/Widget_installation"}},s={},d=[{value:"Follow the algorithm below:",id:"follow-the-algorithm-below",level:2},{value:"1. From your account manager, obtain details for connecting the library for the following parameters:",id:"1-from-your-account-manager-obtain-details-for-connecting-the-library-for-the-following-parameters",level:3},{value:"2. Download the current version of the widget to configure the web chat.",id:"2-download-the-current-version-of-the-widget-to-configure-the-web-chat",level:3},{value:"3. Place the widget file <code>threadswidget-6.17.0.min.js</code> in the root or any directory of your site.",id:"3-place-the-widget-file-threadswidget-6170minjs-in-the-root-or-any-directory-of-your-site",level:3},{value:"4. Download the sample configuration file <code>settings.json</code>",id:"4-download-the-sample-configuration-file-settingsjson",level:3},{value:"5. In the <code>settings.json</code> file, configure the parameters the data on which you received from your account manager in step 1.",id:"5-in-the-settingsjson-file-configure-the-parameters-the-data-on-which-you-received-from-your-account-manager-in-step-1",level:3},{value:"6. Customize the color scheme that matches your website.",id:"6-customize-the-color-scheme-that-matches-your-website",level:3},{value:"7. Configure WebPush notifications.",id:"7-configure-webpush-notifications",level:3},{value:"8. Download the web-notification-sw.js file.",id:"8-download-the-web-notification-swjs-file",level:3},{value:"9. Embed the widget on your website.",id:"9-embed-the-widget-on-your-website",level:3},{value:"10. Open the page on your website.",id:"10-open-the-page-on-your-website",level:3},{value:"11. If everything is configured correctly, a button to open the chat will appear in the lower right corner of the browser window. When you click it, the chat start window loads.",id:"11-if-everything-is-configured-correctly-a-button-to-open-the-chat-will-appear-in-the-lower-right-corner-of-the-browser-window-when-you-click-it-the-chat-start-window-loads",level:3}],p={toc:d},c="wrapper";function h(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"The chat widget helps your clients interact with your company, as it provides sending and receiving messages. Messages are sent using the WebSocket protocol."),(0,i.kt)("p",null,"In this article, we will cover instructions for setting up and enabling the chat on your website."),(0,i.kt)("h2",{id:"follow-the-algorithm-below"},"Follow the algorithm below:"),(0,i.kt)("h3",{id:"1-from-your-account-manager-obtain-details-for-connecting-the-library-for-the-following-parameters"},"1. From your account manager, obtain details for connecting the library for the following parameters:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"webchat/package\nwebchat/uid\nwebchat/websocket\nwebchat/datastore\nwebchat/backend/rootUrl\nwebchat/backend/history\n")),(0,i.kt)("h3",{id:"2-download-the-current-version-of-the-widget-to-configure-the-web-chat"},"2. Download the current version of the widget to configure the web chat."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"From the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThreadsMobileLib/edna-sdk-web/releases"},"releases")," page")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Go to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThreadsMobileLib/edna-sdk-web"},"main page")," -> click ",(0,i.kt)("inlineCode",{parentName:"p"},"Code")," -> click ",(0,i.kt)("inlineCode",{parentName:"p"},"Download ZIP")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Important: the widget version cannot be more recent than the version of the app backend")),(0,i.kt)("h3",{id:"3-place-the-widget-file-threadswidget-6170minjs-in-the-root-or-any-directory-of-your-site"},"3. Place the widget file ",(0,i.kt)("inlineCode",{parentName:"h3"},"threadswidget-6.17.0.min.js")," in the root or any directory of your site."),(0,i.kt)("h3",{id:"4-download-the-sample-configuration-file-settingsjson"},"4. Download the sample configuration file ",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/ThreadsMobileLib/edna-sdk-web/tree/master/examples/Standard/settings.json"},(0,i.kt)("inlineCode",{parentName:"a"},"settings.json"))),(0,i.kt)("p",null,"Place the ",(0,i.kt)("inlineCode",{parentName:"p"},"settings.json")," file in the same directory where the web chat is located.\nYou configure all widget settings in this file. You will need to specify the path to it later when initializing the widget (step 9)."),(0,i.kt)("h3",{id:"5-in-the-settingsjson-file-configure-the-parameters-the-data-on-which-you-received-from-your-account-manager-in-step-1"},"5. In the ",(0,i.kt)("inlineCode",{parentName:"h3"},"settings.json")," file, configure the parameters the data on which you received from your account manager in step 1."),(0,i.kt)("h3",{id:"6-customize-the-color-scheme-that-matches-your-website"},"6. Customize the color scheme that matches your website."),(0,i.kt)("p",null,"Go to the ",(0,i.kt)("inlineCode",{parentName:"p"},"skin")," section. In the sample file, the parameters define the colors of the following elements:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the appearance theme. The following ones are available: ",(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"mfms"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"threadsim"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"halcyon"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"adaptive")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"threadsim"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"width")),(0,i.kt)("td",{parentName:"tr",align:null},"Widget width"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"366px"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"height")),(0,i.kt)("td",{parentName:"tr",align:null},"Widget height"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"420px"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"colorMain")),(0,i.kt)("td",{parentName:"tr",align:null},"Main base color"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"#008aff"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"colorSecond")),(0,i.kt)("td",{parentName:"tr",align:null},"Additional base color"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"#05b8ff"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"colorLines")),(0,i.kt)("td",{parentName:"tr",align:null},"Color of lines and agent messages"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"#dee4e9"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"colorSubText")),(0,i.kt)("td",{parentName:"tr",align:null},"Additional text color"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"#6e6e6e"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"colorText")),(0,i.kt)("td",{parentName:"tr",align:null},"Text color"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"#000000"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"colorBackground")),(0,i.kt)("td",{parentName:"tr",align:null},"Widget background color"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"#ffffff"'))))),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("img",{src:"/graphics-web/en/chat-colors.png"})),(0,i.kt)("td",{valign:"top"},(0,i.kt)("b",null,"colorMain"),(0,i.kt)("br",null),"1: Client's message background",(0,i.kt)("br",null),"2: Background of the message input field",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("b",null,"colorSecond"),(0,i.kt)("br",null),"3: Background of the attachment preview area",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("b",null,"colorLines"),(0,i.kt)("br",null),"4: Agent's message background",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("b",null,"colorSubText"),(0,i.kt)("br",null),"5: Color of the close button",(0,i.kt)("br",null),"6: Color of system messages",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("b",null,"colorText"),(0,i.kt)("br",null),"7: Color of the header text",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("b",null,"colorBackground"),(0,i.kt)("br",null),"8: Widget background color",(0,i.kt)("br",null),"9: Text color of the attachment preview area",(0,i.kt)("br",null),"10: Text color of message input field",(0,i.kt)("br",null)))),(0,i.kt)("h3",{id:"7-configure-webpush-notifications"},"7. Configure WebPush notifications."),(0,i.kt)("p",null,"Create a Firebase project for push notifications."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"How to register in Firebase"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a new project\n",(0,i.kt)("img",{src:n(77106).Z,width:"819",height:"383"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter the project name and select a domain\n",(0,i.kt)("img",{src:n(27371).Z,width:"554",height:"509"})),(0,i.kt)("p",{parentName:"li"},"  The project is created. Click ",(0,i.kt)("strong",{parentName:"p"},"Continue"),".\n",(0,i.kt)("img",{src:n(62185).Z,width:"540",height:"397"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the project page, click the ",(0,i.kt)("strong",{parentName:"p"},"Settings")," button in the ",(0,i.kt)("strong",{parentName:"p"},"Project Overview")," section and select ",(0,i.kt)("strong",{parentName:"p"},"Project settings"),".\n",(0,i.kt)("img",{src:n(38197).Z,width:"766",height:"230"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the ",(0,i.kt)("strong",{parentName:"p"},"General")," tab, scroll down to the ",(0,i.kt)("strong",{parentName:"p"},"Your apps")," section and click the web app icon.\n",(0,i.kt)("img",{src:n(82886).Z,width:"818",height:"263"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter the app's nickname and click ",(0,i.kt)("strong",{parentName:"p"},"Register App"),".\n",(0,i.kt)("img",{src:n(43119).Z,width:"674",height:"366"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Obtain the generated service worker script and click ",(0,i.kt)("strong",{parentName:"p"},"Continue to the console"),".\n",(0,i.kt)("img",{src:n(85853).Z,width:"801",height:"759"})))),(0,i.kt)("p",null,"The app's service worker config will remain available on the ",(0,i.kt)("strong",{parentName:"p"},"General")," tab of the ",(0,i.kt)("strong",{parentName:"p"},"Project settings")," page.\n",(0,i.kt)("strong",{parentName:"p"},"You will need the parameters of this config in the further steps of the widget configuration.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(79668).Z,width:"1553",height:"755"})),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"Go to the ",(0,i.kt)("strong",{parentName:"li"},"Cloud Messaging")," tab and obtain the ",(0,i.kt)("inlineCode",{parentName:"li"},"api_key")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"senderID")," values.\n",(0,i.kt)("img",{src:n(24134).Z,width:"799",height:"444"})))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Download ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThreadsMobileLib/edna-sdk-web/tree/master/examples/Standard/firebase-messaging-sw.js"},"firebase-messaging-sw.js"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Configure the file. In ",(0,i.kt)("inlineCode",{parentName:"p"},"config"),", specify the parameters of service worker for the widget:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"var config = {\n  enable: false,\n  firebaseConfig: {\n    apiKey: 'FIX_ME',\n    authDomain: 'FIX_ME',\n    projectId: 'FIX_ME',\n    storageBucket: 'FIX_ME',\n    messagingSenderId: 'FIX_ME',\n    appId: 'FIX_ME',\n  },\n  title: 'edna Chat',\n  icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABOUExURUxpcejo6Onp6enp6eTk5Onp6erq6uvr6+np6eXl5enp6ejo6Ovr6+zs7Ojo6Onp6ePj4+rq6pmZmdPT06enp+bm5p6entra2sLCwrm5ueNweO8AAAARdFJOUwBOiKUcunn78A3dnllqk8XwLooT9gAAAWVJREFUSMedllmShSAMRXHggYq+YhLd/0bbtluLJODA/SR1yiQmFxgj6tTEeymE7PmkOnarduRCRxJ8bK+BQSc05KGuljopWWfyqzLADlUp4qMv9aFJNfpGDUqu++pbfSHT6AdqXtSRqKeiUR+Cp6dn3zrcXW+d2eQs6fVRTo0CYQd2KKBQ/T8l6CNhNqdmxMi/2UFz5SNiY1BFw/4R9O3VAK0o/PuZEZ3NEJlReNwQjvIySCgzvnVYvENEx5R+h2jFprfIhEu5Rzjr3yI9I9t702QtmcBHDiIOxwVFFogsFCGJBYgEmlivLzMjeW3lc3JmY4Rs2dbkia7rmp/j/VcquvYxQg1A0bFc4IotdCxhMQhIQBytmHUmIeA0I1jkkASQ07SxXQRzoRDbxWlK9gqxwJQO63uC1NBgvcsTzkODPWzc26w8svGSy6LkSiq5+Aqu15JLvOipUPIgKXn2FD2uHj3hfgChdIQNPQdYDAAAAABJRU5ErkJggg==',\n};\n")),(0,i.kt)("p",{parentName:"li"},"where:"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enable")," - The parameter that enables/disables the functionality (possibles values are ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"firebaseConfig")," - Firebase platform connection parameters, service worker configuration"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"title")," - Header the client will see in the push message"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"icon")," - Push notification icon in the base64 format")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Similarly, configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"pushNotification")," section in the ",(0,i.kt)("inlineCode",{parentName:"p"},"settings.json")," configuration file.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Share the ",(0,i.kt)("inlineCode",{parentName:"p"},"sender_id")," (",(0,i.kt)("inlineCode",{parentName:"p"},"Sender ID"),") and ",(0,i.kt)("inlineCode",{parentName:"p"},"api_key")," (",(0,i.kt)("inlineCode",{parentName:"p"},"Server Key"),") values from the ",(0,i.kt)("strong",{parentName:"p"},"Cloud Messaging")," tab of your Firebase project with your account manager.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Place the ",(0,i.kt)("inlineCode",{parentName:"p"},"firebase-messaging-sw.js")," file in the root of the website. This script must be available here: ",(0,i.kt)("inlineCode",{parentName:"p"},"http(s)://****/firebase-messaging-sw.js")," (where ",(0,i.kt)("inlineCode",{parentName:"p"},"****")," is the domain that is being configured)."))),(0,i.kt)("h3",{id:"8-download-the-web-notification-swjs-file"},"8. Download the ",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/ThreadsMobileLib/edna-sdk-web/tree/master/examples/Standard/web-notification-sw.js"},"web-notification-sw.js")," file."),(0,i.kt)("p",null,"Place the ",(0,i.kt)("inlineCode",{parentName:"p"},"web-notification-sw.js")," file in the root of the website. This script must be available here: ",(0,i.kt)("inlineCode",{parentName:"p"},"http(s)://****/web-notification-sw.js")," (where ",(0,i.kt)("inlineCode",{parentName:"p"},"****")," is the domain that is being configured).\nThis is required for the browser web notifications about new messages in the widget to operate properly."),(0,i.kt)("h3",{id:"9-embed-the-widget-on-your-website"},"9. Embed the widget on your website."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enable the widget:\nTo place the chat widget on the page where it will be displayed, add the following initialization code before the closing ",(0,i.kt)("inlineCode",{parentName:"p"},"</body>")," tag:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- BEGIN CHAT {literal} --\x3e\n<script type="text/javascript">\n!function(e,a){"use strict";window.ThreadsWidget={},e=e||"/settings.json";function n(e,t){const n=setInterval(function(){ThreadsWidget&&!ThreadsWidget.isDummy&&(clearInterval(n),ThreadsWidget[e]&&ThreadsWidget[e].apply(void 0,t))},100)}ThreadsWidget.isDummy=!0,["hideInvite","version","commitHash","showChat","hideChat","onHideChat","onScenarios","onLoad","on","reInit","init","unInit"].forEach(t=>{ThreadsWidget[t]=(...e)=>{n(t,e)}});const t=function(){const i=new XMLHttpRequest;return function(e,t,n,a){i.onreadystatechange=function(){if(4===i.readyState)if(200===this.status)n(i.response);else{if("function"!=typeof a)throw new Error(i.response);a(i)}},i.open(e,t),i.send()}}();function i(t){t.webchat&&(t.webchat.filename=t.filename),a&&"string"==typeof a&&(t.webchat.currentLocale=a),a&&"object"==typeof a&&(a.locale&&"string"==typeof a.locale&&(t.webchat.currentLocale=a.locale),a.unavailable&&"boolean"==typeof a.unavailable&&(t.webchat.isUnavailableOnStart=a.unavailable));try{sessionStorage.setItem("__threadsWidget",JSON.stringify(t.webchat))}catch(e){window.__threadsWidget=JSON.stringify(t.webchat)}if(t.filename){const e=document.createElement("script"),n=(e.type="text/javascript",e.async=!0,e.src=t.filename,document.getElementsByTagName("script")[0]);n?n.parentNode.insertBefore(e,n):document.body.appendChild(e)}else console.error("Invalid bundle")}function o(){t("GET",e+"?rnd="+Math.random(),function(e){const t=JSON.parse(e);i(t)})}"complete"===document.readyState?o():window.addEventListener("DOMContentLoaded",o,!1)}("settings.json",{});\n<\/script>\n\x3c!-- {/literal} END CHAT --\x3e\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Connect the configuration file by specifying the path to ",(0,i.kt)("inlineCode",{parentName:"p"},"settings.json")," at the very end of the initialization script:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'...}("settings.json");\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Make sure to set the absolute path to the settings file from the root of your site as the value of this parameter. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},'("/your/path/to/settings.json")'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Save the changes and publish them on your website"))),(0,i.kt)("p",null,"The following is an example of the file directory:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Directory",src:n(24734).Z,width:"496",height:"201"})),(0,i.kt)("h3",{id:"10-open-the-page-on-your-website"},"10. Open the page on your website."),(0,i.kt)("h3",{id:"11-if-everything-is-configured-correctly-a-button-to-open-the-chat-will-appear-in-the-lower-right-corner-of-the-browser-window-when-you-click-it-the-chat-start-window-loads"},"11. If everything is configured correctly, a button to open the chat will appear in the lower right corner of the browser window. When you click it, the chat start window loads."),(0,i.kt)("p",null,"Once the widget is embedded, make sure that all settings have been made correctly by conducting a few simple, basic tests:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sign in the agent WP and switch to the ",(0,i.kt)("strong",{parentName:"li"},"Active")," status (your account manager will share the agent credentials with you)."),(0,i.kt)("li",{parentName:"ul"},"Send a message from the chat widget. In the agent WP, you will see the message as one of the threads in the queue."),(0,i.kt)("li",{parentName:"ul"},"Respond to the message in the agent WP. You will see the response in the chat widget."),(0,i.kt)("li",{parentName:"ul"},"Try to send several messages this way (for example, messages with attachments). Make sure that once the message is read by the recipient, two checkmarks indicating that the message was read are displayed next to the message in the sender's chat. This indicates that the read statuses work properly.")),(0,i.kt)("p",null,"If there are issues with sending and/or receiving messages, please make sure it configured correctly."),(0,i.kt)("p",null,"If you have any questions about the details of the setup process, you can always contact our implementation engineers at ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@edna.io"},"support@edna.io")," or contact your account manager."))}h.isMDXComponent=!0},24734:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dir-example-709dc44afe9fc7fec1770e5edc586699.png"},77106:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/firebase-reg-1-1721e12469666c9d766f1d77dd5d182f.png"},27371:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/firebase-reg-2-859978ec24a062151c88cb17bd8b73f5.png"},62185:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/firebase-reg-3-fe39f54e5d89f4ffba2b82a1eae576bc.png"},38197:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/firebase-reg-4-d68c33e97d0a1ae39cd468284759e510.png"},82886:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/firebase-reg-5-c54f6a5e563e97a206bd18399a9effcd.png"},43119:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/firebase-reg-6-c3203e0c3c6a5f90807e0ad057a678d6.png"},85853:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/firebase-reg-7-45887f834f24101b5bdee9acd67c3ae7.png"},79668:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/firebase-reg-8-047139ed5a9a03792ee5042e615f9451.png"},24134:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/firebase-reg-9-c00634625ff65f09bbaef9acf0f875d4.png"}}]);