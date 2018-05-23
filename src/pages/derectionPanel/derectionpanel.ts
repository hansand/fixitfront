

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

@Component({
  selector: 'derectionpanel',
  templateUrl: 'derectionpanel.html'
})
export class DerectionPanelPage {

  @ViewChild('directionsPanel') directionsPanel: ElementRef;

  constructor(public navCtrl: NavController) {

  }

}
