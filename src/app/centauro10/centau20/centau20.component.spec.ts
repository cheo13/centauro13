import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Centau20Component } from './centau20.component';

describe('Centau20Component', () => {
  let component: Centau20Component;
  let fixture: ComponentFixture<Centau20Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Centau20Component]
    });
    fixture = TestBed.createComponent(Centau20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
