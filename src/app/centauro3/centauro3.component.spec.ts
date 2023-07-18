import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Centauro3Component } from './centauro3.component';

describe('Centauro3Component', () => {
  let component: Centauro3Component;
  let fixture: ComponentFixture<Centauro3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Centauro3Component]
    });
    fixture = TestBed.createComponent(Centauro3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
