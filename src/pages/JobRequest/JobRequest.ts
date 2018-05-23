import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login'
// import { GlobalProvider } from '../../providers/global/global'
import { UserService } from '../../app/services/users.service';
import { WorkService } from '../../app/services/work.service';
import { SingleWork } from '../singleWork/singlework';
import { SingleWorkUser } from '../singleworkuser/singleworkuser';
import { JobService } from '../../app/services/job.service';
import { JobInfoPageUser } from '../jobinfoUser/jobinfouser';



@Component({
  selector: 'JobRequest',
  templateUrl: 'JobRequest.html',
  // providers: [GlobalProvider]
})
export class JobRequestPage {

  details:any; //details of the logged User
  urJobs:any;

  constructor(public navCtrl: NavController,private userService:UserService,
    private workService:WorkService,
    private jobService:JobService
) {
    this.details=this.userService.userDetails;
  }

ngOnInit(){
  this.getJobsByUser();
}

// toSingleJob(id){
//     this.navCtrl.push(SingleWorkUser,{
//       id : id
//     });
//   }

  toJobinfoUser(id){
    this.navCtrl.push(JobInfoPageUser,{
      jobid:id
    })
  }

  getJobsByUser(){
    this.jobService.getJobByUserId(this.userService.userDetails[0]._id).subscribe(response=> {
        this.urJobs=response;
        console.log(this.urJobs);
       });
  }

  



}//end of the class

