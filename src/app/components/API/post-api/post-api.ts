import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';

interface Car {
  CarId: number;
  Brand: string;
  Model: string;
  Year: string;
  Color: string;
  DailyRate: string;
  CarImage: string;
  RegNo: string;
}

@Component({
  selector: 'app-post-api',
  imports: [],
  templateUrl: './post-api.html',
  styleUrl: './post-api.css',
})
export class PostApi {

  carsList= signal<any []>([])
  carObj: Car = {
    CarId: 0,
    Brand: "",
    Model: "",
    Year: "",
    Color: "",
    DailyRate: "",
    CarImage: "",
    RegNo: ""
  };
  http = inject(HttpClient)
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
