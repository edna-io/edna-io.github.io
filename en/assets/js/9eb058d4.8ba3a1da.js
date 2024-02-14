"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[63024],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,g=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},87720:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),o=n(74866),i=n(85162);const l={},s="Migration Instructions",u={unversionedId:"migration/migration_guides",id:"version-4.14.1/migration/migration_guides",title:"Migration Instructions",description:"This article covers the instructions for migration to newer library versions.",source:"@site/i18n/en/docusaurus-plugin-content-docs-android/version-4.14.1/migration/migration_guides.md",sourceDirName:"migration",slug:"/migration/migration_guides",permalink:"/en/android/4.14.1/migration/migration_guides",draft:!1,tags:[],version:"4.14.1",lastUpdatedAt:1698419024,formattedLastUpdatedAt:"Oct 27, 2023",frontMatter:{},sidebar:"mainSidebar",previous:{title:"\u041c\u0438\u0433\u0440\u0430\u0446\u0438\u044f",permalink:"/en/android/4.14.1/category/\u043c\u0438\u0433\u0440\u0430\u0446\u0438\u044f"},next:{title:"Demo App",permalink:"/en/android/4.14.1/demo"}},c={},d=[{value:"Migration to 4.0.0",id:"migration-to-400",level:2},{value:"Changes in Operation of edna Chat Center Push Library 4.0.0",id:"changes-in-operation-of-edna-chat-center-push-library-400",level:3},{value:"Migration from 4.1.0 to 4.2.0",id:"migration-from-410-to-420",level:2},{value:"Changes in Chat Center Library 4.2.0",id:"changes-in-chat-center-library-420",level:3},{value:"Migration from 4.5.0 to 4.6.0",id:"migration-from-450-to-460",level:2},{value:"Migration from 4.9.0 to 4.10.0",id:"migration-from-490-to-4100",level:2}],p={toc:d},h="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"migration-instructions"},"Migration Instructions"),(0,a.kt)("p",null,"This article covers the instructions for migration to newer library versions."),(0,a.kt)("h2",{id:"migration-to-400"},"Migration to 4.0.0"),(0,a.kt)("h3",{id:"changes-in-operation-of-edna-chat-center-push-library-400"},"Changes in Operation of edna Chat Center Push Library 4.0.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Dependency on the push-lite library has been removed."),(0,a.kt)("li",{parentName:"ul"},"The following classes used in the integration have been removed:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"im.threads.push.ThreadsPushBroadcastReceiver"),(0,a.kt)("li",{parentName:"ul"},"im.threads.push.ThreadsPushFcmIntentService")))),(0,a.kt)("p",null,"For push notifications to work correctly, own child must be defined in the application\xa0",(0,a.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/reference/android/com/google/firebase/messaging/FirebaseMessagingService"},"https://firebase.google.com/docs/reference/android/com/google/firebase/messaging/FirebaseMessagingService"),".\xa0To pass the token in the corresponding child method, use ChatCenterPushMessageHelper.setFcmToken(...). To process incoming push notifications, use ChatCenterPushMessageHelper.process(...). This method will only process the push notifications that contain origin=threads, i.e. the edna Chat Center membership flag."),(0,a.kt)("p",null,"The integration code example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"    override fun onNewToken(token: String) {  \n        super.onNewToken(token)  \n        ChatCenterPushMessageHelper.setFcmToken(token)  \n        //your custom handling here  \n    }  \n  \n    override fun onMessageReceived(message: RemoteMessage) {  \n        super.onMessageReceived(message)  \n        ChatCenterPushMessageHelper.process(this, message.data)  \n        //your custom handling here  \n    }  \n}  \n")),(0,a.kt)("h2",{id:"migration-from-410-to-420"},"Migration from 4.1.0 to 4.2.0"),(0,a.kt)("h3",{id:"changes-in-chat-center-library-420"},"Changes in Chat Center Library 4.2.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A new required parameter, ",(0,a.kt)("inlineCode",{parentName:"li"},"datastoreUrl: String"),", has been added: it must be passed before starting the library.")),(0,a.kt)("p",null,"If you do not separate the paths for sending files and for working with the backend API, you can pass the same parameters for both ",(0,a.kt)("inlineCode",{parentName:"p"},"serverBaseUrl")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"datastoreUrl"),".\nExample of implementation via ",(0,a.kt)("inlineCode",{parentName:"p"},"ConfigBuilder"),":"),(0,a.kt)(o.Z,{groupId:"ios-language",defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"val configBuilder = ConfigBuilder(this) // this - android context  \nval transportConfig = getTransportConfig(this)  \nconfigBuilder.serverBaseUrl(transportConfig.baseUrl)  \n    .datastoreUrl(transportConfig.datastoreUrl)  \n    .threadsGateUrl(transportConfig.threadsGateUrl)  \n    .threadsGateProviderUid(transportConfig.threadsGateProviderUid)\n  \nfun getTransportConfig(ctx: Context?): TransportConfig? {  \n    val sharedPreferences = PreferenceManager.getDefaultSharedPreferences(ctx)  \n    val baseUrl = sharedPreferences.getString(PREF_SERVER_BASE_URL, null)  \n        ?: return null  \n    val datastoreUrl = sharedPreferences.getString(PREF_DATASTORE_URL, null)  \n        ?: return null  \n    val threadsGateUrl = sharedPreferences.getString(PREF_THREADS_GATE_URL, null)  \n        ?: return null  \n    val threadsGateProviderUid =  \n        sharedPreferences.getString(PREF_THREADS_GATE_PROVIDER_UID, null)  \n            ?: return null  \n\n    return TransportConfig(  \n        baseUrl,  \n        datastoreUrl,  \n        threadsGateUrl,  \n        threadsGateProviderUid \n    )  \n}  \n"))),(0,a.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"ConfigBuilder configBuilder = new ConfigBuilder(this); // this - android context  \nTransportConfig transportConfig = getTransportConfig(this);  \nconfigBuilder.serverBaseUrl(transportConfig.baseUrl)  \n    .datastoreUrl(transportConfig.datastoreUrl)  \n    .threadsGateUrl(transportConfig.threadsGateUrl)  \n    .threadsGateProviderUid(transportConfig.threadsGateProviderUid);  \n  \nTransportConfig getTransportConfig(Context ctx) {  \n    SharedPreferences sharedPreferences = PreferenceManager.getDefaultSharedPreferences(ctx)  \n    String baseUrl = sharedPreferences.getString(PREF_SERVER_BASE_URL, null)  \n        ?: return null   \n    String datastoreUrl = sharedPreferences.getString(PREF_DATASTORE_URL, null)  \n        ?: return null  \n    String threadsGateUrl = sharedPreferences.getString(PREF_THREADS_GATE_URL, null)  \n        ?: return null  \n    String threadsGateProviderUid =  \n        sharedPreferences.getString(PREF_THREADS_GATE_PROVIDER_UID, null)  \n            ?: return null   \n    return new TransportConfig(  \n        baseUrl,  \n        datastoreUrl,  \n        threadsGateUrl,  \n        threadsGateProviderUid  \n    )  \n}  \n")))),(0,a.kt)("p",null,"You can also register a parameter via the manifest:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<meta-data  \n  android:name="im.threads.getDatastoreUrl"  \n  android:value="http://datastore.yourcompany.com/"/>\n')),(0,a.kt)("h2",{id:"migration-from-450-to-460"},"Migration from 4.5.0 to 4.6.0"),(0,a.kt)("p",null,"In 4.6.0, we have refactored the SDK, as a result of which some imports have changed. The classes, that have changed their location, now have the ",(0,a.kt)("inlineCode",{parentName:"p"},"ui")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"business")," path in the package name. "),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"PrefUtils")," class, which gave you direct access to the SDK settings, is no longer available. Now, you need to use the external API methods for that."),(0,a.kt)("h2",{id:"migration-from-490-to-4100"},"Migration from 4.9.0 to 4.10.0"),(0,a.kt)("p",null,"The first change is that attachments are now disabled by default. To enable adding and sending attachments, in the manifest, set the following parameter to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<meta-data\n    android:name="im.threads.attachmentEnabled"\n    tools:replace="android:value"\n    android:value="@bool/attachment_enabled"/>\n')),(0,a.kt)("p",null,"Alternatively, you can do it using the ",(0,a.kt)("inlineCode",{parentName:"p"},"showAttachmentsButton()")," method when creating ",(0,a.kt)("inlineCode",{parentName:"p"},"ConfigBuilder"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"val configBuilder = ConfigBuilder(this).showAttachmentsButton()\nThreadsLib.init(configBuilder)\n")),(0,a.kt)("p",null,"The second change is that you might require to adjust the display of images. In version 4.10, the proportions of the displayed images have changed, and also the ability to display a border for an image and adjust its size has been added. Learn more about these changes in the ",(0,a.kt)("strong",{parentName:"p"},"Chat Header Style Customization")," section of the ",(0,a.kt)("strong",{parentName:"p"},"Appearance and Behavior Customization")," article."))}g.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>C});var r=n(87462),a=n(67294),o=n(86010),i=n(12466),l=n(76775),s=n(91980),u=n(67392),c=n(50012);function d(e){return function(e){var t;return(null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,u]=g({queryString:n,groupId:r}),[d,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),f=(()=>{const e=s??d;return h({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,o]),tabValues:o}}var f=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==l&&(d(t),s(r))},h=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:p},i,{className:(0,o.Z)("tabs__item",v.tabItem,null==i?void 0:i.className,{"tabs__item--active":l===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=m(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},a.createElement(b,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function C(e){const t=(0,f.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}}}]);