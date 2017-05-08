import 'rxjs/add/operator/switchMap';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params  } from '@angular/router';

import { iProduct } from './products';
import {ProductService} from './product.service';
import { Subscription } from 'rxjs/Subscription';



@Component({

    moduleId: module.id,
    templateUrl: 'product-details.component.html'
})

export class ProductDetailsComponent implements OnInit {
    pageTitle: string = 'Product Detail: ';
    product: iProduct;
    errorMessage: string;
    private sub: Subscription;


    constructor(private _route: ActivatedRoute, private _router: Router, private _productService: ProductService) {
    }

    ngOnInit() {

        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getProduct(id);
               
            });

        
       // let id = +this._route.snapshot.params['id'];
      //  this.pageTitle += id;

    }

    //ngOnDestroy() {
    //    this.sub.unsubscribe();
    //}

       getProduct(id: number) {
           this._productService.getProduct(id).subscribe(
           product => this.product = product,
           error => this.errorMessage = <any>error);
    }

       onBack() {


           this._router.navigate([`/products/`]);
           
        
       }

    onRatingClicked(message: string): void {

        this.pageTitle = 'Product Detail: ' + message;
    }

}