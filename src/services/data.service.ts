import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class DataService {

    //Add base URL here
    baseUrl: string = "";

    constructor(private http: HttpClient) {}

    getFilters(): Observable<any> {
        //Add action URL with base URL
        // const url = this.baseUrl + "";
        //return this.http.get(url);
        return this.http.get("../assets/Json_Files/Filter.json");
    }

    getOrganizations(payload: any = {}): Observable<any> {
        // const url = this.baseUrl + "";
        // return this.http.post(url, payload);
        return this.http.get("../assets/Json_Files/Org.json");
    }
}