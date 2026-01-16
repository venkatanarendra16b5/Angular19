import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  firstName: string = 'Narendra';
  lastName: string = 'Nallabothula';
  village: string = 'Vemulabanda';
  isfromVillage: boolean = true;
  divClassName: string = 'bg-primary'
  btnClass:string= 'btn btn-success'
  selectedCity:string =''
  constructor(private router: Router){
    // whatever we call inside the constructor will called on page load
    console.log(this.firstName)
  }
  navigateToControStatement(){
    this.router.navigateByUrl('/controlStatement')
  }
  onClickSubmit(){
    alert('submit button was clicked')
  }
  onChangeOption(){
    console.log('value changed')
  }
}
