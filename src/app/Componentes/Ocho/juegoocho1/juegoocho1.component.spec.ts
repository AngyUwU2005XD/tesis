import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juegoocho1Component } from './juegoocho1.component';

describe('Juegoocho1Component', () => {
  let component: Juegoocho1Component;
  let fixture: ComponentFixture<Juegoocho1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juegoocho1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juegoocho1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
