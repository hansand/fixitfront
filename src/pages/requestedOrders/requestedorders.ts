import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login'
// import { GlobalProvider } from '../../providers/global/global'
import { UserService } from '../../app/services/users.service';
import { WorkService } from '../../app/services/work.service';
import { SingleWork } from '../singleWork/singlework';
import { OrederReviewPage } from '../orderreview/orderreview';
import { OrderService } from '../../app/services/order.service';
import { SingleOrderUser } from '../singleOderUser/singleorderuser';



@Component({
  selector: 'requestedorder',
  templateUrl: 'reqestedorders.html',
  // providers: [GlobalProvider]
})
export class RequestedOrderPage {

  details:any; //details of the logged User
  order:any;

  constructor(public navCtrl: NavController,private userService:UserService,
    private orderService:OrderService
) {
    this.details=this.userService.userDetails;
  }

ngOnInit(){
  this.getAllOrder();
}

toSingleOrederUSer(id){
    this.navCtrl.push(SingleOrderUser,{
      id : id
    });
  }

  getAllOrder(){
    this.orderService.getOrderByUserId(this.userService.userDetails[0]._id).subscribe(response=> {
        this.order=response;
        console.log(this.order);
       });
  }


}//end of the class

