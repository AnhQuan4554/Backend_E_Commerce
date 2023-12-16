import { IsString, IsEmail, IsNotEmpty } from 'class-validator';
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsNotEmpty()
  readonly password: string;
  @IsEmail()
  readonly email: string;
  readonly phone: string;
  readonly address: string;

  // readonly password: string;
}
