import { Interface } from "readline";

export class Car{
    CarId: number;
    Brand: string;
    Model: string;
    Year: string;
    Color: string;
    DailyRate: string;
    CarImage: string;
    RegNo: string;
    constructor(){
        this.CarId = 0;
        this.Brand='';
        this.Model = '';
        this.Year = '';
        this.Color = '';
        this.DailyRate = '';
        this.CarImage = '';
        this.RegNo = ''
    }
}
export interface ICarList{
   CarId: number;
    Brand: string;
    Model: string;
    Year: string;
    Color: string;
    DailyRate ?: string; // it is an optional field in this obj
    CarImage: string;
    RegNo: string;
}