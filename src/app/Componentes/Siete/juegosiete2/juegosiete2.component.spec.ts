import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juegosiete2Component } from './juegosiete2.component';

describe('Juegosiete2Component', () => {
  let component: Juegosiete2Component;
  let fixture: ComponentFixture<Juegosiete2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juegosiete2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juegosiete2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
