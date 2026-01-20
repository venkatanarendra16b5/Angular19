import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  router = inject(Router)
  http = inject(HttpClient)
   loginObj={
    "userName":'',
    "password":''
   }
   onSubmitForm(){
     this.http.post('https://projectapi.gerasim.in/api/UserApp/login',this.loginObj).subscribe((res:any)=>{
        localStorage.setItem('userId',res.data.userId)
     },error=>{
      alert('Wrong Credentials')
     })
   }
}
