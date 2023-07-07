import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LowVoltageSystemComponent } from './low-voltage-system/low-voltage-system.component';
import { MediumVoltageSystemComponent } from './medium-voltage-system/medium-voltage-system.component';

const routes: Routes = [
   {path:'low-voltage', component: LowVoltageSystemComponent},
   {path:'medium-voltage', component: MediumVoltageSystemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeasureSystemRoutingModule { }
