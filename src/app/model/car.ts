export class Car{
    carId: number;
    brand: string;
    model: string;
    year: string;
    color: string;
    dailyRate: string;
    carImage: string;
    regNo: string;
    constructor(){
        this.carId = 0;
        this.brand='';
        this.model = '';
        this.year = '';
        this.color = '';
        this.dailyRate = '';
        this.carImage = '';
        this.regNo = ''
    }
}
export interface ICarList{
    carId: number;
    brand: string;
    model: string;
    year: string;
    color: string;
    dailyRate ?: string; // it is an optional field in this obj
    carImage: string;
    regNo: string;
}