import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-user-profile',
    templateUrl: 'user.profile.component.html'
})
export class UserProfileComponent implements OnInit{
    constructor(private fb: FormBuilder,
                ){

    }

    ngOnInit(){

    }
}