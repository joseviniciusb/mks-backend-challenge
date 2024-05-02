import { Controller, Get, Param } from '@nestjs/common';

@Controller()
export class FilmCatalogController {
  @Get('film-catalog')
  findAll() {
    return 'Listagem de filmes';
  }

  @Get('film-catalog/:id')
  findOne(@Param() params) {
    return `Filme: ${params.id}`;
  }
}
