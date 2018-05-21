import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { UserService } from './services/users.service'

import { TabsPage } from '../pages/tabs/tabs';
import { ServicePage } from '../pages/service/service';
import { RoleService } from './services/role.service';
import { FeedBackService } from './services/feedback.service'
import { ShopService } from './services/shop.service';
import { WelcomePage } from '../pages/welcome/welcome';
import { WorkService } from './services/work.service';
import { JobService } from './services/job.service';

@Component({
  templateUrl: 'app.html',
  providers:[UserService,RoleService,FeedBackService,ShopService,WorkService,JobService]
})
export class MyApp {
  rootPage:any = WelcomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
