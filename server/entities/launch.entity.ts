import { Field, ObjectType } from 'type-graphql'

@ObjectType()
class Launch {
    @Field(of => String!)
    id:string

    @Field(of => Boolean)
    success:boolean

    @Field(of => Boolean)
    name:string

    @Field(of => String!)
    rocket:string
}

export { Launch }