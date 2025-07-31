import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CountryService} from '../../../core/services/country-service';
import WrapperState from '../../../core/models/WrapperState';
import WrapperCity from '../../../core/models/WrapperCity';

@Component({
  selector: 'app-cities-component',
  standalone: false,
  templateUrl: './cities-component.html',
  styleUrl: './cities-component.css'
})
export class CitiesComponent implements OnInit {

  countryId! : string;
  stateId! : string;
  private sizePage: number = 10;

  private wrapperCity: WrapperCity = {cities: [], totalCountries: 0};

  constructor(private route: ActivatedRoute,  private countryService: CountryService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.countryId = params.get('countryId')!;
      this.stateId = params.get('stateId')!;

      this.getStatesAPI(this.countryId, this.stateId,0 , 10);
    });
  }

  public getStatesAPI(countryId: string, codeState: string, page: number, size: number): void {
    this.countryService.getCities(countryId, codeState, page, size).subscribe({
      next: (wrapperCity : WrapperCity) => {
        this.wrapperCity = {cities: [], totalCountries: 0};
        this.wrapperCity = wrapperCity;
      }
    });

  }

  public getWrapperCity(): WrapperCity {
    return this.wrapperCity;
  }

  public getRoundedSize(): number {
    if (this.wrapperCity.totalCountries === 0) {
    }
    return Math.round(this.wrapperCity.totalCountries / this.sizePage) + 1;
  }

  public getSizePage(): number {
    return this.sizePage;
  }

}
