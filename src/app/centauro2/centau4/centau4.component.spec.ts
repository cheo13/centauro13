import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Centau4Component } from './centau4.component';

describe('Centau4Component', () => {
  let component: Centau4Component;
  let fixture: ComponentFixture<Centau4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Centau4Component]
    });
    fixture = TestBed.createComponent(Centau4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
