"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[65990],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>g});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(i),m=a,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return i?n.createElement(g,o(o({ref:t},p),{},{components:i})):n.createElement(g,o({ref:t},p))}));function g(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=i[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},32140:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=i(87462),a=(i(67294),i(3905));const r={sidebar_position:6},o="Methods and Properties",l={unversionedId:"getting-started/methods",id:"version-4.2.0/getting-started/methods",title:"Methods and Properties",description:"Methods",source:"@site/i18n/en/docusaurus-plugin-content-docs-ios/version-4.2.0/getting-started/methods.md",sourceDirName:"getting-started",slug:"/getting-started/methods",permalink:"/en/ios/4.2.0/getting-started/methods",draft:!1,tags:[],version:"4.2.0",lastUpdatedAt:1697698294,formattedLastUpdatedAt:"Oct 19, 2023",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"mainSidebar",previous:{title:"Configuring Notifications",permalink:"/en/ios/4.2.0/getting-started/notifications"},next:{title:"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",permalink:"/en/ios/4.2.0/category/\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0435-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}},s={},d=[{value:"Methods",id:"methods",level:2},{value:"Integration",id:"integration",level:3},{value:"Methods of Registration and Processing Notifications",id:"methods-of-registration-and-processing-notifications",level:3},{value:"Working with Clients",id:"working-with-clients",level:3},{value:"Creating Chat Screen",id:"creating-chat-screen",level:3},{value:"Tools",id:"tools",level:3},{value:"Programmed Message Sending",id:"programmed-message-sending",level:3},{value:"ThreadsDelegate",id:"threadsdelegate",level:3},{value:"Properties",id:"properties",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Client",id:"client",level:3},{value:"State",id:"state",level:3}],p={toc:d},u="wrapper";function c(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"methods-and-properties"},"Methods and Properties"),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"integration"},"Integration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"(void)configureThreadsGateTransportProtocolWithDelegate:(id<ThreadsDelegate> _Nullable)delegate webSocketURL:(NSURL *)webSocketURL providerUid:(NSString *)providerUid historyURL:(NSURL *)historyURL fileUploadingURL:(NSURL *)fileUploadingURL"),"\xa0- Initial configuration of\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"Threads"),"\xa0with a web socket transport protocol, it needs to be called in AppDelegate. The parameters are as follows:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"delegate"),"\xa0- Threads delegate. Usually, it's AppDelegate."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"webSocketURL"),"\xa0- Web socket URL "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"providerUid"),"\xa0- App identifier"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"historyURL"),"\xa0- URL of history loading "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fileUploadingURL"),"\xa0- URL of uploading files"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"(void)configureWithDelegate:(id<ThreadsDelegate> _Nullable)delegate productionMFMSServer:(BOOL)productionMFMSServer historyURL:(NSURL *)historyURL fileUploadingURL:(NSURL *)fileUploadingURL"),"\xa0-"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"(void)registerApplicationForRemoteNotificationsStandartOptionsWithAuthorizationStatusDenied:(void (^)(void))authorizationStatusDenied completionHandler:(THRRemoteNotificationsRegistrationCompletion _Nonnull)completionHandler"),"\xa0- App registration on the APNS server. The parameters are as follows:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"authorizationStatusDenied"),"\xa0- The block that processes it when users choose to refuse receiving push notifications."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"completionHandler"),"\xa0- App registration completion block on the APNS server.")))),(0,a.kt)("h3",{id:"methods-of-registration-and-processing-notifications"},"Methods of Registration and Processing Notifications"),(0,a.kt)("p",null,"Following are methods of registration and processing notifications, they must be only called in the respective methods of AppDelegate."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"- (void)applicationDidRegisterUserNotificationSettings:(UIUserNotificationSettings *)notificationSettings;\n- (void)applicationDidRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken;\n- (void)applicationDidFailToRegisterForRemoteNotificationsWithError:(NSError *)error;\n- (void)applicationDidReceiveRemoteNotification:(NSDictionary *)userInfo;\n- (void)userNotificationCenter:(UNUserNotificationCenter *)center willPresentNotification:(UNNotification *)notification withCompletionHandler:(void (^)(UNNotificationPresentationOptions options))completionHandler\n- (void)applicationDidReceiveRemoteNotification:(NSDictionary *)userInfo fetchCompletionHandler:(void (^)(THRMessageRecieveState state))completionHandler;\n")),(0,a.kt)("h3",{id:"working-with-clients"},"Working with Clients"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"(void)setClientWithId:(NSString *)id name:(NSString * _Nullable)name appMarker:(NSString * _Nullable)appMarker signature:(NSString *)signature;"),"\xa0- Configuring a client",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"id"),"\xa0- Unique client ID. This parameter is required."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name"),"\xa0- Client's name. This parameter is optional."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"appMarker"),"\xa0- Chat identifier. This parameter is optional, it must be only used for multi-chat. Any unique string can be used as APP_MARKER. APP_MARKER must be the same for the corresponding Android and iOS apps."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"signature"),"\xa0-  Authorization signature clientId. Currently, this parameter is optional, verification is enabled on the Threads server. The signature must be generated on your authorization server based on clientId using the RSA private key, then encrypted in Base64. For the general scheme of working with the signature, refer to the backend documentation."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"(void) logout"),"\xa0- Log out the current client - the app will stop receiving messages for this client.\xa0",(0,a.kt)("strong",{parentName:"li"},"Important"),": Upon\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"clientId"),"\xa0change, automatic logout is not executed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"(void) logout: (NSString*) clientId"),"\xa0- Log out a client with a specific identifier.")),(0,a.kt)("h3",{id:"creating-chat-screen"},"Creating Chat Screen"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"(UIViewController *)chatViewControllerWithAttributes:(THRAttributes *)attributes"),"\xa0- Creates the chat's ",(0,a.kt)("inlineCode",{parentName:"li"},"viewController")," with specified attributes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"(UIViewController *)chatViewControllerWithAttributes:(THRAttributes *)attributes completionHandler:(THROperationCompletion _Nullable)completionHandler"),"\xa0- Creates the chat's ",(0,a.kt)("inlineCode",{parentName:"li"},"viewController"),"\xa0with specified attributes and the chat initialization success handler.")),(0,a.kt)("h3",{id:"tools"},"Tools"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"(NSString *) version"),"\xa0- Returns the version of the Threads library"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"(void) clearCachedFiles"),"\xa0- Clears the local image cache"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"(BOOL) isThreadsOriginPushUserInfo:(NSDictionary *)userInfo"),"\xa0- Verifies whether the push notification belongs to",(0,a.kt)("inlineCode",{parentName:"li"},"Threads")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"(NSString *) getAppMarkerFromPushUserInfo:(NSDictionary *)userInfo"),"\xa0- Extracts ",(0,a.kt)("inlineCode",{parentName:"li"},"APP_MARKER"),"\xa0from the push notification")),(0,a.kt)("h3",{id:"programmed-message-sending"},"Programmed Message Sending"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"(void)sendMessageWithText:(NSString *)text completion:(nullable THROperationCompletion)completion"),"\xa0- Sends a test message"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"(void)sendMessageWithImage:(UIImage *)image completion:(nullable THROperationCompletion)completion"),"\xa0- Sends an image")),(0,a.kt)("h3",{id:"threadsdelegate"},"ThreadsDelegate"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"(void)threads:(Threads *)threads unreadMessagesCount:(NSUInteger)unreadMessagesCount"),"\xa0- Receives the number of unread messages. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"(void)threads:(Threads *)threads didReceiveError:(NSError *)error"),"\xa0- Receives\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"Threads")," bug log."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"(void)threads:(Threads *)threads didChangeDeviceAddress:(NSString *)deviceAddress;"),"\xa0- Sends a notification about the change of ",(0,a.kt)("inlineCode",{parentName:"li"},"deviceAddress")," including when it's first received after the successful registration on push notifications.")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"id <ThreadsDelegate> delegate"),"\xa0- Threads delegate. Usually, it's AppDelegate."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"BOOL isClientIdEncrypted"),"\xa0- Flag indicating that ",(0,a.kt)("inlineCode",{parentName:"li"},"CLIENT_ID"),"\xa0is passed encrypted."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"BOOL isShowsNetworkActivity"),"\xa0- Parameter for showing network activity in the status bar."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NSInteger fileSizeLimit"),"\xa0- Size limitations (in bytes) for files to upload."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"THRAttributes *attributes"),"\xa0- Chat behavior and display settings. See\xa0",(0,a.kt)("a",{parentName:"li",href:"/i18n/en/docusaurus-plugin-content-docs-ios/current/advanced/ui"},"documentation"),".")),(0,a.kt)("h3",{id:"client"},"Client"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NSString *clientId"),"\xa0- Current set ",(0,a.kt)("inlineCode",{parentName:"li"},"CLIENT_ID"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NSString *clientName"),"\xa0- Name of the current client."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NSString *appMarker"),"\xa0- App marker. It is used to connect several apps to the same server or implement several chats in the same app."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NSString *clientSignature"),"\xa0- Authorization signature\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"CLIENT_ID"),". The signature must be generated on your authorization server based on clientId using the RSA private key, then encrypted in Base64. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NSString *data"),"\xa0- JSON string with custom client data. The following parameters will be displayed in general client info:\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"name"),",\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"phone"),",\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"email"),". ")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'    {\n      "name": "Name Surname",\n      "phone": "+7-999-999-99-99",\n      "email": "e@mail.com",\n      "customField":"customValue"\n    }\n')),(0,a.kt)("h3",{id:"state"},"State"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"BOOL isClientSet"),"\xa0- The parameter that indicates whether the client is specified in the chat."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NSInteger unreadMessagesCount"),"\xa0- Number of unread messages.")))}c.isMDXComponent=!0}}]);