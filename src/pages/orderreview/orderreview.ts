import { Component } from '@angular/core';
import { NavController,NavParams,AlertController } from 'ionic-angular';
import {LoginPage} from '../login/login'
// import { GlobalProvider } from '../../providers/global/global'
import { UserService } from '../../app/services/users.service';
import { WorkService } from '../../app/services/work.service';
import { PENDING } from '@angular/forms/src/model';
import { WorkReqPage } from '../userWorkReqs/workreq';
import { Http,Headers} from '@angular/http';
import { FeedBackService } from '../../app/services/feedback.service';
import { MapPage } from '../map/map';
import { DerectionsPage } from '../derections/derections';
import { OrderService } from '../../app/services/order.service';
import { OrderReqPage } from '../orderReq/orderreq';

@Component({
  selector: 'orderreview',
  templateUrl: 'orderreview.html',
  // providers: [GlobalProvider]
})
export class OrederReviewPage {

  details:any; //details of the logged User
  order:any;
  orderID:any;
  feedback:any;
  userInfo:any;

constructor(public navCtrl: NavController,private userService:UserService,private FeedBackService:FeedBackService,
    private orderService:OrderService,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    public http:Http,
) {
    this.details=this.userService.userDetails;
    this.orderID=navParams.get('id');
    
  }

ngOnInit(){
  this.getOrder().then(()=>{
    console.log(this.order[0].userID);
    this.getUserInfo(this.order[0].userID);
  });
}

serviceList(){
    this.navCtrl.push(LoginPage);
  }

  toDerectionPage(){
    this.navCtrl.push(DerectionsPage,{
      userInfo:this.userInfo
    });
  }

  getUserInfo(userID){
    var promise = new Promise((reslove,reject)=>{
      this.userService.getUserByID(userID).subscribe(response=>{
        this.userInfo=response;
        console.log(this.userInfo);
        reslove();
     })
  
    })
    return promise;
     }

  getOrder(){
    var promise = new Promise((reslove,reject)=>{
      this.orderService.getOrder(this.orderID).subscribe(response=>{
        this.order=response;
        console.log(this.order);
        reslove();
    });
    });
    return promise;
  }

  checkPending(state){
    if(state=="Pending" || state=="Accepted"){
      return false;
    }
    else{
      return true;
    }
  }

  checkRejected(state){
    if(state=="Rejected"){
      return false;
    }
    else{
      return true;
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

  toOrderReqPage(){
    this.navCtrl.push(OrderReqPage);
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
      this.toOrderReqPage();
    })
  }

  stateUpdatedAlert(state) {
    let alert = this.alertCtrl.create({
      title: 'Done',
      subTitle: 'You '+state+' the Order',
      buttons: ['OK']
    });
    alert.present();
  }

//   getFeedbacks(){
//     this.FeedBackService.getWorkFeedback(this.orderID).subscribe(Response=>{
//       this.feedback=Response;
//       console.log(this.feedback);
//     })
//   }

}
