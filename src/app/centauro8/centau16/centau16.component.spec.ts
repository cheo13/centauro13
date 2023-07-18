import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Centau16Component } from './centau16.component';

describe('Centau16Component', () => {
  let component: Centau16Component;
  let fixture: ComponentFixture<Centau16Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Centau16Component]
    });
    fixture = TestBed.createComponent(Centau16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
