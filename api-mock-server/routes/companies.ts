import { FastifyPluginAsyncTypebox, Type } from '@fastify/type-provider-typebox'
import { Value } from '@sinclair/typebox/value'

//import { companies } from '../data'
//import { companySchema, companySchemaRef } from '../schemas'

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
  
  // fastify.get('/companies', {
  //   schema: { 
  //     operationId: 'companiesSearch',
  //     response: {
  //       200: Type.Array(companySchemaRef)
  //     }
  //   }
  // }, async (req)=> {
  //   return companies
  // })
  
  // fastify.get('/companies/:companyId', {
  //   schema: { 
  //     operationId: 'companyFind',
  //     params: Type.Object({
  //       companyId: Type.Integer()
  //     }),
  //     response: {
  //       200: companySchemaRef
  //     }
  //   }
  // }, async ({ params: { companyId } })=> {
  //   return companies.find(a => a.id == companyId)
  // })

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