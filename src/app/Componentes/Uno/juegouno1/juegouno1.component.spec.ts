import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juegouno1Component } from './juegouno1.component';

describe('Juegouno1Component', () => {
  let component: Juegouno1Component;
  let fixture: ComponentFixture<Juegouno1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juegouno1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juegouno1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
