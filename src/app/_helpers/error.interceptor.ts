import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from '@app/_services';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {

            //I removed this as it's not really realistic to log somebody out
            //on a 401. Sometimes ASP.NET Core return 401's for no reason, think it's
            //the dev server that has issues.

            // if (err.status === 401) {
            //     // auto logout if 401 response returned from api
            //     this.authenticationService.logout();
            //     location.reload(true);
            // }

            let error = 'Something went wrong. Contact Support';
            if(err.message) error = err.message;
            if(err.error) error = err.error;


            //const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}
