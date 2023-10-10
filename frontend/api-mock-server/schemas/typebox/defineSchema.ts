import { TSchema, Type } from '@sinclair/typebox'

type Options = {
  xTable?: boolean
}

export function defineSchema<T extends TSchema>(id: string, schema: T, options?: Options) {
  schema.$id = id

  if (options) {
    if (options.xTable !== undefined) {
      (schema as any)['x-table'] = options.xTable
    }
  }
  
  return [
    schema, 
    Type.Intersect([Type.Ref(schema), Type.Object({})]) // Intersect to force rtk-query/codegen-openapi to force 'body' name for body
  ] as const
}