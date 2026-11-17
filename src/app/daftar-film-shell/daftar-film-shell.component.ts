import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { DaftarFilmComponent } from '../daftar-film/daftar-film.component';
import { delay, from, interval, Observable, of, Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-daftar-film-shell',
  standalone: true,
  imports: [DaftarFilmComponent],
  templateUrl: './daftar-film-shell.component.html',
  styleUrl: './daftar-film-shell.component.css'
})
export class DaftarFilmShellComponent implements OnInit, OnDestroy {
  interval$: Observable<number> = interval(1000)
  movieSvc = inject(MovieService)
  //Buat variabel bertipe Subscription
  subscription: Subscription | null = null
  intervalNum = 0

  usersOf$: Observable<string[]> = of(['Alice', 'Bob', 'Charlie']);
  usersFrom$: Observable<string> = from(['Alice', 'Bob', 'Charlie']);

  films = [
    { title: 'Interstellar', rating: 8.7 },
    { title: 'Cars 3', rating: 6.7 },
    { title: 'Inception', rating: 8.8 }
  ];

  moviesFrom$: Observable<{title: string, rating: number}> = from(this.films)  

  ngOnInit(): void {
    //Cara Consume Observable
    this.interval$.subscribe({
      next: value => {
        this.intervalNum = value
        console.log(value)
      },
      error: err => {
        console.log('error', err)
      },
      complete: () => {
        console.log('Selesai')
      }
    })

    this.usersOf$.pipe(delay(5000)).subscribe(data => {
      console.log('of() emitted:', data);
      // Output: Array ['Alice', 'Bob', 'Charlie'] (Happens 1 time)
    });

    this.usersFrom$.subscribe(data => {
      console.log('from() emitted:', data);
      // Output: 
      // "Alice" (Happens 3 separate times)
      // "Bob"
      // "Charlie"
    });

    this.moviesFrom$.pipe(
      filter(film => film.rating > 8),
      map(film => {
        console.log('map operator ', film)
        return film.title
      })
    )
    .subscribe(judul => {
      console.log(judul)
    })
  }
  tambah() {
    this.movieSvc.tambahFilm("Film Baru")
  }

  ngOnDestroy(): void {
    console.log('halo')
    debugger
    //Harus di unsubscribe di ngOnDestroy
    this.subscription?.unsubscribe()
  }
}

