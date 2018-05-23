import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeedBackService } from '../../app/services/feedback.service';
import { UserService } from '../../app/services/users.service';

@Component({
  selector: 'myfeedbacks',
  templateUrl: 'myfeedbacks.html'
})
export class MyFeedBacksPage {

    feedbacks:any;

  constructor(public navCtrl: NavController,private feedbackService:FeedBackService,private userService:UserService) {
    
  }

  ngOnInit(){
      this.getFeedbacks();
      console.log("stat ffeed back");
  }

  
  getFeedbacks(){
    this.feedbackService.getFeedback(this.userService.userDetails[0]._id).subscribe(response=> {
      this.feedbacks=response;
      console.log(this.feedbacks);
     })
  }  

  checkRate(rate){
   var ratenum=parseFloat(rate);
   if(ratenum>6){
     return true;
   }else{
     return false;
   }
  }

}
