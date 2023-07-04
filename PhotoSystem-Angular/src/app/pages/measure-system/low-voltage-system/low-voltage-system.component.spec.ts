import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowVoltageSystemComponent } from './low-voltage-system.component';

describe('LowVoltageSystemComponent', () => {
  let component: LowVoltageSystemComponent;
  let fixture: ComponentFixture<LowVoltageSystemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LowVoltageSystemComponent]
    });
    fixture = TestBed.createComponent(LowVoltageSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
