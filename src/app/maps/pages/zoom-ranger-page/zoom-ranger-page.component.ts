import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import {LngLat, Map} from 'mapbox-gl'

@Component({
  templateUrl: './zoom-ranger-page.component.html',
  styleUrl: './zoom-ranger-page.component.css'
})
export class ZoomRangerPageComponent implements AfterViewInit, OnDestroy {

  @ViewChild('map') divMap?: ElementRef;

  public zoom: number = 10;
  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-74.5, 40);

  ngAfterViewInit(): void {

    if ( !this.divMap ) throw 'El elemento HTML no fue encontrado';

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat,
      zoom: this.zoom, // starting zoom
    });

    this.mapListeners()
  };

  ngOnDestroy(): void {
    this.map?.remove();
  };

  mapListeners() {
    if( !this.map ) throw 'Map no inicializado';

    this.map.on('zoom', (ev) => {
      this.zoom = this.map!.getZoom();
    });

    this.map.on('zoomend', (ev) => {
      if( this.map!.getZoom() < 18 ) return;

      this.map!.zoomTo(18);
    });

    this.map.on('move', () => {
      this.currentLngLat = this.map!.getCenter();
      const { lng, lat } = this.currentLngLat;
    })

  };

  zoomIn() {
    this.map?.zoomIn();
  };

  zoomOut() {
    this.map?.zoomOut();
  };

  zoomChaged( value: string ) {
    this.zoom = Number(value);
    this.map?.zoomTo( this.zoom );
  };

}
