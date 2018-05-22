webpackJsonp([0],{

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JobService = /** @class */ (function () {
    function JobService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:3000/api/fixit/jobs';
    }
    JobService.prototype.getAllJobs = function () {
        return this.http.get(this.baseUrl).map(function (res) { return res.json(); });
    };
    JobService.prototype.getjobByID = function (id) {
        return this.http.get(this.baseUrl + '/' + id + '').map(function (res) { return res.json(); });
    };
    JobService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], JobService);
    return JobService;
}());

//# sourceMappingURL=job.service.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jobs_job__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shops_shop__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user__ = __webpack_require__(363);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/hansand/projects/fixit/src/pages/tabs/tabs.html"*/'<ion-tabs color="primary">\n  <ion-tab [root]="tab1Root" tabTitle="Services" tabIcon="person"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Jobs" tabIcon="people"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Shops" tabIcon="pricetags"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="User Profile" tabIcon="hammer"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/hansand/projects/fixit/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addjob_addjob__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_job_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jobdinfo_jobinfo__ = __webpack_require__(360);
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
    function JobPage(navCtrl, navParams, JobService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.JobService = JobService;
        // this.job=navParams.get('jobID');
    }
    JobPage.prototype.ngOnInit = function () {
        console.log("working");
        // this.getJobInfo();
    };
    // getJobInfo(){
    //   this.JobService.getAllJobs().subscribe(response=> {
    //     this.jobInfo=response;
    //     console.log(this.jobInfo);
    //    })
    // }
    //   getJobInfo(){
    //     this.JobService.getjobByID(this.jobID).subscribe(response=> {
    //       this.jobInfo=response;
    //       console.log(this.jobInfo);
    //      })
    //   }
    JobPage.prototype.tojobInfoPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__jobdinfo_jobinfo__["a" /* JobInfoPage */], {
            jobID: id
        });
    };
    JobPage.prototype.addNewJob = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__addjob_addjob__["a" /* AddJobPage */]);
    };
    JobPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
        this.getJobs();
    };
    JobPage.prototype.getJobs = function () {
        var _this = this;
        this.JobService.getAllJobs().subscribe(function (response) {
            _this.jobInfo = response;
            console.log(_this.jobInfo);
        });
    };
    JobPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'job',template:/*ion-inline-start:"/home/hansand/projects/fixit/src/pages/jobs/job.html"*/'<ion-header >\n  <ion-navbar color="primary">\n    <ion-title>\n      Jobs\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding align="center">\n    <b>Available Jobs</b><br><br>\n\n          <ion-list >\n            <ion-item *ngFor="let job of jobInfo" (click)="tojobInfoPage(job._id)" >             \n              <ion-thumbnail item-start>\n                <img class="avatar" src="https://cdn.iconscout.com/public/images/icon/premium/png-512/office-employees-team-company-culture-corporate-people-3292b2e7a208948e-512x512.png">\n              </ion-thumbnail>\n              <h2 class="name" >{{job.jobTitle}} </h2>\n                <span class="rate" >\n                  {{job.jobOrg}}  <br>\n                  {{ job.contact }}\n                </span>\n          </ion-item> \n             \n          </ion-list>  \n          <ion-fab bottom left  >\n              <button ion-fab transition-delay ="20ms"><ion-icon name="add"></ion-icon></button>\n              <ion-fab-list side=top>\n                  <button ion-button round mini (click)="addNewJob()" > Add job</button>\n                  <button ion-button round mini> Update job</button>\n                  <button ion-button round mini> Delete job</button>\n              </ion-fab-list>\n            </ion-fab>     \n</ion-content>\n'/*ion-inline-end:"/home/hansand/projects/fixit/src/pages/jobs/job.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__app_services_job_service__["a" /* JobService */]])
    ], JobPage);
    return JobPage;
}());

//# sourceMappingURL=job.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkReqPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_users_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_work_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__singleWork_singlework__ = __webpack_require__(364);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { GlobalProvider } from '../../providers/global/global'



var WorkReqPage = /** @class */ (function () {
    function WorkReqPage(navCtrl, userService, workService) {
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.workService = workService;
        this.details = this.userService.userDetails;
    }
    WorkReqPage.prototype.ngOnInit = function () {
        this.getAllWorks();
    };
    WorkReqPage.prototype.toSingleWork = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__singleWork_singlework__["a" /* SingleWork */], {
            id: id
        });
    };
    WorkReqPage.prototype.getAllWorks = function () {
        var _this = this;
        this.workService.getWorks(this.userService.userDetails[0]._id).subscribe(function (response) {
            _this.works = response;
            console.log(_this.works);
        });
    };
    WorkReqPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'workreq',template:/*ion-inline-start:"/home/hansand/projects/fixit/src/pages/userWorkReqs/workreq.html"*/'<ion-header >\n    <ion-navbar color="primary">\n      <ion-title>\n         Work Requests\n         \n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    \n            <ion-list >\n\n              <ion-item *ngFor="let work of works" class="single-worker" (click)="toSingleWork(work._id);" >\n                \n\n                <h2 class="name" > {{work.workTitle}}  </h2> \n                <span class="rate" >\n                  {{work.state}} <br>\n                </span>\n              </ion-item>\n\n            </ion-list>\n  </ion-content>\n'/*ion-inline-end:"/home/hansand/projects/fixit/src/pages/userWorkReqs/workreq.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_services_users_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_work_service__["a" /* WorkService */]])
    ], WorkReqPage);
    return WorkReqPage;
}()); //end of the class

//# sourceMappingURL=workreq.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestedWorkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_users_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_work_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__singleworkuser_singleworkuser__ = __webpack_require__(366);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { GlobalProvider } from '../../providers/global/global'



var RequestedWorkPage = /** @class */ (function () {
    function RequestedWorkPage(navCtrl, userService, workService) {
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.workService = workService;
        this.details = this.userService.userDetails;
    }
    RequestedWorkPage.prototype.ngOnInit = function () {
        this.getWorksByUser();
    };
    RequestedWorkPage.prototype.toSingleWork = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__singleworkuser_singleworkuser__["a" /* SingleWorkUser */], {
            id: id
        });
    };
    RequestedWorkPage.prototype.getWorksByUser = function () {
        var _this = this;
        this.workService.getWorkByUserId(this.userService.userDetails[0]._id).subscribe(function (response) {
            _this.works = response;
            console.log(_this.works);
        });
    };
    RequestedWorkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'requestedworks',template:/*ion-inline-start:"/home/hansand/projects/fixit/src/pages/requestedWorks/requestedworks.html"*/'<ion-header >\n    <ion-navbar color="primary">\n      <ion-title>\n         Job Requests\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    \n            <ion-list >\n\n              <ion-item *ngFor="let work of works" class="single-worker" (click)="toSingleWork(work._id);" >\n                \n\n                <h2 class="name" > {{work.workTitle}}  </h2> \n                <span class="rate" >\n                  {{work.state}} <br>\n                </span>\n              </ion-item>\n\n            </ion-list>\n  </ion-content>\n'/*ion-inline-end:"/home/hansand/projects/fixit/src/pages/requestedWorks/requestedworks.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_services_users_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_work_service__["a" /* WorkService */]])
    ], RequestedWorkPage);
    return RequestedWorkPage;
}()); //end of the class

//# sourceMappingURL=requestedworks.js.map

/***/ }),

/***/ 174:
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
webpackEmptyAsyncContext.id = 174;

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(23);
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
        return this.http.get(this.baseUrl + '/roleid/' + role + '/' + this.userDetails[0]._id + '').map(function (res) { return res.json(); });
    };
    UserService.prototype.getUserByID = function (id) {
        return this.http.get(this.baseUrl + '/getid/' + id + '').map(function (res) { return res.json(); });
    };
    UserService.prototype.checklogin = function (email, password) {
        return this.http.get(this.baseUrl + '/login/' + email + '/' + password + '').map(function (res) { return res.json(); });
    };
    UserService.prototype.saveUser = function (email, password) {
        var _this = this;
        var promise = new Promise(function (res, rej) {
            var x = _this.checklogin(email, password).subscribe(function (response) {
                _this.userDetails = response;
                console.log(_this.userDetails);
                res();
            });
        });
        return promise;
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ 219:
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
webpackEmptyAsyncContext.id = 219;

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_map__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_users_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__employee_employee__ = __webpack_require__(68);
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
        console.log(this.userService.userDetails[0]._id);
    }
    ServiceListPage.prototype.ionViewDidLoad = function () {
        this.getUsers();
    };
    ServiceListPage.prototype.toEmpPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__employee_employee__["a" /* EmployeePage */], {
            userID: id
        });
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
    ServiceListPage.prototype.checkRate = function (rate) {
        if (parseFloat(rate) > 7.0) {
            return true;
        }
        else {
            return false;
        }
    };
    ServiceListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'servicelist',template:/*ion-inline-start:"/home/hansand/projects/fixit/src/pages/servicelist/servicelist.html"*/'<ion-header >\n    <ion-navbar color="primary">\n      <ion-title>\n        \n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    \n            <ion-list >\n\n              <ion-item *ngFor="let user of userInfo" class="single-worker" (click)="toEmpPage(user._id);" >\n                \n                <ion-thumbnail item-start>\n                  <img class="avatar" src="http://res.cloudinary.com/dhglhpsmu/image/upload/c_scale,w_166/v1524171287/man.png">\n                </ion-thumbnail>\n                <h2 class="name" >{{user.name}}  </h2> <img *ngIf="checkRate()" src="../../assets/imgs/like.png" alt="">\n                <span class="rate" >\n                  Ratings: {{user.ratings}}/10  <br>\n                  {{ user.nearTown }}\n                </span>\n              </ion-item>\n\n            </ion-list>\n            <ion-fab (click)="toMapPage" class="fabMap" bottom right>\n                <!-- <ion-label (click)="toMapPage" class="labelMap" >Click Here to Map view</ion-label> -->\n                <button (click)="toMapPage()" ion-button round icon-start > <ion-icon name="map"></ion-icon>Map View</button>\n              </ion-fab>\n            \n  </ion-content>\n'/*ion-inline-end:"/home/hansand/projects/fixit/src/pages/servicelist/servicelist.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__app_services_users_service__["a" /* UserService */]])
    ], ServiceListPage);
    return ServiceListPage;
}());

