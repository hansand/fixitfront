

import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController,NavParams,AlertController,ViewController } from 'ionic-angular';
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
 import { EmployeePage } from '../employee/employee';
import { timeout } from 'rxjs/operators';
 



declare var google;

@Component({
  selector: 'derections',
  templateUrl: 'derections.html'
})
export class DerectionsPage {

    @ViewChild('map') mapElement: ElementRef;
    @ViewChild('searchLocation') searchLocation;
    @ViewChild('directionsPanel') directionsPanel: ElementRef;
    map: any;
    map1: any;
    
    myLocation: any;
    marker:any;
    currentMaker:any;
    userInfo:any;
    x:any;
    position:any;
    myLatitude:any;
    mylongitude:any;

    locations=[];
    isKM:any=5000000;
    latLng2:any = new google.maps.LatLng(6.927079, 79.861244);
    customMarker:any;

    directionsService= new google.maps.DirectionsService;
    directionsDisplay = new google.maps.DirectionsRenderer;


    // derectionView:boolean=false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public geolocation: Geolocation,
    private userService:UserService,
    private alertCtrl: AlertController,
    // public maps: GoogleMaps,
    public viewCtrl: ViewController,
) {

    this.userInfo=navParams.get('userInfo');
    console.log(this.userInfo);
  }

  ngOnInit(){
    this.loadMap();
    this.markDerectionsonmaps();
    // this.markDerectionsonmap()
    this.addDestinationMarker(this.userInfo[0].lat,this.userInfo[0].lang);
  
  }

  // togleDerectionPanel(){
  //   if(this.derectionView==false){
  //     this.derectionView = true;
  //   }else if(this.derectionView==true){
  //     this.derectionView = false;
  //   }
  // }


  loadMap(){
    var promise = new Promise((reslove,reject)=>{
      let latLng = new google.maps.LatLng(6.927079, 79.861244);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      reslove();
    })
    return promise;
}

  markDerectionsonmap(){
      console.log("starting Derecion");
    this.getCurrentCordinates().then(()=>{
      console.log("inside");
      this.loadMap().then(()=>{
        this.startNavigating();
        this.addDestinationMarker(this.userInfo[0].lat,this.userInfo[0].lang);
        this.addStartMarker(this.myLatitude,this.mylongitude);
     
      })
        
    },()=>{
      this.loadMap().then(()=>{
      this.derectionsFromDefaultLocation();    
      this.addDestinationMarker(this.userInfo[0].lat,this.userInfo[0].lang);
      this.addStartMarker(this.userService.userDetails[0].lat,this.userService.userDetails[0].lang);    
      })
    });
  }


startNavigating(){

    // let directionsService = new google.maps.DirectionsService;
    // let directionsDisplay = new google.maps.DirectionsRenderer;

    this.directionsDisplay.setMap(this.map);
    this.directionsDisplay.setOptions( { suppressMarkers: true } );
    this.directionsDisplay.setPanel(this.directionsPanel.nativeElement);

    this.directionsService.route({

        origin: {lat:this.myLatitude,lng:this.mylongitude},
        destination:  {lat:this.userInfo[0].lat,lng:this.userInfo[0].lang},
        travelMode: google.maps.TravelMode['DRIVING']

    }, (res, status) => {

        if(status == google.maps.DirectionsStatus.OK){
            this.directionsDisplay.setDirections(res);
        } else {
            console.log(status);
        }
    });
}

derectionsFromDefaultLocation(){
  // let directionsService = new google.maps.DirectionsService;
  // let directionsDisplay = new google.maps.DirectionsRenderer;

  this.directionsDisplay.setMap(this.map);
  this.directionsDisplay.setOptions( { suppressMarkers: true } );
  this.directionsDisplay.setPanel(this.directionsPanel.nativeElement);

  this.directionsService.route({
      origin: {lat:this.userService.userDetails[0].lat,lng:this.userService.userDetails[0].lang},
      destination:  {lat:this.userInfo[0].lat,lng:this.userInfo[0].lang},
      
      travelMode: google.maps.TravelMode['DRIVING']
  }, (res, status) => {

      if(status == google.maps.DirectionsStatus.OK){
        this.directionsDisplay.setDirections(res);
      } else {
          console.warn(status);
      }

  });
}

// getCurrentCordinates(){
//       var done:boolean=false;
//       var promise = new Promise((reslove,reject)=>{
//           // reject();
      
//               Geolocation.getPlugin().getCurrentPosition(response => {
//                   this.myLatitude=parseFloat(response.coords.latitude);
//                   this.mylongitude=parseFloat(response.coords.longitude);
//                   console.log(this.myLatitude);
//                   var done=true;
//                   console.log("1234","done" );
//                   reslove();
//                   // if(this.myLatitude.length>0 && this.mylongitude.length>0){
//                   //     reslove();
//                   // }else{
//                   //     reject();
//                   // }
//                 })
  
