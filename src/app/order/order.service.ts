import { IOrder } from '../shared/models/order';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  baseUrl = 'https://localhost:7157/api/';
  constructor(private http: HttpClient) {}
  getUsersOrders() {
    return this.http.get(this.baseUrl + 'orders');
  }
  getOrderDetailed(id: number) {
    return this.http.get(this.baseUrl + 'orders/' + id);
  }
}
