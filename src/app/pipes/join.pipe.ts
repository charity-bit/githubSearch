import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {

  transform(value:[]): unknown {
   
              
    return value.join("\t\t\t#");
  }

}
