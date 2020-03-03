import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IRegisterAdvert, Advert } from '../_models/advert';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AdvertService{
    private readonly apiUrl = environment.apiUrl;

    constructor(private http: HttpClient){

    }

    public GetUserAdverts(): Observable<Advert[]>{
        return this.http.get<Advert[]>(`${this.apiUrl}/users/adverts`)
    }

    public CreateAdvert(advert: IRegisterAdvert): Observable<IRegisterAdvert>{
        return this.http.post<IRegisterAdvert>(`${this.apiUrl}/adverts`, advert);
    }
}