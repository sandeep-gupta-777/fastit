import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettyprint'
})
export class PrettyprintPipe implements PipeTransform {

  transform(val) {
    let transformedJson =  JSON.stringify(val, undefined, 2);

    console.log(transformedJson);
    return transformedJson;
  }

}
