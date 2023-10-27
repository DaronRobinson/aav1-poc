import { Static, TSchema, Type } from '@sinclair/typebox'

export function Nullable<T extends TSchema>(schema: T) {
  //schema.default = null

  return Type.Unsafe<Static<T> | null>({ ...schema, nullable: true, default: null })
  //return Type.Union([schema, Type.Null({ default: null })])
}