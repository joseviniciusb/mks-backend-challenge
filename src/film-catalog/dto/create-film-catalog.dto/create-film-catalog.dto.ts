import { IsString } from "class-validator";

export class CreateFilmCatalogDto {
    @IsString()
  readonly title: string;
  @IsString()
  readonly genre: string;
  @IsString()
  readonly release_date: string;
  @IsString()
  readonly director: string;
  @IsString({each: true})
  readonly actors: string[];
}
