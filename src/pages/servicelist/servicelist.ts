

import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapPage } from '../map/map';

declare var google;

@Component({
  selector: 'servicelist',
  templateUrl: 'servicelist.html'
})
export class ServiceListPage {
  constructor(public navCtrl: NavController) {
  }

  toMapPage(){
    this.navCtrl.push(MapPage);
  }

  

}

   


