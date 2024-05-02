import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res } from '@nestjs/common';

@Controller()
export class FilmCatalogController {
  @Get('film-catalog')
  findAll(@Res() response ) {
    return response.status(200).send('Catálogo de filmes');
  }

  @Get('film-catalog/:id')
  findOne(@Param() params) {
    return `Filme: ${params.id}`;
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body() body) {
    return body;
  }
}
