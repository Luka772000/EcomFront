import { NavigationExtras, Router } from '@angular/router';
import { IOrder } from './../../shared/models/order';
import { IBasket } from './../../shared/models/basket';
import { ToastrService } from 'ngx-toastr';
import { CheckoutService } from './../checkout.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BasketService } from 'src/app/basket/basket.service';

@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrls: ['./checkout-payment.component.css'],
})
export class CheckoutPaymentComponent implements OnInit {
  constructor(
    private basketService: BasketService,
    private checkoutService: CheckoutService,
    private toastr: ToastrService,
    private router:Router
  ) {}
  ngOnInit(): void {}
  @Input() checkoutForm: FormGroup;
  submitOrder() {
    const basket = this.basketService.getCurrentBasketValue();
    const orderToCreate = this.getOrderToCreate(basket);
    this.checkoutService.createOrder(orderToCreate).subscribe(
      (order: IOrder) => {
        this.toastr.success('Order created successfully');
        this.basketService.deleteLocalBasket(basket.id);
        const navigationExtras: NavigationExtras = { state: order };
        this.router.navigate(['checkout/success', navigationExtras]);
      },
      (error) => {
        this.toastr.error(error.message);
        console.log(error);
      }
    );
  }
  getOrderToCreate(basket: IBasket) {
    return {
      basketId: basket.id,
      deliveryMethodId: +this.checkoutForm
        .get('deliveryForm')
        .get('deliveryMethod').value,
      shipToAddress: this.checkoutForm.get('addressForm').value,
    };
  }
}
