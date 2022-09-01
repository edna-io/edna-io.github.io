"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[4888],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(n),h=r,m=c["".concat(s,".").concat(h)]||c[h]||p[h]||i;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7898:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),i=n(5488),l=n(5162);const o={sidebar_position:2},s="Configuration",d={unversionedId:"getting-started/usage",id:"version-4.5.0/getting-started/usage",title:"Configuration",description:"Initialization",source:"@site/i18n/en/docusaurus-plugin-content-docs-android/version-4.5.0/getting-started/usage.md",sourceDirName:"getting-started",slug:"/getting-started/usage",permalink:"/en/android/getting-started/usage",draft:!1,tags:[],version:"4.5.0",lastUpdatedAt:1662037981,formattedLastUpdatedAt:"Sep 1, 2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"mainSidebar",previous:{title:"Installation",permalink:"/en/android/getting-started/installation"},next:{title:"Configuring Notifications",permalink:"/en/android/getting-started/notifications"}},u={},p=[{value:"Initialization",id:"initialization",level:2},{value:"Chat Display",id:"chat-display",level:2}],c={toc:p};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration"},"Configuration"),(0,r.kt)("h2",{id:"initialization"},"Initialization"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In Application.onCreate(), you need to initialize the ThreadsLib.init(ConfigBuilder configBuilder) library.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"class ConfigBuilder {\n  private val context: Context\n  \n  private val pendingIntentCreator: PendingIntentCreator = { context, appMarker -> \n    ...\n  }\n  \n  private val unreadMessagesCountListener: UnreadMessagesCountListener? = null\n  \n  private val isDebugLoggingEnabled: Boolean = false\n  \n  private val historyLoadingCount: Int = 50\n  \n  class ConfigBuilder(val context: Context) {\n    ...\n  }\n}\n")),(0,r.kt)("p",null,"Initialization example: "),(0,r.kt)(i.Z,{groupId:"ios-language",defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"class ThreadsDemoApplication : Application() {\n  override fun onCreate() {\n        super.onCreate()\n        val configBuilder = ConfigBuilder(this) // this - android context  \n        val transportConfig = getTransportConfig(this)  \n        configBuilder.serverBaseUrl(transportConfig.baseUrl)  \n            .datastoreUrl(transportConfig.datastoreUrl)  \n            .threadsGateUrl(transportConfig.threadsGateUrl)  \n            .threadsGateProviderUid(transportConfig.threadsGateProviderUid)  \n            .threadsGateHCMProviderUid(transportConfig.threadsGateHCMProviderUid)  \n            \n        ThreadsLib.init(configBuilder)\n  }\n  \n  fun getTransportConfig(ctx: Context?): TransportConfig? {  \n        val sharedPreferences = PreferenceManager.getDefaultSharedPreferences(ctx)  \n        val baseUrl = sharedPreferences.getString(PREF_SERVER_BASE_URL, null)  \n            ?: return null  \n        val datastoreUrl = sharedPreferences.getString(PREF_DATASTORE_URL, null)  \n            ?: return null  \n        val threadsGateUrl = sharedPreferences.getString(PREF_THREADS_GATE_URL, null)  \n            ?: return null  \n        val threadsGateProviderUid =  \n            sharedPreferences.getString(PREF_THREADS_GATE_PROVIDER_UID, null)  \n                ?: return null  \n        val threadsGateHCMProviderUid =  \n            sharedPreferences.getString(PREF_THREADS_GATE_HCM_PROVIDER_UID, null)  \n        return TransportConfig(  \n            baseUrl,  \n            datastoreUrl,  \n            threadsGateUrl,  \n            threadsGateProviderUid,  \n            threadsGateHCMProviderUid  \n        )  \n  }  \n}\n"))),(0,r.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class ThreadsDemoApplication extends Application {\n    @Override\n    void onCreate() {\n        ConfigBuilder configBuilder = new ConfigBuilder(this); // this - android context  \n        TransportConfig transportConfig = getTransportConfig(this);\n        configBuilder.serverBaseUrl(transportConfig.baseUrl)\n                .datastoreUrl(transportConfig.datastoreUrl)\n                .threadsGateUrl(transportConfig.threadsGateUrl)\n                .threadsGateProviderUid(transportConfig.threadsGateProviderUid)\n                .threadsGateHCMProviderUid(transportConfig.threadsGateHCMProviderUid);\n    \n        ThreadsLib.init(configBuilder);\n   }\n\n  TransportConfig getTransportConfig(Context ctx) {\n        SharedPreferences sharedPreferences = PreferenceManager.getDefaultSharedPreferences(ctx);\n        String baseUrl = sharedPreferences.getString(PREF_SERVER_BASE_URL, null)\n                ?: return null;\n        String datastoreUrl = sharedPreferences.getString(PREF_DATASTORE_URL, null)\n                ?: return null;\n        String threadsGateUrl = sharedPreferences.getString(PREF_THREADS_GATE_URL, null)\n                ?: return null;\n        String threadsGateProviderUid =\n                sharedPreferences.getString(PREF_THREADS_GATE_PROVIDER_UID, null)\n                ?: return null;\n        String threadsGateHCMProviderUid =\n                sharedPreferences.getString(PREF_THREADS_GATE_HCM_PROVIDER_UID, null)\n        return new TransportConfig(\n                baseUrl,\n                datastoreUrl,\n                threadsGateUrl,\n                threadsGateProviderUid,\n                threadsGateHCMProviderUid\n        );\n  }\n}\n")))),(0,r.kt)("p",null,"The required parameters are as the follows:\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"context"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"serverBaseUrl"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"datastoreUrl"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"threadsGateUrl"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"threadsGateProviderUid"),". If you do not separate the paths for sending files and for working with the backend API, you can pass the same parameters for ",(0,r.kt)("inlineCode",{parentName:"p"},"serverBaseUrl")," and for ",(0,r.kt)("inlineCode",{parentName:"p"},"datastoreUrl"),".\nThese parameters (except for ",(0,r.kt)("inlineCode",{parentName:"p"},"context"),") and many others can be specified via the manifest. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<meta-data  \n  android:name="im.threads.getDatastoreUrl"  \n  android:value="http://datastore.yourcompany.com/"/>\n')),(0,r.kt)("p",null,"Following is the full list of the parameters that can be speicifed via the manifest:\n",(0,r.kt)("inlineCode",{parentName:"p"},'"im.threads.getDatastoreUrl"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"im.threads.getServerUrl"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"im.threads.threadsGateUrl"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"im.threads.threadsGateProviderUid"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"im.threads.threadsGateHCMProviderUid'),",\n",(0,r.kt)("inlineCode",{parentName:"p"},'"im.threads.clientIdIgnoreEnabled"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"im.threads.newChatCenterApi"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"im.threads.attachmentEnabled"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"im.threads.filesAndMediaMenuItemEnabled"')),(0,r.kt)("p",null,"For the details about the required class parameters, refer to ",(0,r.kt)("a",{parentName:"p",href:"/i18n/en/docusaurus-plugin-content-docs-android/current/advanced/ui.md"},"Appearance and Behavior Customization"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See the full documentation of the push library here:\xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ThreadsMobileLib/threads-sdk-android/blob/master/push-lib/MFMSPushLite.pdf"},"MFMSPushLite.pdf"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can see the parameter and file formats in more detail in the code of a test app. If you have any questions, contact ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@edna.ru"},"support@edna.ru"))),(0,r.kt)("p",null,"Before you start working with the chat, you need to initialize the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"ThreadsLib.initUser(UserInfoBuilder userInfo)")," user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"    class UserInfoBuilder(var clientId: String) {\n        var clientIdSignature: String\n        var userName: String?\n        var data: String?\n        var appMarker: String?\n        var clientIdEncrypted: Boolean = false; // true if client id is encrypted\n        ...\n    }\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The only required parameter is\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"clientId"),". It must be unique and always refer to the same user. Avoid using phone numbers, email addresses, and other identifiers linked to user data as an identifier. ")),(0,r.kt)("h2",{id:"chat-display"},"Chat Display"),(0,r.kt)("p",null,"The chat can be displayed in two ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"While being active -\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"startActivity(new Intent(this, ChatActivity.class))")),(0,r.kt)("li",{parentName:"ul"},"In a fragment",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Create\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"ChatFragment.newInstance()"),"\xa0and display it in a required container"),(0,r.kt)("li",{parentName:"ul"},'Pass the "back" button clicks and check whether that chat needs to be closed:')))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"override fun onBackPressed() {\n    val needsCloseChat: Boolean = chatFragment.onBackPressed();\n    if (needsCloseChat) {\n        //hide chatfragment\n    }\n}\n")),(0,r.kt)("p",null,"To customize the chat appearance, use ",(0,r.kt)("inlineCode",{parentName:"p"},"ThreadsLib.applyChatStyle(ChatStyle chatStyle)"),". You can also redefine the library resources, but ",(0,r.kt)("inlineCode",{parentName:"p"},"ChatStyle"),"\xa0has more priority. The full list of settings is available here:\xa0",(0,r.kt)("a",{parentName:"p",href:"/i18n/en/docusaurus-plugin-content-docs-android/current/advanced/ui.md"},"Behavior and Appearance Settings")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Example in\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"ChatStyleBuilderHelper"),"\xa0in the demo app")))}h.isMDXComponent=!0},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(7462),r=n(7294),i=n(6010),l=n(2389),o=n(7392),s=n(7094),d=n(2466);const u="tabList__CuJ",p="tabItem_LNqP";function c(e){var t,n;const{lazy:l,block:c,defaultValue:h,values:m,groupId:f,className:g}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,o.l)(b,((e,t)=>e.value===t.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const C=null===h?h:null!=(t=null!=h?h:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==C&&!b.some((e=>e.value===C)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+C+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:P}=(0,s.U)(),[U,N]=(0,r.useState)(C),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,d.o5)();if(null!=f){const e=y[f];null!=e&&e!==U&&b.some((t=>t.value===e))&&N(e)}const S=e=>{const t=e.currentTarget,n=T.indexOf(t),a=b[n].value;a!==U&&(E(t),N(a),null!=f&&P(f,String(a)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=T.indexOf(e.currentTarget)+1;n=null!=(a=T[t])?a:T[0];break}case"ArrowLeft":{var r;const t=T.indexOf(e.currentTarget)-1;n=null!=(r=T[t])?r:T[T.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},g)},b.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:U===t?0:-1,"aria-selected":U===t,key:t,ref:e=>T.push(e),onKeyDown:I,onFocus:S,onClick:S},l,{className:(0,i.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":U===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(v.filter((e=>e.props.value===U))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==U})))))}function h(e){const t=(0,l.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}}}]);