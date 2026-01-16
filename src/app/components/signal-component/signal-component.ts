import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal-component',
  imports: [],
  templateUrl: './signal-component.html',
  styleUrl: './signal-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalComponent {
  firstName=signal<string>('Narendra')
  lastName:string = 'Nallabothula'
  firstNameChange(){
    this.firstName.set('Venkata narendra')
  }
  lastNameChange(){
    this.lastName = 'Nallabothu'
  }
  constructor(){
     setTimeout(()=>{
      console.log('initial')
      this.lastName = 'Nallabothu'
     },5000)
  }
}
