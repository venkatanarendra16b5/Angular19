import { Component, Input, Output, EventEmitter, output } from '@angular/core';

@Component({
  selector: 'app-component-tabs',
  imports: [],
  templateUrl: './component-tabs.html',
  styleUrl: './component-tabs.css',
})
export class ComponentTabs {
   @Input() tabsList: string[] = []
   @Output() onTabClicked = new EventEmitter<string>
   tabChange(tabName:string){
    console.log('tabName',tabName)
    this.onTabClicked.emit(tabName)
   }
}
