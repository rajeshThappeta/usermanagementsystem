import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {

  //take a number a arg and return its square
  transform(value: number, ...args: unknown[]): number {
    return value*value;
  }

}
