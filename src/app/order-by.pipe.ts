import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: Array<any>, args?: any): any {
    

    return value;
  }

}
