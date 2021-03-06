"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var product_service_1 = require("./product.service");
var product_list_component_1 = require("./product-list.component");
var product_details_component_1 = require("./product-details.component");
var product_filter_pipe_1 = require("./product-filter.pipe");
var product_guard_service_1 = require("./product-guard.service");
var shared_module_1 = require("../shared/shared.module");
var ProductModule = (function () {
    function ProductModule() {
    }
    return ProductModule;
}());
ProductModule = __decorate([
    core_1.NgModule({
        declarations: [
            product_list_component_1.ProductListComponent,
            product_filter_pipe_1.ProductFilterPipe,
            product_details_component_1.ProductDetailsComponent
        ],
        imports: [
            shared_module_1.SharedModule,
            router_1.RouterModule.forChild([
                { path: 'products', component: product_list_component_1.ProductListComponent },
                { path: 'product/:id', canActivate: [product_guard_service_1.ProductDetailGuard], component: product_details_component_1.ProductDetailsComponent },
            ])
        ],
        providers: [
            product_service_1.ProductService,
            product_guard_service_1.ProductDetailGuard
        ],
    }),
    __metadata("design:paramtypes", [])
], ProductModule);
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map