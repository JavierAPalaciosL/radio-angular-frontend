import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';
import * as L from 'leaflet';

@Directive({
  selector: '[appMapDirective]',
  standalone: false
})
export class MapDirective implements AfterViewInit {
  @Input() lat!: number;
  @Input() lon!: number;
  @Input() iCanShowMarker!: boolean;
  @Input() zoom!: number;

  @Input() markers!: {lat: number; lon: number}[];

  constructor(private el: ElementRef<HTMLDivElement>) {}

  ngAfterViewInit() {
    const map = L.map(this.el.nativeElement, {
      center: [this.lat, this.lon],
      zoom: (this.zoom === undefined) ? 10 : this.zoom,
    });

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    if(this.iCanShowMarker !== undefined){

      L.marker([this.lat, this.lon]).addTo(map);

      if (this.markers !== undefined){
        for(var i = 0; i < this.markers.length; i++){
          L.marker([this.markers[i].lat, this.markers[i].lon]).addTo(map);
        }
      }

    }

  }
}
