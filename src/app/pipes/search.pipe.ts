import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], search: string): any[] {
    if(!search) return value;

    return value.filter(v =>
      v.name.toLowerCase().indexOf(search.toLowerCase()) > -1
    )
  }

}
