import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juegocuatro2Component } from './juegocuatro2.component';

describe('Juegocuatro2Component', () => {
  let component: Juegocuatro2Component;
  let fixture: ComponentFixture<Juegocuatro2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juegocuatro2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juegocuatro2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
