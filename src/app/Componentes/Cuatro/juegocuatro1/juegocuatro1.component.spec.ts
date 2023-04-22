import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juegocuatro1Component } from './juegocuatro1.component';

describe('Juegocuatro1Component', () => {
  let component: Juegocuatro1Component;
  let fixture: ComponentFixture<Juegocuatro1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juegocuatro1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juegocuatro1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
