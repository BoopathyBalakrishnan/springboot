
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';
import { Slist } from './slist';
import { StudentDetail } from './CardDetails';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class SlistService {
    constructor(private http: Http) { }
    private slistUrl = 'slist/slist.json';
    private cardDetailsUrl = 'slist/cardDetails.json';

    getNames(): Observable<Slist[]> {
        console.log("getNames service invoked");
        return this.http.get(this.slistUrl)
            .map((response: Response) => <Slist[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    //Services for card
    fetchCardDetails(): Observable<StudentDetail[]> {
        return this.http.get(this.cardDetailsUrl)
            .map((response: Response) => <StudentDetail[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }



    private handleError(error: any) {

        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}