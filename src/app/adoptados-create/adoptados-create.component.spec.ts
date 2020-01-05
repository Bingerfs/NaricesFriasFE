import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptadosCreateComponent } from './adoptados-create.component';

describe('AdoptadosCreateComponent', () => {
  let component: AdoptadosCreateComponent;
  let fixture: ComponentFixture<AdoptadosCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptadosCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptadosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
