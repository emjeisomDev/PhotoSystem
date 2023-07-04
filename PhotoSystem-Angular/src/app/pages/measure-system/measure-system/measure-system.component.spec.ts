import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasureSystemComponent } from './measure-system.component';

describe('MeasureSystemComponent', () => {
  let component: MeasureSystemComponent;
  let fixture: ComponentFixture<MeasureSystemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeasureSystemComponent]
    });
    fixture = TestBed.createComponent(MeasureSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
