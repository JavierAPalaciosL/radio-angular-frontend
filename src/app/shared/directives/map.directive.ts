import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';
import * as L from 'leaflet';

@Directive({
  selector: '[appMapDirective]',
  standalone: false
})
export class MapDirective implements AfterViewInit {
  @Input() lat!: number;
  @Input() lon!: number;

  constructor(private el: ElementRef<HTMLDivElement>) {}

  ngAfterViewInit() {
    const map = L.map(this.el.nativeElement, {
      center: [this.lat, this.lon],
      zoom: 10
    });

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    //L.marker([this.lat, this.lon]).addTo(map);
  }
}
