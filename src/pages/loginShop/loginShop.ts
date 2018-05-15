import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceListPage } from '../servicelist/servicelist';
import {SigninPage} from '../signin/signin';
import { ServicePage } from '../service/service'
import { TabsPage } from '../tabs/tabs'

@Component({
  selector: 'loginshop',
  templateUrl: 'loginShop.html'
})
export class LoginShopPage {
  @ViewChild('email') email;
  @ViewChild('password') password;
  @ViewChild('person') person;
  @ViewChild('shop') shop;
  
  constructor(public navCtrl: NavController) {
    
  }
  
ServiceList(){
    this.navCtrl.push(ServicePage);
    this.navCtrl.setRoot(TabsPage);
  }

Signin(){
    this.navCtrl.push(SigninPage);
  }
}
