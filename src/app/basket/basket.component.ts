import { Component, OnInit } from '@angular/core';
import { IBasket, IBasketTotals } from '../shared/models/basket';
import { Observable } from 'rxjs';
import { BasketService } from './basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit{
  basket$: Observable<IBasket>;
  basketTotals$: Observable<IBasketTotals>;
  constructor(private basketService: BasketService) { }
  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
  }
  removeBasketItem(item: any) {
    this.basketService.removeItemFromBasket(item);
  }
  incrementItemQuantity(item: any) {
    this.basketService.incrementItemQuantity(item);
  }
  decrementItemQuantity(item: any) {
    this.basketService.decrementItemQuantity(item);
  }
  

}
