

import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MapPage } from '../map/map';
import { ServicePage } from '../service/service';
import { UserService } from '../../app/services/users.service';


declare var google;

@Component({
  selector: 'servicelist',
  templateUrl: 'servicelist.html'
})
export class ServiceListPage {
  role:String;
  userInfo:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private userService:UserService) {
    this.role=navParams.get('role');
    console.log(this.role);
  }

  ionViewDidLoad(){
   this.getUsers();
  } 

  toMapPage(){
    this.navCtrl.push(MapPage,{
      userInfo : this.userInfo
    });
    
  }

  getUsers(){
    this.userService.getUsersByRole(this.role).subscribe(response=> {
      this.userInfo=response;
      console.log(this.userInfo);
     })
  }

}

   


