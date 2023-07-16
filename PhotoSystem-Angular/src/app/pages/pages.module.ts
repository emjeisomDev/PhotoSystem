import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { ConsumptionAnalysisComponent } from './consumption-analysis/consumption-analysis.component';
import { HomeComponent } from './home/home.component';
import { PowerOfAttorneyComponent } from './power-of-attorney/power-of-attorney.component';
import { MeasureSystemComponent } from './measure-system/measure-system/measure-system.component';
import { MeasureSystemModule } from './measure-system/measure-system.module';


@NgModule({
  declarations: [
    ConsumptionAnalysisComponent,
    HomeComponent,
    PowerOfAttorneyComponent,
    MeasureSystemComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MeasureSystemModule,
    AppMaterialModule
  ]
})
export class PagesModule { }
