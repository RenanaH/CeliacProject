import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { OrderProductsComponent } from './order-products/order-products.component';
import { OneProductComponent } from './one-product/one-product.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [ProductComponent,
    OrderProductsComponent,
    OneProductComponent,
    CartComponent
  ],
  imports: [CommonModule],
  exports: [ProductComponent,
    OrderProductsComponent,
    OneProductComponent,
    CartComponent
  ]
})
export class OrdersModuleModule { }
