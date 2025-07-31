export default interface Radio {
  stationID: string;
  name: string;
  url: string;
  urlResolved: string;
  homePage: string;
  icon: string;
  tags: string;
  votes: number;
  geoLat: number;
  geoLong: number;
  geoDistance: number;
}
