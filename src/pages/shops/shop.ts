import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { ShopService } from '../../app/services/shop.service'
import { ShopInfoPage } from '../shopinfo/shopinfo'

@Component({
  selector: 'shop',
  templateUrl: 'shop.html'
})
export class ShopPage {

  shopInfo:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private ShopService:ShopService) {
  }

  ngOnInit(){
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
    this.getShops();
  }

  getShops(){
    this.ShopService.getAllShops().subscribe(response=> {
      this.shopInfo=response;
      console.log(this.shopInfo);
     })
  }

  toShopInfoPage(id)
  {
    this.navCtrl.push(ShopInfoPage,{
      shopID : id
    });
  }


}
