import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptadoDetailComponent } from './adoptado-detail.component';

describe('AdoptadoDetailComponent', () => {
  let component: AdoptadoDetailComponent;
  let fixture: ComponentFixture<AdoptadoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptadoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptadoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
