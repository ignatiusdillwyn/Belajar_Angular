import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventType } from '@angular/router';

@Component({
  selector: 'app-movie-summary',
  standalone: true,
  imports: [],
  templateUrl: './movie-summary.component.html',
  styleUrl: './movie-summary.component.css'
})
export class MovieSummaryComponent {
  @Input() movieId: string = 'not found'
  @Output() likeEvent: EventEmitter<any> = new EventEmitter()
  
  onLikeHandler = () => {
    this.likeEvent.emit({
      eventType: "LIKE"
    })
  }

  onDislikeEventHandler = () => {
    this.likeEvent.emit({
      eventType: "DISLIKE"
    })
  }
}
