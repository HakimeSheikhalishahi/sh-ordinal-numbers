import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal'
})
export class OrdinalPipe implements PipeTransform {
  ordinalVal = [
    'th',
    'st',
    'nd',
    'rd',
    'th',
    'th',
    'th',
    'th',
    'th',
    'th',
  ]
  transform(value: number, args?: any): string {
    if (!value) {
      return '';
    }
    if (value > 9 && value < 20) {
      return value + this.ordinalVal[0];
    }
    const num: number = +String(value).slice(-1);
    return value + this.ordinalVal[num];
  }

}
