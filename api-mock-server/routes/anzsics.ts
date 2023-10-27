import { FastifyPluginAsyncTypebox, Type } from '@fastify/type-provider-typebox'
import { Value } from '@sinclair/typebox/value'

import { anzsics } from '../data'
import { anzsicSchema, anzsicSchemaRef } from '../schemas'

export default (async function(fastify, _opts) {

  /* fastify.post('/companies', {
    schema: { 
      operationId: 'companyCreate',
      params: Type.Object({
        companyId: Type.Integer()
      }),
      body: companyCreateRef
    }
  }, async (req)=> {
    return Value.Create(company)
  }) */
  
  fastify.get('/anzsics', {
    schema: { 
      operationId: 'anzsicsSearch',
      response: {
        200: Type.Array(anzsicSchemaRef)
      }
    }
  }, async (req)=> {
    return anzsics
  })
  
  fastify.get('/anzsics/:anzsicCode', {
    schema: { 
      operationId: 'anzsicsFind',
      params: Type.Object({
        anzsicCode: Type.String()
      }),
      response: {
        200: anzsicSchemaRef
      }
    }
  }, async ({ params: { anzsicCode } })=> {
    return anzsics.find(a => a.id == anzsicCode)
  })

  /* fastify.put('/companies/:companyId', {
    schema: { 
      operationId: 'companyUpdate',
      params: Type.Object({
        companyId: Type.Integer()
      }),
      body: companyUpdateRef
    }
  }, async (req)=> {
    return {}
  }) */

  /* fastify.delete('/companies/:companyId', {
    schema: { 
      operationId: 'companyDelete',
      params: Type.Object({
        companyId: Type.Integer()
      })
    }
  }, async (req)=> {
    return {}
  }) */

}) satisfies FastifyPluginAsyncTypebox