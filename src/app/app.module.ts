import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FeatureModule } from './shared/module/feature.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

// Bootstrap Modal
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';

// Routing Module
import { AppRoutingModule } from './app-routing.module';

// Social Login
import { SocialLoginModule } from 'angularx-social-login';
import { AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider  } from 'angularx-social-login';

// Shared Custom Component
import { HeaderComponent } from '../app/shared/header/header.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginModalComponent } from './shared/header/login-modal/login-modal.component';

//shared services
import { LocationService } from '../app/shared/header/location/location.service';

// Menu Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { NowShowingComponent } from './dashboard/nowshowing/nowshowing.component';
import { UpComingComponent } from './dashboard/upcoming/upcoming.component';
import { ShareModule } from './dashboard/shared/shared.module';

// Highlight menu on scrolling
import { ScrollSpyModule } from '@thisissoon/angular-scrollspy';
import { InViewportModule, WindowRef } from '@thisissoon/angular-inviewport';
import { LocationComponent } from './shared/header/location/location.component';
import { FilterComponent } from './shared/components/filter/filter.component';

import { BookingSummaryComponent } from './booking-summary/booking-summary.component';
// import { TermsAndConditionModelComponent } from './movie-name/terms-and-condition-model/terms-and-condition-model.component';
// import { PreSeatSeletorModelComponent } from './movie-name/pre-seat-seletor-model/pre-seat-seletor-model.component';

// One page scroll get window
export const getWindow = () => window;
export const inViewportProviders: Provider[] = [
  { provide: WindowRef, useFactory: getWindow }
];

// Configs

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('624796833023-clhjgupm0pu6vgga7k5i5bsfp6qp6egh.apps.googleusercontent.com')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("208879756531061")
  }
]);

export function provideConfig() {
  return config;
}


@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    DashboardComponent,
    NowShowingComponent,
    UpComingComponent,
    LoginModalComponent,
    LocationComponent,
    FilterComponent,
    
    BookingSummaryComponent
    // TermsAndConditionModelComponent,
    // PreSeatSeletorModelComponent,
  ],

  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FeatureModule,
    InViewportModule.forRoot(inViewportProviders),
    ScrollSpyModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    SocialLoginModule,ShareModule
  ],

  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig,
    },
    LocationService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
