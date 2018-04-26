import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
    selector: 'employee',
    templateUrl: 'employee.html'
  })
  export class EmployeePage {
    constructor(public navCtrl: NavController) {
    }
}