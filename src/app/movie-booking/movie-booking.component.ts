import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../shared/service/api.service';
//import { MovieNameModel } from '../../app/shared/model/movie-name.model';

@Component({
  selector: 'app-movie-booking',
  templateUrl: './movie-booking.component.html',
  styleUrls: ['./movie-booking.component.scss'],
})
export class MovieBookingComponent implements OnInit {
 // movieName: MovieNameModel;
  movieGenreModel: {};
  movieTimeModel: {};
  movieModels: any; // need to add a model to it;
  apiUrlParameter: String = 'movie-booking';
  constructor(private route: ActivatedRoute, private restService: RestService) {
  }

  // Get the value of upcomingg movies on page scroll
  // getMovieDetails() {
  //   this.restService.getParams(this.movieName, this.apiUrlParameter)
  //     .subscribe(movieModel => {
  //     this.movieModels = movieModel;
  //       this.movieGenreModel = this.movieModels.moviesGenre; // sending movie genre to the movite type component
  //       this.movieTimeModel = this.movieModels.show_info; // sending movie time to the show timings component
  //     });
  // }
   ngOnInit() {
  //   this.movieName = this.route.snapshot.params.id;
  //   this.getMovieDetails();
   }

}
