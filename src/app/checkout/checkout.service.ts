import { IOrderToCreate } from './../shared/models/order';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { IDeliveryMethod } from '../shared/models/DeliveryMethod';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  baseUrl = 'https://localhost:7157/api/';
  constructor(private http: HttpClient) {}
  createOrder(order:IOrderToCreate){
    return this.http.post(this.baseUrl + 'orders', order);
  }

  getDeliveryMethods() {
    return this.http.get(this.baseUrl + 'orders/deliveryMethods').pipe(
      map((dm: IDeliveryMethod[]) => {
        return dm.sort((a, b) => b.price - a.price);
      })
    );
  }
}
