import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Http } from '@angular/http';

@Injectable()
export class WorkService{
    http:any;
    baseUrl:String;

    constructor(http:Http){
        this.http = http;
        this.baseUrl= 'http://localhost:3000/api/fixit/work';
    }

    getWorks(empID){
        return this.http.get(this.baseUrl+'/empid/'+empID+'').map(res => res.json());
      }

}
