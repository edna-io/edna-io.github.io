"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[69363],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},37573:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),i=n(74866),l=n(85162);const o={sidebar_position:1},s="\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",u={unversionedId:"advanced/advanced",id:"version-4.2.0/advanced/advanced",title:"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",description:"\u041b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",source:"@site/ios_versioned_docs/version-4.2.0/advanced/advanced.md",sourceDirName:"advanced",slug:"/advanced/",permalink:"/ios/4.2.0/advanced/",draft:!1,tags:[],version:"4.2.0",lastUpdatedAt:1698419024,formattedLastUpdatedAt:"27 \u043e\u043a\u0442. 2023 \u0433.",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mainSidebar",previous:{title:"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",permalink:"/ios/4.2.0/category/\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0435-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"},next:{title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0432\u043d\u0435\u0448\u043d\u0435\u0433\u043e \u0432\u0438\u0434\u0430",permalink:"/ios/4.2.0/advanced/ui"}},c={},d=[{value:"\u041b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",level:3},{value:"Debug \u042d\u043a\u0440\u0430\u043d",id:"debug-\u044d\u043a\u0440\u0430\u043d",level:3},{value:"ThreadsDelegate",id:"threadsdelegate",level:3},{value:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043d\u0435\u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043d\u044b\u0445 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439",id:"\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e-\u043d\u0435\u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043d\u044b\u0445-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439",level:4},{value:"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043e\u0448\u0438\u0431\u043e\u043a",id:"\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430-\u043e\u0448\u0438\u0431\u043e\u043a",level:4},{value:"\u041e\u0442\u043a\u0440\u044b\u0442\u0438\u0435 \u0447\u0430\u0442\u0430 \u043f\u043e \u043f\u0443\u0448\u0443",id:"\u043e\u0442\u043a\u0440\u044b\u0442\u0438\u0435-\u0447\u0430\u0442\u0430-\u043f\u043e-\u043f\u0443\u0448\u0443",level:4},{value:"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043d\u0430\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439",id:"\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043d\u0430\u044f-\u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0430-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439",level:3},{value:"\u0422\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",id:"\u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0435-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",level:4},{value:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",id:"\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",level:4},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-\u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432",level:3},{value:"SSL Pinning",id:"ssl-pinning",level:4},{value:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u043d\u0435\u0434\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u044b\u043c\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430\u043c\u0438",id:"\u0440\u0430\u0431\u043e\u0442\u0430-\u0441-\u043d\u0435\u0434\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u044b\u043c\u0438-\u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430\u043c\u0438",level:4},{value:"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f\u0445",id:"\u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f-\u043e-\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0445-\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f\u0445",level:3}],p={toc:d},f="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0435-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"},"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),(0,a.kt)("h3",{id:"\u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"},"\u041b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[Threads threads].isDebugLoggingEnabled = YES"),"\xa0- \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f. \u041f\u043e-\u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u043e."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[Threads threads].isSocketAdditionalDebugLoggingEnabled = YES"),"\xa0- \u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u043e\u043a\u0435\u0442 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f. \u041f\u0440\u0438\u043c\u0435\u043d\u0438\u043c\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0441 ThreadsGateTransportProtocol")),(0,a.kt)("h3",{id:"debug-\u044d\u043a\u0440\u0430\u043d"},"Debug \u042d\u043a\u0440\u0430\u043d"),(0,a.kt)("p",null,"\u0412 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445 \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u0433\u043e\u0434\u0438\u0442\u044c\u0441\u044f debug-\u0440\u0435\u0436\u0438\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u043d\u0435\u043a\u0443\u044e \u043f\u043e\u043b\u0435\u0437\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e. \u0412 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u0443\u043c\u0435\u0435\u0442 \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0441\u0435 \u043f\u0440\u0438\u0448\u0435\u0434\u0448\u0438\u0435 \u043f\u0443\u0448-\u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f \u0441 \u043c\u043e\u043c\u0435\u043d\u0442\u0430 \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f. \u0414\u043b\u044f \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f debug-\u044d\u043a\u0440\u0430\u043d\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0441 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u043c \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043e\u043c:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"attributes.navigationBarVisible = YES;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"attributes.canShowDebugScreen = YES;"))),(0,a.kt)("h3",{id:"threadsdelegate"},"ThreadsDelegate"),(0,a.kt)("h4",{id:"\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e-\u043d\u0435\u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043d\u044b\u0445-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043d\u0435\u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043d\u044b\u0445 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"- (void)threads:(Threads *)threads unreadMessagesCount:(NSUInteger)unreadMessagesCount;")),(0,a.kt)("h4",{id:"\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430-\u043e\u0448\u0438\u0431\u043e\u043a"},"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043e\u0448\u0438\u0431\u043e\u043a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"- (void)threads:(Threads *)threads didReceiveError:(NSError *)error;")),(0,a.kt)("h4",{id:"\u043e\u0442\u043a\u0440\u044b\u0442\u0438\u0435-\u0447\u0430\u0442\u0430-\u043f\u043e-\u043f\u0443\u0448\u0443"},"\u041e\u0442\u043a\u0440\u044b\u0442\u0438\u0435 \u0447\u0430\u0442\u0430 \u043f\u043e \u043f\u0443\u0448\u0443"),(0,a.kt)("p",null,"\u0414\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0431\u044b\u043b\u043e \u043b\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043e\u0442\u043a\u0440\u044b\u0442\u043e \u043f\u043e \u043f\u0443\u0448\u0443\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"Threads"),"\xa0\u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435\u0441\u044c \u043c\u0435\u0442\u043e\u0434\u043e\u043c\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"isThreadsOriginPushUserInfo"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift",metastring:'title="AppDelegate.swift"',title:'"AppDelegate.swift"'},"extension AppDelegate: UNUserNotificationCenterDelegate {\n  @available(iOS 10.0, *)\n  func userNotificationCenter(_ center: UNUserNotificationCenter, didReceive response: UNNotificationResponse, withCompletionHandler completionHandler: @escaping () -> Void) {\n      // Check for application launched from notification\n      if response.actionIdentifier == UNNotificationDefaultActionIdentifier {\n          let userInfo = response.notification.request.content.userInfo\n          if Threads.threads().isThreadsOriginPushUserInfo(userInfo) {\n              // Application launched from Threads notification\n          } else {\n              // Application launched from other notifications\n          }\n      }\n      completionHandler()\n  } \n}\n")),(0,a.kt)("h3",{id:"\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043d\u0430\u044f-\u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0430-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439"},"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043d\u0430\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439"),(0,a.kt)("h4",{id:"\u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0435-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"},"\u0422\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'let text = "Hello, World!"\n\nThreads.threads().sendMessage(withText: text) { [weak self] (error) in\n  if let error = error {\n      // handle error\n  } else {\n      // handle success     \n  }\n}\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u041b\u0438\u043c\u0438\u0442 4000 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),(0,a.kt)("p",{parentName:"admonition"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f:\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"TextMessageSwiftViewController.swift"),",\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"TextMessageObjcViewController.m"))),(0,a.kt)("h4",{id:"\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"},"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'let image = UIImage(named: "helloWorld")\n\nThreads.threads().sendMessage(with: image) { [weak self] (error) in\n  if let error = error {\n      // handle error\n  } else {\n      // handle success     \n  }\n}\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u041b\u0438\u043c\u0438\u0442 \u043f\u043e-\u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e 30\u043c\u0431 "),(0,a.kt)("p",{parentName:"admonition"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0432 ",(0,a.kt)("inlineCode",{parentName:"p"},"PictureMessageSwiftViewController.swift")," \u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"PictureMessageObjcViewController.m"))),(0,a.kt)("h3",{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-\u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"),(0,a.kt)("h4",{id:"ssl-pinning"},"SSL Pinning"),(0,a.kt)("p",null,"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0438\u0445 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044f \u0441 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u043c \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435. \u0421\u0430\u043c\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0432\u043b\u043e\u0436\u0435\u043d\u044b \u0432 \u0431\u0430\u043d\u0434\u043b \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0432 \u043a\u043e\u0434\u0438\u0440\u043e\u0432\u043a\u0435 DER.\n\u0415\u0441\u043b\u0438 \u0441\u043f\u0438\u0441\u043e\u043a \u043d\u0435 \u043f\u0443\u0441\u0442\u043e\u0439, \u0442\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"allowUntrustedSSLCertificate"),"\xa0\u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0438\u0433\u043d\u043e\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0430."),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"\u041f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u0430, \u043d\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u0438\u043d \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442. \u0412 \u0441\u043b\u0443\u0447\u0430\u0435 \u0435\u0433\u043e \u043e\u0442\u0437\u044b\u0432\u0430 \u0438\u043b\u0438 \u0438\u0441\u0442\u0435\u0447\u0435\u043d\u0438\u044f \u0441\u0440\u043e\u043a\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f - SDK \u043f\u0435\u0440\u0435\u0441\u0442\u0430\u043d\u0435\u0442 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0442\u044c\u0441\u044f \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0440\u0435\u0437\u0435\u0440\u0432\u043d\u044b\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b \u0441 \u0438\u0445 \u0441\u0432\u043e\u0435\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u043c \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435\u043c.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[Threads threads].attributes.trustedCertificates")," - \u041f\u043e-\u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043f\u0443\u0441\u0442\u043e\u0439 \u043c\u0430\u0441\u0441\u0438\u0432. ")),(0,a.kt)(i.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Objective-C",value:"objective-c"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"swift",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'Threads.threads().attributes.trustedCertificates = [\n    THRCert(contentsOf: Bundle.main.url(forResource: "GUTS_2022.cer", withExtension: nil)),\n    THRCert(contentsOf: Bundle.main.url(forResource: "guts.2022.cer", withExtension: nil)),\n    THRCert(contentsOfFile: "guts_22.cer"),\n    THRCert(contentsOfFile: "guts.22.cer")\n'))),(0,a.kt)(l.Z,{value:"objective-c",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},'[Threads threads].attributes.trustedCertificates = @[\n    [[THRCert alloc] initWithContentsOf: [NSBundle.mainBundle URLForResource:@"GUTS_2022.cer" withExtension:nil]],\n    [[THRCert alloc] initWithContentsOf: [NSBundle.mainBundle URLForResource:@"guts.2022.cer" withExtension:nil]],\n    [[THRCert alloc] initWithContentsOfFile:@"guts_22.cer"],\n    [[THRCert alloc] initWithContentsOfFile:@"guts.22.cer"]\n];\n')))),(0,a.kt)("h4",{id:"\u0440\u0430\u0431\u043e\u0442\u0430-\u0441-\u043d\u0435\u0434\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u044b\u043c\u0438-\u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430\u043c\u0438"},"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u043d\u0435\u0434\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u044b\u043c\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430\u043c\u0438"),(0,a.kt)("p",null,"\u0420\u0435\u0433\u0443\u043b\u0438\u0440\u0443\u0435\u0442 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443 \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0432 SDK \u043d\u0430 \u0432\u0430\u043b\u0438\u0434\u043d\u043e\u0441\u0442\u044c. \u0415\u0441\u043b\u0438 \u0430\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u043d\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"trustedCertificatesList"),", \u0442\u043e \u044d\u0442\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442\u0441\u044f \u0442\u043e\u0447\u043d\u043e\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0438\u0437 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e \u0441\u043f\u0438\u0441\u043a\u0430."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[Threads threads].attributes.allowUntrustedSSLCertificate = [YES | NO]"),"\xa0- \u041f\u043e-\u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u043e. ")),(0,a.kt)("h3",{id:"\u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f-\u043e-\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0445-\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f\u0445"},"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f\u0445"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"Threads.Controls.DidClickCloseButton"')," - \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435 \u043d\u0430 \u043d\u0430\u0436\u0430\u0442\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043f\u043e \u043a\u043d\u043e\u043f\u043a\u0435 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f \u0447\u0430\u0442\u0430")))}m.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var r=n(87462),a=n(67294),i=n(86010),l=n(12466),o=n(76775),s=n(91980),u=n(67392),c=n(50012);function d(e){return function(e){var t;return(null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=p(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[s,u]=m({queryString:n,groupId:r}),[d,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),b=(()=>{const e=s??d;return f({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),h(e)}),[u,h,i]),tabValues:i}}var b=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==o&&(d(t),s(r))},f=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:f,onClick:p},l,{className:(0,i.Z)("tabs__item",v.tabItem,null==l?void 0:l.className,{"tabs__item--active":o===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=h(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",v.tabList)},a.createElement(g,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}}}]);