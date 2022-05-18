/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GruposDeApoyoComponent } from './gruposDeApoyo.component';

describe('GruposDeApoyoComponent', () => {
  let component: GruposDeApoyoComponent;
  let fixture: ComponentFixture<GruposDeApoyoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GruposDeApoyoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GruposDeApoyoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
