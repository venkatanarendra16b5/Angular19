import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor],
  templateUrl: './ng-for.html',
  styleUrl: './ng-for.css',
})
export class NgForComponent {
  cityList: Array<string> = ['pune','hyderabad','chennai','bangalore','vizag']
  employArray:any[] =[
    {
      empId:1,
      name:'Narendra'
    },
    {
      empId:2,
      name:'Nagendra'
    },
    {
      empId:3,
      name:'rajendra'
    },
    {
      empId:4,
      name:'raghavendra'
    },
  ]
}
