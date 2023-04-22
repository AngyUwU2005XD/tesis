import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juegouno3Component } from './juegouno3.component';

describe('Juegouno3Component', () => {
  let component: Juegouno3Component;
  let fixture: ComponentFixture<Juegouno3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juegouno3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juegouno3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
