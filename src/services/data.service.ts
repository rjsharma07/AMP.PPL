import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { locationArray, specializationArray, productArray, resultArray } from 'src/assets/dummy/data';
import { Location, Products, Result, Specialization } from 'src/models/common';
@Injectable()
export class DataService {
    location(): Observable<Location[]> {
        return of(locationArray)
    }
    special(): Observable<Specialization[]> {
        return of(specializationArray)
    }
    product(): Observable<Products[]> {
        return of(productArray)
    }
    result(): Observable<Result[]> {
        return of(resultArray);
    }
}