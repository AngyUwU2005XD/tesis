import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juegotres1Component } from './juegotres1.component';

describe('Juegotres1Component', () => {
  let component: Juegotres1Component;
  let fixture: ComponentFixture<Juegotres1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juegotres1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juegotres1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
