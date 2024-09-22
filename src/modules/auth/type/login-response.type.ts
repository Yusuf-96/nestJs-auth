import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/modules/users/type/user.type';

@ObjectType()
export class LoginResponseDto {
  @Field()
  accessToken: string;

  //   @Field(() => User)
  //   user: User;

  // @Field()
  // refreshToken: string;
}
