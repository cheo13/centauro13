import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Centau6Component } from './centau6.component';

describe('Centau6Component', () => {
  let component: Centau6Component;
  let fixture: ComponentFixture<Centau6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Centau6Component]
    });
    fixture = TestBed.createComponent(Centau6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
