"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[46886],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},10880:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:7},i="Changelog",l={unversionedId:"changelog",id:"version-4.7.0/changelog",title:"Changelog",description:"Bug fixes:",source:"@site/i18n/en/docusaurus-plugin-content-docs-ios/version-4.7.0/changelog.md",sourceDirName:".",slug:"/changelog",permalink:"/en/ios/4.7.0/changelog",draft:!1,tags:[],version:"4.7.0",lastUpdatedAt:1688103326,formattedLastUpdatedAt:"Jun 30, 2023",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"mainSidebar",previous:{title:"Demo App",permalink:"/en/ios/4.7.0/demo"}},c={},s=[{value:"Bug fixes:",id:"bug-fixes",level:3},{value:"\u0421ompatibility:",id:"\u0441ompatibility",level:3}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"changelog"},"Changelog"),(0,o.kt)("h3",{id:"bug-fixes"},"Bug fixes:"),(0,o.kt)("p",null,"We have:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"fixed the behavior that caused a bubble with the text of an unsent message to be cut off."),(0,o.kt)("li",{parentName:"ul"},"corrected the issue that caused a name of the voice message to be displayed when sending it."),(0,o.kt)("li",{parentName:"ul"},"fixed the behavior based on which the text of a voice message received from the speech recognition service, Speech Technology Center, was not fully displayed.  ")),(0,o.kt)("h3",{id:"\u0441ompatibility"},"\u0421ompatibility:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"XCode 13.2.1 (13C100)"),(0,o.kt)("li",{parentName:"ul"},"iOS 10.0"),(0,o.kt)("li",{parentName:"ul"},"Swift 5.5"),(0,o.kt)("li",{parentName:"ul"},"Backend ednaChatCenter version 4.0 or higher"),(0,o.kt)("li",{parentName:"ul"},"Datastore ednaChatCenter version 14 or higher (history v14)")))}d.isMDXComponent=!0}}]);