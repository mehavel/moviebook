import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FeatureModule } from '../shared/module/feature.module';   
// Scrollspy Module
import { ScrollSpyModule } from '@thisissoon/angular-scrollspy';
import { InViewportModule, WindowRef } from '@thisissoon/angular-inviewport';

import { DashboardComponent } from './dashboard.component';
import { NowShowingComponent } from './nowshowing/nowshowing.component';
// import { SharedPipesModule } from '../shared/pipes/shared-pipes.module';
import { UpComingComponent } from './upcoming/upcoming.component';
import { ShareModule } from './shared/shared.module';




export const getWindow = () => window;    

export const inViewportProviders: Provider[] = [
  { provide: WindowRef, useFactory: getWindow }
];


@NgModule({
  imports: [
    CommonModule,
    FeatureModule,
    ShareModule,
   
    RouterModule.forChild([
      { path: '', component: DashboardComponent }
    ]),
    InViewportModule.forRoot(inViewportProviders),
    ScrollSpyModule.forRoot()
    
  ],
  
  declarations: [
    // DashboardComponent,
    NowShowingComponent,UpComingComponent,ShareModule],
    providers:[ShareModule]
})
export class DashboardModule { }
