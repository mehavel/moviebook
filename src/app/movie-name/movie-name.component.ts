import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { RestService } from '../shared/service/api.service';
import { LogService } from '../shared/service/log.service';
import { Venue } from '../shared/model/show-time/venue';
import { RowDates } from 'src/app/shared/model/show-time/row-dates';

@Component({
  selector: 'app-movie-name',
  templateUrl: './movie-name.component.html',
  styleUrls: ['./movie-name.component.scss']
})
export class MovieNameComponent implements OnInit {

  constructor(private restService: RestService,private logService:LogService, private _routerObj:Router) { }
  venues: Venue;
  rowDates: RowDates;
  ngOnInit() {
    this.getShowTimeData()
    
  }
  getShowTimeData(){
   // this.logService.log("Now showing api url:"+this.apiUrlParameter);
    this.restService.get('ShowTime.json')
       .subscribe(data => {
         this.logService.log("movie Response"+data);
         this.venues = data.venues;
         this.rowDates = data.rowDates;
         // this.loading = false;
         },
          err => {
       });
  }

}
