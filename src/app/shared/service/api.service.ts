import { Component, Input } from '@angular/core';
import { environment } from '../../../environments/environment';
import { LogService } from './log.service';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable({
    providedIn: 'root', 
  })
export class RestService {

  constructor(private http: Http,private logService:LogService) {
  }


  private headers = new Headers({'Content-Type' : 'application/json' });
  //private baseUrl = environment.baseUrl;//'assets/api/';
  private baseUrl = 'assets/mockapi/';

 post(dataObject: any, dataurl: String): Observable<any> {
    console.log(JSON.stringify(dataObject));
    //console.log("url path before post call::"+this.baseUrl+dataurl);
    //dataurl = 'Nowshowing.json';
    const url = `${this.baseUrl}${dataurl}`;
    console.log("generate constant url in post service::"+url);
      return this.http.post(url, JSON.stringify(dataObject), { headers: this.headers })
      .map(this.extractData)
      .do(data => console.log("User from json: " + JSON.stringify(data)))
      .catch(e => this.handleError(e));
  }

  get(dataurl: String): Observable<any> {
    const url = `${this.baseUrl}${dataurl}`;
    console.log("get rest call:"+ url);
      return this.http.get(url)
      .map(this.extractData).share()
      .do(data => console.log("User from json: " + JSON.stringify(data)));
      //.pipe(map(this.extractData));

  }

/*   put(dataObject: any, dataurl: String): Observable<any> {
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
  } */
  private extractData(response: Response) {
    console.log("extracting data::"+response.json());
    const body = response.json();
    return body || {};
  }


  private handleError(error: Response) {
    console.log( 'Error in api call ' + JSON.stringify( error.json()));
//     console.log("dataUrl in error post call::"+dataurl);
//     console.log(dataurl.substring(dataurl.lastIndexOf("/")+1, dataurl.length));
    return Observable.throw(error.json());
  }

}
