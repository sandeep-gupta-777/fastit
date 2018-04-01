import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanCardsComponent } from './plan-cards.component';

describe('PlanCardsComponent', () => {
  let component: PlanCardsComponent;
  let fixture: ComponentFixture<PlanCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
