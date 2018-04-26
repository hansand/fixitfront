webpackJsonp([0],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:3000/api/fixit/users';
    }
    UserService.prototype.getAllUsers = function () {
        return this.http.get(this.baseUrl).map(function (res) { return res.json(); });
    };
    UserService.prototype.getUsersByRole = function (role) {
        return this.http.get(this.baseUrl + '/' + role + '').map(function (res) { return res.json(); });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoleService = /** @class */ (function () {
    function RoleService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:3000/api/fixit/roles';
    }
    RoleService.prototype.getAllRoles = function () {
        return this.http.get(this.baseUrl).map(function (res) { return res.json(); });
    };
    RoleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], RoleService);
    return RoleService;
}());

//# sourceMappingURL=role.service.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShopPage = /** @class */ (function () {
    function ShopPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.color = navParams.get('data');
    }
    ShopPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    ShopPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'shop',template:/*ion-inline-start:"/home/hansand/projects/fixit/src/pages/shops/shop.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>About</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <label>Color Entered: {{color}}</label>\n</ion-content>'/*ion-inline-end:"/home/hansand/projects/fixit/src/pages/shops/shop.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ShopPage);
    return ShopPage;
}());

//# sourceMappingURL=shop.js.map

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 163;

/***/ }),

/***/ 208:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 208;

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jobs_job__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shops_shop__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';
// import { HomePage } from '../home/home';




