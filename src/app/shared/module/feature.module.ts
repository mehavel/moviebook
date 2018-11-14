import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from '../../shared/carousel/carousel.component';

// Pluging Module
import { OwlModule } from 'ngx-owl-carousel'; // carousel
import {NgxPageScrollModule} from 'ngx-page-scroll';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  //  InViewportModule.forRoot(providers),
  //  ScrollSpyModule.forRoot(),
    OwlModule, // carousel
    NgxPageScrollModule, // one page scroll

  ],
  exports: [
    CommonModule,
    FormsModule,
   // InViewportModule,
   // ScrollSpyModule,
    NgxPageScrollModule,
    CarouselComponent
],
  declarations: [CarouselComponent]
})
export class FeatureModule { }
