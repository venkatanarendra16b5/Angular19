import { Component } from '@angular/core';
import { DatePipe, JsonPipe, LowerCasePipe, NgFor, UpperCasePipe } from '@angular/common';
import { NaPipe } from '../../pipes/na-pipe';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor,JsonPipe,DatePipe,UpperCasePipe,LowerCasePipe,NaPipe],
  templateUrl: './ng-for.html',
  styleUrl: './ng-for.css',
})
export class NgForComponent {
  cityList: Array<string> = ['pune','hyderabad','chennai','bangalore','vizag']
  userName:string ='Bhanu Prasad'
  userObj = {
    name:'narendra',
    occupation:'software engineeer'
  }
  dateVal:Date = new Date()
  employArray:any[] =[
    {
      empId:1,
      name:'Narendra'
    },
    {
      empId:2,
    },
    {
      empId:3,
      name:null
    },
    {
      empId:4,
      name:''
    },
  ]
}
