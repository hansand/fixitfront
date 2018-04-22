

import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'map',
  templateUrl: 'map.html'
})
export class MapPage {

    @ViewChild('map') mapElement: ElementRef;
    map: any;
    myLocation: any;
   

  constructor(public navCtrl: NavController,public geolocation: Geolocation) {
  }

  ionViewDidLoad(){
    this.loadMap();
    this.getCurrentLocation();
    Geolocation.getPlugin().getCurrentPosition(x => console.log('Success', x), e => console.log('Error', e));
  }

  loadMap(){
 
    let latLng = new google.maps.LatLng(6.927079, 79.861244);
 
 
    let mapOptions = {
      center: latLng,
      zoom: 7,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
  }

  getCurrentLocation(){
    this.geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      this.myLocation=latLng;
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      //set Marker 
      let marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: this.myLocation,
        icon: {
          url: '../assets/imgs/myLocation.png'
        },
        title: 'your Loaction',
        'snippet': 'your Loaction',
        draggable: false
    
      });

    }, (err) => {
      console.log(err);
    });
  }


}
