import { Pipe, PipeTransform } from '@angular/core';
import { CarDetailDto } from '../models/Cars/carDetailDto';
import { Color } from '../models/Colors/color';

@Pipe({
  name: 'colorFilter'
})
export class ColorFilterPipe implements PipeTransform {

  transform(value: Color[], filterColor: string): Color[] {
    filterColor = filterColor ? filterColor.toLocaleLowerCase():"";

    return filterColor ? value.filter(
        (co: Color) => co.colorName.toLocaleLowerCase().indexOf(filterColor) !== -1) : value;
        
  }
}
