import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-class',
  imports: [NgClass,FormsModule],
  templateUrl: './ng-class.html',
  styleUrl: './ng-class.css',
})
export class NgClassComponent {
   divBgColor:string = 'bg-success'
   isChecked:boolean = false
   typedClass:string=''
   changeBgColor(val:any){
    this.divBgColor = val
   }
}
