import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juegocinco2Component } from './juegocinco2.component';

describe('Juegocinco2Component', () => {
  let component: Juegocinco2Component;
  let fixture: ComponentFixture<Juegocinco2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juegocinco2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juegocinco2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
