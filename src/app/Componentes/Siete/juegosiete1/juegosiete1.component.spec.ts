import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juegosiete1Component } from './juegosiete1.component';

describe('Juegosiete1Component', () => {
  let component: Juegosiete1Component;
  let fixture: ComponentFixture<Juegosiete1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juegosiete1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juegosiete1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
