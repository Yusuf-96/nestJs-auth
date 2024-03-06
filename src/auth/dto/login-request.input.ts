import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class LoginRequestDto{
    @Field(()=> String)
    username: string;
    

    @Field(()=> String)
    password: string;


}