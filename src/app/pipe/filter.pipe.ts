import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Product[], filterText: string): Product[] {

    if(!value || !filterText){
      return value
    }

    return value.filter(p => p.product_name.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) !== -1)

  }

}
