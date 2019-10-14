import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadosCreateComponent } from './buscados-create.component';

describe('BuscadosCreateComponent', () => {
  let component: BuscadosCreateComponent;
  let fixture: ComponentFixture<BuscadosCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscadosCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
