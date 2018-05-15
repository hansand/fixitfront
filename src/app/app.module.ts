import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ServicePage } from '../pages/service/service';
import { ShopPage } from '../pages/shops/shop';
import { JobPage } from '../pages/jobs/job';
import { UserPage } from '../pages/user/user';
import { TabsPage } from '../pages/tabs/tabs';
import { Http } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServiceListPage } from '../pages/servicelist/servicelist';
import { MapPage } from '../pages/map/map';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpModule } from '@angular/http';
import { LoginPage } from '../pages/login/login';
import { SigninPage } from '../pages/signin/signin';
import { EmployeePage } from '../pages/employee/employee';
import { RatePage } from '../pages/rate/rate';
import { ShopInfoPage } from '../pages/shopinfo/shopinfo';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginShopPage } from '../pages/loginShop/loginShop';
// import { GlobalProvider } from '../providers/global/global';
import { UserProvider } from '../providers/user/user';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ServicePage,
    ShopPage,
    JobPage,
    UserPage,
    TabsPage,
    ServiceListPage,
    MapPage,
    LoginPage,
    SigninPage,
    EmployeePage,
    RatePage,
    ShopInfoPage,
    WelcomePage,LoginShopPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ServicePage,
    ShopPage,
    UserPage,
    JobPage,
    TabsPage,
    ServiceListPage,
    MapPage,
    LoginPage,
    SigninPage,
    EmployeePage,
    RatePage,ShopInfoPage,WelcomePage,LoginShopPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    // GlobalProvider,
    UserProvider
  ]
})
export class AppModule {}
