import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juegocuatro4Component } from './juegocuatro4.component';

describe('Juegocuatro4Component', () => {
  let component: Juegocuatro4Component;
  let fixture: ComponentFixture<Juegocuatro4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juegocuatro4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juegocuatro4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
