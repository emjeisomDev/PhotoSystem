import { Component } from '@angular/core';
import { fadeInOut , rotate} from '../../animations';

@Component({
   selector: 'app-sidenav',
   templateUrl: './sidenav.component.html',
   styleUrls: ['./sidenav.component.scss'],
   animations: [fadeInOut , rotate]
})
export class SidenavComponent {
   public sidenavClosed: boolean = false;
   public sidenavResizeTo!: number;
   public routeHome: string = "home";

   closeMenu():void{
      this.sidenavClosed = true;
      this.verifyAppLogoWidth();
      console.log(`Is sidenav close? ${this.sidenavClosed}. What's sidenav size? ${this.sidenavResizeTo}`);
    }

    public toggleMenu(): void{
      this.sidenavClosed = !this.sidenavClosed;
      this.verifyAppLogoWidth();
      console.log(`Is sidenav close? ${this.sidenavClosed}. What's sidenav size? ${this.sidenavResizeTo}`);
    }

    public verifyAppLogoWidth(): void{
      this.sidenavResizeTo = this.sidenavClosed ? 48 : 240;
    }

}
