import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  substr!: string;

  transform(value: string): string {
    if (value.length > 250) {
      this.substr = `${value.slice(1, 240)}...`;
    }

    return this.substr;
  }

}
