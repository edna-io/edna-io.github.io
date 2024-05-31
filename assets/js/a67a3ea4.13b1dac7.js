"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[76961],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49203:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r={},o="\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u043f\u043e \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438",l={unversionedId:"migration/migration_guides",id:"version-4.25.0/migration/migration_guides",title:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u043f\u043e \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438",description:"\u041f\u0435\u0440\u0435\u0445\u043e\u0434 \u043d\u0430 \u0432\u0435\u0440\u0441\u0438\u044e 4.0.0",source:"@site/ios_versioned_docs/version-4.25.0/migration/migration_guides.md",sourceDirName:"migration",slug:"/migration/migration_guides",permalink:"/ios/4.25.0/migration/migration_guides",draft:!1,tags:[],version:"4.25.0",lastUpdatedAt:1707140878,formattedLastUpdatedAt:"5 \u0444\u0435\u0432\u0440. 2024 \u0433.",frontMatter:{},sidebar:"mainSidebar",previous:{title:"\u041c\u0438\u0433\u0440\u0430\u0446\u0438\u044f",permalink:"/ios/4.25.0/category/\u043c\u0438\u0433\u0440\u0430\u0446\u0438\u044f"},next:{title:"\u0414\u0435\u043c\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435",permalink:"/ios/4.25.0/demo"}},s={},p=[{value:"\u041f\u0435\u0440\u0435\u0445\u043e\u0434 \u043d\u0430 \u0432\u0435\u0440\u0441\u0438\u044e 4.0.0",id:"\u043f\u0435\u0440\u0435\u0445\u043e\u0434-\u043d\u0430-\u0432\u0435\u0440\u0441\u0438\u044e-400",level:2},{value:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 CocoaPods",id:"\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435-\u0447\u0435\u0440\u0435\u0437-cocoapods",level:3},{value:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Threads",id:"\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f-threads",level:3},{value:"MFMSPushLiteDelegate -&gt; ThreadsDelegate",id:"mfmspushlitedelegate---threadsdelegate",level:3},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0438\u0435\u043c\u0430 \u043f\u0443\u0448-\u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0439",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u043f\u0440\u0438\u0435\u043c\u0430-\u043f\u0443\u0448-\u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0439",level:3},{value:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",id:"\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f-\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",level:3},{value:"\u041e\u0442\u043a\u0440\u044b\u0442\u0438\u0435 \u0447\u0430\u0442\u0430",id:"\u043e\u0442\u043a\u0440\u044b\u0442\u0438\u0435-\u0447\u0430\u0442\u0430",level:3},{value:"<strong>\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0432\u043d\u0435\u0448\u043d\u0435\u0433\u043e \u0432\u0438\u0434\u0430</strong>",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438-\u0432\u043d\u0435\u0448\u043d\u0435\u0433\u043e-\u0432\u0438\u0434\u0430",level:3},{value:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438",id:"\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435-\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438",level:2},{value:"\u0421\u0447\u0435\u0442\u0447\u0438\u043a \u043d\u0435\u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043d\u044b\u0445 -&gt; ThreadsDelegate",id:"\u0441\u0447\u0435\u0442\u0447\u0438\u043a-\u043d\u0435\u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043d\u044b\u0445---threadsdelegate",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438-\u043f\u043e-\u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438"},"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u043f\u043e \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438"),(0,a.kt)("h2",{id:"\u043f\u0435\u0440\u0435\u0445\u043e\u0434-\u043d\u0430-\u0432\u0435\u0440\u0441\u0438\u044e-400"},"\u041f\u0435\u0440\u0435\u0445\u043e\u0434 \u043d\u0430 \u0432\u0435\u0440\u0441\u0438\u044e 4.0.0"),(0,a.kt)("p",null,"\u0412 \u0432\u0435\u0440\u0441\u0438\u0438 4.0.0 \u043f\u0435\u0440\u0435\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u0430 \u0438\u043d\u0442\u0433\u0440\u0430\u0446\u0438\u044f \u0438 \u0440\u0430\u0431\u043e\u0442\u0430 \u0441 \u043f\u0443\u0448-\u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u043e\u0439."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u041f\u0443\u0448-\u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"MFMSPushLite"),"\xa0\u0443\u0431\u0440\u0430\u043d\u0430 \u0432\u043d\u0443\u0442\u0440\u044c\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"Threads"),", \u0432\u0441\u0435 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0442\u0435\u043f\u0435\u0440\u044c \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0435\u0440\u0435\u0437 \u043d\u0435\u0433\u043e."),(0,a.kt)("li",{parentName:"ul"},"\u0414\u043b\u044f \u043f\u043e\u043a\u0430\u0437\u0430 \u0447\u0430\u0442\u0430 \u0442\u0435\u043f\u0435\u0440\u044c \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"UIViewController"))),(0,a.kt)("h3",{id:"\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435-\u0447\u0435\u0440\u0435\u0437-cocoapods"},"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 CocoaPods"),(0,a.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432\u044b \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0435\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"Threads"),"\xa0\u0447\u0435\u0440\u0435\u0437\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"CocoaPods"),"\xa0- \u0443\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u0443\u0447\u043d\u043e\u0435 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"MFMSPushLite"),". \u0422\u0435\u043f\u0435\u0440\u044c \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c \u043f\u043e\u0434\u0442\u044f\u0433\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438"),(0,a.kt)("h3",{id:"\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f-threads"},"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Threads"),(0,a.kt)("p",null,"\u0417\u0430\u043c\u0435\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u0432\u044b\u0437\u043e\u0432\u044b \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u0432 \u043a\u043b\u0430\u0441\u0441\u0430\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"Threads"),"\xa0\u043d\u0430 \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0435 \u043a \u0441\u0438\u043d\u0433\u043b\u0442\u043e\u043d\u0443\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"[Threads threads]")),(0,a.kt)("p",null,"\u0412\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"Application didFinishLaunchingWithOptions"),",\xa0",(0,a.kt)("strong",{parentName:"p"},"\u0434\u043e \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043f\u0443\u0448\u0435\u0439"),", \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043c\u0435\u0442\u043e\u0434 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"Threads"),"(\u043e\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0432 \u0441\u0435\u0431\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0440\u0430\u0446\u0438\u044e MFMSPushLite):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},'Threads *threads = [Threads threads];\n\n[threads configureWithDelegate:self\n          productionMFMSServer:YES\n                    historyURL:[NSURL URLWithString:@"HISTORY_URL"]\n              fileUploadingURL:[NSURL URLWithString:@"FILE_UPLOADING_URL"]];\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0423\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0437\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"Info.plist"),"\xa0\u0441\u043b\u043e\u0432\u0430\u0440\u044c\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"PS_API_CONFIG"),"\xa0\u0441 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"PS_FILE_UPLOAD_URL"),",\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"PS_HISTORY_URL"),",\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"PS_CLIENTID_IS_ENCRYPTED"),"\xa0- \u044d\u0442\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0435 \u0437\u0430\u0434\u0430\u044e\u0442\u0441\u044f \u0432 plist, \u0442\u043e\u043b\u043a\u043e \u0432 \u043a\u043e\u0434\u0435.")),(0,a.kt)("h3",{id:"mfmspushlitedelegate---threadsdelegate"},"MFMSPushLiteDelegate -> ThreadsDelegate"),(0,a.kt)("p",null,"\u0420\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e \u0434\u0435\u043b\u0435\u0433\u0430\u0442\u0430\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"MFMSPushLiteDelegate"),"\xa0\u0437\u0430\u043c\u0435\u043d\u0438\u0442\u0435 \u043d\u0430 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e \u0434\u0435\u043b\u0435\u0433\u0430\u0442\u0430\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"ThreadsDelegate"),"\xa0\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u041f\u0435\u0440\u0435\u043d\u0435\u0441\u0438\u0442\u0435 \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0431\u043e\u0435\u0432\u043e\u0439\\\u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0439 \u043f\u0443\u0448-\u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b \u0438\u0437 \u043c\u0435\u0442\u043e\u0434\u0430\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"(BOOL)isProductionWithPushApi:(MFMSPushLite * _Nonnull)pushApi"),"\xa0- \u0432 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"productionMFMSServer"),"\xa0\u0432\xa0",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ThreadsMobileLib/edna-sdk-ios/wiki/%D0%9C%D0%B8%D0%B3%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D0%BD%D0%B0-3.0.0#user-content-%D0%9A%D0%BE%D0%BD%D1%84%D0%B8%D0%B3%D1%83%D1%80%D0%B0%D1%86%D0%B8%D1%8F-threads"},"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Threads")),(0,a.kt)("li",{parentName:"ul"},"\u041f\u0435\u0440\u0435\u043d\u0435\u0441\u0438\u0442\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e \u043c\u0435\u0442\u043e\u0434\u043e\u0432 \u0434\u0435\u043b\u0430\u0433\u0430\u0442\u0430\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"MFMSPushLiteDelegate"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},"- (id<PushServerApiConfigDataSource>)configWithPushApi:(MFMSPushLite *)pushApi;\n\n- (void)onPushMessagesReceivedWithPushApi:(MFMSPushLite *)PushApi messages:(NSArray<PushNotificationMessage *> *)messages;\n\n- (void)onErrorWithPushApi:(MFMSPushLite *)PushApi error:(NSString *)error;\n")),"  \u0412 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u043c\u0435\u0442\u043e\u0434\u044b\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"ThreadsDelegate"),":",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},"- (id<PushServerApiConfigDataSource>)threads:(Threads *)threads configurePushServerApiFor:(MFMSPushLite *)mfmsPushLite;\n- (void)threads:(Threads *)threads didReceiveFullMessages:(NSArray<PushNotificationMessage *> *)messages;\n- (void)threads:(Threads *)threads didReceiveError:(NSError *)error;\n")))),(0,a.kt)("h3",{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u043f\u0440\u0438\u0435\u043c\u0430-\u043f\u0443\u0448-\u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0439"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0438\u0435\u043c\u0430 \u043f\u0443\u0448-\u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0439"),(0,a.kt)("p",null,"\u0417\u0430\u043c\u0435\u043d\u0438\u0442\u0435 \u043a\u043e\u0434 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043f\u0443\u0448\u0435\u0439"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"if (@available(iOS 10, *)) {\n    UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];\n    center.delegate = self;\n    [center requestAuthorizationWithOptions:(UNAuthorizationOptionSound | UNAuthorizationOptionAlert | UNAuthorizationOptionBadge) completionHandler:^(BOOL granted, NSError * _Nullable error){\n        if(!error){\n            dispatch_async(dispatch_get_main_queue(), ^{\n                [[UIApplication sharedApplication] registerForRemoteNotifications];\n            });\n        }\n    }];\n} else {\n    [[UIApplication sharedApplication] registerForRemoteNotifications];\n}\n")),(0,a.kt)("p",null,"\u041d\u0430 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},'[Threads threads] registerApplicationForRemoteNotificationsStandartOptionsWithAuthorizationStatusDenied:^{\n    NSLog(@"Remote notifications denied");\n} completionHandler:^(NSData * _Nullable deviceToken) {\n    NSLog(@"Application registered for remote notifications %@", deviceToken);\n}];\n')),(0,a.kt)("p",null,"\u0417\u0430\u043c\u0435\u043d\u0438\u0442\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e \u043c\u0435\u0442\u043e\u0434\u043e\u0432 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u043f\u0443\u0448\u0435\u0439 \u043d\u0430 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0432\u044b\u0437\u043e\u0432\u044b\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"Threads"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},"- (void)application:(UIApplication *)application didRegisterUserNotificationSettings:(UIUserNotificationSettings *)notificationSettings {\n    [[Threads threads] applicationDidRegisterUserNotificationSettings:notificationSettings];\n}\n\n- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {\n    [[Threads threads] applicationDidRegisterForRemoteNotificationsWithDeviceToken:deviceToken];\n}\n\n- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo {\n    [[Threads threads] applicationDidReceiveRemoteNotification:userInfo];\n}\n\n- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo fetchCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler {\n    [[Threads threads] applicationDidReceiveRemoteNotification:userInfo fetchCompletionHandler:^(THRMessageRecieveState state) {\n        completionHandler(UIBackgroundFetchResultNewData);\n    }];\n}\n\n#pragma mark - UNUserNotificationCenterDelegate\n\n- (void)userNotificationCenter:(UNUserNotificationCenter *)center willPresentNotification:(UNNotification *)notification withCompletionHandler:(void (^)(UNNotificationPresentationOptions options))completionHandler API_AVAILABLE(ios(10.0)){\n    [[Threads threads] applicationDidReceiveRemoteNotification:notification.request.content.userInfo fetchCompletionHandler:^(THRMessageRecieveState state) {\n        completionHandler(UNNotificationPresentationOptionNone);\n    }];\n}\n")),(0,a.kt)("p",null,"\u0423\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u044b\u0437\u043e\u0432\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"[Threads didReceiveFullPush:...]"),", \u0442\u0435\u043f\u0435\u0440\u044c \u043f\u0443\u0448\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u044e\u0442\u0441\u044f \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u0432\u043d\u0443\u0442\u0440\u0438 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438.\u0415\u0441\u043b\u0438 \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u043f\u0443\u0448\u0438 - \u0438\u0445 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0432 \u043c\u0435\u0442\u043e\u0434\u0430 \u0434\u0435\u043b\u0435\u0433\u0430\u0442\u0430\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"ThreadsDelegate"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},"- (void)threads:(Threads *)threads didReceiveFullMessages:(NSArray<PushNotificationMessage *> *)messages;\n")),(0,a.kt)("h3",{id:"\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f-\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"),(0,a.kt)("p",null,"\u0423\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u044b\u0437\u043e\u0432\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"[Threads registerClientWithCompletion:^(BOOL state)]"),"\xa0- \u044d\u0442\u043e\u0433\u043e \u043c\u0435\u0442\u043e\u0434\u0430 \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0435\u0442"),(0,a.kt)("p",null,"\u0417\u0430\u043c\u0435\u043d\u0438\u0442\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u043a\u043b\u0438\u0435\u043d\u0442\u0430:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},"[Threads setClientId:(NSString*) clientId]\n[Threads setClientName:(NSString*) clientName]\n[Threads setData:(NSString*) data]\n[Threads setAppMarker:  appMarker]\n[Threads setClientIdSignature: (NSString*) clientIdSignature]\n")),(0,a.kt)("p",null,"\u041d\u0430 \u043c\u0435\u0442\u043e\u0434 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u0430:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},"[[Threads threads] setClientWithId:(NSString *) clientId\n                              name:(NSString * _Nullable) clientName\n                              data:(NSDictionary * _Nullable) clientDataDict\n                         appMarker:(NSString * _Nullable) clientAppMarker\n                         signature:(NSString *) clientSignature];\n")),(0,a.kt)("p",null,"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u0447\u0442\u043e\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"data"),"\xa0\u0442\u0435\u043f\u0435\u0440\u044c \u043f\u0435\u0440\u0435\u0434\u0430\u0435\u0442\u0441\u044f \u0432 \u0432\u0438\u0434\u0435 \u0441\u043b\u043e\u0432\u0430\u0440\u044f \u0430 \u043d\u0435 \u0441\u0442\u0440\u043e\u043a\u0438."),(0,a.kt)("h3",{id:"\u043e\u0442\u043a\u0440\u044b\u0442\u0438\u0435-\u0447\u0430\u0442\u0430"},"\u041e\u0442\u043a\u0440\u044b\u0442\u0438\u0435 \u0447\u0430\u0442\u0430"),(0,a.kt)("p",null,"\u0417\u0430\u043c\u0435\u043d\u0438\u0442\u0435 \u0432\u044b\u0437\u043e\u0432\u044b \u043c\u0435\u0442\u043e\u0434\u043e\u0432"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},"[Threads show];\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},"[Threads showInView:(UIView *)view parentController:(UIViewController *)parentController;\n")),(0,a.kt)("p",null,"\u041d\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u043d\u043e\u0446\u0435\u043d\u043d\u043e\u0433\u043e\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"UIViewController"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u0435\u0437\u0435\u043d\u0442\u043e\u0432\u0430\u0442\u044c \u043b\u044e\u0431\u044b\u043c \u043d\u0430\u0442\u0438\u0432\u043d\u044b\u043c \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u043c, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},"THRAttributes *attributes = [[THRAttributes alloc] init];\nUIViewController *chatViewController = [[Threads threads] chatViewControllerWithAttributes:attributes];\n[self.navigationController pushViewController:chatViewController animated:YES];\n")),(0,a.kt)("p",null,"\u0414\u0440\u0443\u0433\u0438\u0435 \u043f\u0440\u0438\u043c\u0435\u0440\u044b:\xa0",(0,a.kt)("a",{parentName:"p",href:"/ios/getting-started/usage"},"\u041e\u0442\u043a\u0440\u044b\u0442\u0438\u0435 \u0447\u0430\u0442\u0430")),(0,a.kt)("h3",{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438-\u0432\u043d\u0435\u0448\u043d\u0435\u0433\u043e-\u0432\u0438\u0434\u0430"},(0,a.kt)("strong",{parentName:"h3"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0432\u043d\u0435\u0448\u043d\u0435\u0433\u043e \u0432\u0438\u0434\u0430")),(0,a.kt)("p",null,"\u041f\u0435\u0440\u0435\u043d\u0435\u0441\u0438\u0442\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0442\u0435\u043a\u0441\u0442\u043e\u0432 \u043f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u044d\u043a\u0440\u0430\u043d\u0430 \u0447\u0430\u0442\u0430"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},'[Threads setHelloTitle:@"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"]\n[Threads setHelloDescription:@"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"]\n')),(0,a.kt)("p",null,"\u0412 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"THRAttributes"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"helloTitle")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"helloDescription"))),(0,a.kt)("p",null,"\u0423\u0434\u0430\u043b\u0438\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0438 \u043c\u0435\u0442\u043e\u0434\u044b - \u0432 \u0441\u0432\u044f\u0437\u0438 \u0441 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u043e\u043c \u043d\u0430 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044e viewController \u043e\u043d\u0438 \u0441\u0442\u0430\u043b\u0438 \u043d\u0435\u0430\u043a\u0443\u0442\u0430\u043b\u044c\u043d\u044b \u0438 \u0431\u044b\u043b\u0438 \u0443\u0431\u0440\u0430\u043d\u044b:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"THRAttributes",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"navigationBarBackgroundColor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"navigationBarTintColor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"navigationBarItemFont")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"shouldAnimateShowNavigation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"shouldAnimatePopNavigation")))),(0,a.kt)("li",{parentName:"ul"},"Threads:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"showToolbarAnimated")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hideToolbarAnimated")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"showKeyboard")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hideKeyboard"))))),(0,a.kt)("h2",{id:"\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435-\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438"},"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438"),(0,a.kt)("h3",{id:"\u0441\u0447\u0435\u0442\u0447\u0438\u043a-\u043d\u0435\u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043d\u044b\u0445---threadsdelegate"},"\u0421\u0447\u0435\u0442\u0447\u0438\u043a \u043d\u0435\u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043d\u044b\u0445 -> ThreadsDelegate"),(0,a.kt)("p",null,"\u041f\u0435\u0440\u0435\u043d\u0435\u0441\u0438\u0442\u0435 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0447\u0438\u0441\u043b\u0430 \u043d\u0435\u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043d\u044b\u0445 \u0438\u0437 \u0431\u043b\u043e\u043a\u0430"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},"[[Threads threads] setUnreadedMessagesCountChanged:^(NSInteger messagesCount)\n")),(0,a.kt)("p",null,"\u0412 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e \u043c\u0435\u0442\u043e\u0434\u0430\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"ThreadsDelegate"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},"- (void)threads:(Threads *)threads unreadMessagesCount:(NSUInteger)unreadMessagesCount;\n")))}u.isMDXComponent=!0}}]);