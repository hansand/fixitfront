import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Http } from '@angular/http';

@Injectable()
export class JobReqService{
    http:any;
    baseUrl:String;

    constructor(http:Http){
        this.http = http;
        this.baseUrl= 'http://localhost:3000/api/fixit/jobreq';
    }

    getReqByJobId(id){
        return this.http.get(this.baseUrl+'/jobid/'+id+'').map(res=> res.json());
      }

    

}