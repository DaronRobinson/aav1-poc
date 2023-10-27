import { FastifyPluginAsyncTypebox, Type } from '@fastify/type-provider-typebox'
import { Value } from '@sinclair/typebox/value'

import { businessUnits } from '../data'
import { businessUnitSchema, businessUnitSchemaRef } from '../schemas'

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
  
  fastify.get('/businessUnits', {
    schema: { 
      operationId: 'businessUnitSearch',
      response: {
        200: Type.Array(businessUnitSchemaRef)
      }
    }
  }, async (req)=> {
    return businessUnits
  })
  
  fastify.get('/businessUnits/:businessUnitId', {
    schema: { 
      operationId: 'businessUnitFind',
      params: Type.Object({
        businessUnitId: Type.String()
      }),
      response: {
        200: businessUnitSchemaRef
      }
    }
  }, async ({ params: { businessUnitId } })=> {
    return businessUnits.find(a => a.id == businessUnitId)
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