import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';;

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RestService {

  constructor(private http: Http) {
  }


  private headers = new Headers({'Content-Type' : 'application/json' });
  private baseUrl = 'http://localhost:9090/lixo/api/v1/';
 //private baseUrl = 'https://lixohealthcare-lixohealthcarepvtltd.193b.starter-ca-central-1.openshiftapps.com/lixo/api/v1/';
 //private baseUrl = 'http://reservation-admin-reservation-admin.193b.starter-ca-central-1.openshiftapps.com/reservation-admin/api/rest/';
 post(dataObject: any, dataurl: String): Observable<any> {
    console.log("POST: "+JSON.stringify(dataObject));
    const url = `${this.baseUrl}${dataurl}`;
    console.log(url);
    return this.http
      .post(url, JSON.stringify(dataObject), { headers: this.headers })
      .map(this.extractData)
      .do(data => console.log('User from json: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  get(dataurl: String): Observable<any> {
    const url = `${this.baseUrl}${dataurl}`;
    return this.http.get(url)
      .map(this.extractData)
      .do(data => console.log('User from json: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  put(dataObject: any, dataurl: String): Observable<any> {
    const url = `${this.baseUrl}${dataurl}`;
    return this.http
      .put(url, JSON.stringify(dataObject), { headers: this.headers })
      .map(this.extractData)
      .catch(this.handleError);
  }
  delete(dataObject: any, dataurl: String): Observable<any> {
    const url = `${this.baseUrl}${dataurl}`;
    return this.http
      .delete(url, { headers: this.headers })
      .map(this.extractData)
      .catch(this.handleError);
  }
  private extractData(response: Response) {
    const body = response.json();
    return body || {};
  }


  private handleError(error: Response) {
    console.log( '=== ' + JSON.stringify( error.json()));
    return Observable.throw(error.json());
  }

}
