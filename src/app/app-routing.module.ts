import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'shop', loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule) },
  {path:'**', redirectTo: 'shop', pathMatch: 'full' },
  

  // { path: '', redirectTo: 'shop', pathMatch: 'full' },
  // { path: 'shop', loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule) },
  // { path: 'basket', loadChildren: () => import('./basket/basket.module').then(m => m.BasketModule) },
  // { path: 'checkout', loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule) },
  // { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  // { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  // { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  // { path: '**', redirectTo: 'shop', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
