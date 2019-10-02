import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraviadosComponent } from './extraviados.component';

describe('ExtraviadosComponent', () => {
  let component: ExtraviadosComponent;
  let fixture: ComponentFixture<ExtraviadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraviadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraviadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
