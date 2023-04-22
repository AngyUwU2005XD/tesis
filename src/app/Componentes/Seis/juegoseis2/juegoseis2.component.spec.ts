import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juegoseis2Component } from './juegoseis2.component';

describe('Juegoseis2Component', () => {
  let component: Juegoseis2Component;
  let fixture: ComponentFixture<Juegoseis2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juegoseis2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juegoseis2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
