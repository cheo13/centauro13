import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Centau13Component } from './centau13.component';

describe('Centau13Component', () => {
  let component: Centau13Component;
  let fixture: ComponentFixture<Centau13Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Centau13Component]
    });
    fixture = TestBed.createComponent(Centau13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
