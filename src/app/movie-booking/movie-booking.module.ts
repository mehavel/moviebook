import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FeatureModule } from '../shared/module/feature.module';
import { MovieBookingComponent } from './movie-booking.component';
import { MovieTypeComponent } from './movie-type/movie-type.component';
import { ShowTimingsComponent } from './show-timings/show-timings.component';

@NgModule({
  imports: [
    CommonModule,
    FeatureModule,
    RouterModule.forChild([
      { path: '', component: MovieBookingComponent }
    ])
  ],
  declarations: [MovieBookingComponent, MovieTypeComponent, ShowTimingsComponent]
})
export class MovieBookingModule { }
