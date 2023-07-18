import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Centauro6Component } from './centauro6.component';

describe('Centauro6Component', () => {
  let component: Centauro6Component;
  let fixture: ComponentFixture<Centauro6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Centauro6Component]
    });
    fixture = TestBed.createComponent(Centauro6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
