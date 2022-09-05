import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/Brands/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brand:Brand[]=[];
  dataLoaded=false;
  currentBrand? : Brand | null;
  

  constructor(private brandService:BrandService) { }
  

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getbrands().subscribe(response=>{
      return this.brand=response.data;
      
    })
  }
  setCurrentBrand(brand:Brand){
    this.currentBrand = brand;
  }
  resetCurrentBrand(){
    this.currentBrand=null;
  }
  getCurrentBrandClass(brand:Brand){
    if(brand==this.currentBrand){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }

  getAllBrandClass(){
    if(!this.currentBrand){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
}
