import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptadosComponent } from './adoptados.component';

describe('AdoptadosComponent', () => {
  let component: AdoptadosComponent;
  let fixture: ComponentFixture<AdoptadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
