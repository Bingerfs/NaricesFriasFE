import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraviadosCreateComponent } from './extraviados-create.component';

describe('ExtraviadosCreateComponent', () => {
  let component: ExtraviadosCreateComponent;
  let fixture: ComponentFixture<ExtraviadosCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraviadosCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraviadosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
