import { IBasket, IBasketItem } from './../../models/basket';
import { Observable } from 'rxjs';
import { BasketService } from './../../../basket/basket.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IOrderItem } from '../../models/order';

@Component({
  selector: 'app-basket-sumary',
  templateUrl: './basket-sumary.component.html',
  styleUrls: ['./basket-sumary.component.css'],
})
export class BasketSumaryComponent implements OnInit {
  basket$: Observable<IBasket>;
  @Output() decrement :EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Output() increment :EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Output() remove :EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Input() isBasket = true;
  @Input() items: IBasketItem[] | IOrderItem[] = [];
  @Input() isOrder = false;
  constructor() {}

  ngOnInit(): void {}
  decrementItemQuantity(item: any) {
    this.decrement.emit(item);
  }
  incrementItemQuantity(item: any) {
    this.increment.emit(item);
  }
  removeBasketItem(item: any) {
    this.remove.emit(item);
  }
}
