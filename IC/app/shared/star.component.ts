import {Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({

    moduleId: module.id,
    selector: 'i-star',

    templateUrl: 'star.component.html',
    styleUrls: ['star.component.css']
})


export class StarComponent implements OnChanges {

    //@Input used to send data from parent component 'product-list.component' 
    @Input() rating: number;
    starWidth: number;
    //@Output used to send data out from child component (this one) 'star.component' 
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {

        this.starWidth = this.rating * 86 / 5;
    }

    onClick(): void {

        this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
    }
}