"use strict";(self.webpackChunkliveviewjs_com=self.webpackChunkliveviewjs_com||[]).push([[6011],{876:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var o=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),c=p(n),h=i,u=c["".concat(s,".").concat(h)]||c[h]||d[h]||a;return n?o.createElement(u,l(l({ref:t},m),{},{components:n})):o.createElement(u,l({ref:t},m))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6090:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>p});var o=n(7896),i=(n(2784),n(876));const a={sidebar_position:4},l="Show/Hide/Toggle Element Commands",r={unversionedId:"js-commands/show-hide-toggle-el",id:"js-commands/show-hide-toggle-el",title:"Show/Hide/Toggle Element Commands",description:"The show, hide, and toggle commands are used to show, hide, or toggle the visibility of an element including css",source:"@site/docs/11-js-commands/show-hide-toggle-el.md",sourceDirName:"11-js-commands",slug:"/js-commands/show-hide-toggle-el",permalink:"/docs/js-commands/show-hide-toggle-el",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Set/Remove Attribute Commands",permalink:"/docs/js-commands/set-remove-attr"},next:{title:"Dispatch Command",permalink:"/docs/js-commands/dispatch-cmd"}},s={},p=[{value:"Show Command",id:"show-command",level:2},{value:"Hide Command",id:"hide-command",level:2},{value:"Toggle Command",id:"toggle-command",level:2}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"showhidetoggle-element-commands"},"Show/Hide/Toggle Element Commands"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"show"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"hide"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"toggle")," commands are used to show, hide, or toggle the visibility of an element including css\ntransition classes. The element is identified by a CSS selector."),(0,i.kt)("h2",{id:"show-command"},"Show Command"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"show")," command makes the target element visible"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"new JS().show(options?: ShowOptions)\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," - Options for the command (optional)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"to")," - A css selector to identify the element make visible. Defaults to the element that the JS Command is attached\nto."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"time")," - The time (in milliseconds) over which to apply the transition options. Defaults to 200"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"transition")," - The string of classes to apply before showing the element, or a 3-tuple containing the transition\nclass, the class to apply to start the transition, and the class to apply to end the transition. e.g.,  ",'["ease-out\nduration-300", "opacity-0", "opacity-100"]'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"display"),' - The display type to apply to the element. Defaults to "block"')))),(0,i.kt)("p",null,"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'//... in your render function of a LiveView\n\n// show the target element on click\n<button phx-click="${new JS().show({ to: "#show_me" })}">Show</button>\n<div id="show_me" style="display: none;">Show Me</div>\n\n// show the target element with a transition on click\n<button phx-click="${new JS().show({\n  to: "#show_me2",\n  transition: ["ease-out duration-300", "opacity-0", "opacity-100"],\n  time: 400\n})}">Show w/ Transition</button>\n<div id="show_me2" style="display: none;">Show Me2</div>\n')),(0,i.kt)("h2",{id:"hide-command"},"Hide Command"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"hide")," command makes the target element hidden"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"new JS().hide(options?: ShowOptions)\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," - Options for the command (optional)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"to")," - A css selector to identify the element to hide. Defaults to the element that the JS Command is attached to."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"time")," - The time (in milliseconds) over which to apply the transition options. Defaults to 200"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"transition")," - The string of classes to apply before hiding the element, or a 3-tuple containing the transition\nclass, the class to apply to start the transition, and the class to apply to end the transition. e.g.,  ",'["ease-out\nduration-300", "opacity-100", "opacity-0"]')))),(0,i.kt)("p",null,"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'//... in your render function of a LiveView\n\n// hide the target element on click\n<button phx-click="${new JS().hide({ to: "#hide_me" })}">Hide</button>\n<div id="hide_me">Hide Me</div>\n\n// hide the target element with a transition on click\n<button phx-click="${new JS().hide({\n  to: "#hide_me",\n  transition: ["ease-out duration-300", "opacity-100", "opacity-0"],\n  time: 400\n})}">Hide w/ Transition</button>\n<div id="hide_me2">Hide Me2</div>\n')),(0,i.kt)("h2",{id:"toggle-command"},"Toggle Command"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"toggle")," command toggles the visibility of the target element"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"new JS().toggle(options?: ToggleOptions)\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," - Options for the command (optional)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"to")," - A css selector to identify the element to toggle. Defaults to the element that the JS Command is attached to."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"time")," - The time (in milliseconds) over which to apply the transition options. Defaults to 200"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"in")," - The string of classes to apply when toggling to visible, or a 3-tuple containing the transition class, the\nclass to apply to start the transition, and the class to apply to end the transition. e.g.,  ",'["ease-out duration-300",\n"opacity-0", "opacity-100"]'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"out")," - The string of classes to apply when toggling to hidden, or a 3-tuple containing the transition class, the\nclass to apply to start the transition, and the class to apply to end the transition. e.g.,  ",'["ease-out duration-300",\n"opacity-100", "opacity-0"]'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"display"),' - The display type to apply to the element when toggling to visible. Defaults to "block"')))),(0,i.kt)("p",null,"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'//... in your render function of a LiveView\n\n// toggle the target element on click\n<button phx-click="${new JS().toggle({ to: "#toggle_me" })}">Toggle</button>\n<div id="toggle_me">Toggler</div>\n\n// toggle the target element with a transition in/out on click\n<button phx-click="${new JS().toggle({\n  to: "#toggle_me2",",\n  in: ["ease-out duration-300", "opacity-0", "opacity-100"],\n  out: ["ease-out duration-300", "opacity-100", "opacity-0"],\n  time: 400\n})}">Toggle w/ Transition</button>\n<div id="toggle_me2">Toggle Me 2</div>\n')))}d.isMDXComponent=!0}}]);