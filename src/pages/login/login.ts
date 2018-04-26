import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceListPage } from '../servicelist/servicelist';
import {SigninPage} from '../signin/signin';
import { ServicePage } from '../service/service'

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
    
  }
ServiceList(){
    this.navCtrl.push(ServicePage);
  }

Signin(){
    this.navCtrl.push(SigninPage);
  }

  print(){
  }
}
