import { SharedModule } from './../shared/shared.module';
import { OrderListComponent } from './order-list/order-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-list-routing.module';
import { OrderDetailsComponent } from './order-details/order-details.component';



@NgModule({
  declarations: [OrderListComponent, OrderDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
