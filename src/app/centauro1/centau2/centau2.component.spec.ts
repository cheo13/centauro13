import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Centau2Component } from './centau2.component';

describe('Centau2Component', () => {
  let component: Centau2Component;
  let fixture: ComponentFixture<Centau2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Centau2Component]
    });
    fixture = TestBed.createComponent(Centau2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
