import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Province } from '../_models/province';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { City } from '../_models/city';

@Injectable({
    providedIn: 'root'
})
export class ProvinceService{
    private readonly apiUrl = environment.apiUrl;

    constructor(private http: HttpClient){

    }

    getAll(): Observable<Province[]>{
        return this.http.get<Province[]>(`${this.apiUrl}/Provinces`);
    }

    getCitiesForProvince(id: number): Observable<City[]>{
        return this.http.get<City[]>(`${this.apiUrl}/provinces/${id}`);
    }
}