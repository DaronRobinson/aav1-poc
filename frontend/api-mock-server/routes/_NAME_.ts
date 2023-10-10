import { FastifyPluginAsyncTypebox, Type } from '@fastify/type-provider-typebox'
import { Value } from '@sinclair/typebox/value'

export default (async function(fastify, _opts) {

  /* fastify.post(
    '/_NAME_s', 
    {
      schema: { 
        operationId: '_NAME_Create',
        params: Type.Object({
          _NAME_Id: Type.Integer()
        }),
        body: _NAME_CreateSchemaRef
      }
    }, 
    async (req)=> {
      return Value.Create(_NAME_Schema)
    }
  ) */
  
  /* fastify.get(
    '/_NAME_s', 
    {
      schema: { 
        operationId: '_NAME_sSearch',
        response: {
          200: Type.Array(_NAME_SchemaRef)
        }
      }
    }, 
    async (req)=> {
      return [Value.Create(_NAME_Schema)]
    }
  ) */
  
  /* fastify.get(
    '/_NAME_s/:_NAME_Id', 
    {
      schema: { 
        operationId: '_NAME_Find',
        params: Type.Object({
          _NAME_Id: Type.Integer()
        }),
        response: {
          200: _NAME_SchemaRef
        }
      }
    }, 
    async (req)=> {
      return Value.Create(_NAME_Schema)
    }
  ) */

  /* fastify.put(
    '/_NAME_s/:_NAME_Id', {
      schema: { 
        operationId: '_NAME_Update',
        params: Type.Object({
          _NAME_Id: Type.Integer()
        }),
        body: _NAME_UpdateSchemaRef
      }
    },
     async (req)=> {
      return {}
    }
  ) */

  /* fastify.delete(
    '/_NAME_s/:_NAME_Id', 
    {
      schema: { 
        operationId: '_NAME_Delete',
        params: Type.Object({
          _NAME_Id: Type.Integer()
        })
      }
    }, 
    async (req)=> {
      return {}
    }
  ) */

}) satisfies FastifyPluginAsyncTypebox