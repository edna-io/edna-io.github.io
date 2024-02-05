"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[27603],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>h});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),g=a,h=d["".concat(l,".").concat(g)]||d[g]||p[g]||o;return t?n.createElement(h,i(i({ref:r},c),{},{components:t})):n.createElement(h,i({ref:r},c))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},87845:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=t(87462),a=(t(67294),t(3905)),o=t(74866),i=t(85162);const s={},l="Migration Instructions",u={unversionedId:"migration/migration_guides",id:"version-4.5.0/migration/migration_guides",title:"Migration Instructions",description:"This article covers the instructions for migration to newer library versions.",source:"@site/i18n/en/docusaurus-plugin-content-docs-android/version-4.5.0/migration/migration_guides.md",sourceDirName:"migration",slug:"/migration/migration_guides",permalink:"/en/android/4.5.0/migration/migration_guides",draft:!1,tags:[],version:"4.5.0",lastUpdatedAt:1697698294,formattedLastUpdatedAt:"Oct 19, 2023",frontMatter:{},sidebar:"mainSidebar",previous:{title:"\u041c\u0438\u0433\u0440\u0430\u0446\u0438\u044f",permalink:"/en/android/4.5.0/category/\u043c\u0438\u0433\u0440\u0430\u0446\u0438\u044f"},next:{title:"Demo App",permalink:"/en/android/4.5.0/demo"}},c={},d=[{value:"Migration to 4.0.0",id:"migration-to-400",level:2},{value:"Changes in Operation of edna Chat Center Push Library 4.0.0",id:"changes-in-operation-of-edna-chat-center-push-library-400",level:3},{value:"Migration from 4.1.0 to 4.2.0",id:"migration-from-410-to-420",level:2},{value:"Changes in Chat Center Library 4.2.0",id:"changes-in-chat-center-library-420",level:3}],p={toc:d},g="wrapper";function h(e){let{components:r,...t}=e;return(0,a.kt)(g,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"migration-instructions"},"Migration Instructions"),(0,a.kt)("p",null,"This article covers the instructions for migration to newer library versions."),(0,a.kt)("h2",{id:"migration-to-400"},"Migration to 4.0.0"),(0,a.kt)("h3",{id:"changes-in-operation-of-edna-chat-center-push-library-400"},"Changes in Operation of edna Chat Center Push Library 4.0.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Dependency on the push-lite library has been removed."),(0,a.kt)("li",{parentName:"ul"},"The following classes used in the integration have been removed:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"im.threads.push.ThreadsPushBroadcastReceiver"),(0,a.kt)("li",{parentName:"ul"},"im.threads.push.ThreadsPushFcmIntentService")))),(0,a.kt)("p",null,"For push notifications to work correctly, own child must be defined in the application\xa0",(0,a.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/reference/android/com/google/firebase/messaging/FirebaseMessagingService"},"https://firebase.google.com/docs/reference/android/com/google/firebase/messaging/FirebaseMessagingService"),".\xa0To pass the token in the corresponding child method, use ChatCenterPushMessageHelper.setFcmToken(...). To process incoming push notifications, use ChatCenterPushMessageHelper.process(...). This method will only process the push notifications that contain origin=threads, i.e. the edna Chat Center membership flag."),(0,a.kt)("p",null,"The integration code example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"    override fun onNewToken(token: String) {  \n        super.onNewToken(token)  \n        ChatCenterPushMessageHelper.setFcmToken(token)  \n        //your custom handling here  \n    }  \n  \n    override fun onMessageReceived(message: RemoteMessage) {  \n        super.onMessageReceived(message)  \n        ChatCenterPushMessageHelper.process(this, message.data)  \n        //your custom handling here  \n    }  \n}  \n")),(0,a.kt)("h2",{id:"migration-from-410-to-420"},"Migration from 4.1.0 to 4.2.0"),(0,a.kt)("h3",{id:"changes-in-chat-center-library-420"},"Changes in Chat Center Library 4.2.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A new required parameter, ",(0,a.kt)("inlineCode",{parentName:"li"},"datastoreUrl: String"),", has been added: it must be passed before starting the library.")),(0,a.kt)("p",null,"If you do not separate the paths for sending files and for working with the backend API, you can pass the same parameters for both ",(0,a.kt)("inlineCode",{parentName:"p"},"serverBaseUrl")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"datastoreUrl"),".\nExample of implementation via ",(0,a.kt)("inlineCode",{parentName:"p"},"ConfigBuilder"),":"),(0,a.kt)(o.Z,{groupId:"ios-language",defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"val configBuilder = ConfigBuilder(this) // this - android context  \nval transportConfig = getTransportConfig(this)  \nconfigBuilder.serverBaseUrl(transportConfig.baseUrl)  \n    .datastoreUrl(transportConfig.datastoreUrl)  \n    .threadsGateUrl(transportConfig.threadsGateUrl)  \n    .threadsGateProviderUid(transportConfig.threadsGateProviderUid)  \n    .threadsGateHCMProviderUid(transportConfig.threadsGateHCMProviderUid)  \n  \nfun getTransportConfig(ctx: Context?): TransportConfig? {  \n    val sharedPreferences = PreferenceManager.getDefaultSharedPreferences(ctx)  \n    val baseUrl = sharedPreferences.getString(PREF_SERVER_BASE_URL, null)  \n        ?: return null  \n    val datastoreUrl = sharedPreferences.getString(PREF_DATASTORE_URL, null)  \n        ?: return null  \n    val threadsGateUrl = sharedPreferences.getString(PREF_THREADS_GATE_URL, null)  \n        ?: return null  \n    val threadsGateProviderUid =  \n        sharedPreferences.getString(PREF_THREADS_GATE_PROVIDER_UID, null)  \n            ?: return null  \n    val threadsGateHCMProviderUid =  \n        sharedPreferences.getString(PREF_THREADS_GATE_HCM_PROVIDER_UID, null)  \n    return TransportConfig(  \n        baseUrl,  \n        datastoreUrl,  \n        threadsGateUrl,  \n        threadsGateProviderUid,  \n        threadsGateHCMProviderUid  \n    )  \n}  \n"))),(0,a.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"ConfigBuilder configBuilder = new ConfigBuilder(this); // this - android context  \nTransportConfig transportConfig = getTransportConfig(this);  \nconfigBuilder.serverBaseUrl(transportConfig.baseUrl)  \n    .datastoreUrl(transportConfig.datastoreUrl)  \n    .threadsGateUrl(transportConfig.threadsGateUrl)  \n    .threadsGateProviderUid(transportConfig.threadsGateProviderUid)  \n    .threadsGateHCMProviderUid(transportConfig.threadsGateHCMProviderUid);  \n  \nTransportConfig getTransportConfig(Context ctx) {  \n    SharedPreferences sharedPreferences = PreferenceManager.getDefaultSharedPreferences(ctx)  \n    String baseUrl = sharedPreferences.getString(PREF_SERVER_BASE_URL, null)  \n        ?: return null   \n    String datastoreUrl = sharedPreferences.getString(PREF_DATASTORE_URL, null)  \n        ?: return null  \n    String threadsGateUrl = sharedPreferences.getString(PREF_THREADS_GATE_URL, null)  \n        ?: return null  \n    String threadsGateProviderUid =  \n        sharedPreferences.getString(PREF_THREADS_GATE_PROVIDER_UID, null)  \n            ?: return null  \n    String threadsGateHCMProviderUid =  \n        sharedPreferences.getString(PREF_THREADS_GATE_HCM_PROVIDER_UID, null)  \n    return new TransportConfig(  \n        baseUrl,  \n        datastoreUrl,  \n        threadsGateUrl,  \n        threadsGateProviderUid,  \n        threadsGateHCMProviderUid  \n    )  \n}  \n")))),(0,a.kt)("p",null,"You can also register a parameter via the manifest:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<meta-data  \n  android:name="im.threads.getDatastoreUrl"  \n  android:value="http://datastore.yourcompany.com/"/>\n')))}h.isMDXComponent=!0},85162:(e,r,t)=>{t.d(r,{Z:()=>i});var n=t(67294),a=t(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:r,hidden:t,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:t},r)}},74866:(e,r,t)=>{t.d(r,{Z:()=>k});var n=t(87462),a=t(67294),o=t(86010),i=t(12466),s=t(76775),l=t(91980),u=t(67392),c=t(50012);function d(e){return function(e){var r;return(null==(r=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:r.filter(Boolean))??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}}))}function p(e){const{values:r,children:t}=e;return(0,a.useMemo)((()=>{const e=r??d(t);return function(e){const r=(0,u.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function g(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function h(e){let{queryString:r=!1,groupId:t}=e;const n=(0,s.k6)(),o=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const r=new URLSearchParams(n.location.search);r.set(o,e),n.replace({...n.location,search:r.toString()})}),[o,n])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,o=p(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!g({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:o}))),[l,u]=h({queryString:t,groupId:n}),[d,f]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,o]=(0,c.Nk)(t);return[n,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:n}),m=(()=>{const e=l??d;return g({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{m&&s(m)}),[m]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var m=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:r,block:t,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const r=e.currentTarget,t=c.indexOf(r),n=u[t].value;n!==s&&(d(r),l(n))},g=e=>{var r;let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}null==(r=t)||r.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},r)},u.map((e=>{let{value:r,label:t,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,key:r,ref:e=>c.push(e),onKeyDown:g,onClick:p},i,{className:(0,o.Z)("tabs__item",v.tabItem,null==i?void 0:i.className,{"tabs__item--active":s===r})}),t??r)})))}function y(e){let{lazy:r,children:t,selectedValue:n}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==n}))))}function C(e){const r=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},a.createElement(b,(0,n.Z)({},e,r)),a.createElement(y,(0,n.Z)({},e,r)))}function k(e){const r=(0,m.Z)();return a.createElement(C,(0,n.Z)({key:String(r)},e))}}}]);