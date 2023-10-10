import { Static, Type } from '@sinclair/typebox'

import { ApiDate, defineSchema, Nullable } from './typebox'

export type Event = Static<typeof eventSchema>
export const [eventSchema, eventSchemaRef] = defineSchema('Event', Type.Object({
  id:          Type.Integer(),
  userId:      Nullable(Type.Integer()),
  companyId:   Nullable(Type.Integer()),
  agentId:     Nullable(Type.Integer()),
  preferredPlantId:     Nullable(Type.Integer()),
  message:     Type.String(),
  severity:    Type.Union([Type.Literal('success'), Type.Literal('info'), Type.Literal('warning'), Type.Literal('error')]),
  dismissible: Type.Boolean(),
  dismissed:   Type.Boolean(),
  postDate:    Nullable(ApiDate()),
  expiryDate:  Nullable(ApiDate()),
  createdAt:   ApiDate(),
  updatedAt:   ApiDate(),
  deletedAt:   Nullable(ApiDate()),
}))

export const [eventCreateSchema, eventCreateSchemaRef] = defineSchema('EventCreate', Type.Object({
}), { 
  xTable: false 
})

export const [eventDismissSchema, eventDismissSchemaRef] = defineSchema('EventDismiss', Type.Object({
}), { 
  xTable: false 
})

export const [eventSeenSchema, eventSeenSchemaRef] = defineSchema('EventSeen', Type.Object({
}), { 
  xTable: false 
})
