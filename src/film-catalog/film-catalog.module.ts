import { Get, Module } from '@nestjs/common';
import { FilmCatalogController } from './film-catalog.controller';
import { FilmCatalogService } from './film-catalog.service';


@Module({
  controllers: [FilmCatalogController],
  providers: [FilmCatalogService]
})
export class FilmCatalogModule {}
