import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddJobPage } from '../addjob/addjob';
import { JobService } from '../../app/services/job.service';
import { JobInfoPage } from '../jobdinfo/jobinfo';

@Component({
  selector: 'job',
  templateUrl: 'job.html'
})
export class JobPage {
  job:String;
  jobID:any;
  jobInfo:any;
  color: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,private JobService:JobService) {
 
    // this.job=navParams.get('jobID');
  }

  ngOnInit(){
     console.log("working");
    // this.getJobInfo();
  }

  // getJobInfo(){
  //   this.JobService.getAllJobs().subscribe(response=> {
  //     this.jobInfo=response;
  //     console.log(this.jobInfo);
  //    })
  // }
//   getJobInfo(){
//     this.JobService.getjobByID(this.jobID).subscribe(response=> {
//       this.jobInfo=response;
//       console.log(this.jobInfo);
//      })
//   }

tojobInfoPage(id)
  {
    this.navCtrl.push(JobInfoPage,{
      jobID : id
    });
  }

  addNewJob(){
    
    this.navCtrl.push(AddJobPage);
}

ionViewDidLoad() {
  console.log('ionViewDidLoad AboutPage');
  this.getJobs();
}

getJobs(){
  this.JobService.getAllJobs().subscribe(response=> {
    this.jobInfo=response;
    console.log(this.jobInfo);
   })
}
}