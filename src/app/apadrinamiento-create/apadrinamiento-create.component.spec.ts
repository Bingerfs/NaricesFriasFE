import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApadrinamientoCreateComponent } from './apadrinamiento-create.component';

describe('ApadrinamientoCreateComponent', () => {
  let component: ApadrinamientoCreateComponent;
  let fixture: ComponentFixture<ApadrinamientoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApadrinamientoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApadrinamientoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
