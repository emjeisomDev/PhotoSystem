import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyPageComponent } from './body-page/body-page.component';

const routes: Routes = [
   {
      path:'',
      component: BodyPageComponent,
      loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
