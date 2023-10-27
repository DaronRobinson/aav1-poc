import { Static, Type } from '@sinclair/typebox'

import { ApiDate, defineSchema, Nullable } from './typebox'

export type Company = Static<typeof companySchema>
export const [companySchema, companySchemaRef] = defineSchema('Company', Type.Object({
  id:        Type.Integer(),
  name:      Type.String(),
  createdAt: ApiDate(),
  updatedAt: ApiDate(),
  deletedAt: Nullable(ApiDate())
}))