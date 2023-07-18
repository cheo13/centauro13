import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Centauro5Component } from './centauro5.component';

describe('Centauro5Component', () => {
  let component: Centauro5Component;
  let fixture: ComponentFixture<Centauro5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Centauro5Component]
    });
    fixture = TestBed.createComponent(Centauro5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
