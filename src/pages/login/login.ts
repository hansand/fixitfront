import { Component,ViewChild,Injectable } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { ServiceListPage } from '../servicelist/servicelist';
import {SigninPage} from '../signin/signin';
import { ServicePage } from '../service/service'
import { UserService } from '../../app/services/users.service'; 
import { TabsPage } from '../tabs/tabs'
// import { GlobalProvider } from '../../providers/global/global'

@Component({
  selector: 'login',
  templateUrl: 'login.html',
  // providers: [GlobalProvider]
})

@Injectable()
export class LoginPage {
  @ViewChild('email') email;
  @ViewChild('password') password;
  isLogOk:any;

  
  constructor(public navCtrl: NavController,private userService:UserService,
    private alertCtrl: AlertController
  ) {
    
  }
ServiceList(){
    this.navCtrl.push(ServicePage);
    this.navCtrl.setRoot(TabsPage);
  }

Signin(){
    this.navCtrl.push(SigninPage);
  }

  getUserDetails(){
    this.userService.saveUser(this.email.value,this.password.value).then(()=>{
     if(this.userService.userDetails.length === 0 ){
       this.noMatch();
     }else{
       this.ServiceList();
     }
    })
  }

  noMatch(){
    let alert = this.alertCtrl.create({
      title: 'Login Faild',
      subTitle: 'That Fixit Account does not exist.Enter a Deferent account or get a new one',
      buttons: ['Ok']
    });
    alert.present();
  }

}
