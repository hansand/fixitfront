
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController,NavParams,AlertController,ViewController } from 'ionic-angular';
import { ServicePage } from '../service/service';
import { EmployeePage } from '../employee/employee';
import { RoleService } from '../../app/services/role.service';
import { Http,Headers} from '@angular/http'
import { LoginPage } from '../login/login'
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
  selector: 'signin',
  templateUrl: 'signin.html'
})
export class SigninPage {
  roles:any;
  position:any;


  @ViewChild('name') name;
  @ViewChild('email') email;
  @ViewChild('password') password;
  @ViewChild('telephone') telephone;
  @ViewChild('address') address;
  @ViewChild('rolex') rolex;
  @ViewChild('shopType') ShopType;
  
  
  tab: string = "SigninPage";

  constructor(public navCtrl: NavController,
    private RoleService:RoleService,
    public http:Http,
    public geolocation: Geolocation,
    private alertCtrl: AlertController) {

      this.getCurrentCordinates().then(()=>{
        
      },
      
   
      
      ()=>console.log("rej"));

  }

  ngOnInit(){
    this.getAllRoles();
  }

 
  toLoginPage(){
    this.navCtrl.push(LoginPage);
  }
  UsersignIn()
  {
    this.navCtrl.push(SigninPage);
  }
  EmployeePage(){
    this.navCtrl.push(EmployeePage);
  }

  getAllRoles(){
    this.RoleService.getAllRoles().subscribe(response=> {
      this.roles=response;
      console.log(this.roles);
     })
  }

  signIn(){
    console.log(this.rolex.value)
    let headers = new Headers();
    headers.append('Content-Type','Application/json');

    if(this.name.value && 
      this.email.value &&
      this.telephone.value &&
      this.password.value &&
      this.rolex.value &&
      this.address.value){
    let body={
      name:this.name.value,
      email:this.email.value,
      telephone:this.telephone.value,
      password:this.password.value,
      role:this.rolex.value,
      nearTown:this.address.value,
      ratings:0,
      shopType:this.ShopType.value,
      lat:5,
      lang:6
    };
    
    this.http.post('http://localhost:3000/api/fixit/users',JSON.stringify(body),{headers:headers})
    .map(res=> res.json())
    .subscribe(data=>{
      console.log(data);
      this.signDoneAlert();
      this.toLoginPage();
    },error=>{
      console.log("opps")
    })
  }else{
    this.fillAllFields()
  }
  }

  signDoneAlert() {
    let alert = this.alertCtrl.create({
      title: 'gg',
      subTitle: 'Successessfuly Regestered',
      buttons: ['Awsome']
    });
    alert.present();
  }
  
  fillAllFields(){
    let alert = this.alertCtrl.create({
      title: ':(',
      subTitle: 'Fill All Fields',
      buttons: ['Ok']
    });
    alert.present();
  }

  //locations 

  getCurrentCordinates(){
    var promise = new Promise((resolve, reject) => {
      Geolocation.getPlugin().getCurrentPosition(result => {
        this.position=result.coords;
        console.log(this.position);
        if(this.position.length===0){
          reject()
        }else{
        resolve();
        }        
    });
  
  });
  return promise;
}


}//class end
