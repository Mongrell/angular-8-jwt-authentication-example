import { Component, OnInit } from '@angular/core';
import { AdvertService } from '../_services/advert.service';
import { Advert } from '@app/_models';

@Component({
    selector: 'app-advert-list',
    templateUrl: 'adverts-list.component.html'
})
export class AdvertListComponent implements OnInit{
    pageStatus: string;
    adverts: Advert[];

    constructor(private advertService: AdvertService){
        
    }
    
    ngOnInit(){
        this.pageStatus = 'Adverts are loading...'

        this.advertService.GetAllAdverts().subscribe({
            next: data => {
                this.adverts = data;
                this.adverts.length === 0 ? this.pageStatus = 'No adverts could be found...' 
                                          : this.pageStatus = 'Below are all the available adverts...'
            },
            error: err => {
                console.error(err);
            }
        })
    }
}