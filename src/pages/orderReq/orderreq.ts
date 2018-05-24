import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login'
// import { GlobalProvider } from '../../providers/global/global'
import { UserService } from '../../app/services/users.service';
import { WorkService } from '../../app/services/work.service';
import { SingleWork } from '../singleWork/singlework';
import { OrderService } from '../../app/services/order.service';
import { SingleOrderUser } from '../singleOderUser/singleorderuser';
import { OrederReviewPage } from '../orderreview/orderreview';



@Component({
  selector: 'orderreq',
  templateUrl: 'orderreq.html',
  // providers: [GlobalProvider]
})
export class OrderReqPage {

  details:any; //details of the logged User
  orders:any;

  constructor(public navCtrl: NavController,private userService:UserService,
    private orderService:OrderService
) {
    this.details=this.userService.userDetails;
  }

ngOnInit(){
  this.getAllOrders();
}

toOrderReviewPage(id){
    this.navCtrl.push(OrederReviewPage,{
      id : id
    });
  }

  getAllOrders(){
    this.orderService.getOrders(this.userService.userDetails[0]._id).subscribe(response=> {
        this.orders=response;
        console.log(this.orders);
       });
  }


}//end of the class

