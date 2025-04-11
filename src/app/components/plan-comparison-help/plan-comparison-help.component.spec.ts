import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanComparisonHelpComponent } from './plan-comparison-help.component';

describe('PlanComparisonHelpComponent', () => {
  let component: PlanComparisonHelpComponent;
  let fixture: ComponentFixture<PlanComparisonHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanComparisonHelpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanComparisonHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
