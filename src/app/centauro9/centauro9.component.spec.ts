import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Centauro9Component } from './centauro9.component';

describe('Centauro9Component', () => {
  let component: Centauro9Component;
  let fixture: ComponentFixture<Centauro9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Centauro9Component]
    });
    fixture = TestBed.createComponent(Centauro9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
