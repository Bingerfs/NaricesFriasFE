import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearVoluntarioComponent } from './crear-voluntario.component';

describe('CrearVoluntarioComponent', () => {
  let component: CrearVoluntarioComponent;
  let fixture: ComponentFixture<CrearVoluntarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearVoluntarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearVoluntarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
