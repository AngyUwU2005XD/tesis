import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juegosiete3Component } from './juegosiete3.component';

describe('Juegosiete3Component', () => {
  let component: Juegosiete3Component;
  let fixture: ComponentFixture<Juegosiete3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juegosiete3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juegosiete3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
