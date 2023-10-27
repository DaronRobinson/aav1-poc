import { Static, Type } from '@sinclair/typebox'

import { ApiDate, defineSchema, Nullable } from './typebox'

export type Agent = Static<typeof agentSchema>
export const [agentSchema, agentSchemaRef] = defineSchema(
  'Agent',
  Type.Object({
    id: Type.Integer(),
    companyId: Type.Integer(),
    name: Type.String(),
    mproNo: Type.String(),
    userType: Type.Literal('agent'),
    email: Type.String(),
    emailOtherCsv: Nullable(Type.String()),
    phone: Type.String(),
    mobile: Type.String(),
    addressLine1: Type.String(),
    addressLine2: Type.String(),
    addressLine3: Nullable(Type.String()),
    addressLine4: Nullable(Type.String()),
    city: Type.String(),
    assurances: Type.String(),
    postcode: Type.String(),
    emailPending: Nullable(Type.String()),
    phonePending: Nullable(Type.String()),
    mobilePending: Nullable(Type.String()),
    addressLine1Pending: Nullable(Type.String()),
    addressLine2Pending: Nullable(Type.String()),
    addressLine3Pending: Nullable(Type.String()),
    addressLine4Pending: Nullable(Type.String()),
    cityPending: Nullable(Type.String()),
    postcodePending: Nullable(Type.String()),
    county: Type.String(),
    countyPending: Nullable(Type.String()),
    createdAt: ApiDate(),
    updatedAt: ApiDate(),
    deletedAt: Nullable(ApiDate())
  })
)

export const [agentPatchSchema, agentPatchSchemaRef] = defineSchema(
  'AgentPatch',
  Type.Object({
    email: Type.Optional(Type.String()),
    emailOtherCsv: Type.Optional(Type.String()),
    phone: Type.Optional(Type.String()),
    mobile: Type.Optional(Type.String()),
    addressLine1: Type.Optional(Type.String()),
    addressLine2: Type.Optional(Type.String()),
    addressLine3: Type.Optional(Type.String()),
    addressLine4: Type.Optional(Type.String()),
    city: Type.Optional(Type.String()),
    county: Type.Optional(Type.String()),
    postcode: Type.Optional(Type.String()),
    oldPassword: Type.Optional(Type.String()),
    newPassword: Type.Optional(Type.String())
  }),
  {
    xTable: false
  }
)
