import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Centau8Component } from './centau8.component';

describe('Centau8Component', () => {
  let component: Centau8Component;
  let fixture: ComponentFixture<Centau8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Centau8Component]
    });
    fixture = TestBed.createComponent(Centau8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
