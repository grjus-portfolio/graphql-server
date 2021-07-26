import 'reflect-metadata'
import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'
import { LaunchResolver } from './resolvers/launch.resolver'

const PORT = process.env.PORT || 3000

async function main () {
  const schema = await buildSchema({
    resolvers: [LaunchResolver]
  })

  const server = new ApolloServer({
    cors:false,
    schema: schema,
  })


  const { url } = await server.listen(PORT)
  console.log(`Server is running, GraphQL Playground available at ${url}`)
}

main()
