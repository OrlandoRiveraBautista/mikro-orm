(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{277:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return m}));var r=n(1),a=n(9),i=(n(0),n(290)),o={title:"Creating Custom Driver"},s=[{value:"Platform",id:"platform",children:[]},{value:"SchemaHelper",id:"schemahelper",children:[]},{value:"Connection",id:"connection",children:[]},{value:"Driver",id:"driver",children:[]}],l={rightToc:s},c="wrapper";function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(c,Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"If you want to use database that is not currently supported, you can implement your own driver.\nTo do so, you will need to design 4 classes:"),Object(i.b)("h2",{id:"platform"},"Platform"),Object(i.b)("p",null,"Platform is a class that provides information about available features of given driver: "),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Platform } from 'mikro-orm';\n\nexport class MyCustomPlatform extends Platform {\n  \n  protected abstract schemaHelper: MyCustomSchemaHelper;\n\n  // here you can override default settings\n  usesPivotTable(): boolean;\n  supportsTransactions(): boolean;\n  supportsSavePoints(): boolean;\n  getNamingStrategy(): { new (): NamingStrategy; };\n  getIdentifierQuoteCharacter(): string;\n  getParameterPlaceholder(index?: number): string;\n  usesReturningStatement(): boolean;\n  normalizePrimaryKey<T = number | string>(data: IPrimaryKey): T;\n  denormalizePrimaryKey(data: IPrimaryKey): IPrimaryKey;\n  getSerializedPrimaryKeyField(field: string): string;\n\n}\n")),Object(i.b)("h2",{id:"schemahelper"},"SchemaHelper"),Object(i.b)("p",null,"Part of platform is a ",Object(i.b)("inlineCode",{parentName:"p"},"SchemaHelper"),", that provides information about how to build schema."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { SchemaHelper } from 'mikro-orm';\n\nexport class MyCustomSchemaHelper extends SchemaHelper {\n  \n  // here you can override default settings\n  getIdentifierQuoteCharacter(): string;\n  getSchemaBeginning(): string;\n  getSchemaEnd(): string;\n  getSchemaTableEnd(): string;\n  getAutoIncrementStatement(meta: EntityMetadata): string;\n  getPrimaryKeySubtype(meta: EntityMetadata): string;\n  getTypeDefinition(prop: EntityProperty, types?: Record<string, string>, lengths?: Record<string, number>): string;\n  getUnsignedSuffix(prop: EntityProperty): string;\n  supportsSchemaConstraints(): boolean;\n  supportsSchemaMultiAlter(): boolean;\n  supportsSequences(): boolean;\n  quoteIdentifier(field: string): string;\n  dropTable(meta: EntityMetadata): string;\n  indexForeignKeys(): boolean;\n\n}\n")),Object(i.b)("h2",{id:"connection"},"Connection"),Object(i.b)("p",null,"Next part is connection wrapper, that will be responsible for querying the database:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Connection } from 'mikro-orm';\n\nexport class MyCustomConnection extends Connection {\n  \n  // implement abstract methods\n  connect(): Promise<void>;\n  isConnected(): Promise<boolean>;\n  close(force?: boolean): Promise<void>;\n  getDefaultClientUrl(): string;\n  execute(query: string, params?: any[], method?: 'all' | 'get' | 'run'): Promise<QueryResult | any | any[]>;\n\n}\n")),Object(i.b)("h2",{id:"driver"},"Driver"),Object(i.b)("p",null,"Last part is driver, that is responsible for using the connection to persist changes to\ndatabase. If you are building SQL driver, it might be handy to extend ",Object(i.b)("inlineCode",{parentName:"p"},"AbstractSqlDriver"),",\nif not, extend ",Object(i.b)("inlineCode",{parentName:"p"},"DatabaseDriver")," abstract class. "),Object(i.b)("p",null,"If you want to have absolute control, you can implement the whole driver yourself via\n",Object(i.b)("inlineCode",{parentName:"p"},"IDatabaseDriver")," interface. "),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { DatabaseDriver } from 'mikro-orm';\n\nexport class MyCustomSchemaHelper extends DatabaseDriver {\n\n  // initialize connection and platform\n  protected readonly connection = new MyCustomConnection(this.config);\n  protected readonly platform = new MyCustomPlatform;\n\n  // and implement abstract methods\n  find<T extends IEntity>(entityName: string, where: FilterQuery<T>, populate?: string[], orderBy?: Record<string, QueryOrder>, limit?: number, offset?: number): Promise<T[]>;\n  findOne<T extends IEntity>(entityName: string, where: FilterQuery<T> | string, populate: string[]): Promise<T | null>;\n  nativeInsert<T extends IEntityType<T>>(entityName: string, data: EntityData<T>): Promise<QueryResult>;\n  nativeUpdate<T extends IEntity>(entityName: string, where: FilterQuery<IEntity> | IPrimaryKey, data: EntityData<T>): Promise<QueryResult>;\n  nativeDelete<T extends IEntity>(entityName: string, where: FilterQuery<IEntity> | IPrimaryKey): Promise<QueryResult>;\n  count<T extends IEntity>(entityName: string, where: FilterQuery<T>): Promise<number>;\n\n}\n")))}m.isMDXComponent=!0},290:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return p}));var r=n(0),a=n.n(r),i=a.a.createContext({}),o=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},s=function(e){var t=o(e.components);return a.a.createElement(i.Provider,{value:t},e.children)};var l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),m=o(n),p=r,u=m[s+"."+p]||m[p]||c[p]||i;return n?a.a.createElement(u,Object.assign({},{ref:t},l,{components:n})):a.a.createElement(u,Object.assign({},{ref:t},l))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);