import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmCatalogModule } from './film-catalog/film-catalog.module';

@Module({
  imports: [FilmCatalogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
