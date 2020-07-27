import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { CarsComponent } from './cars/cars.component';
import { CarDetailComponent } from './car-detail/car-detail.component';




const routes: Routes = [
  { path: '', redirectTo: './', pathMatch: 'full'},
  { path: 'cars', component: CarsComponent },
  { path: 'detail/:id', component: CarDetailComponent},
  { path: './', component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
