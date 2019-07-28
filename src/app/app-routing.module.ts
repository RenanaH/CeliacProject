import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WhatThisCeliacComponent } from "./general-modul/what-this-celiac/what-this-celiac.component";
import { AboutCeliacCommunityComponent } from "./general-modul/about-celiac-community/about-celiac-community.component";
import { OrderProductsComponent } from "./orders-module/order-products/order-products.component";
import { ContactUsComponent } from "./general-modul/contact-us/contact-us.component";
import { ProductComponent } from "./orders-module/product/product.component";
import { OneProductComponent } from "./orders-module/one-product/one-product.component";
import { CartComponent } from "./orders-module/cart/cart.component";
import { RegisterPageComponent } from './identification-modul/register-page/register-page.component';
import { HomePageComponent } from './general-modul/home-page/home-page.component';
import { OnCeliacComponent } from './general-modul/on-celiac/on-celiac.component';

const routes: Routes = [
  { path: "app-what-this-celiac", component: WhatThisCeliacComponent },
  {
    path: "app-about-celiac-community",
    component: AboutCeliacCommunityComponent
  },
  { path: "app-order-products", component: OrderProductsComponent },
  { path: "app-contact-us", component: ContactUsComponent },
  { path: 'app-register-page', component: RegisterPageComponent },
  { path: 'app-home-page', component: HomePageComponent},
  { path: "cart", component: CartComponent },
  { path: "", redirectTo: "app-what-this-celiac", pathMatch: "full" },
  { path: "on-celiac", component: OnCeliacComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
