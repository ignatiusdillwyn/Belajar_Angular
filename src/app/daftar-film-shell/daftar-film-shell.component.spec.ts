import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarFilmShellComponent } from './daftar-film-shell.component';

describe('DaftarFilmShellComponent', () => {
  let component: DaftarFilmShellComponent;
  let fixture: ComponentFixture<DaftarFilmShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaftarFilmShellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DaftarFilmShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
