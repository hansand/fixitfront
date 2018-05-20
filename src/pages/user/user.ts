import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login'
// import { GlobalProvider } from '../../providers/global/global'
import { UserService } from '../../app/services/users.service';
import { JobReqPage } from '../userJobReqs/jobreq';


@Component({
  selector: 'user',
  templateUrl: 'user.html',
  // providers: [GlobalProvider]
})
export class UserPage {

  details:any;
  constructor(public navCtrl: NavController,private userService:UserService) {
    this.details=this.userService.userDetails;
    console.log(this.details[0].fname);
  }

ngOnInit(){
}

toJobReqPage(){
    this.navCtrl.push(JobReqPage);
  }
}
