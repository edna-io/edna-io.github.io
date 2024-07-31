"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[82776],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var h=n.createContext({}),c=function(e){var t=n.useContext(h),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(h.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,h=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(a),d=l,k=p["".concat(h,".").concat(d)]||p[d]||u[d]||i;return a?n.createElement(k,r(r({ref:t},s),{},{components:a})):n.createElement(k,r({ref:t},s))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=d;var o={};for(var h in t)hasOwnProperty.call(t,h)&&(o[h]=t[h]);o.originalType=e,o[p]="string"==typeof e?e:l,r[1]=o;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},59272:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(87462),l=(a(67294),a(3905));const i={sidebar_position:5},r="Structure of the config file settings.json",o={unversionedId:"Structure_of_the_config_file_settings_json",id:"version-6.14.0/Structure_of_the_config_file_settings_json",title:"Structure of the config file settings.json",description:"| Attribute | Description | Default value |",source:"@site/i18n/en/docusaurus-plugin-content-docs-web/version-6.14.0/Structure_of_the_config_file_settings_json.md",sourceDirName:".",slug:"/Structure_of_the_config_file_settings_json",permalink:"/en/web/Structure_of_the_config_file_settings_json",draft:!1,tags:[],version:"6.14.0",lastUpdatedAt:1722418639,formattedLastUpdatedAt:"Jul 31, 2024",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"mainSidebar",previous:{title:"Structure of edna Web chat SDK",permalink:"/en/web/Structure_of_edna_Web_chat_SDK"},next:{title:"Setting up language localization",permalink:"/en/web/Setting_up_language_localization"}},h={},c=[{value:"Chat Files",id:"chat-files",level:3},{value:"filename",id:"filename",level:4},{value:"Connecting to edna Chat Center",id:"connecting-to-edna-chat-center",level:3},{value:"webchat/package, webchat/uid",id:"webchatpackage-webchatuid",level:4},{value:"webchat/appMarker",id:"webchatappmarker",level:4},{value:"webchat/checkURL",id:"webchatcheckurl",level:4},{value:"webchat/datastore",id:"webchatdatastore",level:4},{value:"webchat/backend/rootUrl",id:"webchatbackendrooturl",level:4},{value:"webchat/backend/history",id:"webchatbackendhistory",level:4},{value:"webchat/backend/unauthorizedHistory",id:"webchatbackendunauthorizedhistory",level:4},{value:"webchat/opengraph",id:"webchatopengraph",level:4},{value:"webchat/xhrWithCredentials",id:"webchatxhrwithcredentials",level:4},{value:"WS Settings",id:"ws-settings",level:3},{value:"webchat/websocket",id:"webchatwebsocket",level:4},{value:"webchat/wsReconnectType",id:"webchatwsreconnecttype",level:4},{value:"webchat/wsMaxRetries",id:"webchatwsmaxretries",level:4},{value:"webchat/wsRetryTimeoutMs",id:"webchatwsretrytimeoutms",level:4},{value:"Chat availability settings",id:"chat-availability-settings",level:3},{value:"webchat/isUnavailableOnStart",id:"webchatisunavailableonstart",level:4},{value:"webchat/schedule",id:"webchatschedule",level:4},{value:"webchat/schedule/interval",id:"webchatscheduleinterval",level:4},{value:"webchat/activePages",id:"webchatactivepages",level:4},{value:"webchat/isContainerHidden",id:"webchatiscontainerhidden",level:4},{value:"Chat behavior settings",id:"chat-behavior-settings",level:3},{value:"webchat/disableClientValidation",id:"webchatdisableclientvalidation",level:4},{value:"webchat/maximizeOnInit",id:"webchatmaximizeoninit",level:4},{value:"webchat/disableQuoting",id:"webchatdisablequoting",level:4},{value:"webchat/disableFormatSimpleMessages",id:"webchatdisableformatsimplemessages",level:4},{value:"webchat/enableInlineMediaPlayers",id:"webchatenableinlinemediaplayers",level:4},{value:"webchat/typingInterval",id:"webchattypinginterval",level:4},{value:"webchat/enableVoiceMessages",id:"webchatenablevoicemessages",level:4},{value:"webchat/maxInputLength",id:"webchatmaxinputlength",level:4},{value:"Localization",id:"localization",level:3},{value:"webchat/locale",id:"webchatlocale",level:4},{value:"webchat/locales",id:"webchatlocales",level:4},{value:"Chat header settings",id:"chat-header-settings",level:3},{value:"webchat/hideBadBrowserWarning",id:"webchathidebadbrowserwarning",level:4},{value:"webchat/chatHeader",id:"webchatchatheader",level:4},{value:"webchat/chatHeader/hideSearchText",id:"webchatchatheaderhidesearchtext",level:4},{value:"webchat/chatHeader/showOrganisationUnit",id:"webchatchatheadershoworganisationunit",level:4},{value:"Welcome form and feedback form settings",id:"welcome-form-and-feedback-form-settings",level:3},{value:"webchat/hideWelcome",id:"webchathidewelcome",level:4},{value:"webchat/welcomeForm",id:"webchatwelcomeform",level:4},{value:"webchat/inactivityForm",id:"webchatinactivityform",level:4},{value:"Client&#39;s data",id:"clients-data",level:3},{value:"webchat/clientId",id:"webchatclientid",level:4},{value:"webchat/clientData",id:"webchatclientdata",level:4},{value:"webchat/extendedAuth",id:"webchatextendedauth",level:4},{value:"webchat/signature",id:"webchatsignature",level:4},{value:"Settings of web and push notifications",id:"settings-of-web-and-push-notifications",level:3},{value:"webchat/webNotification",id:"webchatwebnotification",level:4},{value:"webchat/webNotification/title",id:"webchatwebnotificationtitle",level:4},{value:"webchat/webNotification/icon",id:"webchatwebnotificationicon",level:4},{value:"webchat/disableWebNotification",id:"webchatdisablewebnotification",level:4},{value:"webchat/pushNotification",id:"webchatpushnotification",level:4},{value:"Settings of the social link panel",id:"settings-of-the-social-link-panel",level:3},{value:"webchat/socialLinks",id:"webchatsociallinks",level:4},{value:"webchat/socialLinks/visible",id:"webchatsociallinksvisible",level:4},{value:"webchat/socialLinks/buttons",id:"webchatsociallinksbuttons",level:4},{value:"WebWidget settings",id:"webwidget-settings",level:3},{value:"webchat/WebWidget",id:"webchatwebwidget",level:4},{value:"Yandex Metrica settings",id:"yandex-metrica-settings",level:3},{value:"webchat/yaMetrika",id:"webchatyametrika",level:4}],s={toc:c},p="wrapper";function u(e){let{components:t,...i}=e;return(0,l.kt)(p,(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"structure-of-the-config-file-settingsjson"},"Structure of the config file settings.json"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value")))),(0,l.kt)("h3",{id:"chat-files"},"Chat Files"),(0,l.kt)("h4",{id:"filename"},"filename"),(0,l.kt)("p",null,"Chat widget core (JavaScript file)"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'"../../threadswidget-6.14.0.min.js"\n')),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"connecting-to-edna-chat-center"},"Connecting to edna Chat Center"),(0,l.kt)("h4",{id:"webchatpackage-webchatuid"},"webchat/package, webchat/uid"),(0,l.kt)("p",null,"edna API settings"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"none\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatappmarker"},"webchat/appMarker"),(0,l.kt)("p",null,"Application ID. It is used to work with multiple applications within the same channel."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"none\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatcheckurl"},"webchat/checkURL"),(0,l.kt)("p",null,"Address of the service that checks availability of the network connection and the push platform."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/favicon.ico\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatdatastore"},"webchat/datastore"),(0,l.kt)("p",null,"File storage address"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"none\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatbackendrooturl"},"webchat/backend/rootUrl"),(0,l.kt)("p",null,"Address for API requests"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"none\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatbackendhistory"},"webchat/backend/history"),(0,l.kt)("p",null,"Settings of the chat history loading interface."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "count": 20\n}\n')),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatbackendunauthorizedhistory"},"webchat/backend/unauthorizedHistory"),(0,l.kt)("p",null,"The setting for the chat history loading for the unauthorized zone. The parameters are as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cookie")," - The object of setting up the storage of the client ID, used for receiving the message history"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Max-Age")," - Time in second of history storing for the site users")))),(0,l.kt)("p",null,"Some other storage parameters are available as well. For more details on them, refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie"},"official documentation"),"."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "count": 20,\n    "enable": false,\n    "cookie": {\n        "Max-Age": 3600\n    }\n}\n')),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatopengraph"},"webchat/opengraph"),(0,l.kt)("p",null,"The setting for the OpenGraph protocol, used to get preview of the inline links in the message text."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<URL_TO_DATASTORE>/opengraph?href=\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatxhrwithcredentials"},"webchat/xhrWithCredentials"),(0,l.kt)("p",null,"Allow XMLHttpRequest.withCredentials"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"false\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"ws-settings"},"WS Settings"),(0,l.kt)("h4",{id:"webchatwebsocket"},"webchat/websocket"),(0,l.kt)("p",null,"Websocket server address"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"none\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatwsreconnecttype"},"webchat/wsReconnectType"),(0,l.kt)("p",null,"A way to reconnect WebSocket in case the connection is lost. The options are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"0 - Reconnect automatically (default)"),(0,l.kt)("li",{parentName:"ul"},"1 - reconnect when a user sends a message")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"0\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatwsmaxretries"},"webchat/wsMaxRetries"),(0,l.kt)("p",null,"Number of WebSocket reconnection attempts"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"30\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatwsretrytimeoutms"},"webchat/wsRetryTimeoutMs"),(0,l.kt)("p",null,"The initial time between WebSocket reconnection attempts (ms). Each new attempt doubles the previous time."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"none\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"chat-availability-settings"},"Chat availability settings"),(0,l.kt)("h4",{id:"webchatisunavailableonstart"},"webchat/isUnavailableOnStart"),(0,l.kt)("p",null,"After loading the page, the chat will be hidden, except when the client had an active thread"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"false\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatschedule"},"webchat/schedule"),(0,l.kt)("p",null,"Chat availability settings"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "interval": 1000\n}\n')),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatscheduleinterval"},"webchat/schedule/interval"),(0,l.kt)("p",null,"The frequency (in milliseconds) with which changes to the ",(0,l.kt)("strong",{parentName:"p"},"Chat Mode")," setting are displayed in the interface (the setting is performed in the admin WP). The changes will be displayed no more than once during the specified period, even if during this period the change to the ",(0,l.kt)("strong",{parentName:"p"},"Chat Mode")," setting occurs several times - all intermediate events will be ignored."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"1000\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatactivepages"},"webchat/activePages"),(0,l.kt)("p",null,"Array of the website addresses where the chat widget is enabled"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[]\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatiscontainerhidden"},"webchat/isContainerHidden"),(0,l.kt)("p",null,"The value that manages the visibility of the chat start button. For details on managing the visibility of the main chat window, see the ",(0,l.kt)("strong",{parentName:"p"},"Managing widget visibility")," section"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"false\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"chat-behavior-settings"},"Chat behavior settings"),(0,l.kt)("h4",{id:"webchatdisableclientvalidation"},"webchat/disableClientValidation"),(0,l.kt)("p",null,"A setting that allows you to disable client id validation."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"false\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatmaximizeoninit"},"webchat/maximizeOnInit"),(0,l.kt)("p",null,"A setting that allows you to automatically expand the chat window when the application is first initialized. The next chat launches will ignore this setting (the last known state will be used). This option only works when using the standard start button. For this, the ",(0,l.kt)("inlineCode",{parentName:"p"},"isContainerHidden")," parameter (see below) must be set to ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"false\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatdisablequoting"},"webchat/disableQuoting"),(0,l.kt)("p",null,"A setting that disables message quoting (",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"false"),")"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"false\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatdisableformatsimplemessages"},"webchat/disableFormatSimpleMessages"),(0,l.kt)("p",null,"A setting that disables formatting for messages (all except bot messages that contain markdown) (",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"false"),")"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"false\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatenableinlinemediaplayers"},"webchat/enableInlineMediaPlayers"),(0,l.kt)("p",null,"A setting that enables the built-in player to play media attachments in the chat area (",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"false"),")"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"true\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchattypinginterval"},"webchat/typingInterval"),(0,l.kt)("p",null,"Send a notification to the operator about the user typing a message no more often than the specified value (in ms)"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"3000\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatenablevoicemessages"},"webchat/enableVoiceMessages"),(0,l.kt)("p",null,"Allow clients to record voice messages (make sure the Send button is enabled)"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"false\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatmaxinputlength"},"webchat/maxInputLength"),(0,l.kt)("p",null,"A setting that allows you to define the maximum length of text in the input field"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"4000\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"localization"},"Localization"),(0,l.kt)("h4",{id:"webchatlocale"},"webchat/locale"),(0,l.kt)("p",null,"The chat widget locale. The following options are available: ",(0,l.kt)("inlineCode",{parentName:"p"},"ru"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"en"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"az")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatlocales"},"webchat/locales"),(0,l.kt)("p",null,"Redefining ",(0,l.kt)("a",{parentName:"p",href:"Setting-up-language-localization"},"localization texts")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'"locales": {}\n')),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"chat-header-settings"},"Chat header settings"),(0,l.kt)("h4",{id:"webchathidebadbrowserwarning"},"webchat/hideBadBrowserWarning"),(0,l.kt)("p",null,"A setting that hides ",(0,l.kt)("a",{parentName:"p",href:"Theme_settings#badbrowser"},"warnings")," about a browser that is not supported"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"false\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatchatheader"},"webchat/chatHeader"),(0,l.kt)("p",null,"Chat ",(0,l.kt)("a",{parentName:"p",href:"Configuration-of-appearance-theme#chatheader"},"header")," settings"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "showOrganisationUnit": false,\n    "hideSearchText": false\n}\n')),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatchatheaderhidesearchtext"},"webchat/chatHeader/hideSearchText"),(0,l.kt)("p",null,"A setting that disables the display of text in the chat header displayed when searching for an operator"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"false\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatchatheadershoworganisationunit"},"webchat/chatHeader/showOrganisationUnit"),(0,l.kt)("p",null,"A setting that enables displaying the department of the connected operator in the chat header"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"false\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"welcome-form-and-feedback-form-settings"},"Welcome form and feedback form settings"),(0,l.kt)("h4",{id:"webchathidewelcome"},"webchat/hideWelcome"),(0,l.kt)("p",null,"A setting that disables the display of the welcome form"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"false\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatwelcomeform"},"webchat/welcomeForm"),(0,l.kt)("p",null,"Contact form settings in the welcome form. The visibility of the welcome form (the suggestion for the client to introduce themselves) is configured using the ",(0,l.kt)("inlineCode",{parentName:"p"},"pre.text")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"pre.notice")," parameters.\nFor the form, you can use any set of fields available: phone, email, client's name. If you do not configure it otherwise, the form contains the full set of these parameters. For each field, the ",(0,l.kt)("inlineCode",{parentName:"p"},"visible")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"required")," values are set, meaning that the fields are visible and required."),(0,l.kt)("p",null,"You can configure a mask for the phone number as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The Latin symbol ",(0,l.kt)("inlineCode",{parentName:"p"},"X")," is used to determine the position of the digits;")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For the digit positions that are optional, the Latin character ",(0,l.kt)("inlineCode",{parentName:"p"},"Y")," is used (the optional positions are only allowed at the end of the mask)."))),(0,l.kt)("p",null,"For example:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A string ",(0,l.kt)("inlineCode",{parentName:"li"},"+7 (XXX) XXX-XX-XX")," sets the ",(0,l.kt)("inlineCode",{parentName:"li"},"+7 (___) ___-__-__")," mask"),(0,l.kt)("li",{parentName:"ul"},"A sting ",(0,l.kt)("inlineCode",{parentName:"li"},"8 (XX) XXX-XX-YY")," sets the ",(0,l.kt)("inlineCode",{parentName:"li"},"8 (__) ___-__-__")," mask, where 2 last positions are optional.")),(0,l.kt)("p",null,"If the mask is not set, by default, only digits are allowed with no separators. The field length is limited to 15 digits.\nErrors in filling in fields are highlighted."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "pre": {\n        "text": true,\n        "notice": true\n    },\n    "phone": {\n        "visible": true,\n        "required": false,\n        "mask": "+7 (XXX) XXX-XX-XX"\n    },\n    "email": {\n        "visible": true,\n        "required": true\n    },\n    "name": {\n        "visible": true,\n        "required": false\n    }\n}\n')),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatinactivityform"},"webchat/inactivityForm"),(0,l.kt)("p",null,"Settings of the form displayed in the chat unavailability mode (image 2). You can create your own set of fields from the available ones (phone, e-mail, client name). Also, in this section, you can change the text displayed above the form and after submitting the form."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "phone": true,\n    "email": true,\n    "name": true\n}\n')),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"clients-data"},"Client's data"),(0,l.kt)("h4",{id:"webchatclientid"},"webchat/clientId"),(0,l.kt)("p",null,"The name of the property of the ",(0,l.kt)("inlineCode",{parentName:"p"},"window")," object that contains the ID of the authorized user"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'"clientId"\n')),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatclientdata"},"webchat/clientData"),(0,l.kt)("p",null,"The name of the property of the ",(0,l.kt)("inlineCode",{parentName:"p"},"window")," object that contains the client data of the authorized user"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'"clientData"\n')),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatextendedauth"},"webchat/extendedAuth"),(0,l.kt)("p",null,"Extended authorization parameters. For more details, refer to the ",(0,l.kt)("a",{parentName:"p",href:"Widget-installation#extended-authorization-optional"},"Widget installation")," article."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"{}\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatsignature"},"webchat/signature"),(0,l.kt)("p",null,"The name of the property of the ",(0,l.kt)("inlineCode",{parentName:"p"},"window")," object that contains a digital signature of the authorized user"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'"signature"\n')),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"settings-of-web-and-push-notifications"},"Settings of web and push notifications"),(0,l.kt)("h4",{id:"webchatwebnotification"},"webchat/webNotification"),(0,l.kt)("p",null,"Notification settings (image 3)"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "title": "",\n    "icon": ""\n}\n')),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatwebnotificationtitle"},"webchat/webNotification/title"),(0,l.kt)("p",null,"Custom notification header"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"none\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatwebnotificationicon"},"webchat/webNotification/icon"),(0,l.kt)("p",null,"Custom notification icon in the base64 format (JPG/PNG)"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"none\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatdisablewebnotification"},"webchat/disableWebNotification"),(0,l.kt)("p",null,"Notification request setting (",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"false"),")"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"false\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatpushnotification"},"webchat/pushNotification"),(0,l.kt)("p",null,"Push notification setting. To enable push notifications, set ",(0,l.kt)("inlineCode",{parentName:"p"},"enable:true")," and fill in the ",(0,l.kt)("inlineCode",{parentName:"p"},"firebaseConfig")," section with the details of your project in ",(0,l.kt)("a",{parentName:"p",href:"https://console.firebase.google.com/u/0/"},"Firebase"),". For more details, refer to the ",(0,l.kt)("strong",{parentName:"p"},"Getting Started")," article."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "enable": "false",\n    "firebaseConfig": {}\n}\n')),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"settings-of-the-social-link-panel"},"Settings of the social link panel"),(0,l.kt)("h4",{id:"webchatsociallinks"},"webchat/socialLinks"),(0,l.kt)("p",null,"Settings of the social link panel"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "visible": false,\n    "buttons": [\n        {\n            "url": "https://vk.com/",\n            "tooltip": "VK",\n            "image": "http://..."\n        }\n    ]\n}\n')),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatsociallinksvisible"},"webchat/socialLinks/visible"),(0,l.kt)("p",null,"A setting that enables/disables the social link panel"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"false\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatsociallinksbuttons"},"webchat/socialLinks/buttons"),(0,l.kt)("p",null,"Social link panel buttons. A collection of objects, each of which contains three properties: ",(0,l.kt)("inlineCode",{parentName:"p"},"url")," (link), ",(0,l.kt)("inlineCode",{parentName:"p"},"tooltip")," (hover hint), and ",(0,l.kt)("inlineCode",{parentName:"p"},"image")," (link to an image or a ",(0,l.kt)("a",{parentName:"p",href:"http://base64.resampled.ru/"},"data: image")," URL)"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'[\n    {\n        "url": "https://vk.com/",\n        "tooltip": "VK",\n        "image": "http://..."\n    }\n]\n')),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"webwidget-settings"},"WebWidget settings"),(0,l.kt)("h4",{id:"webchatwebwidget"},"webchat/WebWidget"),(0,l.kt)("p",null,"Settings of the space in the chat area allocated for WebWidget"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"url")," - URL that is opened when the widget is clicked (required)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"image")," - Image URL or the image's ",(0,l.kt)("a",{parentName:"li",href:"http://base64.resampled.ru/"},"data: URL")," (required)")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"none\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"yandex-metrica-settings"},"Yandex Metrica settings"),(0,l.kt)("h4",{id:"webchatyametrika"},"webchat/yaMetrika"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"Yandex_Metrika_Settings"},"Yandex Metrica counter")," settings"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"account")," - counter number"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options")," - counter code initialization parameters")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n                    "account": null,\n                    "options": { clickmap:true, trackLinks:true, accurateTrackBounce:true }\n                }\n')),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Img. 1. Message after sending contact data",src:a(96449).Z,width:"360",height:"540"})),(0,l.kt)("p",null,"Img. 1. Message after sending contact data"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Img. 2. Out-of-hours feedback form",src:a(38434).Z,width:"360",height:"540"})),(0,l.kt)("p",null,"Img. 2. Out-of-hours feedback form"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u0420\u0438\u0441. 3. Browser notification",src:a(7176).Z,width:"388",height:"152"})),(0,l.kt)("p",null,"Img. 3. Browser notification"))}u.isMDXComponent=!0},38434:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/InactivityForm-7436b1d752a5e550660d8416ed003920.png"},7176:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/WebNotification-e27595c331b7164c0c2fa408fa58aa11.png"},96449:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/WelcomeSend-ec76032413fe34eb0a2a5db55b08df65.png"}}]);