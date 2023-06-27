import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { BodyComponent } from './body/body.component';
import { BodyPageComponent } from './body-page/body-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav-comp/sidenav/sidenav.component';
import { SidenavListComponent } from './sidenav-comp/sidenav-list/sidenav-list.component';


@NgModule({
  declarations: [
    BodyComponent,
    BodyPageComponent,
    FooterComponent,
    HeaderComponent,
    SidenavComponent,
    SidenavListComponent
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    AppMaterialModule,
  ],
  exports:[
    BodyPageComponent
  ]
})
export class NavigationModule { }
