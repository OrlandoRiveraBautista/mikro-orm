(window.webpackJsonp=window.webpackJsonp||[]).push([[386],{444:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(6),i=(n(0),n(803)),o={title:"Unit of Work and transactions",sidebar_label:"Unit of Work"},s={unversionedId:"unit-of-work",id:"version-2.7/unit-of-work",isDocsHomePage:!1,title:"Unit of Work and transactions",description:"MikroORM uses the Identity Map pattern to track objects. Whenever you fetch an object from",source:"@site/versioned_docs/version-2.7/unit-of-work.md",slug:"/unit-of-work",permalink:"/docs/2.7/unit-of-work",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-2.7/unit-of-work.md",version:"2.7",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1603613359,sidebar_label:"Unit of Work",sidebar:"version-2.7/docs",previous:{title:"Collections",permalink:"/docs/2.7/collections"},next:{title:"Transactions and concurrency",permalink:"/docs/2.7/transactions"}},c=[{value:"Persisting managed entities",id:"persisting-managed-entities",children:[]},{value:"How MikroORM detects changes",id:"how-mikroorm-detects-changes",children:[]},{value:"Implicit Transactions",id:"implicit-transactions",children:[{value:"Beware: Auto-flushing and transactions",id:"beware-auto-flushing-and-transactions",children:[]}]}],l={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"MikroORM uses the Identity Map pattern to track objects. Whenever you fetch an object from\nthe database, MikroORM will keep a reference to this object inside its ",Object(i.b)("inlineCode",{parentName:"p"},"UnitOfWork"),". "),Object(i.b)("p",null,"This allows MikroORM room for optimizations. If you call the EntityManager and ask for an\nentity with a specific ID twice, it will return the same instance:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const authorRepository = orm.em.getRepository(Author);\nconst jon1 = await authorRepository.findOne(1);\nconst jon2 = await authorRepository.findOne(1);\n\n// identity map in action\nconsole.log(jon1 === jon2); // true\n")),Object(i.b)("p",null,"Only one SELECT query will be fired against the database here. In the second ",Object(i.b)("inlineCode",{parentName:"p"},"findOne()"),"\ncall MikroORM will check the identity map first and will skip the database round trip as\nit will find the entity already loaded."),Object(i.b)("p",null,"The identity map being indexed by primary keys only allows shortcuts when you ask for objects\nby primary key. When you query by other properties, you will still get the same reference,\nbut two separate database calls will be made:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const authorRepository = orm.em.getRepository(Author);\nconst jon1 = await authorRepository.findOne({ name: 'Jon Snow' });\nconst jon2 = await authorRepository.findOne({ name: 'Jon Snow' });\n\n// identity map in action\nconsole.log(jon1 === jon2); // true\n")),Object(i.b)("p",null,"MikroORM only knows objects by id, so a query for different criteria has to go to the database,\neven if it was executed just before. But instead of creating a second ",Object(i.b)("inlineCode",{parentName:"p"},"Author")," object MikroORM\nfirst gets the primary key from the row and checks if it already has an object inside the\n",Object(i.b)("inlineCode",{parentName:"p"},"UnitOfWork")," with that primary key. "),Object(i.b)("h2",{id:"persisting-managed-entities"},"Persisting managed entities"),Object(i.b)("p",null,"The identity map has a second use-case. When you call ",Object(i.b)("inlineCode",{parentName:"p"},"EntityManager#flush()"),", MikroORM will\nask the identity map for all objects that are currently managed. This means you don't have to\ncall ",Object(i.b)("inlineCode",{parentName:"p"},"EntityManager#persistLater()")," over and over again to pass known objects to the\n",Object(i.b)("inlineCode",{parentName:"p"},"EntityManager"),". This is a NO-OP for known entities, but leads to much code written that is\nconfusing to other developers."),Object(i.b)("p",null,"The following code WILL update your database with the changes made to the ",Object(i.b)("inlineCode",{parentName:"p"},"Author")," object,\neven if you did not call ",Object(i.b)("inlineCode",{parentName:"p"},"EntityManager#persistLater()"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const authorRepository = orm.em.getRepository(Author);\nconst jon = await authorRepository.findOne(1);\njon.email = 'foo@bar.com';\nawait authorRepository.flush(); // calling orm.em.flush() has same effect\n")),Object(i.b)("h2",{id:"how-mikroorm-detects-changes"},"How MikroORM detects changes"),Object(i.b)("p",null,'MikroORM is a data-mapper that tries to achieve persistence-ignorance (PI). This means you\nmap JS objects into a relational database that do not necessarily know about the database at\nall. A natural question would now be, "how does MikroORM even detect objects have changed?".'),Object(i.b)("p",null,"For this MikroORM keeps a second map inside the ",Object(i.b)("inlineCode",{parentName:"p"},"UnitOfWork"),". Whenever you fetch an object\nfrom the database MikroORM will keep a copy of all the properties and associations inside\nthe ",Object(i.b)("inlineCode",{parentName:"p"},"UnitOfWork"),". "),Object(i.b)("p",null,"Now whenever you call ",Object(i.b)("inlineCode",{parentName:"p"},"EntityManager#flush()")," MikroORM will iterate over all entities you\npreviously marked for persisting via ",Object(i.b)("inlineCode",{parentName:"p"},"EntityManager#persistLater()"),". For each object it will\ncompare the original property and association values with the values that are currently set\non the object. If changes are detected then the object is queued for a UPDATE operation.\nOnly the fields that actually changed are updated."),Object(i.b)("h2",{id:"implicit-transactions"},"Implicit Transactions"),Object(i.b)("p",null,"First and most important implication of having Unit of Work is that it allows handling\ntransactions automatically. "),Object(i.b)("p",null,"When you call ",Object(i.b)("inlineCode",{parentName:"p"},"EntityManager#flush()"),", all computed changes are queried inside a database\ntransaction (if supported by given driver). This means that you can control the boundaries\nof transactions simply by calling ",Object(i.b)("inlineCode",{parentName:"p"},"EntityManager#persistLater()")," and once all your changes\nare ready, simply calling ",Object(i.b)("inlineCode",{parentName:"p"},"flush()")," will run them inside a transaction. "),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You can also control the transaction boundaries manually via ",Object(i.b)("inlineCode",{parentName:"p"},"em.transactional(cb)"),".")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const user = await em.findOne(User, 1);\nuser.email = 'foo@bar.com';\nconst car = new Car();\nuser.cars.add(car);\n\n// thanks to bi-directional cascading we only need to persist user entity\n// flushing will create a transaction, insert new car and update user with new email\nawait em.persistAndFlush(user);\n")),Object(i.b)("p",null,"You can find more information about transactions in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/2.7/transactions"}),"Transactions and concurrency"),"\npage."),Object(i.b)("h3",{id:"beware-auto-flushing-and-transactions"},"Beware: Auto-flushing and transactions"),Object(i.b)("p",null,"Originally there was only ",Object(i.b)("inlineCode",{parentName:"p"},"EntityManager#persist(entity, flush = true)")," method, that was\nautomatically flushing changes to database, if not given second ",Object(i.b)("inlineCode",{parentName:"p"},"false")," parameter. This\nbehaviour can be now changed via ",Object(i.b)("inlineCode",{parentName:"p"},"autoFlush")," option when initializing the ORM:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const orm = await MikroORM.init({\n  autoFlush: false,\n  // ...\n});\nawait orm.em.persist(new Entity()); // no auto-flushing now\nawait orm.em.flush();\nawait orm.em.persist(new Entity(), true); // you can still use second parameter to auto-flush\n")),Object(i.b)("p",null,"When using driver that supports transactions (all SQL drivers), you should either disable\nauto-flushing, or use ",Object(i.b)("inlineCode",{parentName:"p"},"persistLater()")," method instead, as otherwise each ",Object(i.b)("inlineCode",{parentName:"p"},"persist()")," call\nwill immediately create new transaction to run the query."),Object(i.b)("p",null,"This behaviour will be changed in v3, ",Object(i.b)("inlineCode",{parentName:"p"},"autoFlush")," will stay configurable but the default\nvalue will be ",Object(i.b)("inlineCode",{parentName:"p"},"false"),". Users are encouraged to use ",Object(i.b)("inlineCode",{parentName:"p"},"persistAndFlush()")," instead if they need\nthe immediate persist. "),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"This part of documentation is highly inspired by ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.doctrine-project.org/projects/doctrine-orm/en/2.6/reference/unitofwork.html"}),"doctrine internals docs"),"\nas the behaviour here is pretty much the same.")))}p.isMDXComponent=!0},803:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,h=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return n?r.a.createElement(h,s(s({ref:t},l),{},{components:n})):r.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);