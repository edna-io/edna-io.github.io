"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[60014],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15059:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={sidebar_position:2},o="Configuration",l={unversionedId:"getting-started/usage",id:"version-4.3.0/getting-started/usage",title:"Configuration",description:"Initialization",source:"@site/i18n/en/docusaurus-plugin-content-docs-android/version-4.3.0/getting-started/usage.md",sourceDirName:"getting-started",slug:"/getting-started/usage",permalink:"/en/android/4.3.0/getting-started/usage",draft:!1,tags:[],version:"4.3.0",lastUpdatedAt:1689681842,formattedLastUpdatedAt:"Jul 18, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"mainSidebar",previous:{title:"Installation",permalink:"/en/android/4.3.0/getting-started/installation"},next:{title:"Configuring Notifications",permalink:"/en/android/4.3.0/getting-started/notifications"}},s={},p=[{value:"Initialization",id:"initialization",level:2},{value:"Chat Display",id:"chat-display",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configuration"},"Configuration"),(0,i.kt)("h2",{id:"initialization"},"Initialization"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In Application.onCreate(), you need to initialize the ThreadsLib.init(ConfigBuilder configBuilder) library.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public static final class ConfigBuilder {\n    @NonNull\n    private Context context;\n    @NonNull\n    private PendingIntentCreator pendingIntentCreator = (context1, appMarker) -> {\n        ...\n    };\n    @Nullable\n    private UnreadMessagesCountListener unreadMessagesCountListener = null;\n\n    private boolean isDebugLoggingEnabled = false;\n\n    private int historyLoadingCount = 50;\n\n    public ConfigBuilder(@NonNull Context context) {\n        ...\n    }\n    ...\n}\n")),(0,i.kt)("p",null,"The only required parameter is\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"context"),". For more details of the parameters of this class, refer to\xa0",(0,i.kt)("a",{parentName:"p",href:"/i18n/en/docusaurus-plugin-content-docs-android/current/advanced/ui"},"Behavior and Appearance Settings")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"See the full documentation of the push library here:\xa0",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThreadsMobileLib/threads-sdk-android/blob/master/push-lib/MFMSPushLite.pdf"},"MFMSPushLite.pdf"))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can see the parameter and file formats in more detail in the code of a test app. If you have any questions, contact ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@edna.ru"},"support@edna.ru"))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Before working with the chat, you need to initialize the\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"ThreadsLib.initUser(UserInfo userInfo)")," user.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    public static final class UserInfo {\n        @NonNull\n        private String clientId;\n        @Nullable\n        private String clientIdSignature;\n        @Nullable\n        private String userName;\n        @Nullable\n        private String data;\n        @Nullable\n        private String appMarker;\n        /**\n         * true if client id is encrypted\n         */\n        private boolean clientIdEncrypted = false;\n\n        public UserInfo(@NonNull String clientId) {\n        ...\n        }\n        ...\n    }\n")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The only required parameter is\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"clientId"),". It must be unique and always refer to the same user. Avoid using phone numbers, email addresses, and other identifiers linked to user data as an identifier. ")),(0,i.kt)("h2",{id:"chat-display"},"Chat Display"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The chat can be displayed in two ways:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"While being active -\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"startActivity(new Intent(this, ChatActivity.class))")),(0,i.kt)("li",{parentName:"ul"},"In a fragment",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Create\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"ChatFragment.newInstance()"),"\xa0and display it in a required container"),(0,i.kt)("li",{parentName:"ul"},'Pass the "back" button clicks and check whether that chat needs to be closed:')))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public void onBackPressed() {\n    boolean needsCloseChat = chatFragment.onBackPressed();\n    if (needsCloseChat) {\n        //hide chatfragment\n    }\n}\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"To customize the chat appearance, use ThreadsLib.applyChatStyle(ChatStyle chatStyle). You can also redefine the library resources, but ",(0,i.kt)("inlineCode",{parentName:"li"},"ChatStyle"),"\xa0has more priority. The full list of settings is available here:\xa0",(0,i.kt)("a",{parentName:"li",href:"/i18n/en/docusaurus-plugin-content-docs-android/current/advanced/ui"},"Behavior and Appearance Settings"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Example in\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"ChatStyleBuilderHelper"),"\xa0in the demo app")))}c.isMDXComponent=!0}}]);