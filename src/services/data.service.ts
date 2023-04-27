import { Injectable } from '@angular/core';
import { Observable, of, throwError, catchError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Organization } from 'src/models/Organization';
import { UserCustomFields } from 'src/models/UserCustomFields';
@Injectable()
export class DataService {

    //Add base URL here
    baseUrl: string = "";

    constructor(private http: HttpClient) { }

    getFilters(): Observable<any> {
        //Add action URL with base URL
        // const url = this.baseUrl + "GetCategoryFilters";
        // return this.http.get(url).pipe(
        //     catchError(this.handleError) // then handle the error
        // );
        return this.http.get("../assets/Json_Files/Filter.json");
    }

    getOrganizations(organizationQuery: any = {}): Observable<Organization> {
        // const url = this.baseUrl + "GetOrganizationByQuery";
        // return this.http.post<Organization>(url, organizationQuery);
        return this.http.get<Organization>("../assets/Json_Files/Org.json");
    }

    getOrganizationById(id: any): Observable<Organization> {
    //   const url = this.baseUrl + "GetOrganizationById?Id="+id;
    //   return this.http.get<Organization>(url);
      return this.http.get<Organization>("../assets/Json_Files/Org.json");
  }

    getForms(): Observable<UserCustomFields> {
        return this.http.get<UserCustomFields>("../assets/Json_Files/UserCustomFields.json");
    }

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong.
          console.error(
            `Backend returned code ${error.status}, body was: `, error.error);
        }
        // Return an observable with a user-facing error message.
        return throwError(() => new Error('Something bad happened; please try again later.'));
      }
}