/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UltimosIngresosDelBlogComponent } from './ultimosIngresosDelBlog.component';

describe('UltimosIngresosDelBlogComponent', () => {
  let component: UltimosIngresosDelBlogComponent;
  let fixture: ComponentFixture<UltimosIngresosDelBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltimosIngresosDelBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimosIngresosDelBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
