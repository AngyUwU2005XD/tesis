import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juegonueve3Component } from './juegonueve3.component';

describe('Juegonueve3Component', () => {
  let component: Juegonueve3Component;
  let fixture: ComponentFixture<Juegonueve3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juegonueve3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juegonueve3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
