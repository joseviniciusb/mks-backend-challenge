import { Test, TestingModule } from '@nestjs/testing';
import { FilmCatalogController } from './film-catalog.controller';

describe('FilmCatalogController', () => {
  let controller: FilmCatalogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilmCatalogController],
    }).compile();

    controller = module.get<FilmCatalogController>(FilmCatalogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
