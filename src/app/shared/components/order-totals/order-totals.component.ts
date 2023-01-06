import { Observable } from 'rxjs';
import { BasketService } from './../../../basket/basket.service';
import { IBasketTotals } from './../../models/basket';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-totals',
  templateUrl: './order-totals.component.html',
  styleUrls: ['./order-totals.component.css'],
})
export class OrderTotalsComponent implements OnInit {
  @Input() total: number;
  @Input() shippingPrice: number;
  @Input() subtotal: number;
  constructor() {}
  ngOnInit(): void {
  }
}
