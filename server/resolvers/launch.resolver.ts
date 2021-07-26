import { Query, Resolver } from 'type-graphql'
import spacexApi from '../api'
import { Launch } from '../entities/launch.entity'

@Resolver()
class LaunchResolver {
  @Query(() => [Launch])
  async launches ():Promise<Launch> {
    const response = await spacexApi('/launches')
    return response.data
  }
}

export { LaunchResolver }
