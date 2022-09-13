import { Pipe, PipeTransform } from '@angular/core';
import { CarDetailDto } from '../models/Cars/carDetailDto';
import { Color } from '../models/Colors/color';

@Pipe({
  name: 'colorFilter'
})
export class ColorFilterPipe implements PipeTransform {

  transform(value: Color[], filterColor: string): Color[] {
    filterColor ? filterColor.toLocaleLowerCase():null;

    return filterColor
      ? value.filter(
        (color: Color) =>
          color.colorName.toLocaleLowerCase().indexOf(filterColor) !== -1
      )
      : value;
  }
}
