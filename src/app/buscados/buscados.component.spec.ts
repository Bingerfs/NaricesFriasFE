import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadosComponent } from './buscados.component';

describe('BuscadosComponent', () => {
  let component: BuscadosComponent;
  let fixture: ComponentFixture<BuscadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
