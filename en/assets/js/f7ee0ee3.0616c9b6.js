"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[95290],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18168:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),i=n(74866),o=n(85162);const l={sidebar_position:3},s="Configuration",u={unversionedId:"getting-started/usage",id:"version-4.18.0/getting-started/usage",title:"Configuration",description:"Initialization",source:"@site/i18n/en/docusaurus-plugin-content-docs-ios/version-4.18.0/getting-started/usage.md",sourceDirName:"getting-started",slug:"/getting-started/usage",permalink:"/en/ios/4.18.0/getting-started/usage",draft:!1,tags:[],version:"4.18.0",lastUpdatedAt:1716492809,formattedLastUpdatedAt:"May 23, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"mainSidebar",previous:{title:"Installation",permalink:"/en/ios/4.18.0/getting-started/installation"},next:{title:"Configuring Notifications",permalink:"/en/ios/4.18.0/getting-started/notifications"}},c={},d=[{value:"Initialization",id:"initialization",level:2},{value:"User Installation",id:"user-installation",level:3},{value:"User&#39;s Logout",id:"users-logout",level:3},{value:"Show Chat Screen",id:"show-chat-screen",level:3},{value:"How to Open Chat Screen",id:"how-to-open-chat-screen",level:2},{value:"1. Via Push Method in Code",id:"1-via-push-method-in-code",level:3},{value:"2. Via Present Method in Code",id:"2-via-present-method-in-code",level:3},{value:"3. Via Show Method in Storyboard",id:"3-via-show-method-in-storyboard",level:3},{value:"4. Integration on UITabBarController Tab in Code",id:"4-integration-on-uitabbarcontroller-tab-in-code",level:3},{value:"5. Integration on UITabBarController Tab in Storyboard",id:"5-integration-on-uitabbarcontroller-tab-in-storyboard",level:3}],p={toc:d},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration"},"Configuration"),(0,r.kt)("h2",{id:"initialization"},"Initialization"),(0,r.kt)("p",null,"In the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"application:didFinishLaunchingWithOptions:")," method,\xa0configure an SDK Threads instance:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"configureTransportProtocol"),"\xa0- Message delivery protocol:")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You need to get the following configuration parameters from your implementation manager:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"providerUid")," - App ID "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"webSocketURL")," - URL to connect to the chat through WebSocket API"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"restURL")," - URL for calls to REST API"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dataStoreURL")," - URL to upload files via DataStore API"))),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"When configuring SDK via THRAttributes, all ",(0,r.kt)("strong",{parentName:"p"},"NON-UI settings")," must be set before calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"configureTransportProtocol")," method!"),(0,r.kt)("p",{parentName:"admonition"},"For example:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"threads.attributes.logLevels = .all\nthreads.attributes.allowUntrustedSSLCertificate = true\n"))),(0,r.kt)(i.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Objective-C",value:"obj-c"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"swift",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"import Threads\n\n@UIApplicationMain\nclass AppDelegate: UIResponder, UIApplicationDelegate {\n\nfunc application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n    \n    // Step 1: Configure Threads Framework\n    let threads = Threads.threads()\n    threads.attributes.logLevels = .all\n    \n    threads.configureThreadsGateTransportProtocol(\n            with: self,\n            providerUid: \"PROVIDER_UID\",\n            webSocketURL: URL(string: 'URL to WebSocket API')!,\n            restURL: URL(string: 'URL to REST API')!,\n            dataStoreURL: URL(string: 'URL to DataStore API'))!\n    \n    // Step 2: Register device for remote notifications\n    UNUserNotificationCenter.current().delegate = self\n\n    Threads.threads().registerApplicationForRemoteNotificationsStandartOptions(authorizationStatusDenied: {\n        // Handle deny notifications\n    }) { deviceToken in\n        // Handle received device token if needed\n    }\n        \n    return true\n}\n"))),(0,r.kt)(o.Z,{value:"obj-c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'#import <Threads/Threads.h>\n\n@interface AppDelegate () <UNUserNotificationCenterDelegate, ThreadsDelegate>\n@end\n\n@implementation AppDelegate\n\n- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n    \n    // Step 1: Configure Threads Framework\n    Threads *threads = [Threads threads];\n    threads.isDebugLoggingEnabled = YES;\n    \n    [threads configureThreadsGateTransportProtocolWithDelegate:self\n                                                   providerUid:@"PROVIDER_UID"\n                                                   webSocketURL: [NSURL URLWithString:@"URL to WebSocket API"]\n                                                   restURL: [NSURL URLWithString:@"URL to REST API"]\n                                                   dataStoreURL: [NSURL URLWithString:@"URL to DataStore API"]];\n    \n    // Step 2: Register device for remote notifications\n    [UNUserNotificationCenter currentNotificationCenter].delegate = self;\n\n    [[Threads threads] registerApplicationForRemoteNotificationsStandartOptionsWithAuthorizationStatusDenied:^{\n        // Handle deny notifications\n    } completionHandler:^(NSData * _Nullable deviceToken) {\n        // Handle received device token if needed\n    }];\n        \n    return YES;\n}\n')))),(0,r.kt)("h3",{id:"user-installation"},"User Installation"),(0,r.kt)("p",null,"Use the following method:\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"setClientWithId:name:data:appMarker:signature:")),(0,r.kt)(i.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Objective-C",value:"objective-c"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"swift",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"let clientInfo = THRClientInfo(clientId: CLIENT_ID)\nclientInfo.name = CLIENT_NAME\nclientInfo.data = CLIENT_DATA\nclientInfo.appMarker = APP_MARKER\nclientInfo.signature = SIGNATURE\nThreads.threads().setClientInfo(clientInfo)\n"))),(0,r.kt)(o.Z,{value:"objective-c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"THRClientInfo *clientInfo = [[THRClientInfo alloc] initWithClientId:CLIENT_ID];\nclientInfo.name = CLIENT_NAME;\nclientInfo.data = CLIENT_DATA;\nclientInfo.appMarker = APP_MARKER;\nclientInfo.signature = SIGNATURE;\n[[Threads threads] setClientInfo:clientInfo];\n")))),(0,r.kt)("p",null,"where:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CLIENT_ID"),"\xa0- Unique client's identifier. This parameter is required."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CLIENT_NAME"),"\xa0- Client's name. This parameter is optional."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CLIENT_DATA"),"\xa0- JSON string with client data. This parameter is optional."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"APP_MARKER"),"\xa0- Identifier for ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ThreadsMobileLib/edna-sdk-ios/wiki/%D0%9C%D1%83%D0%BB%D1%8C%D1%82%D0%B8%D1%87%D0%B0%D1%82"},"multichat"),"; pass ",(0,r.kt)("inlineCode",{parentName:"li"},"null")," only, if not used."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SIGNATURE"),"\xa0- Authorization signature clientId. At the moment, this parameter is optional, verification is enabled on the Threads server. The signature must be generated on your authorization server based on clientId using the RSA private key, then encrypted in Base64. For the general scheme of working with the signature, refer to the backend documentation.")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"CLIENT_ID must be unique and always refer to the same user. Avoid using phone numbers, email addresses, and other identifiers linked to user data as an identifier.")),(0,r.kt)("h3",{id:"users-logout"},"User's Logout"),(0,r.kt)("p",null,"Logout must be executed when the app is supposed to stop receiving messages for users. For example, when users log out of the app."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Upon\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"clientId"),"\xa0change, automatic logout is not executed.")),(0,r.kt)(i.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Objective-C",value:"objective-c"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"swift",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"Threads.threads().logout()\n\u0438\u043b\u0438\nThreads.threads().logout(withClientId: clientId)\n"))),(0,r.kt)(o.Z,{value:"objective-c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"[[Threads threads] logout];\n\u0438\u043b\u0438\n[[Threads threads] logoutWithClientId:client.id];\n")))),(0,r.kt)("h3",{id:"show-chat-screen"},"Show Chat Screen"),(0,r.kt)("p",null,"To show the chat screen, you need to receive the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"chatViewController")," parameter \xa0with indication of appearance parameters\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"THRAttrubutes"),". The received controller can be displayed in any native way:"),(0,r.kt)(i.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Objective-C",value:"objective-c"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"swift",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"let attributes = THRAttributes()\nlet vc = Threads.threads().chatViewController(with: attributes)\nnavigationController?.pushViewController(vc, animated: true)\n"))),(0,r.kt)(o.Z,{value:"objective-c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"THRAttributes *attributes = [[THRAttributes alloc] init];\nUIViewController *vc = [[Threads threads] chatViewControllerWithAttributes:attributes];\n[self.navigationController pushViewController:vc animated:YES];\n")))),(0,r.kt)("h2",{id:"how-to-open-chat-screen"},"How to Open Chat Screen"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples in the demo app")),(0,r.kt)("p",null,"All chat opening options are implemented on\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Objective-C"),"\xa0and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Swift"),"\xa0in the corresponding examples in the \xa0",(0,r.kt)("inlineCode",{parentName:"p"},"IntegrationsViewController")," class."),(0,r.kt)("h3",{id:"1-via-push-method-in-code"},"1. Via Push Method in Code"),(0,r.kt)("p",null,"How to open the chat screen using the Push method in current\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"UINavigationController"),"."),(0,r.kt)(i.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Objective-C",value:"objective-c"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"swift",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"let vc = Threads.threads().chatViewController(with: attributes)\nnavigationController?.pushViewController(vc, animated: true)\n"))),(0,r.kt)(o.Z,{value:"objective-c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"UIViewController *vc = [[Threads threads] chatViewControllerWithAttributes:attributes];\n[self.navigationController pushViewController:vc animated:YES];\n")))),(0,r.kt)("h3",{id:"2-via-present-method-in-code"},"2. Via Present Method in Code"),(0,r.kt)("p",null,"In this case, you need to place the chat in\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"UINavigationController"),"."),(0,r.kt)(i.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Objective-C",value:"objective-c"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"swift",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"let vc = Threads.threads().chatViewController(with: attributes)\nlet nc = UINavigationController(rootViewController: vc)\npresent(nc, animated: true, completion: nil)\n"))),(0,r.kt)(o.Z,{value:"objective-c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"UIViewController *vc = [[Threads threads] chatViewControllerWithAttributes:attributes];\nUINavigationController *nc = [[UINavigationController alloc] initWithRootViewController:chatViewController];\n[self presentViewController:nc animated:YES completion:nil];\n")))),(0,r.kt)("h3",{id:"3-via-show-method-in-storyboard"},"3. Via Show Method in Storyboard"),(0,r.kt)("p",null,"To open the chat screen using the Show method (for example, Push), you need to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a child of\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"ChatNavigationController")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"UINavigationController"),"."),(0,r.kt)("li",{parentName:"ol"},"Set the created class as\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"Custom Class"),"\xa0for the required scene of ",(0,r.kt)("inlineCode",{parentName:"li"},"UINavigationController")," in Storyboard."),(0,r.kt)("li",{parentName:"ol"},"Create a ",(0,r.kt)("inlineCode",{parentName:"li"},"Segue")," connection\xa0to the created\xa0scene of ",(0,r.kt)("inlineCode",{parentName:"li"},"ChatNavigationController"),".\nExample of ",(0,r.kt)("inlineCode",{parentName:"li"},"ChatNavigationController"),"\xa0implementation:")),(0,r.kt)(i.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Objective-C",value:"objective-c"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"swift",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"class ChatNavigationController.m: UINavigationController {\n    override func viewDidLoad() {\n        super.viewDidLoad()\n\n        self.viewControllers = [self.getChatViewController()]\n    }\n    \n    func getAttributes() -> THRAttributes {\n        let attributes = THRAttributes()\n        attributes.showWaitingForSpecialistProgress = false\n        return attributes\n    }\n    \n    func getChatViewController() -> UIViewController {\n        let attributes = getAttributes()\n        let chatViewController = Threads.threads().chatViewController(with: attributes)\n        return chatViewController\n    }\n}\n\n"))),(0,r.kt)(o.Z,{value:"objective-c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"class ChatNavigationController.m: UINavigationController {\n    override func viewDidLoad() {\n        super.viewDidLoad()\n\n        self.viewControllers = [self.getChatViewController()]\n    }\n    \n    func getAttributes() -> THRAttributes {\n        let attributes = THRAttributes()\n        attributes.showWaitingForSpecialistProgress = false\n        return attributes\n    }\n    \n    func getChatViewController() -> UIViewController {\n        let attributes = getAttributes()\n        let chatViewController = Threads.threads().chatViewController(with: attributes)\n        return chatViewController\n    }\n}\n")))),(0,r.kt)("h3",{id:"4-integration-on-uitabbarcontroller-tab-in-code"},"4. Integration on UITabBarController Tab in Code"),(0,r.kt)("p",null,"Integration method is similar to\xa0",(0,r.kt)("em",{parentName:"p"},"chat opening using the Present method"),",\xa0since you need to place the chat into\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"UINavigationController"),"."),(0,r.kt)(i.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Objective-C",value:"objective-c"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"swift",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'let vc = Threads.threads().chatViewController(with: attributes)\n        \nlet nc = UINavigationController(rootViewController: chatViewController)\nnc.tabBarItem = UITabBarItem(title: NSLocalizedString("Chat", comment: ""), image: UIImage(named: "tabBarItemChat"), tag: 0)\n    \nlet tabBarController = UITabBarController()\ntabBarController.viewControllers = [nc]\n'))),(0,r.kt)(o.Z,{value:"objective-c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'UIViewController *vc = [[Threads threads] chatViewControllerWithAttributes:attributes];\n\nUINavigationController *nc = [[UINavigationController alloc] initWithRootViewController:vc];\nnc.tabBarItem = [[UITabBarItem alloc] initWithTitle:NSLocalizedString(@"Chat", "") image:[UIImage imageNamed:@"tabBarItemChat"] tag:0];\n    \nUITabBarController *tabBarController = [[UITabBarController alloc] init];\ntabBarController.viewControllers = @[nc];\n')))),(0,r.kt)("h3",{id:"5-integration-on-uitabbarcontroller-tab-in-storyboard"},"5. Integration on UITabBarController Tab in Storyboard"),(0,r.kt)("p",null,"To integrate the chat as a tab via\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Storyboard"),", you need\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"ChatNavigationController"),"\xa0from\xa0",(0,r.kt)("em",{parentName:"p"},"How to Open Chat Screen via Show Method in Storyboard"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Set the scene of\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"UINavigationController")),(0,r.kt)("li",{parentName:"ol"},"Set ",(0,r.kt)("inlineCode",{parentName:"li"},"Custom Class"),"\xa0-\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"ChatNavigationController"),","),(0,r.kt)("li",{parentName:"ol"},"Create a connection of\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"viewControllers")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"UITabBarController")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"ChatNavigationController"),".")))}h.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),r=n(67294),i=n(86010),o=n(12466),l=n(76775),s=n(91980),u=n(67392),c=n(50012);function d(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=p(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,u]=h({queryString:n,groupId:a}),[d,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),b=(()=>{const e=s??d;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,i]),tabValues:i}}var b=n(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(d(t),s(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},o,{className:(0,i.Z)("tabs__item",f.tabItem,null==o?void 0:o.className,{"tabs__item--active":l===t})}),n??t)})))}function C(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=g(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",f.tabList)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(C,(0,a.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}}}]);