//# sourceMappingURL=servicelist.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_users_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__employee_employee__ = __webpack_require__(68);
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
    function MapPage(navCtrl, navParams, geolocation, userService, alertCtrl, 
        // public maps: GoogleMaps,
        viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.userService = userService;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.locations = [];
        this.isKM = 500000;
        this.latLng2 = new google.maps.LatLng(6.927079, 79.861244);
        this.userInfo = navParams.get('userInfo');
    }
    MapPage.prototype.ngOnInit = function () {
        this.loadMap();
        this.addMarkers();
        // this.nullLocation();
        this.addCurrentLocation();
        console.log("map ngOnit");
    };
    MapPage.prototype.getCurrentCordinates = function () {
        var _this = this;
        var promise = new Promise(function (reslove, reject) {
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */].getPlugin().getCurrentPosition(function (response) {
                _this.myLatitude = parseFloat(response.coords.latitude);
                _this.mylongitude = parseFloat(response.coords.longitude);
                // this.position.push(this.myLatitude);
                // this.position.push(this.mylongitude);
                reslove();
            });
            setTimeout(function () {
                reject();
            }, 5000);
        });
        return promise;
    };
    MapPage.prototype.addMarkers = function () {
        var _this = this;
        console.log(this.userInfo);
        this.userInfo.forEach(function (element) {
            var lat = parseFloat(element.lat);
            var lang = parseFloat(element.lang);
            console.log(element._id);
            _this.addMarker(lat, lang, element._id);
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
        var _this = this;
        this.getCurrentCordinates().then(function () {
            var latLng = new google.maps.LatLng(_this.myLatitude, _this.mylongitude);
            console.log(latLng);
            _this.myLocation = latLng;
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            //set Marker 
            _this.currentMaker = new google.maps.Marker({
                map: _this.map,
                animation: google.maps.Animation.DROP,
                position: _this.myLocation,
                // position:{lat:6.80491179,lang:79.9482853},
                icon: {
                    url: '../assets/imgs/myLocation2.png'
                },
                title: 'your Loaction',
                'snippet': 'your Loaction',
                draggable: false
            });
            _this.addMarkers();
        }), function () {
            _this.locationErroAlert();
        };
    };
    // markerClickEmp(id){
    //   this.navCtrl.push(EmployeePage,{
    //     userID : id
    //   });
    // }
    MapPage.prototype.addMarker = function (latp, langp, id) {
        var _this = this;
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
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__employee_employee__["a" /* EmployeePage */], {
                userID: id
            });
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
    MapPage.prototype.searchCancel = function () {
        this.locations = [];
        console.log(this.locations);
    };
    MapPage.prototype.SearchPlace = function () {
        var _this = this;
        if (this.searchLocation.value == "") {
            this.searchCancel();
        }
        else {
            // this.loadMap();
            this.searchCancel();
            var service = new google.maps.places.PlacesService(this.map);
            service.nearbySearch({
                location: this.latLng2,
                radius: this.isKM,
                keyword: this.searchLocation.value
            }, function (results, status) {
                // this.locations=results;
                // console.log(results.name);
                // console.log(this.locations);
                // console.log(status);
                if (results) {
                    results.forEach(function (element) {
                        console.log(element);
                        _this.locations.push(element);
                        console.log(element.geometry.location.lat());
                        // console.log(this.locations);  
                    });
                }
            });
        }
    };
    MapPage.prototype.addSearchLocation = function (latp, langp) {
        var lat = parseFloat(latp).toFixed(7);
        var lang = parseFloat(langp).toFixed(7);
        console.log(lat);
        console.log(lang);
        var latLng = new google.maps.LatLng(latp, langp);
        console.log(latLng);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        this.customMarker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: { lat: latp, lng: langp },
            icon: {
                url: '../assets/imgs/searchlocation.png'
            },
            draggable: false
        });
        this.searchCancel();
        this.addMarkers();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _a || Object)
    ], MapPage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('searchLocation'),
        __metadata("design:type", Object)
    ], MapPage.prototype, "searchLocation", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'map',template:/*ion-inline-start:"/home/hansand/projects/fixit/src/pages/map/map.html"*/'<ion-header >\n        <ion-navbar color="primary">\n          <ion-title>\n            Map\n          </ion-title>\n        </ion-navbar>\n        <ion-toolbar color="primary">	\n          <ion-searchbar #searchLocation placeholder="Seach Places"  (keyup.eneter)="SearchPlace();"  (input)="SearchPlace()">\n          </ion-searchbar>\n        </ion-toolbar>\n      </ion-header>\n      \n      <ion-content padding>\n        <!-- <div class="Map-Search-Bar">\n            <ion-item>\n              <ion-label> Search Places  </ion-label>\n              <ion-input #searchLocation (input)="SearchPlace()"> \n                  <ion-option> ha ha</ion-option>\n              </ion-input>\n            </ion-item>\n        </div> -->\n        <!-- <ion-searchbar  #searchLocation (input)="SearchPlace();xss();" placeholder="Search"></ion-searchbar>\n        <ion-list>\n        <button  class="sList" ion-item *ngFor="let location of locations">\n            {{location.name}}\n        </button>\n        </ion-list> -->\n        <ion-grid ion-fixed no-padding>\n            <ion-scroll style="width:100%;height:120px" scrollY="true">\n          <ion-list scroll="true" style="position: absolute;z-index:1;width:100%;">\n            <ion-item (click)="addSearchLocation(location.geometry.location.lat(),location.geometry.location.lng())"  *ngFor="let location of locations" color="silver" >\n              {{location.name}}\n            </ion-item>\n          </ion-list>\n          </ion-scroll>\n        </ion-grid>\n\n\n        <div  #map id="map" style="height: 100%;" class="please-work"></div>\n            <ion-fab  class="fabMap" bottom right>\n              <!-- <ion-label (click)="toMapPage" class="labelMap" >Click Here to Map view</ion-label> -->\n              <button (click)=" addCurrentLocation();" ion-fab> <ion-icon  name="locate"></ion-icon></button>\n            </ion-fab>\n      </ion-content>'/*ion-inline-end:"/home/hansand/projects/fixit/src/pages/map/map.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__app_services_users_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_services_users_service__["a" /* UserService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */]) === "function" && _g || Object])
    ], MapPage);
    return MapPage;
    var _a, _b, _c, _d, _e, _f, _g;
}()); //class ends

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
//things in the Add codeiates
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
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_feedback_service__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RatePage = /** @class */ (function () {
    function RatePage(navCtrl, navParams, alertCtrl, http, feedbackService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.feedbackService = feedbackService;
        this.count = 1;
        this.totalPoints = 0;
        this.finalPoint = 0;
        this.userInfo = navParams.get('userInfo');
        this.userID = navParams.get('userID');
        console.log(this.userInfo);
        console.log(this.userID);
    }
    RatePage.prototype.addFeedBack = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        if (this.feedback.value) {
            console.log(this.feedback.value);
            var body = {
                empID: this.userID,
                feedback: this.feedback.value,
                ratePoint: this.ratepoint.value
            };
            this.http.post('http://localhost:3000/api/fixit/feedback', body, { headers: headers })
                .subscribe(function (data) {
                console.log(data);
                _this.FeedBackDoneAlert();
                _this.getFeedbacksandCalc().then(function () {
                    _this.updateRatings();
                });
            }, function (error) {
                console.log("opps");
            });
        }
        else {
            this.fillAllFields();
        }
    };
    RatePage.prototype.fillAllFields = function () {
        var alert = this.alertCtrl.create({
            title: ':(',
            subTitle: 'Please Type a Feedback',
            buttons: ['Ok']
        });
        alert.present();
    };
    RatePage.prototype.FeedBackDoneAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Thank You',
            subTitle: 'Your Feedback Succeesessfully Submited',
            buttons: ['Welcome']
        });
        alert.present();
    };
    RatePage.prototype.updateRatings = function () {
        console.log("hansaka ", this.totalPoints);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        console.log(this.feedback.value);
        var body = {
            ratings: this.finalPoint
        };
        this.http.put('http://localhost:3000/api/fixit/users/getid/' + this.userID + '', body, { headers: headers })
            .subscribe(function (data) {
            console.log(data);
        });
    };
    RatePage.prototype.getFeedbacksandCalc = function () {
        var _this = this;
        var promise = new Promise(function (reslove, reject) {
            _this.feedbackService.getFeedback(_this.userID).subscribe(function (response) {
                _this.feedbacks = response;
                response.forEach(function (element) {
                    _this.count = _this.count + 1;
                    _this.totalPoints = _this.totalPoints + Number(element.ratePoint);
                    console.log(_this.totalPoints);
                });
                _this.finalPoint = (_this.totalPoints / _this.count).toFixed(2);
                console.log(_this.finalPoint);
                if (_this.finalPoint != 0) {
                    reslove();
                }
            });
        });
        return promise;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('feedback'),
        __metadata("design:type", Object)
    ], RatePage.prototype, "feedback", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('ratepoint'),
        __metadata("design:type", Object)
    ], RatePage.prototype, "ratepoint", void 0);
    RatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'rate',template:/*ion-inline-start:"/home/hansand/projects/fixit/src/pages/rate/rate.html"*/'\n<ion-header>\n    <ion-navbar>\n      <ion-title>\n        Feedback\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <br><br><br>\n\n    <ion-item>    Give Feedback and Rate this User</ion-item>\n    <ion-item> 1 is lowest and 10 is the Heighst </ion-item>\n    <ion-item>\n      <ion-label>Points</ion-label>\n      <ion-select #ratepoint>\n        <ion-option value="1">1</ion-option>\n        <ion-option value="2">2</ion-option>\n        <ion-option value="3">3</ion-option>\n        <ion-option value="4">4</ion-option>\n        <ion-option value="5">5</ion-option>\n        <ion-option value="6">6</ion-option>\n        <ion-option value="7">7</ion-option>\n        <ion-option value="8">8</ion-option>\n        <ion-option value="9">9</ion-option>\n        <ion-option value="10">10</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-list>\n      <ion-item>\n        <ion-input class="inputField" placeholder=\'Enter your Feedback here\' #feedback></ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button color="secondary" (click)="addFeedBack();">Submit</button>\n  </ion-content>'/*ion-inline-end:"/home/hansand/projects/fixit/src/pages/rate/rate.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_feedback_service__["a" /* FeedBackService */]])
    ], RatePage);
    return RatePage;
}());

