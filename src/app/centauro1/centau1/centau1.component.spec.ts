import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Centau1Component } from './centau1.component';

describe('Centau1Component', () => {
  let component: Centau1Component;
  let fixture: ComponentFixture<Centau1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Centau1Component]
    });
    fixture = TestBed.createComponent(Centau1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
