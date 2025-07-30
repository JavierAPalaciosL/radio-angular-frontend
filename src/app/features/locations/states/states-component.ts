import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CountryService} from '../../../core/services/country-service';
import State from '../../../core/models/State';
import Country from '../../../core/models/Country';
import * as L from 'leaflet';
import WrapperState from '../../../core/models/WrapperState';

@Component({
  selector: 'app-states-component',
  standalone: false,
  templateUrl: './states-component.html',
  styleUrl: './states-component.css'
})
export class StatesComponent implements OnInit{

  countryId!: string;
  private states: State[] = [];
  private sizePage = 10;
  private wrapperState: WrapperState = {state: [], size: 0};

  constructor(private route: ActivatedRoute, private countryService: CountryService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.countryId = params.get('countryId')!;
      this.getStatesAPI(this.countryId, 0 , 10);
    });
  }

  public getStatesAPI(countryId: string, page: number, size: number): void {
    this.countryService.getStatesInCountry(countryId, page, size).subscribe({
      next: (wrapperState: WrapperState) => {
        console.log(this.wrapperState);
        this.wrapperState.state = wrapperState.state;
        this.wrapperState.size = wrapperState.size;
      }
    });
  }

  public getWrapperStates(): WrapperState {
    return this.wrapperState;
  }

  public getStates() : State[] {
    return this.states;
  }

  public getSizePage(): number {
    return this.sizePage;
  }

  public getRoundedSize(): number {
    if (this.wrapperState.size === 0) {
    }
    return Math.round(this.wrapperState.size / this.sizePage) + 1;
  }

}
