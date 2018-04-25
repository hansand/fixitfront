import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceListPage } from '../servicelist/servicelist';
import { RoleService } from '../../app/services/role.service';

@Component({
  selector: 'service',
  templateUrl: 'service.html'
  
})
export class ServicePage {

  roles:any;

  constructor(public navCtrl: NavController,private RoleService:RoleService) {

  }

  ngOnInit(){
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
      console.log(this.roles);
     })
  }



}
