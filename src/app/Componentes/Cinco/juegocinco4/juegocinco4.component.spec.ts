import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juegocinco4Component } from './juegocinco4.component';

describe('Juegocinco4Component', () => {
  let component: Juegocinco4Component;
  let fixture: ComponentFixture<Juegocinco4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juegocinco4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juegocinco4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
