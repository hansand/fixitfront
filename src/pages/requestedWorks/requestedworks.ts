import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login'
// import { GlobalProvider } from '../../providers/global/global'
import { UserService } from '../../app/services/users.service';
import { WorkService } from '../../app/services/work.service';
import { SingleWork } from '../singleWork/singlework';
import { SingleWorkUser } from '../singleworkuser/singleworkuser';



@Component({
  selector: 'requestedworks',
  templateUrl: 'requestedworks.html',
  // providers: [GlobalProvider]
})
export class RequestedWorkPage {

  details:any; //details of the logged User
  works:any;

  constructor(public navCtrl: NavController,private userService:UserService,
    private workService:WorkService
) {
    this.details=this.userService.userDetails;
  }

ngOnInit(){
  this.getWorksByUser();
}

toSingleWork(id){
    this.navCtrl.push(SingleWorkUser,{
      id : id
    });
  }

  getWorksByUser(){
    this.workService.getWorkByUserId(this.userService.userDetails[0]._id).subscribe(response=> {
        this.works=response;
        console.log(this.works);
       });
  }


}//end of the class

