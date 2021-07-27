/* eslint-disable camelcase */
import { Field, ObjectType } from 'type-graphql'
import spacexApi from '../api'

@ObjectType()
class Rocket {
    @Field(of => String!)
    name:string

    @Field(of => String)
    country:string

    @Field(of => String!)
    cost_per_launch:string

    @Field(of => String!)
    description:string
}

@ObjectType()
class Launch {
    @Field(of => String!)
    id:string

    @Field(of => Boolean)
    success:boolean

    @Field(of => String)
    name:string

    @Field(of => String!)
    rocket:string

    @Field(of => Rocket)
    async rocket_data () {
      const response = await spacexApi(`/rockets/${this.rocket}`)
      return response.data
    }
}

export { Launch }
