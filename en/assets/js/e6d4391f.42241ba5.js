"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[21773],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},17537:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),i=n(74866),l=n(85162);const o={sidebar_position:1},s="Advanced Settings",u={unversionedId:"advanced/advanced",id:"version-4.28.0/advanced/advanced",title:"Advanced Settings",description:"Logging",source:"@site/i18n/en/docusaurus-plugin-content-docs-ios/version-4.28.0/advanced/advanced.md",sourceDirName:"advanced",slug:"/advanced/",permalink:"/en/ios/4.28.0/advanced/",draft:!1,tags:[],version:"4.28.0",lastUpdatedAt:1711997966,formattedLastUpdatedAt:"Apr 1, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mainSidebar",previous:{title:"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",permalink:"/en/ios/4.28.0/category/\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0435-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"},next:{title:"Appearance and Behavior Customization",permalink:"/en/ios/4.28.0/advanced/ui"}},c={},d=[{value:"Logging",id:"logging",level:4},{value:"ThreadsDelegate",id:"threadsdelegate",level:3},{value:"Number of Unread Messages",id:"number-of-unread-messages",level:4},{value:"Errors Processing",id:"errors-processing",level:4},{value:"Opening Chat upon Tapping Push Notification",id:"opening-chat-upon-tapping-push-notification",level:4},{value:"Programmed Message Sending",id:"programmed-message-sending",level:3},{value:"Text Message",id:"text-message",level:4},{value:"Image",id:"image",level:4},{value:"Using Certificates",id:"using-certificates",level:3},{value:"SSL Pinning",id:"ssl-pinning",level:4},{value:"Working with Untrusted Certificates",id:"working-with-untrusted-certificates",level:4},{value:"Notifications about User Actions",id:"notifications-about-user-actions",level:3},{value:"API Version",id:"api-version",level:3},{value:"Disable User Input",id:"disable-user-input",level:3}],p={toc:d},f="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"advanced-settings"},"Advanced Settings"),(0,r.kt)("h4",{id:"logging"},"Logging"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Threads.threads().attributes.logLevels = .off")," - Enables/disables logging. As a value, class LogLevel with support of the OptionSet(Swift) protocol or NS_OPTIONS(Objective-C) is used.")),(0,r.kt)("p",null,"Possible values of LogLevel are as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- off (all logging levels are disabled);\n- info (general level);\n- network (network level);\n- network-sock (network level, socket);\n- user-interface (user interface);\n- error (all);\n- all (all of the above levels are enabled);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"    let logLevelValue = (LogLevel.network.rawValue | LogLevel.networkSock.rawValue)\n    Threads.threads().attributes.logLevels = LogLevel(rawValue: logLevelValue)\n")),(0,r.kt)("p",null,'If at least one log level is enabled, the event stream is sent to the system OSLog with the "im.threads.logs" identifier and can be observed through both the XCode terminal and the Console in macOS.'),(0,r.kt)("p",null,'Simultaneously with OSLog, events are recorded to a file on the device. Default name is Threads.log. Storage: .documentDirectory/Logs (NSSearchPathForDirectoriesInDomains(.documentDirectory, .userDomainMask, true) + "/Logs"). You can forcibly disable logging to a file on the device. To do this, pass ',(0,r.kt)("inlineCode",{parentName:"p"},"nil")," in the file name attribute settings:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"    Threads.threads().attributes.logFileName = nil \n")),(0,r.kt)("p",null,"Settings for the log recording file on the device:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'Threads.threads().attributes.logFileName: String? = "Threads"'),' - Log file name, default is "Threads" (if nil is passed, logs will not be recorded to the file);'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Threads.threads().attributes.logFileSizeMb: Int = 1")," - Maximum file size in megabytes, by default - 1;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Threads.threads().attributes.logFileMaxCount: Int = 7")," - Maximum number of log files in rotation, by default - 7. If exceeded, the oldest one will be overwritten.")),(0,r.kt)("h3",{id:"threadsdelegate"},"ThreadsDelegate"),(0,r.kt)("h4",{id:"number-of-unread-messages"},"Number of Unread Messages"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"- (void)threads:(Threads *)threads unreadMessagesCount:(NSUInteger)unreadMessagesCount;")),(0,r.kt)("h4",{id:"errors-processing"},"Errors Processing"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"- (void)threads:(Threads *)threads didReceiveError:(NSError *)error;")),(0,r.kt)("h4",{id:"opening-chat-upon-tapping-push-notification"},"Opening Chat upon Tapping Push Notification"),(0,r.kt)("p",null,"To check whether the notification was opened by tapping a ",(0,r.kt)("inlineCode",{parentName:"p"},"Threads")," push notification, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"isThreadsOriginPushUserInfo")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift",metastring:'title="AppDelegate.swift"',title:'"AppDelegate.swift"'},"extension AppDelegate: UNUserNotificationCenterDelegate {\n  @available(iOS 10.0, *)\n  func userNotificationCenter(_ center: UNUserNotificationCenter, didReceive response: UNNotificationResponse, withCompletionHandler completionHandler: @escaping () -> Void) {\n      // Check for application launched from notification\n      if response.actionIdentifier == UNNotificationDefaultActionIdentifier {\n          let userInfo = response.notification.request.content.userInfo\n          if Threads.threads().isThreadsOriginPushUserInfo(userInfo) {\n              // Application launched from Threads notification\n          } else {\n              // Application launched from other notifications\n          }\n      }\n      completionHandler()\n  } \n}\n")),(0,r.kt)("h3",{id:"programmed-message-sending"},"Programmed Message Sending"),(0,r.kt)("h4",{id:"text-message"},"Text Message"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'let text = "Hello, World!"\n\nThreads.threads().sendMessage(withText: text) { [weak self] (error) in\n  if let error = error {\n      // handle error\n  } else {\n      // handle success     \n  }\n}\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Limitation: 4,000 characters."),(0,r.kt)("p",{parentName:"admonition"},"Use example:\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"TextMessageSwiftViewController.swift"),",\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"TextMessageObjcViewController.m"))),(0,r.kt)("h4",{id:"image"},"Image"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'let image = UIImage(named: "helloWorld")\n\nThreads.threads().sendMessage(with: image) { [weak self] (error) in\n  if let error = error {\n      // handle error\n  } else {\n      // handle success     \n  }\n}\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Limit by default: 30 MB "),(0,r.kt)("p",{parentName:"admonition"},"See the use example in ",(0,r.kt)("inlineCode",{parentName:"p"},"PictureMessageSwiftViewController.swift")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PictureMessageObjcViewController.m"))),(0,r.kt)("h3",{id:"using-certificates"},"Using Certificates"),(0,r.kt)("h4",{id:"ssl-pinning"},"SSL Pinning"),(0,r.kt)("p",null,"It allows you to use a specified list of certificates to check whether they match the certificates on the server. The certificates themselves must be enclosed in the application bundle in the DER encoding.\nIf the list is not empty, the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"allowUntrustedSSLCertificate"),"\xa0setting will be ignored."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"When utilizing this functionality, we do not recommend using only one certificate. If it is revoked or expired, SDK will stop connecting to the server. Use backup certificates and update them timely.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[Threads threads].attributes.trustedCertificates")," - An empty array by default. ")),(0,r.kt)(i.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Objective-C",value:"objective-c"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"swift",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'Threads.threads().attributes.trustedCertificates = [\n    THRCert(contentsOf: Bundle.main.url(forResource: "GUTS_2022.cer", withExtension: nil)),\n    THRCert(contentsOf: Bundle.main.url(forResource: "guts.2022.cer", withExtension: nil)),\n    THRCert(contentsOfFile: "guts_22.cer"),\n    THRCert(contentsOfFile: "guts.22.cer")\n'))),(0,r.kt)(l.Z,{value:"objective-c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'[Threads threads].attributes.trustedCertificates = @[\n    [[THRCert alloc] initWithContentsOf: [NSBundle.mainBundle URLForResource:@"GUTS_2022.cer" withExtension:nil]],\n    [[THRCert alloc] initWithContentsOf: [NSBundle.mainBundle URLForResource:@"guts.2022.cer" withExtension:nil]],\n    [[THRCert alloc] initWithContentsOfFile:@"guts_22.cer"],\n    [[THRCert alloc] initWithContentsOfFile:@"guts.22.cer"]\n];\n')))),(0,r.kt)("h4",{id:"working-with-untrusted-certificates"},"Working with Untrusted Certificates"),(0,r.kt)("p",null,"It regulates validation of server certificates in the SDK. If the ",(0,r.kt)("inlineCode",{parentName:"p"},"trustedCertificatesList")," setting is activated, this setting is ignored and the exact compliance of certificates from the specified list is checked."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[Threads threads].attributes.allowUntrustedSSLCertificate = [YES | NO]"),"\xa0- Disabled by default. ")),(0,r.kt)("h3",{id:"notifications-about-user-actions"},"Notifications about User Actions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"Threads.Controls.DidClickCloseButton"')," - Notification sent when the user clicks on the chat close button.")),(0,r.kt)("h3",{id:"api-version"},"API Version"),(0,r.kt)("p",null,"Allow to set API version for working with servers. Possible values are in enum THRAPIVersion ","[api15 | api17 | api18]","."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"`Threads.threads.apiVersion - Default value is api15.")),(0,r.kt)(i.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Objective-C",value:"objective-c"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"swift",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"Threads.threads.apiVersion = THRAPIVersion.api18\n"))),(0,r.kt)(l.Z,{value:"objective-c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"[Threads threads].apiVersion = THRAPIVersionApi18;\n")))),(0,r.kt)("h3",{id:"disable-user-input"},"Disable User Input"),(0,r.kt)("p",null,"Disable ability of user input and sending messages to chat."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"Threads.threads.disableUserInput = true\n")))}m.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),r=n(67294),i=n(86010),l=n(12466),o=n(76775),s=n(91980),u=n(67392),c=n(50012);function d(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=p(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,u]=m({queryString:n,groupId:a}),[d,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),h=(()=>{const e=s??d;return f({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),g(e)}),[u,g,i]),tabValues:i}}var h=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==o&&(d(t),s(a))},f=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:f,onClick:p},l,{className:(0,i.Z)("tabs__item",v.tabItem,null==l?void 0:l.className,{"tabs__item--active":o===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=g(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",v.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function N(e){const t=(0,h.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}}}]);