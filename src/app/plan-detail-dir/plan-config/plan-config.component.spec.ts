import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanConfigComponent } from './plan-config.component';

describe('PlanConfigComponent', () => {
  let component: PlanConfigComponent;
  let fixture: ComponentFixture<PlanConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
