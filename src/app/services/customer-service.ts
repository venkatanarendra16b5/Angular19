import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  Url:String = 'https://freeapi.miniprojectideas.com/api/CarRentalApp'
  constructor(private http: HttpClient){

  }
  getCustomers(){
    return this.http.get(this.Url+"/GetCustomers")
  }
  createCustomer(obj:Object){
    return this.http.post(this.Url+"/CreateNewCustomer",obj)
  }
}
