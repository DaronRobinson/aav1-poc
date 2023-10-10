import AutoLoad from '@fastify/autoload'
import cors from '@fastify/cors'
import Swagger from '@fastify/swagger'
import SwaggerUI from '@fastify/swagger-ui'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import Fastify from 'fastify'

import * as schemas from './schemas'

interface BearerClaims {
  iss: string
  iat: number
  exp: number
  sub: string
  fullName: string
  email: string
  groups: string[]
  schema: string
  schemaId: number
  admin: boolean
}

declare module 'fastify' {
  interface FastifyRequest {
    claims: BearerClaims
  }
}

export const server = Fastify({
  ajv: { 
    customOptions: { 
      keywords: ['instanceOf', 'x-table']
    }
  } 
}).withTypeProvider<TypeBoxTypeProvider>()
  .addHook('preHandler', (request, reply, done) => {
    const isDocumentationRequest = request.raw.url?.startsWith('/documentation') === true
    // if (!isDocumentationRequest) {
    //   const authorization = request.headers.authorization
    //   if (!authorization) return reply.code(401).send()
    //   const bearer = authorization.split('Bearer ')?.[1]
    //   if (!bearer) return reply.code(401).send()
    //   const decoded: BearerClaims = JSON.parse(Buffer.from(bearer.split('.')[1], 'base64').toString())
    //   request.claims = decoded
    // }
    done()
  })

server.register(Swagger, {
  openapi: {},
  refResolver: {
    buildLocalReference(json, baseUri, fragment, i) {
      if (!json.$id)
        throw 'Schema is missing $id'

      return json.$id as string
    }
  }
})

server.register(SwaggerUI)

server.register(AutoLoad, {
  dir: `${__dirname}/routes`
})

server.register(cors, (instance: any)=> { 
  return (req: any, callback: any)=> {
    callback(null, {
      origin: true
    })
  }
})

for (var key in schemas) {
  if (!key.endsWith('Ref')) {
    const value = (schemas as any)[key]

    server.addSchema(value)
  }
}
