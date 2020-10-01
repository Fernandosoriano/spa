import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeFiltradoComponent } from './heroe-filtrado.component';

describe('HeroeFiltradoComponent', () => {
  let component: HeroeFiltradoComponent;
  let fixture: ComponentFixture<HeroeFiltradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroeFiltradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroeFiltradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
