import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juegoocho3Component } from './juegoocho3.component';

describe('Juegoocho3Component', () => {
  let component: Juegoocho3Component;
  let fixture: ComponentFixture<Juegoocho3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juegoocho3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juegoocho3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