//# sourceMappingURL=rate.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employee_employee__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_role_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_users_service__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WorkPage = /** @class */ (function () {
    function WorkPage(navCtrl, RoleService, userService, http, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.RoleService = RoleService;
        this.userService = userService;
        this.http = http;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.empID = navParams.get('userID');
        this.userInfo = navParams.get('userInfo');
        console.log(this.empID);
        console.log(this.userService.userDetails[0]._id);
    }
    WorkPage.prototype.sendJobReq = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'Application/json');
        if (this.description.value != "" && this.title.value != "") {
            var body = {
                empID: this.empID,
                userID: this.userService.userDetails[0]._id,
                workTitle: this.title.value,
                description: this.description.value,
                state: "pending"
            };
            this.http.post('http://localhost:3000/api/fixit/work', JSON.stringify(body), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                _this.sucesess();
                _this.toEmpPage();
            }, function (error) {
                console.log("opps");
            });
        }
        else {
            this.fillAllFields();
        }
    };
    WorkPage.prototype.sucesess = function () {
        var alert = this.alertCtrl.create({
            title: ':)',
            subTitle: 'Successesfully Sent the Job Request to the Worker',
            buttons: ['Ok']
        });
        alert.present();
    };
    WorkPage.prototype.fillAllFields = function () {
        var alert = this.alertCtrl.create({
            title: ':(',
            subTitle: 'Please add a Job Description',
            buttons: ['Ok']
        });
        alert.present();
    };
    WorkPage.prototype.toEmpPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__employee_employee__["a" /* EmployeePage */], {
            userInfo: this.userInfo,
            userID: this.empID
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('title'),
        __metadata("design:type", Object)
    ], WorkPage.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('description'),
        __metadata("design:type", Object)
    ], WorkPage.prototype, "description", void 0);
    WorkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'work',template:/*ion-inline-start:"/home/hansand/projects/fixit/src/pages/work/work.html"*/'<ion-header >\n        <ion-navbar color="primary">\n          <ion-title>\n          Send a Job Request\n          </ion-title>\n        </ion-navbar>\n      </ion-header>\n      <ion-content padding>  \n                <form >\n                    <ion-item >\n                        <ion-label floating>Title</ion-label>\n                        <ion-input type="text"  #title ></ion-input>\n                      </ion-item>\n                  <ion-item >\n                    <ion-label floating>Job Description</ion-label>\n                    <ion-input type="text"  #description ></ion-input>\n                  </ion-item>\n                  <button (click)="sendJobReq()" ion-button type="submit" block> Send Request </button>\n                </form>\n      </ion-content>\n            \n          '/*ion-inline-end:"/home/hansand/projects/fixit/src/pages/work/work.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_role_service__["a" /* RoleService */],
            __WEBPACK_IMPORTED_MODULE_5__app_services_users_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], WorkPage);
    return WorkPage;
}()); //class end

//# sourceMappingURL=work.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddJobPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jobs_job__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_role_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddJobPage = /** @class */ (function () {
    function AddJobPage(navCtrl, RoleService, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.RoleService = RoleService;
        this.http = http;
        this.alertCtrl = alertCtrl;
    }
    AddJobPage.prototype.addjob = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'Application/json');
        if (this.jobTitle.value &&
            this.jobOrg.value &&
            this.email.value &&
            this.password.value &&
            this.contact.value &&
            this.description.value) {
            var body = {
                jobTitle: this.jobTitle.value,
                jobOrg: this.jobOrg.value,
                email: this.email.value,
                password: this.password.value,
                contact: this.contact.value,
                description: this.description.value
            };
            this.http.post('http://localhost:3000/api/fixit/jobs', JSON.stringify(body), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                _this.addDoneAlert();
                _this.Job();
            }, function (error) {
                console.log("oops");
            });
        }
        else {
            this.fillAllFields();
        }
    };
    AddJobPage.prototype.addDoneAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'gg',
            subTitle: 'Successessfuly Regestered',
            buttons: ['Awsome']
        });
        alert.present();
    };
    AddJobPage.prototype.fillAllFields = function () {
        var alert = this.alertCtrl.create({
            title: ':(',
            subTitle: 'Fill All Fields',
            buttons: ['Ok']
        });
        alert.present();
    };
    AddJobPage.prototype.Job = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__jobs_job__["a" /* JobPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('jobTitle'),
        __metadata("design:type", Object)
    ], AddJobPage.prototype, "jobTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('jobOrg'),
        __metadata("design:type", Object)
    ], AddJobPage.prototype, "jobOrg", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('email'),
        __metadata("design:type", Object)
    ], AddJobPage.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], AddJobPage.prototype, "password", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('contact'),
        __metadata("design:type", Object)
    ], AddJobPage.prototype, "contact", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('description'),
        __metadata("design:type", Object)
    ], AddJobPage.prototype, "description", void 0);
    AddJobPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'addjob',template:/*ion-inline-start:"/home/hansand/projects/fixit/src/pages/addjob/addjob.html"*/'<ion-header >\n        <ion-navbar color="primary">\n          <ion-title>\n            Add a Job\n          </ion-title>\n        </ion-navbar>\n      </ion-header>\n\n      <ion-content padding>\n           \n                  <form>\n                    <ion-item >\n      \n                      <ion-label floating>Job Title </ion-label>\n                      <ion-input #jobTitle type="text"  name="jobTitle" ></ion-input>\n                    </ion-item>\n      \n                    <ion-item>\n       \n                      <ion-label floating>Job Organizer</ion-label>\n                      <ion-input #jobOrg type="text"  name="jobOrg"></ion-input>\n                    </ion-item>\n        \n                    <ion-item>\n       \n                      <ion-label floating>Email</ion-label>\n                      <ion-input #email type="text"  name="email"></ion-input>\n                    </ion-item>\n      \n                    <ion-item>\n                      <ion-label floating>Job Password</ion-label>\n                      <ion-input #password type="password"  name="password"></ion-input>\n                    </ion-item>\n      \n                    <ion-item>\n                      <ion-label floating>Contact Number</ion-label>\n                      <ion-input #contact  type="number"  name="telephone"></ion-input>\n                    </ion-item>\n      \n                    <ion-item>\n                      <ion-label floating>Job Description</ion-label>\n                      <ion-textarea #description type="text" name="description"> </ion-textarea>\n                    </ion-item>\n      \n                   \n                    <!-- <button (click)="presentAlert()" ion-button type="submit"> Add Job </button> -->\n                    <button (click)="addjob()" ion-button type="submit" block> Add Job </button>\n      \n                  </form>\n               \n      </ion-content>'/*ion-inline-end:"/home/hansand/projects/fixit/src/pages/addjob/addjob.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_role_service__["a" /* RoleService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AddJobPage);
    return AddJobPage;
}());

//# sourceMappingURL=addjob.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_job_service__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JobInfoPage = /** @class */ (function () {
    function JobInfoPage(navCtrl, navParams, JobService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.JobService = JobService;
        this.jobID = navParams.get('jobID');
        console.log(this.jobID);
    }
    JobInfoPage.prototype.ngOnInit = function () {
        this.getjobInfo();
    };
    JobInfoPage.prototype.getjobInfo = function () {
        var _this = this;
        this.JobService.getjobByID(this.jobID).subscribe(function (response) {
            _this.jobInfo = response;
            console.log(_this.jobInfo);
        });
    };
    JobInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'jobinfo',template:/*ion-inline-start:"/home/hansand/projects/fixit/src/pages/jobdinfo/jobinfo.html"*/'<ion-header >\n        <ion-navbar color="primary">\n          <ion-title >\n             Job Info\n          </ion-title>\n        </ion-navbar>\n      </ion-header>\n      \n      <ion-content align = "Center" padding="true">\n        <b> Job Information </b><br><br>\n        \n     \n     <ion-thumbnail item-start>\n       <img class = "useravat" src="https://cdn.iconscout.com/public/images/icon/premium/png-512/office-employees-team-company-culture-corporate-people-3292b2e7a208948e-512x512.png">\n     </ion-thumbnail>\n     <br><br><br>\n     <span *ngFor="let job of jobInfo">\n     <h2 class="name" > {{job.jobTitle}} </h2>\n     <span>\n       <b> {{job.jobOrg}} </b><br>\n       {{ job.contact }} <br>\n       {{ job.email }} <br>\n       {{ job.description }} <br>\n     </span>\n     \n    <br>\n  </span>\n  <button ion-button (click)="presentConfirm()">\n    Delete Job \n  </button>\n  <button ion-button (click)="presentConfirm()">\n    Send Job Request \n  </button>\n  \n    \n    <!-- <form align="center">\n        <ion-item>\n            <ion-textarea placeholder="Give Me Your Review!!"></ion-textarea>\n          </ion-item>\n    </form> -->\n</ion-content>'/*ion-inline-end:"/home/hansand/projects/fixit/src/pages/jobdinfo/jobinfo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_services_job_service__["a" /* JobService */]])
    ], JobInfoPage);
    return JobInfoPage;
}());

