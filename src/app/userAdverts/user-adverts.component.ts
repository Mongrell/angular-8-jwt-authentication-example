import { Component, OnInit } from '@angular/core';
import { Advert, TestAdverts } from '../_models/advert';

@Component({
    selector: 'app-user-adverts',
    templateUrl: 'user-adverts.component.html'
})
export class UserAdvertsComponent implements OnInit{
    adverts: Advert[];
    
    constructor(){

    }

    ngOnInit(){
        this.adverts = TestAdverts;
    }
}