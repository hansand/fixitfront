import { Component } from '@angular/core';
import { NavController,NavParams, AlertController } from 'ionic-angular';
import { JobPage } from '../jobs/job';
import { JobService } from '../../app/services/job.service';




@Component({
    selector: 'jobinfo',
    templateUrl: 'jobinfo.html'
  })
  export class JobInfoPage {
    jobID:any;
    jobInfo:any;
    
  
    constructor(public navCtrl: NavController,public navParams: NavParams,private JobService:JobService) {
      this.jobID=navParams.get('jobID');
      console.log(this.jobID)
  
    }

    ngOnInit(){
      this.getjobInfo();
    }

    getjobInfo(){
      this.JobService.getjobByID(this.jobID).subscribe(response=> {
        this.jobInfo=response;
        console.log(this.jobInfo);
       })
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
