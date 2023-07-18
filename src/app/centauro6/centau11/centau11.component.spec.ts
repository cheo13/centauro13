import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Centau11Component } from './centau11.component';

describe('Centau11Component', () => {
  let component: Centau11Component;
  let fixture: ComponentFixture<Centau11Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Centau11Component]
    });
    fixture = TestBed.createComponent(Centau11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
