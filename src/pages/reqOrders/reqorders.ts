
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController,NavParams,AlertController,ViewController } from 'ionic-angular';
import { ServicePage } from '../service/service';
import { EmployeePage } from '../employee/employee';
import { RoleService } from '../../app/services/role.service';
import { Http,Headers} from '@angular/http'
import { LoginPage } from '../login/login'
import { UserService } from '../../app/services/users.service';
import { Geolocation } from '@ionic-native/geolocation';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
 } from '@ionic-native/google-maps';

@Component({
  selector: 'reqorders',
  templateUrl: 'reqorders.html'
})
export class ReqOrderPage {
  
  @ViewChild('title') title;
  @ViewChild('description') description;
  empID:any;
  userInfo:any;

  constructor(public navCtrl: NavController,
    private RoleService:RoleService,
    private userService:UserService,
    public http:Http,
    public navParams: NavParams,
    private alertCtrl: AlertController) {

      this.empID=navParams.get('userID');
      this.userInfo=navParams.get('userInfo');
      console.log(this.empID);
      console.log(this.userService.userDetails[0]._id)
      
  }

  sendOrderReq(){
    let headers = new Headers();
    headers.append('Content-Type','Application/json');

    if(this.description.value!="" && this.title.value!=""){
    let body={
      empID:this.empID,
      userID:this.userService.userDetails[0]._id,
      orderTitle:this.title.value,
      description:this.description.value,
      state:"pending"
    };
    
    this.http.post('http://localhost:3000/api/fixit/order',JSON.stringify(body),{headers:headers})
    .map(res=> res.json())
    .subscribe(data=>{
      console.log(data);
      this.sucesess();
      this.toEmpPage();
    },error=>{
      console.log("opps")
    })
  }else{
    this.fillAllFields()
  }
  }

  sucesess(){
    let alert = this.alertCtrl.create({
      title: ':)',
      subTitle: 'Successesfully Sent the Order Request to the Shop',
      buttons: ['Ok']
    });
    alert.present();
  }
  
  fillAllFields(){
    let alert = this.alertCtrl.create({
      title: ':(',
      subTitle: 'Please add a Order Description and Title ',
      buttons: ['Ok']
    });
    alert.present();
  }

  toEmpPage(){
    this.navCtrl.push(EmployeePage,{
      userInfo : this.userInfo,
      userID : this.empID,
      isShop:true
    });
  }
  
  sendJobReqPresent(id) {
    let alert = this.alertCtrl.create({
      title: 'Cinfirm Send JOb Request',
      message: 'Do you want to Send This Request?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirm',
          handler: () => {
          //  this.signOut();
          this.sendOrderReq();
          }
        }
      ]
    });
    alert.present();
  }

}//class end
