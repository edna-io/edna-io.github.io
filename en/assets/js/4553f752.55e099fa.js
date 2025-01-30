"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[56631],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=i,m=c["".concat(s,".").concat(u)]||c[u]||h[u]||o;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},62658:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={sidebar_position:3},r="Widget installation",l={unversionedId:"Widget_installation",id:"version-6.11.0/Widget_installation",title:"Widget installation",description:"Widget code",source:"@site/i18n/en/docusaurus-plugin-content-docs-web/version-6.11.0/Widget_installation.md",sourceDirName:".",slug:"/Widget_installation",permalink:"/en/web/6.11.0/Widget_installation",draft:!1,tags:[],version:"6.11.0",lastUpdatedAt:1731393995,formattedLastUpdatedAt:"Nov 12, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"mainSidebar",previous:{title:"Getting Started",permalink:"/en/web/6.11.0/Getting_started"},next:{title:"Structure of edna Web chat SDK",permalink:"/en/web/6.11.0/Structure_of_edna_Web_chat_SDK"}},s={},p=[{value:"Widget code",id:"widget-code",level:3},{value:"Settings file",id:"settings-file",level:3},{value:"Widget configuration",id:"widget-configuration",level:3},{value:"Connection to external edna API and datastore",id:"connection-to-external-edna-api-and-datastore",level:4},{value:"Authorized and unauthorized zones",id:"authorized-and-unauthorized-zones",level:4},{value:"Extended authorization (optional)",id:"extended-authorization-optional",level:3},{value:"Chat launch",id:"chat-launch",level:3}],d={toc:p},c="wrapper";function h(e){let{components:t,...o}=e;return(0,i.kt)(c,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"widget-installation"},"Widget installation"),(0,i.kt)("h3",{id:"widget-code"},"Widget code"),(0,i.kt)("p",null,"On the web page where you want the chat to be displayed, add the following code before the closing tag ",(0,i.kt)("inlineCode",{parentName:"p"},"</body>")," to enable the chat widget:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- BEGIN CHAT {literal} --\x3e\n<script type="text/javascript">\n  !function(e,a){"use strict";window.ThreadsWidget={},e=e||"/settings.json";function n(e,t){const n=setInterval(function(){ThreadsWidget&&!ThreadsWidget.isDummy&&(clearInterval(n),ThreadsWidget[e]&&ThreadsWidget[e].apply(void 0,t))},100)}ThreadsWidget.isDummy=!0,["hideInvite","version","commitHash","showChat","hideChat","onHideChat","onScenarios","onLoad","on","reInit","init","unInit"].forEach(t=>{ThreadsWidget[t]=(...e)=>{n(t,e)}});const t=function(){const i=new XMLHttpRequest;return function(e,t,n,a){i.onreadystatechange=function(){if(4===i.readyState)if(200===this.status)n(i.response);else{if("function"!=typeof a)throw new Error(i.response);a(i)}},i.open(e,t),i.send()}}();function i(t){t.webchat&&(t.webchat.filename=t.filename),a&&"string"==typeof a&&(t.webchat.currentLocale=a),a&&"object"==typeof a&&(a.locale&&"string"==typeof a.locale&&(t.webchat.currentLocale=a.locale),a.unavailable&&"boolean"==typeof a.unavailable&&(t.webchat.isUnavailableOnStart=a.unavailable));try{sessionStorage.setItem("__threadsWidget",JSON.stringify(t.webchat))}catch(e){window.__threadsWidget=JSON.stringify(t.webchat)}if(t.filename){const e=document.createElement("script"),n=(e.type="text/javascript",e.async=!0,e.src=t.filename,document.getElementsByTagName("script")[0]);n?n.parentNode.insertBefore(e,n):document.body.appendChild(e)}else console.error("Invalid bundle")}function o(){t("GET",e+"?rnd="+Math.random(),function(e){const t=JSON.parse(e);i(t)})}"complete"===document.readyState?o():window.addEventListener("DOMContentLoaded",o,!1)}("settings.json",{});\n<\/script>\n\x3c!-- {/literal} END CHAT --\x3e\n')),(0,i.kt)("h3",{id:"settings-file"},"Settings file"),(0,i.kt)("p",null,"Place the ",(0,i.kt)("inlineCode",{parentName:"p"},"settings.json")," file on your website so that this file is available on ",(0,i.kt)("inlineCode",{parentName:"p"},"http(s)://your.site.ru/your/path/to/settings.json"),". We recommend that you place the file to the same directory where the **_.js chat files are located."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"IMPORTANT!"),"\nThe path to the settings file ",(0,i.kt)("inlineCode",{parentName:"p"},"settings.json")," is set at the end of the initialization script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'... ("settings.json")\n')),(0,i.kt)("p",null,"As the value for this parameter, use the absolute path from the root of your website. Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"('/your/path/to/settings.json');\n")),(0,i.kt)("p",null,"If necessary, you can set additional parameters during the initial initialization."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"'/your/path/to/settings.json',\n  {\n    locale: 'en',\n    unavailable: true,\n  };\n")),(0,i.kt)("p",null,"where: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"locale")," - Locale language"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"unavailable")," - Widget unavailability (",(0,i.kt)("inlineCode",{parentName:"li"},"true")," if unavailable). If ",(0,i.kt)("inlineCode",{parentName:"li"},"unavailable")," is set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", the chat will be hidden after the chat page loads, unless the client has an active thread.")),(0,i.kt)("h3",{id:"widget-configuration"},"Widget configuration"),(0,i.kt)("p",null,"The chat settings are stored in the provided ",(0,i.kt)("inlineCode",{parentName:"p"},"settings.json")," file. The file contains file storage connection data, appearance theme settings, connection settings, and API keys you need to use for edna API."),(0,i.kt)("h4",{id:"connection-to-external-edna-api-and-datastore"},"Connection to external edna API and datastore"),(0,i.kt)("p",null,"The settings are unique for each new connection. In the examples of edna SDK they are set to ",(0,i.kt)("inlineCode",{parentName:"p"},'"FIX_ME"')," and you must edit them before the launch. You must do it for the following parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"webchat/package = <application_package>")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"webchat/uid = <application_uid>")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"webchat/websocket = <push server websocket URL>")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"webchat/datastore = <datastore URL>")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"webchat/backend/history = <datastore history URL>")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"webchat/backend/rootUrl = <datastore API URL>"))),(0,i.kt)("p",null,"You will get the values of these parameters from the deployment manager."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," In case of on-premise deployment of edna Datastore, the parameters ",(0,i.kt)("inlineCode",{parentName:"p"},"webchat/datastore"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"webchat/backend/history")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"webchat/backend/rootUrl")," depend on the address of the installed edna Datastore."),(0,i.kt)("h4",{id:"authorized-and-unauthorized-zones"},"Authorized and unauthorized zones"),(0,i.kt)("p",null,"The chat widget can be in one of the two modes:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Guest mode"),". The time of the user session existence are defined by the parameters in ",(0,i.kt)("inlineCode",{parentName:"p"},"settings.json"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"webchat/backend/unauthorizedHistory"),". For example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'{\n  "count": 20,\n  "enable": true,\n  "cookie": {"Max-Age": 15552000}\n}\n')),(0,i.kt)("p",{parentName:"li"},"where:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"count")," - The number of messages uploaded per one history request (the request fulfills when the widget loads and when a user scrolling up in chat body);"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enable")," - Enable/disable history storing;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Max-Age")," - Time in second of history storing for the site users")),(0,i.kt)("p",{parentName:"li"},"The session identifier is stored in cookie, the storing parameters are configured in the ",(0,i.kt)("inlineCode",{parentName:"p"},"webchat/backend/unauthorizedHistory/cookie")," object, where the key corresponds to the specifications of the cookie directives.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Authorized mode"),'. The mode can be activated for an authorized website user by passing the unique user identifier to the chat to create a link "edna client" - "website user". The session of such a user is not linked to the current browser tab, the user will see the chat history on any tab where the chat is open. Set the parameter ',(0,i.kt)("inlineCode",{parentName:"p"},"clientId")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"settings.json")," file in the global JavaScript object ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/ru/docs/Web/API/Window"},"window")," to pass the unique identifier of the authorized user to the chat. Do this before the chat initialization. The string in the ",(0,i.kt)("inlineCode",{parentName:"p"},"settings.json")," (in its simplest form) can look as follows:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"clientId": "clientId",\n')),(0,i.kt)("p",{parentName:"li"},"This way, if you decide to place the unique user identifier in the property of the ",(0,i.kt)("inlineCode",{parentName:"p"},"window")," object, which you decide to name ",(0,i.kt)("inlineCode",{parentName:"p"},"clientId")," (as in the example above), insert the following string before the initialization code:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"window.clientId = 'user identifier';\n")),(0,i.kt)("p",{parentName:"li"},"You can pass additional client data the same way (in the JSON format). This client data will be displayed in the client information in the agent WP. To do this, in the ",(0,i.kt)("inlineCode",{parentName:"p"},"clientData")," parameter of ",(0,i.kt)("inlineCode",{parentName:"p"},"settings.json"),", set the name of the property, in which you will pass the client's details. Usually, the name is left the same - ",(0,i.kt)("inlineCode",{parentName:"p"},"clientData")," - as in the example below:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"clientData": "clientData",\n')),(0,i.kt)("p",{parentName:"li"},"Then, in the global JavaScript object ",(0,i.kt)("inlineCode",{parentName:"p"},"window"),", set the value of this property. To do this, insert the following string before the initialization code:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"window.clientData = `<client data>`;\n")),(0,i.kt)("p",{parentName:"li"},"where ",(0,i.kt)("inlineCode",{parentName:"p"},"<client data>")," is a JSON object converted into a string. As you see in the example, the data is passed in ",(0,i.kt)("inlineCode",{parentName:"p"},"window.clientData"),", as ",(0,i.kt)("inlineCode",{parentName:"p"},"clientData")," was set as the name of the property.\nFollowing is an example of passing the client details that consist of ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"phone"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"email"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"personal_manager"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"customField"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},'window.clientData =\n  \'{"name":"Name Surname","phone":"+7-999-999-99-99","email":"e@mail.com","personal_manager":"login","customField":"customValue"}\';\n')))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE"),": The examples in the SDK contain all necessary settings."),(0,i.kt)("h3",{id:"extended-authorization-optional"},"Extended authorization (optional)"),(0,i.kt)("p",null,"Optionally, you can pass additional parameters in requests to the server. For these settings, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"extendedAuth")," section of the parameters in ",(0,i.kt)("inlineCode",{parentName:"p"},"settings.json"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"dataKey")," parameter is a string that contains the name of the property in the global JavaScript object ",(0,i.kt)("inlineCode",{parentName:"p"},"window")," that stores the object with extended data for authorization.\nThe parameter is optional, its default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"extendedAuth"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"window.extendedAuth = <JSON data>;\n")),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "custom-property": "value for custom header",\n  "token": "some token value",\n  "type": "token type"\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"http.enabled")," parameter enables or disables the extended authorization mode for HTTP(S)-requests (",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),").\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"http.headersMap")," parameter is an object whose keys are the names of the headers passed in HTTP(S)-requests, and their values are the names of the properties from the extended data object. This way, you can configure any number of optional headers."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"extendedAuth": {\n    "dataKey": "extendedAuth",\n    "http": {\n        "enabled": true,\n        "headersMap": {\n            "Header-Name": "custom-property",\n            "X-Auth-Token": "token",\n            "X-Token-Type": "type"\n        }\n    }\n}\n')),(0,i.kt)("p",null,"Example of a request with extended authorization headers:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"GET /some/backend/url\nHost: example.com\nContent-Type: application/json\nHeader-Name: value for custom header\nX-Auth-Token: some token value\nX-Token-Type: token type\n...\n")),(0,i.kt)("h3",{id:"chat-launch"},"Chat launch"),(0,i.kt)("p",null,"Once you save the settings, open the webpage with the tab with the chat in your browser. You will see the chat button in the right bottom corner. Once you click it, the start chat window opens (img. 1)."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Img. 1. Start chat window",src:n(35295).Z,width:"360",height:"540"})),(0,i.kt)("p",null,"Img. 1. Start chat window"))}h.isMDXComponent=!0},35295:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/welcome-7b478cc82d46103d653fbe5cf9f823c3.png"}}]);