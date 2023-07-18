import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Centau3Component } from './centau3.component';

describe('Centau3Component', () => {
  let component: Centau3Component;
  let fixture: ComponentFixture<Centau3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Centau3Component]
    });
    fixture = TestBed.createComponent(Centau3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
