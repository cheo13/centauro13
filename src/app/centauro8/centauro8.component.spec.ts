import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Centauro8Component } from './centauro8.component';

describe('Centauro8Component', () => {
  let component: Centauro8Component;
  let fixture: ComponentFixture<Centauro8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Centauro8Component]
    });
    fixture = TestBed.createComponent(Centauro8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
