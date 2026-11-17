import { Component, inject } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-counter-button',
  standalone: true,
  imports: [],
  templateUrl: './counter-button.component.html',
  styleUrl: './counter-button.component.css'
})
export class CounterButtonComponent {
  counterSvc = inject(CounterService)
  onDecrementHadnler() {
    this.counterSvc.decrement()
  }

  onIncreamentHandler() {
    this.counterSvc.increment()
  }
}
