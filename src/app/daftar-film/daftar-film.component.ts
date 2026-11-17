import { Component, inject } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-daftar-film',
  standalone: true,
  imports: [],
  templateUrl: './daftar-film.component.html',
  styleUrl: './daftar-film.component.css'
})
export class DaftarFilmComponent {
  movieSvc = inject(MovieService)
  daftarFilm:string[] = this.movieSvc.getFilms()
}
