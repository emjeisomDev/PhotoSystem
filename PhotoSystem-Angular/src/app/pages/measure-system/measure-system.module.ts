import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeasureSystemRoutingModule } from './measure-system-routing.module';
import { LowVoltageSystemComponent } from './low-voltage-system/low-voltage-system.component';
import { MediumVoltageSystemComponent } from './medium-voltage-system/medium-voltage-system.component';


@NgModule({
  declarations: [
    LowVoltageSystemComponent,
    MediumVoltageSystemComponent
  ],
  imports: [
    CommonModule,
    MeasureSystemRoutingModule
  ]
})
export class MeasureSystemModule { }
