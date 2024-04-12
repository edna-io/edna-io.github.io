"use strict";(self.webpackChunkedna_docs=self.webpackChunkedna_docs||[]).push([[56441],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||o;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},45703:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const o={sidebar_position:3},r="Localization",l={unversionedId:"advanced/localization",id:"version-4.11.0/advanced/localization",title:"Localization",description:"Localization Settings",source:"@site/i18n/en/docusaurus-plugin-content-docs-ios/version-4.11.0/advanced/localization.md",sourceDirName:"advanced",slug:"/advanced/localization",permalink:"/en/ios/4.11.0/advanced/localization",draft:!1,tags:[],version:"4.11.0",lastUpdatedAt:1702582294,formattedLastUpdatedAt:"Dec 14, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"mainSidebar",previous:{title:"Appearance and Behavior Customization",permalink:"/en/ios/4.11.0/advanced/ui"},next:{title:"Graphic Scheme",permalink:"/en/ios/4.11.0/advanced/graphics"}},s={},c=[{value:"Localization Settings",id:"localization-settings",level:3},{value:"List of Localization Keys",id:"list-of-localization-keys",level:3},{value:"Chat Screen",id:"chat-screen",level:4},{value:"Notifications when Sending Messages",id:"notifications-when-sending-messages",level:4},{value:"Notifications during Chat",id:"notifications-during-chat",level:4},{value:"Notifications when Searching",id:"notifications-when-searching",level:4},{value:"Notification Fields",id:"notification-fields",level:4},{value:"Fields in System Notification when Selecting Photos or Files on Device",id:"fields-in-system-notification-when-selecting-photos-or-files-on-device",level:4},{value:"When Viewing Selected Photo, The Following Buttons Appear",id:"when-viewing-selected-photo-the-following-buttons-appear",level:4},{value:"Notification when Tapping Microphone Button",id:"notification-when-tapping-microphone-button",level:4},{value:"When Keyboard Appears",id:"when-keyboard-appears",level:4},{value:"Changing Contents on Current Page",id:"changing-contents-on-current-page",level:4}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"localization"},"Localization"),(0,i.kt)("h3",{id:"localization-settings"},"Localization Settings"),(0,i.kt)("p",null,"To use a new localization for the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"chatcenter"),"\xa0library, you need to add a lnaguage file to your project, for example,\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"ThreadsLocalizable.strings"),"\xa0and add it to THRAttributes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'attributes.localizationConfig = .init(bundle: Bundle(for: AttributesHelper.self), tableName: "ThreadsLocalizable")\n')),(0,i.kt)("p",null,"It is possible to add other language (the ones that are not in the language file by default)."),(0,i.kt)("p",null,"If there is no language file or the required keys are missing in it, the text for them will be taken from the language file by default."),(0,i.kt)("p",null,"List of localization keys transferred from THRAttributes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"placeholder_header"),"\xa0(",(0,i.kt)("inlineCode",{parentName:"li"},"helloTitle"),"\xa0title in\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"THRAttributes"),") - Title, short text in large font"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"placeholder_content"),"\xa0(",(0,i.kt)("inlineCode",{parentName:"li"},"helloDescription"),"\xa0title in\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"THRAttributes"),") - Subtitle, longer text in a smaller font"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"state_not_connected"),"\xa0(",(0,i.kt)("inlineCode",{parentName:"li"},"chatStateNotConnectedTitle"),"\xa0title in\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"THRAttributes"),') - Heading of the chat when there is no connection, by default it is "Contact"'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"state_ready"),"\xa0(",(0,i.kt)("inlineCode",{parentName:"li"},"chatStateReadyTitle"),"\xa0title in\xa0\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"THRAttributes"),') - Heading of the chat that is ready, by default it is "Contact center"'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"threads_request_close_thread_text"),"\xa0(",(0,i.kt)("inlineCode",{parentName:"li"},"closeThreadSurveyText"),"\xa0title in\xa0\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"THRAttributes"),") - Text of the request for the early end of the thread"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"no"),"\xa0(",(0,i.kt)("inlineCode",{parentName:"li"},"closeThreadSurveyAnswerClose"),"\xa0title in\xa0\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"THRAttributes"),") - Response text that closes the thread"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yes"),"\xa0(",(0,i.kt)("inlineCode",{parentName:"li"},"closeThreadSurveyAnswerContinue"),"\xa0title in\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"THRAttributes"),") - Response text that continues the thread")),(0,i.kt)("h3",{id:"list-of-localization-keys"},"List of Localization Keys"),(0,i.kt)("h4",{id:"chat-screen"},"Chat Screen"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Text in the center of the screen when a chat initialization error occurs")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"registration_failed_alert" = "Chat initialization failed:\\n%@" / "\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0447\u0430\u0442\u0430:\\n%@"\n\n"empty_client_id_error" = "Client id is not provided" / "Client id \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d"\n"state_not_connected" = "Call center" / "\u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u0446\u0435\u043d\u0442\u0440"\n\n"empty_client_name_error" = "Client name not provided" / "Client name \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u043e"\n\n"data_not_parsed" = "Could not parse client data" / "\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0440\u0430\u0441\u043f\u0430\u0440\u0441\u0438\u0442\u044c client data"\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"When connecting to the chat")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"state_connecting" = "Connecting..." / "\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435..."\n\n"state_ready" = "Call center" / "\u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u0446\u0435\u043d\u0442\u0440"\n\n"state_working" = "Specialist" / "\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440"\n\n"state_disconnected" = "Disconnected" / "\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d"\n\n"state_loading_history" = "Loading..." / "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430\u2026"\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Title of the window when searching for an operator")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"state_waiting_for_specialist" = "Searching..." / "\u041f\u043e\u0438\u0441\u043a \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430..."\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"When connecting to a chat and there are no messages")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"placeholder_header" = "Welcome to the call center" / "\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0432 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0446\u0435\u043d\u0442\u0440"\n')),(0,i.kt)("h4",{id:"notifications-when-sending-messages"},"Notifications when Sending Messages"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"placeholder_content" = "Send your question, the first available specialist will answer it." / "\u041e\u0442\u043f\u0440\u0430\u0432\u044c\u0442\u0435 \u0432\u0430\u0448 \u0432\u043e\u043f\u0440\u043e\u0441, \u043f\u0435\u0440\u0432\u044b\u0439 \u043e\u0441\u0432\u043e\u0431\u043e\u0434\u0438\u0432\u0448\u0438\u0439\u0441\u044f \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u043d\u0430 \u043d\u0435\u0433\u043e \u043e\u0442\u0432\u0435\u0442\u0438\u0442."\n\n"failed_message" = "The message failed to send. Retry or try again later" / "\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043d\u0435 \u0431\u044b\u043b\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e. \u041d\u0430\u0436\u043c\u0438\u0442\u0435 "\u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0443", \u0447\u0442\u043e\u0431\u044b \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"\n\n"failed_title" = "";\n\n"failed_retry" = "Retry" / "\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0443"\n\n"failed_delete" = "Delete" / "\u0423\u0434\u0430\u043b\u0438\u0442\u044c"\n\n"not_delivered" = "Not delivered" / "\u041d\u0435 \u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043e"\n\n"menu_quote_title" = "Quote / "\u0426\u0438\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"\n')),(0,i.kt)("h4",{id:"notifications-during-chat"},"Notifications during Chat"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"system_message_join_chat_unknown" = "joined at %@" / "\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u043b\u0441\u044f(-\u0430\u0441\u044c) \u043a \u0434\u0438\u0430\u043b\u043e\u0433\u0443 \u0432 %@"\n\n"system_message_join_chat_male" = "joined at %@" / "\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u043b\u0441\u044f \u043a \u0434\u0438\u0430\u043b\u043e\u0433\u0443 \u0432 %@"\n\n"system_message_join_chat_female" = "joined at %@" / "\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u043b\u0430\u0441\u044c \u043a \u0434\u0438\u0430\u043b\u043e\u0433\u0443 \u0432 %@"\n\n"system_message_leave_chat_unknown" = "left at %@" / "\u043f\u043e\u043a\u0438\u043d\u0443\u043b(\u0430) \u0434\u0438\u0430\u043b\u043e\u0433 \u0432 %@"\n\n"system_message_leave_chat_male" = "left at %@" / "\u043f\u043e\u043a\u0438\u043d\u0443\u043b \u0434\u0438\u0430\u043b\u043e\u0433 \u0432 %@"\n\n"system_message_leave_chat_female" = "left at %@" / "\u043f\u043e\u043a\u0438\u043d\u0443\u043b\u0430 \u0434\u0438\u0430\u043b\u043e\u0433 \u0432 %@"\n\n"threads_request_close_thread_text" = "Specialist has answered all your questions, do you want to proceed consulting?" / "\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442 \u043e\u0442\u0432\u0435\u0442\u0438\u043b \u043d\u0430 \u0432\u0441\u0435 \u0432\u0430\u0448\u0438 \u0432\u043e\u043f\u0440\u043e\u0441\u044b, \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044e?"\n\n"sent_label" = "sent at %@" / "\u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u0432 %@"\n"search_sent_by_you" = "You" / "\u0412\u044b"\n"one_unread_message" = "new message" / "\u043d\u043e\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"\n\n"many_unread_messages" = "new messages" / "\u043d\u043e\u0432\u044b\u0445 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"\n\n"reply" = "Reply" / "\u041e\u0442\u0432\u0435\u0442\u0438\u0442\u044c"\n\n"client_name" = "Me" / "\u042f"\n\n"survey_vote_from" = "of" / "\u0438\u0437"\n\n"survey_thanks" = "Thanks for vote" / "\u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u0432\u0430\u0448\u0443 \u043e\u0446\u0435\u043d\u043a\u0443"\n\n"image_attachment_title" = "image" / "\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"\n\n"loading_placeholder" = "Loading" / "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"\n\n"image_is_nil" = "Image can not be nil" / "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c nil"\n\n"outside_text_limit_exceed" = "Text length limit exceeded. Maximum %lu symbols" / "\u041f\u0440\u0435\u0432\u044b\u0448\u0435\u043d \u043f\u0440\u0435\u0434\u0435\u043b \u0434\u043b\u0438\u043d\u044b \u0442\u0435\u043a\u0441\u0442\u0430. \u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c %lu \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"\n\n"outside_text_is_empty" = "Text can not be empty" / "\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u043e\u0435"\n\n// JSQMessages\n"load_earlier_messages" = "Load Earlier Messages" / "\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," When you tap the search icon, a search field appears with the button.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"cancel" = "Cancel" / "\u041e\u0442\u043c\u0435\u043d\u0430"\n\n"search" = "Search" / "\u041f\u043e\u0438\u0441\u043a"\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"In the same module below there are the following buttons ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"search_scope_all" = "All" / "\u0412\u0441\u0435"\n\n"search_scope_images" = "Images" / "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f"\n\n"search_scope_files" = "Files" / "\u0424\u0430\u0439\u043b\u044b"\n')),(0,i.kt)("h4",{id:"notifications-when-searching"},"Notifications when Searching"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"search_messages_found" = "messages found:" / "\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439 \u043d\u0430\u0439\u0434\u0435\u043d\u043e:"\n\n"search_yet_another" = "Search more" / "\u0418\u0441\u043a\u0430\u0442\u044c \u0435\u0449\u0435"\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," If there is no permission to access the camera, a notification appears. ")),(0,i.kt)("h4",{id:"notification-fields"},"Notification Fields"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"access_denied" = "Access denied" / "\u041d\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u0430"\n\n"unlock_photos_access" = "Unlock your photos in the app settings to continue" / "\u0420\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u0443\u0439\u0442\u0435 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f\u043c \u0432 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"\n\n"file_limit_alert_title" = "File Size" / "\u0420\u0430\u0437\u043c\u0435\u0440 \u0444\u0430\u0439\u043b\u0430"\n\n"file_limit_alert_message" = "File size limit exceeded. Maximum %.2f MB" / "\u041f\u0440\u0435\u0432\u044b\u0448\u0435\u043d \u043b\u0438\u043c\u0438\u0442 \u0440\u0430\u0437\u043c\u0435\u0440\u0430 \u0444\u0430\u0439\u043b\u0430. \u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0430\u0437\u043c\u0435\u0440 %.2f \u043c\u0431"\n\n//SQPhotoPicker\n"cant_take_photo" = "Can\'t take a photo" / "\u041d\u0435 \u043c\u043e\u0433\u0443 \u0441\u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0440\u043e\u0432\u0430\u0442\u044c"\n\n"camera_not_found" = "On your device, the camera can not be found" / "\u041d\u0430 \u0412\u0430\u0448\u0435\u043c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430 \u043a\u0430\u043c\u0435\u0440\u0430"\n\n"unlock_camera_access" = "Unlock your camera in the app settings to continue" / "\u0420\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u0443\u0439\u0442\u0435 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043a\u0430\u043c\u0435\u0440\u0435 \u0432 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"\n')),(0,i.kt)("h4",{id:"fields-in-system-notification-when-selecting-photos-or-files-on-device"},"Fields in System Notification when Selecting Photos or Files on Device"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"my_albums" = "My Albums" / "\u041c\u043e\u0438 \u0430\u043b\u044c\u0431\u043e\u043c\u044b"\n\n"pick_photo" = "Take photo" / "\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u0441\u043d\u0438\u043c\u043e\u043a"\n\n"take_selfie" = "Take selfie"/ "\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u0441\u0435\u043b\u0444\u0438"\n\n"send_photos" = "Send" / "\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"\n\n"cancel_pick" = "Cancel" / "\u041e\u0442\u043c\u0435\u043d\u0430"\n\n"photo" = "photo" / "\u0444\u043e\u0442\u043e"\n\n"albums" = "Albums" / "\u0410\u043b\u044c\u0431\u043e\u043c\u044b"\n\n"limit_reached" = "Limit reached!" / "\u041b\u0438\u043c\u0438\u0442 \u0434\u043e\u0441\u0442\u0438\u0433\u043d\u0443\u0442!"\n\n"limit_desc" = "You can pick up to" / "\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 "\n\n"album_not_found" = "Selected album not found or it doesn\'t contain images" / "\u0412\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0439 \u0430\u043b\u044c\u0431\u043e\u043c \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d \u0438\u043b\u0438 \u043d\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439"\n\n"selfie_hint" = "Make sure your face is centered in the frame and is seen clearly" / "\u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u043d\u0430 \u0444\u043e\u0442\u043e \u0432\u0430\u0448\u0435 \u043b\u0438\u0446\u043e \u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u043e \u043f\u0440\u044f\u043c\u043e \u0438 \u0435\u0433\u043e \u043e\u0442\u0447\u0435\u0442\u043b\u0438\u0432\u043e \u0432\u0438\u0434\u043d\u043e"\n\n"do_cancel" = "Cancel" / "\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"\n')),(0,i.kt)("h4",{id:"when-viewing-selected-photo-the-following-buttons-appear"},"When Viewing Selected Photo, The Following Buttons Appear"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"retake_photo" = "Retake" / "\u041f\u0435\u0440\u0435\u0441\u043d\u044f\u0442\u044c"\n\n"use_photo" = "Use photo" / "\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"\n')),(0,i.kt)("h4",{id:"notification-when-tapping-microphone-button"},"Notification when Tapping Microphone Button"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"voice_recording_hint" = "Hold to start recording" / "\u0423\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c"\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," Error alert when trying to play audio")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"voice_play_error" = "The entry is not readable" / "\u0417\u0430\u043f\u0438\u0441\u044c \u043d\u0435 \u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044f"\n')),(0,i.kt)("h4",{id:"when-keyboard-appears"},"When Keyboard Appears"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"send" = "Send" / "\u041e\u0442\u043f\u0440"\n\n"new_message" = "New Message" / "\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"\n')),(0,i.kt)("h4",{id:"changing-contents-on-current-page"},"Changing Contents on Current Page"),(0,i.kt)("p",null,'"text_message_accessibility_label" = "%@: %@";'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"media_message_accessibility_label" = "%@: media message";\n\n"accessory_button_accessibility_label" = "Share media";\n\n"new_message_received_accessibility_announcement" = "New message received";\n\n// Specialist Positions (Roles)\n\n"BOT" = "Bot" / "\u0411\u043e\u0442"\n\n"EXTERNAL_BOT" = "Bot" / "\u0411\u043e\u0442"\n\n"OPERATOR" = "Operator" / "\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440"\n\n"SUPERVISOR" = "Operator" / "\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440"\n\n"SYSTEM" = "Operator" / "\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440"\n\n"INTEGRATION" = "Operator" / "\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440"\n')))}u.isMDXComponent=!0}}]);