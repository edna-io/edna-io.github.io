"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[65182],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?i.createElement(g,l(l({ref:t},d),{},{components:n})):i.createElement(g,l({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33035:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r={sidebar_position:1},l="Advanced Settings",o={unversionedId:"advanced/advanced",id:"version-4.1.0/advanced/advanced",title:"Advanced Settings",description:"SDK Initialization",source:"@site/i18n/en/docusaurus-plugin-content-docs-android/version-4.1.0/advanced/advanced.md",sourceDirName:"advanced",slug:"/advanced/",permalink:"/en/android/4.1.0/advanced/",draft:!1,tags:[],version:"4.1.0",lastUpdatedAt:1688103326,formattedLastUpdatedAt:"Jun 30, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mainSidebar",previous:{title:"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",permalink:"/en/android/4.1.0/category/\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0435-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"},next:{title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0432\u043d\u0435\u0448\u043d\u0435\u0433\u043e \u0432\u0438\u0434\u0430",permalink:"/en/android/4.1.0/advanced/ui"}},s={},p=[{value:"SDK Initialization",id:"sdk-initialization",level:2},{value:"Configuring Client",id:"configuring-client",level:3},{value:"Client Logout",id:"client-logout",level:3},{value:"Tracking Number of Unread Messages",id:"tracking-number-of-unread-messages",level:3},{value:"Push Notifications Tap-Through and Integration of Several Chats in One App",id:"push-notifications-tap-through-and-integration-of-several-chats-in-one-app",level:3},{value:"Using Styles",id:"using-styles",level:3},{value:"Sending Messages",id:"sending-messages",level:3},{value:"SSL Pinning",id:"ssl-pinning",level:2},{value:"Timeout Customization",id:"timeout-customization",level:2},{value:"Using Internal Deeplinks",id:"using-internal-deeplinks",level:3}],d={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"advanced-settings"},"Advanced Settings"),(0,a.kt)("h2",{id:"sdk-initialization"},"SDK Initialization"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"ThreadsLib.init(ConfigBuilder configBuilder)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public static final class ConfigBuilder {\n    @NonNull\n    private Context context;\n    @NonNull\n    private PendingIntentCreator pendingIntentCreator = (context1, appMarker) -> {\n     \n    };\n    @Nullable\n    private UnreadMessagesCountListener unreadMessagesCountListener = null;\n\n    private boolean isDebugLoggingEnabled = false;\n\n    private int historyLoadingCount = 50;\n\n    public ConfigBuilder(@NonNull Context context) {}\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"historyLoadingCount"),"\xa0- Numbers of messages that are loaded when requesting the chat history (default: 50)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"isDebugLoggingEnabled"),"\xa0- Indicates whether to log the message debug (default: false)"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The only required parameter is\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"context"),".")),(0,a.kt)("h3",{id:"configuring-client"},"Configuring Client"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"ThreadsLib.initUser(UserInfoBuilderuserInfo)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public final class UserInfoBuilder {\n    @NonNull\n    String clientId;\n    @Nullable\n    String authToken;\n    @Nullable\n    String authSchema;\n    @Nullable\n    String clientIdSignature;\n    @Nullable\n    String userName;\n    @Nullable\n    String data;\n    @Nullable\n    String appMarker;\n    /**\n        * true if client id is encrypted\n        */\n    boolean clientIdEncrypted = false;\n\n    public UserInfoBuilder(@NonNull String clientId) {}\n}\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The only required parameter is clientId.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clientId"),"\xa0- Client's unique ID. This parameter is required."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"authToken"),"\xa0- String that will be passed in the Authorization http header."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"authSchema"),"\xa0- String that will be passed in the X-Auth-Schema http header."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clientIdSignature"),"\xa0- Authorization signature clientId. The signature must be generated on your authorization server based on clientId using the RSA private key, then encrypted in Base64. For more details, refer to the backend documentation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"userName"),"\xa0- Client's name (can be empty)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"data"),"\xa0-  JSON string with custom client data. The following parameters will be displayed in general client info:\nExample:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Name Surname",\n  "phone": "+7-999-999-99-99",\n  "email": "e@mail.com",\n  "customField":"customValue"\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"appMarker"),"\xa0- App identifier. edna Android supports connecting several apps to the same server. For more details, refer to\xa0",(0,a.kt)("a",{parentName:"li",href:"/android/advanced/ui"},"Appearance and Behavior Configuration"),"). For that, you need to configure the identifier on the server and in the apps. Any unique string can be used as\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"appMarker"),".\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"appMarker"),"\xa0must be the same for the corresponding Android and iOS apps."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clientIdEncrypted"),"\xa0-  Flag indicating that\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"clientId"),"\xa0is passed encrypted.")),(0,a.kt)("h3",{id:"client-logout"},"Client Logout"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"ThreadsLib.logoutClient(@NonNull final String clientId)\n")),(0,a.kt)("p",null,"Use it for when the client logs out (i.e., when the backend stops trying to deliver messages for this client to the device). "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clientId"),"\xa0- Unique client ID")),(0,a.kt)("h3",{id:"tracking-number-of-unread-messages"},"Tracking Number of Unread Messages"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"unreadMessagesCountListener"),"\xa0- Listener of the number of unread messages"),(0,a.kt)("p",null,"To subscribe to the changes in the number of unread messages, set a listener as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"ConfigBuilder.setUnreadMessagesCountListener(new ThreadsLib.UnreadMessagesCountListener() {\n        @Override\n        public void onUnreadMessagesCountChanged(int count) {\n            // Do the necessary actions\n        }\n});\n")),(0,a.kt)("h3",{id:"push-notifications-tap-through-and-integration-of-several-chats-in-one-app"},"Push Notifications Tap-Through and Integration of Several Chats in One App"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pendingIntentCreator"),"\xa0- creator of the push tap-through handler intent"),(0,a.kt)("p",null,"If the user tapped the push notification of the library in the system notifications area, the main screen of the library - ChatActivity - will be opened. To change this behavior, you can configure the creation of your own PendingIntent."),(0,a.kt)("p",null,"To do this, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"ConfigBuilder.setPendingIntentCreator(ThreadsLib.PendingIntentCreator pendingIntentCreator)"),"\xa0method in application of your application."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"ConfigBuilder.setPendingIntentCreator(new ThreadsLib.PendingIntentCreator() {\n            @Override\n            public PendingIntent createPendingIntent(Context context, String appMarker) {\n                if (!TextUtils.isEmpty(appMarker)) {\n                    //Start the appropriate chat according to appMarker\n                }\n});\n")),(0,a.kt)("p",null,"To integrate several chats in the same app, see the appMarker in the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"createPendingIntent")," app. Use it to specify which chat needs to be opened."),(0,a.kt)("p",null,"To implement a multi-chat, set\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"clientId")," and\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"appMarker")," before you launch the current chat. For example, for chat 1 to launch:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"ThreadsLib.initUser(\n    new UserInfoBuilder(clientId1)\n        .setAppMarker(appMarker1)\n)\n//Configure design & behavior for chat 1\n")),(0,a.kt)("p",null,"For chat 2 to launch:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"ThreadsLib.initUser(\n    new UserInfoBuilder(clientId2)\n        .setAppMarker(appMarker2)\n)\n//Configure design & behavior for chat 2\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"}," ",(0,a.kt)("strong",{parentName:"p"},"Important:"),"\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"clientId1"),"\xa0and\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"clientid2"),"\xa0must be different. Currently, multi-chat with the same ",(0,a.kt)("inlineCode",{parentName:"p"},"clientId")," is not supported out-of-the-box. However, implementing a multi-chat with one client is possible. To do this, contact your implementation manager.")),(0,a.kt)("h3",{id:"using-styles"},"Using Styles"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"ThreadsLib.applyChatStyle(ChatStyle chatStyle)\n")),(0,a.kt)("p",null,"Use styles to customize the chat appearance. For more details, refer to\xa0",(0,a.kt)("a",{parentName:"p",href:"/android/advanced/ui"},"Appearance and Behavior Configuration")),(0,a.kt)("h3",{id:"sending-messages"},"Sending Messages"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"ThreadsLib.sendMessage(@Nullable String message, @Nullable File file)\n")),(0,a.kt)("p",null,"Use it to send any message from on behalf of the client. At least one of the parameters -  message \u0438\u043b\u0438 file - must not be null. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"message"),"\xa0- Message text"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"file"),"\xa0- File")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The default server settings allow you to send files up to 30 MB.")),(0,a.kt)("h2",{id:"ssl-pinning"},"SSL Pinning"),(0,a.kt)("p",null,"It allows you to use a specified list of certificates to check whether they match the certificates on the server. "),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"When utilizing this functionality, we do not recommend using only one certificate. If it is revoked or expired, SDK will stop connecting to the server. Use backup certificates and update them timely.")),(0,a.kt)("p",null,"To enable SSL pinning, you need to:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Place the public certificates in the ",(0,a.kt)("strong",{parentName:"li"},"res/raw")," folder."),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("inlineCode",{parentName:"li"},"Application")," class in the ",(0,a.kt)("inlineCode",{parentName:"li"},"ConfigBuilder")," initialization directory, add the list of certificates. For example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},".certificateRawResIds(Collections.singletonList(R.raw.crt));\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the manifest, register the network config. For example:")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'android:networkSecurityConfig="@xml/network_security_config"')),(0,a.kt)("p",null,"In the contents of the configuration file, you need to specify or add a network profile. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<network-security-config> \n    <domain-config cleartextTrafficPermitted="false"> \n        <domain includeSubdomains="true">your_domain/</domain> \n        <trust-anchors> \n            <certificates src="@raw/crt"/> \n        </trust-anchors> \n    </domain-config> \n</network-security-config>\n')),(0,a.kt)("h2",{id:"timeout-customization"},"Timeout Customization"),(0,a.kt)("p",null,"For timeout customization of threads, to ",(0,a.kt)("inlineCode",{parentName:"p"},"ConfigBuilder"),", the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"requestConfig(final RequestConfig requestConfig)")," method has been added."),(0,a.kt)("p",null,"RequestConfig contains the following fields with default settings:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"socketClientSettings"),"\xa0(type SocketClientSettings) - Socket connection settings\xa0"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"picassoHttpClientSettings"),"\xa0(type HttpClientSettings) - HTTP connection settings for the Picasso image download library\xa0"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"authHttpClientSettings"),"\xa0(type HttpClientSettings) - HTTP connection settings for authorization\xa0"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"threadsApiHttpClientSettings"),"\xa0(type HttpClientSettings) - HTTP connection settings for the Chat Center server API ")),(0,a.kt)("p",null,"SocketClientSettings contains the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"resendIntervalMillis"),"\xa0- Interval of the repeated attempt to send the message"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"resendPingIntervalMillis"),"\xa0- Interval of requests to maintain an active connection (",(0,a.kt)("inlineCode",{parentName:"li"},"OkHttpClient.Builder().pingInterval()"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"connectTimeoutMillis"),"\xa0- Timeout for establishing a new connection (",(0,a.kt)("inlineCode",{parentName:"li"},"OkHttpClient.Builder().connectTimeout()"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"readTimeoutMillis"),"\xa0- Read operation timeout for a new connection (",(0,a.kt)("inlineCode",{parentName:"li"},"OkHttpClient.Builder().readTimeout()"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"writeTimeoutMillis"),"\xa0- Timeout of write operations for a new connection (",(0,a.kt)("inlineCode",{parentName:"li"},"OkHttpClient.Builder().writeTimeout()"),")")),(0,a.kt)("p",null,"HttpClientSettings contains the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"connectTimeoutMillis"),"\xa0- Timeout for establishing a new connection (",(0,a.kt)("inlineCode",{parentName:"li"},"OkHttpClient.Builder().connectTimeout()"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"readTimeoutMillis"),"\xa0- Read operation timeout for a new connection (",(0,a.kt)("inlineCode",{parentName:"li"},"OkHttpClient.Builder().readTimeout()"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"writeTimeoutMillis"),"\xa0- Timeout of write operations for a new connection (",(0,a.kt)("inlineCode",{parentName:"li"},"OkHttpClient.Builder().writeTimeout()"),")")),(0,a.kt)("h3",{id:"using-internal-deeplinks"},"Using Internal Deeplinks"),(0,a.kt)("p",null,"The library allows you to use internal deeplinks. For example, if there is text in the following format is in the message:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"earth://some.params?code={code}")),(0,a.kt)("p",null,"And if you create Activity that will be launched by \u0410ction.VIEW, then the specified activity will launch when the link is tapped. For that, specify filters for your activity:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<intent-filter>\n    <action android:name="android.intent.action.VIEW" />\n    <category android:name="android.intent.category.DEFAULT" />\n    <category android:name="android.intent.category.BROWSABLE" />\n    <data android:scheme="earth"\n        android:host="*" />\n</intent-filter>\n')))}c.isMDXComponent=!0}}]);