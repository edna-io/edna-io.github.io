"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[63254],{3905:(n,e,t)=>{t.d(e,{Zo:()=>d,kt:()=>h});var r=t(67294);function s(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){s(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,r,s=function(n,e){if(null==n)return{};var t,r,s={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(s[t]=n[t]);return s}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(s[t]=n[t])}return s}var _=r.createContext({}),g=function(n){var e=r.useContext(_),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},d=function(n){var e=g(n.components);return r.createElement(_.Provider,{value:e},n.children)},m="mdxType",l={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(n,e){var t=n.components,s=n.mdxType,i=n.originalType,_=n.parentName,d=o(n,["components","mdxType","originalType","parentName"]),m=g(t),c=s,h=m["".concat(_,".").concat(c)]||m[c]||l[c]||i;return t?r.createElement(h,a(a({ref:e},d),{},{components:t})):r.createElement(h,a({ref:e},d))}));function h(n,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof n||s){var i=t.length,a=new Array(i);a[0]=c;var o={};for(var _ in e)hasOwnProperty.call(e,_)&&(o[_]=e[_]);o.originalType=n,o[m]="string"==typeof n?n:s,a[1]=o;for(var g=2;g<i;g++)a[g]=t[g];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},42050:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>_,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>g});var r=t(87462),s=(t(67294),t(3905));const i={sidebar_position:3},a="Localization of UI Elements",o={unversionedId:"advanced/localization",id:"version-4.14.1/advanced/localization",title:"Localization of UI Elements",description:"See the Google instructions on resource localization//developer.android.com/training/basics/supporting-devices/languages",source:"@site/i18n/en/docusaurus-plugin-content-docs-android/version-4.14.1/advanced/localization.md",sourceDirName:"advanced",slug:"/advanced/localization",permalink:"/en/android/4.14.1/advanced/localization",draft:!1,tags:[],version:"4.14.1",lastUpdatedAt:1698419024,formattedLastUpdatedAt:"Oct 27, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"mainSidebar",previous:{title:"Appearance and Behavior Customization",permalink:"/en/android/4.14.1/advanced/ui"},next:{title:"\u041c\u0438\u0433\u0440\u0430\u0446\u0438\u044f",permalink:"/en/android/4.14.1/category/\u043c\u0438\u0433\u0440\u0430\u0446\u0438\u044f"}},_={},g=[],d={toc:g},m="wrapper";function l(n){let{components:e,...t}=n;return(0,s.kt)(m,(0,r.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"localization-of-ui-elements"},"Localization of UI Elements"),(0,s.kt)("p",null,"See the Google instructions on resource localization:\xa0",(0,s.kt)("a",{parentName:"p",href:"https://developer.android.com/training/basics/supporting-devices/languages"},"https://developer.android.com/training/basics/supporting-devices/languages")),(0,s.kt)("p",null,"You need to redefine library resources in the strings.xml The file location in the project depends on the required language."),(0,s.kt)("p",null,"For example, for Russian it looks as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"MyProject/\n    res/\n       values-ru/\n           strings.xml\n")),(0,s.kt)("p",null,"Following is the list of all the string resources that can be redefined:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},'<resources>\n    <string name="threads_allow">\u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c</string> \n    <string name="threads_close">\u0417\u0430\u043a\u0440\u044b\u0442\u044c</string>\n    <string name="threads_camera">\u041a\u0430\u043c\u0435\u0440\u0430</string>\n    <string name="threads_gallery">\u0413\u0430\u043b\u0435\u0440\u0435\u044f</string>\n    <string name="threads_file">\u0424\u0430\u0439\u043b</string>\n    <string name="threads_hide">\u0421\u0432\u0435\u0440\u043d\u0443\u0442\u044c</string>\n    <string name="threads_left_female">\u043f\u043e\u043a\u0438\u043d\u0443\u043b\u0430 \u0434\u0438\u0430\u043b\u043e\u0433 \u0432</string>\n    <string name="threads_left_dialog">\u043f\u043e\u043a\u0438\u043d\u0443\u043b \u0434\u0438\u0430\u043b\u043e\u0433 \u0432</string>\n    <string name="threads_connected_female">\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u043b\u0430\u0441\u044c \u043a \u0434\u0438\u0430\u043b\u043e\u0433\u0443 \u0432</string>\n    <string name="threads_connected">\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u043b\u0441\u044f \u043a \u0434\u0438\u0430\u043b\u043e\u0433\u0443 \u0432</string>\n    <string name="threads_sent_at">\u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e %1$s</string>\n    <string name="threads_image">\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435</string>\n    <string name="threads_send">\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c</string>\n    <string name="threads_search_messages">\u041f\u043e\u0438\u0441\u043a \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439</string>\n    <string name="threads_files_and_media">\u041c\u0435\u0434\u0438\u0430 \u0438 \u0444\u0430\u0439\u043b\u044b</string>\n    <string name="threads_recently">\u041d\u0435\u0434\u0430\u0432\u043d\u043e</string>\n    <string name="threads_yesterday">\u0412\u0447\u0435\u0440\u0430</string>\n    <string name="threads_photos">\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438</string>\n    <string name="threads_find_photos">\u041d\u0430\u0439\u0442\u0438 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438</string>\n    <string name="threads_on_your_device">\u043d\u0430 \u0432\u0430\u0448\u0435\u043c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435</string>\n    <string name="threads_cancel">\u041e\u0442\u043c\u0435\u043d\u0430</string>\n    <string name="threads_search_photos">\u041f\u043e\u0438\u0441\u043a \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439\u2026</string>\n    <string name="threads_nothing_found">\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e</string>\n    <string name="threads_press">\u041d\u0430\u0436\u043c\u0438\u0442\u0435</string>\n    <string name="threads_to_photo">\u0434\u043b\u044f \u0444\u043e\u0442\u043e</string>\n    <string name="threads_no_cameras_detected">\u041d\u0430 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043a\u0430\u043c\u0435\u0440\u0430</string>\n    <string name="threads_camera_could_not_start_error">\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043a\u0430\u043c\u0435\u0440\u044b</string>\n    <string name="threads_back_camera_could_not_start_error">\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0442\u044b\u043b\u044c\u043d\u0443\u044e \u043a\u0430\u043c\u0435\u0440\u0443.</string>\n    <string name="threads_retake">\u041f\u0435\u0440\u0435\u0441\u043d\u044f\u0442\u044c</string>\n    <string name="threads_consult">\u041a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u043d\u0442</string>\n    <string name="threads_bot">\u0411\u043e\u0442</string>\n    <string name="threads_operator">\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440</string>\n\n    <string name="threads_error_no_file">\u0424\u0430\u0439\u043b \u0443\u0434\u0430\u043b\u0451\u043d \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435</string>\n    <string name="threads_no_media_and_files_header">\u041c\u0435\u0434\u0438\u0430-\u0444\u0430\u0439\u043b\u044b \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442</string>\n    <string name="threads_no_media_and_files_description">\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043d\u043e\u0432\u044b\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a\u043d\u043e\u043f\u043a\u0438\\n\xab\u041f\u0440\u0438\u043a\u0440\u0435\u043f\u0438\u0442\u044c\xbb \u043d\u0430 \u044d\u043a\u0440\u0430\u043d\u0435 \u0447\u0430\u0442\u0430</string>\n    <string name="threads_I">\u042f</string>\n    <string name="threads_choose_file">\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043b</string>\n    <string name="threads_folder_up">\u0412\u044b\u0448\u0435</string>\n    <string name="threads_now_you_are_in_directory">\u0412\u044b \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0435\u0441\u044c \u0432 </string>\n    <string name="threads_from">\u0438\u0437</string>\n    <string name="threads_in">\u0432</string>\n    <string name="threads_search_more">\u0418\u0441\u043a\u0430\u0442\u044c \u0434\u0430\u043b\u044c\u0448\u0435</string>\n    <string name="threads_download">\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c</string>\n    <string name="threads_message_were_unsent">\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043d\u0435 \u0431\u044b\u043b\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e</string>\n    <string name="threads_failed_to_open_file">\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b</string>\n    <string name="threads_saved_to_downloads">\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043e \u0432 \u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0438</string>\n    <string name="threads_unable_to_save">\u0421\u0435\u0439\u0447\u0430\u0441 \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0444\u0430\u0439\u043b</string>\n    <string name="threads_search_files">\u0418\u0441\u043a\u0430\u0442\u044c \u0444\u0430\u0439\u043b\u044b</string>\n    <string name="threads_talkback_search_icon">\u0418\u043a\u043e\u043d\u043a\u0430 \u043f\u043e\u0438\u0441\u043a\u0430</string>\n    <string name="threads_push_left_female">\u043f\u043e\u043a\u0438\u043d\u0443\u043b\u0430 \u0434\u0438\u0430\u043b\u043e\u0433</string>\n    <string name="threads_push_left">\u043f\u043e\u043a\u0438\u043d\u0443\u043b \u0434\u0438\u0430\u043b\u043e\u0433</string>\n    <string name="threads_push_connected_female">\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u043b\u0430\u0441\u044c \u043a \u0434\u0438\u0430\u043b\u043e\u0433\u0443</string>\n    <string name="threads_push_connected">\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u043b\u0441\u044f \u043a \u0434\u0438\u0430\u043b\u043e\u0433\u0443</string>\n    <string name="threads_reply">\u041e\u0442\u0432\u0435\u0442\u0438\u0442\u044c</string>\n    <string name="threads_send_male">\u043f\u0440\u0438\u0441\u043b\u0430\u043b</string>\n    <string name="threads_send_female">\u043f\u0440\u0438\u0441\u043b\u0430\u043b\u0430</string>\n    <string name="threads_touch_to_look">\u0414\u043e\u0442\u0440\u043e\u043d\u044c\u0442\u0435\u0441\u044c \u0434\u043b\u044f \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430</string>\n    <string name="threads_touch_to_download">\u0414\u043e\u0442\u0440\u043e\u043d\u044c\u0442\u0435\u0441\u044c \u0447\u0442\u043e\u0431\u044b \u0441\u043a\u0430\u0447\u0430\u0442\u044c</string>\n    <string name="threads_answer">\u041e\u0422\u0412\u0415\u0422\u0418\u0422\u042c</string>\n    <string name="threads_check_connection">\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u043c \u0432 \u0438\u043d\u0442\u0440\u043d\u0435\u0442, \u043f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435</string>\n    <string name="threads_message_not_sent">\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043d\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e, \u043f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f</string>\n    <string name="threads_typing">\u043f\u0435\u0447\u0430\u0442\u0430\u0435\u0442\u2026</string>\n    <string name="threads_ask_to_rate">\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043e\u0446\u0435\u043d\u0438\u0442\u0435 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u043d\u0430\u0448\u0435\u0433\u043e \u0441\u0435\u0440\u0432\u0438\u0441\u0430</string>\n    <string name="threads_thanks_for_rate">\u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u0432\u0430\u0448\u0443 \u043e\u0446\u0435\u043d\u043a\u0443</string>\n    <string name="threads_item_user_rate_header">\u041e\u0446\u0435\u043d\u043a\u0430 \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0432\u043e\u043f\u0440\u043e\u0441\u0430</string>\n    <string name="threads_item_user_rate_text">\u0438\u0437</string>\n\n   \x3c!-- Permissions. Dialogs when refusing to grant permissions. --\x3e\n    <string name="threads_permissions_help">\u041f\u043e\u043c\u043e\u0449\u044c</string>\n    <string name="threads_permissions_string_help_text">\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f.\\n\\n\u0427\u0442\u043e\u0431\u044b \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 "\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438", \u0437\u0430\u0442\u0435\u043c "\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f" \u0438 \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u0438\u0445.\\n\\n\u0417\u0430\u0442\u0435\u043c \u0432\u0435\u0440\u043d\u0438\u0442\u0435\u0441\u044c \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435.</string>\n    <string name="threads_permissions_camera_and_write_external_storage_help_text">\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043d\u0430 \u041a\u0430\u043c\u0435\u0440\u0443 \u0438 \u041f\u0430\u043c\u044f\u0442\u044c (\u0417\u0430\u043f\u0438\u0441\u044c \u043d\u0430 \u0432\u043d\u0435\u0448\u043d\u0435\u0435 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435).\\n\\n\u0427\u0442\u043e\u0431\u044b \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 "\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438", \u0437\u0430\u0442\u0435\u043c "\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f" \u0438 \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u0438\u0445.\\n\\n\u0417\u0430\u0442\u0435\u043c \u0432\u0435\u0440\u043d\u0438\u0442\u0435\u0441\u044c \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435.</string>\n    <string name="threads_permissions_write_external_storage_help_text">\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u043d\u0430 \u041f\u0430\u043c\u044f\u0442\u044c (\u0417\u0430\u043f\u0438\u0441\u044c \u043d\u0430 \u0432\u043d\u0435\u0448\u043d\u0435\u0435 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435).\\n\\n\u0427\u0442\u043e\u0431\u044b \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 "\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438", \u0437\u0430\u0442\u0435\u043c "\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f" \u0438 \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u0438\u0445.\\n\\n\u0417\u0430\u0442\u0435\u043c \u0432\u0435\u0440\u043d\u0438\u0442\u0435\u0441\u044c \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435.</string>\n    <string name="threads_permissions_read_external_storage_help_text">\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u043d\u0430 \u041f\u0430\u043c\u044f\u0442\u044c (\u0427\u0442\u0435\u043d\u0438\u0435 \u0441 \u0432\u0435\u0448\u043d\u0435\u0433\u043e \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430).\\n\\n\u0427\u0442\u043e\u0431\u044b \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 "\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438", \u0437\u0430\u0442\u0435\u043c "\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f" \u0438 \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u0438\u0445.\\n\\n\u0417\u0430\u0442\u0435\u043c \u0432\u0435\u0440\u043d\u0438\u0442\u0435\u0441\u044c \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435.</string>\n    <string name="threads_permissions_record_audio_help_text">\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u043d\u0430 \u0410\u0443\u0434\u0438\u043e\u0437\u0430\u043f\u0438\u0441\u044c (\u041c\u0438\u043a\u0440\u043e\u0444\u043e\u043d).\\n\\n\u0427\u0442\u043e\u0431\u044b \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 "\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438", \u0437\u0430\u0442\u0435\u043c "\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f" \u0438 \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u0438\u0445.\\n\\n\u0417\u0430\u0442\u0435\u043c \u0432\u0435\u0440\u043d\u0438\u0442\u0435\u0441\u044c \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435.</string>\n    <string name="threads_permissions_settings">\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438</string>\n\n    \x3c!-- Permissions. Dialogs describing the reason for the access request.--\x3e\n    <string name="threads_permission_description_access_to_files_title">\u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044e \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0444\u0430\u0439\u043b\u0430\u043c \u043d\u0430 \u0432\u0430\u0448\u0435\u043c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435</string>\n    <string name="threads_permission_description_access_to_files_message">\u042d\u0442\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043b\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0444\u0430\u0439\u043b\u043e\u0432</string>\n    <string name="threads_permission_description_access_to_audio_recording_title">\u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044e \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c \u0430\u0443\u0434\u0438\u043e</string>\n    <string name="threads_permission_description_access_to_audio_recording_message">\u042d\u0442\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043b\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0433\u043e\u043b\u043e\u0441\u043e\u0432\u044b\u0445 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439</string>\n    <string name="threads_permission_description_access_to_camera_title">\u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044e \u0441\u043d\u0438\u043c\u0430\u0442\u044c \u0444\u043e\u0442\u043e</string>\n    <string name="threads_permission_description_access_to_camera_message">\u042d\u0442\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043b\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0444\u043e\u0442\u043e</string>\n\n    <plurals name="threads_unread_messages">\n        <item quantity="one">%d \u043d\u0435\u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043d\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435</item>\n        <item quantity="few">%d \u043d\u0435\u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043d\u044b\u0445 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f</item>\n        <item quantity="many">%d \u043d\u0435\u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043d\u044b\u0445 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439</item>\n        <item quantity="other">%d \u043d\u0435\u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043d\u044b\u0445 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439</item>\n    </plurals>\n\n    <plurals name="threads_new_messages">\n        <item quantity="one">%d \u043d\u043e\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435</item>\n        <item quantity="few">%d \u043d\u043e\u0432\u044b\u0445 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f</item>\n        <item quantity="many">%d \u043d\u043e\u0432\u044b\u0445 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439</item>\n        <item quantity="other">%d \u043d\u043e\u0432\u044b\u0445 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439</item>\n    </plurals>\n\n    <plurals name="threads_images">\n        <item quantity="one">%d \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435</item>\n        <item quantity="few">%d \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f</item>\n        <item quantity="many">%d \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439</item>\n        <item quantity="other">%d \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439</item>\n    </plurals>\n\n    <plurals name="threads_files">\n        <item quantity="one">%d \u0444\u0430\u0439\u043b</item>\n        <item quantity="few">%d \u0444\u0430\u0439\u043b\u0430</item>\n        <item quantity="many">%d \u0444\u0430\u0439\u043b\u043e\u0432</item>\n        <item quantity="other">%d \u0444\u0430\u0439\u043b\u043e\u0432</item>\n    </plurals>\n\n    \x3c!-- \u0422\u0435\u043a\u0441\u0442\u044b \u0434\u043b\u044f \u043a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u0438 --\x3e\n    <string name="threads_push_title">Threads</string>\n    <string name="threads_media_description">Threads</string>\n\n    <string name="threads_contact_center">\u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u0446\u0435\u043d\u0442\u0440</string>\n    <string name="threads_searching_operator">\u041f\u043e\u0438\u0441\u043a \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430\u2026</string>\n    <string name="threads_operator_subtitle">@string/threads_operator</string>\n    <string name="threads_unknown_operator">\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0439</string>\n\n    <string name="threads_channel_name">\u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u0446\u0435\u043d\u0442\u0440</string>\n\n    <string name="threads_request_to_resolve_thread">\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442 \u043e\u0442\u0432\u0435\u0442\u0438\u043b \u043d\u0430 \u0432\u0441\u0435 \u0432\u0430\u0448\u0438 \u0432\u043e\u043f\u0440\u043e\u0441\u044b, \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044e?</string>\n    <string name="threads_request_to_resolve_thread_close">\u041d\u0435\u0442</string>\n    <string name="threads_request_to_resolve_thread_open">\u0414\u0430</string>\n\n    <string name="threads_welcome_screen_title_text">\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c</string>\n    <string name="threads_welcome_screen_subtitle_text">\u041e\u0442\u043f\u0440\u0430\u0432\u044c\u0442\u0435 \u0432\u0430\u0448 \u0432\u043e\u043f\u0440\u043e\u0441</string>\n    <string name="threads_input_hint">\u0412\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435\u2026</string>\n    \n\n    <string name="threads_not_allowed_file_extension">\u041d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u0444\u0430\u0439\u043b\u0430</string>\n    <string name="threads_not_allowed_file_size">\u0424\u0430\u0439\u043b \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0435\u0442 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0439 \u0440\u0430\u0437\u043c\u0435\u0440 %1$d \u041c\u0411</string>\n    <string name="threads_message_sending_is_unavailable">\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430</string>\n    <string name="threads_hold_button_to_record_audio">\u0423\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u0437\u0430\u043f\u0438\u0441\u0438 \u0434\u043b\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0433\u043e\u043b\u043e\u0441\u043e\u0432\u043e\u0433\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f</string>\n    <string name="threads_voice_message">\u0413\u043e\u043b\u043e\u0441\u043e\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435</string>\n    <string name="threads_voice_message_slide_to_cancel">\u0412\u043b\u0435\u0432\u043e - \u043e\u0442\u043c\u0435\u043d\u0430</string>\n    <string name="threads_voice_message_is_processing">\u0413\u043e\u043b\u043e\u0441\u043e\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f</string>\n    <string name="threads_voice_message_error">\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0433\u043e\u043b\u043e\u0441\u043e\u0432\u043e\u0433\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f</string>\n    <string name="threads_empty_state_hint">\u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u0430</string>\n    <string name="threads_achieve_images_count_limit_message">\u0412\u044b \u0434\u043e\u0441\u0442\u0438\u0433\u043b\u0438 \u043b\u0438\u043c\u0438\u0442\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u0434\u043b\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438</string>\n\n    <string name="threads_disallowed_error_during_load_file">\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0444\u0430\u0439\u043b\u0430 \u043d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430.\\n\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0444\u0430\u0439\u043b</string>\n    <string name="threads_timeout_error_during_load_file">\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0443 \u0444\u0430\u0439\u043b\u0430, \u0438\u0441\u0442\u0435\u043a \u0442\u0430\u0439\u043c\u0430\u0443\u0442.\\n\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u0430\u0439\u043b \u043f\u043e\u0437\u0436\u0435</string>\n    <string name="threads_unexpected_error_during_load_file">\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0443 \u0444\u0430\u0439\u043b\u0430.\\n\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0444\u0430\u0439\u043b \u043f\u043e\u0437\u0436\u0435</string>\n    <string name="threads_some_error_during_load_file">\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435\\n\u0438\u043b\u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0435 \u0444\u0430\u0439\u043b\u0430</string>\n    <string name="threads_file_restricted_type_error_during_load_file">\u0424\u0430\u0439\u043b \u0441 \u0442\u0430\u043a\u0438\u043c \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435\u043c \u0437\u0430\u043f\u0440\u0435\u0449\u0435\u043d \u043a \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435</string>\n    <string name="threads_file_restricted_size_error_during_load_file">\u0420\u0430\u0437\u043c\u0435\u0440 \u0444\u0430\u0439\u043b\u0430 \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0435\u0442 \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435</string>\n    <string name="threads_file_not_found_error_during_load_file">\u0424\u0430\u0439\u043b \u0434\u043b\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d</string>\n\n    <string name="loading"></string>\n\n    <string name="threads_history_loading_message">\u0412\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439 \u0438\u0437 \u0438\u0441\u0442\u043e\u0440\u0438\u0438, \u043f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f</string>\n    <string name="threads_consult_portrait">Consult portrait</string>\n    <string name="threads_file_not_supported">No application support this type of file</string>\n</resources>```\n')))}l.isMDXComponent=!0}}]);