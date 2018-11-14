import { Component, Input } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root',
  })
export class LogService {

  log(msg:any){
    console.log(msg);
  }
  
  warn(msg:any){
    console.warn(msg);
  }
  
  error(msg:any){
    console.error(msg);
  }

}
