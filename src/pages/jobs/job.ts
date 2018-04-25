import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShopPage } from '../shops/shop';

@Component({
  selector: 'job',
  templateUrl: 'job.html'
})
export class JobPage {

  color: string;

  constructor(public navCtrl: NavController) {

  }

  goTo(color) {
    color = color || 'No Color Entered';

    this.navCtrl.push(ShopPage, {
      data: color
    });
  }
}