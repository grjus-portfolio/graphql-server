import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { LaunchResolver } from './resolvers/launch.resolver'
import express from 'express'

const PORT = process.env.PORT || 3000

async function main () {
  const app = express()
  const schema = await buildSchema({
    resolvers: [LaunchResolver]
  })

  const server = new ApolloServer({
    schema: schema,
    context: ({ req, res }) => ({ req, res })
  })

  await server.start()

  server.applyMiddleware({ app, cors: true })

  app.listen(PORT, () => console.log(`Server is running, GraphQL Playground available at ${PORT}`))
}

main()
