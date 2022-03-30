import { IsNotEmpty, IsString, IsBoolean } from 'class-validator';

export class CreateMessageDto {
  @IsNotEmpty()
  @IsString()
  content: string;
  @IsNotEmpty()
  @IsBoolean()
  state: boolean;
  @IsNotEmpty()
  @IsString()
  date: string;
}
