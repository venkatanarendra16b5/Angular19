import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import { CustomerService } from '../../services/customer-service';

@Component({
  selector: 'app-layout',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout implements OnInit{
  router = inject(Router)
  customerService = inject(CustomerService)
  ngOnInit(): void {
    this.customerService.tokenExpired$.subscribe((res)=>{
       if(res){
          this.customerService.getRefreshToken().subscribe((result:any)=>{
            {
              if(result.result){
                localStorage.setItem('token',result.data.token)
                localStorage.setItem('refreshToken',result.data.refreshToken)
                this.customerService.tokenRefresh$.next(true)
              }
              else{
                this.router.navigateByUrl('login')
              }
            }

          })
       }
    })
  }
   onLogoff(){
     localStorage.clear()
     this.router.navigateByUrl('login')
   }
}
