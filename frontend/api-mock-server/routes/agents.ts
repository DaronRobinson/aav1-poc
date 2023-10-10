import { FastifyPluginAsyncTypebox, Type } from '@fastify/type-provider-typebox'

//import { agents, companies } from '../data'
//import { agentPatchSchemaRef, agentSchemaRef } from '../schemas'
import { addPendingToKeys } from '../utils'

export default (async function(fastify, _opts) {

  /* fastify.post('/agents', {
    schema: { 
      operationId: 'agentCreate',
      params: Type.Object({
        agentId: Type.Integer()
      }),
      body: agentCreateRef
    }
  }, async (req)=> {
    return Value.Create(agent)
  }) */
  
  // fastify.get('/companies/:companyId/agents', {
  //   schema: { 
  //     operationId: 'agentsSearchByCompany',
  //     params: Type.Object({
  //       companyId: Type.Integer()
  //     }),
  //     response: {
  //       200: Type.Array(agentSchemaRef)
  //     }
  //   }
  // }, async ({ params: { companyId } }, reply)=> {
  //   if (!companies.some(a => a.id == companyId))
  //     return reply.callNotFound()

  //   const agent = agents.filter(a => a.companyId == companyId)

  //   if (!agent)
  //     return reply.callNotFound()

  //   return agent
  // })
  
  // fastify.get('/agents/:agentId', {
  //   schema: { 
  //     operationId: 'agentFind',
  //     params: Type.Object({
  //       agentId: Type.Integer()
  //     }),
  //     response: {
  //       200: agentSchemaRef
  //     }
  //   }
  // }, async ({ params: { agentId } }, reply)=> {
  //   const agent = agents.find(a => a.id == agentId)

  //   if (!agent)
  //     return reply.callNotFound()
    
  //   return agent
  // })

  // fastify.patch('/agents/:agentId', {
  //   schema: { 
  //     operationId: 'agentPatch',
  //     params: Type.Object({
  //       agentId: Type.Integer()
  //     }),
  //     body: agentPatchSchemaRef,
  //     response: {
  //       200: agentSchemaRef
  //     }
  //   }
  // }, async (request, reply) => {
  //   const { agentId } = request.params;
  //   const agent = agents.find(a => a.id === agentId)

  //   if (!agent)
  //     return reply.callNotFound()

  //     delete request.body.newPassword
  //     delete request.body.oldPassword
      
  //     Object.assign(agent, addPendingToKeys(request.body));

  //     return agent;
  // })
  /* fastify.put('/agents/:agentId', {
    schema: { 
      operationId: 'agentUpdate',
      params: Type.Object({
        agentId: Type.Integer()
      }),
      body: agentUpdateRef
    }
  }, async (req)=> {
    return {}
  }) */

  /* fastify.delete('/agents/:agentId', {
    schema: { 
      operationId: 'agentDelete',
      params: Type.Object({
        agentId: Type.Integer()
      })
    }
  }, async (req)=> {
    return {}
  }) */

}) satisfies FastifyPluginAsyncTypebox