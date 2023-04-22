import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juegodos2Component } from './juegodos2.component';

describe('Juegodos2Component', () => {
  let component: Juegodos2Component;
  let fixture: ComponentFixture<Juegodos2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juegodos2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juegodos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
