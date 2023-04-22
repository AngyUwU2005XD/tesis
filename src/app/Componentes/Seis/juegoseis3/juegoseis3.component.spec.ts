import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juegoseis3Component } from './juegoseis3.component';

describe('Juegoseis3Component', () => {
  let component: Juegoseis3Component;
  let fixture: ComponentFixture<Juegoseis3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juegoseis3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juegoseis3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
