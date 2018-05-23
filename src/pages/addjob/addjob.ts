import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController,NavParams,AlertController,ViewController } from 'ionic-angular';
import { JobPage } from '../jobs/job';
import { RoleService } from '../../app/services/role.service';
import { Http,Headers} from '@angular/http'
import { UserService } from '../../app/services/users.service';


@Component({
    selector: 'addjob',
    templateUrl: 'addjob.html'
  })
  export class AddJobPage {
  
    color: string;

    @ViewChild('jobTitle') jobTitle;
    @ViewChild('jobOrg') jobOrg;
    @ViewChild('email') email;
    @ViewChild('password') password;
    @ViewChild('contact') contact;
    @ViewChild('description') description;
  
    constructor(public navCtrl: NavController,
      private RoleService:RoleService,
      public http:Http,
      private alertCtrl: AlertController,
     private userService:UserService) {
  
    }


    addjob(){

      let headers = new Headers();
    headers.append('Content-Type','Application/json');
  
      if(this.jobTitle.value &&
         this.jobOrg.value && 
         this.email.value &&
         this.password.value &&
         this.contact.value &&
         this.description.value){
      let body={
        userID:this.userService.userDetails[0]._id,
        jobTitle:this.jobTitle.value,
        jobOrg:this.jobOrg.value,
        email:this.email.value,
        password:this.password.value,
        contact:this.contact.value,
        description:this.description.value
      };
      
      this.http.post('http://localhost:3000/api/fixit/jobs',JSON.stringify(body),{headers:headers})
      .map(res=> res.json())
      .subscribe(data=>{
        console.log(data);
        this.addDoneAlert();
        this.Job();
      },error=>{
        console.log("oops")
      })
    }else{
      this.fillAllFields()
    }
    
    }
    addDoneAlert() {
      let alert = this.alertCtrl.create({
        title: 'gg',
        subTitle: 'Successessfuly Regestered',
        buttons: ['Awsome']
      });
      alert.present();
    }
    
    fillAllFields(){
      let alert = this.alertCtrl.create({
        title: ':(',
        subTitle: 'Fill All Fields',
        buttons: ['Ok']
      });
      alert.present();
    }

    Job(){
        this.navCtrl.push(JobPage);
    }
  }