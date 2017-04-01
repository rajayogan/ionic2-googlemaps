import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { GoogleMap, GoogleMaps, LatLng, CameraPosition, GoogleMapsEvent, MarkerOptions, Marker } from '@ionic-native/google-maps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public googleMaps: GoogleMaps) {
    
  }

  ngAfterViewInit() {
    this.loadMap();
  }

  loadMap() {
    let element = document.getElementById('map');
    let map: GoogleMap = this.googleMaps.create(element, {});
    let latlng = new LatLng(40.7128, -74.0059);

    
    map.one(GoogleMapsEvent.MAP_READY).then(() => {
        let position: CameraPosition = {
      target: latlng,
      zoom: 10,
      tilt: 30
        }
        map.moveCamera(position);  
      let markeroptions: MarkerOptions = {
      position: latlng,
      title: 'My Marker'
    };

    let marker = map.addMarker(markeroptions).then((marker: Marker) => {
      marker.showInfoWindow();
    })
    })
  }

}
