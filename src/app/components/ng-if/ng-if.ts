import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  imports: [CommonModule],
  templateUrl: './ng-if.html',
  styleUrl: './ng-if.css',
})
export class NgIf {
   previewButton:boolean = true
   hideButton(){
      this.previewButton = false
   }
   showButton(){
     this.previewButton = true
   }
}
