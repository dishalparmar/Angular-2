import {NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {ProductService} from './product.service';
import { ProductListComponent } from './product-list.component';
import { ProductDetailsComponent } from './product-details.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductDetailGuard } from './product-guard.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        ProductListComponent,
        ProductFilterPipe,
        ProductDetailsComponent
    ],

    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            { path: 'product/:id', canActivate: [ProductDetailGuard], component: ProductDetailsComponent},
           ])
    ],
    providers: [
        ProductService,
        ProductDetailGuard
    ],

})

export class ProductModule { }