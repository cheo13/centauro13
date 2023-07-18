import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Centau9Component } from './centau9.component';

describe('Centau9Component', () => {
  let component: Centau9Component;
  let fixture: ComponentFixture<Centau9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Centau9Component]
    });
    fixture = TestBed.createComponent(Centau9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
