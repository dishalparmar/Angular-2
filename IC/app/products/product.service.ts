import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { iProduct } from './products';
import { iProductDetails } from './productDetails';

@Injectable()

export class ProductService {



    private _productUrl = 'api/products/products.json';
    private _postContact = 'http://localhost:51099/api/contact';


    constructor(private _http: Http) { }

    getProducts(): Observable<iProduct[]> {

        return this._http.get(this._productUrl)
            .map((response: Response) => <iProduct[]>response.json())
      //      .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getProduct(id: number): Observable<iProduct> {

        return this.getProducts()
            .map((product: iProduct[]) => product.find(p => p.productId===id));

    }


    postContactData(name: string, email: any) {
        let body = JSON.stringify({ Username: name, Email: email });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers, method: 'post' });

        return this._http.post(this._postContact, body, options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {

        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }

}