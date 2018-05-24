import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Http } from '@angular/http';

@Injectable()
export class OrderService{
    http:any;
    baseUrl:String;

    constructor(http:Http){
        this.http = http;
        this.baseUrl= 'http://localhost:3000/api/fixit/order';
    }

    getOrders(empID){
        return this.http.get(this.baseUrl+'/empid/'+empID+'').map(res => res.json());
      }
    
    getOrder(orderID){
        return this.http.get(this.baseUrl+'/'+orderID+'').map(res => res.json());
      }
    
      getOrderByUserId(userID){
        return this.http.get(this.baseUrl+'/userid/'+userID+'').map(res => res.json());
      }
 

}
