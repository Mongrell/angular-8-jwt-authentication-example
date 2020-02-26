import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { DummyData } from '../_models/dummyData';

@Injectable({
    providedIn: 'root'
})
export class InMemoryDb implements InMemoryDbService{
    constructor(){

    }

    createDb(){
        let DummyData: DummyData[] = [
            { Id: 1, Message: "Top Of the morning" },
            { Id: 2, Message: "Jack of all trades" },
            { Id: 3, Message: "The time has come" },
            { Id: 4, Message: "Such is the way of our trade" }
        ]

        return { DummyData }
    }
}