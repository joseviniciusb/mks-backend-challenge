import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { FilmCatalogService } from './film-catalog.service';

@Controller()
export class FilmCatalogController {
  constructor(private readonly listCatalogService: FilmCatalogService) {}

  @Get('film-catalog')
  findAll() {
    return this.listCatalogService.findAll();
  }

  @Get('film-catalog/:id')
  findOne(@Param('id') id) {
    return this.listCatalogService.findOne(id);
  }

  @Post()
  create(@Body() body) {
    return this.listCatalogService.create(body);
  }

  @Patch('film-catalog/:id')
  update(@Param() id: string, @Body() body) {
    return this.listCatalogService.update(id, body);
  }

  @Delete('film-catalog/:id')
  remove(@Param() id) {
    return this.listCatalogService.remove(id);
  }
}
