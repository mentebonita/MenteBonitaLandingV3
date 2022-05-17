/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReservaTuCitaEnTresPasosComponent } from './reservaTuCitaEnTresPasos.component';

describe('ReservaTuCitaEnTresPasosComponent', () => {
  let component: ReservaTuCitaEnTresPasosComponent;
  let fixture: ComponentFixture<ReservaTuCitaEnTresPasosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaTuCitaEnTresPasosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaTuCitaEnTresPasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
