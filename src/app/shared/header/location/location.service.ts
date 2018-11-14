import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable({
    providedIn: 'root',
  })
export class LocationService {
  cachedData: Observable<any>;

  getData():any {
      if (this.cachedData) {
        console.log('cache data found');
        return Observable.of(this.cachedData);
      } else {
      //   console.log('cache data NOT found');
      //   return this.http.get('https://56e05c3213da80110013eba3.mockapi.io/api/todos')
      //         .map(res => res.json())
      //         .do((data) => {
      //           this.cachedData = data;
      //         })
      //     .share();
      this.cachedData = new Observable((observer) => {
          // observable execution
          observer.next("bla bla bla")
          observer.complete()
        })
        
       }
       return this.cachedData
      }


}