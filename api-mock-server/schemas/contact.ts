import { Static, Type } from '@sinclair/typebox'

import { ApiDate, defineSchema, Nullable } from './typebox'

export type Contact = Static<typeof contactSchema>
export const [contactSchema, contactSchemaRef] = defineSchema('Contact', Type.Object({
  id: Type.String(),
  organisationId: Type.String(),
  firstName: Type.String(),
  lastName: Type.String(),
  email: Type.String(),
  phone: Type.String(),
  role: Type.String(),
  createdAt: ApiDate(),
  updatedAt: ApiDate(),
  deletedAt: Nullable(ApiDate())
}))
