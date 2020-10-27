(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{257:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return m}));var b=a(1),n=a(6),r=(a(0),a(806)),l={id:"postgresqlschemahelper",title:"Class: PostgreSqlSchemaHelper",sidebar_label:"PostgreSqlSchemaHelper"},c={unversionedId:"api/classes/postgresqlschemahelper",id:"api/classes/postgresqlschemahelper",isDocsHomePage:!1,title:"Class: PostgreSqlSchemaHelper",description:"Hierarchy",source:"@site/docs/api/classes/postgresqlschemahelper.md",slug:"/api/classes/postgresqlschemahelper",permalink:"/docs/next/api/classes/postgresqlschemahelper",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/api/classes/postgresqlschemahelper.md",version:"current",sidebar_label:"PostgreSqlSchemaHelper",sidebar:"API",previous:{title:"Class: PostgreSqlPlatform",permalink:"/docs/next/api/classes/postgresqlplatform"},next:{title:"Class: QueryBuilder<T>",permalink:"/docs/next/api/classes/querybuilder"}},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Methods",id:"methods",children:[{value:"getColumns",id:"getcolumns",children:[]},{value:"getDatabaseExistsSQL",id:"getdatabaseexistssql",children:[]},{value:"getDatabaseNotExistsError",id:"getdatabasenotexistserror",children:[]},{value:"getEnumDefinitions",id:"getenumdefinitions",children:[]},{value:"getForeignKeysSQL",id:"getforeignkeyssql",children:[]},{value:"getIndexes",id:"getindexes",children:[]},{value:"getIndexesSQL",id:"getindexessql",children:[]},{value:"getListTablesSQL",id:"getlisttablessql",children:[]},{value:"getManagementDbName",id:"getmanagementdbname",children:[]},{value:"getSchemaBeginning",id:"getschemabeginning",children:[]},{value:"getSchemaEnd",id:"getschemaend",children:[]},{value:"getTypeDefinition",id:"gettypedefinition",children:[]},{value:"getTypeFromDefinition",id:"gettypefromdefinition",children:[]},{value:"indexForeignKeys",id:"indexforeignkeys",children:[]},{value:"isImplicitIndex",id:"isimplicitindex",children:[]},{value:"isSame",id:"issame",children:[]},{value:"normalizeDefaultValue",id:"normalizedefaultvalue",children:[]}]},{value:"Object literals",id:"object-literals",children:[{value:"DEFAULT_TYPE_LENGTHS",id:"default_type_lengths",children:[]},{value:"DEFAULT_VALUES",id:"default_values",children:[]},{value:"TYPES",id:"types",children:[]}]}],p={rightToc:i};function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(b.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"any"),Object(r.b)("p",{parentName:"li"},"\u21b3 ",Object(r.b)("strong",{parentName:"p"},"PostgreSqlSchemaHelper")))),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"getcolumns"},"getColumns"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"getColumns"),"(",Object(r.b)("inlineCode",{parentName:"p"},"connection"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/classes/abstractsqlconnection"}),"AbstractSqlConnection"),", ",Object(r.b)("inlineCode",{parentName:"p"},"tableName"),": string, ",Object(r.b)("inlineCode",{parentName:"p"},"schemaName"),": string): Promise","<","any[]>"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7eb8bfd/packages/postgresql/src/PostgreSqlSchemaHelper.ts#L74"}),"packages/postgresql/src/PostgreSqlSchemaHelper.ts:74"))),Object(r.b)("h4",{id:"parameters"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"connection")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/next/api/classes/abstractsqlconnection"}),"AbstractSqlConnection"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"tableName")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"schemaName")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," Promise","<","any[]>"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getdatabaseexistssql"},"getDatabaseExistsSQL"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"getDatabaseExistsSQL"),"(",Object(r.b)("inlineCode",{parentName:"p"},"name"),": string): string"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7eb8bfd/packages/postgresql/src/PostgreSqlSchemaHelper.ts#L158"}),"packages/postgresql/src/PostgreSqlSchemaHelper.ts:158"))),Object(r.b)("h4",{id:"parameters-1"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"name")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," string"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getdatabasenotexistserror"},"getDatabaseNotExistsError"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"getDatabaseNotExistsError"),"(",Object(r.b)("inlineCode",{parentName:"p"},"dbName"),": string): string"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7eb8bfd/packages/postgresql/src/PostgreSqlSchemaHelper.ts#L162"}),"packages/postgresql/src/PostgreSqlSchemaHelper.ts:162"))),Object(r.b)("h4",{id:"parameters-2"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"dbName")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," string"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getenumdefinitions"},"getEnumDefinitions"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"getEnumDefinitions"),"(",Object(r.b)("inlineCode",{parentName:"p"},"connection"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/classes/abstractsqlconnection"}),"AbstractSqlConnection"),", ",Object(r.b)("inlineCode",{parentName:"p"},"tableName"),": string, ",Object(r.b)("inlineCode",{parentName:"p"},"schemaName?"),": string): Promise","<",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api#dictionary"}),"Dictionary"),">"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7eb8bfd/packages/postgresql/src/PostgreSqlSchemaHelper.ts#L118"}),"packages/postgresql/src/PostgreSqlSchemaHelper.ts:118"))),Object(r.b)("h4",{id:"parameters-3"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"connection")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/next/api/classes/abstractsqlconnection"}),"AbstractSqlConnection"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"tableName")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"schemaName?")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api#dictionary"}),"Dictionary"),">"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getforeignkeyssql"},"getForeignKeysSQL"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"getForeignKeysSQL"),"(",Object(r.b)("inlineCode",{parentName:"p"},"tableName"),": string, ",Object(r.b)("inlineCode",{parentName:"p"},"schemaName"),": string): string"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7eb8bfd/packages/postgresql/src/PostgreSqlSchemaHelper.ts#L100"}),"packages/postgresql/src/PostgreSqlSchemaHelper.ts:100"))),Object(r.b)("h4",{id:"parameters-4"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"tableName")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"schemaName")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," string"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getindexes"},"getIndexes"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"getIndexes"),"(",Object(r.b)("inlineCode",{parentName:"p"},"connection"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/classes/abstractsqlconnection"}),"AbstractSqlConnection"),", ",Object(r.b)("inlineCode",{parentName:"p"},"tableName"),": string, ",Object(r.b)("inlineCode",{parentName:"p"},"schemaName"),": string): Promise","<",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api#index"}),"Index"),"[]>"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7eb8bfd/packages/postgresql/src/PostgreSqlSchemaHelper.ts#L88"}),"packages/postgresql/src/PostgreSqlSchemaHelper.ts:88"))),Object(r.b)("h4",{id:"parameters-5"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"connection")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/next/api/classes/abstractsqlconnection"}),"AbstractSqlConnection"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"tableName")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"schemaName")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api#index"}),"Index"),"[]>"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getindexessql"},"getIndexesSQL"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Private"),Object(r.b)("strong",{parentName:"p"},"getIndexesSQL"),"(",Object(r.b)("inlineCode",{parentName:"p"},"tableName"),": string, ",Object(r.b)("inlineCode",{parentName:"p"},"schemaName"),": string): string"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7eb8bfd/packages/postgresql/src/PostgreSqlSchemaHelper.ts#L170"}),"packages/postgresql/src/PostgreSqlSchemaHelper.ts:170"))),Object(r.b)("h4",{id:"parameters-6"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"tableName")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"schemaName")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," string"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getlisttablessql"},"getListTablesSQL"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"getListTablesSQL"),"(): string"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7eb8bfd/packages/postgresql/src/PostgreSqlSchemaHelper.ts#L68"}),"packages/postgresql/src/PostgreSqlSchemaHelper.ts:68"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," string"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getmanagementdbname"},"getManagementDbName"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"getManagementDbName"),"(): string"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7eb8bfd/packages/postgresql/src/PostgreSqlSchemaHelper.ts#L166"}),"packages/postgresql/src/PostgreSqlSchemaHelper.ts:166"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," string"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getschemabeginning"},"getSchemaBeginning"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"getSchemaBeginning"),"(",Object(r.b)("inlineCode",{parentName:"p"},"charset"),": string): string"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7eb8bfd/packages/postgresql/src/PostgreSqlSchemaHelper.ts#L40"}),"packages/postgresql/src/PostgreSqlSchemaHelper.ts:40"))),Object(r.b)("h4",{id:"parameters-7"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"charset")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," string"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getschemaend"},"getSchemaEnd"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"getSchemaEnd"),"(): string"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7eb8bfd/packages/postgresql/src/PostgreSqlSchemaHelper.ts#L44"}),"packages/postgresql/src/PostgreSqlSchemaHelper.ts:44"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," string"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"gettypedefinition"},"getTypeDefinition"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"getTypeDefinition"),"(",Object(r.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/interfaces/entityproperty"}),"EntityProperty"),"): string"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7eb8bfd/packages/postgresql/src/PostgreSqlSchemaHelper.ts#L48"}),"packages/postgresql/src/PostgreSqlSchemaHelper.ts:48"))),Object(r.b)("h4",{id:"parameters-8"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"prop")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/next/api/interfaces/entityproperty"}),"EntityProperty"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," string"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"gettypefromdefinition"},"getTypeFromDefinition"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"getTypeFromDefinition"),"(",Object(r.b)("inlineCode",{parentName:"p"},"type"),": string, ",Object(r.b)("inlineCode",{parentName:"p"},"defaultType"),": string): string"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7eb8bfd/packages/postgresql/src/PostgreSqlSchemaHelper.ts#L52"}),"packages/postgresql/src/PostgreSqlSchemaHelper.ts:52"))),Object(r.b)("h4",{id:"parameters-9"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"type")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"defaultType")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," string"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"indexforeignkeys"},"indexForeignKeys"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"indexForeignKeys"),"(): boolean"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7eb8bfd/packages/postgresql/src/PostgreSqlSchemaHelper.ts#L60"}),"packages/postgresql/src/PostgreSqlSchemaHelper.ts:60"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," boolean"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"isimplicitindex"},"isImplicitIndex"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"isImplicitIndex"),"(",Object(r.b)("inlineCode",{parentName:"p"},"name"),": string): boolean"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7eb8bfd/packages/postgresql/src/PostgreSqlSchemaHelper.ts#L64"}),"packages/postgresql/src/PostgreSqlSchemaHelper.ts:64"))),Object(r.b)("h4",{id:"parameters-10"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"name")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," boolean"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"issame"},"isSame"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"isSame"),"(",Object(r.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/interfaces/entityproperty"}),"EntityProperty"),", ",Object(r.b)("inlineCode",{parentName:"p"},"column"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/interfaces/column"}),"Column"),", ",Object(r.b)("inlineCode",{parentName:"p"},"idx?"),": number): ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/interfaces/issame"}),"IsSame")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7eb8bfd/packages/postgresql/src/PostgreSqlSchemaHelper.ts#L56"}),"packages/postgresql/src/PostgreSqlSchemaHelper.ts:56"))),Object(r.b)("h4",{id:"parameters-11"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"prop")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/next/api/interfaces/entityproperty"}),"EntityProperty"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"column")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/next/api/interfaces/column"}),"Column"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"idx?")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"number")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/next/api/interfaces/issame"}),"IsSame")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"normalizedefaultvalue"},"normalizeDefaultValue"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"normalizeDefaultValue"),"(",Object(r.b)("inlineCode",{parentName:"p"},"defaultValue"),": string, ",Object(r.b)("inlineCode",{parentName:"p"},"length"),": number): any"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7eb8bfd/packages/postgresql/src/PostgreSqlSchemaHelper.ts#L140"}),"packages/postgresql/src/PostgreSqlSchemaHelper.ts:140"))),Object(r.b)("h4",{id:"parameters-12"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"defaultValue")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"length")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"number")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," any"),Object(r.b)("h2",{id:"object-literals"},"Object literals"),Object(r.b)("h3",{id:"default_type_lengths"},"DEFAULT","_","TYPE","_","LENGTHS"),Object(r.b)("p",null,"\u25aa ",Object(r.b)("inlineCode",{parentName:"p"},"Static")," ",Object(r.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(r.b)("strong",{parentName:"p"},"DEFAULT","_","TYPE","_","LENGTHS"),": object"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7eb8bfd/packages/postgresql/src/PostgreSqlSchemaHelper.ts#L25"}),"packages/postgresql/src/PostgreSqlSchemaHelper.ts:25"))),Object(r.b)("h4",{id:"properties"},"Properties:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"date")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"number"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"number"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"255")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"default_values"},"DEFAULT","_","VALUES"),Object(r.b)("p",null,"\u25aa ",Object(r.b)("inlineCode",{parentName:"p"},"Static")," ",Object(r.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(r.b)("strong",{parentName:"p"},"DEFAULT","_","VALUES"),": object"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7eb8bfd/packages/postgresql/src/PostgreSqlSchemaHelper.ts#L30"}),"packages/postgresql/src/PostgreSqlSchemaHelper.ts:30"))),Object(r.b)("h4",{id:"properties-1"},"Properties:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"('now'::text)::timestamp(?) with time zone")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string[]"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"['current","_","timestamp(?)']")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"('now'::text)::timestamp(?) without time zone")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string[]"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"['current","_","timestamp(?)']")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"current_timestamp(?)")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string[]"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"['current","_","timestamp(?)']")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"now()")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string[]"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"['now()', 'current","_","timestamp']")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"null::character varying")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string[]"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"['null']")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"null::timestamp with time zone")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string[]"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"['null']")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"null::timestamp without time zone")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string[]"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"['null']")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"types"},"TYPES"),Object(r.b)("p",null,"\u25aa ",Object(r.b)("inlineCode",{parentName:"p"},"Static")," ",Object(r.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(r.b)("strong",{parentName:"p"},"TYPES"),": object"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/7eb8bfd/packages/postgresql/src/PostgreSqlSchemaHelper.ts#L6"}),"packages/postgresql/src/PostgreSqlSchemaHelper.ts:6"))),Object(r.b)("h4",{id:"properties-2"},"Properties:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Buffer")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string[]"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"['bytea']")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Date")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string[]"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"['timestamptz(?)', 'timestamp(?)', 'datetime(?)', 'timestamp with time zone', 'timestamp without time zone', 'datetimetz', 'time', 'date', 'timetz', 'datetz']")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"boolean")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string[]"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"['bool', 'boolean']")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"buffer")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string[]"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"['bytea']")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"date")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string[]"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"['timestamptz(?)', 'timestamp(?)', 'datetime(?)', 'timestamp with time zone', 'timestamp without time zone', 'datetimetz', 'time', 'date', 'timetz', 'datetz']")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"double")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string[]"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"['double precision', 'float8']")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"enum")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string[]"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"['text']")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"float")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string[]"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"['float']")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"json")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string[]"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"['jsonb', 'json']")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string[]"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"['int4', 'integer', 'int2', 'int', 'float', 'float8', 'double', 'double precision', 'bigint', 'smallint', 'decimal', 'numeric', 'real']")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"object")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string[]"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"['jsonb', 'json']")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"smallint")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string[]"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"['int2']")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string[]"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"['varchar(?)', 'character varying', 'text', 'character', 'char', 'uuid', 'bigint', 'int8', 'enum']")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"text")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string[]"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"['text']")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"tinyint")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string[]"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"['int2']")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"uuid")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string[]"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"['uuid']")))))}m.isMDXComponent=!0},806:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return o}));var b=a(0),n=a.n(b);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,b)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,b,n=function(e,t){if(null==e)return{};var a,b,n={},r=Object.keys(e);for(b=0;b<r.length;b++)a=r[b],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(b=0;b<r.length;b++)a=r[b],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),m=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},j=function(e){var t=m(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var a=e.components,b=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),j=m(a),s=b,o=j["".concat(l,".").concat(s)]||j[s]||O[s]||r;return a?n.a.createElement(o,c(c({ref:t},p),{},{components:a})):n.a.createElement(o,c({ref:t},p))}));function o(e,t){var a=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var r=a.length,l=new Array(r);l[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:b,l[1]=c;for(var p=2;p<r;p++)l[p]=a[p];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);