// job(){
//     this.navCtrl.push(JobPage);
// }
//# sourceMappingURL=jobinfo.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shopinfo_shopinfo__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_users_service__ = __webpack_require__(21);
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
    function ShopPage(navCtrl, navParams, userService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
    }
    ShopPage.prototype.ngOnInit = function () {
    };
    ShopPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
        this.getShops();
    };
    ShopPage.prototype.getShops = function () {
        var _this = this;
        this.userService.getUsersByRole('Shop').subscribe(function (response) {
            _this.shopInfo = response;
            console.log(_this.shopInfo);
        });
    };
    ShopPage.prototype.toShopInfoPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__shopinfo_shopinfo__["a" /* ShopInfoPage */], {
            shopID: id
        });
    };
    ShopPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'shop',template:/*ion-inline-start:"/home/hansand/projects/fixit/src/pages/shops/shop.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Shops\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding align="center">\n <b>Available Stores</b><br><br>\n\n <ion-list >\n\n  <ion-item *ngFor="let shop of shopInfo" (click)="toShopInfoPage(shop._id)" >\n    \n    <ion-thumbnail item-start>\n      <img class="avatar" src="https://cdn1.iconfinder.com/data/icons/business-items/512/market_store_local_shop_cafe_commerce_retail_shopping_grocery_facade_fastfood_small_building_flat_design_icon-512.png">\n    </ion-thumbnail>\n    <h2>{{ shop.name }}</h2>\n    <span class="rate" >\n      {{ shop.nearTown }} <br>\n      {{ shop.shopType }}\n    </span>\n    </ion-item>\n    \n\n\n\n\n\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/hansand/projects/fixit/src/pages/shops/shop.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__app_services_users_service__["a" /* UserService */]])
    ], ShopPage);
    return ShopPage;
}());

//# sourceMappingURL=shop.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_users_service__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { SigninPage } from '../signin/signin';
var ShopInfoPage = /** @class */ (function () {
    function ShopInfoPage(navCtrl, navParams, userService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.shopID = navParams.get('shopID');
        console.log(this.shopID);
    }
    ShopInfoPage.prototype.ngOnInit = function () {
        this.getShopInfo();
    };
    ShopInfoPage.prototype.getShopInfo = function () {
        var _this = this;
        this.userService.getUserByID(this.shopID).subscribe(function (response) {
            _this.shopInfo = response;
            console.log(_this.shopInfo);
        });
    };
    ShopInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'shopinfo',template:/*ion-inline-start:"/home/hansand/projects/fixit/src/pages/shopinfo/shopinfo.html"*/'<ion-header >\n        <ion-navbar color="primary">\n          <ion-title >\n            Employee Profile\n          </ion-title>\n        </ion-navbar>\n      </ion-header>\n      \n      <ion-content align = "Center" padding="true">\n        <b> Shop Information </b><br><br>\n        \n     \n     <ion-thumbnail item-start>\n       <img class = "useravat" src="https://cdn1.iconfinder.com/data/icons/business-items/512/market_store_local_shop_cafe_commerce_retail_shopping_grocery_facade_fastfood_small_building_flat_design_icon-512.png">\n     </ion-thumbnail>\n     <br><br><br>\n     <span *ngFor="let shop of shopInfo">\n     <h2 class="name" > {{ shop.name }} </h2>\n     <span>\n       <b> {{ shop.shopType }} </b><br>\n\n       {{shop.nearTown}}  <br>\n       Contact Number : {{ shop.telephone }}\n     </span>\n    <br>\n  </span>\n  <br><br>\n  <button ion-button >\n    Send Order Request  \n  </button>\n    \n    <!-- <form align="center">\n        <ion-item>\n            <ion-textarea placeholder="Give Me Your Review!!"></ion-textarea>\n          </ion-item>\n    </form> -->\n</ion-content>'/*ion-inline-end:"/home/hansand/projects/fixit/src/pages/shopinfo/shopinfo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_services_users_service__["a" /* UserService */]])
    ], ShopInfoPage);
    return ShopInfoPage;
}());

//# sourceMappingURL=shopinfo.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_users_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__userWorkReqs_workreq__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__requestedWorks_requestedworks__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { GlobalProvider } from '../../providers/global/global'



var UserPage = /** @class */ (function () {
    function UserPage(navCtrl, userService) {
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.details = this.userService.userDetails;
        console.log(this.details[0].fname);
    }
    UserPage.prototype.ngOnInit = function () {
    };
    UserPage.prototype.toWorkReqPage = function () {
        console.log("hahah");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__userWorkReqs_workreq__["a" /* WorkReqPage */]);
    };
    UserPage.prototype.toRequestedWorkPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__requestedWorks_requestedworks__["a" /* RequestedWorkPage */]);
    };
    UserPage.prototype.checkShop = function (role) {
        if (role == "shop" || role == "Shop") {
            return true;
        }
        else {
            return false;
        }
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'user',template:/*ion-inline-start:"/home/hansand/projects/fixit/src/pages/user/user.html"*/'<ion-header >\n  <ion-navbar color="primary">\n    <ion-title >\n      User Profile\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content align = "Center" padding="true">\n <b>User Information</b><br><br>\n \n<span *ngFor="let detail of details ">\n<ion-thumbnail item-start>\n<img *ngIf="checkShop(detail.role)" class = "useravat" src="https://cdn1.iconfinder.com/data/icons/business-items/512/market_store_local_shop_cafe_commerce_retail_shopping_grocery_facade_fastfood_small_building_flat_design_icon-512.png">\n<img *ngIf="!checkShop(detail.role)" class = "useravat" src="http://res.cloudinary.com/dhglhpsmu/image/upload/c_scale,w_166/v1524171287/man.png">\n\n</ion-thumbnail>\n\n<h2 class="name" > {{detail.name}} </h2>\n<span>\n<b *ngIf="checkShop(detail.role)"> {{ detail.shopType }}</b>\n<b *ngIf="!checkShop(detail.role)"> {{ detail.role }}</b><br>\nRatings : {{ detail.ratings }} <br>\n{{ detail.nearTown }}\n \n</span>\n\n<br> <br><br><br>\n<button *ngIf="!checkShop(detail.role)" (click)= "toWorkReqPage()" ion-button >\n  Work Requests  \n</button>\n\n<button  (click)= "toRequestedWorkPage()" ion-button >\n  Requested Works\n</button>\n\n<button *ngIf="checkShop(detail.role)" (click)= "toRequestedWorkPage()" ion-button >\n   Order Requests\n  </button>\n</span>\n</ion-content>\n'/*ion-inline-end:"/home/hansand/projects/fixit/src/pages/user/user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_services_users_service__["a" /* UserService */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleWork; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_users_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_work_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__userWorkReqs_workreq__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_services_feedback_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__derections_derections__ = __webpack_require__(365);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { GlobalProvider } from '../../providers/global/global'






var SingleWork = /** @class */ (function () {
    function SingleWork(navCtrl, userService, FeedBackService, workService, navParams, alertCtrl, http) {
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.FeedBackService = FeedBackService;
        this.workService = workService;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.details = this.userService.userDetails;
        this.workID = navParams.get('id');
    }
    SingleWork.prototype.ngOnInit = function () {
        var _this = this;
        this.getWork().then(function () {
            console.log(_this.work[0].userID);
            _this.getUserInfo(_this.work[0].userID);
        });
        this.getFeedbacks();
    };
    SingleWork.prototype.serviceList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    SingleWork.prototype.toDerectionPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__derections_derections__["a" /* DerectionsPage */], {
            userInfo: this.userInfo
        });
    };
    SingleWork.prototype.getUserInfo = function (userID) {
        var _this = this;
        var promise = new Promise(function (reslove, reject) {
            _this.userService.getUserByID(userID).subscribe(function (response) {
                _this.userInfo = response;
                console.log(_this.userInfo);
                reslove();
            });
        });
        return promise;
    };
    SingleWork.prototype.getWork = function () {
        var _this = this;
        var promise = new Promise(function (reslove, reject) {
            _this.workService.getWork(_this.workID).subscribe(function (response) {
                _this.work = response;
                console.log(_this.work);
                reslove();
            });
        });
        return promise;
    };
    SingleWork.prototype.checkPending = function (state) {
        if (state == "Pending" || state == "Accepted") {
            return false;
        }
        else {
            return true;
        }
    };
    SingleWork.prototype.checkRejected = function (state) {
        if (state == "Rejected") {
            return false;
        }
        else {
            return true;
        }
    };
    SingleWork.prototype.checkDone = function (state) {
        if (state == "Done") {
            return false;
        }
        else {
            return true;
        }
    };
    SingleWork.prototype.toJobReqPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__userWorkReqs_workreq__["a" /* WorkReqPage */]);
    };
    SingleWork.prototype.updateState = function (state) {
        var _this = this;
        var promise = new Promise(function (reslove, reject) {
            console.log("updating State");
            var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Headers */]();
            console.log(state);
            var body = {
                state: state
            };
            _this.http.put('http://localhost:3000/api/fixit/work/' + _this.workID + '', body, { headers: headers })
                .subscribe(function (data) {
                reslove();
                console.log(data);
            });
        });
        return promise;
    };
    SingleWork.prototype.changeState = function (state) {
        var _this = this;
        this.updateState(state).then(function () {
            _this.stateUpdatedAlert(state);
            _this.toJobReqPage();
        });
    };
    SingleWork.prototype.stateUpdatedAlert = function (state) {
        var alert = this.alertCtrl.create({
            title: 'Done',
            subTitle: 'You ' + state + ' the Job',
            buttons: ['Welcome']
        });
        alert.present();
    };
    SingleWork.prototype.getFeedbacks = function () {
        var _this = this;
        this.FeedBackService.getWorkFeedback(this.workID).subscribe(function (Response) {
            _this.feedback = Response;
            console.log(_this.feedback);
        });
    };
    SingleWork = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'singlework',template:/*ion-inline-start:"/home/hansand/projects/fixit/src/pages/singleWork/singlework.html"*/'<ion-header >\n    <ion-navbar color="primary">\n      <ion-title>\n         \n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    \n            <br><br>\n\n            <div *ngFor="let w of work" class="single-worker" >\n                <b class="title">{{w.workTitle}}</b>     <br> <br><br>\n                <span>{{w.description}}</span> \n                <span></span> \n                \n         <div *ngIf="checkDone(w.state);">\n            <button ion-button  (click)="toDerectionPage();" class="accept" color="secondary">See On map</button>           \n            <button ion-button *ngIf="checkPending(w.state)"  (click)="changeState(\'Accepted\')" class="accept" color="secondary">Accept</button>\n            <button ion-button *ngIf="checkRejected(w.state)"  (click)="changeState(\'Rejected\')" class="reject" color="danger">Reject</button>\n        </div>  \n        <br><br><br>\n        <div  *ngIf="!checkDone(w.state)">\n          <span class="accept"> This Job is Done </span> <br> <br>\n          <span> Feedback By the Customer About this Job </span> <br> <br>\n          <span *ngFor="let feed of feedback"> \n            {{feed.feedback}}\n          </span>\n        </div>\n\n     \n        </div>      \n  </ion-content>\n'/*ion-inline-end:"/home/hansand/projects/fixit/src/pages/singleWork/singlework.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__app_services_users_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_7__app_services_feedback_service__["a" /* FeedBackService */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_work_service__["a" /* WorkService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */]])
    ], SingleWork);
    return SingleWork;
}());

