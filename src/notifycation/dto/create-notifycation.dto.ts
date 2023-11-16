import { IsString, IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateNotifycationDto {
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
  @IsString()
  readonly dateTime: string;
}
