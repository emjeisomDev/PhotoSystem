import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumVoltageSystemComponent } from './medium-voltage-system.component';

describe('MediumVoltageSystemComponent', () => {
  let component: MediumVoltageSystemComponent;
  let fixture: ComponentFixture<MediumVoltageSystemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediumVoltageSystemComponent]
    });
    fixture = TestBed.createComponent(MediumVoltageSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
