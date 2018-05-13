import { Component,ViewChild } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { ServicePage } from '../service/service';
import { EmployeePage } from '../employee/employee';
import { RoleService } from '../../app/services/role.service';
import { Http,Headers} from '@angular/http'
import { LoginPage } from '../login/login'

@Component({
  selector: 'signin',
  templateUrl: 'signin.html'
})
export class SigninPage {
  roles:any;

  @ViewChild('fname') fname;
  @ViewChild('lname') lname;
  @ViewChild('email') email;
  @ViewChild('password') password;
  @ViewChild('telephone') telephone;
  @ViewChild('address') address;
  @ViewChild('rolex') rolex;
  
  tab: string = "SigninPage";

  constructor(public navCtrl: NavController,
    private RoleService:RoleService,
    public http:Http,
    private alertCtrl: AlertController) {

  }

  ngOnInit(){
    this.getAllRoles();
  }

 
  ServiceList(){
    this.navCtrl.push(ServicePage);
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
    // var url= 'http://localhost:3000/api/fixit/users';
    // let postData = new FormData();
    // postData.append('fname','lname','email');
    // this.data = this.http.post(url,postData);
    // this.data.subscribe(data=>{
    //   console.log();
    // })
    if(this.fname.value && 
      this.lname.value && 
      this.email.value &&
      this.telephone.value &&
      this.password.value &&
      this.rolex.value &&
      this.rolex.value &&
      this.address.value){
    let body={
      fname:this.fname.value,
      lname:this.lname.value,
      email:this.email.value,
      telephone:this.telephone.value,
      password:this.password.value,
      role:this.rolex.value,
      nearTown:this.address.value,
      ratings:0,
      lat:5,
      lang:6
    };
    
    this.http.post('http://localhost:3000/api/fixit/users',JSON.stringify(body),{headers:headers})
    .map(res=> res.json())
    .subscribe(data=>{
      console.log(data);
      this.signDoneAlert();
      this.ServiceList();
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
}