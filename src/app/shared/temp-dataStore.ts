import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TempDataService {
  private dataSource = new BehaviorSubject<any>("noData");
  private seletedDataSource = new BehaviorSubject<any>("noData");
  currentdata = this.dataSource.asObservable();
  currentSelectedData = this.seletedDataSource.asObservable();

  constructor() { }
  changeMessage(data: any) {
    this.dataSource.next(data);
    console.log(this.dataSource);
  }
    changeSelecedData(seletedData: any) {
    this.seletedDataSource.next(seletedData);
  }
}


