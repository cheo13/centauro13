import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Centauro2Component } from './centauro2.component';

describe('Centauro2Component', () => {
  let component: Centauro2Component;
  let fixture: ComponentFixture<Centauro2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Centauro2Component]
    });
    fixture = TestBed.createComponent(Centauro2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
