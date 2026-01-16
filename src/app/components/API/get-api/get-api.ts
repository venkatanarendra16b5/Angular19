import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css',
})
export class GetApi {
   userList = signal<any[]>([])
   productList = signal<any[]>([])
   constructor(private http:HttpClient){

   }
   getUsers(){
     this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
         this.userList.set(res)
     })
   }
   getProducts(){
    this.http.get("https://fakestoreapi.com/products").subscribe((res:any)=>{
      this.productList.set(res)
    })
   }
}
