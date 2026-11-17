import { Component } from '@angular/core';
import { CounterDisplayComponent } from '../counter-display/counter-display.component';
import { CounterButtonComponent } from '../counter-button/counter-button.component';

@Component({
  selector: 'app-counter-shell',
  standalone: true,
  imports: [CounterShellComponent, CounterDisplayComponent, CounterButtonComponent],
  templateUrl: './counter-shell.component.html',
  styleUrl: './counter-shell.component.css'
})
export class CounterShellComponent {

}
