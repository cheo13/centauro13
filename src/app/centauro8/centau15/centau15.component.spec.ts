import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Centau15Component } from './centau15.component';

describe('Centau15Component', () => {
  let component: Centau15Component;
  let fixture: ComponentFixture<Centau15Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Centau15Component]
    });
    fixture = TestBed.createComponent(Centau15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
