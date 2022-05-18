/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AUnPasoDeCrecerComponent } from './aUnPasoDeCrecer.component';

describe('AUnPasoDeCrecerComponent', () => {
  let component: AUnPasoDeCrecerComponent;
  let fixture: ComponentFixture<AUnPasoDeCrecerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AUnPasoDeCrecerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AUnPasoDeCrecerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
