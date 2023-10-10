import { Static, Type } from '@sinclair/typebox'

import { ApiDate, defineSchema, Nullable } from './typebox'

export type Anzsic = Static<typeof anzsicSchema>
export const [anzsicSchema, anzsicSchemaRef] = defineSchema('Anzsic', Type.Object({
  id: Type.String(),
  divisionCode: Type.String(),
  division: Type.String(),
  subdivision: Type.String(),
  group: Type.String(),
  class: Type.String(),
  label: Type.String(),
  risk: Type.String(),
  emissionData: Type.String(),
}))
