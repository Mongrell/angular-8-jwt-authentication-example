import { Component, OnInit } from '@angular/core';
import { Advert } from '@app/_models';
import { ActivatedRoute } from '@angular/router';
import { AdvertService } from '../_services/advert.service';
import { isNullOrUndefined } from 'util';

@Component({
    selector: 'app-advert-detail',
    templateUrl: 'advert.detail.component.html'
})
export class AdvertDetailComponent implements OnInit{
    pageStatus: string;
    advert: Advert;
    
    constructor(private route: ActivatedRoute,
                private advertService: AdvertService){

    }

    ngOnInit(){
        this.pageStatus = 'The advert is loading'

        this.route.paramMap.subscribe({
            next: params => {
                let id = +params.get('id');
                this.onGetId(id);
            },
            error: err => console.error(err)
        })
    }

    onGetId(advertId: number){
        this.advertService.GetAdvert(advertId).subscribe({
            next: data =>{ 
                this.advert = data;
                isNullOrUndefined(this.advert) ? this.pageStatus = 'Advert was not found'
                                               : this.pageStatus = 'Advert has loaded'
            },
            error: err => console.error(err)
        })
    }
}