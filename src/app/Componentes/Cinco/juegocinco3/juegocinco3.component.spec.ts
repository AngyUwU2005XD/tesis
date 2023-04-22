import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juegocinco3Component } from './juegocinco3.component';

describe('Juegocinco3Component', () => {
  let component: Juegocinco3Component;
  let fixture: ComponentFixture<Juegocinco3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juegocinco3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juegocinco3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
