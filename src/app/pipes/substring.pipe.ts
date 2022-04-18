import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'substring'
})
export class SubstringPipe implements PipeTransform {
  substr!:string;
  transform(value:string): unknown {
    

    if(value.length > 20){
      this.substr = `${value.slice(0,200)}...`

    }
    return this.substr;
  }

}
