import { NgFor, NgIf,  } from '@angular/common';
import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-ng-temp-ng-container',
  imports: [NgFor,NgIf],
  templateUrl: './ng-temp-ng-container.html',
  styleUrl: './ng-temp-ng-container.css',
})
export class NgTempNgContainer{
  isLoading: boolean = true
  constructor(private cd:ChangeDetectorRef){
    setTimeout(()=>{
       this.isLoading = false
       this.cd.detectChanges() // to dect changes and rerender the UI because current it's not detecting the changes
    },3000)
  }
  // ngOnInit(): void {
  //   this.isLoading = false
  // }
   employArray:any[] = [
      {empId:1,isActive:true,name:'teja',city:'hyderabad',contact:1234},
      {empId:2,isActive:false,name:'sree',city:'cyderabad',contact:12345},
      {empId:3,isActive:true,name:'Are',city:'eyderabad',contact:123456},
      {empId:4,isActive:false,name:'chow',city:'nyderabad',contact:1234567},
      {empId:5,isActive:true,name:'dary',city:'myderabad',contact:12345678},
      {empId:6,isActive:false,name:'yes',city:'kyderabad',contact:123456789}
   ]
}
