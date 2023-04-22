import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juegotres3Component } from './juegotres3.component';

describe('Juegotres3Component', () => {
  let component: Juegotres3Component;
  let fixture: ComponentFixture<Juegotres3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juegotres3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juegotres3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
