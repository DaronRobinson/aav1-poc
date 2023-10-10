import { DateOptions, Type } from '@sinclair/typebox'

export const ApiDate = (options?: DateOptions)=> {
  let apiDate = Type.Date(options);
  (apiDate as any).type = 'string'

  return apiDate
}