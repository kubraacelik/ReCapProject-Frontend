import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BrandResponseModel } from '../models/Brands/brandResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl='https://localhost:44381/api/brands/getall';

  constructor(private httpClient:HttpClient) { }

  getbrands():Observable<BrandResponseModel>{
    return this.httpClient.get<BrandResponseModel>(this.apiUrl);
  }
}