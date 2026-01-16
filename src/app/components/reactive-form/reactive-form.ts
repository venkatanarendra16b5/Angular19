import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debug } from 'console';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {
  reactiveForm:FormGroup = new FormGroup({
    fName: new FormControl('',[Validators.required]),
    lName: new FormControl('',[Validators.required,Validators.minLength(5)]),
    userName: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl('pune'),
    zipCode: new FormControl(),
    isAgreed: new FormControl(false)
  })
  constructor(){
    // we can disable the field values from script also
    this.reactiveForm.controls['state'].disable()
    // we can do enable also from here
    this.reactiveForm.controls['state'].enable()
    // we can the the form is valid
    const isValid = this.reactiveForm.valid
  }
  formSubmit(){
    console.log(this.reactiveForm.value)
    debugger
  }
}
