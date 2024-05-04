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
import { CreateFilmCatalogDto } from './dto/create-film-catalog.dto/create-film-catalog.dto';
import { UpdateFilmCatalogDto } from './dto/update-film-catalog.dto/update-film-catalog.dto';

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
  create(@Body() createFilmCatalogDto: CreateFilmCatalogDto) {
    return this.listCatalogService.create(createFilmCatalogDto);
  }

  @Patch('film-catalog/:id')
  update(@Param('id') id, @Body() updateFilmCatalogDto: UpdateFilmCatalogDto) {
    return this.listCatalogService.update(id, updateFilmCatalogDto);
  }

  @Delete('film-catalog/:id')
  remove(@Param() id) {
    return this.listCatalogService.remove(id);
  }
}
