import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './general-modul/home-page/home-page.component';
import { AboutCeliacCommunityComponent } from './general-modul/about-celiac-community/about-celiac-community.component';
import { WhatThisCeliacComponent } from './general-modul/what-this-celiac/what-this-celiac.component';
import { ContactUsComponent } from './general-modul/contact-us/contact-us.component';
import { ProductComponent } from './orders-module/product/product.component';
import { OrderProductsComponent } from './orders-module/order-products/order-products.component';
import { LoginPageComponent } from './identification-modul/login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { NavigationProjectComponent } from './general-modul/navigation-project/navigation-project.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';

import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatToolbarModule,
} from '@angular/material';
import { OrderProductsOldComponent } from './order-products-old/order-products-old.component';
import { ProductsService } from './orders-module/products.service';
import { AddProductComponent } from './orders-module/add-product/add-product.component';
import { OneProductComponent } from './orders-module/one-product/one-product.component';
import { ConnectionService } from './connection.service';
//import { ChildProductComponent } from './child-product/child-product.component';
import { RegisterPageComponent } from './identification-modul/register-page/register-page.component';

import { CartComponent } from './orders-module/cart/cart.component';
import { OnCeliacComponent } from './general-modul/on-celiac/on-celiac.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutCeliacCommunityComponent,
    WhatThisCeliacComponent,
    ContactUsComponent,
    ProductComponent,
    OrderProductsComponent,
    LoginPageComponent,
    NavigationProjectComponent,
    OrderProductsOldComponent,
    AddProductComponent,
    OneProductComponent,
    //ChildProductComponent,
    RegisterPageComponent,
    CartComponent,
    OnCeliacComponent,
    NavigationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    //server
    HttpClientModule ,
    //material
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatToolbarModule,
    MatCardModule,
    LayoutModule,
    MatTableModule
    // Flex-layout
   // FlexLayoutModule
  ],


  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  exports:[
  MatButtonModule,
  MatCheckboxModule],
  providers: [ProductsService, ConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
