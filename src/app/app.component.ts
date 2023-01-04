import { AccountService } from './account/account.service';
import { BasketService } from './basket/basket.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private basketService: BasketService,
    private accService: AccountService
  ) {}
  title = 'client';
  ngOnInit(): void {
    this.loadBasket();
    this.loadCurrentUser();
  }
  loadBasket() {
    const basketId = localStorage.getItem('basket_id');
    if (basketId) {
      this.basketService.getBasket(basketId).subscribe(
        () => {
          console.log('initialized basket');
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  loadCurrentUser() {
    const token = localStorage.getItem('token');

    this.accService.loadCurrentUser(token).subscribe(
      () => {
        console.log('loaded user');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
