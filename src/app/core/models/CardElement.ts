import {TypeElement} from './TypeElement';

export default interface CardElement {

  typeElement: TypeElement;
  element: (HTMLDivElement | HTMLHeadingElement)

  nameCountry: string;
  codeCounrty: string;
  latitude: number;
  longitude: number;

}
