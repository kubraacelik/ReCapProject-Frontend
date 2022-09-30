import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/Brands/brand';
import { Car } from 'src/app/models/Cars/car';
import { CarDetailDto } from 'src/app/models/Cars/carDetailDto';
import { CarImage } from 'src/app/models/Cars/carImage';
import { Color } from 'src/app/models/Colors/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars : Car[] = [];
  carDetails: CarDetailDto[] = [];
  dataLoaded=false;
  filterCar = '';
  colors : Color[] = [];
  filterColor:number = 0;
  brands : Brand[] = [];
  filterBrand:number = 0;
  brandFilter: number;


  constructor(private carService:CarService, 
              private activatedRoute:ActivatedRoute,
              private brandService:BrandService,
              private colorService:ColorService
              ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      params['brandId'] ? this.getCarsByBrand(params['brandId']) 
      :params['colorId'] ? this.getCarsByColor(params['colorId']) 
      : this.getCarDetails();
    });
    }

  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data;

      this.dataLoaded=true;
    })
  }

  getCarDetails(){
    this.carService.getCarDetails().subscribe(response => {
      this.carDetails=response.data;
      console.log(this.carDetails);
    })
  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.carDetails=response.data
      this.dataLoaded=true;
    })
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.carDetails=response.data
      this.dataLoaded=true;
    })
  }

  getSelectedBrand(brandId: number){
    if(this.brandFilter==brandId) return true;
    else return false; 
  }
  getSelectedColor(colorId: number){
    if(this.filterColor==colorId) return true;
    else return false; 
  }
}
