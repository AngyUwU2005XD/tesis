import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juegocuatro3Component } from './juegocuatro3.component';

describe('Juegocuatro3Component', () => {
  let component: Juegocuatro3Component;
  let fixture: ComponentFixture<Juegocuatro3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juegocuatro3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juegocuatro3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
