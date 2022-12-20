import { BasketService } from './../../basket/basket.service';
import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: IProduct= {} as IProduct;
  constructor(private basketService:BasketService) { }
  addItemToBasket(){
    this.basketService.addItemToBasket(this.product);
  }
}