//                 setTimeout(()=>{
//                   console.log("waited");
//                     reject();
                    
//                 },5000)
          
   
//       //  reject()
//       });
//       console.log(promise);
//       return promise;
//   }

getCurrentCordinates(){
  var promise = new Promise((reslove,reject)=>{
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      console.log(resp.coords.latitude);
      console.log(resp.coords.longitude);
      this.myLatitude=resp.coords.latitude;
      this.mylongitude=resp.coords.longitude;
      reslove();
     }).catch((error) => {
       reject();
       this.currentLocationErro(error);
       console.log('Error getting location', error);
     });
  })
  return promise;
}

addDestinationMarker(latp,langp){
    this.marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position:{ lat:latp,lng:langp},
      icon: {
        url: '../assets/imgs/myLocation.png'
      },
      draggable: false
    });
}

addStartMarker(latp,langp){
    this.marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position:{ lat:latp,lng:langp},
      icon: {
        url: '../assets/imgs/myLocation2.png'
      },
      draggable: false
    });
}


searchCancel(){
    this.locations=[];
  }
SearchPlace(){
    if(this.searchLocation.value == ""){
      this.searchCancel();
    }else{
    // this.loadMap();
      this.searchCancel();
    
    let service = new google.maps.places.PlacesService(this.map);
    service.nearbySearch({
              location: this.latLng2,
              radius: this.isKM,
              keyword: this.searchLocation.value
            }, (results, status) => {
              
              if(results){
                results.forEach(element => {
                    console.log(element);
                    this.locations.push(element);
                    console.log(element.geometry.location.lat());    
                    // console.log(this.locations);  
                });
              }
            });
          }
  }

 


  currentLocationErro(error) {
    let alert = this.alertCtrl.create({
      title: 'Error Occurd While Getting Your Current Location',
      subTitle: 'Erro :'+error+'Google Can not Dertermine Your Location.Default Location Used Instead',
      buttons: ['OK']
    });
    alert.present();
  }

  cantgetLocationAlert() {
    let alert = this.alertCtrl.create({
      title: 'Erro',
      subTitle: 'Google Can not Dertermine Your Location.Default Location Used Instead',
      buttons: ['OK']
    });
    // alert.present();
  }




//drection from searched location
addSearchLocation(latp,langp){
  var lat=parseFloat(latp).toFixed(7);
  var lang=parseFloat(langp).toFixed(7);
  console.log(lat);
  console.log(lang);
  
  let latLng = new google.maps.LatLng(latp,langp);
  console.log(latLng);
  let mapOptions = {
    center: latLng,
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);


  this.customMarker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position:{ lat:latp,lng:langp},
    icon: {
      url: '../assets/imgs/searchlocation.png'
    },
    draggable: false
  });
  this.addDestinationMarker(this.userInfo[0].lat,this.userInfo[0].lang);
  this.searchCancel();
  // let directionsService = new google.maps.DirectionsService;
  //   let directionsDisplay = new google.maps.DirectionsRenderer;

  this.directionsDisplay.setMap(this.map);
  this.directionsDisplay.setOptions( { suppressMarkers: true } );
    // directionsDisplay.setPanel(this.directionsPanel.nativeElement);

    this.directionsService.route({
        origin: {lat:latp,lng:langp},
        destination:  {lat:this.userInfo[0].lat,lng:this.userInfo[0].lang},
        
        travelMode: google.maps.TravelMode['DRIVING']
    }, (res, status) => {

        if(status == google.maps.DirectionsStatus.OK){
          this.directionsDisplay.setDirections(res);
        } else {
            console.warn(status);
        }

    });
  }

  markDerectionsonmaps(){
    this.startNavigatings();
    this.addDestinationMarker(this.userInfo[0].lat,this.userInfo[0].lang);
    this.addStartMarker( 6.9148,79.9731);
}    

startNavigatings(){
  this.loadMap();
  this.directionsDisplay.setMap(this.map);
  this.directionsDisplay.setOptions( { suppressMarkers: true } );
  this.directionsDisplay.setPanel(this.directionsPanel.nativeElement);

  this.directionsService.route({
      origin: {lat:6.9148,lng:79.9731},
      destination:  {lat:this.userInfo[0].lat,lng:this.userInfo[0].lang},
      
      travelMode: google.maps.TravelMode['DRIVING']
  }, (res, status) => {

      if(status == google.maps.DirectionsStatus.OK){
        this.directionsDisplay.setDirections(res);
      } else {
          console.warn(status);
      }
  });
}

  


} //class ends



