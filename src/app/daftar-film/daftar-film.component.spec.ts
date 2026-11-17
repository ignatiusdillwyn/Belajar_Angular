import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarFilmComponent } from './daftar-film.component';

describe('DaftarFilmComponent', () => {
  let component: DaftarFilmComponent;
  let fixture: ComponentFixture<DaftarFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaftarFilmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DaftarFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
