import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class apiService {

    api = environment.url;

    constructor(
        private httpClient: HttpClient
    ) { }

    getLaunches(): Observable<any> {
        return this.httpClient.get(environment.url + 'lancamento');
    }

    getCategorys(): Observable<any> {
        return this.httpClient.get(environment.url + 'categoria');
    }

    getLauncheById(id: any): Observable<any> {
        return this.httpClient.get(environment.url + 'lancamento/' + id);
    }

}