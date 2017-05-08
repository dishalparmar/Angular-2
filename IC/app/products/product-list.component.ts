import {Component, OnInit } from '@angular/core';

import { iProduct } from './products';
import {ProductService} from './product.service';

@Component({

    moduleId: module.id, // <= to remove  .app/products/
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']

})

export class ProductListComponent implements OnInit {

    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = true;
    listFilter: string;
    products: iProduct[];
    errorMessage: string;

    constructor(private _productService: ProductService) {}

    toggleImage(): void {
        this.showImage = !this.showImage;
        
    }


    ngOnInit(): void {

        //Best way to get data from the service is to use ngOnInit life cicle hook
        this._productService.getProducts()
            .subscribe(
            products => this.products = products,
                error => this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void {

        this.pageTitle = 'Product List: ' + message;
    }

}