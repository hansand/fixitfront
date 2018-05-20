import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShopPage } from '../shops/shop';
import { AddJobPage } from '../addjob/addjob';
// import { JobInfoPage } from '../jobdinfo/jobinfo';

@Component({
  selector: 'job',
  templateUrl: 'job.html'
})
export class JobPage {

  color: string;

  constructor(public navCtrl: NavController ) {

  }

  tojobinfopage()
  {
    // this.navCtrl.push(JobInfoPage);
  }

  addNewJob(){
    
    this.navCtrl.push(AddJobPage);
}

 
}