

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
  selector: 'map',
  templateUrl: 'map.html'
})
export class MapPage {

    @ViewChild('map') mapElement: ElementRef;
    @ViewChild('searchLocation') searchLocation;
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
    isKM:any=500000;
    latLng2:any = new google.maps.LatLng(6.927079, 79.861244);
    customMarker:any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public geolocation: Geolocation,
    private userService:UserService,
    private alertCtrl: AlertController,
    // public maps: GoogleMaps,
    public viewCtrl: ViewController
  ) {
    this.userInfo=navParams.get('userInfo');
  }

  ngOnInit(){
    this.loadMap();
    this.addMarkers();
    this.nullLocation();
    // this.addCurrentLocation();
    console.log("map ngOnit");
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
                console.log("waited");
                  // reject();
                  
              },5000)
        
 
    //  reject()
    });
    console.log(promise);
    return promise;
}


  addMarkers(){
    console.log(this.userInfo);
      this.userInfo.forEach(element => {
        var lat=parseFloat(element.lat);
        var lang=parseFloat(element.lang);
        console.log(element._id);
        this.addMarker(lat,lang,element._id);
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
   
    this.getCurrentCordinates().then(()=>{
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
    }),()=>{
    this.locationErroAlert();
      
    }

  }

  // markerClickEmp(id){
  //   this.navCtrl.push(EmployeePage,{
  //     userID : id
  //   });
  // }

  addMarker(latp,langp,id){
    this.marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position:{ lat:latp,lng:langp},
      icon: {
        url: '../assets/imgs/myLocation.png'
      },
      draggable: false
    });

    this.marker.addListener('click', () => {
      this.navCtrl.push(EmployeePage,{
        userID : id
      });
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

  searchCancel(){
    this.locations=[];
    console.log(this.locations);
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
              
              
                // this.locations=results;
                // console.log(results.name);
                // console.log(this.locations);
                // console.log(status);
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

    this.searchCancel();
    this. addMarkers();
    }

} //class ends



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



  //things in the Add codeiates
   
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