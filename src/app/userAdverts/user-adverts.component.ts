import { Component, OnInit } from '@angular/core';
import { Advert } from '../_models/advert';
import { AdvertService } from '../_services/advert.service';

@Component({
    selector: 'app-user-adverts',
    templateUrl: 'user-adverts.component.html'
})
export class UserAdvertsComponent implements OnInit{
    pageStatus: string;
    adverts: Advert[];
    
    constructor(private advertService: AdvertService){

    }

    ngOnInit(){
        this.pageStatus = 'Your property listings are loading...'

        this.advertService.GetUserAdverts().subscribe({
            next: data =>{ 
                this.adverts = data; 
                this.adverts.length === 0 ? this.pageStatus = 'You seem to have no properies listed...' 
                                          : this.pageStatus = 'Below are your listed properties...' 
            },
            error: err => console.error(err)
        })
    }
}