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
  constructor(private brandService:BrandService) { }
  dataLoaded=false;

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getbrands().subscribe(response=>{
      this.brand=response.data
      this.dataLoaded=true;
    })
  }

}