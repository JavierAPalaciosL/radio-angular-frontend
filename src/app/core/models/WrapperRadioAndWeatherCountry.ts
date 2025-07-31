import City from './City';
import Weather from './Weather';
import Radio from './Radio';

export default interface WrapperRadioAndWeatherCountry {
  city: City;
  weather: Weather;
  radioStations: Radio[];
}
