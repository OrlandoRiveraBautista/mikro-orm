---
id: "knex.knex.wherewrapped"
title: "Interface: WhereWrapped<TRecord, TResult>"
sidebar_label: "WhereWrapped"
hide_title: true
---

# Interface: WhereWrapped<TRecord, TResult\>

[knex](../modules/knex.md).[Knex](../modules/knex.knex-1.md).WhereWrapped

## Type parameters

Name | Default |
------ | ------ |
`TRecord` | *any* |
`TResult` | *unknown*[] |

## Hierarchy

* **WhereWrapped**

  ↳ [*Where*](knex.knex.where.md)

  ↳ [*Having*](knex.knex.having.md)

## Callable

▸ **WhereWrapped**(`callback`: [*QueryCallback*](../modules/knex.knex-1.md#querycallback)<TRecord, TResult\>): [*QueryBuilder*](../classes/knex.knex.querybuilder.md)<TRecord, TResult\>

#### Parameters:

Name | Type |
------ | ------ |
`callback` | [*QueryCallback*](../modules/knex.knex-1.md#querycallback)<TRecord, TResult\> |

**Returns:** [*QueryBuilder*](../classes/knex.knex.querybuilder.md)<TRecord, TResult\>

Defined in: node_modules/knex/types/index.d.ts:1261
