import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login'
// import { GlobalProvider } from '../../providers/global/global'
import { UserService } from '../../app/services/users.service';
import { WorkService } from '../../app/services/work.service';
import { SingleWork } from '../singleWork/singlework';



@Component({
  selector: 'workreq',
  templateUrl: 'workreq.html',
  // providers: [GlobalProvider]
})
export class WorkReqPage {

  details:any; //details of the logged User
  works:any;

  constructor(public navCtrl: NavController,private userService:UserService,
    private workService:WorkService
) {
    this.details=this.userService.userDetails;
  }

ngOnInit(){
  this.getAllWorks();
}

toSingleWork(id){
    this.navCtrl.push(SingleWork,{
      id : id
    });
  }

  getAllWorks(){
    this.workService.getWorks(this.userService.userDetails[0]._id).subscribe(response=> {
        this.works=response;
        console.log(this.works);
       });
  }


}//end of the class

