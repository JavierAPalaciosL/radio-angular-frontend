import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CountryService} from '../../../core/services/country-service';
import WrapperRadioAndWeatherCountry from '../../../core/models/WrapperRadioAndWeatherCountry';

@Component({
  selector: 'app-city-info-component',
  standalone: false,
  templateUrl: './city-info-component.html',
  styleUrl: './city-info-component.css'
})
export class CityInfoComponent implements OnInit {

  countryId! : string;
  stateId! : string;
  cityId! : string;
  wrapperRadioCityAndWeather! : WrapperRadioAndWeatherCountry;
  url : string = "";
  nameStation : string = "";
  markers : {lat: number; lon: number}[] = [];
  heartIsSelected : boolean = false;

  constructor(private route: ActivatedRoute,  private countryService: CountryService) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.countryId = params.get('countryId')!;
      this.stateId = params.get('stateId')!;
      this.cityId = params.get('cityId')!;

      this.getStatesAPI(this.countryId, this.stateId, this.cityId);
    });

  }

  public getStatesAPI(countryId: string, stateId: string, cityId: string): void {

    this.countryService.getCity(countryId, stateId, cityId).subscribe({
      next: (wrapperRadioCityAndWeather : WrapperRadioAndWeatherCountry) => {

        console.log(wrapperRadioCityAndWeather);
        this.wrapperRadioCityAndWeather = wrapperRadioCityAndWeather;

        if(this.wrapperRadioCityAndWeather.radioStations !== undefined){
          this.wrapperRadioCityAndWeather.radioStations.forEach(radioStation => {
            this.markers.push({lat: radioStation.geoLat, lon: radioStation.geoLong});
          })
        }


      }
    })

  }

  play($event:{ nameStation: string, url: string }) {
    this.url = $event.url;
    this.nameStation = $event.nameStation;
  }

  kelvinToCelsius(kelvin: number): number {

    const kelvinNumber = Number(kelvin);

    const celsius = kelvinNumber - 273.15;
    return parseFloat(celsius.toFixed(2));
  }

  selectHeart() {
    this.heartIsSelected = !this.heartIsSelected;
  }

}
