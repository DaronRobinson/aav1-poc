import { FastifyPluginAsyncTypebox, Type } from '@fastify/type-provider-typebox'

//import { events } from '../data'
//import { eventSchemaRef } from '../schemas'

export default (async function(fastify, _opts) {

  /* fastify.post('/events', {
    schema: { 
      operationId: 'eventCreate',
      params: Type.Object({
        eventId: Type.Integer()
      }),
      body: eventCreateRef
    }
  }, async (req)=> {
    return Value.Create(event)
  }) */
  
  // fastify.get('/events', {
  //   schema: { 
  //     operationId: 'eventsSearch',
  //     response: {
  //       200: Type.Array(eventSchemaRef)
  //     }
  //   }
  // }, async (req)=> {
  //   return events.filter(event => !event.dismissed)
  // })

  // fastify.get('/events/by/vendor/:vendorId', {
  //   schema: { 
  //     operationId: 'eventsByVendorSearch',
  //     params: Type.Object({
  //       vendorId: Type.Integer()
  //     }),
  //     response: {
  //       200: Type.Array(eventSchemaRef)
  //     }
  //   }
  // }, async ({ params: { vendorId } }, reply)=> {
  //  const vendor = vendors.find(v => v.id == vendorId)

  //   if (!vendor)
  //     return reply.callNotFound()

  //   return events.filter(event => !event.dismissed)
  // })
  
  // fastify.post('/events/:eventId/dismiss', {
  //   schema: { 
  //     operationId: 'eventDismissUpdate',
  //     params: Type.Object({
  //       eventId: Type.Integer()
  //     }),
  //     response: {
  //       200: Type.Array(eventSchemaRef)
  //     }
  //   }
  // }, async ({ params: { eventId } }, reply)=> {
  //   const event = events.find(a => a.id == eventId)

  //   if (!event)
  //     return reply.callNotFound()
  //   event.dismissed = true
  // })

  /* fastify.get('/events/:eventId', {
    schema: { 
      operationId: 'eventFind',
      params: Type.Object({
        eventId: Type.Integer()
      }),
      response: {
        200: eventRef
      }
    }
  }, async (req)=> {
    return Value.Create(event)
  }) */

  /* fastify.put('/events/:eventId', {
    schema: { 
      operationId: 'eventUpdate',
      params: Type.Object({
        eventId: Type.Integer()
      }),
      body: eventUpdateRef
    }
  }, async (req)=> {
    return {}
  }) */

  /* fastify.delete('/events/:eventId', {
    schema: { 
      operationId: 'eventDelete',
      params: Type.Object({
        eventId: Type.Integer()
      })
    }
  }, async (req)=> {
    return {}
  }) */

}) satisfies FastifyPluginAsyncTypebox
