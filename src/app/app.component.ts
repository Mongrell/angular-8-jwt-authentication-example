﻿import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { User } from './_models';

@Component({ 
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    currentUser: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    sellAHouseClick(){
        if(!this.currentUser) this.router.navigate(['/register']);

        this.router.navigate(['/sellAHouse'])
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}