import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { CustomerService } from '../../services/customer-service';
import {IuserList} from '../../model/user'

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin implements OnInit {
  @ViewChild('adminInput') adminName: ElementRef | undefined
  http = inject(HttpClient)
  customerService = inject(CustomerService)
  usersList = signal<IuserList[]>([])
  ngOnInit(): void {
    this.fetchCustomers()
    this.customerService.tokenRefresh$.subscribe((res) => {
      if (res)
        this.fetchCustomers()
    })
  }
  fetchCustomers() {
    this.http.get('https://projectapi.gerasim.in/api/UserApp/GetAllUsers').subscribe((res: any) => {
      console.log('usersall', res.data)
      if(res.result)
      this.usersList.set(res.data)
    })
  }
  onSubmit() {
    let city = this.adminName?.nativeElement.value
    if (this.adminName)
      this.adminName.nativeElement.style.color = 'red'
  }
}
