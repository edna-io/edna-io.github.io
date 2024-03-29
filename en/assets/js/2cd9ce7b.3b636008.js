"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[6451],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},72831:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var i=n(87462),r=(n(67294),n(3905)),a=n(74866),o=n(85162);const s={sidebar_position:4},l="Configuring Notifications",c={unversionedId:"getting-started/notifications",id:"version-4.1.0/getting-started/notifications",title:"Configuring Notifications",description:"After the initial initialization is complete, you need to add the following SDK calls to enable push notifications:",source:"@site/i18n/en/docusaurus-plugin-content-docs-ios/version-4.1.0/getting-started/notifications.md",sourceDirName:"getting-started",slug:"/getting-started/notifications",permalink:"/en/ios/4.1.0/getting-started/notifications",draft:!1,tags:[],version:"4.1.0",lastUpdatedAt:1702459198,formattedLastUpdatedAt:"Dec 13, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"mainSidebar",previous:{title:"Configuration",permalink:"/en/ios/4.1.0/getting-started/usage"},next:{title:"Methods and Properties",permalink:"/en/ios/4.1.0/getting-started/methods"}},u={},p=[],d={toc:p},f="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuring-notifications"},"Configuring Notifications"),(0,r.kt)("p",null,"After the initial initialization is complete, you need to add the following SDK calls to enable push notifications:"),(0,r.kt)(a.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Objective-C",value:"objective-c"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"swift",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"// MARK: - Remote Notifications\n\nfunc application(_ application: UIApplication, didRegister notificationSettings: UIUserNotificationSettings) {\n    Threads.threads().applicationDidRegister(notificationSettings)\n}\n    \nfunc application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {\n    Threads.threads().applicationDidRegisterForRemoteNotifications(withDeviceToken: deviceToken)\n}\n    \nfunc application(_ application: UIApplication, didFailToRegisterForRemoteNotificationsWithError error: Error) {\n    Threads.threads().applicationDidFailToRegisterForRemoteNotificationsWithError(error)\n}\n\n// MARK: - UNUserNotificationCenterDelegate\n    \n@available(iOS 10.0, *)\nfunc userNotificationCenter(_ center: UNUserNotificationCenter, didReceive response: UNNotificationResponse, withCompletionHandler completionHandler: @escaping () -> Void) {\n    // Check for application launched from notification\n    if response.actionIdentifier == UNNotificationDefaultActionIdentifier {\n        let userInfo = response.notification.request.content.userInfo\n        if Threads.threads().isThreadsOriginPushUserInfo(userInfo) {\n            // Application launched from Threads notification\n        } else {\n            // Application launched from other notifications\n        }\n    }\n    completionHandler()\n}\n"))),(0,r.kt)(o.Z,{value:"objective-c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"#pragma mark - Remote Notifications\n\n- (void)application:(UIApplication *)application didRegisterUserNotificationSettings:(UIUserNotificationSettings *)notificationSettings {\n    [[Threads threads] applicationDidRegisterUserNotificationSettings:notificationSettings];\n}\n\n- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {\n    [[Threads threads] applicationDidRegisterForRemoteNotificationsWithDeviceToken:deviceToken];\n}\n\n- (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error {\n    [[Threads threads] applicationDidFailToRegisterForRemoteNotificationsWithError:error];\n}\n\n#pragma mark - UNUserNotificationCenterDelegate\n\n- (void)userNotificationCenter:(UNUserNotificationCenter *)center didReceiveNotificationResponse:(UNNotificationResponse *)response withCompletionHandler:(void(^)(void))completionHandler API_AVAILABLE(ios(10.0)){\n    // Check for application launched from notification\n    if ([response.actionIdentifier isEqualToString: UNNotificationDefaultActionIdentifier]) {\n        NSDictionary *userInfo = response.notification.request.content.userInfo;\n        if ([[Threads threads] isThreadsOriginPushUserInfo:userInfo]) {\n            // Application launched from Threads notification\n        } else {\n            // Application launched from other notifications\n        }\n    }\n    completionHandler();\n}\n")))))}m.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(67294),r=n(86010);const a={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return i.createElement("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>T});var i=n(87462),r=n(67294),a=n(86010),o=n(12466),s=n(76775),l=n(91980),c=n(67392),u=n(50012);function p(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:r}}=e;return{value:t,label:n,attributes:i,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const i=(0,s.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(i.location.search);t.set(a,e),i.replace({...i.location,search:t.toString()})}),[a,i])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,a=d(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:a}))),[l,c]=m({queryString:n,groupId:i}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,a]=(0,u.Nk)(n);return[i,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:i}),h=(()=>{const e=l??p;return f({value:e,tabValues:a})?e:null})();(0,r.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),g(e)}),[c,g,a]),tabValues:a}}var h=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),i=c[n].value;i!==s&&(p(t),l(i))},f=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,i.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:f,onClick:d},o,{className:(0,a.Z)("tabs__item",b.tabItem,null==o?void 0:o.className,{"tabs__item--active":s===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:i}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i}))))}function N(e){const t=g(e);return r.createElement("div",{className:(0,a.Z)("tabs-container",b.tabList)},r.createElement(v,(0,i.Z)({},e,t)),r.createElement(y,(0,i.Z)({},e,t)))}function T(e){const t=(0,h.Z)();return r.createElement(N,(0,i.Z)({key:String(t)},e))}}}]);