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

    postLaunches(data: object): Observable<any> {
        return this.httpClient.post(environment.url + 'lancamento', data);
    }

    getLauncheById(id: any): Observable<any> {
        return this.httpClient.get(environment.url + 'lancamento/' + id);
    }

    deleteLaunche(id: any): Observable<any> {
        return this.httpClient.delete(environment.url + 'lancamento/' + id);
    }

    getCategorys(): Observable<any> {
        return this.httpClient.get(environment.url + 'categoria');
    }

    getCategoryById(id: any): Observable<any> {
        return this.httpClient.get(environment.url + 'categoria/' + id);
    }

    postCategorys(data: object): Observable<any> {
        return this.httpClient.post(environment.url + 'categoria', data);
    }

}