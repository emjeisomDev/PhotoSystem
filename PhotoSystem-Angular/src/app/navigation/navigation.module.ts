import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavigationRoutingModule } from './navigation-routing.module';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav-comp/sidenav/sidenav.component';
import { SidenavListComponent } from './sidenav-comp/sidenav-list/sidenav-list.component';


@NgModule({
  declarations: [
    BodyComponent,
    FooterComponent,
    HeaderComponent,
    SidenavComponent,
    SidenavListComponent
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule
  ],
  exports:[
   HeaderComponent,
   SidenavComponent,
   BodyComponent,
   FooterComponent
  ]
})
export class NavigationModule { }
