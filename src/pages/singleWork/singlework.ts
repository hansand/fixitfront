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

@Component({
  selector: 'singlework',
  templateUrl: 'singlework.html',
  // providers: [GlobalProvider]
})
export class SingleWork {

  details:any; //details of the logged User
  work:any;
  workID:any;
  feedback:any;


constructor(public navCtrl: NavController,private userService:UserService,private FeedBackService:FeedBackService,
    private workService:WorkService,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    public http:Http,
) {
    this.details=this.userService.userDetails;
    this.workID=navParams.get('id');
    
  }

ngOnInit(){
  this.getWork();
  this.getFeedbacks();
}

serviceList(){
    this.navCtrl.push(LoginPage);
  }



  getWork(){
      this.workService.getWork(this.workID).subscribe(response=>{
          this.work=response;
          console.log(this.work);
      })
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

  toJobReqPage(){
    this.navCtrl.push(WorkReqPage);
  }

  updateState(state){
    
    var promise = new  Promise((reslove,reject)=>{
      console.log("updating State");
      let headers = new Headers();
      console.log(state);
      let body={
        state:state
      };
      this.http.put('http://localhost:3000/api/fixit/work/'+this.workID+'',body,{headers:headers})
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
      this.toJobReqPage();
    })
  }

  stateUpdatedAlert(state) {
    let alert = this.alertCtrl.create({
      title: 'Done',
      subTitle: 'You '+state+' the Job',
      buttons: ['Welcome']
    });
    alert.present();
  }

  getFeedbacks(){
    this.FeedBackService.getWorkFeedback(this.workID).subscribe(Response=>{
      this.feedback=Response;
      console.log(this.feedback);
    })
  }

}
