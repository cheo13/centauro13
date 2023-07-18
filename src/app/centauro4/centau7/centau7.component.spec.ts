import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Centau7Component } from './centau7.component';

describe('Centau7Component', () => {
  let component: Centau7Component;
  let fixture: ComponentFixture<Centau7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Centau7Component]
    });
    fixture = TestBed.createComponent(Centau7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
