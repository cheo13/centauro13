import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Centauro10Component } from './centauro10.component';

describe('Centauro10Component', () => {
  let component: Centauro10Component;
  let fixture: ComponentFixture<Centauro10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Centauro10Component]
    });
    fixture = TestBed.createComponent(Centauro10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
