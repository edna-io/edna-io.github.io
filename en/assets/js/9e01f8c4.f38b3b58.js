"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[59592],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25657:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:1},i="Installation",l={unversionedId:"getting-started/installation",id:"version-4.32.0/getting-started/installation",title:"Installation",description:"Minimal Requirements",source:"@site/i18n/en/docusaurus-plugin-content-docs-android/version-4.32.0/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/en/android/4.32.0/getting-started/installation",draft:!1,tags:[],version:"4.32.0",lastUpdatedAt:1731425742,formattedLastUpdatedAt:"Nov 12, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mainSidebar",previous:{title:"\u041d\u0430\u0447\u0430\u043b\u043e \u0440\u0430\u0431\u043e\u0442\u044b",permalink:"/en/android/4.32.0/category/\u043d\u0430\u0447\u0430\u043b\u043e-\u0440\u0430\u0431\u043e\u0442\u044b"},next:{title:"Configuration",permalink:"/en/android/4.32.0/getting-started/usage"}},s={},d=[{value:"Minimal Requirements",id:"minimal-requirements",level:3},{value:"Connecting edna Chat Center Android Library",id:"connecting-edna-chat-center-android-library",level:3},{value:"Obfuscation Settings",id:"obfuscation-settings",level:3}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("h3",{id:"minimal-requirements"},"Minimal Requirements"),(0,a.kt)("p",null,"Make sure that your project meets the following requirements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"API level 21 (Lollipop) or higher"),(0,a.kt)("li",{parentName:"ul"},"Android 5.0 or higher"),(0,a.kt)("li",{parentName:"ul"},"Jetpack (AndroidX) is used that includes the following versions:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"com.android.tools.build:gradle v7.0.4 or newer"),(0,a.kt)("li",{parentName:"ul"},"compileSdkVersion 30 or newer")))),(0,a.kt)("h3",{id:"connecting-edna-chat-center-android-library"},"Connecting edna Chat Center Android Library"),(0,a.kt)("p",null,"For the chat to work, you need to add the following dependencies:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},"allprojects {\n    repositories {\n        google()\n        mavenCentral()\n        maven { url 'https://maven-pub.edna.ru/repository/maven-public/' }\n    }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},'releaseImplementation "im.threads:threads-release:4.32.0"\ndebugImplementation "im.threads:threads-debug:4.32.0"\n')),(0,a.kt)("p",null,"For the library to work, you need to add dataBinding to\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"build.gradle"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},"dataBinding {\n    enabled = true\n}\n")),(0,a.kt)("h3",{id:"obfuscation-settings"},"Obfuscation Settings"),(0,a.kt)("p",null,"For correct operation, we recommend that you add the following strings to ProGuard:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},"-keepattributes Signature\n# For using GSON @Expose annotation\n-keepattributes *Annotation*\n\n# Gson specific classes\n-dontwarn sun.misc.**\n\n# Application classes that will be serialized/deserialized over Gson\n-keep class im.threads.** { *; }\n\n# Prevent proguard from stripping interface information from TypeAdapter, TypeAdapterFactory,\n# JsonSerializer, JsonDeserializer instances (so they can be used in @JsonAdapter)\n-keep class * extends com.google.gson.TypeAdapter\n-keep class * implements com.google.gson.TypeAdapterFactory\n-keep class * implements com.google.gson.JsonSerializer\n-keep class * implements com.google.gson.JsonDeserializer\n\n# Prevent R8 from leaving Data object members always null\n-keepclassmembers,allowobfuscation class * {\n@com.google.gson.annotations.SerializedName <fields>;\n}\n")),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"In build.gradle (at the application level), the ",(0,a.kt)("inlineCode",{parentName:"p"},"debuggable = false")," parameter should be disabled for the release configuration."),(0,a.kt)("p",{parentName:"admonition"},"Otherwise, it might lead to additional fails.")))}u.isMDXComponent=!0}}]);