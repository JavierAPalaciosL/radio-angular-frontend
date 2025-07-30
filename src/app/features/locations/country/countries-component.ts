import {Component, signal} from '@angular/core';
import {CountryService} from '../../../core/services/country-service';
import Country from '../../../core/models/Country';
import {Router} from '@angular/router';
import WrapperCountry from '../../../core/models/WrapperCountry';
import CardElement from '../../../core/models/CardElement';
import {TypeElement} from '../../../core/models/TypeElement';

@Component({
  selector: 'app-countries-component',
  standalone: false,
  templateUrl: './countries-component.html',
  styleUrl: './countries-component.css'
})
export class CountriesComponent {

  private countries: Country[] = [];
  private wrapperCountry: WrapperCountry;
  private sizePage : number;

  constructor(private countryService: CountryService, private router: Router) {
    this.sizePage = 10;
    this.getAllCountry(0, this.sizePage);
    this.wrapperCountry = {country: this.countries, totalCountries: 0};

  }

  public getSizePage(): number {
    return this.sizePage;
  }

  getCountries () : Country[]  {
    return this.wrapperCountry.country;
  }

  public getAllCountry (page: number, size: number): void  {
    this.countryService.getAllCountries(page, size).subscribe({
      next: (wrapperCountry: WrapperCountry) => {
        this.wrapperCountry.country = wrapperCountry.country;
        this.wrapperCountry.totalCountries = wrapperCountry.totalCountries;
      }
    })
  }

  public getWrapperCountry (): WrapperCountry {
    return this.wrapperCountry;
  }

  public countryIsClicked(country: Country) {
    this.router.navigate(['/countries', country.countryCode, 'states']);
  }

  public getRoundedSize(): number {
    if (this.wrapperCountry.totalCountries === 0) {
    }
    return Math.round(this.wrapperCountry.totalCountries / this.sizePage) + 1;
  }


}
