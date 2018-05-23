import { Component } from '@angular/core';
import { NavController,NavParams, AlertController } from 'ionic-angular';
import { JobPage } from '../jobs/job';
import { JobService } from '../../app/services/job.service';
import { JobReqService } from '../../app/services/jobreq.service';
import { EmployeePage } from '../employee/employee';
import { JobRequestPage } from '../JobRequest/JobRequest';




@Component({
    selector: 'jobinfouser',
    templateUrl: 'jobinforuser.html'
  })
  export class JobInfoPageUser {
    jobid:any;
    jobInfo:any;
    applicants:any;
    
  
    constructor(public navCtrl: NavController,public navParams: NavParams,private JobService:JobService,
    private jobreqService:JobReqService,private alertCtrl: AlertController
    ) {
      this.jobid=navParams.get('jobid');
      console.log(this.jobid)
  
    }

    ngOnInit(){
      this.getjobInfo();
      this.getApplicants();
    }

    getjobInfo(){
      this.JobService.getjobByID(this.jobid).subscribe(response=> {
        this.jobInfo=response;
        console.log(this.jobInfo);
       })
    }

    getApplicants(){
      this.jobreqService.getReqByJobId(this.jobid).subscribe(response=>{
        this.applicants=response;
        console.log(this.applicants);
      })
    }

    toemppage(id){
      this.navCtrl.push(EmployeePage,{
        isFromJob:true,
        userID:id
      });
    }

    deleteJob(id){
      this.JobService.deletejobbyid(this.jobid).subscribe(response=> {
        this.dltDoneAlert();
        this.toJobRequst();
       })

      }

      dltDoneAlert() {
        let alert = this.alertCtrl.create({
          title: 'Deleted',
          subTitle: 'Successessfuly Deleted',
          buttons: ['ok']
        });
        alert.present();
      }

    toJobRequst(){
      this.navCtrl.push(JobRequestPage);
    }
    







    // presentConfirm() {
    //     let alert = this.alertCtrl.create({
    //       title: 'Confirm ',
    //       message: 'Do you want toRemove this Job?',
    //       buttons: [
    //         {
    //           text: 'Cancel',
    //           role: 'cancel',
    //           handler: () => {
    //             console.log('Cancel clicked');
    //           }
    //         },
    //         {
    //           text: 'Delete',
    //           handler: () => {
    //             console.log('Buy clicked');
    //           }
    //         }
    //       ]
    //     });
    //     alert.present();
    //   }
    
  
    }

    // job(){
    //     this.navCtrl.push(JobPage);
    // }
