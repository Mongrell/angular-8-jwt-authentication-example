// TODO: Validation

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Advert } from '../_models/advert';
import { ActivatedRoute, Router } from '@angular/router';
import { Provinces } from '../_models/province';

@Component({
    selector: 'app-edit-advert',
    templateUrl: 'edit-advert.component.html',
    styleUrls: ['edit-advert.component.css']
})
export class EditAdvertComponent implements OnInit, OnDestroy{
    pageTitle: string;
    editForm: FormGroup;
    advert: Advert;

    //Fake provinces
    provinces = Provinces;

    constructor(private fb: FormBuilder,
                private route: ActivatedRoute,
                private router: Router){

    }

    ngOnInit(){

    }

    onSubmission(){

    }

    ngOnDestroy(){

    }
}