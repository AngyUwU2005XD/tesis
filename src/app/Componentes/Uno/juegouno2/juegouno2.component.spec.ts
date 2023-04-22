import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juegouno2Component } from './juegouno2.component';

describe('Juegouno2Component', () => {
  let component: Juegouno2Component;
  let fixture: ComponentFixture<Juegouno2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juegouno2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juegouno2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
