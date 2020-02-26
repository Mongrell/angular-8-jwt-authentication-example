import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DummyData } from '../_models/dummyData';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class InMemoryTestService{
    apiUrl = "localhost:4200/api";
    
    constructor(private http: HttpClient){

    }

    public GetAll(): Observable<DummyData[]>{
        return this.http.get<DummyData[]>(`${this.apiUrl}/DummyData`)
        .pipe(
            tap(data => console.log(JSON.stringify(data)))
        )
    }
}