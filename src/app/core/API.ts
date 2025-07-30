import {environment} from '../../environments/environment';

export const API = {
  getAllCountries: (page: number, size: number): string => `${environment.host}/countries?page=${page}&size=${size}`,
  getStatesInCountry: (codeCountry: string, page: number, size: number): string => `${environment.host}/countries/${codeCountry}/states?page=${page}&size=${size}`,
};
