import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
// import { SigninPage } from '../signin/signin';
import { UserService } from '../../app/services/users.service';
import { FeedBackService } from '../../app/services/feedback.service';
import { RatePage } from '../rate/rate'
import { WorkPage } from '../work/work'





@Component({
    selector: 'employee',
    templateUrl: 'employee.html'
    
  })
  export class EmployeePage {
    userID:any;
    userInfo:any;
    feedbacks:any;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private userService:UserService,
        private feedbackService:FeedBackService) {
      this.userID=navParams.get('userID');
    }
    ngOnInit(){
      console.log(this.userID);
      this.getEmployeeInfo();
      this.getFeedbacks();
    }
    getEmployeeInfo(){
      this.userService.getUserByID(this.userID).subscribe(response=> {
        this.userInfo=response;
        console.log(this.userInfo);
       })
    }

    getFeedbacks(){
      this.feedbackService.getFeedback(this.userID).subscribe(response=> {
        this.feedbacks=response;
        console.log(this.feedbacks);
       })
    }

    toRatePage(){
        this.navCtrl.push(RatePage,{
          userInfo : this.userInfo,
          userID : this.userID
        });
      }
    
    toWorkPage(){
        this.navCtrl.push(WorkPage,{
          userInfo : this.userInfo,
          userID : this.userID
        });
      }
}