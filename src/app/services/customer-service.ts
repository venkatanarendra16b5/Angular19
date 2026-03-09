import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  tokenExpired$: Subject<boolean> = new Subject<boolean>()
  tokenRefresh$: Subject<boolean> = new Subject<boolean>()
  Url:String = 'https://freeapi.miniprojectideas.com/api/CarRentalApp'
  authUrl:string = 'https://projectapi.gerasim.in/api/UserApp/'
  constructor(private http: HttpClient){

  }
  getRefreshToken(){
    let payLoad = {
      emailId:localStorage.getItem('email'),
      token:localStorage.getItem('token'),
      refreshToken:localStorage.getItem('refreshToken')
    }
    return this.http.post(`${this.authUrl}refresh`,payLoad)
  }
  getCustomers(){
    return this.http.get(this.Url+"/GetCustomers")
  }
  createCustomer(obj:Object){
    return this.http.post(this.Url+"/CreateNewCustomer",obj)
  }
}