//# sourceMappingURL=singlework.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DerectionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_users_service__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DerectionsPage = /** @class */ (function () {
    function DerectionsPage(navCtrl, navParams, geolocation, userService, alertCtrl, 
        // public maps: GoogleMaps,
        viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.userService = userService;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.locations = [];
        this.isKM = 5000;
        this.latLng2 = new google.maps.LatLng(6.927079, 79.861244);
        this.userInfo = navParams.get('userInfo');
        console.log(this.userInfo);
    }
    DerectionsPage.prototype.ngOnInit = function () {
        this.loadMap();
        // this.markDerectionsonmap();
        this.markDerectionsonmaps();
        this.addDestinationMarker(this.userInfo[0].lat, this.userInfo[0].lang);
    };
    DerectionsPage.prototype.markDerectionsonmap = function () {
        var _this = this;
        console.log("starting Derecion");
        this.getCurrentCordinates().then(function () {
            console.log("inside");
            _this.startNavigating();
            _this.addDestinationMarker(_this.userInfo[0].lat, _this.userInfo[0].lang);
            _this.addStartMarker(_this.myLatitude, _this.mylongitude);
        }, function () {
            _this.cantgetLocationAlert();
            _this.derectionsFromDefaultLocation();
        });
    };
    DerectionsPage.prototype.loadMap = function () {
        var latLng = new google.maps.LatLng(6.927079, 79.861244);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    };
    DerectionsPage.prototype.startNavigating = function () {
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        directionsDisplay.setMap(this.map);
        directionsDisplay.setOptions({ suppressMarkers: true });
        directionsDisplay.setPanel(this.directionsPanel.nativeElement);
        directionsService.route({
            origin: { lat: this.myLatitude, lng: this.mylongitude },
            destination: { lat: this.userInfo[0].lat, lng: this.userInfo[0].lang },
            travelMode: google.maps.TravelMode['DRIVING']
        }, function (res, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(res);
            }
            else {
                console.warn(status);
            }
        });
    };
    DerectionsPage.prototype.derectionsFromDefaultLocation = function () {
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        directionsDisplay.setMap(this.map);
        directionsDisplay.setOptions({ suppressMarkers: true });
        directionsDisplay.setPanel(this.directionsPanel.nativeElement);
        directionsService.route({
            origin: { lat: this.userService.userDetails[0].lat, lng: this.userService.userDetails[0].lang },
            destination: { lat: this.userInfo[0].lat, lng: this.userInfo[0].lang },
            travelMode: google.maps.TravelMode['DRIVING']
        }, function (res, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(res);
            }
            else {
                console.warn(status);
            }
        });
    };
    DerectionsPage.prototype.getCurrentCordinates = function () {
        var _this = this;
        var done = false;
        var promise = new Promise(function (reslove, reject) {
            // reject();
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */].getPlugin().getCurrentPosition(function (response) {
                _this.myLatitude = parseFloat(response.coords.latitude);
                _this.mylongitude = parseFloat(response.coords.longitude);
                console.log(_this.myLatitude);
                var done = true;
                console.log("1234", "done");
                reslove();
                // if(this.myLatitude.length>0 && this.mylongitude.length>0){
                //     reslove();
                // }else{
                //     reject();
                // }
            });
            setTimeout(function () {
                reject();
                console.log("waited");
            }, 5000);
            //  reject()
        });
        console.log(promise);
        return promise;
    };
    DerectionsPage.prototype.addDestinationMarker = function (latp, langp) {
        this.marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: { lat: latp, lng: langp },
            icon: {
                url: '../assets/imgs/myLocation.png'
            },
            draggable: false
        });
    };
    DerectionsPage.prototype.addStartMarker = function (latp, langp) {
        this.marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: { lat: latp, lng: langp },
            icon: {
                url: '../assets/imgs/myLocation2.png'
            },
            draggable: false
        });
    };
    DerectionsPage.prototype.searchCancel = function () {
        this.locations = [];
    };
    DerectionsPage.prototype.SearchPlace = function () {
        var _this = this;
        if (this.searchLocation.value == "") {
            this.searchCancel();
        }
        else {
            // this.loadMap();
            this.searchCancel();
            var service = new google.maps.places.PlacesService(this.map);
            service.nearbySearch({
                location: this.latLng2,
                radius: this.isKM,
                keyword: this.searchLocation.value
            }, function (results, status) {
                if (results) {
                    results.forEach(function (element) {
                        console.log(element);
                        _this.locations.push(element);
                        console.log(element.geometry.location.lat());
                        // console.log(this.locations);  
                    });
                }
            });
        }
    };
    DerectionsPage.prototype.markDerectionsonmaps = function () {
        this.startNavigatings();
        this.addDestinationMarker(this.userInfo[0].lat, this.userInfo[0].lang);
        this.addStartMarker(6.9148, 79.9731);
    };
    DerectionsPage.prototype.cantgetLocationAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Erro',
            subTitle: 'Google Can not Dertermine Your Location.Default Location Used Instead',
            buttons: ['OK']
        });
        alert.present();
    };
    DerectionsPage.prototype.startNavigatings = function () {
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        directionsDisplay.setMap(this.map);
        directionsDisplay.setOptions({ suppressMarkers: true });
        directionsDisplay.setPanel(this.directionsPanel.nativeElement);
        directionsService.route({
            origin: { lat: 6.9148, lng: 79.9731 },
            destination: { lat: this.userInfo[0].lat, lng: this.userInfo[0].lang },
            travelMode: google.maps.TravelMode['DRIVING']
        }, function (res, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(res);
            }
            else {
                console.warn(status);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _a || Object)
    ], DerectionsPage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('searchLocation'),
        __metadata("design:type", Object)
    ], DerectionsPage.prototype, "searchLocation", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('directionsPanel'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _b || Object)
    ], DerectionsPage.prototype, "directionsPanel", void 0);
    DerectionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'derections',template:/*ion-inline-start:"/home/hansand/projects/fixit/src/pages/derections/derections.html"*/'<ion-header >\n        <ion-navbar color="primary">\n          <ion-title>\n            Map\n          </ion-title>\n        </ion-navbar>\n        <ion-toolbar color="primary">	\n          <ion-searchbar #searchLocation placeholder="Seach Places"  (keyup.eneter)="SearchPlace();"   (input)="SearchPlace()">\n          </ion-searchbar>\n          <ion-card class="derections">\n            <ion-card-content class="derection-panel"> \n                <div #directionsPanel></div>\n            </ion-card-content>\n        </ion-card>\n        </ion-toolbar>\n      </ion-header>\n      \n      <ion-content padding>\n        <!-- <div class="Map-Search-Bar">\n            <ion-item>\n              <ion-label> Search Places  </ion-label>\n              <ion-input #searchLocation (input)="SearchPlace()"> \n                  <ion-option> ha ha</ion-option>\n              </ion-input>\n            </ion-item>\n        </div> -->\n        <!-- <ion-searchbar  #searchLocation (input)="SearchPlace();xss();" placeholder="Search"></ion-searchbar>\n        <ion-list>\n        <button  class="sList" ion-item *ngFor="let location of locations">\n            {{location.name}}\n        </button>\n        </ion-list> -->\n        <ion-grid ion-fixed no-padding>\n            <ion-scroll style="width:100%;height:120px" scrollY="true">\n          <ion-list scroll="true" style="position: absolute;z-index:1;width:100%;">\n            <ion-item (click)="setCustomDerections(location.geometry.location.lat(),location.geometry.location.lng())"  *ngFor="let location of locations" color="silver" >\n              {{location.name}}\n            </ion-item>\n          </ion-list>\n          </ion-scroll>\n        </ion-grid>\n\n\n        <div  #map id="map" style="height: 100%;" class="please-work"></div>\n            <ion-fab  class="fabMap" bottom right>\n              <!-- <ion-label (click)="toMapPage" class="labelMap" >Click Here to Map view</ion-label> -->\n              <button (click)=" markDerectionsonmap();" ion-fab> <ion-icon  name="locate"></ion-icon></button>\n            </ion-fab>\n      </ion-content>'/*ion-inline-end:"/home/hansand/projects/fixit/src/pages/derections/derections.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__app_services_users_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_services_users_service__["a" /* UserService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */]) === "function" && _h || Object])
    ], DerectionsPage);
    return DerectionsPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}()); //class ends

