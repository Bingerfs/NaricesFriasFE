import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadoDetailComponent } from './buscado-detail.component';

describe('BuscadoDetailComponent', () => {
  let component: BuscadoDetailComponent;
  let fixture: ComponentFixture<BuscadoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscadoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
