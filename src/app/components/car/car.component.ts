import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/Cars/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car:Car[] = [];
  dataLoaded=false;

  constructor(private carService:CarService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      params['brandId']
        ? this.getCarsByBrand(params['brandId'])
        :params['colorId']
        ? this.getCarsByColor(params['colorId'])
        : this.getCars();
    });
    }
  
  getCars(){
    this.carService.getCarDetails().subscribe(response=>{
      this.car=response.data
      this.dataLoaded=true;
    })
  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.car=response.data
      this.dataLoaded=true;
    })
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.car=response.data
      this.dataLoaded=true;
    })
  }
}