//# sourceMappingURL=derections.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleWorkUser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_users_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_work_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__requestedWorks_requestedworks__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { GlobalProvider } from '../../providers/global/global'




var SingleWorkUser = /** @class */ (function () {
    function SingleWorkUser(navCtrl, userService, workService, navParams, alertCtrl, http) {
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.workService = workService;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.details = this.userService.userDetails;
        this.workID = navParams.get('id');
    }
    SingleWorkUser.prototype.ngOnInit = function () {
        this.getWork();
    };
    SingleWorkUser.prototype.serviceList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    SingleWorkUser.prototype.getWork = function () {
        var _this = this;
        this.workService.getWork(this.workID).subscribe(function (response) {
            _this.work = response;
            console.log(_this.work);
        });
    };
    SingleWorkUser.prototype.checkPending = function (state) {
        if (state == "Pending" || state == "pending") {
            return true;
        }
        else {
            return false;
        }
    };
    SingleWorkUser.prototype.checkAccepted = function (state) {
        if (state == "Accepted") {
            return true;
        }
        else {
            return false;
        }
    };
    SingleWorkUser.prototype.checkRejected = function (state) {
        if (state == "Rejected") {
            return true;
        }
        else {
            return false;
        }
    };
    SingleWorkUser.prototype.checkDone = function (state) {
        if (state == "Done") {
            return false;
        }
        else {
            return true;
        }
    };
    SingleWorkUser.prototype.toRequestedWorkPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__requestedWorks_requestedworks__["a" /* RequestedWorkPage */]);
    };
    SingleWorkUser.prototype.updateState = function (state) {
        var _this = this;
        var promise = new Promise(function (reslove, reject) {
            console.log("updating State");
            var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
            console.log(state);
            var body = {
                state: state
            };
            _this.http.put('http://localhost:3000/api/fixit/work/' + _this.workID + '', body, { headers: headers })
                .subscribe(function (data) {
                reslove();
                console.log(data);
            });
        });
        return promise;
    };
    SingleWorkUser.prototype.changeState = function (state) {
        var _this = this;
        this.updateState(state).then(function () {
            _this.stateUpdatedAlert(state);
            _this.stateUpdatedAlert('done');
            _this.toRequestedWorkPage();
        });
    };
    SingleWorkUser.prototype.stateUpdatedAlert = function (state) {
        var alert = this.alertCtrl.create({
            title: 'Done',
            subTitle: 'A Job Has Been Marked as Completed',
            buttons: ['ok']
        });
        alert.present();
    };
    SingleWorkUser.prototype.completeReq = function (workId) {
        var _this = this;
        this.addfeedBack(workId).then(function () {
            _this.updateState('Done').then(function () {
                _this.stateUpdatedAlert('state');
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__requestedWorks_requestedworks__["a" /* RequestedWorkPage */]);
            });
        });
    };
    SingleWorkUser.prototype.addfeedBack = function (workId) {
        var _this = this;
        var promise = new Promise(function (reslove, rejecct) {
            var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
            var body = {
                workId: workId,
                feedback: _this.feedback.value
            };
            _this.http.post('http://localhost:3000/api/fixit/feedback/wfeedback', body, { headers: headers })
                .subscribe(function (data) {
                console.log(data);
                reslove();
            });
        });
        return promise;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('feedback'),
        __metadata("design:type", Object)
    ], SingleWorkUser.prototype, "feedback", void 0);
    SingleWorkUser = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'singleworkuser',template:/*ion-inline-start:"/home/hansand/projects/fixit/src/pages/singleworkuser/singleworkuser.html"*/'<ion-header >\n    <ion-navbar color="primary">\n      <ion-title>\n         \n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    \n            <br><br>\n\n            <div *ngFor="let w of work" class="single-worker" >\n                <b class="title">{{w.workTitle}}</b>     <br> <br><br>\n                <span>{{w.description}}</span> \n                <span></span> \n                <br><br><br>\n         <div *ngIf="checkDone(w.state);">\n            <span *ngIf="checkPending(w.state)"  class="accept" color="secondary">Waiting For Worker to Respond</span>\n            <span *ngIf="checkRejected(w.state)"  class="reject" color="secondary">Worker Rejected This Request </span>\n            <span *ngIf="checkAccepted(w.state)"  class="accept" color="secondary">Worker Accepted This Request</span>\n            <div *ngIf="checkAccepted(w.state)">\n\n                <form >\n                \n                  <ion-item >\n                    <ion-label floating>Give FeedBack About This Job </ion-label>\n                    <ion-input type="text"  #feedback ></ion-input>\n                  </ion-item>\n                  <button (click)="completeReq(w._id)" ion-button type="submit" block> Mark This Work Request as Completed </button>\n                </form>                \n            </div>\n        </div>  \n        <br><br><br>\n        <div class="accept" *ngIf="!checkDone(w.state)">\n          This Job is Done\n        </div>\n        </div>      \n  </ion-content>\n'/*ion-inline-end:"/home/hansand/projects/fixit/src/pages/singleworkuser/singleworkuser.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__app_services_users_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_work_service__["a" /* WorkService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */]])
    ], SingleWorkUser);
    return SingleWorkUser;
}());

