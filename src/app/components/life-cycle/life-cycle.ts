import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { InputComp } from '../../reusable/input-comp/input-comp';
import { ComponentTabs } from '../../reusable/component-tabs/component-tabs';

@Component({
  selector: 'app-life-cycle',
  imports: [InputComp,ComponentTabs],
  templateUrl: './life-cycle.html',
  styleUrl: './life-cycle.css',
})
export class LifeCycle implements OnInit,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked{
  tabsList:string [] = ['Apply','Submit','Cancel']
  constructor(){
    console.log('constructor checked')
  }
  emitValue(tabName:string){
    console.log('tabNameeeeeeee Bhanu')
    this.tabsList.push(tabName)
  }
  ngOnInit(): void {
    console.log('ngOnInit checked')
    // we will use for api call
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit checked')
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked checked')
  }
  
  ngAfterViewInit(): void {
    console.log('Performence checked',performance.now())
    // to get reference of the component
  }
  ngAfterViewChecked(): void{
     console.log('ngAfterViewChecked checked')
  }
}
