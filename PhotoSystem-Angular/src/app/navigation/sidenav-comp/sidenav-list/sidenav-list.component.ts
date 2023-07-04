import { Component, Input } from '@angular/core';
import { sidenavData } from 'src/app/model/sidenav-data';
import { fadeInOut } from '../../animations';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss'],
  animations: [fadeInOut]
})
export class SidenavListComponent {
   @Input() sidenavClosed: boolean = true;
   @Input() sidenavResizeTo!: number;
   sidenavData = sidenavData;
}
