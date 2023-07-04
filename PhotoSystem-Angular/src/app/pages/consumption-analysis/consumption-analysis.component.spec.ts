import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumptionAnalysisComponent } from './consumption-analysis.component';

describe('ConsumptionAnalysisComponent', () => {
  let component: ConsumptionAnalysisComponent;
  let fixture: ComponentFixture<ConsumptionAnalysisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsumptionAnalysisComponent]
    });
    fixture = TestBed.createComponent(ConsumptionAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
