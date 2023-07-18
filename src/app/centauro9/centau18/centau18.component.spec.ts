import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Centau18Component } from './centau18.component';

describe('Centau18Component', () => {
  let component: Centau18Component;
  let fixture: ComponentFixture<Centau18Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Centau18Component]
    });
    fixture = TestBed.createComponent(Centau18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
