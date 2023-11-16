import { IsString, IsEmail, IsNotEmpty, IsNumber } from 'class-validator';
export class CreateCartDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
  @IsString()
  readonly image: string;

  @IsString()
  readonly description: string;
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly price: number;
  @IsNumber()
  readonly qty: number;
}
