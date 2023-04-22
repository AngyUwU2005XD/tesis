import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juegocinco1Component } from './juegocinco1.component';

describe('Juegocinco1Component', () => {
  let component: Juegocinco1Component;
  let fixture: ComponentFixture<Juegocinco1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juegocinco1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juegocinco1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
