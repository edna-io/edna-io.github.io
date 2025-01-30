"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[62088],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),h=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=h(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=h(a),k=l,d=c["".concat(s,".").concat(k)]||c[k]||u[k]||r;return a?n.createElement(d,i(i({ref:t},p),{},{components:a})):n.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:l,i[1]=o;for(var h=2;h<r;h++)i[h]=a[h];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},64020:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var n=a(87462),l=(a(67294),a(3905));const r={sidebar_position:5},i="Structure of the config file settings.json",o={unversionedId:"Structure_of_the_config_file_settings_json",id:"version-6.8.0/Structure_of_the_config_file_settings_json",title:"Structure of the config file settings.json",description:"| Attribute | Description | Default value |",source:"@site/i18n/en/docusaurus-plugin-content-docs-web/version-6.8.0/Structure_of_the_config_file_settings_json.md",sourceDirName:".",slug:"/Structure_of_the_config_file_settings_json",permalink:"/en/web/6.8.0/Structure_of_the_config_file_settings_json",draft:!1,tags:[],version:"6.8.0",lastUpdatedAt:1731393995,formattedLastUpdatedAt:"Nov 12, 2024",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"mainSidebar",previous:{title:"Structure of edna Web chat SDK",permalink:"/en/web/6.8.0/Structure_of_edna_Web_chat_SDK"},next:{title:"Setting up language localization",permalink:"/en/web/6.8.0/Setting_up_language_localization"}},s={},h=[{value:"<strong>Chat Files</strong>",id:"chat-files",level:3},{value:"<strong>filename</strong>",id:"filename",level:4},{value:"<strong>Connecting to edna Chat Center</strong>",id:"connecting-to-edna-chat-center",level:3},{value:"<strong>webchat/package, webchat/uid</strong>",id:"webchatpackage-webchatuid",level:4},{value:"<strong>webchat/appMarker</strong>",id:"webchatappmarker",level:4},{value:"<strong>webchat/checkURL</strong>",id:"webchatcheckurl",level:4},{value:"<strong>webchat/datastore</strong>",id:"webchatdatastore",level:4},{value:"<strong>webchat/backend/rootUrl</strong>",id:"webchatbackendrooturl",level:4},{value:"<strong>webchat/backend/history</strong>",id:"webchatbackendhistory",level:4},{value:"<strong>webchat/backend/unauthorizedHistory</strong>",id:"webchatbackendunauthorizedhistory",level:4},{value:"<strong>webchat/opengraph</strong>",id:"webchatopengraph",level:4},{value:"<strong>webchat/xhrWithCredentials</strong>",id:"webchatxhrwithcredentials",level:4},{value:"<strong>WS Settings</strong>",id:"ws-settings",level:3},{value:"<strong>webchat/websocket</strong>",id:"webchatwebsocket",level:4},{value:"<strong>webchat/wsReconnectType</strong>",id:"webchatwsreconnecttype",level:4},{value:"<strong>webchat/wsMaxRetries</strong>",id:"webchatwsmaxretries",level:4},{value:"<strong>webchat/wsRetryTimeoutMs</strong>",id:"webchatwsretrytimeoutms",level:4},{value:"<strong>Chat availability settings</strong>",id:"chat-availability-settings",level:3},{value:"<strong>webchat/isUnavailableOnStart</strong>",id:"webchatisunavailableonstart",level:4},{value:"<strong>webchat/schedule</strong>",id:"webchatschedule",level:4},{value:"<strong>webchat/schedule/interval</strong>",id:"webchatscheduleinterval",level:4},{value:"<strong>webchat/activePages</strong>",id:"webchatactivepages",level:4},{value:"<strong>webchat/isContainerHidden</strong>",id:"webchatiscontainerhidden",level:4},{value:"<strong>Chat behavior settings</strong>",id:"chat-behavior-settings",level:3},{value:"<strong>webchat/disableClientValidation</strong>",id:"webchatdisableclientvalidation",level:4},{value:"<strong>webchat/maximizeOnInit</strong>",id:"webchatmaximizeoninit",level:4},{value:"<strong>webchat/disableQuoting</strong>",id:"webchatdisablequoting",level:4},{value:"<strong>webchat/disableFormatSimpleMessages</strong>",id:"webchatdisableformatsimplemessages",level:4},{value:"<strong>webchat/enableInlineMediaPlayers</strong>",id:"webchatenableinlinemediaplayers",level:4},{value:"<strong>webchat/typingInterval</strong>",id:"webchattypinginterval",level:4},{value:"<strong>webchat/enableVoiceMessages</strong>",id:"webchatenablevoicemessages",level:4},{value:"<strong>webchat/maxInputLength</strong>",id:"webchatmaxinputlength",level:4},{value:"<strong>Localization</strong>",id:"localization",level:3},{value:"<strong>webchat/locale</strong>",id:"webchatlocale",level:4},{value:"<strong>webchat/locales</strong>",id:"webchatlocales",level:4},{value:"<strong>Chat header settings</strong>",id:"chat-header-settings",level:3},{value:"<strong>webchat/hideBadBrowserWarning</strong>",id:"webchathidebadbrowserwarning",level:4},{value:"<strong>webchat/chatHeader</strong>",id:"webchatchatheader",level:4},{value:"<strong>webchat/chatHeader/hideSearchText</strong>",id:"webchatchatheaderhidesearchtext",level:4},{value:"<strong>webchat/chatHeader/showOrganisationUnit</strong>",id:"webchatchatheadershoworganisationunit",level:4},{value:"<strong>Welcome form and feedback form settings</strong>",id:"welcome-form-and-feedback-form-settings",level:3},{value:"<strong>webchat/hideWelcome</strong>",id:"webchathidewelcome",level:4},{value:"<strong>webchat/welcomeForm</strong>",id:"webchatwelcomeform",level:4},{value:"<strong>webchat/inactivityForm</strong>",id:"webchatinactivityform",level:4},{value:"<strong>Client&#39;s data</strong>",id:"clients-data",level:3},{value:"<strong>webchat/clientId</strong>",id:"webchatclientid",level:4},{value:"<strong>webchat/clientData</strong>",id:"webchatclientdata",level:4},{value:"<strong>webchat/extendedAuth</strong>",id:"webchatextendedauth",level:4},{value:"<strong>webchat/signature</strong>",id:"webchatsignature",level:4},{value:"<strong>Settings of web and push notifications</strong>",id:"settings-of-web-and-push-notifications",level:3},{value:"<strong>webchat/webNotification</strong>",id:"webchatwebnotification",level:4},{value:"<strong>webchat/webNotification/title</strong>",id:"webchatwebnotificationtitle",level:4},{value:"<strong>webchat/webNotification/icon</strong>",id:"webchatwebnotificationicon",level:4},{value:"<strong>webchat/disableWebNotification</strong>",id:"webchatdisablewebnotification",level:4},{value:"<strong>webchat/pushNotification</strong>",id:"webchatpushnotification",level:4},{value:"<strong>Settings of the social link panel</strong>",id:"settings-of-the-social-link-panel",level:3},{value:"<strong>webchat/socialLinks</strong>",id:"webchatsociallinks",level:4},{value:"<strong>webchat/socialLinks/visible</strong>",id:"webchatsociallinksvisible",level:4},{value:"<strong>webchat/socialLinks/buttons</strong>",id:"webchatsociallinksbuttons",level:4},{value:"<strong>WebWidget settings</strong>",id:"webwidget-settings",level:3},{value:"<strong>webchat/WebWidget</strong>",id:"webchatwebwidget",level:4}],p={toc:h},c="wrapper";function u(e){let{components:t,...r}=e;return(0,l.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"structure-of-the-config-file-settingsjson"},"Structure of the config file settings.json"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value")))),(0,l.kt)("h3",{id:"chat-files"},(0,l.kt)("strong",{parentName:"h3"},"Chat Files")),(0,l.kt)("h4",{id:"filename"},(0,l.kt)("strong",{parentName:"h4"},"filename")),(0,l.kt)("p",null,"Chat widget core (JavaScript file)"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'"../../threadswidget-6.8.0.min.js"\n')),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"connecting-to-edna-chat-center"},(0,l.kt)("strong",{parentName:"h3"},"Connecting to edna Chat Center")),(0,l.kt)("h4",{id:"webchatpackage-webchatuid"},(0,l.kt)("strong",{parentName:"h4"},"webchat/package, webchat/uid")),(0,l.kt)("p",null,"edna API settings"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"none\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatappmarker"},(0,l.kt)("strong",{parentName:"h4"},"webchat/appMarker")),(0,l.kt)("p",null,"Application ID. It is used to work with multiple applications within the same channel."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"none\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatcheckurl"},(0,l.kt)("strong",{parentName:"h4"},"webchat/checkURL")),(0,l.kt)("p",null,"Address of the service that checks availability of the network connection and the push platform."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/favicon.ico\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatdatastore"},(0,l.kt)("strong",{parentName:"h4"},"webchat/datastore")),(0,l.kt)("p",null,"File storage address"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"none\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatbackendrooturl"},(0,l.kt)("strong",{parentName:"h4"},"webchat/backend/rootUrl")),(0,l.kt)("p",null,"Address for API requests"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"none\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatbackendhistory"},(0,l.kt)("strong",{parentName:"h4"},"webchat/backend/history")),(0,l.kt)("p",null,"Settings of the chat history loading interface."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "count": 20\n}\n')),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatbackendunauthorizedhistory"},(0,l.kt)("strong",{parentName:"h4"},"webchat/backend/unauthorizedHistory")),(0,l.kt)("p",null,"The setting for the chat history loading for the unauthorized zone. The parameters are as follows:",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"p"}," ",(0,l.kt)("inlineCode",{parentName:"em"},"count")," - The number of messages uploaded per one history request",(0,l.kt)("br",null))," ",(0,l.kt)("inlineCode",{parentName:"p"},"enable")," - Enables/disables history storing",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"p"}," ",(0,l.kt)("inlineCode",{parentName:"em"},"cookie")," - The object of setting up the storage of the client ID, used for receiving the message history",(0,l.kt)("br",null))," ",(0,l.kt)("inlineCode",{parentName:"p"},"Max-Age")," - Time in second of history storing for the site users",(0,l.kt)("br",null),(0,l.kt)("br",null),"Some other storage parameters are available as well. For more details on them, refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie"},"official documentation"),"."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "count": 20,\n    "enable": false,\n    "cookie": {\n        "Max-Age": 3600\n    }\n}\n')),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatopengraph"},(0,l.kt)("strong",{parentName:"h4"},"webchat/opengraph")),(0,l.kt)("p",null,"The setting for the OpenGraph protocol, used to get preview of the inline links in the message text."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<URL_TO_DATASTORE>/opengraph?href=\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatxhrwithcredentials"},(0,l.kt)("strong",{parentName:"h4"},"webchat/xhrWithCredentials")),(0,l.kt)("p",null,"Allow XMLHttpRequest.withCredentials"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"false\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"ws-settings"},(0,l.kt)("strong",{parentName:"h3"},"WS Settings")),(0,l.kt)("h4",{id:"webchatwebsocket"},(0,l.kt)("strong",{parentName:"h4"},"webchat/websocket")),(0,l.kt)("p",null,"Websocket server address"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"none\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatwsreconnecttype"},(0,l.kt)("strong",{parentName:"h4"},"webchat/wsReconnectType")),(0,l.kt)("p",null,"A way to reconnect WebSocket in case the connection is lost. The options are:",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"p"}," 0 - Reconnect automatically (default)",(0,l.kt)("br",null))," 1 - reconnect when a user sends a message"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"0\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatwsmaxretries"},(0,l.kt)("strong",{parentName:"h4"},"webchat/wsMaxRetries")),(0,l.kt)("p",null,"Number of WebSocket reconnection attempts"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"30\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatwsretrytimeoutms"},(0,l.kt)("strong",{parentName:"h4"},"webchat/wsRetryTimeoutMs")),(0,l.kt)("p",null,"The initial time between WebSocket reconnection attempts (ms). Each new attempt doubles the previous time."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"none\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"chat-availability-settings"},(0,l.kt)("strong",{parentName:"h3"},"Chat availability settings")),(0,l.kt)("h4",{id:"webchatisunavailableonstart"},(0,l.kt)("strong",{parentName:"h4"},"webchat/isUnavailableOnStart")),(0,l.kt)("p",null,"After loading the page, the chat will be hidden, except when the client had an active thread"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"false\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatschedule"},(0,l.kt)("strong",{parentName:"h4"},"webchat/schedule")),(0,l.kt)("p",null,"Chat availability settings"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "interval": 1000\n}\n')),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatscheduleinterval"},(0,l.kt)("strong",{parentName:"h4"},"webchat/schedule/interval")),(0,l.kt)("p",null,"The frequency (in milliseconds) with which changes to the ",(0,l.kt)("strong",{parentName:"p"},"Chat Mode")," setting are displayed in the interface (the setting is performed in the admin WP). The changes will be displayed no more than once during the specified period, even if during this period the change to the ",(0,l.kt)("strong",{parentName:"p"},"Chat Mode")," setting occurs several times - all intermediate events will be ignored."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"1000\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatactivepages"},(0,l.kt)("strong",{parentName:"h4"},"webchat/activePages")),(0,l.kt)("p",null,"Array of the website addresses where the chat widget is enabled"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[]\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatiscontainerhidden"},(0,l.kt)("strong",{parentName:"h4"},"webchat/isContainerHidden")),(0,l.kt)("p",null,"The value that manages the visibility of the chat start button. For details on managing the visibility of the main chat window, see the ",(0,l.kt)("strong",{parentName:"p"},"Managing widget visibility")," section"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"false\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"chat-behavior-settings"},(0,l.kt)("strong",{parentName:"h3"},"Chat behavior settings")),(0,l.kt)("h4",{id:"webchatdisableclientvalidation"},(0,l.kt)("strong",{parentName:"h4"},"webchat/disableClientValidation")),(0,l.kt)("p",null,"A setting that allows you to disable client id validation."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"false\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatmaximizeoninit"},(0,l.kt)("strong",{parentName:"h4"},"webchat/maximizeOnInit")),(0,l.kt)("p",null,"A setting that allows you to automatically expand the chat window when the application is first initialized. The next chat launches will ignore this setting (the last known state will be used). This option only works when using the standard start button. For this, the ",(0,l.kt)("inlineCode",{parentName:"p"},"isContainerHidden")," parameter (see below) must be set to ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"false\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatdisablequoting"},(0,l.kt)("strong",{parentName:"h4"},"webchat/disableQuoting")),(0,l.kt)("p",null,"A setting that disables message quoting (",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"false"),")"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"false\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatdisableformatsimplemessages"},(0,l.kt)("strong",{parentName:"h4"},"webchat/disableFormatSimpleMessages")),(0,l.kt)("p",null,"A setting that disables formatting for messages (all except bot messages that contain markdown) (",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"false"),")"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"false\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatenableinlinemediaplayers"},(0,l.kt)("strong",{parentName:"h4"},"webchat/enableInlineMediaPlayers")),(0,l.kt)("p",null,"A setting that enables the built-in player to play media attachments in the chat area (",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"false"),")"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"true\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchattypinginterval"},(0,l.kt)("strong",{parentName:"h4"},"webchat/typingInterval")),(0,l.kt)("p",null,"Send a notification to the operator about the user typing a message no more often than the specified value (in ms)"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"3000\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatenablevoicemessages"},(0,l.kt)("strong",{parentName:"h4"},"webchat/enableVoiceMessages")),(0,l.kt)("p",null,"Allow clients to record voice messages (make sure the Send button is enabled)"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"false\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatmaxinputlength"},(0,l.kt)("strong",{parentName:"h4"},"webchat/maxInputLength")),(0,l.kt)("p",null,"A setting that allows you to define the maximum length of text in the input field"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"4000\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"localization"},(0,l.kt)("strong",{parentName:"h3"},"Localization")),(0,l.kt)("h4",{id:"webchatlocale"},(0,l.kt)("strong",{parentName:"h4"},"webchat/locale")),(0,l.kt)("p",null,"The chat widget locale. The following options are available: ",(0,l.kt)("inlineCode",{parentName:"p"},"ru"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"en"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"az")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatlocales"},(0,l.kt)("strong",{parentName:"h4"},"webchat/locales")),(0,l.kt)("p",null,"Redefining ",(0,l.kt)("a",{parentName:"p",href:"Setting-up-language-localization"},"localization texts")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'"locales": {}\n')),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"chat-header-settings"},(0,l.kt)("strong",{parentName:"h3"},"Chat header settings")),(0,l.kt)("h4",{id:"webchathidebadbrowserwarning"},(0,l.kt)("strong",{parentName:"h4"},"webchat/hideBadBrowserWarning")),(0,l.kt)("p",null,"A setting that hides ",(0,l.kt)("a",{parentName:"p",href:"Theme_settings#badbrowser"},"warnings")," about a browser that is not supported"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"false\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatchatheader"},(0,l.kt)("strong",{parentName:"h4"},"webchat/chatHeader")),(0,l.kt)("p",null,"Chat ",(0,l.kt)("a",{parentName:"p",href:"Configuration-of-appearance-theme#chatheader"},"header")," settings"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "showOrganisationUnit": false,\n    "hideSearchText": false\n}\n')),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatchatheaderhidesearchtext"},(0,l.kt)("strong",{parentName:"h4"},"webchat/chatHeader/hideSearchText")),(0,l.kt)("p",null,"A setting that disables the display of text in the chat header displayed when searching for an operator"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"false\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatchatheadershoworganisationunit"},(0,l.kt)("strong",{parentName:"h4"},"webchat/chatHeader/showOrganisationUnit")),(0,l.kt)("p",null,"A setting that enables displaying the department of the connected operator in the chat header"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"false\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"welcome-form-and-feedback-form-settings"},(0,l.kt)("strong",{parentName:"h3"},"Welcome form and feedback form settings")),(0,l.kt)("h4",{id:"webchathidewelcome"},(0,l.kt)("strong",{parentName:"h4"},"webchat/hideWelcome")),(0,l.kt)("p",null,"A setting that disables the display of the welcome form"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"false\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatwelcomeform"},(0,l.kt)("strong",{parentName:"h4"},"webchat/welcomeForm")),(0,l.kt)("p",null,"Contact form settings in the welcome form. The visibility of the welcome form (the suggestion for the client to introduce themselves) is configured using the ",(0,l.kt)("inlineCode",{parentName:"p"},"pre.text")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"pre.notice")," parameters.",(0,l.kt)("br",null),"For the form, you can use any set of fields available: phone, email, client's name. If you do not configure it otherwise, the form contains the full set of these parameters. For each field, the ",(0,l.kt)("inlineCode",{parentName:"p"},"visible")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"required")," values are set, meaning that the fields are visible and required.",(0,l.kt)("br",null),(0,l.kt)("br",null),"You can configure a mask for the phone number as follows:",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"p"}," The Latin symbol ",(0,l.kt)("inlineCode",{parentName:"em"},"X")," is used to determine the position of the digits;",(0,l.kt)("br",null))," For the digit positions that are optional, the Latin character ",(0,l.kt)("inlineCode",{parentName:"p"},"Y")," is used (the optional positions are only allowed at the end of the mask).",(0,l.kt)("br",null),(0,l.kt)("br",null),"For example:",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"p"},' A string "+7 (XXX) XXX-XX-XX" sets the "+7 (',(0,l.kt)("strong",{parentName:"em"},(0,l.kt)("em",{parentName:"strong"},") ")),"-",(0,l.kt)("strong",{parentName:"em"},"-"),'" mask',(0,l.kt)("br",null)),' A sting "8 (XX) XXX-XX-YY" sets the "8 (',(0,l.kt)("strong",{parentName:"p"},") _"),"-",(0,l.kt)("strong",{parentName:"p"},"-"),'" mask, where 2 last positions are optional.',(0,l.kt)("br",null),(0,l.kt)("br",null),"If the mask is not set, by default, only digits are allowed with no separators. The field length is limited to 15 digits.",(0,l.kt)("br",null),"Errors in filling in fields are highlighted."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "pre": {\n        "text": true,\n        "notice": true\n    },\n    "phone": {\n        "visible": true,\n        "required": false,\n        "mask": "+7 (XXX) XXX-XX-XX"\n    },\n    "email": {\n        "visible": true,\n        "required": true\n    },\n    "name": {\n        "visible": true,\n        "required": false\n    }\n}\n')),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatinactivityform"},(0,l.kt)("strong",{parentName:"h4"},"webchat/inactivityForm")),(0,l.kt)("p",null,"Settings of the form displayed in the chat unavailability mode (image 2). You can create your own set of fields from the available ones (phone, e-mail, client name). Also, in this section, you can change the text displayed above the form and after submitting the form."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "phone": true,\n    "email": true,\n    "name": true\n}\n')),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"clients-data"},(0,l.kt)("strong",{parentName:"h3"},"Client's data")),(0,l.kt)("h4",{id:"webchatclientid"},(0,l.kt)("strong",{parentName:"h4"},"webchat/clientId")),(0,l.kt)("p",null,"The name of the property of the ",(0,l.kt)("inlineCode",{parentName:"p"},"window")," object that contains the ID of the authorized user"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'"clientId"\n')),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatclientdata"},(0,l.kt)("strong",{parentName:"h4"},"webchat/clientData")),(0,l.kt)("p",null,"The name of the property of the ",(0,l.kt)("inlineCode",{parentName:"p"},"window")," object that contains the client data of the authorized user"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'"clientData"\n')),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatextendedauth"},(0,l.kt)("strong",{parentName:"h4"},"webchat/extendedAuth")),(0,l.kt)("p",null,"Extended authorization parameters. For more details, refer to the ",(0,l.kt)("a",{parentName:"p",href:"Widget-installation#extended-authorization-optional"},"Widget installation")," article."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"{}\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatsignature"},(0,l.kt)("strong",{parentName:"h4"},"webchat/signature")),(0,l.kt)("p",null,"The name of the property of the ",(0,l.kt)("inlineCode",{parentName:"p"},"window")," object that contains a digital signature of the authorized user"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'"signature"\n')),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"settings-of-web-and-push-notifications"},(0,l.kt)("strong",{parentName:"h3"},"Settings of web and push notifications")),(0,l.kt)("h4",{id:"webchatwebnotification"},(0,l.kt)("strong",{parentName:"h4"},"webchat/webNotification")),(0,l.kt)("p",null,"Notification settings (image 3)"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "title": "",\n    "icon": ""\n}\n')),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatwebnotificationtitle"},(0,l.kt)("strong",{parentName:"h4"},"webchat/webNotification/title")),(0,l.kt)("p",null,"Custom notification header"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"none\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatwebnotificationicon"},(0,l.kt)("strong",{parentName:"h4"},"webchat/webNotification/icon")),(0,l.kt)("p",null,"Custom notification icon in the base64 format (JPG/PNG)"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"none\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatdisablewebnotification"},(0,l.kt)("strong",{parentName:"h4"},"webchat/disableWebNotification")),(0,l.kt)("p",null,"Notification request setting (",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"false"),")"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"false\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatpushnotification"},(0,l.kt)("strong",{parentName:"h4"},"webchat/pushNotification")),(0,l.kt)("p",null,"Push notification setting. To enable push notifications, set ",(0,l.kt)("inlineCode",{parentName:"p"},"enable:true")," and fill in the ",(0,l.kt)("inlineCode",{parentName:"p"},"firebaseConfig")," section with the details of your project in ",(0,l.kt)("a",{parentName:"p",href:"https://console.firebase.google.com/u/0/"},"Firebase"),". For more details, refer to the ",(0,l.kt)("strong",{parentName:"p"},"Getting Started")," article."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "enable": "false",\n    "firebaseConfig": {}\n}\n')),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"settings-of-the-social-link-panel"},(0,l.kt)("strong",{parentName:"h3"},"Settings of the social link panel")),(0,l.kt)("h4",{id:"webchatsociallinks"},(0,l.kt)("strong",{parentName:"h4"},"webchat/socialLinks")),(0,l.kt)("p",null,"Settings of the social link panel"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "visible": false,\n    "buttons": [\n        {\n            "url": "https://vk.com/",\n            "tooltip": "VK",\n            "image": "http://..."\n        }\n    ]\n}\n')),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatsociallinksvisible"},(0,l.kt)("strong",{parentName:"h4"},"webchat/socialLinks/visible")),(0,l.kt)("p",null,"A setting that enables/disables the social link panel"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"false\n")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"webchatsociallinksbuttons"},(0,l.kt)("strong",{parentName:"h4"},"webchat/socialLinks/buttons")),(0,l.kt)("p",null,"Social link panel buttons. A collection of objects, each of which contains three properties: ",(0,l.kt)("inlineCode",{parentName:"p"},"url")," (link), ",(0,l.kt)("inlineCode",{parentName:"p"},"tooltip")," (hover hint), and ",(0,l.kt)("inlineCode",{parentName:"p"},"image")," (link to an image or a ",(0,l.kt)("a",{parentName:"p",href:"http://base64.resampled.ru/"},"data: image")," URL)"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'[\n    {\n        "url": "https://vk.com/",\n        "tooltip": "VK",\n        "image": "http://..."\n    }\n]\n')),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"webwidget-settings"},(0,l.kt)("strong",{parentName:"h3"},"WebWidget settings")),(0,l.kt)("h4",{id:"webchatwebwidget"},(0,l.kt)("strong",{parentName:"h4"},"webchat/WebWidget")),(0,l.kt)("p",null,"Settings of the space in the chat area allocated for WebWidget",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"p"}," ",(0,l.kt)("inlineCode",{parentName:"em"},"url")," - URL that is opened when the widget is clicked (required).",(0,l.kt)("br",null))," ",(0,l.kt)("inlineCode",{parentName:"p"},"image")," - Image URL or the image's ",(0,l.kt)("a",{parentName:"p",href:"http://base64.resampled.ru/"},"data: URL")," (required)"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"none\n")),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Img. 1. Message after sending contact data",src:a(96449).Z,width:"360",height:"540"})),(0,l.kt)("p",null,"Img. 1. Message after sending contact data"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Img. 2. Out-of-hours feedback form",src:a(38434).Z,width:"360",height:"540"})),(0,l.kt)("p",null,"Img. 2. Out-of-hours feedback form"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u0420\u0438\u0441. 3. Browser notification",src:a(7176).Z,width:"388",height:"152"})),(0,l.kt)("p",null,"Img. 3. Browser notification"))}u.isMDXComponent=!0},38434:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/InactivityForm-7436b1d752a5e550660d8416ed003920.png"},7176:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/WebNotification-e27595c331b7164c0c2fa408fa58aa11.png"},96449:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/WelcomeSend-ec76032413fe34eb0a2a5db55b08df65.png"}}]);