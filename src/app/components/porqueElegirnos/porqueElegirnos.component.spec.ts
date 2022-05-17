/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PorqueElegirnosComponent } from './porqueElegirnos.component';

describe('PorqueElegirnosComponent', () => {
  let component: PorqueElegirnosComponent;
  let fixture: ComponentFixture<PorqueElegirnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorqueElegirnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorqueElegirnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
