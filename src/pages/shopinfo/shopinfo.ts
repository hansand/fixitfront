import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { ShopService } from '../../app/services/shop.service'
import { UserService } from '../../app/services/users.service';
// import { SigninPage } from '../signin/signin';




@Component({
    selector: 'shopinfo',
    templateUrl: 'shopinfo.html'
  })
  export class ShopInfoPage {
    shopID:any;
    shopInfo:any;
    constructor(public navCtrl: NavController,public navParams: NavParams,private userService:UserService) {
      this.shopID=navParams.get('shopID');
      console.log(this.shopID)
    }

    ngOnInit(){
      this.getShopInfo();
    }
    
    getShopInfo(){
      this.userService.getUserByID(this.shopID).subscribe(response=> {
        this.shopInfo=response;
        console.log(this.shopInfo);
       })
    }
}