import { FastifyPluginAsyncTypebox, Type } from '@fastify/type-provider-typebox'
import { Value } from '@sinclair/typebox/value'

import { users } from '../data'
import { userSchema, userSchemaRef } from '../schemas'

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
  
  fastify.get('/users', {
    schema: { 
      operationId: 'usersSearch',
      response: {
        200: Type.Array(userSchemaRef)
      }
    }
  }, async (req)=> {
    return users
  })
  
  fastify.get('/users/:userId', {
    schema: { 
      operationId: 'usersFind',
      params: Type.Object({
        userId: Type.String()
      }),
      response: {
        200: userSchemaRef
      }
    }
  }, async ({ params: { userId } })=> {
    return users.find(a => a.id == userId)
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