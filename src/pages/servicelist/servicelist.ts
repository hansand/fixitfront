import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController } from 'ionic-angular';

declare var google;

@Component({
  selector: 'servicelist',
  templateUrl: 'servicelist.html'
})
export class ServiceListPage {
    tab: string = "list";
    isAndroid: boolean = false;

   

  constructor(public navCtrl: NavController) {


  }
 

}
