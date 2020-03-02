// TODO: Validation
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Advert } from '../_models/advert';
import { ActivatedRoute, Router } from '@angular/router';
import { Province } from '../_models/province';
import { ProvinceService } from '../_services/province.service';
import { City } from '@app/_models/city';

@Component({
    selector: 'app-edit-advert',
    templateUrl: 'edit-advert.component.html',
    styleUrls: ['edit-advert.component.css']
})
export class EditAdvertComponent implements OnInit, OnDestroy{
    pageTitle: string = 'Create A Property Listing';
    editForm: FormGroup;
    advert: Advert;
    provinces: Province[];
    cities: City[];

    constructor(private fb: FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private provinceService: ProvinceService){
    }

    ngOnInit(){
        this.editForm = this.fb.group({
            province: ['']
        });

        this.provinceService.getAll().subscribe({
            next: data => this.provinces = data,
            error: err => console.error(err)
        })
    }

    onProvinceChange(event){
        
    }

    onSubmission(){

    }

    ngOnDestroy(){

    }
}