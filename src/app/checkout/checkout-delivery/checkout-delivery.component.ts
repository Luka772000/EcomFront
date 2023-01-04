import { BasketService } from 'src/app/basket/basket.service';
import { IDeliveryMethod } from '../../shared/models/DeliveryMethod';
import { CheckoutService } from './../checkout.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout-delivery',
  templateUrl: './checkout-delivery.component.html',
  styleUrls: ['./checkout-delivery.component.css'],
})
export class CheckoutDeliveryComponent implements OnInit {
  constructor(private checkoutService: CheckoutService, private basketService:BasketService) {}
  deliveryMethods: IDeliveryMethod[];

  ngOnInit(): void {
    this.checkoutService.getDeliveryMethods().subscribe((dm: any) => {
      this.deliveryMethods = dm;
    },
    error => {
      console.log(error);
    });
  }
  @Input() checkoutForm: FormGroup;
  setShippingPrice(deliveryMethod: IDeliveryMethod) {
    this.basketService.setShippingPrice(deliveryMethod);
  } 
}
