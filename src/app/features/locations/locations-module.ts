import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CitiesComponent} from './city/cities-component';
import {CountriesComponent} from './country/countries-component';
import {StatesComponent} from './states/states-component';
import {MapDirective} from '../../shared/directives/map.directive';
import {CardCountryStatesComponent} from '../../shared/components/cards/card-country-states-component';
import {SliceComponent} from '../../shared/components/slice/slice-component';
import { CityInfoComponent } from './city-info/city-info-component';
import {WeatherComponent} from '../weather/weather-component';
import {RadioComponent} from '../radio/radio-component';
import { DashboardLocationsComponent } from './dashboard-locations-component';
import {RouterOutlet} from '@angular/router';

@NgModule({
  declarations: [CitiesComponent, CountriesComponent, StatesComponent,  MapDirective, CardCountryStatesComponent, SliceComponent, CityInfoComponent, WeatherComponent, RadioComponent, DashboardLocationsComponent],
  imports: [
    CommonModule,
    RouterOutlet,
  ],
  exports: [CityInfoComponent],
})
export class LocationsModule { }
