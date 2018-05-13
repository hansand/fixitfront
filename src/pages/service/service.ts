import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceListPage } from '../servicelist/servicelist';
import { RoleService } from '../../app/services/role.service';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'service',
  templateUrl: 'service.html'
  
})
export class ServicePage {

  roles:any;

  
  constructor(public navCtrl: NavController,private RoleService:RoleService) {
  }

  ionViewDidLoad(){
  
    this.getAllRoles();
    // this.navCtrl.setRoot(TabsPage);
  }

  serviceList(role){
    this.navCtrl.push(ServiceListPage,{
      role : role
    });
  }

  getAllRoles(){
    this.RoleService.getAllRoles().subscribe(response=> {
      this.roles=response;
      // console.log(this.roles);
     })
  }


  



}
