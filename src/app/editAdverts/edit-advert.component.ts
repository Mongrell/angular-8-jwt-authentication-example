// TODO: Validation
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Advert, IRegisterAdvert } from '../_models/advert';
import { ActivatedRoute, Router } from '@angular/router';
import { Province } from '../_models/province';
import { ProvinceService } from '../_services/province.service';
import { City } from '@app/_models/city';
import { EmptyValidator } from '../register/password-match.validator';
import { AdvertService } from '../_services/advert.service';

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
                private provinceService: ProvinceService,
                private advertService: AdvertService){
    }

    ngOnInit(){
        this.editForm = this.fb.group({
            headline: ['', [Validators.required, EmptyValidator, Validators.minLength(10), Validators.maxLength(100)]],
            details: ['', [Validators.required, EmptyValidator, Validators.minLength(10), Validators.maxLength(1000)]],
            province: ['', [Validators.required, EmptyValidator]],
            city: ['', [Validators.required, EmptyValidator]],
            price: ['', [Validators.required, Validators.min(10000), Validators.max(100000000)]]
        });

        this.provinceService.getAll().subscribe({
            next: data => this.provinces = data,
            error: err => console.error(err)
        })

        this.editForm.get('province').valueChanges.subscribe({
            next: (value: String) => {
                this.cities = undefined;
                this.editForm.get('city').patchValue(null);

                let id = this.provinces.filter(x => x.name === value)[0].id;

                this.provinceService.getCitiesForProvince(id).subscribe({
                    next: data => this.cities = data,
                    error: err => console.error(err)
                })
            },
            error: err => console.error(err)
        })
    }

    onSubmission(){
        if (this.editForm.valid) {
            let advertRegister: IRegisterAdvert =  {
                Headline: this.editForm.get('headline').value.trim(),
                Details: this.editForm.get('details').value.trim(),
                Province: this.editForm.get('province').value.trim(),
                City: this.editForm.get('city').value.trim(),
                Price: this.editForm.get('price').value
            }

            this.advertService.CreateAdvert(advertRegister).subscribe({
                next: () => this.onSaveComplete(),
                error: err => console.error(err)
            })
        }
    }

    onSaveComplete(){
        this.editForm.reset();
        this.router.navigate(['/home']);
    }

    ngOnDestroy(){

    }
}