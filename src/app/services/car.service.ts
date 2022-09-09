import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/Cars/car';
import { CarDetailDto } from '../models/Cars/carDetailDto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:44381/api/";

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getall"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetails():Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl + "cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getallbybrandid?id=" + brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getallbycolorid?id=" + colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarById(carId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getcardetails?id=" + carId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  

}