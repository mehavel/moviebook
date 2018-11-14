import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { RestService } from '../../service/api.service';
import { NowShowing } from '../../model/movie.model';
import { ReqHeaderModel } from '../../model/common/reqheader.model';
import { MovieRequest } from '../../model/movierequest.model';
import { environment } from '../../../../environments/environment';
import { LogService } from '../../service/log.service';



@Component({
  selector: 'app-location',
  animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ],
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  
  location: boolean;
  apiUrlParameter: String = 'Nowshowing.json';//environment.nowshowing;
  nowShowingModels: Array<any>;
  movieRequest: MovieRequest={} as any;
  reqHeaderModel:ReqHeaderModel = {} as any;




  constructor(private restService: RestService,private logService:LogService, private _routerObj:Router) { }


  showLocation() {
    this.location = true;
  }
  hideLocation() {
    this.location = false;
  }

  getLocation(){

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

  ngOnInit() {
    this.location = false;
    console.log("calling location:::");
    this.getLocation();
  }

}
