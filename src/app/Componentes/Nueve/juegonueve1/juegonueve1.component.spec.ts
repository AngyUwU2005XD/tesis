import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juegonueve1Component } from './juegonueve1.component';

describe('Juegonueve1Component', () => {
  let component: Juegonueve1Component;
  let fixture: ComponentFixture<Juegonueve1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juegonueve1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juegonueve1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
