import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-comp',
  imports: [NgStyle],
  templateUrl: './input-comp.html',
  styleUrl: './input-comp.css',
})
export class InputComp {
  @Input() progressValue:number = 0
}
