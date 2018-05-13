import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { ShopPage } from '../shops/shop';
import { Http,Headers} from '@angular/http';
import { FeedBackService } from '../../app/services/feedback.service';



@Component({
  selector: 'rate',
  templateUrl: 'rate.html'
})
export class RatePage {

    userInfo:any;
    userID:any;

    @ViewChild('feedback') feedback;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    public http:Http) {

    this.userInfo=navParams.get('userInfo');
    this.userID=navParams.get('userID');
    console.log(this.userInfo);
    console.log(this.userID);
  }


  addFeedBack(){
    let headers = new Headers();
    if(this.feedback.value){
        
        console.log(this.feedback.value);
        let body={
            empID:this.userID,
            feedback:this.feedback.value
          
        };
        this.http.post('http://localhost:3000/api/fixit/feedback',body,{headers:headers})
        .subscribe(data=>{
          console.log(data);
          this.FeedBackDoneAlert();
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
      subTitle: 'Please Type a Feedback',
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
}
