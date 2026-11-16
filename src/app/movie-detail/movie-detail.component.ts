import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet, Router, } from '@angular/router';
import { MovieSummaryComponent } from '../movie-summary/movie-summary.component';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MovieSummaryComponent],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnInit {

  movieId = '0'
  route = inject(ActivatedRoute);

  router = inject(Router);

  likeCounter = 0

  ngOnInit() {
    // Cara 1: snapshot (satu kali baca)
    //Get Param from Route
    this.movieId = this.route.snapshot.paramMap?.get('id') ?? 'movie id not found';
    console.log('EMP ID: ', this.movieId)


  }

  onGoToCastHandler = () => {
    this.router.navigate(
      ['/movies/' + this.movieId + '/cast'],
      { queryParams: { q: 'angular' } }
    )
  }

  onLikeEventHandler(event: any) {
    console.log(event)
    if (event.eventType === 'LIKE'){
      this.likeCounter++;
    } else if (event.eventType === 'DISLIKE'){
      this.likeCounter--;
    }
  }

 
}
