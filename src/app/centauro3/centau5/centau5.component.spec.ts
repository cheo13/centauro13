import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Centau5Component } from './centau5.component';

describe('Centau5Component', () => {
  let component: Centau5Component;
  let fixture: ComponentFixture<Centau5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Centau5Component]
    });
    fixture = TestBed.createComponent(Centau5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
