import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraviadoDetailComponent } from './extraviado-detail.component';

describe('ExtraviadoDetailComponent', () => {
  let component: ExtraviadoDetailComponent;
  let fixture: ComponentFixture<ExtraviadoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraviadoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraviadoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
