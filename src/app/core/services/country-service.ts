import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Country from '../models/Country';
import {Observable} from 'rxjs';
import {API} from '../API';
import State from '../models/State';
import WrapperCountry from '../models/WrapperCountry';
import WrapperState from '../models/WrapperState';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  public getAllCountries(page: number, size: number): Observable<WrapperCountry> {
    return this.http.get<WrapperCountry>(API.getAllCountries(page, size));
  }

  public getStatesInCountry(codeCountry: string, page: number, size: number): Observable<WrapperState> {
    return this.http.get<WrapperState>(API.getStatesInCountry(codeCountry, page, size));
  }

}
