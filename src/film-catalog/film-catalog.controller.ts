import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { FilmCatalogService } from './film-catalog.service';

@Controller()
export class FilmCatalogController {

  constructor(private readonly listCatalogService: FilmCatalogService) {

  }

  @Get('film-catalog')
  findAll(@Res() response) {
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

  @Patch('film-catalog/:id')
  update(@Param() params, @Body() body) {
    return `
    Atualização do Filme ${params.id}
    `;
  }

  @Delete('film-catalog/:id')
  remove(@Param() params) {
    return `
    Deletar o Filme ${params.id}
    `;
  }
}
