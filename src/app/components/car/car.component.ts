import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/Cars/car';
import { CarDetailDto } from 'src/app/models/Cars/carDetailDto';
import { CarImage } from 'src/app/models/Cars/carImage';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars : Car[] = [];
  carDetails: CarDetailDto[] = [];
  dataLoaded=false;
  

  constructor(private carService:CarService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      params['brandId']
        ? this.getCarsByBrand(params['brandId'])
        :params['colorId']
        ? this.getCarsByColor(params['colorId'])
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
    })
  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })
  }
}