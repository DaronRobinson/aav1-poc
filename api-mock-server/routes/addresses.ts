import { FastifyPluginAsyncTypebox, Type } from '@fastify/type-provider-typebox'
import { Value } from '@sinclair/typebox/value'

import { addresses } from '../data'
import { addressSchema, addressSchemaRef } from '../schemas'

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
  
  fastify.get('/addresses', {
    schema: { 
      operationId: 'addressesSearch',
      response: {
        200: Type.Array(addressSchemaRef)
      }
    }
  }, async (req)=> {
    return addresses
  })
  
  fastify.get('/addresses/:addressId', {
    schema: { 
      operationId: 'addressessFind',
      params: Type.Object({
        addressId: Type.String()
      }),
      response: {
        200: addressSchemaRef
      }
    }
  }, async ({ params: { addressId } })=> {
    return addresses.find(a => a.id == addressId)
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