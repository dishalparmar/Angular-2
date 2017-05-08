import { PipeTransform, Pipe } from '@angular/core';
import { iProduct } from './products';

@Pipe({

    name: "productFilter"

})


export class ProductFilterPipe implements PipeTransform {

    transform(value: iProduct[], filterBy: string): iProduct[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((product: iProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}