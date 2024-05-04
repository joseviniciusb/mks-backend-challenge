import { PartialType } from "@nestjs/mapped-types";
import { CreateFilmCatalogDto } from "../create-film-catalog.dto/create-film-catalog.dto";
import { IsString } from "class-validator";

export class UpdateFilmCatalogDto extends PartialType(CreateFilmCatalogDto) {
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
