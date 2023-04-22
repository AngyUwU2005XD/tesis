import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juegodos3Component } from './juegodos3.component';

describe('Juegodos3Component', () => {
  let component: Juegodos3Component;
  let fixture: ComponentFixture<Juegodos3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juegodos3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juegodos3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
