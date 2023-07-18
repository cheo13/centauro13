import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Centau17Component } from './centau17.component';

describe('Centau17Component', () => {
  let component: Centau17Component;
  let fixture: ComponentFixture<Centau17Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Centau17Component]
    });
    fixture = TestBed.createComponent(Centau17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
