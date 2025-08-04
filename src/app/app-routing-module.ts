import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CountriesComponent} from './features/locations/country/countries-component';
import {StatesComponent} from './features/locations/states/states-component';
import {CitiesComponent} from './features/locations/city/cities-component';
import {CityInfoComponent} from './features/locations/city-info/city-info-component';
import {SingInWithGoogleComponent} from './shared/components/singgoogle/sing-in-with-google-component';
import {SingInComponent} from './features/sing-in/sing-in-component';

const routes: Routes = [

  { path: '', redirectTo: 'countries', pathMatch: 'full' },

  { path: 'countries', component: CountriesComponent },
  { path: 'countries/:countryId/states', component: StatesComponent },
  { path: 'countries/:countryId/states/:stateId/cities', component: CitiesComponent },
  { path: 'countries/:countryId/states/:stateId/cities/:cityId/info', component: CityInfoComponent },
  { path: 'auth/google/callback', component: SingInWithGoogleComponent},
  { path: 'sing-in', component: SingInComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
