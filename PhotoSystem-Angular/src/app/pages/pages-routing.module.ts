import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConsumptionAnalysisComponent } from './consumption-analysis/consumption-analysis.component';
import { MeasureSystemComponent } from './measure-system/measure-system/measure-system.component';
import { PowerOfAttorneyComponent } from './power-of-attorney/power-of-attorney.component';

const routes: Routes = [
   {path: 'home', component: HomeComponent},
   {path:'', pathMatch: 'full', redirectTo: 'home'},
   {path:'consumption-analysis', component: ConsumptionAnalysisComponent},
   {path: 'measure-system', component: MeasureSystemComponent},
   {path:'power-of-attorney', component: PowerOfAttorneyComponent},
   {
      path: 'measure-system',
      loadChildren: () => import('./measure-system/measure-system.module').then(m => m.MeasureSystemModule)
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
