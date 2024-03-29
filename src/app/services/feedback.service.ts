import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Http } from '@angular/http';

@Injectable()
export class FeedBackService{
    http:any;
    baseUrl:String;

    constructor(http:Http){
        this.http = http;
        this.baseUrl= 'http://localhost:3000/api/fixit/feedback';
    }

    getFeedback(empID){
        return this.http.get(this.baseUrl+'/empid/'+empID+'').map(res => res.json());
      }
    
    getWorkFeedback(id){
        return this.http.get(this.baseUrl+'/wfeedback/'+id+'').map(res => res.json());
    }

      

}
