import { Pipe, PipeTransform } from '@angular/core';
import { CarDetailDto } from '../models/Cars/carDetailDto';

@Pipe({
  name: 'carFilter'
})
export class CarFilterPipe implements PipeTransform {

  transform(value: CarDetailDto[], filterCar: string): CarDetailDto[] {
    filterCar ? filterCar.toLocaleLowerCase():null;

    return filterCar
      ? value.filter(
        (car: CarDetailDto) =>
          car.description.toLocaleLowerCase().indexOf(filterCar) !== -1
      )
      : value;
  }
}
