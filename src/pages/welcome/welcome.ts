import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceListPage } from '../servicelist/servicelist';
import {SigninPage} from '../signin/signin';
import { ServicePage } from '../service/service'
import { TabsPage } from '../tabs/tabs'
import { LoginPage } from '../login/login';
import { LoginShopPage } from '../loginShop/loginShop';

@Component({
  selector: 'welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  
  constructor(public navCtrl: NavController) {
    
  }
LoginAsPerson(){
    this.navCtrl.push(LoginPage);
    
  }

  LoginAsShop(){
    this.navCtrl.push(LoginShopPage);
    
  }

Signin(){
    this.navCtrl.push(SigninPage);
  }

 
}
