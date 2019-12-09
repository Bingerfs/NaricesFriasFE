import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgradecimientosCreateComponent } from './agradecimientos-create.component';

describe('AgradecimientosCreateComponent', () => {
  let component: AgradecimientosCreateComponent;
  let fixture: ComponentFixture<AgradecimientosCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgradecimientosCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgradecimientosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
