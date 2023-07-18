import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Centauro7Component } from './centauro7.component';

describe('Centauro7Component', () => {
  let component: Centauro7Component;
  let fixture: ComponentFixture<Centauro7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Centauro7Component]
    });
    fixture = TestBed.createComponent(Centauro7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
