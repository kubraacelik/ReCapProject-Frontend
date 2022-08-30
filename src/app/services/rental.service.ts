import { RentalResponseModel } from './../models/Rentals/rentalResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl="https://localhost:44381/api/rentals/getrentaldetails";
  
  constructor(private httpClient:HttpClient) { }

  getRentalDetails():Observable<RentalResponseModel>{
    return this.httpClient.get<RentalResponseModel>(this.apiUrl);
  }
}