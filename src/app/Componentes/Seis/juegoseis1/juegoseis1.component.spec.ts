import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juegoseis1Component } from './juegoseis1.component';

describe('Juegoseis1Component', () => {
  let component: Juegoseis1Component;
  let fixture: ComponentFixture<Juegoseis1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juegoseis1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juegoseis1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
