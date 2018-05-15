import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceListPage } from '../servicelist/servicelist';
import { RoleService } from '../../app/services/role.service';
import { TabsPage } from '../tabs/tabs';
import { UserService } from '../../app/services/users.service';

@Component({
  selector: 'service',
  templateUrl: 'service.html',
  
  
})
export class ServicePage {

  roles:any;

  
  constructor(private userService:UserService,public navCtrl: NavController,private RoleService:RoleService) {
    console.log(this.userService.userDetails);
    
  }

  ionViewDidLoad(){
  
    this.getAllRoles();
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
     });
  }
}
