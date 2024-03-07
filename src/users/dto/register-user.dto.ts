import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class RegisteUserDto{

    @Field(()=>String)
    username:string

    @Field(()=>String)
    password:string 

}