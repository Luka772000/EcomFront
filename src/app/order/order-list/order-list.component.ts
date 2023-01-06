import { IOrder } from './../../shared/models/order';
import { OrderService } from '../order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent implements OnInit {
  orders: IOrder[];
  constructor(private orderService: OrderService) {}
  ngOnInit() {
    this.getOrders();
  }
  getOrders() {
    this.orderService.getUsersOrders().subscribe((orders:IOrder[]) => {
      this.orders=orders;
      console.log(orders);
    });
  }
}
