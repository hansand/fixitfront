import { Component, ViewChild } from '@angular/core';
import { NavController,NavParams,AlertController } from 'ionic-angular';
import {LoginPage} from '../login/login'
// import { GlobalProvider } from '../../providers/global/global'
import { UserService } from '../../app/services/users.service';
import { WorkService } from '../../app/services/work.service';
import { PENDING } from '@angular/forms/src/model';
import { WorkReqPage } from '../userWorkReqs/workreq';
import { Http,Headers} from '@angular/http';
import { RequestedWorkPage } from '../requestedWorks/requestedworks';
import { RatePage } from '../rate/rate';
import { OrderService } from '../../app/services/order.service';


@Component({
  selector: 'singleorderuser',
  templateUrl: 'singleorderuser.html',
  // providers: [GlobalProvider]
})
export class SingleOrderUser {

  details:any; //details of the logged User
  order:any;
  orderID:any;
  @ViewChild('feedback') feedback;

  constructor(public navCtrl: NavController,private userService:UserService,
    private orderService:OrderService,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    public http:Http,
) {
    this.details=this.userService.userDetails;
    this.orderID=navParams.get('id');
    
  }

ngOnInit(){
  this.getOrder();
}

serviceList(){
    this.navCtrl.push(LoginPage);
  }



  getOrder(){
      this.orderService.getOrder(this.orderID).subscribe(response=>{
          this.order=response;
          console.log(this.order);
      })
  }

  checkPending(state){
    if(state=="Pending" || state=="pending"){
      return true;
    }
    else{
      return false;
    }
  }

  checkAccepted(state){
      if( state=="Accepted"){
          return true;
      }else{
          return false;
      }

  }

  checkRejected(state){
    if(state=="Rejected"){
      return true;
    }
    else{
      return false;
    }
  }

  checkDone(state){
    if(state=="Done"){
      return false;
    }
    else{
      return true;
    }
  }

  toRequestedWorkPage(){
    this.navCtrl.push(RequestedWorkPage);
  }

  updateState(state){
    
    var promise = new  Promise((reslove,reject)=>{
      console.log("updating State");
      let headers = new Headers();
      console.log(state);
      let body={
        state:state
      };
      this.http.put('http://localhost:3000/api/fixit/order/'+this.orderID+'',body,{headers:headers})
      .subscribe(data=>{
        reslove();
        console.log(data);
      })
    })
    return promise;
  }

  changeState(state){
    this.updateState(state).then(()=>{
      this.stateUpdatedAlert(state);
        this.stateUpdatedAlert('done');
      this.toRequestedWorkPage();
    })
  }

  stateUpdatedAlert(state) {
    let alert = this.alertCtrl.create({
      title: 'Done',
      subTitle: 'A Order Has Been Marked as Completed.Please Give Feedback to The User Himself',
      buttons: ['ok']
    });
    alert.present();
  }

  completeReq(workId,empid){
        this.addfeedBack(workId).then(()=>{
            this.updateState('Done').then(()=>{
              this.stateUpdatedAlert('state');
              this.navCtrl.push(RatePage,{
                userID:empid
              })
            })
        })
  }

  addfeedBack(workId){
     var promise = new Promise((reslove,rejecct)=>{
         let headers = new Headers();
         let body={
             workId:workId,
             feedback:this.feedback.value
         }

         this.http.post('http://localhost:3000/api/fixit/feedback/wfeedback',body,{headers:headers})
         .subscribe(data=>{
             console.log(data);
            reslove();
         })
     })
     return promise;
  }

  completeReqPresent(id,empid) {
    let alert = this.alertCtrl.create({
      title: 'MArk This Order as Delivered',
      message: 'mark this order as delivers and send feed back to the Shop?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            this.completeReq(id,empid);
          }
        }
      ]
    });
    alert.present();
  }

}
