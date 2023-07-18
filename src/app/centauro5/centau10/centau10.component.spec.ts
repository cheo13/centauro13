import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Centau10Component } from './centau10.component';

describe('Centau10Component', () => {
  let component: Centau10Component;
  let fixture: ComponentFixture<Centau10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Centau10Component]
    });
    fixture = TestBed.createComponent(Centau10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
