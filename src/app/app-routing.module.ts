import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WhatThisCeliacComponent } from './what-this-celiac/what-this-celiac.component';
import { AboutCeliacCommunityComponent } from './about-celiac-community/about-celiac-community.component';
import { OrderProductsComponent } from './order-products/order-products.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'app-what-this-celiac', component: WhatThisCeliacComponent },
  { path: 'app-about-celiac-community', component: AboutCeliacCommunityComponent },
  { path: 'app-order-products', component: OrderProductsComponent },
 // { path: 'app-contact-us', component: ContactUsComponent }
  { path: 'app-product', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
