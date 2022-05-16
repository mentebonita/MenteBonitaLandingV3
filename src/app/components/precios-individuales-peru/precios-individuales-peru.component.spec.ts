import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreciosIndividualesPeruComponent } from './precios-individuales-peru.component';

describe('PreciosIndividualesPeruComponent', () => {
  let component: PreciosIndividualesPeruComponent;
  let fixture: ComponentFixture<PreciosIndividualesPeruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreciosIndividualesPeruComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreciosIndividualesPeruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
