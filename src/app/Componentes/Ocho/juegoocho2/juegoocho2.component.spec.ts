import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juegoocho2Component } from './juegoocho2.component';

describe('Juegoocho2Component', () => {
  let component: Juegoocho2Component;
  let fixture: ComponentFixture<Juegoocho2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juegoocho2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juegoocho2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
