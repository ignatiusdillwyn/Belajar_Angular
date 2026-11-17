import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Movie } from '../shared/types/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit{
  movieSvc = inject(MovieService)
  movies: Movie[] = []

  ngOnInit(): void {
    this.movieSvc.getMovies().subscribe(
      (response) => {
        console.log(response)
        this.movies = response
        console.log('this movie ', this.movies)
      }
    )
  }
}
