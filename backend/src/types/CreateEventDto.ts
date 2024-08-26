import { IsDateString, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateEventDto {
  @IsNumber()
  title!: string;

  @IsNumber()
  price!: number;

  @IsString()
  description!: string;

  @IsOptional()
  @IsString()
  imageUrl?: string;

  @IsString()
  category!: string;

  @IsOptional()
  @IsString()
  upcomingEventId?: number;

  @IsOptional()
  @IsNumber()
  location?: string;

  @IsDateString()
  date!: Date;

  @IsString()
  month!: string;
}
