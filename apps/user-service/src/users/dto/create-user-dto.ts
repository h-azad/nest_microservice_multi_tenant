import { IsEmail, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  readonly firstName: string;
  @IsOptional()
  readonly lastName: string;
  @IsEmail()
  readonly email: string;
  password: string;
  @IsEnum(['male', 'female'])
  readonly type: string;
}
