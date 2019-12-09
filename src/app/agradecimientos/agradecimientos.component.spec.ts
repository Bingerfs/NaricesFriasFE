import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgradecimientosComponent } from './agradecimientos.component';

describe('AgradecimientosComponent', () => {
  let component: AgradecimientosComponent;
  let fixture: ComponentFixture<AgradecimientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgradecimientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgradecimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
