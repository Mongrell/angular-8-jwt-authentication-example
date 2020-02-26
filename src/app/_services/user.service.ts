import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { IUserRegistraion } from '../_models/user';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll(): Observable<User[]> {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    create(user: IUserRegistraion): Observable<User> {
        return this.http.post<User>(`${environment.apiUrl}/auth/register`, user).pipe(
            tap(data => `Created User => ${JSON.stringify(data)}`)
        )
    }
}