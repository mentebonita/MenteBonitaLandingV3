import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioPeruComponent } from './inicio-peru.component';

describe('InicioPeruComponent', () => {
  let component: InicioPeruComponent;
  let fixture: ComponentFixture<InicioPeruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioPeruComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioPeruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