var TabsPage = /** @class */ (function () {
    // tab5Root = HomePage;
    // tab6Root = AboutPage;
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__service_service__["a" /* ServicePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__jobs_job__["a" /* JobPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__shops_shop__["a" /* ShopPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__user_user__["a" /* UserPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/hansand/projects/fixit/src/pages/tabs/tabs.html"*/'<ion-tabs color="primary">\n  <ion-tab [root]="tab1Root" tabTitle="Services" tabIcon="hammer"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Jobs" tabIcon="people"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Shops" tabIcon="pricetags"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="User Profile" tabIcon="person"></ion-tab>\n  \n</ion-tabs>\n'/*ion-inline-end:"/home/hansand/projects/fixit/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_map__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_users_service__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServiceListPage = /** @class */ (function () {
    function ServiceListPage(navCtrl, navParams, userService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.role = navParams.get('role');
        console.log(this.role);
    }
    ServiceListPage.prototype.ionViewDidLoad = function () {
        this.getUsers();
    };
    ServiceListPage.prototype.toMapPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__map_map__["a" /* MapPage */], {
            userInfo: this.userInfo
        });
    };
    ServiceListPage.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsersByRole(this.role).subscribe(function (response) {
            _this.userInfo = response;
            console.log(_this.userInfo);
        });
    };
    ServiceListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'servicelist',template:/*ion-inline-start:"/home/hansand/projects/fixit/src/pages/servicelist/servicelist.html"*/'<ion-header >\n    <ion-navbar color="primary">\n      <ion-title>\n        \n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    \n            <ion-list >\n\n              <ion-item *ngFor="let user of userInfo" class="single-worker">\n                \n                <ion-thumbnail item-start>\n                  <img class="avatar" src="http://res.cloudinary.com/dhglhpsmu/image/upload/c_scale,w_166/v1524171287/man.png">\n                </ion-thumbnail>\n                <h2 class="name" >{{user.fname}} {{user.lname}}</h2>\n                <span class="rate" >\n                  Ratings: 9/10  <br>\n                  Piliyandala s\n                </span>\n              </ion-item>\n\n            </ion-list>\n            <ion-fab (click)="toMapPage" class="fabMap" bottom right>\n                <!-- <ion-label (click)="toMapPage" class="labelMap" >Click Here to Map view</ion-label> -->\n                <button (click)="toMapPage()" ion-button round icon-start > <ion-icon name="map"></ion-icon>Map View</button>\n                \n              </ion-fab>\n            \n  </ion-content>\n'/*ion-inline-end:"/home/hansand/projects/fixit/src/pages/servicelist/servicelist.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__app_services_users_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_services_users_service__["a" /* UserService */]) === "function" && _c || Object])
    ], ServiceListPage);
    return ServiceListPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=servicelist.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_users_service__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapPage = /** @class */ (function () {
    function MapPage(navCtrl, navParams, geolocation, userService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.userService = userService;
        this.alertCtrl = alertCtrl;
        this.userInfo = navParams.get('userInfo');
    }
    MapPage.prototype.ngOnInit = function () {
        this.loadMap();
        this.addMarkers();
        // this.nullLocation();
        this.getCurrentCordinates();
        console.log("map ngOnit");
    };
    MapPage.prototype.ionViewDidLoad = function () {
    };
    MapPage.prototype.getCurrentCordinates = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */].getPlugin().getCurrentPosition(function (x) {
            _this.myLatitude = parseFloat(x.coords.latitude);
            _this.mylongitude = parseFloat(x.coords.longitude);
            // this.position.push(this.myLatitude);
            // this.position.push(this.mylongitude);
            _this.position = x.coords;
            console.log(_this.position);
            if (_this.position) {
                _this.addCurrentLocation();
            }
            else {
                _this.locationErroAlert();
            }
        });
    };
    // getCurrentCordinates(){
    //   Geolocation.getPlugin().getCurrentPosition(x => {
    //     this.myLatitude=parseFloat(x.coords.latitude);
    //     this.mylongitude=parseFloat(x.coords.longitude);
    //     // this.position.push(this.myLatitude);
    //     // this.position.push(this.mylongitude);
    //     this.position=x.coords;        
    //      console.log(this.position);
    //   },function(err){
    //       if(err){
    //         console.log(err);
    //         console.log("ErroettingCurrentCOrdinates");
    //       }
    //     console.log("gotCurrentCOrdinates");
    //   });
    //     console.log(this.myLatitude);
    //     console.log(this.mylongitude);
    // }
    MapPage.prototype.addMarkers = function () {
        var _this = this;
        console.log(this.userInfo);
        this.userInfo.forEach(function (element) {
            var lat = parseFloat(element.lat);
            var lang = parseFloat(element.lang);
            _this.addMarker(lat, lang);
        });
        console.log(this.myLatitude);
        console.log(this.mylongitude);
    };
    MapPage.prototype.loadMap = function () {
        //set Deafult Zoom to Srilanka
        var latLng = new google.maps.LatLng(6.927079, 79.861244);
        var mapOptions = {
            center: latLng,
            zoom: 7,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        // this.marker.addEventListener(GoogleMapsEvent.MAP_CLICK, function() {
        //   alert("InfoWindow is clicked");
        //   console.log("hansaka");
        // });
        //   this.marker.GoogleMapsEvent.MAP_CLICK.subscribe(
        //     (data) => {
        //         alert("Click MAP");
        //         console.log("hansaka");
        //     }
        // );
    };
    MapPage.prototype.addCurrentLocation = function () {
        // console.log(this.myLatitude);
        // console.log(this.mylongitude);
        // console.log("current Start");
        //   // let latLng = new google.maps.LatLng(this.myLatitude, this.mylongitude);
        //   // let latLng = new google.maps.LatLng(6.9148,79.9731);
        //   console.log(this.myLatitude);
        //   console.log(this.mylongitude);
        //   // console.log(latLng);
        //   // this.myLocation=latLng;
        //   let mapOptions = {
        //     center: {lat:6.9148,lang:79.9731},
        //     zoom: 10,
        //     mapTypeId: google.maps.MapTypeId.ROADMAP
        //   }
        //   console.log(mapOptions.zoom);
        //   this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        //   //set Marker 
        //   this.currentMaker = new google.maps.Marker({
        //     map: this.map,
        //     animation: google.maps.Animation.DROP,
        //     position:{lat:6.9148,lang:79.9731},
        //     // position:{lat:6.80491179,lang:79.9482853},
        //     icon: {
        //       url: '../assets/imgs/myLocation2.png'
        //     },
        //     title: 'your Loaction',
        //     'snippet': 'your Loaction',
        //     draggable: false
        //   });
        //   this.addMarkers();
        // // }, (err) => {
        // //   console.log(err);
        //   // this.nullLocation();
        // // });
        // console.log("finish");
        if (this.mylongitude && this.myLatitude) {
            var latLng = new google.maps.LatLng(this.myLatitude, this.mylongitude);
            console.log(latLng);
            this.myLocation = latLng;
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
            //set Marker 
            this.currentMaker = new google.maps.Marker({
                map: this.map,
                animation: google.maps.Animation.DROP,
                position: this.myLocation,
                // position:{lat:6.80491179,lang:79.9482853},
                icon: {
                    url: '../assets/imgs/myLocation2.png'
                },
                title: 'your Loaction',
                'snippet': 'your Loaction',
                draggable: false
            });
            this.addMarkers();
        }
        else {
            this.locationErroAlert();
        }
    };
    MapPage.prototype.addMarker = function (latp, langp) {
        this.marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: { lat: latp, lng: langp },
            icon: {
                url: '../assets/imgs/myLocation.png'
            },
            draggable: false
        });
        this.marker.addListener('click', function () {
            console.log("clicked");
        });
        // var InfoWindow= new google.maps.InfoWindow({
        //   content:"hansaka",
        //   run(){
        //     console.log("han");
        //   }
        // })
        // InfoWindow.run();
    };
    MapPage.prototype.nullLocation = function () {
        var latLng = new google.maps.LatLng(6.9148, 79.9731);
        console.log(latLng);
        this.myLocation = latLng;
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        //set Marker 
        this.currentMaker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.myLocation,
            // position:{lat:6.80491179,lang:79.9482853},
            icon: {
                url: '../assets/imgs/myLocation2.png'
            },
            title: 'your Loaction',
            'snippet': 'your Loaction',
            draggable: false
        });
        this.addMarkers();
    };
    MapPage.prototype.locationErroAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Problem Ocuured While Getting Your Location',
            subTitle: 'Make Sure to Enable GPS on Your Device',
            buttons: ['OK']
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _a || Object)
    ], MapPage.prototype, "mapElement", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'map',template:/*ion-inline-start:"/home/hansand/projects/fixit/src/pages/map/map.html"*/'<ion-header >\n        <ion-navbar color="primary">\n          <ion-title>\n            Map\n          </ion-title>\n        </ion-navbar>\n      </ion-header>\n      \n      <ion-content padding>\n\n            <div #map id="map" style="height: 100%;" class="please-work"></div>\n            <ion-fab  class="fabMap" bottom right>\n              <!-- <ion-label (click)="toMapPage" class="labelMap" >Click Here to Map view</ion-label> -->\n              <button (click)=" getCurrentCordinates();" ion-fab> <ion-icon  name="locate"></ion-icon></button>\n            </ion-fab>\n      </ion-content>'/*ion-inline-end:"/home/hansand/projects/fixit/src/pages/map/map.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__app_services_users_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_services_users_service__["a" /* UserService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _f || Object])
    ], MapPage);
    return MapPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shops_shop__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JobPage = /** @class */ (function () {
    function JobPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    JobPage.prototype.goTo = function (color) {
        color = color || 'No Color Entered';
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__shops_shop__["a" /* ShopPage */], {
            data: color
        });
    };
    JobPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'job',template:/*ion-inline-start:"/home/hansand/projects/fixit/src/pages/jobs/job.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Passing Data in Pages\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label>Enter</ion-label>\n      <ion-input placeholder=\'Your fav color...\' #color></ion-input>\n    </ion-item>\n  </ion-list>\n  <button ion-button color="secondary" (click)="goTo(color.value)">About Page</button>\n</ion-content>'/*ion-inline-end:"/home/hansand/projects/fixit/src/pages/jobs/job.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], JobPage);
    return JobPage;
}());

//# sourceMappingURL=job.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserPage = /** @class */ (function () {
    function UserPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    UserPage.prototype.serviceList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'user',template:/*ion-inline-start:"/home/hansand/projects/fixit/src/pages/user/user.html"*/'<ion-header >\n  <ion-navbar color="primary">\n    <ion-title >\n      User Profile\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content align = "Center" padding="true">\n <b>User Information</b><br><br>\n \n\n<ion-thumbnail item-start>\n<img class = "useravat" src="http://res.cloudinary.com/dhglhpsmu/image/upload/c_scale,w_166/v1524171287/man.png">\n</ion-thumbnail>\n\n<h2 class="name" >Shawn Ragel </h2>\n<span>\n<b>Customer</b><br>\nRatings: 10/10  <br>\nKadawatha\n \n</span>\n\n\n<ion-col  (click)="serviceList();"  class="" col-6>\n<ion-card class="service-list">\n <span> Logout </span> \n</ion-card> \n</ion-col>\n</ion-content>\n'/*ion-inline-end:"/home/hansand/projects/fixit/src/pages/user/user.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_service__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    LoginPage.prototype.ServiceList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__service_service__["a" /* ServicePage */]);
    };
    LoginPage.prototype.Signin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signin_signin__["a" /* SigninPage */]);
    };
    LoginPage.prototype.print = function () {
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'login',template:/*ion-inline-start:"/home/hansand/projects/fixit/src/pages/login/login.html"*/'<ion-header >\n    <ion-navbar color="primary">\n      <ion-title>\n        Login\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>   \n       <form >\n    <ion-item>\n      <!-- <ion-label>Username</ion-label> -->\n      <ion-label floating>Username</ion-label>\n      <ion-input type="text"  name="username"></ion-input>\n    </ion-item>\n    <ion-item>\n      <!-- <ion-label>Password</ion-label> -->\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password"  name="password"></ion-input>\n    </ion-item>\n    <button (click)="ServiceList();" ion-button type="submit" block> Login </button>\n    <button (click)="Signin();" ion-button type="submit" block> Sign In</button>\n  </form>\n  '/*ion-inline-end:"/home/hansand/projects/fixit/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__employee_employee__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_role_service__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SigninPage = /** @class */ (function () {
    function SigninPage(navCtrl, RoleService, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.RoleService = RoleService;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.tab = "SigninPage";
    }
    SigninPage_1 = SigninPage;
    SigninPage.prototype.ngOnInit = function () {
        this.getAllRoles();
    };
    SigninPage.prototype.toServieList = function () {
    };
    SigninPage.prototype.ServiceList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__service_service__["a" /* ServicePage */]);
    };
    SigninPage.prototype.UsersignIn = function () {
        this.navCtrl.push(SigninPage_1);
    };
    SigninPage.prototype.EmployeePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__employee_employee__["a" /* EmployeePage */]);
    };
    SigninPage.prototype.getAllRoles = function () {
        var _this = this;
        this.RoleService.getAllRoles().subscribe(function (response) {
            _this.roles = response;
            console.log(_this.roles);
        });
    };
    SigninPage.prototype.signIn = function () {
        var _this = this;
        console.log(this.rolex.value);
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'Application/json');
        // var url= 'http://localhost:3000/api/fixit/users';
        // let postData = new FormData();
        // postData.append('fname','lname','email');
        // this.data = this.http.post(url,postData);
        // this.data.subscribe(data=>{
        //   console.log();
        // })
        if (this.fname.value &&
            this.lname.value &&
            this.email.value &&
            this.telephone.value &&
            this.password.value &&
            this.rolex.value &&
            this.rolex.value &&
            this.address.value) {
            var body = {
                fname: this.fname.value,
                lname: this.lname.value,
                email: this.email.value,
                telephone: this.telephone.value,
                password: this.password.value,
                role: this.rolex.value,
                nearTown: this.address.value,
                ratings: 5,
                lat: 5,
                lang: 6
            };
            this.http.post('http://localhost:3000/api/fixit/users', JSON.stringify(body), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                _this.signDoneAlert();
            }, function (error) {
                console.log("opps");
            });
        }
        else {
            this.fillAllFields();
        }
    };
    SigninPage.prototype.signDoneAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'gg',
            subTitle: 'Successessfuly Regestered',
            buttons: ['Awsome']
        });
        alert.present();
    };
    SigninPage.prototype.fillAllFields = function () {
        var alert = this.alertCtrl.create({
            title: ':(',
            subTitle: 'Fill All Fields',
            buttons: ['Ok']
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('fname'),
        __metadata("design:type", Object)
    ], SigninPage.prototype, "fname", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('lname'),
        __metadata("design:type", Object)
    ], SigninPage.prototype, "lname", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('email'),
        __metadata("design:type", Object)
    ], SigninPage.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], SigninPage.prototype, "password", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('telephone'),
        __metadata("design:type", Object)
    ], SigninPage.prototype, "telephone", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('address'),
        __metadata("design:type", Object)
    ], SigninPage.prototype, "address", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('rolex'),
        __metadata("design:type", Object)
    ], SigninPage.prototype, "rolex", void 0);
    SigninPage = SigninPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'signin',template:/*ion-inline-start:"/home/hansand/projects/fixit/src/pages/signin/signin.html"*/'<ion-header >\n    <ion-navbar color="primary">\n      <ion-title>\n        Sign In\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>  \n\n    Register as an User of a Shop\n      <ion-segment class="segmentBase" [(ngModel)]="tab" color="primary" >\n          <ion-segment-button value="SigninPage">\n              User\n            </ion-segment-button>\n            <ion-segment-button value="list">\n              Shop\n            </ion-segment-button>\n      </ion-segment>\n   \n          <div [ngSwitch]="tab">\n     \n            <form *ngSwitchCase="\'SigninPage\'" >\n              <ion-item >\n\n                <ion-label floating>First Name</ion-label>\n                <ion-input type="text"  #fname ></ion-input>\n              </ion-item>\n\n              <ion-item>\n \n                <ion-label floating>Last Name</ion-label>\n                <ion-input #lname type="text"  name="lname"></ion-input>\n              </ion-item>\n  \n              <ion-item>\n \n                <ion-label floating>Email</ion-label>\n                <ion-input #email type="text"  name="email"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label floating>Password</ion-label>\n                <ion-input #password type="password"  name="password"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label floating>Mobile Number</ion-label>\n                <ion-input #telephone  type="number"  name="telephone"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label floating>Address</ion-label>\n                <ion-input #address type="text"  name="address"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label floating>User Type</ion-label>\n                  <ion-select   #rolex>\n                    <ion-option *ngFor="let role of roles" value="{{role.roleName}}">{{role.roleName}}</ion-option>\n                  </ion-select>\n              </ion-item>\n\n     \n\n\n              <button (click)="signIn()" ion-button type="submit" block> Sign In </button>\n\n            </form>\n\n            <form *ngSwitchCase="\'list\'">\n              <ion-item>           \n                <ion-label floating>Shop Name</ion-label>\n                <ion-input type="text"  name="sname"></ion-input>\n              </ion-item>\n\n              <ion-item>           \n                  <ion-label floating>Email</ion-label>\n                  <ion-input type="email"  name="email"></ion-input>\n                </ion-item>\n\n              <ion-item>           \n                <ion-label floating>Password</ion-label>\n                <ion-input type="text"  name="spassword"></ion-input>\n              </ion-item>\n\n              <ion-item>           \n                <ion-label floating>Contact Number</ion-label>\n                <ion-input type="text"  name="scontact"></ion-input>\n              </ion-item>\n\n              <ion-item>           \n                <ion-label floating>Address</ion-label>\n                <ion-input type="text"  name="saddress"></ion-input>\n              </ion-item>\n              \n              <button (click)="ServiceList();" ion-button type="submit" block> Register </button>\n              <button (click)="EmployeePage();" ion-button type="submit" block> fdfd </button>\n\n            </form>\n          </div>\n  </ion-content>\n        \n      '/*ion-inline-end:"/home/hansand/projects/fixit/src/pages/signin/signin.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_role_service__["a" /* RoleService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SigninPage);
    return SigninPage;
    var SigninPage_1;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(358);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_service_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_shops_shop__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_jobs_job__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_user_user__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_servicelist_servicelist__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_map_map__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_geolocation__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_login_login__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_signin_signin__ = __webpack_require__(352);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_service_service__["a" /* ServicePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_shops_shop__["a" /* ShopPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_jobs_job__["a" /* JobPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_servicelist_servicelist__["a" /* ServiceListPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_signin_signin__["a" /* SigninPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_17__angular_http__["c" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_service_service__["a" /* ServicePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_shops_shop__["a" /* ShopPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_jobs_job__["a" /* JobPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_servicelist_servicelist__["a" /* ServiceListPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_signin_signin__["a" /* SigninPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_users_service__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_role_service__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/hansand/projects/fixit/src/app/app.html"*/'<!-- <ion-nav [root]="rootPage"></ion-nav> -->\n\n<ion-menu [content]="content">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <button ion-item (click)="openPage(homePage)">\n          Home\n        </button>\n        <button ion-item (click)="openPage(friendsPage)">\n          Friends\n        </button>\n        <button ion-item (click)="openPage(eventsPage)">\n          Events\n        </button>\n        <button ion-item (click)="closeMenu()">\n          Close Menu\n        </button>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  \n  <ion-nav id="nav" #content [root]="rootPage"></ion-nav>'/*ion-inline-end:"/home/hansand/projects/fixit/src/app/app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_users_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_6__services_role_service__["a" /* RoleService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeePage = /** @class */ (function () {
    function EmployeePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    EmployeePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'employee',template:/*ion-inline-start:"/home/hansand/projects/fixit/src/pages/employee/employee.html"*/'<ion-header >\n    <ion-navbar color="primary">\n      <ion-title >\n        User Profile\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n '/*ion-inline-end:"/home/hansand/projects/fixit/src/pages/employee/employee.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], EmployeePage);
    return EmployeePage;
}());

//# sourceMappingURL=employee.js.map

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/hansand/projects/fixit/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/hansand/projects/fixit/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/home/hansand/projects/fixit/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/hansand/projects/fixit/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/hansand/projects/fixit/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Welcome to Ionic!</h2>\n  <p>\n    This starter project comes with simple tabs-based layout for apps\n    that are going to primarily use a Tabbed UI.\n  </p>\n  <p>\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n    update any existing page or create new pages.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/home/hansand/projects/fixit/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicelist_servicelist__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_role_service__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServicePage = /** @class */ (function () {
    function ServicePage(navCtrl, RoleService) {
        this.navCtrl = navCtrl;
        this.RoleService = RoleService;
    }
    ServicePage.prototype.ngOnInit = function () {
        this.getAllRoles();
    };
    ServicePage.prototype.serviceList = function (role) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__servicelist_servicelist__["a" /* ServiceListPage */], {
            role: role
        });
    };
    ServicePage.prototype.getAllRoles = function () {
        var _this = this;
        this.RoleService.getAllRoles().subscribe(function (response) {
            _this.roles = response;
            console.log(_this.roles);
        });
    };
    ServicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'service',template:/*ion-inline-start:"/home/hansand/projects/fixit/src/pages/service/service.html"*/'<ion-header >\n    <ion-navbar color="primary">\n            \n      <ion-title >\n        Welcome to FixIt\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content class="background" padding="true">\n    <ion-content class="card-background-page" padding="true">\n      <h4 align = "center"><b>Select a Service</b></h4>\n\n      <ion-card  *ngFor="let role of roles"  (click)="serviceList(role.roleName);" >\n        <img src="https://i.pinimg.com/originals/49/31/2b/49312bb613a671f9e41c3c51aaaf77f6.jpg"/>\n        <div class="card-title"> {{role.roleName}}</div>\n    </ion-card>\n   \n  </ion-content>\n  '/*ion-inline-end:"/home/hansand/projects/fixit/src/pages/service/service.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__app_services_role_service__["a" /* RoleService */]])
    ], ServicePage);
    return ServicePage;
}());

//# sourceMappingURL=service.js.map

/***/ })

},[353]);
//# sourceMappingURL=main.js.map