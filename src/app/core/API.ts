import {environment} from '../../environments/environment';

export const API = {
  getAllCountries: (page: number, size: number): string => `${environment.host}/countries?page=${page}&size=${size}`,
  getStatesInCountry: (codeCountry: string, page: number, size: number): string => `${environment.host}/countries/${codeCountry}/states?page=${page}&size=${size}`,
  getCities: (codeCountry: string, codeState: string, page: number, size: number) => `${environment.host}/countries/${codeCountry}/states/${codeState}/cities?page=${page}&size=${size}`,
  getCity: (codeCountry: string, codeState: string, codeCity: string) => `${environment.host}/countries/${codeCountry}/states/${codeState}/cities/${codeCity}`,
  getUserWithJWT: () => `${environment.host}/users/subject`,
};
