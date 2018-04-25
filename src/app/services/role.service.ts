import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Http } from '@angular/http';

@Injectable()
export class RoleService{
    http:any;
    baseUrl:String;

    constructor(http:Http){
        this.http = http;
        this.baseUrl= 'http://localhost:3000/api/fixit/roles';
    }

    getAllRoles(){
        return this.http.get(this.baseUrl).map(res => res.json()) ;
      }

}