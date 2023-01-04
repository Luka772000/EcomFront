import { IBasket, IBasketItem } from './../../models/basket';
import { Observable } from 'rxjs';
import { BasketService } from './../../../basket/basket.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-basket-sumary',
  templateUrl: './basket-sumary.component.html',
  styleUrls: ['./basket-sumary.component.css'],
})
export class BasketSumaryComponent implements OnInit {
  basket$: Observable<IBasket>;
  @Output() decrement = new EventEmitter<number>();
  @Output() increment = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>();
  @Input() isBasket = true;
  constructor(private basketService: BasketService) {}

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
  }
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
