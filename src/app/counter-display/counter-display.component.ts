import { Component, inject } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-counter-display',
  standalone: true,
  imports: [],
  templateUrl: './counter-display.component.html',
  styleUrl: './counter-display.component.css'
})
export class CounterDisplayComponent {
  //Pakai Service CounterService dengan cara diinject
  counterSvc = inject(CounterService);

}
