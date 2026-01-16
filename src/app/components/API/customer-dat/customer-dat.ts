import { Component } from '@angular/core';
import { CustomerService } from '../../../services/customer-service';

@Component({
  selector: 'app-customer-dat',
  imports: [],
  templateUrl: './customer-dat.html',
  styleUrl: './customer-dat.css',
})
export class CustomerDat {
  constructor(private cusv:CustomerService){

  }
  customerObj =  {
    "name":'',
    "occupation":'',
    "Age":''
  }
  customersList: any[] = []
  getListOfCustomers(){
    this.cusv.getCustomers().subscribe((res:any)=>{
      if(res.result){
         this.customersList = res
      }
    })
  }
  createCustomer(){
     this.cusv.createCustomer(this.customerObj).subscribe((res:any)=>{
        if(res.result){
           alert('user created successfully')
           this.getListOfCustomers()
        }
     })
  }

}
