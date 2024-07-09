"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[98070],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=a,g=c["".concat(s,".").concat(h)]||c[h]||u[h]||r;return n?i.createElement(g,o(o({ref:t},d),{},{components:n})):i.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r={},o="Migration Guide",l={unversionedId:"migration/migration_guides",id:"version-4.12.0/migration/migration_guides",title:"Migration Guide",description:"Migration to 4.0.0",source:"@site/i18n/en/docusaurus-plugin-content-docs-ios/version-4.12.0/migration/migration_guides.md",sourceDirName:"migration",slug:"/migration/migration_guides",permalink:"/en/ios/4.12.0/migration/migration_guides",draft:!1,tags:[],version:"4.12.0",lastUpdatedAt:1711997966,formattedLastUpdatedAt:"Apr 1, 2024",frontMatter:{},sidebar:"mainSidebar",previous:{title:"\u041c\u0438\u0433\u0440\u0430\u0446\u0438\u044f",permalink:"/en/ios/4.12.0/category/\u043c\u0438\u0433\u0440\u0430\u0446\u0438\u044f"},next:{title:"Demo App",permalink:"/en/ios/4.12.0/demo"}},s={},p=[{value:"Migration to 4.0.0",id:"migration-to-400",level:2},{value:"Installation via CocoaPods",id:"installation-via-cocoapods",level:3},{value:"Threads Configuration",id:"threads-configuration",level:3},{value:"MFMSPushLiteDelegate -&gt; ThreadsDelegate",id:"mfmspushlitedelegate---threadsdelegate",level:3},{value:"Setting up Receiving Push Notifications",id:"setting-up-receiving-push-notifications",level:3},{value:"Registering User",id:"registering-user",level:3},{value:"Chat Opening",id:"chat-opening",level:3},{value:"<strong>Appearance Configuration</strong>",id:"appearance-configuration",level:3},{value:"Additional Capabilities",id:"additional-capabilities",level:2},{value:"Counter of Unread Messages -&gt; ThreadsDelegate",id:"counter-of-unread-messages---threadsdelegate",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"migration-guide"},"Migration Guide"),(0,a.kt)("h2",{id:"migration-to-400"},"Migration to 4.0.0"),(0,a.kt)("p",null,"In version 4.0.0, the integration and work with the push library was reworked."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"MFMSPushLite")," library was moved inside\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"Threads"),", all interaction now only occurs through it."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"UIViewController")," is now provided to show the chat.")),(0,a.kt)("h3",{id:"installation-via-cocoapods"},"Installation via CocoaPods"),(0,a.kt)("p",null,"If you are installing\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"Threads"),"via",(0,a.kt)("inlineCode",{parentName:"p"},"CocoaPods"),", remove manual installation of\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"MFMSPushLite"),". Now the dependency is pulled up automatically."),(0,a.kt)("h3",{id:"threads-configuration"},"Threads Configuration"),(0,a.kt)("p",null,"Replace all calls to static methods of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Threads")," class to address the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"[Threads threads]")," singleton."),(0,a.kt)("p",null,"In\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"Application didFinishLaunchingWithOptions"),",\xa0",(0,a.kt)("strong",{parentName:"p"},"before you register push"),", add the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"Threads")," configuration method. It contains MFMSPushLite configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},'Threads *threads = [Threads threads];\n\n[threads configureWithDelegate:self\n          productionMFMSServer:YES\n                    historyURL:[NSURL URLWithString:@"HISTORY_URL"]\n              fileUploadingURL:[NSURL URLWithString:@"FILE_UPLOADING_URL"]];\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"From ",(0,a.kt)("inlineCode",{parentName:"li"},"Info.plist"),", remove ",(0,a.kt)("inlineCode",{parentName:"li"},"PS_API_CONFIG"),"\xa0with the following parameters:\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"PS_FILE_UPLOAD_URL"),",\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"PS_HISTORY_URL"),",\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"PS_CLIENTID_IS_ENCRYPTED"),". These parameters are no longer set in plist, only in code.")),(0,a.kt)("h3",{id:"mfmspushlitedelegate---threadsdelegate"},"MFMSPushLiteDelegate -> ThreadsDelegate"),(0,a.kt)("p",null,"Implementation of ",(0,a.kt)("inlineCode",{parentName:"p"},"MFMSPushLiteDelegate")," replace with implementation of\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"ThreadsDelegate"),"\xa0and a parameter:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Transfer the switching of the production/test push platform from the ",(0,a.kt)("inlineCode",{parentName:"li"},"(BOOL)isProductionWithPushApi:(MFMSPushLite * _Nonnull)pushApi")," method to the\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"productionMFMSServer")," parameter"),(0,a.kt)("li",{parentName:"ul"},"Transfer implementation of\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"MFMSPushLiteDelegate")," methods",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},"- (id<PushServerApiConfigDataSource>)configWithPushApi:(MFMSPushLite *)pushApi;\n\n- (void)onPushMessagesReceivedWithPushApi:(MFMSPushLite *)PushApi messages:(NSArray<PushNotificationMessage *> *)messages;\n\n- (void)onErrorWithPushApi:(MFMSPushLite *)PushApi error:(NSString *)error;\n")),"  To the corresponding\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"ThreadsDelegate")," methods:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},"- (id<PushServerApiConfigDataSource>)threads:(Threads *)threads configurePushServerApiFor:(MFMSPushLite *)mfmsPushLite;\n- (void)threads:(Threads *)threads didReceiveFullMessages:(NSArray<PushNotificationMessage *> *)messages;\n- (void)threads:(Threads *)threads didReceiveError:(NSError *)error;\n")))),(0,a.kt)("h3",{id:"setting-up-receiving-push-notifications"},"Setting up Receiving Push Notifications"),(0,a.kt)("p",null,"Replace the push registration code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"if (@available(iOS 10, *)) {\n    UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];\n    center.delegate = self;\n    [center requestAuthorizationWithOptions:(UNAuthorizationOptionSound | UNAuthorizationOptionAlert | UNAuthorizationOptionBadge) completionHandler:^(BOOL granted, NSError * _Nullable error){\n        if(!error){\n            dispatch_async(dispatch_get_main_queue(), ^{\n                [[UIApplication sharedApplication] registerForRemoteNotifications];\n            });\n        }\n    }];\n} else {\n    [[UIApplication sharedApplication] registerForRemoteNotifications];\n}\n")),(0,a.kt)("p",null,"With the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},'[Threads threads] registerApplicationForRemoteNotificationsStandartOptionsWithAuthorizationStatusDenied:^{\n    NSLog(@"Remote notifications denied");\n} completionHandler:^(NSData * _Nullable deviceToken) {\n    NSLog(@"Application registered for remote notifications %@", deviceToken);\n}];\n')),(0,a.kt)("p",null,"Replace the implementation of methods for processing registration and receiving push messages with the following\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"Threads")," calls:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},"- (void)application:(UIApplication *)application didRegisterUserNotificationSettings:(UIUserNotificationSettings *)notificationSettings {\n    [[Threads threads] applicationDidRegisterUserNotificationSettings:notificationSettings];\n}\n\n- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {\n    [[Threads threads] applicationDidRegisterForRemoteNotificationsWithDeviceToken:deviceToken];\n}\n\n- (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error {\n    [[Threads threads] applicationDidFailToRegisterForRemoteNotificationsWithError:error];\n}\n\n")),(0,a.kt)("p",null,"Replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"[Threads didReceiveFullPush:...]")," call, now push messages are passed directly inside the library. If you use your own push notifications, you can get them in the delegate method\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"ThreadsDelegate"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},"- (void)threads:(Threads *)threads didReceiveFullMessages:(NSArray<PushNotificationMessage *> *)messages;\n")),(0,a.kt)("h3",{id:"registering-user"},"Registering User"),(0,a.kt)("p",null,"Remove the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"[Threads registerClientWithCompletion:^(BOOL state)]")," call, it has been deprecated."),(0,a.kt)("p",null,"Replace the client parameter setting:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},"[Threads setClientId:(NSString*) clientId]\n[Threads setClientName:(NSString*) clientName]\n[Threads setData:(NSString*) data]\n[Threads setAppMarker:  appMarker]\n[Threads setClientIdSignature: (NSString*) clientIdSignature]\n")),(0,a.kt)("p",null,"With the client installation method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},"[[Threads threads] setClientWithId:(NSString *) clientId\n                              name:(NSString * _Nullable) clientName\n                              data:(NSDictionary * _Nullable) clientDataDict\n                         appMarker:(NSString * _Nullable) clientAppMarker\n                         signature:(NSString *) clientSignature];\n")),(0,a.kt)("p",null,"Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," is now passed as a dictionary and not a string."),(0,a.kt)("h3",{id:"chat-opening"},"Chat Opening"),(0,a.kt)("p",null,"Replace the calls of the methods:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},"[Threads show];\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},"[Threads showInView:(UIView *)view parentController:(UIViewController *)parentController;\n")),(0,a.kt)("p",null,"With receiving full ",(0,a.kt)("inlineCode",{parentName:"p"},"UIViewController")," that you can present in any native way, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},"THRAttributes *attributes = [[THRAttributes alloc] init];\nUIViewController *chatViewController = [[Threads threads] chatViewControllerWithAttributes:attributes];\n[self.navigationController pushViewController:chatViewController animated:YES];\n")),(0,a.kt)("p",null,"Other examples:\xa0",(0,a.kt)("a",{parentName:"p",href:"/i18n/en/docusaurus-plugin-content-docs-ios/current/getting-started/usage"},"Ways to Open Chat Screen")),(0,a.kt)("h3",{id:"appearance-configuration"},(0,a.kt)("strong",{parentName:"h3"},"Appearance Configuration")),(0,a.kt)("p",null,"Transfer the parameters of the chat welcome screen texts:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},'[Threads setHelloTitle:@"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"]\n[Threads setHelloDescription:@"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"]\n')),(0,a.kt)("p",null,"To the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"THRAttributes")," parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"helloTitle")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"helloDescription"))),(0,a.kt)("p",null,"Remove the following parameters and methods - due to transition to ViewController, they became irrelevant and were removed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"THRAttributes",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"navigationBarBackgroundColor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"navigationBarTintColor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"navigationBarItemFont")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"shouldAnimateShowNavigation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"shouldAnimatePopNavigation")))),(0,a.kt)("li",{parentName:"ul"},"Threads:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"showToolbarAnimated")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hideToolbarAnimated")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"showKeyboard")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hideKeyboard"))))),(0,a.kt)("h2",{id:"additional-capabilities"},"Additional Capabilities"),(0,a.kt)("h3",{id:"counter-of-unread-messages---threadsdelegate"},"Counter of Unread Messages -> ThreadsDelegate"),(0,a.kt)("p",null,"Transfer the processing of getting the number of unread messages from the block:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},"[[Threads threads] setUnreadedMessagesCountChanged:^(NSInteger messagesCount)\n")),(0,a.kt)("p",null,"To implementation of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ThreadsDelegate"),"method\xa0 :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},"- (void)threads:(Threads *)threads unreadMessagesCount:(NSUInteger)unreadMessagesCount;\n")))}u.isMDXComponent=!0}}]);