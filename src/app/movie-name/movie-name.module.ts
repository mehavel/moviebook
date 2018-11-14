import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FeatureModule } from '../shared/module/feature.module';
import { MovieNameComponent } from './movie-name.component';
import { MovieTypeComponent } from './movie-type/movie-type.component';
import { ShowTimingsComponent } from './show-timings/show-timings.component';


import { Router } from '@angular/router';
import { PreSeatSeletorModelComponent } from './pre-seat-seletor-model/pre-seat-seletor-model.component';
import { TermsAndConditionModelComponent } from './terms-and-condition-model/terms-and-condition-model.component';


@NgModule({
  imports: [
    CommonModule,
    FeatureModule,
    RouterModule.forChild([
      { path: '', component: MovieNameComponent }
    ])
  ],
  declarations: [MovieNameComponent, MovieTypeComponent, ShowTimingsComponent,PreSeatSeletorModelComponent,TermsAndConditionModelComponent]
})
export class MovieNameModule { }
