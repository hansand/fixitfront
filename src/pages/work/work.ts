
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
  selector: 'work',
  templateUrl: 'work.html'
})
export class WorkPage {
  
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

  sendJobReq(){
    let headers = new Headers();
    headers.append('Content-Type','Application/json');

    if(this.description.value!="" && this.title.value!=""){
    let body={
      empID:this.empID,
      userID:this.userService.userDetails[0]._id,
      workTitle:this.title.value,
      description:this.description.value,
      state:"pending"
    };
    
    this.http.post('http://localhost:3000/api/fixit/work',JSON.stringify(body),{headers:headers})
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
      subTitle: 'Successesfully Sent the Job Request to the Worker',
      buttons: ['Ok']
    });
    alert.present();
  }
  
  fillAllFields(){
    let alert = this.alertCtrl.create({
      title: ':(',
      subTitle: 'Please add a Job Description',
      buttons: ['Ok']
    });
    alert.present();
  }

  toEmpPage(){
    this.navCtrl.push(EmployeePage,{
      userInfo : this.userInfo,
      userID : this.empID
    });
  }


}//class end
