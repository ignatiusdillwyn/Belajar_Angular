import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgFor, NgIf, NgClass, NgStyle, UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, SlicePipe, CommonModule, DecimalPipe } from '@angular/common';
import { FilmItemComponent } from './film-item/film-item.component';
import { DaftarFilmComponent } from './daftar-film/daftar-film.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule, DaftarFilmComponent, FilmItemComponent, NgIf, NgFor, NgClass, NgStyle, UpperCasePipe, DecimalPipe, LowerCasePipe, TitleCasePipe, DatePipe, SlicePipe, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  terpilih = ''
  today = new Date()
  textColor = 'blue'
  isLoggedin = false
  title = 'World!';
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
  size = {
    width: 300,
    height: 200
  }
  // class TypeScript
  counter = 0;
  addCount(event?: Event) {
    this.counter = this.counter == 0 ? 1 : this.counter * 2;
    const val = (event?.target as HTMLInputElement)?.value;
    console.log('event ', event);
    console.log(val);
  }
  userName = 'John Doe';

  kataKunci = ''
  resetKataKunci(event?: Event) {
    this.kataKunci = '';
    console.log('resetKataKunci event ', event);
  }

  login(event?: Event) {
    this.isLoggedin = !this.isLoggedin
  }

  employees = [
    {
      empId: 1,
      empNo: "0001",
      empName: "Andi Aja"
    },
    {
      empId: 2,
      empNo: "0002",
      empName: "Budi Aja"
    },
    {
      empId: 3,
      empNo: "0003",
      empName: "Angga Aja"
    },
  ]

  films = [
    {
      filmName: 'Interstellar',
      status: 1,
      price: 50000,
      totalView: 102342304
    },
    {
      filmName: 'Inception',
      status: 1,
      price: 60000,
      totalView: 1023322
    },
    {
      filmName: 'Dune 3',
      status: 0,
      price: 70000,
      totalView: 0
    },
  ]

  kosongkanFilm() {
    this.films = []
  }

  kosongkanSatuSatu() {
    if (this.films.length != 0) {
      // this.films[this.films.length-1]
      this.films.pop()
    }
  }

  resetAction() {
    this.films = [
      {
        filmName: 'Interstellar',
        status: 1,
        price: 50000,
        totalView: 102342304
      },
      {
        filmName: 'Inception',
        status: 1,
        price: 60000,
        totalView: 1023322
      },
      {
        filmName: 'Dune 3',
        status: 0,
        price: 70000,
        totalView: 902382
      },
    ]
  }

  deletePerItem(index: number) {
    // index adalah posisi array (0, 1, 2, dst)
    // Angka 1 artinya hapus 1 elemen
    this.films.splice(index, 1);

    console.log('Film berhasil dihapus. Sisa film:', this.films);


  }

  handleDipilih(judul: string) {
    this.terpilih = judul
  }

}
