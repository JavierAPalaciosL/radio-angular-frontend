import {Component, Input} from '@angular/core';
import Country from '../../../core/models/Country';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card-country-states-component',
  standalone: false,
  templateUrl: './card-country-states-component.html',
  styleUrl: './card-country-states-component.css'
})
export class CardCountryStatesComponent {

  @Input() public urlNavigate: string = "";

  constructor(private router: Router) {}

  countryIsClicked(urlNavigate: string) {
    this.router.navigateByUrl(this.urlNavigate);
  }
}
