import { FastifyPluginAsyncTypebox, Type } from '@fastify/type-provider-typebox'
import { Value } from '@sinclair/typebox/value'

import { organisations } from '../data'
import { organisationSchema, organisationSchemaRef } from '../schemas'

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
  
  fastify.get('/organisations', {
    schema: { 
      operationId: 'organisationsSearch',
      response: {
        200: Type.Array(organisationSchemaRef)
      }
    }
  }, async (req)=> {
    return organisations
  })
  
  fastify.get('/organisations/:organisationId', {
    schema: { 
      operationId: 'organisationsFind',
      params: Type.Object({
        organisationId: Type.String()
      }),
      response: {
        200: organisationSchemaRef
      }
    }
  }, async ({ params: { organisationId } })=> {
    return organisations.find(a => a.id == organisationId)
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