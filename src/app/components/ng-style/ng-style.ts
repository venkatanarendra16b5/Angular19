import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  imports: [NgStyle],
  templateUrl: './ng-style.html',
  styleUrl: './ng-style.css',
})
export class NgStyleComponent {
  backgroundColor:string='green'
  classObj:any= {
    'background-color':'red',
    'width':'200px',
    'height':'100px'
  }
}
