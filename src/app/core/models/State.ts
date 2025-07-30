import Country from './Country';

export default interface State {

  id: number;
  name: string;
  country: Country;
  stateCode: string;
  latitude: number;
  longitude: number;
  urlImageMap: string;

}
