import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmCatalogModule } from './film-catalog/film-catalog.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [FilmCatalogModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '174285396456',
    database: 'postgres',
    autoLoadEntities: true,
    synchronize: true

  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
