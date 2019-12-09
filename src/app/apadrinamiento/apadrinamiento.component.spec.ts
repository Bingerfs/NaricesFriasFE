import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApadrinamientoComponent } from './apadrinamiento.component';

describe('ApadrinamientoComponent', () => {
  let component: ApadrinamientoComponent;
  let fixture: ComponentFixture<ApadrinamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApadrinamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApadrinamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
