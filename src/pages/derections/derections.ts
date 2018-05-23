

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
    myLocation: any;
    marker:any;
    currentMaker:any;
    userInfo:any;
    x:any;
    position:any;
    myLatitude:any;
    mylongitude:any;

    locations=[];
    isKM:any=5000;
    latLng2:any = new google.maps.LatLng(6.927079, 79.861244);
    customMarker:any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public geolocation: Geolocation,
    private userService:UserService,
    private alertCtrl: AlertController,
    // public maps: GoogleMaps,
    public viewCtrl: ViewController) {

    this.userInfo=navParams.get('userInfo');
    console.log(this.userInfo);
  }

  ngOnInit(){
    this.loadMap();
    // this.markDerectionsonmap();
    this.markDerectionsonmaps()
    this.addDestinationMarker(this.userInfo[0].lat,this.userInfo[0].lang);
  
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
      this.cantgetLocationAlert();
      this.loadMap().then(()=>{
      this.derectionsFromDefaultLocation();    
      this.addDestinationMarker(this.userInfo[0].lat,this.userInfo[0].lang);
      this.addStartMarker(this.userService.userDetails[0].lat,this.userService.userDetails[0].lang);    
      })
    });
  }

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

startNavigating(){

    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer;

    directionsDisplay.setMap(this.map);
    directionsDisplay.setOptions( { suppressMarkers: true } );
    directionsDisplay.setPanel(this.directionsPanel.nativeElement);

    directionsService.route({
        origin: {lat:this.myLatitude,lng:this.mylongitude},
        destination:  {lat:this.userInfo[0].lat,lng:this.userInfo[0].lang},
        
        travelMode: google.maps.TravelMode['DRIVING']
    }, (res, status) => {

        if(status == google.maps.DirectionsStatus.OK){
            directionsDisplay.setDirections(res);
        } else {
            console.warn(status);
        }

    });
}

derectionsFromDefaultLocation(){
  let directionsService = new google.maps.DirectionsService;
  let directionsDisplay = new google.maps.DirectionsRenderer;

  directionsDisplay.setMap(this.map);
  directionsDisplay.setOptions( { suppressMarkers: true } );
  directionsDisplay.setPanel(this.directionsPanel.nativeElement);

  directionsService.route({
      origin: {lat:this.userService.userDetails[0].lat,lng:this.userService.userDetails[0].lang},
      destination:  {lat:this.userInfo[0].lat,lng:this.userInfo[0].lang},
      
      travelMode: google.maps.TravelMode['DRIVING']
  }, (res, status) => {

      if(status == google.maps.DirectionsStatus.OK){
          directionsDisplay.setDirections(res);
      } else {
          console.warn(status);
      }

  });
}

getCurrentCordinates(){
    var done:boolean=false;
    var promise = new Promise((reslove,reject)=>{
        // reject();
    
            Geolocation.getPlugin().getCurrentPosition(response => {
                this.myLatitude=parseFloat(response.coords.latitude);
                this.mylongitude=parseFloat(response.coords.longitude);
                console.log(this.myLatitude);
                var done=true;
                console.log("1234","done" );
                reslove();
                // if(this.myLatitude.length>0 && this.mylongitude.length>0){
                //     reslove();
                // }else{
                //     reject();
                // }
              })

              setTimeout(()=>{
                  reject();
                  console.log("waited");
              },5000)
        
 
    //  reject()
    });
    console.log(promise);
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

 

markDerectionsonmaps(){

        this.startNavigatings();
        this.addDestinationMarker(this.userInfo[0].lat,this.userInfo[0].lang);
        this.addStartMarker( 6.9148,79.9731);
  
  }    

  cantgetLocationAlert() {
    let alert = this.alertCtrl.create({
      title: 'Erro',
      subTitle: 'Google Can not Dertermine Your Location.Default Location Used Instead',
      buttons: ['OK']
    });
    alert.present();
  }

  startNavigatings(){

    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer;

    directionsDisplay.setMap(this.map);
    directionsDisplay.setOptions( { suppressMarkers: true } );
    directionsDisplay.setPanel(this.directionsPanel.nativeElement);

    directionsService.route({
        origin: {lat:6.9148,lng:79.9731},
        destination:  {lat:this.userInfo[0].lat,lng:this.userInfo[0].lang},
        
        travelMode: google.maps.TravelMode['DRIVING']
    }, (res, status) => {

        if(status == google.maps.DirectionsStatus.OK){
            directionsDisplay.setDirections(res);
        } else {
            console.warn(status);
        }

    });
}

} //class ends



