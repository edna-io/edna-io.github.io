"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[44545],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=p(t),g=a,m=d["".concat(s,".").concat(g)]||d[g]||c[g]||l;return t?i.createElement(m,o(o({ref:n},u),{},{components:t})):i.createElement(m,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=g;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r[d]="string"==typeof e?e:a,o[1]=r;for(var p=2;p<l;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},34010:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var i=t(87462),a=(t(67294),t(3905));const l={sidebar_position:1},o="Advanced Settings",r={unversionedId:"advanced/advanced",id:"version-4.18.0/advanced/advanced",title:"Advanced Settings",description:"SDK Initialization",source:"@site/i18n/en/docusaurus-plugin-content-docs-android/version-4.18.0/advanced/advanced.md",sourceDirName:"advanced",slug:"/advanced/",permalink:"/en/android/4.18.0/advanced/",draft:!1,tags:[],version:"4.18.0",lastUpdatedAt:1688103326,formattedLastUpdatedAt:"Jun 30, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mainSidebar",previous:{title:"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",permalink:"/en/android/4.18.0/category/\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0435-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"},next:{title:"Appearance and Behavior Customization",permalink:"/en/android/4.18.0/advanced/ui"}},s={},p=[{value:"SDK Initialization",id:"sdk-initialization",level:2},{value:"Configuring Client",id:"configuring-client",level:3},{value:"Client Logout",id:"client-logout",level:3},{value:"Tracking Number of Unread Messages",id:"tracking-number-of-unread-messages",level:3},{value:"Setting Priority for Notification Channel",id:"setting-priority-for-notification-channel",level:3},{value:"Push Notifications Tap-Through and Integration of Several Chats in One App",id:"push-notifications-tap-through-and-integration-of-several-chats-in-one-app",level:3},{value:"Using Styles",id:"using-styles",level:3},{value:"Sending Messages",id:"sending-messages",level:3},{value:"SSL Pinning",id:"ssl-pinning",level:2},{value:"Timeout Customization",id:"timeout-customization",level:2},{value:"Using Internal Deeplinks",id:"using-internal-deeplinks",level:3},{value:"Configuring Backup for App",id:"configuring-backup-for-app",level:2},{value:"Logger",id:"logger",level:2}],u=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",n)},d=u("Tabs"),c=u("TabItem"),g={toc:p},m="wrapper";function h(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,i.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"advanced-settings"},"Advanced Settings"),(0,a.kt)("h2",{id:"sdk-initialization"},"SDK Initialization"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"ThreadsLib.init(ConfigBuilder configBuilder)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public static final class ConfigBuilder {\n    @NonNull\n    private Context context;\n    @NonNull\n    private PendingIntentCreator pendingIntentCreator = (context1, appMarker) -> {\n     \n    };\n    @Nullable\n    private UnreadMessagesCountListener unreadMessagesCountListener = null;\n\n    private boolean isDebugLoggingEnabled = false;\n\n    private int historyLoadingCount = 50;\n\n    public ConfigBuilder(@NonNull Context context) {}\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"historyLoadingCount"),"\xa0- Numbers of messages that are loaded when requesting the chat history (default: 50)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"isDebugLoggingEnabled"),"\xa0- Indicates whether to log the message debug (default: false)"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The only required parameter is\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"context"),".")),(0,a.kt)("h3",{id:"configuring-client"},"Configuring Client"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"ThreadsLib.initUser(UserInfoBuilderuserInfo)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public final class UserInfoBuilder {\n    @NonNull\n    String clientId;\n    @Nullable\n    String authToken;\n    @Nullable\n    String authSchema;\n    @Nullable\n    String clientIdSignature;\n    @Nullable\n    String userName;\n    @Nullable\n    String data;\n    @Nullable\n    String appMarker;\n    /**\n        * true if client id is encrypted\n        */\n    boolean clientIdEncrypted = false;\n\n    public UserInfoBuilder(@NonNull String clientId) {}\n}\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The only required parameter is clientId.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clientId"),"\xa0- Client's unique ID. This parameter is required."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"authToken"),"\xa0- String that will be passed in the Authorization http header."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"authSchema"),"\xa0- String that will be passed in the X-Auth-Schema http header."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clientIdSignature"),"\xa0- Authorization signature clientId. The signature must be generated on your authorization server based on clientId using the RSA private key, then encrypted in Base64. For more details, refer to the backend documentation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"userName"),"\xa0- Client's name (can be empty)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"data"),"\xa0-  JSON string with custom client data. The following parameters will be displayed in general client info:\nExample:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Name Surname",\n  "phone": "+7-999-999-99-99",\n  "email": "e@mail.com",\n  "customField":"customValue"\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"appMarker"),"\xa0- App identifier. edna Android supports connecting several apps to the same server. For more details, refer to\xa0",(0,a.kt)("a",{parentName:"li",href:"/android/advanced/ui"},"Appearance and Behavior Configuration"),"). For that, you need to configure the identifier on the server and in the apps. Any unique string can be used as\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"appMarker"),".\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"appMarker"),"\xa0must be the same for the corresponding Android and iOS apps."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clientIdEncrypted"),"\xa0-  Flag indicating that\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"clientId"),"\xa0is passed encrypted.")),(0,a.kt)("h3",{id:"client-logout"},"Client Logout"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"ThreadsLib.logoutClient(@NonNull final String clientId)\n")),(0,a.kt)("p",null,"Use it for when the client logs out (i.e., when the backend stops trying to deliver messages for this client to the device). "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clientId"),"\xa0- Unique client ID")),(0,a.kt)("h3",{id:"tracking-number-of-unread-messages"},"Tracking Number of Unread Messages"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"unreadMessagesCountListener"),"\xa0- Listener of the number of unread messages"),(0,a.kt)("p",null,"To subscribe to the changes in the number of unread messages, set a listener as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"ConfigBuilder.setUnreadMessagesCountListener(new ThreadsLib.UnreadMessagesCountListener() {\n        @Override\n        public void onUnreadMessagesCountChanged(int count) {\n            // Do the necessary actions\n        }\n});\n")),(0,a.kt)("h3",{id:"setting-priority-for-notification-channel"},"Setting Priority for Notification Channel"),(0,a.kt)("p",null,"Starting with API 26, you can set a priority for the notification channel. For more details, refer here: ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/develop/ui/views/notifications/channels"},"https://developer.android.com/develop/ui/views/notifications/channels"),".\nIn the library, you can configure them using the ",(0,a.kt)("inlineCode",{parentName:"p"},"setNotificationImportance(NotificationManager.IMPORTANCE_...)")," method when configuring the builder:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"ConfigBuilder(this).setNotificationImportance(NotificationManager.IMPORTANCE_HIGH)\n")),(0,a.kt)("h3",{id:"push-notifications-tap-through-and-integration-of-several-chats-in-one-app"},"Push Notifications Tap-Through and Integration of Several Chats in One App"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pendingIntentCreator"),"\xa0- creator of the push tap-through handler intent"),(0,a.kt)("p",null,"If the user tapped the push notification of the library in the system notifications area, the main screen of the library - ChatActivity - will be opened. To change this behavior, you can configure the creation of your own PendingIntent."),(0,a.kt)("p",null,"To do this, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"ConfigBuilder.setPendingIntentCreator(ThreadsLib.PendingIntentCreator pendingIntentCreator)"),"\xa0method in application of your application."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"ConfigBuilder.setPendingIntentCreator(new ThreadsLib.PendingIntentCreator() {\n            @Override\n            public PendingIntent createPendingIntent(Context context, String appMarker) {\n                if (!TextUtils.isEmpty(appMarker)) {\n                    //Start the appropriate chat according to appMarker\n                }\n});\n")),(0,a.kt)("p",null,"To integrate several chats in the same app, see the appMarker in the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"createPendingIntent")," app. Use it to specify which chat needs to be opened."),(0,a.kt)("p",null,"To implement a multi-chat, set\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"clientId")," and\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"appMarker")," before you launch the current chat. For example, for chat 1 to launch:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"ThreadsLib.initUser(\n    new UserInfoBuilder(clientId1)\n        .setAppMarker(appMarker1)\n)\n//Configure design & behavior for chat 1\n")),(0,a.kt)("p",null,"For chat 2 to launch:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"ThreadsLib.initUser(\n    new UserInfoBuilder(clientId2)\n        .setAppMarker(appMarker2)\n)\n//Configure design & behavior for chat 2\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"}," ",(0,a.kt)("strong",{parentName:"p"},"Important:"),"\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"clientId1"),"\xa0and\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"clientid2"),"\xa0must be different. Currently, multi-chat with the same ",(0,a.kt)("inlineCode",{parentName:"p"},"clientId")," is not supported out-of-the-box. However, implementing a multi-chat with one client is possible. To do this, contact your implementation manager.")),(0,a.kt)("h3",{id:"using-styles"},"Using Styles"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"ThreadsLib.applyChatStyle(ChatStyle chatStyle)\n")),(0,a.kt)("p",null,"Use styles to customize the chat appearance. For more details, refer to\xa0",(0,a.kt)("a",{parentName:"p",href:"/android/advanced/ui"},"Appearance and Behavior Configuration")),(0,a.kt)("h3",{id:"sending-messages"},"Sending Messages"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"ThreadsLib.sendMessage(@Nullable String message, @Nullable File file)\n")),(0,a.kt)("p",null,"Use it to send any message from on behalf of the client. At least one of the parameters -  message \u0438\u043b\u0438 file - must not be null. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"message"),"\xa0- Message text"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"file"),"\xa0- File")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The default server settings allow you to send files up to 30 MB.")),(0,a.kt)("h2",{id:"ssl-pinning"},"SSL Pinning"),(0,a.kt)("p",null,"It allows you to use a specified list of certificates to check whether they match the certificates on the server. "),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"When utilizing this functionality, we do not recommend using only one certificate. If it is revoked or expired, SDK will stop connecting to the server. Use backup certificates and update them timely.")),(0,a.kt)("p",null,"To enable SSL pinning, you need to:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Place the public certificates in the ",(0,a.kt)("strong",{parentName:"li"},"res/raw")," folder."),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("inlineCode",{parentName:"li"},"Application")," class in the ",(0,a.kt)("inlineCode",{parentName:"li"},"ConfigBuilder")," initialization directory, add the list of certificates. For example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},".certificateRawResIds(Collections.singletonList(R.raw.crt));\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the manifest, register the network config. For example:")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'android:networkSecurityConfig="@xml/network_security_config"')),(0,a.kt)("p",null,"In the contents of the configuration file, you need to specify or add a network profile. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<network-security-config> \n    <domain-config cleartextTrafficPermitted="false"> \n        <domain includeSubdomains="true">your_domain/</domain> \n        <trust-anchors> \n            <certificates src="@raw/crt"/> \n        </trust-anchors> \n    </domain-config> \n</network-security-config>\n')),(0,a.kt)("h2",{id:"timeout-customization"},"Timeout Customization"),(0,a.kt)("p",null,"For timeout customization of threads, to ",(0,a.kt)("inlineCode",{parentName:"p"},"ConfigBuilder"),", the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"requestConfig(final RequestConfig requestConfig)")," method has been added."),(0,a.kt)("p",null,"RequestConfig contains the following fields with default settings:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"socketClientSettings"),"\xa0(type SocketClientSettings) - Socket connection settings\xa0"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"picassoHttpClientSettings"),"\xa0(type HttpClientSettings) - HTTP connection settings for the Picasso image download library\xa0"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"authHttpClientSettings"),"\xa0(type HttpClientSettings) - HTTP connection settings for authorization\xa0"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"threadsApiHttpClientSettings"),"\xa0(type HttpClientSettings) - HTTP connection settings for the Chat Center server API ")),(0,a.kt)("p",null,"SocketClientSettings contains the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"resendIntervalMillis"),"\xa0- Interval of the repeated attempt to send the message"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"resendPingIntervalMillis"),"\xa0- Interval of requests to maintain an active connection (",(0,a.kt)("inlineCode",{parentName:"li"},"OkHttpClient.Builder().pingInterval()"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"connectTimeoutMillis"),"\xa0- Timeout for establishing a new connection (",(0,a.kt)("inlineCode",{parentName:"li"},"OkHttpClient.Builder().connectTimeout()"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"readTimeoutMillis"),"\xa0- Read operation timeout for a new connection (",(0,a.kt)("inlineCode",{parentName:"li"},"OkHttpClient.Builder().readTimeout()"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"writeTimeoutMillis"),"\xa0- Timeout of write operations for a new connection (",(0,a.kt)("inlineCode",{parentName:"li"},"OkHttpClient.Builder().writeTimeout()"),")")),(0,a.kt)("p",null,"HttpClientSettings contains the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"connectTimeoutMillis"),"\xa0- Timeout for establishing a new connection (",(0,a.kt)("inlineCode",{parentName:"li"},"OkHttpClient.Builder().connectTimeout()"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"readTimeoutMillis"),"\xa0- Read operation timeout for a new connection (",(0,a.kt)("inlineCode",{parentName:"li"},"OkHttpClient.Builder().readTimeout()"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"writeTimeoutMillis"),"\xa0- Timeout of write operations for a new connection (",(0,a.kt)("inlineCode",{parentName:"li"},"OkHttpClient.Builder().writeTimeout()"),")")),(0,a.kt)("h3",{id:"using-internal-deeplinks"},"Using Internal Deeplinks"),(0,a.kt)("p",null,"The library allows you to use internal deeplinks. For example, if there is text in the following format is in the message:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"earth://some.params?code={code}")),(0,a.kt)("p",null,"And if you create Activity that will be launched by \u0410ction.VIEW, then the specified activity will launch when the link is tapped. For that, specify filters for your activity:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<intent-filter>\n    <action android:name="android.intent.action.VIEW" />\n    <category android:name="android.intent.category.DEFAULT" />\n    <category android:name="android.intent.category.BROWSABLE" />\n    <data android:scheme="earth"\n        android:host="*" />\n</intent-filter>\n')),(0,a.kt)("h2",{id:"configuring-backup-for-app"},"Configuring Backup for App"),(0,a.kt)("p",null,"The library uses the following setting: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<application  \n  android:fullBackupContent="@xml/backup_rules">\n  ...\n </application>\n')),(0,a.kt)("p",null,"The contents of this file is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<full-backup-content>  \n   <exclude domain="sharedpref" path="im.threads.internal.utils.EncryptedPrefStore.xml"/>  \n</full-backup-content>\n')),(0,a.kt)("p",null,"This entry is required so that encrypted ",(0,a.kt)("inlineCode",{parentName:"p"},"SharedPreferences")," do not remain in the device's memory after the app is reinstalled.\nIf you use your own ",(0,a.kt)("inlineCode",{parentName:"p"},"fullBackupContent")," file, you need to add ",(0,a.kt)("inlineCode",{parentName:"p"},"exclude")," that is defined on our side to your file and override the file with yours:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<application  \n  android:fullBackupContent="@xml/your_backup_rules"\n  tools:replace="android:fullBackupContent">\n  ...\n </application>\n')),(0,a.kt)("p",null,"Other SDKs might use the ",(0,a.kt)("inlineCode",{parentName:"p"},"android:fullBackupContent")," setting as well. In this case, you need to review which exceptions are registered in these SDKs and make a shared file. For example, Vungle and AppsFlyer have their own ",(0,a.kt)("inlineCode",{parentName:"p"},"fullBackupContent")," settings. Their exceptions are documented as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://support.vungle.com/hc/en-us/articles/360047780372#vungle-exclusion-rules-0-11"},"Vungle"),"  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://support.appsflyer.com/hc/en-us/articles/207032126-Android-SDK-integration-for-developers#integration-backup-rules"},"AppsFlyer"))),(0,a.kt)("p",null,"To merge their settings with the ones we have, the file should look as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<?xml version="1.0" encoding="utf-8"?>\n<full-backup-content>\n        <exclude domain="sharedpref" path="appsflyer-data"/>\n        <exclude domain="file" path="vungle" />\n        <exclude domain="file" path="vungle_cache" />\n        <exclude domain="external" path="vungle_cache" />\n        <exclude domain="database" path="vungle_db" />\n        <exclude domain="sharedpref" path="com.vungle.sdk.xml" />\n        <exclude domain="sharedpref" path="im.threads.internal.utils.EncryptedPrefStore.xml"/>\n</full-backup-content>\n')),(0,a.kt)("h2",{id:"logger"},"Logger"),(0,a.kt)("p",null,"The library uses its own logger that supports recording to a file. It is disabled by default, meaning the logs will not be recorded to a file or to the console.\nTo enable the logs in the library, you need to enable ",(0,a.kt)("inlineCode",{parentName:"p"},"enableLogging")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"ConfigBuilder")," and pass the logger builder as follows:"),(0,a.kt)(d,{groupId:"ios-language",defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},(0,a.kt)(c,{value:"kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"val configBuilder = ConfigBuilder(this) // this - app context\n            .enableLogging(loggerConfig)\n"))),(0,a.kt)(c,{value:"java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"ConfigBuilder configBuilder = new ConfigBuilder(this) // this - app context\n            .enableLogging(loggerConfig)\n")))),(0,a.kt)("p",null,"To create a logger builder, you need to complete the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"LoggerConfig.Builder(this) // this - app context\n")),(0,a.kt)("p",null,"To enable recording logs to a file, you need to enable this as a feature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"logToFile()\n")),(0,a.kt)("p",null,"Then, you need to specify the log directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'dir(File(this.filesDir, "logs"))\n')),(0,a.kt)("p",null,"The logger supports two types of logging. It can be logging into either a single file or to several files, the name of which will be equal to the start time of the app session. For that, ",(0,a.kt)("inlineCode",{parentName:"p"},"LoggerRetentionPolicy")," is used with the ",(0,a.kt)("inlineCode",{parentName:"p"},"FILE_COUNT")," value used for sessions and ",(0,a.kt)("inlineCode",{parentName:"p"},"TOTAL_SIZE")," used for recording into a single file.\nThe logging method is specified as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"retentionPolicy(LoggerRetentionPolicy.TOTAL_SIZE)\n")),(0,a.kt)("p",null,"If you used ",(0,a.kt)("inlineCode",{parentName:"p"},"LoggerRetentionPolicy.TOTAL_SIZE"),", then, to limit the max size, specify the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"maxTotalSize(N) // N - size in bytes\n")),(0,a.kt)("p",null,"Also, in case with ",(0,a.kt)("inlineCode",{parentName:"p"},"LoggerRetentionPolicy.TOTAL_SIZE"),", you can enter your own name for the file (by default, it will be the start time of the first session). For that, specify the following: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'fileName("your_file_name")\n')),(0,a.kt)("p",null,"If you used ",(0,a.kt)("inlineCode",{parentName:"p"},"LoggerRetentionPolicy.FILE_COUNT"),", then, to limit the number of files, specify the following: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"maxFileCount(N) // N - number of files\n")),(0,a.kt)("p",null,"To define the minimum level for logs (default - LoggerLevel.VERBOSE), specify the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"minLogLevel(logLevel) // logLevel - your minimum level for logs\n")),(0,a.kt)("p",null,"At the end, you need to call ",(0,a.kt)("inlineCode",{parentName:"p"},"build()"),". Configuration example:"),(0,a.kt)(d,{groupId:"ios-language",defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},(0,a.kt)(c,{value:"kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'val loggerConfig = LoggerConfig.Builder(this)\n            .logToFile()\n            .dir(File(this.filesDir, "logs"))\n            .retentionPolicy(LoggerRetentionPolicy.TOTAL_SIZE)\n            .maxTotalSize(5242880)\n            .build()\n'))),(0,a.kt)(c,{value:"java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'LoggerConfig loggerConfig = new LoggerConfig.Builder(this)\n            .logToFile()\n            .dir(File(this.filesDir, "logs"))\n            .retentionPolicy(LoggerRetentionPolicy.TOTAL_SIZE)\n            .maxTotalSize(5242880)\n            .build()\n')))))}h.isMDXComponent=!0}}]);