import { AccountService } from './../../account/account.service';
import { Observable } from 'rxjs';
import { BasketService } from './../../basket/basket.service';
import { Component, OnInit } from '@angular/core';
import { IBasket } from 'src/app/shared/models/basket';
import { IUser } from 'src/app/shared/models/User';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  currentUser$: Observable<IUser>;
  basket$: Observable<IBasket>;
  constructor(private basketService: BasketService,private accService:AccountService) {}
  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
    this.currentUser$ = this.accService.currentUser$;
    console.log(this.currentUser$);
  }
  logout(){
    this.accService.logOut();
  }
  

}
