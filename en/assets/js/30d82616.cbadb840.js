"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[5471],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,h=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return n?i.createElement(h,a(a({ref:t},u),{},{components:n})):i.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},72425:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var i=n(87462),r=(n(67294),n(3905)),o=n(74866),a=n(85162);const s={sidebar_position:4},l="Configuring Notifications",c={unversionedId:"getting-started/notifications",id:"version-4.12.0/getting-started/notifications",title:"Configuring Notifications",description:"After the initial initialization is complete, you need to add the following SDK calls to enable push notifications:",source:"@site/i18n/en/docusaurus-plugin-content-docs-ios/version-4.12.0/getting-started/notifications.md",sourceDirName:"getting-started",slug:"/getting-started/notifications",permalink:"/en/ios/4.12.0/getting-started/notifications",draft:!1,tags:[],version:"4.12.0",lastUpdatedAt:1697698294,formattedLastUpdatedAt:"Oct 19, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"mainSidebar",previous:{title:"Configuration",permalink:"/en/ios/4.12.0/getting-started/usage"},next:{title:"Methods and Properties",permalink:"/en/ios/4.12.0/getting-started/methods"}},u={},p=[],d={toc:p},f="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuring-notifications"},"Configuring Notifications"),(0,r.kt)("p",null,"After the initial initialization is complete, you need to add the following SDK calls to enable push notifications:"),(0,r.kt)(o.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Objective-C",value:"objective-c"}],mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"swift",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"// MARK: - Remote Notifications\n    \nfunc application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {\n    Threads.threads().applicationDidRegisterForRemoteNotifications(withDeviceToken: deviceToken)\n}\n    \nfunc application(_ application: UIApplication, didFailToRegisterForRemoteNotificationsWithError error: Error) {\n    Threads.threads().applicationDidFailToRegisterForRemoteNotificationsWithError(error)\n}\n\n// MARK: - UNUserNotificationCenterDelegate\n\nfunc userNotificationCenter(_ center: UNUserNotificationCenter, didReceive response: UNNotificationResponse, withCompletionHandler completionHandler: @escaping () -> Void) {\n    // Check for application launched from notification\n    if response.actionIdentifier == UNNotificationDefaultActionIdentifier {\n        let userInfo = response.notification.request.content.userInfo\n        if Threads.threads().isThreadsOriginPushUserInfo(userInfo) {\n            // Application launched from Threads notification\n        } else {\n            // Application launched from other notifications\n        }\n    }\n    completionHandler()\n}\n"))),(0,r.kt)(a.Z,{value:"objective-c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"#pragma mark - Remote Notifications\n\n- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {\n    [[Threads threads] applicationDidRegisterForRemoteNotificationsWithDeviceToken:deviceToken];\n}\n\n- (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error {\n    [[Threads threads] applicationDidFailToRegisterForRemoteNotificationsWithError:error];\n}\n\n#pragma mark - UNUserNotificationCenterDelegate\n\n- (void)userNotificationCenter:(UNUserNotificationCenter *)center didReceiveNotificationResponse:(UNNotificationResponse *)response withCompletionHandler:(void(^)(void))completionHandler API_AVAILABLE(ios(10.0)){\n    // Check for application launched from notification\n    if ([response.actionIdentifier isEqualToString: UNNotificationDefaultActionIdentifier]) {\n        NSDictionary *userInfo = response.notification.request.content.userInfo;\n        if ([[Threads threads] isThreadsOriginPushUserInfo:userInfo]) {\n            // Application launched from Threads notification\n        } else {\n            // Application launched from other notifications\n        }\n    }\n    completionHandler();\n}\n")))),(0,r.kt)("h1",{id:"integration-with-push-lite"},"Integration with Push Lite"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This section is only relevant for projects that already use the push-lite SDK to deliver notifications."),(0,r.kt)("p",{parentName:"admonition"},"To configure and integrate push-lite, follow the instructions provided with the SDK.")),(0,r.kt)("p",null,"Initialization of the Chat Center library must go first:"),(0,r.kt)(o.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Objective-C",value:"objective-c"}],mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"swift",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n        \n        // Step 1: Configure Threads Framework\n        let threads = Threads.threads()\n        threads.registrationAtStartupDisable = SettingsBundleHelper.getRegistrationAtStartupDisable()\n        threads.isClientIdEncrypted = Configuration.clientIdEncrypted()\n        \n        threads.isShowsNetworkActivity = true\n        \n        guard let providerUid = Configuration.providerUid() else { fatalError("Set providerUid for threadsGate transportProtocol.") }\n        threads.configureTransportProtocol(\n            with: self,\n            webSocketURL: URL(string: Configuration.webSocketURL())!,\n            providerUid: providerUid,\n            restURL: URL(string: Configuration.restServerURL())!,\n            dataStoreURL: URL(string: Configuration.dataStoreURL())!\n        )\n        \n        // Step 2: Configure PushLite Framework\n        pushLite = EDNAPushLite(delegate: self)\n        pushLite.appGroup = "group.io.edna.chatcenter.demo"\n        pushLite.autoRegisterForNotification = false\n        pushLite.logEnable = true\n        pushLite.start()\n        \n        // Step 3: Register device for remote notifications\n        ...\n\n        return true\n    }\n'))),(0,r.kt)(a.Z,{value:"objective-c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n    \n    // Step 1: Configure Threads Framework\n    Threads *threads = [Threads threads];\n    threads.isDebugLoggingEnabled = YES;\n    \n    [threads configureTransportProtocolWithDelegate:self\n                                                   providerUid:@"PROVIDER_UID"\n                                                   webSocketURL: [NSURL URLWithString:@"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 WebSocket API"]\n                                                   restURL: [NSURL URLWithString:@"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 REST API"]\n                                                   dataStoreURL: [NSURL URLWithString:@"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 DataStore API"]];\n    \n    // Step 2: Configure PushLite Framework\n    pushLite = [[EDNAPushLite alloc] initWithDelegate: self];\n    pushLite.appGroup = @"group.io.edna.chatcenter.demo";\n    pushLite.autoRegisterForNotification = NO;\n    pushLite.logEnable = YES;\n    [pushLite start];\n        \n    // Step 3: Register device for remote notifications\n    ...\n        \n    return YES;\n}\n')))),(0,r.kt)("p",null,"The values from the notification delegates are passed in the same order:"),(0,r.kt)(o.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Objective-C",value:"objective-c"}],mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"swift",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"    func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {\n        Threads.threads().applicationDidRegisterForRemoteNotifications(withDeviceToken: deviceToken)\n        pushLite.appDelegate.didRegisterForRemoteNotifications(withDeviceToken: deviceToken)\n    }\n    \n    func application(_ application: UIApplication, didFailToRegisterForRemoteNotificationsWithError error: Error) {\n        Threads.threads().applicationDidFailToRegisterForRemoteNotificationsWithError(error)\n        pushLite.appDelegate.didFailToRegisterForRemoteNotifications(withError: error)\n    }\n"))),(0,r.kt)(a.Z,{value:"objective-c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"    - (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {\n        [[Threads threads] applicationDidRegisterForRemoteNotificationsWithDeviceToken:deviceToken];\n        [[pushLite appDelegate] didRegisterForRemoteNotificationsWithDeviceToken: deviceToken];\n    }\n\n    - (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error {\n        [[Threads threads] applicationDidFailToRegisterForRemoteNotificationsWithError:error];\n        [[pushLite appDelegate] didFailToRegisterForRemoteNotificationsWithError: error];\n    }\n")))))}h.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(67294),r=n(86010);const o={tabItem:"tabItem_Ymn6"};function a(e){let{children:t,hidden:n,className:a}=e;return i.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,a),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var i=n(87462),r=n(67294),o=n(86010),a=n(12466),s=n(76775),l=n(91980),c=n(67392),u=n(50012);function p(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:r}}=e;return{value:t,label:n,attributes:i,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const i=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(i.location.search);t.set(o,e),i.replace({...i.location,search:t.toString()})}),[o,i])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,o=d(e),[a,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:o}))),[l,c]=h({queryString:n,groupId:i}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,o]=(0,u.Nk)(n);return[i,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:i}),m=(()=>{const e=l??p;return f({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{m&&s(m)}),[m]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var m=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,a.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),i=c[n].value;i!==s&&(p(t),l(i))},f=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:a}=e;return r.createElement("li",(0,i.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:f,onClick:d},a,{className:(0,o.Z)("tabs__item",v.tabItem,null==a?void 0:a.className,{"tabs__item--active":s===t})}),n??t)})))}function T(e){let{lazy:t,children:n,selectedValue:i}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i}))))}function k(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},r.createElement(b,(0,i.Z)({},e,t)),r.createElement(T,(0,i.Z)({},e,t)))}function N(e){const t=(0,m.Z)();return r.createElement(k,(0,i.Z)({key:String(t)},e))}}}]);