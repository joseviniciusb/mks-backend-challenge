import { Get, Module } from '@nestjs/common';
import { FilmCatalogController } from './film-catalog.controller';


@Module({
  controllers: [FilmCatalogController]
})
export class FilmCatalogModule {}
