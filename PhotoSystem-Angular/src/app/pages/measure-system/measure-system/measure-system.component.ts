import { Component } from '@angular/core';

@Component({
  selector: 'app-measure-system',
  templateUrl: './measure-system.component.html',
  styleUrls: ['./measure-system.component.scss']
})
export class MeasureSystemComponent {
   public content: boolean =  true;
   public btnGroupA: boolean =  false;
   public btnGroupB: boolean =  false;

   showGroupAMeasure(): void{
      this.btnGroupA = true;
      this.btnGroupB = false;
      this.content = false;
   }

   showGroupBMeasure(): void{
      this.btnGroupA = false;
      this.btnGroupB = true;
      this.content = false;
   }



}
