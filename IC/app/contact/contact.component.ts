import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Http} from '@angular/http';
import {ProductService} from '../products/product.service';

@Component({

    moduleId: module.id,
    selector: 'foo',
    templateUrl: 'contact.component.html',
    styleUrls:['contact.component.css']

})

export class ContactComponent implements OnInit {
    pageTitle: string = 'Contact';
    registerForm: FormGroup;
    username: string;
    email: any;
    postMyData: string;


    constructor(private _formBuilder: FormBuilder, private _productService: ProductService) { }


    ngOnInit() {

        this.registerForm = this._formBuilder.group({

            name: '',
            email: ''

        })


    } //ngOnInit end


    onSubmit(registerForm:any){

        this.username = this.registerForm.value['name'];
        this.email = this.registerForm.value['email'];

        this._productService.postContactData(this.username, this.email)
            .subscribe(
            (data: any) => this.postMyData = JSON.stringify(data),
            (error:any) => console.log("Error HTTP"),
            () => console.log("Job Done")
            );

        //console.log(this.registerForm.value);


        console.log("Username " + this.username + " Email " + this.email);
        this.registerForm.reset();
    }

} //ContactComponent end

