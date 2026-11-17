import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet, Router, } from '@angular/router';
import { MovieSummaryComponent } from '../movie-summary/movie-summary.component';
import { MovieService } from '../services/movie.service';
import { Schedule } from '../shared/types/schedule.model';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MovieSummaryComponent, DatePipe],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnInit {

  movieId = '0'
  route = inject(ActivatedRoute);

  router = inject(Router);

  likeCounter = 0

  movieSvc = inject(MovieService)
  movieSchedule: Schedule | null = null


  ngOnInit() {
    //Get Param from Route
    // this.movieId = this.route.snapshot.paramMap?.get('id') ?? 'movie id not found';
    this.route.paramMap.subscribe(params => {
      this.movieId = params.get('id') ?? ''
    })
    console.log('Movie ID: ', this.movieId)


    this.movieSvc.getSchedules(this.movieId.toString()).subscribe(
      (response) => {
        console.log('schedule ', response)
        this.movieSchedule = response
      }
    )
  }

  onGoToCastHandler = () => {
    this.router.navigate(
      ['/movies/' + this.movieId + '/cast'],
      { queryParams: { q: 'angular' } }
    )
  }

  onLikeEventHandler(event: any) {
    console.log(event)
    if (event.eventType === 'LIKE') {
      this.likeCounter++;
    } else if (event.eventType === 'DISLIKE') {
      this.likeCounter--;
    }
  }


}
