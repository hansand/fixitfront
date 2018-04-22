import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceListPage } from '../servicelist/servicelist';
@Component({
  selector: 'service',
  templateUrl: 'service.html'
  
})
export class ServicePage {

  constructor(public navCtrl: NavController) {

  }

  serviceList(){
    this.navCtrl.push(ServiceListPage);
  }

}
