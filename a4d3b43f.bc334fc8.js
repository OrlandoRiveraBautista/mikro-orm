(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{293:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(1),r=n(9),i=(n(0),n(391)),c={title:"Metadata Cache"},o={id:"version-3.2/metadata-cache",title:"Metadata Cache",description:"Under the hood, `MikroORM` uses [`ts-morph`](https://github.com/dsherret/ts-morph) to read ",source:"@site/versioned_docs/version-3.2/metadata-cache.md",permalink:"/docs/3.2/metadata-cache",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-3.2/metadata-cache.md",version:"3.2",sidebar:"version-3.2/docs",previous:{title:"Metadata Providers",permalink:"/docs/3.2/metadata-providers"},next:{title:"Debugging",permalink:"/docs/3.2/debugging"}},p=[{value:"Automatic Invalidation",id:"automatic-invalidation",children:[]},{value:"Disabling Metadata Cache",id:"disabling-metadata-cache",children:[]},{value:"Pretty Printing",id:"pretty-printing",children:[]},{value:"Using Different temp Folder",id:"using-different-temp-folder",children:[]},{value:"Providing Custom Cache Adapter",id:"providing-custom-cache-adapter",children:[]}],l={rightToc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Under the hood, ",Object(i.b)("inlineCode",{parentName:"p"},"MikroORM")," uses ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/dsherret/ts-morph"}),Object(i.b)("inlineCode",{parentName:"a"},"ts-morph"))," to read\nTypeScript source files of all entities to be able to detect all types. Thanks to this,\ndefining the type is enough for runtime validation."),Object(i.b)("p",null,"This process can be a bit slow, mainly because ",Object(i.b)("inlineCode",{parentName:"p"},"ts-morph")," will scan all your source files\nbased on your ",Object(i.b)("inlineCode",{parentName:"p"},"tsconfig.json"),". You can speed up this process by whitelisting only the folders\nwhere your entities are via ",Object(i.b)("inlineCode",{parentName:"p"},"entitiesDirsTs")," option. "),Object(i.b)("p",null,"After the discovery process ends, all metadata will be cached. By default, ",Object(i.b)("inlineCode",{parentName:"p"},"FileCacheAdapter"),"\nwill be used to store the cache inside ",Object(i.b)("inlineCode",{parentName:"p"},"./temp")," folder to JSON files. "),Object(i.b)("h2",{id:"automatic-invalidation"},"Automatic Invalidation"),Object(i.b)("p",null,"Entity metadata are cached together with modified time of the source file, and every time\nthe cache is requested, it first checks if the cache is not invalid. This way you can forgot\nabout the caching mechanism most of the time."),Object(i.b)("p",null,"One case where you can end up needing to wipe the cache manually is when you work withing a\ngit branch where contents of entities folder differs. "),Object(i.b)("h2",{id:"disabling-metadata-cache"},"Disabling Metadata Cache"),Object(i.b)("p",null,"You can disable caching via:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"await MikroORM.init({\n  cache: { enabled: false },\n  // ...\n});\n")),Object(i.b)("h2",{id:"pretty-printing"},"Pretty Printing"),Object(i.b)("p",null,"By default, cached metadata will be one line JSON string. You can force pretty printing it:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"await MikroORM.init({\n  cache: { pretty: true },\n  // ...\n});\n")),Object(i.b)("h2",{id:"using-different-temp-folder"},"Using Different temp Folder"),Object(i.b)("p",null,"You can set the temp folder via:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"await MikroORM.init({\n  cache: { options: { cacheDir: '...' } },\n  // ...\n});\n")),Object(i.b)("h2",{id:"providing-custom-cache-adapter"},"Providing Custom Cache Adapter"),Object(i.b)("p",null,"You can also implement your own cache adapter, for example to store the cache in redis.\nTo do so, just implement simple ",Object(i.b)("inlineCode",{parentName:"p"},"CacheAdapter")," interface:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export interface CacheAdapter {\n\n  get(name: string): any;\n\n  set(name: string, data: any, origin: string): void;\n\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export class RedisCacheAdapter implements CacheAdapter { ... }\n")),Object(i.b)("p",null,"And provide the implementation in ",Object(i.b)("inlineCode",{parentName:"p"},"cache.adapter")," option:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"await MikroORM.init({\n  cache: { adapter: RedisCacheAdapter, options: { ... } },\n  // ...\n});\n")))}s.isMDXComponent=!0},391:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},d=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,m=d["".concat(c,".").concat(u)]||d[u]||b[u]||i;return n?r.a.createElement(m,o({ref:t},l,{components:n})):r.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);