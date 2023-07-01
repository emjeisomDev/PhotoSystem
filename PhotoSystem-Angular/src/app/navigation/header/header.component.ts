import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public collapsed = true;
  public appLogoWidth!: number;

  public toggleMenu(): void{
    this.collapsed = !this.collapsed;
    this.verifyAppLogoWidth();
  }

  public verifyAppLogoWidth(): void{
    this.appLogoWidth =  this.collapsed ? 240 : 48;
  }

}
