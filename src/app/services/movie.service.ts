import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../shared/types/movie.model';
import { environment } from '../../environments/environment';
import { Schedule } from '../shared/types/schedule.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { } //http = inject(HttpClient)

  //HTTP Get API
  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(
      `${environment.apiUrl}/api/movies`
    )
  }

  getSchedules(movieId:string): Observable<Schedule> {
    return this.http.get<Schedule>(
      `${environment.apiUrl}/api/schedules/${movieId}`
    )
  }
  

  private films: string[] = ['Interstellar', 'Inception'];

  tambahFilm(judul: string) {
    this.films.push(judul);
  }
  getFilms(): string[] {
    return this.films;
  }

  //HTTP

}
