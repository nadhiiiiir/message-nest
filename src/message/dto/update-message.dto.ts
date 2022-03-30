import { IsMongoId, IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateMessageDto {
  @IsMongoId()
  @IsOptional()
  _id?: string;
  @IsOptional()
  @IsString()
  content: string;
  @IsOptional()
  @IsBoolean()
  state: boolean;
  @IsOptional()
  @IsString()
  date: string;
}
