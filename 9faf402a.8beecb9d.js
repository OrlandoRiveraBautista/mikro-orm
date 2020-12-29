(window.webpackJsonp=window.webpackJsonp||[]).push([[616],{1086:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return d}));var b=a(0),n=a.n(b);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,b)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,b,n=function(e,t){if(null==e)return{};var a,b,n={},r=Object.keys(e);for(b=0;b<r.length;b++)a=r[b],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(b=0;b<r.length;b++)a=r[b],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),O=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=O(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=n.a.forwardRef((function(e,t){var a=e.components,b=e.mdxType,r=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),o=O(a),j=b,d=o["".concat(c,".").concat(j)]||o[j]||m[j]||r;return a?n.a.createElement(d,i(i({ref:t},l),{},{components:a})):n.a.createElement(d,i({ref:t},l))}));function d(e,t){var a=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var r=a.length,c=new Array(r);c[0]=j;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:b,c[1]=i;for(var l=2;l<r;l++)c[l]=a[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},686:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return O}));var b=a(3),n=a(7),r=(a(0),a(1086)),c={id:"entityfactory",title:"Class: EntityFactory",sidebar_label:"EntityFactory"},i={unversionedId:"api/classes/entityfactory",id:"version-4.3/api/classes/entityfactory",isDocsHomePage:!1,title:"Class: EntityFactory",description:"Hierarchy",source:"@site/versioned_docs/version-4.3/api/classes/entityfactory.md",slug:"/api/classes/entityfactory",permalink:"/docs/api/classes/entityfactory",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/classes/entityfactory.md",version:"4.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1609233379,sidebar_label:"EntityFactory",sidebar:"version-4.3/API",previous:{title:"Class: EntityComparator",permalink:"/docs/api/classes/entitycomparator"},next:{title:"Class: EntityGenerator",permalink:"/docs/api/classes/entitygenerator"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"config",id:"config",children:[]},{value:"driver",id:"driver",children:[]},{value:"em",id:"em",children:[]},{value:"eventManager",id:"eventmanager",children:[]},{value:"hydrator",id:"hydrator",children:[]},{value:"metadata",id:"metadata",children:[]},{value:"platform",id:"platform",children:[]},{value:"unitOfWork",id:"unitofwork",children:[]}]},{value:"Methods",id:"methods",children:[{value:"create",id:"create",children:[]},{value:"createEntity",id:"createentity",children:[]},{value:"createReference",id:"createreference",children:[]},{value:"denormalizePrimaryKey",id:"denormalizeprimarykey",children:[]},{value:"extractConstructorParams",id:"extractconstructorparams",children:[]},{value:"findEntity",id:"findentity",children:[]},{value:"hydrate",id:"hydrate",children:[]},{value:"processDiscriminatorColumn",id:"processdiscriminatorcolumn",children:[]}]}],l={rightToc:p};function O(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(b.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"EntityFactory"))),Object(r.b)("h2",{id:"constructors"},"Constructors"),Object(r.b)("h3",{id:"constructor"},"constructor"),Object(r.b)("p",null,"+"," ",Object(r.b)("strong",{parentName:"p"},"new EntityFactory"),"(",Object(r.b)("inlineCode",{parentName:"p"},"unitOfWork"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/unitofwork"}),"UnitOfWork"),", ",Object(r.b)("inlineCode",{parentName:"p"},"em"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/entitymanager"}),"EntityManager"),"): ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/entityfactory"}),"EntityFactory")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/EntityFactory.ts#L22"}),"packages/core/src/entity/EntityFactory.ts:22"))),Object(r.b)("h4",{id:"parameters"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"unitOfWork")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/classes/unitofwork"}),"UnitOfWork"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"em")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/classes/entitymanager"}),"EntityManager"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/entityfactory"}),"EntityFactory")),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)("h3",{id:"config"},"config"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Private")," ",Object(r.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(r.b)("strong",{parentName:"p"},"config"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/configuration"}),"Configuration"),"<",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/interfaces/idatabasedriver"}),"IDatabaseDriver"),"<",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/connection"}),"Connection"),">> = this.em.config"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/EntityFactory.ts#L19"}),"packages/core/src/entity/EntityFactory.ts:19"))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"driver"},"driver"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Private")," ",Object(r.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(r.b)("strong",{parentName:"p"},"driver"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/interfaces/idatabasedriver"}),"IDatabaseDriver"),"<",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/connection"}),"Connection"),"> = this.em.getDriver()"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/EntityFactory.ts#L17"}),"packages/core/src/entity/EntityFactory.ts:17"))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"em"},"em"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Private")," ",Object(r.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(r.b)("strong",{parentName:"p"},"em"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/entitymanager"}),"EntityManager")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/EntityFactory.ts#L25"}),"packages/core/src/entity/EntityFactory.ts:25"))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"eventmanager"},"eventManager"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Private")," ",Object(r.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(r.b)("strong",{parentName:"p"},"eventManager"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/eventmanager"}),"EventManager")," = this.em.getEventManager()"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/EntityFactory.ts#L22"}),"packages/core/src/entity/EntityFactory.ts:22"))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"hydrator"},"hydrator"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Private")," ",Object(r.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(r.b)("strong",{parentName:"p"},"hydrator"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/interfaces/ihydrator"}),"IHydrator")," = this.config.getHydrator(this.metadata)"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/EntityFactory.ts#L21"}),"packages/core/src/entity/EntityFactory.ts:21"))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"metadata"},"metadata"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Private")," ",Object(r.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(r.b)("strong",{parentName:"p"},"metadata"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/metadatastorage"}),"MetadataStorage")," = this.em.getMetadata()"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/EntityFactory.ts#L20"}),"packages/core/src/entity/EntityFactory.ts:20"))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"platform"},"platform"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Private")," ",Object(r.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(r.b)("strong",{parentName:"p"},"platform"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/platform"}),"Platform")," = this.driver.getPlatform()"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/EntityFactory.ts#L18"}),"packages/core/src/entity/EntityFactory.ts:18"))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"unitofwork"},"unitOfWork"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Private")," ",Object(r.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(r.b)("strong",{parentName:"p"},"unitOfWork"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/unitofwork"}),"UnitOfWork")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/EntityFactory.ts#L24"}),"packages/core/src/entity/EntityFactory.ts:24"))),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"create"},"create"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"create"),"<","T, P>(",Object(r.b)("inlineCode",{parentName:"p"},"entityName"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api#entityname"}),"EntityName"),"<","T>, ",Object(r.b)("inlineCode",{parentName:"p"},"data"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api#entitydata"}),"EntityData"),"<","T>, ",Object(r.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/interfaces/factoryoptions"}),"FactoryOptions"),"): ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api#new"}),"New"),"<","T, P>"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/EntityFactory.ts#L27"}),"packages/core/src/entity/EntityFactory.ts:27"))),Object(r.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"T")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api#anyentity"}),"AnyEntity"),"<","T>"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"P")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api#populate"}),"Populate"),"<","T>"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"any")))),Object(r.b)("h4",{id:"parameters-1"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Default value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"entityName")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api#entityname"}),"EntityName"),"<","T>"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"data")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api#entitydata"}),"EntityData"),"<","T>"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"options")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/interfaces/factoryoptions"}),"FactoryOptions")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"{}")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api#new"}),"New"),"<","T, P>"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"createentity"},"createEntity"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Private"),Object(r.b)("strong",{parentName:"p"},"createEntity"),"<","T>(",Object(r.b)("inlineCode",{parentName:"p"},"data"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api#entitydata"}),"EntityData"),"<","T>, ",Object(r.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>, ",Object(r.b)("inlineCode",{parentName:"p"},"options"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/interfaces/factoryoptions"}),"FactoryOptions"),"): T"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/EntityFactory.ts#L87"}),"packages/core/src/entity/EntityFactory.ts:87"))),Object(r.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"T")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api#anyentity"}),"AnyEntity"),"<","T>")))),Object(r.b)("h4",{id:"parameters-2"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"data")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api#entitydata"}),"EntityData"),"<","T>")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"meta")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"options")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/interfaces/factoryoptions"}),"FactoryOptions"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," T"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"createreference"},"createReference"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"createReference"),"<","T>(",Object(r.b)("inlineCode",{parentName:"p"},"entityName"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api#entityname"}),"EntityName"),"<","T>, ",Object(r.b)("inlineCode",{parentName:"p"},"id"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api#primary"}),"Primary"),"<","T> ","|"," ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api#primary"}),"Primary"),"<","T>[] ","|"," Record","<","string, ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api#primary"}),"Primary"),"<","T>>, ",Object(r.b)("inlineCode",{parentName:"p"},"options?"),": Pick","<",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/interfaces/factoryoptions"}),"FactoryOptions"),", ",'"',"merge",'"'," ","|"," ",'"',"convertCustomTypes",'"',">): T"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/EntityFactory.ts#L63"}),"packages/core/src/entity/EntityFactory.ts:63"))),Object(r.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"T"))))),Object(r.b)("h4",{id:"parameters-3"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Default value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"entityName")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api#entityname"}),"EntityName"),"<","T>"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"id")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api#primary"}),"Primary"),"<","T> ","|"," ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api#primary"}),"Primary"),"<","T>[] ","|"," Record","<","string, ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api#primary"}),"Primary"),"<","T>>"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"options")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Pick","<",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/interfaces/factoryoptions"}),"FactoryOptions"),", ",'"',"merge",'"'," ","|"," ",'"',"convertCustomTypes",'"',">"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"{}")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," T"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"denormalizeprimarykey"},"denormalizePrimaryKey"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Private"),Object(r.b)("strong",{parentName:"p"},"denormalizePrimaryKey"),"<","T>(",Object(r.b)("inlineCode",{parentName:"p"},"data"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api#entitydata"}),"EntityData"),"<","T>, ",Object(r.b)("inlineCode",{parentName:"p"},"primaryKey"),": string, ",Object(r.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/interfaces/entityproperty"}),"EntityProperty"),"<","T>): void"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/EntityFactory.ts#L152"}),"packages/core/src/entity/EntityFactory.ts:152"))),Object(r.b)("p",null,"denormalize PK to value required by driver (e.g. ObjectId)"),Object(r.b)("h4",{id:"type-parameters-3"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"T"))))),Object(r.b)("h4",{id:"parameters-4"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"data")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api#entitydata"}),"EntityData"),"<","T>")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"primaryKey")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"prop")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/interfaces/entityproperty"}),"EntityProperty"),"<","T>")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," void"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"extractconstructorparams"},"extractConstructorParams"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Private"),Object(r.b)("strong",{parentName:"p"},"extractConstructorParams"),"<","T>(",Object(r.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>, ",Object(r.b)("inlineCode",{parentName:"p"},"data"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api#entitydata"}),"EntityData"),"<","T>): T","[keyof T][]"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/EntityFactory.ts#L170"}),"packages/core/src/entity/EntityFactory.ts:170"))),Object(r.b)("p",null,"returns parameters for entity constructor, creating references from plain ids"),Object(r.b)("h4",{id:"type-parameters-4"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"T"))))),Object(r.b)("h4",{id:"parameters-5"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"meta")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"data")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api#entitydata"}),"EntityData"),"<","T>")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," T","[keyof T][]"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"findentity"},"findEntity"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Private"),Object(r.b)("strong",{parentName:"p"},"findEntity"),"<","T>(",Object(r.b)("inlineCode",{parentName:"p"},"data"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api#entitydata"}),"EntityData"),"<","T>, ",Object(r.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>, ",Object(r.b)("inlineCode",{parentName:"p"},"convertCustomTypes?"),": boolean): T ","|"," undefined"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/EntityFactory.ts#L117"}),"packages/core/src/entity/EntityFactory.ts:117"))),Object(r.b)("h4",{id:"type-parameters-5"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"T"))))),Object(r.b)("h4",{id:"parameters-6"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"data")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api#entitydata"}),"EntityData"),"<","T>")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"meta")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"convertCustomTypes?")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"boolean")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," T ","|"," undefined"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"hydrate"},"hydrate"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Private"),Object(r.b)("strong",{parentName:"p"},"hydrate"),"<","T>(",Object(r.b)("inlineCode",{parentName:"p"},"entity"),": T, ",Object(r.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>, ",Object(r.b)("inlineCode",{parentName:"p"},"data"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api#entitydata"}),"EntityData"),"<","T>, ",Object(r.b)("inlineCode",{parentName:"p"},"options"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/interfaces/factoryoptions"}),"FactoryOptions"),"): void"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/EntityFactory.ts#L109"}),"packages/core/src/entity/EntityFactory.ts:109"))),Object(r.b)("h4",{id:"type-parameters-6"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"T"))))),Object(r.b)("h4",{id:"parameters-7"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"entity")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"T")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"meta")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"data")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api#entitydata"}),"EntityData"),"<","T>")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"options")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/interfaces/factoryoptions"}),"FactoryOptions"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," void"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"processdiscriminatorcolumn"},"processDiscriminatorColumn"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Private"),Object(r.b)("strong",{parentName:"p"},"processDiscriminatorColumn"),"<","T>(",Object(r.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>, ",Object(r.b)("inlineCode",{parentName:"p"},"data"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api#entitydata"}),"EntityData"),"<","T>): ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/EntityFactory.ts#L131"}),"packages/core/src/entity/EntityFactory.ts:131"))),Object(r.b)("h4",{id:"type-parameters-7"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"T"))))),Object(r.b)("h4",{id:"parameters-8"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"meta")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"data")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api#entitydata"}),"EntityData"),"<","T>")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>"))}O.isMDXComponent=!0}}]);