"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[10057],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),g=a,h=d["".concat(l,".").concat(g)]||d[g]||p[g]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},56752:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),o=r(74866),i=r(85162);const s={},l="Migration Instructions",u={unversionedId:"migration/migration_guides",id:"version-4.7.0/migration/migration_guides",title:"Migration Instructions",description:"This article covers the instructions for migration to newer library versions.",source:"@site/i18n/en/docusaurus-plugin-content-docs-android/version-4.7.0/migration/migration_guides.md",sourceDirName:"migration",slug:"/migration/migration_guides",permalink:"/en/android/4.7.0/migration/migration_guides",draft:!1,tags:[],version:"4.7.0",lastUpdatedAt:1707140878,formattedLastUpdatedAt:"Feb 5, 2024",frontMatter:{},sidebar:"mainSidebar",previous:{title:"\u041c\u0438\u0433\u0440\u0430\u0446\u0438\u044f",permalink:"/en/android/4.7.0/category/\u043c\u0438\u0433\u0440\u0430\u0446\u0438\u044f"},next:{title:"Demo App",permalink:"/en/android/4.7.0/demo"}},c={},d=[{value:"Migration to 4.0.0",id:"migration-to-400",level:2},{value:"Changes in Operation of edna Chat Center Push Library 4.0.0",id:"changes-in-operation-of-edna-chat-center-push-library-400",level:3},{value:"Migration from 4.1.0 to 4.2.0",id:"migration-from-410-to-420",level:2},{value:"Changes in Chat Center Library 4.2.0",id:"changes-in-chat-center-library-420",level:3},{value:"Migration from 4.5.0 to 4.6.0",id:"migration-from-450-to-460",level:2}],p={toc:d},g="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(g,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"migration-instructions"},"Migration Instructions"),(0,a.kt)("p",null,"This article covers the instructions for migration to newer library versions."),(0,a.kt)("h2",{id:"migration-to-400"},"Migration to 4.0.0"),(0,a.kt)("h3",{id:"changes-in-operation-of-edna-chat-center-push-library-400"},"Changes in Operation of edna Chat Center Push Library 4.0.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Dependency on the push-lite library has been removed."),(0,a.kt)("li",{parentName:"ul"},"The following classes used in the integration have been removed:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"im.threads.push.ThreadsPushBroadcastReceiver"),(0,a.kt)("li",{parentName:"ul"},"im.threads.push.ThreadsPushFcmIntentService")))),(0,a.kt)("p",null,"For push notifications to work correctly, own child must be defined in the application\xa0",(0,a.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/reference/android/com/google/firebase/messaging/FirebaseMessagingService"},"https://firebase.google.com/docs/reference/android/com/google/firebase/messaging/FirebaseMessagingService"),".\xa0To pass the token in the corresponding child method, use ChatCenterPushMessageHelper.setFcmToken(...). To process incoming push notifications, use ChatCenterPushMessageHelper.process(...). This method will only process the push notifications that contain origin=threads, i.e. the edna Chat Center membership flag."),(0,a.kt)("p",null,"The integration code example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"    override fun onNewToken(token: String) {  \n        super.onNewToken(token)  \n        ChatCenterPushMessageHelper.setFcmToken(token)  \n        //your custom handling here  \n    }  \n  \n    override fun onMessageReceived(message: RemoteMessage) {  \n        super.onMessageReceived(message)  \n        ChatCenterPushMessageHelper.process(this, message.data)  \n        //your custom handling here  \n    }  \n}  \n")),(0,a.kt)("h2",{id:"migration-from-410-to-420"},"Migration from 4.1.0 to 4.2.0"),(0,a.kt)("h3",{id:"changes-in-chat-center-library-420"},"Changes in Chat Center Library 4.2.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A new required parameter, ",(0,a.kt)("inlineCode",{parentName:"li"},"datastoreUrl: String"),", has been added: it must be passed before starting the library.")),(0,a.kt)("p",null,"If you do not separate the paths for sending files and for working with the backend API, you can pass the same parameters for both ",(0,a.kt)("inlineCode",{parentName:"p"},"serverBaseUrl")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"datastoreUrl"),".\nExample of implementation via ",(0,a.kt)("inlineCode",{parentName:"p"},"ConfigBuilder"),":"),(0,a.kt)(o.Z,{groupId:"ios-language",defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"val configBuilder = ConfigBuilder(this) // this - android context  \nval transportConfig = getTransportConfig(this)  \nconfigBuilder.serverBaseUrl(transportConfig.baseUrl)  \n    .datastoreUrl(transportConfig.datastoreUrl)  \n    .threadsGateUrl(transportConfig.threadsGateUrl)  \n    .threadsGateProviderUid(transportConfig.threadsGateProviderUid)  \n    .threadsGateHCMProviderUid(transportConfig.threadsGateHCMProviderUid)  \n  \nfun getTransportConfig(ctx: Context?): TransportConfig? {  \n    val sharedPreferences = PreferenceManager.getDefaultSharedPreferences(ctx)  \n    val baseUrl = sharedPreferences.getString(PREF_SERVER_BASE_URL, null)  \n        ?: return null  \n    val datastoreUrl = sharedPreferences.getString(PREF_DATASTORE_URL, null)  \n        ?: return null  \n    val threadsGateUrl = sharedPreferences.getString(PREF_THREADS_GATE_URL, null)  \n        ?: return null  \n    val threadsGateProviderUid =  \n        sharedPreferences.getString(PREF_THREADS_GATE_PROVIDER_UID, null)  \n            ?: return null  \n    val threadsGateHCMProviderUid =  \n        sharedPreferences.getString(PREF_THREADS_GATE_HCM_PROVIDER_UID, null)  \n    return TransportConfig(  \n        baseUrl,  \n        datastoreUrl,  \n        threadsGateUrl,  \n        threadsGateProviderUid,  \n        threadsGateHCMProviderUid  \n    )  \n}  \n"))),(0,a.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"ConfigBuilder configBuilder = new ConfigBuilder(this); // this - android context  \nTransportConfig transportConfig = getTransportConfig(this);  \nconfigBuilder.serverBaseUrl(transportConfig.baseUrl)  \n    .datastoreUrl(transportConfig.datastoreUrl)  \n    .threadsGateUrl(transportConfig.threadsGateUrl)  \n    .threadsGateProviderUid(transportConfig.threadsGateProviderUid)  \n    .threadsGateHCMProviderUid(transportConfig.threadsGateHCMProviderUid);  \n  \nTransportConfig getTransportConfig(Context ctx) {  \n    SharedPreferences sharedPreferences = PreferenceManager.getDefaultSharedPreferences(ctx)  \n    String baseUrl = sharedPreferences.getString(PREF_SERVER_BASE_URL, null)  \n        ?: return null   \n    String datastoreUrl = sharedPreferences.getString(PREF_DATASTORE_URL, null)  \n        ?: return null  \n    String threadsGateUrl = sharedPreferences.getString(PREF_THREADS_GATE_URL, null)  \n        ?: return null  \n    String threadsGateProviderUid =  \n        sharedPreferences.getString(PREF_THREADS_GATE_PROVIDER_UID, null)  \n            ?: return null  \n    String threadsGateHCMProviderUid =  \n        sharedPreferences.getString(PREF_THREADS_GATE_HCM_PROVIDER_UID, null)  \n    return new TransportConfig(  \n        baseUrl,  \n        datastoreUrl,  \n        threadsGateUrl,  \n        threadsGateProviderUid,  \n        threadsGateHCMProviderUid  \n    )  \n}  \n")))),(0,a.kt)("p",null,"You can also register a parameter via the manifest:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<meta-data  \n  android:name="im.threads.getDatastoreUrl"  \n  android:value="http://datastore.yourcompany.com/"/>\n')),(0,a.kt)("h2",{id:"migration-from-450-to-460"},"Migration from 4.5.0 to 4.6.0"),(0,a.kt)("p",null,"In 4.6.0, we have refactored the SDK, as a result of which some imports have changed. The classes, that have changed their location, now have the ",(0,a.kt)("inlineCode",{parentName:"p"},"ui")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"business")," path in the package name. "),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"PrefUtils")," class, which gave you direct access to the SDK settings, is no longer available. Now, you need to use the external API methods for that."))}h.isMDXComponent=!0},85162:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>C});var n=r(87462),a=r(67294),o=r(86010),i=r(12466),s=r(76775),l=r(91980),u=r(67392),c=r(50012);function d(e){return function(e){var t;return(null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function g(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=p(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[l,u]=h({queryString:r,groupId:n}),[d,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),m=(()=>{const e=l??d;return g({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{m&&s(m)}),[m]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var m=r(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:r,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,r=c.indexOf(t),n=u[r].value;n!==s&&(d(t),l(n))},g=e=>{var t;let r=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1];break}}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:g,onClick:p},i,{className:(0,o.Z)("tabs__item",v.tabItem,null==i?void 0:i.className,{"tabs__item--active":s===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},a.createElement(b,(0,n.Z)({},e,t)),a.createElement(y,(0,n.Z)({},e,t)))}function C(e){const t=(0,m.Z)();return a.createElement(k,(0,n.Z)({key:String(t)},e))}}}]);