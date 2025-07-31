import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LocationsModule} from './locations/locations-module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LocationsModule,
  ],
  exports: [
    CommonModule,
    LocationsModule,
  ]
})
export class FeaturesModule {}
