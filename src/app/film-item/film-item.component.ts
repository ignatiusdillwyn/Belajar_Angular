import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-film-item',
  standalone: true,
  imports: [],
  templateUrl: './film-item.component.html',
  styleUrl: './film-item.component.css',
  template: `
<p>{{ judul }}</p>
<button>Pilih</button>`
})
export class FilmItemComponent {
  @Input() judul = ''
  @Output() dipilih: EventEmitter<string> = new EventEmitter<string>()

  pilih = () => {
    this.dipilih.emit(
      this.judul
    )
  }
}
