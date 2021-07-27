import { Arg, Query, Resolver } from 'type-graphql'
import spacexApi from '../api'
import { Launch } from '../entities/launch.entity'

@Resolver()
class LaunchResolver {
  @Query(() => [Launch])
  async launches (@Arg('name', type => String, { nullable: true }) name:string = ''):Promise<Launch> {
    const response = await spacexApi('/launches')
    const output = response.data.filter((item:Launch) => item.name.toLowerCase().includes(name.toLowerCase()))
    return output
  }

  @Query(() => Launch)
  async launch (@Arg('launch_id', type => String) launchId:string) {
    const response = await spacexApi(`/launches/${launchId}`)
    return response.data
  }
}

export { LaunchResolver }
