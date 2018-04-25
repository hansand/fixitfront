import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

@Component({
  selector: 'shop',
  templateUrl: 'shop.html'
})
export class ShopPage {

  color: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.color = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
