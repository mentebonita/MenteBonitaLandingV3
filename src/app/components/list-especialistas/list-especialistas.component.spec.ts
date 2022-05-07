/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListEspecialistasComponent } from './list-especialistas.component';

describe('ListEspecialistasComponent', () => {
  let component: ListEspecialistasComponent;
  let fixture: ComponentFixture<ListEspecialistasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEspecialistasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEspecialistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
