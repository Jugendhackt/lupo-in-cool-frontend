import {Pipe, PipeTransform} from '@angular/core';

/*@Pipe({
  name: 'orderBy'
})*/
export class OrderByPipe implements PipeTransform {

  transform(value: Array<any>, args?: any): any {
    /*let sorts = args.split(';').map((arg) => arg.split(','));
    value = value.sort(((a, b) => {
      let vals = sorts.map((path) => {
        let tmpA = a;
        let tmpB = b;

        path.forEach((step) => {
          if (tmpA === undefined || tmpB === undefined) {
            return 0;
          }
          tmpA = tmpA[step];
          tmpB = tmpB[step];
          if (tmpA === undefined || tmpB === undefined) {
            return 0;
          }
        });

        return [tmpA, tmpB];
      });
      for (let val in vals) {
        if (val[0] === undefined || val[1] === undefined || (val[0] === val[1]))
          continue;
        else
          return val[0] - val[1];
      }

      return 0;
    }));

    return value;*/
    return value;
  }

}
