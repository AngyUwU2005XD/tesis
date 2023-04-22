import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juegodos1Component } from './juegodos1.component';

describe('Juegodos1Component', () => {
  let component: Juegodos1Component;
  let fixture: ComponentFixture<Juegodos1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juegodos1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juegodos1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
