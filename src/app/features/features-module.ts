import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LocationsModule} from './locations/locations-module';
import {RadioModule} from './radio/radio-module';
import {WeatherModule} from './weather/weather-module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LocationsModule,
    RadioModule,
    WeatherModule,
  ],
  exports: [
    CommonModule,
    LocationsModule,
    RadioModule,
    WeatherModule,
  ]
})
export class FeaturesModule {}
