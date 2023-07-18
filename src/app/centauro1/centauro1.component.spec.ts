import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Centauro1Component } from './centauro1.component';

describe('Centauro1Component', () => {
  let component: Centauro1Component;
  let fixture: ComponentFixture<Centauro1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Centauro1Component]
    });
    fixture = TestBed.createComponent(Centauro1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
