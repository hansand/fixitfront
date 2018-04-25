

import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
 } from '@ionic-native/google-maps';

 import { UserService } from '../../app/services/users.service';



declare var google;

@Component({
  selector: 'map',
  templateUrl: 'map.html'
})
export class MapPage {

    @ViewChild('map') mapElement: ElementRef;
   
    map: any;
    myLocation: any;
    marker:any;
    currentMaker:any;
    userInfo:any;
    x:any;
   

  constructor(public navCtrl: NavController,public navParams: NavParams,public geolocation: Geolocation,private userService:UserService) {
    this.userInfo=navParams.get('userInfo');
  }

  ngOnInit(){
    this.loadMap();
    this.addMarkers();
  }


  ionViewDidLoad(){
    Geolocation.getPlugin().getCurrentPosition(x => console.log('Success', x), e => console.log());
    console.log(this.x)
  } 

  addMarkers(){
    console.log(this.userInfo);
      this.userInfo.forEach(element => {
        var lat=parseFloat(element.lat);
        var lang=parseFloat(element.lang);
        this.addMarker(lat,lang);
      });
  }
  
  loadMap(){
    //set Deafult Zoom to Srilanka
    let latLng = new google.maps.LatLng(6.927079, 79.861244);
    let mapOptions = {
      center: latLng,
      zoom: 7,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    // this.marker.addEventListener(GoogleMapsEvent.MAP_CLICK, function() {
    //   alert("InfoWindow is clicked");
    //   console.log("hansaka");
    // });
  //   this.marker.GoogleMapsEvent.MAP_CLICK.subscribe(
  //     (data) => {
  //         alert("Click MAP");
  //         console.log("hansaka");
  //     }
  // );
 
  }

  getCurrentLocation(){

    console.log("current Start");
    this.geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      // let latLng = new google.maps.LatLng(6.80491179,79.9482853);
      console.log(latLng);
      this.myLocation=latLng;
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      //set Marker 
      this.currentMaker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: this.myLocation,
        // position:{lat:6.80491179,lang:79.9482853},
        icon: {
          url: '../assets/imgs/myLocation2.png'
        },
        title: 'your Loaction',
        'snippet': 'your Loaction',
        draggable: false
      });
      this.addMarkers();
     
    }, (err) => {
      console.log(err);
    });
    console.log("finish");
  }

  addMarker(latp,langp){
    this.marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position:{ lat:latp,lng:langp},
      icon: {
        url: '../assets/imgs/myLocation.png'
      },
      draggable: false
    });

    this.marker.addListener('click', function() {
      console.log("clicked");
    });
    // var InfoWindow= new google.maps.InfoWindow({
    //   content:"hansaka",
    //   run(){
    //     console.log("han");
    //   }
    // })
    // InfoWindow.run();
  }
}
