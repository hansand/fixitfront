import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Http } from '@angular/http';

@Injectable()
export class ShopService{
    http:any;
    baseUrl:String;

    constructor(http:Http){
        this.http = http;
        this.baseUrl= 'http://localhost:3000/api/fixit/shops';
    }

    getAllShops(){
        return this.http.get(this.baseUrl).map(res => res.json());
      }
    
    getShopbyId(id){
        return this.http.get(this.baseUrl+'/getid/'+id+'').map(res=> res.json());
    }

//     getUsersByRole(role){
//         return this.http.get(this.baseUrl+'/'+role+'').map(res=> res.json());
//     }

//     getUserByID(id){
//         return this.http.get(this.baseUrl+'/getid/'+id+'').map(res=> res.json());
//     }
}
