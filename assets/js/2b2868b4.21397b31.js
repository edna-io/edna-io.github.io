"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[6201],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(t),u=r,v=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return t?a.createElement(v,s(s({ref:n},p),{},{components:t})):a.createElement(v,s({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var d=2;d<i;d++)s[d]=t[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},833:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=t(7462),r=(t(7294),t(3905));const i={sidebar_position:3},s="\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0439",o={unversionedId:"getting-started/notifications",id:"version-4.5.0/getting-started/notifications",title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0439",description:"Firebase",source:"@site/android_versioned_docs/version-4.5.0/getting-started/notifications.md",sourceDirName:"getting-started",slug:"/getting-started/notifications",permalink:"/android/getting-started/notifications",draft:!1,tags:[],version:"4.5.0",lastUpdatedAt:1662037981,formattedLastUpdatedAt:"1 \u0441\u0435\u043d\u0442. 2022 \u0433.",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"mainSidebar",previous:{title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430",permalink:"/android/getting-started/usage"},next:{title:"\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0445\u0435\u043c\u0430",permalink:"/android/getting-started/graphics"}},l={},d=[{value:"Firebase",id:"firebase",level:2},{value:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 google-services.json",id:"\u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435-google-servicesjson",level:3},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 manifest",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-manifest",level:3},{value:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e",id:"\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e",level:4},{value:"Push-\u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f",id:"push-\u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f",level:3},{value:"\u0410\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u0435\u0441\u043b\u0438 \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 Firebase",id:"\u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u044b\u0439-\u0432\u0430\u0440\u0438\u0430\u043d\u0442-\u0435\u0441\u043b\u0438-\u0432\u044b-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435-firebase",level:3},{value:"Huawei Media Services (HMS)",id:"huawei-media-services-hms",level:2},{value:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043f\u0443\u0448\u0435\u0439",id:"\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435-\u043f\u0443\u0448\u0435\u0439",level:3},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 AndroidManifest",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-androidmanifest",level:3},{value:"\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u0441 Push Lite",id:"\u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f-\u0441-push-lite",level:2}],p={toc:d};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0439"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0439"),(0,r.kt)("h2",{id:"firebase"},"Firebase"),(0,r.kt)("h3",{id:"\u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435-google-servicesjson"},"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 google-services.json"),(0,r.kt)("p",null,"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b \u0434\u0432\u0430 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0430:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0432\u0430\u0448 \u0430\u043a\u043a\u0430\u0443\u043d\u0442 Firebase - c\u0444\u043e\u0440\u043c\u0438\u0440\u0443\u0439\u0442\u0435\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"google-services.json"),". \u0414\u043b\u044f \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0435 \u0441\u043e\u043e\u0431\u0449\u0438\u0442\u0435 \u0432\u0430\u0448\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"project_number"),"\xa0\u0438\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"API_KEY"),"\xa0\u0438\u0437 \u043a\u043e\u043d\u0441\u043e\u043b\u0438 Firebase (\u043d\u0435 \u0438\u0437 google-services.json)."),(0,r.kt)("li",{parentName:"ul"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u043d\u0430\u0448 \u0430\u043a\u043a\u0430\u0443\u043d\u0442 Firebase - \u0441\u043e\u043e\u0431\u0449\u0438\u0442\u0435\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"applicationId"),"\xa0\u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u043c\u044b \u043f\u0440\u0438\u0448\u043b\u0435\u043c\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"google-services.json"),".")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"google-services.json"),"\xa0\u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a \u043f\u0440\u043e\u0435\u043a\u0442\u0443 \u0440\u044f\u0434\u043e\u043c \u0441\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml")),(0,r.kt)("h3",{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-manifest"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 manifest"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<permission android:name="${applicationId}.permission.pushserver.RECEIVE"\n            android:protectionLevel="signature" />\n<uses-permission android:name="android.permission.INTERNET" />\n<uses-permission android:name="${applicationId}.permission.pushserver.RECEIVE" />\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0445 mfms-\u043f\u0443\u0448\u0435\u0439")),(0,r.kt)("p",null,"a) \u0435\u0441\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u0435\u0444\u043e\u043b\u0442\u043d\u044b\u0439 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a (\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0441\u0432\u043e\u0438\u0445 mfms-\u043f\u0443\u0448\u0435\u0439 \u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<receiver\n    android:name="im.threads.push.ThreadsPushBroadcastReceiver"\n    android:exported="false"\n    android:permission="${applicationId}.permission.pushserver.RECEIVE">\n    <intent-filter>\n        <action android:name="com.pushserver.android.NEW_PUSH_MESSAGE_EVENT" />\n        <action android:name="com.pushserver.android.RECEIVER_CHANGED_EVENT" />\n        <action android:name="com.pushserver.android.DEVICE_ADDRESS_CHANGED_EVENT" />\n        <action android:name="com.pushserver.android.HAS_SECURED_MESSAGE" />\n        <action android:name="com.pushserver.android.ERROR_EVENT" />\n    </intent-filter>\n</receiver>\n')),(0,r.kt)("p",null,"b) \u0435\u0441\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0439 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a (\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0441\u0432\u043e\u0438\u0445 mfms-\u043f\u0443\u0448\u0435\u0439 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f) (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,r.kt)("inlineCode",{parentName:"p"},"im.threads.android.broadcastReceivers.CustomPushBroadcastReceiver"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<receiver\n    android:name="im.threads.android.broadcastReceivers.CustomPushBroadcastReceiver"\n    android:exported="false"\n    android:permission="${applicationId}.permission.pushserver.RECEIVE">\n    <intent-filter>\n        <action android:name="com.pushserver.android.NEW_PUSH_MESSAGE_EVENT" />\n        <action android:name="com.pushserver.android.RECEIVER_CHANGED_EVENT" />\n        <action android:name="com.pushserver.android.DEVICE_ADDRESS_CHANGED_EVENT" />\n        <action android:name="com.pushserver.android.HAS_SECURED_MESSAGE" />\n        <action android:name="com.pushserver.android.ERROR_EVENT" />\n    </intent-filter>\n</receiver>\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0434\u043b\u0438\u043d\u043d\u044b\u0445 mfms-\u043f\u0443\u0448\u0435\u0439")),(0,r.kt)("p",null,"a) \u0435\u0441\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u0435\u0444\u043e\u043b\u0442\u043d\u044b\u0439 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a (\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0441\u0432\u043e\u0438\u0445 mfms-\u043f\u0443\u0448\u0435\u0439 \u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<meta-data\n    android:name="com.pushserver.android.service"\n    android:value="im.threads.push.ThreadsPushServerIntentService" />\n')),(0,r.kt)("p",null,"b) \u0435\u0441\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0439 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a (\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0441\u0432\u043e\u0438\u0445 mfms-\u043f\u0443\u0448\u0435\u0439 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f) (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,r.kt)("inlineCode",{parentName:"p"},"im.threads.android.services.CustomPushServerIntentService"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<service\n    android:name="im.threads.android.services.CustomPushServerIntentService"\n    android:exported="false" />\n\n<meta-data\n    android:name="com.pushserver.android.service"\n    android:value="im.threads.android.services.CustomPushServerIntentService" />\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u041c\u0435\u0442\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<meta-data\n    android:name="im.threads.getServerUrl"\n    android:value="YOUR_DATASTORE_URL" />\n')),(0,r.kt)("p",null,"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"YOUR_DATASTORE_URL"),"\xa0\u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0434\u0430\u043d \u0432\u0430\u043c \u043f\u0440\u0438 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0438."),(0,r.kt)("h4",{id:"\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e"},"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0434\u0435\u0431\u0430\u0433-\u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043f\u0443\u0448-\u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<meta-data\n    android:name="com.pushserver.android.logs"\n    android:value="true"/>\n')),(0,r.kt)("h3",{id:"push-\u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f"},"Push-\u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u043c\u0438 mfms-\u043f\u0443\u0448\u0430\u043c\u0438 \u043d\u0443\u0436\u043d\u043e \u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043e\u0442 \u043a\u043b\u0430\u0441\u0441\u0430 ThreadsPushBroadcastReceiver \u0438 \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0442\u044c \u043c\u0435\u0442\u043e\u0434")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Override\nprotected void onNewPushNotification(final Context context, final String alert, final Bundle bundle);\n")),(0,r.kt)("p",null,"\u0414\u043b\u044f \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u0447\u0430\u0442\u0430 \u043d\u0443\u0436\u043d\u043e \u043d\u0435 \u0437\u0430\u0431\u044b\u0442\u044c \u0432\u044b\u0437\u0432\u0430\u0442\u044c\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"super.onNewPushNotification(context, alert, bundle);"),'\u0420\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u043c\u0435\u0442\u043e\u0434 \u0430\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u044e\u0442 \u0441\u0438\u0433\u043d\u0430\u0442\u0443\u0440\u0443 \u043f\u0440\u0438\u0448\u0435\u0434\u0448\u0438\u0445 \u043f\u0443\u0448-\u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0439 \u0438 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0442\u0435, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0435\u0441\u0442\u044c \u0430\u0442\u0440\u0438\u0431\u0443\u0442 origin \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c "threads"'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0434\u043b\u0438\u043d\u043d\u044b\u043c\u0438 mfms-\u043f\u0443\u0448\u0430\u043c\u0438 \u043d\u0443\u0436\u043d\u043e \u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043e\u0442 \u043a\u043b\u0430\u0441\u0441\u0430 ThreadsPushServerIntentService \u0438 \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0442\u044c \u043c\u0435\u0442\u043e\u0434")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Override\nprotected boolean saveMessages(List<PushMessage> list);\n")),(0,r.kt)("p",null,"\u0414\u043b\u044f \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u0447\u0430\u0442\u0430 \u043d\u0443\u0436\u043d\u043e \u043d\u0435 \u0437\u0430\u0431\u044b\u0442\u044c \u0432\u044b\u0437\u0432\u0430\u0442\u044c\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"super.saveMessages(list);"),'\xa0\u0420\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u043c\u0435\u0442\u043e\u0434 \u0430\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u044e\u0442 \u0441\u0438\u0433\u043d\u0430\u0442\u0443\u0440\u0443 \u043f\u0440\u0438\u0448\u0435\u0434\u0448\u0438\u0445 \u043f\u0443\u0448-\u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0439 \u0438 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0442\u0435, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0435\u0441\u0442\u044c \u0430\u0442\u0440\u0438\u0431\u0443\u0442 origin \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c "threads"'),(0,r.kt)("h3",{id:"\u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u044b\u0439-\u0432\u0430\u0440\u0438\u0430\u043d\u0442-\u0435\u0441\u043b\u0438-\u0432\u044b-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435-firebase"},"\u0410\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u0435\u0441\u043b\u0438 \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 Firebase"),(0,r.kt)("p",null,"\u0423\u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u044c \u0441\u0435\u0440\u0432\u0438\u0441:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class CustomPushFcmIntentService extends ThreadsPushFcmIntentService {\n    @Override\n    public void onNewToken(String token) {\n        super.onNewToken(token);\n        //\u0432\u0430\u0448\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u0442\u043e\u043a\u0435\u043d\u0430\n    }\n\n    @Override\n    public void onMessageReceived(RemoteMessage message) {\n        super.onMessageReceived(message);\n        //\u0432\u0430\u0448\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f\n    }\n}\n")),(0,r.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0435\u0433\u043e \u0432 AndroidManifest.xml:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<service android:name=".push.CustomPushFcmIntentService">\n    <intent-filter>\n        <action android:name="com.google.firebase.MESSAGING_EVENT" />\n    </intent-filter>\n</service>\n')),(0,r.kt)("h2",{id:"huawei-media-services-hms"},"Huawei Media Services (HMS)"),(0,r.kt)("h3",{id:"\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435-\u043f\u0443\u0448\u0435\u0439"},"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043f\u0443\u0448\u0435\u0439"),(0,r.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 HMS \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\xa0",(0,r.kt)("a",{parentName:"p",href:"https://developer.huawei.com/consumer/en/doc/development/HMSCore-Guides/android-app-quickstart-0000001071490422"},"https://developer.huawei.com/consumer/en/doc/development/HMSCore-Guides/android-app-quickstart-0000001071490422")),(0,r.kt)("p",null,"\u0412 Threads Gate \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 applications \u0434\u043e\u043b\u0436\u043d\u044b \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 (\u0435\u0441\u043b\u0438 \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f firebase-\u043f\u0443\u0448\u0438, \u0442\u043e \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 \u0431\u0443\u0434\u0435\u0442 \u0434\u0432\u0435 \u0437\u0430\u043f\u0438\u0441\u0438 - \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0432\u0438\u0434\u0430 \u043f\u0443\u0448\u0435\u0439)"),(0,r.kt)("h3",{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-androidmanifest"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 AndroidManifest"),(0,r.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0432 \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e meta-data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'    <meta-data\n        android:name="im.threads.threadsGateHCMProviderUid"\n        android:value="YOUR_THREADS_GATE_HCM_PROVIDER_UID"/>\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"im.threads.threadsGateHCMProviderUid - \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0432 Threads gate (\u0438\u0437 \u0442\u0430\u0431\u043b\u0438\u0446\u044b applications)")),(0,r.kt)("p",null,"\u0412\u044b\u0441\u043e\u043a\u0430 \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u044c, \u0447\u0442\u043e \u0432\u0430\u0448\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0443\u0436\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u0451\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u043f\u0443\u0448-\u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f \u0447\u0435\u0440\u0435\u0437 HCM. \u0414\u043b\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0432\u0445\u043e\u0434\u044f\u0449\u0438\u0445 \u043f\u0443\u0448\u0435\u0439 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u0430\u0441\u043b\u0435\u0434\u043d\u0438\u043a\u0430 \u043a\u043b\u0430\u0441\u0441\u0430\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"ThreadsPushHcmIntentService"),"\xa0(\u043d\u0435 \u0437\u0430\u0431\u0443\u0434\u044c\u0442\u0435 \u043f\u0440\u043e\u043f\u0438\u0441\u0430\u0442\u044c \u0441\u0432\u043e\u0439 \u0441\u0435\u0440\u0432\u0438\u0441 \u0432 \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0435."),(0,r.kt)("p",null,"\xa0\n",(0,r.kt)("inlineCode",{parentName:"p"},"ThreadsPushHcmIntentService"),"\xa0(\u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043d\u0430\u0441\u043b\u0435\u0434\u043d\u0438\u043a\u043e\u043c\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"HcmPushService"),"\xa0\u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u0441\u043e\u0431\u044b\u0442\u0438\u044f com.huawei.push.action.MESSAGING_EVENT) \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442 HCM-\u0442\u043e\u043a\u0435\u043d \u0432 SharedPreferences \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438, \u0447\u0442\u043e\u0431\u044b \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u0435\u0433\u043e \u043f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0439 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442 (\u0432 \u043d\u0430\u0448\u0435\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u043f\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0432 Threads Gate). Threads Gate \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u0438\u0441\u044b\u043b\u0430\u0442\u044c HCM-\u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f, \u0435\u0441\u043b\u0438 \u0443 \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u043d\u0435\u0442 \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0441\u043e\u043a\u0435\u0442-\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f (\u043e\u043d\u043e \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u043a\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0432\u0438\u0434\u0438\u0442 \u044d\u043a\u0440\u0430\u043d \u0447\u0430\u0442\u0430)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class CustomPushHcmIntentService extends ThreadsPushHcmIntentService {\n    @Override\n    public void onNewToken(String token) {\n        super.onNewToken(token);\n        ...\n    }\n\n    @Override\n    public void onMessageReceived(RemoteMessage message) {\n        super.onMessageReceived(message);\n        ...\n    }\n}\n")),(0,r.kt)("h2",{id:"\u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f-\u0441-push-lite"},"\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u0441 Push Lite"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u0414\u043b\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0438 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 push-lite \u0441\u043b\u0435\u0434\u0443\u0439\u0442\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f\u043c \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u043c \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 SDK")),(0,r.kt)("p",null,"\u041f\u043e\u0441\u043b\u0435 \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u0441 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u043c\u0438 \u043f\u0443\u0448 \u043a\u043b\u0438\u0435\u043d\u0442\u0430\u043c\u0438 \u0431\u044b\u043b\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0430, \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u0438\u0441\u0442\u0443\u043f\u0430\u0442\u044c \u043a \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u0441 \u0447\u0430\u0442 \u0446\u0435\u043d\u0442\u0440\u043e\u043c. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u043b\u043e\u0433\u0438\u043a\u0443 \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0442\u043e\u043a\u0435\u043d\u043e\u0432 \u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439 \u0432 SDK:"),(0,r.kt)("p",null,"\u0414\u043b\u044f Firebase:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"class CustomPushFcmIntentService : FcmPushService() {\n   override fun onNewToken(token: String) {\n       super.onNewToken(token)\n       ChatCenterPushMessageHelper.setFcmToken(token)\n   }\n   override fun onMessageReceived(message: RemoteMessage) {\n       super.onMessageReceived(message)\n       ChatCenterPushMessageHelper.process(this, message.data)\n   }\n}\n")),(0,r.kt)("p",null,"\u0414\u043b\u044f HMS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"class CustomPushHcmIntentService : HcmPushService() {\n   override fun onNewToken(token: String) {\n       super.onNewToken(token)\n       ChatCenterPushMessageHelper.setHcmToken(token)\n   }\n   override fun onMessageReceived(message: RemoteMessage) {\n       super.onMessageReceived(message)\n       ChatCenterPushMessageHelper.process(\n           this,\n           CommonUtils.base64JsonStringToBundle(message.data)\n       )\n   }\n}\n")),(0,r.kt)("p",null,"\u041f\u043e\u0441\u043b\u0435 \u0447\u0435\u0433\u043e \u0432 \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u043e\u0431\u043e\u0438\u0445 \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<service android:name=".push.CustomPushFcmIntentService"\n   android:exported="false">\n   <intent-filter>\n       <action android:name="com.google.firebase.MESSAGING_EVENT" />\n   </intent-filter>\n</service>\n\n<service\n   android:name=".push.CustomPushHcmIntentService"\n   android:exported="false">\n   <intent-filter>\n       <action android:name="com.huawei.push.action.MESSAGING_EVENT" />\n   </intent-filter>\n</service>\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u043d\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043c\u0435\u0442\u043e\u0434\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"PushController.getInstance(this).init()")," \u0432\n",(0,r.kt)("inlineCode",{parentName:"p"},"Application.onCreate()")," \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u043d\u0430 \u0448\u0430\u0433\u0435 1.2.3 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 push-lite")))}c.isMDXComponent=!0}}]);