import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login'
// import { GlobalProvider } from '../../providers/global/global'
import { UserService } from '../../app/services/users.service';
import { WorkReqPage } from '../userWorkReqs/workreq';
import { RequestedWorkPage } from '../requestedWorks/requestedworks';
import { JobRequestPage } from '../JobRequest/JobRequest';



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

toWorkReqPage(){
  console.log("hahah");
    this.navCtrl.push(WorkReqPage);
  }

  toRequestedWorkPage(){
    this.navCtrl.push(RequestedWorkPage);
  }

  tojobreq(){
    console.log("navigating to job request page");
      this.navCtrl.push(JobRequestPage);
    }
  checkShop(role){
    if(role == "shop" || role=="Shop"){
      return true;
    }else{
      return false;
    }
  }
}
