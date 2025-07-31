export default interface Weather {

  coord: { [key: string]: string };
  weather: Array<{ [key: string]: string }>;
  base: string;
  main: {
    temp: number,
    temp_min: number,
    grnd_level: number,
    humidity: number,
    pressure: number,
    sea_level: number,
    feels_like: number,
    temp_max: number
  };
  visibility: string;
  wind: { [key: string]: string };
  sys: { [key: string]: string };

}
