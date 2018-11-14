import { Component, OnInit } from '@angular/core';
import { RestService } from '../../shared/service/api.service';
import { NowShowing } from '../../shared/model/movie.model';
import { ReqHeaderModel } from '../../shared/model/common/reqheader.model';
import { MovieRequest } from '../../shared/model/movierequest.model';
import { environment } from '../../../environments/environment';
import { LogService } from '../../shared/service/log.service';

import { Router } from '@angular/router';
import {Venue} from '../../shared/model/show-time/venue';

@Component({
  selector: 'app-nowshowing', 
  templateUrl: './nowshowing.component.html',
  styleUrls: ['./nowshowing.component.scss']
})
export class NowShowingComponent implements OnInit {
  venues: Venue={} as any;
  filterItems: Array<any> = [];
  filters: Array<any> = [];
  nowShowingModels: Array<any>;
  movieRequest: MovieRequest={} as any;
  reqHeaderModel:ReqHeaderModel = {} as any;
  apiUrlParameter: String = 'Nowshowing.json';//environment.nowshowing;
  filter: boolean;
  dummy:number = 0;
  constructor(private restService: RestService,private logService:LogService, private _routerObj:Router) { }
  getNowShowingMovies() {
     this.logService.log("Now showing api url:"+this.apiUrlParameter);
    //  this.restService.get(this.apiUrlParameter)
    //     .subscribe(nowShowingModel => {
    //       this.logService.log("Now Showing Response"+nowShowingModel);
    //       this.nowShowingModels = nowShowingModel;
    //       // this.loading = false;
    //       },
    //        err => {
    //     });
    this.movieRequest.locality_id = "1";
    this.movieRequest.zone_id = "1";
    this.movieRequest.locality_id = "1";
    this.reqHeaderModel.channel="reservationweb";
    this.reqHeaderModel.callingAPI="lixo";
    this.reqHeaderModel.transactionId="1234567890";

    this.movieRequest.header=this.reqHeaderModel;
    
    // this.restService.post(this.movieRequest,environment.nowshowing).subscribe(
    //             response =>{
    //               this.logService.log(response.status.status_code);
    //               if(response.status.status_code == 1001){
    //                 this.logService.log(response.movies);
    //                 this.nowShowingModels = response.movies;
                    
    //               }else{
    //                 this.logService.warn("movie retrival failed");
    //               }
    //           });

      this.restService.get('Nowshowing.json')
       .subscribe(response =>{
                      this.logService.log(response.status.status_code);
                       if(response.status.status_code == 1001){
                         this.logService.log(response.movies);
                         this.nowShowingModels = response.movies;
                        
                       }else{
                         this.logService.warn("movie retrival failed");
                       }
                   });
  }

  checked() {
    console.log("calling checked");
    return this.filterItems;
  }
  
  addToFilters(changeindex):any{
    //console.log('in addto filters:::'+changeindex);  
    this.filters.forEach((e,index)=>{
      if(changeindex == index){
        if(e.checked){
          e.checked = false;
        }else{
          e.checked = true;
        }
      }
    });

    this.filters.forEach((e,index)=>{
      //console.log(e.value +"&&&"+e.checked);
    });
    this.dummy++;
    //console.log(this.dummy);
    return this.filters;
  }
   

  showFilter() {
    this.filter = true;
  }
  hideFilter() {
    this.filter = false;
  }

  ngOnInit() {
    this.getNowShowingMovies();
    this.filter = false;
    this.filters = [{
      value: 'Tamil',
      checked: true
    },
    {
      value: 'English',
      checked: true
    },
    {
      value: 'Hindi',
      checked: true
    }];
  }

   

  getShowTimeData(){
    this.logService.log("Now showing api url:"+this.apiUrlParameter);
    this.restService.get('showTime.json')
       .subscribe(data => {
         this.logService.log("Now Showing Response"+data);
         this.venues = data;
         // this.loading = false;
         },
          err => {
       });
  }
  navigateToShowTiming(){
    //this.getShowTimeData();
    this._routerObj.navigate(['/movieName']);
  }

}
