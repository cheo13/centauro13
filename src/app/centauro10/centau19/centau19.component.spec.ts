import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Centau19Component } from './centau19.component';

describe('Centau19Component', () => {
  let component: Centau19Component;
  let fixture: ComponentFixture<Centau19Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Centau19Component]
    });
    fixture = TestBed.createComponent(Centau19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
