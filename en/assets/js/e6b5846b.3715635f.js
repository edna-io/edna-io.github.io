"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[68246],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return t?a.createElement(g,o(o({ref:n},c),{},{components:t})):a.createElement(g,o({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},55175:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=t(87462),r=(t(67294),t(3905)),i=t(74866),o=t(85162);const s={sidebar_position:3},l="Configuring Notifications",u={unversionedId:"getting-started/notifications",id:"version-4.2.0/getting-started/notifications",title:"Configuring Notifications",description:"You need to configure notifications and add meta information about data store:",source:"@site/i18n/en/docusaurus-plugin-content-docs-android/version-4.2.0/getting-started/notifications.md",sourceDirName:"getting-started",slug:"/getting-started/notifications",permalink:"/en/android/4.2.0/getting-started/notifications",draft:!1,tags:[],version:"4.2.0",lastUpdatedAt:1678971690,formattedLastUpdatedAt:"Mar 16, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"mainSidebar",previous:{title:"Configuration",permalink:"/en/android/4.2.0/getting-started/usage"},next:{title:"Graphic Scheme",permalink:"/en/android/4.2.0/getting-started/graphics"}},c={},d=[{value:"Additional Info",id:"additional-info",level:4},{value:"Firebase",id:"firebase",level:2},{value:"Adding google-services.json",id:"adding-google-servicesjson",level:3},{value:"Configuring Manifest",id:"configuring-manifest",level:3},{value:"Push Notifications",id:"push-notifications",level:3},{value:"Huawei Media Services (HMS)",id:"huawei-media-services-hms",level:2},{value:"Enabling Push Notifications",id:"enabling-push-notifications",level:3},{value:"Integration with Push Lite",id:"integration-with-push-lite",level:2}],p={toc:d},m="wrapper";function g(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuring-notifications"},"Configuring Notifications"),(0,r.kt)("p",null,"You need to configure notifications and add meta information about data store:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Permissions:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<permission android:name="${applicationId}.permission.pushserver.RECEIVE"\n            android:protectionLevel="signature" />\n<uses-permission android:name="android.permission.INTERNET" />\n<uses-permission android:name="${applicationId}.permission.pushserver.RECEIVE" />\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Meta information:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<meta-data\n    android:name="im.threads.getServerUrl"\n    android:value="YOUR_DATASTORE_URL" />\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"YOUR_DATASTORE_URL")," parameter will be issued to you once you connect."),(0,r.kt)("h4",{id:"additional-info"},"Additional Info"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Enabling of debug logging of the push library:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<meta-data\n    android:name="com.pushserver.android.logs"\n    android:value="true"/>\n')),(0,r.kt)("h2",{id:"firebase"},"Firebase"),(0,r.kt)("p",null,"For push notifications to work correctly, you need to define the heir in the application ",(0,r.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/reference/android/com/google/firebase/messaging/FirebaseMessagingService"},"https://firebase.google.com/docs/reference/android/com/google/firebase/messaging/FirebaseMessagingService"),".\nTo pass the token in the respective methods of the heir, use ",(0,r.kt)("inlineCode",{parentName:"p"},"ChatCenterPushMessageHelper.setFcmToken(...)"),".\nTo process an incoming push notification, use ",(0,r.kt)("inlineCode",{parentName:"p"},"ChatCenterPushMessageHelper.process(...)"),". This method will only process the push notifications that contain origin=threads, i.e. the edna Chat Center membership flag."),(0,r.kt)("h3",{id:"adding-google-servicesjson"},"Adding google-services.json"),(0,r.kt)("p",null,"The following two options are possible:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using your Firebase account, generate a ",(0,r.kt)("inlineCode",{parentName:"li"},"google-services.json")," file. To get registered in the syste, specify your ",(0,r.kt)("inlineCode",{parentName:"li"},"project_number")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"API_KEY")," from the Firebase console (not from ",(0,r.kt)("inlineCode",{parentName:"li"},"google-services.json"),")."),(0,r.kt)("li",{parentName:"ul"},"Using your Firebase account, specify yuor app's ",(0,r.kt)("inlineCode",{parentName:"li"},"applicationId"),", and we'll send you the ",(0,r.kt)("inlineCode",{parentName:"li"},"google-services.json")," file.")),(0,r.kt)("p",null,"You need to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"google-services.json")," file to the project next to ",(0,r.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml")),(0,r.kt)("h3",{id:"configuring-manifest"},"Configuring Manifest"),(0,r.kt)("p",null,"Registering a handler:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<service android:name=".push.CustomPushFcmIntentService"\n    android:exported="false">\n    <intent-filter>\n        <action android:name="com.google.firebase.MESSAGING_EVENT" />\n    </intent-filter>\n</service>\n')),(0,r.kt)("h3",{id:"push-notifications"},"Push Notifications"),(0,r.kt)("p",null,"When receiving information from Firebase, you need to save it to the library. You also need to register a handler for new messages. For that, you need to redefine the ",(0,r.kt)("inlineCode",{parentName:"p"},"FcmPushService")," class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"class CustomPushFcmIntentService : FcmPushService() {\n    override fun onNewToken(token: String) {\n        super.onNewToken(token)\n        ChatCenterPushMessageHelper.setFcmToken(token)\n    }\n    override fun onMessageReceived(message: RemoteMessage) {\n        super.onMessageReceived(message)\n        ChatCenterPushMessageHelper.process(this, message.data)\n    }\n}\n")),(0,r.kt)("p",null,"Also, you need to pass the key from Firbase push notifications. You can do it via the manifest:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<meta-data\n    android:name="im.threads.threadsGateProviderUid"\n    android:value="YOUR_THREADS_GATE_FCM_PROVIDER_UID"/>\n')),(0,r.kt)("p",null,"or by calling a respective method when creating Transport Config at the time of library connection:"),(0,r.kt)(i.Z,{groupId:"ios-language",defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"class ThreadsDemoApplication : Application() {\n  override fun onCreate() {\n        super.onCreate()\n        val configBuilder = ConfigBuilder(this) // this - android context  \n        val transportConfig = getTransportConfig(this)  \n        configBuilder.threadsGateProviderUid(transportConfig.threadsGateProviderUid)  \n            \n        ThreadsLib.init(configBuilder)\n  }\n  \n  fun getTransportConfig(ctx: Context?): TransportConfig? {  \n        // ...\n        val threadsGateProviderUid =  \n            sharedPreferences.getString(PREF_THREADS_GATE_PROVIDER_UID, null)  \n                ?: return null  \n       \n        return TransportConfig(  \n            // ...\n            threadsGateProviderUid\n        )  \n  }  \n}\n"))),(0,r.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class ThreadsDemoApplication extends Application {\n    @Override\n    void onCreate() {\n        ConfigBuilder configBuilder = new ConfigBuilder(this); // this - android context  \n        TransportConfig transportConfig = getTransportConfig(this);\n        configBuilder.threadsGateProviderUid(transportConfig.threadsGateProviderUid);\n    \n        ThreadsLib.init(configBuilder);\n   }\n\n  TransportConfig getTransportConfig(Context ctx) {\n        // ...\n        String threadsGateProviderUid =\n                sharedPreferences.getString(PREF_THREADS_GATE_PROVIDER_UID, null)\n                ?: return null;\n        \n        return new TransportConfig(\n                // ...\n                threadsGateProviderUid\n        );\n  }\n}\n")))),(0,r.kt)("h2",{id:"huawei-media-services-hms"},"Huawei Media Services (HMS)"),(0,r.kt)("h3",{id:"enabling-push-notifications"},"Enabling Push Notifications"),(0,r.kt)("p",null,"The configuration process is similar to the one for Firebase. "),(0,r.kt)("p",null,"Add HMS to the project ",(0,r.kt)("a",{parentName:"p",href:"https://developer.huawei.com/consumer/en/codelab/HMSPushKit/index.html"},"https://developer.huawei.com/consumer/en/codelab/HMSPushKit/index.html"),". "),(0,r.kt)("p",null,"When you receive information from Huawei, you need to save it to the library. You also need to register a handler for new messages. For that, you need to redefine the ",(0,r.kt)("inlineCode",{parentName:"p"},"HcmPushService")," class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"class CustomPushHcmIntentService : HcmPushService() {\n    override fun onNewToken(token: String) {\n        super.onNewToken(token)\n        ChatCenterPushMessageHelper.setHcmToken(token)\n    }\n    override fun onMessageReceived(message: RemoteMessage) {\n        super.onMessageReceived(message)\n        ChatCenterPushMessageHelper.process(\n                this,\n                CommonUtils.base64JsonStringToBundle(message.data)\n        )\n    }\n}\n")),(0,r.kt)("p",null,"Then you need to add the handler to the manifest:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<service\n   android:name=".push.CustomPushHcmIntentService"\n   android:exported="false">\n   <intent-filter>\n       <action android:name="com.huawei.push.action.MESSAGING_EVENT" />\n   </intent-filter>\n</service>\n')),(0,r.kt)("h2",{id:"integration-with-push-lite"},"Integration with Push Lite"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This section is only relevant for the projects that already use SDK push-lite to deliver push notifications.\nTo configure and integrate push-lite, follow the instructions provided with the SDK.")),(0,r.kt)("p",null,"After integration with the required push clients has been successfully completed, you can start integration with Chat Center. To do this, you need to add the following logic to transfer tokens and messages to the SDK:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For Firebase:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"class CustomPushFcmIntentService : FcmPushService() {\n    override fun onNewToken(token: String) {\n        super.onNewToken(token)\n        ChatCenterPushMessageHelper.setFcmToken(token)\n    }\n\n    override fun onMessageReceived(message: RemoteMessage) {\n        super.onMessageReceived(message)\n        ChatCenterPushMessageHelper.process(this, message.data)\n    }\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For HMS:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"class CustomPushHcmIntentService : HcmPushService() {\n    override fun onNewToken(token: String) {\n        super.onNewToken(token)\n        ChatCenterPushMessageHelper.setHcmToken(token)\n    }\n\n    override fun onMessageReceived(message: RemoteMessage) {\n        super.onMessageReceived(message)\n        ChatCenterPushMessageHelper.process(\n                this,\n                CommonUtils.base64JsonStringToBundle(message.data)\n        )\n    }\n}\n")),(0,r.kt)("p",null,"After that, you need to add the declaration of both services to the manifest:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<service android:name=".push.CustomPushFcmIntentService"\n   android:exported="false">\n   <intent-filter>\n       <action android:name="com.google.firebase.MESSAGING_EVENT" />\n   </intent-filter>\n</service>\n\n<service\n   android:name=".push.CustomPushHcmIntentService"\n   android:exported="false">\n   <intent-filter>\n       <action android:name="com.huawei.push.action.MESSAGING_EVENT" />\n   </intent-filter>\n</service>\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Take note of adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"PushController.getInstance(this).init()")," method to ",(0,r.kt)("inlineCode",{parentName:"p"},"Application.onCreate()")," that occurs in step 1.2.3 of the push-lite documentation.")))}g.isMDXComponent=!0},85162:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(67294),r=t(86010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:t},n)}},74866:(e,n,t)=>{t.d(n,{Z:()=>C});var a=t(87462),r=t(67294),i=t(86010),o=t(12466),s=t(76775),l=t(91980),u=t(67392),c=t(50012);function d(e){return function(e){var n;return(null==(n=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:n.filter(Boolean))??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??d(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=p(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[l,u]=g({queryString:t,groupId:a}),[d,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,c.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),h=(()=>{const e=l??d;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var h=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:n,block:t,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const n=e.currentTarget,t=c.indexOf(n),a=u[t].value;a!==s&&(d(n),l(a))},m=e=>{var n;let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}null==(n=t)||n.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:e=>c.push(e),onKeyDown:m,onClick:p},o,{className:(0,i.Z)("tabs__item",v.tabItem,null==o?void 0:o.className,{"tabs__item--active":s===n})}),t??n)})))}function b(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function y(e){const n=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",v.tabList)},r.createElement(k,(0,a.Z)({},e,n)),r.createElement(b,(0,a.Z)({},e,n)))}function C(e){const n=(0,h.Z)();return r.createElement(y,(0,a.Z)({key:String(n)},e))}}}]);