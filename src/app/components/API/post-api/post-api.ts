import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, inject, OnInit, signal } from '@angular/core';
import { Car, ICarList } from '../../../model/car';

@Component({
  selector: 'app-post-api',
  imports: [],
  templateUrl: './post-api.html',
  styleUrl: './post-api.css',
})
export class PostApi implements OnInit,AfterViewInit{

  carsList= signal<ICarList []>([])
  carObj: Car = new Car()
  http = inject(HttpClient)
  ngOnInit(): void {
    this.getCars()
  }
  ngAfterViewInit(): void {
    console.log('loading time of comp',performance.now())
  }
  getCars(){
    this.http.get("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars").subscribe((res:any)=>{
       this.carsList.set(res)
    })
  }
  saveCar(){
     this.http.post("https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewCar",this.carObj).subscribe((res:any)=>{
       if(res.result)
       {
        alert('car created successfully')
        this.getCars
       }
       else{
        alert('error while creating car')
       }
     })
  }
  onEdit(val:any){
     this.carObj = val
  }
  onDelete(carId:number){
    const isDelete = confirm('are you sure want to delete this Car')
    if(isDelete){
      this.http.delete(`https://freeapi.miniprojectideas.com/api/CarRentalApp/DeleteCarbyCarId?carid=${carId}`).subscribe((res:any)=>{
        if(res.result){
          alert('car Deleted Successfully')
          this.getCars()
        }
        else{
          alert('error while creating Car')
        }
      })
    }
  }
  updateCar(){
    this.http.put('https://freeapi.miniprojectideas.com/api/CarRentalApp/UpdateCar',this.carObj).subscribe((res:any)=>{
      if(res.result)
       {
        alert('car updated successfully')
        this.getCars
       }
       else{
        alert('error while updating car')
       }
    })
  }

}
