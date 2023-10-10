import { FastifyPluginAsyncTypebox, Type } from '@fastify/type-provider-typebox'
import { Value } from '@sinclair/typebox/value'

import { contacts } from '../data'
import { contactSchema, contactSchemaRef } from '../schemas'

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
  
  fastify.get('/contacts', {
    schema: { 
      operationId: 'contactsSearch',
      response: {
        200: Type.Array(contactSchemaRef)
      }
    }
  }, async (req)=> {
    return contacts
  })
  
  fastify.get('/contacts/:contactId', {
    schema: { 
      operationId: 'contactsFind',
      params: Type.Object({
        contactId: Type.String()
      }),
      response: {
        200: contactSchemaRef
      }
    }
  }, async ({ params: { contactId } })=> {
    return contacts.find(a => a.id == contactId)
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