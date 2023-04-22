import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juegotres2Component } from './juegotres2.component';

describe('Juegotres2Component', () => {
  let component: Juegotres2Component;
  let fixture: ComponentFixture<Juegotres2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juegotres2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juegotres2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
