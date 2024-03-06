import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class LoginResponseDto{
    @Field()
    message: string;

    @Field()
    token: string;
}