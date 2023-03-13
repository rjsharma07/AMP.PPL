import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { locationArray, specializationArray, productArray, resultArray } from 'src/assets/dummy/data';
@Injectable()
export class DataService {
    location() {
        return of(locationArray)
    }
    special() {
        return of(specializationArray)
    }
    product() {
        return of(productArray)
    }
    result() {
        return of(resultArray)
    }
}