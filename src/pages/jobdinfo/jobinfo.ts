import { Component } from '@angular/core';
import { NavController,NavParams, AlertController } from 'ionic-angular';
import { JobPage } from '../jobs/job';
import { Http,Headers} from '@angular/http'
import { JobService } from '../../app/services/job.service';
import { UserService } from '../../app/services/users.service';
import { JobRequestPage } from '../JobRequest/JobRequest';





@Component({
    selector: 'jobinfo',
    templateUrl: 'jobinfo.html'
  })
  export class JobInfoPage {
    jobID:any;
    jobInfo:any;
    dltjob:any;
    
  
    constructor(public navCtrl: NavController,public navParams: NavParams,
      public http:Http,private alertCtrl: AlertController,private JobService:JobService,
      private userService:UserService) {
      this.jobID=navParams.get('jobID');
      console.log(this.jobID)
  
    }

    ngOnInit(){
      this.getjobInfo();
      console.log(this.userService.userDetails[0].name);
    }

    getjobInfo(){
      this.JobService.getjobByID(this.jobID).subscribe(response=> {
        this.jobInfo=response;
        console.log(this.jobInfo);
       })
    }
    tojobPage()
  {
    this.navCtrl.push(JobPage);
  }
  
deleteJob(id){
  this.JobService.deletejobbyid(this.jobID).subscribe(response=> {
    this.dltjob=response;
    this.tojobPage()
    // this.dltDoneAlert()
    console.log(this.dltjob);
   })
}
reqSent() {
  let alert = this.alertCtrl.create({
    title: 'Sent',
    subTitle: 'Successessfuly Applied For the Job,Orgnaization Will Contact You',
    buttons: ['ok']
  });
  alert.present();
}

sendjobreq(id){
  let headers = new Headers();
  headers.append('Content-Type','Application/json');

  let body={
    jobid:id,
    userid:this.userService.userDetails[0]._id,
    userName:this.userService.userDetails[0].name
  }
  this.http.post('http://localhost:3000/api/fixit/jobreq',JSON.stringify(body),{headers:headers})
  .map(res=> res.json())
  .subscribe(data=>{
    console.log(data);
    this.navCtrl.push(JobPage);
    this.reqSent();
  },error=>{
    console.log("oops")
  })  
}



sendjobreqpresent(id) {
        let alert = this.alertCtrl.create({
          title: 'Confirm Send Request? ',
          message: 'Do you want to Send a Job Request to This Job ?',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'Send',
              handler: () => {
                this.sendjobreq(id)
              }
            }
          ]
        });
        alert.present();
      }
    
  
    }
