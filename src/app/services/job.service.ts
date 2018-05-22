import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Http } from '@angular/http';

@Injectable()
export class JobService{
    http:any;
    baseUrl:String;

    constructor(http:Http){
        this.http = http;
        this.baseUrl= 'http://localhost:3000/api/fixit/jobs';
    }

    getAllJobs(){
        return this.http.get(this.baseUrl).map(res => res.json()) ;
      }

      getjobByID(id){
        return this.http.get(this.baseUrl+'/'+id+'').map(res=> res.json());
    }

    //   getJobByID(id){
    //     return this.http.get(this.baseUrl+'/getid/'+id+'').map(res=> res.json());
    // }

}