import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {LoginPage} from '../login/login'
// import { GlobalProvider } from '../../providers/global/global'
import { UserService } from '../../app/services/users.service';
import { WorkReqPage } from '../userWorkReqs/workreq';
import { RequestedWorkPage } from '../requestedWorks/requestedworks';
import { JobRequestPage } from '../JobRequest/JobRequest';
import { MyFeedBacksPage } from '../myfeedbacks/myfeedback';
import { ReqOrderPage } from '../reqOrders/reqorders';
import { OrderReqPage } from '../orderReq/orderreq';
import { RequestedOrderPage } from '../requestedOrders/requestedorders';



@Component({
  selector: 'user',
  templateUrl: 'user.html',
  // providers: [GlobalProvider]
})
export class UserPage {

  details:any;
  constructor(public navCtrl: NavController,private userService:UserService,private alertCtrl: AlertController) {
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

  toMyFeedbacks(){
    this.navCtrl.push(MyFeedBacksPage)
  }

  signOutPresent() {
    let alert = this.alertCtrl.create({
      title: 'Confirm purchase',
      message: 'Do you want to Log Out ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Log Out',
          handler: () => {
           this.signOut();
          }
        }
      ]
    });
    alert.present();
  }

  signOut(){
    this.navCtrl.push(LoginPage);
  }

  toOrderReqPage(){
    this.navCtrl.push(OrderReqPage)
  }

  toRequestedOrderPage(){
    this.navCtrl.push(RequestedOrderPage)
  }

}
