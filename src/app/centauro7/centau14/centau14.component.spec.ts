import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Centau14Component } from './centau14.component';

describe('Centau14Component', () => {
  let component: Centau14Component;
  let fixture: ComponentFixture<Centau14Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Centau14Component]
    });
    fixture = TestBed.createComponent(Centau14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
