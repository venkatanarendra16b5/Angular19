import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-statement',
  imports: [FormsModule],
  templateUrl: './control-statement.html',
  styleUrl: './control-statement.css',
})
export class ControlStatement {
   isVisible:boolean=true
   weekDay:string=''
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
