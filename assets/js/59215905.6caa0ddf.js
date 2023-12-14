"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[63200],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46571:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),l=n(74866),i=n(85162);const o={sidebar_position:1},s="\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",u={unversionedId:"advanced/advanced",id:"version-4.10.0/advanced/advanced",title:"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",description:"\u041b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",source:"@site/ios_versioned_docs/version-4.10.0/advanced/advanced.md",sourceDirName:"advanced",slug:"/advanced/",permalink:"/ios/4.10.0/advanced/",draft:!1,tags:[],version:"4.10.0",lastUpdatedAt:1691058766,formattedLastUpdatedAt:"3 \u0430\u0432\u0433. 2023 \u0433.",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mainSidebar",previous:{title:"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",permalink:"/ios/4.10.0/category/\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0435-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"},next:{title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0432\u043d\u0435\u0448\u043d\u0435\u0433\u043e \u0432\u0438\u0434\u0430",permalink:"/ios/4.10.0/advanced/ui"}},c={},d=[{value:"\u041b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",level:3},{value:"Debug \u042d\u043a\u0440\u0430\u043d",id:"debug-\u044d\u043a\u0440\u0430\u043d",level:3},{value:"ThreadsDelegate",id:"threadsdelegate",level:3},{value:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043d\u0435\u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043d\u044b\u0445 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439",id:"\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e-\u043d\u0435\u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043d\u044b\u0445-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439",level:4},{value:"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043e\u0448\u0438\u0431\u043e\u043a",id:"\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430-\u043e\u0448\u0438\u0431\u043e\u043a",level:4},{value:"\u041e\u0442\u043a\u0440\u044b\u0442\u0438\u0435 \u0447\u0430\u0442\u0430 \u043f\u043e \u043f\u0443\u0448\u0443",id:"\u043e\u0442\u043a\u0440\u044b\u0442\u0438\u0435-\u0447\u0430\u0442\u0430-\u043f\u043e-\u043f\u0443\u0448\u0443",level:4},{value:"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043d\u0430\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439",id:"\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043d\u0430\u044f-\u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0430-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439",level:3},{value:"\u0422\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",id:"\u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0435-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",level:4},{value:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",id:"\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",level:4},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-\u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432",level:3},{value:"SSL Pinning",id:"ssl-pinning",level:4},{value:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u043d\u0435\u0434\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u044b\u043c\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430\u043c\u0438",id:"\u0440\u0430\u0431\u043e\u0442\u0430-\u0441-\u043d\u0435\u0434\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u044b\u043c\u0438-\u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430\u043c\u0438",level:4},{value:"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f\u0445",id:"\u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f-\u043e-\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0445-\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f\u0445",level:3}],p={toc:d},m="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0435-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"},"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),(0,a.kt)("h3",{id:"\u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"},"\u041b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Threads.threads().attributes.logLevels = .off")," - \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435/\u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043b\u043e\u0433\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f. \u0412 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f class LogLevel c \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u043e\u0439 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0430 OptionSet(Swift) \u0438\u043b\u0438 NS_OPTIONS(Objective-C).")),(0,a.kt)("p",null,"LogLevel, \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- off (\u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d\u044b \u0432\u0441\u0435 \u0443\u0440\u043e\u0432\u043d\u0438 \u043b\u043e\u0433\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f);\n- info (\u043e\u0431\u0449\u0438\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c);\n- network (\u0441\u0435\u0442\u0435\u0432\u043e\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c);\n- network-sock (\u0441\u0435\u0442\u0435\u0432\u043e\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c, \u0441\u043e\u043a\u0435\u0442);\n- user-interface (\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441);\n- error (\u043e\u0448\u0438\u0431\u043a\u0438);\n- all (\u0432\u043a\u043b\u044e\u0447\u0435\u043d\u044b \u0432\u0441\u0435 \u0432\u044b\u0448\u0435\u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0435 \u0443\u0440\u043e\u0432\u043d\u0438);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"    let logLevelValue = (LogLevel.network.rawValue | LogLevel.networkSock.rawValue)\n    Threads.threads().attributes.logLevels = LogLevel(rawValue: logLevelValue)\n")),(0,a.kt)("p",null,'\u0415\u0441\u043b\u0438 \u0430\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u043d \u0445\u043e\u0442\u044c \u043e\u0434\u0438\u043d \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u043b\u043e\u0433\u043e\u0432, \u043f\u043e\u0442\u043e\u043a \u0441\u043e\u0431\u044b\u0442\u0438\u0439 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0439 OSLog \u0441 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u043c "im.threads.logs" \u0438 \u043c\u043e\u0436\u043d\u043e \u043d\u0430\u0431\u043b\u044e\u0434\u0430\u0442\u044c \u043a\u0430\u043a \u0447\u0435\u0440\u0435\u0437 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b XCode \u0442\u0430\u043a \u0438 \u0447\u0435\u0440\u0435\u0437 Console \u0432 macos.'),(0,a.kt)("p",null,'\u041e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u0441 OSLog \u0441\u043e\u0431\u044b\u0442\u0438\u044f \u0444\u0438\u043a\u0441\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u0432 \u0444\u0430\u0439\u043b \u043d\u0430 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435. \u0418\u043c\u044f \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e - Threads.log. \u041c\u0435\u0441\u0442\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f .documentDirectory/Logs (NSSearchPathForDirectoriesInDomains(.documentDirectory, .userDomainMask, true) + "/Logs"). \u0415\u0441\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u0438\u043d\u0443\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0432\u044b\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c \u043b\u043e\u0433\u043e\u0432 \u0432 \u0444\u0430\u0439\u043b \u043d\u0430 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0432 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u0445 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043e\u0432 \u0438\u043c\u0435\u043d\u0438 \u0444\u0430\u0439\u043b\u0430 \u043d\u0443\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c nil:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"    Threads.threads().attributes.logFileName = nil \n")),(0,a.kt)("p",null,"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0434\u043b\u044f \u0444\u0430\u0439\u043b\u0430 \u0437\u0430\u043f\u0438\u0441\u0438 \u043b\u043e\u0433\u043e\u0432 \u043d\u0430 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'Threads.threads().attributes.logFileName: String? = "Threads"'),' - \u0438\u043c\u044f \u0444\u0430\u0439\u043b\u0430 \u043b\u043e\u0433\u043e\u0432, \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e - "Threads" (\u0435\u0441\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c nil, \u043b\u043e\u0433\u0438 \u0432 \u0444\u0430\u0439\u043b \u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0435 \u0431\u0443\u0434\u0443\u0442);'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Threads.threads().attributes.logFileSizeMb: Int = 1")," - \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0430\u0437\u043c\u0435\u0440 \u0444\u0430\u0439\u043b\u0430 \u0432 \u043c\u0435\u0433\u0430\u0431\u0430\u0439\u0442\u0430\u0445, \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e - 1;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Threads.threads().attributes.logFileMaxCount: Int = 7")," - \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0444\u0430\u0439\u043b\u043e\u0432 \u043b\u043e\u0433\u043e\u0432 \u0432 \u0440\u043e\u0442\u0430\u0446\u0438\u0438, \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e - 7. \u041f\u0440\u0438 \u043f\u0440\u0435\u0432\u044b\u0448\u0435\u043d\u0438\u0438 \u0441\u0430\u043c\u044b\u0439 \u0441\u0442\u0430\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u0442\u0438\u0440\u0430\u0442\u044c\u0441\u044f.")),(0,a.kt)("h3",{id:"debug-\u044d\u043a\u0440\u0430\u043d"},"Debug \u042d\u043a\u0440\u0430\u043d"),(0,a.kt)("p",null,"\u0412 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445 \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u0433\u043e\u0434\u0438\u0442\u044c\u0441\u044f debug-\u0440\u0435\u0436\u0438\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u043d\u0435\u043a\u0443\u044e \u043f\u043e\u043b\u0435\u0437\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e. \u0412 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u0443\u043c\u0435\u0435\u0442 \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0441\u0435 \u043f\u0440\u0438\u0448\u0435\u0434\u0448\u0438\u0435 \u043f\u0443\u0448-\u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f \u0441 \u043c\u043e\u043c\u0435\u043d\u0442\u0430 \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f. \u0414\u043b\u044f \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f debug-\u044d\u043a\u0440\u0430\u043d\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0441 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u043c \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043e\u043c:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"attributes.navigationBarVisible = YES;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"attributes.canShowDebugScreen = YES;"))),(0,a.kt)("h3",{id:"threadsdelegate"},"ThreadsDelegate"),(0,a.kt)("h4",{id:"\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e-\u043d\u0435\u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043d\u044b\u0445-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043d\u0435\u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043d\u044b\u0445 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"- (void)threads:(Threads *)threads unreadMessagesCount:(NSUInteger)unreadMessagesCount;")),(0,a.kt)("h4",{id:"\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430-\u043e\u0448\u0438\u0431\u043e\u043a"},"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043e\u0448\u0438\u0431\u043e\u043a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"- (void)threads:(Threads *)threads didReceiveError:(NSError *)error;")),(0,a.kt)("h4",{id:"\u043e\u0442\u043a\u0440\u044b\u0442\u0438\u0435-\u0447\u0430\u0442\u0430-\u043f\u043e-\u043f\u0443\u0448\u0443"},"\u041e\u0442\u043a\u0440\u044b\u0442\u0438\u0435 \u0447\u0430\u0442\u0430 \u043f\u043e \u043f\u0443\u0448\u0443"),(0,a.kt)("p",null,"\u0414\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0431\u044b\u043b\u043e \u043b\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043e\u0442\u043a\u0440\u044b\u0442\u043e \u043f\u043e \u043f\u0443\u0448\u0443\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"Threads"),"\xa0\u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435\u0441\u044c \u043c\u0435\u0442\u043e\u0434\u043e\u043c\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"isThreadsOriginPushUserInfo"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift",metastring:'title="AppDelegate.swift"',title:'"AppDelegate.swift"'},"extension AppDelegate: UNUserNotificationCenterDelegate {\n  @available(iOS 10.0, *)\n  func userNotificationCenter(_ center: UNUserNotificationCenter, didReceive response: UNNotificationResponse, withCompletionHandler completionHandler: @escaping () -> Void) {\n      // Check for application launched from notification\n      if response.actionIdentifier == UNNotificationDefaultActionIdentifier {\n          let userInfo = response.notification.request.content.userInfo\n          if Threads.threads().isThreadsOriginPushUserInfo(userInfo) {\n              // Application launched from Threads notification\n          } else {\n              // Application launched from other notifications\n          }\n      }\n      completionHandler()\n  } \n}\n")),(0,a.kt)("h3",{id:"\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043d\u0430\u044f-\u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0430-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439"},"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043d\u0430\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439"),(0,a.kt)("h4",{id:"\u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0435-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"},"\u0422\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'let text = "Hello, World!"\n\nThreads.threads().sendMessage(withText: text) { [weak self] (error) in\n  if let error = error {\n      // handle error\n  } else {\n      // handle success     \n  }\n}\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u041b\u0438\u043c\u0438\u0442 4000 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),(0,a.kt)("p",{parentName:"admonition"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f:\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"TextMessageSwiftViewController.swift"),",\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"TextMessageObjcViewController.m"))),(0,a.kt)("h4",{id:"\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"},"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'let image = UIImage(named: "helloWorld")\n\nThreads.threads().sendMessage(with: image) { [weak self] (error) in\n  if let error = error {\n      // handle error\n  } else {\n      // handle success     \n  }\n}\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u041b\u0438\u043c\u0438\u0442 \u043f\u043e-\u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e 30\u043c\u0431 "),(0,a.kt)("p",{parentName:"admonition"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0432 ",(0,a.kt)("inlineCode",{parentName:"p"},"PictureMessageSwiftViewController.swift")," \u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"PictureMessageObjcViewController.m"))),(0,a.kt)("h3",{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-\u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"),(0,a.kt)("h4",{id:"ssl-pinning"},"SSL Pinning"),(0,a.kt)("p",null,"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0438\u0445 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044f \u0441 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u043c \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435. \u0421\u0430\u043c\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0432\u043b\u043e\u0436\u0435\u043d\u044b \u0432 \u0431\u0430\u043d\u0434\u043b \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0432 \u043a\u043e\u0434\u0438\u0440\u043e\u0432\u043a\u0435 DER.\n\u0415\u0441\u043b\u0438 \u0441\u043f\u0438\u0441\u043e\u043a \u043d\u0435 \u043f\u0443\u0441\u0442\u043e\u0439, \u0442\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"allowUntrustedSSLCertificate"),"\xa0\u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0438\u0433\u043d\u043e\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0430."),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"\u041f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u0430, \u043d\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u0438\u043d \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442. \u0412 \u0441\u043b\u0443\u0447\u0430\u0435 \u0435\u0433\u043e \u043e\u0442\u0437\u044b\u0432\u0430 \u0438\u043b\u0438 \u0438\u0441\u0442\u0435\u0447\u0435\u043d\u0438\u044f \u0441\u0440\u043e\u043a\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f - SDK \u043f\u0435\u0440\u0435\u0441\u0442\u0430\u043d\u0435\u0442 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0442\u044c\u0441\u044f \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0440\u0435\u0437\u0435\u0440\u0432\u043d\u044b\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b \u0441 \u0438\u0445 \u0441\u0432\u043e\u0435\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u043c \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435\u043c.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[Threads threads].attributes.trustedCertificates")," - \u041f\u043e-\u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043f\u0443\u0441\u0442\u043e\u0439 \u043c\u0430\u0441\u0441\u0438\u0432. ")),(0,a.kt)(l.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Objective-C",value:"objective-c"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"swift",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'Threads.threads().attributes.trustedCertificates = [\n    THRCert(contentsOf: Bundle.main.url(forResource: "GUTS_2022.cer", withExtension: nil)),\n    THRCert(contentsOf: Bundle.main.url(forResource: "guts.2022.cer", withExtension: nil)),\n    THRCert(contentsOfFile: "guts_22.cer"),\n    THRCert(contentsOfFile: "guts.22.cer")\n'))),(0,a.kt)(i.Z,{value:"objective-c",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},'[Threads threads].attributes.trustedCertificates = @[\n    [[THRCert alloc] initWithContentsOf: [NSBundle.mainBundle URLForResource:@"GUTS_2022.cer" withExtension:nil]],\n    [[THRCert alloc] initWithContentsOf: [NSBundle.mainBundle URLForResource:@"guts.2022.cer" withExtension:nil]],\n    [[THRCert alloc] initWithContentsOfFile:@"guts_22.cer"],\n    [[THRCert alloc] initWithContentsOfFile:@"guts.22.cer"]\n];\n')))),(0,a.kt)("h4",{id:"\u0440\u0430\u0431\u043e\u0442\u0430-\u0441-\u043d\u0435\u0434\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u044b\u043c\u0438-\u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430\u043c\u0438"},"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u043d\u0435\u0434\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u044b\u043c\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430\u043c\u0438"),(0,a.kt)("p",null,"\u0420\u0435\u0433\u0443\u043b\u0438\u0440\u0443\u0435\u0442 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443 \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0432 SDK \u043d\u0430 \u0432\u0430\u043b\u0438\u0434\u043d\u043e\u0441\u0442\u044c. \u0415\u0441\u043b\u0438 \u0430\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u043d\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"trustedCertificatesList"),", \u0442\u043e \u044d\u0442\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442\u0441\u044f \u0442\u043e\u0447\u043d\u043e\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0438\u0437 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e \u0441\u043f\u0438\u0441\u043a\u0430."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[Threads threads].attributes.allowUntrustedSSLCertificate = [YES | NO]"),"\xa0- \u041f\u043e-\u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u043e. ")),(0,a.kt)("h3",{id:"\u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f-\u043e-\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0445-\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f\u0445"},"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f\u0445"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"Threads.Controls.DidClickCloseButton"')," - \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435 \u043d\u0430 \u043d\u0430\u0436\u0430\u0442\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043f\u043e \u043a\u043d\u043e\u043f\u043a\u0435 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f \u0447\u0430\u0442\u0430")))}f.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(87462),a=n(67294),l=n(86010),i=n(12466),o=n(76775),s=n(91980),u=n(67392),c=n(50012);function d(e){return function(e){var t;return(null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=p(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[s,u]=f({queryString:n,groupId:r}),[d,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),v=(()=>{const e=s??d;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{v&&o(v)}),[v]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),h(e)}),[u,h,l]),tabValues:l}}var v=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==o&&(d(t),s(r))},m=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},i,{className:(0,l.Z)("tabs__item",g.tabItem,null==i?void 0:i.className,{"tabs__item--active":o===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function N(e){const t=h(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},a.createElement(b,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function w(e){const t=(0,v.Z)();return a.createElement(N,(0,r.Z)({key:String(t)},e))}}}]);