import { Injectable } from '@nestjs/common';
import { Film } from './entities/film.entity';

@Injectable()
export class FilmCatalogService {
  private films: Film[] = ([] = [
    {
      id: 1,
      title: 'Movie Title',
      genre: 'Genre',
      release_date: '2024',
      director: 'Al Pacino',
      actors: ['Al Pacino', 'Al Pacino'],
    },
  ]);

  findAll() {
    return this.films;
  }

  findOne(id: string) {
    return this.films.find((film) => film.id === Number(id));
  }

  create(createFilmDto: any) {
    this.films.push(createFilmDto);
  }

  update(id: string, updateFilmDto: any) {
    const indexFilm = this.films.findIndex((film) => film.id === Number(id));

    this.films[indexFilm] = updateFilmDto;
  }

  remove(id: string) {
    const indexFilm = this.films.findIndex((film: Film) => film.id === Number(id) )

    if(indexFilm >= 0){
        this.films.splice(indexFilm,  1)
    }
  }
}
