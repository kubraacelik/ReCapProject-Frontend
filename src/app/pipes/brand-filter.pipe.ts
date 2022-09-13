import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/Brands/brand';
import { CarDetailDto } from '../models/Cars/carDetailDto';

@Pipe({
  name: 'brandFilter'
})
export class BrandFilterPipe implements PipeTransform {

  transform(value: Brand[], filterBrand: string): Brand[] {
    filterBrand ? filterBrand.toLocaleLowerCase():null;

    return filterBrand
      ? value.filter(
        (brand: Brand) =>
          brand.brandName.toLocaleLowerCase().indexOf(filterBrand) !== -1
      )
      : value;
  }
}