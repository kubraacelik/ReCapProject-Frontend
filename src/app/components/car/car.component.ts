import { Component, OnInit } from '@angular/core';
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

  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCars();
    }
  
  getCars(){
    this.carService.getCarDetails().subscribe(response=>{
      this.car=response.data
      this.dataLoaded=true;
    })
    
  }
}