//# sourceMappingURL=singleworkuser.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginShopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginShopPage = /** @class */ (function () {
    function LoginShopPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    LoginShopPage.prototype.ServiceList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__service_service__["a" /* ServicePage */]);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
    };
    LoginShopPage.prototype.Signin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signin_signin__["a" /* SigninPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('email'),
        __metadata("design:type", Object)
    ], LoginShopPage.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], LoginShopPage.prototype, "password", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('person'),
        __metadata("design:type", Object)
    ], LoginShopPage.prototype, "person", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('shop'),
        __metadata("design:type", Object)
    ], LoginShopPage.prototype, "shop", void 0);
    LoginShopPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'loginshop',template:/*ion-inline-start:"/home/hansand/projects/fixit/src/pages/loginShop/loginShop.html"*/'\n<ion-header >\n    <ion-navbar color="primary">\n      <ion-title>\n        Login as Shop\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>   \n       <form >\n    <ion-item>\n      <!-- <ion-label>Username</ion-label> -->\n      <ion-label #email floating>Email</ion-label>\n      <ion-input type="email" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <!-- <ion-label>Password</ion-label> -->\n      <ion-label floating>Password</ion-label>\n      <ion-input #password type="password" ></ion-input>\n    </ion-item>\n\n   \n    <button (click)="ServiceList();" ion-button type="submit" block> Login </button>\n    <button (click)="Signin();" ion-button type="submit" block> Sign In</button>\n  </form>\n  '/*ion-inline-end:"/home/hansand/projects/fixit/src/pages/loginShop/loginShop.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], LoginShopPage);
    return LoginShopPage;
}());

//# sourceMappingURL=loginShop.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(373);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_service_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_shops_shop__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_jobs_job__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_user_user__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_servicelist_servicelist__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_map_map__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_geolocation__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_login_login__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_signin_signin__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_employee_employee__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_rate_rate__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_shopinfo_shopinfo__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_welcome_welcome__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_loginShop_loginShop__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_work_work__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_addjob_addjob__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_userWorkReqs_workreq__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_singleWork_singlework__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_requestedWorks_requestedworks__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_singleworkuser_singleworkuser__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_derections_derections__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_jobdinfo_jobinfo__ = __webpack_require__(360);
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
                __WEBPACK_IMPORTED_MODULE_19__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_employee_employee__["a" /* EmployeePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_rate_rate__["a" /* RatePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_shopinfo_shopinfo__["a" /* ShopInfoPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_welcome_welcome__["a" /* WelcomePage */], __WEBPACK_IMPORTED_MODULE_24__pages_loginShop_loginShop__["a" /* LoginShopPage */], __WEBPACK_IMPORTED_MODULE_25__pages_work_work__["a" /* WorkPage */], __WEBPACK_IMPORTED_MODULE_26__pages_addjob_addjob__["a" /* AddJobPage */], __WEBPACK_IMPORTED_MODULE_27__pages_userWorkReqs_workreq__["a" /* WorkReqPage */], __WEBPACK_IMPORTED_MODULE_28__pages_singleWork_singlework__["a" /* SingleWork */], __WEBPACK_IMPORTED_MODULE_29__pages_requestedWorks_requestedworks__["a" /* RequestedWorkPage */], __WEBPACK_IMPORTED_MODULE_30__pages_singleworkuser_singleworkuser__["a" /* SingleWorkUser */], __WEBPACK_IMPORTED_MODULE_32__pages_jobdinfo_jobinfo__["a" /* JobInfoPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_derections_derections__["a" /* DerectionsPage */]
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
                __WEBPACK_IMPORTED_MODULE_19__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_employee_employee__["a" /* EmployeePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_rate_rate__["a" /* RatePage */], __WEBPACK_IMPORTED_MODULE_22__pages_shopinfo_shopinfo__["a" /* ShopInfoPage */], __WEBPACK_IMPORTED_MODULE_23__pages_welcome_welcome__["a" /* WelcomePage */], __WEBPACK_IMPORTED_MODULE_24__pages_loginShop_loginShop__["a" /* LoginShopPage */], __WEBPACK_IMPORTED_MODULE_25__pages_work_work__["a" /* WorkPage */], __WEBPACK_IMPORTED_MODULE_26__pages_addjob_addjob__["a" /* AddJobPage */], __WEBPACK_IMPORTED_MODULE_27__pages_userWorkReqs_workreq__["a" /* WorkReqPage */], __WEBPACK_IMPORTED_MODULE_28__pages_singleWork_singlework__["a" /* SingleWork */], __WEBPACK_IMPORTED_MODULE_30__pages_singleworkuser_singleworkuser__["a" /* SingleWorkUser */], __WEBPACK_IMPORTED_MODULE_31__pages_derections_derections__["a" /* DerectionsPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_requestedWorks_requestedworks__["a" /* RequestedWorkPage */], __WEBPACK_IMPORTED_MODULE_32__pages_jobdinfo_jobinfo__["a" /* JobInfoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_users_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_role_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_feedback_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_shop_service__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_work_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_job_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(66);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/hansand/projects/fixit/src/app/app.html"*/'<!-- <ion-nav [root]="rootPage"></ion-nav> -->\n\n<ion-menu [content]="content">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <button ion-item (click)="openPage(homePage)">\n          Home\n        </button>\n        <button ion-item (click)="openPage(friendsPage)">\n          Friends\n        </button>\n        <button ion-item (click)="openPage(eventsPage)">\n          Events\n        </button>\n        <button ion-item (click)="closeMenu()">\n          Close Menu\n        </button>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  \n  <ion-nav id="nav" #content [root]="rootPage"></ion-nav>'/*ion-inline-end:"/home/hansand/projects/fixit/src/app/app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_users_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_5__services_role_service__["a" /* RoleService */], __WEBPACK_IMPORTED_MODULE_6__services_feedback_service__["a" /* FeedBackService */], __WEBPACK_IMPORTED_MODULE_7__services_shop_service__["a" /* ShopService */], __WEBPACK_IMPORTED_MODULE_8__services_work_service__["a" /* WorkService */], __WEBPACK_IMPORTED_MODULE_9__services_job_service__["a" /* JobService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(23);
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

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkService = /** @class */ (function () {
    function WorkService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:3000/api/fixit/work';
    }
    WorkService.prototype.getWorks = function (empID) {
        return this.http.get(this.baseUrl + '/empid/' + empID + '').map(function (res) { return res.json(); });
    };
    WorkService.prototype.getWork = function (workID) {
        return this.http.get(this.baseUrl + '/' + workID + '').map(function (res) { return res.json(); });
    };
    WorkService.prototype.getWorkByUserId = function (userID) {
        return this.http.get(this.baseUrl + '/userid/' + userID + '').map(function (res) { return res.json(); });
    };
    WorkService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], WorkService);
    return WorkService;
}());

//# sourceMappingURL=work.service.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_users_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { GlobalProvider } from '../../providers/global/global'
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, userService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.alertCtrl = alertCtrl;
    }
    LoginPage.prototype.ServiceList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__service_service__["a" /* ServicePage */]);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
    };
    LoginPage.prototype.Signin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signin_signin__["a" /* SigninPage */]);
    };
    LoginPage.prototype.getUserDetails = function () {
        var _this = this;
        this.userService.saveUser(this.email.value, this.password.value).then(function () {
            if (_this.userService.userDetails.length === 0) {
                _this.noMatch();
            }
            else {
                _this.ServiceList();
            }
        });
    };
    LoginPage.prototype.noMatch = function () {
        var alert = this.alertCtrl.create({
            title: 'Login Faild',
            subTitle: 'That Fixit Account does not exist.Enter a Deferent account or get a new one',
            buttons: ['Ok']
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('email'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "password", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'login',template:/*ion-inline-start:"/home/hansand/projects/fixit/src/pages/login/login.html"*/'<ion-header >\n    <ion-navbar color="primary">\n      <ion-title>\n        Login as Person\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>   \n       <form >\n    <ion-item>\n      <!-- <ion-label>Username</ion-label> -->\n      <ion-label  floating>Email</ion-label>\n      <ion-input  #email type="email" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <!-- <ion-label>Password</ion-label> -->\n      <ion-label floating>Password</ion-label>\n      <ion-input #password type="password" ></ion-input>\n    </ion-item>\n   \n    <button (click)="getUserDetails();" ion-button type="submit" block> Login </button>\n    <button (click)="Signin();" ion-button type="submit" block> Sign In</button>\n  </form>\n  '/*ion-inline-end:"/home/hansand/projects/fixit/src/pages/login/login.html"*/,
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__app_services_users_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicelist_servicelist__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_role_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_users_service__ = __webpack_require__(21);
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
    function ServicePage(userService, navCtrl, RoleService) {
        this.userService = userService;
        this.navCtrl = navCtrl;
        this.RoleService = RoleService;
        console.log(this.userService.userDetails);
    }
    ServicePage.prototype.ionViewDidLoad = function () {
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
            // console.log(this.roles);
        });
    };
    ServicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'service',template:/*ion-inline-start:"/home/hansand/projects/fixit/src/pages/service/service.html"*/'<ion-header >\n    <ion-navbar color="primary">\n            \n      <ion-title >\n        Welcome to FixIt\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content class="background" padding="true">\n    <ion-content class="card-background-page" padding="true">\n      <h4 align = "center"><b>Select a Service</b></h4>\n\n      <ion-card  *ngFor="let role of roles"  (click)="serviceList(role.roleName);" >\n        <img src="https://i.pinimg.com/originals/49/31/2b/49312bb613a671f9e41c3c51aaaf77f6.jpg"/>\n        <div class="card-title"> {{role.roleName}}</div>\n      </ion-card>\n   \n  </ion-content>\n  '/*ion-inline-end:"/home/hansand/projects/fixit/src/pages/service/service.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__app_services_users_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__app_services_role_service__["a" /* RoleService */]])
    ], ServicePage);
    return ServicePage;
}());

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_users_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_feedback_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rate_rate__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__work_work__ = __webpack_require__(358);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { SigninPage } from '../signin/signin';




