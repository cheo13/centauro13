import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Centau12Component } from './centau12.component';

describe('Centau12Component', () => {
  let component: Centau12Component;
  let fixture: ComponentFixture<Centau12Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Centau12Component]
    });
    fixture = TestBed.createComponent(Centau12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
