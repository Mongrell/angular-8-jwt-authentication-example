import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { UserService, AuthenticationService } from '@app/_services';
import { DummyData } from '../_models/dummyData';
import { InMemoryTestService } from '../_services/In-memory-test.service';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    constructor(private userService: UserService) { }

    ngOnInit() {

    }
}