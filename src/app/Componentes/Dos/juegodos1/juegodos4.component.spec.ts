import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juegodos4Component } from './juegodos4.component';

describe('Juegodos4Component', () => {
  let component: Juegodos4Component;
  let fixture: ComponentFixture<Juegodos4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juegodos4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juegodos4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