var EmployeePage = /** @class */ (function () {
    function EmployeePage(navCtrl, navParams, userService, feedbackService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.feedbackService = feedbackService;
        this.userID = navParams.get('userID');
    }
    EmployeePage.prototype.ngOnInit = function () {
        console.log(this.userID);
        this.getEmployeeInfo();
        this.getFeedbacks();
    };
    EmployeePage.prototype.getEmployeeInfo = function () {
        var _this = this;
        this.userService.getUserByID(this.userID).subscribe(function (response) {
            _this.userInfo = response;
            console.log(_this.userInfo);
        });
    };
    EmployeePage.prototype.getFeedbacks = function () {
        var _this = this;
        this.feedbackService.getFeedback(this.userID).subscribe(function (response) {
            _this.feedbacks = response;
            console.log(_this.feedbacks);
        });
    };
    EmployeePage.prototype.toRatePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__rate_rate__["a" /* RatePage */], {
            userInfo: this.userInfo,
            userID: this.userID
        });
    };
    EmployeePage.prototype.toWorkPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__work_work__["a" /* WorkPage */], {
            userInfo: this.userInfo,
            userID: this.userID
        });
    };
    EmployeePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'employee',template:/*ion-inline-start:"/home/hansand/projects/fixit/src/pages/employee/employee.html"*/'<ion-header >\n    <ion-navbar color="primary">\n      <ion-title >\n        Employee Profile\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content align = "Center" padding="true">\n    <b> Employee Information </b><br><br>\n    \n \n <ion-thumbnail item-start>\n   <img class = "useravat" src="http://res.cloudinary.com/dhglhpsmu/image/upload/c_scale,w_166/v1524171287/man.png">\n </ion-thumbnail>\n <br><br>\n <span class="empInfoWrapper" *ngFor="let user of userInfo" >\n <h2 class="name" >{{user.fname}} {{user.lname}} </h2>\n <span>\n   <b> {{ user.role }} </b><br>\n   Ratings:{{ user.ratings }}   <br>\n   {{ user.nearTown}}  <br>\n   Contact Number : {{ user.telephone }} \n </span>\n<br>\n<button ion-button icon-start (click)="toRatePage()">\n  <ion-icon name="star-half"></ion-icon>\n  Give Feedback\n</button>\n<button ion-button (click)="toWorkPage()" >\n  <ion-icon name="star-half"></ion-icon>\n  Send a Job Request  \n</button>\n</span>\n<br><br>\n<b>Feed Backs By Users </b>\n\n<ion-list>\n  <ion-item class="singleFeedback" *ngFor="let feedback of feedbacks">\n    {{feedback.feedback}} <br>\n    <span> By Customer x </span>\n  </ion-item>\n</ion-list>\n<!-- <form align="center">\n    <ion-item>\n        <ion-textarea placeholder="Give Me Your Review!!"></ion-textarea>\n      </ion-item>\n</form> -->\n   </ion-content>'/*ion-inline-end:"/home/hansand/projects/fixit/src/pages/employee/employee.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__app_services_users_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_feedback_service__["a" /* FeedBackService */]])
    ], EmployeePage);
    return EmployeePage;
}());

//# sourceMappingURL=employee.js.map

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShopService = /** @class */ (function () {
    function ShopService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:3000/api/fixit/shops';
    }
    ShopService.prototype.getAllShops = function () {
        return this.http.get(this.baseUrl).map(function (res) { return res.json(); });
    };
    ShopService.prototype.getShopbyId = function (id) {
        return this.http.get(this.baseUrl + '/getid/' + id + '').map(function (res) { return res.json(); });
    };
    ShopService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], ShopService);
    return ShopService;
}());

//# sourceMappingURL=shop.service.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loginShop_loginShop__ = __webpack_require__(367);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WelcomePage = /** @class */ (function () {
    function WelcomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    WelcomePage.prototype.LoginAsPerson = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    WelcomePage.prototype.LoginAsShop = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__loginShop_loginShop__["a" /* LoginShopPage */]);
    };
    WelcomePage.prototype.Signin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signin_signin__["a" /* SigninPage */]);
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'welcome',template:/*ion-inline-start:"/home/hansand/projects/fixit/src/pages/welcome/welcome.html"*/'<ion-header >\n    <ion-navbar color="primary">\n      <ion-title>\n        Welcomexx\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>   \n    <br><br><br><br>\n    <form >\n    <button (click)="LoginAsPerson();" ion-button type="submit" block> Login As Person </button>\n    <br>\n    <button (click)="LoginAsShop();" ion-button type="submit" block> Login As Shop </button>\n    <br>\n    <button (click)="Signin();" ion-button type="submit" block> Sign Up</button>\n  </form>\n  '/*ion-inline-end:"/home/hansand/projects/fixit/src/pages/welcome/welcome.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedBackService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedBackService = /** @class */ (function () {
    function FeedBackService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:3000/api/fixit/feedback';
    }
    FeedBackService.prototype.getFeedback = function (empID) {
        return this.http.get(this.baseUrl + '/empid/' + empID + '').map(function (res) { return res.json(); });
    };
    FeedBackService.prototype.getWorkFeedback = function (id) {
        return this.http.get(this.baseUrl + '/wfeedback/' + id + '').map(function (res) { return res.json(); });
    };
    FeedBackService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], FeedBackService);
    return FeedBackService;
}());

//# sourceMappingURL=feedback.service.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__employee_employee__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_role_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(95);
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
    function SigninPage(navCtrl, RoleService, http, geolocation, alertCtrl) {
        this.navCtrl = navCtrl;
        this.RoleService = RoleService;
        this.http = http;
        this.geolocation = geolocation;
        this.alertCtrl = alertCtrl;
        this.tab = "SigninPage";
        this.getCurrentCordinates().then(function () {
        }, function () { return console.log("rej"); });
    }
    SigninPage_1 = SigninPage;
    SigninPage.prototype.ngOnInit = function () {
        this.getAllRoles();
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
        if (this.name.value &&
            this.email.value &&
            this.telephone.value &&
            this.password.value &&
            this.rolex.value &&
            this.address.value) {
            var body = {
                name: this.name.value,
                email: this.email.value,
                telephone: this.telephone.value,
                password: this.password.value,
                role: this.rolex.value,
                nearTown: this.address.value,
                ratings: 0,
                shopType: this.ShopType.value,
                lat: 5,
                lang: 6
            };
            this.http.post('http://localhost:3000/api/fixit/users', JSON.stringify(body), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                _this.signDoneAlert();
                _this.ServiceList();
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
    //locations 
    SigninPage.prototype.getCurrentCordinates = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */].getPlugin().getCurrentPosition(function (result) {
                _this.position = result.coords;
                console.log(_this.position);
                if (_this.position.length === 0) {
                    reject();
                }
                else {
                    resolve();
                }
            });
        });
        return promise;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('name'),
        __metadata("design:type", Object)
    ], SigninPage.prototype, "name", void 0);
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('shopType'),
        __metadata("design:type", Object)
    ], SigninPage.prototype, "ShopType", void 0);
    SigninPage = SigninPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'signin',template:/*ion-inline-start:"/home/hansand/projects/fixit/src/pages/signin/signin.html"*/'<ion-header >\n    <ion-navbar color="primary">\n      <ion-title>\n        Sign In\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>  \n\n    Register as an User or a Shop\n      <ion-segment class="segmentBase" [(ngModel)]="tab" color="primary" >\n          <ion-segment-button value="SigninPage">\n              User\n            </ion-segment-button>\n            <ion-segment-button value="list">\n              Shop\n            </ion-segment-button>\n      </ion-segment>\n   \n          <div [ngSwitch]="tab">\n     \n            <form *ngSwitchCase="\'SigninPage\'" >\n              <ion-item >\n\n                <ion-label floating>User Name/Shop Name</ion-label>\n                <ion-input type="text"  #name ></ion-input>\n              </ion-item>\n              <ion-item>\n \n                <ion-label floating>Email</ion-label>\n                <ion-input #email type="text"  name="email"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label floating>Password</ion-label>\n                <ion-input #password type="password"  name="password"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label floating>Mobile Number</ion-label>\n                <ion-input #telephone  type="number"  name="telephone"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label floating>Address</ion-label>\n                <ion-input #address type="text"  name="address"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label floating>User Type</ion-label>\n                \n                  <ion-select   #rolex>\n                      <ion-option value="Customer">Customer</ion-option>\n                      <ion-option value="Shop">Shop</ion-option>\n                    <ion-option *ngFor="let role of roles" value="{{role.roleName}}">{{role.roleName}}</ion-option>\n                  </ion-select>\n              </ion-item>\n              <ion-item>\n                  <ion-label floating> Shop Type(you can Skip this if your not Sing In as a Shop) </ion-label>\n                <ion-select   #shopType>\n                <ion-option value="Hardware">Harware</ion-option>\n                <ion-option value="AC">AC</ion-option>\n                <ion-option value="Electric">Electric</ion-option>\n            </ion-select>\n        </ion-item>\n<br><br><br>\n              <span>  Your Current Location Wll be Saved as Your Location.</span>\n              <button (click)="signIn()" ion-button type="submit" block> Sign In </button>\n\n            </form>\n\n            <!-- <form *ngSwitchCase="\'list\'">\n              <ion-item>           \n                <ion-label floating>Shop Name</ion-label>\n                <ion-input type="text"  name="sname"></ion-input>\n              </ion-item>\n\n              <ion-item>           \n                  <ion-label floating>Email</ion-label>\n                  <ion-input type="email"  name="email"></ion-input>\n                </ion-item>\n\n              <ion-item>           \n                <ion-label floating>Password</ion-label>\n                <ion-input type="text"  name="spassword"></ion-input>\n              </ion-item>\n\n              <ion-item>           \n                <ion-label floating>Contact Number</ion-label>\n                <ion-input type="text"  name="scontact"></ion-input>\n              </ion-item>\n\n              <ion-item>           \n                <ion-label floating>Address</ion-label>\n                <ion-input type="text"  name="saddress"></ion-input>\n              </ion-item>\n\n              \n              <button (click)="ServiceList();" ion-button type="submit" block> Register </button>\n\n            </form> -->\n          </div>\n  </ion-content>\n        \n      '/*ion-inline-end:"/home/hansand/projects/fixit/src/pages/signin/signin.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_role_service__["a" /* RoleService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SigninPage);
    return SigninPage;
    var SigninPage_1;
}()); //class end

//# sourceMappingURL=signin.js.map

/***/ })

},[368]);
//# sourceMappingURL=main.js.map