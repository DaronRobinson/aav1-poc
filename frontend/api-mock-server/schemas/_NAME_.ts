import { Static, Type } from '@sinclair/typebox'

import { ApiDate, defineSchema, Nullable } from './typebox'

export type _NAME_ = Static<typeof _NAME_Schema>
export const [_NAME_Schema, _NAME_SchemaRef] = defineSchema('_NAME_', Type.Object({
  id:        Type.Integer(),
  createdAt: ApiDate(),
  updatedAt: ApiDate(),
  deletedAt: Nullable(ApiDate())
}))