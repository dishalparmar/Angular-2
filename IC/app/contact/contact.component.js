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
var forms_1 = require("@angular/forms");
var product_service_1 = require("../products/product.service");
var ContactComponent = (function () {
    function ContactComponent(_formBuilder, _productService) {
        this._formBuilder = _formBuilder;
        this._productService = _productService;
        this.pageTitle = 'Contact';
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.registerForm = this._formBuilder.group({
            name: '',
            email: ''
        });
    }; //ngOnInit end
    ContactComponent.prototype.onSubmit = function (registerForm) {
        var _this = this;
        this.username = this.registerForm.value['name'];
        this.email = this.registerForm.value['email'];
        this._productService.postContactData(this.username, this.email)
            .subscribe(function (data) { return _this.postMyData = JSON.stringify(data); }, function (error) { return console.log("Error HTTP"); }, function () { return console.log("Job Done"); });
        //console.log(this.registerForm.value);
        console.log("Username " + this.username + " Email " + this.email);
        this.registerForm.reset();
    };
    return ContactComponent;
}()); //ContactComponent end
ContactComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'foo',
        templateUrl: 'contact.component.html',
        styleUrls: ['contact.component.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, product_service_1.ProductService])
], ContactComponent);
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map