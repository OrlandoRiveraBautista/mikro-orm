(window.webpackJsonp=window.webpackJsonp||[]).push([[675],{1086:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var r=a.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=u(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(t),b=n,d=l["".concat(o,".").concat(b)]||l[b]||f[b]||i;return t?a.a.createElement(d,c(c({ref:r},p),{},{components:t})):a.a.createElement(d,c({ref:r},p))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=b;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},744:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return s})),t.d(r,"default",(function(){return u}));var n=t(3),a=t(7),i=(t(0),t(1086)),o={id:"flusheventargs",title:"Interface: FlushEventArgs",sidebar_label:"FlushEventArgs"},c={unversionedId:"api/interfaces/flusheventargs",id:"version-4.2/api/interfaces/flusheventargs",isDocsHomePage:!1,title:"Interface: FlushEventArgs",description:"Hierarchy",source:"@site/versioned_docs/version-4.2/api/interfaces/flusheventargs.md",slug:"/api/interfaces/flusheventargs",permalink:"/docs/4.2/api/interfaces/flusheventargs",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/api/interfaces/flusheventargs.md",version:"4.2",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1609233379,sidebar_label:"FlushEventArgs",sidebar:"version-4.2/API",previous:{title:"Interface: FlatQueryOrderMap",permalink:"/docs/4.2/api/interfaces/flatqueryordermap"},next:{title:"Interface: ForeignKey",permalink:"/docs/4.2/api/interfaces/foreignkey"}},s=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"uow",id:"uow",children:[]}]}],p={rightToc:s};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"{}"),Object(i.b)("p",{parentName:"li"},"\u21b3 ",Object(i.b)("strong",{parentName:"p"},"FlushEventArgs")))),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"uow"},"uow"),Object(i.b)("p",null,"\u2022  ",Object(i.b)("strong",{parentName:"p"},"uow"),": ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/classes/unitofwork"}),"UnitOfWork")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/events/EventSubscriber.ts#L12"}),"packages/core/src/events/EventSubscriber.ts:12"))))}u.isMDXComponent=!0}}]);