"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[86267],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},63967:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=n(87462),i=(n(67294),n(3905)),a=n(74866),o=n(85162);const l={sidebar_position:4},s="Configuring Notifications",c={unversionedId:"getting-started/notifications",id:"version-4.8.0/getting-started/notifications",title:"Configuring Notifications",description:"After the initial initialization is complete, you need to add the following SDK calls to enable push notifications:",source:"@site/i18n/en/docusaurus-plugin-content-docs-ios/version-4.8.0/getting-started/notifications.md",sourceDirName:"getting-started",slug:"/getting-started/notifications",permalink:"/en/ios/4.8.0/getting-started/notifications",draft:!1,tags:[],version:"4.8.0",lastUpdatedAt:1697698294,formattedLastUpdatedAt:"Oct 19, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"mainSidebar",previous:{title:"Configuration",permalink:"/en/ios/4.8.0/getting-started/usage"},next:{title:"Methods and Properties",permalink:"/en/ios/4.8.0/getting-started/methods"}},u={},d=[],p={toc:d},f="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configuring-notifications"},"Configuring Notifications"),(0,i.kt)("p",null,"After the initial initialization is complete, you need to add the following SDK calls to enable push notifications:"),(0,i.kt)(a.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Objective-C",value:"objective-c"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"swift",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"// MARK: - Remote Notifications\n    \nfunc application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {\n    Threads.threads().applicationDidRegisterForRemoteNotifications(withDeviceToken: deviceToken)\n}\n    \nfunc application(_ application: UIApplication, didFailToRegisterForRemoteNotificationsWithError error: Error) {\n    Threads.threads().applicationDidFailToRegisterForRemoteNotificationsWithError(error)\n}\n\n// MARK: - UNUserNotificationCenterDelegate\n\nfunc userNotificationCenter(_ center: UNUserNotificationCenter, didReceive response: UNNotificationResponse, withCompletionHandler completionHandler: @escaping () -> Void) {\n    // Check for application launched from notification\n    if response.actionIdentifier == UNNotificationDefaultActionIdentifier {\n        let userInfo = response.notification.request.content.userInfo\n        if Threads.threads().isThreadsOriginPushUserInfo(userInfo) {\n            // Application launched from Threads notification\n        } else {\n            // Application launched from other notifications\n        }\n    }\n    completionHandler()\n}\n"))),(0,i.kt)(o.Z,{value:"objective-c",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objectivec"},"#pragma mark - Remote Notifications\n\n- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {\n    [[Threads threads] applicationDidRegisterForRemoteNotificationsWithDeviceToken:deviceToken];\n}\n\n- (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error {\n    [[Threads threads] applicationDidFailToRegisterForRemoteNotificationsWithError:error];\n}\n\n#pragma mark - UNUserNotificationCenterDelegate\n\n- (void)userNotificationCenter:(UNUserNotificationCenter *)center didReceiveNotificationResponse:(UNNotificationResponse *)response withCompletionHandler:(void(^)(void))completionHandler API_AVAILABLE(ios(10.0)){\n    // Check for application launched from notification\n    if ([response.actionIdentifier isEqualToString: UNNotificationDefaultActionIdentifier]) {\n        NSDictionary *userInfo = response.notification.request.content.userInfo;\n        if ([[Threads threads] isThreadsOriginPushUserInfo:userInfo]) {\n            // Application launched from Threads notification\n        } else {\n            // Application launched from other notifications\n        }\n    }\n    completionHandler();\n}\n")))))}m.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),i=n(86010);const a={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(a.tabItem,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(87462),i=n(67294),a=n(86010),o=n(12466),l=n(76775),s=n(91980),c=n(67392),u=n(50012);function d(e){return function(e){var t;return(null==(t=i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}function p(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(a),(0,i.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=p(e),[o,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[s,c]=m({queryString:n,groupId:r}),[d,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,u.Nk)(n);return[r,(0,i.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),b=(()=>{const e=s??d;return f({value:e,tabValues:a})?e:null})();(0,i.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!f({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),h(e)}),[c,h,a]),tabValues:a}}var b=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),r=c[n].value;r!==l&&(d(t),s(r))},f=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}null==(t=n)||t.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:o}=e;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:f,onClick:p},o,{className:(0,a.Z)("tabs__item",g.tabItem,null==o?void 0:o.className,{"tabs__item--active":l===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function N(e){const t=h(e);return i.createElement("div",{className:(0,a.Z)("tabs-container",g.tabList)},i.createElement(v,(0,r.Z)({},e,t)),i.createElement(y,(0,r.Z)({},e,t)))}function T(e){const t=(0,b.Z)();return i.createElement(N,(0,r.Z)({key:String(t)},e))}}}]);