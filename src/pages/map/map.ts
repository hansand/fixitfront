

import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController,NavParams,AlertController } from 'ionic-angular';
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
    position:any;
    myLatitude:any;
    mylongitude:any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public geolocation: Geolocation,
    private userService:UserService,
    private alertCtrl: AlertController) {
    this.userInfo=navParams.get('userInfo');
  }

  ngOnInit(){
    this.loadMap();
    this.addMarkers();
    // this.nullLocation();
    this.getCurrentCordinates();
    console.log("map ngOnit");
  }


  ionViewDidLoad(){
    
  } 

  getCurrentCordinates(){
  
      Geolocation.getPlugin().getCurrentPosition(x => {
        this.myLatitude=parseFloat(x.coords.latitude);
        this.mylongitude=parseFloat(x.coords.longitude);
        // this.position.push(this.myLatitude);
        // this.position.push(this.mylongitude);
        this.position=x.coords;        
         console.log(this.position);
         if(this.position){

         
         this.addCurrentLocation();
         }else{
           this.locationErroAlert();
         }
      });

    
  }

  // getCurrentCordinates(){
  //   Geolocation.getPlugin().getCurrentPosition(x => {
  //     this.myLatitude=parseFloat(x.coords.latitude);
  //     this.mylongitude=parseFloat(x.coords.longitude);
  //     // this.position.push(this.myLatitude);
  //     // this.position.push(this.mylongitude);
  //     this.position=x.coords;        
  //      console.log(this.position);
  //   },function(err){
  //       if(err){
  //         console.log(err);
  //         console.log("ErroettingCurrentCOrdinates");
          
  //       }
  //     console.log("gotCurrentCOrdinates");
        
  //   });
  //     console.log(this.myLatitude);
  //     console.log(this.mylongitude);
      
  // }

  addMarkers(){
    console.log(this.userInfo);
      this.userInfo.forEach(element => {
        var lat=parseFloat(element.lat);
        var lang=parseFloat(element.lang);
        this.addMarker(lat,lang);
      });
      console.log(this.myLatitude);
      console.log(this.mylongitude);
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

  addCurrentLocation(){
    
    // console.log(this.myLatitude);
    // console.log(this.mylongitude);
    
    // console.log("current Start");
    //   // let latLng = new google.maps.LatLng(this.myLatitude, this.mylongitude);
    //   // let latLng = new google.maps.LatLng(6.9148,79.9731);
    //   console.log(this.myLatitude);
    //   console.log(this.mylongitude);
    //   // console.log(latLng);
    //   // this.myLocation=latLng;
    //   let mapOptions = {
    //     center: {lat:6.9148,lang:79.9731},
    //     zoom: 10,
    //     mapTypeId: google.maps.MapTypeId.ROADMAP
    //   }
    //   console.log(mapOptions.zoom);
    //   this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    //   //set Marker 
    //   this.currentMaker = new google.maps.Marker({
    //     map: this.map,
    //     animation: google.maps.Animation.DROP,
    //     position:{lat:6.9148,lang:79.9731},
    //     // position:{lat:6.80491179,lang:79.9482853},
    //     icon: {
    //       url: '../assets/imgs/myLocation2.png'
    //     },
    //     title: 'your Loaction',
    //     'snippet': 'your Loaction',
    //     draggable: false
    //   });
    //   this.addMarkers();
     
    // // }, (err) => {
    // //   console.log(err);
    //   // this.nullLocation();

   
    // // });
    // console.log("finish");
  
    if(this.mylongitude && this.myLatitude){
    let latLng = new google.maps.LatLng(this.myLatitude,this.mylongitude);
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
  }else{
    this.locationErroAlert();
  }
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

  nullLocation(){
       let latLng = new google.maps.LatLng(6.9148,79.9731);
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
  }

  locationErroAlert() {
    let alert = this.alertCtrl.create({
      title: 'Problem Ocuured While Getting Your Location',
      subTitle: 'Make Sure to Enable GPS on Your Device',
      buttons: ['OK']
    });
    alert.present();
  }
}
