import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juegonueve2Component } from './juegonueve2.component';

describe('Juegonueve2Component', () => {
  let component: Juegonueve2Component;
  let fixture: ComponentFixture<Juegonueve2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juegonueve2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juegonueve2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
