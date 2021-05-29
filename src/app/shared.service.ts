import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) { }
  public orders = new Subject<any>();

  getProductsData(){
    let api ='./assets/items.json'
    return this.http.get(api)
  }

  getStoresData(){
    let api ='./assets/stores.json'
    return this.http.get(api)
  }

  addOrder(item: object) {
    this.orders.next(item);
  }

  clearOrders() {
    this.orders.next();
    console.log(this.orders)
  }

  getData(): Observable<any> {
    return this.orders.asObservable();
  }

}
