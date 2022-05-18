/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DescuentoBannerComponent } from './descuentoBanner.component';

describe('DescuentoBannerComponent', () => {
  let component: DescuentoBannerComponent;
  let fixture: ComponentFixture<DescuentoBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescuentoBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescuentoBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
