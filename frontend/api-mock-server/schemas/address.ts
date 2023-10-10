import { Static, Type } from '@sinclair/typebox'

import { ApiDate, defineSchema, Nullable } from './typebox'

export type Address = Static<typeof addressSchema>
export const [addressSchema, addressSchemaRef] = defineSchema('Address', Type.Object({
  id: Type.String(),
  businessUnitId: Type.String(),//needed?
  isPrimaryAddress: Type.Boolean(),
  streetAddress: Type.String(),
  suburb: Type.String(),
  city: Type.String(),
  stateOrProvince: Type.String(),
  postCode: Type.String(),
  country: Type.String(),
  createdAt: ApiDate(),
  updatedAt: ApiDate(),
  deletedAt: Nullable(ApiDate())
}))
