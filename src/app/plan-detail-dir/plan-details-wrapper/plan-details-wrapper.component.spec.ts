import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDetailsWrapperComponent } from './plan-details-wrapper.component';

describe('PlanDetailsWrapperComponent', () => {
  let component: PlanDetailsWrapperComponent;
  let fixture: ComponentFixture<PlanDetailsWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanDetailsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanDetailsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
