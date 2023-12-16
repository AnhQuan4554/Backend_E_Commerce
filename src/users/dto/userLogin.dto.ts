import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class UserLogin {
  @IsEmail()
  readonly email: string;
  @IsString()
  readonly password: string;

  // readonly password: string;
}
