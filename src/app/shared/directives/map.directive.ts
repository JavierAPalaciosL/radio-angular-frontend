import {AfterViewInit, Directive, ElementRef, Input, OnDestroy} from '@angular/core';
import * as L from 'leaflet';

@Directive({
  selector: '[appMapDirective]',
  standalone: false
})
export class MapDirective implements AfterViewInit, OnDestroy {
  @Input() lat!: number;
  @Input() lon!: number;
  @Input() iCanShowMarker = false;
  @Input() zoom = 10;

  private map!: L.Map;
  private resizeHandler = () => this.onResize();

  constructor(private el: ElementRef<HTMLDivElement>) {}

  ngAfterViewInit() {
    this.map = L.map(this.el.nativeElement, {
      center: [this.lat, this.lon],
      zoom: this.zoom,
    });

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    this.map.whenReady(() => {
      this.map.invalidateSize();

      if (this.iCanShowMarker) {
        L.marker([this.lat, this.lon]).addTo(this.map);
      }
    });

    window.addEventListener('resize', this.resizeHandler);
  }

  private onResize() {
    if (!this.map) return;
    this.map.invalidateSize();
    this.map.setView([this.lat, this.lon], this.map.getZoom(), { animate: false });
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.resizeHandler);
    this.map?.remove();
  }
}
