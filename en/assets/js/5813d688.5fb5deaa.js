"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[86099],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46287:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),i=n(74866),l=n(85162);const o={sidebar_position:2},s="Configuration",u={unversionedId:"getting-started/usage",id:"version-4.21.0/getting-started/usage",title:"Configuration",description:"Initialization",source:"@site/i18n/en/docusaurus-plugin-content-docs-android/version-4.21.0/getting-started/usage.md",sourceDirName:"getting-started",slug:"/getting-started/usage",permalink:"/en/android/4.21.0/getting-started/usage",draft:!1,tags:[],version:"4.21.0",lastUpdatedAt:1717146390,formattedLastUpdatedAt:"May 31, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"mainSidebar",previous:{title:"Installation",permalink:"/en/android/4.21.0/getting-started/installation"},next:{title:"Configuring Notifications",permalink:"/en/android/4.21.0/getting-started/notifications"}},d={},p=[{value:"Initialization",id:"initialization",level:2},{value:"Chat Display",id:"chat-display",level:2}],c={toc:p},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration"},"Configuration"),(0,r.kt)("h2",{id:"initialization"},"Initialization"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In Application.onCreate(), you need to initialize the ThreadsLib.init(ConfigBuilder configBuilder) library.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"class ConfigBuilder {\n  private val context: Context\n  \n  private val pendingIntentCreator: PendingIntentCreator = { context, appMarker -> \n    ...\n  }\n  \n  private val unreadMessagesCountListener: UnreadMessagesCountListener? = null\n  \n  private val isDebugLoggingEnabled: Boolean = false\n  \n  private val historyLoadingCount: Int = 50\n  \n  class ConfigBuilder(val context: Context) {\n    ...\n  }\n}\n")),(0,r.kt)("p",null,"Initialization example: "),(0,r.kt)(i.Z,{groupId:"ios-language",defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"class ThreadsDemoApplication : Application() {\n  override fun onCreate() {\n        super.onCreate()\n        val configBuilder = ConfigBuilder(this) // this - android context  \n        val transportConfig = getTransportConfig(this)  \n        configBuilder.serverBaseUrl(transportConfig.baseUrl)  \n            .datastoreUrl(transportConfig.datastoreUrl)  \n            .threadsGateUrl(transportConfig.threadsGateUrl)  \n            .threadsGateProviderUid(transportConfig.threadsGateProviderUid) \n            \n        ThreadsLib.init(configBuilder)\n  }\n  \n  fun getTransportConfig(ctx: Context?): TransportConfig? {  \n        val sharedPreferences = PreferenceManager.getDefaultSharedPreferences(ctx)  \n        val baseUrl = sharedPreferences.getString(PREF_SERVER_BASE_URL, null)  \n            ?: return null  \n        val datastoreUrl = sharedPreferences.getString(PREF_DATASTORE_URL, null)  \n            ?: return null  \n        val threadsGateUrl = sharedPreferences.getString(PREF_THREADS_GATE_URL, null)  \n            ?: return null  \n        val threadsGateProviderUid =  \n            sharedPreferences.getString(PREF_THREADS_GATE_PROVIDER_UID, null)  \n                ?: return null  \n\n        return TransportConfig(  \n            baseUrl,  \n            datastoreUrl,  \n            threadsGateUrl,  \n            threadsGateProviderUid  \n        )  \n  }  \n}\n"))),(0,r.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class ThreadsDemoApplication extends Application {\n    @Override\n    void onCreate() {\n        ConfigBuilder configBuilder = new ConfigBuilder(this); // this - android context  \n        TransportConfig transportConfig = getTransportConfig(this);\n        configBuilder.serverBaseUrl(transportConfig.baseUrl)\n                .datastoreUrl(transportConfig.datastoreUrl)\n                .threadsGateUrl(transportConfig.threadsGateUrl)\n                .threadsGateProviderUid(transportConfig.threadsGateProviderUid);\n\n        ThreadsLib.init(configBuilder);\n   }\n\n  TransportConfig getTransportConfig(Context ctx) {\n        SharedPreferences sharedPreferences = PreferenceManager.getDefaultSharedPreferences(ctx);\n        String baseUrl = sharedPreferences.getString(PREF_SERVER_BASE_URL, null)\n                ?: return null;\n        String datastoreUrl = sharedPreferences.getString(PREF_DATASTORE_URL, null)\n                ?: return null;\n        String threadsGateUrl = sharedPreferences.getString(PREF_THREADS_GATE_URL, null)\n                ?: return null;\n        String threadsGateProviderUid =\n                sharedPreferences.getString(PREF_THREADS_GATE_PROVIDER_UID, null)\n                ?: return null;\n\n        return new TransportConfig(\n                baseUrl,\n                datastoreUrl,\n                threadsGateUrl,\n                threadsGateProviderUid\n        );\n  }\n}\n")))),(0,r.kt)("p",null,"The required parameters are as the follows:\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"context"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"serverBaseUrl"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"datastoreUrl"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"threadsGateUrl"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"threadsGateProviderUid"),". If you do not separate the paths for sending files and for working with the backend API, you can pass the same parameters for ",(0,r.kt)("inlineCode",{parentName:"p"},"serverBaseUrl")," and for ",(0,r.kt)("inlineCode",{parentName:"p"},"datastoreUrl"),".\nThese parameters (except for ",(0,r.kt)("inlineCode",{parentName:"p"},"context"),") and many others can be specified via the manifest. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<meta-data  \n  android:name="im.threads.getDatastoreUrl"  \n  android:value="http://datastore.yourcompany.com/"/>\n')),(0,r.kt)("p",null,"Following is the full list of the parameters that can be speicifed via the manifest:\n",(0,r.kt)("inlineCode",{parentName:"p"},'"im.threads.getDatastoreUrl"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"im.threads.getServerUrl"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"im.threads.threadsGateUrl"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"im.threads.threadsGateProviderUid"'),",\n",(0,r.kt)("inlineCode",{parentName:"p"},'"im.threads.clientIdIgnoreEnabled"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"im.threads.newChatCenterApi"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"im.threads.attachmentEnabled"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"im.threads.filesAndMediaMenuItemEnabled"')),(0,r.kt)("p",null,"For the details about the required class parameters, refer to ",(0,r.kt)("a",{parentName:"p",href:"/i18n/en/docusaurus-plugin-content-docs-android/current/advanced/ui"},"Appearance and Behavior Customization"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can see the parameter and file formats in more detail in the code of a test app. If you have any questions, contact ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@edna.ru"},"support@edna.ru"))),(0,r.kt)("p",null,"Before you start working with the chat, you need to initialize the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"ThreadsLib.initUser(UserInfoBuilder userInfo)")," user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"    class UserInfoBuilder(var clientId: String) {\n        var authToken: String?    \n        var authSchema: String?\n        var clientData: String?\n        var clientIdSignature: String\n        var userName: String?\n        var appMarker: String?\n        var clientIdEncrypted: Boolean = false // true if client id is encrypted\n        // ...\n    }\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"authToken"),"\xa0- String that will be passed in the Authorization http header."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"authSchema"),"\xa0- String that will be passed in the X-Auth-Schema http header."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clientIdSignature"),"\xa0- Authorization signature clientId. The signature must be generated on your authorization server based on clientId using the RSA private key, then encrypted in Base64. For more details, refer to the backend documentation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"userName"),"\xa0- Client's name (can be empty)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clientData"),"\xa0-  JSON string with custom client data. The following parameters will be displayed in general client info:\nExample:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Name Surname",\n  "phone": "+7-999-999-99-99",\n  "email": "e@mail.com",\n  "customField":"customValue"\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"appMarker"),"\xa0- App identifier. edna Android supports connecting several apps to the same server. For more details, refer to\xa0",(0,r.kt)("a",{parentName:"li",href:"/android/advanced/ui"},"Appearance and Behavior Configuration"),"). For that, you need to configure the identifier on the server and in the apps. Any unique string can be used as\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"appMarker"),".\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"appMarker"),"\xa0must be the same for the corresponding Android and iOS apps."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clientIdEncrypted"),"\xa0-  Flag indicating that\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"clientId"),"\xa0is passed encrypted.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The only required parameter is\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"clientId"),". It must be unique and always refer to the same user. Avoid using phone numbers, email addresses, and other identifiers linked to user data as an identifier. ")),(0,r.kt)("h2",{id:"chat-display"},"Chat Display"),(0,r.kt)("p",null,"The chat can be displayed in two ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"While being active -\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"startActivity(new Intent(this, ChatActivity.class))")),(0,r.kt)("li",{parentName:"ul"},"In a fragment",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Create\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"ChatFragment.newInstance()"),"\xa0and display it in a required container"),(0,r.kt)("li",{parentName:"ul"},'Pass the "back" button clicks and check whether that chat needs to be closed:')))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"override fun onBackPressed() {\n    val needsCloseChat: Boolean = chatFragment.onBackPressed();\n    if (needsCloseChat) {\n        //hide chatfragment\n    }\n}\n")),(0,r.kt)("p",null,"To customize the chat appearance, use ",(0,r.kt)("inlineCode",{parentName:"p"},"ThreadsLib.applyChatStyle(ChatStyle chatStyle)"),". You can also redefine the library resources, but ",(0,r.kt)("inlineCode",{parentName:"p"},"ChatStyle"),"\xa0has more priority. The full list of settings is available here:\xa0",(0,r.kt)("a",{parentName:"p",href:"/i18n/en/docusaurus-plugin-content-docs-android/current/advanced/ui"},"Behavior and Appearance Settings")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Example in\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"ChatStyleBuilderHelper"),"\xa0in the demo app")))}h.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>C});var a=n(87462),r=n(67294),i=n(86010),l=n(12466),o=n(76775),s=n(91980),u=n(67392),d=n(50012);function p(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=c(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,u]=h({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),g=(()=>{const e=s??p;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var g=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),c=e=>{const t=e.currentTarget,n=d.indexOf(t),a=u[n].value;a!==o&&(p(t),s(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:c},l,{className:(0,i.Z)("tabs__item",v.tabItem,null==l?void 0:l.className,{"tabs__item--active":o===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",v.tabList)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function C(e){const t=(0,g.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}}}]);