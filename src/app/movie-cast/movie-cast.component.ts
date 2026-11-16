import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-cast',
  standalone: true,
  imports: [],
  templateUrl: './movie-cast.component.html',
  styleUrl: './movie-cast.component.css'
})
export class MovieCastComponent implements OnInit{
  query = ''
  route = inject(ActivatedRoute)

  ngOnInit(): void {
    // this.query = this.route.snapshot.queryParamMap.get('q') ?? ''
    this.route.queryParamMap.subscribe(params => {
      this.query = params.get('q') ?? ''
    })
  }

}
