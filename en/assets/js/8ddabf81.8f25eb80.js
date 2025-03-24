"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[22449],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>u});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),m=p(a),c=i,u=m["".concat(s,".").concat(c)]||m[c]||d[c]||o;return a?n.createElement(u,r(r({ref:t},h),{},{components:a})):n.createElement(u,r({ref:t},h))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},17738:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const o={sidebar_position:9},r="FAQ",l={unversionedId:"FAQ",id:"version-5.24.0/FAQ",title:"FAQ",description:"How to update the widget without losing my configuration settings",source:"@site/i18n/en/docusaurus-plugin-content-docs-web/version-5.24.0/FAQ.md",sourceDirName:".",slug:"/FAQ",permalink:"/en/web/5.24.0/FAQ",draft:!1,tags:[],version:"5.24.0",lastUpdatedAt:1731425742,formattedLastUpdatedAt:"Nov 12, 2024",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"mainSidebar",previous:{title:"Theme settings",permalink:"/en/web/5.24.0/Theme_settings"},next:{title:"Examples of Chat Configuration",permalink:"/en/web/5.24.0/Examples"}},s={},p=[],h={toc:p},m="wrapper";function d(e){let{components:t,...o}=e;return(0,i.kt)(m,(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"faq"},"FAQ"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"How to update the widget without losing my configuration settings"),(0,i.kt)("p",null,"Before you begin, take a look at the changelog for the new version ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThreadsMobileLib/edna-sdk-web/releases",title:"Releases"},"here"),"."),(0,i.kt)("p",null,"You can get the updated code as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Download ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ThreadsMobileLib/edna-sdk-web/releases",title:"Releases"},"here")," the version that you need"),(0,i.kt)("li",{parentName:"ul"},"Download it from the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ThreadsMobileLib/edna-sdk-web"},"main page")," -> click ",(0,i.kt)("strong",{parentName:"li"},"Code")," -> click ",(0,i.kt)("strong",{parentName:"li"},"Download ZIP"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Important!")," The widget version must not be higher than the app backend version.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Obtain the ",(0,i.kt)("inlineCode",{parentName:"p"},"threadswidget-5.24.0.min.js")," file and place it in the same directory where the previous chat version was located (it can be the root folder of the site/the site catalog).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"settings.json")," configuration file, change the ",(0,i.kt)("inlineCode",{parentName:"p"},"filename")," value \u2013 the difference will only be in the widget version specified in the name."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"For example:")),(0,i.kt)("p",{parentName:"li"},"The previous value was as follows:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},'"filename": "../../threadswidget-3.28.0.min.js",\n')),(0,i.kt)("p",{parentName:"li"},"You have downloaded the 5.24.0 version of the widget, so you change the value as follows:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},'"filename": "../../threadswidget-5.24.0.min.js",\n')))),(0,i.kt)("p",null,"In some cases, if specified in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThreadsMobileLib/edna-sdk-web/releases"},"release notes"),", you need to update the widget initialization code. The code is available in the documentation: the ",(0,i.kt)("strong",{parentName:"p"},"Widget code")," section in the ",(0,i.kt)("strong",{parentName:"p"},"Widget installation")," article.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"How to manage permissions for sending files by clients"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To disable clients' ability to add attachments to messages, change the ",(0,i.kt)("inlineCode",{parentName:"p"},"buttonsPlacement")," setting of the ",(0,i.kt)("a",{parentName:"p",href:"Theme_settings#chatinput"},(0,i.kt)("inlineCode",{parentName:"a"},"ChatInput"))," component by removing the ",(0,i.kt)("inlineCode",{parentName:"p"},'"attach"')," element from the list of buttons. "),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"For example:")),(0,i.kt)("p",{parentName:"li"},"The previous value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"buttonsPlacement")," setting was as follows: "),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"buttonsPlacement": [\n ["emoji"],\n  ["attach", "send"]\n]\n')),(0,i.kt)("p",{parentName:"li"},"To disable the attachment button, remove the ",(0,i.kt)("inlineCode",{parentName:"p"},'"attach"')," element:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"buttonsPlacement": [\n  ["emoji"],\n  ["send"]\n]\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To prohibit clients attaching specific types of files and/or to change the maximum allowed size of the files that can be attached, please contact the support team for their assistance with the configuration.")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"What are WebPush notifications and how to check their work"),(0,i.kt)("p",null,"Using ",(0,i.kt)("inlineCode",{parentName:"p"},"WebPush")," notifications for the web chat helps you expand the possibilities of communication with your clients. This technology delivers messages to the client even if the tab with the widget is not opened."),(0,i.kt)("p",null,"For ",(0,i.kt)("inlineCode",{parentName:"p"},"WebPush"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"service worker")," (sw) is used. ",(0,i.kt)("inlineCode",{parentName:"p"},"service worker")," is a script that the browser runs in the background, separate from the page."),(0,i.kt)("p",null,"You can find the how-to on the WebPush configuration and getting the ",(0,i.kt)("inlineCode",{parentName:"p"},"service worker")," script in the ",(0,i.kt)("a",{parentName:"p",href:"Getting_started"},"Getting started")," article."),(0,i.kt)("p",null,"To check ",(0,i.kt)("inlineCode",{parentName:"p"},"WebPush")," notifications, do the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Log into the agent WP and switch to the ",(0,i.kt)("strong",{parentName:"p"},"Active")," status (you get your credentials from your account manager).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In another browser, load the page with the widget and send a message in it. You will see this message in the agent WP.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Close the page with the widget, but leave the browser running.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Reply to the message in the agent WP."))),(0,i.kt)("p",null,"In the browser, you will receive a web notification about a new message from the agent.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"How to embed the widget into the authorized zone of the website (for example, dashboard, online bank)"),(0,i.kt)("p",null,'In the authorized zone of the website, you can pass an identifier that is unique for each user to the chat. This is required to create the "client in WP"-"website user" connection.'),(0,i.kt)("p",null,"Such a user's session can access the chat history on any tab where the website with the chat is opened within the authorized zone. For more details, refer to the ",(0,i.kt)("a",{parentName:"p",href:"Widget_installation"},"Widget installation")," article.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"How to change the image of the chat's standard start button"),'You can change the standard image ("cloud") to your own one that matches your website better. To do this:',(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Code the required image in the base64 format using any ",(0,i.kt)("a",{parentName:"li",href:"http://base64.resampled.ru/"},"online service"),"."),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("inlineCode",{parentName:"li"},"theme")," section of the ",(0,i.kt)("inlineCode",{parentName:"li"},"settings.json")," configuration file, configure the ",(0,i.kt)("inlineCode",{parentName:"li"},"ChatButton")," parameter."),(0,i.kt)("li",{parentName:"ol"},'In the "backgroundImage" value, specify the link to the required image in the base64 format.'),(0,i.kt)("li",{parentName:"ol"},"If necessary, adjust the sizes of the image and the button, their backgrounds and indents.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"For example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"theme": {\n    "desktop": {\n        "ChatButton": {\n        "backgroundImage": "data:image/jpeg;base64...."\n        "backgroundColor": "#61298a",\n        "backgroundSize": "80%",\n        "width": "100px",\n        "height": "100px",\n        "right": "20px",\n        "bottom": "72px",\n        "borderRadius": "50%",\n        "boxShadow": "0 4px 25px 0px rgba(0,0,0,.5)"\n        }\n    }\n},\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Default state"),(0,i.kt)("th",{parentName:"tr",align:null},"State after"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{alt:"before",src:a(46970).Z,width:"160",height:"166"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{alt:"after",src:a(17511).Z,width:"160",height:"166"})))))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"How to create your own chat button"),(0,i.kt)("p",null,"You can use a custom button to open/hide the chat instead of the standard start button. To switch the chat to the mode without the standard start button, set the ",(0,i.kt)("inlineCode",{parentName:"p"},"isContainerHidden")," parameter in the ",(0,i.kt)("inlineCode",{parentName:"p"},"settings.json")," configuration file to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),". To see the example of the file, go ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThreadsMobileLib/edna-sdk-web/tree/master/examples/Custom%20button",title:"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430"},"here"),"."),(0,i.kt)("p",null,"When using a custom button, you need to ensure the implementation of standard business cases for the chat users.\nTo do this, ensure that these methods are called by embedding them in the code of your site page."),(0,i.kt)("p",null,"A required script is as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open the widget (the container with the chat) when a user clicks the custom button. The ",(0,i.kt)("inlineCode",{parentName:"li"},"ThreadsWidget.showChat()")," method is used.")),(0,i.kt)("p",null,"Optional scripts (use them if you want to apply these features)"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Show the number of messages unread by the client on your button. The ",(0,i.kt)("inlineCode",{parentName:"li"},"ThreadsWidget.on(event, callback)")," method allows you to subscribe to the ",(0,i.kt)("inlineCode",{parentName:"li"},"changeUnreadCounter")," event. When the even occurs, the ",(0,i.kt)("inlineCode",{parentName:"li"},"callback")," function receives the number of messages that the client hasn't read yet. You can display the resulting number on your button."),(0,i.kt)("li",{parentName:"ol"},"Hide the button if the widget display rules are configured in the admin WP of the chat platform (for example, during the contact center's non-working hours or for any other reason). The ",(0,i.kt)("inlineCode",{parentName:"li"},"ThreadsWidget.on(event, callback)")," method allows you to subscribe to the ",(0,i.kt)("inlineCode",{parentName:"li"},"changeOperationMode")," event. When the event occurs, parameters on the reason why that chat has become unavailable will be passed to the ",(0,i.kt)("inlineCode",{parentName:"li"},"callback")," function. You can use these parameters to hide the chat button or to warn the client."),(0,i.kt)("li",{parentName:"ol"},"Forcibly hide the chat at any moment. The ",(0,i.kt)("inlineCode",{parentName:"li"},"ThreadsWidget.hideChat()")," method is used.")),(0,i.kt)("p",null,"See additional descriptions of the API methods in the ",(0,i.kt)("a",{parentName:"p",href:"Methods_and_properties_of_API"},"Methods and properties of API")," article.\nSee the examples of embedding the methods in the code in the ",(0,i.kt)("inlineCode",{parentName:"p"},"example.html")," file ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThreadsMobileLib/edna-sdk-web/tree/master/examples/Custom%20button",title:"Custom button"},"here"),".")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"How to change the widget localization and customize your texts"),(0,i.kt)("p",null,"You manage the language localizations in the ",(0,i.kt)("inlineCode",{parentName:"p"},"settings.json")," configuration file using the ",(0,i.kt)("inlineCode",{parentName:"p"},"locale")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"locales")," parameters.\nSpecify the preferred locale in the ",(0,i.kt)("inlineCode",{parentName:"p"},"locale")," parameter."),(0,i.kt)("p",null,"You can configure tests in ",(0,i.kt)("inlineCode",{parentName:"p"},"settings.json")," as well. To do this, specify the following in the ",(0,i.kt)("inlineCode",{parentName:"p"},"locales")," parameter:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The label key"),(0,i.kt)("li",{parentName:"ul"},"The language code"),(0,i.kt)("li",{parentName:"ul"},"The value for this language")),(0,i.kt)("p",null,"See the example of the file ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThreadsMobileLib/edna-sdk-web/tree/master/examples/Locale",title:"Localization"},"here"),"."),(0,i.kt)("p",null,"For more details on localization processes, refer to the ",(0,i.kt)("a",{parentName:"p",href:"Setting_up_language_localization"},"Setting up language localization")," article.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"How to set up advanced widget theming"),(0,i.kt)("p",null,"You specify the widget theme in the ",(0,i.kt)("inlineCode",{parentName:"p"},"theme")," section of the ",(0,i.kt)("inlineCode",{parentName:"p"},"settings.json")," file.\nSee the example of the theme configuration for individual chat components ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThreadsMobileLib/edna-sdk-web/tree/master/examples/Theming",title:"Theming"},"here"),". In the example, the following settings are shown:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Size of the chat area"),(0,i.kt)("li",{parentName:"ul"},"Chat's background color"),(0,i.kt)("li",{parentName:"ul"},"Theme of clients' and agents' messages"),(0,i.kt)("li",{parentName:"ul"},"Notification that the agent is typing a message")),(0,i.kt)("p",null,"All themes with components available for configuration are described in the ",(0,i.kt)("a",{parentName:"p",href:"Theme_settings"},"Theme settings")," article.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"How to install the widget via npm or yarn"),(0,i.kt)("p",null,"The repository contains the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file, which allows using the chat widget as a Node.js module."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To install the chat widget by the rpm package manager, use the following command:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"npm i git+https://github.com/ThreadsMobileLib/edna-sdk-web.git\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To install the chat widget by the yarn package manager, use the following command:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"yarn add git+https://github.com/ThreadsMobileLib/edna-sdk-web.git\n"))))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"How to install the chat code via Google Tag Manager"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note that any issues with Google Tag Manager also effect the chat widget operation. If you have the ability to directly insert code into your website, then it is better to use it.")),(0,i.kt)("p",null,"To install the chat widget on your website via Google Tag Manager, you need to complete the steps similar to the ones described in the ",(0,i.kt)("a",{parentName:"p",href:"Getting_started"},"Getting started")," article, except that the initialization code will be placed not on the page, but on the GTM platform."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Before you begin, make sure the Google Tag Manager code is installed on the website where you want to place the chat widget.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Complete the steps described in ",(0,i.kt)("a",{parentName:"p",href:"Getting_started"},"Getting started")," up to step 9.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open Google Tag Manager and go to ",(0,i.kt)("strong",{parentName:"p"},"Workspace")," -> ",(0,i.kt)("strong",{parentName:"p"},"Overview")," -> ",(0,i.kt)("strong",{parentName:"p"},"Add a new tag"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"New tag",src:a(46369).Z,width:"669",height:"598"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Add a new tag")," -> ",(0,i.kt)("strong",{parentName:"p"},"Tag Configuration")," and select ",(0,i.kt)("strong",{parentName:"p"},"Custom HTML"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Custom HTML",src:a(96591).Z,width:"1162",height:"372"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Copy the widget initialization code from the ",(0,i.kt)("a",{parentName:"p",href:"Getting-started#9-embed-the-widget-on-your-website"},"Getting started")," page and insert it into the ",(0,i.kt)("strong",{parentName:"p"},"HTML")," field.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"At the end of the initialization script, specify the path to the ",(0,i.kt)("inlineCode",{parentName:"p"},"settings.json")," configuration file. Make sure to set the absolute path to the file from the root of your site as the value of the parameter. For more details, refer to the ",(0,i.kt)("a",{parentName:"p",href:"Getting_started"},"Getting started")," article.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Scroll down and click anywhere in the ",(0,i.kt)("strong",{parentName:"p"},"Triggering")," section to select a trigger to activate the tag on your website."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Triggers",src:a(38811).Z,width:"886",height:"342"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the ",(0,i.kt)("strong",{parentName:"p"},"All pages")," trigger and leave the rest of the default settings."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Select trigger",src:a(93027).Z,width:"1050",height:"362"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Save")," and enter the tag name."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Save",src:a(2404).Z,width:"1031",height:"221"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Submit")," in the upper right corner of the workspace."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Submit",src:a(44735).Z,width:"1085",height:"276"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add the name and the description of the version and click ",(0,i.kt)("strong",{parentName:"p"},"Publish"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Publish",src:a(6126).Z,width:"999",height:"472"})))),(0,i.kt)("p",null,"The chat widget will appear on your website in several minutes.")))}d.isMDXComponent=!0},46369:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1-34690771c16109dc3755c08bf9ae5a3d.png"},96591:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2-427276e98397960bdc7c80499a1052bf.png"},38811:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/4-91349bc417ae1c4160f40c159abe5296.png"},93027:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/5-7b8bb5456814d1688778a2506f828806.png"},2404:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/6-a8abb8b3af7e2c1437a35563ea4a2869.png"},44735:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/7-a860a836cd000a6bc05f7c40515eb5a4.png"},6126:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/8-0cf79322d8cd9a698725eda38d270f04.png"},17511:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/custom_after-336c2e2a673babdbbf9858979c76aad7.png"},46970:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACmCAIAAADS9BNnAAAAB3RJTUUH5AsQCjkIawAV5AAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAAKSElEQVR4nO2dbWhcVRrHb9Km6QusVUGFVSjuQlV8K/plRdYqC6viB/2yIIrURRQL0oqgfhL1g6zCbhXcD7KrpsuyWhCarWtVtDYKSte2EmkJtjZt3k1DJm/NTCYzkzn7n3mc05uZaTZz7p2c5z48Py4hL3PP+Z/7u+flztzMBEYRTeA7gNJcVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwJAsuLhvfSZuINMHW2UKZQoV8DfZP9EipsoUIrpIKf92jhbe/X3j6QPG+D4o3dZgr/mrW/cW0vFba8A1+xC/xJzwAD8ODSXlYtu82xUPiBVu10JPO5v95vPDQh0X4C15rbMMu2BG7oxAyLUNzggVbr+h8Xw0U/ri/iK7ZqNfaDYWgKBRo+3SiNSdSMPUtUrvvZP53e4rRvdZuKBaFk+bk9ubkCaaOi+N+aCiPSbQZasMbqkBFIKFdOUmC7Zicy+We71pottrwhupQaRJH7NYgIVBcHNzDPxVv39P2p29XNDmqQ6Wo2tpdydoj4e/cagCacdGH/t5daFnBjlu1oWoEoK6clH6cAMHW7gtfFXypDW+IkSDH3AWT3fn5+Z2fr+iku/SGMIiUCMesBfO0myzHfAVbu0xG5toNwfg7ZrqKNpVnM/7R0/ryoVW+49QHwRDPPgfiO059OAqmUw9H7cioefyz1b7jLAXiISTnayemguk5jR1dbRyPWQjEQ0j77IfvOPXwMzNcGJp6s9nscweZTr21G6IiMM/JmFcPpkw4TEfPBq8eZjr11oKoCMxzoOYlGFAPfuXbNt9BGgOBqQf7DlKDv8GjGntd1PnDvPdR12FDbIZXTYx6MAXCguXN7xPWfQnERnhqhe8sIfydW4uw3fdA71yMveqO98yOA2bvSXNwwExmf64L3+BH/BJ/wgNirA7huXViRoLz+Xwmk9n2nxgWz5veMruOnDe6NHgYHoxdoteL8GgCGqKCF0FXvTj3U1PnIt5XtfEN8+4xxxjYEbtHqR3h0QQ0hM99AVwEY1ibm5vr6M5GOb73711ur70Q2B2FRMmAJqAhfEZpFoJxvudyuXQ6/eC/3cfnbftjy4OinGOgCWgImmMXXH7xv4o25TWnKWs+OOT45Ma264N374ktEopCgW6gCaQ2qDTNM37PLxManw/1zbp1mps74k+FsRrFuuVBQ/iM0v57cFB5daF73PGFo113xRunxMZ292LRED6vPfgXbM+1ngmX8XnrVaWtGTiXjIbYRsUdqmE8CzaVuQqnfO+0SxjnybJ5haMhtgd7d8yoBw/Otjjsvumi2BNFLRwN0R68COrBYxkXwXc0Z3yOUjgaonPwIuhkn573nSMm0BAm3TfgINjOVdmCy+79MzHnCfPloMteaAiTCTjgIDiIdiC6x2IMUk3ftPu+HOwGTAQH5cOx1ukyuPPHuKOE6DjushcawsRuwEcwuKjdZS84aNIojfG5y2mIdmtIk+AiuKWl5bL1jmf9zi/izVICCyXnYtEQNCfWOO6wEEyH48oNjnesYZTe7TSWLgHsOs/u1BAmjv0LpgOBr1f/YsG5kG0fx+n40Y8dZ18CDbGNii2TK/4FB+UDAa7ZmI9SCBy/9E3UJBiZH+iMZBegIdSiqGnigIvg1tbWGy/JRSznxa+DLbsdL17BG0eDTW/FsCxHQ9AcJoI9vx5s78aamZkZHR11eAOz2m3ngcYyTGXN6zHddBeU31ANDUFzmNyZ5fl/93CaIwT1YLD1l4X3T0aN9H9fIcA4jAXU1HzQNVD6xu1a6EKgCdQWLtOw3/PLVG6YTafTqVTqb4fPRe9DZ6aqq+j8Mertksvf0AQ0BM1hcvMsC8F0y87k5GTf4EjE22bv31td/otfr5DaoHzbLJqAhvC5ZYeF4PA0/Mi+XJRDfHDgfMldA+73VbltCM9qAjYcBJvQbbPj4+MfHktFOcTdZ03ftOk4ZrbG+j8py9wQHk1gddssC8HhUXp4ePiu9xLzr9/hDbERntX4bJjcVRlULoVXr17d1tb22OZzvuO4gNgIjyYwugjm80QHCV61ahUO0G8vS9+7yf1pSy8gMGIjPJpAgpk4ZiGYwBEhwegHT1074TtOYyAwdV80gYnan/E9R5yH3gU6k8lMTEwMDQ09/WnG+7S6zA1RERix6X9HmSyvCF49mDoxusKaNWt2bB679XJ+b3lRA0IiKgIjNnVfVj2Yl2B6ks86fnnLOKNDVQ/EQ0hrN/wkJRMYCSbsWrq9vf2Gi3O7botw31vzQTyERFS7fvadqBpegexy2jp+4Krp57ZkfOeqD4IhXtgut/G5hO9FQB1otTU3Nzc1NTU6OnrmzJnt++N8Z5ZYNkRCMMRDSETltray8OrBhL0mpk4Mntk8sv36rO9c50EYRKJsdvZl13fLMBVMjmmptXbt2nXr1uGAPntz2ne0EoiBMIiEYLS8Yjo4l+EoOAitqDG3WcdP/Orsrt9MeTyKqBoBEMPapamXbfct4XuOWAr77mizs7MTExMjIyOY9vZ9N3zrbg/v8I9KUTUCIAbCIBK39zyrC2vBJuQ4nU5PTk5iUdPf33/ixImdn6RX0i6qQ6WoGgEQA2ESYdfwF2xCH6uDw4ol69jY2ODg4KlTp9Cf7tmTb7ZaVIGKUB0qRdUIQC/3JsKuSYRgE3KMC5KZmZlUKoVxsq+vD72q49DZO//VFM0oFoWjClSE6lApqkaABNk1SRFsQp9Jmc1mMf9hnER/GhoaOn36NBx8cGTk4c5sXB8vi6JQIIpF4agCFaE6VIqqE/cplUxX0bWEn+TC8hUXoFjKrl+/fkOZWy6df+G6gf/+/sSbt6X+8OvcFRsaLh+7YEfsjkJQFAqkklEFKkJ1ds3M9oqoPr7PsIaxXRnLnEwmg2ETa1p0suHhYSyCent70fN6eno+Otr/5y9TT36Uufv93A3vLNR+xDt+iT/hAXgYHoxdsCN2RyEoCgWiWBSOKlBR4jqupXTfue9zrGEoMx1u8k0fOxv+Sr+v+mBnW0JLBfv6FY0NdMeB/WqfoqJXEZLUcSskUjARPk+LFUh22K49D6p2t+bCjq1U+/SFxUsbo5NgwYSpvN0JWbSywz/a7ktf7T+VkODw1/CPXP73JBqJF0yE/dWdioLF74oSdlxF+K9e2hIzMc3lXKgaqwsV8jXYP9lRvWrCloE0wWGKy8Z30iYiWbBiVLB4VLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBwVLBw/gckoK4/lhuwdAAAAABJRU5ErkJggg=="}}]);