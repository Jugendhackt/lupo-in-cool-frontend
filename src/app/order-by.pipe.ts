import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: Array, args?: any): any {
    return value.sort((a, b) => {
      args.split(',').map((index) => {
        a = a[index];
        b = b[index];
      });

      return a - b;
    });
  }

}
