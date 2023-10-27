import { Static, Type } from '@sinclair/typebox'

import { ApiDate, defineSchema, Nullable } from './typebox'

export type BusinessUnit = Static<typeof businessUnitSchema>
export const [businessUnitSchema, businessUnitSchemaRef] = defineSchema('BusinessUnit', Type.Object({
  id: Type.String(),
  organisationId: Type.String(),
  addressId: Type.String(),
  name: Type.String(),
  type: Type.String(),
  country: Type.String(),
  isHeadOffice: Type.Boolean(),
  createdAt: ApiDate(),
  updatedAt: ApiDate(),
  deletedAt: Nullable(ApiDate())
}))
