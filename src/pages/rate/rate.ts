import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { ShopPage } from '../shops/shop';
import { Http,Headers} from '@angular/http';
import { FeedBackService } from '../../app/services/feedback.service';
import { UserService } from '../../app/services/users.service';
import { EmployeePage } from '../employee/employee';



@Component({
  selector: 'rate',
  templateUrl: 'rate.html'
})
export class RatePage {

    userInfo:any;
    userID:any;
    count:number = 1;
    totalPoints:number=0;
    finalPoint:any=0;

    @ViewChild('feedback') feedback;
        @ViewChild('ratepoint') ratepoint;
        feedbacks:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    public http:Http,
    private feedbackService:FeedBackService,
    private userService:UserService) {

    this.userInfo=navParams.get('userInfo');
    this.userID=navParams.get('userID');
    console.log(this.userInfo);
    console.log(this.userID);
  }


  addFeedBack(){
    
    let headers = new Headers();
    if(this.feedback.value && this.ratepoint.value.length>0 ){
        
        console.log(this.feedback.value);
        let body={
            empID:this.userID,
            feedback:this.feedback.value,
            userID:this.userService.userDetails[0]._id,
            userName:this.userService.userDetails[0].name,
            ratePoint:this.ratepoint.value
        };
        this.http.post('http://localhost:3000/api/fixit/feedback',body,{headers:headers})
        .subscribe(data=>{
          console.log(data);
          this.FeedBackDoneAlert();
          this.getFeedbacksandCalc().then(()=>{
            this.updateRatings();
            this.navCtrl.push(EmployeePage,{
              userID:this.userID
            });
          });
        },error=>{
          console.log("opps")
        })
      }else{
        this.fillAllFields()
      }

  }

  fillAllFields(){
    let alert = this.alertCtrl.create({
      title: ':(',
      subTitle: 'Please Type a Feedback and Give a Rate',
      buttons: ['Ok']
    });
    alert.present();
  }

  FeedBackDoneAlert() {
    let alert = this.alertCtrl.create({
      title: 'Thank You',
      subTitle: 'Your Feedback Succeesessfully Submited',
      buttons: ['Welcome']
    });
    alert.present();
  }

  updateRatings(){
    console.log("hansaka ",this.totalPoints);
    let headers = new Headers();
    console.log(this.feedback.value);
    let body={
      ratings:this.finalPoint
    };
    this.http.put('http://localhost:3000/api/fixit/users/getid/'+this.userID+'',body,{headers:headers})
    .subscribe(data=>{
      console.log(data);
    })
  }
  
  getFeedbacksandCalc(){

    var promise = new Promise((reslove,reject)=>{
      this.feedbackService.getFeedback(this.userID).subscribe(response=> {
        this.feedbacks=response;
        response.forEach(element => {
           this.count=this.count+1;
           this.totalPoints=this.totalPoints+Number(element.ratePoint);
           console.log(this.totalPoints);
        });
        this.finalPoint=(this.totalPoints/this.count).toFixed(2);
        console.log(this.finalPoint);
        if(this.finalPoint!=0){
          reslove();
        }
       })
       
    })

     return promise;
  }

  addFeedBackPresent() {
    let alert = this.alertCtrl.create({
      title: 'Confirm Ratings',
      message: 'Do you want to Rate This User?',
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
            this.addFeedBack();
          }
        }
      ]
    });
    alert.present();
  }
}
