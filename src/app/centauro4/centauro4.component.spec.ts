import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Centauro4Component } from './centauro4.component';

describe('Centauro4Component', () => {
  let component: Centauro4Component;
  let fixture: ComponentFixture<Centauro4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Centauro4Component]
    });
    fixture = TestBed.createComponent(Centauro4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
