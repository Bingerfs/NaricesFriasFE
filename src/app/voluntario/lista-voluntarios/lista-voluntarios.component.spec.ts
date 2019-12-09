import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVoluntariosComponent } from './lista-voluntarios.component';

describe('ListaVoluntariosComponent', () => {
  let component: ListaVoluntariosComponent;
  let fixture: ComponentFixture<ListaVoluntariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaVoluntariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaVoluntariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
