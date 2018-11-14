import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
   // loadChildren: './dashboard/dashboard.module#DashboardModule',
   component : DashboardComponent
  },
  {
    path: 'movieName',
    loadChildren: './movie-name/movie-name.module#MovieNameModule',
  },
  {
    path: 'seatLayout',
    loadChildren: './seat-layout/seat-select.module#SeatSelectModule',
  },
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
