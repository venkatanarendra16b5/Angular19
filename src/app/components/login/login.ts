import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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
    "EmailId":'',
    "Password":''
   }
   onSubmitForm(){
     this.http.post('https://projectapi.gerasim.in/api/UserApp/login',this.loginObj).subscribe({
      next:(res:any)=>{
         localStorage.setItem('token',res.data.token)
         localStorage.setItem('userId',res.data.userId)
         localStorage.setItem('refreshToken',res.data.refreshToken)
         localStorage.setItem('email',res.data.emailId)
         if(res.result)
         this.router.navigateByUrl('admin')
      },
      error:(error)=>{
         console.log('error',error)
         alert('something went wrong while login')
      },
      complete:()=>{
        console.log('completed')
      }
    })
   }
}
